<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#7EB83A; transform:scale(0.2)" :class="ValueId+'_color1'" d="M150.4,66.8c-2.4,2.6-4.8,4.9-8.2,5.7c-2.6,0.6-4.9,1.6-7,3.2c-1.3,1-3.1,2.1-4.5,1.3
	c-3.4-2.1-5.6,0.3-8.1,1.5c-3.7,2.1-7.4,3.2-11.7,1.7c-1.9-0.7-3.8,0.2-5.6,1.2c-2,1.2-3.9,2.4-6.1,3c-3.7,1-5.9-0.7-5.9-4.5
	c-0.1-3.8,1.9-7.1,2.4-10.8c0.3-1.8,1.4-4,0.7-5.2c-2-3.1-0.3-5.3,0.9-7.8c0.9-1.8,1.7-3.5,1.5-5.6c-0.2-2.1-0.9-2.9-3.1-1.5
	c-3.5,2.4-6,1.8-8.5-1.6c-0.5-0.7-1-1.4-1.3-2.2c-2.8-6.1-5-12.5-7.8-18.6c-3.3-7.5-4.7-15.5-6.2-23.5C71.6,2.2,72-0.1,70.4,0
	c-1.8,0.1-1.9,2.3-1.9,4c-0.1,1.9,0.4,3.7,0.9,5.4c0.9,3.1,1.7,6.3,2.6,9.4c0.9,3.1,0.7,6.2-1,8.8c-3.8,5.6-6.1,11.6-7,18.3
	c-0.1,1-0.3,2.1-1.5,2.3c-1.1,0.1-1.9-0.6-2.6-1.5c-1.1-1.5-2.3-2.9-3.7-4.1c-1.9-1.7-3.2-1.2-3.3,1.4c-0.1,2.8,0.1,5.6,0.3,8.4
	c0.3,4.3,1.3,8.7,0.8,12.9c-0.5,4.2-1.7,8.1,0.1,12.3c0.9,2.2-0.3,4.4-2.4,5.5c-2.2,1.2-4.4,3.2-7.3,1.2c-2.3-1.5-4.3-3.3-6.4-5
	c-0.7-0.5-1.6-1.8-2.4-0.6c-1.2,1.9-2.7,0.9-4,0.7c-4.1-0.7-7.7-2.8-11.5-4.2c-0.8-0.3-2.2,0.7-2.2-1.1c-0.1-0.2-0.3-0.3-0.5-0.2
	c-2.8-1.4-5.9-2-9-2.6c-3.1-0.6-4.5-4.2-8.3-4.8c1.2,3.2,2.6,5.8,5.3,7.4c3.2,1.9,6.4,3.7,9.6,5.5c0.7,0.6,1.5,1.2,2.2,1.9
	c0.8,0.7,0.9,1.6-0.1,2.1c-3.2,1.6-2.4,4.1-1.5,6.4c1.4,3.3,3,6.5,4.8,9.6c1.6,2.8,2,5.1-0.9,7.3c-1.1,0.8-2,2-2.9,3.1
	c-2.2,2.7-2.1,3.3,1,4.7c3.9,1.9,8,3.3,12.2,4.4c2.3,0.6,4.6,1.3,6.7,2.5c2.9,1.6,3.5,3.4,1.9,6.1c-3.3,5.7-7.7,10.4-14,13
	c-0.7,0.3-1.8,0.1-2,1.5c6,0.7,12,1.4,18,2.2c2.8,0.4,5.9,0.7,7.8,2.8c3.3,3.6,6.9,3,10.7,1.4c2.7-1.1,5.3-2.6,8.5-4.2
	c-2.7,8.9-4.7,17.3-6.9,25.6c-2.4,9.5-3.7,19.3-7.9,28.3c-0.6,1.3,0.1,1.4,1.1,1.5c3.4,0.5,3.6-2.1,4-4.2c2.7-12.5,5.3-25,8.1-37.5
	c1-4.4,2.3-8.8,3.5-13.7c4.8,5.1,10.1,7.9,16.5,7.4c8.5-0.6,16.1-4.9,24.4-6.4c1.6-0.3,2-1.7,1.3-3.4c-1-2.3-2.4-4.4-4-6.3
	c-4.2-4.9-3.3-7,1.9-10c1.1-0.6,2.3-1.3,3.4-1.8c3.4-1.7,7.1-2.6,10.2-4.9c6-3.1,12.2-5.9,18.1-10.2c-2-0.9-3.1-0.1-4.2,0
	c-3.5,0.4-5.4-2.2-6.9-4.6c-1.5-2.3-0.9-4.8,1.4-6.6c1.9-1.4,3.1-3.4,4.1-5.4c1-2,2.2-3.3,4.5-3.7c1.7-0.3,2.9-1.3,3.3-3.1
	c1-4.7,3.2-8.9,5.9-12.9C150.6,70.9,151.2,69.2,150.4,66.8z"/>
