<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="fill:#8B3222;transform:scale(0.2)" :class="ValueId+'_color4'" d="M65.1,454c2.9-12.7,6.1-25.3,8.6-38c2.4-12.2,9.3-21,19.2-27.9c18.9-13.4,40.6-20.5,62.7-26.1
	c23.5-5.9,47.3-10.4,71.6-11.4c2.1-0.1,3.8-1.7,6-0.9c2.4,2.3,2.2,5.3,2.2,8.1c0.1,59.6,0.1,119.2,0,178.8c0,2.9,0.2,5.9-2,8.2
	c-18.6-2.2-36.2-7.8-53.6-14.3c-43.3-16.1-80.8-41.1-113.3-73.9C65.5,455.8,65.3,455,65.1,454z M340.9,357.8
	c-0.1,59.6-0.1,119.2,0,178.8c0,2.8-0.3,5.9,2,8.2c1.2,0,2.5,0.1,3.7-0.2c47.9-9.4,91.3-28.9,130-58.6c12.5-9.6,24.8-19.5,34.6-32
	c-2.6-7.4-4-15.2-4.9-23c-3-26-16.8-42.9-40.6-53.4c-24.3-10.7-49.5-17.3-75.4-22.1c-15.6-2.9-31.4-4.7-47.3-5.9
	C340.6,351.9,340.9,354.9,340.9,357.8z"/>
<path style="fill:#FFC261;transform:scale(0.2)" :class="ValueId+'_color5'" d="M343,349.6c0,58.4-0.1,116.9-0.1,175.3c0,6.6,0,13.3,0,19.9c-11.8,3.1-24,4.1-36.2,4.7
	c-22.5,1.2-45.1,0.5-67.4-3.3c-2-0.4-4-0.9-6-1.4c0-63.6,0-127.2,0-190.8c0-1.4-0.1-2.9-0.2-4.3c2.1-0.1,4.2-0.2,6.3-0.3
	c3,3.9,3.1,8.5,2.9,13c-0.3,8.1,3.6,13.7,9.8,18.3c6.3,4.6,13.6,7.2,21.2,8.4c16.9,2.5,33.4,1.8,48.7-7.2c8.7-5.1,12.7-12.6,13-22.5
	c0.1-3.4-1.1-7.1,1.8-10C338.9,349.4,340.9,349.5,343,349.6z"/>
<path style="fill:#B17D5B;transform:scale(0.2)" :class="ValueId+'_color2'" d="M236.9,313.4c-3.6-6.1-10.3-8.7-15.3-13.2c-13.6-12-22.7-26.7-27.8-43.9c-1.5-4.9-2.9-9.9-4-14.9
	c-1.2-6.1-2.5-11-9.4-14.1c-6.7-3-7.8-11.2-9.6-18c-3.3-12-5.1-24.2-5-36.7c0.1-9.3,3.2-16.1,12.6-18.8c8-3.1,12.2-0.5,13.1,8
	c0.8,8.2,1.1,16.4,3.3,24.5c0.4-6.7,2.1-13.3,2-20.1c-0.3-15.8,3.3-30.9,9.2-45.4c1.6-3.9,3.2-8.3,8.8-4c1.8,1.4,3.5-0.2,5-1.3
	c28.5-21.1,61.5-29.1,95.9-32.9c5.3-0.6,10.7-1.3,16.1-1.3c20.4-0.3,35.3,15.2,42.7,28.9c1.1,2,1.2,4.4,1.4,6.7
	c2.1,22.7,4.5,45.4,5.1,68.1c0,0.6,0.1,1.2,1.2,2.3c1.9-7.1,1.7-14.1,2.6-20.9c0.4-2.7,0.4-5.4,1.2-8c0.4-1.4,0.8-3.5,2-3.7
	c7.2-1.4,7.9-7.6,10.1-12.8c1.1,1.5,0.8,3.2,0.8,4.8c-0.1,4.7,0,8.5,5.7,10.7c4.3,1.6,5.4,6.7,5.7,11.1c1.2,17.8-1.6,35-8.1,51.6
	c-1.5,3.8-3.7,7.8-8.1,8.9c-4.4,1.1-5.4,4-6.3,7.8c-4.1,18-8.8,35.8-20.9,50.5c-6.3,7.7-13.4,14.7-21.7,20.2
	c-2.9,1.9-4.9,4.2-5.8,7.5c-6.6,1.3-12.5,4.7-18.3,7.5c-22.9,11-45.4,9.7-68-0.5C247.4,319.1,242,316.5,236.9,313.4z"/>
