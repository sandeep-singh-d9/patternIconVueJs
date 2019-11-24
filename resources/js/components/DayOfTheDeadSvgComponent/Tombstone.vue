<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M296.3,571.7c-44.9,0-89.9,0-134.8,0c-9.8,0-12.7-2.8-12.7-12.6c0-10.2,0-20.4,0-30.5
    c0-9.1,3-12.4,12-12c5,0.2,7.1-0.8,6.6-6.4c-0.6-6.3-0.2-12.7-0.1-19c0-8.4,3.2-12,11.3-11.5c6.2,0.4,7.3-1.7,7.2-7.5
    c-0.3-41.7-0.2-83.3,0-125c0-4.5-0.6-6.3-5.7-6.1c-10.1,0.5-12.8-2.6-12.8-12.9c0-6.5-0.3-13.1,0.1-19.6c0.2-3.7-1.1-4.8-4.5-4.3
    c-1.3,0.2-2.7,0.1-4,0c-6.4-0.2-9.9-3.7-10-10.1c-0.1-11.7-0.1-23.4,0-35.1c0.1-6.4,3.6-9.9,10-10c7.7-0.1,15.4-0.2,23,0
    c3,0.1,3.9-0.8,3.8-3.8c-0.2-7.1,0.1-14.2-0.1-21.3c-0.2-6,2.3-9.6,7.7-12c23.6-10.6,47-21.4,70.6-32c3.4-1.5,4.9-3.1,4.8-7.1
    c-0.3-19-0.3-38,0-57c0.1-4.5-1.3-5.4-5.4-5.2c-6.9,0.3-13.8,0.1-20.7,0.1c-7.2-0.1-10.8-3.4-10.8-10.4c-0.1-11.5-0.1-23,0-34.6
    c0.1-6.7,3.6-10.2,10.4-10.3c7.7-0.1,15.4-0.1,23,0c2.8,0.1,3.6-0.8,3.5-3.6c-0.2-7.7-0.1-15.4,0-23c0.1-6.8,3.6-10.3,10.3-10.3
    c11.5-0.1,23-0.1,34.6,0c6.8,0.1,10.3,3.5,10.4,10.3c0.1,7.5,0.2,15,0,22.5c-0.1,3.2,0.7,4.3,4.1,4.2c7.5-0.3,15-0.2,22.5-0.1
    c6.8,0.1,10.3,3.5,10.4,10.3c0.1,11.5,0.1,23,0,34.6c-0.1,7-3.6,10.4-10.8,10.5c-7.3,0.1-14.6,0.2-21.9-0.1c-3.1-0.1-4.3,0.5-4.3,4
    c0.2,19.8,0.2,39.6,0,59.3c0,3.5,1.8,4.6,4.3,5.7c23.2,10.5,46.3,21.1,69.6,31.4c6.7,3,9.8,7.1,9.3,14.6c-0.5,6.5,0,13.1-0.2,19.6
    c-0.1,3,0.8,3.9,3.8,3.8c7.5-0.2,15-0.1,22.5-0.1c7.1,0.1,10.6,3.5,10.6,10.6c0.1,10.9,0,21.9,0,32.8c0,8.7-3.2,12.2-11.7,11.7
    c-5.4-0.3-7.4,0.9-6.9,6.7c0.6,6.3,0.2,12.7,0.1,19c0,7.9-3.3,11.2-11.1,11.3c-7.4,0.1-7.3,0.1-7.3,7.6c0,41.5,0.1,83-0.1,124.4
    c0,4.7,0.6,6.7,6,6.4c9.7-0.5,12.5,2.7,12.5,12.6c0,6.5,0.3,13.1-0.1,19.6c-0.2,4,1.2,5.1,4.8,4.5c1.1-0.2,2.3-0.1,3.5,0
    c6.7,0.2,10.2,3.6,10.2,10.4c0.1,11.1,0,22.3,0,33.4c0,8.2-3.3,11.5-11.5,11.5C386.9,571.7,341.6,571.7,296.3,571.7z"/>
