<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#4671C6; transform:scale(0.2)" :class="ValueId+'_color2'" d="M576,323.2c-5.6-51.2-17.9-100.6-38.2-147.9c-11.9-27.7-25.4-54.8-47.7-76.1
	c-6.1-5.8-12.5-10.8-21.7-7.3c-1.9,0.7-3.3-0.2-4.7-1.1c-6-3.9-12.9-5.1-19.7-6.8c-20.7-5.2-41.9-7.7-62.8-11.4
	c-2.9,2.1-3,5.3-3.3,8.3c-1.7,18.1-12.4,28.1-29.3,32.7c-10.9,2.9-22.1,4.2-33.3,4.7c-4.2,0.2-8.5-0.2-11.8,3.3
	c-5.3,15.4-9.6,31-13.5,46.8c-5,20-5.9,40.6-6.7,61c-0.5,12.3-3.4,24.5-1.2,36.9c1.4,4.9,1.8,9.9,1.7,15c-0.1,18.5-0.1,37,0,55.5
	c0,6.2-0.2,12.3-2,18.3c-0.4,24.6,1.6,49.1,1.7,73.7c2.2,7.4,2.9,14.8,0.7,22.2c-0.6,14.3,0.5,28.6,1.2,42.8c2.1,6.9,2.4,14,1,21.1
	c0.1,10-0.8,20.1,0.6,30c1.4,9.1,4.1,11.6,12.6,12.4c15.4-1.5,30.9-0.3,46.4-0.8c15.8-0.5,31.4-2.4,46.4-7.4c2.1-1,4-2.3,6-3.4
	c20.7-2.5,40.7-7.2,59-17.9c3.4-3.3,6.8-6.7,10.1-10c0.8-2.1,1.8-4.1,1.4-6.5c-3.4-17.9-5.4-36-6.9-54.2c-2-24.2-2.9-48.2,2.4-72.1
	c1.5-6.7,2.2-13.4,1.4-20.2c0.5-3,1-5.9,1.5-8.9c1.1-8.9,2.5-17.9,1.4-26.9c-2.5-20.7-1.6-41.6-2.8-62.4c-1-17.7-1.6-35.5-2.6-53.2
	c-0.7-13.5-0.2-27-1.8-40.5c-1.6-13.3-1.9-26.5-1.7-39.4c0,1.9,0,3.8,0,5.7c0.2,31,5.5,61.7,8.3,92.5c3.7,40.4,7.6,80.7,7.7,121.3
	c0,3.7-0.1,7.3,0.3,11c0.7,6.2,4.1,9,10.4,8.1c4.9-0.7,9.7-2.3,14.9-1.6c-19.7,5.5-29.8,18.1-30.5,38.4
	c-1.3,37.2,5.2,73.5,13.9,109.5c0.7,2.7,1.7,5.4,2.9,7.9c2.3,5,6,7.5,11.5,6.2c9.2-2.1,18.5-1.5,27.8-1.3c14.5,0.4,26,6.6,33.5,19.4
	c1.4,2.4,2.5,5.1,5.4,6.3c0.4-1,1.1-2,1.2-3.1c4.8-38.5,9.1-77.1,10.7-115.9C579.5,399.7,580.2,361.5,576,323.2z M279.4,477.8
	c0.8-9.9-1.7-19.6-1.5-29.4c0.5-29.3-2.9-58.4-1.9-87.7c0.1-2.2-0.1-4.5-0.6-6.7c-2.7-9.1-2.4-18.2-1.3-27.5
	c0.3-2.6,0.3-5.2-0.1-7.8c-0.8-12.5-1-25,0.1-37.5c-0.2-8.8,1.6-17.4,1.9-26.1c1-39.2,3.9-78.1,14.2-116.2
	c1.6-5.8,4.3-11.8,2.5-18.2c-2.1-3.8-6.1-3.7-9.5-4.5c-19.9-4.9-34-15.8-38.1-37c-0.4-2.2-0.9-4.5-3.3-5.6c-6.4,0.7-12.9,1-19.2,2.2
	c-21.3,4.3-43.5,5.1-63.2,15.8c-1.7,0.9-3,0.6-4.7,0c-7.6-2.4-13.8,0.5-19.3,5.5c-6.7,6.1-12.9,12.6-18.1,20.1
	c-22.9,32.6-38,68.8-49.5,106.6C56,262.6,48.4,302.1,45.5,342.6c-2.1,29.3-1.8,58.6-0.6,87.9c1.1,27.2,3.6,54.4,6.2,81.6
	c1.4,15,4.2,29.9,6.3,44.9c2.3-0.9,3.6-2.9,4.3-5c5.1-15.6,16.8-20.5,32.1-21c18.6-0.7,30.5-11.6,32.9-30.2
	c2.3-18.1,4.3-36.2,2.5-54.7c-3-30-8.4-58.4-36.1-77.4c5.2-0.3,9.4-0.1,13.6,0.1c11.2,0.5,15.4-3.6,15-14.9c-0.1-2.5-0.5-5-0.9-7.6
	c-4.2-26.8-6.4-53.8-7-80.8c-0.9-38.9,3.2-77.3,14-114.8c-10.3,37.5-9.8,76.1-8.4,114.6c1.2,32.1,3.1,64.1,6,96.1
	c2.5,28.1,4.8,56.2,8.7,84.1c0.5,3.9,1.2,7.9,5.4,9.9c4.2-0.1,5.5-3.4,7-6.4c2.6-5.6,4.6-11.5,6.1-17.5c2.2-8.8,3.1-17.7,3.1-26.8
	c0-3.6,0.1-7.7,5.1-8.4c8.9-1.3,19.3,7.5,18.5,16.6c-0.6,7.3-1,14.6-2.2,21.8c-4.1,23.4-15.4,43.3-29.9,61.6
	c-3.7,9.3-2.5,13.9,5.4,19.6c4.5,3.9,9,7.8,13.5,11.8c5.6,10.5,16.4,12.3,26.3,14.8c26.4,6.7,53.3,11.1,80.5,13
	c3.4,0.2,6.8,0.5,9.2-2.7c2.6-19.1-1.8-37.9-1.6-56.9C278.5,490,278,483.9,279.4,477.8z"/>
