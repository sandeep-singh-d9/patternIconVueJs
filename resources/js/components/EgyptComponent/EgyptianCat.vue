<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#FFDF7A;transform:scale(0.2)" :class="ValueId+'_color2'" d="M430.1,349.3c-0.8,3.6-1.6,7.2-2.3,10.8c-6.5,17.3-16.4,32.1-31.6,43c-7.3,5.2-15.8,8-23.2,13
	c-0.5,0.3-1.1,0.1-1.6-0.3c-16.8,16.7-23.1,38.3-28,60.4c-7.2,32.5-9.6,65.6-9.5,98.8c0,4.8-1.4,5.9-5.9,5.8
	c-49.8-0.2-99.7-0.2-149.5,0c-5,0-7.1-1.4-7.5-6.3c-0.3-3.5-1.4-6.9-2.2-10.4c-4.3-8.1-4.3-17.1-5.5-25.9
	c-1.5-10.7-2.9-21.5-3.4-32.4c-0.1-1.9-0.4-4,0.6-5.8c1.1-1,0.5-2.2,0.4-3.3c-1.5-36.1-0.6-72,9-107.1c7.8-28.6,20.6-54.3,43.5-74
	c9.4-8.1,19.9-14.3,31.5-18.6c19.4-7.3,38.7-14.9,56.8-25.2c4.3,1.4,6,5.5,8.7,8.6c30.3,35.4,68.3,57.3,114,66.2
	C426.5,347.2,428.7,347.4,430.1,349.3z M336.4,239.1c5.2-10.5,6.7-21.6,7-33.2c0.3-14.9-1.3-29.9,0.9-44.9
	c1.8-12.3,5.9-23.6,13.3-33.6c0.6-0.8,0.8-1.7,1.2-2.6c1.1-2.5,2.8-4.7,5-6.4c16.7-13.1,36.1-15.2,56.4-13.9c1,0.1,1.8,0.7,2.6,1.3
	c12.2,0.6,24.4,1.1,36.5,3.6c7.7,1.6,14.9,4.3,20.5,9.9c13.7,13.4,27.2,27,40.9,40.4c2.3,2.2,2.9,4.1,1.7,7.2
	c-5.5,13.1-10.8,26.3-15.9,39.5c-1.3,3.3-2.9,4-6.2,3.8c-10.7-0.6-21.3-0.2-31.6,3.4c-19.4,6.8-29.7,20.9-30.4,41.4
	c0,1.4-0.1,2.8-0.2,4.1c-4.5,2.9-9.6,1.8-14.4,1.4c-27.9-2-55.1-7.1-81.2-17.2C340.1,242.4,337.5,241.8,336.4,239.1z"/>
<path style="fill:#5CADE0;transform:scale(0.2)" :class="ValueId+'_color3'" d="M336.4,239.1c25.3,10.3,51.5,16.5,78.8,19c7.7,0.7,15.3,0.9,23,1.1c0.5,10.7-0.1,21.5,1,32.3
	c0.2,1.5,0.4,3.2-0.8,4.5c-4.4,2.5-9,0.5-13.3-0.2c-21.5-3.2-41.8-10.4-60.8-21.1c-2.1-1.2-4.5-4.1-6.8-1.6c-2.7,3-5.7,6.3-6.1,10.6
	c-0.2,2.4,2.6,3.3,4.4,4.4c19.6,11.7,40.8,18.9,63.2,22.9c3.5,0.6,7,1.1,10.6,1.5c2.7,0.3,5.6,0.3,7.6,2.8
	c-0.9,11.7-2.9,23.2-7.1,34.3c-52.9-9-96-34.4-128.4-77.3c10.4-7.4,21.4-14.1,29-24.7C332.6,244.6,334.5,241.8,336.4,239.1z
	 M409.8,542.6c-12.6,0.1-25.2,0.2-37.8,0.2c0-22.2,0-44.4,0-66.6c1.7-1.7,3.9-1.8,6.1-1.8c10.8-0.1,21.7-0.1,32.5,0
	c2.2,0,4.4,0.1,6,1.9C414.3,498.5,412.1,520.5,409.8,542.6z"/>
<path style="fill:#DC2513;transform:scale(0.2)" :class="ValueId+'_color4'" d="M372,438.3c16.1,0,32.1,0.1,48.2,0.1c-1.2,12.6-2.4,25.3-3.6,37.9c-14.9,0-29.7-0.1-44.6-0.1
	C372,463.6,372,451,372,438.3z M437.3,315c-26.3-2.8-51.5-9.3-75-21.7c-0.3-0.2-0.7-0.4-1-0.6c-13.7-7.1-13.5-7-5.9-20.2
	c2.2-3.8,3.9-3.1,6.8-1.3c16.8,10.3,34.9,17.3,54.2,21.3c7.3,1.5,14.8,2.3,22.2,3.4C438,302.2,439.4,308.7,437.3,315z"/>
