<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color2'"  d="M133.7,401.3c-3.5,5.1-8.7,12.8-15.2,22.2c-16.5,24.2-24,35.4-29.1,42.8
    c-9.4,13.7-23.4,33.6-42.4,58.7c-5.7,13.6-2.2,29.2,8.4,38.4c12,10.4,30.7,10.5,43.6-0.3c12-15.5,24-31.4,36-47.8
    c21.3-29.1,41.2-57.8,59.7-85.9c-7.6-0.2-21-1.5-35.6-8.7C146.8,414.4,138.5,406.6,133.7,401.3z"/>
                  <path style="fill:#006699; transform:scale(0.2)" :class="ValueId+'_color1'" d="M341.4,150c-15.7-34.8-11.2-62.9,13.1-82.4c22.2-17.9,53-18.6,75.9-1.9
    c22.6,16.5,31.3,46.2,21.3,72.3c-9.1,23.8-35.1,44.2-69.8,38.8c4.5,8.5,8.1,16.8,9.4,26.1c1.1,7.8,0.8,15.5-1.4,23
    c-1.2,3.9,0.3,5.7,2.8,8.5c10.5,11.6,23,15.9,38.7,14.3c12.8-1.3,25.9-0.4,38.8-0.2c16.7,0.2,29.5,12.8,29.5,28.8
    c-0.1,16.1-12.7,28.3-29.7,28.4c-19.3,0.1-38.6-0.3-57.9,0.1c-16,0.4-29.6-4.6-41.4-15.2c-3.9-3.5-8-9.8-12.4-9
    c-3.6,0.7-6,7.7-8.9,12c-9.3,13.9-18.5,27.7-27.8,41.6c-0.8,1.3-2.2,2.3-2.1,4.8c7.9,0,15.7,0.1,23.6,0c21.5-0.2,37.7,9.1,47.8,27.8
    c10.1,18.8,8.7,37.6-3.5,55.1c-22.5,32.3-45,64.5-67.8,96.5c-12.4,17.4-35.5,21.1-52.9,9.1c-17.1-11.8-21.7-35.2-9.8-52.7
    c12-17.8,24.4-35.3,36.7-52.9c1.3-1.9,2.6-3.8,4.1-5.9c-2.4-1.3-4.6-0.7-6.7-0.7c-39,0-78-0.1-117.1,0c-12,0-21.4-4.3-27.2-14.9
    c-6-10.8-4.5-21.2,2.3-31.4c33.6-50.1,67.1-100.3,100.7-150.5c1.2-1.8,2.3-3.6,4.1-6.4c-13.5,0-26.2,0-38.8,0
    c-2.7,0-3.3,2.6-4.5,4.3c-12.4,18-24.6,36.1-37.1,54c-7,10-17.1,14.3-29.1,11.9c-12-2.3-19.7-10-22.5-22c-1.8-7.7-0.5-15.1,4-21.6
    c16.4-24.1,32.9-48.3,49.5-72.2c5.9-8.5,14.5-11.8,24.8-11.8c31.7,0.1,63.3,0,95,0.1c4.5,0,8.5-0.8,12.7-2.5
    C318.2,148.7,329.7,148.2,341.4,150z M108.8,561c19.6-28,39.2-56,58.8-83.9c9.9-14.1,19.8-28.3,29.8-42.4c1.4-2,2.6-4.1,1.1-6.6
    c-0.9-1.5-2.2-2.2-3.9-2.3c-2.9-0.1-4.1,2.1-5.5,4c-9.7,13.8-19.4,27.6-29.1,41.5c-19.9,28.3-39.7,56.6-59.6,84.9
    c-9.6,13.5-26.3,16.8-39.4,8c-13.5-9.1-16.4-26.3-6.6-40.4c26.5-38.4,53.2-76.7,79.8-115.1c1.9-2.8,3.8-5.7,0.5-8.3
    c-3.6-2.7-6.1-0.4-8.3,2.8c-3.9,5.8-7.9,11.4-11.9,17.2c-22.9,33-45.9,65.9-68.6,98.9c-8.6,12.5-9.6,26-2.4,39.4
    c6.9,13,18.4,19.3,32.7,20C90.3,578.2,100.9,572.2,108.8,561z"/>
