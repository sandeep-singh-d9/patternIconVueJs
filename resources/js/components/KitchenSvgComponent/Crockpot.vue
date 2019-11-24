<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#E8E9EC;transform:scale(0.2)" :class="ValueId+'_color2'" d="M448.1,233.1c0,64.6,0.2,129.2-0.1,193.8c-0.1,14.5-8.3,24.8-20.2,32.3c-1.5,1-3.1,1.9-4.7,2.9
	c-2.4,2.4-5.6,2.9-8.7,3.3c-2.5,0.4-5,0.3-7.5,0.3c-100.6,0-201.1,0-301.7,0c-5.6,0-11.4,0.5-16.2-3.6c-7.5-4.2-14.3-9.2-18.9-16.5
	c-3.9-6.1-6-12.8-6-20.2c0-64.4,0-128.9,0-193.3c-2.6-4.2-1.6-8.7-1-13.1c0.4-2.8,0.8-5.5-0.1-8.3c-0.3-0.8-0.4-1.6-0.3-2.5
	c0.7-8.9,0.4-17.7,0-26.6c-0.1-2.5,0.4-5,3-6.4c2.4-1,4.9-0.8,7.4-0.8c122.3,0,244.5,0,366.8,0c2.5,0,5-0.2,7.4,0.7
	c3.8,3.3,2.3,7.8,2,11.7c-0.3,4.1-0.8,8.1,0,12.3c0.6,3.2,0.6,6.7-0.2,9.9c-0.7,2.8-0.5,5.5,0,8.3
	C450.2,222.7,449.7,227.9,448.1,233.1z M240.1,48.1c46.1,0,92.2-0.4,138.3,0.2c22,0.3,40.1,9.9,54,27.2
	c12.4,15.4,16.5,33.2,15.8,52.5c-0.2,0.2-0.5,0.5-0.7,0.7c-15.7,1.6-31.4,1.7-47.1-0.1c-1.8-1.6-1.9-3.8-2.3-5.9
	c-3.5-15.6-15.1-25.1-31.1-25.1c-73.8,0-147.7,0-221.5,0c-16.2,0-27.9,9.5-31.4,25.4c-0.4,1.9-0.4,4-2,5.6c-1.6,1-3.4,1.1-5.3,1.1
	c-12.4,0.1-24.8,0.1-37.2,0c-1.7,0-3.3-0.1-4.8-0.9c-0.2-0.2-0.5-0.5-0.7-0.7c-0.8-13.5,1.1-26.6,7-38.7
	c8.5-17.2,21.4-29.8,39.9-36.5c10.8-3.9,21.8-5.2,33.2-4.8c1.9-1.7,4.3-1.6,6.6-1.6c27.6,0,55.1,0,82.7,0
	C235.8,46.5,238.2,46.3,240.1,48.1z"/>
<path style="fill:#CDCCCA;transform:scale(0.2)" :class="ValueId+'_color3'" d="M89.1,462.1c9.2,2.7,18.7,2,28.2,2c92.6,0,185.1,0,277.7,0c9.4,0,18.9,0.7,28.2-2
	c-2.4,14.7-15.4,26-30.2,26c-91.2,0-182.4,0-273.7,0C104.5,488.1,91.4,476.7,89.1,462.1z M65.1,176.2c-1.2,5.8-2.3,11.6,0.6,17.3
	c0.7,1.4-0.3,2.5-0.7,3.7c-1.4,5.2-1.8,10.3,0.2,15.4c0.4,0.9,1,1.8,0.5,2.8c-3,5.3-1.2,11.1-1.7,16.6c-22.3-0.2-40.2-18-39.9-40.3
	c0.1-10.3-1.2-20.6,0.8-30.8c3.9-19.7,19.1-32.5,39.1-33l0.1,0.1c1.2,1.3,1.5,3,1.5,4.6c0.1,13.5,0.1,27,0,40.5
	C65.7,174.3,65.4,175.2,65.1,176.2z M448.1,233.1c-2.1-2.5,0.2-5,0.2-7.5c-0.3-7.2-0.6-14.3-0.5-21.5c0.1-9.3,0.7-18.7,0.4-28
	c-1.6-1.7-1.6-3.9-1.6-6.1c-0.1-11.9-0.1-23.8,0-35.7c0-2.1-0.1-4.3,1.5-6.1l0.1-0.1c22.9,0.6,40.1,18,39.9,41
	c-0.1,10,1,19.9-0.7,29.9c-3.3,19.4-18.8,31.5-36.6,33.2C449.8,232.2,448.8,232.1,448.1,233.1z"/>
<path style="fill:#F9E08A;transform:scale(0.2)" :class="ValueId+'_color4'" d="M256.1,424.1c-42,0-84,0-125.9,0c-12.1,0-18.1-6-18.1-18.1c0-36,0-72,0-107.9
	c0-11.8,6.1-17.9,17.8-17.9c84.1,0,168.2,0,252.4,0c11.8,0,17.8,6.1,17.8,17.9c0,36.1,0,72.3,0,108.4c0,11.4-6.2,17.7-17.5,17.7
	C340.4,424.1,298.3,424.1,256.1,424.1z M448.1,129.2c0,16,0,31.9,0,47.9c-96,0-192,0-288,0.1c-31.7,0-63.3,0.1-95,0.1
	c-1.4-1.1-1-2.7-1-4.2c0-14.6,0-29.2,0-43.9c16-0.1,32-0.1,48-0.2c2-1.7,4.4-1.5,6.7-1.5c91.5,0,183.1,0,274.6,0
	c2.3,0,4.7-0.2,6.7,1.5C416.1,129,432.1,129.1,448.1,129.2z"/>
