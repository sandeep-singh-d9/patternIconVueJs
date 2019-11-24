<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.8);">
                  <path style="fill:#785743; transform:scale(0.2)" :class="ValueId+'_color1'" d="M166.7,209.1c-2.5,7.7-5.2,15.2-10.2,21.8c-2.8,3.7-0.6,6.7,1.3,9.7c1.9,3,5.9,6.3,1.8,9.6
    c-3.7,3-7.4-0.2-10.3-2.8c-4.4-4-5.7-9.3-4.5-14.8c0.9-4.3,2.7-8.6,4.5-12.7c1.7-3.9,2-7.3-0.2-11.2c-6.3-11.3-8-23.2-4.3-35.7
    c0.7-2.3,0.2-3.9-1.6-5.5c-3.2-2.9-6.3-5.9-9.4-8.9c-7.6-6.6-13.3-15-21.3-21.4c-17.5-14.1-36.1-17.6-57-8.8
    c-11.4,4.8-23.4,7.6-35.5,10.3c-1.8,0.4-3.7,1.1-5.3-0.4c-1.2-7,2-11.8,7.8-15.4c9.3-5.7,19.5-9.6,29.4-13.9
    c5.6-2.4,10.7-5.2,14.7-10c3.4-4,7.9-5.7,12.9-5.8c3-0.1,5.2-1,7.3-3.2c8.5-8.6,19.7-10.7,31-5.9c10.2,4.3,19.2,10.9,28.5,16.8
    c11,6.8,23.1,10.4,35.7,12.7c7,0.1,13.7,2.8,20.7,3.3c6.6,0.8,13.1,1.5,19.7,2.1c7.1,1,14.2,2,21.3,3.2c8,1.5,15.9,3.5,23.7,5.6
    c7.4,2.4,14.8,4.7,21.9,7.8c7.1,3,13.9,6.7,21,9.6c7.2,4.2,14.4,8.3,21.6,12.4c5.7,4.7,13.2,7,17.8,13.2
    c17.3,15.5,38.8,22.1,60.5,28c14.5,3.9,28.8,9.8,44.3,8.9c21.7-1.3,43.5-1.7,63.8-10.7c10.2-4.5,19.9-10.4,31.2-12.2
    c2.8-0.5,5.6-0.7,8.4-0.1c1.4,0.3,3.2,0.7,3.6,2.3c0.4,1.8-1.3,2.6-2.5,3.3c-8.5,5.2-16.9,10.4-25.5,15.4
    c-15.2,8.8-30.4,17.7-46.6,24.7c-13.4,6-27.7,7.7-42.1,8.4c-5.6,0.2-11.1,1.2-16.8,1.2c-33.6,0.1-67-2.6-100.2-7.4
    c-9.7-1.4-17.8,0.2-24.5,7.6c-3.4,3.8-7.9,6.2-11.9,9.4c-1.5,25.7-12.4,48.3-23.7,70.7c-0.9,1.7-2,2.5-3.9,2.5
    c-10.1,0-20.2,0-30.4,0c-1,0-2.6,0.4-2.7-1.1c-0.1-0.9,0.6-2.1,1.3-2.9c3.6-4.4,8.6-6.7,13.7-8.5c8.7-3.1,12.8-9.6,13.1-18.4
    c0.4-14.2,0.4-28.5-1.6-42.6c-0.1-0.7-0.6-1.3-0.9-2c-1.5-0.6-2.4-1.8-2.8-3.3c-4.3-14.2-8.7-28.4-2.3-43.2c1.3-2.9,1.1-4.8-2.9-4
    c-23.2,4.6-44.9-1.5-66.2-9.9c-9.4-3.7-9.1-3.7-11.2,6.1C170,198.5,169.9,204.2,166.7,209.1z"/>
