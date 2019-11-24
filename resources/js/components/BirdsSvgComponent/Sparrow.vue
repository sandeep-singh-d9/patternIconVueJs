<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#EDDFD4;transform:scale(0.2)" :class="ValueId+'_color6'" d="M200.9,378c-2-2.9-5.4-3.8-8.2-5.5c-21.4-12.9-40-29.1-56.9-47.3c-21.3-22.9-38.8-48.4-52-76.8
	c-5.2-11.1-10.7-22.2-13.2-34.3c-1.3-6.6-1.7-13.4-2.5-20.1c3.9,0.2,7.6-0.5,11.2-1.8c6.1-2.1,10.1-6.1,11.9-12.4
	c3.5-12.6,3.3-25.3,1.4-38c-0.3-2.3-0.9-4.6-1.4-6.8c-2.7-13.1,3.3-23.5,16.2-27.9c10.7-3.6,21.5-7,31.3-12.8c3.9-2.3,7-5.6,11-7.7
	c4.5-1.1,7.9,1.4,10.8,3.9c10.3,8.9,17.6,19.8,21.1,33.1c0.5,2.1,1.1,4.3,0.6,6.4c-0.7,3.6,0.5,4.4,4,3.5
	c9.6-2.5,18.1-6.6,23.4-15.6c0.5-0.9,1-2.2,2.5-1.9c0.2,6.3,4.5,10.5,8,15.1c0.4,2.6-1.7,3.8-3.1,5.3c-9.3,10-20.9,17.1-32.3,24.2
	c-11,6.8-20.3,15-26,26.9c-3.3,6.8-4.3,13.8-4.4,21.2c-0.2,14.1,1.8,27.6,8.7,40c12.1,20.7,30.5,33.1,52.8,40.7
	c26.8,9.2,54.2,15.7,82,21c2.8,0.5,5.5,1.1,8,2.5c22.5,17.1,45,34.4,67,52.1c5.6,4.5,10.9,9.3,16.3,13.9c1.4,1.2,3.3,2.4,2.9,4.9
	c-14.3,0.2-28.4-1.7-42.6-2.8c-5.9-0.5-11.9-0.5-17.9-0.9c-14.4-0.9-28.9-2.2-43.3-1.2c-13.6,1-26.6,5.1-39.6,9
	c-1.7,1.3-3.7,1.4-5.7,1.3c-13.9-0.5-27.1-4-39.8-9.7C202.4,379.3,201.6,378.6,200.9,378z"/>
<path style="fill:#848484;transform:scale(0.2)" :class="ValueId+'_color5'" d="M57.3,64.9C69.7,74.1,83,70,96.1,67.8c1.3-0.2,2.6-0.5,3.8-0.8c1.1,1.1,0.5,2.5,0.5,3.8
	c0,4.5,2,7.6,6,9.4c3.9,1.7,7.9,0.4,11.1-3.1c1.2-1.3,1.8-3.2,3.5-4.1c8.8,6.5,17.9,12.2,28.9,14.2c-9.1,9.3-21,13.6-32.8,18.1
	c-6,2.3-12.7,2.7-17.7,7.4c-6.7,6.3-9.9,13.3-7.1,22.7c4.2,14.2,4,28.5,0.6,42.9c-2.6,10.9-10.4,17-21.4,17.4
	c-1.6,0.1-2.4-0.9-3.5-1.6c-0.5-14-1-27.9,0.4-41.8c0.2-1.7-0.5-3.2-1.1-4.8c-4.9-12.7-9.7-25.4-14.5-38.1c0.1-3,2.7-3,4.6-3.5
	c4.2-1.2,8.4-2.1,12.3-4c1.6-0.8,4.1-1,4.1-3c0-1.7-2.5-1.9-3.9-2.7c-0.7-0.4-1.5-0.6-2.3-0.9c-1.7-0.8-3.2-1.7-4.8-2.6
	c-9.5-5.6-12-12.9-8-23.6C55.6,67.5,56.5,66.2,57.3,64.9z"/>
