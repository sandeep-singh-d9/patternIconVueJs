<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M275.1,591.3c-2.5-1.9-4.4-4.2-3.1-7.5s4.2-3.6,7.4-3.6c6.8,0.1,13.7-0.2,20.5,0.1
	c4.1,0.2,4.3-1.1,3.5-4.7c-7.1-30-14-60-21.1-90c-1-4.1-0.2-7,2.7-10c13.4-14.1,26.6-28.3,40-42.4c1.9-2.1,2.9-3.5,1.4-6.5
	c-9.5-19.7-11.4-40.6-9.5-62c0.2-2,0.3-4.1,0.5-6.1c0.4-3.1-2.3-3-4-3.5c-2.3-0.8-2.1,1.5-2.5,2.7c-1.5,5.5-2.9,11.1-4.1,16.6
	c-0.8,3.7-2.9,5.5-6.8,6.1c-28.2,4.6-56.5,9.4-84.7,14.2c-3.7,0.6-7.2,0.3-10.8-1.2c-8.1-3.6-16.3-7-24.5-10.3
	c-4-1.6-6.6-4.1-4.6-8.4c1.9-4.2,5.6-3.4,9.1-1.8c2,0.9,4,1.8,6.1,2.6c20.6,8.7,20.6,8.6,44,4.6c19.1-3.3,38.2-6.6,57.3-9.6
	c3.2-0.5,4.9-1.4,5.5-4.9c1-5.2,4.2-10.6,3.5-15.5c-0.7-5-7.7-6.6-11.2-10.5c-2.3-2.6-5-5-7.6-7.5c-0.4,0.8-1.1,1.5-1.3,2.3
	c-2.2,9.8-8.4,12.3-18.1,12.1c-21.4-0.4-42.9,0.4-64.3,0.9c-4.1,0.1-7-1.1-9.6-4.2c-7.8-8.9-15.9-17.5-23.9-26.2
	c-2.6-2.9-4.3-6-0.9-9.1c3.4-3.2,6.4-1.3,9,1.6c7.2,7.9,14.6,15.7,21.7,23.7c2,2.3,4.2,3.1,7.2,3.1c20.7-0.4,41.4-0.8,62.1-1
	c3.6,0,4.9-1.7,6.5-4.5c3.3-5.9,3.2-10.9-0.2-17.2c-11.1-20.5-14.5-42.4-9-65.9c-11.6,2.3-23,4.1-34.5,5.1c-1.9,0.2-2.1,1.8-2.9,3
	c-5.2,7.9-11.9,14-20.6,18c-3.9,1.8-8,2.5-11.3-0.8c-3.2-3.1-2.8-6.9-1.2-10.8c1.2-2.9,3.3-6.1,2.8-8.7c-0.5-2.5-4.9-2.5-7.4-4
	c-8.6-5-13.5-11.8-13.6-22.4c-0.1-23.7,0.5-47.3,8.8-70c4-11.1,9.7-21.2,18.6-29.1c3.2-2.8,0.8-3.9-0.9-5.3
	c-15-12.7-31.8-22-50.2-28.6c-2.8-1-5.6-1.9-8.2-3.2c-8.2-4.3-11.2-13.4-7.6-21.8c3.4-7.8,12.4-11.6,20.8-8.7
	c27.9,9.6,50.5,26.5,67.7,50.4c2.1,3,9.9,4,12.5,1.5c1.8-1.8-0.1-3.5-0.7-5c-6.8-16.5-16.1-31.5-28-44.9c-3.1-3.5-6.4-6.7-9.5-10.1
	c-7.1-7.9-7-17.8,0.3-24.7c7-6.5,16.8-5.9,24.1,1.7c21.3,22.1,34.2,48.3,37.8,78.9c0.5,4.6,3.5,4,6.1,4.6
	c19.3,4.2,35.8,13.3,47,29.8c14.1,20.9,18.9,43.4,8.6,67.6c-1,2.3-0.2,2.7,1.6,3.5c37.6,16.1,59.5,49.7,58.9,90.5
	c0,0.6-0.1,1.1,0,1.7c0.4,4.4-3.2,9.6-0.3,12.7c2.5,2.6,7.8,2.5,11.9,3.8c47.6,14.9,75.3,47.5,84.9,96c5.9,29.9,4.6,59.8-1.2,89.6
	c-1.8,9.2-11.4,13.2-17.9,6.9c-16.7-16.2-38.1-23.4-58.7-32.4c-12.3-5.3-24.7-10.5-36.2-17.5c-2.8-1.7-4.3-1.5-6.5,0.8
	c-4.5,4.7-9.1,9.2-14,13.4c-2.9,2.5-3.1,4.6-1.5,8c14.1,31,28,62.2,42.2,93.2c2,4.3,2,7.6-1.5,10.7c-12.9,0-25.9,0-38.8,0
	c-3.3-1-4.9-3.2-4.3-6.7c0.7-3.6,3.2-5.4,6.6-5.7c5.9-0.5,11.8-0.1,17.7-0.2c5.2-0.1,5.5-0.4,3.4-4.9
	c-12.3-27.1-24.3-54.3-36.7-81.3c-0.2-0.3-0.3-0.7-0.5-1c-5-11.2-4.6-13.4,4.8-21.5c3.9-3.4,7.7-6.9,11.4-10.5c2.1-2,2-3.6-0.1-5.5
	c-3-2.7-6-5.6-8.6-8.7c-2.3-2.7-4.3-2.5-6.3,0c-6,7.6-13.4,13.8-19.7,21c-3.5,4.1-7.1,8.1-11,11.7c-3.7,3.4-4.6,7.1-3.4,11.9
	c7,28.9,13.6,57.9,20.4,86.9c0.5,2,0.8,4,1.2,6c0.7,3.7-0.4,6.5-3.9,8.2C301,591.3,288,591.3,275.1,591.3z"/>
