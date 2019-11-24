<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M290.9,415.9c-31.8,0-59.7-0.9-87.6-3.5c-45.1-4.3-89.7-11.2-131.2-30.7
	c-24.7-11.6-46.3-27.2-59.6-51.9c-16.9-31.6-15.6-64.1-3-96.5c12-30.7,33.6-52.9,63.4-66.9c5-2.3,4.8-5.9,5.2-9.9
	c3.2-29.4,17.2-52.2,42.7-67.2c26.7-15.7,54.6-16.4,82.6-3.4c4.2,1.9,5.8,2.1,8.3-2.4c31.8-57.1,80.8-85.2,146-83.4
	c61.8,1.7,119.5,46.4,138.6,105.3c5.8,17.9,9,36,7.9,54.8c-0.2,3.7,2.1,4.5,4.6,5.7c22.8,10.6,41.4,26.3,54.1,47.9
	c21.6,36.6,26.7,74.9,7.7,114.2c-12.7,26.2-35.1,42.7-60.7,54.9c-28.8,13.8-59.6,21.2-91,25.9C375.3,415.5,331.3,416.4,290.9,415.9z
	 M261.6,526.3c-8.8-0.1-13.1-8.7-8.5-16.2c11.2-18.1,22.5-36.2,33.8-54.2c5-8,9.9-16,14.9-23.9c3.8-5.9,10-7.6,15-4.3
	c4.9,3.3,5.8,8.8,2,14.9c-16.1,25.9-32.3,51.7-48.5,77.6C268.1,523.8,265.3,526.1,261.6,526.3z M260.9,436.8
	c0.1,1.6-0.7,3.6-1.9,5.5c-16.4,26.2-32.6,52.4-49.1,78.5c-3.5,5.6-8.4,6.9-13.5,4.3c-4.6-2.3-6.7-7.6-4.9-12.5
	c0.5-1.3,1.3-2.4,2-3.6c16-25.7,32.1-51.4,48.1-77c3.3-5.3,7.9-7.3,12.8-5.4C258.8,428.2,260.9,431.5,260.9,436.8z M322.5,526.3
	c-8.7,0.2-13.8-8.1-9.9-15c4-7.2,8.6-14,13-20.9c12.1-19.4,24.3-38.8,36.3-58.2c2.8-4.5,6.4-6.8,11.7-5.9c4.4,0.7,6.7,3.9,7.7,7.9
	c1,3.8-1.1,6.8-3,9.8c-11.9,19.1-23.8,38.1-35.8,57.2c-4,6.5-8.1,12.9-12.1,19.4C328.3,523.9,325.5,526,322.5,526.3z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M38.3,331.4c-10.4-11.7-16-25.6-17.3-40.9c-5-57.2,33.7-106.4,90-115.2c5-0.8,10.1-0.9,15.2-1.2
	c6.5-0.4,10-3.8,10.1-9.8c0-6-4.1-10.2-10.5-10.1c-7.8,0-15.7,0.7-23.3,2.4c-3.7,0.8-4.4,0.1-3.9-3.5c3.9-25.5,26.1-49,51.5-54.3
	c29.9-6.2,58.1,6.2,73.8,32.5c0.5,0.8,1,1.7,1.5,2.5c3.4,4.8,8.7,6.2,13.3,3.5c4.9-2.8,6.5-8.4,3.8-13.7
	c-3.6-6.8-7.9-13.1-13.4-18.5c-3-3-3.5-5.6-1.4-9.6c20.7-39.6,52.8-64.5,96.7-73c75-14.7,146.9,36.7,158.5,112.5
	c0.9,5.8,1,11.7,1.3,17.5c0.2,3.3-0.1,4.8-4.4,4c-7.3-1.4-14.7-2.1-22.1-2.4c-7.4-0.4-11.7,3.7-11.8,10.1c-0.1,6.2,3.7,9.6,11.2,9.9
	c27.9,1.1,52.2,10.8,72.5,30.1c1.8,1.7,3.3,3.8,5,5.7c10.8,35.7,4.3,67.8-20.8,95.5c-20.1,22.2-46.7,33.9-74.6,42.6
	c-31.2,9.8-63.3,14.2-95.8,16.9c-44.8,3.7-89.6,2.7-134.4,1.9c-37.8-0.7-75.3-4.9-112.2-13.7c-17.2-4.1-33.9-9.6-50.2-16.4
	C43.6,335.4,41.1,333.2,38.3,331.4z"/>
