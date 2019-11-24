<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#006699; transform:scale(0.2)" :class="ValueId+'_color2'" d="M549.9,119.1c-3.3,7.6-8,14-16.8,15.2c-6,0.8-12.1,0.5-18.2,0.4c-2.6,0-3.8,0.7-4.9,3.3
    c-3.5,8.6-10.2,12.9-19.4,13.1c-7.1,0.2-14.2,0.2-21.3,0c-11.9-0.4-20.4-9.1-20.4-21.1c-0.1-9.9-0.2-19.8,0.1-29.6
    c0.1-3.3-0.8-4.8-4.3-4.3c-1.5,0.2-3.1,0.2-4.7,0c-2.8-0.3-3.3,0.6-2.9,3.5c1,6.9-0.7,13.5-4.3,19.4
    c-25.1,41.7-50.2,83.3-75.6,124.8c-2.1,3.5-2.9,6.6-2.9,10.5c0.1,30.5,0.2,61,0,91.6c0,10.1,3.8,19.3,6.4,28.7
    c12.1,44.9,24.6,89.7,36.9,134.6c5,18.1-2.9,33.3-20.4,39.8c-0.5,0.2-0.8,0.6-1.2,0.9c-5.2,0-10.4,0-15.6,0
    c-12.3-2.3-19.6-9.9-23.4-21.5c-12.2-36.9-24.5-73.6-36.8-110.5c-1.8-5.4-3.9-10.8-5.7-16.2c-2.1-6.1-5.9-9.1-11.3-9
    c-5.2,0.1-8.7,3-10.9,8.9c-6.6,17.7-12.3,35.7-18.4,53.6c-8.7,25-17,50.2-25.9,75.2c-3.5,9.9-13.8,19.9-24.7,19
    c-3.6-0.2-7.2,0.4-10.7-0.3c-17.6-3.2-28.6-20.2-23.8-37.8c14-51.6,28.2-103.1,42.3-154.6c0.9-3.4,1.4-6.7,1.4-10.2
    c0-31.7,0-63.5,0.1-95.2c0-1.5-0.1-2.9-1-4.4c-26-42.7-52-85.5-77.9-128.3c-3.6-5.9-5.1-12.5-3.9-19.5c0.4-2.5-0.2-2.8-2.5-3
    c-9.4-0.6-9.4-0.6-9.4,8.5c0,8.5,0,17,0,25.5c-0.1,12-8.5,20.7-20.5,21.1c-7.3,0.2-14.6,0.3-21.8,0c-8.9-0.4-15.5-4.7-18.8-13.1
    c-1-2.6-2.2-3.4-4.8-3.3c-4.8,0.2-9.7,0.1-14.6,0c-11.3-0.2-20.2-8.9-20.3-20.1c-0.2-20.5-0.1-40.9,0-61.4
    c0.1-11,8.6-19.6,19.7-20.3c2.2-0.1,4.5-0.1,6.8,0c6.7,0.3,12.7,1.1,16-7.6c2.1-5.7,8.4-8.3,15.1-8.2c7.8,0.2,15.6,0,23.4,0.1
    c11.1,0,19.7,8.3,19.9,19.6c0.2,10.2,0.2,20.5,0,30.7c-0.1,3.5,1,4.3,4.4,4.3c107.5-0.1,215-0.1,322.6,0c3.1,0,4.2-0.7,4.1-4
    c-0.2-10.1,0.2-20.1-0.2-30.2c-0.4-10,9-21.6,20.8-20.5c7,0.7,14.2,0.4,21.3,0.1c9.4-0.4,15.5,4.3,19,12.4c1.2,2.8,2.6,3.6,5.3,3.4
    c2.4-0.2,4.9,0.1,7.3-0.1c12.7-1.2,22.2,3.3,27.3,15.5C549.9,71.9,549.9,95.5,549.9,119.1z"/>
<path style="fill:#757799; transform:scale(0.2)" d="M204.5,548.9c-0.2,0.3-0.2,0.6-0.1,1c-3.8,0-7.6,0-11.4,0c-0.1-0.3-0.2-0.5-0.2-0.8
    C196.7,549,200.6,548.9,204.5,548.9z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color5'" d="M373.5,96.4c-2.7,4.5-5.1,8.4-7.5,12.3c-15.6,25.7-31.3,51.4-46.8,77.2c-1.9,3.2-3.3,4-7.1,2.3
    c-19.1-8.4-38.3-8.2-57.3,0.3c-2.2,1-3.9,2.4-5.9-0.9c-18-30-36.2-59.8-54.4-89.7c-0.2-0.4-0.2-0.9-0.4-1.6
    C253.8,96.4,313.3,96.4,373.5,96.4z"/>
