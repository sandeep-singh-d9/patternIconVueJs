<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M99,155c1.9-1.6,3.9-3.1,5.8-4.7c6.8-5.5,14.5-8.5,23.4-7.3c3.3,0.4,4.9-0.7,4.7-4.1
	c-0.2-3.6,0.8-7,2.6-10c5.5-26.7,24.7-45.5,51.8-50.2c4.4-0.8,6.3-2.4,8-6.7c9.4-23.5,26.5-38.5,52-41.1
	c23.7-2.5,42.7,7.8,56.8,26.7c3,4,5.2,5,9.9,3.5c10.8-3.3,21.9-2.9,32.7,0.5c3.4,1,4.7,0.2,6.6-2.4c15.6-21.5,36.4-32.4,63-27.5
	c25.7,4.7,41.5,21.5,48.8,46.3c1.1,3.8,2,4.8,6.2,3.5c42-13.1,81.1,15.9,81.3,60c0,2-1,4.7,3,3.6c15.1-4.3,36.9,6.9,43.2,27.9
	c5,16.9-4.5,36.1-22,43.7c-5.3,2.3-6.5,4.5-5.8,10.3c2,18.2-2.4,35.3-12.2,50.9c-2.2,3.5-2.4,5.6,0.4,9c14.3,17.5,16,42.9,4.6,60.9
	c-11.6,18.3-35.5,27.9-57.5,22.8c-2.4-0.6-4.3-1.5-5.7,1.8c-7.2,17.5-18.1,32.8-29.9,47.4c-2,4.2-5.9,7-8.9,10.5
	c1.6,1.7,4,1,5.4,2.5c21.7,3.2,43.4,6.1,64.3,13.1c8.4,2.8,16.7,6,24,11.4c8.9,6.6,10.5,11.7,7.1,22.4c-0.5,1.6-0.4,3.5-0.4,5.3
	c0,21.8-0.1,43.5,0.1,65.3c0.1,5.8-2.3,9.3-7.2,12.4c-20.7,12.9-44,17.3-67.3,21.1c-62.9,10.2-126.3,12.1-189.9,10
	c-40.4-1.4-80.6-4.4-120.2-12.2c-19-3.8-37.8-8.1-54.6-18.7c-5.2-3.3-7.8-6.7-7.4-12.7c0.2-4.1-0.1-8.3-0.1-12.4
	c-1.7-2.2-1.4-4.9-1.4-7.4c0-12.7,0-25.3,0-38c0-5.3-0.3-10.6-1.7-15.8c-2.3-8.3,1.6-14.6,8.1-19.5c10.2-7.6,21.9-11.6,34-15
	c21.2-5.9,43-8.8,64.8-11.5c1.3-0.2,2.8,0.3,4.1-1.4c-3.3-4.3-7.7-7.7-11.2-12c-10.4-12.6-19.1-26.2-26-41c-3.1-6.7-3.1-6.4-9.9-4.2
	c-31.4,10.1-64.3-8.8-70.7-38.2c-4.3-19.9,1.4-37.7,15.9-52.2c3.1-3.1,3.3-5.6,1.6-9.3c-6.8-14.8-10.6-30.2-8.3-46.7
	c0.5-3.8-1.8-5.2-4.6-6.6c-11.9-6-20.5-15-23.5-28.2C83.3,176,87.6,164.2,99,155z"/>