<path style="fill:#9F7153;transform:scale(0.2)" :class="ValueId+'_color3'" d="M236.9,313.4c4.7-0.9,7.8,2.7,11.6,4.4c13.8,6.2,27.8,11.3,43.4,10.4c5-0.3,9.9-1,14.5-2.7
	c9.9-3.5,20-6.5,29-12.2c1.6-1,3.5-2,3.9,1.2c-0.1,11.6-3.2,23-2.4,34.7c-0.6,7.9,1.1,16.2-3.4,23.6c-6,10-15.8,14.4-26.4,16.7
	c-19.3,4.2-38.2,3.9-55.4-7.4c-7.2-4.7-11.6-10.9-11-20c0.3-4.3-0.7-8.6-1.1-12.9C240.3,337.2,237.3,325.4,236.9,313.4z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M397.9,141.5c-0.1,1.7-0.3,3.3-0.2,4.9c0.4,4.5,0.4,8.3-6.1,7.4c-3.5-0.5-4.2,2.6-4.5,5.5
	c-1.1,10.5-2.2,20.9-3.4,31.4c-3.9-0.1-4.9-1.9-4.9-5.2c-0.2-23.6-3.1-47.1-5-70.6c-0.2-2.5-0.7-5-2.1-7
	c-11.4-16.4-25.5-27.2-47.2-25c-27.5,2.8-54.4,7.8-79.8,19.5c-8.7,4-17.2,8.2-24.4,14.6c-5.2,4.7-5.4,4.5-9.7-2
	c-5.8,11-9.4,22.3-11,34.2c-1.6,12.1-1.9,24.3-2.3,36.5c-0.1,2.6-0.6,4.9-3.4,4.9c-2.8,0-1.7-2.7-1.8-4.3c-1-8.8-1.9-17.7-2.6-26.6
	c-0.6-8.1-6.8-5.3-11.3-6.1c-0.6-30.7,1.7-60.9,15.2-89.2c13.4-28.2,36.4-43.1,66.8-47.7c20.5-3.1,40.9-3,61.2,1.1
	c33.6,6.6,55,27.1,66.2,58.9C395.1,97.6,397.3,119.4,397.9,141.5z M252.9,250.9c-9,2.5-11.4,6.4-9.6,15.5c0.9,4.8,3.5,5.7,7.3,2.5
	c21.4-18.1,53.9-18.1,74.9,0c3.7,3.2,6.3,2.3,7.3-2.5c1.8-9.2-0.6-12.8-9.6-15.6c-14.6-4.5-29.6-3.4-46.4-3.7
	C270,247.6,261.4,248.6,252.9,250.9z M265.8,142.4c-11.5-5.9-23.9-7.8-36.7-7.3c-7.8,0.3-15.2,2.3-21.5,7.1
	c-1.9,1.4-3.7,3.2-2.5,5.7c1.2,2.6,3.7,2.2,6,1.7c17.6-3.7,34.6-3.7,50.6,6.4c5,3.2,10.2-0.4,10-6.8
	C271.3,146.1,268.9,144,265.8,142.4z M367.5,141.4c-8.1-5.5-17.2-6.9-26.7-6.3c-10.6,0.6-20.9,2.2-30.4,7.3c-6,3.3-7.4,7.2-4.3,12
	c2.5,4,6,3.8,11.8-0.2c1.7-1.2,2.1-3.7,4.5-4c14.6-1.9,29.2-5.3,44-0.6c2.5,0.8,4.5,0,5.1-2.9C371.1,144.2,369.4,142.7,367.5,141.4z
	"/>
<path style="fill:#886045;transform:scale(0.2)" :class="ValueId+'_color6'" d="M319.2,272.1c4.2,2.3,3.7,4.6-0.3,6.3c-13,5.4-26.5,7.4-40.4,5.6c-7.1-0.9-14.3-1.9-20.8-5.3
	c-2.1-1.1-5-1.8-3.3-5.3C275.8,262.8,297.4,262.7,319.2,272.1z M304,260.5c-10.5,0.3-20.9-0.1-31.4,0.2c-8.2,0.2-13.3,6.6-18.1,12.6
	c11.5-3.1,23-6.4,35.1-6.2c10.2,0.2,19.8,3.4,29.7,5C315.2,266.8,310.5,260.4,304,260.5z M301.3,208.5c-1.9-12.4,0.1-25.3-5-37.5
	C299.8,183.2,295.6,196.5,301.3,208.5z"/>
<path style="fill:#3A271C;transform:scale(0.2)" :class="ValueId+'_color2'" d="M231,182.5c-9.8-5.3-11.4-11-5.9-20.2c6.1-2.3,12-2.8,17.6,1.4C248.2,174.5,243.9,181.4,231,182.5z
	 M333.4,163.7c-3.8,5-3.5,10.1,0.5,14.6c3.3,3.7,7.4,6.3,12.7,3.4c8.5-5.6,9.6-10.5,4.3-19.3C344.9,160.1,339,159.5,333.4,163.7z"/>
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
                                    <button :style="{background:'rgba('+getterIndianManBg1+')'}" @click="ShowElement(getterIndianManBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterIndianManBg2+')'}" @click="ShowElement1(getterIndianManBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterIndianManBg3+')'}" @click="ShowElement2(getterIndianManBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterIndianManBg4+')'}" @click="ShowElement3(getterIndianManBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterIndianManBg5+')'}" @click="ShowElement4(getterIndianManBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterIndianManBg6+')'}" @click="ShowElement5(getterIndianManBg6)" :class="this.ValueId+'_color6btn'"></button>
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
        var IndianMan= [
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
            var randomNumber = IndianMan[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  IndianMan[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'IndianMan'){
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
                getterIndianManBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'IndianMan') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianManBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'IndianMan') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianManBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'IndianMan') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianManBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterIndianManBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianManBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },

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
                            name:'IndianMan',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
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