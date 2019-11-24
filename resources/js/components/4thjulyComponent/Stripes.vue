<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.45);">
                  <path style="fill:#214160; transform:scale(0.2)" d="M120.1,793c0.1-1.8,0.4-3.5,0.4-5.3c0-260.5,0-520.9,0-781.4c0-1.8-0.2-3.5-0.4-5.3c0.3,0,0.7,0,1,0
	c0,1.8,0.1,3.6,0.1,5.4c0,260.4,0,520.9,0,781.3c0,1.8-0.1,3.6-0.1,5.4C120.7,793,120.4,793,120.1,793z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color2'" d="M124.3,1c10.1,0,20.2,0,30.2,0c0.9,1.7,0.5,3.5,0.5,5.3c0,260.5,0,521,0,781.5c0,1.8,0.4,3.6-0.5,5.3
	c-10.1,0-20.2,0-30.2,0c-0.9-1.7-0.5-3.5-0.5-5.3c0-260.5,0-521,0-781.5C123.8,4.5,123.4,2.7,124.3,1z M254.4,1
	c0.1,1.8,0.3,3.5,0.3,5.3c0,260.5,0,520.9,0,781.4c0,1.8-0.2,3.5-0.3,5.3c-10.1,0-20.2,0-30.2,0c-1.2-1.3-1.3-2.9-1.4-4.6
	c0-1.6,0-3.2,0-4.9c0-257.7,0-515.4,0-773.1c0-3.2-0.9-6.5,1.3-9.4C234.2,1,244.3,1,254.4,1z M350.2,793c-10.1,0-20.2,0-30.2,0
	c-1.2-1.3-1.3-2.9-1.4-4.6c0-1.6,0-3.2,0-4.9c0-257.7,0-515.4,0-773.1c0-3.2-0.9-6.5,1.3-9.4c10.1,0,20.2,0,30.2,0
	c1.2,1.3,1.3,2.9,1.4,4.6c0,1.6,0,3.2,0,4.9c0,257.7,0,515.4,0,773.1C351.5,786.7,352.4,790.1,350.2,793z M57.7,1
	c0,1.5,0.1,2.9,0.1,4.4c0,261.1,0,522.2,0,783.2c0,1.5-0.1,2.9-0.1,4.4c-9.8,0-19.5,0-29.3,0c-1.3-1.4-1.5-3.2-1.6-5s0-3.6,0-5.4
	c0-257.1,0-514.2,0-771.3c0-3.5-0.9-7.2,1.6-10.4C38.2,1,47.9,1,57.7,1z M444.4,1c0.1,1.8,0.3,3.5,0.3,5.3c0,260.5,0,520.9,0,781.4
	c0,1.8-0.2,3.5-0.3,5.3c-10.1,0-20.2,0-30.2,0c-1.2-1.3-1.3-2.9-1.4-4.6c0-1.6,0-3.2,0-4.9c0-257.7,0-515.4,0-773.1
	c0-3.2-0.9-6.5,1.3-9.4C424.2,1,434.3,1,444.4,1z M540.2,793c-10.1,0-20.2,0-30.2,0c-1.2-1.3-1.3-2.9-1.4-4.6c0-1.6,0-3.2,0-4.9
	c0-257.7,0-515.4,0-773.1c0-3.2-0.9-6.5,1.3-9.4c10.1,0,20.2,0,30.2,0c1.2,1.3,1.3,2.9,1.4,4.6c0,1.6,0,3.2,0,4.9
	c0,257.7,0,515.4,0,773.1C541.5,786.7,542.4,790.1,540.2,793z"/>
<path style="fill:#CC0001; transform:scale(0.2)" :class="ValueId+'_color3'" d="M57.7,1c10.7,0,21.5,0,32.2,0c1.2,1.3,1.3,2.9,1.4,4.6c0,1.6,0,3.2,0,4.9c0,257.7,0,515.4,0,773.1
	c0,3.2,0.9,6.5-1.3,9.4c-10.7,0-21.5,0-32.2,0c-1.3-1.4-1.5-3.2-1.6-5s0-3.6,0-5.4c0-257.1,0-514.2,0-771.3
	C56.1,7.9,55.2,4.2,57.7,1z M159.4,1c10.7,0,21.5,0,32.2,0c1.3,1.4,1.5,3.2,1.6,5s0,3.6,0,5.4c0,257.1,0,514.2,0,771.3
	c0,3.5,0.9,7.2-1.6,10.4c-10.7,0-21.5,0-32.2,0c-1.2-1.3-1.3-2.9-1.4-4.6c0-1.6,0-3.2,0-4.9c0-257.7,0-515.4,0-773.1
	C158.1,7.3,157.2,3.9,159.4,1z M254.4,1c10.7,0,21.5,0,32.2,0c1.3,1.4,1.5,3.2,1.6,5s0,3.6,0,5.4c0,257.1,0,514.2,0,771.3
	c0,3.5,0.9,7.2-1.6,10.4c-10.7,0-21.5,0-32.2,0c-1.3-1.4-1.5-3.2-1.6-5s0-3.6,0-5.4c0-257.1,0-514.2,0-771.3
	C252.8,7.9,251.9,4.2,254.4,1z M352.1,1c9.8,0,19.5,0,29.3,0c1.2,1.3,1.3,2.9,1.4,4.6c0,1.6,0,3.2,0,4.9c0,257.7,0,515.4,0,773.1
	c0,3.2,0.9,6.5-1.3,9.4c-9.8,0-19.5,0-29.3,0c-1.7-2.5-0.9-5.4-0.9-8.1c0-220.1,0-440.2,0-660.3c0-39,0-78,0-117
	C351.2,5.4,350.6,3,352.1,1z M444.4,1c10.7,0,21.5,0,32.2,0c1.3,1.4,1.5,3.2,1.6,5s0,3.6,0,5.4c0,257.1,0,514.2,0,771.3
	c0,3.5,0.9,7.2-1.6,10.4c-10.7,0-21.5,0-32.2,0c-1.3-1.4-1.5-3.2-1.6-5s0-3.6,0-5.4c0-257.1,0-514.2,0-771.3
	C442.8,7.9,441.9,4.2,444.4,1z M542.1,1c9.8,0,19.5,0,29.3,0c1.2,1.3,1.3,2.9,1.4,4.6c0,1.6,0,3.2,0,4.9c0,257.7,0,515.4,0,773.1
	c0,3.2,0.9,6.5-1.3,9.4c-9.8,0-19.5,0-29.3,0c-1.7-2.5-0.9-5.4-0.9-8.1c0-220.1,0-440.2,0-660.3c0-39,0-78,0-117
	C541.2,5.4,540.6,3,542.1,1z"/>
