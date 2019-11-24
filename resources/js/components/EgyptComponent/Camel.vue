<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#49AC34;transform:scale(0.2)" :class="ValueId+'_color1'" d="M368.2,61.2c0,12,0.1,24.1,0.1,36.1c0,5.3-3,8.2-8.2,8.4c-3.5,0.1-7,0.2-10.5,0
	c-2.4-0.1-3.2,0.8-3.1,3.2c0.2,4.9-0.8,9.6,4,13.6c3.3,2.7,2.2,8.8-1.4,11.9c-1.8,1.5-2.9,2.9-2.6,5.3c0.5,2.9-1,3.5-3.7,3.5
	c-2.6,0-4.1-0.6-3.7-3.5c0.3-2.1-0.4-3.5-2.2-5c-4.7-4-4.6-10.1,0-14.3c1.7-1.6,3.2-11.7,2-13.7c-0.7-1.2-1.9-0.8-2.9-0.8
	c-5.9,0-11.9,0-17.8,0c-2.1,0-3.2,0.5-3,2.8c0.4,4.8-1.2,9.6,3.6,13.7c3.6,3.1,2.6,8.5-1.4,12.1c-1.6,1.5-2.6,2.9-2.3,5.1
	c0.4,2.7-0.6,3.8-3.5,3.8c-2.8-0.1-4.5-0.5-4-3.8c0.3-1.9-0.4-3.3-2-4.6c-4.8-4-4.8-9.9-0.4-14.3c1.9-1.8,3.4-11.3,2.3-13.7
	c-0.4-0.8-1-1-1.8-1c-6.7,0-13.4,0-20.1,0c-0.5,0-1.2,0.4-1.5,0.8c-1.3,1.7,0.2,12.1,1.8,13.7c4.7,4.5,4.7,9.7-0.1,14.3
	c-1.4,1.3-2.2,2.5-2,4.3c0.4,3.1-0.8,4.3-4.1,4.3c-3.2,0-4-1.3-3.7-4.1c0.2-1.5-0.2-2.8-1.4-4.1c-5.6-5.5-5.5-9.7-0.1-15.2
	c1.4-1.4,2.3-12.2,1.1-13.5c-0.7-0.8-1.7-0.6-2.6-0.6c-5.9,0-11.9,0.1-17.8-0.1c-2.5-0.1-3.2,0.9-3.1,3.2c0.3,4.7-0.9,9.4,3.7,13.2
	c3.5,2.9,2.5,9.1-1.2,12.2c-1.8,1.5-2.9,3-2.5,5.3c0.5,3.1-1.3,3.4-3.8,3.4c-2.7,0.1-4.1-0.7-3.7-3.6c0.3-2.1-0.4-3.5-2.2-5
	c-4.7-4.1-4.5-10,0.1-14.3c1.6-1.6,3.1-12,1.9-13.7c-0.7-1.1-1.9-0.7-2.9-0.7c-3,0-6.1,0-9.1,0c-6.7-0.1-9.5-2.8-9.5-9.4
	c-0.1-9.6-0.1-19.2-0.1-28.8c4.6-2.7,9.7-4.4,14.6-6.2c10.4-3.8,18.4-10.3,25.1-19c4.5-5.9,8.8-12.1,14.2-17.3
	c11.5-11,22.5-12.3,35.9-3.7C331.8,33.6,350.2,47.1,368.2,61.2z"/>
