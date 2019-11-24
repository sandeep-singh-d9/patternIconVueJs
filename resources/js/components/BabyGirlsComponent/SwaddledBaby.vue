<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color6'" d="M419.9,416.6c0,35.7-0.4,71.5,0.1,107.2c0.4,28.7-20.1,52.5-48.6,56.7c-1.5,0.2-3,0.1-4.6,0.1
	c-49.8,0-99.6,0-149.4,0c-25,0-48.4-20.8-52.1-45.6c-0.7-4.9-1-9.8-1-14.7c0-34.6,0-69.2,0-103.8c1.3-1.7,3.3-1.9,5.1-1.9
	c16.3,0,32.5-0.6,48.8,0.3c2.7,0.5,4,2.6,5.3,4.7c2.1,3.4,4.7,6.5,8,8.7c6.4,4.2,12.7,6.4,20.4,1.7c9.8-6.1,19.7-12,30.2-16.7
	c6.5,1.8,13.1,1.3,19.7,0c9.9,3.9,18.5,10.2,27.8,15.3c12,6.5,22.2,4,29.8-7.7c1.6-2.5,2.8-5.5,6.4-5.9c16.1-0.7,32.2-0.2,48.4-0.2
	C416.2,414.7,418.4,414.8,419.9,416.6z M416.6,175.3c-3.1,16.1-9.1,30.9-17.9,44.6c-27.2,42.3-76,65.3-127.7,56.6
	c-33-5.5-59.2-22.4-79.7-48.7c-11.9-15.4-19.2-32.6-23.1-51.5c-0.6-2.7,0.1-6.3-3.7-7.4c0,70.3,0,140.5-0.1,210.8
	c1.9,2.3,4.5,1.7,6.9,1.7c13.8,0.1,27.7-0.2,41.5,0.1c5.6,0.1,9.3-1.4,12.6-6.4c7.9-11.9,17.6-13.5,30-6.5
	c8.7,4.9,17.1,10.5,26.4,14.4c6.9-1.5,13.9-1.5,20.8,0c10.5-4.5,20-10.8,29.8-16.5c6.3-3.6,11.8-3,17.6,0.3c4.1,2.3,7.4,5.3,9.6,9.4
	c2,3.8,4.8,5.4,9.1,5.3c15.1-0.1,30.3,0,45.4-0.1c2,0,4.2,0.3,5.7-1.7c0-70.3,0-140.5-0.1-210.8C416.1,169.7,417,173.1,416.6,175.3z
	"/>
<path style="fill:#656D78;transform:scale(0.2)" :class="ValueId+'_color2'" d="M379.8,59.4c-5.3,7.6-11.8,14.1-18.4,20.4c-2.9,5.2-8.3,7-13.1,9.6c-11.6,6.2-24,9.3-37.2,9.1
	c-8.1-0.1-12.4-5.7-10.2-13.2c-7.2,4.3-14.2,7.8-21.9,9.9c-7.3,2.1-14.8,3.5-22.4,3.3c-7.1-0.2-11.6-4.5-11.5-10.7
	c0.1-5.9,4.3-10.2,11.2-10.4c18.6-0.7,34.1-7.8,46.5-21.8c1.2-1.3,2.7-2,4.1-3c6.3-8.1,10.3-17.1,11.4-27.4
	c1.3-3.3,1.1-6.7,1.2-10.1c0.3-5.6,4.2-9.4,9.3-9.3c4.9,0.1,8.8,3.9,8.8,9.2c0,5.3-0.7,10.5-1.1,15.8c-0.1,9.9-4.4,18.3-9,26.6
	c-4.6,6.9-9.5,13.6-16.9,20c13.5-0.2,24.4-4.1,34.5-10.6c6.8-4.3,12.2-10,16.8-16.5c1.2-1.7,2.4-3.4,4.1-4.6
	c5.4-8.7,7.8-18.4,8.1-28.5c0.3-7.2,3.5-11.3,9.1-11.4c5.8-0.1,9.4,4.3,9.2,11.7C392.1,32.7,387.2,46.4,379.8,59.4z"/>
<path style="fill:#D770AD;transform:scale(0.2)" :class="ValueId+'_color1'" d="M164.3,379.8c17.7,0.1,35.3,0.1,53,0.2c2.4,0,3.7-0.8,4.7-3c2.4-4.9,6-8.8,10.8-11.4
	c6.6-3.7,13-5,20.1-0.2c9.3,6.2,19.3,11.3,29,16.9c0.5,1.3-0.3,2.1-1,3c-7.5,9.5-7.7,15.7-0.7,25.1c0.9,1.1,2.2,2.1,1.7,3.9
	c-11.3,6.5-22.4,13.4-33.9,19.4c-6.3,3.2-12.1-0.6-17.3-4c-4.9-3.1-8-7.9-10.4-13.2c-2.6-2.4-2.8-5.7-2.9-8.9
	c-0.1-6.2-0.3-12.5,0.1-18.7c0.3-4.5-1.4-6-5.8-6c-14.2,0.2-28.4,0.1-42.6,0c-2.8,0-5.7,0.5-8.1-1.7
	C161.8,379.9,163.1,380.1,164.3,379.8z"/>
