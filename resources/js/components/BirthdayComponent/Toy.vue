<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M126.7,595.5c-1.6-1.8-4-1.2-6-1.7c-39.7-9.9-59-50.2-41.9-87.7c7.5-16.4,20.3-28,33.7-39.2
	c11.8-10,24.4-19,37.5-27.3c1.4-0.9,3.2-1.4,4-3.6c-13.9-2.4-27.6-5-40.7-9.9c-12.1-4.5-22.7-11.3-32.1-20.3
	c-34.6-32.8-21.3-87.3,25.9-101.6c13-3.9,26.4-3.4,39.6-4.6c9.2-0.8,18.5-1,27.8-1.5c1.5-0.1,3.6,0.4,4.3-1.1c0.8-2-1.5-2.8-2.7-3.9
	c-29.7-26.2-48.3-58.4-53.5-97.9c-1.3-9.6-1.1-19.3-0.3-29c0.6-6.8-1.8-11.6-7.2-16c-28.9-23.7-38.4-62.8-24.2-97.6
	c13.5-33.2,47.7-54,84.4-51c21.7,1.8,40.2,10.7,55,26.6c2.4,2.6,4.2,3,7.3,2c40.9-13.6,81.9-13.6,122.9-0.1c3.4,1.1,5.3,0.4,7.8-2.2
	c24.5-24.7,54-32.6,87.1-22.4c32.4,10,51.8,33,57.2,66.5c4.9,30.2-4.4,56.3-27.6,76.5c-6.9,6-9.5,12-9,21
	c3,49.4-16.6,89.3-52.4,122.2c-1.6,1.5-3.9,2.5-4.8,5.1c12.4,2.1,24.7,1.8,36.9,2.7c14,1.1,28.2,1.6,41.5,6.9
	c31.5,12.5,47.8,46.5,36.9,77c-5.4,15.2-16.5,25.4-30.1,33.1c-17.3,9.8-36.3,13.7-55.8,16.4c-1.9,0.2-3.9-0.2-5.8,1.7
	c14.7,9.2,28.6,19.2,41.6,30.4c14.8,12.6,28.8,25.7,36.1,44.5c15.1,39.2-5.4,76.6-46.8,84.8c-0.7,0.1-1.3,0.6-2,1
	c-5.8,0-11.6,0-17.4,0c-13.4-0.3-24-6.9-34.7-14.1c-31.5-21.3-66.2-33.9-104.1-37.9c-31.7-3.3-61.9,2.8-91.4,13.9
	c-16,6-31.1,13.9-44.9,23.9c-10.5,7.6-21.5,13.5-34.7,14.2C138.3,595.5,132.5,595.5,126.7,595.5z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M471,134.4c-1.4-3.5-2.5-6.8-4.1-9.8c-2.8-5.5-7.9-7.5-13-5.2c-5,2.2-7,7.5-5.1,13.1
	c15.3,45.7,8.7,87.9-20.9,126.2c-6.3,8.1-13.6,15.3-21.6,21.8c-7.4,6-11,13.6-7.9,23c3,9.3,10,13.8,19.7,14.3
	c19.9,1,39.8,1.2,59.6,4c22,3.2,36.4,17,39.3,37.9c2.1,14.9-3.8,26.5-15.6,35.1c-14.3,10.4-30.9,14.6-48,17.4
	c-14.5,2.5-29.2,3.2-43.8,4.7c-2.3,0.2-4.7,0.6-6.7,1.5c-3.7,1.6-5.6,4.9-5.5,8.8c0.1,4.7,2.9,7.6,7.1,9.7
	c30.1,14.3,57,33.3,80.9,56.4c10.3,9.9,17.4,21.8,19.3,36.1c2.3,17.1-4.5,30.4-18.9,39.3c-15,9.3-31.1,10.1-46,0.4
	c-17.3-11.4-34.8-22.1-54.2-29.8c-27.2-10.7-55.1-17.9-84.4-18.1c-48.6-0.3-92.7,14.3-132.9,41.3c-10.1,6.8-20,13.1-32.7,13.1
	c-32.9,0.1-53.1-32.8-38.4-62.1c5.9-11.7,14.9-20.5,24.7-28.9c20.2-17.3,42.3-31.7,65.6-44.5c2.2-1.2,4.4-2.5,6.6-3.6
	c4.5-2.4,7.2-5.9,6.2-11.2c-1-5.2-5-8.4-11.1-8.1c-8.5,0.3-17,0.2-25.5-0.5c-18.8-1.7-37.1-5.1-53.9-14.1
	c-12.8-6.9-23.3-16.3-27-30.9c-5.3-20.6,6.4-40.1,27.8-47.7c11.3-4,23.3-3.4,34.9-4.4c9.8-0.9,19.7-1.3,29.5-1.5
	c10.4-0.3,19.2-3.3,23.1-13.9c3.6-9.6,0.5-17.8-9.4-26.3c-23.3-20.3-39.3-45.1-45.1-75.7c-4.4-23.5-3.4-46.9,5.2-69.6
	c2.1-5.6,0.2-10.8-4.8-13.2c-5-2.3-10.2-0.4-13.2,4.9c-0.5,0.8-0.8,1.7-1.2,2.6c-3.4,8-3.4,8-9.5,1.3c-17.9-19.6-21.2-49.7-8.2-74
	C124.3,31.1,151.2,18,177.3,22c17.9,2.7,32.1,11.4,43.1,25.7c4.8,6.2,7.5,7,15,4.2c42.5-16,84.9-16,127.3,0.2
	c7.1,2.7,9.9,1.7,15.2-5.2c29-37.7,86.7-33,108.6,8.7c13.3,25.3,8.2,56.6-12.5,76.2C473.3,132.8,472.2,133.5,471,134.4z"/>
