import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        rightBodyBackground: '255, 255, 255,1',
        background: '101, 81, 60,1',
        background1: '130, 105, 64, 1',
        background2: '255, 255, 255 , 1',
        svgName: '',
        AnimalIconArray: [],
        urlSvg: '',
        urlSvgArray: [],
        divData: [],
        SvgComponent: [],
        dynamicIndex: '',
        editSvgClicked: false,
        dynamicName: '',
        showColor: false,
        ClickedSvg: '',
        newDisableIndex: '',
        OpenNavigationElement: 'search',
        tempModalIndex: '',
        Savefcloader: '',
        popUpOpen: '',
        RandomClicked: false,
        downloadImageWidth: 1275,
        downloadImageHeight: 580,
        randomFirstSvg: '',
        randomYAxis: '',
        randomXAxis: '',
        randomIndexElement: '',
        b64Image: '',
        showProgressBar: false,
        progressComplete: false,
        loaderDisplay: false,
        progressValue: '',
        color1: [

        ],
        ElementName: '',
    },
    getters: {},
    mutations: {
        CHANGE_STATE(state, value) {
            state[value[0]] = value[1]
        },
        SVG_PUSH_TO_SVG_ARRAY(state, value) {
            var tempArray = []
            if (value == "BullDogSvg") {
                tempArray = [
                    {
                        name: value,
                        background: '101, 81, 60,1',
                        background1: '130, 105, 64, 1',
                        background2: '255, 255, 255 , 1',
                        background3: '156, 127, 77 , 1',
                        background4: '51, 62, 72 , 1',
                        background5: '250, 223, 141, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Hippo") {
                tempArray = [
                    {
                        name: value,
                        background: '95, 117, 133,1',
                        background1: '125, 134, 140, 1',
                        background2: '251, 226, 152 , 1',
                        background3: '124, 152, 171, 1',
                        background4: '255, 156, 159, 1',
                        background5: '51, 62, 72, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,

                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }

            if (value == "Llama") {
                tempArray = [
                    {
                        name: value,
                        background: '95, 117, 133,1',
                        background1: '200, 201, 201, 1',
                        background2: '51, 62, 72 , 1',
                        background3: '218, 219, 220, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Mouse") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 156, 159,1',
                        background1: '125, 134, 140, 1',
                        background2: '51, 62, 72 , 1',
                        background3: '92, 102, 112, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Squirrel") {
                tempArray = [
                    {
                        name: value,
                        background: '130, 105, 64,1',
                        background1: '156, 127, 77, 1',
                        background2: '101, 81, 60 , 1',
                        background3: '225, 203, 129, 1',
                        background4: '51, 62, 72, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Atom") {
                tempArray = [
                    {
                        name: value,
                        background: '248, 186, 50, 1',
                        background1: '236, 4, 0, 1',
                        background2: '123, 209, 23, 1',
                        background3: '12, 204, 197, 1',
                        background4: '198, 34, 33, 1',
                        background5: '255, 255, 204, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Calculator") {
                tempArray = [
                    {
                        name: value,
                        background: '228, 231, 237, 1',
                        background1: '79, 89, 97, 1',
                        background2: '255, 255, 255, 1',
                        background3: '110, 198, 191, 1',
                        background4: '55, 66, 77, 1',
                        background5: '79, 89, 97, 1',
                        background6: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Compass") {
                tempArray = [
                    {
                        name: value,
                        background: '39, 162, 219, 1',
                        background1: '246, 195, 88, 1',
                        background2: '68, 196, 161, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Proctor") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 208, 84, 1',
                        background1: '204, 89, 32, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Ruler") {
                tempArray = [
                    {
                        name: value,
                        background: '105, 5, 137, 1',
                        background1: '252, 194, 76, 1',
                        background2: '252, 224, 106, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "School") {
                tempArray = [
                    {
                        name: value,
                        background: '169, 17, 0, 1',
                        background1: '210, 59, 35, 1',
                        background2: '255, 208, 129, 1',
                        background3: '243, 220, 195, 1',
                        background4: '213, 237, 239, 1',
                        background5: '137, 102, 76, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "SchoolBus") {
                tempArray = [
                    {
                        name: value,
                        background: '246, 146, 30, 1',
                        background1: '246, 229, 70, 1',
                        background2: '116, 214, 248, 1',
                        background3: '84, 86, 86, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Books") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 181, 186, 1',
                        background1: '255, 187, 51, 1',
                        background2: '255, 109, 59, 1',
                        background3: '38, 46, 60, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "TestTube") {
                tempArray = [
                    {
                        name: value,
                        background: '227, 6, 19, 1',
                        background1: '125, 185, 40, 1',
                        background2: '201, 149, 16, 1',
                        background3: '186, 250, 255, 1',
                        background4: '0, 110, 170, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "WorldGlobe") {
                tempArray = [
                    {
                        name: value,
                        background: '39, 162, 219, 1',
                        background1: '252, 212, 98, 1',
                        background2: '68, 196, 161, 1',
                        background3: '235, 240, 243, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Beagle") {
                tempArray = [
                    {
                        name: value,
                        background: '186, 95, 63, 1',
                        background1: '66, 47, 36, 1',
                        background2: '113, 72, 46, 1',
                        background3: '236, 236, 236, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Boxer") {
                tempArray = [
                    {
                        name: value,
                        background: '49, 41, 37, 1',
                        background1: '21, 19, 3, 1',
                        background2: '176, 114, 74, 1',
                        background3: '146, 97, 77, 1',
                        background4: '41, 41, 41, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BullDog") {
                tempArray = [
                    {
                        name: value,
                        background: '101, 68, 43, 1',
                        background1: '126, 66, 14, 1',
                        background2: '196, 142, 73, 1',
                        background3: '159, 86, 23, 1',
                        background4: '255, 255, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "FrenchBullDog") {
                tempArray = [
                    {
                        name: value,
                        background: '65, 59, 54, 1',
                        background1: '57, 53, 52, 1',
                        background2: '215, 148, 228, 1',
                        background3: '232, 224, 166, 1',
                        background4: '74, 74, 74, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "GermanShepherd") {
                tempArray = [
                    {
                        name: value,
                        background: '71, 55, 40, 1',
                        background1: '63, 51, 43, 1',
                        background2: '213, 156, 95, 1',
                        background3: '169, 125, 84, 1',
                        background4: '19, 7, 5, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "GoldenRetriever") {
                tempArray = [
                    {
                        name: value,
                        background: '186, 108, 36, 1',
                        background1: '242, 153, 58, 1',
                        background2: '245, 171, 82, 1',
                        background3: '28, 11, 1, 1',
                        background4: '12, 11, 3, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Labrador") {
                tempArray = [
                    {
                        name: value,
                        background: '254, 233, 204, 1',
                        background1: '231, 211, 184, 1',
                        background2: '243, 133, 172, 1',
                        background3: '186, 74, 114, 1',
                        background4: '17, 15, 13, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Poodle") {
                tempArray = [
                    {
                        name: value,
                        background: '238, 229, 214, 1',
                        background1: '203, 166, 124, 1',
                        background2: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Rottweiler") {
                tempArray = [
                    {
                        name: value,
                        background: '48, 48, 48, 1',
                        background1: '58, 58, 58, 1',
                        background2: '208, 130, 36, 1',
                        background3: '177, 105, 27, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "YorkshireTerrier") {
                tempArray = [
                    {
                        name: value,
                        background: '198, 160, 104, 1',
                        background1: '144, 9, 10, 1',
                        background2: '214, 185, 142, 1',
                        background3: '39, 39, 39, 1',
                        background4: '237, 157, 158, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Bathtub") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 118, 190, 1',
                        background1: '187, 227, 238, 1',
                        background2: '227, 42, 23, 1',
                        background3: '253, 203, 102, 1',
                        background4: '229, 184, 94, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "FoldedTowels") {
                tempArray = [
                    {
                        name: value,
                        background: '41, 156, 210, 1',
                        background1: '28, 117, 161, 1',
                        background2: '252, 212, 98, 1',
                        background3: '246, 195, 88, 1',
                        background4: '208, 82, 65, 1',
                        background5: '228, 99, 83, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Handsoap") {
                tempArray = [
                    {
                        name: value,
                        background: '253, 203, 102, 1',
                        background1: '229, 184, 94, 1',
                        background2: '255, 125, 157, 1',
                        background3: '0, 118, 190, 1',
                        background4: '0, 162, 224, 1',
                        background5: '227, 42, 23, 1',
                        background6: '233, 197, 186, 1',
                        background7: '210, 176, 168, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Raser") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 118, 190, 1',
                        background1: '0, 171, 227, 1',
                        background2: '240, 241, 241, 1',
                        background3: '214, 214, 212, 1',
                        background4: '63, 142, 121, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "RubberDuck") {
                tempArray = [
                    {
                        name: value,
                        background: '227, 42, 23, 1',
                        background1: '191, 24, 11, 1',
                        background2: '253, 203, 102, 1',
                        background3: '253, 253, 253, 1',
                        background4: '229, 184, 94, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Sink") {
                tempArray = [
                    {
                        name: value,
                        background: '227, 42, 23, 1',
                        background1: '187, 227, 238, 1',
                        background2: '0, 118, 190, 1',
                        background3: '132, 188, 254, 1',
                        background4: '253, 203, 102, 1',
                        background5: '229, 184, 94, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Toilet") {
                tempArray = [
                    {
                        name: value,
                        background: '228, 228, 228, 1',
                        background1: '0, 118, 190, 1',
                        background2: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "ToiletPaper") {
                tempArray = [
                    {
                        name: value,
                        background: '187, 227, 238, 1',
                        background1: '0, 118, 190, 1',
                        background2: '255, 125, 157, 1',
                        background3: '203, 203, 203, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Toothbrush") {
                tempArray = [
                    {
                        name: value,
                        background: '187, 227, 238, 1',
                        background1: '0, 171, 227, 1',
                        background2: '240, 241, 241, 1',
                        background3: '255, 125, 157, 1',
                        background4: '0, 118, 190, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Towelonholder") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 125, 157, 1',
                        background1: '218, 218, 216, 1',
                        background2: '0, 171, 227, 1',
                        background3: '0, 118, 190, 1',
                        background4: '187, 227, 238, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Boillingport") {
                tempArray = [
                    {
                        name: value,
                        background: '250, 171, 0, 1',
                        background1: '41, 39, 33, 1',
                        background2: '66, 62, 53, 1',
                        background3: '194, 67, 86, 1',
                        background4: '178, 22, 45, 1',
                        background5: '250, 188, 61, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Butcherknife") {
                tempArray = [
                    {
                        name: value,
                        background: '232, 232, 232, 1',
                        background1: '7, 112, 191, 1',
                        background2: '0, 145, 251, 1',
                        background3: '174, 218, 248, 1',
                        background4: '44, 66, 107, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cheesegrater") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 116, 188, 1',
                        background1: '42, 180, 229, 1',
                        background2: '238, 242, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "ChefHat") {
                tempArray = [
                    {
                        name: value,
                        background: '35, 31, 32 , 1',
                        background1: '233, 233, 233, 1',
                        background2: '7, 112, 190, 1',
                        background3: '0, 144, 251, 1',
                        background4: '175, 220, 251, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cuttingboard") {
                tempArray = [
                    {
                        name: value,
                        background: '44, 66, 107 , 1',
                        background1: '255, 240, 212, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "CuttingKnivesinBlock") {
                tempArray = [
                    {
                        name: value,
                        background: '44, 66, 106 , 1',
                        background1: '0, 145, 252, 1',
                        background2: '231, 231, 231, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "PepperShaker") {
                tempArray = [
                    {
                        name: value,
                        background: '217, 220, 224 , 1',
                        background1: '250, 188, 61, 1',
                        background2: '0, 116, 188, 1',
                        background3: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Salt") {
                tempArray = [
                    {
                        name: value,
                        background: '44, 66, 107 , 1',
                        background1: '234, 234, 234, 1',
                        background2: '244, 248, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Shaker") {
                tempArray = [
                    {
                        name: value,
                        background: '80, 211, 226, 1',
                        background1: '250, 188, 61, 1',
                        background2: '178, 22, 45, 1',
                        background3: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Skillet") {
                tempArray = [
                    {
                        name: value,
                        background: '58, 53, 54, 1',
                        background1: '102, 100, 101, 1',
                        background2: '178, 22, 45, 1',
                        background3: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "CompactDisk") {
                tempArray = [
                    {
                        name: value,
                        background: '28, 113, 218, 1',
                        background1: '208, 232, 255, 1',
                        background2: '255, 197, 4, 1',
                        background3: '166, 10, 148, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Drum") {
                tempArray = [
                    {
                        name: value,
                        background: '28, 113, 218, 1',
                        background1: '0, 212, 11, 1',
                        background2: '166, 10, 148, 1',
                        background3: '255, 197, 4, 1',
                        background4: '208, 232, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Earbuds") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '255, 197, 4, 1',
                        background3: '166, 10, 148, 1',
                        background4: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Headphones") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '166, 10, 148, 1',
                        background3: '255, 197, 4, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Megaphone") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '255, 197, 4, 1',
                        background3: '166, 10, 148, 1',
                        background4: '0, 212, 11, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Microphone") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '255, 197, 4, 1',
                        background3: '166, 10, 148, 1',
                        background4: '0, 212, 11, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "MusicNotes") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '255, 197, 4, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "RecordAlbum") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '255, 197, 4, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Guitar") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '255, 197, 4, 1',
                        background3: '166, 10, 148, 1',
                        background4: '0, 212, 11, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Piano") {
                tempArray = [
                    {
                        name: value,
                        background: '208, 232, 255, 1',
                        background1: '28, 113, 218, 1',
                        background2: '255, 197, 4, 1',
                        background3: '166, 10, 148, 1',
                        background4: '0, 212, 11, 1',
                        background5: '255, 245, 0, 1',
                        background6: '220, 0, 148, 1',
                        background7: '0, 154, 11, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BigBen") {
                tempArray = [
                    {
                        name: value,
                        background: '223, 70, 102, 1',
                        background1: '221, 160, 94, 1',
                        background2: '241, 185, 116, 1',
                        background3: '245, 254, 144, 1',
                        background4: '246, 198, 134, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BritishPounds") {
                tempArray = [
                    {
                        name: value,
                        background: '253, 214, 1, 1',
                        background1: '217, 131, 10, 1',
                        background2: '229, 178, 1, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BuckinghamPalace") {
                tempArray = [
                    {
                        name: value,
                        background: '201, 71, 58, 1',
                        background1: '253, 182, 47, 1',
                        background2: '67, 152, 209, 1',
                        background3: '253, 202, 104, 1',
                        background4: '42, 110, 161, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Crown") {
                tempArray = [
                    {
                        name: value,
                        background: '249, 223, 88, 1',
                        background1: '233, 57, 30, 1',
                        background2: '249, 234, 153, 1',
                        background3: '11, 171, 212, 1',
                        background4: '248, 202, 27, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Doubledeckerbus") {
                tempArray = [
                    {
                        name: value,
                        background: '235, 187, 87, 1',
                        background1: '41, 157, 211, 1',
                        background2: '178, 31, 17, 1',
                        background3: '248, 232, 135, 1',
                        background4: '64, 72, 75, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "FlagofEngland") {
                tempArray = [
                    {
                        name: value,
                        background: '235, 235, 235, 1',
                        background1: '205, 17, 36, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Stonehenge") {
                tempArray = [
                    {
                        name: value,
                        background: '113, 204, 240, 1',
                        background1: '241, 221, 83, 1',
                        background2: '235, 200, 63, 1',
                        background3: '150, 158, 175, 1',
                        background4: '172, 178, 197, 1',
                        background5: '192, 141, 89, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "TowerBridge") {
                tempArray = [
                    {
                        name: value,
                        background: '225, 225, 239, 1',
                        background1: '20, 53, 172, 1',
                        background2: '203, 203, 227, 1',
                        background3: '73, 140, 219, 1',
                        background4: '127, 174, 229, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "UnionJackflag") {
                tempArray = [
                    {
                        name: value,
                        background: '43, 72, 149, 1',
                        background1: '225, 45, 60, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Redtelephonebox") {
                tempArray = [
                    {
                        name: value,
                        background: '198, 47, 62, 1',
                        background1: '255, 194, 0, 1',
                        background2: '255, 255, 255, 1',
                        background3: '129, 212, 239, 1',
                        background4: '192, 31, 44, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BeerMug") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '255, 255, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BeerStein") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BottleBeer") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        background3: '241, 201, 32, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "CannedBeer") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Champagne") {
                tempArray = [
                    {
                        name: value,
                        background: '10, 147, 225, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Margarita") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Martini") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "MixedDrink") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "WineBottle") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "WineGlass") {
                tempArray = [
                    {
                        name: value,
                        background: '13, 143, 217, 1',
                        background1: '194, 228, 248, 1',
                        background2: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Balloons") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BirthdayBanner") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BirthdayCard") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cake") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Candles") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "ChampagneBottle") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Clown") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "PartyHat") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Present") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        background2: '249, 135, 250, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Toy") {
                tempArray = [
                    {
                        name: value,
                        background: '168, 13, 147, 1',
                        background1: '253, 216, 232, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "AirBalloon") {
                tempArray = [
                    {
                        name: value,
                        background: '26, 19, 48, 1',
                        background1: '66, 120, 174, 1',
                        background2: '255, 226, 79, 1',
                        background3: '234, 96, 96, 1',
                        background4: '244, 231, 208, 1',
                        background5: '221, 200, 177, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "AirTrafficTower") {
                tempArray = [
                    {
                        name: value,
                        background: '29, 22, 49, 1',
                        background1: '88, 160, 232, 1',
                        background2: '255, 226, 79, 1',
                        background3: '234, 96, 96, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Blimp") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 226, 79, 1',
                        background1: '240, 185, 74 , 1',
                        background2: '88, 160, 232, 1',
                        background3: '234, 96, 96, 1',
                        background4: '154, 179, 190, 1',
                        background5: '209, 230, 234, 1',
                        background6: '26, 19, 48, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Bomber") {
                tempArray = [
                    {
                        name: value,
                        background: '26, 19, 48, 1',
                        background1: '233, 96, 96 , 1',
                        background2: '88, 160, 232, 1',
                        background3: '255, 226, 79, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cloud") {
                tempArray = [
                    {
                        name: value,
                        background: '29, 22, 49, 1',
                        background1: '88, 160, 232, 1',
                        background2: '66, 120, 174, 1',
                        background3: '253, 253, 253, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "FlightAttendant") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 0, 0, 1',
                        background1: '66, 164, 244, 1',
                        background2: '66, 33, 11, 1',
                        background3: '249, 219, 179, 1',
                        background4: '143, 201, 248, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Helecoptor") {
                tempArray = [
                    {
                        name: value,
                        background: '29, 22, 49, 1',
                        background1: '255, 226, 79, 1',
                        background2: '240, 185, 74, 1',
                        background3: '234, 96, 96, 1',
                        background4: '88, 160, 232, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "JetPlane") {
                tempArray = [
                    {
                        name: value,
                        background: '29, 22, 49, 1',
                        background1: '255, 226, 79, 1',
                        background2: '255, 255, 255, 1',
                        background3: '234, 96, 96, 1',
                        background4: '88, 160, 232, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Pilot") {
                tempArray = [
                    {
                        name: value,
                        background: '66, 120, 174, 1',
                        background1: '88, 160, 232, 1',
                        background2: '245, 186, 22, 1',
                        background3: '5, 38, 53, 1',
                        background4: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "PropPlane") {
                tempArray = [
                    {
                        name: value,
                        background: '5, 0, 53, 1',
                        background1: '255, 226, 79, 1',
                        background2: '88, 160, 232, 1',
                        background3: '234, 96, 96, 1',
                        background4: '240, 185, 74, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Bible") {
                tempArray = [
                    {
                        name: value,
                        background: '228, 60, 91, 1',
                        background1: '244, 186, 212, 1',
                        background2: '245, 187, 73, 1',
                        background3: '254, 254, 254, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Chick") {
                tempArray = [
                    {
                        name: value,
                        background: '254, 224, 103, 1',
                        background1: '253, 216, 53, 1',
                        background2: '229, 57, 53, 1',
                        background3: '251, 251, 251, 1',
                        background4: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Church") {
                tempArray = [
                    {
                        name: value,
                        background: '249, 189, 73, 1',
                        background1: '228, 60, 91, 1',
                        background2: '244, 216, 231, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cross") {
                tempArray = [
                    {
                        name: value,
                        background: '242, 89, 124, 1',
                        background1: '86, 95, 111, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Daffodils") {
                tempArray = [
                    {
                        name: value,
                        background: '254, 201, 103, 1',
                        background1: '216, 9, 57, 1',
                        background2: '62, 178, 25, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "EasterBunny") {
                tempArray = [
                    {
                        name: value,
                        background: '217, 72, 111, 1',
                        background1: '252, 217, 133, 1',
                        background2: '78, 78, 78, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "EasterEgg") {
                tempArray = [
                    {
                        name: value,
                        background: '242, 89, 124, 1',
                        background1: '179, 29, 50, 1',
                        background2: '255, 154, 168, 1',
                        background3: '255, 198, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "EasterEggBasket") {
                tempArray = [
                    {
                        name: value,
                        background: '242, 89, 124, 1',
                        background1: '254, 53, 72, 1',
                        background2: '255, 214, 40, 1',
                        background3: '175, 215, 49, 1',
                        background4: '228, 179, 190, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "RisenChrist") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 198, 0, 1',
                        background1: '85, 19, 0, 1',
                        background2: '255, 181, 153, 1',
                        background3: '242, 89, 124, 1',
                        background4: '228, 179, 190, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Tulips") {
                tempArray = [
                    {
                        name: value,
                        background: '254, 201, 103, 1',
                        background1: '244, 184, 72, 1',
                        background2: '237, 170, 64, 1',
                        background3: '238, 59, 135, 1',
                        background4: '240, 96, 151, 1',
                        background5: '236, 56, 119, 1',
                        background6: '142, 193, 61, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Aquarius") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '250, 215, 78, 1',
                        background2: '255, 182, 0, 1',
                        background3: '49, 49, 48, 1',
                        background4: '20, 192, 255, 1',
                        background5: '142, 218, 246, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Aries") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '250, 215, 78, 1',
                        background2: '255, 182, 0, 1',
                        background3: '21, 20, 0, 1',
                        background4: '20, 192, 255, 1',
                        background5: '142, 218, 246, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cancer") {
                tempArray = [
                    {
                        name: value,
                        background: '130, 65, 10, 1',
                        background1: '240, 196, 25, 1',
                        background2: '242, 156, 31, 1',
                        background3: '229, 126, 37, 1',
                        background4: '210, 86, 39, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Capricorn") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '250, 215, 78, 1',
                        background2: '255, 182, 0, 1',
                        background3: '142, 218, 246, 1',
                        background4: '20, 192, 255, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Gemini") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '250, 215, 78, 1',
                        background2: '35, 25, 16, 1',
                        background3: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Leo") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '250, 215, 78, 1',
                        background2: '255, 182, 0, 1',
                        background3: '142, 218, 246, 1',
                        background4: '20, 192, 255, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Libra") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '250, 215, 78, 1',
                        background2: '255, 182, 0, 1',
                        background3: '142, 218, 246, 1',
                        background4: '20, 192, 255, 1',
                        background5: '255, 21, 67, 1',
                        background6: '223, 0, 6, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Pisces") {
                tempArray = [
                    {
                        name: value,
                        background: '20, 192, 255, 1',
                        background1: '242, 156, 31, 1',
                        background2: '240, 196, 25, 1',
                        background3: '142, 218, 246, 1',
                        background4: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Sagittarius") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '142, 218, 246, 1',
                        background2: '20, 192, 255, 1',
                        background3: '250, 215, 78, 1',
                        background4: '255, 182, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Scorpio") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '142, 218, 246, 1',
                        background2: '20, 192, 255, 1',
                        background3: '250, 215, 78, 1',
                        background4: '255, 182, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Taurus") {
                tempArray = [
                    {
                        name: value,
                        background: '142, 76, 0, 1',
                        background1: '142, 218, 246, 1',
                        background2: '20, 192, 255, 1',
                        background3: '138, 122, 92, 1',
                        background4: '114, 92, 56, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Virgo") {
                tempArray = [
                    {
                        name: value,
                        background: '94, 42, 21, 1',
                        background1: '179, 98, 40, 1',
                        background2: '144, 79, 34, 1',
                        background3: '250, 215, 78, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Ant") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '148, 31, 31, 1',
                        background2: '191, 59, 59, 1',
                        background3: '1, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Centipede") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '145, 93, 45, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cockroach") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '73, 78, 85, 1',
                        background2: '140, 36, 4, 1',
                        background3: '198, 67, 9, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cricket") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '123, 98, 88, 1',
                        background2: '175, 139, 124, 1',
                        background3: '98, 66, 64, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Fly") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '242, 42, 71, 1',
                        background2: '81, 76, 104, 1',
                        background3: '98, 66, 64, 1',
                        background4: '220, 228, 234, 1',
                        background5: '198, 214, 224, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Grasshopper") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '125, 196, 117, 1',
                        background2: '196, 219, 117, 1',
                        background3: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "LadyBug") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '194, 29, 23, 1',
                        background2: '255, 255, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Spider") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '227, 29, 23, 1',
                        background2: '255, 255, 255, 1',
                        background3: '154, 29, 23, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Tick") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '177, 6, 19, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Worm") {
                tempArray = [
                    {
                        name: value,
                        background: '14, 14, 14, 1',
                        background1: '227, 94, 45, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BaldEagle") {
                tempArray = [
                    {
                        name: value,
                        background: '194, 106, 66, 1',
                        background1: '126, 59, 19, 1',
                        background2: '228, 229, 230, 1',
                        background3: '219, 139, 11, 1',
                        background4: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "CookOut") {
                tempArray = [
                    {
                        name: value,
                        background: '226, 179, 31, 1',
                        background1: '183, 68, 20, 1',
                        background2: '146, 20, 20, 1',
                        background3: '218, 0, 1, 1',
                        background4: '155, 155, 155, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Fireworks") {
                tempArray = [
                    {
                        name: value,
                        background: '220, 74, 67, 1',
                        background1: '252, 109, 48, 1',
                        background2: '251, 181, 48, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Ribbon") {
                tempArray = [
                    {
                        name: value,
                        background: '204, 0, 1, 1',
                        background1: '234, 235, 242, 1',
                        background2: '0, 51, 102, 1',
                        background3: '13, 9, 104, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Stars") {
                tempArray = [
                    {
                        name: value,
                        background: '226, 31, 45, 1',
                        background1: '38, 57, 124, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "StatueOfLiberty") {
                tempArray = [
                    {
                        name: value,
                        background: '252, 102, 80, 1',
                        background1: '252, 208, 105, 1',
                        background2: '47, 179, 158, 1',
                        background3: '39, 149, 132, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Stripes") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 51, 102, 1',
                        background1: '254, 254, 254, 1',
                        background2: '204, 0, 1, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "UncleSam") {
                tempArray = [
                    {
                        name: value,
                        background: '215, 15, 71, 1',
                        background1: '162, 14, 44, 1',
                        background2: '45, 75, 144, 1',
                        background3: '201, 198, 199, 1',
                        background4: '236, 236, 236, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "UsaFlag") {
                tempArray = [
                    {
                        name: value,
                        background: '193, 2, 43, 1',
                        background1: '0, 36, 105, 1',
                        background2: '253, 253, 254, 1',
                        background3: '111, 5, 18, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "CornucopiaBasket") {
                tempArray = [
                    {
                        name: value,
                        background: '247, 174, 5, 1',
                        background1: '136, 87, 0, 1',
                        background2: '196, 143, 51, 1',
                        background3: '182, 115, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "FallingLeaves") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 240, 130, 1',
                        background1: '215, 120, 65, 1',
                        background2: '102, 187, 106, 1',
                        background3: '255, 220, 100, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Harvest") {
                tempArray = [
                    {
                        name: value,
                        background: '254, 192, 7, 1',
                        background1: '183, 120, 28, 1',
                        background2: '76, 174, 80, 1',
                        background3: '56, 141, 60, 1',
                        background4: '212, 154, 51, 1',
                        background5: '152, 98, 19, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Hat") {
                tempArray = [
                    {
                        name: value,
                        background: '183, 54, 49, 1',
                        background1: '210, 143, 54, 1',
                        background2: '240, 170, 82, 1',
                        background3: '255, 255, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Jacket") {
                tempArray = [
                    {
                        name: value,
                        background: '250, 213, 92, 1',
                        background1: '70, 113, 198, 1',
                        background2: '55, 98, 204, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "LeavesFalling") {
                tempArray = [
                    {
                        name: value,
                        background: '215, 120, 65, 1',
                        background1: '255, 240, 130, 1',
                        background2: '255, 220, 100, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "LeavesChangingColor") {
                tempArray = [
                    {
                        name: value,
                        background: '126, 184, 58, 1',
                        background1: '220, 210, 42, 1',
                        background2: '253, 98, 2, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Pumpkin") {
                tempArray = [
                    {
                        name: value,
                        background: '94, 137, 50, 1',
                        background1: '178, 67, 38, 1',
                        background2: '245, 146, 38, 1',
                        background3: '236, 116, 36, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "PumpkinPie") {
                tempArray = [
                    {
                        name: value,
                        background: '254, 204, 8, 1',
                        background1: '245, 146, 38, 1',
                        background2: '253, 244, 228, 1',
                        background3: '252, 222, 195, 1',
                        background4: '236, 116, 36, 1',
                        background5: '251, 186, 21, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Sweater") {
                tempArray = [
                    {
                        name: value,
                        background: '203, 121, 138, 1',
                        background1: '249, 141, 151, 1',
                        background2: '190, 43, 87, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Alphabet") {
                tempArray = [
                    {
                        name: value,
                        background: '226, 48, 65, 1',
                        background1: '244, 244, 244, 1',
                        background2: '0, 140, 54, 1',
                        background3: '29, 112, 183, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BabyFeet") {
                tempArray = [
                    {
                        name: value,
                        background: '130, 76, 151, 1',
                        background1: '171, 114, 193, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BalloonsBaby") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 140, 54, 1',
                        background1: '0, 122, 54, 1',
                        background2: '130, 76, 151, 1',
                        background3: '226, 48, 65, 1',
                        backgroun4: '179, 48, 65, 1',
                        background5: '29, 112, 183, 1',
                        background6: '29, 90, 183, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BibBaby") {
                tempArray = [
                    {
                        name: value,
                        background: '130, 76, 151, 1',
                        background1: '171, 114, 193, 1',
                        background2: '48, 48, 154, 1',
                        background3: '253, 251, 114, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "CongratulationsBanner") {
                tempArray = [
                    {
                        name: value,
                        background: '171, 114, 193, 1',
                        background1: '48, 48, 154, 1',
                        background2: '130, 76, 151, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Crib") {
                tempArray = [
                    {
                        name: value,
                        background: '45, 117, 187, 1',
                        background1: '219, 82, 125, 1',
                        background2: '217, 23, 108, 1',
                        background3: '85, 179, 105, 1',
                        background4: '251, 240, 90, 1',
                        background5: '228, 231, 235, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "PresentBaby") {
                tempArray = [
                    {
                        name: value,
                        background: '48, 48, 154, 1',
                        background1: '171, 114, 193, 1',
                        background2: '130, 76, 151, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Rattle") {
                tempArray = [
                    {
                        name: value,
                        background: '217, 23, 108, 1',
                        background1: '237, 241, 243, 1',
                        background2: '45, 117, 187, 1',
                        background3: '219, 82, 125, 1',
                        background4: '251, 240, 90, 1',
                        background5: '254, 254, 254, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Stork") {
                tempArray = [
                    {
                        name: value,
                        background: '130, 76, 151, 1',
                        background1: '255, 255, 255, 1',
                        background2: '208, 208, 208, 1',
                        background3: '171, 114, 193, 1',
                        background4: '253, 251, 114, 1',
                        background5: '205, 156, 213, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "TeddyBear") {
                tempArray = [
                    {
                        name: value,
                        background: '171, 114, 193, 1',
                        background1: '130, 76, 151, 1',
                        background2: '93, 64, 55, 1',
                        background3: '254, 254, 254, 1',
                        background4: '255, 132, 83, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Anubis") {
                tempArray = [
                    {
                        name: value,
                        background: '232, 162, 126, 1',
                        background1: '255, 183, 147, 1',
                        background2: '33, 130, 190, 1',
                        background3: '0, 92, 165, 1',
                        background4: '235, 44, 22, 1',
                        background5: '247, 199, 7, 1',
                        background6: '149, 149, 45, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Camel") {
                tempArray = [
                    {
                        name: value,
                        background: '73, 172, 52, 1',
                        background1: '252, 201, 0, 1',
                        background2: '205, 24, 32, 1',
                        background3: '179, 145, 0, 1',
                        background4: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "EgyptianCat") {
                tempArray = [
                    {
                        name: value,
                        background: '247, 170, 0, 1',
                        background1: '255, 223, 122, 1',
                        background2: '92, 173, 224, 1',
                        background3: '220, 37, 19, 1',
                        background4: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Egyptianhieroglyphs") {
                tempArray = [
                    {
                        name: value,
                        background: '253, 160, 2, 1',
                        background1: '249, 196, 0, 1',
                        background2: '191, 92, 3, 1',
                        background3: '84, 27, 5, 1',
                        background4: '253, 161, 3, 1',
                        background5: '245, 164, 45, 1',
                        background6: '225, 151, 17, 1',
                        background7: '198, 100, 1, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "EyeOfRa") {
                tempArray = [
                    {
                        name: value,
                        background: '220, 19, 70, 1',
                        background1: '92, 173, 224, 1',
                        background2: '138, 196, 242, 1',
                        background3: '254, 214, 155, 1',
                        background4: '255, 255, 255, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Mummy") {
                tempArray = [
                    {
                        name: value,
                        background: '223, 186, 105, 1',
                        background1: '203, 140, 1, 1',
                        background2: '203, 208, 216, 1',
                        background3: '252, 252, 252, 1',
                        background4: '179, 121, 0, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Pyramid") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 215, 127, 1',
                        background1: '247, 171, 72, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "QueenNefertiti") {
                tempArray = [
                    {
                        name: value,
                        background: '237, 85, 50, 1',
                        background1: '233, 151, 45, 1',
                        background2: '253, 176, 31, 1',
                        background3: '253, 202, 176, 1',
                        background4: '235, 185, 159, 1',
                        background5: '140, 46, 30, 1',
                        background6: '254, 216, 131, 1',
                        background7: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Scarab") {
                tempArray = [
                    {
                        name: value,
                        background: '64, 214, 148, 1',
                        background1: '39, 130, 90, 1',
                        background2: '253, 145, 39, 1',
                        background3: '80, 83, 214, 1',
                        background4: '209, 120, 30, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Sphinx") {
                tempArray = [
                    {
                        name: value,
                        background: '223, 186, 105, 1',
                        background1: '203, 140, 1, 1',
                        background2: '179, 121, 0, 1',
                        background3: '126, 68, 4, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            // baby girl
            if (value == "BabyBib") {
                tempArray = [
                    {
                        name: value,
                        background: '215, 112, 173, 1',
                        background1: '252, 193, 222, 1',
                        background2: '146, 220, 123, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BabyBottle") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 222, 84, 1',
                        background1: '255, 171, 205, 1',
                        background2: '202, 244, 252, 1',
                        background3: '159, 245, 255, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BabyDoll") {
                tempArray = [
                    {
                        name: value,
                        background: '221, 159, 129, 1',
                        background1: '255, 226, 217, 1',
                        background2: '86, 85, 91, 1',
                        background3: '251, 169, 202, 1',
                        background4: '215, 112, 173, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cradle") {
                tempArray = [
                    {
                        name: value,
                        background: '215, 112, 173, 1',
                        background1: '251, 169, 202, 1',
                        background2: '146, 220, 123, 1',
                        background3: '254, 223, 92, 1',
                        background4: '254, 254, 254, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "GirlBanner") {
                tempArray = [
                    {
                        name: value,
                        background: '215, 112, 173, 1',
                        background1: '252, 193, 222, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Pacifier") {
                tempArray = [
                    {
                        name: value,
                        background: '252, 193, 222, 1',
                        background1: '215, 112, 173, 1',
                        background2: '162, 215, 62, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "RubberDucky") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 222, 84, 1',
                        background1: '5, 5, 5, 1',
                        background2: '225, 53, 77, 1',
                        background3: '254, 202, 84, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "StorkBaby") {
                tempArray = [
                    {
                        name: value,
                        background: '176, 0, 20, 1',
                        background1: '5, 5, 5, 1',
                        background2: '223, 223, 223, 1',
                        background3: '202, 202, 202, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "SwaddledBaby") {
                tempArray = [
                    {
                        name: value,
                        background: '215, 112, 173, 1',
                        background1: '101, 109, 120, 1',
                        background2: '255, 226, 217, 1',
                        background3: '251, 169, 202, 1',
                        background4: '146, 220, 123, 1',
                        background5: '252, 193, 222, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "TeddyBearGirl") {
                tempArray = [
                    {
                        name: value,
                        background: '252, 193, 222, 1',
                        background1: '215, 112, 173, 1',
                        background2: '5, 5, 5, 1',
                        background3: '251, 169, 202, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            // baby girl end
            // Bird Start
            if (value == "Bluebird") {
                tempArray = [
                    {
                        name:value,
                        background: '64, 144, 192, 1',
                        background1: '46, 116, 182, 1',
                        background2: '24, 102, 174, 1',
                        background3: '255, 255, 255, 1',
                        background4: '255, 163, 60, 1',
                        background5: '233, 235, 238, 1',
                        background6: '173, 71, 14, 1',
                        background7: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "BlueJay") {
                tempArray = [
                    {
                        name:value,
                        background: '60, 121, 188, 1',
                        background1: '46, 45, 43, 1',
                        background2: '249, 250, 250, 1',
                        background3: '73, 75, 70, 1',
                        background4: '95, 158, 213, 1',
                        background5: '255, 255, 255, 1',
                        background6: '207, 215, 226, 1',
                        background7: '40, 82, 140, 1',
                        background8: '40, 64, 102, 1',
                        background9: '73, 75, 70, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Cardinal") {
                tempArray = [
                    {
                        name:value,
                        background: '239, 65, 54, 1',
                        background1: '216, 58, 49, 1',
                        background2: '94, 5, 0, 1',
                        background3: '154, 147, 137, 1',
                        background4: '252, 176, 64, 1',
                        background5: '243, 123, 37, 1',
                        background6: '252, 252, 252, 1',
                        background7: '242, 242, 242, 1',
                        background7: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Goldfinch") {
                tempArray = [
                    {
                        name:value,
                        background: '176, 173, 110, 1',
                        background1: '239, 176, 29, 1',
                        background2: '52, 49, 47, 1',
                        background3: '3, 3, 3, 1',
                        background4: '238, 238, 238, 1',
                        background5: '244, 187, 58, 1',
                        background6: '230, 219, 226, 1',
                        background7: '146, 100, 79, 1',
                        background8: '42, 30, 25, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Hawk") {
                tempArray = [
                    {
                        name:value,
                        background: '9, 9, 9, 1',
                        background1: '107, 46, 17, 1',
                        background2: '252, 252, 252, 1',
                        background3: '210, 206, 207, 1',
                        background4: '9, 9, 9, 1',
                        background5: '241, 241, 240, 1',
                        background6: '242, 109, 20, 1',
                        background7: '79, 31, 11, 1',
                        background8: '249, 153, 4, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Hummingbird1") {
                tempArray = [
                    {
                        name:value,
                        background: '74, 29, 12, 1',
                        background1: '96, 168, 2, 1',
                        background2: '147, 199, 1, 1',
                        background3: '243, 59, 101, 1',
                        background4: '241, 230, 164, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Owl") {
                tempArray = [
                    {
                        name:value,
                        background: '72, 32, 0, 1',
                        background1: '156, 67, 7, 1',
                        background2: '255, 190, 14, 1',
                        background3: '228, 158, 96, 1',
                        background4: '242, 186, 137, 1',
                        background5: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Robin") {
                tempArray = [
                    {
                        name:value,
                        background: '194, 0, 0, 1',
                        background1: '220, 122, 49, 1',
                        background2: '245, 245, 246, 1',
                        background3: '102, 79, 79, 1',
                        background4: '4, 7, 8, 1',
                        background5: '226, 226, 226, 1',
                        background6: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Sparrow") {
                tempArray = [
                    {
                        name:value,
                        background: '143, 74, 45, 1',
                        background1: '252, 252, 252, 1',
                        background2: '34, 34, 34, 1',
                        background3: '63, 14, 0, 1',
                        background4: '132, 132, 132, 1',
                        background5: '237, 223, 212, 1',
                        background6: '150, 98, 69, 1',
                        background7: '166, 100, 65, 1',
                        background8: '53, 4, 2, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Woodpecker") {
                tempArray = [
                    {
                        name:value,
                        background: '119, 35, 33, 1',
                        background1: '242, 166, 44, 1',
                        background2: '248, 198, 39, 1',
                        background3: '238, 222, 173, 1',
                        background4: '252, 252, 252, 1',
                        background5: '211, 57, 47, 1',
                        background6: '68, 76, 78, 1',
                        background7: '44, 53, 52, 1',
                        background8: '0, 0, 0, 1',
                        circleSlider: 0,
                        zoomValue: 0.8,
                        flipValue: 1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            //Bird End
            //Kitchan Start
            if(value =="Blender"){
                tempArray = [
                   {
                       name:value,
                       background : '0, 110, 216, 1',
                       background1: '234, 0, 0, 1',
                       background2: '249, 224, 0, 1',
                       background3: '254, 254, 254, 1',
                       background4: '232, 233, 236, 1',
                       background5: '0, 0, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="CoffeeMachine"){
                tempArray = [
                   {
                       name:value,
                       background : '255, 226, 142, 1',
                       background1: '251, 203, 33, 1',
                       background2: '253, 46, 66, 1',
                       background3: '0, 144, 246, 1',
                       background4: '107, 70, 25, 1',
                       background5: '0, 0, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Crockpot"){
                tempArray = [
                   {
                       name:value,
                       background : '182, 41, 42, 1',
                       background1: '232, 233, 236, 1',
                       background2: '205, 204, 202, 1',
                       background3: '249, 224, 138, 1',
                       background4: '22, 105, 173, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Dishwasher"){
                tempArray = [
                   {
                       name:value,
                       background : '22, 105, 173, 1',
                       background1: '163, 200, 254, 1',
                       background2: '247, 190, 48, 1',
                       background3: '255, 255, 255, 1',
                       background4: '254, 68, 86, 1',
                       background5: '0, 0, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Microwave"){
                tempArray = [
                   {
                       name:value,
                       background : '204, 209, 217, 1',
                       background1: '0, 144, 246, 1',
                       background2: '247, 190, 48, 1',
                       background3: '254, 68, 86, 1',
                       background4: '230, 233, 237, 1',
                       background5: '0, 0, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Mixer"){
                tempArray = [
                   {
                       name:value,
                       background : '0, 0, 0, 1',
                       background1: '221, 220, 220, 1',
                       background2: '0, 110, 216, 1',
                       background3: '234, 0, 0, 1',
                       background4: '216, 0, 0, 1',
                       background5: '249, 224, 0, 1',
                       background6: '0, 171, 69, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Oven"){
                tempArray = [
                   {
                       name:value,
                       background : '65, 65, 67, 1',
                       background1: '247, 190, 48, 1',
                       background2: '39, 51, 57, 1',
                       background3: '86, 86, 86, 1',
                       background4: '0, 180, 186, 1',
                       background5: '253, 253, 253, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Refrigerator"){
                tempArray = [
                   {
                       name:value,
                       background : '253, 46, 66, 1',
                       background1: '255, 255, 255, 1',
                       background2: '247, 190, 48, 1',
                       background3: '0, 0, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="TeaPot"){
                tempArray = [
                   {
                       name:value,
                       background : '191, 96, 22, 1',
                       background1: '253, 78, 38, 1',
                       background2: '249, 224, 0, 1',
                       background3: '255, 232, 157, 1',
                       background4: '40, 40, 40, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Toster"){
                tempArray = [
                   {
                       name:value,
                       background : '247, 157, 34, 1',
                       background1: '222, 135, 41, 1',
                       background2: '246, 193, 145, 1',
                       background3: '205, 204, 202, 1',
                       background4: '22, 105, 173, 1',
                       background5: '232, 233, 236, 1',
                       background6: '221, 58, 42, 1',
                       background7: '182, 41, 42, 1',
                       background8: '0, 0, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            //Kithchen End
            //Garden Start
            if(value =="Clippers"){
                tempArray = [
                   {
                       name:value,
                       background : '237, 195, 58, 1',
                       background1: '250, 163, 58, 1',
                       background2: '105, 169, 64, 1',
                       background3: '239, 207, 66, 1',
                       background4: '95, 152, 58, 1',                       
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="GardenHose"){
                tempArray = [
                   {
                       name:value,
                       background : '122, 193, 74, 1',
                       background1: '93, 154, 58, 1',
                       background2: '237, 195, 58, 1',
                       background3: '250, 163, 58, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="GardeningGloves"){
                tempArray = [
                   {
                       name:value,
                       background : '105, 169, 64, 1',
                       background1: '95, 152, 58, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="LawnMower"){
                tempArray = [
                   {
                       name:value,
                       background : '250, 163, 58, 1',
                       background1: '105, 169, 64, 1',
                       background2: '255, 255, 255, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="PatchGrass"){
                tempArray = [
                   {
                       name:value,
                       background : '46, 124, 50, 1',
                       background1: '105, 169, 64, 1',
                       background2: '120, 85, 72, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="RubberBoots"){
                tempArray = [
                   {
                       name:value,
                       background : '237, 195, 58, 1',
                       background1: '226, 148, 53, 1',
                       background2: '20, 11, 5, 1',
                       background3: '250, 163, 58, 1',
                       background4: '19, 10, 4, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Shovel"){
                tempArray = [
                   {
                       name:value,
                       background : '250, 163, 58, 1',
                       background1: '226, 148, 53, 1',
                       background2: '105, 169, 64, 1',
                       background3: '95, 152, 58, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Sunflower"){
                tempArray = [
                   {
                       name:value,
                       background : '253, 168, 0, 1',
                       background1: '254, 229, 0, 1',
                       background2: '118, 58, 2, 1',
                       background3: '51, 187, 0, 1',
                       background4: '0, 128, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Trowel"){
                tempArray = [
                   {
                       name:value,
                       background : '253, 253, 253, 1',
                       background1: '105, 169, 64, 1',
                       background2: '250, 163, 58, 1',                       
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Wheelbarrow"){
                tempArray = [
                   {
                       name:value,
                       background : '237, 195, 58, 1',
                       background1: '152, 95, 4, 1',
                       background2: '95, 152, 58, 1',
                       background3: '105, 169, 64, 1',
                       background4: '250, 163, 58, 1',
                       background5: '255, 255, 255, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            //Garden End
            //Fruit Start
            if(value =="Apple"){
                tempArray = [
                   {
                       name:value,
                       background : '111, 194, 55, 1',
                       background1: '117, 74, 34, 1',
                       background2: '255, 42, 42, 1',
                       background3: '226, 37, 37, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Banana"){
                tempArray = [
                   {
                       name:value,
                       background : '144, 71, 0, 1',
                       background1: '114, 215, 0, 1',
                       background2: '57, 165, 14, 1',
                       background3: '253, 220, 77, 1',
                       background4: '253, 192, 18, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Grapefruit"){
                tempArray = [
                   {
                       name:value,
                       background : '255, 144, 0, 1',
                       background1: '253, 253, 253, 1',
                       background2: '237, 93, 83, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Grapes"){
                tempArray = [
                   {
                       name:value,
                       background : '110, 169, 35, 1',
                       background1: '115, 75, 174, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Kiwi"){
                tempArray = [
                   {
                       name:value,
                       background : '98, 177, 16, 1',
                       background1: '244, 246, 84, 1',
                       background2: '1, 1, 0, 1',
                       background3: '94, 65, 21, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Melon"){
                tempArray = [
                   {
                       name:value,
                       background : '145, 197, 39, 1',
                       background1: '164, 119, 69, 1',
                       background2: '255, 209, 29, 1',
                       background3: '255, 236, 151, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Peach"){
                tempArray = [
                   {
                       name:value,
                       background : '161, 213, 104, 1',
                       background1: '234, 86, 61, 1',
                       background2: '248, 109, 80, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Pears"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 155, 43, 1',
                       background1: '69, 85, 24, 1',
                       background2: '151, 195, 52, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Pineapple"){
                tempArray = [
                   {
                       name:value,
                       background : '41, 148, 34, 1',
                       background1: '35, 128, 29, 1',
                       background2: '254, 229, 102, 1',
                       background3: '254, 211, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Strawberry"){
                tempArray = [
                   {
                       name:value,
                       background : '255, 23, 68, 1',
                       background1: '104, 159, 56, 1',
                       background2: '255, 193, 7, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            //Graduations Start
            if(value =="Balloon"){
                tempArray = [
                   {
                       name:value,
                       background : '105, 236, 252, 1',
                       background1: '95, 215, 231, 1',
                       background2: '89, 97, 200, 1',
                       background3: '102, 111, 228, 1',
                       background4: '255, 132, 83, 1',
                       background5: '225, 115, 72, 1',
                       background6: '183, 189, 255, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Collage"){
                tempArray = [
                   {
                       name:value,
                       background : '41, 171, 226, 1',
                       background1: '254, 254, 254, 1',
                       background2: '218, 72, 54, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="CongratsBanner"){
                tempArray = [
                   {
                       name:value,
                       background : '246, 249, 250, 1',
                       background1: '0, 67, 112, 1',
                       background2: '253, 222, 89, 1',
                       background3: '251, 251, 251, 1',
                       background4: '226, 16, 5, 1',
                       background5: '39, 41, 53, 1', 
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="DiplomaFull"){
                tempArray = [
                   {
                       name:value,
                       background : '76, 148, 208, 1',
                       background1: '53, 181, 111, 1',
                       background2: '255, 255, 255, 1',
                       background3: '45, 62, 80, 1',
                       background4: '249, 166, 82, 1',
                       background5: '198, 92, 92, 1', 
                       background6: '175, 70, 70, 1',
                       background7: '198, 92, 92, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="DiplomaScrolled"){
                tempArray = [
                   {
                       name:value,
                       background : '226, 175, 56, 1',
                       background1: '244, 218, 128, 1',
                       background2: '240, 192, 64, 1',
                       background3: '205, 46, 48, 1',
                       background4: '239, 76, 69, 1',                        
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Flowers"){
                tempArray = [
                   {
                       name:value,
                       background : '239, 59, 144, 1',
                       background1: '84, 214, 72, 1',
                       background2: '253, 195, 37, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="GraduationRobe"){
                tempArray = [
                   {
                       name:value,
                       background : '46, 44, 119, 1',
                       background1: '248, 189, 6, 1',
                       background2: '36, 34, 99, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="GraduationBanner"){
                tempArray = [
                   {
                       name:value,
                       background : '0, 67, 112, 1',
                       background1: '253, 222, 89, 1',
                       background2: '41, 94, 158, 1',
                       background3: '226, 16, 5, 1',
                       background4: '255, 255, 255, 1',
                       background5: '190, 37, 37, 1',
                       background6: '163, 22, 22, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Mortarboard"){
                tempArray = [
                   {
                       name:value,
                       background : '45, 51, 56, 1',
                       background1: '43, 121, 194, 1',
                       background2: '59, 70, 82, 1',
                       background3: '226, 115, 41, 1',                       
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="ThrowingHats"){
                tempArray = [
                   {
                       name:value,
                       background : '12, 75, 116, 1',
                       background1: '17, 41, 75, 1',
                       background2: '226, 148, 17, 1',
                       background3: '247, 186, 141, 1',
                       background4: '5, 5, 5, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            //Graduations End
            //Farm Animals Start
            if(value =="Bull"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 0, 0, 1',
                       background1: '255, 211, 183, 1',
                       background2: '183, 85, 41, 1',                       
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Chicken"){
                tempArray = [
                   {
                       name:value,
                       background : '120, 1, 1, 1',
                       background1: '198, 20, 65, 1',
                       background2: '251, 214, 45, 1',
                       background3: '255, 211, 183, 1',
                       background4: '255, 129, 0, 1',
                       background5: '176, 239, 167, 1',
                       background6: '255, 181, 148, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Cow"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 0, 0, 1',
                       background1: '185, 85, 41, 1',
                       background2: '255, 211, 183, 1',
                       background3: '215, 144, 154, 1',                       
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Donkey"){
                tempArray = [
                   {
                       name:value,
                       background : '120, 1, 1, 1',
                       background1: '251, 208, 181, 1',
                       background2: '252, 179, 146, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Goat"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 0, 0, 1',
                       background1: '185, 85, 41, 1',
                       background2: '252, 208, 181, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Goose"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 0, 0, 1',
                       background1: '246, 161, 0, 1',
                       background2: '254, 211, 183, 1',
                       background3: '252, 179, 146, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Horse"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 0, 0, 1',
                       background1: '185, 85, 41, 1',
                       background2: '251, 208, 181, 1',
                       background3: '255, 181, 148, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Pig"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 0, 0, 1',
                       background1: '255, 211, 183, 1',
                       background2: '255, 181, 148, 1',
                       background3: '185, 85, 41, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Sheep"){
                tempArray = [
                   {
                       name:value,
                       background : '121, 0, 0, 1',
                       background1: '229, 255, 255, 1',
                       background2: '255, 181, 148, 1',
                       background3: '255, 211, 183, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="SheepDog"){
                tempArray = [
                   {
                       name:value,
                       background : '247, 247, 247, 1',
                       background1: '121, 0, 0, 1',
                       background2: '255, 211, 183, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            //Farm Animals End
            //Dinosaurs Start
            if(value =="Brontosaurus"){
                tempArray = [
                   {
                       name:value,
                       background : '188, 65, 132, 1',
                       background1: '163, 49, 118, 1',
                       background2: '5, 5, 5, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Dimetrodon"){
                tempArray = [
                   {
                       name:value,
                       background : '120, 186, 36, 1',
                       background1: '253, 251, 251, 1',
                       background2: '5, 5, 5, 1',
                       background3: '83, 150, 21, 1',
                       background4: '253, 238, 181, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Parasaurolophus"){
                tempArray = [
                   {
                       name:value,
                       background : '168, 106, 181, 1',
                       background1: '233, 195, 206, 1',
                       background2: '5, 5, 5, 1',
                       background3: '251, 250, 250, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Plesiosaurus"){
                tempArray = [
                   {
                       name:value,
                       background : '240, 125, 5, 1',
                       background1: '251, 200, 0, 1',
                       background2: '5, 5, 5, 1',
                       background3: '255, 255, 255, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Pterodactyl"){
                tempArray = [
                   {
                       name:value,
                       background : '245, 196, 0, 1',
                       background1: '187, 149, 0, 1',
                       background2: '5, 5, 5, 1',
                       background3: '248, 247, 247, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Spinosaurus"){
                tempArray = [
                   {
                       name:value,
                       background : '120, 87, 67, 1',
                       background1: '221, 173, 128, 1',
                       background2: '143, 106, 91, 1',
                       background3: '251, 248, 247, 1',
                       background4: '5, 5, 5, 1',
                       background5: '238, 68, 17, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Stegosaurus"){
                tempArray = [
                   {
                       name:value,
                       background : '95, 55, 105, 1',
                       background1: '168, 106, 181, 1',
                       background2: '129, 79, 142, 1',
                       background3: '5, 5, 5, 1',
                       background4: '253, 249, 246, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Triceratops"){
                tempArray = [
                   {
                       name:value,
                       background : '253, 238, 181, 1',
                       background1: '120, 186, 36, 1',
                       background2: '83, 150, 21, 1',
                       background3: '5, 5, 5, 1',
                       background4: '247, 246, 246, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="TyrannosaurusRex"){
                tempArray = [
                   {
                       name:value,
                       background : '140, 100, 77, 1',
                       background1: '244, 204, 168, 1',
                       background2: '5, 5, 5, 1',
                       background3: '249, 248, 248, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Velociraptor"){
                tempArray = [
                   {
                       name:value,
                       background : '244, 153, 2, 1',
                       background1: '238, 82, 45, 1',
                       background2: '238, 113, 2, 1',
                       background3: '5, 5, 5, 1',
                       background4: '255, 255, 255, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            //Dinosaurs End
            //Day of the dead Start
            if(value =="Cactus"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '46, 181, 50, 1',
                       background2: '242, 153, 0, 1',
                       background3: '243, 88, 1, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Coffin"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '221, 163, 121, 1',
                       background2: '254, 228, 0, 1',
                       background3: '255, 255, 255, 1',
                       background4: '190, 129, 86, 1',
                       background5: '253, 222, 61, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="DrinkWater"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '251, 150, 1, 1',
                       background2: '233, 248, 253, 1',
                       background3: '3, 169, 244, 1',
                       background4: '3, 105, 244, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="MaxicanSugarSkull"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '251, 214, 52, 1',
                       background2: '3, 169, 244, 1',
                       background3: '96, 124, 138, 1',
                       background4: '55, 71, 79, 1',
                       background5: '222, 30, 63, 1',
                       background6: '228, 229, 230, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="MexicanMerigoldFlower"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '230, 31, 98, 1',
                       background2: '3, 169, 244, 1',
                       background3: '251, 214, 52, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="SaltDayOf"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '3, 169, 244, 1',
                       background2: '251, 150, 1, 1',
                       background3: '106, 22, 0, 1',
                       background4: '170, 35, 0, 1',
                       background5: '254, 254, 254, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Skeleton"){
                tempArray = [
                   {
                       name:value,
                       background : '108, 108, 168, 1',
                       background1: '228, 233, 244, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Sombrero"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '3, 169, 244, 1',
                       background2: '254, 191, 89, 1',
                       background3: '230, 31, 98, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Tamales"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '251, 150, 1, 1',
                       background2: '231, 207, 192, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Tombstone"){
                tempArray = [
                   {
                       name:value,
                       background : '5, 5, 5, 1',
                       background1: '251, 150, 1, 1',
                       background2: '3, 169, 244, 1',
                       background3: '230, 31, 98, 1',
                       background4: '255, 255, 255, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            //Day of the dead End
            //Fruit End

            //Fitness SVG
            if (value == "AppleFitness") {
                tempArray = [
                    {
                        name: value,
                        background: '0, 102, 153, 1',
                        background1: '82, 163, 204, 1',
                        background2: '101, 203, 255, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Barbells") {
                tempArray = [
                    {
                        name: value,
                        background:  '0, 102, 153, 1',
                        background1: '82, 163, 204, 1',
                        background2: '255, 255, 255, 1',
                        background3: '101, 203, 255, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Bicycler") {
                tempArray = [
                    {
                        name: value,
                        background:  '0, 102, 153, 1',
                        background1: '5, 5, 5, 1',
                        background2: '251, 201, 185, 1',
                        background3: '102, 204, 255, 1',
                        background4: '82, 163, 204, 1',
                        background5: '244, 215, 127, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "GrapesFitness") {
                tempArray = [
                    {
                        name: value,
                        background:  '0, 102, 153, 1',
                        background1: '82, 163, 204, 1',
                        background2: '101, 203, 255, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Muscle") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 106, 156, 1',
                        background1: '101, 203, 255, 1',
                        background2: '82, 163, 204, 1',
                        background3: '253, 253, 253, 1',
                        background4: '253, 252, 252, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Runner") {
                tempArray = [
                    {
                        name: value,
                        background:  '0, 102, 153, 1',
                        background1: '254, 254, 254, 1',
                        background2: '81, 157, 196, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "StationaryBike") {
                tempArray = [
                    {
                        name: value,
                        background:  '0, 102, 153, 1',
                        background1: '101, 203, 255, 1',
                        background2: '82, 163, 204, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Treadmill") {
                tempArray = [
                    {
                        name: value,
                        background:  '0, 102, 153, 1',
                        background1: '100, 196, 244, 1',
                        background2: '253, 253, 253, 1',
                        background3: '230, 30, 98, 1',
                        background4: '82, 163, 204, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Weightlifer") {
                tempArray = [
                    {
                        name: value,
                        background:  '255, 255, 255, 1',
                        background1: '0, 102, 153, 1',
                        background2: '82, 163, 204, 1',
                        background3: '100, 196, 244, 1',
                        background4: '254, 254, 254, 1',
                        background5: '254, 204, 147, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Yoga") {
                tempArray = [
                    {
                        name: value,
                        background:  '0, 102, 153, 1',
                        background1: '0, 0, 0, 1',
                        background2: '254, 204, 147, 1',
                        background3: '255, 255, 255, 1',
                        background4: '101, 203, 255, 1',
                        background5: '229, 184, 132, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            
            //Fitness SVG
            //Chrismas Svg
            if (value == "Bells") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '58, 180, 74, 1',
                        background2: '228, 30, 39, 1',
                        background3: '252, 180, 53, 1',                        
                        background4: '252, 128, 53, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "ChristmasWreath") {
                tempArray = [
                    {
                        name: value,
                        background:  '11, 124, 73, 1',
                        background1: '0, 165, 81, 1',
                        background2: '160, 50, 52, 1',
                        background3: '254, 82, 87, 1',
                        background4: '190, 142, 48, 1',
                        background5: '253, 196, 84, 1',
                        background6: '254, 254, 254, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "ChristmasTree") {
                tempArray = [
                    {
                        name: value,
                        background:  '253, 211, 0, 1',
                        background1: '47, 169, 39, 1',
                        background2: '237, 239, 239, 1',
                        background3: '253, 35, 40, 1',
                        background4: '41, 148, 34, 1',
                        background5: '206, 106, 60, 1',                        
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "GingerbreadMan") {
                tempArray = [
                    {
                        name: value,
                        background:  '62, 39, 35, 1',
                        background1: '190, 132, 48, 1',
                        background2: '254, 212, 79, 1',
                        background3: '95, 54, 11, 1',
                        background4: '244, 244, 244, 1',
                        background5: '217, 90, 51, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Mistletoe") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '58, 180, 74, 1',
                        background2: '11, 147, 67, 1',
                        background3: '163, 4, 27, 1',
                        background4: '228, 30, 39, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Ornament") {
                tempArray = [
                    {
                        name: value,
                        background:  '160, 50, 52, 1',
                        background1: '254, 82, 87, 1',
                        background2: '253, 253, 253, 1',
                        background3: '11, 124, 73, 1',
                        background4: '0, 165, 81, 1',
                        background5: '190, 142, 48, 1',
                        background6: '254, 197, 85, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "PresentChristmas") {
                tempArray = [
                    {
                        name: value,
                        background:  '161, 50, 52, 1',
                        background1: '0, 166, 81, 1',
                        background2: '183, 19, 31, 1',
                        background3: '254, 82, 87, 1',                       
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Reindeer") {
                tempArray = [
                    {
                        name: value,
                        background:  '254, 254, 254, 1',
                        background1: '0, 0, 0, 1',
                        background2: '175, 94, 50, 1',
                        background3: '231, 27, 35, 1',
                        background4: '253, 207, 157, 1',
                        background5: '170, 84, 16, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Snowflake") {
                tempArray = [
                    {
                        name: value,
                        background:  '254, 212, 0, 1',
                        background1: '255, 35, 40, 1',                        
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Snowman") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '58, 180, 74, 1',
                        background2: '11, 147, 67, 1',
                        background3: '252, 180, 53, 1',
                        background4: '254, 254, 254, 1',
                        background5: '214, 221, 225, 1',
                        background6: '228, 30, 39, 1',
                        background7: '163, 4, 27, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }            
            //Chrismas Svg
            //Medieval SVG
            if (value == "BowandArrow") {
                tempArray = [
                    {
                        name: value,
                        background:  '2, 53, 126, 1',
                        background1: '20, 128, 227, 1',
                        background2: '1, 34, 82, 1',
                        background3: '220, 225, 236, 1',
                        background4: '155, 166, 195, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Castle") {
                tempArray = [
                    {
                        name: value,
                        background:  '249, 189, 73, 1',
                        background1: '181, 85, 2, 1',
                        background2: '252, 241, 89, 1',
                        background3: '222, 60, 68, 1',
                        background4: '205, 221, 230, 1',
                        background5: '159, 20, 20, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Catapult") {
                tempArray = [
                    {
                        name: value,
                        background:  '2, 53, 126, 1',
                        background1: '242, 228, 108, 1',
                        background2: '20, 128, 227, 1',
                        background3: '233, 0, 39, 1',
                        background4: '69, 219, 83, 1',
                        background5: '0, 0, 0, 1',
                        background6: '139, 77, 38, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "CrossedSwords") {
                tempArray = [
                    {
                        name: value,
                        background:  '154, 170, 180, 1',
                        background1: '204, 214, 221, 1',
                        background2: '191, 105, 82, 1',
                        background3: '100, 33, 22, 1',
                        background4: '252, 171, 64, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "FireBreathingDragon") {
                tempArray = [
                    {
                        name: value,
                        background:  '214, 141, 197, 1',
                        background1: '5, 3, 3, 1',
                        background2: '249, 248, 247, 1',
                        background3: '230, 173, 166, 1',
                        background4: '123, 27, 8, 1',
                        background5: '245, 148, 7, 1',
                        background6: '251, 241, 4, 1',
                        background7: '140, 66, 125, 1',
                        background8: '252, 194, 25, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "FlyingDragon") {
                tempArray = [
                    {
                        name: value,
                        background:  '229, 104, 32, 1',
                        background1: '34, 34, 34, 1',
                        background2: '254, 213, 2, 1',
                        background3: '142, 13, 9, 1',                        
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Knight") {
                tempArray = [
                    {
                        name: value,
                        background:  '252, 176, 64, 1',
                        background1: '244, 122, 37, 1',
                        background2: '1, 34, 82, 1',                       
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }  
            if (value == "Lady") {
                tempArray = [
                    {
                        name: value,
                        background:  '253, 210, 67, 1',
                        background1: '193, 38, 39, 1',
                        background2: '243, 242, 240, 1',
                        background3: '36, 36, 36, 1',
                        background4: '253, 223, 215, 1',                       
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "StandingDragon") {
                tempArray = [
                    {
                        name: value,
                        background:  '105, 194, 41, 1',
                        background1: '253, 252, 252, 1',
                        background2: '76, 138, 32, 1',
                        background3: '243, 14, 52, 1',                        
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Throne") {
                tempArray = [
                    {
                        name: value,
                        background:  '250, 200, 0, 1',
                        background1: '219, 42, 27, 1',
                        background2: '183, 31, 17, 1',
                        background3: '150, 24, 13, 1', 
                        background4: '176, 139, 1, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }  
            //Medieval SVG
            /**
             * India_SVG 
             */
            if (value == "Cobra") {
                tempArray = [
                    {
                        name: value,
                        background:  '98, 172, 128, 1',
                        background1: '5, 5, 5, 1',
                        background2: '133, 205, 162, 1',
                        background3: '253, 77, 56, 1', 
                        background4: '212, 227, 73, 1',
                        background5: '192, 206, 66, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "CowIndia") {
                tempArray = [
                    {
                        name: value,
                        background:  '39, 46, 61, 1',
                        background1: '140, 74, 73, 1',
                        background2: '254, 191, 24, 1',
                        background3: '190, 105, 93, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Elephant") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '252, 215, 112, 1',
                        background2: '241, 120, 107, 1',
                        background3: '102, 123, 136, 1', 
                        background4: '127, 153, 171, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "IndianMan") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '58, 39, 28, 1',
                        background2: '177, 125, 91, 1',
                        background3: '139, 50, 34, 1', 
                        background4: '255, 194, 97, 1',
                        background5: '136, 96, 69, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "IndianWoman") {
                tempArray = [
                    {
                        name: value,
                        background:  '38, 29, 23, 1',
                        background1: '255, 183, 77, 1',
                        background2: '182, 28, 28, 1',
                        background3: '236, 229, 224, 1', 
                        background4: '251, 140, 0, 1',
                        background5: '66, 165, 52, 1',
                        background6: '236, 200, 47, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Lotus") {
                tempArray = [
                    {
                        name: value,
                        background:  '214, 53, 98, 1',
                        background1: '253, 112, 156, 1',
                        background2: '174, 35, 78, 1',
                        background3: '14, 126, 36, 1', 
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Shiva") {
                tempArray = [
                    {
                        name: value,
                        background:  '78, 41, 22, 1',
                        background1: '249, 242, 129, 1',
                        background2: '5, 5, 5, 1',
                        background3: '45, 85, 217, 1', 
                        background4: '114, 155, 231, 1',
                        background5: '46, 46, 46, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Sitar") {
                tempArray = [
                    {
                        name: value,
                        background:  '181, 53, 27, 1',
                        background1: '230, 210, 20, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "TajMahal") {
                tempArray = [
                    {
                        name: value,
                        background:  '228, 185, 120, 1',
                        background1: '252, 252, 250, 1',
                        background2: '239, 238, 233, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Yoga") {
                tempArray = [
                    {
                        name: value,
                        background:  '30, 20, 27, 1',
                        background1: '230, 186, 163, 1',
                        background2: '145, 40, 132, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            /**
             * End  India_SVG
             */
            
             /**
             * Hawaii_SVG
            */
            
            if (value == "CoconutPalmtree") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '58, 174, 73, 1',
                        background2: '242, 160, 11, 1',
                        background3: '169, 124, 80, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Coconuts") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '241, 14, 22, 1',
                        background2: '248, 203, 0, 1',
                        background3: '254, 254, 254, 1',
                        background4: '84, 125, 60, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "HawaiianDugoutCanoe") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '254, 215, 51, 1',
                        background2: '247, 167, 6, 1',
                        background3: '237, 88, 124, 1',
                        background4: '205, 31, 76, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "HulaHoop") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '239, 123, 176, 1',
                        background2: '248, 206, 206, 1',
                        background3: '189, 215, 82, 1',
                        background4: '233, 42, 64, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Lei") {
                tempArray = [
                    {
                        name: value,
                        background:  '255, 96, 160, 1',
                        background1: '248, 162, 42, 1',
                        background2: '247, 200, 218, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "MaiTai") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '244, 197, 59, 1',
                        background2: '254, 56, 41, 1',
                        background3: '253, 253, 253, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "PineappleHawaii") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '122, 207, 87, 1',
                        background2: '253, 217, 44, 1',
                        background3: '253, 170, 27, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Surfboard") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '254, 192, 68, 1',
                        background2: '119, 126, 239, 1',
                        background3: '239, 123, 176, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Volcano") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '244, 196, 100, 1',
                        background2: '242, 102, 41, 1',
                        background3: '99, 99, 99, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Waves") {
                tempArray = [
                    {
                        name: value,
                        background:  '22, 112, 184, 1',
                        background1: '1, 200, 253, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            /**
              * End Hawaii_SVG
            */
            /**
             * Halloween_SVG
            */
            if (value == "Bat") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '233, 137, 35, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "BlackCat") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '255, 212, 100, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Ghost") {
                tempArray = [
                    {
                        name: value,
                        background:  '218, 214, 200, 1',
                        background1: '41, 13, 0, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "JackOLantern") {
                tempArray = [
                    {
                        name: value,
                        background:  '112, 170, 0, 1',
                        background1: '250, 112, 0, 1',
                        background2: '253, 136, 0, 1',
                        background3: '77, 25, 0, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "SkeletonHalloween") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '46, 126, 184, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "SkullHalloween") {
                tempArray = [
                    {
                        name: value,
                        background:  '241, 205, 108, 1',
                        background1: '5, 5, 5, 1',
                        background2: '233, 50, 54, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "SpiderHalloween") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '216, 34, 56, 1',
                        background2: '253, 221, 30, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "SpiderWeb") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '241, 205, 108, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Vampire") {
                tempArray = [
                    {
                        name: value,
                        background:  '40, 40, 38, 1',
                        background1: '194, 184, 140, 1',
                        background2: '216, 33, 11, 1',
                        background3: '253, 253, 253, 1',
                        background4: '224, 32, 9, 1',
                        background5: '230, 229, 228, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "WitchOnBroom") {
                tempArray = [
                    {
                        name: value,
                        background:  '79, 40, 85, 1',
                        background1: '248, 194, 10, 1',
                        background2: '187, 23, 22, 1',
                        background3: '250, 212, 175, 1',
                        background4: '5, 5, 5, 1',
                        background5: '214, 157, 129, 1',
                        background6: '118, 77, 41, 1',
                        background7: '102, 63, 34, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            /**
            * End Halloween_SVG
            */

            /**
             * Italy_SVG
            */
            if (value == "CapuchinoCoffee") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '255, 215, 130, 1',
                        background2: '211, 132, 61, 1',
                        background3: '253, 189, 64, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Colosseum") {
                tempArray = [
                    {
                        name: value,
                        background:  '12, 12, 12, 1',
                        background1: '255, 183, 77, 1',
                        background2: '102, 75, 51, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "GondolaBoat") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '253, 253, 253, 1',
                        background2: '177, 191, 0, 1',
                        background3: '225, 49, 76, 1',
                        background4: '110, 229, 217, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "ItalianFlag") {
                tempArray = [
                    {
                        
                        name: value,
                        background:  '5, 5, 5',
                        background1: '0, 145, 70 1',
                        background2: '253, 253, 2531',
                        background3: '205, 43, 55, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "OliveOils") {
                tempArray = [
                    {
                        
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '255, 255, 205, 1',
                        background2: '254, 235, 76, 1',
                        background3: '201, 67, 17, 1',
                        background4: '99, 194, 20, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Pantheon") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '250, 158, 84, 1',
                        background2: '237, 126, 47, 1',
                        background3: '255, 255, 196, 1',
                        background4: '194, 82, 2, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Pasta") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '254, 172, 76, 1',
                        background2: '254, 235, 76, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "PisaLeaningTower") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '247, 169, 59, 1',
                        background2: '255, 214, 153, 1',
                        background3: '94, 207, 118, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "PizzaItaly") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '205, 125, 66, 1',
                        background2: '243, 179, 71, 1',
                        background3: '236, 31, 69, 1',
                        background4: '84, 209, 78, 1',
                        background5: '254, 214, 129, 1',
                        background6: '243, 188, 93, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            if (value == "Vineyard") {
                tempArray = [
                    {
                        name: value,
                        background:  '5, 5, 5, 1',
                        background1: '92, 200, 85, 1',
                        background2: '61, 76, 121, 1',
                        background3: '81, 101, 161, 1',
                        circleSlider:0,
                        zoomValue:0.8,
                        flipValue:1,
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            } 
            /**
             * End Italy_SVG
            */

            if (value == "FrenchFries") {
                tempArray = [
                    {
                        name: value,
                        background: '255, 202, 40, 1',
                        background1: '211, 47, 47, 1',
                        background2: '48, 60, 66 , 1',
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Pie") {
                tempArray = [
                    {
                        name: value,
                        background: '127, 110, 93,1',
                        background1: '241, 141, 70,1',
                        background2: '210, 86, 39 1',
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Pizza") {
                tempArray = [
                    {
                        name: value,
                        background: '48, 60, 66,1',
                        background1: '229, 115, 115,1',
                        background2: '255, 202, 40 1',
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Popcorn") {
                tempArray = [
                    {
                        name: value,
                        background: '211, 47, 47 , 1',
                        background1: '48, 60, 66 , 1',
                        background2: '230, 230, 230 , 1',
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }
            if (value == "Steak") {
                tempArray = [
                    {
                        name: value,
                        background: '48, 60, 66,1',
                        background1: '255, 235, 238, 1',
                        background2: '198, 40, 40 , 1',
                    }
                ]
                this.state.SvgComponent.push(tempArray)
            }

        },
        RANDOM_SVG_PUSH_TO_SVG_ARRAY(state, value) {
            var tempArray = []
            tempArray = [
                {
                    name: 'BullDogSvg',
                    background: '101, 81, 60,1',
                    background1: '130, 105, 64, 1',
                    background2: '255, 255, 255 , 1',
                    background3: '156, 127, 77 , 1'
                },
                {
                    name: 'Hippo',
                    background: '95, 117, 133,1',
                    background1: '125, 134, 140, 1',
                    background2: '251, 226, 152 , 1',
                    background3: '124, 152, 171, 1'
                },
                {
                    name: 'Llama',
                    background: '95, 117, 133,1',
                    background1: '200, 201, 201, 1',
                    background2: '51, 62, 72 , 1',
                    background3: '218, 219, 220, 1',
                },
                {
                    name: 'Mouse',
                    background: '255, 156, 159,1',
                    background1: '125, 134, 140, 1',
                    background2: '51, 62, 72 , 1',
                    background3: '92, 102, 112, 1',
                },
                {
                    name: 'Squirrel',
                    background: '130, 105, 64,1',
                    background1: '156, 127, 77, 1',
                    background2: '101, 81, 60 , 1',
                    background3: '225, 203, 129, 1',
                }
            ]
            this.state.SvgComponent.push(tempArray)
        }

    },
    actions: {
        ACTION_CHANGE_STATE(context, value) {
            context.commit('CHANGE_STATE', value)
        },
        ACTION_PUSH_TO_SVG(context, value) {
            context.commit('SVG_PUSH_TO_SVG_ARRAY', value)
        },
        ACTION_PUSH_SVG_RANDOM(context, value) {
            context.commit('RANDOM_SVG_PUSH_TO_SVG_ARRAY', value)
        }
    },

})