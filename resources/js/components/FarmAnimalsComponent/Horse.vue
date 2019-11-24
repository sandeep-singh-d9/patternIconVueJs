<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M498.1,102.8c2.1,4.3,4,8,5.8,11.7c8.6,17.3,17,34.7,25.8,51.9c3.9,7.5,5.1,14.8-0.6,21.4
	c-6.5,7.6-14.8,12.4-25.4,10.4c-9.4-1.8-15.9-7.9-17.5-16.9c-1.1-6.1-3.9-9-8.6-11.6c-3.3-1.9-6.5-4-11.4-7
	c23.3,53.8,25.7,105.1-8.7,154.5c13.2,4,26.2,7.8,39.1,11.7c3.1,0.9,6.2,2,9.4,2.6c15.6,3.2,23.4,20.8,17,35.6
	c-12.7,29.5-24.2,59.5-36.1,89.3c-1.3,3.2-3,5.7-5.5,7.9c-9.7,8.6-19.8,16.3-32.1,20.9c-5.7,2.1-11.5,2.9-17.5,1.7
	c-4.2-0.9-6.5-3-6.3-8c0.4-12.5,0.2-25,0.1-37.5c-0.1-4.8,1.9-6.5,6.5-6.4c7.5,0.2,15,0,22.5,0.1c3,0.1,4.1-0.6,4.8-3.9
	c3.5-18.6,7.4-37.1,11.2-55.9c-16.1-0.7-32-1.8-47.8-3.7c-3-0.4-4.3,0.5-5.6,3.4c-16.2,36.3-28.1,74.2-39.7,112.1
	c-1,3.2,0.1,4.2,2.9,5.3c12,4.7,19.4,13.4,21.9,26.1c1.3,6.8-0.6,8.9-7.3,8.9c-13.6,0-27.3-0.1-40.9,0.1c-4.9,0.1-7-1.8-7-6.8
	c0-8.1-2.6-15.5-7-22.2c-1.9-2.8-2.2-5.3-1.4-8.6c5.8-23.7,12-47.2,16.8-71.1c3-15.2,3.7-30.8,5.6-46.3c0.3-2.5-0.6-3.3-3.1-3.3
	c-23.9-0.5-47.1-4.9-69.8-12.3c-3.2-1-4.9-0.4-6.7,2.7c-7.8,13.9-17.7,26-31.3,34.8c-5.2,3.4-10.9,5.6-16.8,7.4
	c-0.2,2.2,1.6,3.1,2.6,4.2c9.3,10.3,18.4,20.7,28,30.7c7,7.2,9.9,15.8,10.6,25.5c1.1,15.9-1.4,31.4-5.7,46.7
	c-1.5,5.3-4.6,6.3-8.8,2.6C247,499.7,234,488,220.9,476.5c-3.6-3.1-3.5-6-0.1-9.2c3.5-3.3,6.6-7,10.3-10.1c3.4-2.8,2.5-4.3-0.5-6.8
	c-16.9-13.9-33.8-27.9-50.5-42.1c-2.7-2.3-5.2-2.7-8.7-2.5c-7.7,0.5-12.3,3.8-16.2,10.7c-14.3,24.9-29.4,49.4-44.3,74.3
	c11.6,4.6,20,12,23.5,24.3c0.6,2.3,0.7,4.5,0.8,6.8c0.1,3.6-1.6,5.3-5.2,5.3c-15,0-30,0-45,0c-3.6,0-5.1-1.8-5.2-5.3
	c-0.3-8.6-2.6-16.6-7.4-23.8c-1.9-2.8-2-5.4-0.7-8.6c14.9-35,29.6-70.1,44.3-105.2c0.9-2.2,2.2-3.9,4.3-5.1
	c13.2-7.4,18.1-19.7,19.5-33.9c1.7-16.8-3.4-32.6-7-48.6c-1.5-6.6-2.7-13.1-2.1-20.8c-7,4.8-9.8,11.4-11.6,18.3
	c-4.1,15.7-7.8,31.5-11.7,47.3c-7,28.4-31.1,47.3-60.2,47.2c-11.7,0-23.5,0-35.2,0c-3.1,0-5.9-0.1-6.1-4.2c-0.2-3.8,1.8-4.7,5.2-5.2
	c17.2-2.2,24.9-9.5,28.4-26.6c4.5-22.3,8.7-44.6,13.8-66.8c5.8-25.3,30-44.3,56.1-44.8c9.8-0.2,19.6-0.1,29.4,0
	c2.8,0,4.4-0.9,6.2-3.1c20-24.7,45.7-33.6,76.7-27.7c30.7,5.9,61.6,10.4,92.8,11.8c15.6,0.7,26.4-12.4,24.3-27.8
	c-8.6-60.3,21.4-111.3,81.1-127.8c32.1-8.9,60.4,1.6,85.6,21.9c2.1,1.7,4,3.5,6.1,5.3c2.1,1.7,2.3,4,1.6,6.3
	c-0.7,2.5-2.9,2.7-5.1,2.7C505,102.7,502,102.8,498.1,102.8z"/>
