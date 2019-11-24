<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#2FA927; transform:scale(0.2)" :class="ValueId+'_color2'" d="M351.2,358.9c22.2,32.2,44.4,64.3,66.6,96.4c1.1,1.6,1.8,2.8-0.6,4c-15.2,7.4-29,17.3-45.3,22.5
    c-17.3,5.5-34.3,4.4-50.6-3.2c-14.5-6.7-29.2-11.6-45.5-10c-11.9,1.1-22.5,5.5-33,10.8c-5.1,5.4-12.3,5.5-18.8,6.7
    c-10.9,1.9-21.7,0.4-32.2-2.9c-1.9-0.6-3.7-1.4-4.8-3.1c-24.2-13.7-49-16.2-74.4-3.6c-25.1,12.4-49.7,11.3-73.9-2.6
    c-3.3-1.9-6.9-3.5-10.3-5.2c1.7-4.1,5.6-3.5,8.7-3.6c15.4-0.9,30.5-3.4,45.6-6.4c28.7-5.7,56.5-14.2,83.9-24.4
    c2.2-0.8,4.3-1.9,6.7-1.7c1.8,0.2,3.3,1.2,4.8,1.9c11.4,5.5,22,0.9,25.6-11.3c0.3-1.1,0.6-2.3,1.1-3.3c1.2-2.2,3.4-3.1,5.5-4
    c22.8-10.1,44.2-22.5,64.9-36.2c8.2-5.5,16.1-11.5,23.9-17.6c2-1.6,3.9-3.3,6.4-3.9c2-0.2,3.8,0.4,5.6,1.1c11,4,21.9,3.7,32.8-0.3
    C346.2,358.2,348.8,355.6,351.2,358.9z"/>
<path style="fill:#299422; transform:scale(0.2)" :class="ValueId+'_color5'" d="M351.2,358.9c-0.9-0.5-1.7-0.6-2.7-0.1c-14.5,7-29,6-43.5,0.2c-2.4,0.1-4.5-1-6.4-2.3
    c-4.2-2.8-8.7-4.7-13.7-5.7c-13.8-4.3-26.8-2.6-39.2,4.6c-9.2,5.3-18.7,9.4-29.6,9.7c-10.7,0.3-20.4-2.9-29.3-8.3
    c-18.6-11.2-36.9-11.2-55.6-0.1c-14.8,8.8-30.5,11.4-46.9,4.7c-2.3-0.9-4.9-1.6-6.3-4c-10.2-7-20.4-13.9-31.1-21.2
    c0.8-1.1,1.5-2.2,2.3-3.2c24.5-32.6,49-65.3,73.5-97.9c0.7-0.9,1.5-1.7,2.3-2.6c1.3-2.6,3.9-3.2,6.4-3.5c7.4-0.8,13.6-4.2,19.5-8.6
    c4-2.9,8.2-5.2,13.4-5c2.3,0.6,3.4,2.5,4.6,4.3c15,22.4,32.2,42.9,53,60.2c1.5,1.2,3.1,2.4,3.7,4.4c0.5,1.7,0.3,3.5,0.5,5.2
    c1.1,11.2,10.5,18.1,21.5,15.6c2.1-0.5,4.1-1.4,6.3-1.2c2.2,0.3,4,1.4,5.9,2.5c32.1,18.4,66.4,30.3,103,35.5
    c2.7,0.4,6.1-0.2,6.8,3.9C363,350.2,356.2,353.3,351.2,358.9z"/>
<path style="fill:#2FA927; transform:scale(0.2)" :class="ValueId+'_color2'" d="M78,357.7c7,2.2,13.6,5.5,21.1,6c11.7,0.8,22.3-2.7,32.1-8.5c18.6-11,36.9-11,55.4,0.1
    c19.5,11.7,39,11.2,58.2-1.1c10.9-7.1,23-7.7,35.3-6.6c2.1,0.2,4.7,0.6,6,3c-0.2,2.4-1.9,3.7-3.6,5c-25.5,19.5-53.1,35.4-82.6,48.1
    c-0.9,0.4-1.8,0.7-2.8,0.7c-1.8,0.1-3.4-0.6-5.1-1c-8.8-2.3-16.1,0.9-20.6,8.8c-1,1.8-1.7,3.9-3.7,5.1c-26.6,10.8-54,18.9-81.9,25.1
    c-20.5,4.6-41.2,8.3-62.3,8.1c-2.6,0-6,1.1-7.4-2.7C36.7,417.8,57.3,387.7,78,357.7z"/>