<path style="fill:#3762CC; transform:scale(0.2)" :class="ValueId+'_color3'" d="M149,497.4c-1.3-9.6-3.9-19.1-5.2-28.7c-0.6-4.6-0.3-9.5-3.3-13.6c-2.2-1.7-2.9-4.1-3.2-6.7
	c-5.5-45.2-9.5-90.5-12.3-136c-0.8-13.8-0.6-27.6-1.8-41.3c-2.9-33.8-1.2-67.5,3.2-101.1c1.7-13.6,5.2-26.8,8.2-40.3
	c-3.6,6.7-6.6,13.6-9,20.8c-9.1,26.9-12.4,54.6-14.3,82.8c-2,30,0.6,59.6,3.5,89.2c1.1,11.7,2.9,23.4,3.8,35.2
	c0.5,6.5-2,9.8-9.7,8.3c-8-1.5-16.4-1.8-25.9,0.9c2.2,1.7,2.9,2.5,3.9,2.9c16.7,7.4,26,21,31.6,37.7c10.8,31.8,9.8,64.3,4.2,96.7
	c-2.6,15.6-13.4,23.5-29.4,23.7c-21.9,0.3-31.2,7.9-35.9,29.1c0.5,3.2,2.9,4.8,5.5,6.2c2.4-0.5,3.8-2.3,5.2-4
	c5.4-6.7,12.4-10.2,20.8-11.5c20.1-3.2,38.6-1.4,52.1,16.3c4.3-2.2,6.5-5.4,7-10.4c1.2-12.5,3.1-25,4.7-37.5
	C150.7,509.9,144.3,504.7,149,497.4z"/>
<path style="fill:#3762CC; transform:scale(0.2)" :class="ValueId+'_color3'" d="M558.2,541.5c-16.1-17.3-36.8-14.9-56.8-12.3c-7.2,0.9-10,0.5-11.8-6.5c-9.7-36.5-16-73.5-15.4-111.5
	c0.3-22.9,10.3-34.5,33.2-37.5c1.7-0.2,3.8,0,4.3-2c0.7-2.7-1.9-3.2-3.6-3.8c-7.6-2.4-15.1-1-22.4,1.2c-4.4,1.3-6.4,0.4-6.3-4.4
	c0.5-34.9-1.9-69.7-5.1-104.4c-1.8-19.8-3.3-39.7-5.5-59.5c-2.5-22.9-5.6-45.6-6.5-68.7c-0.3-8.5,0.2-17.1-0.5-25.7
	c-1.3,2.9-2.4,5.8-2.5,8.8c-1.1,20.5-1.9,40.8-0.7,61.4c2.3,37.3,4.3,74.6,5.2,112c0.5,22.7,4.5,45.4,0.5,68.2
	c1,11.8-1,23.3-3.3,34.9c-6.2,31.3-3.7,62.7,0.8,93.9c1.5,10.8,1.4,21.9,5.9,32.1c3.4,1.3,2.8,4.6,3.2,7.2
	c1.6,9.4,3.4,18.8,4.6,28.3c0.6,5,2.7,8.4,7.1,10.5c6.1-4.8,10.3-11.5,18.2-14.3c22.5-7.9,43.7-2.4,58.3,15.6c2.5-2.6,6.2-4,7-8.1
	C565.2,550.9,562.4,546,558.2,541.5z"/>
