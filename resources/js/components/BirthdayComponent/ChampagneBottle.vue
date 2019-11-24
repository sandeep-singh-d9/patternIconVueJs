<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M69,363.5c0.7-17-1.2-37.9,0.9-58.6c1.9-18.8,7.9-36.4,17-52.9c7.8-14.1,15.4-28.3,23.2-42.4
	c10.1-18.2,15.2-37.7,15-58.6c-0.2-18.3-0.1-36.6,0-54.9c0-2.9-0.1-4.9-3.6-5.9c-3.9-1.1-5.7-4.5-5.7-8.6c0-12.3-0.1-24.5,0-36.8
	c0.1-6.1,3.8-9.7,10-9.7c18.3-0.1,36.6-0.1,54.9,0c6.2,0,9.7,3.7,9.8,9.9c0.1,12.1,0,24.1,0,36.2c0,4.1-1.5,7.7-5.4,8.8
	c-4.2,1.2-4,3.7-4,6.9c0.1,18.1,0.2,36.2,0,54.3c-0.2,20.7,4.8,40,14.8,58.1c7.8,14.1,15.4,28.3,23.2,42.4
	c12.3,22,18.3,45.6,18.2,70.9c-0.2,33.3,0,66.6-0.2,99.8c0,4,0.9,5.2,5.1,5.2c21.6-0.2,43.2-0.2,64.8,0c4.2,0,5.1-1.2,5.1-5.2
	c-0.2-28.2-0.2-56.4,0-84.7c0-3.5-1-4.9-4.3-6.1c-22.5-7.8-35-28.6-32.8-52.4c3-32.9,5.3-65.9,7.9-98.9c0.4-5,0.7-10.1,1.2-15.1
	c0.6-5.4,3.8-8.6,9.2-8.7c18.7-0.2,37.4-0.1,56.1,0c5.5,0,8.9,3.5,9.4,9.2c2,25.6,3.9,51.2,5.9,76.8c1,12.4,1.8,24.8,3.1,37.2
	c2.4,23.4-10.5,44.2-32.7,51.9c-3.2,1.1-4.5,2.4-4.4,6c0.2,28.2,0.2,56.4,0,84.7c0,4.6,1.4,5.3,5.6,5.3c33.9-0.2,67.7-0.2,101.6,0
	c4,0,5.2-0.9,5.2-5.1c-0.2-28.2-0.2-56.4,0-84.7c0-3.3-0.8-5-4.2-6.2c-22.2-7.6-35-28-33-51.1c3.2-37.6,6.1-75.2,9-112.8
	c0.6-8.2,3.6-11.2,11.6-11.2c17.3,0,34.6,0,52,0c7.7,0,10.7,3.1,11.3,10.8c3,37.8,5.9,75.6,9.1,113.4c1.9,22.8-11,43.3-32.7,50.8
	c-3.7,1.3-4.5,2.9-4.5,6.5c0.2,28,0.2,56.1,0,84.1c0,4.4,1.1,5.5,5.4,5.4c15.4-0.3,30.7,0,46.1-0.2c3.4,0,4.7,0.5,4.7,4.4
	c0.1,14.4,0.3,14.8-13.9,14.2c-6.3-0.2-9.8,1.3-12.3,7.4c-3.1,7.9-7.6,15.3-11.3,23c-2.4,5-5.9,7.2-11.5,7.2
	c-135.7-0.1-271.3-0.1-407,0c-5.6,0-9.1-2.2-11.5-7.1c-4.1-8.6-8.8-16.9-12.6-25.6c-1.7-3.9-4.1-5-8-4.8c-4.5,0.3-9,0-13.4,0.1
	c-2.6,0.1-3.6-0.8-3.3-3.3c0.1-0.4,0-0.8,0-1.2c-0.3-14.2-0.3-14.2,13.9-14.2c12.5,0,24.9-0.1,37.4,0.1c3.7,0.1,4.9-0.9,4.9-4.8
	C68.8,404.2,69,385.8,69,363.5z M56.3,446.4c139.4,0,278.2,0,417.8,0c-2.9,5.7-5.6,10.8-8,16.1c-1.5,3.2-4.2,2.3-6.6,2.3
	c-30.2,0-60.3,0-90.5,0c-99,0-198.1,0-297.1,0.1c-5.1,0-7.9-1.4-9.6-6.1C60.8,454.7,58.5,450.8,56.3,446.4z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M152.9,427.4c-20,0-40.1-0.1-60.1,0.1c-4,0-5.2-1-5.2-5.1c0.2-35.6-0.1-71.2,0.2-106.8
	c0.1-18.8,5.5-36.4,14.6-52.8c7.7-14,15.2-28,23-41.9c10.5-18.6,16.6-38.5,18.1-59.7c0.3-3.8,1.4-4.8,5.1-4.8
	c13.6,0,13.4-0.1,15,13.2c2.2,18.2,8.4,35,17.1,51c9.8,18.1,20.6,35.7,29,54.5c5.8,13.1,8.7,27,8.7,41.3c0.1,35.2,0,70.4,0.2,105.6
	c0,4.5-1.3,5.4-5.6,5.4C193,427.3,172.9,427.4,152.9,427.4z M451.8,231.2c-6.4,0-12.8-0.1-19.3,0c-2.8,0.1-4.2-0.4-4-3.8
	c1.4-16.5,2.6-33,3.7-49.5c0.2-2.3,1.2-2.9,3.3-2.9c10.9,0.1,21.8,0.1,32.7,0c2.5,0,3.3,1,3.5,3.4c1.1,16.1,2.3,32.2,3.7,48.3
	c0.3,3.7-0.8,4.7-4.4,4.5C464.7,231,458.2,231.2,451.8,231.2z M321,231.2c-6.4,0-12.8-0.1-19.3,0c-2.9,0.1-4.2-0.5-3.9-3.8
	c1.4-16.5,2.6-33,3.7-49.4c0.2-2.3,1.3-2.9,3.4-2.9c10.9,0.1,21.8,0.1,32.7,0c2.6,0,3.3,1,3.5,3.4c1.1,16.1,2.3,32.2,3.7,48.3
	c0.3,3.8-1,4.6-4.4,4.5C333.8,231,327.4,231.2,321,231.2z M153.3,53.7c4.9,0,9.7,0.2,14.6-0.1c3.1-0.2,3.8,1.1,3.9,4
	c0.5,14.7,0.6,14.7-14.1,14.7c-6.4,0-12.8-0.2-19.2,0.1c-3.4,0.1-4.1-1.1-4.2-4.3c-0.3-14.5-0.4-14.4,13.8-14.4
	C149.8,53.7,151.6,53.7,153.3,53.7z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.3,361.4c0-11.7,0-23.3,0-35c0-7.7,3.4-11.1,11-11.1c23.9,0,47.8-0.1,71.8,0
	c7.2,0,10.6,3.5,10.6,10.8c0.1,23.9,0.1,47.8,0,71.8c0,7.3-3.4,10.8-10.7,10.8c-23.9,0.1-47.8,0.1-71.8,0c-7.6,0-10.9-3.4-11-11.1
	C106.3,385.5,106.3,373.5,106.3,361.4z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'"  d="M293.2,287.2c0.9-12.5,1.8-23.3,2.5-34.1c0.2-2.5,1.3-3.2,3.7-3.2c14.6,0.1,29.1,0.1,43.7,0
	c2.8,0,3.7,1,3.8,3.7c0.7,10.8,2,21.7,2.3,32.5c0.7,23-21.8,36.7-42.2,25.9C296.5,306.3,293.1,296.9,293.2,287.2z M451.9,249.9
	c7.2,0,14.4,0.1,21.6-0.1c3-0.1,4,0.9,4.2,3.9c0.6,10.5,1.9,20.9,2.3,31.4c0.9,21.5-15.6,34.4-36.4,29c-11.5-3-19.6-12.8-19.4-25.3
	c0.2-12,1.6-24,2.3-36c0.2-2.7,1.7-3,3.9-3C437.5,249.9,444.7,249.9,451.9,249.9z M143.7,114.4c0-6.6,0.1-13.2-0.1-19.8
	c-0.1-2.7,0.8-3.5,3.6-3.7c15.2-0.7,15.2-0.8,15.2,14.1c0,9.5-0.1,19,0.1,28.5c0.1,3.3-0.9,4.2-4.2,4.3
	c-14.6,0.3-14.6,0.4-14.6-14.1C143.7,120.6,143.7,117.5,143.7,114.4z M152.5,390c-8,0-15.9-0.1-23.9,0.1c-2.8,0.1-3.6-0.9-3.6-3.6
	c0.1-16.3,0.1-32.6,0-48.9c0-2.8,0.9-3.6,3.6-3.6c16.3,0.1,32.6,0.1,48.9,0c2.8,0,3.6,0.9,3.6,3.6c-0.1,16.3-0.1,32.6,0,48.9
	c0,2.8-0.9,3.6-3.6,3.6C169.2,389.9,160.8,390,152.5,390z"/>
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
                                    <button :style="{background:'rgba('+getterChampagneBottleBg1+')'}" @click="ShowElement(getterChampagneBottleBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChampagneBottleBg2+')'}" @click="ShowElement1(getterChampagneBottleBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChampagneBottleBg3+')'}" @click="ShowElement2(getterChampagneBottleBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterChampagneBottleBg4+')'}" @click="ShowElement3(getterChampagneBottleBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChampagneBottleBg5+')'}" @click="ShowElement4(getterChampagneBottleBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var ChampagneBottle= [
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
            var randomNumber = ChampagneBottle[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  ChampagneBottle[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'ChampagneBottle'){
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
                getterChampagneBottleBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChampagneBottle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChampagneBottleBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChampagneBottle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChampagneBottleBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChampagneBottle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChampagneBottleBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterChampagneBottleBg5: {
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
                            name:'ChampagneBottle',
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