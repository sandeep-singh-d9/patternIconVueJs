<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.8);">
                  <path style="fill:#96180D; transform:scale(0.2)" :class="ValueId+'_color4'" d="M216.9,253.7c17.1-8.8,34.3-9.1,51.2,0.1c18.4,10,24.3,28.7,15.7,47.7c-1.5,3.2-3.1,6.3-5.3,9.2
    c-1-0.4-1.4-1.3-1.4-2.2c-0.5-6.9-4.7-11-10.5-14c-9.6-4.2-19.1-5-28.2,1.3c-7.2,5-9.8,12.5-10.8,20.7c-0.9,7.5,0.6,14.8,2.4,22
    c0.7,2.6,2.3,4.7,4.3,6.5c3.2,2.9,3.5,6.2,1.9,10.1c-2.3,5.4-6.2,8.7-11.8,10.1c-31.1,7.7-62.8,10.1-94.8,8.5
    c-18.8-0.9-37.4-4.3-55.8-8.6c-4.7-1.1-8.4-3.8-10.7-8.2c-2.9-5.5-2.8-8,1.5-12.4c2.4-2.4,3.7-5.2,4.4-8.5c1.1-5.6,2.1-11.2,1.9-17
    c-0.7-22.1-19-33.6-39.2-24.5c-5.4,3.3-10.3,6.9-10.5,14.1c0,0.9-0.5,1.8-1.6,2c-4.3-6.3-7.6-13.1-8.6-20.7
    c-2.2-18.2,8.5-33.4,28-39.9c14.7-4.8,28.8-3.5,42.5,3.7c8.1,2.7,12.2,9.4,16.1,16.2c0.7,1.2,1.1,2.6,1.7,3.8
    c3.6,8.8,4.9,17.8,2.5,27.1c-2.1,12.5-8.5,22.7-17.3,32c2.5,1.4,5,1.4,7.3,1.7c18.8,2.4,37.8,4.3,56.8,3.9
    c20.2-0.4,40.4-1.7,60.4-5.4c4.1-0.8,4.2-0.9,1.6-4c-6.9-8.3-12.3-17.4-14.1-28.3c-2.2-9.3-1.1-18.4,2.3-27.2
    c3.1-6.9,7.2-13.1,13.3-17.8C213.6,255,214.8,253.4,216.9,253.7z"/>
<path style="fill:#B08B01; transform:scale(0.2)" :class="ValueId+'_color5'" d="M228,380.8c5.6-1.2,10.5-3.9,14.9-7.5c4,10.8,4.2,22.1,4.2,33.3c0.1,11.1-1,22.2-2.5,33.3
    c-0.2,1.5,0.2,3.9-1.9,4.2c-2.7,0.4-5.6,0.8-8.2-0.3c-1.3-0.5-0.3-2.2-0.2-3.4c0.9-11.7,2.3-23.4,1.4-35.2
    C234.9,396.5,232.9,388.2,228,380.8z M55.7,372.7c4.1,4.2,9.1,6.8,14.8,8.2c-5.3,8.5-7.3,17.9-7.6,27.8c-0.3,10.7,0.5,21.3,1.7,31.9
    c0.2,1.4,1.2,4.1-1.7,3.6c-2.8-0.5-7.5,2.6-8.2-2C51.4,419,49.1,395.7,55.7,372.7z M249.4,309.6c0.2-10.1,5.4-15.1,15.6-15
    c1.1,0,2.2,0.2,2.9-0.8c6.8,3.6,10.7,9,10.7,16.9c-3.7,10.1-10.3,14.3-18.6,11.9C253.5,320.7,250.2,316.2,249.4,309.6z M30.7,294
    c0.9,0.8,2,0.6,3.1,0.6c9.5,0.2,14.7,5.2,15.4,15c-1.9,8.4-6.5,13-13.5,13.6c-7.2,0.6-12.2-3.3-16-12.5
    C19.7,302.8,23.7,297.4,30.7,294z"/>
