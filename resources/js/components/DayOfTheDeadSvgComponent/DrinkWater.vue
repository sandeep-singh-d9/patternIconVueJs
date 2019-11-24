<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#03A9F4;transform:scale(0.2)"  :class="ValueId+'_color4'" d="M415.1,367c-0.4,3.7-0.8,7.3-1.2,11c-6.7,3.3-8.2,9.2-9,16.1c-4.1,36.5-8.6,72.9-12.7,109.4
	c-1.5,12.9-5.8,17.1-18.7,17.1c-50.6,0-101.1,0-151.7,0c-3,0-6,0.3-8.8-1c-2.4-1.7-2.8-4.3-3.3-6.9c-10.8-56-20.9-112.2-28-168.9
	c-2.7-21.5-4.5-43.1-5.5-64.8c-0.3-6.6,0.5-13.1,1.6-19.5c4.7-7,12.2-7.2,19.3-7.6c7.3-0.3,14.4-0.8,21.4-3.1c5-1.6,9-5.3,14.2-6.4
	c20.7,1.4,38.5-16.3,39.1-38.9c0.2-8.8,0-17.6,0.1-26.4c0-2.6-0.4-5.3,1.5-7.5c2-1.3,4.3-1.2,6.5-1.2c12.7,0,25.5-0.1,38.2,0
	c7.7,0,8.6,1,8.7,8.9c0.1,7.3,0,14.6,0,21.9c0,31.2,20.9,52.3,52.1,52.4c16.1,0.1,28.1,6.8,35.1,21.6c3.1,6.7,3.3,13.8,2.5,20.9
	c-2.1,18.8-4.1,37.6-6.8,56.3C408.8,357.3,409.9,362.6,415.1,367z"/>
<path style="fill:#050505;transform:scale(0.2)"  :class="ValueId+'_color1'" d="M415.1,367c-6.8-2.6-8.3-5.4-7.4-12.4c2.6-20.6,5.4-41.1,7.4-61.8c2.4-23.4-12.9-39.6-36.5-39.6
	c-31.3,0-53.3-22-53.4-53.3c0-8.4-0.1-16.9,0.1-25.3c0.1-3.5-0.7-5-4.6-5c-15.7,0.2-31.5,0.2-47.2,0.2c-3.8,3-8.3,1.6-12.5,1.6
	c-4.6,0-6.3,1.7-6.2,6.3c0.2,8.4,0.2,16.8,0,25.2c-0.3,13.9-5.7,25.7-14.9,35.9c-1.8,2.1-3.8,4.2-7,4.2
	c-11.1,7.6-23.4,10.8-36.8,10.3c-6.2-0.2-12.1,1.6-17.1,5.5c-0.9,1.4-1.9,2.8-3.1,3.9c-8.8,8.1-12.1,18.3-10.8,30
	c4.3,36.3,8.5,72.6,12.8,108.9c3.9,33.7,8,67.4,11.8,101c0.2,1.9,0.4,3.7,0.9,5.5c1.6,6.1,4.4,8.3,10.7,8.8c3.9,0.3,7.9-1,11.5,1.6
	c29.4,0.1,58.8,0.1,88.2,0.2c25.1,0,50.2,0,75.3,0c8.9,0,12.4-2.6,13.6-11.4c2.3-17.4,4.2-34.9,6.3-52.3c2.7-23,5.2-46,8-69.1
	c0.7-5.5,4.3-8,9.8-8c6,1.7,7.6,5.9,6.9,11.6c-3.1,26.4-6.2,52.8-9.3,79.2c-1.7,14.1-3.4,28.3-5.1,42.4c-1.7,14-12.9,24.4-27,24.4
	c-60,0.1-120,0.1-180,0c-14.3,0-25.5-10.1-27.2-24.1c-5.3-44.6-10.5-89.3-15.8-133.9c-3.2-27.2-6.2-54.3-9.8-81.4
	c-4.3-32.8,19-59.8,52-59.8c23.6,0,37.7-14.1,37.7-37.7c0-49.9,0-99.7,0-149.6c0-9,2.6-11.6,11.7-11.6c27.6,0,55.1,0,82.7,0
	c8.7,0,11.4,2.8,11.4,11.4c0,50.2,0,100.5,0,150.7c0,22.2,14.3,36.7,36.3,36.8c35.4,0.1,57.9,26.5,53,61.8
	c-2.7,19.7-4.8,39.4-7,59.1C423.8,363.3,421.1,366.6,415.1,367z"/>
