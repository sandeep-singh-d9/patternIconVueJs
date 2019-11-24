<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color1'" d="M512,420.5c2.8,12.1-3.2,25.3-14.6,32c-11.3,6.6-26.7,5-36.4-3.7c-1.9-1.7-3.1-4.1-5.6-5.1
	c-3.5-2.6-4.3-6.7-5.6-10.5c-11.2-32.9-31.1-59-59.9-78.4c-5.7-3.8-10.2-4-16.3-0.5c-19.5,11.2-40.6,17.3-63.1,19.4
	c-32.8,3.1-63.2-3.7-91.7-19.8c-5.9-3.3-10.4-2.7-15.8,0.9c-29.6,19.6-49.3,46.7-60.8,80.1c-1.1,3.2-1.7,6.7-4.8,8.8
	c-8,7.8-16.8,13.5-28.7,12.9c-17.4-1-31.1-18-28.3-35c8.5-51.3,34.3-91.2,77.9-119.6c3.7-2.4,4.2-4,2-7.8
	c-14.9-25.2-21.8-52.7-21.3-81.9c0.5-23.9,5.9-46.9,17.3-68.2c2.2-4.1,3.4-6-3-7.6c-27.6-7-44.2-32.6-40.1-60.8
	c3.8-26.3,28.5-46,56.3-44.9c21.9,0.9,43.1,17.9,48.7,39.2c0.6,2.4,1.2,4.9,1.9,7.8c15-8.1,30.5-14.2,47-16.9
	c14-2.3,28.1-4.8,42.5-2.1c-0.1,0.2-0.3,0.3-0.4,0.5c-0.2,0.1-0.4,0.2-0.5,0.3c1.1,1.4,2.9,1.2,4.3,1.9c12.9,6,20.4,18.5,11.6,33.7
	c-2.4,4.1-4.9,8-8,11.6c-12.1,14.2-16.9,31.3-19.6,49.3c-1.5,9.8-1.4,19.5-0.9,29.4c-0.4,1-1,2.1-2,2.3c-8.7,1.8-15.3,7.3-21.7,13
	c-32.9,6.8-59.3,43.2-36.5,76.9c7.5,11.1,18.1,18.6,30.8,23.1c26.9,9.4,52.5,7.1,76.5-8.8c5-3.3,8.4-8.5,13.5-11.7
	c0.6-0.3,1.3-0.4,2-0.4c8.1,2.1,15.4,6,23.4,8.6c16,5.2,32.5,7,49,9.3c0.8,3.6,5,3.7,6.8,6.3c8.7,11.2,15.3,23.4,17.6,37.7
	c1.3,8.3,1.3,16.7,0.6,24.9c-2,24,17.8,45,39.3,51.4C500.5,419.6,506.2,420.3,512,420.5z M142.9,476c-13.5,17.9-12.4,42.3,2.5,58.9
	c14.2,15.8,32.5,23.2,53.3,24.2c24.4,1.2,45.7-6.5,62.9-24.3c10-8.9,13.3-20.6,12.6-33.4c-1.1-18.8-11.6-32.2-26.9-41.9
	c-8-5-16.4-10-26.6-9.3c-27.1-4.4-51.7,0.9-72.8,19.1C146.2,471.6,144.5,473.8,142.9,476z"/>
