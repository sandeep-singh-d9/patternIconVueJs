<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#EEDEAD;transform:scale(0.2)" :class="ValueId+'_color4'" d="M90,416c-2-19.2-4.4-38.4-5.7-57.7c-0.5-8.1-4.1-15-6-22.4c-3.2-12.5-5.4-25.2-7.3-37.9
	c-1.9-12.4-1-25.2-4.9-37.3c-1-3-1.8-6-4-8.4c-0.9-7.4-1.3-14.9-2.1-22.3c-0.2-2-0.5-4,0.9-5.7c1.9,1,3.8,2,5.7,3.1
	c5,3,4.9,3,6.3-2.8c4.9-20.7,11.1-40.9,19.3-60.6c4.9-11.9,10.7-23.1,19.2-32.9c1.3-0.8,2.7-1.3,4.2-1.5c12.7-1.4,25.4-2.6,38.2-0.6
	c9.3,1.5,15.1,9.7,14.4,20.3c-0.1,1.3-0.4,2.6-0.6,3.9c-11.8,50.5-22.9,101.2-29.7,152.7c-0.5,3.8-0.1,7.7-2,11.2
	c-4.8,9.3-9.3,18.8-13.9,28.2c-10.7,21.7-20.3,43.8-28.5,66.5C92.6,413.4,92.7,415.7,90,416z"/>
<path style="fill:#D3392F;transform:scale(0.2)" :class="ValueId+'_color6'" d="M245.6,128.8c-2.1-11.1-5-22-9.2-32.5c-1.8-4.5-4.1-8.7-7.7-12c-2.8-2.5-4.5-5.9-5.4-9.4
	c-3.6-14.4-13.3-24.2-24.2-33.1c-3.6-2.5-8.1-4.3-8-9.8c17-7.5,34.6-8.4,52-2.2c18.1,6.5,29.2,28.6,23.6,46.3
	c-1.2-7-5.7-10.9-10.9-14.4c-0.1,1.5,1,2.2,1.7,3c7.2,7.4,7.3,16.5,4.7,25.2C258,103.4,252.4,116.4,245.6,128.8z"/>
<path style="fill:#F8C627;transform:scale(0.2)" :class="ValueId+'_color3'" d="M190.9,32c1.4,4.3,5.5,6.4,8,9.8c-5.7,1.9-11.2,4-16.5,7c-13.5,7.5-10.3,26.5,0.2,31.9
	c6.9,3.6,11.2,9.2,12.8,16.9c1.2,5.7-1.3,9.3-7,10.6c-3.5,0.8-7,0.6-10.4-0.1c-13.6-3-27.3-4.2-41-0.9c2-2.5,5.3-3.5,7.1-6.2
	c6.9-4.1,13.5-8.5,18.2-15.3c1.3-1.8,2.4-3.6,2.3-5.9c0.5-7.3-1.5-14.4-1.1-21.8c0.4-7.2,2-14,4.9-20.6c0.8-1.7,1.7-3.2,3.4-4.1
	C178,30.4,184.5,32.4,190.9,32z"/>
<path style="fill:#F2A62C;transform:scale(0.2)" :class="ValueId+'_color2'" d="M60.8,224.1c0.7,7,1.5,14.1,2,21.1c0.2,2.3,1.4,4.9-0.8,6.9c-7.2-7.9-11.7-17.2-15.2-27.2
	c-2.2-6.4-5-12.7-8.8-18.4c-0.8-1.2-1.7-2.9-3.4-2.5c-1.3,0.3-1.8,1.9-2.2,3.2c-1.2,4.3-2.3,8.7-3.2,13.1c-1.3,6.4-5.9,10-11.1,13.5
	c2.8-10.4-0.1-20.5-0.3-30.7c-0.1-5.1,1.7-9.8,3.2-14.5c2.9-8.8,2.6-17.6,0.2-26.5c-2.3-8.8-5.4-17.4-5.7-26.7
	c-0.1-3.3-2-6.6-3.1-9.9c0.9-0.7,1.7-0.1,2.2,0.3c7.2,6.3,15.7,11.7,16.3,22.8c0.4,6.6,2.9,12.4,5.8,18.3c5.8,11.8,9.1,24.6,13.3,37
	C52.6,211.4,55.1,218.6,60.8,224.1z M165.8,81c-1.3,6.3-6.4,9.9-10.7,13.8c-3.1,2.8-6.3,6-11,6c-3.2-11.3-5.5-22.9-7.6-34.4
	c-1.4-7.7-5.1-13.6-10.9-18.9c-10.2-9.2-20.8-18.1-30.3-28.1c-1.6-1.7-2.9-3.6-4.4-5.3c-0.4-0.8-0.1-1.3,0.8-1.2
	c1.7,0.1,3.2,1,4.6,1.9c14.8,9.8,30,19.1,44.1,30c7.4,5.7,12.3,13.4,18.5,20.2c0.4,0.5-0.2-0.1,0.3,0.4
	C163.8,69.5,166.5,74.5,165.8,81z"/>
