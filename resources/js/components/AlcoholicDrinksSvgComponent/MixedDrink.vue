<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M314.9,130.7c9.7,0.1,19.4,0.2,29.1,0.3c9.4,0.1,12.1,2.1,13.3,11.3c4.1,31.2,8.1,62.4,12.1,93.7
	c5.4,42.1,10.9,84.3,16.2,126.4c3.4,27.2,7.6,54.3,9.9,81.6c6.3,72.7-43.8,140.8-115.1,157.3c-7.1,1.6-14.4,2.8-21.7,3.5
	c-3.8,0.4-5,1.3-5,5.3c0.2,18.8,0.3,37.6,0,56.3c-0.1,4.5,1.2,5.8,5.7,5.8c28.5-0.2,57-0.1,85.5,0c7.5,0,11,2.8,11.6,8.4
	c0.6,4.8-2.8,7.3-5.4,10.2c-70.9,0-141.8,0-212.6,0c-4.6-2.8-7.9-6.4-6.1-12.1c1.8-5.8,6.6-6.6,12-6.6c28.1,0.1,56.1-0.1,84.2,0.1
	c5.3,0,6.4-1.6,6.4-6.6c-0.3-18.3-0.2-36.7,0-55.1c0-4-0.9-5.4-5.1-5.9c-42.6-4.8-77.7-23.6-104.1-57.5
	c-25.7-33-35.6-70.8-30.5-112.4c5.5-44.5,10.6-89.1,16.2-133.6c3.9-31.5,8.2-62.9,12.4-94.3c0.2-1.7,0.2-3.4,0.3-5.1
	c-2.1-7.5,1.3-14.7,1.2-22c1.9-12.5,3-25,4.9-37.5c0.9-5.6,2.7-10.4,9-11.9c21.3-0.6,42.6-0.1,63.9-0.2c15.9-0.1,31.8,0.1,47.7-0.7
	c6.3-0.3,12.5,2.9,19,1.9c1.7-0.3,3.4,0.2,5.1-0.3c7.3-0.1,14.5-0.2,21.8-0.3C302.9,127.6,308.9,127.6,314.9,130.7z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M228,150.5c21.6,0,43.1,0,64.7,0c2.2,2.3,0.9,4.9,0.5,7.3c-5.7,32.5-11.3,64.9-17.1,97.4
	c-0.5,2.6-0.2,5.7-3,7.5c-40.5,0.1-81,0.2-121.5,0.2c-0.6,0-1.3,0-1.9,0c-13.8-0.1-13.8-0.1-12-13.5c2.6-19.4,5.2-38.8,7.8-58.2
	c1.3-2.4,3.3-3.9,5.8-5c22.9-9.7,44.3-22.5,67.1-32.4C221.4,152.5,224.6,151.2,228,150.5z M311.8,150.4c7.3-0.1,14.7,0.3,22-0.3
	c4.9-0.4,6.2,1.6,6.7,6c2.6,21.6,5.4,43.3,8.1,64.9c1.6,12.4,3.1,24.8,4.9,37.2c0.5,3.7-0.3,4.8-4.2,4.8
	c-19.2-0.2-38.4-0.2-57.7-0.3c-2.1-2.8-0.8-5.9-0.3-8.7c5.5-31.8,11.3-63.6,16.8-95.5C308.8,155.5,309.1,152.4,311.8,150.4z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M314.9,130.7c-6,0-12,0-18,0c1.6-16.1,5.3-31.8,8.1-47.7c0.5-3.1,3.1-5,6-6.3
	c34.9-16.2,69.9-32.4,104.8-48.5c6.3-2.9,9.7-1.5,14.6,5.2c0,2.2,0,4.3,0,6.5c-2.7,3.9-6.7,5.8-10.8,7.7
	c-30.8,14.1-61.4,28.3-92.3,42.3c-3.9,1.8-5.9,4-6.5,8.4C319.2,109.1,316.9,119.9,314.9,130.7z M127,180c0.1,7.4-1.1,14.6-2.6,21.8
	c-24.8,12-49.7,24-74.5,36.1c-11,5.3-14.2,4.3-19.7-6.8c-7-14.3-12.1-29-10.8-45.3c1.2-15-1.7-30.1,2.3-45
	C34.6,93.2,77.3,56,126.6,50.2c54.5-6.5,105.8,20.4,128.7,69.5c4.9,10.4,10.7,12.1,20,11.5c-19.2,0.2-38.3,0.5-57.5,0.6
	c-26.3,0.1-52.6,0.1-79,0.1c1.7-4.2,5.4-2.7,8.3-2.7c23.8-0.1,47.5-0.1,71.3-0.1c3,0,6.1,0.1,9-0.8c6.7-2,7.4-3.9,3.4-9.5
	c-7.2-10.2-16.5-18.4-26.8-25.1C141.4,53,57.3,87.1,42.5,162.4c-3.1,16-2.6,31.8,1.8,47.5c1.8,6.3,2.6,6.8,8.5,3.8
	c21.8-11,44.1-21,65.8-32.1C121.1,180.3,123.7,177.9,127,180z M311.8,150.4c-6.7,37.4-13.3,74.8-20,112.3c-6.3,0-12.5,0-18.8,0
	c6.5-37.4,13.1-74.8,19.6-112.2C299.1,150.5,305.5,150.5,311.8,150.4z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M228,150.5c-27.5,13.6-55.1,27.1-82.6,40.7c1.1-8.6,2.3-17.1,3.4-25.7c5.9,0,10.4-3.8,15.4-6.1
	c4.5-2,8.8-4.5,13.3-6.4c1-0.1,0-1.2,0.3-0.4c0.1,0.2-0.1,0.3-0.6,0.3c-8.9-0.2-18,1.9-26.7-1.4c0.5-1.8,2-1.3,3.2-1.3
	C178.5,150.2,203.2,150.4,228,150.5z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M378,449.8c-0.7-22.1-5-44-7.7-66c-2.4-19-4.8-38-7.3-56.9c-2-14.9-4.1-29.7-6.2-44.6
	c-1.8-1.1-3.8-0.6-5.7-0.6c-70.5,0-141.1,0-211.6,0c-1.9,0-3.9-0.4-5.7,0.6c-1.9,7.8-2.2,15.8-3.2,23.7c-2.9,22.6-5.8,45.2-8.7,67.8
	c-2.4,19-4.7,38-7.4,56.9c-2.5,17.9-2.6,35.6,1.5,53.3c16.3,69.9,85.1,114.4,154.8,100.5C334.9,571.8,380.2,515.4,378,449.8z
	 M127,180c2.8-12.3,3.5-24.9,5.2-37.4c0.7-4.8,1.9-8.7,6.6-10.8c2-2,4.5-1.2,6.8-1.2c24.6-0.1,49.3-0.1,73.9,0
	c5.1,0,9.7-0.9,14.3-3.2c2.9-1.4,3.4-2,1.6-4.9c-18-27.9-44.2-43.6-76.5-47.2c-34.5-3.9-65.3,6.1-89.6,32.2
	C40.6,138,32.6,173.6,43.5,213.8c1.3,4.7,3,5.1,7.2,3c23-11.5,46.1-22.7,69.1-34C122.1,181.8,124.2,180.1,127,180z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M148.8,165.4c0.5,2.1,1.4,2.9,3.6,1.8c9.7-5,19.5-9.8,29.2-14.7c-0.1-0.4-0.2-0.7-0.3-1.1
	c-10.3,0-20.5,0-30.8,0C150,156.1,149.4,160.8,148.8,165.4z"/>
<path style="fill:#6ECCD0;transform:scale(0.2)" d="M356.8,282.4c-74.3,0-148.7,0-223-0.1c1.5-2.4,3.9-1.2,5.9-1.2c70.4,0,140.7,0,211.1,0.1
	C352.8,281.2,355.1,280.3,356.8,282.4z"/>
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
                                    <button :style="{background:'rgba('+getterMixedDrinkBg1+')'}" @click="ShowElement(getterMixedDrinkBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMixedDrinkBg2+')'}" @click="ShowElement1(getterMixedDrinkBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMixedDrinkBg3+')'}" @click="ShowElement2(getterMixedDrinkBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMixedDrinkBg4+')'}" @click="ShowElement3(getterMixedDrinkBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMixedDrinkBg5+')'}" @click="ShowElement4(getterMixedDrinkBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var MixedDrink= [
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
            var randomNumber = MixedDrink[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  MixedDrink[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'MixedDrink'){
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
                getterMixedDrinkBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MixedDrink') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMixedDrinkBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MixedDrink') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMixedDrinkBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MixedDrink') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMixedDrinkBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMixedDrinkBg5: {
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
                            name:'MixedDrink',
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