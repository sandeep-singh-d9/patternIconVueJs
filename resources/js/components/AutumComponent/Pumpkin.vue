<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#EC7424; transform:scale(0.2)" :class="ValueId+'_color4'" d="M226.5,163.2c-4.3,6.2-10.6,10.7-15.1,16.8c-7,9.5-11.5,19.4-9.6,31.5c0.1,0.7-0.2,1.6-0.6,2.2
	c-4.6,7.7-4.2,16.1-3.9,24.6c0.2,4.6-1.7,9.3-1.9,14c-0.3,9.3-1.1,18.7,0.2,27.8c1,6.6-1.2,12.9-0.2,19.1c1.7,9.8-0.3,19.8,1.4,29.2
	c1.2,6.7-0.8,13.4,1,19.6c2.8,10-0.8,20.4,3.8,30.4c1.9,4.2-1.6,11,0.8,16.2c3.1,6.7-0.3,14,2.3,20.6c3.2,8.2,1.1,17.2,4.9,25.6
	c1.7,3.9,0.6,9.6,2.2,14.2c3.2,8.9,2.4,18.9,7.2,27.4c-15.5,4.7-30.5,3.4-44.7-4.2c-3.2-1.7-5.2,0.7-7.8,0.2
	c-2.5-0.9-4.4-2.6-6.3-4.4c-11.1-11.2-20.2-23.8-28.6-37.1c-8-12.7-13.9-26.4-18.9-40.1c-2.9-8-5.7-16.6-7.3-25.5
	c-1.8-10.7-2.4-21.6-5.3-32.1c-0.5-1.8-0.3-3.5-0.2-5.3c0.4-6.3,1.2-12.7-1.1-18.9c-0.6-1.8-0.3-3.5,0.3-5.3
	c0.7-2.1,1.4-4.3,1.1-6.4c-1.5-10.6,2.6-20.8,2.7-31.2c0.1-11.5,4.8-21.5,7.4-32.2c0.7-2.9,1.5-5.8,1.3-8.8c-0.1-1.6,0-3.3,0.9-4.6
	c7.6-11.2,12.7-23.9,21-34.7c10.1-13.1,22.8-22.6,37.8-29.4c2.3-1.1,6.5-1.5,5.8-4.8c-0.5-2.8-4.4-3.2-7.1-3.3
	c-4.9-0.3-8.9-3.9-13.7-3.8c-10.4,0.2-21-1-31.3,2c-3.4,1-7.9,3.3-9.7-1.8c-1.7-5,2.8-6.5,6.3-8.5c5.2-3.1,10.5-3.7,16.5-3.4
	c10.3,0.5,20.5-0.4,30.6,2.9c8.9,3,17.5,6.5,25.2,11.8c5,3.4,9.6,0.5,14.4,0.9c3.8,3,8.2,4.7,13,5.4
	C223.6,160,226.1,160.2,226.5,163.2z M265.8,482.7c7.3-10.2,14.1-21,17-33.2c2.8-12,10.3-22.5,10.9-34.8c0.4-9.2,5.8-17.3,5.4-26.2
	c-0.4-9.3,3.7-17.7,3.6-26.5c-0.2-8.9,2.1-17.4,2.5-26c0.4-8.2,1.4-16.5,1.1-24.6c-0.3-8.9,1.2-17.7,0.2-26.4
	c-1-8.7,0.8-17.6-1.4-25.8c-2.4-8.8,1.7-18.1-3.6-26.9c-1.7-2.7,1-8.9-0.8-13.1c-3.5-8.1-4.1-16.9-7.7-25.2c-3-7.1-7-13.4-10.6-19.9
	c-1.8-3.2-5.1-5.9-9.1-7.1c0.3-3.5,3.4-3.3,5.6-4.1c3.1-1.2,6.4-2,9.7-2.4c8.8-2.2,18-1.6,26.8-3.7c12.3,1.5,23,6.9,33.5,13.2
	c12.9,7.9,22.3,19.3,29.7,31.9c4.4,7.5,8.3,15.6,11.2,24.2c3.1,9.5,5.4,19.2,7,28.7c1.6,9.2,3.4,18.7,2.5,28.3
	c-0.5,5.3-0.6,10.8,0.4,16.1c1.1,6-3.6,10.8-3.6,16.7c0,4.5-1.9,8.9-1.1,13.6c0.3,1.8-0.6,3.5-1.4,5.1c-4.3,8.9-7,18.2-8,27.9
	c-0.2,2-0.7,3.9-1.7,5.7c-6.1,11.2-11.2,22.8-13.9,35.4c-0.3,1.4-1,2.6-1.8,3.8c-12.1,17-21.5,35.8-34.3,52.5
	c-6.6,8.7-13.8,16.9-20.1,25.8c-9.6-0.7-18.7,3.3-28.2,2.9C278.4,488.1,271.6,486.9,265.8,482.7z"/>
