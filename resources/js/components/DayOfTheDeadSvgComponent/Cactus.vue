<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M176.3,660.9c-8-2.2-13.3-7.1-16.2-15c-11.6-32-23.3-64-34.9-96c-1.1-3-2.6-5.2-5.2-7.1
	c-6.2-4.6-9.5-10.8-9.4-18.8c0.2-19.1,0-38.2,0-57.4c0-13.8,9.6-23.3,23.3-23.4c14.8-0.1,29.7-0.1,44.5,0.1c3.8,0.1,5.2-0.8,5.2-5
	c-0.2-22.4-0.1-44.7-0.2-67.1c0-8.3-2.3-10.5-10.3-10.7c-20.9-0.5-41.3-2.6-60.2-12.6c-31.3-16.5-52.1-41.5-61.2-75.8
	c-1.2-4.4-2.6-6.8-7.5-5.9c-2.2,0.4-4.5,0.2-6.7,0c-6.1-0.5-10.3-5.2-10.1-10.9c0.2-5.5,4.4-9.5,10.3-9.9
	c10.4-0.7,10.4-0.7,10.4-11.1c0-0.2,0-0.4,0-0.6c0-8.9,0-8.9-8.6-9.1c-7.5-0.2-12.3-4.4-12.1-10.7c0.1-6.2,4.6-10,12-10.1
	c1.6,0,3.3-0.2,4.9,0c3.4,0.5,4.1-1.2,4-4.2c-0.2-4.3-0.3-8.6,0-12.8c0.3-3.5-1.3-4-4.2-3.9c-2.8,0.1-5.7,0.1-8.5-0.5
	c-5.2-1.1-8.4-5.5-8.1-10.6c0.3-5.1,4.2-10,9.3-9.4c9.3,1.2,11.6-3.1,13.9-11.2c5.8-20.6,25.9-33.2,45.6-30.2
	c20.8,3.2,35.1,20.4,35.1,42.5c0.1,22.8,0,45.6,0,68.3c0,29.7,19.5,47.4,48.9,44.5c2.8-0.3,3.5-1.3,3.3-3.8c-0.1-1.6,0-3.3,0-4.9
	c-0.1-3.8,1-8.5-0.8-11.2c-1.8-2.7-6.8-0.6-10.4-1c-5.4-0.6-9.2-4.2-9.6-9.3c-0.4-5.7,2.4-9.3,7.6-11c0.9-0.3,2-0.4,3-0.5
	c10.1-0.7,10.1-0.7,10.1-10.7c0-2-0.2-4.1,0.1-6.1c0.4-3.3-1.1-4.3-4.2-4c-2.2,0.2-4.5,0.1-6.7,0c-5.7-0.3-9.6-4.2-9.9-9.6
	c-0.3-5.4,3.1-9.9,8.5-11c3.9-0.8,10.4,1.6,11.4-1.1c1.9-5,0.6-11.1,0.9-16.8c0.1-2.4-0.9-3.2-3.2-3.1c-2.6,0.1-5.3,0.2-7.9,0
	c-5.6-0.4-9.4-4.5-9.6-9.9c-0.2-5.4,3.4-9.8,8.8-10.8c0.6-0.1,1.2-0.1,1.8-0.1c10.2-0.6,10.2-0.6,10.2-10.7c0-2-0.2-4.1,0-6.1
	c0.4-3.3-1-4.3-4.1-4c-2.4,0.2-4.9,0.2-7.3,0c-5.5-0.5-9.3-4.8-9.4-10.1c-0.1-5.6,3.9-10,9.6-10.6c3.6-0.4,8.3,1.6,10.5-0.9
	c2-2.3,1.3-6.9,1.9-10.5c5.7-30.4,33.4-56.5,63.2-60.8c38.1-5.6,73.2,25.1,79.7,58.4c0.4,2,1.3,4.1,1,6c-1.3,7.9,3.2,8.1,9.1,7.9
	c7.7-0.3,12.1,3.9,12,10.5c-0.1,6.3-4.5,10.1-11.8,10.2c-8.9,0.1-8.9,0.1-8.9,8.8c0,0.6,0,1.2,0,1.8c0,9.8,0,9.8,9.6,10.1
	c6.8,0.3,11.1,4.2,11.2,10.3c0.1,6.4-4.2,10.4-11.5,10.5c-9.3,0.2-9.3,0.2-9.3,9.2c0,3.6-1,8.1,0.7,10.7c1.7,2.6,6.4,0.6,9.8,0.9
	c6.2,0.6,10.4,4.8,10.3,10.6c-0.1,5.9-4.1,9.9-10.6,10.2c-10.2,0.5-10.2,0.5-10.2,10.7c0,9.7,0,9.7,9.5,10.1
	c7,0.3,11.4,4.6,11.2,10.9c-0.2,6.1-4.3,9.7-11.4,9.9c-9.3,0.2-9.3,0.2-9.3,9.8c0,5.9,0.1,11.8-0.1,17.7c-0.1,2.8,0.6,3.7,3.7,4
	c31.2,2.5,49.8-20.8,48.8-45.5c-1-22.3-0.2-44.7-0.2-67.1c0-23.2,14.4-39.9,37.2-43.3c18.8-2.8,40.6,13.1,44.6,33.6
	c1.3,6.6,3.7,8.7,9.9,7.8c5.8-0.8,9.4,2.6,12.2,7.2c0,2.4,0,4.9,0,7.3c-1.7,5.7-5.8,7.7-11.5,7.8c-7.5,0.2-7.5,0.4-7.6,8.1
	c0,0.8,0.1,1.6,0,2.4c-0.5,4.8,1.3,7.1,6.4,6.9c6.3-0.2,10.9,2.5,12.6,8.9c0,2.4,0,4.9,0,7.3c-1.6,6.3-6.3,7.6-12,7.8
	c-6.8,0.2-7,0.5-7.1,7.4c0,1,0.1,2,0,3c-0.5,4.7,1.2,7.1,6.3,7.1c6.1,0,11.1,2.2,12.7,8.9c0,2.4,0,4.9,0,7.3
	c-1.5,6.1-5.9,7.9-11.5,7.8c-11.1-0.2-9.5,1.6-12.3,9.6c-16.8,48.6-50.7,76.7-101.6,84.1c-6.2,0.9-12.6,0.1-18.9,0.3
	c-7.2,0.3-10.1,2.9-10.2,10.1c-0.2,17.9,0,35.8-0.1,53.7c0,4.5,1.9,6.1,6.3,6c13.8-0.1,27.7-0.1,41.5,0c15.3,0.1,25.3,9.8,25.4,25.2
	c0.2,18.9,0,37.8,0.1,56.7c0,7.1-2.3,13.2-7.7,17.9c-4.8,4.1-7.4,9.4-9.5,15.3c-10.2,28.5-20.7,56.9-31,85.5
	c-1.7,4.8-3.7,9.4-7.4,13.2c-3.8,3.8-8,6.2-13.5,5.9c-50.6,0-101.3,0-151.9,0C180.7,661.4,178.4,661.9,176.3,660.9z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M485.3,221.3c-3.1-5.5-7.9-8.1-14.1-7.1c-5.8,0.9-7.5-1.6-6.6-6.9c0.1-0.6,0-1.2,0-1.8
	c0.1-3.8-1.1-8.6,0.8-11.2c1.8-2.6,6.8-0.8,10.4-0.9c4.6-0.1,6.8-3.7,9.7-6.2C485.3,198.5,485.3,209.9,485.3,221.3z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M485.3,262.8c-3.2-5.4-7.9-8-14.2-7c-5.8,0.9-7.5-1.6-6.6-6.9c0.1-0.6,0-1.2,0-1.8
	c0.1-3.8-1-8.5,0.8-11.2c1.8-2.6,6.8-0.8,10.4-0.9c4.6-0.1,6.8-3.7,9.6-6.3C485.3,240,485.3,251.4,485.3,262.8z"/>