<path style="fill:#2C3534;transform:scale(0.2)" :class="ValueId+'_color8'" d="M193,192c1.5,1.5,1.5,3.6,2.2,5.4c3,7.5,9.7,8.8,15.7,3.3c2.2-2,3.1-6.7,5.9-5.8
	c2.6,0.8,1.1,5.3,1.6,8.1c0.7,3.7,2.2,7.3,2.4,11.1c-4.2,25-10.1,49.6-16.4,74.1c-5,19.5-11,38.8-18.2,57.6c-1.1,3-2.8,5.7-4.3,8.4
	c-2.1,3.2-4.2,6.4-6.9,10.5c-0.1-2-0.2-2.8-0.2-3.5c-2.6-4.5-1.5-9.2-0.9-13.9c4-9.7,4.9-20,6.2-30.2c4.1-30.7,6.4-61.5,8.9-92.3
	c0.7-8.1,1.6-16.2,1.3-24.4C190.4,197.3,190.4,194.2,193,192z M140.1,442.1c0.8-12.9,1.6-25.8,2.7-38.7c1-12.1,2-24.1,3.4-36.1
	c1.7-15.4,3.2-30.9,5.6-46.3c1.8-11.4,2.8-23,4.3-34.5c2-15.1,4.2-30.1,6.4-45.2c1.5-10,3.1-19.9,4.6-29.9c0.2-1.4-0.4-3.2,1.9-3.4
	c1.3,1,1.6,2.6,1.6,4.1c-0.2,7,1.3,13.9,1.2,20.9c-0.2,15.1,1.9,30.2,1.9,45.4c-3.1,22.9-6.5,45.8-9.7,68.7
	c-1.5,10.7-3.2,21.4-4.4,32.2c-0.5,4.6-2.3,9-2.5,13.7C151.3,409.3,145.7,425.7,140.1,442.1z M61.9,514.2c2.8-6.3,5.7-12.6,8.5-19
	c12.7-28.9,25.3-57.8,37.9-86.7c6.3-14.5,12.7-28.9,19.2-43.3c0.3-0.7,0.4-3.7,2.6-1.2c-1.4,13-1.8,26.1-4,38.9
	c-8,16.1-17,31.6-25.5,47.5c-10.2,19.1-20.8,37.9-31.3,56.8c-1.2,2.2-2.4,4.4-3.8,6.4c-0.7,1-1.5,2.4-3.2,1.3
	C62,514.8,61.8,514.5,61.9,514.2z"/>
<path style="fill:#772321;transform:scale(0.2)" :class="ValueId+'_color1'" d="M165.8,81c-0.4-10.9-9.6-16.3-15.3-23.8c-12.1-15.7-29.8-24.5-45.8-35.3c-4.4-2.9-8.2-7-13.8-7.8
	c-0.1-2.4-0.1-2.6,2-2.2c3.4,0.7,6.8,1.6,10.1,2.7c12.4,3.9,24.3,8.9,35.7,15c9,4.8,18.4,4.9,28.1,3.9c1.6-0.2,3.3-0.3,4.9-0.4
	c-6,11.3-7.8,23.3-6.3,36C165.9,73,165.7,77,165.8,81z"/>