<path :style="{fill:'rgba(148, 31, 31, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M183.9,213.3c0-18,1.4-35.8,7.7-52.8c9-24.2,26.7-36.6,52.5-37.6c27.4-1.1,48.5,9.3,62.5,33
	c7,11.8,8.7,25.1,6.9,38.6c-1.6,12.8-9.5,21.8-20,28.5c-14.9,9.5-31.5,14-48.8,16.6c-3.6,0.5-7.3,0.8-11,1.3c-2.4,0.3-3.1-0.6-3.2-3
	c-0.6-9.6-6.7-15.5-16.2-16c-8.9-0.5-14.5,4.4-16.4,14.3c-1.3,6.4-2.2,6.8-7.8,3.5c-4-2.3-6.2-5.6-6.2-10.4
	C184,224,183.9,218.6,183.9,213.3z M280.1,309c-9.3-19.8-13.9-39.1-7.4-59.9c1.1-3.5,2.8-5.4,6.4-6.7c11.2-3.9,21.7-9.3,30.3-17.8
	c1.9-1.9,3.7-1.8,6-1.2c14.1,3.5,25,11.7,33.8,22.9c15.3,19.5,23.8,41.5,20,66.5c-2.9,18.7-12.7,31.3-29.4,34.8
	c-7.1,1.5-13.9,0-20.7-1.5c-3.9-0.9-4.9-2.7-3.8-6.7c3.6-13.4,6.8-26.8,10.2-40.2c0.3-1.1,0.5-2.1,0.7-3.2c0.7-3.7-0.6-6.4-4.3-7.2
	c-3.4-0.7-5.6,1.5-6.4,4.7c-2.1,8-4,16.1-6,24.2c-1.4,5.7-3,11.4-4.3,17.2c-0.6,3-1.8,2.8-3.6,1.2c-4.8-4.1-9-8.7-13-13.6
	c-1.8-2.2-0.5-3.8,0.3-5.6c5.1-11.5,10.3-22.9,15.5-34.3c0.5-1,1-2,1.4-3c1.2-3.3,1-6.4-2.6-7.9s-6.1,0.3-7.6,3.6
	c-4.2,9.2-8.3,18.5-12.5,27.7C282.2,304.8,281.3,306.4,280.1,309z M382.9,441.1c3.5-3.6,7-7.1,10.5-10.6c2.8-2.8,4.3-5.9,1.1-9.1
	c-3-3-6.1-1.5-8.7,1c-8,7.7-16.1,15.3-23.9,23.1c-2.6,2.6-4.6,2.9-7.3,0.3c-3.7-3.4-7.3-6.8-10.3-10.8c-2.9-3.9-2.3-5.7,2.6-6.8
	c8.5-1.9,16.8-4,24.9-7.2c27.5-11.2,47.2-30.5,59.5-57.3c2.1-4.5,3-4.1,6.4-1.1c6.8,6,7.5,11.9,4.1,20.3
	c-10.7,26.7-28.5,46.2-55.1,57.5c-0.8,0.4-1.7,0.7-2.6,0.9C383.8,441.4,383.4,441.2,382.9,441.1z M327.3,376.5c0-1.7,0-3.3,0-5
	c0.3-11.4,0.3-11.1,11.6-12.2c16.2-1.7,27.5-11,34.6-25.1c2-3.9,3.9-4.6,7.5-3.4c4.5,1.5,9.1,3,13.7,4.3c3.6,1,3.5,2.6,1.8,5.5
	c-14.5,25.3-36.4,40.5-64.4,47.5c-3.5,0.9-5.3,0.2-5-3.8C327.4,381.7,327.3,379.1,327.3,376.5L327.3,376.5z M414.8,476.7
	c11.8-5.6,21.6-12.4,30.3-20.8c8.6-8.4,15.5-18.2,21.9-29.7c2.3,11.7,2.7,22.3,2.2,33c-0.1,1.1-1.1,2.3-1.9,3.3
	c-7.5,9.6-16.8,17.1-27.3,23.1c-1.4,0.8-2.6,1.8-4.6,0.8C428.9,483.1,422.2,480.1,414.8,476.7z"/>