<path style="fill:#4F4F4F;transform:scale(0.2)" d="M336.4,660.9c-0.1,0.3-0.2,0.5-0.2,0.8c0,0.1,0.1,0.3,0.1,0.4c-53.3,0-106.6,0-159.9,0
	c0-0.4-0.1-0.8-0.1-1.2C229.7,660.9,283,660.9,336.4,660.9z"/>
<path style="fill:#2EB532;transform:scale(0.2)" :class="ValueId+'_color2'" d="M443.6,258.6c-1.2,44.8-30.8,80.7-75.7,89.4c-10,1.9-20.2,1.9-30.3,1.4c0,0,0,0,0,0
	c-1.1,0.1-2.3,0.3-3.4,0.4c0,0,0,0,0,0c-18.3,6.4-27,20.3-26,38.4c0.9,16.6,0.1,33.2,0.3,49.8c0,4.3-1,5.7-5.6,4.9
	c-4.5-0.8-9.3-0.4-13.9-0.5c-0.3-0.3-0.5-0.7-0.6-1.1c-0.2,0.4-0.5,0.8-0.8,1.1c-26.2,0.1-52.5,0.1-78.7,0.3c-4.3,0-4.3-2.2-4.3-5.3
	c0.1-21.6-0.5-43.1,0.2-64.7c0.5-16.4-15-35.1-36-34c-48.9,2.7-87.9-27.3-97.7-74.6c-1.1-5.5-1.8-11.3-1.8-16.9
	c-0.2-27.9-0.2-55.7-0.1-83.6c0-14,8-21.8,22-21.8c0,0,0,0,0,0c11.3,0.3,19.4,8.4,19.5,19.7c0.1,19.5,0.5,39-0.1,58.4
	c-0.5,17.8,1.3,34.7,11.2,50.1c4.1,4.2,7.9,8.8,12.4,12.6c12.6,10.7,27.3,15.8,44,14.6c4.5-0.3,6.5,1,5.8,5.7
	c-0.3,1.8-0.1,3.7,0,5.5c0.4,5.5,4,9.2,9.2,9.6c5.7,0.4,10-2.6,11.2-8.1c0.5-2.2,0.3-4.4,0.3-6.7c0-64.5-0.1-129,0.1-193.4
	c0.1-26.8,21.1-49.4,47.1-51c8.9-0.5,17.9-0.7,26.2,3.8c0,0,0,0,0,0c16.9,6.2,30.3,24.2,30.4,42.6c0.2,60.7,0,121.4,0,182.1
	c0.1,9.8,0.1,19.5,0.2,29.3c0.1,7.4,4.6,12.4,10.7,12.2c6.2-0.2,9.9-4.7,10-12.1c0.1-8.6,0.1-8.6,8.7-8.7
	c36.8-0.1,64.2-27.6,64.3-64.6c0-23.8-0.1-47.6,0.1-71.4c0.1-11.6,9-20,20.7-20c0,0,0,0,0,0c13.7,1.2,20.7,8.5,20.8,22
	C443.8,202.1,444.3,230.4,443.6,258.6z"/>
