<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#006699; transform:scale(0.2)" :class="ValueId+'_color1'" d="M468.3,251.1c15.7,3.6,27.5,12.3,36.9,24.3c17.5,22.4,18.3,46.5,5.9,71.4c-1.7,3.5-2.4,5.1,1.7,7.7
    c27.8,18,38,48.1,27.1,79.2c-1.1,3-0.5,4.7,1.6,6.8c18.3,18.9,23.6,41.4,15.2,66.1c-8.6,25.3-27.5,40.4-53.4,46
    c-20.9,4.5-39.1-1.4-54.1-16.7c-1.9-1.9-3.2-2.8-6.2-1.3c-34.4,17.5-64.5,9.6-86.8-22.8c-2.7-3.9-4.1-3.9-8-1.6
    c-20.9,12.2-42.7,14.8-64.2,2.3c-12.5-7.3-22.2-18-28.9-31c-1.4-2.6-2.2-3.5-5.4-2.2c-29.4,12.3-54.1,6.4-75.1-17.7
    c-20-22.9-22.4-49.1-6.5-74.8c1.7-2.7,1.5-3.9-1-5.8c-6.7-5.2-12.8-11.1-17.9-18c-11.3-15.3-15.2-32.1-10.6-50.6
    c0.5-2,0.9-3.6-0.6-5.7c-27-38.8-30.9-79.7-10.6-122.6c1.3-2.7,2.6-5.4,3.9-8.1c0.5-1.1,1.8-2.5,0.5-3.5c-1.4-1.2-2.3,0.6-3.2,1.3
    c-10.1,8.4-20.3,16.9-30.3,25.3c-8.7,7.3-17.3,14.6-25.9,21.9c-13.8,11.6-35.6,10.2-46.8-3.1c-11.2-13.2-9.3-34.6,4.4-46.2
    c55.3-46.5,110.8-93,166.2-139.3c14.4-12,34.9-10.2,46.4,3.9c11.6,14.1,9.4,34.2-5,46.3c-22.4,18.7-44.7,37.5-67.2,56.1
    c-3.5,2.9-4.4,5-1.3,8.5c1.1,1.3,2.1,2.7,2.8,4.2c1.5,3,3.1,2.9,5.7,1.2c14-8.9,29.2-14.4,45.6-17.2c15.4-2.6,30.8-2.4,46,1.1
    c3.7,0.8,6.2,0.1,9.1-2.2c20-15.6,42-23,66.8-13c16.9,6.8,28.7,19.6,36.2,36.2c1.3,2.8,2.2,3.4,5.2,2.1
    c28.9-12.3,52.5-7.5,73.3,14.7c19.1,20.3,22.8,48.3,9.9,74.3C469.2,249.1,468.9,249.8,468.3,251.1z"/>
<path style="fill:#52A3CC; transform:scale(0.2)" :class="ValueId+'_color2'" d="M146.6,293.5c-22-33.4-23.4-67.7-6.4-103.1c1.3-2.7,2.4-5.6,4.1-8c4.2-6,5.6-11.8-0.1-17.8
    c-1.7-1.7-0.9-3.1,0.7-4.7c9.1-9.1,9.1-9.2,16.2,1.5c8.9,13.3,8.8,13.2,22.5,4.3c23-15,48.1-20.5,75.4-16.5c3.8,0.6,3.4,1.5,2.2,4.6
    c-3.1,8.4-8,11.1-17.5,10.6c-20.3-1.1-38.8,5.8-55.4,17.5c-6,4.2-6.3,7.9-1.5,13.5c20.9,24,44.7,44.6,71.4,62
    c3.6,2.3,6.3,4.9,5.2,9.6c-1.3,5.6-6.9,8.2-11.7,5.1c-25.6-16.5-48.9-35.7-69.5-58.2c-5.1-5.6-10.1-11.2-14.7-17.1
    c-4.1-5.3-10.5-4.4-13.6,1.9c-12.6,25.7-12.3,51.5,0.3,77.1c2,4.1,2.6,6.8-1.2,10C150.5,287.7,148.8,290.7,146.6,293.5z M233.1,47.6
    c-6.6-10.7-18.1-12.1-28.8-3.2C149,90.6,93.8,136.9,38.7,183.2c-8.9,7.5-9.3,17.4-1.2,26c0,0,0,0,0,0c0,0,0,0,0,0
    c7.3,8.3,16.4,8.2,26.7-0.3c54.6-45.8,109.2-91.6,163.7-137.4C236.2,64.5,237.7,57.5,233.1,47.6z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" d="M241.4,178.4c0.4,0,0.8,0,1.1,0c9.3,0,9.3,0,9.6,9.4c0.2,6.1,1.5,12,3.9,17.5
    c1.3,3.1,0.7,4.1-2.2,5.3c-5.6,2.3-10.8,5.4-15.4,9.3c-2.2,1.8-3.8,2.2-6.2,0.1c-9.8-8.5-19.1-17.6-28.1-26.9
    c-2.7-2.8-1.2-3.9,1.3-5.2C216.6,181.8,228.5,178.4,241.4,178.4z"/>
