<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.68);">
<path :style="{fill:'rgba(0, 171, 227, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M143.8,143.9c0.7-5.7-0.5-11.5,1.3-17.3c3.8-12.4,14.5-21,27.5-21c86.9,0,173.8,0,260.7,0
	c4.4,0,8.9-0.4,13.1,0.4c14.2,2.6,23.6,14.4,23.7,28.9c0,3,0,6-0.1,9c-1.8,2-4.3,1.9-6.6,1.9c-7.3,0-14.6,0.2-21.9-0.1
	c-6.8,0.2-13.6,0-20.3,0.1c-6.2,0.1-6.7,0.6-6.8,7c-0.1,10,0.1,19.9-0.1,29.9c0.4,3,0.2,6,0.2,9c0,73.2,0,146.3,0,219.5
	c0,3.7,0.7,7.6-1.6,11.1c-2.6,2-5.7,1.7-8.6,1.7c-83.8,0-167.7,0-251.5,0c-2.9,0-6.1,0.4-8.5-1.9c-0.1-45.5-0.1-91.1-0.2-136.6
	c-0.1-34.4-0.1-68.7-0.2-103.1c-1.2-1.5-1.6-3.2-1.6-5c-0.2-9.5-0.2-19,0-28.5C142.2,147,142.6,145.3,143.8,143.9z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M412.5,422c0-80,0-159.9,0-239.9c2.3-2,5.2-1.8,7.9-1.8c6.9,0,13.9-0.2,20.8,0.1
	c7.3-0.3,14.7-0.1,22-0.1c2.4,0,4.8-0.1,6.7,1.9c0,111,0.1,222.1,0.1,333.1c0,16.4,0,32.8,0,49.1c0,12.6-7.9,20.5-20.6,20.5
	c-82.1,0-164.2,0-246.2,0c-13,0-20.7-7.8-20.8-21c-0.1-12.2-0.1-24.4-0.1-36.5c3-2.8,6.8-1.9,10.3-1.9c64.2-0.1,128.5-0.3,192.7,0.1
	c17.8,0.1,26.7-5.9,25.5-25.6c-0.4-6.7-0.3-13.6,0.1-20.3c-0.2-6.4-0.2-12.9,0-19.3c-0.2-6.4-0.2-12.9,0-19.3
	C411.2,434.8,409,428.2,412.5,422z"/>
<path :style="{fill:'rgba(0, 171, 227, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M412.5,479.6c0,9.2,0,18.4,0,27.6c0,12.7-7.8,20.4-20.6,20.4c-69.9,0-139.8,0-209.6,0
	c-6.2,0-12.3,0-18.5,0c-11.5-0.2-19.6-8-19.7-19.4c-0.1-9.5,0.1-19.1,0.2-28.6c2.3-2.2,5.2-1.9,7.9-1.9c84.2,0,168.3,0,252.5,0
	C407.3,477.6,410.2,477.5,412.5,479.6z"/>
<path :style="{fill:'rgba(218, 218, 216, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M469.9,182.3c-9.6-0.1-19.1-0.2-28.7-0.2c-0.4-0.5-1-0.8-1-1.4c-1.5-11.7-1.5-23.4,0-35.1
	c0.1-0.6,0.7-1,1-1.4c9.6-0.1,19.1-0.2,28.7-0.3c14.1,0,28.3-0.1,42.4,0.1c4.5,0.1,6.2-1.4,5.6-5.8c-0.7-6.1,1.2-12.3-1.3-18.3
	c-1-11.9-0.9-23.9-0.2-35.8c0.7-10.4,10.4-18.7,20.7-18.7c10.6,0,19.9,7.9,20.5,18.7c0.7,11.9,0.9,23.9-0.2,35.8
	c-2.6,7.2-1.1,14.6-1.1,21.9c0,9.3-2.4,17.6-7.9,25c-7.2,9.8-17,14.9-28.9,15.3C503.1,182.6,486.5,182.3,469.9,182.3z"/>
