<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#824C97;transform:scale(0.2)" :class="ValueId+'_color3'" d="M430.6,344.4c-3,0.8-2.1,3.3-2.3,5.3c-2.4,30.2-14.1,56.6-33.3,79.9c-18.7,22.7-44,35.2-70.4,46.2
	c-4,1.7-8,3.6-13,5.9c10.6,4.1,20.1,8.3,28.2,14.9c11.1,9.1,20.6,19.5,24.7,33.5c5.4,18.3-5.8,29.6-24.5,25.3
	c-11.8-2.7-20.4-10.5-29.2-18c-0.7-0.6-1.4-1.3-2.5-1.7c3.1,8.1,7.7,15.5,12.1,22.9c3,5.2,6.2,10.3,9.4,15.3c2.4,3.7,3.5,7.2-0.8,10
	c-4.2,2.7-6.8-0.2-8.9-3.5c-14.5-23.5-29-47.1-37.1-73.8c-0.2-0.7-0.7-1.4-1.3-2.6c-7.1,12.2-15.1,23.2-25,32.6
	c-5.8,5.4-11.7,10.7-18.8,14.4c-5.3,2.8-10.8,4.6-17,5.1c-15,1.1-23.9-10.8-18.7-25.8c6.5-19,19.8-32.4,37.2-41.8
	c3.6-1.9,7.3-3.5,11.4-5.4c-2.8-3.5-7-4.1-10.4-6c-39-21.9-63-54.8-72.6-98.3c-2.5-11.1-3.2-22.5-2.9-33.9c3.4-3.2,7.4-4.5,12.1-3.5
	c1.7,2.6,1.2,5.6,1.2,8.5c0,36,12.8,67,37.7,92.6c14.9,15.3,32.7,26.4,53.4,32.7c5.9,1.8,6,1.2,6-4.7c-0.1-15.1,1.5-30,4.3-44.9
	c3.6-19.4,8.5-38.5,10.8-58.1c1.3-10.9,2.4-21.9,0.8-32.9c-0.3-2.1-1.1-4.6,0.8-6.6c3.9-1.5,7.9-1.4,11.8-0.1
	c3.4,8.4,3.3,17.1,2.8,25.9c-1.6,28.7-9.4,56.4-14,84.6c-1.5,9.6-1.5,19.2-2.5,28.8c-0.2,1.9,0.4,3.8,0.7,5.7c0.4,3,2.1,3.6,4.5,2.3
	c22.1-11.5,46.5-18.4,66.9-33.2c31.8-23,49.8-54.3,53.2-93.6c0.2-2.7,0.3-5.4,2.5-7.5C422.5,339.9,427,340.8,430.6,344.4z"/>
<path style="fill:#008C36;transform:scale(0.2)" :class="ValueId+'_color1'" d="M20.9,212.4c-1.3-0.8-0.9-2.2-1.2-3.4c-7-32.8-0.6-62.9,18.2-90.4C51.5,99.1,70.2,86,92.3,77.9
	c24.6-9,49.8-10.5,75.2-3.6c6.6,1.8,13.5,3.3,18.8,8.3c0.9,3.1-0.8,5.6-1.7,8.3c-7,20.7-10.2,41.9-8.3,63.8
	c3.6,37.5,19.3,69.9,41.7,99.6c1.5,2,3.5,3.7,3.6,6.4c-4.3,12-12.2,21.9-20.3,31.4c-3.4,4-7.3,7.5-11,11.1
	c-12.8,12.5-28.3,16.1-45.5,13.1c-23.4-4.1-43.8-15.2-62.5-29.2c-22.6-17-42.1-37-55.5-62.3C24.7,220.9,23.4,216.4,20.9,212.4z
	 M188.8,66.6c-17.4-10.8-36.5-16.3-56.9-16.5c-23-0.2-44.6,5.7-64.4,17.4c-20.9,12.3-36.3,29.5-45.9,52c-8.1,18.9-10,38.8-8.4,58.9
	c0.8,10.4,2.1,21,6.6,30.7c-1.1-15.7-2.1-31.4,1.2-47.1c4.6-21.9,14.4-41.1,30.3-56.7C66,90.9,83.6,81.4,103.6,76
	c16.6-4.5,33.3-4.9,50.3-2.9c11.3,1.3,21.5,5.7,31.9,9.5c2.8-4.4,5.1-9,7-13.8C191.5,68,190.1,67.4,188.8,66.6z"/>
