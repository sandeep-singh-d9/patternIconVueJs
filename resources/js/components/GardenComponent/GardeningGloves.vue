<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.5);">
                   <path style="fill:#69A940; transform:scale(0.2)" :class="ValueId+'_color1'" d="M107.1,209.7c-1.3-2.2-2.7-4.5-4-6.7c-8.4-13.9-5-22.5,10.5-27.4c2.5-0.8,5-1.5,7.6-0.8
    c4.8,3.8,10,7,13.4,12.5c24.4,39.6,53.5,76,81,113.5c4.7,6.4,9,13,12,16.6c-27.8-39.2-54.5-82.9-83-125.5c-2.3-3.4-6.2-6.7-4.2-11.8
    c6.8,3.3,8.5,10.8,12.9,16.1c1.9,2.4,3.6,5,6.5,9.2c-5-17.7-2.8-25.6,8-32.3c10.7-6.7,25.2-5.4,34.7,3.1c-4.9,3.2-9.3-2.9-12.9-1.4
    c17.9,21.7,31.9,46.7,48.9,69.3c17.1,22.7,34.5,45.3,45.4,60.9c-21.5-31.8-47.6-72-73.6-112.2c-1.8-2.7-5.2-5.3-2.7-9.4
    c3.3,0.7,4.2,3.8,5.8,6.1c13.3,19.3,26.5,38.6,40.5,59.1c8.3-30.9,16.1-60.4,24-89.9c3.9-14.4,8.4-28.7,11.7-43.3
    c1.9-8.4,7.3-12,14.6-13c12.5-1.9,24,1,33.6,9.5c5.5,4.9,8.1,10.5,6.1,18.7c-6,24.5-11,49.1-16.4,73.7c-0.7,10.2-3.6,19.8-6.3,28.3
    c3.6-7.2,3.1-16.9,7.8-24.9c11.6-43,23.3-85.9,34.9-128.9c4-15,10.7-21.6,23-22.7c13.6-1.3,25.3,5.3,31.6,17.8
    c0.5,1,0.8,2.2,1.3,3.3c3.1,4.4,1.7,8.9,0.5,13.5c-5,19.5-10.4,38.9-15.5,58.4c-6.2,21.8-11.5,43.8-15,55.6
    c2.9-10.7,8.6-31.3,13.9-52.1c6.2-22.6,12.6-45.1,17.9-67.9c0.9-4.1,2.5-7.8,5.5-10.8c10.7-11.5,20.4-11.7,35.2-0.6
    c0.7,8.9-0.7,17.5-3.3,26c-10.3,33.8-17.3,68.5-24.5,103.1c-2.6,12.3-5.8,24.5-8.5,36.8c-0.1,1.2,1.4,0.5,0.3,0.5
    c-0.2,0-0.3-0.3-0.1-0.9c10-43.6,23.9-86.1,36.4-129c2.5-8.6,3.6-17.8,8.5-25.7c3.9,7.3,0,14-1.6,20.9c-0.7,3.1-1.5,6.2-2.3,9.3
    c-4.1,19.5-10.5,38.4-15.9,57.5c-0.6,2.2-1.8,4.3-1,7c0,0.8,1.5-0.4,0.4-0.2c-0.5,0.1-0.8-0.1-0.7-0.5c6-20.8,10.6-42,18.8-62.1
    c5.4-13.9,18.7-19.2,34.9-14c15.1,4.9,22.1,16.9,18.4,30.9c-18.1,68.3-36.2,136.5-54.2,204.8c-0.4,1.6-0.4,3.4-0.7,5.3
    c3.8-0.2,5.2-3.2,7.1-5.1c17.3-17.2,34.8-34.2,51.8-51.8c8.8-9.1,19.4-10.8,30.7-8.9c13.6,2.2,20.4,16.7,14.6,29.7
    c-1.8-1.1-1.2-3.9-3.5-5.2c-8.2,9.2-14.3,20-21.4,30c-31.7,45.3-63.7,90.5-98.4,133.7c-3.6,4.5-6,8.7-1.7,14.7
    c6.9-8.6,12.7-17.8,18.8-26.7c30.5-44.4,62.2-87.9,94.2-131.3c1.6-2.2,2.8-5.4,6.7-4.6c-7.1,16.6-18.5,30.5-28.6,45.2
    c-28.4,41-57.2,81.8-86.1,122.6c-3.4,4.8-4,9-2.2,14.7c8.5,26.5,16.9,53.1,26.5,79.3c5.8,15.7,16.8,28.1,24.9,42.3
    c-5.4,5.1-8-0.2-10.3-3.4c-11.5-15.2-19.7-32.2-25.8-50c-24-69.9-44.7-140.8-64.3-212.1c-5.5-19.9-10.5-39.8-16.9-59.5
    c-1.6-5-3.3-10.1-8.1-14.9c1.9,11.6,5.7,21.5,8.8,31.6c19.6,64.9,36.5,130.3,48.7,197.1c5.3,29.2,12.1,58.2,24.1,85.7
    c5.4,12.5,12.1,24.2,20.7,34.8c6.2,7.7,5.7,9.6-3.3,14.5c-8.3,4.5-17.2,7.6-25.6,11.9c-29.9,15.1-59.7,30.7-89.5,46.2
    c-11.2,5.8-22.8,7.2-34.9,6.4c-26.9-37.3-54-74.6-80.7-112.1c-3.1-4.4-6.7-6.9-11.9-7.8c-13-2.3-25.9-4.9-38.8-7.4
    c-14.4-2.8-18.4-9.8-13.2-23.2c1.6-4.1,3.4-8,5.1-12.1c0.5,0.4,1.1,0.8,1.1,1.3c0,14.8,10.7,18.4,22.1,21.6
    c6.1,1.7,12.6,2.6,17.2,5.6c-3.6-6.7-10.4-10.6-18.6-12.9c-9-2.5-15.5-9-21.8-15.6c0-0.3-0.2-0.6,0-0.9c8.2-16.1,2-28.4-8.1-42
    c-45-60-87.3-121.8-129.1-184.1c-10.3-15.4-10.1-23.2,1.3-31.8c11.3-8.5,32.8-10,41.4,2.3c16.3,23.4,33.7,46,50.6,68.9
    c6.1,5.2,9.4,12.6,14.7,18.5c0.5,1.1,1.3-0.9,0.6,0c-0.1,0.2-0.4,0.1-0.7-0.4c-4.3-6.6-10.4-12-13-19.7
    c-17.8-26.3-35.5-52.6-53.3-78.8c-9.2-13.6-18.5-27.2-27.8-40.8c-8.7-12.7-9.2-21.8-1.5-30.4c8.3-9.3,22.3-11.7,33.9-5.8
    c4.5,2.3,8.6,5.2,11.7,9.2c8.1,7.1,12.7,16.7,18.8,25.3c9.7,13.9,19.3,27.9,28.6,42.1c-13-19.7-26.4-39.1-39.7-58.6
    C110.7,216.9,108.1,213.8,107.1,209.7z M328.7,718.1c10.5,19,15.7,20.4,34.6,9.3c36.4-21.3,73-42.3,109.3-63.8
    c10.2-6,21.7-10.2,29.9-19.4c-5.5,0.6-9.2,4.8-13.8,7.1c-43.5,21.8-86.6,44.6-131.4,63.8c-11.4,4.9-21.9,5.9-31.5-3.3
    C326.7,714,327.6,716.1,328.7,718.1z"/>