<path style="fill:#F987FA;transform:scale(0.2)" d="M360.2,396.3c0.1,28-5.8,46.9-19.8,62.5c-23.8,26.7-58.5,26.6-82.6,0.2
	c-27.3-29.8-26.4-84.2,1.9-113.1c25-25.6,62.7-22.9,84,6C354.9,367.2,360.2,383.8,360.2,396.3z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M379.9,411c-0.3,20.1-8.7,44.5-28.2,64.5c-30.2,31.1-77,30.5-106.6-1.1c-34.8-37.2-36.4-99.4-3.5-138
	c34-40,90.9-36.3,120.5,7.7C374.1,361.8,379.9,381.4,379.9,411z M298,160.2c10.7-0.1,21,0.5,30.6,4.6c12.6,5.4,16.2,13.5,12,26.6
	c-4.3,13.5-14.1,21.4-27.1,25.6c-3.8,1.2-5,2.7-4.6,6.4c0.3,2.7,0,5.4,0.1,8.1c0.2,7.8,4.5,14,11.4,16.6s14.2,0.6,19.3-5.4
	c2.3-2.8,4.7-5.2,8.4-5.5c4-0.3,7.1,1.6,9.2,5c2.4,3.9,1.6,7.7-0.9,11.4c-11.5,16.9-36.4,20.7-52.8,7.5c-4.3-3.5-6.2-2.8-10.1,0.2
	c-16.2,12.8-39.9,9.3-52-7.1c-3.9-5.3-3.5-11.4,1.1-14.9s10-2.8,14.2,2.5c5.2,6.5,11.8,8.9,19.5,6.6c7.6-2.3,11.6-7.9,12-16
	c0.1-1.3,0.5-2.6,0.7-4c1-8.6,0.9-8.7-7.2-11.8c-14.1-5.3-24-14.6-26.6-30.1c-1.7-9.6,1.6-15.7,10.5-20.3
	C276,160.7,287.2,160.1,298,160.2z M212.6,114c19.4-0.2,36,15.7,36.2,34.6c0.1,6.4-3.5,10.8-9.1,11.3c-5.5,0.5-10.4-3.5-10.6-9.9
	c-0.3-10.1-8.9-16.6-16.8-16.3c-8.7,0.3-14.9,6.5-16,16.5c-0.7,6.1-4.6,9.8-10.2,9.5c-5.8-0.3-9.6-4.6-9.6-10.8
	C176.7,130.2,193.2,114.2,212.6,114z M348.1,148.6c0.2-18.9,16.4-34.6,35.7-34.6c19.6,0,36.2,15.8,36.4,34.7
	c0.1,6.4-3.6,10.8-9.3,11.1c-5.9,0.3-9.7-3.3-10.4-9.9c-1.1-9.8-7.6-16.2-16.4-16.1c-8.8,0.1-15,6-16.1,15.7
	c-0.8,6.9-4.9,10.8-10.8,10.4C351.6,159.5,348,155.1,348.1,148.6z M169.6,40.5c12,0.1,23.9,6.2,32.4,18.6c3.9,5.6,3,11.4-2,14.7
	c-4.8,3.2-10.3,2.1-14.1-3.3c-5.7-8.2-13.5-11.5-23.1-9.8c-9,1.6-14.5,7.5-17.4,16c-2.2,6.4-6.7,9.1-12.3,7.5
	c-5.8-1.7-8.3-6.7-6.5-13.3C131.2,53.4,147.8,40.8,169.6,40.5z M427.8,40.5c22.4,0,38.8,12.1,43.9,30.1c1.9,6.5-0.5,11.7-6.3,13.4
	c-5.5,1.7-10.6-1-12.5-7.2c-2.7-8.7-8.2-14.5-17.1-16.2c-9.8-1.8-17.7,1.7-23.5,10c-3.8,5.3-9.3,6.2-14.1,2.8
	c-4.4-3.1-5.5-8.8-2.1-13.9C404.4,47.2,416.1,40.9,427.8,40.5z M488.3,529c-0.4,3.6-1.7,6.8-5.4,8.6c-3.6,1.8-7.3,1.8-10.3-0.9
	c-3.4-3.1-6.5-6.6-9.2-10.2c-2.3-3.2-2.1-6.9,0-10.3c2.3-3.7,5.8-4.9,10-4.3C478.6,512.6,488.2,523.5,488.3,529z M159.3,539.5
	c0.1,7.2-9.5,18.2-15,18.9c-4.3,0.6-7.6-1-9.8-4.6s-2.2-7.4,0.4-10.8c2.4-3.2,5.2-6.2,8.1-9c3.1-3,6.9-3.2,10.7-1.5
	C157.2,534.2,159.2,537.1,159.3,539.5z M137.2,521.3c0.1,5.5-9.6,16.7-15,17.4c-4.2,0.5-7.6-1-9.8-4.6c-2.2-3.6-2.2-7.4,0.4-10.8
	c2.4-3.2,5.2-6.2,8.1-9c3.1-3,6.9-3.2,10.7-1.6C135.2,514.3,137,517.3,137.2,521.3z M125.2,357.8c-1.7,0-3.5,0.1-5.2,0
	c-5.7-0.3-9.5-4.1-9.6-9.4s3.5-9.6,9-10.2c3.2-0.3,6.5-0.2,9.8-0.1c6.7,0.2,10.8,4.2,10.7,10.2c-0.1,5.7-4.1,9.4-10.7,9.5
	C127.9,357.9,126.6,357.9,125.2,357.8C125.2,357.9,125.2,357.8,125.2,357.8z M471.5,357.8c-1.5,0-3.1,0.1-4.6,0
	c-6.1-0.3-9.9-4-9.9-9.7c0-5.6,3.8-9.6,9.7-10c3.3-0.2,6.5-0.2,9.8,0c6,0.3,10.1,4.7,9.9,10.5c-0.2,5.5-4.2,9.1-10.3,9.3
	C474.6,357.9,473,357.9,471.5,357.8z M125.3,368c1.7,0,3.5-0.1,5.2,0c5.5,0.4,9.1,3.9,9.4,9c0.3,5.2-2.8,9.6-8,10.3
	c-4.3,0.6-8.8,0.6-13.2,0.1c-5.1-0.6-8.5-5.2-8.3-10.2c0.2-5.1,3.8-8.8,9.1-9.3C121.5,367.8,123.4,368,125.3,368z M449.4,531.6
	c6.6-0.1,17.3,11.5,16.7,18.1c-0.7,7.5-9.6,11.7-15.6,7c-3.8-2.9-7.1-6.5-9.5-10.7C437.3,539.5,442,531.7,449.4,531.6z M471.6,368
	c1.7,0,3.5-0.1,5.2,0c5.7,0.4,9.5,4.1,9.7,9.4c0.1,5.3-3.5,9.6-8.9,10.2c-3.4,0.4-6.9,0.3-10.4,0.1c-6.3-0.3-10.3-4.4-10.2-10.1
	c0.1-5.9,4-9.4,10.6-9.6C468.9,367.9,470.3,367.9,471.6,368L471.6,368z M297.7,180c7.4,0,13.6,0.2,19.6,1.6c4.2,1,5.6,2.9,3.1,6.8
	c-5.2,8.1-13.1,11.3-22.2,11.2c-9-0.1-17-3.2-22-11.5c-2-3.3-1.3-5.3,2.6-6.2C285.5,180.2,292.2,179.9,297.7,180z"/>
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
                                    <button :style="{background:'rgba('+getterToyBg1+')'}" @click="ShowElement(getterToyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterToyBg2+')'}" @click="ShowElement1(getterToyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterToyBg3+')'}" @click="ShowElement2(getterToyBg3)" :class="this.ValueId+'_color3btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterToyBg4+')'}" @click="ShowElement3(getterToyBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterToyBg5+')'}" @click="ShowElement4(getterToyBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Toy= [
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
            var randomNumber = Toy[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Toy[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Toy'){
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
                getterToyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toy') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toy') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toy') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterToyBg5: {
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
                            name:'Toy',
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