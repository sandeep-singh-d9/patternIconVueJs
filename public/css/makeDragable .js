'use strict';

import { KEventTarget, KEvent } from './events';
import tinycolor = require('tinycolor2');
import _uiSlider = require('./uiSlider');
import * as kanva from './kanva';

const DEG = 180 / Math.PI;

class KPolar extends kanva.KShape {
    private polarBitmap: ImageData | null;
    private polarBitmapWithBrightness: ImageData | null;
    /** brightness between 0 and 1 */
    private _brightness: number;

    constructor(public cx: number, public cy: number, public r: number, brightness: number, properties: kanva.NodeProperties = {}) {
        super(properties);
        this.polarBitmap = null;
        this._brightness = brightness;
        this.path = this.toPath2D();
    }

    public set brightness(b: number) {
        this._brightness = b;
        this.dispatchChange();
        this.polarBitmapWithBrightness = null;
    }

    public get brightness(): number {
        return this._brightness;
    }

    clone(): KPolar {
        let cloned = new KPolar(this.cx, this.cy, this.r, this.brightness, this.properties);
        this.initClone(cloned);
        return cloned;
    }

    toPath2D(): Path2D {
        let path = new Path2D();
        path.arc(this.cx, this.cy, this.r, 0, 2 * Math.PI, false);
        return path;
    }

    initPolarBitmap(ctx: CanvasRenderingContext2D): void {
        let radiusPx = this.r * (ctx.canvas as any).ratio || 1,
            diameterPx = 2 * radiusPx;
        let start_time = performance.now();
        let offset = 0;
        this.polarBitmap = ctx.createImageData(diameterPx, diameterPx);
        let data = this.polarBitmap.data,
            delta = 1.0 / diameterPx;
        for (let j = 0; j < diameterPx; j++) {
            let y = (radiusPx - j) * 1.0 / radiusPx,
                w = Math.cos(Math.asin(y)) * radiusPx,
                rmini = Math.max(0, radiusPx - w - 4),
                rmaxi = Math.min(diameterPx, radiusPx + w + 4),
                mini = Math.floor(rmini),
                maxi = Math.ceil(rmaxi);
            offset = 4 * (j * diameterPx + mini);
            for (let i = mini; i < maxi; i++) {
                let x = (i - radiusPx) * 1.0 / radiusPx,
                    r = Math.sqrt(x * x + y * y),
                    angle = Math.atan2(y, x),
                    hue = angleToHue(angle),
                    saturation = Math.min(r, 1),
                    color = hsvToRgb(hue, saturation * 100, 100),
                    // color = xyzToRgb(labToXyz([70, x * 127, y * 128])),
                    alpha = 255;

                if (r >= 1 + delta) {
                    alpha = 0;
                }
                else if (r >= 1 - delta && r <= 1 + delta) {
                    alpha = Math.ceil(255 * (1 + delta - r) / (2 * delta));
                }

                data[offset++] = color.r;
                data[offset++] = color.g;
                data[offset++] = color.b;
                data[offset++] = alpha;
            }
        }
        var end_time = performance.now();
        console.log('started', start_time, 'ms');
        console.log('Generate bitmap: ', (end_time - start_time) + 'ms');
    }

    // v [0, 255]
    limitBrightness(ctx: CanvasRenderingContext2D, img: ImageData): ImageData {
        let img2 = ctx.createImageData(img.width, img.height),
            data = img.data,
            data2 = img2.data,
            v = this.brightness;
        data2.set(data);

        for (var i = 0, ii = data2.length; i < ii;) {
            data2[i++] *= v;
            data2[i++] *= v;
            data2[i++] *= v;
            i++;
        }

        return img2;
    }

    renderContent(ctx: CanvasRenderingContext2D): void {
        if (!this.polarBitmap) {
            this.initPolarBitmap(ctx);
        }

        if (!this.polarBitmapWithBrightness) {
            this.polarBitmapWithBrightness = this.limitBrightness(ctx, this.polarBitmap!);
        }

        ctx.putImageData(this.polarBitmapWithBrightness, 0, 0);
    }
}

enum ColorSelectorStatus {
    VISIBLE,
    INVISIBLE,
    SELECTED
};

class KPolarSelector extends kanva.KContainer {
    private status: ColorSelectorStatus;
    private linked: boolean;
    private innerCircle: kanva.KCircle;
    private outerCircle: kanva.KCircle;
    private line: kanva.KLine;