<path style="fill:#8F6A5B; transform:scale(0.2)" :class="ValueId+'_color3'" d="M293.6,249.6c4.9-2.5,10.2-1.1,15.1-0.9c6.5,0.3,13.2-0.1,19.6,2c8.2,22.5,3.7,45.9,4.9,68.9
    c0.1,2.8-1.1,3.5-3.6,3.5c-9.1-0.1-18.3,0-28.6,0c2.6-5.1,6.1-8.5,10.4-10.9c3-1.7,3.6-3.9,4-7.2c2.2-17.1-2.1-31.8-14.3-44.3
    C298.1,257.6,296.1,253.3,293.6,249.6z M162.9,228.3c-0.9,7.9,2.6,14.2,9.7,17.2c2.3,1,4.3,1.2,6.2-0.7c2-2.2,0.7-4.2-0.5-6.1
    c-0.6-1-1.3-1.8-2-2.7c-2.9-4-4-7.8-0.2-12.1c1.9-2.2,2.9-5.2,4.3-7.8c-3.1-3.2-6.8-5-11.2-5.6C167.2,216.4,163.6,221.8,162.9,228.3
    z"/>
<path style="fill:#DDAD80; transform:scale(0.2)" :class="ValueId+'_color2'" d="M166.7,209.1c1.5-8.4,2.8-16.9,4.5-25.3c0.6-3.1,3.2-1.6,5-0.9c9.4,3.6,18.8,7.2,28.6,9.9
    c15,4.2,30,5.5,45.4,2.1c1.8-0.4,6.3-2,4.1,2.5c-8.4,17.2-3.3,33.5,2.3,49.9c-3.4,1.5-6.6-0.1-9.8-1c-12.5-3.5-24.1-8.9-35.3-15.5
    c-10-5.8-20.3-11-31.2-15c-4-1.3-7.7-3.3-11.2-5.6C168.5,209.4,167.7,209.1,166.7,209.1z M16,145.9c2.1,4.1,5.4,8.2,9.7,8.6
    c2.9,0.2,2.7-5.1,3.3-7.9c1.4-6.2,4.3-1.6,5.8-0.8c7,4.1,6.8,3.3,8.6-3.1c0.8-2.7,1.6-3.9,4.3-1.4c5.2,4.6,5.5,4.6,8.7-2.1
    c1.5-3.2,3.2-4.1,5.9-1.8c4.3,3.7,6.9,2.7,8.8-2.4c0.6-1.6,2.2-4.4,3.9-2.5c2.5,2.9,4.5,7,4,10.7c-0.3,2.6-3.9,4.3-7.2,3.9
    c-2.8-0.3-4,0.8-4.4,3.7c-0.4,2.8-1.5,5-5.2,3.5c-2.7-1.1-3.5,0.7-3.7,3.2c-0.2,2.9-1.2,5.2-5,3.6c-2.6-1.1-3.6,0.3-3.9,3
    c-0.3,3.2-0.8,6.5-5.6,4.7c-2.6-0.9-3.8,1-4.1,3.3c-0.3,2.2-0.6,4.4-1.7,6.4c-1.3,2.6-1.8,5.5,0.6,7.8c2.6,2.6,5.7,3.3,9.2,1.7
    c5.3-2.4,10.5-5,15.1-8.5c12.1-9.2,25.1-17,38.6-23.8c10.2-5.1,20.3-6.5,29.8,1.9c0.7,0.6,1.7,0.8,2.5,1.1
    c-5.5-8.6-12.4-15.8-20.2-22.3c-17.5-14.6-36.6-18.5-57.9-9.6c-13.2,5.5-27,8.6-40.9,11.5C14.3,140.9,14.8,143.6,16,145.9z
     M293.6,249.6c9.7,0.9,19.6,0.6,29.3,1.7c1.8,0.2,3.7,0.3,5.4-0.6c1.3-1.5,3.1-1,4.8-1.1c26.2-0.2,52.5,0.3,78.7-1.1
    c13.1-0.7,26.1-1.9,38.9-4.8c12.7-2.9,25.5-5.7,36.6-13.3c-25.1,6.6-50.7,8.5-76.6,7.8c-11.7-0.3-23.5-1.5-35.2-2.1
    c-15.8-0.8-31.6-2.8-47.2-5c-12.9-1.8-30.3,6.3-36.6,18c-0.1,0.1,0,0.4,0.1,0.5C292.4,249.7,293,249.6,293.6,249.6z M269.7,124.2
    c4.4-18.2,7.6-36.6,11.8-54.8c-9-4.2-18.4-6.2-28.4-5.2c-1.7,1.4-2.3,3.3-2.6,5.4c-2.2,16.1-4.8,32.2-7.3,48.2
    c-0.3,2.1-0.5,4.1,1,5.9c7.8,1.8,15.6,3.7,23.4,5.5C269.4,128,269.3,125.9,269.7,124.2z M310.4,146.1c2.1-0.9,2.7-3,3.6-4.8
    c5.3-12,11-23.7,16.8-35.5c-6.5-9.4-14.9-16.6-24.5-22.7c-6.2,17.8-11.9,35.8-17,54C296.4,139.7,302.8,144.3,310.4,146.1z
     M201.5,97.7c-0.5,6.8-1.7,13.6,0.8,20.3c6.7,1.8,13.6,2.4,20.5,2.3c0.1-2.2,0-4.5,0.3-6.7c1.6-13.4,3.6-26.8,4.5-40.3
    C217.6,80,209.6,88.9,201.5,97.7z M350,170.9c-1.1-13.3-3.2-26.5-6.7-39.4c0.1,2.5-0.8,4.7-1.9,6.9c-3.3,6.7-6.4,13.4-9.6,20.1
    C337.2,163.6,344,166.7,350,170.9z"/>
