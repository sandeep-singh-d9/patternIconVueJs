<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path  :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M511.6,229.2c0,8,0,16,0,24c-1,6.7-0.7,13.5-1.7,20.2c-2.1,14.1-7.1,27.3-12.4,40.4
	c-9.8,24.3-23.8,45.8-42.9,63.7C435.9,395,414.3,408,390.3,417c-22.5,8.5-45.8,13.8-69.7,16.4c-16.4,1.8-32.9,2.4-49.3,1.6
	c-40.9-2-80.6-9.9-117.6-28.1c-21.1-10.4-40.2-23.6-54-43.3c-14.3-20.6-18.8-43.3-14.8-67.9c3.3-19.8,10.4-38.2,21.5-54.9
	c6.5-9.8,6-19.4,2.2-29.4c-4.4-11.6-12.4-20.7-21.5-29.1c-2.2-2-4.8-1.9-7.5-2.2c-2.2-0.2-4.9,0.2-5.3-3.1c2-0.7,3.9-1.3,5.9-2
	c1.4-1.5,2.8-3,4.3-4.5c-0.1-1-0.2-2-0.3-3c0.4-1.1,0.8-2.2,1.2-3.4c-0.2-2.7-0.4-5.5-0.7-8.4c-1.6-13.8-5.1-25.8-9-36
	c-0.3-1.1-0.5-2.2-0.8-3.3c-1-0.9-2.2-2.2-2.8-4c-1-2.8-0.4-5.4-0.2-6.4c12.1-51,42.6-76.4,42.6-76.4C130.8,15.5,150,7.9,171.8,7
	c20.4-0.8,40.1,2.1,59.3,9.2c4.7,1.7,9.3,3.7,13.6,6.2c3.8,2.2,7.5,2.2,11.5,0.8c11-3.7,20.4-9.7,27.1-19.5c1.3-1.9,2.6-4.5,5.3-3.5
	c2.4,0.9,2.7,3.6,3,5.9c0.7,7.9-2.5,14.3-7.5,20c-1.2,1.4-2.7,2.4-3.9,4.2c2.3,1.3,4.4,0.1,6.4,0c2.2-0.1,4.7-0.4,5.9,1.8
	c1.3,2.3-0.7,4-2.1,5.6c-2.7,3.1-6.1,5.2-9.8,6.7c-3.3,1.4-3.8,2.8-1.5,5.9c12.3,16.2,18.5,34.7,20.6,54.9
	c1.8,16.8,0.2,33.2-2.3,49.7c-1.2,7.9,3.8,12.8,11.7,11.6c40.9-6.2,80.6-1.9,119.2,13c5.4,2.1,11,3.9,16.5,5.8
	c6.2,2.2,10.2,1,13.8-4.4c5.5-8.3,12.2-15.4,19.6-21.9c0.9-0.8,1.7-1.6,2.7-2.3c8.2-5.9,13.9-3.9,16.6,5.9c5,18.2,7.1,23.4,7.1,23.4
	C506.1,197.8,508.4,211.7,511.6,229.2z"/>
<path  :style="{fill:'rgba(229, 184, 94, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M189.3,245.3c-0.8,2.3-1.4,4.6-2.3,6.8c-9.7,23.3-6.3,45.2,6.9,66.1c10,15.7,23,28.4,39,37.8
	c12.5,7.4,26.2,11.4,40.5,13.1c20.3,2.4,40.4,0.9,60.4-3.4c18.5-4,36.3-9.8,53.5-17.4c13.5-6,27-12.3,39.3-20.5
	c2.9-1.9,6-3.5,10.1-4.3c-0.8,2.2-2.4,3.3-3.9,4.4c-16.1,12.7-34.2,22-52.7,30.1c-18.7,8.2-38.2,14.7-58.4,18.5
	c-24.6,4.6-49.2,5.9-73.6-1.3c-15.8-4.7-30-12.2-42.1-23.8c-12.7-12.3-23.5-25.8-29.1-42.9c-4-12.5-4.2-25-1-37.7
	C178.6,261.3,182.4,252.6,189.3,245.3z"/>