<path style="fill:#64C4F4; transform:scale(0.2)" :class="ValueId+'_color4'" d="M332.1,298.8c0,5.6,0.3,11.2-0.1,16.7c-1.9,25.9,2.6,50.8,9.9,75.6c12.6,43,23.9,86.4,35.7,129.6
    c1.7,6.2,0.4,10-3.9,11.2c-5,1.3-8.2-0.8-10.2-6.9c-14-43.4-28.6-86.5-43.3-129.6c-6-17.4-17.8-27.5-35.9-28
    c-15.1-0.5-30.5,7.9-36.6,25.6c-15.1,43.6-30,87.2-45,130.8c-0.2,0.7-0.4,1.4-0.7,2c-1.8,4.9-5,7.1-8.7,5.7
    c-4.5-1.7-5.5-5.2-4.3-9.6c3-10.7,6-21.3,8.9-32c12.2-44.4,24.3-88.9,36.5-133.3c0.6-2.2,0.6-4.3,0.6-6.4c0-33.4,0-66.9,0-100.3
    c0-22.9,16-42.9,38.4-48.3c25.3-6.1,52.1,10.9,57.7,36.5c0.8,3.5,1.1,7,1.1,10.7C332.1,265.3,332.1,282,332.1,298.8z M229.3,209
    c2-2.5,2.1-4.4,0.3-7.3c-8.5-13.4-16.7-27.1-25-40.7c-12.2-20.1-24.4-40.2-36.6-60.3c-1.3-2.2-2.6-4.5-5.7-4.6
    c-2.9-0.1-5.6,0-7.4,2.8c-2.1,3.4-1.1,6.5,0.9,9.6c17.8,29.4,35.6,58.9,53.4,88.3c4.3,7.1,8.7,14,13.2,21.4
    C224.9,214.8,227,211.8,229.3,209z M398.7,101.3c-19,31.3-37.8,62.7-57.2,93.7c-4.5,7.1-6.5,12.2,0.4,18.8c2.9,2.8,3.5,3.8,5.9-0.2
    C360,193,372.6,172.6,385,152c9-14.9,18-29.9,26.8-44.9c3.3-5.6,0.4-10.9-6.1-11C402.1,95.5,400.4,98.5,398.7,101.3z"/>
<path style="fill:#52A3CC; transform:scale(0.2)" :class="ValueId+'_color3'" d="M102.1,84.3c0,15.8-0.2,31.7,0.1,47.5c0.1,4.6-1.2,6.6-9.3,6.5c-19.1-0.2-19.1,0.1-19.1-12.4
    c0-29.7,0.1-59.4-0.2-89.1c0-4.8,1.2-6.8,9.8-6.7c18.7,0.4,18.7,0,18.7,11.9C102.1,56.1,102.1,70.2,102.1,84.3z M495,41.7
    c0-11.6,0-11.3-20-11.7c-9.6-0.2-11.7,1.6-11.6,6.9c0.4,29.7,0.2,59.4,0.2,89.1c0,12.1,0,11.8,20.6,12.1c9.4,0.2,11.1-1.9,10.9-6.7
    c-0.5-15.8-0.2-31.7-0.2-47.5C495.1,69.9,495.1,55.8,495,41.7z"/>
<path style="fill:#FFFFFF; transform:scale(0.2)" :class="ValueId+'_color1'" d="M28.1,83.7c0-10.9,0.4-21.8-0.2-32.6c-0.3-5.5,2.6-6.8,10.1-6.8c20.8,0.1,20.9-0.1,20.9,14.3
    c0,19.5-0.2,38.9,0.2,58.4c0.1,5.1-2.2,6.3-9.3,6.3c-21.7-0.1-21.6,0.2-21.6-14.6C28.1,100.4,28.1,92,28.1,83.7z M539.5,58.6
    c0-14.4,0-14.2-21.4-14.3c-7.8-0.1-10.3,1.3-10.2,6.7c0.5,19.2,0.2,38.4,0.2,57.6c0,14.8,0,14.5,21.8,14.7c8.3,0,10-2,9.8-7.1
    c-0.5-10.9-0.1-21.7-0.1-32.6C539.5,75.3,539.5,67,539.5,58.6z"/>
<path style="fill:#006699; transform:scale(0.2)" :class="ValueId+'_color2'"  d="M283.7,180.7c-22.4,0.1-40.5-17.9-40.3-40.2c0.1-22.1,18.1-40,40.1-40c22.1-0.1,40.5,18.3,40.4,40.3
    C323.7,162.8,305.8,180.6,283.7,180.7z"/>
<path style="fill:#FECC93; transform:scale(0.2)" :class="ValueId+'_color6'"  d="M309.8,141.2c-0.2,15-11.8,26.1-27.1,25.9c-14.5-0.2-25.6-11.9-25.4-26.7
    c0.2-14.5,12.1-26.4,26.2-26.3C298.1,114.1,309.9,126.3,309.8,141.2z"/>
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
                                    <button :style="{background:'rgba('+getterWeightliferBg1+')'}" @click="ShowElement(getterWeightliferBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWeightliferBg2+')'}" @click="ShowElement1(getterWeightliferBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWeightliferBg3+')'}" @click="ShowElement2(getterWeightliferBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWeightliferBg4+')'}" @click="ShowElement3(getterWeightliferBg4)" :class="this.ValueId+'_color3btnlor4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterWeightliferBg5 +')'}" @click="ShowElement4(getterWeightliferBg5 )" :class="this.ValueId+'_color5btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterWeightliferBg6+')'}" @click="ShowElement5(getterWeightliferBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterWeightliferBg7+')'}" @click="ShowElement6(getterWeightliferBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWeightliferBg8+')'}" @click="ShowElement7(getterWeightliferBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWeightliferBg9+')'}" @click="ShowElement8(getterWeightliferBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterWeightliferBg10+')'}" @click="ShowElement9(getterWeightliferBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Weightlifer= [
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
            var randomNumber = Weightlifer[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Weightlifer[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Weightlifer'){
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
                getterWeightliferBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Weightlifer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Weightlifer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Weightlifer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterWeightliferBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWeightliferBg10: {
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
                            name:'Weightlifer',
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