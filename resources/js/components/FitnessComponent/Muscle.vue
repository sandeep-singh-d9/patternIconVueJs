<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#65CBFF; transform:scale(0.2)" :class="ValueId+'_color2'" d="M74.6,318c19.2,6,37.4,4.4,55.8-4.4c32.8-15.7,66.8-18.9,101.1-4c19.3,8.4,34.6,22,47.9,38
    c1.8,2.2,1.4,3.9,0.5,6.2c-3,7.9-7.6,14.9-11.8,22.1c-4.4,3.3-8.7,6.7-13.3,9.7c-21.1,14.1-44.4,18.7-69.5,15.7
    c-30.9-3.6-58.5,3.2-80.6,26.5c-8.1,8.5-18.9,11.8-29.8,14.7c-0.1-35.8-0.1-71.6-0.2-107.4C74.6,329.4,74.6,323.7,74.6,318z
     M273.9,412.2c4.6,24.1,15.9,42.7,39.6,52.5c12.6,5.2,25.4,8.7,38.8,10.8c12.3,2,24.7,1.4,36.9-0.4c17.9-2.6,35.1-7.9,51.8-15.2
    c6.9-3,14.2-4.6,22.2-2.9c13.2,2.8,20.8-1.4,27.8-13.1c4.9-8.2,7.6-17.4,12-25.7c3.9-25.4,3.5-51,1.5-76.5
    c-4-50.9-15.4-100.1-33.2-147.9c-1.1-2.9-1.8-5.8-1.2-8.9c4-21.9,4.8-44,5.2-66.1c0.2-8.3-2.7-15.1-8.6-21
    c-16.8-16.6-36.4-28.9-57.8-38.4c-4.7-2.1-9.3-1.9-13.7,0.7c-5.2,3.2-10.4,6.4-15.4,9.9c-14.7,10.6-27.3,23.3-38.4,37.4
    c-5.4,6.9-4.7,11.4,0.2,18.5c7.9,11.4,19.9,15.4,31.9,19.7c3.9,1.4,7.7,0.4,10.8-2c5.2-3.8,10.3-7.9,15.2-12.1
    c2.6-2.2,3.5-5.1,1.2-8.1c-2.3-2.9-5.2-2.9-8.2-1.1c-2.6,1.6-5.2,3.2-7.8,4.8c-3.1,1.9-6.1,1.5-8.1-1.4c-2.2-3.1-1.6-6.3,1.5-8.5
    c2.9-2.1,6-4,9.2-5.8c8.4-4.7,18.1-2.7,23.5,4.6c5.6,7.6,4.5,17.6-2.8,24.3c-3.7,3.3-7.8,6.1-11.5,9.4c-7.2,6.5-15.5,9.5-25.3,8.1
    c-3.7,1.1-2.2,3.9-1.7,6c1.9,7.3,9.9,13.7,17.8,13.9c9.5,0.3,19,1.3,28.6,1.4c7.2,0.1,14.4,1.1,21.7,1.1c1.9,0,4,0.5,4.6,2.7
    c0.6,2.1-0.7,3.6-2.2,4.9c-1.3,1.1-2.8,2-4.3,2.8c-4.2,2.4-6.8,5.9-7.7,10.8c-4.4,22.1-10.7,43.7-17.2,65.3
    c-7.9,26.4-10.8,53-3.8,80.1c2,7.8,3.8,15.6,6.2,23.2c0.6,1.9,1,3.7-0.6,5.3c-1.6,1.6-3.1,0.6-4.7-0.3c-1.3-0.7-2.6-1.8-4.2-0.6
    c-3.8,3.5-7.2,2.5-10.3-1c-3-3.4-6.2-6.7-9.2-10.2c-22.3-25.3-56.9-30.9-86-14.1c-3.5,2-5.6,4.6-7.1,8.3
    c-3.7,9.1-7.4,18.3-14.8,25.3C273.6,392.6,272,402.2,273.9,412.2z"/>