<path style="fill:#65CBFF; transform:scale(0.2)" :class="ValueId+'_color3'" d="M223.8,275.4c-0.1-1.2-0.5-2.6,0.8-4.1c5.8,3.9,11.7,7.8,17.5,11.8c5.6,3.9,11.8,5,18.3,3.5
    c8.4-1.8,14.6-6.6,16.4-15.2c2.2-10-0.9-18.7-9.1-25c-5.5-4.2-11.3-8.1-17.2-11.9c-4-2.5-3-3.9,0.2-6.3
    c30.4-21.7,69.3-6.8,78.1,30.3c5.3,22.3-3.9,39.2-21,52.8c-14.6,11.6-31,17.4-48.8,9.1c-17-8.1-29.5-21.2-34.7-40.1
    C224,278.8,223.9,277.1,223.8,275.4z M285.5,420.5c2.6,0.6,5.2,1,7.8,1.1c23.4,0.6,49.3-19.4,55.1-42.5c4.9-19.5-1.6-36.1-18.3-46.8
    c-2.6-2.4-5.5-4.5-7.8-7.2c-2.6-3.1-4.5-3-7.8-0.6c-14.6,10.4-30.8,15.6-48.7,12.3c-6.1-1.1-9.5,0.8-12.4,5.5
    c-1.5,2.4-3,4.8-4.4,7.1l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c-3.8,6-5.7,12.6-5.9,19.7C242.8,389.9,264.2,415.8,285.5,420.5z
     M453.2,263.7c-5.9,0.3-11.4,2.1-16.7,4.4c-2.1,0.9-3,2.1-3,4.7c0.4,20.9-7.3,38.2-22.9,52.2c-3,2.7-8.7,3.8-8.2,8.6
    c0.4,4.3,3.8,8,6.6,11.6c0.8,1,1.7,1.9,2.6,2.9h0c3.4,4.9,8,8.5,12.5,12.1c11.9,9.6,25.3,11.9,39.8,7.6
    c13.1-3.9,23.4-12.3,31.5-22.9c12.3-15.9,14.1-33.7,4.5-51.4C490,275.5,475.7,262.8,453.2,263.7z M450.2,440.6
    c-3.2-4.2-7.5-7.3-11.8-10.4c-3.1-2.2-5.3-2-8.3,0.6c-12.2,10.8-26.5,17-43,17c-4,0-5,1.3-5,5.1c0.2,13.6-4.1,25.9-11.7,36.9
    c-6.9,9.9-7,9.9,1.4,19.1c1.4,1.5,3,2.8,4.5,4.2c0,0,0,0,0,0c0,0,0,0,0,0c15.8,17.9,36.9,21.7,57.4,10.4c6.5-3.6,12-8.3,17.2-13.5
    C470.6,490.3,470.3,460.3,450.2,440.6z M440.6,386.9c0.6-3.1-0.3-4.4-3.5-4.9c-2.9-0.4-5.9-1.4-8.6-2.6
    c-16.7-7.6-28.6-20.2-37.2-36.2c-1-1.8-1-5.1-4.4-3.9c-8.7,3.1-17.8,3.9-27.3,4.4c2.8,9.1,4.7,17.8,4,26.9
    c-1.1,14.7-6.1,27.8-15.7,39c-1.2,1.4-2.2,2.4-0.4,4.2c5.5,5.4,10.6,11.1,17.6,14.8c4.7,3.4,10,5.1,15.7,5.6
    c22.6,2,38.1-9.7,51.2-26.2c0,0,0,0,0,0c0,0,0,0,0,0C436.8,401.8,439.1,394.5,440.6,386.9z M368.7,454c-0.1-5.5-1-9.1-6.9-10.8
    c-3.7-1-6.9-3.7-10.3-5.6c-4.6-4.4-9.4-8.6-13.7-13.3c-2.1-2.3-3.4-2.4-5.9-0.7c-11.7,7.8-24.5,12-38.7,11.6c-3.2-0.1-4.6,1-5.6,4
    c-2.7,8.5-7.3,16-13.5,22.5c-10.4,10.8-10.4,11-0.4,22.7c1.3,1.6,2.9,2.9,4.3,4.4c0,0,0,0,0,0c6,6.6,12.7,12.2,21.1,15.6
    C330.8,516.8,369.3,482.4,368.7,454z M273.3,437.8c2-3.6,1.5-5.3-2.6-7.6c-23.7-13.4-40.1-32.1-41-60.9c-0.1-3.4-1.2-4.3-4.4-3.9
    c-10,1.4-19.3,4.6-27.3,11c0,0,0,0,0,0c-2,1.4-4,2.8-5.9,4.3c-25,21.3-28.2,46.8-8.4,69.7c11.5,13.4,25.1,23.4,44.3,20.9
    c15.8-2.1,27.7-10.7,37.6-22.6C269.2,445.8,271.1,441.7,273.3,437.8z M541.2,464.6c-1.7-4.3-4.8-7.6-7.4-11.3
    c-1.9-2.7-3.1-3.1-5.7-0.1c-11.7,13.3-26.1,22.1-43.8,24.6c-4.4,0.6-5.6,2.3-6,6.1c-1.2,11.9-6,22.3-13,32c-2.2,3.1-8.2,4.9-6.2,9.3
    c1.6,3.5,6.3,5.6,9.7,8.3c0.3,0.2,0.7,0.2,1.1,0.3c0,0,0,0,0,0c0,0,0,0,0,0c5.8,4.7,12.8,6.3,20,6.5c18.7,0.6,32.5-9.1,44.3-22.2
    C547.9,502.7,550.3,483.1,541.2,464.6z M275.1,204.8c19.5-2,35.8,4.6,49.3,18.6c1.8,1.9,3,2.6,5.5,0.7c9-6.7,19.1-11.1,30.2-13.2
    c1.9-0.4,3.5-0.8,4.6-2.7c4.1-7.1,7.5-14.3,7.1-22.8c0,0,0,0,0,0c0,0,0,0,0,0c0.8-5.1,0.1-10.1-1.1-15.1
    c-5.8-22.6-28.8-41.1-49.9-40.1c-24.4,1.1-51.5,26.1-54.9,50.7c-0.9,6.9,0.3,13.4,3,19.8C270.1,203.7,271.5,205.1,275.1,204.8z
     M183.1,369.7c11.9-9.7,25.2-16.5,40.8-17.2c6.7-0.3,10.5-2.5,12.4-9.1c0.9-3.3,3.2-6.4,5.4-9.2c2.7-3.3,2.6-5-1-7.9
    c-16.4-13.2-29.3-28.8-30.3-51.1c-0.1-2.9-1.8-2.8-3.8-2.8c-6.3,0.1-12.2,1.5-17.8,4.3c0,0,0,0,0,0c-12.3,4.8-21.6,13.5-29.1,23.9
    c-13.7,19-12.7,38.3,2.2,55.4c3.9,5.4,9.1,9.4,14.1,13.7C178.6,372.2,180.3,372,183.1,369.7z M336.6,318.6c0.3,0.2,0.7,0.3,1,0.4
    c0,0,0,0,0,0c8.5,8.3,18.9,11.7,30.4,10.5c21.5-2.3,36.9-14.6,46.8-33.2c12.6-23.6,0.9-54.4-24.8-68c-10.2-5.4-20.7-6.2-31.7-3.1
    c-6.7,1.7-12.4,5.1-18.2,8.8c-3.4,2.2-4.1,4-2.3,8c9.7,21.4,8.1,42.4-4,62.5C328.9,312.8,328.7,312.7,336.6,318.6z M496.6,364.6
    c-10.9,10.4-24.1,16.4-39,18.5c-2.2,0.3-3.1,0.9-3.4,3.3c-1.1,10-4,19.5-9.4,28c-1.4,2.2-0.7,2.9,1.2,4.2c4.4,3.1,8.6,6.6,12.9,9.9
    l0,0c9,9.6,16.4,20.1,18.7,33.3c0.7,3.9,3.1,3,5.4,2.5c12.2-2.3,22.1-8.8,31-17.3c21.5-20.8,22.1-50.1,1.2-71.6
    c-3.6-4.7-8.3-8-13.2-11.2C500.1,363,498.6,362.7,496.6,364.6z M383.3,211.3c8.9,1.6,16.5,5.9,23.7,11.2c0,0,0,0,0,0
    c9.7,8.5,18.4,17.8,22.6,30.3c0.8,2.4,2,2.6,4.1,1.7c4.2-1.7,8.5-3.1,13-3.4c3.3-0.3,5.5-1.8,7.4-4.4c7.9-11.3,10.9-23.6,8.3-37.3
    c-3.7-19.9-26.7-45.9-52.1-42.7c-7.3,0.5-13.8,3.2-20.2,6.4c-3.3,1.6-4.7,3.6-4.5,7.4c0.6,9.1-0.9,18-4.6,26.4
    C379.7,209.6,380.4,210.7,383.3,211.3z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" d="M163.3,214.4c14,16,28.7,30.3,45.4,44.3c-14.4,0.7-26.7,4.5-37.9,11.7c-2,1.3-2.7,0.7-3.9-1.1
    C158.1,255.6,156.2,230,163.3,214.4z"/>
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
                                    <button :style="{background:'rgba('+getterGrapesFitnessBg1+')'}" @click="ShowElement(getterGrapesFitnessBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg2+')'}" @click="ShowElement1(getterGrapesFitnessBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg3+')'}" @click="ShowElement2(getterGrapesFitnessBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg4+')'}" @click="ShowElement3(getterGrapesFitnessBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg5 +')'}" @click="ShowElement4(getterGrapesFitnessBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg6+')'}" @click="ShowElement5(getterGrapesFitnessBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg7+')'}" @click="ShowElement6(getterGrapesFitnessBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg8+')'}" @click="ShowElement7(getterGrapesFitnessBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg9+')'}" @click="ShowElement8(getterGrapesFitnessBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGrapesFitnessBg10+')'}" @click="ShowElement9(getterGrapesFitnessBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var GrapesFitness= [
                {top:472 ,left:44},
            {top:464 ,left:57},
            {top:18 ,left:151},
            {top:294 ,left:104},
            {top:310 ,left:36},
            {top:21 ,left:79},
            {top:466 ,left:93},
            {top:512 ,left:41},
            {top:418 ,left:125},
            {top:294 ,left:52},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = GrapesFitness[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  GrapesFitness[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'GrapesFitness'){
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
                getterGrapesFitnessBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GrapesFitness') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GrapesFitness') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GrapesFitness') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGrapesFitnessBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesFitnessBg10: {
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
                            name:'GrapesFitness',
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