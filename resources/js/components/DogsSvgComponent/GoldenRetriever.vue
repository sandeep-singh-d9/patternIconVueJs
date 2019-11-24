<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(245, 171, 82, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M419.1,302.1c-3,17.5-8.6,34.4-12.4,51.7c-0.7,3.4-1.3,6.8-2.1,10.2c-1,3.9-3.1,6.4-7.7,6.1
	c-5.3-0.3-10.6,0-15.9-0.1c-6.4-0.1-10.1-4.2-8.5-10.4c0.9-3.6-0.3-3.8-3.2-3.8c-2.8,0-5.6,0.7-8.3-0.6c0.6-0.9,1.6-1.5,2.6-1.3
	c8,1.5,13.3-4.2,19.5-7.3c2.5-1.2,3.6-3.4,3.6-6.1c0.1-12.5-1.2-24.9-3.9-37.2c-0.9-4-4-6-7.1-8c-2.8-1.7-6.2-2.6-8.3-5.4
	c-4.5-3.1-8.9-6.4-12.8-10.2c-2.4-2.4-5.4-3.8-8.9-4c-5.6-0.4-8.8-3.2-9.5-8.9c-0.4-2.9-0.4-6.3-5.5-4.9c-2.7,0.8-3.6-2.4-4.4-4.6
	c-1.3-3.8-2.1-8.3-7.9-5c-0.6,0.4-2.1-0.1-2.8-0.6c-4.1-3.2-7.9-2-11.3,1c-9.1,8.2-20.4,10.1-31.9,11.2c-6.6,0.6-12.8,1.6-17.7,6.7
	c-3.6,3.7-7.8,3.2-11.9,0.8c-4-2.3-6.1-1.7-7.1,3.3c-1.5,7.1-2.6,7.8-9,5.9c-4-1.1-5,0.2-5.4,3.7c-0.3,2.8-0.3,6.2-5,3.6
	c-1.8-1-3.4,0.8-4.5,2.3c-1.9,2.8-4.1,4.3-7.5,2.3c-2.2-1.3-3.5-0.4-4.1,1.9c-1.1,4-2.1,8-3,12.1c-4.6,21.1-13.8,40.1-24.9,58.4
	c-1.6,2.6-3.8,4.4-6.8,4.6c-5.8,0.3-11.6,0.3-17.5,0.3c-2.7,0-3.3-2.1-3.6-4.1c-0.6-3.6-0.7-7.3,1.7-10.5c0.5-4.8,4.7-3.8,7.5-4.9
	c4.9,0.4,6.6-2.6,7.5-6.8c0.5-2.5,0.8-4.9,0.4-7.4c2.5-18,2.2-35.8-3.3-53.3c-0.3-0.9-0.2-2.4-1-2.7c-5.5-2.6-6.5-8-8.3-12.9
	c-0.4-1-1-2.1-2.6-2c-1.6,1.6-0.3,4.4-2.3,5.8c-3.3,2.8-5.4,2.2-6.6-2.1c-1.5-5.2-3.2-10.4-4.9-15.9c-2.7,1.2-2.1,3.8-3.1,5.8
	c-10-7.5-10.3-20.9-18.5-30.3c-1,2.7-1.6,4.4-2.4,6.5c-4.1-4.7-6.6-10.1-9.5-15.2c-9.1-16.1-16.7-32.9-23-50.2
	c-1.4-3.8-1.8-7.7-1.9-11.7c-0.3-21.3,1.9-42.6,1.2-63.9c2.5,0.5,1.9,2.6,2.2,4.2c0.3,1.8,0.8,3.4,1.3,5.1c2.6,6.6,4.1,7.3,11.9,6.1
	c7.3,3.6,14.7,4.4,22,0.2c0.5-0.2,1-0.3,1.5-0.3c8.1,0.9,9.4,0,11.6-8.2c0.7-2.6,0.3-5.5,2.8-7.3c2.4,0.8,2.3,3,2.7,4.8
	c0.4,2.1,0.4,4.3,1.9,6.4c4.7-5.3,9.9-9.8,13.3-16c1-2,1.6-4.9,4.7-5c6.2,6.7,12.1,13.7,19.1,19.6c11.8,9.9,26.3,14.1,40.3,19.2
	c17.1,6.3,35,8.8,53.2,9.4c25.6,1,51.2,1,76.6,4.6c27,3.8,46.1,19.3,61.9,39.9c7.6,9.8,12.5,21.1,14.5,33.4
	c2.1,14.8-1.6,29.1-3.8,43.5c-1.6,10.8-0.5,20.8,6.5,29.8C423.4,288.2,422.8,297,419.1,302.1z"/>
<path :style="{fill:'rgba(245, 171, 82, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M78.1,104c-2.8-2.8-0.9-6.9-2.8-10c-0.3-0.9,0-2.1-1-2.8c-1.2-0.9-1.5-2.2-1.4-3.5
	c0.8-11.7-1.3-23.1-3.3-34.5c-1.7-9.9-1-19.5,3.8-28.5c0.5-0.9,0.7-1.8,0.5-2.9c16.8-4,33.6-5.8,50.5-0.9c1.9,0.5,4.1-0.7,5.7,1.1
	c-0.2,1-0.1,2,0.4,2.9c5.6,10.5,5,21.6,2.8,32.7c-2,10.2-3,20.4-2.7,30.7c0.1,2,0.2,4-1.4,5.6c-1.4,2.5-2,5.1-2,8
	c-2.7,0.3-2.9-1.8-3.3-3.5c-2.8-13.3-8.3-25.6-13.8-37.9c-1.6-3.5-2.9-7.1-3.8-10.8c-2.1-8.6-1.9-10.4,4-18.9
	c-5.6,3.6-10.2,4.1-15.2,0.6c7.6,8.5,3.9,16.9,0.9,25.3c-2.7,7.5-6.5,14.6-9.4,22.1c-2.7,7-5,14.1-6.2,21.6
	C80.1,101.8,80.7,103.9,78.1,104z"/>
<path :style="{fill:'rgba(242, 153, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M154,351c-2.5,1.8-6.4,0.9-8,4.3c-4.5,0-9-0.2-13.4,0.1c-4.1,0.3-5.7-1.6-6.2-5.2
	c-1.1-7.1,2.3-11.6,9.5-12.2c4.9-0.4,7.5-2.9,8.5-7.6c3.9-18.6,3.6-37.2,0.2-55.9c-0.2-1.1-0.3-2.3-0.4-3.4c0-1.3,0-2.7,0.1-4
	c0.1-1.7-0.6-4.1,1.8-4.6c2-0.3,3.2,1.7,4,3.2c1,2.1,1.7,4.3,2.2,6.6c0.6,3,1.6,5.5,5.3,5.1c1.4-0.1,1.5,0.7,1.8,1.7
	c4,15.2,5.9,30.5,5,46.2c-0.2,4-0.6,7.9-2,11.7C161.3,342.8,158.9,347.6,154,351z"/>
<path :style="{fill:'rgba(186, 108, 36, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M73.8,21.8c0.7,0.6,3.7-0.6,2,1.8c-7.2,10.1-6.8,21.3-4.5,32.4c2.4,11.7,3.3,23.4,2.9,35.3
	c-0.2,4.8-0.9,9.6-2.1,14.3c-0.3,1-0.5,2.1-1.6,2.3c-1.3,0.2-1.5-1.1-1.9-1.9c-2.2-4.4-6.8-6.8-9.4-10.9
	c-4.8-7.4-8.4-15.4-11.8-23.6c-1.5-3.5-2.8-7.1-4.9-10.4c-2-3.1-1.7-6.3,0.8-8.7c9.7-9.4,18.8-19.3,28-29.1
	C71.9,22.6,73,22.3,73.8,21.8z"/>
<path :style="{fill:'rgba(186, 108, 36, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M129.1,94c-0.7-14.6,1.1-29,3.7-43.4c1.5-8.8,1.1-18-4.5-25.8c-1.8-2.5-0.3-2.7,1.7-2.8
	c2.6,1,4.2,3.2,6,5.2c7.1,8.2,14.6,16,22.5,23.4c3.8,3.5,4.5,7.1,1.8,11.9c-3.8,6.8-6.8,14-9,21.4C146.6,92,140.6,99,134.6,106
	c-0.5,0.6-0.7,1.8-1.7,1.4c-0.6-0.2-1.3-1.1-1.4-1.8C130.6,101.8,129.9,97.9,129.1,94z"/>
<path :style="{fill:'rgba(242, 153, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M423.2,237.7c8.2,27.6,29.3,46,48.5,65.7c-0.5,0.5-0.9,1-1.4,1.5c-2.6,0-5.1,0.1-7.7,0
	c-2.5-0.1-4.8-0.1-6.9,1.8c-3.3,2.9-6.1,0.3-8.9-1.6c-3-2.1-5.9-6.8-9.3-0.2c-0.7,1.3-2.4,0.2-3.6-0.3c-2-0.9-3.9-1.8-5.9-2.7
	c-0.3-0.6-0.3,0.2-0.3-0.4c0-8.8-5.6-15.5-8.4-23.3c-3.4-9.3-1.5-18.7,0-28C420,245.9,419.5,241.1,423.2,237.7z"/>
<path :style="{fill:'rgba(242, 153, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M367.2,290c4.7,1.3,8.8,3.8,12.7,6.6c5.2,3.6,5.2,9.6,5.8,14.8c1.1,9.1,2.5,18.3,2.4,27.6
	c-0.1,4.8-1.2,8.5-6.4,9.7c-0.6,0.2-1.4,0.4-1.8,0.9c-5.2,6-12.2,5.6-19.1,5.6c-5.6-1.7-7.8-5.5-6-10.8c1.7-5.3,5.4-8.7,10.7-10.2
	c4.2-1.2,5.9-3.8,5.6-8.1C370.5,313.9,369.4,301.9,367.2,290z"/>
<path :style="{fill:'rgba(186, 108, 36, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M423.2,237.7c-2.3,9.3-3.9,18.7-4.1,28.3c-0.2,8.3,1.3,16.2,7.7,22.2c2,1.9,1.2,4.4,1.3,6.6
	c0.1,2.3,0,4.6,0,7c-3-0.7-6,0.1-9,0.2c0.6-3.7,1.5-7.5,1.7-11.2c0.1-2.2-0.2-4.7-1.9-6.5c-7.7-8.2-8.9-18.4-7.6-28.8
	c1.8-14.4,5.9-28.5,4.8-43.2c-0.1-0.7,0.5-1.5,0.8-2.2C419,219.3,421.1,228.5,423.2,237.7z"/>
<path :style="{fill:'rgba(242, 153, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M78.1,104c1.4-5.7,2.6-11.5,4.2-17.2c3-10.1,7.9-19.3,11.8-29c1-2.5,1.9-5,2.7-7.5
	c2.5-7.6,2-14.4-5.7-19.5c2.8-1.3,5-1.2,6.7,0.2c3.1,2.6,6,2.1,9.1,0.2c1.6-1,3.4-1.8,5.7-1.2c-9.7,9.6-6.1,19.7-1.6,29.7
	c5.8,13,12,25.9,14.2,40.2c0.2,1.1,0.9,1.7,1.9,2.2c-0.5,1.2-0.8,2.5-1.4,3.7c-2.3,5.5-5.1,6.4-12.6,4.3c-2.7-0.8-4.1-2.9-5.2-5.2
	c-1-2.7-1.3-5.4-0.9-8.3c0.3-1.8,1.4-3.3,2.1-5c1.1-2.4,2.9-5.1,0.1-7.2c-2.7-2-6-2.8-9.4-1.4c-0.6,0.2,0.2,0-0.4,0.3
	c-6.5,3.7-6.5,3.7-2.3,13.1c0.5,2.6,0.2,5-1,7.4c-1.5,2.6-3,5.2-6.1,6.3C84,113,79.5,110.7,78.1,104z"/>
<path :style="{fill:'rgba(186, 108, 36, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M109.1,104.9c1.3,1.7,2.7,3.4,4,5.1c-5.5,5.3-15.3,5.2-23,0c1.7-2,3.3-4,5-6
	C99.4,98.2,105.6,98.2,109.1,104.9z"/>
<path style="fill:#FCF9F4;transform:scale(0.2)" d="M154,351c3.1-4.4,6-9,8.2-13.9c1.6,4.4-0.1,11.4-3.5,13.6C157.3,351.6,155.7,353.2,154,351z"/>
<path :style="{fill:'rgba(12, 11, 3, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M86,58.9c-0.5,0.1-1,0.1-1.4,0.3c-4.1,2.3-6.8-0.2-7.7-3.4c-0.8-3.2,2.3-4.5,5.2-4.9
	c2.9-0.6,4.3,1.2,5.2,3.5C87.9,56.1,88.4,57.9,86,58.9z"/>
<path :style="{fill:'rgba(12, 11, 3, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M122.1,50.9c2.6,0.9,6.3,1.6,5,5.1c-1.4,3.9-4.9,5.1-8.9,3c-2.4-1.1-2.2-3-1.3-4.9
	C117.9,51.9,119.3,50.1,122.1,50.9z"/>
<path :style="{fill:'rgba(242, 153, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M122.1,50.9c-3.9,1.4-5.9,3.8-3.9,8.1c-2-0.1-4.5,0.9-5.7-1.6c-0.9-1.9-0.5-3.8,1.1-5.4
	C116.2,49.4,119,49.4,122.1,50.9z"/>
<path :style="{fill:'rgba(242, 153, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M86,58.9c1.2-3.9,0.2-6.7-3.9-8.1c1.1-1.1,2.5-0.7,3.8-0.8c3.8-0.2,5.8,2.2,5.9,5.3
	C91.9,58.8,88.9,59.2,86,58.9z"/>
<path style="fill:#FDDDAA;transform:scale(0.2)" d="M90.8,82.5c1.7-8.1,3.7-15.3,7.4-21.8c2-3.5,5.2-3.9,7.1-0.7c4.1,6.7,6.5,14,8,22.4
	C105.7,78.8,98.6,79.1,90.8,82.5z"/>
<path :style="{fill:'rgba(28, 11, 1, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M96.2,95.9c-1.2-1.8-2.5-3.5-3.4-5.4c-2.3-4.8-1.4-5.9,3.7-7.1c2.8-0.7,5.1-2.9,8.6-2.2
	c7.4,1.3,9,4.4,5.4,10.9c-0.7,1.3-1.6,2.5-2.4,3.7C103.9,100.4,100,100.5,96.2,95.9z"/>
<path style="fill:#FDDDAA;transform:scale(0.2)" d="M96.2,95.9c4,3,7.9,2.8,11.8-0.1c0.2,3.1,0,6.2,1.1,9.2c-4.3-5.4-9.1-4.5-14-0.9
	C95.9,101.4,96.2,98.7,96.2,95.9z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M81.5,53.8c1.1,0.2,1.5,1.1,1.6,2c0.1,1-0.7,1.4-1.6,1.4c-1.1-0.1-1.7-0.7-1.6-1.8
	C80,54.4,80.6,53.9,81.5,53.8z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M124.1,55.4c-0.3,1-0.9,1.8-1.8,1.8c-1.2,0-1.6-1-1.6-2.1c0-1.2,0.8-1.3,1.8-1.3
	C123.7,53.7,123.7,54.7,124.1,55.4z"/>
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
                                    <button :style="{background:'rgba('+getterGoldenRetrieverBg1+')'}" @click="ShowElement(getterGoldenRetrieverBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGoldenRetrieverBg2+')'}" @click="ShowElement1(getterGoldenRetrieverBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGoldenRetrieverBg3+')'}" @click="ShowElement2(getterGoldenRetrieverBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGoldenRetrieverBg4+')'}" @click="ShowElement3(getterGoldenRetrieverBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGoldenRetrieverBg5+')'}" @click="ShowElement4(getterGoldenRetrieverBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var GoldenRetriever= [
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
            var randomNumber = GoldenRetriever[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  GoldenRetriever[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'GoldenRetriever'){
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
                getterGoldenRetrieverBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GoldenRetriever') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGoldenRetrieverBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GoldenRetriever') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGoldenRetrieverBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GoldenRetriever') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGoldenRetrieverBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGoldenRetrieverBg5: {
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
                            name:'GoldenRetriever',
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