<path style="fill:#056A9C; transform:scale(0.2)" :class="ValueId+'_color1'" d="M74.6,525.9c26.8,3.6,53.6,4.2,80.4,0.1c37.3-5.6,72.1-17.7,103.1-39.6c4.8-3.4,8.5-3.6,13.4-0.3
    c44.9,30.5,93,32.8,143.2,15.9c12.3-4.2,23.9-9.9,35.3-16.2c3.9-2.1,7.8-3.5,10.3,1.2c2.4,4.6-0.7,7.4-4.7,9.4
    c-3.8,2-7.6,4.1-12.1,6.6c8.1,3.4,15.5,3.8,23.5,2.5c28.9-4.7,36.6-29.7,31.1-49.1c-0.7-2.5-0.6-4.8-0.1-7.3
    c2.1-10.3,4.8-20.4,5.1-31c-1.8-4.1-0.2-8.2,0.1-12.3c1.2-20.8,1.2-41.5,0-62.3c-1.2-20-4.3-39.8-8-59.5
    c-5.6-29.7-13.7-58.7-24.2-87.1c-1.9-5.2-2.5-10.1-1.7-15.6c2.2-14.9,4.1-29.9,3.9-45c-0.1-5.7,1.4-11.3,1.1-17.1
    c-0.5-7.7-2.7-14.3-8.4-20c-16.3-16.4-35.3-28.4-56.2-37.8c-5.1-2.3-10.1-1.9-14.8,0.9c-15.4,8.8-28.8,20-40.8,33
    c-3.7,4.1-7.4,8.2-10.7,12.7c-5.2,7-4.8,10.4,0.1,17.4c7.5,10.9,19.1,14.7,30.6,18.7c2.6,0.9,5.4,0.4,7.8-0.9
    c6.1-3.3,11.3-7.8,16.3-12.5c1.5-1.5,2.7-3.5,1-5.6c-1.7-2.2-4-1.8-6.2-0.7c-2.9,1.4-5.5,3.5-8.6,4.6c-3.1,1.1-6.1,0.8-8.2-2.1
    c-2-2.7-1.9-5.8-0.2-8.6c5.2-8.7,21.1-13,30-8.2c10.7,5.8,13.6,19.8,5.6,28.8c-6.5,7.3-14.3,13.2-22.9,18c-5.4,3-11.3,3.4-17.3,2.3
    c-4.1-0.9-8-2.5-11.9-4.1c-2.8-1.2-4.3-0.3-4.9,2.6c-1.8,8.4,0.3,15.9,5.4,22.5c2.4,3.1,5.9,3.9,9.7,3.8c10.9,0,21.7-0.1,32.6,0
    c11.1,0.1,14.2,3.8,13.4,14.6c-1.1,15-7,28.4-12.8,41.9c-10.1,23.9-17.4,48.6-18.1,74.6c-0.4,16.9,1.5,33.7,15.8,46
    c3.9,3.3,7.2,7.7,4.2,13.6c-4.7,4.3-7,4.3-11.7,0.2c-6.3-5.5-11.1-12.5-17.7-17.8c-11.8-9.5-25-15.7-40.1-16.1
    c-14-0.4-27.1,3.6-38.9,11.3c-2,1.3-2.8,3.5-3.7,5.6c-2.8,7.1-6.3,13.9-10.4,20.3c-1.4,2.2-2.7,4.7-6,4.6c-5.3,0.5-8.2-1.7-8.2-7.2
    c-0.7-3.2,1.5-5.4,2.8-7.8c10.9-19.6,10.9-16.4-3.8-31.7c-18.5-19.2-41-31.1-67.7-34.1c-21.9-2.4-43,1.7-63.2,10.2
    c-10.5,4.4-20.6,10.2-32.4,10.7c-10.1,0.4-20.2,0.6-29.2-5.2c-3.9-1.6-7.1-3.9-5.2-8.6c1.9-4.6,5.7-4,9.7-2.8
    c15.4,4.7,30,3.5,44.9-3.5c45.9-21.5,91-21.6,134,7.8c10.8,7.4,20.1,16.4,28.4,26.4c1.7,2,2.8,3.4,6,1.7
    c25.9-14.2,52.1-15.7,78.5-1.3c0.3,0.2,0.7,0.1,1.3,0.1c0.7-4.2-0.8-8.2-1-12.3c-1.6-32.8,7.6-63.3,20.1-93.1
    c4.6-10.9,9.5-21.7,10.6-34.1c-9.6,0-19.1,0-28.6,0c-19.2,0-30.8-10.4-33-29.6c-0.7-6.3-0.4-12.7,1.6-18.7c1.2-3.6,0.2-5.6-2.2-7.9
    c-3-2.9-5.7-6.1-8.4-9.4c-7.3-8.9-8.6-19.7-1.8-29c16.6-22.8,37-41.6,61.9-55.1c6.7-3.6,13.9-3.6,21-0.5c24,10.4,45.8,24.2,64.2,43
    c6.7,6.9,10.3,14.9,10.4,24.6c0.1,22.6-0.9,45-4.6,67.3c-0.6,3.8,0.3,7.1,1.5,10.5c22.6,62.6,35.3,127,33.7,193.8
    c-0.5,20.4-2.8,40.7-7.3,60.7c-0.6,2.9-0.6,5.6-0.1,8.5c3.9,19.9-0.3,38.3-16.7,50.4c-17.7,13.2-38.2,15.9-58.8,5.3
    c-4.2-2.2-7.4-2.3-11.6-0.6c-38.4,14.9-77.4,17.8-117,5.3c-13.3-4.2-25.9-10.1-37.5-18c-2.8-1.9-4.7-1.8-7.6,0.1
    c-37,24.7-78.1,37.1-122.2,41c-20.7,1.8-41.2,0.9-61.7-1.5c-3.8-0.4-7.5-1.2-8.2-5.7C68.6,529,71.1,526.9,74.6,525.9z M112.2,464.2
    c3.2,1.3,5.5-0.1,7.5-2.4c16.1-18.3,37.4-24.6,60.7-26.3c14.7-1.1,29-4.1,42.8-9.3c3.7-1.4,5.9-4,4.6-7.9c-1.3-3.9-4.5-4.8-8.4-3.4
    c-3.8,1.3-7.6,2.4-11.4,3.7c-14.3,4.7-29.4,4.1-43.9,6.8c-20.3,3.9-38.6,11.7-52.6,27.7c-1.5,1.7-3.1,3.4-2.9,5.8
    C108.7,461.4,109.8,463.2,112.2,464.2z"/>