<path style="fill:#B6292A;transform:scale(0.2)" :class="ValueId+'_color1'" d="M240.1,48.1c-32,0-63.9,0-95.9,0c0.1-13.3,10.7-24,24-24c16,0,31.9,0,47.9,0
	C229.2,24.1,240,34.8,240.1,48.1z M192.1,352c0,13-11.1,24-24.1,24c-12.9,0-24-11.2-23.9-24.2c0.1-12.9,11.2-23.9,24.3-23.8
	C181.1,328.1,192.1,339.3,192.1,352z"/>
<path style="fill:#1669AD;transform:scale(0.2)" :class="ValueId+'_color5'" d="M224.1,319c0.6-4.2-2.2-10.8,1.2-14c3.1-3,9.5-0.7,14.5-0.9c4.2-0.1,8.3,0.1,12.5-0.1
	c3.1-0.2,4,1.1,4,4.1c-0.2,8-0.1,16,0,23.9c0.1,3-0.8,4.2-3.9,4.1c-8.1-0.2-16.3-0.1-24.4,0c-2.9,0-3.8-1.1-3.7-3.8
	C224.2,328.2,224.1,324,224.1,319z M295,336.1c-4.3-0.6-10.8,2.3-14-1.2c-3-3.1-0.7-9.5-0.9-14.5c-0.1-4,0.1-8-0.1-12
	c-0.1-3.1,0.6-4.5,4.1-4.4c8,0.2,16,0.2,23.9,0c3-0.1,4.1,0.9,4.1,4c-0.2,8-0.2,16,0,23.9c0.1,3.4-1.2,4.3-4.4,4.2
	C303.8,335.9,299.8,336.1,295,336.1z M353.2,304.1c4.2,0.6,10.8-2.3,14,1.2c3,3.1,0.7,9.5,0.9,14.5c0.1,4.2-0.1,8.3,0.1,12.5
	c0.2,3.1-1.1,4-4.1,4c-8-0.1-16-0.1-23.9,0c-3,0.1-4.1-0.8-4.1-4c0.2-8.1,0.1-16.3,0-24.4c0-2.9,1.1-3.8,3.8-3.7
	C344,304.2,348.2,304.1,353.2,304.1z M256.1,384.2c0,3.8-0.1,7.7,0,11.5c0.2,3.1-0.6,4.5-4.1,4.4c-8-0.2-16-0.2-23.9,0
	c-3,0.1-4.1-0.9-4.1-4c0.2-8,0.1-16,0-23.9c0-2.9,0.6-4.2,3.9-4.2c8.1,0.2,16.3,0.1,24.4,0c2.8,0,3.9,0.9,3.8,3.7
	C256,375.9,256.1,380.1,256.1,384.2z M312.1,384.2c0,4-0.2,8,0.1,12c0.2,3.1-1.2,4-4.1,3.9c-8-0.1-16-0.1-23.9,0
	c-3,0.1-4.1-0.9-4.1-4c0.2-8.1,0.1-16.3,0-24.4c0-2.9,1.1-3.7,3.8-3.7c8.1,0.1,16.3,0.1,24.4,0c2.8,0,3.9,0.9,3.8,3.7
	C312,375.9,312.1,380.1,312.1,384.2z M368.1,384.2c0,4-0.2,8,0,12c0.2,3.1-1.1,4-4.1,4c-8-0.1-16-0.1-23.9,0c-3,0.1-4.2-0.8-4.1-4
	c0.2-8.1,0.1-16.3,0-24.4c0-2.9,1.1-3.7,3.8-3.7c8.1,0.1,16.3,0.2,24.4,0c3.2-0.1,3.9,1.4,3.8,4.2
	C368,376.2,368.1,380.2,368.1,384.2z M447.5,162c0,10.9,0,21.9,0,32.8c-96,0-192,0-288,0c-31.7,0-63.3,0-95,0.1
	c-1.4-0.8-1-1.9-1-2.9c0-10,0-20,0-30.1c16,0,32-0.1,48-0.1c2-1.1,4.4-1,6.7-1c91.5,0,183.1,0,274.6,0c2.3,0,4.7-0.1,6.7,1
	C415.5,161.9,431.5,162,447.5,162z"/>
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
                                    <button :style="{background:'rgba('+getterCrockpotBg1+')'}" @click="ShowElement(getterCrockpotBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCrockpotBg2+')'}" @click="ShowElement1(getterCrockpotBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCrockpotBg3+')'}" @click="ShowElement2(getterCrockpotBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCrockpotBg4+')'}" @click="ShowElement3(getterCrockpotBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterCrockpotBg5 +')'}" @click="ShowElement4(getterCrockpotBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCrockpotBg6+')'}" @click="ShowElement5(getterCrockpotBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCrockpotBg7+')'}" @click="ShowElement6(getterCrockpotBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCrockpotBg8+')'}" @click="ShowElement7(getterCrockpotBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Crockpot= [
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
            var randomNumber = Crockpot[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Crockpot[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Crockpot'){
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
                getterCrockpotBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Crockpot') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCrockpotBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Crockpot') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCrockpotBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Crockpot') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCrockpotBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCrockpotBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCrockpotBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCrockpotBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCrockpotBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Crockpot',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
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