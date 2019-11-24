<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(238, 242, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M304.8,133c2,18.4,4,36.7,5.8,55.1c1.4,13.7,2.4,27.4,3.8,41.1c1.4,13.9,3,27.7,4.4,41.6
	c1,9.4,1.7,18.8,2.7,28.2c1.5,14.5,3.1,28.9,4.5,43.4c1.3,13.3,2.5,26.6,3.8,39.9c1.4,14.5,3,28.9,4.5,43.4
	c0.9,9.2,1.7,18.4,2.6,27.6c1.5,14.7,3.1,29.3,4.5,44c0.6,5.5,1,11,1.5,16.5c-3.1,3-7.1,2-10.7,2c-60.4,0.1-120.8,0-181.2,0
	c-40.6,0-81.2,0-121.8,0c-3.5,0-7.2,0.8-10.1-2.1c2-18.4,4-36.7,5.9-55.1c1.4-13.7,2.4-27.4,3.8-41.1c1.4-13.9,3.1-27.7,4.5-41.6
	c1.4-13.3,2.5-26.6,3.8-39.9c1.4-14.5,3.1-28.9,4.5-43.4c1.3-13.3,2.5-26.6,3.8-39.9c1.4-14.5,3.2-28.9,4.5-43.4
	c1.1-12.1,2.2-24.3,3.7-36.4c1.6-13.3,2.6-26.6,3.9-39.9c1.9-1.8,4.3-1.8,6.7-1.8c10.5,0,20.9-0.2,31.4,0.1
	c33.3-0.4,66.5-0.1,99.8-0.2c23.8,0,47.5-0.3,71.3,0.1c10.5-0.3,21-0.1,31.5-0.1C300.5,131.3,302.9,131.3,304.8,133z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M19.2,513.8c63.8,0,127.5,0.1,191.3,0.1c44.2,0,88.3-0.1,132.5-0.1c12.7,1.5,19.1,8.6,18.9,21.3
	c-0.1,5.5,2.5,12.5-1.2,15.9c-3.4,3.1-10.2,0.9-15.5,0.9c-112.5,0.1-225.1,0-337.6,0.2c-6.1,0-8.2-1.5-7.4-7.5
	c0.4-3.1,0.1-6.3,0.1-9.5C0.3,522.3,6.5,515.3,19.2,513.8z"/>
<path :style="{fill:'rgba(42, 180, 229, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'"  d="M95.4,0c57.2,0,114.3,0,171.5,0c1.8,1.9,1.8,4.3,1.8,6.7c0.1,14.6,0.1,29.2,0,43.8
	c0,2.4-0.1,4.8-1.6,6.8c-2.6,1.9-5.6,1.6-8.6,1.6c-51.5,0-103,0-154.5,0c-2.9,0-6,0.3-8.6-1.5c-1.8-2.1-1.8-4.8-1.8-7.3
	c-0.1-14.3-0.1-28.5,0-42.8C93.6,4.7,93.4,2.1,95.4,0z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M95.4,0c0.1,19,0.1,38,0.2,57c1.6,1.8,1.7,3.9,1.7,6.1c0.1,21.1,0.1,42.2,0,63.3
	c0,2.4-0.2,4.8-1.9,6.7c-12.7,0-25.3-0.1-38-0.1c0-32.3-0.2-64.6,0-96.8C57.5,16.5,75.6-0.5,95.4,0z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M266.7,57.1c0.1-19,0.1-38,0.2-57.1c19.9-0.5,37.8,16.4,38,36.2c0.2,32.3,0,64.6,0,96.8
	c-12.7,0-25.3,0.1-38,0.1c-1.9-2.1-1.9-4.7-1.9-7.2c-0.1-20.7-0.1-41.4,0-62.1C264.9,61.4,264.9,59,266.7,57.1z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M85.9,193.2c0-3.9-0.1-7.9,0-11.8c0.2-6,3.9-10,9.4-10.1s9.5,3.8,9.6,9.8c0.2,8.1-0.1,16.2,0.1,24.3
	c0.1,3.1-1.1,3.9-4.1,4.1C85.9,210,85.9,210.1,85.9,193.2z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M162.1,193.1c0,1.2,0.1,2.4,0,3.6c-0.4,4.1,2,9.9-1,11.8c-4.3,2.6-10.3,0.7-15.6,0.8
	c-2.3,0.1-2.4-1.6-2.4-3.2c0-8.7-0.2-17.4,0.1-26.1c0.2-5.1,4.5-8.7,9.5-8.7s9.1,3.7,9.4,8.8C162.3,184.4,162.1,188.7,162.1,193.1
	L162.1,193.1z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M200.2,193.3c0-4.1-0.1-8.3,0-12.4c0.2-5.6,4-9.5,9.2-9.6c5.4-0.1,9.6,3.8,9.7,9.7
	c0.2,8.1-0.1,16.2,0.1,24.3c0.1,3-0.8,4-4,4.2C200.1,210.1,200.1,210.2,200.2,193.3z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M276.3,193.1c0,1.2,0.1,2.4,0,3.6c-0.4,4.1,1.9,9.9-1,11.8c-4.3,2.7-10.3,0.7-15.6,0.9
	c-2.3,0.1-2.4-1.6-2.4-3.2c0-8.7-0.2-17.4,0.1-26.1c0.2-5.1,4.5-8.7,9.4-8.7c5,0,8.9,3.6,9.5,8.8c0,0.4,0,0.8,0,1.2
	C276.3,185.2,276.3,189.1,276.3,193.1z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M133.5,260.4c0,0.6,0,1.2,0,1.8c0,15.2,0,15.1-15.6,13.9c-2.4-0.2-3.5-0.8-3.5-3.4
	c0.1-8.5-0.1-17,0.1-25.5c0.1-5.5,4.4-9.3,9.6-9.2c5.2,0.1,9.1,3.8,9.4,9.4C133.7,251.7,133.5,256,133.5,260.4L133.5,260.4z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M190.7,260c0,0.6,0,1.2,0,1.8c0,15.1,0,15-15.2,14.3c-3.2-0.2-4-1.4-3.9-4.3
	c0.1-8.1-0.1-16.2,0.1-24.3c0.1-5.6,4.1-9.5,9.2-9.6c5.4-0.1,9.5,3.8,9.8,9.7c0.1,2.2,0,4.3,0,6.5C190.7,256.1,190.7,258,190.7,260z
	"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M228.8,259c0-3.9-0.2-7.9,0-11.8c0.3-5.5,4.3-9.3,9.5-9.3s9.3,3.8,9.4,9.4c0.2,8.3,0,16.6,0.1,24.9
	c0,2.7-0.7,4.2-3.7,3.8c-0.2,0-0.4,0-0.6,0C228.7,276.7,228.7,276.7,228.8,259z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M105,326.2c0,4.1-0.2,8.3,0.1,12.4c0.2,3.2-1.1,3.9-4.1,4c-15,0.6-15,0.7-15-14.5
	c0-4.5-0.1-9.1,0-13.6c0.2-6,4-10,9.4-10c5.4-0.1,9.4,3.9,9.6,9.8C105.1,318.3,105,322.2,105,326.2z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M162.1,327.1c0,0.6,0,1.2,0,1.8c0,15.2,0,15.1-15.6,13.8c-2.5-0.2-3.5-0.9-3.4-3.5
	c0.1-8.5-0.1-17,0.1-25.5c0.2-5.5,4.4-9.3,9.6-9.2c5.2,0.1,9.1,3.9,9.3,9.5C162.2,318.4,162.1,322.7,162.1,327.1L162.1,327.1z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M219.2,326.6c0,0.6,0,1.2,0,1.8c0,15.8,0,15.7-15.7,14.3c-2.6-0.2-3.4-1.1-3.4-3.6
	c0.1-8.5-0.1-17,0.1-25.5c0.2-5.4,4.5-9.2,9.7-9.1c4.9,0.1,8.8,3.8,9.2,9c0.2,2.2,0,4.3,0.1,6.5
	C219.2,322.2,219.2,324.4,219.2,326.6z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M276.3,326.2c0,4.1-0.2,8.3,0.1,12.4c0.4,5.1-3.5,4.6-5.9,3.8c-4.4-1.4-11.7,4.6-13-3.6
	c-1.2-8.1-0.4-16.6-0.2-24.8c0.1-5.6,4.2-9.4,9.4-9.4c5.4-0.1,9.4,3.9,9.6,9.8C276.4,318.3,276.3,322.3,276.3,326.2z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M114.5,393.2c0-4.3-0.2-8.7,0.1-13c0.3-5.2,4.2-8.9,9.2-9c5.2-0.1,9.6,3.7,9.7,9.1
	c0.2,8.5,0.9,17.1-0.2,25.4c-1,7.8-8,2.2-12,3.3c-2.1,0.6-6.8,2.4-6.8-3.4C114.5,401.5,114.5,397.4,114.5,393.2z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M190.7,392.9c0,3.9-0.2,7.9,0.1,11.8c0.3,3.8-1.3,4.5-4.8,4.6c-14.3,0.2-14.3,0.3-14.3-13.9
	c0-4.9-0.1-9.9,0.1-14.8c0.2-5.6,4.2-9.4,9.4-9.4s9.1,3.7,9.6,9.3c0,0.4,0,0.8,0,1.2C190.7,385.4,190.7,389.1,190.7,392.9z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M247.8,393.1c0,0.6,0,1.2,0,1.8c0,15.8,0,15.7-15.6,14.4c-2.5-0.2-3.5-0.9-3.5-3.5
	c0.1-8.5-0.1-17,0.1-25.5c0.1-5.4,4.4-9.3,9.6-9.2c5.2,0.1,9,3.9,9.3,9.5c0.1,2.2,0,4.3,0,6.5C247.8,389.2,247.8,391.2,247.8,393.1z
	"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M105,459.5c0,4-0.2,7.9,0.1,11.8c0.3,3.8-1.3,4.5-4.8,4.6C86,476.1,86,476.2,86,462
	c0-4.7-0.1-9.5,0-14.2c0.2-6,4-9.9,9.4-10s9.3,3.9,9.6,9.9C105.1,451.6,105,455.6,105,459.5z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M143.1,459.8c0-4.1-0.1-8.3,0-12.4c0.2-5.6,4.1-9.4,9.3-9.5c5.4-0.1,9.6,3.9,9.7,9.7
	c0.2,8.1-0.1,16.2,0.1,24.3c0.1,3.1-1,4-4.1,4.1C143,476.6,143,476.7,143.1,459.8z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M200.2,459.7c0-4.1-0.1-8.3,0-12.4c0.3-5.6,4.2-9.4,9.4-9.5s9.4,3.7,9.6,9.2c0.2,8.5,0,17,0.1,25.5
	c0,2.6-1,3.6-3.5,3.4c-0.2,0-0.4,0-0.6,0C200.2,476.7,200.2,476.7,200.2,459.7z"/>
<path :style="{fill:'rgba(0, 116, 188, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M257.3,459.8c0-4-0.1-7.9,0-11.9c0.2-6,3.9-10,9.3-10.1s9.5,3.9,9.7,9.7c0.2,8.1,0.8,16.3-0.2,24.3
	c-1.1,8.9-8.5,2.3-12.8,3.9c-2.5,0.9-6.6,1.4-6.2-4C257.6,467.7,257.3,463.7,257.3,459.8z"/>
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
                                    <button :style="{background:'rgba('+getterCheesegraterBg1+')'}" @click="ShowElement(getterCheesegraterBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCheesegraterBg2+')'}" @click="ShowElement1(getterCheesegraterBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCheesegraterBg3+')'}" @click="ShowElement2(getterCheesegraterBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCheesegraterBg4+')'}" @click="ShowElement3(getterCheesegraterBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCheesegraterBg5+')'}" @click="ShowElement4(getterCheesegraterBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Cheesegrater= [
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
            var randomNumber = Cheesegrater[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cheesegrater[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cheesegrater'){
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
                getterCheesegraterBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cheesegrater') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCheesegraterBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cheesegrater') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCheesegraterBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cheesegrater') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCheesegraterBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCheesegraterBg5: {
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
                            name:'Cheesegrater',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            // background3:  background3Clone,
                            // background4:  background4Clone,
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