<path style="fill:#FD6202; transform:scale(0.2)" :class="ValueId+'_color3'" d="M470,76c-2.4,2.7-5.5,4.2-9,4.8c-1.4,0.3-2.7,0.8-3.9,1.5c-2.5,1.6-4.9,3.3-8,1
	c-0.5-0.3-1.7,0.2-2.5,0.5c-1.7,0.7-3.4,1.5-5,2.4c-3,1.7-5.9,2.4-9.3,1c-2.2-0.9-4.4-0.5-6.6,0.6c-1.5,0.8-3.1,1.5-4.7,2.2
	c-2,0.9-4,1.4-5.8-0.1c-1.9-1.5-1.8-3.6-1.2-5.7c1-3.8,2-7.5,3.1-11.3c0.4-1.3,0.9-2.7,0.2-3.8c-1.6-2.3-0.4-4.1,0.6-6
	c1.1-2,2.3-3.9,2.2-6.3c-0.1-2.1-0.6-3.1-2.9-1.6c-3.6,2.3-5.8,1.7-8.3-1.7c-0.6-0.9-1.3-1.8-1.6-2.8c-1.8-6.9-5-13.3-7.4-20
	c-2.5-7.3-3.6-14.9-4.8-22.5c-0.2-1.1,0.5-3.4-1.5-3.3c-1.7,0.1-1.7,2.3-1.9,3.7c-0.1,0.6,0,1.3,0.2,1.9c0.8,3.6,1.5,7.2,2.4,10.8
	c1.2,4.8,0.9,9.3-2.3,13.2c-3.2,4-4.9,8.6-5.8,13.6c-0.1,0.5-0.3,1-0.4,1.6c-0.3,1.2-0.3,2.7-1.7,2.9c-1.2,0.2-2-1.1-2.8-2
	c-0.9-1.1-1.7-2.2-2.7-3.2c-0.8-0.8-1.7-2.1-3-1.4c-1.1,0.5-1.1,1.8-1.1,2.9c0.1,4.3,0.1,8.7,0.4,13c0.3,4,0.5,8-1.2,11.8
	c-0.8,1.8-0.5,3.5,0.1,5.4c1.4,4.5,0.6,6.7-2.8,8.6c-3.9,2.1-6.9,1.3-10.1-1.9c-1.7-1.7-3-5.2-6.7-2.7c-0.7,0.4-2.1-0.2-3.1-0.5
	c-3.8-1-7.3-2.8-10.7-4.7c-1.6-0.9-3.1-1.9-5-2.2c-5.1-1.5-10-3.6-14.1-7.2c1.7,7.1,7.5,9.7,12.8,12.7c1,0.8,2.1,1.6,3.1,2.4
	c1.1,0.9,1.3,1.8-0.1,2.5c-2.8,1.3-2.4,3.5-1.8,5.8c1.1,3.7,3.1,6.9,4.7,10.3c1.4,2.8,1.5,5.3-1.4,7.3c-1.2,0.9-2.2,2.1-3.2,3.2
	c-1.6,1.7-1.7,3,0.7,4.2c4.1,2,8.3,3.6,12.7,5c2.3,0.7,4.5,1.6,6.5,2.9c2.5,1.6,2.8,3.6,1.4,6.1c-1.4,2.5-3.2,4.6-5.3,6.6
	c-3.2,3.1-7,5.2-11.2,7c5.2,1.1,10.3,1.8,15.4,2.7c3.5,0.6,7.4,1,9.9,3.7c3.1,3.4,6.4,3.3,10,2c2.9-1,5.7-2.4,8.5-3.6
	c0.6,1.3,0.1,2.3-0.3,3.3c-4.7,12.5-7.6,25.5-11.5,38.3c-1.1,3.5-1.8,7.1-3.5,10.4c-0.4,0.8-2.2,1.7-0.2,2.4
	c1.1,0.4,2.7,0.8,3.4-1.2c0.6-1.8,1.4-3.6,1.9-5.4c3.9-15,7.3-30.1,11.9-44.9c0.7-2.4,1.3-2.8,3.2-0.9c4.9,5,11.1,7,17.8,5.6
	c6.8-1.4,13.3-3.7,20.2-4.9c2.3-0.4,2.8-2,1.9-3.9c-0.8-1.8-1.7-3.5-2.9-5.1c-4.5-5.9-4.5-7.6,3.5-11.9c0.8-0.4,1.6-0.7,2.4-1
	c7.9-2.7,15.3-6.5,22.8-10.3c1.8-0.9,3.6-1.8,5.1-3.4c-1.5-1-2.8-0.3-4-0.2c-3.4,0.1-5-2.5-6.3-4.8c-1.2-2.1-0.4-4.3,1.5-6.1
	c1.6-1.5,3.1-3.3,4.2-5.2c1.2-2.1,2.7-3.5,5.2-3.8c1.6-0.2,2.6-1.3,3-3c1.5-5.7,4.7-10.4,8.1-15c0-1.1,0-2.2,0-3.3
	C471,75.1,470.4,75.4,470,76z"/>