<path style="fill:#B39100;transform:scale(0.2)" :class="ValueId+'_color4'" d="M396.5,321.9c-4.2-2.6-5.9-6.2-7.2-10.6c-5.1-16.6-3.8-33.5-1.4-50.2c3-20.9,7.3-41.7,5.2-63
	c-10.5-9.9-14.4-22.2-15-36.4c-0.3-7.7-0.2-15.8-3-23.5c-5.1,1.8-9.6,4.6-14.1,7.4c1.7,0.5,1.6,2,1.8,3.3
	c2.2,15.5,4.7,30.9,6.6,46.5c2.7,21.9,1.8,43.8,1,65.7c-0.3,10.5-0.9,21,0.3,31.5c0.9,8.1,2.1,16.3,0.4,24.6
	c-1.7,8.4-4.3,16.5-7.5,24.4c-0.6,1.4-1.6,2.9-0.2,4.2c1.2,1.1,2.5,0.2,3.8-0.1c2-0.5,3.8-1.8,6-1.5c0.2,2.3-2.9,4.5-0.5,6.4
	c1.6,1.3,4,0.6,5.4-1c4.1-4.6,9.3-7.2,14.7-9.7c2.2-1,4-2.8,5.5-4.8C401.8,330.7,401.2,324.8,396.5,321.9z M185.3,175.4
	c1.7,1,3.6,0.7,5.4,0.5c4.1-0.4,5.4,0.8,4.3,5.2c-1.7,7-2.8,14.2-4.2,21.4c-3.9,20.7-8.3,41.2-16.3,60.9
	c-5,12.5-11.3,24.6-14.1,37.9c-3.2,15-9.3,28.2-20.4,38.9c-0.9,0.9-1.9,1.9-1.6,3.1c0.5,1.7,2.3,1.1,3.5,1.4c1.5,0.3,3,0.6,4.4,0.8
	c0.1,1.9-3.3,2.7-1.4,4.8c1.8,1.9,4,1.3,5.9,0.4c3.6-1.7,7.4-2.5,11.4-2.7c3.7-0.2,7.5-1.3,10.1-4.6c2.1-2.6,3.1-5.9,0.8-8.3
	c-5-5.3-3.6-11.3-2.8-17.2c1.7-13.2,7.4-25,13.8-36.4c10.3-18.3,19.1-37.1,23.5-58c2.8-13.2,7.9-25.6,19-34.4
	c-8.6-3.8-17.4-7.3-25.8-11.4C195.7,175.1,190.7,174.8,185.3,175.4z"/>
<path style="fill:#CD1820;transform:scale(0.2)" :class="ValueId+'_color3'" d="M41.7,48.5C57,51.9,62,62.8,63.6,75.1c0.3,2.5,0.6,5.1,0.9,7.6c2.4,5.6,1.2,11.3,0.9,17
	c-0.6,8.3-2.3,16.5-3.6,24.8c-1.3,8.2,2.8,13,11.2,13.6c10.2,0.8,19.2-2.5,27.8-7.4c11.4-6.8,19.8-18.9,22.1-32.2
	C114.8,103.8,107,109,99,114c-1.4,0.9-2.7,2-4.5,2.1c-2.9-2.4-4.9-5.2-4.3-9.3c10.3-5.8,20-12.6,30-18.9c2-1.3,4-2.8,6.4-3.4
	c1.1,2.8,2.1,5.6,3.2,8.3c-1.1,18.4-10.1,32.3-24.8,42.9c-8.6,5.1-17.7,8.7-27.9,8.8c-2.4,0-4.9,0-7.3-0.5
	c-10.5-1.8-15.8-9.6-14-20.2c2.1-12.7,4.9-25.4,3.9-38.4c-0.1-1.5-0.4-3-0.6-4.5c-1.4-1.3-1.1-3-1.3-4.7
	c-1.3-10.3-5.1-18.7-16.3-21.7c-2.1-0.6-4.5-1.2-5.3-3.8C37.8,49.2,39.9,49.1,41.7,48.5z"/>