<path style="fill:#FB9601;transform:scale(0.2)"  :class="ValueId+'_color2'" d="M228.3,347.9c4.8-3.7,9-8.4,15.6-9.1c5.4,2.8,10.6,1.5,16.1-0.2c30.6-9.1,59.6-5.8,85.2,14.1
	c28.1,21.9,27.6,58.1-0.6,80.2c-14.8,11.6-31.8,17.1-50.6,17.6c-15,0.4-29.5-1.2-43.3-7.5c-16.5-7.5-29.4-18.5-35.7-36.1
	c-5.6-15.7-2.2-30,7.4-42.9C226.1,359.1,229.3,354.4,228.3,347.9z"/>
<path style="fill:#0369F4;transform:scale(0.2);" :class="ValueId+'_color5'" d="M212.7,518.6c-4.3,0.1-8.6,0.3-12.9,0.2c-6-0.1-10-3.3-10.8-9.3c-2-15-3.7-30-5.5-45.1
	c-2.8-23.8-5.5-47.5-8.3-71.3c-2.5-21-5-41.9-7.5-62.9c-1.4-11.7-2.5-23.4-4.2-35.1c-2.2-15.5,3.5-29.4,15.5-36.3
	c0,7.1-1.6,14.1-1.2,21.2c1.4,20.4,2.7,40.8,5.4,61.1c2.5,19.3,5,38.7,8.2,57.9c3.4,20.9,6.8,41.8,10.5,62.6
	c3.1,17.4,6.5,34.7,9.8,52C211.9,515.4,212.3,517,212.7,518.6z M241.5,243.8c19.3-4.8,32-21.2,32-41.3c0-10.9,0-21.7,0-32.6
	c-5.4-0.1-10.8,0-16.2-0.2c-3.3-0.2-4.1,1.2-4.1,4.2c0.2,8.2-0.2,16.4,0.1,24.6c0.5,18.2-6.4,33-20.3,44.6
	C235.6,245.2,238.7,244.5,241.5,243.8z"/>
<path style="fill:#FB9601;transform:scale(0.2)"  :class="ValueId+'_color2'" d="M325.3,95.5c0,3.1-0.4,4.8-4.2,4.8c-15.9-0.2-31.8-0.2-47.7-0.3v0c-5.4,0.1-10.8,0-16.2,0.3
	c-3.3,0.2-4-1.1-4-4.2c0.2-13.6,0.1-27.2,0.2-40.8c1.2-2.3,3.3-1.2,5-1.2c20.6,0,41.2,0.1,61.8,0c3.7,0,5.3,0.8,5.2,4.9
	C325.1,71.2,325.2,83.4,325.3,95.5z"/>
<path style="fill:#E9F8FD;transform:scale(0.2)"  :class="ValueId+'_color3'" d="M325.3,149.1c0,2.6-0.6,3.6-3.4,3.6c-22.3-0.1-44.6,0-66.9-0.1c-0.5,0-0.9-0.5-1.4-0.7c0,0,0,0,0,0
	c0,0,0,0,0,0c-0.1-10.7-0.2-21.5-0.4-32.2c-0.1-2.4,1.1-2.7,3-2.6c5,0.1,10,0.1,15,0.2c16.8-0.1,33.7-0.1,50.5-0.2
	c2.6,0,3.5,0.7,3.5,3.4C325.1,130,325.2,139.6,325.3,149.1z"/>