<path style="fill:#DCD22A; transform:scale(0.2)" :class="ValueId+'_color2'" d="M314.1,71c-3.3,4.3-7.9,5.3-12.5,6.6c-0.8,0.2-1.5,0.8-2.3,1.3c-2.2,1.2-4.3,2.7-6.8,0.6
	c-0.8-0.7-1.9,0-2.8,0.3c-2,0.9-4,1.7-5.9,2.7c-2.5,1.3-5,1.7-7.8,0.8c-2.7-0.8-5.3-0.6-7.9,0.9c-1.5,0.9-3.1,1.5-4.7,2.2
	c-4.6,1.8-6.8,0.2-6.4-4.9c0.3-3.7,1.9-7.1,2.8-10.7c0.5-1.8,1.4-3.7,0.6-5.4c-1.3-2.6-0.4-4.6,1-6.6c1.2-1.8,2-3.8,1.8-6.1
	c-0.2-2-0.8-2.4-2.7-1.4c-3.8,2.2-5.7,1.8-8.4-1.5c-0.4-0.5-0.8-1-1.2-1.5c-2-7-4.9-13.8-7.5-20.6c-3.3-8.7-4-18.1-5.8-27.2
	c-0.2,0-0.4,0-0.7,0c-2.5,2.3-2.2,5.3-1.7,8.2c0.8,3.8,1.7,7.6,2.6,11.4c0.7,3,0.4,6-1.4,8.4c-4.1,5.5-6.5,11.7-7.9,18.3
	c-0.5,2.8-2,2.4-3.6,0.7c-1.3-1.3-2.4-2.8-3.6-4.2c-0.6-0.7-1.4-1.6-2.5-1.2c-1.3,0.4-1.3,1.7-1.4,2.7c-0.1,3.2-0.1,6.5,0.1,9.8
	c0.3,5.6,1.2,11.2-1.2,16.7c-0.6,1.3,0,2.6,0.5,3.8c1.2,3.4,0.9,6.4-2.2,8.7c-4.2,2.5-7.5,1-10.7-2c-1.8-1.7-3.3-5.1-6.8-2.4
	c-0.4,0.3-1.4-0.2-2.2-0.4c-3.7-0.9-7.1-2.5-10.4-4.5c-2.3-1.4-4.7-2.7-7.4-3.3c-4.2-1-8-2.4-11-5.7c-0.4-0.5-1.1-1.1-2.1-0.5
	c1.1,4.7,4.4,7.4,8.2,9.8c2.5,1.5,5,3,7.4,4.6c1.1,0.7,2.4,1.9,0.4,2.9c-2.7,1.4-2.4,3.5-1.7,5.8c1.3,4.2,3.4,8,5.4,11.8
	c0.8,1.6,0.8,2.5-0.3,3.6c-1.8,1.9-3.6,3.8-5.3,5.7c-1.4,1.5-1.3,2.7,0.7,3.8c4.2,2.2,8.7,3.8,13.3,5.2c10.1,3.2,11,7,3.4,14.5
	c-3.5,3.5-7.6,6.3-12.4,7.9c8,1.9,16.2,2.2,23.8,5c0.7,0.5,1.5,0.9,2,1.5c2.4,3.6,5.8,3.2,9.2,2.2c3.3-1,6.3-2.6,9.3-4.3
	c0.3,1.9-0.5,3.6-1.1,5.3c-1.4,4-3.1,8-3.8,12.2c-1.8,6.5-3.7,13-5.5,19.4c-2.4,5.4-2.6,11.5-5.9,16.6c-0.5,0.7-0.2,1.3,0.7,1.3
	c1.6,0.2,3.3,0.3,3.8-1.9c0.5-2.1,1.1-4.1,1.6-6.2c-0.8-0.9-0.7-1.6,0.6-2c0.1-0.4,0.1-0.8,0.2-1.2c1.7-6.8,4.3-13.3,4.5-20.4
	c0.8-0.3,1.1-0.9,1.3-1.7c2-7.1,4-14.1,6-21.2c3.4,3.2,6.7,6.6,11.7,7.3c2.2,1.2,4.7,1.1,7,0.6c7.4-1.4,14.6-4,22.1-5.3
	c2-0.4,2.4-1.9,1.5-3.8c-1.3-2.9-3-5.5-4.9-8.1c-1.7-2.3-1.2-4.2,0.8-5.9c1-0.8,2.1-1.6,3.2-2.1c5.5-2.4,11.2-4.6,16.6-7.2
	c5-2.4,10-4.8,14.6-8.5c-4.5,1.7-7.2-0.8-9.7-3.7c-1.8-2-1.9-4.1-0.1-6c2.2-2.2,4.2-4.6,5.8-7.2c1-1.6,2.4-2.7,4.4-3
	c1.9-0.2,3.1-1.2,3.7-3.2c1.3-4.5,3.5-8.6,6.2-12.4C314.1,75.3,315.1,73.6,314.1,71z M227.6,145C227.6,145,227.6,145,227.6,145
	c0.7-0.1,1.4-0.3,2.1,0.1C229.1,144.6,228.3,144.9,227.6,145z M249.4,51.2C249.4,51.2,249.4,51.2,249.4,51.2c0.2,0,0.4-0.1,0.6-0.2
	C249.8,51.1,249.6,51.2,249.4,51.2z"/>
