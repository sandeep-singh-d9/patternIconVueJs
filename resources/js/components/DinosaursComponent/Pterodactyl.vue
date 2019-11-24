<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.8);">
                  <path style="fill:#F5C400; transform:scale(0.2)" :class="ValueId+'_color1'" d="M374.3,260.8c4.3,18.2,8.4,36.4,12.7,54.5c3.2,13.6-0.5,23.2-10.5,32c-10.6,9.2-13.8,8.6,0.5,20.6
    c6.8,5.7,12.2,12.5,15.9,20.6c0.6,1.4,1.5,3.1,0.1,4.4c-1.3,1.2-2.6-0.1-3.8-0.6c-5.5-2.3-11-4.6-16.4-7.1c-1.2-0.5-2.6-1.3-3.3-2.3
    c-5.7-7.7-11.7-15.1-15.5-24c-3.3-7.7-2.7-9.4,4.9-12.8c1.1-0.5,2.2-0.9,3.2-1.5c8.4-4.7,8.8-8.9,1.4-14.5
    c-7.3-5.4-14.8-10.7-23.5-13.9c-6.3-2.3-11.6-1.4-16.3,3.6c-6.2,6.5-10,14.3-12.5,22.8c-1.6,5.3,1.9,11.1,8.1,14.5
    c11.7,6.5,11.9,7.3,5.2,19.3c-3.6,6.5-7.5,12.9-12.6,18c-6,6.2-14.8,8.3-22.8,10.8c-3.1,1-1.8-2.5-1.1-4.2
    c3.3-7.9,8.5-14.3,14.8-19.9c12.3-10.9,11.9-10.6,0.9-22.7c-16.9-18.6-29.8-39.8-35-64.8c-2.8-13.5-2.5-27.3-0.4-41
    c0.7-4.3-0.1-8.6,0.4-12.9c1.8-16.1-10-21.4-20.2-22.5c-3.1-0.3-6.3,0-9.2-1.6c-2.3-0.7-3.7,0.7-5.1,2.2
    c-12.9,12.7-25.2,26-40.3,36.4c-2.2,1.5-3.7,4.1-5.5,6.3c-14.1,17.5-28.2,35-42.4,52.4c-2.4,3-5.1,8-9.3,5
    c-3.6-2.6-1.2-7.5,0.9-10.9c5.6-9.2,11.6-18.1,16.3-27.7c4.8-9.8,9.6-19.6,14.2-29.5c1.4-3,2.8-6.1,3.2-10c-2.5-0.3-4.2,1.1-5.8,2.2
    c-20.8,14.5-39.8,31.1-55.9,50.8c-0.6,0.8-1.2,1.6-1.8,2.4c-1.8,2-4.1,2.7-6.4,1.6c-2.6-1.3-1.8-3.7-0.9-5.8
    c4.6-11,10.6-21.4,17.6-31.1c15.1-21,32.6-40.2,49.2-60c1.7-2,3.2-3.9,3.4-6.7c1-13.5,6.9-24.3,18.5-31.7c3-4.4,8-5.8,12.5-7.6
    c7.2-2.9,13.1-7.5,18.9-12.3c4.4-3.6,4.2-4.6-0.9-7.6c-16.6-9.9-33.2-19.7-48.9-31c-9.1-6.5-16.8-14.6-26-20.9
    c-20.2-13.9-43.3-20.7-66.8-26.4c-16.1-3.9-32.4-6.2-48.7-8.8c-3.7-0.6-7.2-2.1-11-2.2c-1.2-0.3-2.4-0.7-2.2-2.3
    c0.4-2.4,2.4-1.7,3.8-1.6c12.3,0.9,24.6,1.4,36.9,2.9c25.3,2.9,50.5,6.3,74.8,14.6c3.2,1.1,3.9,0,3.7-2.9c-0.3-3.2-1.1-6.2-1.8-9.4
    c6.6,3.7,10.3,9.5,12.4,17c3.4-4.3,3.4-9.8,5.7-14.9c2.7,6.4,5.1,12.2,3.4,18.7c-0.8,2.9,1.3,4,2.8,5.4
    c15.4,13.8,33.7,23.2,51.4,33.4c9.5,5.4,19.7,9.5,28.5,16.1c2.5,1.9,3.7,0.9,5.2-1.1c3.9-5.3,7.4-10.9,9.7-17c1.5-4.1,4.5-4.6,8.1-4
    c3.8,0.7,5.1,3,5.3,6.8c0.4,8.6-2.3,16.1-7.9,22.5c-3.3,3.7-2.1,5.6,1.5,8c15.2,10.2,30.3,20.6,45.3,31.1c3.1,2.2,5.9,2.4,9.4,1.3
    c18.1-5.4,34.4-14.5,50.5-24c29.3-17.3,57-37.2,85.2-56.1c7.6-5.1,15.3-10,22.8-15c-2.1-4.5-6.9-4.5-10.9-7.5
    c8-1.3,14.9-0.7,22.2,2.1c-1.1-5.4-4.3-8.7-6.7-13.1c4.7,0.5,8.6,2.4,11.5,5.2c3.4,3.2,6.1,2.3,9.5,0.8c27.6-11.8,55.5-22.6,84.1-32
    c2.3-0.7,4.6-1.2,6.9-2c3.2-1.2,6.2-1,7.4,2.5c1.4,3.8-1.3,5.4-4.5,6.2C537.3,55.5,486.6,82.6,439.6,116
    c-28.5,20.3-56.2,41.7-85.5,61c-5.4,3.6-6.2,6.5-4,12.8c6.5,18.6,13.4,37,20,55.6C371.7,250.4,373.9,255.3,374.3,260.8z"/>
