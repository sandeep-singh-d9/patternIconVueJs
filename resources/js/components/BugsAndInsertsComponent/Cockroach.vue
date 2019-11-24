<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M368,231.8c13.2-21.6,26-42.4,38.7-63.2c6.6-10.8,13.3-21.7,19.8-32.6c2.2-3.8,5.1-5.4,9.5-5.4
	c13.7,0.2,27.4,0.1,41.1,0.1c5.9,0,9,2.4,8.8,7c-0.3,5.5-4.1,6.5-8.6,6.5c-11.8,0-23.5,0.2-35.3,0c-3.6-0.1-5.6,1.2-7.4,4.2
	c-19.2,31.6-38.5,63.1-57.8,94.6c-1.7,2.7-2.1,5-0.9,8.2c2.5,6.5,4.5,13.3,6.8,20c0.7,2.2,1.3,4.5,3.3,6.1c3.9,3,0.8,7.2,1.3,10.9
	c2.7-0.4,3.6-2.6,5-4.1c10.4-11.5,20.7-23,31-34.5c5.6-6.3,10.7-5.2,14.1,2.7c18.4,42.9,36.8,85.8,55.1,128.8
	c1.2,2.8,2.6,3.8,5.6,3.7c7.2-0.2,14.5,0,21.7-0.1c4.5-0.1,8,1.6,8.1,6.4c0.1,5.2-3.4,6.9-8.2,6.9c-9-0.1-18-0.3-27,0.1
	c-5.6,0.2-8.4-2.2-10.6-7.1c-17.1-40.1-34.3-80.1-51.5-120.1c-0.8-1.9-1.7-3.8-2.7-6.2c-11.8,13.2-23.2,25.9-34.6,38.5
	c-1.9,2.1-1.8,4.1-1.3,6.5c4.9,25,7.7,50.3,8.1,75.8c0.1,4.8,1.4,6.4,6.4,6.1c8.4-0.4,16.8-0.1,25.3-0.1c7.6,0,9.4,1.8,9.4,9.3
	c0,36.3,0.1,72.5-0.1,108.7c0,5.8,1.6,9.8,5.8,13.7c9.6,9,18.6,18.5,28,27.7c3,3,4.2,6.2,1.6,9.9c-2.5,3.5-6.7,3.8-10.2,0.4
	c-12-11.8-23.8-23.8-35.8-35.7c-2.6-2.6-2.4-5.6-2.4-8.7c0-35.3-0.1-70.5,0.2-105.8c0-5.3-1.3-6.8-6.5-6.3s-10.6,0.4-15.9,0
	c-4.1-0.3-5.3,1-5.3,5.1c-0.1,18-1.2,36-4,53.8c-4.8,31.2-12.6,61.4-31.5,87.4c-17.2,23.8-40,37.1-70.2,34.8
	c-22.5-1.7-39.9-12.9-53.8-30c-17.2-21.2-25.8-46.2-31.6-72.4c-5.3-24.2-7.2-48.8-7.6-73.5c-0.1-4.8-1.7-5.4-5.7-5.2
	c-5.5,0.3-11,0.4-16.4,0c-4.6-0.4-5.4,1.4-5.4,5.6c0.2,35.3,0,70.5,0.2,105.8c0,4.9-1.3,8.5-4.8,11.9c-10.5,10-20.6,20.4-30.8,30.7
	c-5.4,5.4-9,6.2-12.4,2.7c-3.2-3.3-2.3-7,3.2-12.4c9.4-9.4,18.8-18.9,28.3-28.2c2.5-2.4,3.3-4.9,3.3-8.2c-0.1-37-0.1-74.1-0.1-111.1
	c0-8.5,1.5-9.9,9.9-10c8.8-0.1,17.6-0.1,26.5,0c3.3,0.1,4.4-0.9,4.5-4.3c0.6-26.5,3.3-52.7,8.4-78.7c0.4-2.1-0.1-3.7-1.5-5.4
	c-11.4-12.6-22.8-25.3-34.6-38.5c-4.4,10.3-8.7,20.1-13,29.9c-13.8,32.1-27.6,64.2-41.3,96.4c-2.1,5-4.9,7.4-10.6,7.1
	c-9-0.4-18-0.1-27-0.1c-4.7,0-8.4-1.5-8.2-6.8c0.1-4.9,3.5-6.5,8.1-6.4c6.7,0.1,13.3-0.3,20,0.1c4.5,0.3,6.5-1.4,8.2-5.4
	c18-42.2,36.1-84.4,54.2-126.6c4-9.2,8.6-9.7,15.4-2c10.6,12.1,21.4,24,32.2,35.9c0.6,0.7,1.2,1.6,2,1.4c0.5-12.5,8.2-22.5,11.2-34
	c1.4-5.2,1.3-8.9-1.5-13.5c-18.8-30.4-37.4-61-56-91.6c-2.1-3.4-4.4-4.8-8.4-4.7c-11.6,0.2-23.1,0.1-34.7,0c-4.5,0-8.4-1-8.6-6.5
	c-0.2-4.5,2.8-6.9,8.8-6.9c13.9-0.1,27.8,0.1,41.7-0.1c4.4,0,7,1.9,9.2,5.7c19.1,31.6,38.4,63.1,58.1,95.3c3.6-6.4,6.7-12.3,10.2-18
	c8.6-14,18.7-26.6,33.3-34.9c1.7-1,2.5-2.1,2.5-4.1c-1-39.8-8.3-77.9-31.2-111.4c-13.1-19.1-29.9-33.1-54.7-33.9
	c-4.1-0.1-6.4-2.9-6.1-7.1c0.3-4.3,3.1-6.1,7.2-6.1c14.5,0,27.2,5.1,38.6,13.6C255,45.5,268,67.2,277.5,91.2
	c9.6,24.2,14.7,49.4,15.5,75.5c0.1,4.4,0.7,7.4,6,5.6c3.2-1.1,7.5,2.8,9.5-1c1.4-2.7,0.5-6.5,0.7-9.9c2.7-36.4,11.5-71,31.7-101.9
	c12.4-18.9,27.8-34.4,50.3-41c5.3-1.6,10.7-2.3,16.2-2.2c3.9,0.1,6.3,2.1,6.6,6c0.3,4.2-2,7-6.1,7.1c-25,0.9-41.7,15.1-55.1,34.3
	c-16.3,23.5-24.2,50.2-28.3,78.1c-1.5,10.5-2.6,21-2.5,31.6c0,1.9-0.4,3.8,1.9,5c20.1,11.5,31.9,30.1,42.1,50
	C366.6,229.4,367.1,230.2,368,231.8z"/>
