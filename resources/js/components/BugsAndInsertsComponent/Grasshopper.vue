<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M536.2,140.2c15.4-15.3,22.2-34.3,25.9-55.1c3.2-18,7.7-35.7,11.8-53.6c1.5-6.7,6.3-10.2,11.8-8.9
	c5.6,1.4,8.3,6.5,6.8,13.2c-6,27.2-12.2,54.3-18.1,81.5c-0.7,3.4-2.1,6.3-4.1,9.1c-7.8,11.1-15.5,22.2-23.2,33.3
	c-1.2,1.8-2.7,3.4-2.4,5.9c3,27-7.7,49.8-22.5,71.1c-5.4,7.7-11.8,14.6-19.8,19.7c-12.9,8.3-22,6.5-30.2-6.5
	c-2.6-4.2-4.6-5.3-8.1-1.4c-2.8,3.1-8.8,4.4-8.9,8c-0.1,3.4,4.2,6.9,6.3,10.4c2.6,4.4,6.1,7.6,10.6,10.2
	c12.7,7.4,25.2,15.1,37.9,22.6c3.4,2,5.6,4.7,6.9,8.6c4.7,14.6,9.7,29,14.4,43.6c1.2,3.7,2.7,5.9,7,5.2c2.5-0.4,5.2-0.2,7.8,0
	c5.2,0.5,8.9,4.6,8.8,9.5c0,5-3.7,9.2-8.9,9.4c-6.8,0.3-13.5,0.3-20.3,0c-5-0.2-7.6-3.6-9.1-8.1c-5.1-15.7-10.5-31.3-15.5-47
	c-1.2-3.9-3.3-6.4-6.9-8.4c-8.5-4.8-16.5-10.5-25.1-14.9c-11.7-6-21.1-14-27.2-25.7c-2.4-4.6-4.8-5.1-9.6-2.5
	c-26.7,14.9-55.3,25.1-84.9,32.5c-3.9,1-6,2.6-7.5,6.4c-7.7,19.8-15.9,39.4-23.5,59.3c-2.4,6.1-6,8.9-12.6,8.6
	c-5.4-0.3-10.8,0.1-16.1-0.1c-6-0.2-10-4.3-9.9-9.7c0.1-5.2,4.2-10.1,9.6-9.1c11.3,2,14.9-4.2,18-13.3c3.9-11.8,9.1-23.2,13.9-35.5
	c-17.8,2.8-34.8,5.7-52,7.2c-38.8,3.3-77.5,4.9-116.2-0.2c-13.8-1.8-27.6-3.9-41-7.4c-4.5-1.1-6.2,0.2-7.9,4.1
	c-7.9,18.2-16.3,36.2-24.2,54.5c-2.9,6.7-6.9,10.3-14.5,9.5c-4.9-0.5-10,0-14.9-0.1c-6-0.2-10-4.3-9.8-9.8c0.1-5.2,4.2-10,9.7-9.1
	c10.9,1.8,15.2-3.7,18.7-12.8c5.1-13.2,11.2-25.9,17.2-38.7c1.6-3.5,0.9-4.6-2.6-5.8c-17.9-6.4-35-14.3-48.7-28.1
	c-5.8-5.9-10.2-12.6-12.3-20.8c-3.8-12.6,0-23,10.4-31c14.6-11.2,32-15.6,49.5-19.4c16.1-3.5,32.5-5.8,48.9-7.3
	c3.6-0.3,5.5-1.7,7-5.1c12-27.3,24.1-54.5,36.6-81.6c8.4-18.3,27.4-21.7,42.2-8.2c23.7,21.6,47.6,43,71.2,64.6
	c2.4,2.1,4.4,2.5,7.4,1.9c33.5-6.8,67-13.9,100.6-19.9c22.1-3.9,44.3-7.6,66.8-9.1c2.9-0.2,5.1-0.9,7.1-3.4
	c9.3-11.4,21.2-16.4,35.9-13.6c2.7,0.5,3.9-0.1,5-2.6c4.8-11.6,9.8-23,14.8-34.5c1.4-3.1,0.8-6.3,0.3-9.4
	c-2.5-15.3-5.1-30.6-7.7-45.9c-1.2-7.2,1.5-12.3,7.3-13.5c5.8-1.1,10.2,2.7,11.5,10c3,17.8,6,35.7,9.1,53.5c0.6,3.3,0,6.3-1.3,9.3
	c-5.5,12.6-10.8,25.2-16.4,37.7c-1.4,3.1-1.5,5.3,1.3,7.8C531.4,133.9,533.7,137.2,536.2,140.2z"/>
