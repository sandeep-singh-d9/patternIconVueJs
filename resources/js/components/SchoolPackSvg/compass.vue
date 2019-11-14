<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);"> 
                    <path style="display:none;fill:#FDFDFD; transform:scale(0.2)" d="M611.89,306.64c0,100.15-0.03,200.3,0.11,300.44c0.01,3.96-0.62,4.96-4.83,4.96
	c-200.69-0.14-401.39-0.14-602.08,0.01c-4.56,0-5.08-1.24-5.08-5.3C0.12,406.25,0.12,205.76,0,5.26C0,1.11,0.66,0,5.12,0
	c200.5,0.15,400.99,0.15,601.49,0C611.3,0,612,1.29,612,5.6C611.86,105.94,611.89,206.29,611.89,306.64z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M468.6,488.3c8.43,15.79,4.68,31.91,1.28,48.01c-1.05,4.95-0.67,9.69,0.8,14.61
	c2.83,9.5,5.19,19.15,7.62,28.77c1.58,6.25-0.99,11.29-6.31,12.83c-5.2,1.5-10.24-1.62-11.91-7.86
	c-21.01-78.42-54.38-152.47-81.02-228.89c-0.25-0.73-0.73-1.38-1.1-2.06c-4.41-5.6-5.42-12.72-8.44-18.95
	c-8.84-25.06-18.61-49.77-27.7-74.74c-2.06-6.24-4.44-12.37-6.92-18.46c-2.61-8.77-6.5-17.07-9.47-25.71
	c-1.35-3.92-1.12-7.11,1.51-10.51c7.29-9.43,14.32-19.05,21.52-28.55c1.41-1.86,2.74-4.31,5.54-3.85c2.57,0.43,2.83,3.08,3.55,5.07
	c3.58,9.89,7.28,19.75,10.77,29.67c1.91,6.02,4.41,11.84,6.36,17.85c0.67,2.06,1.66,4.04,0.93,6.3
	c12.4,34.34,24.81,68.67,37.21,103.01c4.36,5.6,6.59,11.98,6.97,19.04c13.86,38.88,27.55,77.82,42.33,116.36
	C466.02,475.64,468.15,481.67,468.6,488.3z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M234.05,353.7c-7.82,20.71-15.69,41.4-23.46,62.12c-7.37,19.63-14.64,39.3-21.96,58.95
	c-2.33,0.01-3.36-1.84-4.57-3.31c-6.77-8.19-15.28-12.04-25.97-10.67c-1.33,0.17-2.76,0.49-3.8-0.82
	c11.02-30.66,22.05-61.31,33.06-91.98c1.68-4.67,3.24-9.38,4.86-14.07c0.4-7.06,2.61-13.45,6.98-19.06
	c12.4-34.32,24.8-68.64,37.2-102.96c-1.13-4.26,1.79-7.55,2.74-11.31c1.12-4.41,3.29-8.49,4.56-12.87
	c3.53-9.91,7.18-19.78,10.77-29.67c0.72-1.99,0.98-4.64,3.53-5.1c2.8-0.5,4.14,1.94,5.55,3.81c7.31,9.66,14.5,19.4,21.84,29.03
	c2.31,3.04,2.54,5.92,1.39,9.43c-2.9,8.87-6.98,17.31-9.61,26.28c-2.58,6.06-4.8,12.25-6.94,18.48
	c-9.33,24.87-18.72,49.72-27.69,74.73C239.44,340.92,238.49,348.09,234.05,353.7z"/>