<path style="fill:#FCC900;transform:scale(0.2)" :class="ValueId+'_color2'" d="M469.5,333.8c-2.3-5.6-2.5-11.2-1.2-17c1.8-7.6,0.7-14.8-2.3-21.9c-1.9-4.3-3.9-8.6-5.8-12.9
	c-2.8-6.1-3.9-12.5-3-19.2c0.5-3.5,1.1-6.9,1.4-10.4c1-11.8-1.3-22.3-10.2-30.9c-9.7-9.5-17-20.6-21.1-33.7
	c-3.3-10.5-5.4-21.2-6.6-32.1c-0.9-8.2-2-16.5-1.9-25.5c6.3,3.6,9.6,8.8,11.6,14.8c2,5.9,3.2,12,4.8,18.1c2,7.5,4,15.1,9.2,21.1
	c3.9,4.5,8,3.4,9.6-2.3c0.4-1.6,0.5-3.3,0.6-5c0.4-9.1-3.9-16.4-8.9-23.5c-7.5-10.6-14.4-21.6-18.6-33.9c-1.9-5.5-5-10.1-8.8-14.3
	c-15.2-16.4-32.3-30.6-50-44c-1.6,1.8-1.2,4-1.2,6.1c-0.1,9,0,18,0,27c-0.1,7.5-2.5,9.9-9.8,10.1c-2.6,0.1-5.2-0.1-7.8,0.1
	c-2,0.2-3.8,0.9-4,3.1c-0.4,5.1-1.6,10.2,2.8,14.6c3.1,3.1,3,7,0.3,10.4c-1.6,2.1-3.2,4-3.6,6.7c-0.2,1.3-0.9,2.3-2.4,2.2
	c-1.6,0-1.9-1.3-2.1-2.5c-0.3-1.8-1-3.4-2.2-4.9c-4.3-5.5-4.2-7.7,0.1-13.2c3.4-4.3,2.2-9.3,1.5-14c-0.3-1.7-2-2.2-3.6-2.3
	c-5.9-0.2-11.9-0.2-17.8,0c-2,0.1-3.8,0.8-4,3c-0.4,4.9-1.6,9.9,2.4,14.3c3.3,3.7,3.2,6.8,0.3,10.7c-1.5,2-2.8,3.9-3.2,6.5
	c-0.2,1.2-0.6,2.4-2.1,2.5c-1.6,0.1-2.2-0.9-2.4-2.2c-0.3-2.7-2-4.6-3.7-6.7c-2.5-3-2.8-7.2,0-10.1c3.7-3.9,3.7-8.4,3.5-13.2
	c-0.1-3.1-1.6-4.8-4.8-4.9c-5.6-0.1-11.3-0.2-16.9,0c-1.9,0.1-4,0.5-4.2,2.7c-0.6,5.1-1.8,10.3,2.2,14.8c2.3,2.6,3.1,5.7,1.3,8.9
	c-1.7,2.9-3.6,5.5-4.5,8.9c-0.6,2.3-4,2.6-4.4,0.6c-1-4-3.7-7-5.3-10.5c-1.2-2.6-0.6-5.3,1.3-7.3c4-4,3.3-8.9,3.1-13.7
	c-0.1-2.7-1.6-4.2-4.3-4.3c-5.8-0.2-11.6-0.2-17.4,0c-3,0.1-4.4,1.7-4.5,4.6c-0.2,4.8-0.3,9.3,3.3,13.3c2.8,3.2,2.7,7.1,0.3,10.1
	c-1.8,2.1-3.5,4.2-3.8,7.1c-0.1,1.1-0.8,2-2.1,2s-1.9-0.8-2.2-1.9c-0.4-1.8-0.8-3.5-1.9-5.1c-4.9-6.7-4.7-7.3,0.1-14.3
	c2.9-4.2,2.4-9.3,0.8-13.6c-1.3-3.4-5.3-1.9-8.2-2.2c-1.2-0.1-2.4,0-3.7,0c-6.5-0.2-9-2.7-9.2-9.3c-0.1-7.3,0-14.6-0.1-21.9
	c0-1.9,0.3-4-1.3-5.6C218,70,213.8,73.3,210,77c-6.6,6.5-11.9,14.2-17.8,21.3c-5.4,6.5-11.3,12.3-18.9,16.2
	c-11.6,5.8-22.4,4.2-31.9-4.6c-5.1-4.8-8.2-10.9-11.6-16.8c-1.3,0.7-1.2,2-1.4,3.2c-2,14.9-9,26.9-20.8,36.2
	c-1.1,0.9-2.7,1.6-2.6,3.5c0.9,1.2,1.7,2.5,2.6,3.7c11,15.9,24.6,28.1,43.7,33.2c11.2,3,22.6,2.7,34,2.8c3.4,0.9,7.2-0.9,10.2,0.8
	c8.6,4.8,17.9,8,26.8,12.1c1.4,0.6,2.7,1.3,4.3,0.8c8.4,7.1,13.7,16.2,17.1,26.4c3.4,10.4,3.9,21.2,3.5,32.1
	c-0.2,6.7,1.3,12.8,4.5,18.8c5.3,10.2,10.9,20.4,13.6,31.8c3.2,13.5,1.2,25.7-8.8,35.9c-1.9,2-3.6,4.1-5.2,6.4
	c-1.1,1.5-2.7,3.2-1.2,5.3c1.5,2.1,3.5,1.3,5.4,0.6c3.3-1.4,6.2-1.2,9.5,0.7c4.8,2.8,10.1,3.5,15.1,0.1s4.5-8.6,3.8-13.7
	c-5.4-38.1-11.7-76-19.7-113.7c-2.1-9.9-3.4-19.8-1.2-29.9c0.6-2.6,0.9-4.1,4.3-3.1c3.2,0.9,6.6,1.1,9.9,1.1
	c14.5,0.2,27.3-5.3,39.5-12.5c15.4-9,29.3-20.3,44.3-29.8c3.4,0,5.9-2.3,8.7-3.7c4.7-2.3,4.9-2.2,5.6,2.8c1,6.9,1.1,13.9,1.8,20.8
	c0.6,6.7,1.6,13.3,4.6,19.3c2.6,5.3,5.6,10.4,11.3,13.2c7.6,6.8,14.1,14.7,21.3,21.9c24.7,24.9,38.1,54.3,35.4,90.1
	c-0.8,10.3-2.5,19.7-13,24.8c-0.9,0.4-1.8,1.2-2.4,2c-2.3,2.7-4,5.7-1.6,9.1c2.4,3.3,5.6,2.3,8.7,1.1c1.5-0.6,2.9-2.2,4.6-0.9
	c7,5.3,13.3,1.8,19.6-1.4C470.6,342,471.7,339.2,469.5,333.8z M126.5,84.4c-3-10.2-6-20.4-9.1-30.5c-0.7-2.2-0.5-3.6,1.4-5.1
	c3.3-2.6,5.3-6.2,6.4-10.3c1.4-5.1,1-5.5-4.3-4.5c-4.7,0.9-9,5.1-14.2,1.2c-0.8-0.6-2.6,0.2-3.9,0.5c-2.8,0.7-5.6,1.5-8.4,2.2
	C77,42.2,59,43.8,41.7,48.5c0.2,1.3,1.4,1.6,2.3,1.9c12.2,3.7,16.8,13,18.4,24.7c0.3,2.6,0.6,5.1,1.6,7.5c0.5,0.8,1.3,1.3,2.1,1.7
	C75.7,88,82,95,86.8,103.8c0.8,1.4,1.7,2.9,3.4,3.4c2,0.3,3.5-1,5-1.9c6-3.6,11.8-7.5,17.6-11.3C117.4,90.9,122.5,88.4,126.5,84.4z
	 M42,53.4c-2-0.4-3.8-1.8-5.7-2.7c-7.4,2.8-13.5,7-15.2,15.5c-0.8,3.8,0.5,5.1,4.3,4.7c2-0.2,3.9-1.5,6.4-0.4
	c-2.1,2.7-4.3,5.1-5.1,8.2C26.4,79.9,26,81,27.1,82c1,0.9,1.9,0.6,2.9,0.2c9.5-3.8,19.2-3.7,29.1-1.3c0-1.2,0-2.4,0-3.6
	C58.7,68.1,54.2,55.8,42,53.4z M102.2,131.2c-2.5-5.2-5.8-10-7.7-15.4c9.8-6.4,19.6-12.7,30.3-19.7
	C121.7,111.5,115.1,123.3,102.2,131.2z"/>
