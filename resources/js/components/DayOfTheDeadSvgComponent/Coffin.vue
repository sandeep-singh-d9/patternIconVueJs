<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M27.6,171.8c0-16,0-32,0-48c0-12.1,5.6-20.9,16.2-26.7c32.6-17.8,65.2-35.7,97.9-53.5
	c8.5-4.6,17.3-5.1,26.2-1.4c47.1,19.4,94.2,38.8,141.4,58.1c5,2.1,9.2,5.2,12.9,9.2c72,75.9,143.9,151.9,216.1,227.6
	c8.4,8.8,12.5,18.2,12.3,30.3c-0.5,23.2-0.1,46.5-0.1,69.7c0,11.1-4.4,19.9-13.6,26.2c-32,22.2-64,44.5-96,66.8
	c-11.1,7.7-22.3,8-33.8,1.3c-99.3-57.9-198.5-115.8-297.8-173.7c-5-2.9-9-6.7-12.1-11.7C75.1,310.4,53,274.7,30.8,238.9
	c-3.4-5.6-5-11.5-5-18.1c0.1-16.3,0-32.7,0-49C26.5,171.8,27,171.8,27.6,171.8z"/>
<path style="fill:#DDA379;transform:scale(0.2)" :class="ValueId+'_color2'" d="M155.9,52.5c2.5,0.8,5,1.4,7.3,2.3c47,19.3,94,38.7,141,58.1c2.8,1.1,5.1,2.7,7.2,4.9
	c41.2,43.5,82.3,86.9,123.5,130.4c23,24.2,46,48.4,69,72.6c8.9,9.4,17.6,18.9,26.6,28.1c2.5,2.6,1.8,3.5-0.7,5.3
	c-29.4,20.3-58.7,40.8-88.1,61.2c-4.5,3.1-9.2,6-13.5,9.5c-3.3,2.7-5.8,2.7-9.5,0.3c-60.3-39.7-120.8-79.2-181.2-118.8
	c-40.1-26.3-80.3-52.6-120.4-78.8c-2.4-1.6-4.2-3.5-5.6-5.9c-21.6-34.9-43.2-69.8-65-104.6c-2.3-3.6-1.4-5.3,1.9-7.1
	c33.7-18.3,67.3-36.7,100.9-55.1C151.4,53.7,153.6,53.3,155.9,52.5z"/>
<path style="fill:#BE8156;transform:scale(0.2)" :class="ValueId+'_color5'" d="M114.1,241.2c16.8,11,32.7,21.4,48.7,31.8c71.3,46.7,142.7,93.5,214,140.2c12.2,8,24.5,16,36.8,23.8
	c2.6,1.6,3.7,3.3,3.7,6.5c-0.2,24.4-0.2,48.9,0,73.3c0,4.5-0.8,4.9-4.7,2.6c-98.2-57.4-196.5-114.8-294.9-172
	c-3.7-2.2-5.3-4.5-5.1-8.9c1.3-30.9,0.9-61.9,1.2-92.9C113.8,244.6,113.9,243.5,114.1,241.2z M532.1,368.9
	c-32.8,22.8-65.6,45.6-98.4,68.3c-2.6,1.8-3.1,3.7-3.1,6.4c0.1,24.3,0,48.5,0.1,72.8c0,1.1-0.5,2.4,0.6,3.3c1.6,0.1,2.5-1,3.6-1.7
	c31.4-21.8,62.7-43.7,94.2-65.4c5.5-3.8,8-8.5,8-15.1c-0.1-22.4,0-44.7-0.1-67.1c0-1.3,0.5-2.7-0.6-4.2
	C534.9,367.1,533.4,367.9,532.1,368.9z M101.2,232.2c0.1-2.2-1.1-3.9-2.1-5.7c-14.9-24-29.8-48.1-44.7-72.2
	c-4.3-6.9-8.7-13.7-13.3-20.9c-0.5,1.1-0.7,1.4-0.7,1.7c-0.2,29.2,0.3,58.4-1.1,87.6c-0.2,3.5,1.3,6.3,3,9.1
	c10.7,17.4,21.4,34.8,32.1,52.1c8.2,13.2,16.4,26.5,24.7,39.7C100.3,292.9,99.8,262.5,101.2,232.2z"/>