<path style="fill:#D770AD;transform:scale(0.2)" :class="ValueId+'_color1'" d="M302.4,382.2c11.3-6.5,22.7-13.1,34-19.6c3.6-2.1,7.1-0.2,10.4,0.9c6.7,2.3,11.9,6.7,15,13.2
	c1.1,2.4,2.5,3.3,5.2,3.3c17.7-0.2,35.3-0.2,53-0.3c1.2,0.3,2.5,0.2,3.3,1.3c-2.3,2.2-5.3,1.7-8.1,1.7c-13.8,0.1-27.6,0-41.4,0
	c-7,0-7,0.1-6.9,6.9c0.1,5.7,0.1,11.4,0,17c-0.1,3.4-0.2,6.9-2.8,9.6c-4.6,8.6-10.5,15.6-20.7,17.8c-2.7,0.6-5.2,0.9-7.7-0.5
	c-11.1-6.5-22.2-13-33.3-19.4c-0.7-2.3,1.1-3.4,2.2-4.8c6.1-7.8,6.1-14.6,0-22.4C303.4,385.6,301.6,384.4,302.4,382.2z"/>
<path style="fill:#FBA9CA;transform:scale(0.2)" :class="ValueId+'_color4'" d="M364,415.3c1.4-10.9,1.7-21.8,0.3-32.7c-0.5-3.6,2.6-2.5,4.4-2.5c15-0.1,29.9,0,44.9,0
	c3.2,0,6.4,0,9.7,0c4.2,1.4,5.7,4.7,5.7,8.8c0,5.3,0,10.6,0,15.9c-0.1,6.7-2.2,9.2-9.1,10.9C401.3,415.5,382.6,415.4,364,415.3z"/>
<path style="fill:#FBA9CA;transform:scale(0.2)" :class="ValueId+'_color4'" d="M161,380.1c18,0,35.9,0.1,53.9-0.1c3.9,0,4.7,0.6,4.5,4.9c-0.4,10.1-1.3,20.4,0.9,30.5
	c-18.6,0.1-37.3,0.2-55.9,0.2c-6.9-1.7-9-4.2-9.1-10.9c-0.1-5.3,0-10.6,0-15.9C155.3,384.7,156.7,381.5,161,380.1z"/>
<path style="fill:#D770AD;transform:scale(0.2)" :class="ValueId+'_color1'" d="M419.9,168.9c-1.9,3.4-1.8,7.2-2.6,10.8c-7.9,33.4-26.2,59.6-54.4,78.8c-25.5,17.3-54,23.7-84.3,20.7
	c-33.2-3.3-60.9-18.6-83-43.5c-16.2-18.2-25.8-39.8-29.9-63.9c-0.2-1.1-0.1-2.3-1.2-3c-2.2-11.6,0.5-23.1,0.4-34.7
	c-0.1-6.5,4.1-12.9,5.2-19.5c3.3-19.6,15.9-33.6,27.8-48.2c9.5-11.6,21.4-20.1,34.3-27.3c1.6-0.9,3.2-2.1,4.5-3.3
	c6.3-6,15.1-4,22.3-7.2c12.1-5.4,25.2-4.2,37.8-5.4c4.9-0.5,9.8,2.2,15,2.5c2.3,0.2,4.4-0.1,6.6-0.5c0.8,0.6,1.3,1.6,1.1,2.4
	c-2.1,9.5-4.5,18.9-12.2,25.8c-5.1,0.8-10.2-0.6-15.3-0.6c-47.2,0.2-89.3,35.6-97.2,82.2c-8,46.9,18.4,92.7,63.3,109.7
	c58.2,22,123.7-17.2,131.9-78.9c4.2-31.4-4.9-58.5-25.9-81.9c-0.9-1-1.9-1.9-2.5-3.1c-0.8-1.9,0.3-3.3,1.4-4.5
	c5.1-5.2,10.3-10.3,14.8-16.1c0.5-0.6,1.2-0.9,2-0.8c4.9,4.3,9.5,8.7,13.7,13.8c5.5,6.6,7.9,14.9,13.8,21c2,2.1,0.7,5.2,2.3,7.5
	c6.1,8,5.6,18.4,9.6,27.3c1.6,3.7-0.5,9.5,0.7,14.3C422.2,151.9,418.6,160.4,419.9,168.9z M353.7,39.4c-1.5-1.1-2.5-2.6-4.7-2.9
	c-4.8-0.5-8.8-2.9-12.5-5.8c-2.6,9.1-5.7,18-10.2,26.3c-0.3,0.8-0.1,1.6,0.7,1.9c6.3,2.8,12.1,6.9,18.8,8.6
	c9-5.2,15.5-12.7,20.2-21.9C361,45.4,357.5,42.2,353.7,39.4z"/>