<path style="fill:#121224; transform:scale(0.2)" d="M19.9,75.2c-0.8-0.3-2.2,0.7-2.2-1.1C18.5,74.5,19.2,74.8,19.9,75.2z"/>
<path style="fill:#7EB83A; transform:scale(0.2)" :class="ValueId+'_color1'" d="M259.7,187.9c-0.8-0.9-0.7-1.6,0.6-2C260.1,186.6,259.9,187.2,259.7,187.9z"/>
<path style="fill:#DCD22A; transform:scale(0.2)" :class="ValueId+'_color2'" d="M291.8,47.3c-0.1,0-0.2-0.1-0.3-0.1C291.6,47.2,291.7,47.2,291.8,47.3
	C291.7,47.3,291.8,47.3,291.8,47.3z"/>
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
                                    <button :style="{background:'rgba('+getterLeavesChangingColorBg1+')'}" @click="ShowElement(getterLeavesChangingColorBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLeavesChangingColorBg2+')'}" @click="ShowElement1(getterLeavesChangingColorBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLeavesChangingColorBg3+')'}" @click="ShowElement2(getterLeavesChangingColorBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterLeavesChangingColorBg4+')'}" @click="ShowElement3(getterLeavesChangingColorBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLeavesChangingColorBg5+')'}" @click="ShowElement4(getterLeavesChangingColorBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLeavesChangingColorBg6+')'}" @click="ShowElement5(getterLeavesChangingColorBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterLeavesChangingColorBg7+')'}" @click="ShowElement6(getterLeavesChangingColorBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var LeavesChangingColor= [
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
            var randomNumber = LeavesChangingColor[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  LeavesChangingColor[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'LeavesChangingColor'){
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
                getterLeavesChangingColorBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'LeavesChangingColor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLeavesChangingColorBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'LeavesChangingColor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLeavesChangingColorBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'LeavesChangingColor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLeavesChangingColorBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterLeavesChangingColorBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLeavesChangingColorBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLeavesChangingColorBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'LeavesChangingColor',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
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