<path style="transform:scale(0.2)" d="M166.1,153c0.2-2.3,0.6-4.6,0.4-6.9c-1-10.7-6.1-15.3-17-16.3c-12.8-1.2-25.5,0.6-38.3,1.1c7.3-9.4,15.4-17.8,25.7-23.8
	c10.7-4.9,21.7-3.8,32.8-1.8c4.1,0.8,8.2,1.5,12.4,1.7c4,0.3,8.2,0.3,10.8-3.5c2.6-3.7,0.8-7.4-0.7-10.9c-2-4.6-5.5-7.8-9.7-10.5
	c-6.7-4.4-10.3-10.3-10.1-18.8c0.2-5.9,2.1-10.4,6.7-13.7c5.8-4.2,12.2-7.5,19.5-8.5c2.9,0.4,4.4,2.8,6.4,4.5
	c8.3,6.9,15,15,18.2,25.7c1.6,5.3,4.2,10.1,8.2,14.1c3.5,3.5,5.2,8.1,6.9,12.6c3,7.8,5.1,15.9,7.2,23.9c0.6,2.4,0,4.6,0,6.9
	c-0.9,14.9-1.6,29.9-2.6,44.8c-1,15.3-2.3,30.5-5,45.6c-0.2,1.3-0.7,2.5-1.1,3.8c-3.4,3.9-7.5,4.1-11.4,0.5c-2.8-2.5-4-6-5.3-9.4
	c-2.1-5.4-2.9-11.1-3.7-17c-2.4,1.3-3.4,3.3-5,4.7c-6.3,5.6-13.4,4.2-17-3.5c-1-2.1-1.6-4.3-2.3-6.6c-0.8-4.2-0.1-8.6-1.8-12.8
	c-1.9,0.2-2.4,2.1-3.6,3.1c-5.8,5-12.4,4-15.5-3c-3.2-7.1-5.8-14.5-5.2-22.5C166,155.4,167,154.2,166.1,153z M134.3,317.2
	c2,3.6-0.1,7.2-0.4,10.6c-1.1,12.1-1.7,24.2-3.8,36.2c-4.6,6.1-6.5,13.4-9.5,20.2c-16.4,37.1-32.6,74.4-49,111.5
	c-2.8,6.4-5.3,12.9-9.7,18.5c-2.1-2.7-0.5-5.4,0.2-8c8.4-29.1,17.2-58.1,27-86.8c0.4-1.1,0.6-2.2,0.9-3.3
	c7.8-20.1,15.5-40.2,24.9-59.6C121.2,343.3,127.8,330.3,134.3,317.2z M62.3,515c3-1.6,3.9-4.7,5.4-7.4
	c14.5-26.1,28.9-52.3,43.2-78.4c4.3-7.8,8.6-15.7,12.8-23.6c0.6-1,1.1-2,2.3-2.5c0.2,8.4-0.3,16.8-2,25
	c-15.7,28.1-32,55.9-51.6,81.6c-1.4,1.8-2.9,3.7-4.7,5.1C66.1,516.2,64.1,517.6,62.3,515z"/>
<path style="fill:#444C4E;transform:scale(0.2)" :class="ValueId+'_color7'" d="M156.9,392.9c-2.2-2.9-0.1-5.8,0.3-8.5c3.3-24.9,7-49.7,10.6-74.5c1.5-10.3,2.9-20.6,4.3-30.9
	c2.5,0.5,2.3,2.7,2.4,4.4c1,17.8,2.5,35.5,2.1,53.4c-0.1,3.5-0.1,7-1.5,10.3c0,4.7-0.1,9.4-0.1,14.1c-4.4,3-6.2,8-8.6,12.4
	C163,379.8,160.1,386.4,156.9,392.9z"/>
