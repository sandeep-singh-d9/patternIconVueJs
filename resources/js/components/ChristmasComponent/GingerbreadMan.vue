<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#3E2723; transform:scale(0.2)" :class="ValueId+'_color1'"
 d="M170.6,595.2c-10.2-2.8-20.2-5.8-28.9-12.2c-26.1-18.9-36-53.8-23.8-84.7
    c22.5-57.1,45-114.3,67.5-171.4c1-2.5,2.1-5,2.6-7.6c1.8-9.9-2.2-17.5-11.7-22.2c-24.7-12.3-49.4-24.6-73.9-37
    c-41.2-20.8-51.4-73.3-21.1-108c20.6-23.6,58.5-30.3,86.2-15.5c8.1,4.3,16.3,8.4,24.7,12.7c-12.3-60.6,3.3-102.8,48.5-131.6
    c36.5-23.4,86.4-21.3,122.5,5.3c36.4,26.9,58,73.5,40.8,127.5c8.3-4.2,16.4-7.4,23.4-12.1c11.3-7.6,23.8-9.8,36.8-9.5
    c30.9,0.8,58.1,22,65.7,51c8.3,31.8-7.1,66.1-36.6,81.2c-23.7,12-47.6,23.8-71.3,35.8c-13.2,6.6-16.6,15.7-11.2,29.5
    c22.8,57.8,45.9,115.5,68.5,173.4c15.9,40.8-8.1,87.4-51.9,94.5c-0.5,0.1-0.9,0.6-1.4,0.9c-7.3,0-14.7,0-22,0
    c-22.3-2.4-38.1-14.4-49.7-32.9c-1.9-3-3.2-6.1-4.5-9.4c-10.7-27.4-21.3-54.8-32.5-82c-5-12.1-15.6-17-26.6-12.8
    c-6.4,2.4-9.3,7.7-11.7,13.6c-8.3,20.6-16.4,41.3-24.5,62c-2.7,6.8-4.9,14-8.2,20.4c-11.3,22.1-27.3,38.3-53.7,40.4
    c-0.4,0-0.7,0.3-1,0.5C184.6,595.2,177.6,595.2,170.6,595.2z"/>
<path style="fill:#BE8430; transform:scale(0.2)" :class="ValueId+'_color2'" d="M431.6,514c-22.4,8.9-44.9,17.6-67.2,26.7c-4.4,1.8-6,0.5-7.6-3.6c-9.1-23.3-18.5-46.5-27.5-69.9
    c-7.9-20.5-25.5-26.5-41.6-21.4c-10.2,3.3-16.4,11-20.2,20.9c-9,23-18.2,45.9-27.2,68.8c-2.8,7.1-2.8,7.1-9.7,4.3
    c-31.8-12.5-63.5-25-95.4-37.3c-4.5-1.7-5.2-3.5-3.5-8c21.8-54.6,43.5-109.3,65.2-164c7.4-18.6,0.6-36.7-17.5-45.8
    c-20.7-10.4-41.4-20.8-62.2-31c-3.6-1.8-4.7-3.1-2.5-7.2c16-31.1,31.7-62.3,47.3-93.6c1.7-3.5,2.9-4.3,6.7-2.2
    c10.3,5.7,20.9,10.8,31.4,16.1c2.7,1.4,5.2,2.3,7.9-0.3c2.8-2.6,2-5.3,0.7-7.9c-6.8-13.3-10.5-27.5-11-42.2
    c-0.6-19.6,3.9-38.2,14.1-55.2c16.9-27.9,41.9-44.1,73.9-48.1c29-3.6,55.5,4,77.9,23.6c18.8,16.4,30.4,37,33.9,61.5
    c2.7,19.3,0.9,38.5-7.9,56.5c-0.5,1-1,2.1-1.6,3.1c-1.7,2.8-1.9,5.5,0.4,7.9c2.6,2.8,5.5,2,8.4,0.4c10.5-5.4,20.9-10.8,31.4-16.2
    c2.1-1.1,3.9-2.3,5.5,1c10.9,22,21.9,43.9,32.9,65.8c0.7,5.5-3.7,8.3-6.8,11.3c-6.5,6.3-14.1,11.4-22.3,15.4
    c-20.1,9.9-40.2,20-60.2,30c-15.7,7.9-20.5,20-13.9,36.5c15.4,38.8,30.7,77.7,46.1,116.5c6.1,15.3,12,30.6,18.2,45.8
    c3.8,9.4,5.7,19.3,6.6,29.3C434.6,506.1,434.4,510.3,431.6,514z"/>