<path :style="{fill:'rgba(246, 195, 88, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M244.87,208.06c-2.83,7.95-5.66,15.89-8.49,23.84c-35.28-46.26-11.35-116.19,45.4-132.68
	c1.71-0.5,3.43-0.99,5.14-1.48c0.92-1.08,1.97-1.94,3.41-2.24c10.44-2.15,20.87-2.16,31.31,0c1.44,0.3,2.5,1.14,3.38,2.26
	c34.68,9.41,57.02,31.25,65.01,66.42c5.56,24.47,0.31,47.23-14.44,67.66c-2.82-7.93-5.65-15.86-8.47-23.79
	c-0.16-3.03,0.69-5.85,1.58-8.71c11.01-35.66-13.62-74.9-50.23-81.77c-34.89-6.54-71.36,16.35-77.24,55.18
	c-1.43,9.42-0.17,18.62,2.17,27.74C244.03,202.99,244.74,205.46,244.87,208.06z"/>
<path :style="{fill:'rgba(246, 195, 88, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M325.27,353.88c-0.05,8.13-0.27,16.26-0.08,24.38c0.08,3.41-0.98,4.38-4.35,4.31
	c-9.91-0.2-19.83-0.21-29.74,0.01c-3.41,0.08-4.39-0.94-4.31-4.32c0.19-8.12-0.02-16.25-0.08-24.38
	c-3.26-6.27-1.23-12.97-1.62-19.47c-0.39-10.52-0.26-21.03-0.09-31.55c0.11-6.59,1.65-8.11,8.15-8.27
	c8.73-0.22,17.47-0.27,26.19,0.03c5.87,0.2,7.45,1.71,7.59,7.58c0.25,10.71,0.33,21.43-0.05,32.14
	C326.51,340.86,328.55,347.59,325.27,353.88z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M325.02,97.76c-12.7-2.75-25.4-2.67-38.1-0.02c-0.01-21.51,0.03-43.01-0.1-64.52
	c-0.02-3.24,0.71-4.57,4.26-4.49c9.95,0.22,19.91,0.22,29.87,0c3.56-0.08,4.29,1.28,4.27,4.51
	C325.06,54.75,325.07,76.25,325.02,97.76z"/>
<path :style="{fill:'rgba(246, 195, 88, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M154.29,459.96c15.05-3.42,26.23,2.15,34.35,14.81c5.83,18.73,1.55,30.1-14.86,39.49
	c-8.71,8.77-31.85,0.97-35.18-10.42C129.01,484.08,134.36,469.14,154.29,459.96z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M138.59,503.84c9.4,11.32,20.95,15.39,35.18,10.42c-8.95,23.36-16,47.29-22.13,71.53
	c-1.36,5.37-6.77,8.12-11.61,6.73c-5.15-1.48-7.95-6.59-6.56-12.2c1.38-5.58,2.35-11.34,4.44-16.65c5.68-14.46,4.8-28.89,1.59-43.68
	C138.38,514.81,135.59,509.38,138.59,503.84z"/>
<path :style="{fill:'rgba(246, 195, 88, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M468.6,488.3c-2.69-5.83-5.01-11.78-6.49-18.04c7.57-2.96,15.09-6.04,22.72-8.83
	c3.09-1.13,4.55-2.14,2.92-5.84c-1.71-3.88-5.75-8.55-3.8-11.81c1.81-3.03,7.61-3.53,11.45-5.53c3.86-2.01,5.59-1.24,7.16,2.98
	c4.85,13,10.06,25.86,15.43,38.65c1.41,3.36,1.22,5.13-2.51,5.93c-0.96,0.2-1.87,0.66-2.79,1.03c-10.36,4.12-10.51,4.19-14.92-5.91
	c-1.35-3.08-2.66-3.11-5.36-1.98C484.53,482.2,476.54,485.2,468.6,488.3z"/>
<path :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M286.69,334.65c0.01,6.41,0.02,12.81,0.03,19.22c-17.56-0.06-35.11-0.12-52.67-0.17
	c1.8-6.61,4.17-13.01,7.19-19.17c1.84-1.36,3.96-1.7,6.17-1.72c11.07-0.08,22.14-0.1,33.2,0.02
	C282.79,332.85,285,332.94,286.69,334.65z"/>