<path style="fill:#8F4A2D;transform:scale(0.2)" :class="ValueId+'_color1'" d="M161.8,249.1c-7.3-11.9-8.8-25.1-9.1-38.7c-0.5-19.6,8.2-34.4,23.7-45.7c9.9-7.2,20.8-13.1,30.5-20.7
	c4.9-3.8,9.3-8,13.2-12.9c7.7,4.3,15.5,8.3,22.9,13c30.2,18.8,57.5,41.2,81.8,67.1c6,6.4,11,13.7,16.3,20.7c1.6,4-1.1,6.8-3.9,7.5
	c-7.1,1.8-12.6,5.8-17.7,10.8c-5.1,2.4-10.3,2.4-15.4,0.6c-3.3-1.1-5.9-0.7-8.6,1.8c-4.9,4.5-10.7,7-17.4,7.6
	c-5-0.4-9.9-1.3-14.3-3.9c-2.6-1.5-4.6-1.2-6.7,0.9c-7.8,7.8-17.3,8.9-26.8,4.9c-7.7-3.2-14.5-5.8-21.6,0.7
	c-1.1,1.1-3.1,1.2-4.7,1.6C186.9,267.9,173.4,261.1,161.8,249.1z M212,116c-6,12.3-17,17-29.4,19.6c-1.8,0.4-3.3,0.3-2.5-2
	c2.3-7-0.4-13.1-3.1-19.1c-4-8.9-9.7-16.6-17.1-23c-2.8-2.4-6-4.2-9.8-4.4c-4.1,1.8-7.4-0.7-10.8-2.1c-6.9-2.8-13.5-6.3-18.8-11.7
	c-0.6-1-0.6-2.2-0.9-3.3c-2.3-7.6-10-10-16.1-5c-1.3,1-2.4,2.3-3.9,3.1c-10.3,3.2-20.7,4.9-31.5,3.2c-4.3-0.7-8.5-1.9-10.8-6.3
	c13.1-21.9,31.3-36.8,56.9-41.8c28.6-5.6,52.6,3,72.4,23.7c14.5,15.1,21.2,33.9,24.3,54.2C211.8,106,212.2,111,212,116z M392.1,384
	c-8.8-9.1-18.8-16.8-28.6-24.7c-18.5-14.9-37.4-29.3-56.3-43.6c-0.5-0.4-0.9-1-1.3-1.5c1.4-1.6,3.3-1.5,5-1.2
	c12.9,2.2,25.8,4.2,38.7,6.5c18.3,15.9,36.8,31.7,54.8,48c6.2,5.6,12.3,11.2,18.2,17.1c26.2,25.9,52.1,52,78.2,78
	c2.1,2.1,4.3,4.2,4.2,7.5c0.9,5.3,1.3,10.6,1,15.9c-0.1,2.1,0,4.8-2,5.8c-2.4,1.2-3.9-1.3-5.3-2.7c-15.2-15.2-30.2-30.4-45.3-45.7
	C433.3,423,414.1,402.1,392.1,384z"/>
<path style="fill:#350402;transform:scale(0.2)" d="M232,410c-1.9,4.7-5.7,7.7-9.3,10.8c-16.1,13.8-30.8,28.9-45.8,43.8c-0.2,0.2-0.2,0.6-0.3,1.2
	c3.7,0.3,7.1-1,10.7-1.4c5.7-0.7,11.3-0.3,16.5,2.4c6.6,3.4,9.8,8.7,9.1,16.7c-3.7-2.4-7-4.6-10.4-6.8c-2.1-1.4-4-1.5-6.3,0.2
	c-3.9,2.8-8.7,2.8-13.3,3.5c-6.3,1-12.6,0.5-18.9,0.5c-1.6,0-3.9-0.4-4.7-1.4c-4.1-5.4-8.2-1.8-12.8-1c-9.2,1.7-18.6,0.9-27.8-0.8
	c-4.1-0.7-8.2-1.5-12.2-2.4c-2.7-0.6-4.9,0.5-7.1,1.8c-1.9,1.2-3.8,2.5-6,4c-1-3.2-0.5-6.1,1.7-7.6c8.8-5.9,17.3-12.7,28.9-11.4
	c4.3,0.5,8.5,1.3,12.7,2.2c6.4,1.5,12.1,0.3,17.2-4c19.3-16.2,36.5-34.5,54.1-52.5c0.8-0.7,1.8-1,2.8-0.7c5.6,1.7,11.4,1.1,17.1,1.3
	C229.5,408.6,231,408.8,232,410z"/>