<path style="fill:#FEE400;transform:scale(0.2)" :class="ValueId+'_color3'" d="M87.6,126c-0.3-7,2.7-12,8.2-15c19.4-10.7,38.9-21.2,58.5-31.6c5.2-2.7,10.5-2.2,15.9,0.3
	c28.4,13.1,56.8,26.1,85.3,39.1c6.4,2.9,12.7,6,19.2,8.8c5.5,2.3,10.1,5.6,14.3,9.8c28.6,28.4,57.3,56.6,85.9,84.9
	c22.7,22.3,45.3,44.7,68,67c11.5,11.3,23.2,22.6,34.7,33.9c9.8,9.6,9.1,20.9-1.9,28.9c-16,11.5-32.2,22.9-48.4,34.3
	c-7.4,5.3-14.8,5.3-22.5,0.3c-61.6-40.3-123.2-80.5-184.8-120.8c-23.2-15.1-46.3-30.3-69.5-45.4c-3.7-2.4-6.7-5.4-9.1-9
	c-16.9-25.1-33.9-50.1-50.8-75.2C88.4,133,87.3,129.5,87.6,126z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M170.8,308.7c3.2-0.3,6.7,0.4,9.9,2.3c11.6,6.7,23.3,13.3,34.7,20.3c10.4,6.4,14,19.6,8.5,29.7
	c-6.1,11.2-19.8,15.3-31.1,9c-11.6-6.4-23-13.1-34.3-19.9c-8.7-5.2-12.9-16.5-10.1-26C151.1,314.6,159.4,308.7,170.8,308.7z
	 M345.7,409.9c-12-7.3-24.1-14.6-36.5-21.3c-9.7-5.3-23.5-1.2-29.3,7.8c-5.9,9.2-3.6,23.9,5.8,30.1c12.8,8.3,26,16.1,39.7,22.9
	c13.9,6.9,31.5-8.3,29.9-20C355.4,421,352.2,413.8,345.7,409.9z"/>
<path style="fill:#DDA379;transform:scale(0.2)" :class="ValueId+'_color2'" d="M470.9,337c0.2,1.9-0.9,3-2.4,4.1c-16.4,11.6-32.9,23.1-49.2,34.9c-2.9,2.1-4.8,1.3-7.3-0.4
	c-34.1-22.3-68.2-44.6-102.3-66.9c-49.7-32.4-99.3-64.9-149-97.2c-4.3-2.8-7.7-6.2-10.5-10.4c-15.7-23.6-31.6-47.1-47.4-70.6
	c-3.7-5.5-3.5-6.4,2.1-9.5c17.5-9.5,35.1-18.9,52.6-28.4c2.8-1.5,5.1-1.9,8.2-0.5c34.9,16.2,69.9,32.2,104.9,48.3
	c3.3,1.5,6.2,3.6,8.8,6.1c31.2,30.9,62.4,61.7,93.6,92.5c21.3,21,42.6,42,64,63c10.3,10.1,20.7,20.2,31,30.3
	C469.3,333.6,471,334.7,470.9,337z"/>