    // angle is in radians, radius from [0, 1]
    constructor(public angle: number, public radius: number, private center: kanva.IPoint, private maxRadius: number) {
        super();
        this.add(this.line = new kanva.KLine(center.x + '', center.y + '', '0', '0', { fill: 'none', stroke: tinycolor('#000000'), strokeWidth: 1, display: 'none' }));
        this.add(this.outerCircle = new kanva.KCircle('0', '0', '6', { fill: 'none', stroke: tinycolor('#000000'), strokeWidth: 1 }));
        this.add(this.innerCircle = new kanva.KCircle('0', '0', '5', { fill: 'none', stroke: tinycolor('#ffffff'), strokeWidth: 1 }));
        this.status = ColorSelectorStatus.INVISIBLE;
        this.linked = false;
        this.setCurrentPos(angle, radius);
        this.makeDraggable();
    }

    public setStatus(status: ColorSelectorStatus) {
        this.status = status;

        switch (status) {
            case ColorSelectorStatus.INVISIBLE:
                this.setProperties({ display: 'none' });
                break;

            case ColorSelectorStatus.VISIBLE:
                this.setProperties({ display: 'inline' });
                this.outerCircle.setProperties({ strokeWidth: 1 });
                this.innerCircle.setProperties({ strokeWidth: 1 });
                this.outerCircle.r = '6';
                this.innerCircle.r = '5';
                this.setCurrentPos(this.angle, this.radius); // we have to redraw the lines
                break;

            case ColorSelectorStatus.SELECTED:
                this.setProperties({ display: 'inline' });
                this.outerCircle.setProperties({ strokeWidth: 3 });
                this.innerCircle.setProperties({ strokeWidth: 2 });
                this.outerCircle.r = '9';
                this.innerCircle.r = '8';
                this.setCurrentPos(this.angle, this.radius); // we have to redraw the lines
                break;
        }

        this.dispatchEvent(KEvent.fromType('change-color'));
    }

    public getStatus() {
        return this.status;
    }

    public setLinked(linked: boolean) {
        this.linked = linked;
        if (linked) {
            this.line.setProperties({ display: 'inline' });
        }
        else {
            this.line.setProperties({ display: 'none' });
        }
    }

    public getLinked() {
        return this.linked;
    }

    public setCurrentPos(angle: number, radius: number): void {
        while (angle < 0) {
            angle += 2 * Math.PI;
        }
        angle %= 2 * Math.PI;
        radius = Math.min(Math.max(radius, 0), 1);

        this.angle = angle;
        this.radius = radius;
        let r1 = this.radius * this.maxRadius;
        let r2 = Math.max(0, r1 - parseInt(this.outerCircle.r));
        let c = Math.cos(angle);
        let s = -Math.sin(angle);
        let xyCircle = new kanva.Point(r1 * c, r1 * s).plus(this.center);
        let xyLine = new kanva.Point(r2 * c, r2 * s).plus(this.center);
        this.innerCircle.setOffset(xyCircle);
        this.outerCircle.setOffset(xyCircle);
        this.line.x2 = xyLine.x + '';
        this.line.y2 = xyLine.y + '';
    }

    public getPos(): kanva.PointRef {
        let r = this.radius * this.maxRadius;
        return new kanva.PointRef(this.center.x + r * Math.cos(this.angle), this.center.y - r * Math.sin(this.angle), this.parentNode);
    }

    public setPos(xy: kanva.IPoint) {
        let dx = (xy.x - this.center.x) / this.maxRadius;
        let dy = (xy.y - this.center.y) / this.maxRadius;
        this.setCurrentPos(Math.atan2(-dy, dx), Math.sqrt(dx * dx + dy * dy));
    }

    public makeDraggable(): void {
        let deltaPos: kanva.PointRef;

        this.setCursor('move');

        this.addEventListener('dragstart', (ev: kanva.KDragEvent) => {
            let mousePos = ev.point.getWithRef(this.parentNode);
            let prevPos = this.getPos();
            deltaPos = mousePos.minus(prevPos);
            this.setStatus(ColorSelectorStatus.SELECTED);
        });

        this.addEventListener('dragmove', (ev: kanva.KDragEvent) => {
            let newPos = ev.point.minus(deltaPos).getWithRef(this.parentNode),
                prevAngle = this.angle,
                prevRadius = this.radius;
            this.setPos(newPos);
            this.dispatchEvent(KEvent.fromType('change-color').setExtra({ da: this.angle - prevAngle, dr: this.radius - prevRadius }));
        });
    }
}