<path :style="{fill:'rgba(191, 59, 59, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M371.9,456.9c40-10.3,66.3-34.5,81-72.3c4.4,7.1,6.9,14.5,9.5,21.8c0.6,1.8-0.4,3.3-1,4.8
	c-10.6,27.4-29.3,46.9-56.8,57.9c-2.9,1.1-5.4,1.4-8.4-0.1C388.5,465.2,380.5,462,371.9,456.9z M359.7,412.4
	c3.3-3.5,6.1-6.4,8.8-9.4c2.4-2.7,3.1-5.6,0.3-8.3c-2.8-2.6-5.8-1.9-8.3,0.7c-6.2,6.6-12.4,13.2-18.6,19.7c-4.8,5-6.7,4.5-9-2.1
	c-4.3-12.5-4.2-12.3,8.4-16.1c28.7-8.7,50.6-26,65.4-52c1.7-3,2.7-3.4,5.6-1.6c14.7,9.2,13.9,5.7,6.4,20.9
	c-11.4,23-29.6,38.7-53.8,47.5c-1,0.4-2.1,0.7-3.2,1C361.4,412.9,361,412.7,359.7,412.4z M246.9,110.9c-4.3-11-8.8-21.1-14.5-30.5
	c-7.9-13-17.3-24.8-28.1-35.5c-3.7-3.7-3.2-7.8,0.8-10c2.2-1.2,4.1-1.2,6,0.7c20.2,20.3,32.5,44.4,36.2,72.8
	C247.4,109,247.2,109.5,246.9,110.9z M213.2,118c-2.1,1.2-2.7,0-3.5-0.6c-17.9-16.2-38.7-27.5-61.4-35.1c-3.3-1.1-5.7-2.7-5.6-6.5
	c0.1-3.6,3.4-6.2,6.7-5.1C175.8,79.4,197.1,95,213.2,118z M468.3,478.3c-0.5,10-2.2,18.4-3.8,27.4c-4.9-4.6-10-8.6-15.5-12.4
	C455.6,488.9,461.6,484.4,468.3,478.3z M203.5,260.9c2.9-8.9,5.3-16.6,6.1-24.7c0.3-3.6,3.3-3.1,5.4-2.9c2.6,0.3,5.1,2,4.3,5.2
	C217,247.5,212.9,255.3,203.5,260.9z"/>
<path :style="{fill:'rgba(1, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M247.3,153c10.7,0.1,21.7,9.5,23.3,20.2c0.5,3.7,0.9,7.9-4.3,8.7c-4.9,0.7-6.2-2.7-6.7-6.8
	c-0.9-7.1-5.3-10.9-12.2-11c-7-0.1-11.4,3.5-12.8,10.5c-0.1,0.7-0.2,1.5-0.3,2.2c-0.4,3.8-2.5,5.8-6.3,5.2c-4-0.6-4.8-3.6-4.6-7
	C224.1,163.4,235.7,152.9,247.3,153z"/>
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
                                    <button :style="{background:'rgba('+getterAntBg1+')'}" @click="ShowElement(getterAntBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAntBg2+')'}" @click="ShowElement1(getterAntBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAntBg3+')'}" @click="ShowElement2(getterAntBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAntBg4+')'}" @click="ShowElement3(getterAntBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterAntBg5+')'}" @click="ShowElement4(getterAntBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAntBg6+')'}" @click="ShowElement5(getterAntBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterAntBg7+')'}" @click="ShowElement6(getterAntBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Ant= [
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
            var randomNumber = Ant[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Ant[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Ant'){
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
                getterAntBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAntBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAntBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAntBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterAntBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAntBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAntBg7: {
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
                            name:'Ant',
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