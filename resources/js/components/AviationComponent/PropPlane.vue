<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                   <path :style="{fill:'rgba(5, 0, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M599.9,39.9c0,7.8,0,15.6,0,23.4c-1.3,15.3-5.6,29.7-13,43.2c-4.4,8.1-9.6,15.6-16.2,22.1
	c-25.6,25.4-51,51.1-76.7,76.5c-4.3,4.2-5.5,8.2-3.8,14c7.7,26.4,14.8,53,22.2,79.5c1.1,4.1,2.6,5.6,7.3,4.9
	c23.4-3.6,43.1,3.8,57.4,22.6c13.8,18.2,15.7,38.7,6.8,59.8c-3.2,7.6-8.4,14.1-14.1,20c-5.4,5.6-10.9,11.2-16.6,16.5
	c-3.8,3.5-4.6,7.1-3.1,12c5.9,20.2,11.3,40.6,17.1,60.9c1.6,5.8,0.8,10-3.6,14.2c-12.3,12-24.3,24.3-36.5,36.4
	c-6.3,6.2-8.6,5.9-13.3-1.8c-13.1-21.7-26.4-43.3-39.5-65c-3.7-6.1-4-6.1-9.2-1c-4.6,4.5-9,9.2-13.7,13.6c-6.3,5.8-13.8,6-19.4,0.7
	c-5.2-5-5.2-13.4,0.3-19.5c6-6.7,12.5-12.9,19-19.1c3.6-3.4,4.1-6.4,1.3-10.6c-7.8-11.7-5.8-11-15.2-1.9c-1.5,1.5-3.1,3-5,4.1
	c-6.2,3.7-13.2,2.8-17.6-2.1c-4-4.5-4-12.1,0.1-17.3c3.6-4.6,8-8.6,12.2-12.6c3.3-3.1,3.5-5.9,1.2-9.7c-15.4-25.3-30.8-50.7-46.3-76
	c-3.3-5.3-3.7-5.3-8-0.9c-25.4,25.4-50.8,50.8-76.2,76.1c-3.4,3.4-4.4,7-3.8,11.6c4.9,38.1,9.6,76.3,14.5,114.4
	c0.7,5.4-0.6,9.4-4.4,13.2c-17.9,17.7-35.7,35.6-53.4,53.4c-2.3,2.3-5.1,3.5-8,4.6c-2.7,0-5.5,0-8.2,0c-9.6-3.5-12.1-13.4-5-21.5
	c6.1-6.9,12.9-13.1,19.3-19.6c5.4-5.5,5.6-5.6,1.8-12.6c-13.7-25.4-27-51-40.6-76.5c-1.9-3.6-4.1-4.8-8-3.2
	c-7.4,3.1-14.9,5.8-22.7,7.7c-3.6,0.9-6,3.6-8.4,6.1c-12.7,12.7-25.1,25.7-40.2,35.7c-11.1,7.3-22.2,14.6-34.8,19.2
	c-4.8,1.8-9.7,3.1-14.8,3.1c-10.9,0.2-18-6.8-18.5-17.5c-0.4-7.3,1.7-14,4.6-20.4c10-21.8,22.8-41.8,39.8-58.8
	c3.7-3.7,7.2-7.8,11.2-11.1c10.1-8.2,16-18.8,19.4-31.2c1-3.5,0.6-5.4-2.7-7c-20.9-10.6-41.4-21.9-62.2-32.7
	c-6.4-3.3-12.7-6.9-19.1-10.2c-7.1-3.6-7.1-3.6-12.6,1.8c-5.4,5.4-10.8,10.8-16.2,16.1c-1.5,1.5-3,3.1-4.8,4.3
	c-7.9,5.6-16.9,2.9-20.2-6.1c0-2.3,0-4.7,0-7c0.8-4.1,2.8-7.4,5.8-10.4c17.4-17,34.4-34,51.3-51.1c4.3-4.4,8.7-6.2,15.1-5.4
	c37,4.8,74,9.1,110.9,14.1c7.4,1,12.7-0.4,18.1-6c23.5-24.2,47.6-47.9,71.5-71.8c6.2-6.2,6.3-6.4-0.9-10.8
	c-24.8-15.1-49.7-30.2-74.5-45.4c-4.2-2.6-7.3-2.5-10.7,1.3s-7,7.4-10.8,10.7c-5.8,5.1-13.8,5.5-18.7,1.2c-5.5-4.8-5.9-12.2-1-19
	c2.3-3.2,5.2-5.8,7.9-8.6c2.3-2.3,2.3-3.9-0.5-6c-11.1-8.2-11.3-8.3-21.1,1.5c-5.1,5.1-10,10.5-15.5,15.2c-6.9,5.9-15,5.2-20.1-1.4
	c-4-5.2-3.8-11.8,0.9-17.1c4.8-5.4,10.2-10.3,15.2-15.5c4.2-4.3,4.1-4.9-1.1-8.1c-21.2-12.8-42.3-25.8-63.6-38.6
	c-1.5-0.9-3.1-1.8-4.5-2.8c-4.7-3.4-5.2-5.9-1.2-10C65.6,61.2,79,47.9,92.5,34.5c3.2-3.2,6.8-3.1,10.8-2c20.5,5.6,41,11.3,61.5,17.2
	c5.4,1.6,9.1,0.8,13.1-3.3c7.7-8,15.3-16.1,24.2-23c35.5-27.5,87.2-7.5,94.7,36.9c1.1,6.6,1.1,13.3-0.2,19.8c-0.9,4.1,0,6,4.2,7.2
	c26.9,7.5,53.8,14.8,80.7,22.5c5.3,1.5,9.1,0.5,13-3.5c25.3-25.5,50.6-51,76.2-76.2c17.7-17.5,39.1-27.4,64-29.5
	c0.8-0.1,1.6,0,2.2-0.6c7.4,0,14.8,0,22.3,0c5.6,1.2,11.6,0.7,17,3.4c13.3,6.7,21.8,16.7,23.3,31.9
	C599.3,36.9,598.8,38.6,599.9,39.9z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M599.9,39.9c-2.2-3.2-2.1-7.2-3.4-10.7c-6-16.7-18.3-25.3-35.2-28c-0.9-0.1-2,0.1-2.3-1.1
	c12.7,0,25.4,0.1,38.1-0.1c2.5,0,3,0.5,3,3C599.8,15.3,599.9,27.6,599.9,39.9z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M541.3,495.1c-0.2,0.5-0.3,1.3-0.8,1.8c-4.9,5-9.7,10.2-14.9,14.9c-2.6,2.3-3.1-1.2-3.9-2.5
	c-8.3-13.4-16.5-27-24.7-40.5c-32.3-53.2-64.7-106.3-97-159.5c-5.6-9.2-5.4-6.7,1.6-13.8c20.5-20.6,41.2-41.1,61.6-61.8
	c3.3-3.4,4.4-3.8,5.8,1.5c23.6,85.4,47.4,170.8,71.1,256.2C540.5,492.5,540.8,493.6,541.3,495.1z M370.1,132.7
	c-23.5,23.6-46.5,46.4-69.2,69.4c-2.9,2.9-4.7,1.2-7-0.2c-53.1-32.3-106.2-64.6-159.4-96.9c-13.8-8.4-27.6-16.8-41.5-25.2
	c-2-1.2-3.9-2.5-6.6-4.2c5.5-5.3,10.7-9.9,15.6-15c2.4-2.5,4.6-1.3,6.9-0.7c34.7,9.6,69.4,19.3,104.1,29
	c50.8,14.1,101.7,28.2,152.5,42.3C366.8,131.6,368,132,370.1,132.7z"/>