<path style="fill:#EFF1F2; transform:scale(0.2)" d="M427.3,73.9c-7.3,26.4-14.6,52.8-21.9,79.2c-3.3,0.1-2.4-1.7-1.6-3.5c4.5-17.8,9-35.6,13.6-53.4
    c1.6-6.2,3.2-12.4,2.7-19C423.1,77.6,424.5,74.3,427.3,73.9z"/>
<path style="fill:#EAEDEF; transform:scale(0.2)" d="M107.1,209.7c16.6,24.1,33.1,48.3,49.7,72.4c-0.7,0.5-1.5,1-2.2,1.6c-16.4-24-32.8-48.1-49.2-72.1
    C106,210.9,106.5,210.3,107.1,209.7z"/>
<path style="fill:#D6DCE0; transform:scale(0.2)" d="M469,116c-6.2,21.6-12.4,43.1-18.7,64.7c-0.8-0.2-1.5-0.4-2.3-0.7c6.8-21.8,11.6-44.1,19.3-65.7
    C467.9,114.9,468.4,115.4,469,116z"/>
<path style="fill:#DFE3E6; transform:scale(0.2)" d="M329.3,207.8c-1.5,9.2-4,18.1-7.8,26.7c0.5-10.4,3.2-20.3,6.2-30.2
    C328.3,205.5,328.8,206.6,329.3,207.8z"/>