<path style="fill:#DB2A1B; transform:scale(0.2)" :class="ValueId+'_color2'" d="M98.2,273.3c4-9.8,5.6-20.1,6.5-30.5c3.4-36.2-6.7-69.6-20.8-102.2c-6.9-16-16-31-21.9-47.4
    c-2.1-6-4.1-12-4.5-18.3c-0.7-12.4,6-19.4,18.5-19.5c4,0,8,0,12,0.1c9.6,0.3,18.2-2.6,26.1-7.9c3-2,6-3.8,9-5.7
    c7-4.3,14.4-4.5,21.7-1.1c3.1,1.5,5.6,1.4,8.6,0c7.5-3.4,15-3.2,22,1.5c1.5,1,3.3,1.8,4.7,2.9c10.4,7.9,22.1,11.3,35.2,10.3
    c3.7-0.3,7.4-0.4,11.1,0.4c11.2,2.5,15.9,9.7,14.1,21c-2.3,14.4-8.3,27.4-14.8,40.2c-11.5,22.8-21.8,46-27.8,70.9
    c-6.3,26.1-7.3,52.1-0.4,78.2c0.7,2.5,0.9,5.2,2.7,7.3c-3.4,9-4.4,18.2-2.8,27.7c0.8,2.8-1.2,2.7-2.8,2.6c-2.5-0.1-4.9-0.9-7.3-1.3
    c-26.8-5.1-53.5-5.4-80.4-0.4c-1.9,0.4-4.4,1.9-6-0.8C102.9,291.6,101.5,282.3,98.2,273.3z"/>
<path style="fill:#B71F11; transform:scale(0.2)" :class="ValueId+'_color3'" d="M101,301.1c8.1-0.1,15.9-2.9,24-3.2c8.5-0.3,17-1.3,25.7-0.8c8.9,0.5,17.8,0.6,26.6,2.1
    c5.6,0.9,11.2,1.9,16.7,3c1.5,0.3,3,1.4,3.5-1.2c1.8,5.8,3.4,11.8,6.7,17s7,10,11.8,15.2c-44.9,8.6-89.3,8.6-134.5,1
    c5.6-5.9,10.5-11.5,14-18.2C98,311.3,99.4,306.2,101,301.1z"/>