<path style="fill:#2FA927; transform:scale(0.2)" :class="ValueId+'_color2'" d="M93.3,194.3c36.1-41.3,72.3-82.6,108.4-123.9c1.4-1.6,2.7-3.3,4-5c1.7-4.6,4.4-9.3,9.3-9.2
    c4.5,0,7.4,4.5,9,8.9c11.9,13.7,23.7,27.4,35.7,41.1c4.7,5.4,9.6,10.6,14.3,15.9c1,1.5,0,2.7-1,3.5c-7.3,5.6-13.9,12-22.3,16.1
    c-1.4,0.2-2.7-0.1-4-0.3c-9.9-1.4-16.9,2.7-20.3,12c-0.5,1.4-0.9,2.9-1.8,4.2c-9.4,6.6-20,11.2-30.5,15.6
    c-30.5,12.8-62.3,20.5-95.3,22.7C97,196,94.4,197.3,93.3,194.3z"/>
<path style="fill:#2FA927; transform:scale(0.2)" :class="ValueId+'_color2'"  d="M165.1,216.6c-5.5,0.7-10.4,2.4-14.6,6.2c-7.2,6.5-16.9,7.1-25.6,10c-0.2-0.5-0.4-1.4-0.7-1.5
    c-12-0.9-19.9-9-28.4-16c-1.3-4.5,2.5-3.6,4.5-3.8c19.2-1.5,38.2-4.7,56.8-9.7c23.4-6.3,45.7-15.2,67.2-26.2
    c2.1-1.1,4.1-2.2,6.4-2.8c1.8-0.3,3.4,0.4,5,1c12.8,4.1,22.1-1.6,24.4-14.8c0.2-0.9,0.3-1.9,0.6-2.8c6.4-7.7,15.6-12.1,22.9-18.7
    c1-0.9,2.3-1.5,3.6-0.2c18.2,20.7,36.4,41.4,54.6,62.2c5.7,6.5,5.5,4.6-0.9,10.4c-2,1.8-4.2,3.5-6.1,5.4
    c-8.5,8.3-17.8,15.3-29.8,17.7c-8.6,1.6-16.1-1.3-22.7-6.5c-7-5.5-14.3-9.7-23.8-9.5c-7.6,0.2-13.9,3-19.8,7.4
    c-9.6,7.3-20.2,10.3-32.3,7.6c-5.3-1.2-9.4-4.5-14.3-6.4c-7.1-6.5-15.5-8.7-25-8C166.4,217.5,165.8,217,165.1,216.6z"/>
<path style="fill:#299422; transform:scale(0.2)" :class="ValueId+'_color5'" d="M192.6,224.9c1.1-1.4,2.2-0.4,3,0.2c14.6,10.3,31.4,6.7,43.4-2.9c11.5-9.2,26.5-10,38.2-1.2
    c8.4,6.4,17.3,10.7,27.7,11.8c22.7,30.2,45.5,60.4,68.2,90.6c1,1.4,2.1,2.8,3.2,4.1c-0.6,2.7-2.8,2.4-4.6,2.1
    c-39-4.7-75.4-16.6-108.9-37.4c-0.7-0.4-1.2-1-1.7-1.6c-0.7-1-0.9-2.1-1.1-3.3c-2.8-11.8-9.3-16.4-21.3-15.2
    c-0.8,0.1-1.5,0.1-2.3,0.1c-2-0.4-3.6-1.5-5-2.8c-12.9-11.8-25.2-24.1-36-37.9C194,229.6,191.9,227.8,192.6,224.9z"/>
<path style="fill:#CE6A3C; transform:scale(0.2)" :class="ValueId+'_color6'" d="M187.1,480.1c18.7,6.7,37.3,6.9,55.8-0.6c0,12.8-0.1,25.7,0.1,38.5c0.1,3.5-0.7,4.7-4.5,4.6
    c-15.7-0.2-31.5-0.1-47.2,0c-2.9,0-4.6-0.3-4.5-4C187.1,505.8,187,492.9,187.1,480.1z"/>