<path style="fill:#DFE4E6; transform:scale(0.2)" d="M142.4,358.2c5.9,8.1,11.9,16.3,17.8,24.4c-0.6,0.4-1.2,0.9-1.7,1.3c-6.3-7.7-12.6-15.5-17.6-24.2
    C141.4,359.3,141.9,358.7,142.4,358.2z"/>
<path style="fill:#5F983A; transform:scale(0.2)" :class="ValueId+'_color2'" d="M324.3,709.8c0.2-3.3,2.3-4.1,4.9-3.2c10.2,3.8,19.4-0.4,27.8-4.8c38.7-19.9,77-40.6,116.6-58.7
    c7.4-3.4,7-5.3,2-11.2c-15.6-18.5-24.3-40.6-31.2-63.6c-13.9-46.1-19.9-93.9-31.2-140.6c-11.6-47.6-25.7-94.5-39.4-141.5
    c-0.7-2.5-3.9-6.2-0.4-7.7c3.1-1.4,5.8,2.3,7.3,5.1c6.2,11.8,9.1,24.8,12.6,37.5c22.6,82.9,45.8,165.6,74,246.9
    c5.9,17,13.8,33.1,24.3,47.8c2.2,3,3.9,7.7,9.3,5.7c3.3,7.4,11.3,14.4,1.7,22.7c-36.7,22.4-75.5,40.7-114.2,59.3
    c-11.1,5.4-22.4,10.5-33.9,14.9c-13.1,5-20,3.3-28.7-6.7C325.3,711.2,324.8,710.5,324.3,709.8z M571.6,306.9
    c-0.4-3.3,2.3-8.1-1.5-9.5c-3.5-1.3-4,4.2-6.4,6.1c-0.9,0.7-1.5,1.8-2.1,2.8C525,359.7,488,412.7,447.2,462.9
    c-6.4,7.9-6,13.9-1.4,22c1.3-1.6,2.6-2.8,3.5-4.2c24-35.6,48.7-70.7,74-105.4c14.1-19.4,28.7-38.6,43-57.8
    C568.1,314,569.9,310.5,571.6,306.9z M462.5,73.3c-1.9,0.4-2.9,1.1-2.5,3.6c0.7,4.3,0.8,8.7-0.6,13.1
    c-11.4,36.4-19.1,73.6-26.9,110.8c-2.8,13.5-5.2,27.1-7.8,40.7c2-1.3,2.8-2.8,3.3-4.5c9.9-33.7,20-67.4,29.4-101.2
    c4.8-17.2,11.7-33.8,13.8-51.6C469.6,79.5,466.9,75.7,462.5,73.3z M121.3,174.8c-1.3,1.9-0.9,2.9,1.3,3.9c4.1,1.9,7.1,5,9.5,8.9
    c22.9,36.3,48.8,70.4,74.5,104.6c8.5,11.3,17.2,22.4,25.9,33.6c-10.5-19.4-22.5-37.7-34.4-56c-19.2-29.8-39.7-58.9-57.7-89.5
    C134.8,175.6,128.4,173.7,121.3,174.8z M202.5,176.2c-6.5-1.4-12.7-6.6-21.3-0.7c7.3,0.6,11,4.7,13.9,9.3
    c24.7,38.5,52.1,75,79.7,111.4c5.8,7.6,11.8,15,17.7,22.6c-15.7-27.7-33.1-54-50.1-80.6c-11.7-18.2-24.9-35.4-34.8-54.8
    C206,181,204.2,178.6,202.5,176.2z M509.5,128.2c-12.3,39.8-20.4,80.6-28.9,121.3c-2.3,10.8-4.2,21.7-6.3,32.5
    c16.8-51.4,31.9-103.1,46.9-154.8c2-6.8-2.9-12.9-13.4-16.5C513.7,117.1,511.2,122.8,509.5,128.2z M187.9,344.5
    c-10.3-15.7-20.6-31.3-30.9-47c-18.5-28.2-36.9-56.5-55.5-84.6c-5.3-8.1-14.3-10.2-21.3-5.7c6,2.5,10.5,6.9,13.6,12.1
    c14.8,24.3,31.8,47.1,48.7,70c15.6,21.2,31.7,42,47.5,63C191.1,348.6,189.3,346.6,187.9,344.5z M328.5,130.9
    c-5.7,16.4-9.4,33.3-12.5,50.3c-2.9,15.8-5.6,31.7-5.3,47.8c10-31.9,19.5-63.9,28.8-95.9c2.7-9.4-0.2-15.1-10.5-20.2
    C329.7,119.3,330.5,125.1,328.5,130.9z M388.7,181.6c9.6-31.7,18.7-63.4,27.4-95.3c2.4-8.8-1.1-13.7-9.9-17.5
    C402.1,106.9,392.6,143.8,388.7,181.6z M132.7,356.7c-14.1-20.9-28.8-41.3-43.7-61.5c-4.3-5.8-10.1-9.5-18.8-8.9
    C91.8,310.3,110.2,335.4,132.7,356.7z M184.7,547.2c-0.3,7.1-1.3,14.7,6.3,18.7c11.4,5.9,23.8,8.6,37,11.7
    c-4.2-8.8-9.2-14.3-18.2-16.2c-8.1-1.7-15.3-5.9-20.1-13C188.2,546.2,186.8,545.8,184.7,547.2C184.7,547.2,184.7,547.2,184.7,547.2z
    "/>
