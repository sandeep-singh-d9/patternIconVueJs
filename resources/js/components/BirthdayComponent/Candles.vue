<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M203,374.5c0-52.6,0.1-105.3-0.1-157.9c0-11.9,4.2-21.2,13.7-28.2c11.1-8.1,20.7-18.1,33-24.7
	c2.6-1.4,1.9-3.3,1.9-5.1c0.1-10.3,0.2-20.7-0.1-31c-0.1-4,0.7-5.6,5.2-5.5c14.4,0.2,14.4,0,14.4,14.4c0,8.1-2.4,17.3,0.7,24
	c3,6.4,11.7,10,17.9,14.9c5.9,4.6,11.7,9.3,17.6,14c8.3,6.6,12.4,15.1,12.4,25.8c0,106.5,0,213,0,319.4c0,14.5-9.3,26.4-23.4,30.1
	c-23.2,6-46.4,6.1-69.5,0c-14.4-3.8-23.6-15.5-23.6-30.5C203,480.9,203,427.7,203,374.5z M358.5,408.8c0-41.7,0.1-83.4,0-125.1
	c0-10.9,3.8-19.8,12.6-26.3c11.5-8.6,21.6-19,34.4-25.8c2.5-1.4,1.6-3.5,1.7-5.3c0.1-10.5,0.2-21.1,0-31.6c-0.1-3.2,0.6-4.5,4.2-4.6
	c15.3-0.3,15.3-0.4,15.3,14.7c0,7.5,0,15,0,22.5c0,2.1,0.4,3.4,2.6,4.7c13.6,8.2,25.5,18.6,37.3,28.9c6,5.2,8.6,12.6,8.6,20.7
	c0,84.6,0,169.2,0,253.8c0,13.4-9.7,25.6-22.5,29c-23.6,6.2-47.1,6.4-70.7,0.2c-14.1-3.7-23.3-15.5-23.3-30.2
	C358.5,492.6,358.5,450.7,358.5,408.8z M164.2,409c0,39.9-0.6,79.8,0.2,119.6c0.4,19.3-8.3,34.2-31.4,38.1
	c-21.3,3.6-42.2,3.3-63.1-2.2C57.3,561.1,47.6,549,47.6,536c-0.1-84.8-0.1-169.6,0-254.4c0-9.2,3.8-17.1,11-22.7
	c11.8-9.2,22.6-19.7,35.7-27c2.5-1.4,1.8-3.4,1.8-5.2c0.1-10.7,0.1-21.5,0-32.2c0-3.1,0.7-4.1,4-4.2c15.5-0.5,15.5-0.6,15.5,15.1
	c0,7.9-2,16.5,0.6,23.5c2.5,6.9,11.9,9.2,17.6,14.4s12,9.6,18,14.4c8.3,6.6,12.4,15.1,12.4,25.8C164.1,325.2,164.2,367.1,164.2,409z
	 M310.1,103.5c-0.3,12-2.1,22.3-7.1,31.8c-3.9,7.3-9.7,12.2-17.5,15.1c-3.4,1.3-5.2,1.3-5-3.2c0.3-7.5,0.1-14.3,5.1-21.5
	c7.3-10.2,6.3-22.8,3.2-34.6c-4.2-15.9-14.2-28.4-25-40.3c-1.4-1.6-2.6-2.4-4.4-0.4c-14.9,16.7-28.5,34-27.1,58.2
	c0.5,8.2,2.2,16,8.2,22.2c1.5,1.5,2.6,17.6,1.6,19.4c-1,1.8-2.5,0.8-3.7,0.4c-8.6-2.7-15.1-8-18.9-16c-9.1-19.4-9.1-39.1-0.6-58.7
	c8.1-18.7,20.8-34.1,35.5-47.9c4.3-4.1,9.5-4.5,13.7-0.4c19.4,18.8,36.4,39.2,41.3,66.9C309.9,98,309.9,101.4,310.1,103.5z
	 M154.6,171.3c-0.3,12.3-2,22.8-7.3,32.5c-4.1,7.4-10.2,12.4-18.3,15c-2.9,1-4,0.4-4-2.8c0.2-7.7-0.1-14.7,5-22.1
	c7.4-10.6,6.4-23.5,2.9-35.7c-4.4-15.4-14.1-27.6-24.6-39.2c-1.7-1.9-3-2.2-4.9-0.1c-11.8,13.2-23,27-26,45.1
	c-2.1,12.6-1.3,24.7,7.6,35.6c4.2,5.1,1.3,12.5,1.4,18.8c0,1.9-2.2,1-3.5,0.6c-8.1-2.5-14.5-7.3-18.3-14.9
	c-10.1-20.1-9.9-40.6-0.9-60.9c8.1-18.2,20.6-33.3,35-46.8c4.4-4.1,9.5-4.6,13.7-0.5c19.4,18.8,36.4,39.2,41.4,66.9
	C154.4,165.9,154.4,169.4,154.6,171.3z M436,208.5c-0.9-4.5,1.4-8.7,4.4-13.3c7.4-11.4,7.1-24.2,3.6-36.9
	c-4.3-15.4-14-27.6-24.5-39.2c-1.2-1.3-2.4-3.1-4.4-0.9c-14.1,15.9-27.5,32.1-27.4,55c0,9.5,1.4,18.6,8.4,25.8
	c1.4,1.5,2.4,18.1,1.3,19.5c-1.2,1.5-2.5,0.5-3.8,0.1c-8.8-2.8-15.3-8.4-19-16.7c-8.9-19.8-8.6-39.6,0.3-59.3
	c8.1-18,20.5-32.9,34.7-46.3c4.3-4.1,9.4-4.8,13.7-0.8c19.8,19,37.2,39.7,41.7,68c2.1,13.2,0.1,26.2-5.7,38.5
	c-3.6,7.6-9.5,13-17.3,16.2c-3.9,1.6-6.7,1.9-5.9-3.8C436.2,212.7,436,211.1,436,208.5z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M300.2,375.1c0,52.8,0,105.7,0,158.5c0,8.8-1.4,10.4-9.8,12.6c-19.6,5.1-39.2,4.9-58.8-0.1
	c-7.6-2-9.2-3.9-9.2-11.8c0-106.3,0-212.6-0.1-318.8c0-4.7,1.4-8,5.2-10.9c8.9-6.7,17.4-13.8,26.2-20.7c5.9-4.6,9.2-4.6,15.2,0
	c8.8,6.9,17.3,14,26.2,20.7c4,3,5.2,6.6,5.2,11.5C300.2,269,300.2,322,300.2,375.1z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M455.7,409.6c0,41.3,0,82.6,0,123.9c0,8.7-1.5,10.6-9.7,12.7c-19.6,5.1-39.2,5-58.8-0.1
	c-7.7-2-9.3-4-9.3-11.8c0-83.8,0-167.6-0.1-251.4c0-4.2,1.2-7.3,4.6-9.9c9-6.9,17.8-14.1,26.7-21.1c6-4.7,9.3-4.7,15.2-0.1
	c8.8,6.9,17.3,14,26.2,20.7c3.7,2.8,5.3,6.1,5.3,10.8C455.7,325.4,455.7,367.5,455.7,409.6z M144.7,408.8c0,41.5,0,83,0,124.5
	c0,9.2-1.3,10.7-10.1,12.9c-19.6,5.1-39.2,4.9-58.8-0.2c-7.3-1.9-8.9-3.9-8.9-11.4c0-83.8,0-167.6-0.1-251.4c0-4.5,1.3-7.6,4.9-10.4
	c9-6.9,17.8-14.1,26.7-21.1c5.7-4.5,9-4.5,14.6,0c8.7,6.9,17.3,14,26.2,20.7c4,3,5.5,6.4,5.5,11.3
	C144.7,325.4,144.7,367.1,144.7,408.8z"/>
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
                                    <button :style="{background:'rgba('+getterCandlesBg1+')'}" @click="ShowElement(getterCandlesBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCandlesBg2+')'}" @click="ShowElement1(getterCandlesBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCandlesBg3+')'}" @click="ShowElement2(getterCandlesBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCandlesBg4+')'}" @click="ShowElement3(getterCandlesBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCandlesBg5+')'}" @click="ShowElement4(getterCandlesBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Candles= [
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
            var randomNumber = Candles[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Candles[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Candles'){
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
                getterCandlesBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Candles') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCandlesBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Candles') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCandlesBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Candles') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCandlesBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCandlesBg5: {
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
                            name:'Candles',
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