<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M219.2,398.9c-9.4,17.4-19.4,32.4-31.5,45.9c-8.2,9.1-17,17.3-27.1,24.2c-2.5,1.7-3.7,3.7-4.4,6.6
	c-4.9,20.5-9.6,41.1-19,60.1c-5.3,10.6-12,20.2-22.5,26.4c-5.3,3.1-10.9,4.7-16.9,5.3c-2,0.2-4.7,0.7-4.1-2.4c0.6-3-3-8.1,2.4-8.9
	c14.6-2.1,23.2-11.3,29.7-23.3c9-16.6,13.3-34.7,18-53.5c-8.6,3.4-16.3,6.4-24.6,7.5c-28.7,4-52-9.7-64.3-37.5
	C44,424.7,46,400,54.7,375.4c11.5-32.6,31.1-60.3,53.2-86.4c26.9-31.9,57.1-60.5,89.3-87.1c1.7-1.4,3.3-2.8,5.3-4.4
	c-7.7-5.1-15.1-9.9-22.3-15c-11.1-7.9-21.3-16.7-28.7-28.4c-4.4-6.9-6.6-14.3-6.4-22.6c0.5-18-2-35.8-7.8-52.9
	c-2.6-7.5-5.6-14.6-12.9-19.5c-3.4-2.3-1.2-7.2,0.2-10.3c1.2-2.8,4.1-0.4,5.9,0.7c8.9,5,13.3,13.5,16.7,22.5
	c6.8,17.9,9.6,36.6,9.4,55.6c-0.1,11.2,3.5,20.2,10.9,28c12.4,13.1,27.2,23.2,42.8,32.2c0.8,0.5,2.2,1.2,2.6,0.9
	c4.8-3.8,11.7-6,13.7-11.9c4.8-14.3,12.5-26.5,23.7-37.7c-11.2-2.8-17.8-9.8-20.1-20.5c-1.5-6.9-1.5-13.8,0-20.7
	c3.4-15.2,12.9-25.7,26.6-31.7c35-15.4,70.4-15.5,105,0.9c19,9,28.1,26.2,26.1,45.6c-1.6,15.9-7.1,22.3-22.9,26.6
	c0.4,2.8,2.8,4.1,4.4,6c7.3,8.3,13.4,17.4,16.6,28c2.4,8.1,10.2,10.1,15.2,15.2c1.1,1.1,2.3-0.2,3.2-0.7
	c16.4-9.6,32.1-20.1,44.7-34.5c6.1-7,9.1-14.9,9-24.5c-0.1-19.6,2.5-38.9,9.5-57.4c3.4-9,7.8-17.6,16.9-22.3
	c1.7-0.9,4.4-3.1,5.5-0.5c1.4,3.2,3.6,8.2,0.4,10.4c-9,6-11.8,15.3-14.6,24.5c-4.4,14.3-7,29.2-6.2,44.1c0.8,15.2-5.3,27-15.2,37.5
	c-11,11.7-24.1,20.8-37.8,28.9c-4.2,2.5-4.7,3.6-0.6,7c35.7,29.4,69.2,61.2,98.3,97.4c21.1,26.3,39.9,54.1,49.1,87.2
	c6.2,22.2,6.1,44-4.1,65.2c-15.1,31.2-43.4,43.4-76.5,32.8c-4.1-1.3-8.1-3-13-4.8c5.5,20.9,9.9,41.4,21.4,59.5
	c6.1,9.6,14.2,16.4,26.1,18c5.8,0.8,2.1,5.8,2.6,8.7c0.6,3.4-2.3,2.2-4.1,2.1c-15.6-1.6-26.2-10.6-34.2-23.3
	c-11.1-17.4-16.5-37-21.2-56.7c-2.4-10.2-5.9-18-14.9-24.7c-19.9-14.8-34.3-34.8-46.4-56.3c-1-1.7-2-3.4-3.4-6
	c-1.7,6.9-3,13.1-4.7,19.1c-7.2,24.8-18.3,47.1-40.5,62.1c-33.5,22.7-80.8,14.6-105.4-17.7C230.7,445,223.6,423.4,219.2,398.9z"/>