<path style="fill:#3F0E00;transform:scale(0.2)" :class="ValueId+'_color4'" d="M68.9,94.3c2.7,1.3,7.4,1.8,7.3,4.7c-0.1,2.8-4.8,3.3-7.5,4.5C65,105,60.9,105.9,57,107
	c-1.6,0.4-3.2,0.7-4.2,2.2c-9.7-2.7-19.6-4.6-29-8.1C18.2,99,12.6,97,7,94.9c1.1-2.9,3.9-2.8,6.1-3.1c18.1-2.3,36.1-2.5,53.8,2.5
	C67.7,94.5,68.3,94.5,68.9,94.3z"/>
<path style="fill:#A66441;transform:scale(0.2)" :class="ValueId+'_color8'" d="M350,321c10.3,1.3,20.6,2.5,30.9,3.8c-0.8,2.6,1.7,3.2,2.9,4.4c25.3,23.4,50.4,46.9,74.9,71.2
	c14.1,13.9,28.1,28,40.5,43.4c4.5,5.6,7.9,11.8,9.8,18.9c0.9,3.3,1,5.6-3.3,5.8c-0.3,0-0.6,1-0.9,1.6c-1.1-2.5-2.7-4.4-4.6-6.3
	c-26.5-26.5-52.7-53.2-79.6-79.3c-14.7-14.3-30.1-28-45.7-41.4C366.5,335.8,357.5,329.2,350,321z M410.9,326.8
	c-1.6-0.6-3.3-1.2-4.9-1.8c-0.5-0.5-0.7-1.1-0.7-1.8c-2.6-4.7-7.4-7-11.3-10.3c-23.7-20.2-48.4-39.1-72.4-58.9c-1.5-1.2-4.2-2-2.7-5
	c1.2-0.8,3.2-1.4,3.5-2.5c1.8-5.5,6.3-5.8,10.9-6.7c4.1-0.8,7.2-3.2,7.7-7.9c22.6,25.9,45.2,51.8,67.8,77.7c2.1,2.4,4.1,4.8,5.8,7.5
	C418.5,323,417.8,324.6,410.9,326.8z M406,323c0,0.7,0,1.3,0,2c-12.2-2.9-24.4-5.8-36.6-8.8c-17.7-4.4-35.3-8.8-52.9-13.3
	c-29.1-7.5-57.8-15.8-85.4-27.8c-7.4-3.3-15.1-6.1-22.6-9.1c-1.7-0.7-3.5-1.1-4.4-3c4-1,7.9-2.4,11-5.4c2.3-2.2,4.3-1.8,7.3-0.2
	c7.5,3.8,15.2,7.1,24.1,4.6c4.3-1.2,7.9-3.3,10.7-6.7c1.9-2.3,3.6-2.7,6.3-0.7c4.2,3.1,9.5,3.7,14.5,4.4c5.7,1.8,11,4.6,16.4,7.2
	c31.9,16,64,31.3,95.8,47.4c4.2,2.1,8.6,3.7,12.5,6.3C403.9,320.7,406,320.8,406,323z"/>
