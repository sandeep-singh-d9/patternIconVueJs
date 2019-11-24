<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M306.3,594.2c-91.4,0-182.9,0-274.3,0c-9.7,0-12.7-3.1-12.7-12.9c0-93.4,0-186.8-0.1-280.3
	c0-5.2,1.7-9.1,5.4-12.6c12.7-12,25.1-24.4,37.9-36.4c3.3-3.1,4.7-6.2,4.7-10.8c-0.2-56.6-0.1-113.1-0.1-169.7
	c0-9.8,3-12.8,12.8-12.8c59.2,0,118.3-0.1,177.5,0.1c3.9,0,6.6-1.1,9.3-3.9c9.9-9.8,20-19.4,30-29.1c7.7-7.4,11.2-7.4,19.1,0.2
	c9.9,9.6,19.9,19,29.6,28.7c2.9,2.9,5.8,4.1,9.9,4.1c59-0.1,117.9-0.1,176.9-0.1c10.2,0,13.1,2.9,13.1,13.1
	c0,56.8,0.1,113.5-0.1,170.3c0,3.9,1.2,6.6,4,9.3c13,12.3,25.8,24.9,38.8,37.3c3.6,3.4,5.2,7.1,5.2,12.1
	C593,394,593,487.2,593,580.4c0,11.1-2.7,13.8-13.6,13.8C488.3,594.2,397.3,594.2,306.3,594.2z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M526.1,123c0-7.9,0-15.8,0-24.9c-15.8,12.5-30.8,23.6-46.5,33.7c-3.4,2.2-3.6,3.9-1.9,7.4
	c9.4,19.9,18.6,40,27.9,59.9c1.8,3.9,2.2,7.7-0.5,11.2c-2.9,3.8-6.9,4.2-11.3,3.2c-11.3-2.5-22.6-4.6-33.8-7.4
	c-3.6-0.9-4.9,0.3-6.4,3.1c-5.2,9.9-10.6,19.6-15.7,29.4c-2.2,4.1-4.7,7.5-9.8,7.4c-5.4-0.1-7.8-3.7-9.9-8.2
	c-8.6-18.8-17.4-37.5-25.9-56.3c-1.4-3.2-2.7-3.9-6.2-2.7c-9.2,3.2-18.5,6.1-28.1,7.6c-3.7,0.6-4,2.6-4,5.8
	c0.1,21.3,0,42.6,0.1,63.9c0,4.9-0.6,9.1-5.5,11.6c-5,2.5-8.7,0-12.5-2.8c-8.6-6.5-17.3-12.7-25.7-19.5c-3.4-2.7-5.4-2.3-8.5,0.2
	c-8.6,6.8-17.5,13.1-26.2,19.8c-3.7,2.8-7.4,4.7-12,2.2c-4.6-2.4-5.3-6.5-5.2-11.1c0.1-21.3,0-42.6,0.1-63.9c0-3.7-0.7-5.7-4.8-6.3
	c-9-1.4-17.8-4-26.4-7.1c-3.9-1.4-5.6-1-7.5,3.2c-8.2,18.5-16.9,36.8-25.3,55.2c-2,4.4-4.3,8.3-9.7,8.5s-8-3.3-10.3-7.6
	c-4.9-9.3-10.2-18.4-14.9-27.8c-2-4-3.8-5.4-8.5-4.2c-10.4,2.7-21,4.4-31.5,6.8c-4.6,1.1-8.7,1.2-12-2.7s-2.4-8-0.4-12.2
	c9.1-19.6,18-39.3,27.3-58.9c1.7-3.6,1.9-5.4-1.9-7.9c-9.4-6-18.4-12.6-27.4-19.1c-6.2-4.5-12.2-9.2-18.6-14.1
	c-0.1,1.4-0.3,2-0.3,2.6c0,76.5,0,153-0.1,229.5c0,3.6,1.6,5.4,3.9,7.4c29.3,25.2,58.6,50.3,87.7,75.8c4,3.5,5.8,2.9,9.3-0.6
	c36.3-36.6,72.9-73,109.4-109.5c8.1-8.1,11.6-8.1,19.8,0.2c36.6,36.6,73.3,73.2,109.8,109.9c3.3,3.3,5.1,3.1,8.3,0.2
	c29.1-25.4,58.4-50.6,87.8-75.7c3-2.6,4.2-5.1,4.2-9.1C526,260.4,526.1,191.7,526.1,123z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M370.4,163.9c39.4-11.7,74.8-31.4,108.3-54.7c13.8-9.6,27.3-19.6,40.7-30.8c-142.5,0-284.2,0-426.7,0
	c34.6,27.9,70,52.6,109.6,70.8C256.5,173.9,312.4,181,370.4,163.9z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M183.7,215.3c-4.6-8.5-8.8-15.9-12.6-23.5c-2.9-5.7-7.3-7.4-13.3-6.1c-8.3,1.8-16.6,3.6-26,5.6
	c2.6-5.7,4.8-10.7,7.1-15.6c4.2-9,8.4-18,12.5-27.1c1.1-2.6,1.9-3.8,5.1-1.9c14.1,8.5,28.8,16.1,44,22.5c2.6,1.1,3.8,2.1,2.3,5.3
	C196.3,187.7,190.2,201.1,183.7,215.3z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M480.6,191.3c-9.3-2-17.5-3.8-25.6-5.5c-7.4-1.6-10.4-0.1-14.1,6.6c-4,7.3-7.9,14.6-12.4,22.9
	c-1.7-3.7-3.2-6.7-4.6-9.8c-4.7-10.3-9.4-20.6-14.3-30.7c-1.3-2.8-1.1-4.1,1.9-5.3c15.3-6.5,30.1-14.1,44.4-22.6
	c1.9-1.1,3.2-1.9,4.5,1C466.9,161.9,473.6,176,480.6,191.3z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M334.8,240.3c-7.8-5.8-14.4-10.8-21.1-15.8c-6.1-4.5-8.9-4.6-15-0.1c-6.8,5-13.6,10.1-21.3,15.9
	c0-16.3,0-31.5,0-46.7c0-3.5,2.5-2.5,4.2-2.3c10.5,1.1,21,1.4,31.5,1.1c6.1-0.2,12.3-0.7,18.4-1.2c2.2-0.2,3.3,0.3,3.3,2.8
	C334.8,209.1,334.8,224.1,334.8,240.3z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M311.1,325.6c-4.1-4.1-6-4-10.1,0C220,407,138.7,488.3,57.5,569.5c-1.5,1.5-3,3.1-5,5.2
	c169.5,0,338,0,508.4,0c-2.9-2.4-4.6-3.7-6.1-5.2C473.5,488.2,392.2,407,311.1,325.6z M165.1,427.8C124.5,392.9,84,357.9,43.4,323
	c-1.4-1.2-2.5-3-4.9-3.1c0,80.1,0,160.1,0,240.9c1.1-0.8,1.7-1.1,2-1.4c41.8-41.8,83.6-83.6,125.5-125.3
	C169.4,430.7,167.2,429.6,165.1,427.8z M570.3,321.7c-41.2,35.5-82.3,71-123.6,106.4c-3.6,3.1-1.9,4.4,0.4,6.7
	c41,40.9,82,81.9,123,122.9c1,1,2,1.9,3.5,3.3c0-81,0-161.1,0-241.8C572.1,320.3,571.1,321,570.3,321.7z M66.6,275.4
	c-0.4-0.3-0.8-0.5-1.2-0.8c-7,7.9-13.9,15.7-21.1,23.8c6.6,5.7,14.3,12.3,22.3,19.2C66.6,302.9,66.6,289.2,66.6,275.4z M546.7,274.7
	c-0.4,0.3-0.7,0.7-1.1,1c0,13.7,0,27.5,0,42c8.2-7.1,15.8-13.7,22.1-19.1C560.6,290.5,553.6,282.6,546.7,274.7z M308.4,45.5
	c-1.5-1.7-2.9-1.8-4.4-0.1c-3.9,4.4-7.9,8.8-11.6,13c9.1,0,18.7,0,27.8,0C316.3,54.1,312.3,49.8,308.4,45.5z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M306,469.8c-7.6,0.4-14-2.8-20.5-6c-2.3-1.2-2.7-2.6-1.3-4.7c0.7-1,1-2.1,1.6-3.2
	c1.8-3.3,2.8-7.8,5.6-9.6c2.9-1.8,6.3,2.2,9.6,3.4c5.9,2.2,10.9,0.2,15.8-2.6c3-1.7,5.1-1.9,6.3,1.9c0.5,1.5,1.4,2.8,2.1,4.3
	c4.8,9.7,4.9,9.7-5.4,13.9C315.3,469,310.7,470.2,306,469.8z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M268.1,393.4c5.5,0.1,9.6,4.6,9.3,10.1c-0.3,5.2-4.5,9.2-9.8,9c-5.5-0.1-9.6-4.6-9.3-10.1
	C258.6,397.2,262.8,393.3,268.1,393.4z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M344.3,393.4c5.3-0.1,9.5,3.9,9.7,9.1c0.2,5.5-3.9,9.9-9.4,10c-5.3,0.1-9.5-3.9-9.7-9.1
	C334.6,397.9,338.8,393.5,344.3,393.4z"/>
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
                                    <button :style="{background:'rgba('+getterBirthdayCardBg1+')'}" @click="ShowElement(getterBirthdayCardBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBirthdayCardBg2+')'}" @click="ShowElement1(getterBirthdayCardBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBirthdayCardBg3+')'}" @click="ShowElement2(getterBirthdayCardBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBirthdayCardBg4+')'}" @click="ShowElement3(getterBirthdayCardBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBirthdayCardBg5+')'}" @click="ShowElement4(getterBirthdayCardBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var BirthdayCard= [
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
            var randomNumber = BirthdayCard[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BirthdayCard[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BirthdayCard'){
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
                getterBirthdayCardBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BirthdayCard') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBirthdayCardBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BirthdayCard') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBirthdayCardBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BirthdayCard') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBirthdayCardBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBirthdayCardBg5: {
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
                            name:'BirthdayCard',
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