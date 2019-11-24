<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#CCD1D9;transform:scale(0.2)" :class="ValueId+'_color1'" d="M464.1,352.3c-5.3,0-10.6,0-16,0c-1.6,1.4-3.7,1.4-5.6,1.5c-12.2,0.1-24.5,0.1-36.7,0
	c-2,0-4-0.1-5.6-1.5c-38,0-76-0.1-114-0.1c-56.3,0-112.7,0-169,0c-1.7,0-3.3,0.1-5,0.1c-1.6,1.4-3.7,1.4-5.6,1.5
	c-12.2,0.1-24.5,0.1-36.7,0c-2,0-4-0.1-5.6-1.5c-12,0-24-0.2-36,0c-3.4,0-4.1-1-4.1-4.2c0.1-106.6,0.1-213.3-0.1-319.9
	c0-4.6,2.4-4,5.2-4c123.8,0,247.6,0,371.4,0c27.3,0,54.6,0.1,82-0.1c4.5,0,5.7,1.1,5.7,5.6c-0.1,104.6-0.1,209.3-0.1,313.9
	c0,8.4,0,8.4-8,8.7C474.8,354.4,469.4,354.4,464.1,352.3z"/>
<path style="fill:#0090F6;transform:scale(0.2)" :class="ValueId+'_color2'" d="M124.1,304c-21.5,0-43,0-64.5,0.2c-4.1,0-3.6-2.3-3.6-4.8c0-37.2,0-74.3,0-111.5c0-42,0.1-84-0.1-126
	c0-4.3,0.8-5.9,5.6-5.9c108.3,0.2,216.6,0.2,324.9,0c4.8,0,5.6,1.6,5.6,5.9c-0.1,78.8-0.1,157.6,0,236.4c0,4.4-0.8,6-5.6,5.9
	c-20.8-0.3-41.6-0.2-62.5-0.3c0.7-2.7,3.3-2.4,5.2-3c10.3-3.6,17.1-10.5,20-21.2c1.4-5.3,0.7-6.1-4.8-6.2c-28.6,0-57.2,0-85.7,0
	c-6.3,0-12.6,0-18.9,0c-2.1,0-4.3,0.2-6.3-1c-0.4-3.5,2.5-2.6,4.2-2.9c11-1.5,21.5-4.5,31.4-9.7c26.4-13.8,39.7-36,41.6-65.4
	c0.3-4.3,0.1-8.7,0-13c0-2.7-1.3-4-4-4c-1.2,0-2.3,0-3.5,0c-52.7,0-105.3,0-158,0c-7.7,0-7.5,0-7.7,7.8
	c-0.4,18.1,2.7,35.2,13.4,50.3c14.4,20.3,34.9,30.2,58.9,34c1.9,0.3,4.9-0.8,5.1,2.8c-2.4,1.6-5.1,1.1-7.8,1.1c-34,0-67.9,0-101.9,0
	c-7.7,0-8.4,0.8-5.8,7.9c3.5,9.7,10.2,16.2,20,19.5C121.2,301.7,123.5,301.4,124.1,304z"/>