<path style="fill:#966245;transform:scale(0.2)" :class="ValueId+'_color7'" d="M350,321c-6.9-1.2-13.8-2.9-20.7-3.6c-7.9-0.8-15.4-3.7-23.5-3.2c-10.3-3.5-21.1-4.6-31.6-7
	c-24.1-5.6-48.2-11.6-71.1-21.2c-17.9-7.6-31.8-19.7-41.3-36.8c5.5,3,9.9,7.5,15.6,10.3c8.6,4.3,17.3,5.9,26.7,3.7
	c18.9,6.9,37.3,15.1,56.2,21.9c18.2,6.6,36.9,11.3,55.6,16.2c23.8,6.3,47.7,12.3,71.6,18.3c6.1,1.5,12.4,2.5,18.5,4.2
	c1.9,0.6,4.4,0.4,5.1,3.1c-8.1,1.7-16.1,0.1-24.1-1.2c-2-0.3-3.9-0.6-5.9-0.9C370.3,325.9,360.1,324.3,350,321z M232,410
	c-8-0.2-16.1,0.7-23.9-2.1c-3.1-9.8-5.6-19.8-7.2-30c5.5,0.4,10.1,3.7,15.3,5.3c10.7,3.2,21.4,5,32.6,4.8c-1.3,4.3-2.8,8.5-4.9,12.5
	C241.2,405.4,236.8,407.9,232,410z M406,323c-7.2-3.6-14.5-7.3-21.7-10.9c-32.7-16.2-65.5-32.4-98.2-48.7c-2.7-1.4-6.3-1.3-8.1-4.5
	c7.4-1,13.9-3.9,18.9-9.5c1.7-1.9,3.4-1.2,5.4-0.6c5.5,1.9,11.1,2.9,16.7,0.1c2.7,5.4,8.2,8,12.5,11.5c18.7,15.4,38.1,30,56.5,45.9
	c5.9,5.1,12,9.8,18.1,14.6C407.1,321.8,408.4,322.5,406,323z"/>
<path style="fill:#222222;transform:scale(0.2)" :class="ValueId+'_color3'" d="M68.9,94.3c-4.1,2.1-8-0.4-11.9-0.8c-16.7-1.8-33.4-3-50,1.5c-1.2-1.5-1.2-1.6,0.7-2.8
	C18.1,85.7,28.8,79.6,40,74.4c4.8-2.3,9.4-4.9,14.8-5.6c0,3.9,0.3,7.9,0,11.8c-0.3,3.8,1.1,6.2,4.4,8C62.5,90.3,65.7,92.3,68.9,94.3
	z M166.9,123.3c0,2.8,0.2,5.7,0,8.5c-0.8,9.3-7.4,16.6-16.4,18.2c-9.2,1.7-16.7-2.5-21-11.5c-2.8-5.9-1.2-10.6,4.5-13.9
	c3.7-2.2,7.8-3.1,11.9-3.1c5.4,0,7.7-3.1,9.4-7.3c0.9-2.3,1.8-4.7,2.4-7.1c0.5-2,1.6-3.5,3.6-3.5c2.1,0,3.1,1.6,3.8,3.4
	C167.2,112.3,166.9,117.8,166.9,123.3z M123.7,73.2c-2.9,8.3-7.2,11.6-14.6,11.3c-5.9-0.2-10.4-4.2-12.3-10.2
	c-0.9-3,0.4-5.6,0.8-8.4c5.4-7,10.3-9.1,16.7-7.1C119.7,60.5,123.2,65.8,123.7,73.2z"/>
<path style="fill:#FCFCFC;transform:scale(0.2)" :class="ValueId+'_color2'" d="M112.5,69.1c-1.2,3.4-2.9,4.7-5.9,4.6c-2.4-0.1-4.2-1.7-5-4.1c-0.4-1.2,0.2-2.3,0.3-3.4
	c2.2-2.8,4.2-3.7,6.8-2.9C110.9,63.9,112.3,66,112.5,69.1z"/>
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
                                    <button :style="{background:'rgba('+getterSparrowBg1+')'}" @click="ShowElement(getterSparrowBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSparrowBg2+')'}" @click="ShowElement1(getterSparrowBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSparrowBg3+')'}" @click="ShowElement2(getterSparrowBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSparrowBg4+')'}" @click="ShowElement3(getterSparrowBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterSparrowBg5 +')'}" @click="ShowElement4(getterSparrowBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSparrowBg6+')'}" @click="ShowElement5(getterSparrowBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSparrowBg7+')'}" @click="ShowElement6(getterSparrowBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSparrowBg8+')'}" @click="ShowElement7(getterSparrowBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Sparrow= [
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
            var randomNumber = Sparrow[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Sparrow[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Sparrow'){
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
                getterSparrowBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sparrow') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSparrowBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sparrow') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSparrowBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sparrow') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSparrowBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSparrowBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSparrowBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSparrowBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSparrowBg8: {
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
                            name:'Sparrow',
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