<path style="fill:#FBA9CA;transform:scale(0.2)" :class="ValueId+'_color4'" d="M137.3,443.8c8.8-27.6,21.5-52.9,42.9-73c7.8-7.3,16.1-13.9,25.2-19.4c3.6-2.2,6.7-2.9,11.1-0.3
	c20.4,11.9,42.4,19,66.2,21.1c33.1,2.9,63.7-4.2,92.3-20.5c4.8-2.8,8.5-2.8,12.8,0c17.2,11.1,31.7,24.8,43.7,41.5
	c11.1,15.5,17.4,33.1,23.9,50.6c-2,7.9-4.7,15.5-8.8,22.5c-1.1,2-1.8,3.5,0.1,5.6c24.8,27.8,12.2,66.4-24.4,80.7
	c-33.7,13.2-64.7,8.2-91.1-18c-7.8-5.6-10.6-14.1-11.8-22.7c-2.9-20.4,4.7-36.8,21.1-49.1c7-5.3,14.7-9.6,23.3-11.8
	c5.2-1.3,5.3-3.6,3-7.7c-12.4-21.7-30.8-35.4-55.2-39.9c-36.4-6.8-68.8,9.4-86.8,42.3c-1.1,2.1-2.1,4.2-4.4,5.4
	c-5.9,0.9-11.8-0.6-17.7-0.5c-17.8,0.2-33.9,4.9-48,16c-2,1.5-3.9,3.4-6.8,2.8C142.9,461.4,139.5,452.9,137.3,443.8z M319.1,198.9
	c9.8,3.2,18.9,7.7,27.1,14c17,13.1,27.5,38.6,13.4,61.5c-1.2,1.9-2.7,4-1.8,6.5c17.4,7.7,35.4,13.8,54.4,16
	c6.1,0.7,12.3,3.4,18.6,0.7c30.8-52.5,30.4-105.8,3.4-159.6c31.7-6.3,51.5-34.6,45.1-64c-5.3-24.5-26.6-42.5-50.7-43.1
	c-25.9-0.6-47.7,15.7-54.1,41c-1.2,4.8-2.4,5.4-7,3.1c-18.2-9.2-37.4-15.2-58-16.1c-1.4,0.2-2.9,0.3-5.5,0.7
	c4.1,1.8,7.2,3.1,10.1,4.6c11.1,5.8,16.7,17.1,9,29.9c-1.9,3.1-3.7,6.3-6,9c-9.5,11-15.9,23.6-19.1,37.7c-3.4,14.9-6.2,29.9-3,45.3
	C303.6,189.2,312.3,192.2,319.1,198.9z M437.5,303.9c-1.9,1.4-0.8,2.6,0.3,3.6c3.8,3.6,5.9,8.3,8.4,12.8c7.4,13.3,8.4,27.8,8,42.7
	c-0.2,5.9-0.8,11.9,0.9,17.8c5.6,19.1,18.7,31.2,36.8,37.9c6.1,2.3,13,5.8,20.1,1.8C504.1,370.9,479.2,332.1,437.5,303.9z"/>
<path style="fill:#D770AD;transform:scale(0.2)" :class="ValueId+'_color2'" d="M356.7,281c-18.8,22.1-43.2,29-71.1,26c-18.4-2-34.3-9.3-47.2-22.9c-17.2-18.2-17.2-47.3,0-65.5
	c8-8.4,17.2-14.6,28-18.5c1.8-0.7,3.9-2.4,5.8,0c1.1,3.3-0.8,6.2-1.6,9.2c-2.7,11.3,2.2,16.6,13.8,15.4c7.3-0.8,14.8-2.2,21.9,1
	c3.1,3.3,4.4,7.8,6.8,11.6c10.1,15.7,23.4,28.2,39,38.3C354.1,276.9,357.2,277.5,356.7,281z"/>
<path style="fill:#D770AD;transform:scale(0.2)" :class="ValueId+'_color2'" d="M356.7,281c-6.5-4.7-13.2-9.1-19.3-14.3c-13-11.1-24.9-23.1-30.8-39.8c2.1-1.9,4.8-1.4,7.3-1.9
	c7.2-1.5,9.3-4.2,8.9-11.5c-0.2-3.6-1.1-7.1-2.7-10.5c-0.8-1.7-2.1-3.3-0.8-5.4c19.9,5.7,36.1,16.1,44.7,35.7
	c6.4,14.6,5,29-3.4,42.6c-1,1.6-1.8,3.4-2.8,5C357.4,280.9,357,280.9,356.7,281z"/>
