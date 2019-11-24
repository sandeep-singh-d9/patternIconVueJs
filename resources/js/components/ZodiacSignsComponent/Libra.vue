<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M441,131.3c7.2,20.3,14.2,40.3,21.3,60.3c14.5,40.9,28.7,81.8,43.9,122.5c3.1,8.4,4.6,16.2,3.4,24.9
	c-2.2,15.3-7.9,29.2-18,40.9c-20.7,23.7-46.8,33.7-77.8,27.3c-32.1-6.6-52.6-26.7-61.9-58.1c-2.5-8.5-3.1-17.3-2.7-26.2
	c0-0.8,0.1-2.3,0.4-2.3c5.1-1.1,4.4-5.8,5.6-9c20.7-57.7,41.1-115.5,61.7-173.3c2-5.5,2-5.6-3.9-5.2c-38.1,2.5-76.1,5.1-114.2,7.7
	c-2,0.1-4,0.3-6,0.3c-8,0.3-7.9,0.3-7.5,8.4c1.7,31.1,3.3,62.2,5,93.3c2,37.4,4,74.8,6,112.2c0.6,10.5,1.4,20.9,1.8,31.4
	c0.1,3.1,1,3.8,4,3.8c12.2-0.2,24.3,0.1,36.5-0.2c3.8-0.1,5.3,0.7,6.1,4.8c7.6,37.2,15.5,74.2,23.4,111.3c0.6,2.6,0.5,4-3.2,4
	c-73.2-0.1-146.3-0.1-219.5-0.1c-0.3,0-0.6-0.1-1.6-0.3c1.6-8.2,3.2-16.4,4.9-24.5c6.2-30.3,12.4-60.7,18.4-91.1
	c0.7-3.4,2-4.2,5.2-4.2c12.5,0.2,25,0,37.5,0.1c3.3,0,4.4-0.6,4.6-4.2c1.4-28.9,3.2-57.9,4.7-86.8c1.1-21.1,2.1-42.2,3.2-63.4
	c1.5-28.6,3.2-57.2,4.9-85.8c0.5-8,0.6-8.1-7.4-8.6c-37.7-2.5-75.5-4.9-113.2-7.4c-3.8-0.3-7.6-0.6-12-1c4.4,12.3,8.5,24,12.7,35.7
	c16.8,47.5,33.6,94.9,50.6,142.3c2.9,8.2,6.9,15.8,5.4,25.1c-2.3,14.1-6.2,27.6-14.9,39.1c-20.3,26.8-47.5,38.6-80.5,32.2
	c-34.9-6.7-56-29.1-64.3-63.6C1.7,337,2.1,329.9,2.1,323c0-0.8,0-2.3,0.4-2.3c5.2-1.5,4.5-6.5,5.7-10.1
	C28.9,252.8,49.4,195,70,137.3c2.1-5.8,2-5.8-4.1-6.1c-16.8-1-33.6-2.1-50.4-3.3C7.2,127.3,2,122,2.1,114.6
	c0.1-7.2,5.3-12.1,13.4-12.6c56-3.7,112-7.4,168.1-11.1c13.8-0.9,27.6-1.8,41.4-2.9c1.8-0.1,4.7,1.2,5-1.6c0.4-2.9,1.4-5.9-1.8-8.7
	c-10.5-8.9-15.4-20.5-15.1-34.3c0.5-21.3,17.9-39.2,40-41.2C273.5,0.4,294,15.8,298,36.1c3.2,16.2-1.5,29.8-13.4,41.1
	c-1.4,1.3-2.9,2.4-2.9,4.9c-0.1,3.8,0.9,5.5,5.1,5.7c32.6,1.9,65.2,4.1,97.8,6.3c32.9,2.2,65.8,4.4,98.7,6.7c5,0.3,10,0.4,15,1
	c7.2,0.8,12,6.3,11.8,13.1c-0.2,6.8-5.1,11.8-12.5,12.4c-17.4,1.3-34.9,2.5-52.3,3.7C444,131,442.7,131.2,441,131.3z"/>
