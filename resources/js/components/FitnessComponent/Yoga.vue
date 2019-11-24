<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#006699; transform:scale(0.2)" :class="ValueId+'_color1'" d="M93.8,467.9c-5.4,0-10.3,0.1-15.1,0c-9.9-0.2-17.8-7-19.8-16.7c-1.8-9,3.3-19.1,12.4-22.2
    c31.9-10.7,52.5-34,69.6-61.3c6.4-10.2,11.5-21,16-32.1c0.9-2.1,1.3-3.6-1-5.2c-2-1.4-3-3.8-2.9-6.4c0.5-19.3-1.4-38.6,1.1-57.8
    c4.3-33.3,33.9-62.8,67.2-67.1c4.2-0.5,8.4-1,13.2-1.6c-9-7.6-16.5-15.7-22.4-25.3c-7.8-12.7-12.2-26.4-13.6-41.2
    c-0.3-2.6-0.4-4.6-3.9-5.5c-4-1-5.7-4.6-5.6-8.8c0.7-49.6,35.6-90,83.1-97.3c51.1-7.8,96.4,21.9,110.6,71.2
    c3.4,11.6,3.8,23.6,4.1,35.6c0.1,4.6-2.3,8.1-7,8.8c-2.7,0.4-3.2,1.9-3.7,4c-6.9,28.1-12.7,37.8-34.8,58.7
    c6.9,0.4,13.3,1.1,19.5,2.6c36.1,8.7,61.9,41.4,62,78.5c0,14.2-0.1,28.5,0.1,42.7c0,4.9-1.1,9-6.1,10.8c-3.5,1.3-1.3,3.2-0.7,4.9
    c12,31.6,32.1,56.7,59.3,76.5c8.6,6.3,17.4,12,27.9,15c9.9,2.8,15.5,13,13.6,22.4c-2,10.2-10.2,16.8-20.8,16.9c-4.1,0-8.2,0-12.4,0
    c3.6,16.9,3.5,33.8,0.9,50.4c-3.4,22.1-23.6,39.3-46.1,39.4c-58.8,0.3-117.7,0.1-176.5,0.1c-4.1,0-7.9-1.2-9-5.2
    c-1.1-4-3.6-3.8-6.6-3.8c-10.1,0.1-20.2-0.1-30.4,0.1c-7.1,0.1-13.8-1.4-19.8-5.2c-2.4-1.5-4.3-1.4-6.8-0.6
    c-11.7,4-23.6,7.3-35.1,11.8c-15.8,6.1-29.3,1.2-42.1-7.7c-22.5-15.7-27.9-52.3-20.6-73.4C92.5,472.2,93,470.4,93.8,467.9z"/>
<path style="fill:#FFFFFF; transform:scale(0.2)" :class="ValueId+'_color4'" d="M287.4,413.9c-22.1,0-44.2-0.1-66.3,0.1c-4.2,0-5.2-1.1-5.2-5.2c0.2-44.4,0-88.8,0.2-133.2
    c0-4.7-1.2-5.9-5.8-5.7C198,270.2,198,270,198,282.5c0,9.4-0.1,18.7,0.1,28.1c0.1,3.3-0.5,4.6-4.2,4.5c-6.5-0.3-13.1-0.1-19.7-0.1
    c-1.4,0-3.3,0.5-3.2-2c0.8-16.6-2.1-33.4,2.1-49.8c7.7-30.3,37.2-50.5,68.3-47.3c3.5,0.4,3,2.8,3.6,4.6
    c6.3,19.2,23.7,31.7,43.8,31.5c18.6-0.2,36-12.5,41.5-30.5c1.6-5.4,4.3-5.6,8.7-5.5c32.1,0.1,57.3,19.2,64.3,48.9
    c2.8,12,1.3,24.3,1.5,36.4c0.1,4.4,2,10.2-0.8,12.9c-2.8,2.7-8.5,0.7-13,0.8C378,315,378,315,378,301.6c0-9.2-0.1-18.4,0.1-27.5
    c0.1-3.1-0.7-4.1-4-4.1c-14.1-0.2-14.1-0.3-14.1,13.6c0,41.8-0.1,83.6,0.1,125.3c0,4.2-1,5.3-5.2,5.2
    C332.4,413.8,309.9,413.9,287.4,413.9z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M282.5,32.5c51,0.4,87.4,33.3,94.5,74.3c0.2,1.3,1.8,2.9,0.1,4c-1.9,1.1-3-0.8-4.3-1.8c-18.8-14.2-37.7-28.3-56.5-42.7
    c-4.4-3.3-8.3-4.1-13.4-2C269.9,78.3,237,92,204.1,105.6c-1.4,0.6-3.1,2.6-4.4,0.7c-0.8-1.1-0.8-3.3-0.4-4.9
    c6.3-22.7,19-40.8,38.5-53.9C253.1,37.3,270.2,32.6,282.5,32.5z"/>