export default class MultiColorPicker extends KEventTarget {
    colors: tinycolorInstance[];
    colorSelectors: KPolarSelector[];
    selectedColorIdx: number;
    scene: kanva.Scene;
    layer: kanva.Layer;
    wheelBrightness: number;
    private wheelCenter: kanva.PointRef;
    private wheelRadius: number;
    private htmlColorsContainer: HTMLElement | null;
    private htmlPickerWrapper: HTMLElement;
    private htmlPickerBind: HTMLElement;
    private linked: boolean;
    private brightnessSlider: any;
    private pickerHex: HTMLElement;
    private colorHexInput: HTMLInputElement;
    private colorHexPreview: HTMLElement;
    private hsbCircle: KPolar;

    constructor(container: HTMLElement, showColorList = true, colorPickerWidth = 240, colorPickerHeight = 240) {
        super();

        this.createInnerHtml(container);
        this.colorSelectors = [];
        this.colors = [];
        this.htmlColorsContainer = container.querySelector('.editable-colors') as HTMLElement;
        this.selectedColorIdx = -1;
        this.linked = false;

        let canvas = document.createElement('canvas');
        canvas.width = colorPickerWidth;
        canvas.height = colorPickerHeight;
        this.htmlPickerWrapper = container.querySelector('.picker') as HTMLElement;
        this.htmlPickerBind = this.htmlPickerWrapper.querySelector('.picker-bind') as HTMLElement;
        let pickerColor = this.htmlPickerWrapper.querySelector('.picker-color')!,
            bindCheckbox = this.htmlPickerBind.querySelector('input[name=bind]') as HTMLInputElement;
        bindCheckbox.checked = this.linked;
        pickerColor.appendChild(canvas);
        bindCheckbox.addEventListener('change', (ev) => {
            this.setLinked(bindCheckbox.checked);
        });

        this.scene = new kanva.Scene(canvas);
        this.layer = new kanva.Layer();
        this.scene.addLayer(this.layer);
        let r = Math.floor(Math.max(colorPickerWidth / 2.0, colorPickerHeight / 2.0));
        this.wheelCenter = new kanva.PointRef(r, r, null);
        this.wheelRadius = r;

        this.hsbCircle = new KPolar(r, r, r, 1);
        this.layer.addNode(this.hsbCircle);
        this.hsbCircle.addEventListener('click', (ev) => {
            if (this.colorSelectors.length == 1) {
                this.colorSelectors[0].setPos({ x: ev.offsetX, y: ev.offsetY });
                this.colorSelectors[0].dispatchEvent(KEvent.fromType('change-color'));
            }
        });

        this.pickerHex = this.htmlPickerWrapper.querySelector('.picker-hex') as HTMLElement,
        this.colorHexInput = this.pickerHex.querySelector('input') as HTMLInputElement,
        this.colorHexPreview = this.pickerHex.querySelector('.picker-current') as HTMLElement;

        const onInputChange = (ev: Event) => {
            let v = this.colorHexInput.value.trim();
            if (v && v.match(/^[0-9a-fA-F]{6}$/)) {
                const selectedColorIdx = this.selectedColorIdx;
                this.colors[this.selectedColorIdx] = tinycolor(v);
                this.setColors(this.colors);
                this.selectColor(selectedColorIdx);
                this.updateUiOnColorChange(selectedColorIdx);
            }
        };

        this.colorHexInput.addEventListener('change', onInputChange);
        this.colorHexInput.addEventListener('input', onInputChange);

        this.brightnessSlider = new _uiSlider(container.querySelector('.picker-brightness'), {
            min: 0,
            max: 1,
            default: 0.5,
            decimals: 5,
            orientation: 'vertical',
            showResult: false
        });
        this.brightnessSlider.init();
        this.brightnessSlider.Input.addEventListener('change', (ev: UIEvent) => {
            if (this.selectedColorIdx >= 0 && this.selectedColorIdx < this.colors.length) {
                let brightness = this.brightnessSlider.result,
                    hsv = this.colors[this.selectedColorIdx].toHsv();
                hsv.v = brightness;
                this.colors[this.selectedColorIdx] = tinycolor(hsv);
                this.updateUiOnColorChange(this.selectedColorIdx);
                this.dispatchEvent(KEvent.fromType('change'));
            }
        });
    }

    private setLinked(linked: boolean) {
        let bindCheckbox = this.htmlPickerBind.querySelector('input') as HTMLInputElement;
        if (bindCheckbox.checked !== linked) {
            bindCheckbox.checked = linked;
        }

        this.linked = linked;
        for (let cs of this.colorSelectors) {
            cs.setLinked(linked);
        }
    }