<path style="fill:#D8DEE1; transform:scale(0.2)" d="M403.7,149.6c0.5,1.2,1.1,2.3,1.6,3.5c-5.8,21.4-11.6,42.8-17.5,64.1c-0.8-0.2-1.6-0.4-2.4-0.6
    C391.6,194.3,397.7,172,403.7,149.6z"/>
<path style="fill:#D2DADE; transform:scale(0.2)" d="M188.3,246.9c5.6,4.9,8.7,11.4,11.5,18.1C195.4,259.4,189.9,254.4,188.3,246.9L188.3,246.9z"/>
<path style="fill:#D8DEE1; transform:scale(0.2)" d="M169.1,300.4c3.5,5.2,6.9,10.3,10.4,15.5c-6.1-3.3-8.9-9-12.2-14.3
    C167.9,301.2,168.5,300.8,169.1,300.4z"/>
<path style="fill:#CDD6DA; transform:scale(0.2)" d="M378,250.4c0-5.8,1.2-11.1,4.5-18C382.5,240.1,380.1,245.3,378,250.4z"/>
<path style="fill:#D0D7DA; transform:scale(0.2)" d="M446.2,189.6c1.2,4.2-1,7.6-3,13.6C442.3,196.8,444.9,193.3,446.2,189.6z"/>
<path style="fill:#D7DDE0; transform:scale(0.2)" d="M188.3,246.9c-4.2-2-5.5-6.1-7.2-9.9C185.1,239.2,187.2,242.7,188.3,246.9L188.3,246.9z"/>
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
                                    <button :style="{background:'rgba('+getterGardeningGlovesBg1+')'}" @click="ShowElement(getterGardeningGlovesBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGardeningGlovesBg2+')'}" @click="ShowElement1(getterGardeningGlovesBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterGardeningGlovesBg3+')'}" @click="ShowElement2(getterGardeningGlovesBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGardeningGlovesBg4+')'}" @click="ShowElement3(getterGardeningGlovesBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGardeningGlovesBg5+')'}" @click="ShowElement4(getterGardeningGlovesBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var GardeningGloves= [
                {top:339 ,left:122},
                {top:332 ,left:12},
                {top:342 ,left:43},
                {top:147 ,left:117},
                {top:30 ,left:119},
                {top:162 ,left:111},
                {top:31 ,left:81},
                {top:141 ,left:77},
                {top:10 ,left:18},
                {top:-3 ,left:72},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = GardeningGloves[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  GardeningGloves[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'GardeningGloves'){
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
                getterGardeningGlovesBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GardeningGloves') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGardeningGlovesBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GardeningGloves') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGardeningGlovesBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GardeningGloves') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGardeningGlovesBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGardeningGlovesBg5: {
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
                            name:'GardeningGloves',
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