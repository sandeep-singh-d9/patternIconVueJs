<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#6C6CA8;transform:scale(0.2)" :class="ValueId+'_color1'" d="M399.2,547.1c0.1,5.6-4.6,9.8-11.3,9.9c-11.3,0.2-22.4-1.4-33.4-4c-6.7-1.6-8.8-4.5-9.1-11.4
	c-1.1-26-2.3-52-3.3-78.1c-0.1-2.1-1-3.3-2.5-4.7c-9.5-8.9-10.2-17.3-1.9-26.9c1.8-2.1,2.3-3.9,1.8-6.6c-3.4-15.7-6.6-31.5-9.7-47.3
	c-0.6-2.8-1.3-4-4.7-3.6c-8.8,1.1-17.2-0.4-24.4-6.1c-1.8-1.4-3-1.5-4.9-0.1c-7.4,5.2-15.5,7.3-24.5,5.4c-3.2-0.7-4.7,0.3-5.3,3.6
	c-3.3,16.3-6.7,32.6-10.2,48.9c-0.5,2.3,0.3,3.8,1.8,5.5c8.2,9.3,8,18.1-0.9,26.6c-2.2,2.1-3.2,4.2-3.3,7.3
	c-1,25.8-2.3,51.7-3.4,77.5c-0.2,4.9-2.4,8-7,9.7c-12,4.4-24.3,5.9-37,4.4c-6.1-0.8-9.7-4.9-9.3-10.6c0.4-5.5,4.7-9.2,11-8.5
	c6.6,0.7,13,0.9,19.5-0.6c2.5-0.6,3.8-1.5,3.9-4.4c0.4-11.8,1.4-23.6,1.8-35.3c0.3-9,0.1-18,0.1-26.9c2-6,0.9-10.8-3.5-15.7
	c-6.9-7.7-5.6-17.2,2.8-24.2c3-2.5,4.4-5.2,5.2-8.8c3.6-17.6,7.1-35.2,10.9-52.8c0.8-3.5,0.2-5.8-2.4-8.4
	c-8.6-8.1-15.2-17.6-17.8-29.3c-3.6-16.5,6.9-30.1,23.7-31c13.7-0.8,26.4,2.9,38.6,8.4c5.9,2.7,10.6,2.4,16.3-0.2
	c11.3-5.1,23-8.9,35.7-8.5c19.4,0.5,31.1,16.3,25.9,35c-3.2,11.4-10,20.4-18.7,28.1c-2.1,1.9-2.6,3.4-2,6.2
	c3.9,18.1,7.6,36.2,11.3,54.4c0.5,2.4,1.4,4,3.2,5.6c10.8,9.4,11.2,18.7,1.4,28.8c-1.8,1.8-2.3,3.6-2.2,6
	c1.1,22.6,2.2,45.3,3.2,67.9c0.1,3.4,2,4,4.6,4.4c6.3,0.9,12.6,1.3,19,1.3C394.6,537.7,399.1,541.6,399.2,547.1z M200.9,175.5
	c4.9-4,9.3-3,13.9-0.2c5.8,3.6,10.6,8.4,14.1,14.3c2.6,4.4,2.8,8.7-0.2,13.1c-3.5,5.1-2.8,10,1.6,13.5c4.1,3.3,9.7,2.9,13.4-1.8
	c2.4-3.1,4.6-2.9,7.7-2c8.7,2.5,17.6,3.8,26.5,4.8c11.4,1.2,11.2,1,11.3,12.3c0,4.1-1.2,5-5.1,4.8c-16.9-0.8-33.4-4.1-49.7-8.5
	c-6.5-1.7-11.2,0.6-12.9,6.3c-1.6,5.5,1.4,10.3,7.7,12.1c17,4.8,34.3,7.9,51.9,8.9c9.6,0.6,7.8-0.2,8,8.5c0,9.5,0,9.5-9.6,8.1
	c-8.5-1.3-16.9-3.2-25.2-5.7c-6.9-2.1-11.8,0.2-13.6,5.9c-1.8,5.7,1,10.3,8,12.5c11.5,3.6,23.1,6.2,35.2,6.8c3,0.1,5.3,0.3,5.3,4.5
	c-0.1,7.2,3.9,11.3,9.8,11.1c5.5-0.1,9.2-4.3,9.2-11.2c0-3.5,1.3-4.4,4.5-4.6c11.8-0.6,23.3-3.3,34.6-6.8c6.5-2,9.4-6.9,7.7-12.2
	c-1.9-5.8-6.9-8-13.6-6.1c-7.4,2.1-14.8,4.1-22.4,5.2c-10.8,1.4-10.5,1.5-10.9-9.2c-0.2-5.5,1.6-6.7,6.9-7
	c17.4-0.8,34.6-3.9,51.3-8.8c6.4-1.9,9.6-6.9,8-12.1c-1.7-5.5-6.9-8.2-13.1-6.4c-13,3.7-26.2,6-39.6,7.8
	c-13.4,1.8-13.6,1.7-13.5-11.6c0-3.4,1.1-4.6,4.4-4.7c11.1-0.3,21.9-2.5,32.6-5.3c2.7-0.7,4.4-0.2,6.3,1.9c4.6,5.1,9.4,5.7,13.8,2.2
	c4.4-3.5,4.9-8,1.2-13.9c-2.5-4.1-2.6-8.1-0.2-12.2c3.1-5.3,7.2-9.6,12.1-13.2c5.4-3.9,10.6-5.8,16.8-1c4.1,3.2,9.3,1.8,12.5-2.1
	c2.9-3.6,2.7-8.7-0.6-12.4c-3.6-3.9-8.2-5.8-13.4-6.2c-20.5-1.8-39.3,11.4-45.6,32.4c-1,3.2-2.4,4.6-5.4,5.4
	c-10.2,2.7-20.4,4.5-30.9,5.6c-3,0.3-3.4-0.7-3.6-3.2c-0.4-7.4-3.9-11.5-9.5-11.5c-5.6,0-9.2,4.1-9.5,11.4c-0.1,2.9-0.8,3.9-3.9,3.6
	c-10.6-1.2-21.1-2.9-31.5-5.5c-3.6-0.9-5.3-2.6-6.6-6.4c-5.4-16.9-17-27.5-34.4-31.2c-8.2-1.7-16.5-1.3-23.4,4.7
	c-4.4,3.8-4.9,9.5-1.5,13.6C191.1,177.9,196.7,178.9,200.9,175.5z M242.5,134.5c2.1,1.1,2.9,2.4,2.9,4.8
	c-0.1,8.5,3.9,14.9,10.1,20.4c7.5,6.7,16.5,11,25.3,15.4c9.6,4.8,20.2,3.7,29.3,1.4c12.4-3.1,23.6-10.4,32.8-19.9
	c4.4-4.5,7.8-9.7,7.3-16.4c-0.2-3.1,1.1-4.7,3.7-6.1c8.9-4.6,12.7-12.2,12.7-22.1c0-11.8,0-23.6,0-35.4c0-9-2.2-17.5-7.3-25
	c-14.4-21.1-35.4-31.3-60.1-32.2c-22.2-0.8-41,9-56.4,24.9c-9,9.3-14,20.2-13.5,33.4c0.2,5.2,0,10.5,0,15.7c0,0,0,0,0,0
	c0,6,0.2,12,0,18C228.9,122,233.2,129.7,242.5,134.5z M184.1,295c0.5-3.9,1.8-6.2,5.4-8.2c9.2-5,11.8-13.5,7.2-22.9
	c-1.9-3.8-1.6-6.8-0.3-10.5c6-16.5,11.8-33.1,17.6-49.7c2.3-6.6,0.5-11.4-4.8-13.6c-5.8-2.3-10.8,0.4-13.3,7.4
	c-6.1,17.1-12.2,34.1-18.2,51.2c-0.8,2.4-2.1,4-4.6,5.2c-12.6,6-15.5,15-8.9,27c1.2,2.2,1.8,4.2,1.4,6.8c-2.1,14-4.1,28.1-6,42.2
	c-0.4,3.1-1.9,4.8-4.8,6.1c-8.9,3.9-14.8,10.7-17.1,20.3c-1.3,5.3,1.9,10.2,7.1,11.6c5,1.3,9.8-1.3,11.6-6.3
	c0.4-1.1-0.2-2.7,1.7-3.6c4.6,5.2,9.8,5,15.7,0.6c0.1,1.5,0.2,2.1,0.2,2.6c-0.5,6.7,3,11.5,8.9,11.9c5.8,0.4,9.9-4,10-10.9
	c0.2-10-4.7-17.5-12-23.6c-1.6-1.3-2.9-2.3-2.5-5C180.5,321,182.4,308,184.1,295z M457.5,352.3c-3-7.2-8-12.8-15.2-15.8
	c-3.7-1.5-5-3.8-5.5-7.4c-1.4-10.2-3.1-20.3-4.5-30.5c-1-7.5-2.3-14.5,1.8-22.1c4.2-7.7,1.5-16-6.3-19.7c-7.3-3.5-9.6-9.1-11.7-15.7
	c-1.3-3.9-2.7-7.8-4.1-11.6c-4-11.1-7.8-22.2-11.9-33.2c-2.1-5.7-6.9-7.9-12-6.2c-5.3,1.8-7.7,6.8-6,12.7c0.3,0.9,0.6,1.8,0.9,2.6
	c5.9,16.5,11.7,33.1,17.8,49.6c1,2.8,1.1,5.1-0.3,7.9c-5.2,10.7-2.6,19,7.6,24.6c2.5,1.4,3.8,2.8,4.2,5.8c1.7,13,3.6,25.9,5.8,38.8
	c0.5,3.1,0.2,4.9-2.5,7c-7.3,5.6-11.6,13.2-12,22.5c-0.3,6.3,4.1,11.4,9.7,11.6c5.4,0.1,9.5-4.5,9.7-10.9c0-0.9,0-1.8,0-3.4
	c5.9,4.4,11.2,4,16.3-1.4c2.4,9.1,6.9,12.5,13.1,10.5C458.5,366.1,460.6,359.9,457.5,352.3z"/>