<path style="fill:#FE4456;transform:scale(0.2)" :class="ValueId+'_color4'" d="M124.1,304c-10.8-2.2-19.3-7.7-24.5-17.7c-0.1-0.1-0.2-0.3-0.2-0.4c-5.8-12.2-4.9-13.7,8.3-13.7
	c35.8,0,71.6,0,107.4-0.1c6-2.4,12-2.4,18,0c38,0,76,0.1,114,0c3.5,0,5.5-0.1,4.5,4.8c-3.1,14.9-11.7,23.8-26.6,26.6
	c-0.3,0.1-0.6,0.3-0.8,0.5c-51.5,0-103,0.1-154.5,0.1C154.5,304.1,139.3,304,124.1,304z M448.5,81.8c10.9,4.3,17.3,15.2,15.3,26.1
	c-2.1,11.7-12.1,20.2-23.8,20.2c-11.7,0-21.7-8.5-23.8-20.2c-1.9-11,4.4-21.8,15.3-26.1c1.9,1.1,1.8,3.1,1.9,4.9
	c0.2,2.8,0.1,5.6,0.1,8.5c0,6.8,4.7,9.8,11,7.1c2-0.9,1.9-2.5,2-4.2c0.1-3.7-0.1-7.3,0.1-11C446.8,85.2,446.5,83.1,448.5,81.8z
	 M448.5,177.8c10.9,4.3,17.3,15.2,15.3,26.1c-2.1,11.7-12.1,20.2-23.8,20.2c-11.7,0-21.7-8.5-23.8-20.2c-1.9-11,4.4-21.8,15.3-26.1
	c1.9,1.1,1.8,3.1,1.9,4.9c0.2,2.8,0.1,5.6,0.1,8.5c0,6.8,4.7,9.8,11,7.1c2-0.9,1.9-2.5,2-4.2c0.1-3.7-0.1-7.3,0.1-11
	C446.8,181.2,446.5,179.1,448.5,177.8z M440.1,272.1c-6.8,0-13.7-0.1-20.5,0.1c-2.9,0.1-3.5-0.9-3.6-3.7
	c-0.2-12.4-0.3-12.4,11.8-12.4c10.7,0,21.3,0.1,32-0.1c3,0,4.4,0.3,4.4,3.9c0,12.1,0.2,12.1-12.1,12.1
	C448.1,272.1,444.1,272.1,440.1,272.1z"/>
<path style="fill:#E6E9ED;transform:scale(0.2)" :class="ValueId+'_color5'" d="M111.2,448.1c1.3,5.4,1.3,10.7,0,16.1c-5.9,16.5-16.3,23.9-33.8,24c-7.8,0-15.7-0.3-23.5,0.1
	c-5,0.3-6.6-1.4-5.8-6.1c0.1-0.6-0.1-1.3-0.1-2c-2.2-5.4-2.2-10.8,0-16.2c0-5.3,0-10.5,0-15.8c-2.2-5.4-2.2-10.8,0-16.2
	c0.3-7.9,0.3-7.9,8.4-7.9c7,0,14,0,21,0C94.8,424.1,105.3,431.5,111.2,448.1z M448.5,81.8c-0.9,6.1-0.3,12.2-0.4,18.3
	c0,2.9-0.7,4-3.8,4.1c-12.2,0.3-12.2,0.4-12.3-12c0-3.5,0.5-6.9-0.4-10.4C437.3,79.2,442.9,79.2,448.5,81.8z M448.5,177.8
	c-0.9,6.1-0.3,12.2-0.4,18.3c0,2.9-0.7,4-3.8,4.1c-12.2,0.3-12.2,0.4-12.2-12c0-3.5,0.5-6.9-0.4-10.4
	C437.3,175.2,442.9,175.3,448.5,177.8z"/>
<path style="fill:#F7BE30;transform:scale(0.2)" :class="ValueId+'_color3'" d="M233.1,272c-6,0-12,0-18,0c-7.5-1.8-15.3-2.4-22.7-5c-29.2-10-48.3-29.1-54.8-59.8
	c-2-9.4-1.4-18.9-1.5-28.4c0-2.2,1-3,3-2.8c0.8,0.1,1.7,0,2.5,0c55,0,110,0,165-0.1c4.2,0,5.6,0.8,5.6,5.4c0.3,16.2-1,32-8.7,46.6
	c-12.7,24.2-33.7,36.8-59.8,42.2C240.3,270.9,236.5,270.4,233.1,272z"/>