<path style="fill:#92DC7B;transform:scale(0.2)" :class="ValueId+'_color5'" d="M302.4,382.2c4,4.9,8.4,9.2,8.2,16.6c-0.2,6.9-4.6,10.8-8.2,15.4c-6.8,2.5-13.7,3-20.5,0
	c-11.3-9.7-10.9-23.2,0-32C288.7,379.3,295.5,379.4,302.4,382.2z"/>
<path style="fill:#FFE2D9;transform:scale(0.2)" :class="ValueId+'_color3'" d="M306.9,52.6c-12.2,16.8-28.8,25.2-49.3,26.2c-7.2,0.4-11.2,3.5-11.1,9.3c0.1,5.8,4.1,9.1,11.4,8.9
	c13.9-0.4,26.9-4.1,38.9-11.1c1.5-0.8,2.9-1.7,5.3-3.1c-1.2,5-1.1,9,2.4,12c3.7,3.3,8.3,2.5,12.5,2c15.3-1.6,29.5-6.4,42-15.8
	c0.7-0.6,1.7-0.9,2.5-1.3c14.2,12.1,23,27.7,27.5,45.5c10.1,39.7-0.4,74-30.3,101.7c-14.9,13.8-33,21.7-53.4,24.2
	c-33.9,4.2-62.5-6.5-86-30.5c-15.1-15.4-23.6-34.5-26.4-56c-4.2-32.1,5.8-59.7,27.6-82.7c15.8-16.7,35.8-26.3,58.8-29.5
	C288.5,51.1,297.6,51.3,306.9,52.6z"/>
<path style="fill:#E8C5BA;transform:scale(0.2)" :class="ValueId+'_color6'" d="M326.3,57.1c6.4,3.7,13.8,5.6,19.5,10.5c-10.9,8.2-23.4,11.4-38.4,11.2
	C315.4,71.8,321.1,64.7,326.3,57.1z"/>
<path style="fill:#656D78;transform:scale(0.2)" :class="ValueId+'_color2'" d="M255.9,160.9c-4.9,0.1-9.1-4-9.3-8.9c-0.2-4.9,3.8-9.2,8.7-9.4c5.3-0.2,9.5,3.8,9.5,9.1
	C264.8,156.9,260.9,160.9,255.9,160.9z"/>
<path style="fill:#656D78;transform:scale(0.2)" :class="ValueId+'_color2'" d="M337.8,152c-0.1,5-4.1,8.9-9.1,8.9c-4.9-0.1-9.1-4.3-9.1-9.1c0-5.1,4.4-9.4,9.6-9.1
	C334.2,142.9,337.9,146.9,337.8,152z"/>
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
                                    <button :style="{background:'rgba('+getterSwaddledBabyBg1+')'}" @click="ShowElement(getterSwaddledBabyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSwaddledBabyBg2+')'}" @click="ShowElement1(getterSwaddledBabyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSwaddledBabyBg3+')'}" @click="ShowElement2(getterSwaddledBabyBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSwaddledBabyBg4+')'}" @click="ShowElement3(getterSwaddledBabyBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterSwaddledBabyBg5 +')'}" @click="ShowElement4(getterSwaddledBabyBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSwaddledBabyBg6+')'}" @click="ShowElement5(getterSwaddledBabyBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSwaddledBabyBg7+')'}" @click="ShowElement6(getterSwaddledBabyBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSwaddledBabyBg8+')'}" @click="ShowElement7(getterSwaddledBabyBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var SwaddledBaby= [
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
            var randomNumber = SwaddledBaby[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  SwaddledBaby[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'SwaddledBaby'){
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
                getterSwaddledBabyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SwaddledBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSwaddledBabyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SwaddledBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSwaddledBabyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SwaddledBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSwaddledBabyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSwaddledBabyBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSwaddledBabyBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSwaddledBabyBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSwaddledBabyBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
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
                ShowElement7(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7 + ')'
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
                    var background7Clone =tempArrayClone.background7 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'SwaddledBaby',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
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
                            $('.Svg_'+cloneIndex+'_color8').css({fill: 'rgba('+background7Clone+')'})
                            
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