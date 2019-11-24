<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M273.5,0.1C300.9,8.7,322.1,27,343,45.5c38.3,33.9,73.3,71,102.5,113.1c3.9,5.6,7.5,11.5,10.9,17.5
	c6,10.5,9.4,21.4,9.4,33.9c-0.3,100-0.3,200,0,300c0.1,17.4,0,34.8,0.6,52.2c0.4,12.6-4.9,21.7-14.9,28.7
	c-13.8,9.7-29.3,15.5-45.4,19.5c-68.7,16.9-137,16.5-204.6-5.3c-11.2-3.6-21.7-8.7-31-16.2c-8-6.5-12.2-14.5-12.1-25.2
	c0.4-38.5,0.4-76.9,0.5-115.4c0-27.5-0.4-55.1-0.3-82.6c0.1-52.2,0.3-104.4,0.4-156.7c0-9.3,4.2-16.8,10.5-23.1
	c11.4-11.5,25.7-18,40.8-23c35.1-11.7,71.4-15.3,108.3-14.8c9.7,0.1,19.4,0.3,29.1,1.6c0.5-2.3-1.4-2.9-2.4-3.9
	c-27.3-26.8-53.5-54.7-75-86.6c-7.6-11.2-15-22.6-17.5-36.3c-2.1-11.6,0.8-17.3,11-22.7C267,0.1,270.2,0.1,273.5,0.1z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M194.6,453.6c14.8,1.5,29.7,3.2,44.5,4.6c25.4,2.5,45.7-19.8,44.3-42.2c-0.5-7.5,0.1-15-0.1-22.5
	c-0.5-19.9-16.6-36.8-36.5-38.9c-17.1-1.8-34.1-4-51.1-6c-2.1-2.3-1.9-5.2-1.9-8c0-27.3-0.1-54.6,0-82c0-2.8-0.3-5.7,1.9-8
	c28.8,12,59,17.2,90,19.4c40.6,2.8,80.6-0.1,119.8-11.1c5.4-1.5,10.8-3.3,16.2-4.9c2.2,2.3,1.9,5.2,2,8c0,88.5,0,177,0,265.5
	c0,2.9-0.2,5.7-2,8.1c-18.4,7.8-37.7,11.6-57.3,14.5c-19,2.8-38.2,4.2-57.3,3.6c-36.4-1.1-72.4-5.2-106.6-19
	c-1.7-0.7-3.2-1.6-4.8-2.5c-1.7-2-1.9-4.4-1.9-6.8c-0.1-22.6,0-45.2,0-67.8C193.8,456.3,193.8,454.9,194.6,453.6z M233.1,242
	c-16.1-3.4-31.5-8.7-44.9-18.6c-12.1-9-12.3-18.3-0.2-27.3c16.6-12.3,36-17.7,56-21.3c27-4.7,54.3-4.6,81.5-4
	c16.4,0.3,32.7,2.6,48.8,5.8c3,0.6,5.7,1.9,8.4,3.3c11.6,8.6,22.5,18.1,34.7,25.8c4.6,2.9,9.2,5.6,13.8,8.5c0.4,4.6-2.9,6.9-5.9,9.2
	c-10.3,7.9-22.6,11.6-34.9,15c-18.8,5.2-38.1,7.6-57.5,8.8c-6.2,0.4-12.4,1.3-18.7,1.4C287,249.1,259.9,247.5,233.1,242z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M421.7,535.7c0-93.9,0-187.8,0-281.6c7.7-3.9,15.7-7.1,23-12c2.1,2.1,1.2,4.4,1.2,6.5
	c0.1,88.6,0,177.2,0.2,265.8c0,6.1-2.2,10-6.9,13C433.6,530.7,427.9,533.7,421.7,535.7z M272.6,20.9c47.1,18.9,154.1,130,171,175.5
	c-2.5,0.8-4.2-1-5.9-2c-16.6-9.5-31.5-21.2-45.9-33.7c-37.9-32.8-73.1-68.1-102.3-109C282.8,42.5,276.6,32.8,272.6,20.9z
	 M445.8,548.6c0-1.9-1.2-1.8-2.3-0.6c-6.7,2.9-13.2,6.1-20,8.6c-27,9.8-55,14.4-83.6,16.1c-55.1,3.1-109.1-0.7-159.9-25l0,0
	c-0.2-0.1-0.4-0.2-0.6-0.2c-0.1,0-0.4,0.1-0.4,0.2c-0.1,4.8,0.2,9.7-0.3,14.5c-0.8,7,2.6,10.9,8.1,14.2c6.3,3.8,12.9,6.9,19.8,9.1
	c64,20.9,128.7,21.4,193.7,5.5c13.6-3.3,26.8-7.9,38.7-15.5c2.9-1.8,6.4-3.8,6.7-7.4C446.1,561.6,445.9,555.1,445.8,548.6z
	 M195.7,250.7c0,32.7,0,65.3,0,98c-4.6-0.4-9.2-0.8-13.8-1.1c-2.3-0.1-3.1-1.3-3.1-3.5c0-33.8,0-67.7,0-102.5
	C184.9,244.8,190.3,247.8,195.7,250.7z M194.6,453.6c1.4,2,1.1,4.2,1.1,6.5c0,24.1,0,48.2,0,72.2c-4.6-1.1-8.4-3.9-12.1-6.6
	c-3.3-2.4-4.8-5.7-4.8-9.9c0.1-19.8,0.1-39.5,0-59.3c0-4.1,1.7-4.9,5.1-4.3C187.4,452.7,191,453.1,194.6,453.6z M262.6,390.5
	c-1.4-8.4-9-15.1-17.5-16.1c-12-1.4-24-2.4-36-3.6c-5.7-0.6-11.3-1.9-17-1.6c-1.9-1-4-1.1-6.1-0.9c-1.5-0.1-3.1-0.3-4.6-0.4
	c-2.4,2.3-1.3,5.2-1.3,7.8c-0.5,1-0.8,2.2-0.7,3.5c0,11.9,0,23.8,0,35.7c0,9.2,0.1,9.5,9,10.6c17.4,2.2,34.8,3.9,52.2,6.1
	c6.7,0.8,13.8,1.1,19.5-4.1c1.5-1.5,2.2-3.4,2.5-5.4C264,411.8,264.3,401.1,262.6,390.5z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M339.7,191.8c-0.1,3.7-2,6.6-5.3,8.8c-16.9,11.2-33.6,22.4-50.5,33.5c-5.7,3.7-11.7,2.6-14.9-2.4
	c-3.2-5-1.8-10.7,4-14.6c16.6-11.1,33.3-22.2,50-33.3c3.6-2.4,7.4-3.4,11.4-1.2C337.8,184.6,339.6,187.6,339.7,191.8z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M344.8,232c-4.9-0.4-8.4-2.5-9.9-7.1c-1.7-5.2,0.4-9.1,4.6-12c12.4-8.3,24.9-16.6,37.4-24.9
	c0.7-0.4,1.4-0.9,2.1-1.2c5-2.1,9.2-1,12.4,3.3c3.2,4.3,3,9.6-1,12.6c-13.8,10.2-28,19.8-42.9,28.5
	C346.6,231.8,345.6,231.8,344.8,232z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M230.3,226.9c-5.1-0.3-8.6-2.3-10.1-6.5c-1.5-4.1-1-8.5,2.7-11c12.4-8.6,25-17.1,37.8-25.2
	c4.3-2.7,10.1-0.7,12.8,3.4c2.8,4.2,2,10.4-2.5,13.5c-12,8.3-24.1,16.2-36.3,24.2C233.4,226.2,231.5,226.5,230.3,226.9z"/>
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
                                    <button :style="{background:'rgba('+getterCannedBeerBg1+')'}" @click="ShowElement(getterCannedBeerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCannedBeerBg2+')'}" @click="ShowElement1(getterCannedBeerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCannedBeerBg3+')'}" @click="ShowElement2(getterCannedBeerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCannedBeerBg4+')'}" @click="ShowElement3(getterCannedBeerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCannedBeerBg5+')'}" @click="ShowElement4(getterCannedBeerBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var CannedBeer= [
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
            var randomNumber = CannedBeer[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  CannedBeer[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'CannedBeer'){
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
                getterCannedBeerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'CannedBeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCannedBeerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'CannedBeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCannedBeerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'CannedBeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCannedBeerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCannedBeerBg5: {
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
                            name:'CannedBeer',
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