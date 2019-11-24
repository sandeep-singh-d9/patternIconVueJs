<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(187, 227, 238, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M466.2,213.9c0,73,0,145.9-0.1,218.9c0,3.5,0.5,6.9-2.1,10c-3.1,3.7-7.2,4.4-11.6,4.4
	c-33.5,0-67,0-100.4,0c-65.5,0-130.9,0-196.4,0c-3.5,0-7.1-0.2-10-2.2c-3.1-2.2-4.5-5.3-4.5-9.4c0.1-32.1,0.1-64.3,0-96.4
	c0-8.9,1.3-7.8-8-7.9c-1,0-2,0-3,0c0.7-3,3.3-2.4,5.3-2.5c2.9-0.3,4.1-1.7,4.1-4.5c0-1,0-2,0-3c-0.1-35.3,0.1-70.6,0.2-105.9
	c0.6-23.3-0.5-46.6-4-69.7c-3.2-20.8-7.8-41.3-18.4-59.9c-4.4-7.6-9.7-14.4-18.1-18c-1.1-0.5-2.2-1-2.2-2.4c53,0,106-0.1,159-0.1
	c51.2,0,102.3,0.6,153.4-0.3c18-0.3,28.3,7.7,35.7,22.3c9.3,18.2,14,37.7,17.1,57.8c1.8,11.3,2.6,22.7,3.8,34
	c0.3,2.8,1.5,3.2,3.8,3.2c5.5-0.1,11-0.1,16.5,0c1.6,0,3.4-0.4,4.8,0.9c-2.5,2.5-5.6,1.6-8.5,1.7c-3.3,0.2-6.7,0.1-10,0
	c-3.7-0.1-5,1.6-4.9,5.1c0.1,6,0.1,12,0,18C467.6,209.9,467.9,212.1,466.2,213.9z"/>
<path :style="{fill:'rgba(255, 125, 157, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M97,65.2c15.3,5.4,22,18.4,27.6,32c7.5,18.5,11.4,37.9,13.7,57.8c2.3,19.7,3.2,39.3,2.8,59.1
	c-1,9.2-0.4,18.5-1.5,27.7c-2.9,23.7-7.8,46.9-18.9,68.3c-2.5,4.8-5.7,9-9.1,13c-5.5,6.4-12.3,8.7-20.5,7c-9.2-2.2-14.4-9.2-19-16.5
	c-9-14.2-13.5-30.2-16.9-46.5c-3.3-15.7-5.9-31.6-5.9-47.7c0-4.5-1.4-5.5-5.7-5.6c-6.8,0-13.6,1-20.3-0.5c1.2-1.8,3.1-1.8,4.9-1.8
	c14.7-0.3,29.5-0.1,44.2,1c0.5,0,0.9,0.3,1.4,0.5c1.9,1.4,1.6,3.5,1.9,5.4c1.6,10.5,3.3,21,8.5,30.5c1.2,2.2,2.6,4.2,4.4,6
	c5,4.9,9.5,4.5,13.8-1.1c4.4-5.8,6.8-12.5,8.6-19.5c1.8-6.9,2.8-14,3.3-21.1c0.7-9.8,0.6-19.6,0-29.4c-0.7-10.2-2.3-20.2-5.6-29.8
	c-1.4-4.2-3.5-7.9-6.1-11.4c-4.9-6.6-11.2-6.5-15.9,0.2c-6,8.7-8.2,18.8-10.3,29c-0.8,3.8,0.2,8.1-2.7,11.5
	c-2.2,1.5-4.7,1.4-7.2,1.4c-12.1,0-24.2,0.1-36.3,0c-2.4,0-5,0.4-6.9-1.8c6.7-1.3,13.6-0.6,20.3-0.5c3.9,0.1,5.5-0.8,5.6-5.1
	c0.9-27.9,5.5-55.1,15.8-81.1c3.6-9.2,8.6-17.6,15.9-24.5C85.4,67.4,90.7,65.1,97,65.2z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M73.9,214c-16.9-0.6-33.8-1.4-50.7-0.6C14,212,8.8,206.3,8.9,197.8c0.1-8.2,5.5-13.8,14.4-14.9
	c15.9,0,31.8,0.1,47.8,0.1c0.9,0,1.9-0.5,2.8-0.7c6.8-1.5,13.6-0.5,20.4-0.7c5.2-0.2,10.3-0.1,15.5,0c2,0,4,0.2,5.7,1.5
	c1.3,10.3,1.2,20.7,0,31c-0.5,0.4-1.1,1-1.7,0.9c-7.6-1.1-15.2,1.6-22.8,0.1c-3.3-0.6-6.6-0.4-9.9,0.2C78.5,215.6,76,215.9,73.9,214
	z"/>
<path :style="{fill:'rgba(203, 203, 203, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M91,330.2c14.8,1.4,21.8-9,27.7-19.7c9.5-17,14.2-35.7,17.3-54.7c2.1-12.7,3.7-25.5,4-38.5
	c0-1.2-0.1-2.4,1-3.2c0,37.1,0,74.3,0.1,111.4c0,3.8-1.2,5-4.9,4.7c-2-0.1-4.4-0.8-6.2,0.9c-11.4,0-22.9,0-34.3,0
	C94.1,331,92.4,331.5,91,330.2z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M466.2,213.9c0-8.9,0.1-17.9-0.2-26.8c-0.1-3.4,1.1-4.2,4.2-4.2c6.9,0.2,13.9,0,20.9,0
	c9.3,3.3,13.4,9.4,12.1,18c-1.2,7.7-7.9,12.9-17,13C479.5,214,472.8,213.9,466.2,213.9z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M219.5,198.1c2.3,0,4.7,0,7,0c5.3,0,7.2,2.8,5.6,8.1c-0.5,1.9-1.8,1.6-3.1,1.6
	c-6.3,0-12.6-0.1-18.9,0.1c-4.8,0.2-3.5-3.1-3.8-5.8c-0.3-2.9,0.5-4.4,3.8-4.1C213.2,198.3,216.4,198.1,219.5,198.1z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M261.7,198.1c2.2,0,4.3,0,6.5,0c6.5,0,6.4,0,6.1,6.7c-0.1,2.4-1,3.2-3.3,3.1
	c-6.3-0.1-12.6-0.2-18.9,0c-4.4,0.1-3.5-2.8-3.7-5.4c-0.2-2.8,0-4.9,3.8-4.5C255.4,198.3,258.5,198.1,261.7,198.1z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M345.8,207.8c-2.7,0-5.3-0.2-8,0c-3.6,0.4-5.1-0.6-4.8-4.5c0.2-3.2,0-5.7,4.6-5.3
	c5.9,0.5,11.9,0.3,17.9,0.1c3.1-0.1,3.8,1.4,3.4,3.9c-0.4,2.3,1.5,5.8-3.1,5.8C352.4,207.8,349.1,207.8,345.8,207.8z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M388.1,198.1c2.3,0,4.7,0,7,0c6.3,0,6.2,0,5.9,6.3c-0.1,2.2-0.7,3.4-3.1,3.4
	c-6.6-0.1-13.3-0.1-19.9,0c-4.1,0-2.7-3-2.7-5s-1.1-5,2.9-4.8C381.5,198.2,384.8,198.1,388.1,198.1z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M430.3,198.1c2.5,0,5,0.3,7.5-0.1c4.7-0.7,5.6,1.3,5.4,5.5c-0.2,3.1-0.7,4.5-4.1,4.3
	c-5.8-0.3-11.6-0.3-17.4,0c-4.2,0.2-4.5-1.8-4.5-5.1c0-3.1,0.4-5.1,4.2-4.7C424.3,198.3,427.3,198,430.3,198.1L430.3,198.1z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M176.9,207.8c-2.5,0-5-0.2-7.5,0.1c-4.6,0.6-5.6-1.4-5.4-5.7c0.1-3.2,0.9-4.3,4.2-4.2
	c5.8,0.3,11.6,0.3,17.4,0c4.2-0.3,4.3,1.7,4.4,5c0.1,3.6-0.8,5.2-4.7,4.9C182.6,207.6,179.8,207.8,176.9,207.8L176.9,207.8z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M303.7,207.8c-2.5,0-5-0.3-7.4,0.1c-4.5,0.6-5.7-1.1-5.5-5.5c0.1-3.5,1.1-4.5,4.5-4.4
	c5.9,0.3,11.9,0.2,17.9,0c3.9-0.1,3.2,2.5,3.1,4.6c-0.1,2.2,1.2,5.4-3.1,5.2C310,207.7,306.8,207.8,303.7,207.8L303.7,207.8z"/>
<path style="fill:#F0F1F1; transform:scale(0.2)" d="M115.4,183c-12.1,0-24.2,0-36.3-0.1c-1.8,0-3.7,0.5-5.3-0.7c1-12.5,3.2-24.7,9.1-35.9
	c2.5-4.8,5.3-9.7,11.4-10c6.2-0.3,9.2,4.7,11.8,9.4C112.4,157.3,114.5,170,115.4,183z"/>
<path style="fill:#F0F1F1;transform:scale(0.2)" d="M73.9,214c13.9-0.7,27.7-1,41.6,0c-0.8,11.2-2.8,22.1-7.3,32.4c-1,2.3-2.2,4.5-3.5,6.6
	c-6.3,9.5-14,9.4-20.2-0.4c-5.3-8.3-7.5-17.7-9.2-27.2C74.4,221.7,74.3,217.8,73.9,214z"/>
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
                                    <button :style="{background:'rgba('+getterToiletPaperBg1+')'}" @click="ShowElement(getterToiletPaperBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterToiletPaperBg2+')'}" @click="ShowElement1(getterToiletPaperBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterToiletPaperBg3+')'}" @click="ShowElement2(getterToiletPaperBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterToiletPaperBg4+')'}" @click="ShowElement3(getterToiletPaperBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterToiletPaperBg5+')'}" @click="ShowElement4(getterToiletPaperBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var ToiletPaper= [
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
            var randomNumber = ToiletPaper[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  ToiletPaper[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'ToiletPaper'){
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
                getterToiletPaperBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ToiletPaper') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToiletPaperBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ToiletPaper') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToiletPaperBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ToiletPaper') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterToiletPaperBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterToiletPaperBg5: {
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
                            name:'ToiletPaper',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            // background4:  background4Clone,
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