<path style="fill:#444C4E;transform:scale(0.2)" :class="ValueId+'_color7'" d="M166.1,153c1.1,0.8,0.8,1.9,0.8,2.9c-0.8,1.9-0.7,4-0.3,5.9c3,13.4,1.9,27.1,3.7,40.6
	c0.2,1.8,0.2,3.7-0.5,5.4c-1.9,2.6-1.7,5.7-2.2,8.6c-7.6,51.3-15,102.7-20.3,154.3c-2,19.5-4,39-4.9,58.6c-0.2,4.3-2,8.4-2.4,12.7
	c-3,8.2-5.2,16.8-9.2,24.6c-0.7,1.5-1.5,3.4-3.3,3.3c-2.2-0.1-2.6-2.4-3.1-4.1c-1-3.2-1.1-6.5-0.9-9.9c0.4-8.5,0.9-16.9,1.3-25.4
	c0-0.9,0.3-2-0.7-2.7c-1.7-2.8-0.7-5.9-0.3-8.7c0.7-5.4,0.8-10.9,0.8-16.3c2.2-12.9,2.1-26,4.3-38.9c1.4-11.9,2.5-23.8,3.5-35.7
	c0.3-3.9,2.2-7.3,1.9-11.2c2.6-7.3,2.3-15.1,3.4-22.6c4.7-32.1,10.9-63.8,17.8-95.5C158.9,183.7,162.6,168.4,166.1,153z M182,354.1
	c4.9-14.8,10.7-29.3,14.9-44.3c8.3-29.5,16.1-59,21.2-89.3c0.4-2.2,0-5.2,2.8-6.5c0.8,1.6,1.6,3.2,2.4,4.7c3.2,6.3,7.1,7.6,13.5,4.3
	c-2.5,21.2-6.1,42.1-14.7,61.8C211.3,309.4,198.2,332.6,182,354.1z M175.1,347c0-5.8,0.1-11.7-0.1-17.5c-0.6-16.1-1.3-32.2-2-48.3
	c0-0.8-0.5-1.5-0.8-2.3c-1.1-23.6-2.1-47.2-3.2-70.9c-0.9-14.2-1.9-28.3-2.7-42.5c-0.2-3.2-1-6.6,0.7-9.7c0,7.8,2.2,15.1,5.2,22.1
	c3.3,7.7,10.1,8.1,15.3,1.3c1.1-1.4,2.3-2.7,4-4.6c1,6.2,2,11.6,1.6,17.2c-2.1,8.6-0.9,17.5-1.8,26.2c-1.6,15.4-2.6,31-4,46.5
	c-1,11.9-2.1,23.7-3.4,35.6c-1.6,14.8-3.1,29.6-6.9,44C176.7,345.5,176.2,346.4,175.1,347z"/>
<path style="fill:#FCFCFC;transform:scale(0.2)" :class="ValueId+'_color5'" d="M189,53.9c6.1,0.1,11.1,5.2,11,11.3c-0.2,5.8-5.1,10.7-11,10.8c-6.1,0.1-11.1-4.9-11.1-11.1
	C177.9,58.5,182.7,53.8,189,53.9z"/>
<path style="transform:scale(0.2)" d="M194.1,65.3c-0.3,3-2.1,4.9-5.4,4.9c-3.3,0-5.4-2.1-5.4-5.3c0-3.4,2.3-5.6,5.7-5.5C192.3,59.5,194.1,61.6,194.1,65.3z"/>
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
                                    <button :style="{background:'rgba('+getterWoodpeckerBg1+')'}" @click="ShowElement(getterWoodpeckerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWoodpeckerBg2+')'}" @click="ShowElement1(getterWoodpeckerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWoodpeckerBg3+')'}" @click="ShowElement2(getterWoodpeckerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWoodpeckerBg4+')'}" @click="ShowElement3(getterWoodpeckerBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterWoodpeckerBg5 +')'}" @click="ShowElement4(getterWoodpeckerBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWoodpeckerBg6+')'}" @click="ShowElement5(getterWoodpeckerBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWoodpeckerBg7+')'}" @click="ShowElement6(getterWoodpeckerBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWoodpeckerBg8+')'}" @click="ShowElement7(getterWoodpeckerBg8)" :class="this.ValueId+'_color8btn'"></button>
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
        var Woodpecker= [
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
            var randomNumber = Woodpecker[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Woodpecker[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Woodpecker'){
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
                getterWoodpeckerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Woodpecker') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWoodpeckerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Woodpecker') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWoodpeckerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Woodpecker') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWoodpeckerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterWoodpeckerBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWoodpeckerBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWoodpeckerBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWoodpeckerBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Woodpecker',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
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