<path style="fill:#B9CFCF;transform:scale(0.2)" d="M467.1,432.7c-2.7,0.1-5.4,0-7.6-1.2c3.7-3.9,7.5-7.8,11.2-11.7C470.9,424.4,467,428,467.1,432.7z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M343.3,400.7c-41.4,0.1-75.9-24.1-89.6-62.4c-1.1-3.2-1.1-5.5,1-8.5c8-11.3,8.7-23.5,1.9-35.7
	c-1.6-2.9-1.6-4.3,0.6-6.9c15.3-18.1,21.7-39.1,18.9-62.7c-0.4-3.6,0.2-5,4-6c17.3-4.9,28.6-16,33.4-33.6c0.4-1.4-0.3-3.6,1.9-3.9
	c2.4-0.3,2.5,2.1,3.3,3.6c12.4,25,36.2,32.7,61.1,19.6c2.5-1.3,3.7-1.1,5.4,0.8c6.4,6.8,14.2,11.4,23.1,13.8c3,0.8,3.2,2.1,2.8,4.6
	c-3,21.8,2.1,41.6,14.9,59.3c1.5,2.1,1.1,3.1-0.3,4.9c-13.8,18-12.4,35.1,4.3,50.2c2.3,2,2.4,3.5,1.3,6
	c-14.2,31.4-38.1,50.1-72.1,55.9c-2.5,0.4-5.1,0.9-7.6,1.1C348.9,400.9,346.1,400.7,343.3,400.7z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M343.6,457.7c-65.1,0-121.1-39.1-143.1-99.7c-1.2-3.3,2.4-14.6,5.1-16.3c1.1-0.7,1.8,0.1,2.6,0.6
	c8.2,4.4,16.7,6,25.7,3.1c3.5-1.2,3.3,1.5,4.1,3.3c13.7,30.4,35.7,52.3,67.1,64.1c42.4,15.9,90.5,4.2,121-29.2
	c9-9.9,16.5-20.7,21.9-32.9c1.2-2.6,2.5-3.9,5.6-3.9c5.4,0,10.6-1.4,15.2-4.3c2.5-1.6,3.6-1.1,4.8,1.5c1.8,4,3.9,8,7.3,10.7
	c4.7,3.9,4.3,7.5,2,12.6C458.4,423,405,457.8,343.6,457.7z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M339.1,499.3c-45.7-0.2-91.3-2.1-136.7-8.4c-20.5-2.9-41-6.3-60.7-13c-3.5-1.2-9.1-1.8-9-6.1
	c0.1-3.8,5.5-4.5,9-5.6c22.8-7.6,46.4-11.1,70.1-14.2c8.4-1.1,17-1.3,25.3-2.8c8.5-1.6,15.3,0.8,22.8,4.9
	c56.7,31.3,113.5,30.6,169.8-1.3c4.5-2.5,8.7-3.9,13.9-3.4c29.7,3.2,59.3,6.8,88,15.3c3.4,1,6.7,2.4,10,3.7c1.6,0.7,3.6,1.4,3.7,3.4
	c0.1,2.4-2.2,3-4,3.9c-8.2,4-17.1,6-26,8c-34,7.5-68.6,11.2-103.3,13.3C387.7,498.4,363.4,499.3,339.1,499.3z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M266.7,201.2c-11.1-0.4-14.7,4.2-11.5,14.9c11.8,39.1-14.9,77.6-55.7,80.1
	c-8.9,0.5-11.9,5.3-9.4,14.7c3.4,12.5,2,24.1-7.9,33.3c-10,9.1-21.8,12.9-35.1,8.8c-14.6-4.6-21.2-16.2-22.9-30.3
	c-1.6-13.1,4.1-23.4,15.6-30.3c1.7-1,3.5-1.9,5.2-2.8c6.9-3.5,8.5-9.3,3.8-15.5c-4.9-6.5-9.3-13.3-11.8-21.1
	c-3.7-11.8-3.6-23.7,0.1-35.6c3.8-11.8,0.5-16.2-11.9-16c-10.5,0.1-17.8-5.9-19.1-15.6c-1.5-11.1,3.8-19.4,13.6-21.9
	c5-1.2,9.3-0.2,13.5,2.7c4.9,3.4,9.2,7.5,13.4,11.6c1.9,1.8,3.7,3.6,6.2,4.6c4.5,1.7,9.1,2.2,12.3-2.3c3-4.2,2.7-8.6-0.7-12.5
	c-7.5-8.5-11.4-18.2-11-29.8c0.8-23,19.1-41.1,42.1-41.3c1.4,0,2.8,0,4.2,0c7.2,0,10.2-2.3,11.1-9.5c4.9-38.5,46.8-46.1,67.8-30.4
	c6.8,5.1,11.6,11.8,14.7,19.7c3.3,8.4,8.1,10.3,16.2,6.1c13.5-7.1,26.8-7,40.3,0.2c7.6,4,12.6,2,15.8-6
	c8.4-21.5,28.3-31.8,50.7-26.3c21.6,5.3,34.4,24.3,31.6,47c-0.6,4.7,0.9,8.2,4.9,10.5c4.2,2.4,7.9,1.1,11.5-1.7
	c15.2-12,31.4-12.9,48.1-3.8c17.3,9.4,25.1,28.2,19.8,47.5c-2.2,8-4.8,15.8-7.1,23.8c-1.2,4.2,0.1,7.9,2.8,10.9c2.5,2.8,6,3,9.4,2.1
	c4.6-1.3,5.9-5.3,7.1-9.4c3.3-11.5,12.1-16.5,23.6-13.6c9.6,2.5,14.6,10.5,13.4,21.5c-1.1,9.4-8,15.7-17.6,15.9
	c-0.8,0-1.6,0-2.4-0.1c-10.7-0.4-14.6,4.5-11.3,14.6c3.5,10.8,4.1,21.7,1.7,32.8c-2.2,10.1-7.4,18.6-14,26.4
	c-7.1,8.4-6.8,12.5,2.2,18.8c23.5,16.7,12.9,48.8-6.4,57.1c-12.9,5.6-24.9,2.8-35.6-5.6c-11-8.4-14.1-19.5-11-32.4
	c0.4-1.7,1-3.4,1.4-5.1c1.5-6.7-1.5-11.3-8.2-12.6c-28.1-5.3-44.1-23-50.4-50.1c-2.2-9.4-1.1-18.9,1.8-28.1
	c3.6-11.6,0.4-15.9-11.5-15.8c-11.6,0.1-20.6-4.4-25.7-15.4c-4.4-9.3-11.9-10.2-18.5-2.4c-6.2,7.4-14,9.9-23.3,7.7
	c-9.6-2.2-15.9-7.8-17.6-17.7c-1.2-6.5-4.3-10.2-11.3-10.6c-4.3-0.3-8.4-1.8-12.4-3.7c-9.7-4.6-16.5-0.1-15.2,10.5
	C298.2,187.6,282.8,202.9,266.7,201.2z M239.1,542.7c0-8.1,0.1-16.2-0.1-24.3c-0.1-3.1,0.8-4.1,4-3.9c16.4,1.1,32.7,2,49.1,2.7
	c3.1,0.1,4,1.2,4,4.2c-0.1,16.4-0.1,32.8,0,49.2c0,2.8-0.8,3.9-3.7,3.7c-16.6-1-33.1-1.9-49.7-2.7c-3.3-0.2-3.8-1.8-3.7-4.6
	C239.2,558.9,239.1,550.8,239.1,542.7z M381.6,546.2c0-8.3,0.1-16.6-0.1-24.9c-0.1-3.1,1-4,4.1-4.1c16.2-0.7,32.3-1.7,48.5-2.7
	c3.2-0.2,4.6,0.3,4.6,3.9c-0.2,16.2-0.2,32.4,0,48.6c0,3.4-1.2,4.4-4.4,4.6c-16,0.8-31.9,1.6-47.9,2.7c-4.1,0.3-5-1.3-4.8-5
	C381.7,561.6,381.6,553.9,381.6,546.2z M362.6,546.6c0,8.1-0.1,16.2,0.1,24.3c0.1,3.4-1.1,4.4-4.4,4.3c-12.8-0.2-25.7-0.2-38.5,0
	c-3.5,0-4.8-0.8-4.8-4.6c0.2-16,0.2-32,0-48c0-3.7,1.1-4.6,4.7-4.6c12.6,0.2,25.3,0.3,37.9,0c4.4-0.1,5.2,1.5,5.1,5.4
	C362.4,531.2,362.6,538.9,362.6,546.6z M505.1,533.6c0,8.1,0,16.2,0,24.3c0,2.3,0,4-3.1,4.6c-13.8,2.8-27.7,4.5-41.5,6.5
	c-2.7,0.4-2.9-1.1-2.9-3.1c0-16.8,0-33.6,0-50.4c0-2.1,0.4-3.1,2.8-3.5c14.1-2,28.2-3.4,42.1-6.5c3-0.7,2.6,1.5,2.6,3.2
	C505.1,517,505.1,525.3,505.1,533.6z M220.1,541c0,8.1,0,16.2,0,24.3c0,2.4,0.1,4.1-3.4,3.6c-13.3-1.9-26.6-3.6-39.8-6.1
	c-3.4-0.6-4.4-2-4.4-5.4c0.2-16,0.2-32,0-48.1c0-3.5,0.7-4.2,4.3-3.5c12.2,2.5,24.5,4.4,36.9,5.5c4.5,0.4,7,1.5,6.5,7.1
	C219.6,525.9,220.1,533.5,220.1,541z M153.6,528.5c0,8.1-0.1,16.2,0.1,24.3c0.1,3.5-1,4.3-4.1,2.8c-1.1-0.5-2.2-0.8-3.3-1.2
	c-11.4-4.6-11.6-5-11.6-17.3c0-12.2,0-24.5,0-36.7c0-6.5,0-6.5,6.3-4c0.9,0.4,1.8,0.7,2.8,1.1c9.9,3.6,9.9,3.6,9.9,13.9
	C153.6,517,153.6,522.8,153.6,528.5z M543.1,494.1c0,17.3-0.1,33.9,0,50.5c0,4.4-3.3,5.5-6.1,7.1c-12.6,7.1-12.9,6.9-12.9-7
	c0-13.2,0.1-26.5-0.1-39.7c-0.1-3.3,0.9-4.9,4.2-5.8C532.9,497.9,537.5,496.1,543.1,494.1z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M387.2,324.8c0,22.3-20.8,43.3-43.2,43.6c-22.8,0.3-44.3-21.1-44.1-44c0.2-22.4,21.2-43.3,43.5-43.3
	C366.1,281.1,387.2,302.1,387.2,324.8z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M467.3,316.2c-0.5,7.4-3.1,10-11.5,11.6c-7.7,1.5-15.6-2.1-18.6-8.5c-1.4-3.1-2.3-6.4-2-9.8
	c0.3-3.8,0.8-8,3.7-10.4c3.8-3,6,2,8.7,3.5c5.2,2.9,10.4,5.6,16,7.7C467.6,311.9,467.6,311.9,467.3,316.2z M242.4,311.3
	c-0.5,5.6-2.1,11.3-8,14.4c-6.5,3.4-13.3,3.2-19.8-0.4c-3.3-1.8-4.4-4.7-4.2-8.4c0.2-4.2,3.5-3.5,6-4.2c6.2-1.9,12.2-4.3,18-7.3
	C241.1,301.8,242.5,302.8,242.4,311.3z M368.3,325.2c-0.4,14.5-10.7,24.5-25.1,24.2c-14.7-0.3-25-11-24.4-25.5
	c0.6-14.6,11.1-24.4,25.4-23.9C358.8,300.6,368.7,310.9,368.3,325.2z"/>
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
                                    <button :style="{background:'rgba('+getterClownBg1+')'}" @click="ShowElement(getterClownBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterClownBg2+')'}" @click="ShowElement1(getterClownBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterClownBg3+')'}" @click="ShowElement2(getterClownBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterClownBg4+')'}" @click="ShowElement3(getterClownBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterClownBg5+')'}" @click="ShowElement4(getterClownBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Clown= [
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
            var randomNumber = Clown[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Clown[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Clown'){
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
                getterClownBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Clown') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterClownBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Clown') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterClownBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Clown') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterClownBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterClownBg5: {
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
                            name:'Clown',
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