    private createInnerHtml(container: HTMLElement) {
        let innerHTML = `
            <div class="picker">
                <div class="picker-color"></div>
                <div class="picker-brightness slider-wrapper slider-vertical nostyle"></div>
                <label class="picker-bind checkbox-hidden">
                    <input type="checkbox" name="bind">
                    <svg class="icon-bind"><use xlink:href="#icon-bind"/></svg>
                    <svg class="icon-bind-active"><use xlink:href="#icon-bind-active"/></svg>
                </label>
                <div class="picker-hex">
                    <span class="picker-current"></span>
                    <input type="text" name="color" maxlength="6" />
                </div>
            </div>
            `;
        /*
        if (this.showColorList) {
            innerHTML += '<ul class="colors colors-menu editable-colors"></ul>';
        }
        innerHTML += `
            <h6>Default Palette</h6>
            <ul class="colors colors-menu">
                <li class="color color-light"><button data-value="fff" style="background-color:#fff;" class="nostyle"></button></li>
                <li class="color"><button data-value="E4D77F" style="background-color:#f5685d;" class="nostyle"></button></li>
                <li class="color"><button data-value="ec4a81" style="background-color:#ec4a81;" class="nostyle"></button></li>
                <li class="color"><button data-value="af51bf" style="background-color:#af51bf;" class="nostyle"></button></li>
                <li class="color"><button data-value="34b9f5" style="background-color:#34b9f5;" class="nostyle"></button></li>
                <li class="color"><button data-value="4caf50" style="background-color:#4caf50;" class="nostyle"></button></li>
                <li class="color"><button data-value="000" style="background-color:#000;" class="nostyle"></button></li>
            </ul>
            `;
        */
        container.innerHTML = innerHTML;
    }

    getColors(): tinycolorInstance[] {
        return this.colors;
    }

    private createColorSelector(color: tinycolorInstance): KPolarSelector {
        let hsv = color.toHsv(),
            selector = new KPolarSelector(hueToAngle(hsv.h), hsv.s, this.wheelCenter, this.wheelRadius);
        selector.setLinked(this.linked);
        return selector;
    }

    private updateUiOnColorChange(colorIdx: number): void {
        const colorSelector = this.colorSelectors[colorIdx],
            colorPreview = this.htmlColorsContainer ? this.htmlColorsContainer.children[colorIdx] as HTMLElement : null,
            prevColor = this.colors[colorIdx],
            brightness = prevColor.toHsv().v,
            currentColor = tinycolor({ h: angleToHue(colorSelector.angle), s: colorSelector.radius, v: brightness }),
            currentColorHex = currentColor.toHex();

        if (this.selectedColorIdx !== colorIdx && colorSelector.getStatus() === ColorSelectorStatus.SELECTED) {
            if (this.selectedColorIdx >= 0 && this.selectedColorIdx < this.colorSelectors.length) {
                this.colorSelectors[this.selectedColorIdx].setStatus(ColorSelectorStatus.VISIBLE);
            }
            this.selectedColorIdx = colorIdx;
        }

        this.brightnessSlider.setValue(brightness);
        this.hsbCircle.brightness = brightness;

        if (colorPreview) {
            const colorPreviewSpan = colorPreview.querySelector('span')!;
            colorPreviewSpan.style.backgroundColor = '#' + currentColorHex;

            if (colorSelector.getStatus() === ColorSelectorStatus.SELECTED) {
                colorPreviewSpan.classList.add('active');
            }
            else {
                colorPreviewSpan.classList.remove('active');
            }
        }

        if (colorSelector.getStatus() === ColorSelectorStatus.SELECTED) {
            this.colorHexInput.value = currentColorHex;
            this.colorHexPreview.style.backgroundColor = '#' + currentColorHex;

            if (brightness > 245) {
                this.pickerHex.classList.add('color-light');
            }
            else {
                this.pickerHex.classList.remove('color-light');
            }
        }

        this.colors[colorIdx] = currentColor;
    }