<path style="fill:#1D70B7;transform:scale(0.2)" :class="ValueId+'_color6'" d="M576.9,209.1c-0.3,2.4-0.8,4.8-2.4,6.8c-2.8,1.7-2.6,5-3.9,7.5c-13.4,26.3-33.4,46.8-56.7,64.2
	c-18.2,13.6-38.1,24.5-60.9,28.7c-18.7,3.4-35-0.7-48.8-14.7c-10.1-10.3-19.1-21.2-26.3-33.7c-1.2-2.2-2.7-4.3-2.9-6.9
	c0-2.6,1.8-4.2,3.2-6c18.9-24.6,32.8-51.6,39.6-82.1c1.6-7.2,1.8-14.5,3-21.7c0.7-21.5-2.3-42.5-9.8-62.7c-0.7-1.8-1.3-3.6-0.7-5.6
	c1.1-2,3.2-2.7,5.1-3.6c22.3-9.9,45.6-11.1,69.2-6.8c23.5,4.3,44.3,14.8,61.5,31.4c18,17.5,28.4,39.2,32.2,64
	C580.4,181.7,580.1,195.4,576.9,209.1z M413,82c21.2-10.1,43.6-12.2,66.5-8.7c28.1,4.3,52.1,16.4,71.1,38.1
	c18.2,20.8,26.4,45.1,27.3,72.4c0.3,8.5-1.1,16.9-1.1,25.4c6.8-19.6,8.4-39.6,5.8-60.1c-4.3-34-20.9-60.6-49.6-78.9
	c-26.7-17-56-23.6-87.7-17.9c-15.1,2.7-28.6,8.9-41.4,16.8c1.8,4.7,4.1,9.3,6.9,13.5C411.5,82.3,412.3,82.3,413,82z"/>
<path style="fill:#007A36;transform:scale(0.2)" :class="ValueId+'_color2'" d="M176.6,341.5c-3.9,1.1-7.9,2.2-11.8,3.4c-2.3-0.1-4.8,0-5.6-2.9c-0.7-2.7-0.1-4.9,2.4-6.4
	c2.6-1.6,2.5-4.4,2-6.7c-0.5-2.7-3.2-1.5-4.9-1.6c-17.2-1-33.1-6.6-48.1-14.8c-39.7-21.8-70.3-52.1-88.1-94.4
	c-0.7-1.8-1.8-3.4-1.6-5.5c3.9,6.5,7.7,13.1,11.7,19.6c10.5,17.3,24.3,31.7,39.4,45c13.3,11.7,27.9,21.2,43.9,28.6
	c13.2,6.1,26.8,10.3,41.7,10.2c12.3-0.1,22-5.1,30.7-12.7c13.6-12,24.3-26.2,32.5-42.4c3.5,0.7,5.5,3,6.3,6.4
	c-5.8,13.8-14,26.1-24,37.1c-5.8,6.4-11.9,12.6-19.5,17.1c-3.9,2.3-3.7,3.9,0,6.1c1,0.6,2.2,0.9,3.1,1.5c4.7,2.8,4.9,7.8,0.2,10.6
	C183.9,341.4,180.5,343,176.6,341.5z"/>
<path style="fill:#1D5AB7;transform:scale(0.2)" :class="ValueId+'_color7'" d="M430.6,344.4c-4.4-0.9-8.5-3-13.1-2.9c-3.3,1.1-6.1-0.5-8.5-2.4c-3.9-2.9-3.6-7.3,0.5-10
	c1-0.6,2.1-0.9,3.1-1.5c4.2-2.4,4.2-3.8,0.3-6.4c-19.9-13.2-32.8-32.1-43.3-53c-0.2-0.3-0.2-0.7-0.2-1.1c0.8-3.4,2.7-5.7,6.3-6.4
	c8.4,16.8,19.8,31.3,33.7,43.7c14.1,12.5,30.6,13.5,47.8,9.3c24.3-5.9,45.2-18.4,64.3-34.2c19.8-16.3,36.4-35.4,48.8-58
	c1.1-2,0.6-5.1,3.6-6.1c0.1,0,0.3,0.2,0.4,0.3c-8.4,24.5-23.5,44.5-41.8,62.2c-21.8,21.2-46.6,37.8-76.3,46.1
	c-6.1,1.7-12.4,2.6-18.8,3c-1.7,0.1-4.5-1.5-4.9,1.2c-0.4,2.3-0.4,5.3,1.9,6.9c2.5,1.8,4,3.7,2.9,6.7
	C436.2,345.3,433.3,344.9,430.6,344.4z"/>