<path style="fill:#F59226; transform:scale(0.2)" :class="ValueId+'_color3'" d="M265.8,482.7c-5.8,1.9-11.1,5.3-17.3,5.9c-10.4,1-20.1-0.7-29.2-5.9c-3.4-2.6-4.5-6.5-5.4-10.4
	c-4.3-20.4-9.1-40.8-11.1-61.5c-1-10-2.6-20-3.3-30.1c-0.7-9.6-1.1-19.4-2.9-28.9c-0.1-0.8-0.1,0.2-0.1-0.6
	c0.7-11.3-2.6-22.6-1.2-33.8c0.8-6.6-2.5-12.6-1.4-18.9c1.8-11.2,0.3-22.6,0.3-33.8c0-13.6,0.7-27.1,2.4-40.3
	c1.5-11.3,2.4-22.9,6.7-33.7c4.7-11.6,13.3-20.1,22.9-27.8c3.9,0,7.8-0.3,11.7-0.8c5.3-0.6,10.6,0.3,14.8,4.1
	c7.4,11.2,13.3,23.2,16.9,36.1c2.9,10.6,6.1,21.2,6.5,32.5c0.3,8.7,1.3,17.4,0.8,26.1c-0.1,1.8,0.1,4,2.3,5.2
	c2.4-1.1,1.8-3.3,2.1-5.1c1.3-8.2,0.8-16.5,0-24.7c-1.3-13.2-3.5-26.2-8-38.8c-3.4-9.6-7.2-18.8-12.6-27.4c-1-1.5-1.8-3.2-0.2-4.9
	c4.3-2.1,8.5-0.7,12.8,0.1c10.9,4.5,15.4,14.3,19.9,24.1c4,8.6,6.3,17.9,8.7,27c0.3,1.2,0.8,2.3,0.8,3.5c0.1,10.5,4,20.5,3.3,31.2
	c-0.4,5.2,1.9,10.6,1.5,15.9c-1,10.8,0.6,21.6,0.5,32.5c-0.1,10.2-0.5,20.6-1.1,30.7c-1,15.3-0.7,30.9-5.2,45.9
	c-0.6,2-0.7,3.9-0.5,5.9c0.2,3,0.4,6-0.5,8.9c-3.8,12.1-3.8,25.2-8.5,37c-6,15-8.4,31.4-17.7,45.1
	C271.7,476.4,270.3,480.8,265.8,482.7z M208.6,154.8c-5.9,2.3-10.7,3.2-17.3-1.2c-7.9-5.3-17.3-8.8-27-11.5
	c-11.3-3.1-22.6-0.4-33.9-1.9c-3.9-0.5-8.5,3.6-12.7,6c-1.8,1-1.7,3.1-1.1,4.9c0.7,2,2.8,2,4,1.3c9.1-4.8,19.4-1.8,28.9-4.1
	c2.7-0.7,6.2-0.3,8.7,0.9c6.1,3,13,2.9,19.1,5.8c4.6,2.2,4.8,3.7,0.5,6.3c-6.2,3.9-13.2,6.3-19.5,10.2
	c-15.2,9.7-25.9,23.2-34.4,38.7c-2.4,4.4-4.7,8.7-7.3,13c-1.9,3.2-2.8,6.1-3.3,10.1c-1,8.1-3,16.3-6.7,23.9
	c-1.3,2.6-2.2,4.6-1.4,7.8c1.4,5.3,0,11-1.5,15.8c-2.2,6.8-1.8,13.4-1.7,20.2c0,3.6,0.4,7.2-1.6,10.5c-0.5,0.8-0.8,2.1-0.4,2.8
	c3.6,7.2,1.7,14.6,1.3,22.1c-0.2,3.8,2,7.3,2.2,11.4c0.4,7.5,3.2,15,3.4,22.3c0.3,9.2,5.2,16.8,6.8,25.6c1.1,6.2,4.5,13.4,8.1,19.6
	c2.2,3.7,4.2,7.5,5.4,11.9c1.2,4.5,5.2,7.6,7.5,11.7c8.1,15.2,19.9,27.7,31.8,39.9c-22.9,4.6-43.7-0.6-62.9-13.5
	c-29.8-20.1-46.7-49-57.9-82.3C33,345.1,26.2,306.4,27.8,266.4c0.9-23.3,4.5-46.4,14-67.4c20.1-44,55.1-68,103.5-71.5
	c1.4-0.1,2.8-0.1,4.2-0.2c7.7-2.4,15,0.3,22.1,2.3c14.5,4.1,27.5,11.1,37.1,23.3C208.9,153.5,208.9,154.2,208.6,154.8z M313.6,485.6
	c-1.5-1.9-0.4-3.1,0.9-4.6c17.8-19.3,31.4-41.6,45.3-63.8c5.3-8.5,8.7-17.4,12.3-26.5c3.3-8.2,6.3-16.6,10.6-24.4
	c2.7-4.8,1.6-11.4,3.7-17c2.1-5.5,2.5-11.6,6.2-16.5c1-1.3,0.8-2.8,0.7-4.5c-0.6-7.9,1-15.6,3.7-23c0.3-0.9,1.5-1.9,1.3-2.6
	c-2.9-10.2,1.3-20.8-1.6-31.1c-0.8-2.8-0.7-5.9-0.6-8.9c0.2-7.3-3.7-14-4-21c-0.4-8-4.7-14.6-6.2-22.3c-1.1-5.7-5.1-11.6-8.3-16.7
	c-5.9-9.4-12.7-18.7-21.1-25.8c-7.3-6.2-16.4-10.7-25.4-14.7c-4.9-2.2-10.5-1.7-15-4.9c0.7-2.2,2.4-3,4.3-3.7
	c12-3.9,24.4-4.2,36.8-5.1c1.6-0.1,3,0.8,4.5,1.5c31.2-2.1,53.2,14.2,72.1,36.3c14.2,16.6,21.1,36.4,23.1,57.8
	c5.2,55.1-3.9,107.8-27.4,157.9c-11,23.5-26.5,43.9-47.1,60.1C362.2,477.9,338.9,484.8,313.6,485.6z"/>