<path :style="{fill:'rgba(220, 228, 234, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M504.4,475.9c-15.7-0.3-29.5-6.2-42.1-14.9c-24.8-16.9-42.7-39.8-56.4-66.1
	c-17.9-34.6-28.1-71.5-31.9-110.3c-0.9-9.5-1.3-19-2-28.6c-0.2-2.8,0.6-4.8,2.6-6.9c9.5-10.1,14-22.4,15.3-36
	c1.5-5.3,4.2-2.8,6.4-0.8c5.3,4.8,11,9.2,16.3,14c35,31.7,68,65.4,94.1,105.1c13,19.7,23.5,40.6,28.4,64c4.5,21.8,1.7,42.4-9.9,61.5
	C520,465.3,514.2,472.9,504.4,475.9z M223.4,210.8c2.3,15,6.6,29,17.8,40c1.7,1.6,1.3,3.7,1.2,5.6c-1.3,42.4-8.7,83.6-26.1,122.6
	c-14,31.3-32.8,59.1-60.9,79.7c-13.5,9.9-28.3,16.7-45.5,17.2c-12.5-4.4-18.9-14.6-24.3-25.6c-11.5-23-9.8-46.6-2-70.2
	c8-24.3,21.2-45.7,36.4-66.1c19.1-25.5,40.6-49,63.7-71c11.1-10.6,22.7-20.5,34.3-30.5C219.5,211.2,221.1,209.9,223.4,210.8z"/>
<path :style="{fill:'rgba(242, 42, 71, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M375.2,105.9c-0.3,21-14.2,28.5-29.4,19.2c-10.4-6.3-21.3-11.4-32.9-15.1c-4-1.3-7.6-1.3-11.6-0.1
	c-11.6,3.7-22.7,8.6-32.9,15.1c-5.8,3.7-12.1,3.9-18.4,2.7c-5.3-1-8.6-4.9-9.7-10.2c-3.1-13.9,0.4-25.6,11.7-34.6
	c11-8.7,24-12,37.5-13.9c22.7-3.2,44.9-1.3,65.6,9.1C367.8,84.5,375.3,94.7,375.2,105.9z"/>
<path :style="{fill:'rgba(198, 214, 224, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M223.4,210.8c-8.7,5.3-15.6,12.8-23.3,19.3c-14.7,12.5-28.5,26.1-41.5,40.4
	c-25.2,27.6-49.4,56-65.6,90.1c-8.3,17.6-14.6,35.8-14,55.4c0.7,24.6,9.5,45.6,30.9,59.8c-19.3,0.3-32.8-9.1-41.8-25.6
	c-11.1-20.4-11.6-41.6-5.2-63.4c8.4-28.8,24.5-53.3,42.7-76.6c16.9-21.7,35.8-41.6,55.7-60.5c18.4-17.6,37.6-34.3,57.5-50.2
	c1.2-1,2.5-1.7,4.5-3.1C223.4,201.9,223.4,206.3,223.4,210.8z M504.4,475.9c25.1-17.8,33.4-42.5,30-72.2
	c-3.5-30.4-18.2-55.8-35.1-80.3c-20.5-29.7-45.2-55.8-71.2-80.7c-10.9-10.4-22.5-20.1-33.6-30.2c-2.2-2-3.3-1.2-4.6,0.6
	c1.2-5.2,0.7-10.5,1.2-17c9.1,7.4,17.6,14.1,25.8,21.2c24.6,21.1,48.4,43.2,69.9,67.5c24.3,27.5,47.1,56,60.5,90.8
	c9.6,25,12.2,50.1-1.3,74.8C537.1,466.7,523.9,476.5,504.4,475.9z"/>