<path style="fill:#E4E9F4;transform:scale(0.2)" :class="ValueId+'_color2'" d="M348.9,335.4c-5.4,10.6-14.5,17.1-25.3,20.9c-6.9,2.4-11.5-0.5-15.3-8.5c-3.7-7.6-9.9-9.8-15.8-5.6
	c-1.9,1.4-2.7,3.5-3.8,5.5c-4.9,9.4-10.3,11.2-19.7,6.2c-8.9-4.7-16.7-10.8-21.1-20.2c-4.4-9.1-0.4-15.3,11.1-15.1
	c9,1,18.9,4.7,28,9.7c8.2,4.6,15.2,4.1,23.1-0.2c8-4.4,16.7-7.6,25.8-9.2c4.8-0.8,9.5-1,12.8,3.3C351.9,326.4,351.1,331,348.9,335.4
	z M253.5,118.3c7.8,0.1,11,3.7,11,11.6c0,2.8,0.1,5.6,0,8.4c0,2.4,0.4,4.9,2.3,6.1c9.2,6,17.1,15.4,30.2,12.3
	c1.2-0.3,2.6,0.1,3.8,0.6c3,1.2,5.6,1,8.4-0.8c2.5-1.6,5.2-3.1,7.9-4.2c10.3-4.2,15.8-10.8,14.2-22.9c-0.9-7.2,3.6-10.8,10.9-11.2
	c1.6-0.1,3.9,0.7,4.6-1.2c1.6-4.3,0.9-8.9,0.5-13.3c-0.2-1.7-1.7-0.7-2.7-0.3c-5.4,2-9.4,0.1-12.6-4.4c-2.6-3.7-6.8-2.3-10.3-3
	c-2.9-0.6-2.2,2.9-3.2,4.4c-2.3,3.6-5.3,5.8-9.8,5.3c-4.1-0.4-7.2-2.7-8-6.8c-1-5.3-0.3-10.4,3.6-14.7c5.9-6.3,13.3-8.2,21.5-7.2
	c7.8,0.9,15.2,3.4,21.8,9.5c-0.5-5.6,1-10.2-0.8-14.8c-0.8-9-5.6-15.8-12.5-21.1c-21.3-16.4-51.9-16.2-72.8,0.7
	c-8.5,6.9-13.8,15.7-12.7,27.3l0,0c0,2,0,4,0,6.8c3.8-2.4,6.9-4.7,10.6-6.1c3.7-1.3,7.6-1.9,11.5-2.5c13.6-2.2,24.7,6.9,24.3,19.5
	c-0.1,5.1-2.8,8.2-7.5,9.1c-4.7,1-8.4-1-10.6-5.4c-2.1-4.3-10.1-5.8-13-1.7c-4,5.7-8.7,7.2-15.5,3.9c0,4.1,0.2,7.7-0.1,11.1
	C248.3,117.3,249.8,118.3,253.5,118.3z"/>