<path :style="{fill:'rgba(255, 226, 79, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M291.7,308.3c-7.8-4.8-11.7-4.4-18.1,1.9c-6.2,6.2-12.9,12-18.5,18.7c-9.3,10.9-20.4,18.4-34.5,21.3
	c-1.3,0.3-2.6,0.8-3.9,1.2c-14.7,4.5-29.9,8-38.7,23c-1.8-2.6-0.1-3.7,0.4-4.9c8.4-17,19.1-32.2,32.8-45.8
	c91.9-91.3,183.3-183.1,275-274.6c17.9-17.8,40.4-25.1,65.2-25.8c7.2-0.2,14.5,0.9,19.5,7.3c-0.9,3.9-4.2,5.8-6.7,8.4
	c-4.1,4.3-8.3,8.5-12.6,12.6c-1.6,1.6-3.3,3.3-5.9,3.1c-3-0.6-4.9-3-7.4-4.5c-6.4-3.9-13.1-6.8-20.7-7.1c-6.7-0.3-10.9,2.8-11.4,8.2
	c-0.5,5.1,2.8,8.6,9,10.2c5.7,1.5,12.2,1.6,15.2,8.1c0.1,4.3-3.4,6.4-6,8.9C469.3,133.9,414.1,189,359,244.2c-20,20-40,40-60,60
	C297,306.1,295.4,309.1,291.7,308.3z M200.5,61.3c5.7-6.2,10.9-13.2,17.4-18.6c10.9-9.1,26.9-9.4,38.8-1.8
	c12.1,7.7,18.2,21.8,15.4,35.8c-0.4,2.2-0.1,4.8-4.1,3.7c-22.4-6.4-44.9-12.6-67.3-18.9C200.3,61.3,200,61,200.5,61.3z M92.5,505.9
	c8.4-16.1,17.4-31.8,30.3-44.8c26-26.1,52-52.3,78.3-78.1c7-6.9,17-7.8,26-10.2c0.1,0.3,0.1,0.7,0.2,1c-2.3,4.1-5.4,7.5-8.7,10.9
	c-38.9,38.8-77.7,77.6-116.5,116.4c-2.2,2.2-4.4,4.5-7.1,6C93.8,507.7,92.3,508.4,92.5,505.9z"/>