<path style="fill:#EE4411; transform:scale(0.2)" :class="ValueId+'_color6'" d="M267.5,129.1c3.9-19.2,7.8-38.5,11.7-57.7c0.3-1.3,1.2-1.8,2.3-2.1c8.5,4.1,17.4,7.4,24.7,13.7
    c0.9,4.7-1.7,8.7-3,12.9c-3.5,12-7.4,23.9-11.2,35.8c-0.6,1.9-1.1,4-2.8,5.4C282,134.4,274.8,131.7,267.5,129.1z M227.6,73.2
    c-1.1,1.1-1.6,2.5-1.8,4c-1.6,12.4-2.9,24.8-4.4,37.2c-0.2,2.1-0.1,4.1,1.4,5.8c7,1.6,14.2,2.6,21.4,3.3c3-19.8,6-39.7,9-59.5
    C244,65.4,235.4,68.2,227.6,73.2z M331.8,158.5c5.6-6.9,9-14.9,11.8-23.2c0.4-1.2,0.4-2.6-0.3-3.8c-2.3-9.5-7.4-17.6-12.6-25.7
    c-1.7-0.3-2.3,1.1-2.8,2.2c-5.9,12.7-11.7,25.4-17.5,38.2C317,151.1,324.3,155,331.8,158.5z M182.3,113.6c6.3,3,13.1,4.1,20,4.4
    c-0.3-6.8,1.3-13.6-0.8-20.3C195.2,103.2,189.1,108.8,182.3,113.6z"/>
<path style="fill:#FBF8F7; transform:scale(0.2)" :class="ValueId+'_color4'" d="M90.6,105c-0.1,4.8-2.3,8-6.9,8.2c-4.4,0.2-6.8-3.1-6.8-7.2c0-3.9,2.1-7.1,6.6-7.4
    C88,98.3,90.2,100.9,90.6,105z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color5'" d="M87.7,105.3c0,3.6-1.8,6-5.5,6.2c-3.4,0.1-5.3-2.4-5.3-5.4c0-3,1.6-5.4,5.2-5.6
    C85.7,100.3,87.3,102.2,87.7,105.3z"/>
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
                                    <button :style="{background:'rgba('+getterSpinosaurusBg1+')'}" @click="ShowElement(getterSpinosaurusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg2+')'}" @click="ShowElement1(getterSpinosaurusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg3+')'}" @click="ShowElement2(getterSpinosaurusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg4+')'}" @click="ShowElement3(getterSpinosaurusBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                     <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg5 +')'}" @click="ShowElement4(getterSpinosaurusBg5 )" :class="this.ValueId+'_color5btn'"></button> 

                                     <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg6+')'}" @click="ShowElement5(getterSpinosaurusBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterSpinosaurusBg7+')'}" @click="ShowElement6(getterSpinosaurusBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg8+')'}" @click="ShowElement7(getterSpinosaurusBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg9+')'}" @click="ShowElement8(getterSpinosaurusBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSpinosaurusBg10+')'}" @click="ShowElement9(getterSpinosaurusBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Spinosaurus= [
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
            var randomNumber = Spinosaurus[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Spinosaurus[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Spinosaurus'){
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
                getterSpinosaurusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Spinosaurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Spinosaurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Spinosaurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSpinosaurusBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpinosaurusBg10: {
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
                            name:'Spinosaurus',
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