<path :style="{fill:'rgba(255, 21, 67, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M333.1,493.9c-40.6,0.1-81.2,0.1-121.9,0.2c-14.7,0-29.3-0.1-44,0.1c-3,0-3.7-0.9-3.1-3.6
	c4.9-23.5,9.7-47,14.5-70.5c0.1-0.6,0.4-1.3,0.6-1.9c1.9-1.8,4.3-1.5,6.6-1.5c41.6,0,83.2,0,124.9,0c7,0,8.1,1,9.5,7.6
	c4.4,20.7,8.7,41.4,13,62.1C333.7,488.7,334.9,491.4,333.1,493.9z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M421.8,173.3c0,47.4,0,94.3,0.1,141.3c0,4.1-0.7,5.7-5.4,5.6c-14.5-0.4-29-0.2-43.5-0.1
	c-3.1,0-4.5-0.1-3.1-3.9c16.8-46.7,33.4-93.5,50-140.3C420.3,175,420.5,174,421.8,173.3z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M91.3,173.3c17.3,48.7,34.7,97.5,52.2,146.8c-17.3,0-33.9,0-50.5,0c-3.4,0-2.6-2.3-2.6-4.1
	c0-18,0-36,0-54c0-29.5,0-59,0-88.4C90.7,173.5,91,173.4,91.3,173.3z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M74.4,173.7c0,22.8,0,45.1,0,67.4c0,24.8-0.1,49.6,0.1,74.4c0,3.7-0.9,4.7-4.6,4.7
	c-14.8-0.2-29.6-0.1-44.5-0.1c-2.7,0-3.9-0.2-2.7-3.5c17-47.4,33.8-94.8,50.6-142.2C73.3,174.3,73.5,174.2,74.4,173.7z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M438.3,172.8c9.5,26.8,18.6,52.2,27.7,77.7c7.7,21.7,15.4,43.5,23.2,65.2c1.2,3.4,1.1,4.5-2.9,4.5
	c-14.8-0.2-29.6-0.1-44.5-0.1c-2.7,0-4.2-0.2-4.1-3.6c0.1-47,0.1-93.9,0.1-140.9C437.8,175.1,438,174.6,438.3,172.8z"/>
<path :style="{fill:'rgba(223, 0, 6, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color7'" d="M333.1,493.9c-3.8-18.1-7.5-36.2-11.3-54.3c-1.2-5.7-2.9-11.2-3.5-17c-0.5-4.2-2.5-4.6-5.9-4.6
	c-26.4,0.1-52.9,0-79.3,0c-18,0-35.9,0-53.9,0c0-0.3-0.1-0.7-0.1-1c1.2-11.3,1.2-11.2,12.2-11.2c44.8,0,89.5,0.1,134.3-0.1
	c4.3,0,5.7,1.4,6.4,5.3c5.1,25.9,10.4,51.7,15.8,77.6c0.8,3.9,0.8,6.3-4.3,5.6C340.1,493.7,336.6,494,333.1,493.9z"/>