<path style="fill:#5F360B; transform:scale(0.2)" :class="ValueId+'_color4'" d="M431.6,514c3.8-19-3.4-35.9-10.2-53c-20.2-50.7-40.2-101.4-60.2-152.1c-5.9-15.1-0.5-28.5,13.9-35.8
    c21.7-10.9,43.6-21.6,65.2-32.7c10.7-5.5,20.3-12.5,26.3-23.4c5.4,10.5,10.7,21,16.2,31.4c2.1,4.1-1.2,4.6-3.4,5.7
    c-21.1,10.6-42.2,21-63.2,31.6c-13.2,6.7-20.4,19-19.2,32.8c0.7,8,4.6,15.1,7.5,22.4c20.3,51.6,40.6,103.2,61.1,154.8
    c1.6,4.1-0.3,5.3-3.3,6.4C452.1,506.1,441.8,510,431.6,514z"/>
<path style="fill:#F4F4F4; transform:scale(0.2)" :class="ValueId+'_color5'" d="M181.2,584.7c-37.2-0.1-64.2-33-57.1-69.6c0.7-3.8,1.5-5.2,5.8-3.5c33.1,13.2,66.3,26.3,99.5,39.2
    c3.9,1.5,4,2.7,2,6C220.8,574.4,202.3,584.7,181.2,584.7z M98.5,243.8c3.3,2.3,4.7,2.3,6.7-1.6c15.8-31.7,31.8-63.4,47.9-95
    c1.7-3.4,1.5-4.7-2.5-5.8c-37.8-11-76,17.6-75.9,57.1C74.7,216.4,83.9,233.6,98.5,243.8z M471.3,146.6c8.7,13,12,26.9,8.2,42.4
    c-1.5,6-3.9,11.7-5.8,17.6c6.5,13.5,13,27,19.5,40.5c21.1-11.6,32.5-36.8,27.6-60.4c-5.4-25.7-26.8-45.2-52-47.2
    C467.3,142.7,469.9,144.5,471.3,146.6z M408.3,559.5c-6.7,6.4-14.2,11.7-20.7,18.3c0.3,0.3,0.5,0.6,0.8,0.8
    c21.6,10.1,42.4,8.5,61.7-5.4c18.8-13.6,25.5-32.8,23-55.4c-1-8.8-1.4-8.7-9.9-5.4c-3.6,1.4-7.3,2.6-10.8,4.2
    c-7.7,3.5-16.1,5.3-23.2,10.1C424.9,539.3,418,550.1,408.3,559.5z M365.8,551.2c-2.3,0.9-3,1.8-1.5,4.2c5.8,9.6,13,17.6,23.4,22.4
    c15.2-9.7,28.2-21.5,37.1-37.4c2.3-4.2,5.3-8.4,4.5-13.7C408.1,534.9,387,543.1,365.8,551.2z M445.3,141.5c-2.7,0.8-3.9,1.5-2.3,4.7
    c10.3,20.1,20.5,40.2,30.7,60.3c0.5-0.2,1.4-0.3,1.5-0.7c7.8-17.1,10.8-34.3,2.1-52.2c-2.5-5.1-6.7-8.9-8.5-14.3
    C460.8,138.6,453,139.3,445.3,141.5z"/>
<path style="fill:#3E2723; transform:scale(0.2)" :class="ValueId+'_color1'"
 d="M296.7,184.7c-21.6-0.3-41-8.6-57.5-23.9c-9-8.4-9.5-21.6-1.4-30.1c8.1-8.6,20.9-8.8,30.1-0.4
    c19.3,17.5,41.4,17.4,60.8-0.1c9.4-8.5,23.1-7.9,30.9,1.5c7.6,9.2,5.8,22.6-3.7,30.4c-13.9,11.3-29.1,19.4-47.1,22
    C305.1,184.6,301.5,184.3,296.7,184.7z"/>
<path style="fill:#3E2723; transform:scale(0.2)" :class="ValueId+'_color1'"
 d="M250.1,112.6c-13.6-0.1-26.2-12.9-26.1-26.6c0.1-13.8,13.4-26.9,27-26.6
    c13.5,0.3,26.5,13.6,26.3,26.8C277,100,264,112.7,250.1,112.6z"/>
