<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#F9BD49; transform:scale(0.2)" :class="ValueId+'_color1'" d="M32.2,115.8c-1.9,0-3.8-0.2-5.7,0c-5.5,0.8-9.4-1.4-12.4-5.8c0-14.3,0-28.6,0-43
	c4-3.4,8.8-2,13.2-1.7c2.6,0.2,3,2.8,3,5.2c0.2,8.8,0.3,8.8,9.1,8.8c0.3,0,0.6,0,1,0c8.7,0,8.8,0,9.1-8.5c0.1-4.2,1.9-6.2,6.2-5.9
	c1.1,0.1,2.2,0,3.3,0c6.2,0,6.8,0.7,6.8,6.9c0,8.4-0.4,7.3,7.5,7.3c0.6,0,1.3,0,1.9,0c9,0.1,9.1,0.1,9.3-8.8
	c0.1-3.8,1.6-5.7,5.4-5.5c1,0.1,1.9,0,2.9,0c7.4,0,8.1,0.7,8,8.2c0,6.1,0,6.1,6.2,6c0.3,0,0.6,0,1,0c3.3-0.1,7.3,1,9.8-0.5
	c2.9-1.8,0.8-6.1,1.2-9.3c0.3-2.8,1.7-4.4,4.5-4.5c0.5,0,1,0,1.4,0c10-0.2,10.4,0.2,10.4,10.3c0,10.2,0.1,20.3-0.1,30.5
	c-0.1,6.6-3.5,9.9-10.1,9.9c-7.1,0.1-7.1,0.1-7.1,7c0,1.4-0.1,2.9-0.2,4.3c-2.1-0.5-2.1-2.3-2.1-3.8c0.1-6-1.6-6-7.1-6
	c-22.3,0-44.5,0-66.8,0c-1.6,0-3.2,0-4.8,0C35.3,117.2,33.6,117,32.2,115.8z M502.9,111.9c-3,2.4-6,4.1-10.2,3.9
	c-7.7-0.3-7.7-0.1-8.1,7.4c-0.3-0.1-0.9-0.1-0.9-0.2c-1.2-6.7-6.3-5.8-11-5.8c-22,0-44.1,0-66.1,0c-2.7,0-5.4,0.4-7.8-1.5
	c-14.7,0-16-1.3-16.1-16c0-9.5,0.1-19.1-0.1-28.6c-0.1-4.5,1.9-6.5,6.3-6.2c1.6,0.1,3.2,0,4.8,0c3.5-0.1,5.1,1.5,5.3,5.2
	c0.4,9.2,0.4,9.2,9.5,9.2c0.3,0,0.6,0,1,0c9.1-0.1,7.6,0.8,7.7-7.5c0.1-5.7,1.1-6.7,6.6-6.8c1.6,0,3.2,0,4.8,0
	c3.5-0.2,4.7,1.6,4.9,4.9c0.4,9.4,0.5,9.4,9.8,9.4c0.2,0,0.3,0,0.5,0c9.9-0.1,8.5,0.8,8.4-8.3c0-4.2,1.5-6.3,5.9-6
	c1.4,0.1,2.9,0.1,4.3,0c4.3-0.3,6.1,1.6,6.2,5.8c0.2,8.4,0.3,8.4,8.6,8.5c0.2,0,0.3,0,0.5,0c8.9,0.1,9,0.1,9.1-8.8
	c0.1-3.8,1.5-5.7,5.4-5.5c3.7,0.2,7.7-1,10.9,2C502.9,82,502.9,97,502.9,111.9z M190.5,470c-24.1,0-48.2,0-72.3,0
	c-2.2-2.8-1.6-6.1-1.6-9.2c0-65,0-130.1,0-195.1c0-6.8,0-13.7,0-20.5c0-2.2-0.2-4.5,1.6-6.3c7.2,0,14.3-0.1,21.5,0.1
	c3,0.1,4.5-0.5,4.7-4c0.3-4,0.2-7.9,0.3-11.9c0-3.5,1.5-5.3,5.2-5.3c4.9,0.1,9.9,0,14.8,0c3.6,0,5.2,1.7,5.2,5.2
	c-0.1,4.3,0.1,8.6,0,12.9c-0.1,2.2,0.8,3.1,3,3.1c6.2-0.1,12.4-0.1,18.6,0c2.7,0.1,3.1-1.3,3.1-3.5c-0.1-4.1,0-8.3-0.1-12.4
	c0-3.5,1.5-5.3,5.2-5.3c5.1,0.1,10.2,0.1,15.3,0c3.5-0.1,4.8,1.7,4.7,5c0,4.1,0.2,8.3,0.3,12.4c0.1,2.6,0.9,4,4,3.8
	c5.7-0.3,11.5-0.2,17.2,0c2.6,0.1,3.3-1,3.2-3.4c-0.1-3.5,0-7,0-10.5c0-6.3,0.3-6.6,6.5-7.4c0.6-0.1,1.2-0.4,1.8-0.7
	c3.1-0.7,6.1-1.1,9.1,0.6c8.2,0.4,8.4,0.7,8.4,9c-0.1,12.3-0.1,12.3,12.3,12.3c11.8,0,11.8,0,11.8-11.9c0-1.4-0.1-2.9,0-4.3
	c0.2-3.1,1.6-5,5.1-5c5.1,0.1,10.2,0.1,15.2,0c3.9-0.1,5.4,1.9,5.3,5.6c-0.1,4,0.1,7.9,0,11.9c-0.1,2.5,0.4,3.8,3.3,3.7
	c6.3-0.2,12.7-0.1,19.1,0c2.5,0,3.4-0.8,3.3-3.3c-0.1-4.3,0-8.6,0-12.9c0-3.3,1.5-5,4.9-5c5.1,0,10.2,0,15.2,0c3.3,0,5,1.5,5,4.9
	c0,4,0.2,8-0.1,11.9c-0.2,3.3,0.9,4.5,4.3,4.4c8.1-0.2,16.2-0.1,24.3-0.1c1.8,1.8,1.6,4.1,1.6,6.3c0,72.8,0,145.6,0,218.4
	c0,2.2,0.1,4.5-1.5,6.3c-25.1,0-50.2,0-75.3,0c-1.9-2-1.4-4.5-1.4-6.8c0-22.1-0.5-44.2,0.1-66.3c0.7-26.6-17.1-50.7-39.9-60.4
	c-39-16.7-82.7,7.1-89.6,49c-1.1,6.5-1,13.2-0.9,19.9c0.1,10.5,0.1,20.9,0,31.4c-0.1,8.2-0.1,16.5,0,24.7
	C191.8,464.3,192.9,467.4,190.5,470z"/>