<path :style="{fill:'rgba(255, 182, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M231,382.1c12.7,0,25.3-0.2,38,0.1c4.3,0.1,5.4-1.4,5.2-5.5c-1.1-16.5-1.5-33.1-3-49.6
	c-0.6-6.6-0.6-13.3-0.8-19.9c-0.4-9.6-1-19.2-1.4-28.8c-0.9-20-2.2-40.1-3-60.1c-0.5-11.6-1.3-23.1-1.9-34.7
	c-1-19.7-2.2-39.4-3-59.1c-0.5-12.1-1.8-24.1-1.9-36.2c7-0.7,6.8-0.7,7.2,6.4c1.4,25.9,3.1,51.8,4.5,77.6
	c0.8,14.3,1.5,28.6,2.3,42.9c1.9,34.9,3.8,69.8,5.7,104.7c1.2,21.9,2.2,43.9,3.5,65.8c0.2,4-1.1,4.7-4.7,4.6
	c-13.6-0.2-27.3-0.1-41-0.1C229,390.1,229,390.1,231,382.1z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M42,378.2c-11.9-9.5-19.1-21.9-22.5-36.6c-0.8-3.4-0.2-4.7,3.6-4.7c35.3,0.1,70.7,0.1,106,0.2
	c1,2.6-0.7,4.5-1.7,6.5c-11.7,21.4-29.9,33.7-53.8,38c-7.6,1.4-15.2,1.2-22.8-0.1C47.7,380.7,44.6,380,42,378.2z M389.1,378.1
	c-12.2-9.8-19.3-22.5-22.6-37.6c-0.7-3.2,0.5-3.7,3.2-3.7c35.5,0.1,71,0.1,106.5,0.2c0.9,2.5-0.5,4.6-1.5,6.5
	c-14.3,27.3-46.7,43.1-77.2,37.7C394.4,380.7,391.6,379.8,389.1,378.1z M446.5,114.5c-8.4,2.1-16.4,1.8-24.3,2.3
	c-42.5,2.9-85,5.6-127.6,8.4c-3.3,0.2-7.4,2.1-9.7,0.3c-2.3-1.9-0.6-6.3-1.1-9.5c0-0.2,0-0.3-0.1-0.5c-1.2-14.4-2.7-11.8,10.8-11
	c28.6,1.7,57.1,3.7,85.7,5.6C402.1,111.6,424,113,446.5,114.5z M65.2,114.6c27.7-1.9,54.2-3.7,80.6-5.4c26.1-1.7,52.2-3.3,78.2-5.2
	c4.2-0.3,5.7,0.7,5.1,5c-0.7,4.6-0.9,9.3-0.9,13.9c0,2.9-1.2,3.2-3.6,3c-20.8-1.5-41.5-2.8-62.3-4.2c-23.1-1.6-46.2-3-69.2-4.7
	C84.2,116.4,75.2,116.5,65.2,114.6z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M389.1,378.1c36,10.4,73.2-8.2,87.1-41.2c4.9-1.3,9.9-0.6,14.8-0.5c4,0.1,2.3,3.5,1.9,5.3
	c-2.3,9.8-6.3,18.8-12.7,26.8c-22,27.4-61.2,32.4-89.3,11.3C390.1,379.4,389.6,378.7,389.1,378.1z M42,378.2
	c22.6,5.8,43.6,2.5,62.9-10.9c11.1-7.7,18.8-18.1,24.2-30.3c4.9-1.4,9.9-0.5,14.8-0.5c3.4,0,2.2,2.8,1.9,4.5
	c-2.1,10.5-6.7,19.8-13.3,28.1c-21.2,26.3-60.3,31.6-87.6,11.8C43.8,380.1,42.9,379.1,42,378.2z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M273.1,66c-12.1,8.7-26.9,7.9-36.5-2.1c-9.5-9.8-10-24.5-1.2-35.8c13.3-9.5,34.8-1.6,40.3,14.8
	C278.2,50.9,279,58.8,273.1,66z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M231,382.1c1.3-24.2,2.5-48.5,3.8-72.7c0.8-15.4,1.5-30.9,2.3-46.4c1.2-21.4,2.5-42.8,3.7-64.3
	c0.8-14.9,1.5-29.9,2.3-44.8c1.1-20.8,2.1-41.5,3.1-62.3c0.1-3,0.7-4.6,4.4-3.6c2.7,0.7,5.6,0.2,8.5,0.3c1.2,1.1,1.4,2.6,1.5,4.1
	c0.6,13.1,1.4,26.2,2.1,39.4c0.9,16.3,1.7,32.6,2.6,48.8c0.8,14.6,1.6,29.2,2.3,43.9c0.9,16.8,1.7,33.6,2.7,50.3
	c0.8,14.3,1.5,28.6,2.3,42.9c0.9,16.8,1.5,33.6,2.8,50.3c0.3,3.7,0.4,7.3,0,11c-0.3,2.7-1.7,4.5-4.4,4.5c-12.5,0.4-25,0.5-37.4,0
	C232.6,383.3,231.7,382.9,231,382.1z M273.1,66c4.2-9.7,4.4-19.2-1.7-28.3c-6.8-10.2-19-14.6-30.9-11.2c-1.7,0.5-3.5,1.1-5.2,1.7
	c7.2-8.6,16.3-11.7,27.1-9.1c11.1,2.7,18,10,20.2,21C284.7,50.3,281.9,59.4,273.1,66z"/>
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
                                    <button :style="{background:'rgba('+getterLibraBg1+')'}" @click="ShowElement(getterLibraBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLibraBg2+')'}" @click="ShowElement1(getterLibraBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLibraBg3+')'}" @click="ShowElement2(getterLibraBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLibraBg4+')'}" @click="ShowElement3(getterLibraBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLibraBg5+')'}" @click="ShowElement4(getterLibraBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLibraBg6+')'}" @click="ShowElement5(getterLibraBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLibraBg7+')'}" @click="ShowElement6(getterLibraBg7)" :class="this.ValueId+'_color7btn'"></button>
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
        var Libra= [
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
            var randomNumber = Libra[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Libra[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Libra'){
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
                getterLibraBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Libra') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLibraBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Libra') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLibraBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Libra') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLibraBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterLibraBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLibraBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLibraBg7: {
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
                            name:'Libra',
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