<path :style="{fill:'rgba(125, 196, 117, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M335.2,232.7c1.4,0.1,2.8,0.2,4.2,0.3c4.3,0.3,7.2-1.8,8.9-5.6c1.9-4.2,0.7-7.8-2.5-10.8
	c-10.2-9.4-20.6-18.8-30.8-28.2c-2-1.9-4-3.8-6.6-6.2c6.7-2.8,13.4-3.4,19.8-4.7c18.7-3.8,37.4-7.3,56.1-11.1c3.1-0.6,4.1,0,4.6,3.3
	c2,13.2,5,26.1,9.8,38.6c6.7,17.5,16.3,32.2,36.9,37.1c-14.4,9.5-29,16.4-44.1,22.5c-11.4,4.6-23.1,8.7-35,11.9
	c-1.5,0.4-3.1,1.8-4.4,0.2c-1-1.2,0.3-2.6,0.8-3.9c4.9-12.2,9.9-24.3,14.5-36.6c1.5-3.9,3.3-4,6.6-2.8c4.8,1.8,9.8,3.4,14.7,4.9
	c6,1.8,11.3-0.7,13-6.1c1.6-5.1-1.1-10.1-6.9-12.1c-9-3.2-18-6.2-27.1-9.2c-6.2-2-10.7,0.5-13.5,7.3c-7.9,19.7-16,39.4-23.7,59.3
	c-1.7,4.3-3.7,6.8-8.6,7.6c-17.4,3.2-34.8,6.1-52.4,7.9c-5.1,0.5-5.3-1.1-3.3-5.1c3.9-8.1,6.3-16.7,7-25.7c0.3-2.9,0.9-5.7,2.8-8.3
	c2.7-3.5,2.4-7.6-0.4-11.1c-2.7-3.5-6.5-4.8-10.7-3.2c-21.6,8.5-44.2,12.6-67.2,15.4c-17.6,2.1-35.2,3.1-52.9,3.2
	c-6.5,0-10.6,3.9-10.6,9.6c0,5.3,3.8,9.2,9.4,9.5c4.1,0.2,8.2,0,12.5,0c-4.1,10.3-11.4,14.7-21.2,13.2c-5.7-0.9-11.3-2.6-17-3.1
	c-5.8-0.6-5-3-3.2-7c9.2-20.1,19.1-39.9,26.8-60.5c4.2-11.2,11-13.6,21.4-14.5c22.9-2,46-3.6,68.4-9.5c4.1-1.1,6.1,0.1,8.5,2.9
	c12.1,14.2,24.7,28.1,38.1,41.2c7.7,7.5,15.6,14.8,24.4,21.1c1.9,1.4,3.9,2.8,5.9,4c6.3,3.8,11,3.6,14.6-0.4s3.2-8.5-1.2-14.4
	c0-6.8,5.3-11,8.3-16.3C330.9,235.1,331.8,232.2,335.2,232.7z M125.5,212.7c-3,6.8-5.6,12.8-8.3,18.7c-7.2,16.2-14.4,32.3-21.7,48.4
	c-0.8,1.7-0.9,4.7-4.3,3.5c-17-5.8-33.9-11.7-46.6-25.4c-0.8-0.9-1.5-1.8-2.2-2.8c-7.2-10.9-5.1-19.6,6.5-25.6
	c13.6-7.1,28.6-9.4,43.5-12C103,215.5,113.9,214.3,125.5,212.7z"/>