<path style="fill:#FECC93; transform:scale(0.2)" :class="ValueId+'_color3'" d="M288.2,204.3c-36,0-68.2-26-77.3-62.6c-1.7-6.7-2.8-13.4-2.8-20.3c0-2.8,0.6-4.5,3.4-5.7
    c30.6-12.7,61.2-25.6,91.7-38.5c2.4-1,4.1-0.7,6.2,0.9c18.5,14.1,37,28.1,55.6,42.1c2.1,1.6,2.8,3.2,2.6,5.8
    C363.8,172.1,328.1,204.3,288.2,204.3z M493.8,444.3c-4.8-1.9-10-3-14.6-5.6c-4.4-3.2-8.7-6.5-13.1-9.6
    c-30.6-21.7-53-49.8-66.7-84.8c-1.5-3.7-2-9-4.7-10.8c-2.9-1.9-8-0.5-12.1-0.5c-0.4,0-0.8,0-1.1,0c-2.6-0.4-3.6,0.7-3.5,3.4
    c0.2,10.5,0.2,21,0.2,31.5c-1,4.9,0.8,8.8,3.8,12.8c13.3,17.9,26.1,36.1,46,47.7c20.3,11.8,41.3,21,65.2,21.5c2.1,0,5.3,1.2,5.8-1.7
    C499.5,444.8,495.8,445.1,493.8,444.3z M197.9,366.7c0.1-6.4,0.2-12.7,0.2-19.1c0-4.7,1.6-10.8-0.8-13.6c-2.8-3.2-9.1-0.6-13.9-1.1
    c-4.4-0.5-6.5,1.1-8.1,5.4c-9.5,24.8-22.5,47.6-40,67.8c-11.1,12.9-24.8,22.6-38.5,32.4c-4.3,2.8-9.4,3.6-14,5.6
    c-2.2,0.9-6.3,0.6-5.6,4c0.7,3.4,4.5,1.5,6.8,1.6c3,0.2,6,0.2,9-0.3c28.1-4.9,52.9-16.7,74.3-35.7c10.6-9.4,17.4-22,26.5-32.6
    C197.4,376.8,198.8,372.2,197.9,366.7C197.9,366.7,197.9,366.7,197.9,366.7z M323.1,218.7c0.5-1.4,1.3-3.5,0.7-4.4
    c-1.1-1.8-3.3-0.7-5-0.2c-20.5,5.6-41.1,5.6-61.6,0c-1.7-0.5-4-1.6-5,0.2c-0.6,1.2,0.3,3.5,0.9,5.1c5.2,14.2,19.6,23.9,35.2,23.8
    C303.7,243.2,318.4,232.8,323.1,218.7z"/>
<path style="fill:#65CBFF; transform:scale(0.2)" :class="ValueId+'_color5'" d="M112.4,518.6c-8.2-15.8-8.4-41.5,5.8-53.6c3.9-3.4,8.4-5.6,13.2-7.2c24.6-8.3,49.3-16.5,73.9-24.7
    c2.5-0.8,5-1.2,7.7-1.2c50,0,100,0,150,0c3.1,0,5.9,0.5,8.8,1.5c24.5,8.2,48.9,16.3,73.4,24.5c3,1,5.9,2.3,8.8,3.6
    c9.3,4.2,14.2,11.2,14,21.5c-0.1,9.4-0.1,18.7-0.1,28.1c0,3.1-0.9,5.9-2.3,8.6c-7.3,9.8-17.8,12.7-29.1,12.9
    c-16.8,0.3-33.7,0.1-50.5,0.1c-35.6,0-71.1,0-106.7,0c-3.1,0-6.4,0.6-9.1-1.8c0-7.9,0.2-15.7-0.2-23.6c-0.2-3.8,1.7-5,4.8-5.4
    c14-2,28-3.9,42-5.9c19.5-2.8,39.1-5.5,58.6-8.3c0.6-0.1,1.1-0.4,1.6-0.4c3.7-0.4,9.2,0.5,10.4-2.4c1.7-4.4-0.6-9.8-1.5-14.7
    c-0.4-2.1-1.6-2-3.3-1.7c-26.7,3.9-53.4,7.8-80.1,11.7c-13.8,2-27.7,4-41.5,5.8c-3.6,0.5-6.8,1.7-7.9,5.2c-1.1,3.4-3.1,3.9-6.3,3.9
    c-13.7-0.1-27.3-0.1-41-0.1c-15.7,0-25.1,8.9-25.9,24.7c-1.5,1.8-3.7,2.4-5.9,3.1c-6,2-12.2,3.6-18,6.1
    C138.9,536,124.8,531.1,112.4,518.6z M274.3,539.9c54.6,0,109.2,0.1,163.8-0.1c12.3,0,24.1-9.1,27.5-20.2
    c-8.2,6-16.8,11.2-27.4,11.2c-56,0-112,0-168.1,0C271.3,534,266.5,539.9,274.3,539.9z M123.5,533c7.6,5.4,15.7,9,25.6,4.8
    c8-3.4,16.5-5.9,25-8.3c5.6-1.6,8.6-3.8,5.8-9.9c-9.1,1.9-17.9,5-26.5,8.5c-13.2,5.4-24.3,1.5-35.1-5.7c-2-1.3-3-4-5.9-3.8
    C113.9,525.1,118.5,529.5,123.5,533z"/>
