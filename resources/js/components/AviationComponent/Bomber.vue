<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(26, 19, 48, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M564.7,302.7c-1.9,3.4-4.8,5.5-8.4,7.1c-21.7,9.5-43.3,19.1-64.9,28.7c-9.4,4.2-19.3,7.8-29.6,7
	c-18.5-1.3-35.2,4.1-52.1,10.4c-22.3,8.3-44.2,18-67.5,23.4c-9,2.1-15.5,5.8-21,12.9c-7.1,9-14.9,17.4-22.9,26.5
	c5.8,1.3,11.1,0.4,16.3,0.6c4.1,0.2,8.3-0.1,12.4,0.4c4.9,0.6,7.8,4,7.8,8.8s-2.6,8.4-7.6,9c-4.6,0.5-9.3,0.4-14,0.4
	c-9.2,0-18.3,0-27.5,0c-1.9,0-4-0.3-5.5,1.4c-10,11.5-20,22.9-31,35.4c11.1,0,20.8-0.1,30.6,0c5.1,0.1,8.6,3.6,9,8.2
	c0.4,4.8-2.9,9-8,9.9c-1.6,0.3-3.2,0.2-4.8,0.2c-12.6,0-25.1,0.1-37.7-0.1c-3.5,0-6,0.8-8.3,3.6c-4.6,5.7-9.7,11.1-14.5,16.7
	c-12.3,14.3-28.4,18.2-46.2,16.2c-11.6-1.3-17.9-12.2-14.8-24.6c8.7-34.8,17.4-69.5,26.1-104.3c1.1-4.3,2-8.7,3.3-13
	c1.3-4.2,0-5.2-4.2-5.2c-4.9-0.1-8.9,1.1-12.9,4.1c-30.1,22.1-60.4,43.9-90.5,66c-5.1,3.8-9.7,4.7-15.3,1.3c-4.5-2.6-9.3-4.6-13.9-7
	c-6.9-3.5-8.4-8.3-4.6-15c8.2-14.5,16.5-29,24.8-43.5c0.9-1.6,2.4-3.1,2.3-5.8c-11.9,0-23.6,0-35.4,0c-2.3,0-4.7,0.3-6.9-0.8
	c-4.2-2.2-5.9-5.8-4.9-10.3c1.1-5.2,4.9-7.3,9.9-7.3c15.3,0,30.5,0,45.8,0c8.2,0,8.2,0,8.2-8.3c-0.1-10.1-0.1-10-10.2-10.1
	c-5.5,0-11.1,0.5-16.6-0.9C44.4,340.6,34.8,331,32,315.6c-1.9-10.4-1.8-21.2,0-31.6c3.2-18,17.6-29.8,36-30.1
	c4.8-0.1,9.7-0.2,14.5,0c2.8,0.1,4-0.7,3.7-3.6c-0.2-2.1-0.1-4.3-0.1-6.5c0-8.4,0-8.3-8.6-8.3c-15.1,0-30.2,0-45.3,0
	c-4.6,0-8.2-1.8-9.7-6.2c-1.4-4.1-0.4-7.8,3.2-10.6c2.1-1.7,4.7-1.6,7.2-1.6c12.1,0,24.3,0,37.4,0c-2.4-4.4-4.4-7.9-6.4-11.5
	C57,193.4,49.8,181,42.8,168.5c-4.1-7.3-2.7-11.9,4.8-15.7c4.6-2.4,9.4-4.4,13.9-7c5.2-3,9.6-2.2,14.4,1.3c30,22,60.1,43.7,90,65.7
	c4.5,3.3,8.8,4.9,14.3,4.6c3.7-0.1,4.6-1,3.7-4.7c-5.9-23.1-11.6-46.2-17.4-69.3c-4.1-16.5-8.4-33-12.4-49.5
	c-3.2-13.1,5.2-23.3,18.7-24c19.2-1,35.2,5.3,46.2,21.2c8.5,12.4,18.9,18.2,34.2,15.9c8.1-1.2,16.5-0.3,24.8-0.2
	c6.7,0.1,10.8,3.8,10.7,9.4c-0.1,5.5-4,8.8-10.6,8.9c-9.1,0.1-18.3,0-27.5,0c-0.5,2.5,1.4,3.3,2.5,4.5c8.5,9.8,17.1,19.4,25.5,29.2
	c2.1,2.5,4.3,3.3,7.4,3.3c12.6-0.1,25.1-0.1,37.7,0c6.9,0,11.1,3.6,11,9.1s-4.3,9.1-11,9.3c-8.2,0.1-16.4,0-24.7,0
	c-0.3,2.1,1.2,2.9,2,3.9c8.9,10.3,18,20.5,26.9,30.8c1.7,2,3.6,3.1,6.3,3.5c15.8,2.3,30.2,8.8,45.1,14.1
	c18.2,6.4,36.4,13.2,54.5,19.9c2.6,0.9,5.1,1.5,7.9,1.3c22.4-1.8,43.3,3.3,63.4,13.3c16.7,8.3,34,15.3,51.1,22.8
	c3.6,1.6,6.5,3.7,8.4,7.1C564.7,299.1,564.7,300.9,564.7,302.7z"/>
<path :style="{fill:'rgba(255, 226, 79, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M533.2,300.2c-23.2,8.5-43.2,21.9-66.7,26.6c-9.2,1.9-18.6,0.6-28,0.7c-2.7,0-5.3,0.4-7.9,1.3
	c-25.9,9.5-51.8,18.9-77.7,28.4c-12.9,4.8-26.2,7.1-40,7.1c-67.2-0.1-134.3-0.1-201.5,0.1c-5.2,0-7.1-0.9-6.9-6.7
	c0.6-11.8,0.2-11.8,11.8-11.8c32,0,63.9,0,95.9,0c9.4,0,12-2.6,12-12.2c0-22.3,0-44.5,0-66.8c0-10.3-2.5-12.8-12.6-12.8
	c-33.8,0-67.5-0.1-101.3,0.1c-5,0-5.9-1.4-5.8-6c0.4-12.4,0.2-12.4,12.7-12.4c66.1,0,132.2,0,198.3-0.1c12.9,0,25.2,2.6,37.3,7.1
	c24.9,9.1,49.9,18.1,74.7,27.4c5.9,2.2,11.9,2.7,18,2.3c17.3-1.3,33.3,2.6,48.8,10.4C506.6,289,519.5,294.1,533.2,300.2z"/>
<path :style="{fill:'rgba(233, 96, 96 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M305.3,382.6c-6.9,8-12.9,15-19,22c-27.8,31.7-55.6,63.4-83.2,95.2c-7.3,8.4-16,12.3-27,11.9
	c-3.1-0.1-4.2-0.7-3.4-4c10.2-40.3,20.3-80.6,30.2-120.9c0.8-3.3,2.4-4.2,5.6-4.2C240.3,382.7,272.1,382.6,305.3,382.6z
	 M304.8,217.4c-33,0-64.9,0-96.9,0c-2.8,0-4-0.7-4.8-3.6c-10-40.5-20.2-81-30.4-121.5c-0.7-2.7-0.4-3.9,2.8-4
	c10.3-0.4,19.1,2.4,26,10.3c31,35.6,62.1,71.1,93.1,106.6C297.9,209,301.7,212.3,304.8,217.4z M139,217.2c-14.7,0-29.4-0.1-44,0.1
	c-3.3,0-4.3-2-5.5-4.1c-8.2-14.3-16.4-28.6-24.5-43c-0.8-1.4-3.3-2.9-1.1-5c2-1.8,4-1.2,6.2,0.4c12.5,9.3,25.2,18.4,37.8,27.6
	c10.5,7.7,21.1,15.3,31.6,23C139.4,216.6,139.2,216.9,139,217.2z M140.7,382.8c-12.5,9.1-23.7,17.4-35,25.6
	C94,416.9,82.2,425.5,70.5,434c-1.5,1.1-2.7,2.9-5.2,1.6c-2-1-2.8-1.8-1.5-4c9-15.5,17.8-31.1,26.8-46.6c0.7-1.3,1.5-2.2,3.3-2.2
	C108.9,382.9,123.9,382.8,140.7,382.8z"/>
<path :style="{fill:'rgba(26, 19, 48, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M318.9,291c-6.6-1.5-10-5.2-9.5-10.3c0.6-5.2,4.7-8.2,11.3-8.2c22.8,0,45.6,0,68.4,0
	c16.2,0,28.3,11.8,28.3,27.5c0,15.6-12.1,27.5-28.3,27.6c-22.8,0.1-45.6,0-68.4,0c-6.7,0-10.8-3-11.3-8.2c-0.5-5.1,2.7-8.7,9.5-10.3
	c2.5-1.9,5.5-1.5,8.3-1.5c19,0,38,0,57.1,0c2.5,0,5,0.2,7.5-0.6c3.3-1.1,5-3.4,5-6.8s-1.7-5.8-5-6.9c-2.4-0.8-5-0.6-7.5-0.6
	c-19,0-38,0-57.1,0C324.4,292.5,321.4,292.9,318.9,291z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M127.1,290.8c-24.2,0-48.5-0.1-72.7,0.1c-5,0-5.3-1.6-3.9-5.6c2.5-7.4,9-12.8,16.9-12.8
	c44.9-0.1,89.7,0,134.6-0.1c3.6,0,4,1.4,4,4.4c0.2,14,0.3,14-13.7,14C170.5,290.8,148.8,290.8,127.1,290.8L127.1,290.8z
	 M128.2,309.1c24.2,0,48.5,0.1,72.7-0.1c4,0,5.2,0.9,5.1,5c-0.2,13.4,0,13.5-13.2,13.5c-41.3,0-82.6,0-123.9,0
	c-9.2,0-15.8-4.9-18.5-12.8c-1.3-4-1-5.6,4-5.6C79,309.3,103.6,309.1,128.2,309.1z M318.9,291c23.7-0.1,47.4-0.2,71.1-0.2
	c5.6,0,9,4,8.9,9.4c-0.1,5.1-3.6,8.8-8.9,8.8c-23.7,0-47.4-0.1-71.1-0.1C318.9,303,318.9,297,318.9,291z"/>
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
                                    <button :style="{background:'rgba('+getterBomberBg1+')'}" @click="ShowElement(getterBomberBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBomberBg2+')'}" @click="ShowElement1(getterBomberBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBomberBg3+')'}" @click="ShowElement2(getterBomberBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBomberBg4+')'}" @click="ShowElement3(getterBomberBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBomberBg5+')'}" @click="ShowElement4(getterBomberBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Bomber= [
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
            var randomNumber = Bomber[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Bomber[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Bomber'){
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
                getterBomberBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bomber') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBomberBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bomber') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBomberBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bomber') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBomberBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBomberBg5: {
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
                            name:'Bomber',
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