<path style="fill:#FAD55C; transform:scale(0.2)" :class="ValueId+'_color1'" d="M448.7,529.4c-3.5,1.8-6.9,3.7-10.8,4.6c-15.3,3.4-30.2,8.1-45.2,12.5c-26.4,7.4-53.5,7.3-80.6,7.1
	c-4.2,0-8.4-0.6-12.3,1.6c4,15.6-0.1,31.9,3.8,47.5c16.6,0.3,33.2-0.2,49.8-1.9c25.2-2.7,50.2-6.6,74.5-14.4
	c13.5-4.4,24.6-11.8,26.9-27.3c1.5-10.3,1.8-20.7,2.7-31.1C454.1,526.2,451.4,528,448.7,529.4z M289.3,555.2c-3-0.5-6.4,1.1-8.7-2.2
	c-15.1-0.9-30.2-2-45-4.9c-23.8-4.6-48.6-6.1-69.6-20.2c0.8,9.5,1.4,19,2.3,28.5c1.3,14.4,9.5,24.2,22.8,28.5
	c32.4,10.5,65.9,15.5,100,17.3c0-7.8,0-15.6,0-23.4C289,571,292.2,562.9,289.3,555.2z M377.3,46.8c-1.3,12.3-6.3,22.6-16.9,29.4
	c-13.1,8.4-27.9,12.3-43,12.5c-10,0.1-12,3.9-11,12.2c-1.9,5.6,0.6,11.6-1.4,17.2c0.1,1.1,0.2,2.2,0.2,3.3
	c10.1,0.2,20.3-0.3,30.2-1.9c29.5-4.9,46.5-14.4,45.6-47.1C380.2,63.9,379.8,55.2,377.3,46.8z M281.7,87.3
	c-16.1-4-28.8-12.1-33.8-29.2c-1.2-4.4,0.4-9-1.9-13.2c-3.5,9.2-3.5,19-4.3,28.7c0.5,3.6,0.6,7.3,1.5,10.8
	c5.4,20.8,22.8,33.6,47.9,35.8c3-5.1,2.5-10.9,3-16.3C295.4,90.3,295.1,90.5,281.7,87.3z M133.2,551.7c-11.7-7.5-24.7-9.6-38-8.1
	c-13.6,1.5-27,4.3-32.5,19.6c4.2,8.4,0.1,17.7,3.1,26.3c1.8,0.5,3.2-0.5,4.6-1.5c22.4-15.4,43.4-15,64.5,1.3
	c1.1,0.9,2.2,1.7,3.8,0.9c1.5-8.7-0.1-17.6,2.1-26.2C140.7,558.4,137.9,554.7,133.2,551.7z M549.2,549.9c-16.3-8.3-33-8.7-49.9-3
	c-8,2.7-15.5,7.1-16.9,16.9c2.3,8.7,0.5,17.7,2.2,26.4c1.9,0.7,3.1-0.6,4.4-1.7c18.5-15.3,43-16,62.5-1.7c1.8,1.3,3.3,3.1,5.9,2.5
	c2.2-8,0.7-16.2,1.5-24.3C559.3,557.7,555.6,553.2,549.2,549.9z M425.3,480.5c-12.6-9-21.9-20.8-27.6-35.4
	c-5.4-13.8-8.2-28-8.1-42.7c0-4.8-0.7-9.1-5.7-9.6c-16.5,0.5-23.5,7.8-23,23.6c0.1,4.7,0.9,9.5,1.6,14.2c5.2,32.3,19.4,59.6,46,79.6
	c5.8,4.4,10,3.3,13.7-3.3c2.2-3.9,3.8-8.3,6.4-11.9C433,488.8,431.3,484.7,425.3,480.5z M166.1,394.1c-10.9-2.9-13.9-0.9-13.6,10.7
	c0.4,17.9-4.2,34.5-12,50.3c-1.6,11.7,2,22.9,4.1,34.2c0.5,2.8-0.2,7.2,4.4,8.1c5.8-5.4,10.4-11.8,14.4-18.6
	c11.1-18.7,17.2-38.7,18.5-60.6C182.7,404.1,179.7,397.7,166.1,394.1z"/>
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
                                    <button :style="{background:'rgba('+getterJacketBg1+')'}" @click="ShowElement(getterJacketBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterJacketBg2+')'}" @click="ShowElement1(getterJacketBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterJacketBg3+')'}" @click="ShowElement2(getterJacketBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterJacketBg4+')'}" @click="ShowElement3(getterJacketBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterJacketBg5+')'}" @click="ShowElement4(getterJacketBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterJacketBg6+')'}" @click="ShowElement5(getterJacketBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterJacketBg7+')'}" @click="ShowElement6(getterJacketBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Jacket= [
                 {top:135 ,left:106},
                {top:95 ,left:32},
                {top:127 ,left:12},
                {top:9 ,left:99},
                {top:502 ,left:81},
                {top:362 ,left:123},
                {top:251 ,left:133},
                {top:376 ,left:155},
                {top:134 ,left:110},
                {top:468 ,left:124},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Jacket[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Jacket[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Jacket'){
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
                getterJacketBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Jacket') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJacketBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Jacket') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJacketBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Jacket') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJacketBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterJacketBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJacketBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJacketBg7: {
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
                            name:'Jacket',
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