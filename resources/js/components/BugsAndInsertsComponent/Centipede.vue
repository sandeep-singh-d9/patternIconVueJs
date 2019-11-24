<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M519.4,240.6c15.9-4.4,27.2-13,36-25.3c1.3-1.8,2.4-3.8,3.7-5.6c3.6-4.8,9.5-5.9,13.9-2.8
	c4.4,3.1,5.5,8.4,2.3,13.5c-12.7,20.5-31,33.7-54.2,39.8c-4.6,1.2-6.6,3.8-7.3,7.6c-0.7,3.7,3.3,4.3,5.4,5.6
	c12,7.1,24.8,8.6,38.2,4.2c2.1-0.7,4.2-1.7,6.3-2.3c5.9-1.7,11.2,0.8,13,6c1.7,4.9-0.6,10-6.2,12.3c-16.1,6.8-32.5,6.7-49,1.6
	c-6.1-1.9-11.8-4.5-17-8.2c-2.6-1.9-4.3-1.8-6.7,0.3c-2.7,2.4-5.9,4.3-9,6.5c9.8,11.1,22.1,16.7,36.2,19c7.5,1.2,11.5,5.5,10.4,11.5
	c-1,6-6.4,9.1-13.6,7.8c-16.2-2.9-30.4-9.9-43.1-20.9c-4.2,9.7-9.3,18.5-16.8,25.6c-2.5,2.4-0.2,3.6,1.1,4.9
	c8.1,7.6,17.8,11.2,28.8,11.5c2.4,0.1,4.9-0.2,7.3-0.2c5.5,0.1,8.8,2.9,9.6,8.3c0.8,5.4-2.1,9.6-7.6,10.8
	c-7.1,1.5-14.2,0.5-21.2-1.1c-12.8-2.9-23.9-9.1-33.1-18.5c-2.2-2.3-4-3.2-7.3-1.9c-13.1,4.9-26.6,5.5-40.2,2
	c-1.7-0.4-3.8-1.6-5,0.5c-1.2,2,1,3.3,2,4.6c8.3,10.9,19.4,17.8,32.7,21.1c1.8,0.4,3.6,0.7,5.4,1.2c5.7,1.6,8.8,6.2,7.6,11.4
	c-1.2,5.6-6,8.7-12,7.5c-19.3-3.7-35.3-13.3-47.9-28.3c-3-3.5-5.2-5.1-9.4-2.5c-2.2,1.4-4.8,2.1-7.3,2.9c-7.3,2.4-7.3,2.4-3.5,8.9
	c3.2,5.6,7.7,9.9,13,13.6c5.8,4.1,7.3,9.9,3.9,14.6c-3.4,4.8-9.4,5.4-15.1,1.4c-11.3-8-19.2-18.7-23.7-31.7c-1-3-2.2-5.1-5.8-5.1
	c-1.2,0-2.5-0.3-3.5-0.9c-8.7-4.7-16.8-2.9-25.1,1.6c-2.8,1.5-3.4,2.3-2.5,5.2c3.9,12.6,10,24,18,34.4c3.1,4,3.6,8.2,0.6,12.4
	c-2.5,3.6-6.2,4.4-10.3,3.6c-3-0.6-4.8-2.8-6.6-5.1c-9.6-12.6-16.5-26.6-20.9-41.8c-1.1-3.9-3-4.9-6.8-6c-7.4-2.1-12.2,0.1-16.5,5.9
	c-1.7,2.4-4.4,4.4-7.1,5.7c-4.2,2.1-4.3,4.4-2.3,8.2c4.8,9,12,14.7,21.8,17.2c3.4,0.9,6.8,1.5,8.9,4.7c2.2,3.3,2.6,6.8,0.5,10.4
	c-2.3,4-5.9,5.5-10.4,4.7c-12.4-2.2-22.2-8.8-30.3-18.1c-2.7-3.1-5-6.4-7.6-9.9c-3.7,7.6-8.2,14.4-15.1,19.5
	c-3.1,2.3-4,13.3-1.7,16.9c7.3,11.6,18.2,16.4,31.4,16.6c4.6,0.1,7.8,2,9.5,6.3c1.6,3.9,0.6,7.2-2.1,10.1c-2.9,3.2-6.8,3.4-10.7,3.1
	c-14.6-1.3-27-7.2-37.4-17.4c-1-1-2-1.9-4-3.8c1.3,9.7,2.2,18,0.2,26.4c-0.6,2.4-0.5,5.1-1.7,7.1c-4.2,7.1-0.3,11.2,4.9,15.1
	c6.5,5,14,7.2,22,8.4c6.7,1,10.1,5.2,9.3,11.1c-0.8,5.7-5.7,9-12.2,8.2c-13.1-1.8-24.6-7.1-34.4-15.8c-2.5-2.2-4-2.3-6.4,0
	c-5.1,5-11.2,8.9-18,11.2c-4.6,1.5-4.7,4-3.5,7.8c2.7,8.4,7.9,15,14.1,21.1c7.1,6.9,8.2,12.5,3.6,17.2c-4.7,4.8-10.3,3.8-17.3-3.2
	c-9.8-9.8-17.4-21-20.3-34.8c-0.5-2.5-1.6-3.1-3.9-3.6c-6.4-1.4-11.1-1.3-15.4,5.6c-7.8,12.5-20.7,20-32.7,27.9
	c-4.6,3-9.1,1.3-12.4-3c-3.2-4.1-2.5-9.6,1.8-13.1c4.7-3.9,9.8-7.3,14.7-10.9c2.4-1.8,4.9-3.7,7.2-5.7c9.9-8.7,9.7-14.3-0.6-22.4
	c-1.9-1.5-3.9-0.8-5.8-0.9c-18.9-0.7-34.1-8.4-45.3-23.8c-4.8-6.6-4.1-12.4,1.3-16c5.1-3.3,10.5-1.7,14.8,4.9
	c4.9,7.4,11.4,12.6,20.1,14.9c3.5,0.9,5.4,0.5,4.3-4c-1.9-8-1.8-16.2-0.1-24.2c0.8-3.5-0.4-5-3.2-6.7c-16.6-10.1-26.7-24.7-30-43.9
	c-0.3-1.8-0.5-3.6-0.5-5.5c-0.1-6.6,3.8-10.9,9.7-10.9c5.6-0.1,9.5,3.8,9.8,10.2c0.6,10.6,4,19.9,11.9,27.3
	c3.1,2.9,6.5,7.4,10.6,6.1c4-1.3,2.2-6.9,2.6-10.6c0.9-6.7,2-13.4,5-19.4c1.8-3.7,1.3-5.8-1.5-8.9c-13.9-15.5-18.7-33.5-12.8-53.8
	c2.1-7.3,7.1-10.2,13.2-8.3c5.5,1.8,7.6,7.2,5.4,14.1c-4.1,12.4-2.5,23.6,6.5,33.5c2.1,2.3,3.4,2.6,6.4,0.6c5.6-3.6,8.4-8,8.9-14.6
	c0.4-6.1,2.8-12,6.3-17c2.6-3.8,2.4-6-1-9.5c-10.6-10.7-15.2-23.8-13.7-38.9c0.4-4.7,1.9-8.9,6.7-10.7c7.4-2.9,14,2.9,12.9,11.6
	c-1,7.5-0.9,14.6,3.7,21c6.6,9.2,13.1,10.1,22.1-0.5c7-8.3,7.7-15.5,3.9-26c-6.1-16.9-4.6-34.5,2.8-51.2c3.2-7.1,10.7-9.2,15.8-4.5
	c4,3.7,3.8,8.1,1.8,12.9c-5.3,12.2-6.5,24.6-2.6,37.5c1.4,4.8,2.9,5.5,7.3,2.7c9.4-5.9,19.8-9.5,30.8-10.9c4.5-0.6,5.9-1.8,4.6-6.4
	c-4.5-16.5-2.9-32.7,3.8-48.3c2.7-6.4,7.5-8.8,12.9-6.7c5.7,2.2,7.9,7.8,5,14.1c-4.7,10.4-5.9,21.1-4.3,32.2c0.5,3.7,1.6,5.7,6.2,4
	c6.7-2.4,13.8-3.8,20.9-3.8c4.6,0,6-0.7,4-5.7c-4.5-11.6-4.3-23.5,0.5-35.1c1.8-4.4,5.3-6.8,10.1-6.4c4.1,0.4,7.1,2.7,8.5,6.9
	c1.1,3.2-0.2,5.9-1.2,8.8c-3.7,10.3-2.8,20,4.6,28.6c2.2,2.6,4.4,3.4,8,2.3c9.4-2.9,19.1-4.1,28.9-2.1c4.2,0.9,5.9-2.4,7.8-4.7
	c2.2-2.7-1.4-3.7-2.7-5c-10.8-10.5-17.9-23-20.7-37.9c-1.5-7.7,1.4-13.2,7.6-14.3c6.1-1.1,10.4,2.9,11.7,10.9
	c2.1,12.9,8.1,23.3,18.9,30.8c2.6,1.8,4.8,2.3,7.8,0.8c7.5-3.8,15.6-5.7,23.9-7.1c1.7-0.3,3.8,0.4,4.6-2c0.9-2.6-1.5-3-2.7-4.1
	c-17.1-15.2-27.6-33.9-30.1-56.9c-0.8-6.9,2.4-12,8.1-12.9c6.1-0.9,10.4,3,11.2,10.6c1.9,17.3,8.7,32,22.2,43.4
	c2.8,2.4,4.2,1.7,7.1-0.1c7.8-5,8.1-10.3,5.4-19c-9.1-29.5-3-55.9,20.1-77.4c1.9-1.8,2.4-3.1,1.4-5.7c-3.9-9.8-7.7-19.7-11.3-29.6
	c-1-2.7-2.9-4.2-5.3-5.5c-10.1-5.2-20.2-10.5-30.3-15.9c-6.8-3.6-9-8.9-6-14.3c2.9-5.3,8.2-6.5,14.7-3.1
	c12.1,6.3,24.1,12.7,36.2,18.9c3.5,1.8,5.7,4.3,7,8c3.5,9.6,7.4,18.9,10.7,28.5c1.6,4.8,3.2,6.6,8.8,4.6c10.5-3.9,21.4-5.4,32.1-0.2
	c3.5,1.7,3.6-1,4.4-3c3.9-10.1,7.9-20.1,11.5-30.2c1.5-4.3,4-7.2,8.2-9.2c11.7-5.6,23.3-11.6,35-17.4c6.8-3.4,12.3-2,15,3.7
	c2.6,5.4,0.4,10.4-6.2,13.8c-9.8,5-19.6,9.9-29.5,14.7c-3.2,1.5-5,3.6-6.2,6.9c-3.7,10.3-7.8,20.5-11.7,30.8
	c-0.9,2.3-1.4,4.2,0.5,6.6c24,30.7,23.7,73.8-0.2,108.2C522,237,521.1,238.3,519.4,240.6z"/>
