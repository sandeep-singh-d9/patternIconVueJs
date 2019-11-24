<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.8);">
                  <path style="fill:#A86AB5; transform:scale(0.2)" :class="ValueId+'_color2'" d="M476,356.5c2.3,2.5,5,4.3,8.3,5.2c4.4,1.5,8.6,3.4,12.1,6.5c0.8,1,2,1.2,3.2,1.2
    c3.8,0.3,7.2,1.9,10.6,3.3c0.5,0.3,1,0.5,1.4,0.8c5.8-0.1,11.4,1.6,17.1,2.5c2.2,1.9,5-0.2,7.7,1.2c-5.6,8.7-14.1,11.8-23.7,12.7
    c-17.9,1.6-34.7-3.5-51.2-9.5c-24.2-8.9-46.4-21.9-68.8-34.3c-13.2-7.4-27.3-8.7-42-6c-3.3,0.6-4.4,2-4.1,5.4
    c0.7,6.3,0.4,12.5-2.7,18.5c-2,3.8-1,8.2-0.1,12.3c3.1,14.7,4.2,29.3-0.2,43.9c-1.2,3.8-0.3,7.8,0.5,11.8c2.9,15.3,1,17.6-14.2,17.5
    c-7.1-0.1-14.1-0.1-21.2,0c-4.5,0.1-5.3-1.8-3.9-5.7c1.4-3.8,3-7.4,5.7-10.4c8-8.8,11-19.9,13.2-31.1c2-10.2-3.5-19.4-13.2-23.2
    c-4.6-1.8-7.6-4.8-9.1-9.4c-2.2-6.9-4-13.8-6-20.7c-6.7,2.6-13.5,4.8-20.4,7c-6.6,2.1-13.1,0.4-19.7,1.2c-6.9,0-13.7,0-20.6,0
    c-10,1-19.6-0.7-29.1-3.9c-5-1.7-9.9-3.3-14.6-5.5c-10.4,3.2-14.3,11.1-14.5,21c-0.2,7.4-3.6,12.6-8.6,17.4
    c-6.5,6.3-13.9,11.6-21,17.2c-4.5,3.6-7.4,7.6-8,13.9c-1.7,18.3-2.1,18.3-20.5,18.3c-5.2,0-10.4,0-15.7,0c0.2-3.1,1.5-5.4,3.1-7.2
    c11.3-12.9,18.2-28.6,27.3-42.9c2-3.2,3.7-6.6,5.8-9.8c8.3-12.5,6.7-25.3,1.5-38.3c-0.6-1.5-1.6-2.3-2.8-3.1
    c-11.6-7-23.4-13.7-34.7-21.2c-8.5-5.6-17.2-4.3-26.5-3.3c-15.4,1.6-31,1.7-46.5,2.3c-1.4,0.1-2.9-0.2-4.2-0.7
    c-3.5-1.4-8.3-2.5-8.7-6.4c-0.2-2.5,5-2.5,7.6-3.9c2-1.1,4.2-1.8,6.1-3.5c-5.4,0.5-10.8,1.1-16.9,1.7c3.3-9.1,6.4-17.4,14.5-22.8
    c7.5-5,15.3-9.6,23-14.3c7.1-4.3,14.4-5.4,22.4-3.5c5.8,1.4,11.6,2.7,17.4,4c1.1-0.7,2.2-1.4,3.5-1.2c6.8,0.6,13.1-2.1,19.6-2.9
    c1.2,0.1,2.3-0.1,3.2-1.1c2.9-3.1,6.9-4.5,10.4-6.5c7.8-4.3,15-9.1,20.1-16.5c0.5-0.8,1.3-1.2,2.1-1.6c3.2-1.2,4.7-3.9,6.3-6.6
    c4.1-6.3,9.1-11.9,14.6-17c6.9-6.3,13.8-12.5,21.5-17.8c1.6-1.1,3.1-2.5,5.3-2.3c1.6-0.3,3-1.1,4.2-2.2c3.6-4.5,9.1-5.8,14-7.8
    c17.4-7.2,35.6-8,54.1-6.1c2,1.6,4.4,1.5,6.7,1.8c1.7-1.2,3.5-0.4,5.2-0.2c21.2,3.1,39.9,12,57.1,24.5c0.7,0.5,1.4,1.2,1.7,2
    c0.6,2.2,2.6,2.9,4.3,3.9c4.3,1,6.7,4.7,9.9,7.3c13.4,10.9,24.1,24.3,34.5,37.9c0.7,0.9,1.3,1.8,1.3,2.9c0.2,1.5,1,2.6,2.3,3.4
    c3.3,1.9,4.7,5.4,6.6,8.4c6.5,10.1,12.7,20.4,19.5,30.3c1,1.5,2.2,2.9,2.3,4.8c0.3,2.2,2.1,3.5,3.2,5.2c1.2,0.5,2.3,1.1,3.1,2.2
    c6.5,9.3,14.6,17.4,21.6,26.3c0.4,1.9,1.9,2.9,3.3,3.9C461.1,343.2,468.5,349.9,476,356.5z"/>