<path style="fill:#B33041;transform:scale(0.2)" :class="ValueId+'_color5'" d="M375.8,260.8c-1.8,2.1-3.7,4.2-5.5,6.2c-0.5,2.3-1.6,4.2-3.3,5.9c-16.3,16-33.7,30.5-56.1,37.3
	c-3.2,1-2.9,2.3-1.4,4.4c0.9,1.3,2,2.3,3.3,3.2c2.6,2,4.7,4.3,3.2,7.8c-1.4,3.3-4.4,4-7.6,4.1c-1.6,0.1-3.1-0.2-4.4-1.1
	c-4.1,0-8.2,0-12.3,0c-2.1,1.6-4.4,1.3-6.6,0.6c-4.9-1.5-6.4-6.4-2.7-9.9c2.7-2.6,5.3-5.3,7.5-8.1c-17.5-4.6-32.7-13.9-46.4-25.9
	c-4.5-4-9.2-7.7-13.3-12.1c-1.8-1.9-3.2-3.8-3.8-6.3c-1.8-2.1-3.7-4.2-5.5-6.3c-14.5-18.8-27.2-38.7-35.5-61.1
	c-5.3-14.3-9.4-28.8-10.2-44.1c0.1-1.2,0.2-2.4,0.3-3.5c2.9,0.1,2.5,2.6,2.8,4.3c4,23.4,13,44.9,25.3,64.9c17.9,29,40,54,70.9,69.8
	c15.8,8.1,31.9,7.9,47.9,0c22.7-11.2,40.3-28.5,55.7-48c20.3-25.6,34.4-54.4,40.6-86.8c0.3-1.7-0.2-4.2,2.7-4.3
	c0.3,0,0.5,0.1,0.8,0.1c-3.3,40.4-20.1,75-44.8,106.3C376.7,259.1,376.3,260,375.8,260.8z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" :class="ValueId+'_color5'" d="M274.6,491.4c-7.2,15.4-16.8,28.7-29.4,39.8c-4.3,3.8-8.8,7.5-14.1,10.1c-3,1.4-6,2.7-9.3,3
	c-8.7,0.6-11.4-2.7-8.5-11.1c4.7-13.8,14.3-23.7,26.3-31.3c8.3-5.4,17.4-9.1,27.3-10.7C269.2,490.8,271.7,490.3,274.6,491.4z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" :class="ValueId+'_color5'" d="M346.4,544.3c-5.2,0.1-9.8-2-14-4.8c-17.1-11.3-29.8-26.6-38.9-44.9c-3-6,2.8-3.8,4.6-3.5
	c11.9,1.6,22.6,6.2,32.3,13.1c9.4,6.7,16.8,15.2,21.7,25.8c0.9,1.9,1.7,3.8,1.9,6C354.6,542.6,353,544.4,346.4,544.3z"/>
<path style="fill:#E23041;transform:scale(0.2)" :class="ValueId+'_color4'" d="M175.1,155.5c-1.8-8.8-0.9-17.6-0.3-26.3c1.2-16.2,5.5-31.6,11-46.7c1-5.3,3.4-9.8,7-13.8
	c6.5-9,13-18.1,21.3-25.7c18.4-16.9,40-26.9,64.8-30.2c24.9-3.3,49.1-1,72.2,9.4c21.3,9.6,38.2,24.3,50.7,44c0.6,1,1.4,1.8,2.2,2.6
	c3.6,3.8,5.8,8.4,6.9,13.5c4,11.9,8.1,23.8,9.7,36.4c1.4,11,2.4,22.1,1.6,33.2c-0.7,0.3-1.2,0.1-1.5-0.5c-2.4-8.8-2.8-17.9-5.4-26.7
	c-13.9-47.4-44.8-76.9-93.4-86.4c-32.1-6.2-62.9-0.9-90.7,16.9c-31.1,19.9-47.4,49.5-53.1,85.4c-0.6,3.8-1.4,7.6-1.3,11.5
	C176.6,153.6,176.3,154.8,175.1,155.5z M420.3,142.9c-4.3-32.2-17.6-59.6-42.9-80.5C347.6,37.8,313,30.5,275.9,36.7
	c-36,6-64.4,24.6-83,56.7c-10.5,18.1-16.1,37.8-17.5,58.6c0.3,0.5,0.9,0.9,1,1.4c3,20.6,10.2,39.8,20,58.1
	c16.8,31.3,39.1,57.6,69.4,76.6c13.4,8.4,28,13,44.1,9c16.4-4,29.9-13.3,42.2-24.2c31.2-27.8,53.3-61.6,64.8-102
	c1.8-6.2,3.1-12.6,4.6-18.8C421.7,148.9,420.7,145.9,420.3,142.9z"/>
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
                                    <button :style="{background:'rgba('+getterBalloonsBabyBg1+')'}" @click="ShowElement(getterBalloonsBabyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBabyBg2+')'}" @click="ShowElement1(getterBalloonsBabyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBabyBg3+')'}" @click="ShowElement2(getterBalloonsBabyBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBabyBg4+')'}" @click="ShowElement3(getterBalloonsBabyBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBabyBg5+')'}" @click="ShowElement4(getterBalloonsBabyBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBabyBg6+')'}" @click="ShowElement5(getterBalloonsBabyBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBabyBg7+')'}" @click="ShowElement6(getterBalloonsBabyBg7)" :class="this.ValueId+'_color7btn'"></button>
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
        var BalloonsBaby= [
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
            var randomNumber = BalloonsBaby[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BalloonsBaby[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BalloonsBaby'){
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
                getterBalloonsBabyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BalloonsBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBabyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BalloonsBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBabyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BalloonsBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBabyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBalloonsBabyBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBabyBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBabyBg7: {
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
                            name:'BalloonsBaby',
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