<path style="fill:#B55502; transform:scale(0.2)" :class="ValueId+'_color2'" d="M398.8,469.9c0-77,0-154,0-231c0-41-0.1-82.1-0.1-123.1c26.3,0,52.7,0.1,79-0.1c4.6,0,7,0.9,6.1,5.9
	c-0.1,0.5,0.4,1.1,0.7,1.7c0.1,26.4,0.2,52.8,0.2,79.2c0,87.3-0.1,174.7,0.1,262c0,4.7-1.2,5.7-5.8,5.7c-25-0.2-49.9,0-74.9,0
	C402.3,470.1,400.6,470,398.8,469.9z M118.2,238.9c0,77,0,154,0,231.1c-27.5,0-55,0-82.5,0.1c-3.9,0-3.4-2.4-3.4-4.7
	c0-20.5,0-41,0-61.5c0-96-0.1-192.1-0.1-288.1c26.6,0,53.3,0.1,79.9-0.1c4.4,0,5.5,1.5,5.2,5.5c-0.2,2-0.7,4.1,0.6,6
	c0.1,26.8,0.1,53.6,0.2,80.4C118.1,218,118.1,228.4,118.2,238.9z"/>
<path style="fill:#9F1414; transform:scale(0.2)" :class="ValueId+'_color6'" d="M277.5,183.6c0.3-7-1.4-6.8,7-6.8c8.2,0,8.3-0.1,8.3-8.2c0-9.5,0.1-19-0.1-28.5
	c-0.1-3.2,0.8-4.5,4.3-4.4c5.4,0.2,10.8,0,16.1-0.1c2.9,1.2,2.9,3.3,1.9,5.8c-2.2,5.4-4.3,10.9-6.6,16.3c-0.9,2.1-0.8,3.8,0,5.9
	c2.2,5.1,4.2,10.2,6.2,15.4c2.1,5.3,0.9,7.2-4.5,7.2c-9.2,0.1-18.4,0-27.6,0C280.5,186.2,278.5,185.9,277.5,183.6z"/>
<path style="fill:#CDDDE6; transform:scale(0.2)" :class="ValueId+'_color5'" d="M261.6,126.1c-0.4,17-0.4,33.9,0,50.9c-0.1,13.6-0.1,27.1-0.2,40.7c-3,0-6.1,0.8-9.1-0.6
	c0-30.8,0-61.5,0-92.3c0-1,0-1.9,0-2.9c0-3,1.3-5.1,4.4-5c2.8,0.1,4.8,1.6,4.6,4.9C261.4,123.2,261.6,124.6,261.6,126.1z"/>
