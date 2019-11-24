<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M177.2,539.9c-8.5-6.8-16-14.4-19.5-25c-5.9-17.7-3.2-33.8,8.5-48.3c1.7-2.1,3.3-3,6.2-1.8
	c14,5.6,28,5.2,41.8-0.6c3.3-1.4,4.6-1.4,5.9,2.4c5.2,14,14.4,24.6,28,31.1c3.1,1.5,3.4,3.3,3.1,6.2c-3,27.7-30.3,47.5-57.8,42
	c-1.2-0.2-2.3-1-3.6-0.4C185.6,543.6,181.4,541.7,177.2,539.9z"/>
<path style="fill:#6EA923;transform:scale(0.2)" :class="ValueId+'_color1'" d="M511.9,116.8c-6.6,4-12.3,8-18.4,11.1c-6,3.1-12.9,3.3-19.6,4.9c5.2,1,10.4,2,15.7,3
	c11,2,18.3,7.7,20.1,19.5c1,6.8,2.9,13.5,4.3,20.3c1.5,6.8,4.6,12.9,8.5,19.3c-13.3,0.1-25.2,4.1-37.3,7.4c-2.4,0.7-4.8,1.1-7.3,1.5
	c-9.1,1.6-16.7-0.9-22.8-8c-4.8-5.6-8.4-12.1-12.7-18.3c3.2,13.8-0.4,27.4-0.4,41.4c-21.2-6-38.5-16.7-46.8-38.9
	c-2.8,3.4-2.1,7.3-2.9,11.1c-3.4-1.2-5.7-3.7-8.1-5.9c-7.5-7.1-12.5-15.8-15.8-25.5c-4.4-12.9,0-23.6,8.9-32.9
	c1.8-1.9,4-3.5,6.1-5.1c7.2-5.4,7.3-5.5-0.5-10.5c-8.5-5.5-17.9-9.3-27.2-13.2c-3.6-1.5-4.5-0.7-4.5,3.1c0.2,20.4-1.7,40.6-4.7,60.8
	c-0.1,0.7-0.3,1.4-0.5,2c-4.2-1-8.3-2.2-12.5-2.9c-3.4-0.6-2.5-3-2.4-4.9c0.4-14,1-27.9,0.3-41.9c-1.4-29.5-6.7-58.4-15.6-86.6
	c-1.2-3.8-0.4-4.8,3.2-5.4c5.9-1.1,11.8-2.4,17.6-4.2c3.7-1.1,4.8,0.1,5.7,3.5c4.5,17.4,7,35.1,7.9,53c0.2,3.9,1.6,6,5.1,7.6
	c14,6.6,27,14.7,39.9,24.7c2.9-19.8,13-33.9,32-39.3c16.9-4.8,32.9-0.8,47.9,9c-4.3,2.1-9.1,1.7-13.1,4.8c4.6,1,8.8,1.7,12.9,2.7
	c10.1,2.3,18.2,7.6,24.1,16.2C502.8,105.8,506.2,111.9,511.9,116.8z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M288.5,288.5c10.9-24.8,39.3-36,64-25.2c24.4,10.7,35.5,39.7,24.6,64.4
	c-10.7,24.2-39.7,35.6-63.9,25.1C288.9,342.3,277.7,313.1,288.5,288.5z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M275.4,229.9c9.3,4.4,18,14,22.8,27.4c1,2.8,0.8,4.6-1.7,6.8c-14.4,12.2-21.2,28-20.6,46.8
	c0.1,3.4-0.8,5.1-3.8,6.4c-17.8,7.3-34.8,6.1-50-6.1c-15.5-12.4-21.4-29-17.2-48.3C211.4,232.2,243.7,215.8,275.4,229.9z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M125,223.1c6.7-17.7,25.7-30.4,45.9-30.1c19.7,0.3,37.7,13.3,44.3,31.7c1,2.9,0.4,4.4-1.6,6.4
	c-13.9,12.9-19.9,29-18.1,47.8c0.4,4.1-1.6,5.3-4.3,6.6c-17.5,8.8-38.9,6.1-53.6-6.8c-14.5-12.7-20.1-33.5-13.9-51.8
	C124.1,225.8,124.4,224.8,125,223.1z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M455.8,366.5c-8.4,18.8-27,30.2-47.1,29.1c-20-1.2-37-14.5-43.4-33.8c-1.3-3.9-1-6.3,2.7-9.3
	c14.1-11.2,21.5-26.1,21.5-44.2c0-3.9,1.3-5.6,4.7-6.9c18.2-7.1,39-2.7,52.4,11.3C460.4,327.1,464,348.2,455.8,366.5z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M254.7,491.3c-30.2-13.2-39.2-51.8-18.7-76c2-2.3,3.8-3,6.8-1.9c19,6.8,36.9,4.2,53.4-7.3
	c2-1.4,3.4-1.1,5.2,0.2c18.1,12.1,25.5,37.7,16.9,58.7c-8.7,21.1-32.5,33.9-54.5,29.1C260.4,493.3,257,492.4,254.7,491.3z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M278.5,201.2c7.3-21.2,29-34.5,51-32.3c22.1,2.2,40,20,42.6,42.2c1.9,16-3.1,29.6-14.3,41.1
	c-1.7,1.7-3.1,2.7-5.9,1.7c-13.7-4.9-27.5-4.5-40.9,1.3c-3.4,1.5-4.4,0.7-5.5-2.5c-5-13.7-14.1-24-27-30.7c-2.1-1.1-2.8-2.3-2.8-4.5
	C275.8,211.4,276.5,205.5,278.5,201.2z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M176.5,457.4c-25.7-11.4-37.5-37.2-30.1-60.1c7.7-24,31.2-38.2,55.5-33.9c3.1,0.6,4.3,1.5,4.8,4.9
	c2.3,15.2,9.4,27.7,21.6,37.1c2.4,1.8,2.8,2.8,0.8,5.3c-9.1,11.5-13.4,24.8-12.4,39.5c0.2,3-1.1,4.1-3.3,5.1
	C200,461.4,186.7,461.5,176.5,457.4z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M307.7,378.4c-10.3,23.7-36.4,35.7-59.3,27.9c-25.2-8.6-38.5-32.9-32.3-58.5
	c1.8-7.4,5.5-13.7,10.1-19.6c1.4-1.8,2.8-2.6,5.4-1.6c14.4,5.1,28.8,5,42.9-1.2c2.7-1.2,3.6-0.5,4.5,2.1c5.2,14.7,15.2,25.4,29,32.3
	c3.1,1.6,3.5,3.3,3.1,6.3C310.5,370.6,309.4,375,307.7,378.4z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M136.9,308.3c0.4-0.8,1.2-2.4,2-4c5-9.3,5.9-9.8,15.7-7.2c13.6,3.6,26.7,2.4,39.2-3.8
	c3.5-1.7,4.6-1,5.9,2.4c3.7,9.2,9.7,16.8,17.7,22.7c2.3,1.7,3.8,2.8,1.1,6c-6.6,7.6-10.6,16.7-11.7,26.8c-0.4,3.8-1.8,3.9-5.1,3.4
	c-16.2-2.4-31.1,1.2-43.8,11.6c-3.8,3.1-5.8,2.2-8.8-0.4C132.7,351.8,127.6,328.9,136.9,308.3z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M386.5,418.2c-8.5,19.6-29.8,31.7-50.8,29c-3.5-0.4-5.4-1.3-5.6-5.6c-1-16.6-8.4-30.1-21.5-40.4
	c-2.8-2.3-2.9-3.5-0.8-6.3c6.3-7.9,10.2-16.9,11.5-27c0.3-2.7,0.9-4.1,4.2-3.5c10,1.9,19.8,0.7,29.1-3.1c2.7-1.1,3.6-0.6,4.4,2.1
	c5,16.5,15.4,28.4,30.9,35.8c2,1,2.5,2.2,2.3,4.1C389.7,408.5,388.5,413.4,386.5,418.2z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M441.8,288.2c0,0-0.4,0.7-0.7,1.6c-1.6,4.8-3.9,5.9-9,3.7c-13.1-5.6-26.6-5.2-39.9-0.3
	c-3.3,1.2-4.4,0.8-5.4-2.7c-3.5-11.9-10.5-21.6-20.6-28.9c-3-2.2-2.6-3.3-0.5-5.6c7.6-8.3,12.5-18,14.2-29.2c0.6-3.7,2.3-5,5.5-5.8
	c34.2-9.3,66.6,20.8,60,55.8C444.9,280.5,443.8,284,441.8,288.2z"/>