    setColors(colors: tinycolorInstance[]) {
        this.colors = colors;

        if (this.htmlColorsContainer) {
            this.htmlColorsContainer.innerHTML = '';
        }

        for (let colorSelector of this.colorSelectors) {
            this.layer.removeNode(colorSelector);
        }
        this.colorSelectors = [];

        if (this.colors.length == 1) {
            this.hsbCircle.setCursor('pointer');
            this.htmlPickerBind.classList.add('hidden');
        }
        else {
            this.hsbCircle.setCursor('auto');
            this.htmlPickerBind.classList.remove('hidden');
        }

        for (let i = 0, ii = this.colors.length; i < ii; i++) {
            let color = this.colors[i],
                colorIdx = i,
                colorHex = color.toHex(),
                colorSelector = this.createColorSelector(color),
                colorPreview: null | HTMLElement = null;

            colorSelector.addEventListener('change-color', (ev: KEvent) => {
                let prevColor = this.colors[colorIdx];
                this.updateUiOnColorChange(colorIdx);

                if (colorSelector.getLinked() && ev.extra && 'da' in ev.extra && 'dr' in ev.extra) {
                    for (let linkedIdx = 0, lii = this.colorSelectors.length; linkedIdx < lii; linkedIdx++) {
                        let cs = this.colorSelectors[linkedIdx];
                        if (cs.getLinked() && cs !== colorSelector) {
                            cs.setCurrentPos(cs.angle + ev.extra['da'], cs.radius + ev.extra['dr']);
                            this.updateUiOnColorChange(linkedIdx);
                        }
                    }
                    this.dispatchEvent(KEvent.fromType('change'));
                }
                else if (prevColor.toHex() !== this.colors[colorIdx].toHex()) {
                    this.dispatchEvent(KEvent.fromType('change'));
                }
            });

            this.colorSelectors.push(colorSelector);
            this.layer.addNode(colorSelector);

            if (this.colors.length > 1) {
                colorPreview = document.createElement('li');
                colorPreview.className = 'color' + (color.getBrightness() > 245 ? ' color-light' : '');
                colorPreview.innerHTML = `<span data-value="${colorHex}" style="background-color:#${colorHex}"></span></li>`;
                colorPreview.addEventListener('click', (ev) => {
                    colorSelector.setStatus(ColorSelectorStatus.SELECTED);
                });
                if (this.htmlColorsContainer) {
                    this.htmlColorsContainer.appendChild(colorPreview);
                }
            }
        }

        if (this.colorSelectors) {
            this.selectColor(0);
        }
    }

    selectColor(idx: number) {
        this.colorSelectors[idx].setStatus(ColorSelectorStatus.SELECTED);
    }
};

function angleToHue(angle: number): number {
    let x = (angle < 0 ? angle + 2 * Math.PI : angle) * DEG;
    return x < 180 ? 0.055901699 * Math.pow(x, 1.5) : (x - 72) / 0.8;
}

function hueToAngle(hue: number): number {
    return (hue < 135 ? Math.exp(Math.log(hue / 0.055901699) / 1.5) : hue * 0.8 + 72) / DEG;
}

function bound01(n: number, max: number): number {
    n = Math.min(max, Math.max(0, n));

    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    return (n % max) / max;
}

/*
function xyToColor(x: number, y: number, center: kanva.IPoint, radius: number, brightness: number): ColorFormats.RGBA {
    let delta = 1.0 / (radius * 2),
        y0 = (center.y - y) * 1.0 / radius,
        w = Math.cos(Math.asin(y0)) * radius,
        x0 = (x - center.x) * 1.0 / radius,
        angle = Math.atan2(y0, x0),
        hue = angleToHue(angle),
        r = Math.sqrt(x0 * x0 + y0 * y0),
        saturation = Math.min(r, 1),
        color = hsvToRgb(hue, saturation * 100, brightness);

    if (r >= 1 + delta) {
        color.a = 0;
    }
    else if (r >= 1 - delta && r <= 1 + delta) {
        color.a = Math.ceil(255 * (1 + delta - r) / (2 * delta));
    }

    return color;
}

function colorToXy(color: tinycolorInstance, center: kanva.IPoint, radius: number): kanva.IPoint {
    let c = color.toHsv();
    let a = hueToAngle(c.h);
    return { x: center.x + c.s * radius * Math.cos(a), y: center.y - c.s * radius * Math.sin(a) };
}
*/
function hsvToRgb(h: number, s: number, v: number): ColorFormats.RGBA {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255, a: 255 };
}

/*
function labToXyz(lab: number[]) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var y = (l + 16) / 116;
    var x = a / 500 + y;
    var z = y - b / 200;

    var y2 = Math.pow(y, 3);
    var x2 = Math.pow(x, 3);
    var z2 = Math.pow(z, 3);

    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

    x *= 95.047;
    y *= 100;
    z *= 108.883;

    return [x, y, z];
};

function xyzToRgb(xyz: number[]) {
    var x = xyz[0] / 100;
    var y = xyz[1] / 100;
    var z = xyz[2] / 100;
    var r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
    var g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
    var b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

    // assume sRGB
    r = r > 0.0031308
        ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
        : r *= 12.92;

    g = g > 0.0031308
        ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
        : g *= 12.92;

    b = b > 0.0031308
        ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
        : b *= 12.92;

    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);

    return [r * 255, g * 255, b * 255];
};
*/


/** WEBPACK FOOTER **
 ** ./js/lib/multi-color-picker.ts
 **/