<path style="fill:#3E2723; transform:scale(0.2)" :class="ValueId+'_color1'"
 d="M372.5,86.5c-0.1,13.7-12.9,26.2-26.6,26.1c-13.8-0.1-26.9-13.3-26.7-26.9
    c0.3-13.4,13.5-26.5,26.8-26.3C359.8,59.5,372.6,72.6,372.5,86.5z"/>
<path style="fill:#3E2723; transform:scale(0.2)" :class="ValueId+'_color1'"
 d="M298.5,211.2c13.8,0.1,26.6,13.4,26.4,27.1c-0.3,13.4-13.7,26.4-26.9,26.1
    c-13.5-0.3-26.4-13.3-26.4-26.7C271.7,224,284.7,211.1,298.5,211.2z"/>
<path style="fill:#3E2723; transform:scale(0.2)" :class="ValueId+'_color1'"
 d="M324.9,322.5c0.1,13.6-13.2,26.9-26.8,26.8c-13.4-0.1-26.4-13.1-26.5-26.5
    c-0.1-13.6,13.1-26.9,26.8-26.8C311.8,296.1,324.8,309.1,324.9,322.5z"/>
<path style="fill:#5F360B; transform:scale(0.2)"  :class="ValueId+'_color4'" d="M297.1,174.2c-18.6-0.4-35.3-6.8-49.3-20c-6.6-6.2-7.2-11.1-2.3-16.3c5.2-5.5,9.6-5.2,16.4,0.9
    c18.8,17,45.1,19.1,66.2,5.1c2.7-1.8,5.1-4.1,7.6-6.3c5.9-5,10.7-4.8,15.6,0.6c4.3,4.8,3.9,9.9-1.4,14.7
    C335.2,166.5,317.9,174,297.1,174.2z"/>
<path style="fill:#FED44F; transform:scale(0.2)" :class="ValueId+'_color3'" d="M250.6,102.1c-9.4,0-16.1-6.7-16-16.1c0.1-9.4,6.8-16,16.2-15.9c9.2,0.1,15.6,6.6,15.7,15.8
    C266.6,95.3,260,102,250.6,102.1z"/>
<path style="fill:#FED44F; transform:scale(0.2)" :class="ValueId+'_color3'" d="M362,86.1c0,9.4-6.7,16-16.1,15.9c-9.4-0.1-16-6.9-15.8-16.3c0.2-9.2,6.6-15.6,15.8-15.7
    C355.2,70,361.9,76.7,362,86.1z"/>
<path style="fill:#D95A33; transform:scale(0.2)" :class="ValueId+'_color6'" d="M314.3,238.1c-0.2,9.1-7.5,16.1-16.5,15.7c-9-0.4-15.6-7.2-15.6-16.1c0-9.2,7.1-16.1,16.2-16
    C307.6,221.9,314.5,229,314.3,238.1z M298,306.6c-8.9,0.2-15.7,7-15.8,15.9c-0.1,9.1,6.9,16.2,16,16.2c9.1,0,16.2-7,16.1-16.2
    C314.3,313.4,307.1,306.4,298,306.6z"/>
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
                                    <button :style="{background:'rgba('+getterGingerbreadManBg1+')'}" @click="ShowElement(getterGingerbreadManBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg2+')'}" @click="ShowElement1(getterGingerbreadManBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg3+')'}" @click="ShowElement2(getterGingerbreadManBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg4+')'}" @click="ShowElement3(getterGingerbreadManBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg5 +')'}" @click="ShowElement4(getterGingerbreadManBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg6+')'}" @click="ShowElement5(getterGingerbreadManBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterGingerbreadManBg7+')'}" @click="ShowElement6(getterGingerbreadManBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg8+')'}" @click="ShowElement7(getterGingerbreadManBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg9+')'}" @click="ShowElement8(getterGingerbreadManBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGingerbreadManBg10+')'}" @click="ShowElement9(getterGingerbreadManBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var GingerbreadMan= [
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
            var randomNumber = GingerbreadMan[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  GingerbreadMan[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'GingerbreadMan'){
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
                getterGingerbreadManBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GingerbreadMan') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GingerbreadMan') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GingerbreadMan') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGingerbreadManBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGingerbreadManBg10: {
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
                            name:'GingerbreadMan',
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