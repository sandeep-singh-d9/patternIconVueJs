<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#30309A; transform:scale(0.2)" :class="ValueId+'_color1'" d="M114.2,145.7c-1.7-12.3-0.8-24.8-0.7-37.1c0.3-22.6,0.5-45.2,7.1-67.1c1.5-5,3.6-9.6,6.4-14.1
	c3.6-5.8,9-9.3,15.3-11.5c3.5,0,6.9,0,10.4,0c19.5,1.9,34.5,12.8,49.2,24.3c18.6,14.5,34.3,31.8,47.9,51.2c0.4,0.5,0.6,1.2,1.4,1.4
	c15.8-23.4,46.6-23.6,61.7-0.5c1.5,0.1,1.9-1.3,2.5-2.2c15.5-21.8,33.9-40.8,55.6-56.4c8-5.7,16.6-10.5,25.6-14.4
	c4.5-2,9.3-2.1,13.9-3.3c3.8,0,7.6,0,11.4,0c14.5,4.5,19.3,16.6,22.8,29.5c4.6,16.9,5.4,34.3,5.8,51.7c0.3,14.5,0.2,28.9,0.2,43.4
	c0,1.7-0.5,3.4-0.8,5.1c-1.9-1.7-1.6-4-1.7-6.2c-0.3-6.7-0.4-6.8-7.2-6.8c-16.5,0-33,0-49.6,0c-2.6,0-5.2,0.2-7.7-0.5
	c-2.7-1-2.5-3.4-2.6-5.6c-0.2-3.4,0.2-6.9-0.5-10.3c-1.2-5.9-3.8-8.2-9.9-8.6c-3.7-0.3-7.1,0.9-10.5,2.3
	c-9.5,4.2-17.2,10.7-24.2,18.1c-2.1,2.2-4,4.9-7.7,4.6c-30.9,0-61.8,0.1-92.7,0c-3.4,0.4-5.3-2.1-7.3-4.1
	c-6.2-6.5-12.7-12.6-20.8-16.7c-4-2.1-8-4-12.6-4.2c-7.4-0.2-10.8,2.7-11.8,9.9c-0.4,3.1-0.1,6.2-0.3,9.3c-0.1,2,0,4.2-2.4,5.3
	c-2.5,0.8-5.1,0.6-7.7,0.6c-16.7,0-33.5,0-50.2,0c-6.1,0-6.4,0.3-6.6,6.4C115.8,141.3,116.3,143.9,114.2,145.7z"/>
<path style="fill:#30309A; transform:scale(0.2)" :class="ValueId+'_color1'" d="M328.9,308.1c0,51.4-0.1,102.8-0.1,154.2c0,27.9,0,55.9,0,83.8c-31.1,0-62.1,0-93.2,0
	c0-77.6,0-155.3,0-232.9c0-1.7-0.1-3.4-0.1-5.2c-1.4-1.7-1.5-3.8-1.5-5.9c0-11.2-0.2-22.4,0.1-33.6c-0.3-29.8-0.1-59.6-0.1-89.4
	c0-2.1,0.1-4.2,1.5-5.9c2-1.7,4.5-1.6,6.9-1.6c26.5,0,53.1,0,79.6,0c2.4,0,4.9-0.1,7,1.5c1.5,1.7,1.6,3.8,1.6,5.8
	c0,29.8,0.2,59.7-0.1,89.5c0.3,11.2,0.1,22.4,0.1,33.7C330.4,304.3,330.3,306.4,328.9,308.1z"/>
<path style="fill:#AB72C1; transform:scale(0.2)" :class="ValueId+'_color2'" d="M235.5,546.1c-22.6,0.1-45.2,0.1-67.8,0.2c-33.3,0-66.6,0-99.9,0c-11.8,0-17.8-5.9-17.8-17.8
	c0-71.4,0-142.8,0-214.3c0-2.1,0.1-4.1,0.2-6.2c1.9-1.9,4.5-1.7,6.8-1.7c57.2,0,114.4,0,171.6,0c2.4,0,4.9-0.2,7,1.4
	c1.7,2.2,1.5,4.9,1.5,7.5c0,74.5,0,149.1,0,223.6C237.2,541.3,237.6,544,235.5,546.1z M506.7,306.4c-56.9,0-113.9,0-170.8,0
	c-2.6,0-5.2-0.2-7.4,1.5c-1.5,2.1-1.4,4.6-1.4,7c0,74.8,0,149.6,0,224.4c0,2.4-0.2,4.9,1.7,6.8c0.7,0.1,1.4,0.2,2.1,0.2
	c55.7,0,111.4,0,167.2,0c9.9,0,16.2-6.6,16.2-16.8c0-40.2,0-80.4,0-120.6c0-33.6-0.1-67.3-0.2-100.9
	C511.9,306,509.2,306.4,506.7,306.4z M234.8,172.7c-1.6-0.8-3.3-0.8-5-0.8c-23.5,0-47.1,0-70.6,0c-1.9,0-3.8-0.1-5.4,1.2
	c-5.5,0-11,0-16.6,0c-23.5,0-46.9-0.1-70.4,0c-9.5,0-16.5,6-16.5,14.8c-0.1,26.9,0,53.8,0.1,80.8c1.9,1.9,4.4,1.7,6.8,1.7
	c57.2,0,114.3,0,171.5,0c2.4,0,4.9,0.2,6.8-1.7c0-31.7,0.1-63.5,0.1-95.2C235.3,173.2,235,172.9,234.8,172.7z M335.7,270.4
	c57.2,0,114.3,0,171.5,0c2.4,0,4.9,0.2,6.8-1.7c0.1-26.9,0.2-53.8,0.1-80.7c0-7.6-5.2-13-13.4-14.7c-1-0.5-2-0.4-3-0.4
	c-32.1-0.1-64.2,0.4-96.3-1c-21.6,0-43.1,0-64.7,0c-2.4,0-4.8-0.3-7.1,0.8c-0.2,0.2-0.5,0.5-0.8,0.7c0,31.8,0.1,63.5,0.1,95.3
	C330.8,270.5,333.3,270.4,335.7,270.4z"/>