<path style="fill:#003366; transform:scale(0.2)" :class="ValueId+'_color1'" d="M93.1,1c10.1,0,20.2,0,30.2,0c1.2,1.3,1.3,2.9,1.4,4.6c0,1.6,0,3.2,0,4.9c0,257.7,0,515.4,0,773.1
	c0,3.2,0.9,6.5-1.3,9.4c-10.1,0-20.2,0-30.2,0c-1.2-1.3-1.3-2.9-1.4-4.6c0-1.6,0-3.2,0-4.9c0-257.7,0-515.4,0-773.1
	C91.7,7.3,90.8,3.9,93.1,1z M289.7,1c9.8,0,19.5,0,29.3,0c0.9,1.7,0.5,3.5,0.5,5.3c0,260.5,0,521,0,781.5c0,1.8,0.4,3.6-0.5,5.3
	c-9.8,0-19.5,0-29.3,0c-1.7-2.5-0.9-5.4-0.9-8.1c0-220.1,0-440.2,0-660.3c0-39,0-78,0-117C288.8,5.4,288.2,3,289.7,1z M28.4,1
	c-0.1,1.8-0.2,3.6-0.2,5.3c0,260.4,0,520.9,0,781.3c0,1.8,0.1,3.6,0.2,5.3c-8.6,0-17.2-0.1-25.8,0.1c-2.1,0-2.9-0.4-2.5-2.5
	c0.1-0.6,0-1.3,0-1.9c0-261.1,0-522.1-0.1-783.2c0-3.7,0.8-4.6,4.5-4.5C12.5,1.2,20.4,1,28.4,1z M223.2,793c-9.4,0-18.9,0-28.3,0
	c-1.2-1.3-1.3-2.9-1.4-4.6c0-1.6,0-3.2,0-4.9c0-257.7,0-515.4,0-773.1c0-3.2-0.9-6.5,1.3-9.4c9.4,0,18.9,0,28.3,0
	c0.9,1.7,0.5,3.5,0.5,5.3c0,260.5,0,521,0,781.5C223.6,789.5,224.1,791.3,223.2,793z M479.7,1c9.8,0,19.5,0,29.3,0
	c0.9,1.7,0.5,3.5,0.5,5.3c0,260.5,0,521,0,781.5c0,1.8,0.4,3.6-0.5,5.3c-9.8,0-19.5,0-29.3,0c-1.7-2.5-0.9-5.4-0.9-8.1
	c0-220.1,0-440.2,0-660.3c0-39,0-78,0-117C478.8,5.4,478.2,3,479.7,1z M413.2,793c-9.4,0-18.9,0-28.3,0c-1.2-1.3-1.3-2.9-1.4-4.6
	c0-1.6,0-3.2,0-4.9c0-257.7,0-515.4,0-773.1c0-3.2-0.9-6.5,1.3-9.4c9.4,0,18.9,0,28.3,0c0.9,1.7,0.5,3.5,0.5,5.3
	c0,260.5,0,521,0,781.5C413.6,789.5,414.1,791.3,413.2,793z"/>
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
                                    <button :style="{background:'rgba('+getterStripesBg1+')'}" @click="ShowElement(getterStripesBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStripesBg2+')'}" @click="ShowElement1(getterStripesBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStripesBg3+')'}" @click="ShowElement2(getterStripesBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStripesBg4+')'}" @click="ShowElement3(getterStripesBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStripesBg5+')'}" @click="ShowElement4(getterStripesBg5)" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStripesBg6+')'}" @click="ShowElement5(getterStripesBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStripesBg7+')'}" @click="ShowElement6(getterStripesBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Stripes= [
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
            var randomNumber = Stripes[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Stripes[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Stripes'){
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
                getterStripesBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stripes') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStripesBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stripes') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStripesBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stripes') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStripesBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterStripesBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStripesBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStripesBg7: {
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
                            name:'Stripes',
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