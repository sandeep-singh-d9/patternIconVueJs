<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M369.3,470.6c0,28.2,0.1,56-0.1,83.8c-0.1,11.6-5.8,20.2-16.3,25c-10.6,4.9-20.7,2.9-29.4-4.7
	c-6.2-5.3-9.2-12.4-9.2-20.6c0-16.9-0.1-33.8,0.1-50.7c0-3.9-0.2-6.7-5.2-5.1c-0.4,0.1-0.8,0.1-1.2,0c-3.3,0-8.9-1.2-9.5,0.1
	c-1.5,3-0.8,7.3-0.9,11c-0.1,14.5,0,29,0,43.5c-0.1,16.5-12.1,29.1-27.7,28.9c-15.4-0.2-27.2-12.6-27.2-28.8
	c-0.1-27.4,0-54.8,0-82.4c-4.9,1.2-9.5,2.5-14.1,3.3c-3.8,0.7-2.6,3.4-2.6,5.5c-0.1,28.8,0,57.6-0.1,86.4c0,12.3-7.5,22.5-18.8,26.3
	c-17.9,6-36.1-7.1-36.1-26.4c-0.1-35.4-0.1-70.7,0-106.1c0-3.5-0.8-6.3-3.1-9.1c-8.3-10.1-13.1-21.7-13.8-34.8
	c-0.2-3.7-1.2-5-5.1-5.4c-45.8-4.3-72.1-50-53-92c1.5-3.2,1.1-4.5-1.7-6.6c-37.7-26.6-37.8-79.4-0.2-106c3.1-2.2,3.3-3.8,1.8-7.1
	c-19.1-41.2,7.8-87.7,52.9-91.5c3.7-0.3,5-1.3,5.3-5.2c4.1-45.3,50.4-72.1,91.6-53c3.7,1.7,5.3,1,7.5-2.1
	c25.9-36.8,79.6-36.9,105.5-0.1c2.2,3.1,3.6,4,7.5,2.2c41.2-19.1,87.6,7.7,91.7,52.9c0.3,3.7,1.4,4.9,5.2,5.2
	c45.2,3.9,72.1,50.3,53,91.5c-1.8,3.8-0.9,5.3,2.2,7.5c36.8,25.8,36.8,79.5-0.1,105.3c-3.2,2.2-3.8,3.8-2,7.5
	c19,40.6-8,87.5-52.6,91.4c-3.8,0.3-5.5,1.2-5.7,5.4c-0.6,13.1-5.5,24.7-13.8,34.8c-2.4,2.8-3.1,5.6-3.1,9.1
	c0.1,35.4,0.1,70.7,0,106.1c0,14.7-10.7,26.4-25,27.9c-13.5,1.4-26.5-8.4-29.4-22.5c-0.5-2.5-0.4-5.1-0.4-7.7c0-28-0.1-56,0.1-84
	c0-4-1.1-5.6-5.1-6C377.4,473.1,373.8,471.7,369.3,470.6z"/>
<path style="fill:#E5FFFF;transform:scale(0.2)" :class="ValueId+'_color2'" d="M156.8,126.2c2,0.2,4,0.4,6,0.5c7.3,0.2,11.3-3.6,10.7-10.9c-0.6-7.6-0.8-15.1,1.7-22.4
	c9.8-29.5,44.7-40.7,70.1-22.7c10,7.2,14,5.9,19.5-5.4c8.3-17.1,22.2-26.6,41.1-26.6c19.2-0.1,33.3,9.4,41.7,26.7
	c5.4,11.3,9.3,12.3,19.5,5.3c15.7-10.8,32.3-12.1,48.9-2.7c16.8,9.5,24.2,24.5,23,43.8c-0.1,1.2-0.3,2.4-0.3,3.6
	c-0.4,8,3.4,12,11.4,11.3c9.7-0.9,19-0.2,27.9,4.2c25.2,12.4,33.2,44,17,66.9c-7.5,10.5-6.3,14.5,5.2,20
	c17.2,8.2,26.6,22.2,26.6,41.1c0.1,19.2-9.4,33.2-26.8,41.6c-11.2,5.4-12.3,9.4-5.3,19.6c11,15.9,12,32.7,2.4,49.3
	c-9.4,16.2-24.3,23.4-43,22.4c-0.2,0-0.4,0-0.6-0.1c-12.7-1.1-15.6,1.9-14.5,14.8c0.6,7.7-0.5,15-3.5,22.1
	c-11.4,26.8-45.1,35.9-68.5,18.5c-9.4-7-14.1-5.5-19.2,5.2c-8.4,17.6-22.6,27.2-42.1,27c-19.1-0.2-33.1-9.8-41.3-27.3
	c-4.8-10.4-9.7-11.7-18.9-5.1c-15.5,11.2-32.2,12.4-48.8,3.4c-16.5-8.9-24.1-23.6-23.6-42.3c0.1-2,0.4-4,0.5-5.9
	c0.2-7.2-3.6-11.2-11-10.6c-8.2,0.6-16.2,0.6-24.1-2.3c-27.7-10.1-38.5-44.2-21.6-68.3c0.3-0.5,0.7-1,1-1.4c6.5-9,5.2-14-4.9-18.5
	c-11.9-5.2-20.2-13.8-24.8-25.9c-8.4-21.7,1.7-46.8,22.9-56.7c1.1-0.5,2.2-1,3.2-1.5c8.2-3.9,9.8-9.4,4.5-16.6
	c-6.2-8.4-10-17.5-10-28.1C108.6,145.5,130.3,124.7,156.8,126.2z"/>