<path style="fill:#E5B884; transform:scale(0.2)" :class="ValueId+'_color6'" d="M251.8,520.8c0.5,10.2,0.5,10.2-9.5,10.1c-9.2,0-18.3,0-27.5,0c-6.5,0-11.5-2.8-15.1-8.1
    c-1.3-2-2.9-4.1-0.8-6.6c0.5-0.2,1.1-0.5,1.6-0.3c13.9,5.5,28.4,2.3,42.7,3.2C246.2,519.2,249.3,518.5,251.8,520.8z"/>
<path style="fill:#FDCC93; transform:scale(0.2)" :class="ValueId+'_color3'" d="M251.8,520.8c-11,0-22.1-0.2-33.1,0.1c-7.1,0.2-13.7-0.9-19.8-4.7c1.1-3.6,4.1-3.3,6.9-3.3
    c12.9,0,25.8,0,38.7,0C252.2,512.9,252.2,512.9,251.8,520.8z"/>
<path style="fill:#F2F2F2; transform:scale(0.2)" d="M187.3,419.4c3.6-4.8,6.7-8.9,10-13.3C199.1,417.1,198.3,418.1,187.3,419.4z"/>
<path style="fill:#F3F3F3; transform:scale(0.2)" d="M378.1,405.4c3.9,5.1,7,9.3,10.2,13.5C378.6,418.6,377.7,417.6,378.1,405.4z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M288.2,184.5c-5.8,0-11.6,0.1-17.4,0c-6-0.1-9.9-3.9-9.8-9.2c0.1-5.1,3.9-8.7,9.7-8.8c11.6-0.1,23.2-0.1,34.8,0
    c5.7,0.1,9.5,3.8,9.5,8.9c0,5.1-3.8,8.9-9.4,9C299.8,184.7,294,184.5,288.2,184.5z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M256.5,139.6c-10.7,0-19.9-7.5-22-18c-0.3-1.5-2-4.3,1.3-4.3c2.4,0,6.2-2.4,7.4,2.1c1,3.8,2.9,6.9,6.2,9
    c7.5,4.8,17.4,1.5,19.8-7.4c1.5-5.4,5.1-4.4,8-3.7c3.9,1,1.3,4.3,0.7,6.3C275.2,133.1,266.4,139.5,256.5,139.6z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M319.2,139.6c-10.3-0.1-19-7-21.5-17.2c-0.4-1.7-2.2-4.6,0.8-5c2.6-0.3,6.7-2.7,7.9,2.8c1.2,5.6,5.2,9.1,10.8,10.2
    c5.2,1,9.7-0.9,12.9-5.1c1.2-1.6,2.2-3.6,2.6-5.5c0.4-2.1,1.3-2.6,3.3-2.7c6.4-0.3,6.9,0.2,5.1,6.4
    C338.2,133.1,329.4,139.6,319.2,139.6z"/>
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
                                    <button :style="{background:'rgba('+getterYogaBg1+')'}" @click="ShowElement(getterYogaBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterYogaBg2+')'}" @click="ShowElement1(getterYogaBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterYogaBg3+')'}" @click="ShowElement2(getterYogaBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterYogaBg4+')'}" @click="ShowElement3(getterYogaBg4)" :class="this.ValueId+'_color3btnlor4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterYogaBg5 +')'}" @click="ShowElement4(getterYogaBg5 )" :class="this.ValueId+'_color5btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterYogaBg6+')'}" @click="ShowElement5(getterYogaBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <!--<button :style="{backgroundColor:'rgba('+getterYogaBg7+')'}" @click="ShowElement6(getterYogaBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterYogaBg8+')'}" @click="ShowElement7(getterYogaBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterYogaBg9+')'}" @click="ShowElement8(getterYogaBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterYogaBg10+')'}" @click="ShowElement9(getterYogaBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Yoga= [
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
            var randomNumber = Yoga[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Yoga[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Yoga'){
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
                getterYogaBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Yoga') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Yoga') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Yoga') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterYogaBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterYogaBg10: {
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
                            name:'Yoga',
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