<path style="fill:#734BAE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M257.4,153.8c9.1,4.3,16.9,11.6,22.3,21.7c1.3,2.5,1.5,4.4-0.6,7.1c-7.1,9-11.1,19.3-11.8,30.7
	c-0.2,3.3-1.1,4-4.5,3.4c-12.4-2.3-24.4-0.7-35.6,5c-2.9,1.5-3.8,0.7-4.9-2c-5.9-14-15.6-24.3-29.6-30.3c-2.6-1.1-3.4-2.3-2.6-5.2
	C198,156.6,229.8,141.7,257.4,153.8z"/>          
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
                                    <button :style="{background:'rgba('+getterGrapesBg1+')'}" @click="ShowElement(getterGrapesBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGrapesBg2+')'}" @click="ShowElement1(getterGrapesBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterGrapesBg3+')'}" @click="ShowElement2(getterGrapesBg3)" :class="this.ValueId+'_color3btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGrapesBg4+')'}" @click="ShowElement3(getterGrapesBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGrapesBg5+')'}" @click="ShowElement4(getterGrapesBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Grapes= [
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
            var randomNumber = Grapes[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Grapes[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Grapes'){
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
                getterGrapesBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Grapes') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Grapes') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Grapes') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrapesBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGrapesBg5: {
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
                            name:'Grapes',
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