<path :style="{fill:'rgba(218, 218, 216, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M143.8,143.9c0,12.8,0,25.7,0,38.5c-11.9,0-23.9-0.9-35.8,0.1c-34.1,2.8-53.6-16-50.4-50.8
	c0.3-3.8,1.1-8-1.1-11.7c-1-11.9-0.9-23.9-0.2-35.8c0.7-10.7,10-18.6,20.6-18.6c10.3,0,19.7,7.7,20.5,18.1c1,12.1,0.9,24.3-0.1,36.4
	c-2.6,7.1-1,14.5-1,21.7c0,3.1,3.3,2.1,5.3,2.1C115.6,144,129.7,143.9,143.8,143.9z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M97.3,120c-1.9-1.5-1.2-3.7-1.2-5.6c-0.1-9,0-17.9,0-26.9c0-11.6-8.1-20.2-18.9-20.3
	c-11.3-0.1-19.4,8.3-19.5,20.3c0,9,0,17.9,0,26.9c0,1.9,0.6,4-1.2,5.6c-19-9.5-30.1-29.4-27.4-49.4C31.8,50,48.5,32.2,69.9,29.2
	c34.7-4.8,60,26.2,54.2,55.8C120.8,101.3,112,112.8,97.3,120z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M557.6,120c-2-1.7-1.2-4.1-1.2-6.2c-0.1-9.2,0.1-18.3-0.1-27.5c-0.1-11.1-8.5-19.2-19.4-19.1
	c-10.2,0.1-18.8,8.7-18.9,19.1c-0.1,9.4,0,18.7-0.1,28.1c0,1.9,0.6,4-1.2,5.6c-18.8-9.4-28.3-24.9-27.3-45.7
	c0.9-19,10.5-33.2,28.1-41c25.5-11.2,51.9-0.7,63.7,24.9C592,81.7,580,110.3,557.6,120z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M412.5,422c0,6.4,0,12.8,0,19.2c-2.3,2.1-5.2,1.9-7.9,1.9c-84.2,0-168.3,0-252.5,0
	c-2.8,0-5.7,0.2-7.9-2c0-6.4,0-12.7,0-19.1C233.6,422.1,323,422.1,412.5,422z"/>
<path :style="{fill:'rgba(0, 171, 227, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M144.2,441.2c89.4,0,178.9,0,268.3,0c0,6.4,0,12.8,0,19.2c-2.3,2.1-5.2,1.9-7.9,1.9
	c-84.2,0-168.3,0-252.5,0c-2.8,0-5.7,0.3-7.9-1.9C144.2,454,144.2,447.6,144.2,441.2z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M144.2,460.4c89.4,0,178.9,0,268.3,0c0,6.4,0,12.8,0,19.2c-89.4,0-178.9,0-268.3,0
	C144.2,473.2,144.2,466.8,144.2,460.4z"/>
<path :style="{fill:'rgba(187, 227, 238, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M191.9,278.2c0,20.6-0.1,41.1,0.1,61.7c0,4-0.9,5.6-5.3,5.6c-14,0-14,0.2-14-13.6
	c0-37.9,0.1-75.9-0.1-113.8c0-5.3,1.1-7.3,6.8-7.1c12.4,0.4,12.5,0.1,12.5,12.8C191.9,241.8,191.9,260,191.9,278.2z"/>
<path :style="{fill:'rgba(218, 218, 216, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M441.3,144.2c0,12.6,0,25.3,0,37.9c-9.6,0-19.2,0.1-28.8,0.1c0-11.1,0.1-22.2-0.1-33.3
	c0-3.3,0.5-5.1,4.5-5C425,144.2,433.2,144.1,441.3,144.2z"/>
<path :style="{fill:'rgba(187, 227, 238, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M172.7,182c0.1-10-1.2-9.3,8-9.2c12.5,0.1,11.1-1.7,11.2,8.4c0.1,10.7,0,10.8-10.7,10.7
	C171.3,191.8,172.9,193,172.7,182z"/>
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
                                    <button :style="{background:'rgba('+getterTowelonholderBg1+')'}" @click="ShowElement(getterTowelonholderBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTowelonholderBg2+')'}" @click="ShowElement1(getterTowelonholderBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTowelonholderBg3+')'}" @click="ShowElement2(getterTowelonholderBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTowelonholderBg4+')'}" @click="ShowElement3(getterTowelonholderBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTowelonholderBg5+')'}" @click="ShowElement4(getterTowelonholderBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Towelonholder= [
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
            var randomNumber = Towelonholder[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Towelonholder[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Towelonholder'){
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
                getterTowelonholderBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Towelonholder') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTowelonholderBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Towelonholder') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTowelonholderBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Towelonholder') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTowelonholderBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTowelonholderBg5: {
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
                            name:'Towelonholder',
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