<path style="fill:#F7AA00;transform:scale(0.2)" :class="ValueId+'_color1'" d="M160.4,500.2c-3.7-3.9-7.5-7.6-11-11.6c-17.6-21.1-27.8-44.9-26-72.9c1.5-24.2,11.3-45.4,24.8-65
	c16.5-24,31.8-48.6,43.7-75.2c16-35.7,20.9-71.9,5.1-109c-5-11.8-10.3-23.6-18.8-33.4c-5.2-6-11.1-11.1-19.8-9.6
	c-11.5,1.9-16.9,12-14.3,25.6c2,10.2,6.6,19.4,11.7,28.4c9.9,17.3,12.2,35.6,7.1,54.9c-3.3,12.5-8.1,24.3-13.7,35.9
	c-14.2,29.4-32.6,56.4-48.9,84.6c-18,31.1-23.7,64.3-14,99.3c13.2,47.8,44.8,82.3,82.3,112.3c-2.4-16.5-4.9-33-6.6-49.6
	C161.6,509.9,163,504.7,160.4,500.2z M466.9,575.8c-0.3-4.3,0-8.7-0.1-13c-0.1-12.1-8-19.9-20.2-20c-12.3-0.1-24.5-0.1-36.8-0.2
	c-12.5-2.8-24.9-2.6-37.4-0.1c-0.8,0.2,0.3,0-0.4,0.4c-0.1,11.1,0,22.1-0.3,33.2c-0.1,4,1.2,4.9,5,4.9c28.5-0.1,57-0.2,85.4,0
	C466.3,581,467.1,579.5,466.9,575.8z M422.8,105.8c-5.2-27.3-17.8-51.3-32-76c-13.2,22.7-24.7,44.8-30.6,69.3c-2,8.4-4,17-1.4,25.7
	c8.6-7.7,18-13.8,29.4-16.6C399.6,105.4,411.2,105.8,422.8,105.8z M378.6,440.2c11.6,0.1,23.3,0.1,34.9,0c2.3,0,4.8,0.1,6.7-1.7
	c2.5-26.1,5.1-52.2,7.6-78.3c-0.4-0.1-0.7-0.3-1.1-0.3c-0.1,0-0.2,0.3-0.3,0.4c-6.6,16.3-15.9,30.5-30.2,41.2
	c-7.8,5.8-17.3,8.4-24.9,14.4c0.2,7.5,0.4,15,0.6,22.5C373.8,440.2,376.3,440.2,378.6,440.2z M280.9,315
	c-21,3.6-39.6,12.2-54.6,27.4c-20.8,20.9-29.9,47.3-33.7,75.8c-1.4,10.4-0.8,9.7,10.4,11c7.3,0.9,7.9-2.5,8.5-7.7
	c2.6-21.7,8.6-42,22.7-59.3c11.4-14,25.6-23.9,43.7-27.2c8.4-1.5,8.4-1.5,8.4-10.2c0-1.8-0.2-3.6,0-5.3
	C286.8,315,284.4,314.3,280.9,315z M199.3,447.8c-9.2-0.1-7.9-0.8-8,9.1c0.2,11-1.4,9.8,8.3,9.9c10.7,0.1,10.7,0,10.6-10
	C210.2,446.1,211.7,447.9,199.3,447.8z"/>
<path style="transform:scale(0.2)" :class="ValueId+'_color5'" d="M457,162.8c-11-0.2-9.1,1.6-9.2-11.4c-0.1-7.6,0-7.6,8.9-7.6c10.1,0,10.2,0,10.1,10.5C466.7,164.2,467.9,162.7,457,162.8z"
	/>
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
                                    <button :style="{background:'rgba('+getterEgyptianCatBg1+')'}" @click="ShowElement(getterEgyptianCatBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterEgyptianCatBg2+')'}" @click="ShowElement1(getterEgyptianCatBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterEgyptianCatBg3+')'}" @click="ShowElement2(getterEgyptianCatBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterEgyptianCatBg4+')'}" @click="ShowElement3(getterEgyptianCatBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterEgyptianCatBg5 +')'}" @click="ShowElement4(getterEgyptianCatBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterEgyptianCatBg6+')'}" @click="ShowElement5(getterEgyptianCatBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterEgyptianCatBg7+')'}" @click="ShowElement6(getterEgyptianCatBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var EgyptianCat= [
                {top:339 ,left:122},
                {top:332 ,left:12},
                {top:342 ,left:43},
                {top:147 ,left:117},
                {top:30 ,left:119},
                {top:162 ,left:111},
                {top:31 ,left:81},
                {top:141 ,left:77},
                {top:10 ,left:18},
                {top:-3 ,left:72},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = EgyptianCat[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  EgyptianCat[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'EgyptianCat'){
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
                getterEgyptianCatBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'EgyptianCat') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianCatBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'EgyptianCat') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianCatBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'EgyptianCat') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianCatBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterEgyptianCatBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianCatBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianCatBg7: {
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
                            name:'EgyptianCat',
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