<path style="fill:#52A3CC; transform:scale(0.2)" :class="ValueId+'_color3'" d="M74.6,525.9c0.1-27.8,0.2-55.6,0.2-83.3c1.5-2.4,4-2.7,6.4-3.4c9.7-2.9,18-7.8,25.2-15.1
    c14.8-14.9,33.1-22.3,54-24.7c13.3-1.5,26.2,2,39.3,1.5c23.2-0.9,44.3-7.2,62.3-22.4c1.7-1.5,3.5-3.1,6-2.8c1.8,3.7,4.9,5.8,8.6,7.3
    c0.8,4.1-0.8,7.9-1.2,11.9c-2.3,20.5,4.1,38.3,17,54c4.7,5.8,11.2,9.3,17.6,12.5c20,10,41.4,14.5,63.6,13.8
    c22.1-0.8,43.3-6.3,63.6-15.1c9.5-4.1,18.9-6.2,29.4-3.7c8.8,2.1,15.5-2.4,20.5-9.4c5.2-7.2,8.5-15.3,11.7-23.5
    c0.9-2.1,1-5.1,4.5-4.9c1.7,2.2,1.1,4.7,0.7,7.2c-1.1,6.4-1.9,12.8-3.6,19.1c-1.3,5.1-1.2,10-0.1,15.2c4.4,20.7-7.5,41.3-28.3,46.2
    c-8,1.9-15.8,2.8-23.7,0.4c-2-0.6-4.4-1.2-4.7-3.6c-0.2-2.3,2.2-2.8,3.8-3.7c2.9-1.5,5.8-3,8.4-5c2.1-1.6,3.7-3.8,2.3-6.4
    c-1.6-2.8-4.4-1.9-6.6-0.8c-7.6,4-15.4,7.7-23.2,11.1c-39.4,17.3-79.7,21.4-121.1,8c-12.2-4-23.8-9.5-34.2-17.1
    c-5.6-4.1-10.4-3.9-16.1,0.1c-33.8,23.4-71.7,35.3-112.2,39.7c-20.5,2.2-41.1,1.6-61.7-0.2C80.1,528.3,76.9,528.3,74.6,525.9z
     M363.9,155.3c-10.8-4.4-12-3.5-11.9,8.4c0,0.2,0,0.4,0,0.6c0.5,14.7,7.8,21.8,22.2,21.8c10.5,0,21-0.1,31.5,0
    c6.9,0.1,9.1,2.8,8.6,9.7c-0.8,11.5-3.8,22.5-8.3,33.1c-7.2,16.8-13.9,33.8-18.1,51.7c-3.9,16.6-5.8,33.4-4,50.4
    c1.4,12.9,6.5,23.7,16.2,32.4c3.3,3,6.3,6.4,3.5,11.5c0.7,0.3,1.5,0.4,2.1,0.9c2.3,1.5,3.8,5.4,7.6,2.4c3.3-2.6,2.3-5.3,1.3-8.6
    c-5.6-17.4-9.5-35.2-10.1-53.5c-0.5-15,2.7-29.5,6.6-43.8c5.6-20.7,12.3-41.1,16.6-62.2c1.8-8.9,3.6-17.1,13.5-20.4
    c0.5-0.2,0.9-0.7,1.3-1.1c2-1.6,2.6-3.8,1.8-6.2c-0.9-2.4-2.8-3.3-5.4-3.4c-16.5-0.7-33.1-1.8-49.6-2.1c-6.6-0.1-11.5-2.8-15.3-7.4
    c-2.5-3-5.4-6.7-2.8-11.2C368.9,157.2,366.4,156.3,363.9,155.3z"/>