<path style="fill:#6D6DA8;transform:scale(0.2)" :class="ValueId+'_color3'" d="M307.4,119.7c0,1.3,0.1,2.6,0,3.9c-0.4,5.3-3.8,8.9-8.7,9.2c-4.8,0.3-9.6-3.3-10.3-8.4
	c-0.4-2.9-0.4-6-0.1-8.9c0.5-5.4,5.2-9.6,10.1-9.4c4.8,0.2,8.8,4.8,9,10.3C307.4,117.5,307.4,118.6,307.4,119.7z"/>
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
                                    <button :style="{background:'rgba('+getterSkeletonBg1+')'}" @click="ShowElement(getterSkeletonBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSkeletonBg2+')'}" @click="ShowElement1(getterSkeletonBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSkeletonBg3+')'}" @click="ShowElement2(getterSkeletonBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSkeletonBg4+')'}" @click="ShowElement3(getterSkeletonBg4)" :class="this.ValueId+'_color4btn'"></button> -->
 
                                    <!-- <button :style="{backgroundColor:'rgba('+getterSkeletonBg5 +')'}" @click="ShowElement4(getterSkeletonBg5 )" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSkeletonBg6+')'}" @click="ShowElement5(getterSkeletonBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSkeletonBg7+')'}" @click="ShowElement6(getterSkeletonBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSkeletonBg8+')'}" @click="ShowElement7(getterSkeletonBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSkeletonBg9+')'}" @click="ShowElement8(getterSkeletonBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSkeletonBg10+')'}" @click="ShowElement9(getterSkeletonBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Skeleton= [
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
            var randomNumber = Skeleton[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Skeleton[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Skeleton'){
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
                getterSkeletonBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Skeleton') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Skeleton') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Skeleton') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSkeletonBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSkeletonBg10: {
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
                            name:'Skeleton',
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