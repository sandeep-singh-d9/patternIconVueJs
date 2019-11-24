<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(0, 171, 227, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M46.6,446.7c3.4-4.2,6.8-8.4,10.2-12.6c4.8-6.8,9.2-13.9,16.8-18c5-4.6,9.9-9.1,14.9-13.7
	c5.4-7,12.1-12.4,20-16.3c22.2-17.4,45.9-32.5,70.6-46.1c4.2-2.3,7.5-5.3,10.3-9.1c31.3-42.7,69.1-78.9,111.8-109.9
	c0.8-0.6,1.8-0.9,2.6-1.4c0.6-0.1,1.3-0.2,1.8,0.1c11,5.5,22,10.8,33.9,14c0.6,0.2,0.7,0.9,0.8,1.5c-4.2,6.1-10.4,9.8-16.4,13.8
	c-11.8,5.3-24.2,9.2-35.5,15.9c-19.6,11.5-36,26.3-48.9,45c-5.9,8.5-11.3,17.3-16.1,26.6c-2,3.9-4.8,7-8.4,9.4
	c-29.6,20.1-57.8,42-84.9,65.4c-23.7,20.4-46.8,41.5-68.1,64.3C42.7,496,23.7,516.9,6.3,539.1c-1.5,1.9-2.5,4.8-5.8,4.4
	c3.1-17.6,9.5-34.1,17-50.1c4.3-9.1,9.3-17.9,14.7-26.4C35.1,458.9,40.2,452.3,46.6,446.7z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M0.5,543.5c26.9-32.8,54.9-64.6,85.4-94.1c39.1-37.7,80.7-72.2,125.4-102.9
	c5.5-3.8,9.6-8.1,12.7-14.1c19.9-39,49.7-67.1,91.6-81.5c2.6-0.9,5.2-2.3,8.2-1.9c-18.6,15.7-37.2,31.4-53.9,49.2
	c-10.3,10.9-20.4,22.1-29.3,34.2c-7.3,9.9-15.5,18.7-24.1,27.4c-64,63.8-128,127.8-192.1,191.8c-2.3,2.3-4.6,4.6-7.1,6.7
	c-3.3,2.8-7.2,4-11.3,2.3c-4.2-1.7-5.8-5.5-6-9.8C-0.1,548.3,0.3,545.9,0.5,543.5z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M340.3,235.1c-12.9-3.4-25.4-7.9-36.5-15.6c8.5-7.1,18-12.7,27.2-18.7c4.9-3.2,9.3-7,13-11.5
	c1.2-3.5,4.3-5.5,6.6-8.1c2.9-2.8,5.7-5.6,8.5-8.5c2.5-2.4,4.9-4.9,7.4-7.4c2.9-2.8,5.7-5.6,8.5-8.5c2.5-2.4,4.9-4.9,7.4-7.4
	c2.9-2.8,5.7-5.6,8.5-8.5c2.5-2.4,4.9-4.9,7.4-7.4c2.9-2.8,5.7-5.6,8.5-8.5c2.5-2.4,4.9-4.9,7.4-7.4c2.9-2.8,5.7-5.6,8.5-8.5
	c2.5-2.4,4.9-4.9,7.4-7.4c2.9-2.8,5.7-5.6,8.5-8.5c2.5-2.4,4.9-4.9,7.4-7.4c2.9-2.8,5.7-5.6,8.5-8.5c3-2.7,5.5-6,9.2-7.8
	c3.4-2.9,6.9-5.8,11.6-5.9c6.1-0.1,11.2,2.1,14,7.8c2.9,6,2.3,11.9-2,17.1c-2.2,2.6-4.9,4.9-7.3,7.3c-45,45-90,90-135.1,135
	C343.4,232.6,341.8,233.8,340.3,235.1z"/>
<path :style="{fill:'rgba(0, 171, 227, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M426.7,17.7c1.1,0.4,2.7,0.8,2,2.3c-0.9,1.7-2.8,0.9-4.3,0.9c-14.6,0.2-27.8,5.1-40,12.6
	c-11.1,6.8-21.1,15.1-30.4,24.3c-19,18.9-37.4,38.4-58.7,54.8c-12.4,9.6-25.9,16.7-42.4,16.1c-6.5-0.2-12.4-1.8-17.8-5.3
	c-0.6-0.4-1.7-0.8-1.7-1.3c-0.2-1.5,1.2-1.8,2.3-2.1c19.7-4.7,35.9-15.1,49.4-30C300.9,72.7,314,53.3,330,36.3
	c22.3-23.9,49.2-33.4,81.5-24.3C416.8,13.4,421.8,15.5,426.7,17.7z"/>
<path :style="{fill:'rgba(187, 227, 238, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M235.2,123.5c9.3,3.1,18.7,4.9,28.5,3c14.4-2.8,25.9-10.8,36.9-19.9c19.8-16.5,37.3-35.4,55.8-53.2
	c13.2-12.7,27.6-23.8,45.2-29.8c7.3-2.5,14.8-5.5,22.8-2.6c-2,0.6-4,1.2-5.9,1.7c-3.7,4.1-9.1,5.3-13.7,8.1
	c-2.4,1.3-4.6,2.9-6.7,4.6c-4.1,2.9-7.9,6.2-11.7,9.4c-1.8,1.7-3.6,3.4-5.3,5.2c-3.6,3.5-7,7-10.6,10.6c-1.7,1.7-3.5,3.3-5,5.2
	c-2.7,4.1-6.4,7.3-9.7,10.8c-2,1.8-3.8,3.7-5.1,6c-3.4,4.1-7.7,7.5-10.7,12.1c-1.3,1.4-2.7,2.8-4,4.2c-3.6,3.5-7.1,7.1-10.6,10.6
	c-1.8,1.7-3.5,3.4-5.2,5.2c-3.6,3.8-7.9,6.7-11.9,10c-2.2,1.5-4.3,3.3-6.6,4.8c-2.8,1.6-5.5,3.8-8.9,3.9c-5.6,1.5-10.7,4.3-16.6,5.1
	C259.9,140.4,246.7,134.4,235.2,123.5z"/>
<path :style="{fill:'rgba(187, 227, 238, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M426.7,17.7c-7.7-1.9-15.3-4.1-23.1-5.8c-23.8-5-44.6,0.9-63.1,16.7c-15.4,13.1-26.6,29.7-39.3,45.1
	c-13.7,16.6-27.4,33.1-47.8,41.9c-5.6,2.4-11.2,5.5-17.7,4.4c18.6-9.5,31.7-24.9,44.9-40.4c16-18.8,30.7-38.8,48.9-55.7
	c11-10.1,22.9-18.9,37.8-22.3C389.9-3.6,409.1,4.3,426.7,17.7z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M292.9,133.2c2.8-1.7,5.6-3.4,8.5-5.1c2.4-1.1,3.7,0.6,5.1,2c14.6,14.9,28.3,30.6,42.7,45.7
	c1.6,1.7,3.8,3.3,2.4,6.2c-2.2,2.7-4.5,5.3-7.4,7.2c-6.6-7.6-14.6-13.8-21.9-20.7c-9.4-9-19-17.9-28.8-26.5
	C289.8,138.9,291.7,136.2,292.9,133.2z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M403.8,29.7c4.7-2.7,9.5-5.3,14.7-7.1c2.8,6.5,8.7,10.5,13.2,15.5c6.4,7.2,12.7,14.5,20.1,20.8
	c4,3.4,6,9.1,11.7,10.8c-2.2,3.5-5.2,6.1-8.4,8.7c-3.1,0.7-5.1-1.4-6.9-3.2c-13.7-13.3-27.9-25.9-41.7-39.1
	C404.8,34.5,402,33,403.8,29.7z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M108.5,386c-6.7,5.4-13.3,10.9-20,16.3C87.6,389.9,94.9,384,108.5,386z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M46.6,446.7c-4.8,6.8-9.6,13.5-14.4,20.3C27.9,455.5,33.9,447,46.6,446.7z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M73.7,416.1c-5.7,5.9-10.6,12.6-16.8,18C55.2,421.5,61.4,414.8,73.7,416.1z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M369.5,60c3.7-3.7,7.3-7.4,11-11.1c3-0.5,4.3,1.8,5.9,3.5c13.3,14.9,27.2,29.2,40.6,44
	c1.7,1.8,4.4,3.1,3.7,6.4c-2.1,2.8-4.5,5.2-7.2,7.3c-1.9,0.7-3.1-0.6-4.2-1.6c-9.3-8.4-18.5-16.8-27.7-25.3
	c-6-5.6-12-11.4-18.1-16.9C371.5,64.7,368.9,63.2,369.5,60z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M385.4,44.1c3.6-3.9,7.6-7.2,12.2-9.9c2-0.5,2.8,1.3,3.9,2.3c14.8,14.6,28.4,30.2,42.7,45.3
	c1.3,1.4,3.2,2.7,2.4,5.1c-2.4,2.4-4.8,4.9-7.3,7.3c-3.3,0.6-5.4-1.6-7.3-3.5c-13.6-14.1-28.8-26.5-42.8-40.2
	C387.4,48.8,384.8,47.4,385.4,44.1z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M354.9,75.8c3.3-3.6,6.6-7.3,9.9-10.9c5.2,0.2,7.3,4.7,10.2,7.8c9.1,10.1,18.3,20.1,27.8,29.8
	c3.8,3.9,7,8.5,10.9,12.3c1,1,1.9,2.2,1.2,3.8c-2.1,2.8-4.5,5.2-7.3,7.2c-2.2,0.7-3.4-0.8-4.7-2c-12-11.7-25.1-22.3-36.8-34.3
	c-2.6-2.6-5.2-5-8.1-7.3C356,80.7,353.4,79.2,354.9,75.8z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M339.2,94.1c2.5-5.1,6.8-8.6,10.8-12.4c5.8,0.6,8.2,5.6,11.4,9.1c9.7,10.6,19.3,21.3,29.3,31.6
	c3.4,3.5,7.7,6.6,8.3,12.1c-2.1,2.8-4.5,5.2-7.3,7.3c-1.6,0.7-2.8-0.3-3.8-1.2C371.8,125,354.4,110.7,339.2,94.1z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M307.6,123.5c4-3.3,8.1-6.6,12.1-9.9c4.7,1.9,7.6,6,10.8,9.6c10.9,12.3,22.6,23.8,33.6,35.9
	c1.8,2,4.8,3.6,3.2,7.1c-2.2,2.7-4.5,5.2-7.3,7.2c-2.2,0.8-3.4-0.8-4.7-2c-14.3-14.2-29.5-27.5-44-41.5
	C309.6,128.2,306.9,126.8,307.6,123.5z"/>
<path :style="{fill:'rgba(240, 241, 241, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M324.5,108.8c3.4-3.9,6.9-7.8,11-10.9c4.7,1.9,7.6,6,10.8,9.5c10.8,12,21.7,23.9,33.1,35.4
	c2.1,2.1,4.7,4.1,3.8,7.7c-2.1,2.7-4.5,5.2-7.3,7.2c-2.2,0.8-3.4-0.8-4.7-2c-14-13.8-29.1-26.4-42.9-40.4
	C326.6,113.4,323.9,112,324.5,108.8z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M385.4,44.1c8,9.9,18.2,17.6,27.5,26.3c5.6,5.2,11,10.6,16.6,15.9c3.1,2.9,6.1,5.8,9.8,8
	c-2.9,2.8-5.7,5.7-8.6,8.5c-16.7-18-33.4-36-50.2-53.9C382.1,47.3,383.8,45.7,385.4,44.1z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M414.8,118.7c-16.2-18.4-32.6-36.5-50-53.7c1.1-2.1,2.8-3.6,4.7-5c6.6,8.3,15.2,14.4,22.7,21.7
	c10,9.9,20.8,19,31.3,28.4C420.6,113,417.7,115.8,414.8,118.7z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M399,134.5c-15.7-18.2-32-35.8-49-52.8c0.8-2.6,2.9-4.3,4.9-5.9c1.1,5.2,6.1,6.7,9.4,9.8
	c14.3,13.6,28.8,26.9,43.3,40.3C404.7,128.8,401.8,131.6,399,134.5z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M307.6,123.5c10.2,12.1,22.8,21.6,33.9,32.6c6,6,12.4,11.5,18.6,17.3c-2.8,2.9-5.7,5.8-8.5,8.7
	c-0.1-1.8-1.1-2.9-2.3-4.1c-15.1-16.2-30.1-32.4-45.2-48.6c-0.6-0.7-1.8-0.8-2.7-1.2C303.4,126.6,305.5,125.1,307.6,123.5z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M446.5,87c-6.5-7.1-13-14.3-19.6-21.4c-9.7-10.5-19.6-20.9-29.4-31.3c1.6-2.1,4-3.2,6.2-4.6
	c1.7,5.3,6.4,8.1,10.1,11.7c10.4,10,21.3,19.7,31.8,29.6c2.9,2.8,5.9,5.5,9.4,7.5C452.2,81.3,449.4,84.1,446.5,87z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M324.5,108.8c10.7,12.5,23.6,22.7,35.3,34.1c5.2,5.1,10.7,9.8,16,14.8c-2.8,2.9-5.7,5.8-8.5,8.7
	c-0.1-2.3-1.8-3.5-3.1-5c-14.4-15.2-28.8-30.4-43.2-45.6c-0.5-0.6-0.9-1.3-1.4-2C320.9,111.6,322.5,110,324.5,108.8z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M383.2,150.4c-1.5-4-4.8-6.4-7.6-9.4c-13.4-14.4-26.7-28.8-40.1-43.1c0.8-1.7,2-2.9,3.7-3.7
	c2.8,0.1,4.1,2.4,5.8,4.1c15.1,15.1,31.1,29.2,46.8,43.6C388.9,144.6,386,147.5,383.2,150.4z"/>
                </g>
        </svg>

        <div class="modal inner_color_model w3-animate-left" :id="'myModal'+dynamicIndexValue">
            <div v-if="ShowModalArea == 'myModal'+dynamicIndexValue">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <!-- Nav pills -->
                        <ul class="nav nav-pills nav-justified">
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Color"  @click="openElementInModal('palette')" ><img src="images/all_use_icon/paint.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Rotate"  @click="openElementInModal('rotate')" ><img src="images/all_use_icon/rotateicon.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Flip"  @click="openElementInModal('mirror')" ><img src="images/all_use_icon/flip_ltr.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Zoom"  @click="openElementInModal('opacity')" ><img src="images/all_use_icon/zoom-in.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Clone"   @click="openElementInModal('duplicate'), cloneElement($event)"><img src="images/all_use_icon/duplicate.svg"></a>
                            </li>
                            <!-- <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Layer"   @click="openElementInModal('layers')" ><img src="images/all_use_icon/layers.svg"></a>
                            </li> -->
                            <li class="nav-item" @click="removeElement(dynamicIndexValue)">
                                <a class="nav-link" data-toggle="Delete"><img src="images/all_use_icon/remove.svg"></a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link"  data-dismiss="modal" @click="hideElement" title="Close"><img src="images/all_use_icon/close-circle.svg" alt=""></a>
                            </li>
                        </ul>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div :class="{'tab-pane':true, active:ActivePalette=='active'}" id="palette">
                                <div class="bulldog_svg" :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
                                    <h2>Select Color</h2>
                                    <button :style="{background:'rgba('+getterToothbrushBg1+')'}" @click="ShowElement(getterToothbrushBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterToothbrushBg2+')'}" @click="ShowElement1(getterToothbrushBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterToothbrushBg3+')'}" @click="ShowElement2(getterToothbrushBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterToothbrushBg4+')'}" @click="ShowElement3(getterToothbrushBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterToothbrushBg5+')'}" @click="ShowElement4(getterToothbrushBg5)" :class="this.ValueId+'_color5btn'"></button>
                                </div>

                                <Colorpicker class="color_bulldog" v-if="this.showColorPicker" :colorElement="this.colorValue" :valueElement="this.clickedInput" />
                            </div>
                             <div :class="{'tab-pane':true, active:ActiveRotate=='active'}" id="rotate">
                                <div class="bulldog_svg">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <h2>Rotate</h2>
                                            <circle-slider v-model="sliderValue" :side="150" :min="0" :max="368" :step-size="2"></circle-slider>
                                        </div>
                                         <button @click="resetRotate()" type="button" class="btn btn-warning rotate_btn">Reset Rotate</button>
                                    </div>
                                </div>
                            </div>
                            <div :class="{'tab-pane':true, active:ActiveMirror=='active'}" id="mirror">
                                <div class="bulldog_svg">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <h2>flip</h2>
                                            <label for="fip-icon" :class="{flip_icon:true , active:rotateLeft=='active' }">
                                                <input  value="-1" type="radio" name="fipIcon" id="fip-icon" checked="" @click="sentFlip('-1')">
                                                <span class="title btn"><img src="images/all_use_icon/flip_icon.svg" style="transform:scaleX(-1)" alt="" title=""></span>
                                            </label>
                                            <label for="fip-icon" :class="{flip_icon:true , active:rotateRight=='active' }">
                                                <input  type="radio" value="1" name="fipIcon" id="fip-icon" checked=""  @click="sentFlip('1')">
                                                <span class="title btn"><img src="images/all_use_icon/flip_icon.svg" alt="" title=""></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="{'tab-pane':true , active:ActiveOpacity =='active'}" id="opacity">
                                <div class="bulldog_svg">
                                    <h2>Zoom</h2>
                                    <vue-slider ref="slider" v-model="scaleValue" v-bind="options">
                                    </vue-slider>
                                    <h3 class="text-right">{{ scaleValue * 10}}%</h3>
                                </div>
                            </div>
                            <!-- <div class="tab-pane fade" id="duplicate">
                                <div class="bulldog_svg">
                                    <h2>Image Duplicate</h2>
                                    <img src="images/all_use_icon/copy.svg" class="svg_popup" alt="" title="">
                                </div>
                            </div>
                            <div class="tab-pane fade" id="layers">

                            </div> -->

                        </div>
                    </div>
                    <!-- Modal footer -->
                    <!-- <div class="modal-footer" v-if="this.showColorPicker">
                        <button class="btn_grey" data-dismiss="modal" @click="hideElement">Close</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Colorpicker from '../colorPickerComponent'
    import VueSlider from 'vue-slider-component'
    import {
        mapState,
        mapActions,
        mapGetters,
        mapMutations
    }
    from 'vuex';
    export default {
        //   props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndex', 'ValueId' , 'svgName'],
        props: ['dynamicBackground', 'dynamicBackgroundOne', 'dynamicBackgroundTwo', 'dynamicIndexValue', 'ValueId', 'svgName', 'NavClicked'],
        components: {
            Colorpicker,
            VueSlider,
        },
        mounted() {
            /*
                This will get these from SvgComponentArray
            */
                this.sliderValue = this.$store.state.SvgComponent[this.dynamicIndexValue][0].circleSlider

                this.scaleValue = this.$store.state.SvgComponent[this.dynamicIndexValue][0].zoomValue
                
                this.flipElement = this.$store.state.SvgComponent[this.dynamicIndexValue][0].flipValue
            /*
                End
            */
            var width = window.innerWidth;
            var height = window.innerWidth
        var Toothbrush= [
                {top:254 ,left:50},
                {top:9 ,left:185},
                {top:478 ,left:118},
                {top:476 ,left:112},
                {top:330 ,left:143},
                {top:254 ,left:50},
                {top:8 ,left:49},
                {top:28 ,left:15},
                {top:41 ,left:127},
                {top:155 ,left:73},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Toothbrush[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Toothbrush[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Toothbrush'){
                //  console.log(randomNumber ,'---', randomNumberTop)
                 this.ACTION_CHANGE_STATE(['randomYAxis' , randomNumberTop])
                 this.ACTION_CHANGE_STATE(['randomXAxis' , randomNumber])
            }
            var randomWidth = randomNumber
            var randomHeight = randomNumberTop
        }else{    
            var randomWidth = Math.floor(Math.random()*200);
            var randomHeight = Math.floor(Math.random()*500);
        }
            var x = this.dynamicIndexValue
            $('#' + x).css({
                left: randomWidth,
                top: randomHeight
            })
            $("#myModal").modal({
                focus: false,
                // Do not show modal when innitialized.
                show: false,
                backdrop: 'static', // For static modal
                keyboard: false // prevent click outside of the modal
            });
            var DynamicIDs = this.dynamicIndexValue
            $(function() { 
            var isDragging = false;
            var test= $( "#"+DynamicIDs).draggable({
             zIndex: 100,
             cursor: "move",
            })
            // Getter
            var zIndex = $( "#"+DynamicIDs ).draggable( "option", "zIndex" );
            // Setter
            $( "#"+DynamicIDs ).draggable( "option", "zIndex", 100 );
            })
            
            // Getter
            var cursor = $( ".selector" ).draggable( "option", "cursor" );

            // Setter
            $( ".selector" ).draggable( "option", "cursor", "move" );
            var isDragging = false;
            var self = this  
            $( "#"+DynamicIDs).draggable({
                start: function( event, ui ) {},
                stop: function( event, ui ) {}
            });
            $( "#"+DynamicIDs).on( "dragstart", function( event, ui ) {
                // console.log(event)
                self.returnDrag = true
            });
             $( "#"+DynamicIDs).on( "dragstop", function( event, ui ) {
                setTimeout(function(){
                     self.returnDrag = false
                },500)
            }); 

        },
        computed: {
            ...mapState([
                    'background',
                    'background1',
                    'background2',
                    'dynamicIndex',
                    'dynamicName',
                    'newDisableIndex',
                    'randomYAxis',
                    'randomXAxis'
                ]),
                getterToothbrushBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toothbrush') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToothbrushBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toothbrush') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToothbrushBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toothbrush') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToothbrushBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterToothbrushBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                }

        },
        data() {
            return {
                colorValue: '',
                showColorPicker: false,
                clickedInput: '',
                value: 100,
                ShowModalArea: '',
                sliderValue: 0,
                options: {
                    dotSize: 14,
                    width: 'auto',
                    height: 10,
                    contained: false,
                    direction: 'ltr',
                    data: null,
                    min: 0.8,
                    max: 10,
                    interval: 0.2,
                    disabled: false,
                    clickable: true,
                    duration: 0.5,
                    tooltip: 'focus',
                    tooltipPlacement: 'top',
                    tooltipFormatter: void 0,
                    useKeyboard: false,
                    enableCross: true,
                    fixed: false,
                    minRange: void 0,
                    maxRange: void 0,
                    order: true,
                    marks: false,
                    dotOptions: void 0,
                    process: true,
                    dotStyle: void 0,
                    railStyle: void 0,
                    processStyle: void 0,
                    tooltipStyle: void 0,
                    stepStyle: void 0,
                    stepActiveStyle: void 0,
                    labelStyle: void 0,
                    labelActiveStyle: void 0,
                },
                scale: '0.2',
                scaleValue: '0.8',
                flipElement: '1',
                rotateLeft:'',
                rotateRight:'active',
                ActivePalette:'',
                ActiveRotate:'',
                ActiveMirror:'',
                ActiveOpacity:'',
                ActiveDuplicate:'',
                ActiveLayers:'',
                returnDrag:'',
                dataloop:[1 , 2, 3, 4, 5],

            }
        },
        watch: { 
            ShowModalArea: function(newVal, oldVal) { // watch it
                //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            },
            returnDrag: function(newVal, oldVal) { // watch it
                //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                this.returnDrag =newVal
            },

        },
        methods: {
            ...mapActions([
                    'ACTION_CHANGE_STATE',
                ]),
                ...mapMutations([

                ]),

                ShowElement(value) {
                    //   this.colorValue = value
                   // console.log(value, 'ssss')
                    var ColorValue = this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                    this.colorValue = 'rgba(' + ColorValue + ')'
                    this.showColorPicker = true
                    this.clickedInput = 'One'
                        //  console.log( , 'value')
                },
                ShowElement1(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1 + ')'
                    //console.log('sjahsja')
                    this.clickedInput = 'Two'
                    this.showColorPicker = true
                },
                ShowElement2(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2 + ')'
                    //console.log('sjahsja')
                    this.clickedInput = 'Third'
                    this.showColorPicker = true
                },
                ShowElement3(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3 + ')'
                    this.clickedInput = 'forth'
                    this.showColorPicker = true
                },
                ShowElement4(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4 + ')'
                    this.clickedInput = 'five'
                    this.showColorPicker = true
                },
                hideElement() {
                    this.showColorPicker = false
                    this.ShowModalArea = false
                    this.enableDragData()
                    $("svg").removeClass("active");
                    //Null Active element of modal-body 
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveMirror =''
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                    //Null Active element of modal-body       
                },
                getCircle(value, e){
                   // console.log(e.currentTarget)
                    if(this.returnDrag != true){
                        $("svg").removeClass("active");
                        $("#"+value+" svg").removeClass("active");
                        $(e.currentTarget).addClass('active')
                         //Null Active element of modal-body 
                            this.ActiveOpacity =''
                            this.ActiveRotate =''
                            this.ActiveMirror =''
                            this.ActiveDuplicate =''
                            this.ActiveLayers=''
                            this.ActivePalette =''
                        //Null Active element of modal-body   
                        this.ShowModalArea = false
                        var hideElementValueModal = ($('#hiddenModal').val())
                    if(hideElementValueModal !=''){
                            $('#myModal'+hideElementValueModal).hide()
                            $("#"+hideElementValueModal).draggable("enable")
                            $('#myModal'+hideElementValueModal).modal("hide");
                            $('#myModal'+value).css('display', 'block')
                    }
                        var closeModal= $('#hiddenModal').val(value)
                    
                        this.ShowModalArea = 'myModal'+value
                        this.ACTION_CHANGE_STATE(['dynamicIndex' ,value ])
                        this.ACTION_CHANGE_STATE(['tempModalIndex', value])
                        this.ACTION_CHANGE_STATE(['dynamicName' ,this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name+value ])
                        this.ACTION_CHANGE_STATE(['editSvgClicked' ,true])
                    
                    }
                },
                disableDraggable(value) {
                    // alert(value)
                    $("#" + value).draggable("disable")
                    this.ACTION_CHANGE_STATE(['newDisableIndex', value])
                },
                enableDragData() {
                    if(this.$store.state.newDisableIndex !=''){
                        $("#"+this.$store.state.newDisableIndex).draggable("enable")
                    }else{
                        $("#"+this.dynamicIndexValue).draggable("enable")
                    }
                },
                sentFlip(value) {
                    this.flipElement = value
                    if(value ==  '-1'){
                        this.rotateRight = ''
                        this.rotateLeft ='active'
                    }else{
                            this.rotateLeft =''
                        this.rotateRight = 'active'
                    }
                },
                removeElement(value){
                $('#'+this.$store.state.dynamicIndex).remove()
                  //After this remove from array to SvgComponent  from store
                },
                openElementInModal(value){
                 
                    if(value =='palette'){
                        this.ActiveOpacity =''
                        this.ActiveMirror =''
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActiveRotate =''
                        this.ActivePalette ='active'
                    }else if( value == 'rotate'){
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate ='active'
                        this.ActiveMirror =''
                    }else if( value == 'mirror'){
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveMirror ='active'
                    }else if( value == 'opacity'){
                        this.ActiveMirror =''
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveRotate =''
                        this.ActiveOpacity ='active'
                    }else if( value == 'duplicate'){
                        this.ActiveMirror =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveDuplicate ='active'
                    }else if( value == 'layers'){
                        this.ActiveMirror =''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveDuplicate ='active'
                        this.ActiveLayers ='active'
                    }
                },
                resetRotate(){
                    this.sliderValue = 0
                },
                cloneElement(e){
                    var number = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id
                    var cloneElementId = number.split('l')
                    var elemntId = cloneElementId[1]
                    var styleAttrClone = $('#'+elemntId).find( "svg" ).attr('style')
                    /* 
                    This is for color dynamic on clone 
                    */
                    var tempArrayClone = this.$store.state.SvgComponent[elemntId][0]
                    var backgroundClone = tempArrayClone.background 
                    var background1Clone =tempArrayClone.background1 
                    var background2Clone =tempArrayClone.background2 
                    var background3Clone =tempArrayClone.background3 
                    var background4Clone =tempArrayClone.background4 
                    var background5Clone =tempArrayClone.background5 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Toothbrush',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            circleSlider: circleSliderClone,
                            zoomValue:scaleValueClone,
                            flipValue:flipElementClone,
                        }
                        ]
                        this.$store.state.SvgComponent.push(tempArray)
                        var cloneIndex = this.$store.state.SvgComponent.length-1 
                        $(document).ready(function(){
                           // console.log($('.Svg_'+cloneIndex+'_color1') , 'length')
                            $('.Svg_'+cloneIndex+'_color1').css({fill: 'rgba('+backgroundClone+')'})
                            $('.Svg_'+cloneIndex+'_color2').css({fill: 'rgba('+background1Clone+')'})
                            $('.Svg_'+cloneIndex+'_color3').css({fill: 'rgba('+background2Clone+')'})
                            $('.Svg_'+cloneIndex+'_color4').css({fill: 'rgba('+background3Clone+')'})
                            $('.Svg_'+cloneIndex+'_color5').css({fill: 'rgba('+background4Clone+')'})
                            
                            $('#'+cloneIndex).find("svg").attr('style',styleAttrClone);
                        })
                    /* 
                    End
                    */
                }
        }
    }
</script>

<style>

</style>