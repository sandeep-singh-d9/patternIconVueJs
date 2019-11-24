<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#DE8729;transform:scale(0.2)" :class="ValueId+'_color2'" d="M133.4,149.9c0-24.8,0.1-49.6,0-74.4c0-1.5,0.6-3.1-1.9-4.1c-15.9-5.9-17.9-18.3-4.8-29.2
	c2.8-1.9,6-2.4,9.4-2.4c63.7,0,127.5,0,191.2,0c0.6,0,1.3,0,1.9,0c9.1,0.3,15.8,5.8,17.1,13.9c1.3,7.9-3.5,15.4-11.9,18.6
	c-2.8,0.5-3.4,2.4-3,4.9c0.2,3.4-0.1,6.7,0.1,10.1c0.1,27.8,0,55.6,0,83.5c0,2.3,0.2,4.7-1.2,6.8c-1.7,1.4-3.8,1.4-5.8,1.4
	c-15.2,0.1-30.4,0-45.6,0c-1.9,0-3.8,0-5.5-1.1c-2-2.2-1.5-5-1.6-7.6c-0.1-17.9,0-35.9,0-53.8c0-1.9,0.1-3.8-0.3-5.6
	c-0.2-1.2-0.5-2.7-2.1-2.6s-1.8,1.6-2,2.8c-0.3,1.7-0.2,3.5-0.2,5.2c0,18.1,0,36.2,0,54.3c0,2.5,0.4,5.1-1.3,7.3
	c-1.3,1-2.9,1.2-4.4,1.2c-7.2,0.1-14.3,0.1-21.5,0c-1.6,0-3.1-0.2-4.5-1.1c-2-2.3-1.5-5-1.5-7.7c-0.1-18.2,0-36.5-0.1-54.7
	c0-2.6,1.2-6.9-2.4-7c-3.1,0-2.1,4.3-2.1,6.8c-0.1,18.4,0,36.8-0.1,55.2c0,2.5,0.4,5.1-1.3,7.3c-1.3,1-2.9,1.1-4.4,1.2
	c-7.2,0.1-14.3,0.1-21.5,0c-1.6,0-3.1-0.2-4.5-1.1c-2-2.3-1.5-5-1.5-7.7c-0.1-18.2,0-36.5-0.1-54.7c0-2.5,1.2-6.9-2.4-6.9
	c-3.1,0-2,4.3-2.1,6.8c-0.1,18.2,0,36.5-0.1,54.7c0,2.6,0.5,5.4-1.4,7.7c-2,1.3-4.2,1.2-6.4,1.2c-14.6,0-29.3,0-43.9,0
	c-2.2,0-4.4,0.2-6.4-1.1c-2.9-4.9-1.1-10.2-1.5-15.4C132.3,158.2,131,153.8,133.4,149.9z"/>
<path style="fill:#CDCCCA;transform:scale(0.2)" :class="ValueId+'_color4'" d="M273.3,177.2c18.9,0,37.8,0,56.7,0c4.5-2.5,9.4-0.9,14.1-1.3c7.9,0.2,13.3-3.2,18.6-12
	c-4.2-1-8.4-0.2-12.6-0.5c-2.1-0.1-4.5,0.4-5.9-2c-0.6-4.9-1.8-9.7,0.9-14.4c12.7,0.1,25.3-0.3,37.9,2.8c34.7,8.6,63.2,41,67,76.2
	c1.6,15.2,0.2,30.4,0.9,45.7c-0.4,0.7-1.2,1.2-1.9,1.2c-5.3-0.5-8.3,2-9.5,7c-2.3,1.2-4.7,1.1-7.1,0.2c-2.4-1.9-1.7-4.6-1.7-7
	c0.2-12.8,0.1-25.5-3.6-37.9c-4.7-15.8-12.5-29.8-24.5-41.3c-1.6-1.5-3.5-4.5-5.8-2.4c-2.4,2.3,0.3,4.6,2.1,6.3
	c15.3,14.6,23.6,32.8,26.3,53.5c1.1,8.6,0.2,17.3,0.5,25.9c0,1.3,0,2.5,0.3,3.8c0.1,1.8,0.2,3.6-0.1,5.4c0,15.1,0,30.1,0.1,45.2
	c0,2.1-0.8,5.7,2.3,5.7c3-0.1,2.2-3.6,2.2-5.8c0.1-12.5,0-25.1,0.1-37.6c0-2.3-0.3-4.7,1.1-6.9c2.4-1.7,4.9-1.5,7.5-0.6
	c0.9,0.5,1.3,1.3,1.5,2.2c0.5,3.6,2.8,4.7,6.2,4.7c1.5,0,3.1,0,4.2,1.4c0,38.4-0.1,76.8,0,115.2c0,5.6-1.7,9.9-5.7,13.8
	c-13.6,13.3-27.1,26.7-40.6,40.1c1.2-4.8,0.9-9.7,0.9-14.5c0-56.7,0.3-113.4-0.2-170.1c-0.2-19.1-7.2-36.4-19-51.6
	c-7.6-9.8-16.7-18-27.6-23.8c-10.2-5.4-20.8-9.2-32.4-10.6c-11-1.3-22-0.7-33-0.8c-59.1-0.1-118.1,0.2-177.2-0.2
	c-20.6-0.1-39.4,4.7-56.6,15.9c-0.9,0.6-1.8,1.3-3,1.3c15.6-15.4,29.9-32.3,47.4-45.8c8.7-6.7,18.8-10.7,29.2-13.7
	c0,4.1,0,8.2,0,12.4c-6.9,1.4-12.3,5-16.6,10.4c-0.6,0.7-1.6,1.4-1.3,2.3c0.4,1.4,1.8,1,2.8,1c3.4,0.1,6.9,0,10.3,0
	c1.7,0,3.5-0.1,4.9,1.2c18.9,0,37.8,0,56.8,0c2.5-1.7,5-1.7,7.5,0c10.1,0,20.2,0,30.3,0c2.5-1.7,5-1.7,7.5,0c10.1,0,20.2,0,30.3,0
	C268.3,175.5,270.8,175.5,273.3,177.2z"/>
