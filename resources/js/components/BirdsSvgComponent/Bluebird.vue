<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#4090C0;transform:scale(0.2)" :class="ValueId+'_color1'" d="M265.9,201.2c7.3-6.1,10.5-15,15.5-22.9c3.7,5.2,3.6,5.1,8.4,0.8c23.3-21.2,44.1-44.8,64.6-68.5
	c12.8-14.8,19.2-33.2,26.3-51.1c5-12.5,8.3-25.3,10.1-39.8c9.1,10.4,15.8,21.2,19.2,35c5.4-9.9,8.3-19.7,11.3-30.6
	c8,12.4,12.3,25,14.5,38.9c7.2-5.2,11-12.3,15.2-20.8c6.9,21.7-2.9,38.7-11.1,56.4c6-0.6,11-3.6,17.2-5.1
	c-3.6,13.6-9.4,25.3-14.8,37.3c2.4,1.6,4.4,0.5,6.4-0.2c4.4-1.5,5.7,0.2,5.2,4.5c-1.3,12.4-7.9,21.9-16.6,30.2
	c-1.1,1.1-2.9,1.5-3.4,4.1c3.3,0,6.4,0.1,9.5,0s4,0.6,3.6,4.2c-1.1,9.9-6.1,17.4-13.8,24.1c3.2,2.4,6.7,4.6,6.9,8.7
	c0.2,4.2-1.7,7.9-3.9,11.4c-3.5,5.5-6,11.5-8.3,17.5c-2.5,6.5-6.9,11.3-13.1,14.6c-6.9,3.8-12.3,9-15.7,16.4
	c-2.7,5.9-6.5,11.3-11.2,15.8c-3.6,3.4-6.2,7.5-8.2,12c-2.2,5-5.7,8.9-10.4,11.5c-4.9,2.7-9.2,5.8-11.8,11c-0.5,1-1.7,2.4-2.5,2.4
	c-6.7-0.6-7.7,4.4-9.3,9c-1.6,4.6-6.1,6.3-9.5,9.1c-3,2.4-5.9,4.9-8.2,8c-4.4-0.2-6.6-3.9-9.3-6.4c-11.8-11.1-26.3-17.4-40.7-24.1
	c-10.6-4.9-20.2-11.8-31.9-14.4c-5.5-1.3-10.9-3.1-16.6-3.7c-1.4-0.1-3.1,0-4.1-0.9c-5.3-5.3-12.2-4.6-18.4-3.6
	c-10,1.6-11.7,0.3-7.8-10.1c1.8-2.4,4.1-4.5,6.5-6.4c5.5-4.5,9.3-10.1,11.9-16.6c5.1-12.9,13.1-23.6,23.7-32.6
	C250.2,218.8,258,210,265.9,201.2z"/>
<path style="fill:#2E74B6;transform:scale(0.2)" :class="ValueId+'_color2'" d="M265.9,201.2c-1.5,4.3-4.7,7.4-7.6,10.7c-8.7,9.9-19.7,17.3-27.8,27.8c-4.5,5.8-8.6,11.7-11,18.7
	c-3.7,10.2-10.3,18-19.6,23.5c-2.9,2.6-6.4,2.9-10,3.1c-19.6-0.4-37.6-7.3-55.6-14.3c-1.5-0.6-3.1-1-4-2.6
	c5.7-4.9,5.8-11.2,4.5-17.9c-5-27.4-14-53.6-23.3-79.8c-2.6-7.4-4.9-15-6.1-22.9c-0.3-2-0.7-4,0.1-6c1.4-3.6,3.5-5.1,6.7-1.8
	c1.5,1.6,3,3.3,4.2,5.2c11.3,16.1,22,32.6,28.9,51.8c1.8-7.5,0.9-23.8-2-36.7c-1.5-6.9-3.2-13.8-4.9-20.7c-0.4-1.6-0.9-3.3,0.5-4.5
	c1.6-1.5,3.4-0.8,5,0.2c9.2,5.3,16.8,11.9,19.8,22.8c2.7,9.7,5.9,19.3,9.4,30.6c2.5-14,6.5-26.4,4.2-39.4c-0.7-4.1-0.7-8.1-0.7-12.1
	c0-1.4-0.2-3.1,1.5-3.6c1.6-0.5,2.7,0.7,3.7,1.7c9.6,8.9,14.7,20.2,16.8,33c0.7,4.2,0.9,8.4,1.8,12.8c4.7-10.3,9.5-20.6,10.3-32.1
	c0.2-2.7-0.9-6.2,3.1-7c3.5-0.6,4.8,2.4,6.1,4.9c7,13.2,6.4,26.9,2.7,40.8c-0.8,3.1-1.5,6.2-2.7,11.1c8-6.9,13.9-13.1,16.7-21.6
	c1.7-5.1,4.6-7.6,9.9-6c5,1.6,4,5.7,3.6,9.6c-0.9,8.6-4.5,16.4-6.9,24.5c-0.6,2.1-2,4-1.5,7.3C250.1,208.5,258,204.9,265.9,201.2z"
	/>