<path style="fill:#E61F62; transform:scale(0.2)" :class="ValueId+'_color4'" d="M383.2,341.1c-37.8,0.2-75.6,0.1-113.4,0.1c-20.3,0-40.7,0-61,0c-2.5,0-4.8-0.5-4.7,3.5
    c0.2,44.1,0.2,88.3,0.3,132.4h0c-0.1,4.4,3.4,2.2,5,2.3c39.9,0.1,79.8,0.1,119.8,0.1c18.2,0,36.5,0,54.7,0c2.5,0,4.8,0.5,4.8-3.5
    c-0.2-39.9-0.2-79.8-0.3-119.8c0.1-3.3-0.1-6.6,0.3-9.8C389.1,342,387.4,341.1,383.2,341.1z M368.2,387.8c-0.1,8,0,16.1,0,24.1
    c0,12.3,0.1,24.5-0.1,36.8c-0.1,7.8-2.6,10.1-10.5,10.4c-2.1,0.1-4.2,0-6.3,0c-27.2,0-54.4,0-81.6,0c-3.2,0-6.6-0.8-9.2,2
    c0,0,0,0-0.1,0c-0.2-0.4-0.5-0.7-1-1.2c-7.6-1.7-15.3-0.6-22.9-0.8c-10-0.2-12.2-2.2-12.3-12.2c-0.1-20.3,0-40.6,0-61
    c0-5.4-0.2-10.7,0.1-16.1c0.4-5.6,2.7-7.9,8.2-8.5c1.7-0.2,3.4-0.1,5.2-0.1c38.9,0,77.8,0,116.7,0c1.9,0,3.8,0,5.7,0.2
    c4.7,0.5,7.2,3.1,7.7,7.8c0.3,3-0.1,6.1,0.7,9.2c0.5,1,0.9,1.5,1.4,1.8C367.9,382.5,368.3,385.2,368.2,387.8z"/>
<path style="fill:#E61F62; transform:scale(0.2)" :class="ValueId+'_color4'" d="M167.1,280.3c0.2-12.8,0.1-12.8,12.8-12.8c79.7,0,159.4,0.1,239.1-0.1c5.4,0,6.6,1.5,6.5,6.6
    c-0.4,11.9-0.1,11.9-11.9,11.9c-39.2,0-78.4,0-117.5,0c-41.1,0-82.2-0.1-123.3,0.1C168,286,167,284.7,167.1,280.3z M419.4,534.7
    c-79.6,0.2-159.2,0.1-238.9,0.1c-13.4,0-13.2,0-13.5,13.3c-0.1,4.5,1.3,5.3,5.5,5.3c41.2-0.2,82.5-0.1,123.7-0.1
    c38.8,0,77.5,0,116.3,0c12.8,0,12.5,0,12.9-12.7C425.6,535.6,424.1,534.7,419.4,534.7z"/>
<path style="fill:#03A9F4; transform:scale(0.2)" :class="ValueId+'_color3'" d="M204.1,243.1c0.2-0.9,0-1.9,0-2.9c0-14,0-14,13.8-18.8c1.3-1.3,2.8-2,4.7-2.2h0c0,0,0,0,0,0
    c23.8-10.9,47.5-21.7,71.3-32.7c1.7-0.8,3.1-0.8,4.9,0c9.5,4.5,19,8.8,28.6,13.2c15.8,7.2,31.6,14.5,47.3,21.7c0.2,0,0.4,0,0.6,0.1
    c13.7,5.2,16.1,9.9,13.3,25.1c-0.3,1.6-0.7,2.5-2.4,2.5c-1.2,0-2.3,0-3.5,0c-57.6,0-115.1-0.1-172.7,0.1
    C205.1,249.1,203.3,247.8,204.1,243.1z M192.1,322.9c67.4-0.2,134.8-0.1,202.2-0.1c12.6,0,12.4,0,12.7-12.5c0.1-4.8-1.2-6.1-6-6
    c-34.8,0.2-69.5,0.1-104.3,0.1c-33,0-66.1,0-99.1,0c-12,0-11.7,0-12.1,11.9C185.4,321.5,186.9,322.9,192.1,322.9z M400.6,497.8
    c-34.8,0.2-69.5,0.1-104.3,0.1c-33.4,0-66.8,0-100.2,0c-10.4,0-10.4,0-10.4,10.7c0.1,9-1.1,7.8,7.5,7.8c67.2,0,134.4,0,201.6,0
    c12.1,0,11.8,0,12.3-12.4C407.3,498.5,405.3,497.8,400.6,497.8z"/>