<path :style="{fill:'rgba(145, 93, 45, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M522.4,179.6c0.2,14.5-4.8,27.4-12.1,39.7c-1.8,3-3.1,2.5-5.5,0.8c-16.6-11.8-35.3-16.2-55.4-14.3
	c-2.1,0.2-3.8,0.6-4.9-2c-8.5-21-9.5-44.6,9.6-61.8c8.2-7.3,17.6-12.3,28.5-14.3c6.9-1.3,12.8,0.1,18.2,4.7
	C515,144.7,522.5,160.8,522.4,179.6z M406.5,262.8c17.1,2.1,33.4,10.2,47.9,22.3c9.5,8,10,10.9,5.3,22.5
	c-8.4,20.3-32.4,32.5-53.6,27.3c-3.9-0.9-6.1-2.8-7.5-6.8c-6.2-17.6-16.3-32.7-30.2-45.1c-2-1.8-3.7-3.3-0.5-5.6
	C378.7,269.2,390.5,263.1,406.5,262.8z M335.5,288.6c12.7-1.2,20.5,8.9,28.7,17.8c7.2,7.8,12,17.3,15.9,27.3
	c1.4,3.6,0.7,6.1-2.2,8.4c-9,7.3-18.1,13.9-30.7,11.4c-3-0.6-5.8,1.2-9,0.5c-17.1-3.4-29.8-21.4-28.1-40.2c0.1-1.6,0.3-3.3,0.6-4.8
	C314.4,292.4,315.9,289.4,335.5,288.6z M285.4,357.5c-20.9,2-34.2-16.7-38.2-31.3c-5-18.6-1-25.6,17.2-31.1c8.4-2.5,17-3.7,25.8-3.6
	c3.6,0.1,4.9,1,3.7,5.2c-5.1,18.7-2.7,36.7,7,53.4c2.2,3.7,1,4.7-2.4,5.7C294.3,357.1,289.8,357.1,285.4,357.5z M111,473
	c-0.2-3.9,0.4-8.5,1.8-13c0.9-2.8,1.8-4.1,4.9-1.5c19.4,16.5,41.1,20.2,64.9,11.3c3.2-1.2,3.8-0.1,4,2.7
	c1.2,17.2-15.5,37.5-33.1,39.9C127.8,515.9,111.2,500.8,111,473z M226.1,308.6c0.4,21.6,6.9,39.7,21.5,54.5c2.1,2.1,2,3.5,0,5.5
	c-3.3,3.2-7.1,5.5-11.6,6.3c-21.6,3.8-42.4-3.3-49.5-27.5c-0.8-2.8-1.4-5.5,0.3-8.3C195.9,324,208.5,313.6,226.1,308.6z
	 M459.4,224.8c14.8-0.4,26.3,5,36.9,13.2c6.2,4.8,3.7,10.5,2.1,15.5c-3.1,9.9-9.2,18-18.7,23.1c-2.8,1.5-4.6,1-6.9-1.1
	c-13.4-12.6-28.7-22-46.2-27.7c-3.8-1.2-3.1-2.4-1.3-4.9C434,230.8,445.2,223.8,459.4,224.8z M152.9,377.2
	c0.3-8.9,4.5-16.5,12.6-22.1c2.1-1.4,2.8-1.2,3.8,1.2c8.6,20,23.3,32.9,44.6,38c2.9,0.7,3.4,2.1,2.7,4.8c-1.1,3.7-3.3,6.5-6.4,8.6
	c-14.1,9.6-33,8.3-45.8-2.9C156.3,397.7,153.2,388.6,152.9,377.2z M159.9,455c-13-0.3-24.1-4.6-33.1-14.3c-3.6-3.9-4.7-8.2-3.9-13.4
	c1.3-9.2,5.6-16.9,11.8-23.6c1.9-2,3.1-3.4,5.2,0.2c11.5,20.2,28.8,30.3,52.2,29.1c4.9-0.3,4,2.1,2.4,4.6
	c-4.6,7.1-11.7,11.1-19.1,14.5C170.5,454.2,165.3,455.3,159.9,455z"/>
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
                                    <button :style="{background:'rgba('+getterCentipedeBg1+')'}" @click="ShowElement(getterCentipedeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCentipedeBg2+')'}" @click="ShowElement1(getterCentipedeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterCentipedeBg3+')'}" @click="ShowElement2(getterCentipedeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCentipedeBg4+')'}" @click="ShowElement3(getterCentipedeBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCentipedeBg5+')'}" @click="ShowElement4(getterCentipedeBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCentipedeBg6+')'}" @click="ShowElement5(getterCentipedeBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCentipedeBg7+')'}" @click="ShowElement6(getterCentipedeBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Centipede= [
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
            var randomNumber = Centipede[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Centipede[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Centipede'){
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
                getterCentipedeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Centipede') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCentipedeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Centipede') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCentipedeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Centipede') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCentipedeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCentipedeBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCentipedeBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCentipedeBg7: {
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
                            name:'Centipede',
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