<path style="fill:#F29900;transform:scale(0.2)" :class="ValueId+'_color3'" d="M381.4,522.6c0,4.9-3.2,3.8-5.8,3.8c-27.7,0.1-55.3,0.1-83,0.1c-51.7,0-103.3-0.1-155,0.1
	c-5.2,0-6.4-1.4-6.3-6.5c0.3-16.7,0.1-33.4,0.2-50c0-1.8-1.2-4.1,1-5.6c17-0.1,34.1-0.4,51.1-0.4c56.8,0,113.7,0,170.5,0
	c2.2,0,4.5,0.2,6.7,0.2c5.7-0.1,11.4-0.1,17.1-0.3c2.6-0.1,3.6,1,3.5,3.6C381.3,485.9,381.2,504.3,381.4,522.6z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M240.7,99.6c1.6,0,3.3-0.1,4.9,0c6.7,0.7,10.4,4.4,10.5,10.3c0.1,6-3.4,9.6-10.2,10.5
	c-3.5,0.5-6.9,0.3-10.3-0.1c-6.6-0.7-10.4-4.5-10.3-10.4c0.1-5.7,4.2-9.8,10.6-10.4C237.4,99.5,239.1,99.6,240.7,99.6z M245.4,307.9
	c6.8-0.3,10.8-4.4,10.7-10.7c-0.1-6.1-3.9-9.8-10.6-10.1c-3.2-0.1-6.5-0.1-9.7,0c-6.4,0.2-10.5,4.3-10.6,10.2
	c0,5.7,4.3,10.1,10.4,10.6c1.6,0.1,3.2,0,4.9,0C242.1,308,243.7,308,245.4,307.9z M267.8,328.8c-7.1,0.2-11.1,3.8-11.2,10.1
	c-0.1,6.5,4.1,10.5,11.3,10.7c3,0.1,6.1,0.1,9.1,0c6.3-0.4,10.5-4.6,10.4-10.4c0-5.8-4.3-10-10.5-10.3c-1.6-0.1-3.2,0-4.9,0
	C270.7,328.7,269.2,328.7,267.8,328.8z M245.1,214.1c6.8-0.2,10.7-3.6,10.9-9.7c0.3-6.3-3.7-10.6-10.3-11c-3.6-0.2-7.3-0.3-11,0.1
	c-5.7,0.5-9.7,5.2-9.5,10.7c0.1,5.6,4.2,9.6,10.2,9.9c1.8,0.1,3.7,0,5.5,0C242.3,214.1,243.7,214.2,245.1,214.1z M276.2,255.7
	c7-0.2,11.2-4,11.3-10c0.1-6.2-4.5-10.5-11.5-10.7c-3.2-0.1-6.5-0.2-9.7,0.1c-6.3,0.6-10,5-9.7,11.1c0.3,5.8,4.1,9.3,10.4,9.6
	c1.6,0.1,3.2,0,4.9,0C273.3,255.7,274.8,255.7,276.2,255.7z M267.9,141.6c-6.9,0.2-10.8,3.5-11.2,9.3c-0.4,6.3,3.2,10.7,10.1,11.3
	c3.8,0.4,7.7,0.4,11.5-0.1c5.9-0.8,9.5-5.4,9.3-10.9c-0.3-5.6-4.3-9.3-10.5-9.6c-1.6-0.1-3.2,0-4.9,0
	C270.7,141.6,269.3,141.6,267.9,141.6z M240.6,380.9c-1.6,0-3.2-0.1-4.9,0c-5.9,0.3-9.9,3.7-10.5,8.9c-0.6,5.6,2.8,10.4,8.6,11.4
	c5.2,0.9,10.5,1.2,15.7-0.5c5.2-1.7,7.1-5.8,6.5-11c-0.6-5.1-3.6-8-8.7-8.7C245.1,380.8,242.9,381,240.6,380.9
	C240.6,381,240.6,381,240.6,380.9z"/>