<path style="fill:#FFA33C;transform:scale(0.2)" :class="ValueId+'_color5'" d="M190.2,283.7c3.2-0.6,6.4-1.2,9.5-1.8c1.2,3.2-1.5,5.8-1.3,9.3c8-0.4,16.9-3.2,23.7,0.5
	c6.9,3.7,14.1,3.4,20.9,6c7.4,2.8,16.2,3.4,22.2,7.9c14.5,10.9,33.1,13.7,46.7,25.8c5.3,4.7,10.7,9.3,16,14
	c10.3,11.7,21.5,22.6,30.8,35.2c0,1.4-0.8,1.6-1.9,1.4c-11.8-7.2-24.7-12.2-37-18.3c-14.5-7.2-29.9-11.5-46.1-12.4
	c-5.6-0.3-10.9,2.6-16.5,3.2c-16.9,1.9-33.8,4.3-50.8,4.8c-6.6,0.2-12.6,2.4-17.5,7.3c-3.2,3.2-7,5.8-11.9,3
	c-5.1-2.3-8.8-6.4-13-9.8c-12.3-9.8-27.5-14.5-40.2-23.5c-4.6-3.3-9.3-6.3-14-9.5c1.6-1.7,3.7-1.4,5.7-1.5
	c8.5-0.1,15.2-3.5,20.6-10.1c6.2-7.5,12.6-14.9,20.9-20.3c3.2-2.1,6.2-5.4,10.9-2.4c1.8,1.1,3.6-1.3,5.3-2.2
	C178.4,287.3,183.5,283.5,190.2,283.7z"/>
<path style="fill:#E9EBEE;transform:scale(0.2)" :class="ValueId+'_color6'" d="M176.7,369.6c4.9,0.2,9-1.3,12.3-5.2c6.3-7.2,15.2-6.8,23.6-7.1c16.2-0.6,32.7-1.5,48.3-5.4
	c20.7-5.1,38.9,1.5,56.7,9.2c13.6,5.9,28,10.8,39.9,20.2c4.1,2.9,3.5,8,5.7,11.8c3,5.3,5.1,11,7,16.8c3,9.3-3.4,16.1-13,14.3
	c-3.2-0.6-6-2.4-9.3-2.4c-1.8-0.8-3.7-1.7-5.5-2.5c-6.1-2.8-12.2-5.9-18.3,0.3c-0.7,0.7-2.2,0.7-3.4,1.1c-1.8-4.8-3.8-9.1-9.6-10.4
	c-2.9-0.7-2.4-4.9-5.7-6.8c0.2,4.4,2.4,9-1.8,12c-2.1,1.5-4,4.2-7.3,2.6c-9.6-3.9-19.8-5.3-29.8-7.7c-20-4.8-38.5-13.5-57.3-21.4
	c-9.5-4-19-8-27.3-14.3C180,373.1,178.1,371.7,176.7,369.6z"/>
<path style="fill:#1866AE;transform:scale(0.2)" :class="ValueId+'_color3'" d="M190.2,283.7c-7.5,2.6-14.3,6.6-21,10.7c-1.5,0.9-3.2,3.2-3.7-1.1c-0.3-2.5-2.5-0.3-3.5,0.3
	c-9.4,5.2-16.9,12.6-23.3,20.9c-7.5,9.8-17,13.8-29.1,12.3c-14.1-7.7-28.6-14.4-44.8-16.5c-5.5-0.7-10.9-0.1-16.4-0.3
	c-1.4,0-3.7,1-4.1-1.2c-0.4-1.8,1.5-2.7,2.9-3.6s2.8-1.8,4.4-2.1c10.8-2.4,18.9-8.6,26.3-16.5c12.4-13,27.5-19.7,45.8-18.4
	c2.2,0.2,4.5-0.1,6.7-0.2c3.1,0.9,6.4,1.4,9.3,2.7C155.7,278,172.6,282.1,190.2,283.7z M347.8,421.9c2.5-2.2,5.3-0.2,7.3,0.5
	c5.2,1.8,9-0.1,12.8-2.9c2.9-2.2,1.9-5.2,1.1-7.7c-1.6-5.2-3.3-10.5-5.9-15.2c-2.7-4.9-3.8-10.1-5.7-15.2c0.4-0.3,0.8-0.5,1.1-0.8
	c24.1,21.4,48.2,42.9,72.3,64.3c10.8,9.6,21.5,19.2,32.3,28.8c1.6,1.5,3.1,3,5.1,5c-3.5,1.4-8,0-9.4,3.3c-1.2,2.8,2.4,5.8,1.6,10.4
	C426.2,462.8,386.9,442.5,347.8,421.9z"/>