<path style="fill:#814F8E; transform:scale(0.2)" :class="ValueId+'_color3'" d="M255.3,357.2c4.2-2.3,8.8-0.4,13.1-1.4c8.2-1.9,16.3-3.9,24-7.2c1-0.4,2.3-1.8,2.9,0.5
    c-2.8,11.5-4.3,23.3-5.2,35.1c-0.8,10.8-0.6,21.6-0.2,32.4c0.3,8.7-4.8,13.7-13.3,13.7c-7.9,0-15.9-0.1-23.8,0.1
    c-4.6,0.1-4.9-2-3.4-5.3c1.2-2.7,3.1-4.9,5.4-6.7c6.1-4.7,9.2-11.1,9.9-18.5c1.1-11.8,2.3-23.6-0.7-35.5
    C262.8,359.2,261,356.2,255.3,357.2z M202.9,378.6c4.4,12,13.2,18.4,25.2,21.4c15.3,3.8,19.6,0.5,19.8-15.3c0-0.4,0-0.7,0-1.1
    c0.1-3.6-1.8-5.4-5.2-5.6c-2-0.1-4,0-5.9,0.2c-5.3,0.6-7.4-1.3-7.2-6.6c0.1-3.4,0.8-6.8,0.7-10.2c-0.2-3.6,1.6-4.4,4.5-4.2
    c-0.8-0.3-1.6-0.9-2.5-0.9c-8.5,0.2-16.6-2-24.8-4.1c-5.5-1.4-10.4-5.3-16.4-4.5C195,358.1,199.1,368.3,202.9,378.6z"/>