<path style="fill:#FDDE3D;transform:scale(0.2)" :class="ValueId+'_color6'" d="M204.2,359.3c-2.5,0.4-4.4-0.5-6.4-1.7c-10.5-6.2-21.1-12.2-31.6-18.4c-6.3-3.7-7.6-7.6-4.5-13.1
	c3.2-5.6,7.4-6.6,14-2.8c11.2,6.4,22.3,12.9,33.4,19.4c4.1,2.4,5.4,5.9,3.9,10.6C211.5,357.7,208.8,359.9,204.2,359.3z M339,421.1
	c-12.1-7.2-24.3-14.3-36.6-21.2c-4.5-2.5-8.5-0.9-11.3,3.7c-2.9,4.8-2.6,9,1.9,11.7c12,7.4,24.1,14.6,36.5,21.3
	c6.4,3.5,13.1-1.3,13.3-8.6C342.8,425,341.5,422.6,339,421.1z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M265.5,205c0.5,7.5-2.7,13.1-9.4,16.2c-7.6,3.5-15.1,2.7-21.7-2.9c-7.7-6.6-15.4-13.2-22.9-20
	c-2.2-2-3.8-2.3-6.2-0.5c-4.3,3.1-8.8,6.1-13.2,9c-9.5,6.3-20.4,4.6-26.4-4.1c-6.4-9.3-4.3-20.3,5.1-27c7.8-5.6,7.8-5.6,1.1-12.3
	c-8.1-8.1-8.3-19.4-0.5-27.5c6.5-6.8,18.4-6.7,26.1,0.2c3.5,3.1,7.1,6,10.4,9.2c2.6,2.4,4.8,2.3,7.6,0.1c3.8-2.9,7.9-5.5,12-8.1
	c8.8-5.7,21.4-3.2,26.9,5.4c5.1,7.9,2.1,20.3-6.3,26c-7.4,5.1-7.4,5.1-0.6,11.1c3.9,3.4,8,6.5,11.8,10
	C263.9,193.8,265.9,199,265.5,205z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" :class="ValueId+'_color4'" d="M175.3,191.7c-0.3-2.3,1.1-3.7,2.9-4.9c4.8-3.3,9.7-6.5,14.5-9.9c5-3.5,5.3-7.8,0.8-11.9
	c-4-3.7-8.2-7.3-12.4-10.9c-3.1-2.7-3.3-5.8-0.7-8.5c2.4-2.5,5.3-2.5,8.2,0.1c5.4,5,11.2,9.7,16.6,14.7c3.6,3.3,7,3.6,11.1,0.7
	c5.9-4.2,11.9-8.1,17.8-12.3c3.2-2.2,6.1-3.2,8.8,0.7c2.9,4.2,0.7,6.6-2.7,8.8c-3.9,2.5-7.7,5.2-11.5,7.8c-7,4.8-7.3,8.3-0.8,14.1
	c7.7,6.9,15.5,13.6,23.1,20.6c3.4,3.1,3,6.2-0.5,8.9c-2.9,2.2-5.1,0.9-7.3-1.1c-9.2-8.1-18.4-16.1-27.5-24.2
	c-4.8-4.3-7.1-4.6-12.2-1.2c-6.4,4.3-12.8,8.7-19.2,13.1c-2.2,1.6-4.4,1.6-6.8,0.4C175.7,195.5,175.2,193.8,175.3,191.7z"/>
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
                                    <button :style="{background:'rgba('+getterCoffinBg1+')'}" @click="ShowElement(getterCoffinBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCoffinBg2+')'}" @click="ShowElement1(getterCoffinBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCoffinBg3+')'}" @click="ShowElement2(getterCoffinBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCoffinBg4+')'}" @click="ShowElement3(getterCoffinBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterCoffinBg5 +')'}" @click="ShowElement4(getterCoffinBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCoffinBg6+')'}" @click="ShowElement5(getterCoffinBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCoffinBg7+')'}" @click="ShowElement6(getterCoffinBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCoffinBg8+')'}" @click="ShowElement7(getterCoffinBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCoffinBg9+')'}" @click="ShowElement8(getterCoffinBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCoffinBg10+')'}" @click="ShowElement9(getterCoffinBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Coffin= [
                {top:17 ,left:48},
            {top:230 ,left:111},
            {top:217 ,left:119},
            {top:201 ,left:37},
            {top:162 ,left:38},
            {top:490 ,left:70},
            {top:211 ,left:103},
            {top:276 ,left:11},
            {top:259 ,left:114},
            {top:465 ,left:45},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Coffin[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Coffin[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Coffin'){
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
                getterCoffinBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Coffin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Coffin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Coffin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCoffinBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCoffinBg10: {
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
                            name:'Coffin',
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