<path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M399,298.2c-1.4,0-2.9,0.4-4.2-0.1c-8-3-9.5,1.7-11.3,8c-6.3,21.3-17.5,39.5-35.6,52.9
	c-31,22.9-70.6,17.7-98-12.6c-11.2-12.5-19.1-26.9-23.5-42.9c-1.3-4.8-3.3-5.5-7.7-5.4c-31.7,0.9-52.1-21.1-49.2-52.5
	c1.6-16.5,8.5-30.6,19.8-42.3c4.3-4.5,5.4-8.2,4.2-14.4c-2.8-14.6,2.9-26.5,14.5-35.5c2.3-1.7,3.2-3.2,3.2-6.2
	c0-24.6,21.5-41.8,45.5-36.2c3.3,0.8,5.2,0.3,7.6-2.2c13.2-13.4,33.1-15,48.3-3.7c2.9,2.1,4.9,2.1,8,1c16.1-5.8,32.9-0.6,42.7,13.4
	c1.6,2.2,3.3,3.6,5.9,4.5c11.3,3.8,19,11.3,22.9,22.5c1,2.9,2.6,4.9,5.1,6.8c12.6,9.5,17.4,22.3,14.3,37.7c-0.7,3.5,0.1,5.2,2.8,7.4
	c17.7,14.2,29.1,32,29.3,55.4C444,280.2,425.3,298.4,399,298.2z"/>
<path style="fill:#FFD3B7;transform:scale(0.2)" :class="ValueId+'_color4'" d="M241,269.3c0.2-14.8,1.5-29.3,7.4-43.1c2.4-5.6,11.5-10.2,17.2-8.4c8.6,2.8,17.2,3,25.7-0.1
	c2.1-0.8,3.8-0.2,5.7,0.4c9.1,2.8,18.1,2.6,26.8-1.3c2.4-1.1,4.3-1.1,6.7,0c8.1,3.6,16.6,4.3,25,1.6c3.7-1.2,4.8,0.3,6,3.2
	c7.4,17.1,10.2,35,8.8,53.5c-1.5,19.1-6.8,37-18.1,52.8c-9.1,12.6-20.6,22.1-36.3,25.3c-18.6,3.8-34.2-2.7-47.3-15.2
	C249.1,319.3,240.5,296,241,269.3z"/>
<path style="fill:#E5FFFF;transform:scale(0.2)" :class="ValueId+'_color2'" d="M393.4,180.8c0.1,14.9-12.3,23.6-24,18.5c-6.1-2.7-11.3-3.2-17.4,0c-5.8,3.1-12.1,1.9-17.4-2.2
	c-5.2-4-9.9-3.9-15.1,0c-6.1,4.6-12.9,4.8-19.6,1.2c-4.2-2.3-8.2-2.4-12.4,0c-6,3.4-12.1,3.4-18.2-0.1c-4-2.3-7.9-2.4-11.9-0.2
	c-5,2.7-10.2,3-15.6,1.7c-2.5-0.6-4.7-0.1-7,0.4c-10.5,2.2-19.3-2.6-22.1-12.2c-2.7-9.2,1.8-17.7,11.7-21.8c7-3,8.7-6.1,6.8-13.5
	c-2-8.1-0.6-15.1,6.3-20.2c6.9-5,13.9-4.6,21.1-0.1c6.9,4.3,11.5,2.8,15.5-4.6c7.2-13.6,21.8-14.9,31.4-2.8c5.2,6.5,9.4,7,16.3,2
	c10.3-7.4,21.9-4.8,27.5,6.4c2.2,4.4,5.1,7,10.2,7.9c9.5,1.6,14.2,6.6,15.7,16.1c0.8,4.9,3.5,7.6,7.8,9.6
	C389.7,170.2,393.3,175.6,393.4,180.8z"/>