<path style="fill:#BB9500; transform:scale(0.2)" :class="ValueId+'_color2'" d="M374.3,260.8c-5.5-12.1-9-24.9-13.7-37.2c-4.4-11.5-8.3-23.2-12.6-34.7c-2-5.3-0.5-9.7,4-12.4
    c37-22.4,69.2-51.4,105.6-74.6c39.7-25.3,80.9-48.1,125.6-63.8c2.8-1,5.5-2.3,8.6-1.8c-11.7,8.2-23.6,16-34.7,25
    c-37.4,30.1-69.8,64.4-90.1,108.6c-2,4.4-5.9,6.2-9.5,8.6c-21.7,13.7-43,27.9-61.2,46.3C386,235,377.6,246.3,374.3,260.8z M84,69.8
    c17,7.8,34.5,15.5,46.3,30.7c9.9,12.8,21.3,24.1,32.5,35.6c8.4,8.7,18.3,15.9,26.1,25.3c12.1-5.9,24.7-10.9,34.6-20.5
    c3.3-3.2,3.5-4.4-0.8-6.9c-20.4-11.9-41-23.6-59.3-38.7c-10.8-8.8-21.2-18-33.9-24C107.4,61,84,54.9,60.2,50.4
    c-14-2.7-28-5-42.3-5.8C40.4,51.8,62.6,59.9,84,69.8z M256,235.5c4.2,5.6,11.1,9.2,12.1,17.1c1.6-5.5,2.1-11.1,2.3-16.8
    c0.3-7.4-3.2-12.6-9-16.2c-6.8-4.2-14.5-4.8-22.3-4C244.8,222.1,250.8,228.5,256,235.5z M284.7,302.1c0.7,9.3,6.8,16.5,15.3,18.2
    c6,1.2,11.3-0.7,16.4-3.8c9.9-6.1,20.5-9,32.3-8.4c7.3,0.4,13.5-3,17.2-9.8c3.5-6.5,3.9-13.5-0.6-19.2c-14-17.5-31.4-28.7-54.9-26.5
    c-11.7,1.1-20,7-23.6,18.8c-2,6.6-2.5,13.2-2.1,20C284.7,294.9,284.5,298.5,284.7,302.1z M246.5,148.5c-1.4-0.8-2.5-0.7-3.5,0.7
    c-4.1,5.2-8.3,10.3-13.1,16.2c15.7-0.6,30.6,0,47,2.2C266.4,159.8,256.2,154.5,246.5,148.5z"/>
<path style="fill:#F8F7F7; transform:scale(0.2)" :class="ValueId+'_color4'" d="M206.1,202c-0.9,6-4.3,9.8-10.3,9.5c-5.5-0.3-9.1-4-9.1-9.8c0-5.9,3.6-9.3,9.2-9.4
    C202,192.2,205.5,195.8,206.1,202z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color3'" d="M203,204c-0.7,4.7-3.4,7.8-8.1,7.5c-4.3-0.2-7.2-3.2-7.2-7.7c0-4.6,2.8-7.3,7.3-7.4
    C199.7,196.3,202.5,199.1,203,204z"/>
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
                                    <button :style="{background:'rgba('+getterPterodactylBg1+')'}" @click="ShowElement(getterPterodactylBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPterodactylBg2+')'}" @click="ShowElement1(getterPterodactylBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPterodactylBg3+')'}" @click="ShowElement2(getterPterodactylBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPterodactylBg4+')'}" @click="ShowElement3(getterPterodactylBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <!-- <button :style="{backgroundColor:'rgba('+getterPterodactylBg5 +')'}" @click="ShowElement4(getterPterodactylBg5 )" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPterodactylBg6+')'}" @click="ShowElement5(getterPterodactylBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPterodactylBg7+')'}" @click="ShowElement6(getterPterodactylBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPterodactylBg8+')'}" @click="ShowElement7(getterPterodactylBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPterodactylBg9+')'}" @click="ShowElement8(getterPterodactylBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPterodactylBg10+')'}" @click="ShowElement9(getterPterodactylBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Pterodactyl= [
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
            var randomNumber = Pterodactyl[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Pterodactyl[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Pterodactyl'){
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
                getterPterodactylBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pterodactyl') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pterodactyl') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pterodactyl') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPterodactylBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPterodactylBg10: {
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
                            name:'Pterodactyl',
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