<path style="fill:#AD470E;transform:scale(0.2)" :class="ValueId+'_color7'" d="M296.3,418c5.8-2.2,10.9-4.7,7.6-12.6c-0.5-1.2-1.2-3.7,0.6-4.3c2.1-0.7,4.5,1.1,4.6,2.9
	c0.3,4.7,3.4,5.5,7,6.6c4.7,1.5,4.8,5.9,4.6,10c-16,2.5-29.6,10.8-43.7,17.8c-2,1-5.4,1.8-4.5,4.8c0.8,2.9,4,2.1,6.4,2
	c2.6-0.1,5.2-0.7,7.8-1.1c5.1-0.7,10.1-0.7,13.9,4.2c-8.9-5.1-16.8,1.6-25.3,1.6c-2.7,0-3.2,2.1-2.7,4.4c0.4,2,1,3.9,0.5,6.3
	c-3-1.8-4-4.9-5.8-7.2c-0.9-1.1-1.7-2.5-3.4-2.1c-1.9,0.5-2.2,2.2-2.4,3.8c-0.3,2.5,0.9,4.7,1.6,7.1c2.4,8.3,6.4,16.1,8,25.1
	c-3.9-1.3-4.3-4.2-5.1-6.8c-1.5-4.8-2.2-9.9-4.5-14.5c-1.3-2.5-3.1-4.7-6.2-3.7c-3,1-1.7,4-1.3,5.8c1.6,7.1,0,14.5,4.2,22.3
	c-5.3-3.1-4.8-7.3-6.1-10.8c-0.8-2.1,0.1-5.5-3.2-5.9c-2.9-0.3-1.8,3.8-4.5,4.9c-1.7-4.7,0.5-8.9,1-13.3c0.7-6.5,4.2-11.5,7.5-17.2
	c8.9-14.9,23.8-19.9,37.6-27.2C292.4,420.2,294.3,419.1,296.3,418z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" :class="ValueId+'_color4'"  d="M106.3,287.7c6.9-0.1,11.9,1.8,15,6.3c1.5,2.2-5.3,10.2-9.8,12.3c-4.1,1.9-8.3,1.6-12.5,0.3
	c-3.8-1.2-5.6-4.2-5-8c0.8-5.1,3.5-9.1,8.8-10.6C104.3,287.6,106,287.7,106.3,287.7z"/>
<path style="transform:scale(0.2)" d="M104.8,303.8c-3.2-0.1-6.7-0.9-6.9-5.7c-0.1-4.1,4.4-8.6,8.5-7.4c3,0.9,4.5,6.2,9.2,3c0.4-0.3,0.5,2,0.1,3.1
	C114.2,301,110.2,303.8,104.8,303.8z"/>
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
                                    <button :style="{background:'rgba('+getterBluebirdBg1+')'}" @click="ShowElement(getterBluebirdBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBluebirdBg2+')'}" @click="ShowElement1(getterBluebirdBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBluebirdBg3+')'}" @click="ShowElement2(getterBluebirdBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBluebirdBg4+')'}" @click="ShowElement3(getterBluebirdBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterBluebirdBg5 +')'}" @click="ShowElement4(getterBluebirdBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBluebirdBg6+')'}" @click="ShowElement5(getterBluebirdBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBluebirdBg7+')'}" @click="ShowElement6(getterBluebirdBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBluebirdBg8+')'}" @click="ShowElement7(getterBluebirdBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Bluebird= [
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
            var randomNumber = Bluebird[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Bluebird[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Bluebird'){
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
                getterBluebirdBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bluebird') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBluebirdBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bluebird') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBluebirdBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bluebird') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBluebirdBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBluebirdBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBluebirdBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBluebirdBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBluebirdBg8: {
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
                            name:'Bluebird',
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