<path :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M325.27,353.88c0-6.41,0-12.82,0-19.23c1.71-1.69,3.92-1.81,6.1-1.83
	c11.11-0.11,22.21-0.1,33.32-0.01c2.23,0.02,4.34,0.45,6.19,1.77c2.79,6.22,5.32,12.53,7.07,19.13
	C360.38,353.76,342.83,353.82,325.27,353.88z"/>
<path :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M199.18,334.86c-2.33,6.35-4.65,12.7-6.98,19.06c-8.36-0.03-16.76,0.47-25.07-0.23
	c-9.11-0.77-3.14-8.18-4.35-12.38c-0.76-2.63-1.85-6.94,4.16-6.72C177.68,334.97,188.44,334.8,199.18,334.86z"/>
<path :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M419.77,353.89c-2.32-6.35-4.65-12.7-6.97-19.04c10.75-0.05,21.5,0.01,32.25-0.21
	c3.34-0.07,4.37,0.9,4.45,4.33c0.35,14.84,0.47,14.83-14.2,14.88C430.13,353.86,424.95,353.88,419.77,353.89z"/>
<path style="fill:#FDFDFD; transform:scale(0.2)" d="M244.87,208.06c-15.41-29.95-0.46-70.61,31.75-86.39c25.06-12.28,54.78-7.76,75.33,11.45
	c19.86,18.56,26.36,48.17,16.12,73.46c-0.21,0.53-0.62,0.98-0.94,1.47c-4.33-11.47-8.66-22.94-12.99-34.42
	c-2.22-0.13-2.73,1.68-3.59,2.82c-7.66,10.16-15.13,20.46-22.93,30.51c-1.99,2.57-2.18,4.65-1.09,7.53
	c3.36,8.91,6.48,17.91,9.69,26.88c-0.73,2.1-2.5,3.02-4.37,3.76c-16.8,6.68-33.67,7.36-50.6,0.48c-2.2-0.9-4.53-1.7-5.48-4.23
	c3.24-8.96,6.53-17.9,9.67-26.89c0.67-1.92,1.82-3.77,0.04-6.08c-8.95-11.64-17.7-23.44-27.13-36
	C253.63,184.86,249.25,196.46,244.87,208.06z"/>
<path style="fill:#FDFDFD; transform:scale(0.2)" d="M370.88,334.57c-15.2,0.02-30.41,0.05-45.61,0.07c-0.05-11.31-0.23-22.62-0.07-33.92
	c0.05-3.36-0.87-4.41-4.3-4.34c-9.92,0.22-19.84,0.22-29.76,0.01c-3.4-0.07-4.37,0.96-4.33,4.34c0.14,11.3-0.05,22.61-0.12,33.92
	c-15.15-0.04-30.3-0.08-45.45-0.12c8.6-25.27,18.02-50.24,27.81-75.06c2.29-0.92,4.31,0.23,6.31,0.98c20.43,7.66,40.83,7.4,61.26,0
	c2.01-0.73,4.02-1.88,6.31-1.03c7.91,20.93,15.83,41.86,23.7,62.81C368.17,326.3,369.47,330.45,370.88,334.57z"/>
<path :style="{fill:'rgba(246, 195, 88, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M342.93,259.41c-24.62,11.23-49.25,11.19-73.88,0.05c1.64-6.25,3.98-12.24,6.71-18.09
	c20.15,9.85,40.3,9.84,60.46-0.01C339,247.18,341.27,253.18,342.93,259.41z"/>
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
                                    <button :style="{background:'rgba('+getterCompassBg1+')'}" @click="ShowElement(getterCompassBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCompassBg2+')'}" @click="ShowElement1(getterCompassBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCompassBg3+')'}" @click="ShowElement2(getterCompassBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCompassBg4+')'}" @click="ShowElement3(getterCompassBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCompassBg5+')'}" @click="ShowElement4(getterCompassBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Compass= [
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
            var randomNumber = Compass[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Compass[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Compass'){
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
                getterCompassBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Compass') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCompassBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Compass') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCompassBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Compass') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCompassBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCompassBg5: {
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
                            name:'Compass',
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