<path style="fill:#5F3769; transform:scale(0.2)" :class="ValueId+'_color1'" d="M340.9,201.1c-7-2.7-12.4-7.8-18.8-11.4c-12.2-6.9-25.3-10.9-38.9-13.6c-2.1-0.4-4.2-0.9-6.3-1.3
    c0.3-8.5,1.1-16.9,3.3-25.1c1.9-7.2,6.2-11.9,12.9-14.9c15-6.6,30.9-9.7,46.9-12.5c1.6-0.3,2.7-0.2,3.6,1.4
    c9,16.1,15.1,32.8,11.8,51.6C353.6,185.6,348.8,194.2,340.9,201.1z M262,135.3c-9.1-12.2-21.3-20.3-34.8-27
    c-2.1-1.1-3.3-0.4-4.6,1.1c-10.9,11.9-21.5,23.9-29.3,38.1c-3.4,6.3-4.1,12.5-1.6,19.2c2.6,7.2,6,13.9,10.4,20.1
    c20-10.7,41.4-14.7,63.9-13.1c1.5,0.1,2.9-0.1,4.2-0.8C274,159,270.4,146.5,262,135.3z M405.8,241.4c8.8-8,12.3-17.9,11.8-29.6
    c-0.4-9-1-18-2.5-27c-1.3-8.2-1.1-8.4-9.1-9.3c-23.4-2.7-48.9,6.2-60.9,29.6c0.5,0.6,0.8,1.2,1.4,1.7c10.3,8.3,20,17.1,28.4,27.4
    c5.2,6.4,10.7,12.7,16,19C396.4,249.9,401.1,245.7,405.8,241.4z M174.3,168.5c-9-3.4-18.3-3.8-27.8-3.5c-3.2,0.1-4.5,1.3-5,4.2
    c-1.1,6-2,12.1-3.4,18.1c-3.8,16.9,1.2,29.8,16.8,38.2c0.5,0.3,1,0.4,1.5,0.6c4.4-2.9,7.1-7.5,10.7-11.2
    c9.4-9.7,19.8-18.1,30.7-25.9C192.5,179.3,184.7,172.5,174.3,168.5z M441.7,275.4c0.9-6.4,1.8-12.9,2.8-19.3c0.3-2,0.1-3.4-2.2-4.2
    c-17.1-5.6-33.6-6.6-49.1,4.5c3.2,5.2,6.2,10.4,9.5,15.5c6.1,9.4,11.4,19.4,18.9,28C433.1,295.7,440,287.7,441.7,275.4z
     M120.6,222.4c-2,0-3.7-0.1-4.4,2.7c-2.5,10.9-4,21.7,1.2,32.3c8.6-3.2,16.4-7.9,23.6-13.5c3.7-2.9,7.3-6.4,9-11.1
    C141.6,225.6,131.7,222.3,120.6,222.4z M459.5,310c-0.1-1.6-0.1-3.2-0.1-4.9c-0.2-6.6-0.7-7-7.5-7.5c-10-0.7-18.7,2.7-27.1,7.6
    c4,5.2,7.5,10.9,12,15.6c4.2,4.3,6.8,10.1,12.6,12.8C457.5,327.7,460.3,319.7,459.5,310z M479.2,336.1c-0.1-4.3-2.4-5.6-6.1-5.7
    c-7.6,0-14.5,2.1-20.4,7.1c7,7.3,14.4,14,23.3,19C479.7,350.1,479.4,343.2,479.2,336.1z M506,329.5c0.3-1.4,1.4-3.5-0.7-4.2
    c-1.7-0.6-2.1,1.6-2.7,2.8c-6.1,11.2-12.2,22.4-18.3,33.6c3.3,3.5,7.7,5,12.1,6.5C499.6,355.3,502.8,342.4,506,329.5z M98.1,238.8
    c-3.5,7.9-6,15.7-7,23.9c8,0.4,16,0.6,23.2-4.2C110.7,250.7,104.9,244.7,98.1,238.8z M541.7,353c0.6-1.2,2.3-2.6,1-3.8
    c-1.6-1.6-2.8,0.6-3.9,1.5c-9.1,7.6-18.2,15.2-27.2,22.9c5.6,1.9,11,4.3,17.1,2.5C533.1,368.4,537.4,360.7,541.7,353z M524.4,344.8
    c0.7-1.3,2.5-3.1,0.8-4.3c-1.8-1.3-2.7,1.2-3.6,2.2c-7.4,8.8-14.7,17.8-22.1,26.7c3.2,2.2,6.6,3.7,10.6,3.3
    C514.9,363.4,519.7,354.2,524.4,344.8z"/>
<path style="fill:#FDF9F6; transform:scale(0.2)" :class="ValueId+'_color5'" d="M65.8,279.4c-1.2,5.7-4.4,9.8-10.3,9.8c-5.9-0.1-9.8-4.3-9.7-10c0.1-5.8,4.2-9.8,10.1-9.8
    C61.7,269.3,64.9,273.5,65.8,279.4z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color4'" d="M59.5,279.3c-0.8,3.9-3,6.7-7,6.7c-4.1,0-6.7-2.9-6.7-6.9c0.1-4,2.9-6.7,6.9-6.7
    C56.7,272.5,58.9,275.3,59.5,279.3z"/>
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
                                    <button :style="{background:'rgba('+getterStegosaurusBg1+')'}" @click="ShowElement(getterStegosaurusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStegosaurusBg2+')'}" @click="ShowElement1(getterStegosaurusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStegosaurusBg3+')'}" @click="ShowElement2(getterStegosaurusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStegosaurusBg4+')'}" @click="ShowElement3(getterStegosaurusBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                     <button :style="{backgroundColor:'rgba('+getterStegosaurusBg5 +')'}" @click="ShowElement4(getterStegosaurusBg5 )" :class="this.ValueId+'_color5btn'"></button> 

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStegosaurusBg6+')'}" @click="ShowElement5(getterStegosaurusBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStegosaurusBg7+')'}" @click="ShowElement6(getterStegosaurusBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStegosaurusBg8+')'}" @click="ShowElement7(getterStegosaurusBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStegosaurusBg9+')'}" @click="ShowElement8(getterStegosaurusBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStegosaurusBg10+')'}" @click="ShowElement9(getterStegosaurusBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Stegosaurus= [
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
            var randomNumber = Stegosaurus[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Stegosaurus[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Stegosaurus'){
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
                getterStegosaurusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stegosaurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stegosaurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stegosaurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterStegosaurusBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStegosaurusBg10: {
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
                            name:'Stegosaurus',
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