<path style="fill:#65CBFF; transform:scale(0.2)" :class="ValueId+'_color2'" d="M208.3,343.8c-7.6-0.9-15.8-2.1-22.3-8.3c-7-6.6-5.3-14,4.1-16.5c10-2.7,19.6-0.7,28.5,4.3
    c4.7,2.7,8.4,6.4,7.2,12.4c-1,5.2-5.9,5.8-9.9,7.3C213.6,344,211.3,343.7,208.3,343.8z"/>
<path style="fill:#65CBFF; transform:scale(0.2)" :class="ValueId+'_color2'"  d="M336.5,356.4c5.6,0,10.4,1.7,14,6.2c2.1,2.7,1.6,4.8-1.3,6.6c-5.3,3.2-17.2,1.6-21.2-2.9
    c-2.9-3.3-1.8-7.3,2.4-9C332.4,356.5,334.4,356.4,336.5,356.4z"/>
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
                                    <button :style="{background:'rgba('+getterMuscleBg1+')'}" @click="ShowElement(getterMuscleBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMuscleBg2+')'}" @click="ShowElement1(getterMuscleBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMuscleBg3+')'}" @click="ShowElement2(getterMuscleBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMuscleBg4+')'}" @click="ShowElement3(getterMuscleBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterMuscleBg5 +')'}" @click="ShowElement4(getterMuscleBg5 )" :class="this.ValueId+'_color5btn'"></button>
 -->
                                    <!--<button :style="{backgroundColor:'rgba('+getterMuscleBg6+')'}" @click="ShowElement5(getterMuscleBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterMuscleBg7+')'}" @click="ShowElement6(getterMuscleBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMuscleBg8+')'}" @click="ShowElement7(getterMuscleBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMuscleBg9+')'}" @click="ShowElement8(getterMuscleBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMuscleBg10+')'}" @click="ShowElement9(getterMuscleBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Muscle= [
                 {top:135 ,left:106},
            {top:95 ,left:32},
            {top:127 ,left:12},
            {top:9 ,left:99},
            {top:502 ,left:81},
            {top:362 ,left:123},
            {top:251 ,left:133},
            {top:376 ,left:155},
            {top:134 ,left:110},
            {top:468 ,left:124},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Muscle[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Muscle[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Muscle'){
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
                getterMuscleBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Muscle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Muscle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Muscle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMuscleBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMuscleBg10: {
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
                            name:'Muscle',
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