<path style="fill:#FFB594;transform:scale(0.2)" :class="ValueId+'_color3'" d="M190.1,469.2c1.2,0.1,1.7,0.1,2,0.2c4.6,2.6,11.9,1.3,14.2,5.9c2.1,4.1,0.6,10.1,0.6,15.3
	c0,24,0,48.1,0,72.1c0,7.7-3.2,12.1-8.5,12c-5.2-0.1-8.2-4.4-8.2-11.7c0-29.6,0-59.2,0-88.8C190.1,472.7,190.1,471.1,190.1,469.2z
	 M409.1,472.8c-3,0.7-4,2.1-4,5.3c0.1,28.8,0,57.6,0.1,86.4c0,6.1,3.6,10.3,8.5,10.2s8.2-4.2,8.2-10.5c0-15.5,0-31,0-46.5
	c0-16.1,0-32.2,0-48.8C417.1,470.5,413.2,471.9,409.1,472.8z M261.8,554c0,5.1,4.1,9,8.6,8.9c4.5-0.2,8-4.1,8.1-9.4
	c0.1-19.2,0-38.5,0-57.7c0-1.8,0.1-3.5-2-4.5c-5-2.3-9.3-5.9-14.7-9.9C261.8,506.4,261.7,530.2,261.8,554z M335.5,491.2
	c-1.8,0.8-2,2.2-2,3.9c0,19.6-0.1,39.3,0.1,58.9c0,5.1,3.1,8.2,8,8.7c4.4,0.5,8.5-3.7,8.6-8.8c0.1-23.8,0.1-47.6,0.1-72.6
	C344.7,485.3,340.5,488.9,335.5,491.2z M389.5,274.8c-0.1,2.1,0.8,3.4,2.8,3.8c16.9,3.4,31.2-6,32.1-21.3c1.1-18.8-8-32.5-21.8-43.9
	c-2-1.6-3.5-1.8-5.7-0.2c-3.5,2.6-7.5,4.6-11.8,5.5c-3.4,0.7-3.6,2.2-2.5,5.3c4.7,13.4,6.8,27.2,6.9,41.3
	C389.5,268.5,389.6,271.7,389.5,274.8z M222.2,271.9c-0.4-16.4,1-32.5,6.5-48.1c1.2-3.4,0.2-4.1-3-4.3c-5.5-0.2-10.6-1.8-15-5.1
	c-3.1-2.3-4.7-1.3-6.9,1.1c-8.6,9.3-13.9,20-15.3,32.8c-1.9,17,9.6,30.6,27.8,30.7C221.9,281,222.3,277.1,222.2,271.9z"/>
<path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M259.3,245.6c0.1-6.9,5.7-12.4,12.6-12.4c6.9,0.1,12.5,5.7,12.6,12.5c0,7-6,12.9-13,12.7
	C264.6,258.2,259.2,252.5,259.3,245.6z M338.2,233.3c-7.1-0.2-13.1,5.5-13.1,12.5c0,6.8,5.7,12.5,12.5,12.6s12.5-5.5,12.7-12.4
	C350.4,239.1,345.1,233.5,338.2,233.3z M300.3,325.5c0-5.4-3.9-9.4-9.3-9.5c-5.3,0-9.5,4.1-9.5,9.3c-0.1,5.1,4.3,9.6,9.4,9.6
	C295.9,335,300.2,330.7,300.3,325.5z M310.9,325.3c-0.1,5,4.5,9.6,9.5,9.6c5.1,0,9.5-4.3,9.5-9.5c0-5.3-4.1-9.4-9.4-9.5
	C315.3,316,311,320.2,310.9,325.3z"/>
<path style="fill:#FFD3B7;transform:scale(0.2)" :class="ValueId+'_color4'" d="M271.5,239.5c4.2,0.2,6.6,2.4,6.6,6.2c0,3.9-2.4,6.3-6.4,6.2c-3.7,0-6-2.2-6.2-5.9
	C265.4,242.2,267.7,240,271.5,239.5z"/>
<path style="fill:#FFD3B7;transform:scale(0.2)" :class="ValueId+'_color4'" d="M344.2,245.8c-0.6,4-2.7,6.3-6.7,6.2c-3.7-0.1-6-2.4-6.1-6c-0.1-3.9,2.2-6.4,6.3-6.4
	C341.8,239.5,343.7,242.1,344.2,245.8z"/>
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
                                    <button :style="{background:'rgba('+getterSheepBg1+')'}" @click="ShowElement(getterSheepBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSheepBg2+')'}" @click="ShowElement1(getterSheepBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSheepBg3+')'}" @click="ShowElement2(getterSheepBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSheepBg4+')'}" @click="ShowElement3(getterSheepBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSheepBg5+')'}" @click="ShowElement4(getterSheepBg5)" :class="this.ValueId+'_color5btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterSheepBg6+')'}" @click="ShowElement5(getterSheepBg6)" :class="this.ValueId+'_color6btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterSheepBg7+')'}" @click="ShowElement6(getterSheepBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Sheep= [
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
            var randomNumber = Sheep[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Sheep[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Sheep'){
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
                getterSheepBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sheep') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sheep') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sheep') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSheepBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepBg7: {
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
                            name:'Sheep',
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