<path :style="{fill:'rgba(140, 36, 4, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M228.2,289.3c1.6-1.8,3.7-1.1,5.5-1.1c18.2,0,36.4,0.2,54.6-0.1c4.8-0.1,5.9,1.5,5.9,6
	c-0.1,90.4-0.1,180.9-0.1,271.3c0,6.3-1.2,7.4-7.2,5.7c-4.8-1.4-9.9-2.2-14.1-5.5c-7.3-7.9-11.7-17.5-15.4-27.5
	c-9.7-26.5-13.8-54.1-15.8-82.2c-1.3-18.9-2.5-37.9-2.3-56.8c0.5-32.5,2.3-64.9,6.6-97.1c1.7-12.6,1.4-10.8-9.5-11.1
	C233.7,291,230.6,291.7,228.2,289.3z M329.4,565.7c-4.5,3.4-9.9,4.4-15.2,5.7c-4.2,1.1-6.2-0.3-6.2-5.4c0.2-37.8,0.1-75.6,0.1-113.3
	c0-52.5,0.1-104.9-0.1-157.4c0-5.6,1.3-7.3,7.1-7.2c17.6,0.4,35.2,0.1,52.8,0.1c2.1,0,4.3-0.8,6.1,1.1c-3.4,2.8-7.5,1.6-11.3,1.7
	c-7.6,0.2-7.8,0.3-6.9,7.6c5.3,39.4,7.8,79.1,6.8,118.8c-0.9,34-3,68-11.7,101.2c-3.6,13.7-8.2,27-15.6,39.1
	C333.6,560.6,331.2,562.9,329.4,565.7z"/>