<path  :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M135,82.1c16.5,0.1,29.8,13.3,29.6,29.4c-0.2,16.6-13.7,29.7-30.2,29.5c-16-0.2-28.8-13.7-28.7-30.4
	C105.7,95,119.1,82,135,82.1z"/>
<path  :style="{fill:'rgba(229, 184, 94, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M448,297.9c-9.1,16.5-40.5,31.6-57,21.8C411.4,316.3,430.9,311.3,448,297.9z"/>
<path  :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M151.9,111.3c0,9.7-7.2,17-16.9,17.1c-9.5,0.1-17.1-7.6-17-17s7.9-17.1,17.3-17C144.5,94.5,152,102.1,151.9,111.3z"/>
<path style="fill:#F4F4F4;transform:scale(0.2)" d="M142.6,102.5c-0.1,2.5-1.3,3.8-3.6,3.9c-2.4,0.1-3.8-1.3-3.8-3.6c-0.1-2.2,1.1-3.8,3.6-3.8
	C141.1,99.1,142.3,100.4,142.6,102.5z"/>
<path  :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M3.1,113.1c-0.6-2.8-1.3-5.6-1.9-8.4c0.3-0.1,0.6-0.3,1-0.4c3.3,5,6.6,10,9.9,15
	c4.9,7.5,10.2,14.5,18.2,19.3c9.9,6,20.9,6.6,32.3,5.9c8.5-0.5,16.6-3,24.8-4.7c3.2-0.7,5.8-2.1,7.9-4.4c4.2,7.9,4.2,16.2,1.9,24.7
	C95,164.5,93,169,89,172.3c-1.4-1.5-1.5-1.5-0.9-3.5c0.9-2.7,1.6-5.5,1.8-8.3c0.2-3-1.1-3.8-4.1-2.9c-1.6,0.5-3,1.3-4.5,2
	c-14.7,7.8-29.4,15.4-44.2,22.9c-3.4,1.7-5.7,5.2-9.8,5.5c-1.2,0.2-2.2-0.2-3-1.1c0.5-1.5,1.9-2.1,3-3c16.9-13,35.8-22.7,55.8-30.6
	c1.2-0.5,2.5-0.8,4.2-2.1c-11.5,2-22.3,2.8-33.3,1.5c-2.7-0.3-5.3-1.8-8.2-1.2C24.3,146.1,9.5,133.8,3.1,113.1z"/>
<path  :style="{fill:'rgba(191, 24, 11, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M45.8,151.6c0.4-0.7,1.1-1.1,1.9-0.9c12.5,2.3,25.2,1.8,37.8-0.1c1.6-0.2,3.2-0.2,4.8,1.2
	c-10.9,4.4-21.6,8.8-31.9,14c-9.9,5-19.2,11-28,17.5c-1.9,1.4-4,2.5-6,3.7c-2.8-2.5-1.7-5.4-0.3-8c5.2-9.2,12.5-16.9,21-23.5
	c1.1-0.9,2.3-1.8,3.6-2.8C47.7,152.2,46.7,151.9,45.8,151.6z"/>
<g>
	<path  :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M91.3,126.7c-6.7-11.8-14.8-23-14.7-37.3c-3,2.1-5.8,4.4-8.9,6.4c-12.5,8.2-25.8,13-41.1,10.8
		c0,0,0,0,0,0c-3.7-1.1-7.3-2.2-11-3.3c-3.2-2.1-6.3-4.5-9.8-6.2c-3.5-1.8-6-0.2-5.8,3.5c0.3,4.3,1,8.7,3.1,12.6
		c0.6-2.4,0.6-2.4-0.1-5.6c5.4,7.9,10.4,17.8,18.6,25.8c8.3,8.1,18.7,11.9,30.8,12.4c12.7,0.5,24.8-2.3,36.9-5.4
		c2.7-0.7,5.5-1.7,6-5C94.8,132.1,92.9,129.5,91.3,126.7z"/>
	<path  :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M89.9,156c-1.6-1.2-2.9-0.2-4.5,0.3c-2.7,0.9-5.1,2.3-7.5,3.7c-16.8,9.5-35,16.4-50.6,27.9
		c3.9,0.9,7-1.8,10.4-2.5c0.1,0,0.1,0.1,0.2,0.1c4.9-1.1,9.9-2.3,14.8-3.4c9.5-1.7,19.1-2.7,28.7-2.1c2.1-3,5.8-4.6,7.6-7.8
		c-1.1-0.6-0.5-1.6-0.2-2.2c1.7-2.9,1.7-6.2,2.5-9.4C91.7,158.8,91.5,157.2,89.9,156z"/>