<path style="fill:#000000;transform:scale(0.2)" :class="ValueId+'_color6'" d="M464.1,352.3c5.3,0,10.7,0,16,0c0,28.7,0,57.3,0,86c0,15.8-10.1,25.9-25.9,25.9c-114.3,0-228.7,0-343,0
	c-1.1-5.4-1.1-10.7,0-16.1c114.3,0,228.6,0,342.8,0c7.4,0,10-2.7,10-10.4C464.1,409.2,464.1,380.7,464.1,352.3z M112,360.1
	c0.1,7,0,14,0.2,21c0.1,2.4-0.7,3.1-3.1,3.1c-14-0.1-28-0.1-41.9,0c-2.4,0-3.1-0.8-3.1-3.1c0.2-7,0.2-14,0.2-21
	c1.6-1.6,3.6-1.5,5.6-1.6c12.1-0.1,24.3-0.1,36.5,0C108.3,358.5,110.4,358.5,112,360.1z M448,360.1c0.1,7,0,14,0.2,21
	c0.1,2.4-0.7,3.1-3.1,3.1c-14-0.1-28-0.1-41.9,0c-2.4,0-3.1-0.8-3.1-3.1c0.2-7,0.2-14,0.2-21c1.6-1.6,3.6-1.5,5.6-1.6
	c12.2-0.1,24.3-0.1,36.5,0C444.3,358.5,446.4,358.5,448,360.1z M112,360.1c-15.9,0-31.8,0-47.7,0c-0.1-2.6-0.1-5.2-0.2-7.8
	c16,0,32,0,48,0C112.1,354.8,112,357.5,112,360.1z M448,360.1c-15.9,0-31.8,0-47.7,0c-0.1-2.6-0.1-5.2-0.2-7.8c16,0,32,0,48,0
	C448.1,354.8,448,357.5,448,360.1z M48,432c0,5.4,0,10.8,0,16.2c-5.3-0.1-10.6-0.1-15.8-0.2c-2.4-5.3-2.5-10.5,0-15.8
	C37.4,432.1,42.7,432.1,48,432z M48,464c0,5.4,0,10.8,0,16.2c-5.3-0.1-10.6-0.1-15.8-0.2c-2.5-5.2-2.5-10.5,0-15.8
	C37.5,464.1,42.7,464.1,48,464z M32.2,432.2c0,5.3,0,10.5,0,15.8c-2.8,0-5.7,0.2-8.5,0.1c-4.5-0.3-7.5-3.5-7.6-7.7
	c-0.1-4.5,2.9-7.9,7.6-8.2C26.5,432,29.3,432.2,32.2,432.2z M32.2,464.2c0,5.3,0,10.5,0,15.8c-2.8,0-5.7,0.2-8.5,0.1
	c-4.6-0.3-7.7-3.7-7.6-8.2c0.1-4.3,3.1-7.4,7.6-7.7C26.5,464,29.3,464.2,32.2,464.2z M64.1,456.1c0-4.2,0.1-8.3,0-12.5
	c-0.1-2.5,0.8-3.4,3.4-3.6c12.6-0.8,12.6-0.8,12.6,11.8c0,5.5-0.1,11,0,16.5c0.1,2.7-0.8,3.7-3.7,3.8C64,472.6,64,472.7,64,460.5
	C64.1,459.1,64.1,457.6,64.1,456.1z M95.9,104.1c-1.3,0-2.7,0-4,0c-12.6,0-12.5,0-11.8-12.6c0.1-2.2,0.5-3.4,3-3.4
	c8.7,0.1,17.4-0.9,25.9,0.3c6.5,0.9,1.8,7.3,2.9,11.1c0.6,2.1,0.7,4.8-3.1,4.6C104.5,103.9,100.2,104.1,95.9,104.1z M136.3,88.1
	c8.5,0.1,7.9-1,7.8,6c-0.1,11,1.3,9.9-5.9,9.9c-11.3,0-10,1.4-10.1-6.2C128,88.1,128.1,88.1,136.3,88.1z"/>
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
                                    <button :style="{background:'rgba('+getterMicrowaveBg1+')'}" @click="ShowElement(getterMicrowaveBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMicrowaveBg2+')'}" @click="ShowElement1(getterMicrowaveBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMicrowaveBg3+')'}" @click="ShowElement2(getterMicrowaveBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMicrowaveBg4+')'}" @click="ShowElement3(getterMicrowaveBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterMicrowaveBg5 +')'}" @click="ShowElement4(getterMicrowaveBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMicrowaveBg6+')'}" @click="ShowElement5(getterMicrowaveBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMicrowaveBg7+')'}" @click="ShowElement6(getterMicrowaveBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMicrowaveBg8+')'}" @click="ShowElement7(getterMicrowaveBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Microwave= [
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
            var randomNumber = Microwave[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Microwave[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Microwave'){
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
                getterMicrowaveBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Microwave') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMicrowaveBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Microwave') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMicrowaveBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Microwave') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMicrowaveBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMicrowaveBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMicrowaveBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMicrowaveBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMicrowaveBg8: {
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
                    this.clickedInput = 'eight'
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
                            name:'Microwave',
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