<path style="transform:scale(0.2)" :class="ValueId+'_color5'" d="M88.1,48.8c3.6-0.3,6.8,1,9.8,3.1c1.3,1,1.3,1.7,0.1,2.8c-4.4,4.3-15.2,4.2-19.5,0c-1.3-1.3-1-2,0.2-2.9
	C81.5,49.7,84.5,48.6,88.1,48.8z"/>
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
                                    <button :style="{background:'rgba('+getterCamelBg1+')'}" @click="ShowElement(getterCamelBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCamelBg2+')'}" @click="ShowElement1(getterCamelBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCamelBg3+')'}" @click="ShowElement2(getterCamelBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCamelBg4+')'}" @click="ShowElement3(getterCamelBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCamelBg5 +')'}" @click="ShowElement4(getterCamelBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCamelBg6+')'}" @click="ShowElement5(getterCamelBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCamelBg7+')'}" @click="ShowElement6(getterCamelBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Camel= [
                {top:17 ,left:48},
                {top:230 ,left:111},
                {top:217 ,left:119},
                {top:201 ,left:37},
                {top:162 ,left:38},
                {top:490 ,left:70},
                {top:211 ,left:103},
                {top:276 ,left:11},
                {top:259 ,left:114},
                {top:465 ,left:45},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Camel[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Camel[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Camel'){
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
                getterCamelBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Camel') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCamelBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Camel') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCamelBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Camel') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCamelBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCamelBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCamelBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCamelBg7: {
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
                            name:'Camel',
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