<path style="fill:#E8E9EC;transform:scale(0.2)" :class="ValueId+'_color6'" d="M404.7,463.8c-4.2,6-9.7,8.6-17.2,8.5c-116.8-0.2-233.7-0.1-350.5-0.1c-11.2,0-16.9-5.8-16.9-16.8
	c0-58.3-0.2-116.5,0.1-174.8c0.1-18.3,5.9-35,16.8-50c4.6-6.2,9.4-12.1,14.9-17.6c1.5-1.5,3-2.8,4.9-3.6
	c17-13.7,36.6-18.6,58.1-18.5c66.5,0.2,132.9-0.2,199.4,0.2c36.1,0.2,63.4,16.7,81.4,47.9c7.7,13.3,11.5,27.9,11.5,43.4
	c0,56.9,0,113.7,0,170.6C407.1,456.7,407.3,460.6,404.7,463.8z M432.1,287c-2.3-0.4-5,0.9-6.6-1.9c-0.8-1.3-0.8-2.6,0-3.9
	c1.6-2.8,4.3-1.5,6.6-1.9c2.5,0,5,0.1,7.5,0.1c0,2.5,0,5,0,7.5C437.1,287,434.6,287,432.1,287z"/>
<path style="fill:#F79D22;transform:scale(0.2)" :class="ValueId+'_color1'" d="M330.1,86.6c0-3.5,0-6.9,0-10.4c1.6-1.2,2.3-2.9,2.8-4.7c10.4-4.2,14.5-11.4,11.3-20.3
	c-2.2-6.3-7.6-9.9-15-9.9c-29.3,0-58.6,0-87.9,0c-32.9,0-65.8,0-98.7,0c-5.3,0-10.7-0.3-15.9,0.9c4.1-4.2,8-8.4,12.2-12.5
	c2.7-2.6,6.2-3.6,9.9-3.6c65.3,0,130.6,0,196,0c6.6,0,11.5,3.1,14.2,9.1c2.8,6.3,1.4,12-3.3,16.9c-0.4,0.5-0.8,0.9-1.4,1.3
	c-7.1,5.2-10.9,11.8-9.2,20.9c-3.8,2.9-7,6.5-10.5,9.7C333.3,85.2,332.4,87.2,330.1,86.6z M330.1,86.6c3.4-3.3,6.8-6.5,10.2-9.8
	c1.4-1.3,2.6-2.8,4.8-2.5c0.1,24.2,0.1,48.5,0.2,72.7c0,5.1,0,10.1,0,15.2c2.1,5,2.2,10,0,15c-5.1,0-10.1,0-15.2,0
	C330.1,147,330.1,116.8,330.1,86.6z M197.7,177.2c-2.5,0-5,0-7.5,0c0-21.7,0-43.4,0-65.1c0-1.3-0.1-2.6,0.2-3.7
	c0.4-1.6,1.6-2.8,3.3-2.9c2-0.1,3.3,1.1,3.8,2.9c0.3,1.2,0.2,2.5,0.2,3.7C197.7,133.9,197.7,155.6,197.7,177.2z M235.5,177.2
	c-2.5,0-5,0-7.5,0c0-21.7,0-43.4,0-65.1c0-1.3-0.1-2.6,0.2-3.7c0.4-1.6,1.6-2.8,3.3-2.9c2-0.1,3.3,1.1,3.8,2.9
	c0.3,1.2,0.2,2.5,0.2,3.7C235.6,133.9,235.5,155.6,235.5,177.2z M273.3,177.2c-2.5,0-5,0-7.5,0c0-21.7,0-43.4,0-65.1
	c0-1.3-0.1-2.6,0.2-3.7c0.4-1.6,1.6-2.8,3.3-2.9c2-0.1,3.3,1.1,3.8,2.9c0.3,1.2,0.2,2.5,0.2,3.7
	C273.4,133.9,273.3,155.6,273.3,177.2z"/>