<path style="fill:#EDEFEF; transform:scale(0.2)" :class="ValueId+'_color3'" d="M16.1,447.8c7.5,2.9,15.2,1.2,22.7,0.5c44.8-4.1,87.5-16.9,129.4-32.6c1.8,5.9,3.3,11.8,5.5,17.6
    c-32.8,12.5-66.3,22.8-100.9,29c-11.5,2-23,3.7-34.6,4.5c-3.3,0.2-7-0.7-9.8,2c-6.6-1.9-13.4-0.9-20.1-2.1c-4.8-0.9-8.4-4.2-8.3-8.7
    c0.2-5,3.8-8.7,8.7-8.9C11.2,448.8,13.8,449.4,16.1,447.8z M224.1,157.2c-24.5,13.2-50.2,23.5-77.4,29.7c-17.6,4-35.2,7.8-53.4,7.5
    c-2.7,1.7-5.7,1.1-8.5,1.1c-6.3,0.1-10,3.2-10,8.7c-0.1,6.3,3.5,9.8,10.2,10.1c3.6,0.1,7.4-0.8,10.9,1.1c0.1-2.9,2.4-2,3.9-2.1
    c12.2-0.8,24.3-2.6,36.3-4.9c33.7-6.5,65.6-18.1,95.5-35.1C229,167.9,226.3,162.6,224.1,157.2z M253.3,304.8
    c32.5,19.8,67.6,32.5,105.2,38.6c3.6,0.6,7.8-0.8,10.7,2.8c3.7-1.8,7.4-1.2,11.2-0.4c7.2,1.6,11.8-2.8,10.8-9.9
    c-0.7-5.1-4.7-6.2-8.7-7.1c-2-0.5-4.3,0.1-6.1-1.3c-0.8,1.2-2,1-3.1,0.8c-7.9-1.2-15.8-2.2-23.6-3.7c-31.3-6.2-60.5-18-87.9-34.4
    C259.1,295.1,255.9,299.8,253.3,304.8z M286,122.4c-3.9-3.2-7.9-1.2-12-0.3c-6.6,7.7-15.4,12.5-23.2,18.7c3.7,4.8,7.6,9.4,10.9,14.6
    c1.7-1.2,3.5-2.4,5.3-3.5c7.2-4.4,12.8-10.9,20.3-14.7C291,129.7,290.6,126.1,286,122.4z M205.7,419.5
    c35.6-15.9,69.2-35.3,99.2-60.5c-6-3.3-11.1-8.7-18.8-8.4c-3.2,2.5-6.3,5.2-9.5,7.6c-24.6,18.4-51.5,33-79.6,45.4
    C200,408.9,203.3,414,205.7,419.5z M165.1,216.6c16.1,25.8,35.7,48.5,59.4,67.5c3.9-4.1,7.5-8.6,11.3-12.8c-1.8-1.7-3.7-3.4-5.5-5.1
    c-13.9-12.6-27-25.9-37.6-41.4C185.3,216,175.6,214.9,165.1,216.6z"/>
<path style="fill:#FD2328; transform:scale(0.2)" :class="ValueId+'_color4'" d="M149.5,298.3c0,10.4-8.5,18.8-19,18.7c-10.2-0.1-18.4-8.5-18.4-18.7c0-10.2,8.2-18.5,18.4-18.7
    C141,279.5,149.5,287.8,149.5,298.3z M224.1,157.2c0,6.5,2.8,11.7,7.4,16.1c16.7,8.3,29.6,0.7,30.3-17.9
    c-1.6-6.4-5.3-11.2-10.9-14.6C235.7,137.3,227.1,142.5,224.1,157.2z"/>
<path style="fill:#FDD300; transform:scale(0.2)" :class="ValueId+'_color1'" d="M197,403.6c5,4.2,8.3,9.2,8.7,15.9c-2.2,17.8-17.1,24.2-32.1,13.8c-4.5-5-6.1-11-5.5-17.6
    C174.7,401.5,182.6,398.2,197,403.6z M224.7,293.3c3.3,12.4,14.8,17.1,28.6,11.5c4.7-3.8,7.7-8.6,8.5-14.7
    c-1.2-15.3-10.7-22.2-26.1-18.8c-5.4,2.8-9.1,7.2-11.3,12.8C224.4,287.2,223.9,290.3,224.7,293.3z M236.6,67.9
    c-1.1-6.7-1.6-12.7-3.1-18.4c-1.2-4.3-0.1-7,3-9.7c4.6-4,8.9-8.4,14.4-13.7c-7.2-1-12.4-1.9-17.8-2.4c-5.1-0.5-8.7-2.3-10.7-7.5
    c-2-5.2-4.8-10-8-16.3c-3,6.1-5.7,10.6-7.4,15.4c-2.2,6.1-6.4,8.1-12.3,8.5c-5,0.4-9.9,1.4-15.8,2.3c1.8,2,2.7,3.3,3.9,4.1
    c12.7,8.1,15.2,19.3,10.5,33c-0.5,1.3-1.2,2.8-0.1,4.4c6.9-3.3,13.8-6.5,20.7-9.8c0,0,0.6,0.1,0.6,0.1s0.6-0.1,0.6-0.1
    C222.1,61.1,229.1,64.4,236.6,67.9z"/>
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
                                    <button :style="{background:'rgba('+getterChristmasTreeBg1+')'}" @click="ShowElement(getterChristmasTreeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg2+')'}" @click="ShowElement1(getterChristmasTreeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg3+')'}" @click="ShowElement2(getterChristmasTreeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg4+')'}" @click="ShowElement3(getterChristmasTreeBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg5 +')'}" @click="ShowElement4(getterChristmasTreeBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg6+')'}" @click="ShowElement5(getterChristmasTreeBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterChristmasTreeBg7+')'}" @click="ShowElement6(getterChristmasTreeBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg8+')'}" @click="ShowElement7(getterChristmasTreeBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg9+')'}" @click="ShowElement8(getterChristmasTreeBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterChristmasTreeBg10+')'}" @click="ShowElement9(getterChristmasTreeBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var ChristmasTree= [
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
            var randomNumber = ChristmasTree[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  ChristmasTree[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'ChristmasTree'){
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
                getterChristmasTreeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChristmasTree') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChristmasTree') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChristmasTree') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterChristmasTreeBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasTreeBg10: {
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
                            name:'ChristmasTree',
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