<path style="fill:#D770AD;transform:scale(0.2)" :class="ValueId+'_color2'" d="M261.6,534.8c4.5-7.7,9.5-15,10.6-24.3c2.4-19.8-6-34.5-20.9-46.4c-9.1-7.2-19.7-10.8-30.6-13.9
	c15.5-33.2,44.8-52,80.6-49.7c31.4,2,54.5,17.9,69,45.9c1.6,3,1.8,4.2-2.4,5.4c-20.7,5.7-37.7,16.3-45,37.8
	c-5,14.6-2.7,28.6,6.1,41.4c0.8,1.2,1.5,2.5,2.3,3.8C308,538.5,284.8,538.5,261.6,534.8z M157.6,131.1c2.9,2.4,4.6,2,6.8-1.5
	c12.4-19,28.1-34.8,47.4-46.8c3.4-2.1,3.1-3.7,1.2-6.4c-9.5-13.7-27.3-20-43.4-15.1c-17.1,5.2-28.4,20-28.5,37.4
	C141.1,112.4,147.3,122.8,157.6,131.1z M424.8,61.7c-16.7-5.6-34.6,0.2-44.8,14.4c-1.9,2.6-2.5,4.4,0.8,6.5
	c19.6,12.4,35.6,28.4,48.1,47.9c1.7,2.6,3.4,2.8,5.7,1c10.2-8.1,16.5-18.2,16.9-28.1C451.6,82.3,440.9,67.1,424.8,61.7z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color3'" d="M319.2,197.6c2.5,5.1,5.3,10.1,5.4,16.1c0.2,9.3-3,12.8-12.3,13c-1.9,0.1-3.8,0.1-5.7,0.2
	c-6.9-1.9-13.9-0.8-20.8-0.6c-3,0.1-5.9,0.2-8.9,0c-5.8-0.5-8.4-4.1-8.8-9.8c-0.4-5.9,1.5-11.2,4.1-16.4c5.3-8.4,13.7-11.8,22.8-14
	C304.8,186.3,312.7,190.5,319.2,197.6z M240.8,153.1c-0.1-8.9-7.9-16.8-16.8-16.9c-9.1-0.1-16.4,7.4-16.4,16.7
	c0,9.9,6.5,16.5,16.3,16.6C233.3,169.5,240.9,162.2,240.8,153.1z M368.7,169.4c9.9,0,16.3-6.3,16.3-16.4c0-9.4-7.1-16.9-16.2-16.9
	c-9-0.1-16.3,7.5-16.3,16.8C352.6,163,358.8,169.4,368.7,169.4z"/>
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
                                    <button :style="{background:'rgba('+getterTeddyBearGirlBg1+')'}" @click="ShowElement(getterTeddyBearGirlBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTeddyBearGirlBg2+')'}" @click="ShowElement1(getterTeddyBearGirlBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTeddyBearGirlBg3+')'}" @click="ShowElement2(getterTeddyBearGirlBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTeddyBearGirlBg4+')'}" @click="ShowElement3(getterTeddyBearGirlBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <!-- <button :style="{backgroundColor:'rgba('+getterTeddyBearGirlBg5 +')'}" @click="ShowElement4(getterTeddyBearGirlBg5 )" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTeddyBearGirlBg6+')'}" @click="ShowElement5(getterTeddyBearGirlBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTeddyBearGirlBg7+')'}" @click="ShowElement6(getterTeddyBearGirlBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTeddyBearGirlBg8+')'}" @click="ShowElement7(getterTeddyBearGirlBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var TeddyBearGirl= [
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
            var randomNumber = TeddyBearGirl[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  TeddyBearGirl[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'TeddyBearGirl'){
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
                getterTeddyBearGirlBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TeddyBearGirl') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearGirlBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TeddyBearGirl') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearGirlBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TeddyBearGirl') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearGirlBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTeddyBearGirlBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearGirlBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearGirlBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearGirlBg8: {
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
                    var background7Clone =tempArrayClone.background7 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'TeddyBearGirl',
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