<path style="fill:#050505;transform:scale(0.2)"  :class="ValueId+'_color1'" d="M228.3,347.9c2.7,4.6,2.3,8.5-1.3,12.7c-19.5,22.9-17.1,50.3,6,69.8c12.1,10.2,26.2,15.9,41.7,18
	c24.2,3.2,47-0.6,67.2-15.2c10.8-7.8,18.7-17.9,21.5-31.1c4-19-2.9-34.6-17.2-46.4c-26.9-22.2-57.5-24.8-89.9-14.2
	c-4.9,1.6-9.1,2.2-12.4-2.6c-2-7-1-10.5,4.6-12.4c38.8-13.8,75.4-10.5,107.9,15.9c34.8,28.3,33,76.5-3,103.3
	c-37.6,27.9-91.3,28.1-128.5-0.3c-17.5-13.4-28-31.1-27.8-53.9c0.2-16.5,6.8-30.5,17.7-42.6C218.8,344.4,222.2,344.3,228.3,347.9z
	 M288.9,412.1c14.1,0,28.1,0,42.2,0c6.7,0,10.4-3,10.4-8.3c0-5.3-3.7-8.5-10.3-8.6c-27.9-0.1-55.8,0-83.8,0
	c-6.6,0-10.3,3.2-10.4,8.4c-0.1,5.3,3.6,8.4,10.3,8.4C261.2,412.1,275,412.1,288.9,412.1C288.9,412.1,288.9,412.1,288.9,412.1z
	 M267.3,365.9c-4.6,0-8.5,3.9-8.5,8.6c0,4.5,3.6,8.1,8.1,8.3c4.8,0.2,8.7-3.4,8.8-8.1C275.8,370,271.9,366,267.3,365.9z
	 M310.8,365.9c-4.6,0.2-8.3,4.4-8,9c0.3,4.4,4,7.9,8.5,7.8c4.8,0,8.5-3.9,8.3-8.6C319.5,369.6,315.3,365.7,310.8,365.9z M244.9,366
	c-4.4,0.2-7.9,4.1-7.8,8.6c0.1,4.8,3.9,8.4,8.7,8.1c4.6-0.2,8-3.9,7.9-8.4C253.6,369.7,249.4,365.8,244.9,366z M297.6,374.5
	c0-4.7-3.9-8.7-8.5-8.6c-4.4,0.1-8.1,3.9-8.1,8.4c-0.1,4.9,3.6,8.5,8.5,8.4C294,382.7,297.5,379.1,297.6,374.5z M332.8,365.9
	c-4.4,0.2-8.1,4.1-8,8.5c0,4.8,3.8,8.5,8.6,8.3c4.6-0.1,8-3.7,8-8.3C341.4,369.7,337.4,365.7,332.8,365.9z"/>
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
                                    <button :style="{background:'rgba('+getterDrinkWaterBg1+')'}" @click="ShowElement(getterDrinkWaterBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg2+')'}" @click="ShowElement1(getterDrinkWaterBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg3+')'}" @click="ShowElement2(getterDrinkWaterBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg4+')'}" @click="ShowElement3(getterDrinkWaterBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg5 +')'}" @click="ShowElement4(getterDrinkWaterBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg6+')'}" @click="ShowElement5(getterDrinkWaterBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg7+')'}" @click="ShowElement6(getterDrinkWaterBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg8+')'}" @click="ShowElement7(getterDrinkWaterBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg9+')'}" @click="ShowElement8(getterDrinkWaterBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDrinkWaterBg10+')'}" @click="ShowElement9(getterDrinkWaterBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var DrinkWater= [
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
            var randomNumber = DrinkWater[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  DrinkWater[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'DrinkWater'){
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
                getterDrinkWaterBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'DrinkWater') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'DrinkWater') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'DrinkWater') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterDrinkWaterBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrinkWaterBg10: {
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
                            name:'DrinkWater',
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