<path style="fill:#FBD0B5;transform:scale(0.2)" :class="ValueId+'_color3'" d="M521.1,171c-10.9-22.2-21.9-44.3-32.9-66.5c-1.2-2.5-3.3-4.9-2.1-8.1c1.1-3.1,4.4-2.6,7.3-3.4
	C468,77.3,443.7,77.9,421,94.9c-11.9,8.9-20,21.1-26.1,34.5c-9.9,21.6-13.9,44.4-14,68c0,5.3-0.6,10.3-2.9,15.1
	c-7,14.1-18.6,20.3-34.1,19.6c-1,0-1.9-0.1-2.9-0.1c-35.1,0.7-69.7-2.9-104.2-9c-14.4-2.6-28.7-6.3-43.9-3.9
	c-36.6,6-58,40.1-52.1,69.6c1.6,8.1,3.6,16.1,5.4,24.1c4.5,20.5,5.3,40.7-5.2,59.9c0,0,0,0,0,0c0,0,0,0,0,0
	c-3.8,5.5-8.1,10.7-14.2,13.9c-1.7,0.9-2.4,2.5-3.1,4c-13.9,32.8-27.7,65.6-41.5,98.5c-0.8,1.8-2,3.7-0.5,6
	c3.8,5.9,5.7,12.5,6.9,19.3c0.5,2.9,1.7,3.7,4.5,3.7c9.2-0.1,18.4-0.2,27.7,0c4.3,0.1,4.3-1.7,2.9-4.9c-3.5-8.4-10.3-11.9-18.7-13.4
	c-7.6-1.4-8.6-3.5-4.5-10.3c17.3-29,34.7-57.9,52-86.8c1.7-2.8,3.8-4.4,7.2-4.9c9.3-1.3,18.5-3.1,27.3-6.4
	c37.8-14,63.2-38.4,68.1-80.2c0.3-2.8,1.4-5,4.3-5.2c3.6-0.2,4.9,2.3,5.1,5.6c0.9,2.3,3.1,2.6,5.1,3.4c6.5,2.4,13.3,3.9,20,5.4
	c28.8,6.5,57.7,11.6,87.4,7.9c17.8-2.2,34.6-7.1,49.2-18c15.6-11.6,23.9-27.7,29.1-45.9c6.2-22,6.1-44.4,5.6-66.9
	c-0.2-10.2-0.7-20.3-3.8-30.2c-1.5-5-4.4-9.3-6.7-14c-1.3-2.7-2.7-5.4,0.2-7.8c2.8-2.4,5.3-0.8,7.8,0.8
	c10.5,6.6,21.1,13.3,31.7,19.8c3.5,2.1,5.5,4.5,4.9,8.8c-0.9,6.5,2.6,10.5,8,13.2c5.7,2.9,11.4,0.8,18.3-5.7
	C525.8,178.1,522.9,174.6,521.1,171z"/>
<path style="fill:#FFB594;transform:scale(0.2)" :class="ValueId+'_color4'" d="M264.4,311.6c20.3,6.6,41.2,11.1,62.4,14c12.6,1.7,25.1,2.8,37.7,2.1c20.2-1.1,39.9-4.7,57.2-16.2
	c18.4-12.2,27.9-30.4,32.9-51.3c5.7-24.5,5.8-49.2,3.6-74.1c-0.5-6.3-0.8-12.6-1.1-18.8c7.6,13.3,11.9,27.8,14.8,42.6
	c5.8,30.8,2.1,60.2-13.1,87.9c-3.3,6.1-7.5,11.6-11.6,17.1c-4.3,5.6-3.8,7.9,3.2,10c18.5,5.6,37,11.1,55.6,16.6
	c9.1,2.7,13.2,9.9,9.7,18.6c-12.1,30.4-24.4,60.8-36.7,91.2c-3.6,8.9-12,13.2-19.2,18.3c-5.7,4.1-11.8,7.9-19.3,8.3
	c-3.8,0.2-5.6-0.8-5.4-5c0.3-7.9,0.3-15.8,0-23.6c-0.2-4.3,1.6-5.1,5.4-5c6.9,0.2,13.8,0,20.7,0.1c3.6,0,5.6-1.4,6.3-5.1
	c4.5-22.3,9.1-44.5,13.6-66.8c0.8-4.2-1.3-6.6-5.8-6.6c-12.3,0-24.5-1.2-36.7-2.2c-13.2-1-26.3-2.7-39-6c-5.4-1.4-10.3-0.4-15.3,0.3
	c-40.1,5.8-77.9-3.7-115-17.4c-9.9-3.7-9.7-3.9-7.4-14.3C262.9,321.4,263.6,316.5,264.4,311.6z"/>