<path style="fill:#519DC4; transform:scale(0.2)" :class="ValueId+'_color3'" d="M319,160.3c19.8-6.3,45.3,4.9,56.3,24.8c9.9,18,9.9,36.3-1.3,53.6c-21.3,32.8-43.2,65.2-64.8,97.7
    c-1.4,2.1-2.7,3.5-5.6,3.5c-40.6-0.1-81.1-0.1-121.7-0.1c-0.6-2.3,1.1-3.5,2-4.9c26.1-39.2,52.3-78.3,78.3-117.5
    c2.1-3.2,4.3-4.5,8.2-4.4c9.1,0.3,18.3-0.1,27.5,0.1c14.4,0.4,26.2-4,31.8-18.1C335.1,181.4,330.7,169.9,319,160.3z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color2'" d="M263.6,349.5c26.7,0,53.3,0,80,0c17.5,0,30.7,7.5,38.8,23c8.1,15.4,6.9,30.7-3.1,45
    c-22.3,31.9-44.7,63.7-67.1,95.5c-7.3,10.4-17.4,14.7-30.1,12.1c-11.8-2.4-20-11.3-22.2-23.6c-1.4-8.1,1-15.3,5.6-21.9
    c14.5-20.8,29.1-41.7,43.5-62.6c1.5-2.2,3.9-4.2,2.3-7.4c-1.7-3.5-4.9-2.8-7.8-2.8c-43,0-86-0.1-129,0c-8.6,0-15.7-2.3-20-10.2
    c-4.3-7.9-2.3-15.2,2.7-22.2c4.8-6.8,9.5-13.7,13.9-20.8c1.9-3,4-4.1,7.7-4.1C207.1,349.6,235.4,349.5,263.6,349.5
    C263.6,349.5,263.6,349.5,263.6,349.5z M394.3,63.3c-29.3-0.2-53,23-53.2,52.1c-0.2,28.6,23.4,52.6,52,52.8
    c29.2,0.2,52.9-23.1,53.1-52.2C446.2,87,423.1,63.4,394.3,63.3z M251.1,165.4c-17.1,0-34.2,0.1-51.3,0c-8-0.1-14,3.1-18.6,9.7
    c-15.4,22.7-31,45.2-46.4,67.8c-7.2,10.5-5.6,21.9,3.9,28.3c9.4,6.3,20.5,3.6,27.7-7c12.6-18.3,25.3-36.6,37.7-55
    c2.7-4.1,5.7-5.7,10.7-5.7c29.6,0.1,59.3-0.1,88.9-0.4c10.4-0.1,18-7.8,18.2-18c0.2-10.7-7-18.9-17.6-19.1
    c-17.7-0.3-35.4-0.1-53.1-0.1C251.1,165.6,251.1,165.5,251.1,165.4z M470.4,296.1c5,0,9.4-1.4,13.1-4.7c5.9-5.3,8-13.2,5.3-20.6
    c-2.8-7.9-9.8-12.7-18.9-12.8c-19.7-0.1-39.4-0.1-59,0c-3.4,0-6.1-0.8-8.6-3.1c-4.7-4.3-9.7-8.2-14.5-12.4c-1.6-1.3-2.7-2.7-4.5,0.2
    c-5.7,9-11.7,17.9-17.7,26.7c-1.7,2.5-0.8,3.8,1.2,5.3c4,3.2,8,6.6,11.9,10c8.9,7.8,19.1,11.7,31.1,11.4c9.3-0.2,18.7,0,28,0
    C448.5,296.1,459.5,296,470.4,296.1z"/>
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
                                    <button :style="{background:'rgba('+getterRunnerBg1+')'}" @click="ShowElement(getterRunnerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRunnerBg2+')'}" @click="ShowElement1(getterRunnerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRunnerBg3+')'}" @click="ShowElement2(getterRunnerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterRunnerBg4+')'}" @click="ShowElement3(getterRunnerBg4)" :class="this.ValueId+'_color3btnlor4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterRunnerBg5 +')'}" @click="ShowElement4(getterRunnerBg5 )" :class="this.ValueId+'_color5btn'"></button>
 -->
                                    <!--<button :style="{backgroundColor:'rgba('+getterRunnerBg6+')'}" @click="ShowElement5(getterRunnerBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterRunnerBg7+')'}" @click="ShowElement6(getterRunnerBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRunnerBg8+')'}" @click="ShowElement7(getterRunnerBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRunnerBg9+')'}" @click="ShowElement8(getterRunnerBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterRunnerBg10+')'}" @click="ShowElement9(getterRunnerBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Runner= [
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
            var randomNumber = Runner[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Runner[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Runner'){
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
                getterRunnerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Runner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Runner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Runner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterRunnerBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRunnerBg10: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9
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
                ShowElement8(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8 + ')'
                    this.clickedInput = 'nine'
                    this.showColorPicker = true
                },
                ShowElement9(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9 + ')'
                    this.clickedInput = 'ten'
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
                    var background8Clone =tempArrayClone.background8 
                    var background9Clone =tempArrayClone.background9 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Runner',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
                            background8:  background8Clone,
                            background9:  background9Clone,
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
                            $('.Svg_'+cloneIndex+'_color9').css({fill: 'rgba('+background8Clone+')'})
                            $('.Svg_'+cloneIndex+'_color10').css({fill: 'rgba('+background9Clone+')'})
                            
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