</g>
<path style="display:none;fill:#EDF1F3;" d="M105.9,111.4c0-15.6,13.1-29.6,28.7-29.2c17.8,0.4,29.4,14.2,29.3,29.5
	c-0.1,16.3-12.9,29.3-29.2,29.4C118.5,141.1,105.9,128.1,105.9,111.4z"/>
<path style="display:none;fill:#41B1DF;" d="M109,111.1c0.2-12.3,7.9-22.1,17.3-22.1c9.6,0,17.5,10.4,17.4,22.8
	c-0.1,12.1-7.1,21.7-16.3,22.3C116.9,134.7,108.8,124.5,109,111.1z"/>
<path style="display:none;fill:#445C6C;" d="M130.7,111.7c0,7.2-4.2,13.1-9.5,13.1c-5.1,0-10.4-6.4-10.5-12.7
	c-0.1-7.3,4.6-13.3,10.3-13.2C126.7,99,130.6,104.2,130.7,111.7z"/>
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
                                    <button :style="{background:'rgba('+getterRubberDuckBg1+')'}" @click="ShowElement(getterRubberDuckBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRubberDuckBg2+')'}" @click="ShowElement1(getterRubberDuckBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRubberDuckBg3+')'}" @click="ShowElement2(getterRubberDuckBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRubberDuckBg4+')'}" @click="ShowElement3(getterRubberDuckBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRubberDuckBg5+')'}" @click="ShowElement4(getterRubberDuckBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    
                                    <button :style="{backgroundColor:'rgba('+getterRubberDuckBg6+')'}" @click="ShowElement5(getterRubberDuckBg6)" :class="this.ValueId+'_color6btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterRubberDuckBg7+')'}" @click="ShowElement6   (getterRubberDuckBg7)" :class="this.ValueId+'_color7btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRubberDuckBg8+')'}" @click="ShowElement7(getterRubberDuckBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var RubberDuck= [
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
            var randomNumber = RubberDuck[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  RubberDuck[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'RubberDuck'){
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
                getterRubberDuckBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RubberDuck') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRubberDuckBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RubberDuck') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRubberDuckBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RubberDuck') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRubberDuckBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterRubberDuckBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                 getterRubberDuckBg6:{
                    get(){
                    return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    }, 
                    set(newValue){
                        console.log(newValue)
                    }
                },
                 getterRubberDuckBg7:{
                    get(){
                    return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    }, 
                    set(newValue){
                        console.log(newValue)
                    }
                },
                getterRubberDuckBg8:{
                    get(){
                    return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    }, 
                    set(newValue){
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
                 ShowElement5(value){
                    this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5+')'
                    this.clickedInput= 'six'
                    this.showColorPicker=true
                },
                 ShowElement6(value){
                    this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6+')'
                    this.clickedInput= 'seven'
                    this.showColorPicker=true
                },
                 ShowElement7(value){
                    this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7+')'
                    this.clickedInput= 'eight'
                    this.showColorPicker=true
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
                    // var background6Clone =tempArrayClone.background6 
                    // var background7Clone =tempArrayClone.background7 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []

                        tempArray = [
                            {
                            name:'RubberDuck',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            // background6:  background6Clone,
                            // background7:  background7Clone,
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
                            // $('.Svg_'+cloneIndex+'_color7').css({fill: 'rgba('+background6Clone+')'})
                            // $('.Svg_'+cloneIndex+'_color8').css({fill: 'rgba('+background7Clone+')'})
                            
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