<path :style="{fill:'rgba(198, 67, 9, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M228.2,289.3c5.7,0,11.3,0.1,17,0c2.8,0,4.4,0.6,3.9,4c-2.6,18.3-4.6,36.6-5.8,55
	c-1.5,23.4-2.8,46.8-2,70.1c1.2,34.2,3.1,68.4,12.1,101.7c4.1,15.1,9.4,29.8,18.7,42.7c0.6,0.8,2.1,1.5,0.8,2.9
	c-14.8-6.6-24.5-18.5-32.3-32c-11.3-19.6-16.8-41.1-20.6-63.2c-5.2-30.4-5.7-61.1-4.5-91.8c1.1-29.2,4.5-58.3,11.5-86.8
	C227.3,291,227.8,290.2,228.2,289.3z M329.4,565.7c0.1-4.1,3.2-6.7,5.1-9.9c9.9-16.7,14.5-35.2,18.4-53.9
	c3.7-17.7,5.8-35.7,6.8-53.7c1.2-22.6,2.6-45.3,1.2-67.9c-0.9-13.6-0.8-27.2-2.2-40.8c-1.5-15.1-3.1-30.1-5.3-45.1
	c-0.6-4.3,0.3-5.2,4.2-5.1c5.5,0.1,11,0,16.4,0c3.8,10.1,5.2,20.7,6.9,31.2c5.3,33.1,7.2,66.4,5.9,99.9
	c-1.2,33.4-4.8,66.6-17.7,97.9c-6.7,16.2-15.6,31.1-30.1,41.8C336,562.4,332.6,563.9,329.4,565.7z"/>
<path :style="{fill:'rgba(73, 78, 85, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M278.6,193.2c-4,8.8-8.1,17.4-11.6,26.2c-6.6,16.7-10.3,34.3-13.8,51.8c-0.7,3.3-1.9,4-4.9,4.1
	c-17.2,0.5-17.3,0.5-11.9-15.6c7.4-21.8,17.1-42.3,33.1-59.2c0.9-1,1.9-2,2.9-2.9C274.4,196.1,276.5,194.7,278.6,193.2z
	 M323.9,193.8c12.2,7.5,19.3,18.3,25.7,29.4c8.5,14.8,14.7,30.6,19.8,46.9c1.2,3.8,1,5.2-3.5,5.3c-14.8,0.3-14.8,0.4-18.2-13.9
	c-4.5-18.6-9.4-37-17.3-54.5C328.5,202.8,325.4,199.4,323.9,193.8z"/>
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
                                    <button :style="{background:'rgba('+getterCockroachBg1+')'}" @click="ShowElement(getterCockroachBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCockroachBg2+')'}" @click="ShowElement1(getterCockroachBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCockroachBg3+')'}" @click="ShowElement2(getterCockroachBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCockroachBg4+')'}" @click="ShowElement3(getterCockroachBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCockroachBg5+')'}" @click="ShowElement4(getterCockroachBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCockroachBg6+')'}" @click="ShowElement5(getterCockroachBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCockroachBg7+')'}" @click="ShowElement6(getterCockroachBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Cockroach= [
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
            var randomNumber = Cockroach[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cockroach[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cockroach'){
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
                getterCockroachBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cockroach') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCockroachBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cockroach') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCockroachBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cockroach') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCockroachBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCockroachBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCockroachBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCockroachBg7: {
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
                            name:'Cockroach',
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