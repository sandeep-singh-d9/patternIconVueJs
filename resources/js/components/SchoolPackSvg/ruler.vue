<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="display:none;fill:#FEFEFE;" d="M-6.64,297.15c0-99.88,0.03-199.75-0.11-299.63c-0.01-4.07,0.8-4.87,4.87-4.87
		c199.75,0.13,399.51,0.13,599.26,0c4.07,0,4.87,0.8,4.87,4.87c-0.13,199.75-0.13,399.51,0,599.26c0,4.07-0.8,4.87-4.87,4.87
		c-199.75-0.13-399.51-0.13-599.26,0c-4.07,0-4.88-0.8-4.87-4.87C-6.61,496.91-6.64,397.03-6.64,297.15z"/>
	<path :style="{fill:'rgba(105, 5, 137, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M144.87,579.28c-1.07-1.02-1.89-1.77-2.67-2.55C100.9,535.44,59.67,494.1,18.23,452.95
		c-3.65-3.62-0.9-4.88,1.07-6.85c75.69-75.71,151.4-151.41,227.1-227.11c66.57-66.57,133.17-133.11,199.63-199.8
		c3.56-3.57,5.31-3.68,8.93-0.03c40.09,40.38,80.34,80.6,120.68,120.71c3.4,3.38,4.04,5.12,0.23,8.93
		c-142.38,142.15-284.63,284.44-426.91,426.7C147.68,576.78,146.3,577.97,144.87,579.28z"/>
	<path :style="{fill:'rgba(252, 194, 76, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M226.29,268.47c1.16,1.04,2.17,1.88,3.1,2.8c5.22,5.16,10.49,10.28,15.59,15.55
		c1.85,1.91,3,2.06,5.13,0.13c11.22-10.13,11.29-10.06,0.68-20.59c-3.02-2.99-5.95-6.07-9.08-8.95c-1.86-1.72-1.97-3.11,0.04-4.65
		c0.15-0.12,0.28-0.27,0.42-0.4c3.89-3.73,7.48-10,11.76-10.51c4.52-0.53,7.92,6.38,11.75,10.08c8.48,8.18,16.89,16.45,25.05,24.94
		c2.71,2.82,4.2,2.54,6.81-0.07c9.77-9.75,9.86-9.65,0.09-19.36c-9.05-8.99-17.99-18.07-27.19-26.9c-2.57-2.47-2.85-4.04,0-6.34
		c4.16-3.35,7.23-10.35,11.83-10.08c3.96,0.23,7.64,6.39,11.33,10.03c10.05,9.92,9.93,9.85,19.92-0.18
		c2.55-2.55,2.58-3.94-0.04-6.36c-5.4-4.97-10.4-10.36-15.71-15.43c-1.98-1.89-1.96-3.04-0.07-5.11
		c11.64-12.8,11.58-12.85,23.61-0.89c8.5,8.44,17.1,16.78,25.43,25.38c2.49,2.57,3.85,2.52,6.4,0.01
		c10.07-9.92,10.17-9.82,0.15-19.78c-9.04-8.99-18.02-18.05-27.18-26.92c-2.3-2.23-2.68-3.68-0.08-5.92
		c4.07-3.51,7.54-9.73,11.87-10.31c4.1-0.55,7.59,6.21,11.27,9.81c10.42,10.18,10.28,10.16,20.34-0.15
		c2.26-2.32,2.47-3.66,0.03-5.93c-5.37-5-10.38-10.39-15.71-15.43c-2.14-2.02-2.52-3.41-0.12-5.51c3.19-2.8,6.3-5.76,9.03-8.99
		c2.51-2.97,4.05-2.16,6.39,0.22c10.99,11.14,22.24,22.02,33.19,33.2c2.63,2.68,4.09,2.8,6.82,0.07c9.83-9.82,9.94-9.71,0.21-19.37
		c-9.05-8.99-18.01-18.06-27.19-26.91c-2.46-2.37-3.08-3.91-0.15-6.35c3.11-2.59,6.03-5.48,8.62-8.57c2.48-2.95,4.07-2.29,6.39,0.18
		c4.9,5.2,10.22,10.01,15.11,15.21c2.33,2.48,3.69,2.1,5.97-0.1c10.33-9.97,10.41-9.9,0.47-19.77c-0.41-0.41-0.85-0.79-1.23-1.23
		c-3.11-3.62-10.16-7.14-9.06-10.3c1.77-5.1,7.61-8.81,11.77-13.07c2.34-2.39,3.41,0.24,4.58,1.39
		c11.15,10.98,22.32,21.94,33.27,33.12c2.74,2.8,4.29,3.14,7.24,0.14c9.57-9.72,9.71-9.59-0.15-19.38
		c-8.91-8.85-17.75-17.77-26.77-26.5c-2.51-2.43-3.34-3.97-0.25-6.78c6.29-5.71,12.23-11.81,18.12-17.94
		c2.13-2.21,3.4-2.13,5.55,0.01c34.06,33.97,68.18,67.88,102.38,101.71c2.24,2.22,2.22,3.68-0.15,5.48
		c-0.76,0.58-1.38,1.35-2.06,2.03c-138.14,137.26-276.31,274.5-414.34,411.86c-3.85,3.83-5.73,4.21-9.78,0.14
		c-32.83-33.01-65.9-65.79-99.05-98.49c-3.21-3.16-3.46-4.96-0.02-8.03c5.62-5.01,11.05-10.29,16.01-15.93
		c3.4-3.87,5.43-3.22,8.51,0.22c4.37,4.89,9.43,9.16,13.84,14.01c2.53,2.78,3.96,2.27,6.39-0.13c10.01-9.86,10.06-9.75,0.04-19.79
		c-3.66-3.66-9.86-7.39-10.01-11.27c-0.17-4.53,6.83-7.6,10.21-11.74c2.44-2.98,4-2.24,6.38,0.16
		c10.98,11.14,22.23,22.03,33.19,33.2c2.6,2.65,4.05,2.87,6.82,0.11c9.84-9.84,9.96-9.73,0.25-19.37
		c-8.91-8.85-17.72-17.8-26.79-26.49c-2.78-2.66-3.55-4.46-0.18-7.19c2.99-2.42,5.75-5.2,8.22-8.15c2.44-2.91,4.04-2.37,6.39,0.14
		c4.89,5.21,10.21,10.01,15.11,15.21c2.3,2.45,3.66,2.17,5.97-0.06c10.36-9.99,10.44-9.91,0.09-20.18c-2.6-2.59-5.02-5.4-7.87-7.7
		c-3.36-2.71-2.76-4.66,0.2-7.17c3.8-3.23,7.05-9.18,11-9.6c4.19-0.44,7.36,5.94,10.91,9.39c8.74,8.47,17.39,17.04,25.89,25.75
		c2.36,2.42,3.71,2.84,6.4,0.19c10.17-9.99,10.28-9.88,0.31-19.79c-8.91-8.85-17.75-17.77-26.77-26.51
		c-2.47-2.4-3.57-4.07-0.27-6.77c4.01-3.28,7.32-9.54,11.42-9.98c4.32-0.45,7.65,6.16,11.33,9.75
		c10.72,10.46,10.57,10.45,20.77-0.39c2.21-2.35,1.83-3.56-0.23-5.52c-5.18-4.92-10-10.23-15.32-15c-3-2.69-2.63-4.39,0.15-6.77
		c2.93-2.51,5.73-5.23,8.21-8.16c2.38-2.82,3.92-2.48,6.39,0.04c10.82,11.03,21.96,21.75,32.77,32.8c2.83,2.9,4.42,3.63,7.67,0.26
		c9.32-9.66,9.5-9.48-0.06-18.99c-9.17-9.12-18.26-18.32-27.57-27.3c-2.41-2.33-2.43-3.75,0.05-5.93c3.33-2.93,6.33-6.23,9.5-9.35
		C224.6,269.83,225.35,269.27,226.29,268.47z"/>
	
		<!-- <rect x="320.81" y="92.13"  :style="{fill:'rgba(105, 5, 137, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" width="30.25" height="476.78"/> -->
	<path :style="{fill:'rgba(252, 224, 106, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M508.23,171.12c-0.59,0.73-0.99,1.3-1.45,1.79c-0.85,0.91-1.74,1.78-2.62,2.66
		c-106.93,107.06-213.89,214.1-320.7,321.29c-3.74,3.75-5.49,3.48-8.79-0.3c-8.47-9.69-8.65-9.51,0.48-18.65
		c105.3-105.42,210.62-210.82,315.79-316.38c3.92-3.94,6.06-3.91,9.13,0.35c1.87,2.59,4.31,4.73,6.47,7.1
		C507.11,169.61,507.6,170.32,508.23,171.12z"/>
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
                                    <button :style="{background:'rgba('+getterRulerBg1+')'}" @click="ShowElement(getterRulerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRulerBg2+')'}" @click="ShowElement1(getterRulerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRulerBg3+')'}" @click="ShowElement2(getterRulerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterRulerBg4+')'}" @click="ShowElement3(getterRulerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRulerBg5+')'}" @click="ShowElement4(getterRulerBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Ruler= [
            {top:472 ,left:44},
            {top:464 ,left:57},
            {top:18 ,left:151},
            {top:294 ,left:104},
            {top:310 ,left:36},
            {top:21 ,left:79},
            {top:466 ,left:93},
            {top:512 ,left:41},
            {top:418 ,left:125},
            {top:294 ,left:52},
        ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Ruler[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Ruler[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Ruler'){
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
                getterRulerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ruler') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRulerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ruler') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRulerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ruler') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRulerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterRulerBg5: {
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
                            name:'Ruler',
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