<path :style="{fill:'rgba(66, 120, 174, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M38.3,331.4c12.5,4.9,24.8,10.3,37.7,14.2c19.6,5.9,39.5,10,59.8,12.9c21.6,3.1,43.2,4.8,65,6
	c37,1.9,73.9,1.3,110.9,0.6c28.3-0.5,56.5-3.6,84.6-8.7c25.7-4.6,50.7-11.1,74.2-22.2c23.3-10.9,43.6-26.1,56.4-49.3
	c5.6-10.1,8.1-21.3,10.1-32.8c2.5-14.4-1-28.2-2.3-42.3c13.3,13.5,21.1,30,24.9,48.3c5,24,3,47.1-10.9,68.2
	c-11.5,17.3-27.9,28.9-46.2,37.9c-25.1,12.4-52.1,18.8-79.5,23.5c-52.1,8.8-104.8,9-157.4,7.9c-40.1-0.8-80-3.3-119.4-11.4
	c-28.1-5.7-55.5-13.4-80.1-28.7C55.5,349,45.4,341.8,38.3,331.4z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M368.8,40.2c1.2,0.4,3.9,1.4,6.6,2.6c1.5,0.7,1.6,2.1,0.4,3.4c-0.9,1-1.9,2-2.9,2.9
	C348,74,323.1,99,298.2,123.9c-3.4,3.4-11.9,4.2-15.8,1.4c-1.3-0.9-1.5-1.7-0.4-2.8c0.8-0.9,1.6-1.7,2.5-2.5
	c25.5-25.5,50.9-51,76.4-76.4C362.6,41.8,364.1,39.4,368.8,40.2z M359.3,38.8c-1.2,1.4-1.9,2.4-2.7,3.2
	c-26.2,26.2-52.3,52.3-78.5,78.5c-4.8,4.8-7.9-0.1-11-2.1c-4-2.6,0.2-4.6,1.8-6.3c23.9-24,47.9-47.9,71.8-71.9
	c2.3-2.3,14.1-3.9,16.7-2.3C358,38.2,358.5,38.4,359.3,38.8z M309.8,127.9c-2.4-0.6-6.2,1.7-7.3-1.2c-0.8-2.1,2.7-3.9,4.5-5.7
	c23.5-23.5,47-47,70.4-70.6c3.3-3.4,5.8-3.8,9.2-0.5c3.6,3.5,3.3,6-0.3,9.6c-21.2,20.8-42.2,41.9-63,63
	C319.3,126.4,315.6,129.3,309.8,127.9z M335.2,39.6c-0.9,0.9-1.9,2.1-3,3.2c-22.1,22.1-44.2,44.3-66.4,66.3
	c-1.5,1.5-3.2,5.3-5.9,2.1c-2.5-2.9-5.9-6.3-2.7-10.8c1.3-1.9,3.2-3.4,4.9-5c17.1-17.2,34.4-34.2,51.4-51.5c5.8-5.9,13.3-4.4,20-6.2
	C334.4,37.3,335.4,37.8,335.2,39.6z M117.9,195.1c2.5,0.8,5.2,1.9,7.3,3.9c1.9,1.7,0.7,3.1-0.6,4.4c-17.3,17.3-34.5,34.7-51.9,51.8
	c-4.5,4.4-8-0.7-11.1-2.8c-3.8-2.6,0.7-4.2,2.1-5.6c15.9-16.2,32-32.2,48.1-48.2C113.4,197,114.7,194.8,117.9,195.1z M328.1,125.3
	c-0.1-2.8,1.7-3.7,2.9-4.8c19.1-19.1,38.2-38.3,57.3-57.3c1.2-1.2,2.1-3.4,4.1-2.7c1.7,0.7,1.8,2.9,2,4.6c0.7,5.4,0.1,10-4.4,14.2
	c-11.7,11-23,22.4-34.1,34C348.2,121.4,338.2,122.8,328.1,125.3z M408.2,246.4c-2.2-1.1-5.3-2.2-7.6-4.1c-2.7-2.3,0.5-3.7,1.8-5.1
	c13.1-13.2,26.3-26.3,39.4-39.5c2.5-2.5,5-5,7.5-7.5c4.6-4.6,10.1-4.4,14.3,0.5c2.3,2.6-0.7,3.4-1.8,4.5
	c-13.6,13.8-27.4,27.5-41.1,41.2c-2.6,2.6-5.2,5.3-7.9,7.9C411.7,245.4,410.7,246.7,408.2,246.4z M102.1,192.7
	c2.4,0.3,6.1-1.4,7.1,0.8c1.3,2.9-2.5,4.3-4.3,6.1C90.5,214.2,76,228.7,61.4,243c-1.6,1.6-2.7,5.7-6.2,3.2
	c-3.8-2.7-4.8-9.4-1.9-12.5c3.3-3.6,6.9-6.9,10.3-10.4c8.6-8.6,17.3-17,25.6-25.8C92.8,193.7,96.7,191.6,102.1,192.7z M447.3,185.9
	c-0.8,1-1.5,1.9-2.3,2.7c-15.5,15.5-31,31-46.5,46.6c-2.7,2.7-4.4,1.8-5.9-0.8c-2.4-4.3-3.5-8,1.1-12.3
	c11.9-11.1,23.1-22.9,34.6-34.3c2.7-2.7,14.6-4.8,17.6-3.1C446.4,184.8,446.7,185.3,447.3,185.9z M83.7,258.4
	c-1.8-0.3-4.7,1-5.5-1.5c-0.6-1.9,2-3.1,3.3-4.4c14.9-15,29.8-29.9,44.8-44.8c4-4,4.9-3.7,6.9,1.7c1.7,4.5,1.5,8.1-2.5,11.8
	c-10.6,9.9-20.6,20.3-30.8,30.6C94.2,257.4,91.8,258.4,83.7,258.4z M423.9,247.9c-1.2,0-2.3,0-3.5,0c-1.1,0-2.6,0.3-2.9-1.2
	c-0.1-0.7,0.7-1.8,1.3-2.4c4-4.1,8-8,12-12.1c10.4-10.4,20.6-20.8,31.2-31c1.9-1.8,3.3-7.1,7.6-3.3c3.3,2.9,3.4,9.5,0.4,12.7
	c-3.4,3.5-6.9,6.9-10.3,10.4c-6.9,6.9-14.1,13.6-20.6,20.8C434.8,246.4,429.8,248,423.9,247.9z M145.9,153.8
	c-3.3,0.3-7.6,0.5-8.8-1.9c-1.4-2.8,2.8-4.6,4.7-6.5c10.1-10.3,20.4-20.5,30.6-30.7c4.1-4.1,7.6-3.9,11.2,0.5c1.6,2,2.1,3.8-0.1,6.1
	c-10.3,10.1-20.5,20.3-30.7,30.6C150.6,154,148.2,153.9,145.9,153.8z M163.4,108c2.1,0,4.8,0.3,5.8,1.9c1.3,2-1.4,3.2-2.7,4.5
	c-10.8,11-22,21.7-32.6,32.9c-3.7,3.9-6.1,2.1-8.6-0.4s-4.3-5-0.4-8.6c8.3-7.7,16.5-15.6,24-24.1C153,109.6,158.1,109.1,163.4,108z
	 M305.2,46.4c-11.2,11.1-22.3,22.3-33.5,33.4c-4.3,4.3-8.5,8.6-12.9,12.8c-0.9,0.9-1.8,2.6-3.3,1.7c-1.4-0.8-0.6-2.4-0.3-3.7
	c2.7-12.5,10.8-21.5,20.1-29.4C283.9,54,293.5,48.3,305.2,46.4z M53.4,226.2c-0.2-9.1,14.3-24,27.6-28.3
	C80,201.6,58.8,223.4,53.4,226.2z M139.9,114.7c-5.2,5.2-11.5,11.5-17,17C123.8,124.7,132.1,116.5,139.9,114.7z M369.8,106.1
	c5.4-5.5,10.8-11.1,16.1-16.6C382.5,97,376.8,102.2,369.8,106.1z"/>
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
                                    <button :style="{background:'rgba('+getterCloudBg1+')'}" @click="ShowElement(getterCloudBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCloudBg2+')'}" @click="ShowElement1(getterCloudBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCloudBg3+')'}" @click="ShowElement2(getterCloudBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCloudBg4+')'}" @click="ShowElement3(getterCloudBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCloudBg5+')'}" @click="ShowElement4(getterCloudBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Cloud= [
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
            var randomNumber = Cloud[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cloud[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cloud'){
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
                getterCloudBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cloud') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCloudBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cloud') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCloudBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cloud') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCloudBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCloudBg5: {
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
                            name:'Cloud',
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