<path :style="{fill:'rgba(81, 76, 104, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M236.7,422.3c-4.5-13.4-7.1-27.1-7.3-41.3c0-2.5,0.8-4.7,1.6-6.9c6-15.5,11.2-31.3,14.3-47.7
	c1.2-6.4,11.5-15.5,18.4-16.9c2.1-0.4,2.9,1,3.9,2.1c13.4,13.2,30.1,14.8,47.5,13.4c12.2-1,23.3-4.5,31.6-14.4
	c1-1.2,2.1-1.5,3.6-0.7c8.9,4.5,17.5,8.6,19.3,20.5c1.6,10.5,5.4,20.6,8.1,30.9c1,1.8,0.3,3.6-0.3,5.1c-8.6,21.3-20.6,40-40.8,52.1
	c-9.3,5.6-19.5,8.2-30.5,9.2c-21,2-41.7,0-62.4-2.6C241,424.9,238.5,424.5,236.7,422.3z M236.5,212c-3-17.4-0.4-33.8,9.1-48.9
	c13.9-22.1,35.6-33.1,59.1-41.7c1.6-0.6,3.7-0.5,5.3,0c24,7.8,44.9,20,58.8,41.9c1.8,2.8,3.6,5.7,4.2,9.1
	c-2.5,18-12.5,30.9-27.7,40.1c-10.5,6.4-22.3,8-34.2,9.3c-21.6,2.3-42.8-0.3-63.7-5.3C243.5,215.7,239.4,215.2,236.5,212z
	 M271.4,292c-2.9-7.6-0.7-15.2,0.3-22.8c0.2-1.9,1.9-2.3,3.7-2c15.3,3.2,30.8,1.9,46.2,2c4.9,0,10-0.3,14.7-1.6
	c5.3-1.4,7.2,0.1,6.7,5.3c-0.6,5.7-4.3,9.7-8.3,13.3c-8.3,7.3-18.1,11.2-29.3,11.1c-8.3,0-16.6,0.3-24.8-1.6
	C277.4,294.9,273.9,294.6,271.4,292z"/>
<path :style="{fill:'rgba(100, 97, 126, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M236.7,422.3c7.8,1.2,15.6,3.1,23.4,3.4c11.7,0.5,23.4,2.4,35.1,1.3c10-1,20.1-0.8,29.8-4.6
	c18.3-7.1,30.9-20.2,41-36.5c4.8-7.8,8.7-16,11.8-24.6c10.6,16.7,7.2,34.1,2.9,51.6c-4.2,17.1-10.7,33.2-22.3,46.8
	c-19.5,23.1-53.2,30.4-80.4,16.8C255.3,465.1,244.1,445.2,236.7,422.3z M236.5,212c18.1,5.6,36.7,8.9,55.4,9.1
	c16.5,0.2,33.3-0.7,48.8-8c16.2-7.6,25.4-21,30.8-37.4c0.4-1.1,0.2-2.4,1.3-3.2c5.6,12,6.9,24.5,5.3,37.5
	c-1.1,8.5-2.7,16.9-7.1,24.3c-8.7,14.7-22.9,19.9-38.8,21.8c-13.4,1.7-26.9,1.4-40.4,1.1c-9.5-0.2-18.9-1.7-27.9-5
	C248.2,246.6,237.2,230.2,236.5,212z M271.4,292c9.3,1.9,18.5,3.5,28.1,3.8c19.2,0.7,33.9-6.1,43.5-22.9c5,22-4.7,37.4-26.8,39.6
	c-9.8,1-19.3,0.5-28.6-2.5C278.8,307.1,273.6,300.9,271.4,292z"/>
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
                                    <button :style="{background:'rgba('+getterFlyBg1+')'}" @click="ShowElement(getterFlyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFlyBg2+')'}" @click="ShowElement1(getterFlyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFlyBg3+')'}" @click="ShowElement2(getterFlyBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFlyBg4+')'}" @click="ShowElement3(getterFlyBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFlyBg5+')'}" @click="ShowElement4(getterFlyBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFlyBg6+')'}" @click="ShowElement5(getterFlyBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterFlyBg7+')'}" @click="ShowElement6(getterFlyBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Fly= [
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
            var randomNumber = Fly[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Fly[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Fly'){
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
                getterFlyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Fly') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Fly') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Fly') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterFlyBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlyBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlyBg7: {
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
                            name:'Fly',
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