<path style="fill:#F35801;transform:scale(0.2)" :class="ValueId+'_color4'" d="M364.1,553.7c-7.5,20.4-14.9,40.8-22.3,61.2c-2.6,7.2-5.4,14.5-7.8,21.8c-1.1,3.1-2.7,4.5-6.2,4.5
	c-47.8-0.1-95.6,0-143.3,0c-0.8,0-1.6-0.3-2.4-0.5c-0.3,0-0.7-0.2-1-0.3c-5.2-10.1-8.2-21.1-12.2-31.7c-7-18.8-13.7-37.8-20.7-56.6
	c-1.1-2.9-1.9-4.8,2.7-4.7c65.1,0.2,130.2,0.2,195.2,0.3c4.5-0.1,8.9-0.2,13.4-0.2C366.4,547.3,366.4,547.3,364.1,553.7z"/>
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
                                    <button :style="{background:'rgba('+getterCactusBg1+')'}" @click="ShowElement(getterCactusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCactusBg2+')'}" @click="ShowElement1(getterCactusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCactusBg3+')'}" @click="ShowElement2(getterCactusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCactusBg4+')'}" @click="ShowElement3(getterCactusBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <!-- <button :style="{backgroundColor:'rgba('+getterCactusBg5 +')'}" @click="ShowElement4(getterCactusBg5 )" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCactusBg6+')'}" @click="ShowElement5(getterCactusBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCactusBg7+')'}" @click="ShowElement6(getterCactusBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCactusBg8+')'}" @click="ShowElement7(getterCactusBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCactusBg9+')'}" @click="ShowElement8(getterCactusBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCactusBg10+')'}" @click="ShowElement9(getterCactusBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Cactus= [
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
            var randomNumber = Cactus[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cactus[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cactus'){
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
                getterCactusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cactus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cactus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cactus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCactusBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCactusBg10: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9
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
                ShowElement5(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5 + ')'
                    this.clickedInput = 'six'
                    this.showColorPicker = true
                },
                ShowElement6(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6 + ')'
                    this.clickedInput = 'seven'
                    this.showColorPicker = true
                },
                ShowElement7(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7 + ')'
                    this.clickedInput = 'eight'
                    this.showColorPicker = true
                },
                ShowElement8(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8 + ')'
                    this.clickedInput = 'nine'
                    this.showColorPicker = true
                },
                ShowElement9(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9 + ')'
                    this.clickedInput = 'ten'
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
                    var background6Clone =tempArrayClone.background6 
                    var background7Clone =tempArrayClone.background7 
                    var background8Clone =tempArrayClone.background8 
                    var background9Clone =tempArrayClone.background9 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Cactus',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
                            background8:  background8Clone,
                            background9:  background9Clone,
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
                            $('.Svg_'+cloneIndex+'_color6').css({fill: 'rgba('+background5Clone+')'})
                            $('.Svg_'+cloneIndex+'_color7').css({fill: 'rgba('+background6Clone+')'})
                            $('.Svg_'+cloneIndex+'_color8').css({fill: 'rgba('+background7Clone+')'})
                            $('.Svg_'+cloneIndex+'_color9').css({fill: 'rgba('+background8Clone+')'})
                            $('.Svg_'+cloneIndex+'_color10').css({fill: 'rgba('+background9Clone+')'})
                            
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