<path style="fill:#5E8932; transform:scale(0.2)" :class="ValueId+'_color1'" d="M288.4,162c-5.3,1.1-10.6,2.1-15.3,4.9c-4.4-0.4-8.7-2.1-13.2-1.3c-2.5,2-5.2,3-8.3,1.2
	c-5.5-3-11.3-4.2-17.5-2.4c-2.8,0.8-5.4,0.8-7.7-1.2c-2.6-2-5.7-2.5-8.8-2.6c-4.3-0.2-7.3-2-9-5.8c0-0.4-0.1-0.7-0.4-1
	c-1.9-6.2,2.7-10.1,6.3-13c5.2-4.2,7-9.2,7.7-15.3c0.4-3.7,0.5-7.6,2.9-10.8c3.9-16.4,6.7-33.1,12-49.1c3.3-10.2,7-20.3,13-29.3
	c8-12.1,22.3-15.4,35-8.4c3.3,1.8,4.4,3,1.4,6.5c-17.6,20.5-22.9,44.8-21.3,71.1c0.3,4.9,1.4,9.8,2.1,14.7c1.2,1.3,2.2,2.9,2.4,4.7
	c1,8.5,5.2,15,11.8,20.4c3.4,2.8,5.7,6.6,7.1,10.7C289.4,158,290.5,160.1,288.4,162z"/>
<path style="fill:#B24326; transform:scale(0.2)" :class="ValueId+'_color2'" d="M288.4,162c-0.2-7-3.7-12.8-9-16.7c-8.7-6.4-10.4-15.6-12-25.2c18.8-4.9,37.6-5.6,56.2,0.8
	c15.9,5.5,28.4,15.5,38.1,29.1c-13.1,0.9-26.2,1.2-39,4.7c-2.3,0.6-4.4,1.6-6.5,2.6c-5.7,4.5-12.7,1.4-19,3.3
	C294.5,161.5,291.3,161.6,288.4,162z M225.2,114.7c-0.9,6.6-1.7,13.2-2.6,19.8c-0.3,2.4-2.4,3.4-4.1,4.8c-4.8,3.9-9.1,8.1-10.2,14.5
	c-15.9-17-36-24.8-58.8-26.5C172.6,110.2,197.5,103.9,225.2,114.7z"/>
<path style="fill:#EC7424; transform:scale(0.2)" :class="ValueId+'_color4'" d="M251.6,166.8c2.7-0.6,5.4-1.7,8.3-1.2c5.4,6.5,6.7,15.3,12.1,21.8c2,2.5,0.2,5.5,1.6,8
	c4.3,7.2,4.5,15.6,6.7,23.4c2,7.5,0.6,15.4,2.8,22.4c2.4,8-1.7,14.9-0.5,22.3c0.4,2.6-0.5,5.3-3.2,5.6c-2.9,0.3-3.2-2.5-4.1-4.8
	c-1.3-3.9,0.1-7.4,0.2-11.1c0.1-10.5-0.4-21.2-2.8-31.3c-3.3-14.2-6.3-28.6-14.3-41.5C255.9,176.2,252.8,171.9,251.6,166.8z"/>
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
                                    <button :style="{background:'rgba('+getterPumpkinBg1+')'}" @click="ShowElement(getterPumpkinBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPumpkinBg2+')'}" @click="ShowElement1(getterPumpkinBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPumpkinBg3+')'}" @click="ShowElement2(getterPumpkinBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPumpkinBg4+')'}" @click="ShowElement3(getterPumpkinBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPumpkinBg5+')'}" @click="ShowElement4(getterPumpkinBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPumpkinBg6+')'}" @click="ShowElement5(getterPumpkinBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPumpkinBg7+')'}" @click="ShowElement6(getterPumpkinBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Pumpkin= [
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
            var randomNumber = Pumpkin[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Pumpkin[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Pumpkin'){
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
                getterPumpkinBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pumpkin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPumpkinBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pumpkin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPumpkinBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pumpkin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPumpkinBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPumpkinBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPumpkinBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPumpkinBg7: {
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
                            name:'Pumpkin',
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