<path style="fill:#30309A; transform:scale(0.2)" :class="ValueId+'_color1'" d="M328.8,173.4c-31.1,0-62.2,0-93.3,0c0,0,0,0,0,0c-1.7-1.2-3.7-0.6-5.5-0.6c-23.6,0-47.3,0-70.9,0
	c-1.9,0-3.8,0.3-5.6-0.3c-7.5,0.4-14.8-0.9-21.9-2.7c-11.9-3-16.7-9.9-17.3-24.1c0.1-3.1,0.5-6.2,0.1-9.2c-0.6-4.8,1.5-5.7,5.8-5.6
	c20.4,0.2,40.9,0.1,61.3,0.1c2.1,1.6,1.6,4.1,2,6.2c1.3,7.6,5.4,12.5,13,14.3c4,1,8.1,1.9,12.2,1.9c10.5,0,21.1,0.1,31.6,0
	c4.7-0.1,5.2-0.9,3.2-5.2c-1.6-3.5-3.7-6.6-6.1-9.6c-1.5-1.8-3.4-3.6-3-6.3c1.4-1.9,3.5-1.2,5.3-1.2c28.3,0,56.6,0,84.9,0
	c1.8,0,3.9-0.7,5.3,1.2c0.4,2.7-1.5,4.5-3,6.3c-2.7,3.4-4.9,7-6.7,11c-1,2.2-0.6,3.9,2.1,3.9c13.7-0.2,27.5,1.4,41.1-0.8
	c12.4-2,15.4-5.4,17.8-17.8c0.3-1.3,0.3-2.8,1.6-3.6c20.6,0,41.2,0.1,61.8-0.1c4.4,0,5.8,1.4,5.4,5.6c-0.3,3.1,0,6.2,0.1,9.3
	c-0.6,17.2-7.6,23.9-26.9,25.9c-7.3,2.3-14.8,1-22.2,1.3c-22.2,0-44.4,0-66.7,0C332.5,172.9,330.5,172.3,328.8,173.4L328.8,173.4z"
	/>
<path style="fill:#824C97; transform:scale(0.2)" :class="ValueId+'_color3'" d="M50.3,268.7c61.7,0,123.4,0,185.1,0c0,13.1,0,26.3,0,39.4c-61.7,0-123.4,0-185.1,0
	C50.3,294.9,50.3,281.8,50.3,268.7z"/>
<path style="fill:#824C97; transform:scale(0.2)" :class="ValueId+'_color3'" d="M328.9,268.7c61.7,0,123.4,0,185.1,0c0,13.1,0,26.2,0,39.4c-61.7,0-123.4,0-185.1,0
	C328.9,294.9,328.9,281.8,328.9,268.7z"/>
<path style="fill:#A79288; transform:scale(0.2)" d="M401.4,172.5c7.3-0.3,14.5-0.6,21.8-1c1.7,1.8,3.9,1,5.9,1.1c22,0.1,44.1,0,66.1,0.1
	c1.9,0,3.8-0.5,5.5,0.6c-17.9,0.1-35.9,0.2-53.8,0.2c-15.2,0-30.4-0.2-45.6-0.2c-0.4-0.2-0.5-0.4-0.3-0.5
	C401.1,172.6,401.3,172.5,401.4,172.5z"/>
<path style="fill:#666954; transform:scale(0.2)" d="M153.4,172.5c15.8-0.1,31.6-0.1,47.4-0.2c9.8,0,19.6,0,29.4,0c1.8,0,3.8-0.8,5.3,1.1
	c-25.2,0-50.4,0-75.7-0.1c-2.1,0-4.1-0.2-6.1-0.3C153.5,173,153.4,172.8,153.4,172.5z"/>
<path style="fill:#646753; transform:scale(0.2)" d="M401.4,172.5c-0.1,0.2-0.1,0.5-0.1,0.8c-24.2,0.1-48.4,0.1-72.5,0.2c0.6-1,1.7-1.1,2.7-1.1
	C354.8,172.4,378.1,172.4,401.4,172.5z"/>
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
                                    <button :style="{background:'rgba('+getterPresentBabyBg1+')'}" @click="ShowElement(getterPresentBabyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPresentBabyBg2+')'}" @click="ShowElement1(getterPresentBabyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPresentBabyBg3+')'}" @click="ShowElement2(getterPresentBabyBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPresentBabyBg4+')'}" @click="ShowElement3(getterPresentBabyBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPresentBabyBg5 +')'}" @click="ShowElement4(getterPresentBabyBg5 )" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPresentBabyBg6+')'}" @click="ShowElement5(getterPresentBabyBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPresentBabyBg7+')'}" @click="ShowElement6(getterPresentBabyBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var PresentBaby= [
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
            var randomNumber = PresentBaby[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  PresentBaby[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'PresentBaby'){
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
                getterPresentBabyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PresentBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPresentBabyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PresentBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPresentBabyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PresentBaby') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPresentBabyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPresentBabyBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPresentBabyBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPresentBabyBg7: {
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
                            name:'PresentBaby',
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