<path style="fill:#FB9601; transform:scale(0.2)" :class="ValueId+'_color2'" d="M342.5,79.3c-0.2,13,0,13-12.9,13c-1.9,0-3.8-0.1-5.7-0.1c-17.4-0.2-18.7,1.2-18.5,18.5c0,0,0,0,0,0
    c0,0,0,0,0,0c0,19.3,0,38.5,0,58.8c-6.2-4.3-12-4.3-18.2,0c0-16.1,0-31.1,0-46.2c0-6.9,0-13.8-0.1-20.7c-0.1-6.8-3.5-10.2-10.3-10.3
    c-7.1-0.1-14.2-0.2-21.3,0c-3.8,0.1-5.4-0.7-5.4-5c0-13.5-0.2-13.5,13.4-13.5c4.6,0,9.2,0.1,13.8,0c6.1-0.2,9.6-3.6,9.7-9.7
    c0.1-7.3,0.2-14.6,0-21.9c-0.1-3.8,0.7-5.4,5-5.4c13.5,0,13.5-0.2,13.5,13.4c0,4.6-0.1,9.2,0,13.8c0.2,6.1,3.6,9.6,9.7,9.7
    c7.1,0.2,14.2,0.1,21.3,0.2c0,0,0,0,0,0c0,0,0,0,0,0C340.8,73.2,342.6,74.5,342.5,79.3z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M370.2,380.3c-0.1,22.8-0.1,45.6-0.2,68.4c0,9.4-3,12.3-12.4,12.3c-32.4,0.1-64.7,0.1-97.1,0.2
    c-9-0.1-18-0.1-27-0.2c-7.5-0.1-11-3.4-11-10.8c0-26.6-0.1-53.3,0-79.9c0-7.1,3.5-10.6,10.6-10.6c42,0,84,0,126,0
    c7.5,0,10.8,3.4,10.9,10.9C370.1,373.8,370.2,377.1,370.2,380.3z"/>
<path style="fill:#FFFFFF; transform:scale(0.2)" :class="ValueId+'_color5'" d="M351.7,381.5c0.1-2.8-0.8-3.5-3.5-3.5c-34.6,0.1-69.1,0.1-103.7,0c-2.8,0-3.6,0.8-3.5,3.5
    c0.1,19.2,0.1,38.4,0,57.6c0,2.8,0.8,3.5,3.5,3.5c18.8-0.2,37.6-0.2,56.4-0.2c15.7,0.1,31.5,0.1,47.2,0.2c2.8,0,3.6-0.8,3.6-3.5
    c-0.2-12.3-0.2-24.6-0.2-36.8C351.5,395.4,351.4,388.4,351.7,381.5z"/>
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
                                    <button :style="{background:'rgba('+getterTombstoneBg1+')'}" @click="ShowElement(getterTombstoneBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTombstoneBg2+')'}" @click="ShowElement1(getterTombstoneBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTombstoneBg3+')'}" @click="ShowElement2(getterTombstoneBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTombstoneBg4+')'}" @click="ShowElement3(getterTombstoneBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterTombstoneBg5 +')'}" @click="ShowElement4(getterTombstoneBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                     <!--<button :style="{backgroundColor:'rgba('+getterTombstoneBg6+')'}" @click="ShowElement5(getterTombstoneBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTombstoneBg7+')'}" @click="ShowElement6(getterTombstoneBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTombstoneBg8+')'}" @click="ShowElement7(getterTombstoneBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTombstoneBg9+')'}" @click="ShowElement8(getterTombstoneBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTombstoneBg10+')'}" @click="ShowElement9(getterTombstoneBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Tombstone= [
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
            var randomNumber = Tombstone[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Tombstone[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Tombstone'){
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
                getterTombstoneBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tombstone') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tombstone') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tombstone') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTombstoneBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTombstoneBg10: {
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
                            name:'Tombstone',
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