<path :style="{fill:'rgba(240, 185, 74, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M291.7,308.3c1.6-1.4,3.3-2.7,4.8-4.2c76.3-76.3,152.7-152.6,229-229c1.5-1.5,2.8-3.2,4.2-4.8
	c4-0.2,5,3,6.4,5.7c1.6,3.2,1.9,6.7,2.7,10.1c1.3,5.3,5.3,8.3,10.1,7.6c4.6-0.6,7.8-4.1,7.9-9.4c0.2-9.1-3.2-17.1-8.3-24.4
	c-1.2-1.8-3.6-3.2-2.2-6c8.6-7.4,15.6-16.5,24.6-23.5c3.9,3.5,5.3,8.2,5.5,13.1c1.3,25.9-5.5,49.8-23.7,68.2
	c-96,96.8-192.5,193-289,289.2c-12.9,12.9-29.1,21.3-45.7,29.2c6.3-6.2,12.6-12.4,18.9-18.4c2.3-2.2,3.9-4.7,4.8-7.8
	c2.1-6.9,5.1-13.6,6.7-20.5c3.9-16.7,12.2-30.4,25.5-41.3c5.7-4.7,10.6-10.4,15.8-15.7C296.2,319.9,296.6,316,291.7,308.3z
	 M538.8,400.3c-2.3-8.4-4.7-17-7.1-25.5c-3.9-13.8-7.6-27.7-11.7-41.5c-1.1-3.6-0.3-4.7,3.3-5.3c14.4-2.6,28.6,3.5,36.1,15.9
	s6.8,28.2-2.7,39.2C551.4,389.2,545,394.4,538.8,400.3z M92.5,505.9c3.1,1.3,3.9-1.8,5.3-3.2c41.7-41.5,83.2-83.1,124.8-124.6
	c1.5-1.5,3.2-2.9,4.7-4.3c-3.1,12.8-8,24-18.1,33.6c-25.5,24.2-49.8,49.6-74.8,74.2c-12.6,12.4-28,20.8-43.8,29.3
	C90.2,508.4,91.4,507.2,92.5,505.9z"/>
<path :style="{fill:'rgba(234, 96, 96, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M63.8,326.7c4.8-9.5,12.3-9.5,21.3-8.3c29.5,4.2,59.1,7.5,88.7,11.2c0.4,2.4-1.3,3.8-2.3,5.4
	c-6.7,11-12.8,22.3-18.4,33.9c-0.8,1.6-0.8,4.7-4.3,2.8C120.4,356.7,92,341.7,63.8,326.7z M273.3,536.4
	c-14.3-27.1-28.5-54.1-42.8-80.9c-1.2-2.3-1.3-3.9,1.2-5.3c13.1-7,25.4-15.1,38.4-24.2c1.4,10.7,2.8,20.6,4,30.6
	c2.5,20.1,4.3,40.3,7.7,60.3C283.4,525.7,281.1,531.4,273.3,536.4z M546.3,53.9c7.4,8.4,12.2,17.9,12.7,29.3
	c0.3,7.2-4.1,12.4-10.6,12.8c-6.2,0.4-10.9-3.9-12-10.9c-0.9-5.6-2-11.1-6.8-14.9c-3.9-4.8-9.4-5.8-15-6.7c-7-1.1-11.3-6-10.7-12.2
	c0.5-6.5,5.7-10.7,13.1-10.4C528.4,41.5,538,46.4,546.3,53.9z"/>
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
                                    <button :style="{background:'rgba('+getterPropPlaneBg1+')'}" @click="ShowElement(getterPropPlaneBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPropPlaneBg2+')'}" @click="ShowElement1(getterPropPlaneBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPropPlaneBg3+')'}" @click="ShowElement2(getterPropPlaneBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPropPlaneBg4+')'}" @click="ShowElement3(getterPropPlaneBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPropPlaneBg5+')'}" @click="ShowElement4(getterPropPlaneBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var PropPlane= [
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
            var randomNumber = PropPlane[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  PropPlane[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'PropPlane'){
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
                getterPropPlaneBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PropPlane') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPropPlaneBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PropPlane') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPropPlaneBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PropPlane') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPropPlaneBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPropPlaneBg5: {
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
                            name:'PropPlane',
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