<path style="fill:#DE3C44; transform:scale(0.2)" :class="ValueId+'_color4'" d="M261.6,126.1c8.4,0,16.8,0.1,25.3,0c4-0.1,6.6,1,6.1,5.6c-0.4,2.9,1.2,3.3,3.7,3.4
	c5.5,0.1,11.1-0.8,16.5,0.6c-1.4,1.7-3.4,1.5-5.3,1.6c-2.9,0.1-5.7,0.2-8.6,0c-3.7-0.2-5.1,1.5-5,5.1c0.1,8.9,0.1,17.8,0,26.7
	c-0.1,7.2-1.8,9.3-9,9.1c-4.4-0.1-6.2,2.2-7.8,5.4c-2-1.8,0.6-5.4-1.8-6.3c-2.5-1-5.6-0.4-8.4-0.4c-1.9,0-3.8,0-5.7,0.1
	c-2.1-1.6-1.8-3.9-1.8-6.1c-0.1-12.9-0.1-25.8,0-38.6C259.8,130,259.5,127.7,261.6,126.1z M190.5,470c0-21.1,0.2-42.2-0.1-63.3
	c-0.2-12.6,0.1-25,5.1-36.9c17.8-42.3,74.2-53.8,107-21.7c13.9,13.6,21.3,29.7,21.1,49.3c-0.2,24.2-0.1,48.3-0.1,72.5
	c-23.7,0.1-47.4,0.2-71,0.2C231.8,470.2,211.1,470,190.5,470z"/>
<path style="fill:#FCF159; transform:scale(0.2)" :class="ValueId+'_color3'" d="M75,192c-5.3,0-10.7,0.1-16,0c-5-0.1-7.5-2.2-7.6-6.6c-0.1-4.6,2.9-7.1,6.7-7.2
	c11.5-0.4,23-0.3,34.4-0.1c4,0.1,6.2,3.1,6.4,7c0.2,3.9-3.2,6.8-7.5,6.9C86,192,80.5,192,75,192z M74.8,155c-5.2,0-10.3,0-15.5,0
	c-4.6,0-8-3-8-6.9c-0.1-4,3.2-7.1,7.9-7.1c10.5-0.1,20.9-0.1,31.4,0c5.2,0,8.5,2.9,8.4,7.1c-0.1,4-3.3,6.8-8.2,6.8
	C85.5,155.1,80.2,155,74.8,155z M74.8,228.9c-5.2,0-10.3,0-15.5,0c-4.6,0-8-3-8-6.9c-0.1-4,3.2-7.1,7.9-7.1
	c10.5-0.1,20.9-0.1,31.4,0c5.2,0,8.5,2.9,8.4,7.1c-0.1,4-3.3,6.8-8.2,6.8C85.5,229,80.2,228.9,74.8,228.9z M443.6,192
	c-5.3,0-10.7,0.1-16,0c-5-0.1-7.5-2.2-7.6-6.6c-0.1-4.6,2.9-7.1,6.7-7.2c11.5-0.4,23-0.3,34.4-0.1c4,0.1,6.2,3.1,6.4,7
	c0.2,3.9-3.2,6.8-7.5,6.9C454.6,192,449.1,192,443.6,192z M443.4,155c-5.2,0-10.3,0-15.5,0c-4.6,0-8-3-8-6.9c-0.1-4,3.2-7.1,7.9-7.1
	c10.5-0.1,20.9-0.1,31.4,0c5.2,0,8.5,2.9,8.4,7.1c-0.1,4-3.3,6.8-8.2,6.8C454.1,155.1,448.8,155,443.4,155z M443.4,228.9
	c-5.2,0-10.3,0-15.5,0c-4.6,0-8-3-8-6.9c-0.1-4,3.2-7.1,7.9-7.1c10.5-0.1,20.9-0.1,31.4,0c5.2,0,8.5,2.9,8.4,7.1
	c-0.1,4-3.3,6.8-8.2,6.8C454.1,229,448.8,228.9,443.4,228.9z"/>
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
                                    <button :style="{background:'rgba('+getterCastleBg1+')'}" @click="ShowElement(getterCastleBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCastleBg2+')'}" @click="ShowElement1(getterCastleBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCastleBg3+')'}" @click="ShowElement2(getterCastleBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCastleBg4+')'}" @click="ShowElement3(getterCastleBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterCastleBg5 +')'}" @click="ShowElement4(getterCastleBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCastleBg6+')'}" @click="ShowElement5(getterCastleBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCastleBg7+')'}" @click="ShowElement6(getterCastleBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterCastleBg8+')'}" @click="ShowElement7(getterCastleBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCastleBg9+')'}" @click="ShowElement8(getterCastleBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCastleBg10+')'}" @click="ShowElement9(getterCastleBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Castle= [
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
            var randomNumber = Castle[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Castle[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Castle'){
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
                getterCastleBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Castle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Castle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Castle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCastleBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCastleBg10: {
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
                            name:'Castle',
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