<path style="fill:#FDFEFE;transform:scale(0.2)" d="M156.7,190.1c8.8-19.6,17-38.1,25.5-56.9c12.9,15.7,25.4,30.9,37.9,46.1c2.5,3.1,0,3-2,3.4
	c-15.1,2.8-30.3,4.4-45.5,5.9C167.6,189.1,162.7,189.5,156.7,190.1z"/>
<path :style="{fill:'rgba(196, 219, 117, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M335.2,232.7c-5.6,6.2-9.5,13.6-13.6,20.8c-10.4-4.6-18.5-12.4-26.4-20.2
	c-37-36.4-69.5-76.7-101.7-117.3c-1.2-1.5-3.1-3.1-0.9-5.1c2.5-2.2,5.4-2.5,8.1-0.2c4.5,3.9,8.9,8,13.3,12
	C254.3,159.4,294.7,196,335.2,232.7z M474.7,180.7c0.4-11.4,1.5-22.4,6.6-32.7c4.8-9.7,12.8-13.3,23.1-9.7
	c9.9,3.4,16.3,10.2,19.2,20.4c3.3,11.4,3.2,22.8,0,34.2c-4.4,16-11.4,30.6-23.2,42.4c-9.8,9.9-12.1,9.3-16.6-3.4
	C477.9,215.2,475.2,198.1,474.7,180.7z M438.7,226.9c-6.4-0.2-10.4-3.3-13.3-7.8c-10.7-16.3-15.1-34.7-18-53.7
	c-0.4-2.5,0.5-3.1,2.7-3.4c15.1-2.2,30.2-4.4,45.3-6.6c2.9-0.4,2.8,1.5,2.5,3.4c-3,18.2-2.1,36.4,1.1,54.5c0.2,1.2,0.2,2.4-0.8,3.3
	C452.4,221.8,446.3,226.4,438.7,226.9z M216.8,299.3c4.6-8,8.8-15.7,11-24.2c0.4-1.7,1.5-2.5,3.4-2.9c6.2-1.3,12.4-2.6,18.5-4.3
	c3.7-1,4.2,0.4,3.5,3.5c-2,9.4-6.4,17.5-12.6,24.7c-1.2,1.4-2.5,2.5-4.5,2.4C229.9,298.5,223.9,300.3,216.8,299.3z M168.5,298.4
	c2.9-6.1,6.5-11.3,8.5-17.4c0.4-1.1,1.2-1.5,2.2-1.6c9-0.9,18-1.7,27.6-2.6c-2.9,9-7.7,15.9-14.4,20.8
	C185.2,303,176.7,296.6,168.5,298.4z"/>
<path style="fill:#0E0E0E;transform:scale(0.2)" :class="ValueId+'_color4'" d="M497.2,189.8c-7.8-0.1-14.4-6.9-14.2-14.6c0.2-7.5,6.7-14,14.2-14c7.8-0.1,14.5,6.6,14.5,14.3
	S504.9,189.9,497.2,189.8z"/>
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
                                    <button :style="{background:'rgba('+getterGrasshopperBg1+')'}" @click="ShowElement(getterGrasshopperBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGrasshopperBg2+')'}" @click="ShowElement1(getterGrasshopperBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGrasshopperBg3+')'}" @click="ShowElement2(getterGrasshopperBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGrasshopperBg4+')'}" @click="ShowElement3(getterGrasshopperBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGrasshopperBg5+')'}" @click="ShowElement4(getterGrasshopperBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGrasshopperBg6+')'}" @click="ShowElement5(getterGrasshopperBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGrasshopperBg7+')'}" @click="ShowElement6(getterGrasshopperBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Grasshopper= [
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
            var randomNumber = Grasshopper[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Grasshopper[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Grasshopper'){
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
                getterGrasshopperBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Grasshopper') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrasshopperBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Grasshopper') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrasshopperBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Grasshopper') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrasshopperBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGrasshopperBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrasshopperBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGrasshopperBg7: {
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
                            name:'Grasshopper',
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