<path style="fill:#FFB594;transform:scale(0.2)" :class="ValueId+'_color4'" d="M388.6,518.1c3.7,0.1,4.4-1.5,3.1-4.6c-3.7-8.6-10.4-12.9-19.6-13.8c-5.7-0.6-7.1-2.4-5.4-7.8
	c6.8-22,13.4-44,20.5-65.8c5.7-17.7,13.7-34.6,20.6-51.8c1.4-3.4,1-4.3-2.8-5.7c-10.7-3.9-21.2-0.1-31.7-0.1c-1.8,0-2.7,1.4-2.8,3.1
	c-0.4,4.6-0.6,9.2-1.3,13.7c-1.7,12.3-1.7,24.8-4.6,37c-4.8,20.5-9.7,40.9-14.9,61.3c-1.5,5.9-1.6,11.1,1.7,16.5
	c2.3,3.7,3.6,8.1,4,12.5c0.4,4,1.9,6.3,6.6,5.7c4-0.5,8.1-0.1,12.1-0.1C379,518.1,383.8,518,388.6,518.1z"/>
<path style="fill:#FFB594;transform:scale(0.2)" :class="ValueId+'_color4'" d="M204.8,417.3c12.5,10.4,25.1,20.7,37.6,31.1c3.9,3.2,4.6,6.2,0.5,9.9c-3.7,3.3-7,7.1-10.7,10.5
	c-1.8,1.7-2.6,3-0.3,5c9,8,17.9,16.2,26.9,24.3c1.9,1.7,2.9,1.4,3.4-1.1c0.9-4.7,2.2-9.3,2.7-14c1.8-17.3,1.4-33.6-13.5-46.8
	c-11.5-10.3-21-22.8-31.4-34.3c-1.4-1.5-2.5-3.1-1.6-5.1c0.9-2.1,2.6-3.2,5-3.2c2.1,0,4.2-0.1,6.3-0.6c21.2-5,33.5-20.3,44-37.8
	c1-1.7,0.9-2.6-1.3-3.3c-4.4-1.4-8.7-2.9-12.9-4.7c-2.8-1.2-4.1-0.4-5.4,2.1c-3.7,6.7-7.9,13.1-13.1,18.8
	c-14.8,15.9-32.5,27.2-53.9,34.4C193.4,407.7,199.1,412.5,204.8,417.3z"/>
<path style="fill:#B95529;transform:scale(0.2)" :class="ValueId+'_color2'" d="M52.4,379.6c1.8,0,3.6-0.5,4.9-1.6c6-4.9,11.6-10.2,13.2-18.2c4.3-20.5,8.7-41,12.6-61.7
	c2.7-14.7,7.3-28.2,18.9-38.2c3.6-3.1,7.7-5.8,12.5-9.4c-2.7,0-4-0.1-5.3,0c-1.5,0.2-3,0.7-4.5,0.9c-20.8,2.3-34.9,13.3-41.1,33.1
	C58,302.3,56,320.8,52,338.9c-3.1,14-3.3,29.2-15,40.7C42.1,379.6,47.3,379.6,52.4,379.6z"/>
<path style="fill:#B95529;transform:scale(0.2)" :class="ValueId+'_color2'" d="M421.3,75.6c-19.6,5.7-36.1,16.4-50,31.3c-15.2,16.4-23,35.9-23.9,58.1c-0.4,9.9-0.6,19.9,0.9,29.8
	c1.5,10.4-3,19.3-9.8,27.4c7.1,1.3,12.9,0.6,17.3-5.3c5.2-7,7.4-14.7,6.3-23.2c-1.6-12.8-1.7-25.6,0.1-38.3
	c3-20.9,11.9-39,26.5-54.3c10.3-10.8,22.6-18.8,35.8-26.1C423.5,75.3,422.4,75.3,421.3,75.6z"/>
<path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M485.7,125.8c0,4.3-5.2,9.4-9.4,9.2c-4.1-0.1-8.9-5-8.9-9.1c0-4.3,5.2-9.4,9.4-9.2
	C480.9,116.8,485.7,121.7,485.7,125.8z"/>
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
                                    <button :style="{background:'rgba('+getterHorseBg1+')'}" @click="ShowElement(getterHorseBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHorseBg2+')'}" @click="ShowElement1(getterHorseBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHorseBg3+')'}" @click="ShowElement2(getterHorseBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHorseBg4+')'}" @click="ShowElement3(getterHorseBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterHorseBg5+')'}" @click="ShowElement4(getterHorseBg5)" :class="this.ValueId+'_color5btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterHorseBg6+')'}" @click="ShowElement5(getterHorseBg6)" :class="this.ValueId+'_color6btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterHorseBg7+')'}" @click="ShowElement6(getterHorseBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Horse= [
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
            var randomNumber = Horse[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Horse[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Horse'){
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
                getterHorseBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Horse') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHorseBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Horse') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHorseBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Horse') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHorseBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterHorseBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHorseBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHorseBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },

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
                            name:'Horse',
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