<path style="fill:#F6C191;transform:scale(0.2)" :class="ValueId+'_color3'" d="M332.9,71.5c2,3.3,0,4.2-2.8,4.7C330.3,74.2,329,71.3,332.9,71.5z"/>
<path style="fill:#1669AD;transform:scale(0.2)" :class="ValueId+'_color5'" d="M213.4,445.7c12.9,0,25.8,0,38.7,0c2.8,0,5.9,0,6,3.6c0.1,4-3.1,4-6.1,4c-26.1,0-52.2,0-78.3,0
	c-2.8,0-5.9,0-6-3.6c-0.1-4,3.1-4,6.1-4C187,445.8,200.2,445.7,213.4,445.7z M425.5,281.2c-1.7-1.9-0.9-4.2-0.9-6.3
	c0.2-14.6,0.3-29.2-5-43.2c-4.5-12-10.7-23-20.2-31.9c-1.7-1.6-3.6-3.1-4.6-5.3c-0.8-1.8-0.7-3.3,0.7-4.7c1.6-1.6,3.4-1.1,4.7,0.1
	c3.4,3.1,6.9,6.1,9.7,9.6c15.5,19.3,23.1,41.3,22.2,66.2c-0.2,4.6-0.1,9.1-0.1,13.7C430.2,281,427.8,280.9,425.5,281.2z"/>
<path style="fill:#1669AD;transform:scale(0.2)" :class="ValueId+'_color5'" d="M432.1,287c0,15.7,0,31.4,0.1,47.1c0,2.9-0.3,5.7-3.9,5.7c-3.3-0.1-3.7-2.7-3.7-5.5
	c0-15.2,0-30.4,0-45.7c0-1.2-0.3-2.6,0.9-3.5C427.8,285.5,430.2,285.4,432.1,287z"/>
<path style="fill:#DD3A2A;transform:scale(0.2)" :class="ValueId+'_color7'" d="M434.9,366.5c5.6-0.4,7.1,3.8,8.2,7.9c1.9,7.4-1.9,13.9-8.2,14.4c-5-1.7-7.5-5.5-7.5-11.2
	C427.4,372.1,430,368.3,434.9,366.5z"/>
<path style="fill:#000000;transform:scale(0.2)" :class="ValueId+'_color9'" d="M451.1,294.7c-1.1,0-2.2-0.1-3.3-0.1c-7.9-0.1-7.9-0.1-8.3-7.6c-1.6-2.5-1.6-5,0-7.5c0.4-7.5,0.5-7.5,7.8-7.6
	c1.2,0,2.5-0.1,3.7-0.1c12.1,0.1,24.2,0.1,36.2,0.2c7.6,0,12.8,4.7,12.8,11.3c0,6.7-5.2,11.3-12.8,11.3
	C475.3,294.6,463.2,294.6,451.1,294.7z M133.4,177.3c-5.6,0-11.3,0.1-16.9,0c-1.2,0-2.7,0.6-3.4-0.8c-0.8-1.7,0.9-2.5,1.8-3.4
	c2-2.2,4.3-4.1,6.3-6.4c3.3-3.7,7.4-5.1,12.2-4.5C133.4,167.3,133.4,172.3,133.4,177.3z M345.2,177.2c0-5,0-10,0-15
	c5.9,0,11.9,0,17.8,0c0.9,0,2-0.3,2.5,0.8s-0.4,1.7-1,2.3c-3.2,3.2-6.4,6.4-9.6,9.6C352.2,177.5,348.7,177.5,345.2,177.2z"/>
<path style="fill:#B6292A;transform:scale(0.2)" :class="ValueId+'_color8'" d="M434.9,366.5c-8.6,6.4-8.6,16,0,22.3c-11.6,0.7-17.1-6.2-13.1-16.6C423.8,367,425.9,366,434.9,366.5z
	"/>
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
                                    <button :style="{background:'rgba('+getterTosterBg1+')'}" @click="ShowElement(getterTosterBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTosterBg2+')'}" @click="ShowElement1(getterTosterBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTosterBg3+')'}" @click="ShowElement2(getterTosterBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTosterBg4+')'}" @click="ShowElement3(getterTosterBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterTosterBg5 +')'}" @click="ShowElement4(getterTosterBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTosterBg6+')'}" @click="ShowElement5(getterTosterBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTosterBg7+')'}" @click="ShowElement6(getterTosterBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTosterBg8+')'}" @click="ShowElement7(getterTosterBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTosterBg9+')'}" @click="ShowElement8(getterTosterBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTosterBg10+')'}" @click="ShowElement9(getterTosterBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Toster= [
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
            var randomNumber = Toster[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Toster[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Toster'){
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
                getterTosterBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toster') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toster') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Toster') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTosterBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTosterBg10: {
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
                            name:'Toster',
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