<path style="fill:#FAC800; transform:scale(0.2)" :class="ValueId+'_color1'" d="M216.9,253.7c-7.4,5-13,11.5-16.7,19.7c-2.4-0.3-2.6-2.4-3.1-4.1c-4.9-17.6-6.8-35.4-5-53.7
    c3-31.7,13.5-61.1,27.8-89.3c6.4-12.7,12.7-25.5,17-39.1c2-6.2,3.7-12.5,2-19.1c-1.3-5.3-4.4-8.7-9.6-10.2
    c-4.4-1.3-8.9-1.6-13.3-1.2c-13.5,1-25.7-2.2-36.6-10.5c-8.4-6.4-17.4-8.4-27.3-3.5c-2.3,1.1-4.5,0.6-6.7-0.4
    c-8.3-3.8-16.1-2.8-23.8,2c-7.7,4.9-15.2,10.2-24.5,11.7c-5.4,0.9-10.8,0.4-16.2,0.5c-2.9,0.1-5.9-0.2-8.8,0.4
    C63.2,58.5,58.5,64,58.7,73c0.2,10.3,4.2,19.6,8.1,28.8c5.5,13.3,12.8,25.7,18.6,38.9c9.9,22.6,17.4,45.9,20.4,70.6
    c2.3,19.4,0.8,38.5-4.6,57.3c-0.5,1.7-0.3,4.2-3,4.5c-3.7-8-9.3-14.5-16.6-19.5c7.7-11.9,9.2-25,7.8-38.7
    c-2.6-25.9-12.8-49.4-22.2-73.2c-7.2-18-15.6-35.7-20.3-54.8c-1.6-6.6-2.6-13.3-1.5-20.2c1.3-8.6,14.7-23,23.2-24.9
    c4.4-0.9,8.6-0.3,12.8,1c1.9,0.6,2.8,0.2,3.6-1.5c6.6-13.8,18.7-18.5,32.9-19.2c7.5-0.4,14.8-0.3,22.1-3.5
    c7.8-3.3,16.1-1.8,23.8,1.8c2.5,1.2,4.9,1.6,7.6,1.5c7.3-0.3,14.5-0.1,21.6,2c8.9,2.6,15.9,7.6,20,16c1.3,2.7,2.5,3.4,5.5,2.6
    c10.1-2.7,18.7-0.6,24.4,8.9c0.2,0.4,0.5,0.9,0.8,1.1c11.7,7.7,11,18.9,8.8,30.6c-2.6,13.6-7.9,26.2-13,39
    c-8.6,21.6-18.3,42.8-24.7,65.3c-4.3,14.9-7.6,29.9-5.3,45.6C210.6,240.5,212.8,247.4,216.9,253.7z M30.7,294
    c15.3-10.2,36.6-1.1,40.6,17.3c2.2,10.1,0.5,20-2.1,29.7c-0.7,2.5-2.9,4-4.8,5.5c-2.3,1.9-2.5,3.9-1.6,6.6c1.9,6,5.9,9.9,12,11.1
    c14.1,2.7,28.1,5.8,42.4,7.2c18.7,1.8,37.3,1.9,56,0.7c17.2-1.1,33.9-4.7,50.7-7.8c6.1-1.1,11.5-6.7,12.4-12.9
    c0.2-1.5,0.2-2.9-1.1-3.8c-7.9-5.5-7.7-14.3-8.8-22.4c-0.8-6.5-0.1-12.9,2.5-19.1c6.4-15.3,23.4-20.7,39-12.2
    c-0.1,2.1-1.8,1.8-3.1,1.9c-9.3,0.8-12.1,3-14.4,11.9c-0.2,0.8-0.4,1.5-1.1,2c-5.8-0.7-7.8,0.4-10.1,5.6c-1.3,2.8-1.8,5.8-2.4,8.9
    c-0.8,4.1-0.6,7,3.7,9.9c10.9,7.2,12.8,23.4,4.8,35.5c-0.8,1.3-1.6,2.6-2.4,3.9c-3.6,5.2-8.5,7.8-14.9,7.5c-13,1.4-26,2.9-39.1,4.1
    c-22.9,2.1-45.9,2.3-68.9,1c-15.2-0.8-30.4-2.5-45.5-5c-1.3-0.2-2.8-0.1-4.2-0.1c-6.6,0.3-11.4-2.6-14.8-8.2
    c-6.3-8-8.7-16.8-6.1-26.8c1.5-5.7,4.9-10.3,10.1-13.2c2-1.2,2.7-2.4,2.5-4.8c-0.4-4.3-1-8.5-2.7-12.5c-2.3-5.5-4.4-6.6-10.4-5.8
    c-1.4-1.2-1.4-3-2-4.5c-1.9-5.4-5.7-8.5-11.4-9.2C33.9,295.7,31.6,296.5,30.7,294z M152,93.4c0.3,1.2,0.7,2.3,1,3.5
    c1.9,6.7,1.9,6.3,8.9,6.8c4.6,0.3,6.4-1.4,7-5.5c0.2-1.6,1-3.2,1.6-4.8c1.4-0.9,2.3-0.4,2.9,0.9c0,8.6-0.1,17.2,0,25.9
    c0,2.8-0.8,3.7-3.7,3.7c-13.7-0.1-27.4-0.1-41.1,0c-2.8,0-3.7-0.9-3.7-3.7c0.2-8.6,0.1-17.2,0.1-25.9c0.9-0.8,1.9-0.8,2.8,0
    c0.3,0.8,0.9,1.7,1,2.5c0.6,5.7,3.6,6.8,9.2,7c7.1,0.2,5.8-5.2,7.7-8.6C146.9,91.6,149.2,91.6,152,93.4z M173.4,94.3
    c-1-0.3-1.9-0.6-2.9-0.9c-2.4-1.9-4.3-4.1-3.1-7.4c1-2.7,3-4.4,5.8-4.4c2.9-0.1,4.9,1.6,6,4.2C180.8,89.4,178.8,92.3,173.4,94.3z
     M127.9,94.3c-0.9,0-1.9,0-2.8,0c-5.7-2.2-7.7-5.6-5.5-9.4c1.8-3.2,5.2-4.1,8.2-2.4c3.2,1.9,4.1,5.5,1.9,8.7
    C129,92.2,127.9,92.9,127.9,94.3z M152,93.4c-2.3,0.1-4.8-0.7-6.4,1.8c0-1.2-0.2-2.3-1.1-3.4c-2.7-3.2-2.2-6.3,0.9-8.8
    c2.6-2.2,5.4-2,7.9,0.3c2.5,2.4,2.2,6.3-0.6,9.4C152.5,92.9,152.3,93.1,152,93.4z"/>
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
                                    <button :style="{background:'rgba('+getterThroneBg1+')'}" @click="ShowElement(getterThroneBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterThroneBg2+')'}" @click="ShowElement1(getterThroneBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterThroneBg3+')'}" @click="ShowElement2(getterThroneBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterThroneBg4+')'}" @click="ShowElement3(getterThroneBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterThroneBg5 +')'}" @click="ShowElement4(getterThroneBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterThroneBg6+')'}" @click="ShowElement5(getterThroneBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterThroneBg7+')'}" @click="ShowElement6(getterThroneBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterThroneBg8+')'}" @click="ShowElement7(getterThroneBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterThroneBg9+')'}" @click="ShowElement8(getterThroneBg9)" :class="this.ValueId+'_color9btn'"></button> 

                                     <button :style="{backgroundColor:'rgba('+getterThroneBg10+')'}" @click="ShowElement9(getterThroneBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Throne= [
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
            var randomNumber = Throne[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Throne[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Throne'){
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
                getterThroneBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Throne') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Throne') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Throne') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterThroneBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThroneBg10: {
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
                            name:'Throne',
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