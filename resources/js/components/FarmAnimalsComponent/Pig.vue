<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#790000; transform:scale(0.2)" :class="ValueId+'_color1'" d="M166.6,300.7c-11,22-28.1,37.7-47.9,50.9c-4,2.6-5.2,5.4-4.3,10.4c2.5,12.6,7.6,23.6,16.6,33
	c6.1,6.4,10.5,14,11.9,22.9c1.1,6.8-0.8,12.6-6,17.1c-6.6,5.7-14.3,8.8-22.9,8.5c-8.5-0.3-17.2-0.5-25.5-2.3
	c-20-4.5-35.8-27.8-28.4-44.4c0.9-2.1,0.1-3.9-0.4-5.8c-3.1-12-9-22.9-15.3-33.4c-4.5-7.5-5.7-14.3-0.8-22.7c6.1-10.6,7.8-22.8,8-35
	c0.1-3.8-0.4-7.8-3.1-10.6c-13.1-13.6-18.7-30.8-22.4-48.5c-5.5-26.2-3.8-52.1,6.3-77.2c4.2-10.3,10-19.8,16.6-29.2
	c-7.2-2-13.7-4.2-18.8-9.1C18.3,114,17.2,95.9,27.4,82.2c9.7-13,29-17.2,42.3-9.4c4.9,2.9,6.7,7.8,4.6,12.7
	c-2.3,5.3-7.5,7.5-13.3,5.6c-10-3.3-16.6-0.7-19.4,7.5c-2.2,6.6,0.3,11.9,7,14c9.7,3,18.4,2.7,27.5-3.9c20.4-14.9,44.2-20.9,69-24
	c23.1-2.9,45.6,1.5,68.3,3.9c30.7,3.3,61.5,3.8,92.4,3.5c20.9-0.2,41.8-1.4,62.6,0.9c15,1.7,28.7,8,43,12
	c21.1,5.9,41.5,13.7,60.9,23.9c3.3,1.7,5.7,1.3,8.8-0.3c14.2-7.7,28.6-14.8,44.9-17.1c15.4-2.1,29.7,0.3,42.4,9.9
	c8.8,6.6,10.8,16.2,5,25.8c-5,8.4-12.7,14.2-20.3,19.9c-3.5,2.6-8.6,4.8-9.7,8.2c-1,3,2.6,7.5,4,11.3c3.4,8.7,6.3,17.8,6,27.1
	c-0.4,10.9,4.4,19.1,11.1,26.7c7,7.9,14.1,15.7,21.2,23.4c5.1,5.5,5.9,11.6,3.8,18.8c-3.8,12.5-10.7,22.5-21.4,29.9
	c-8.4,5.8-17.6,7.2-27.2,3.1c-8.7-3.7-17.3-3.6-26.1-0.7c-22.8,7.4-44,4.1-63.3-10.1c-3.1-2.3-5.4-2.5-9-1.2
	c-14,5.2-28.4,5.5-42.7,1.2c-2.2-0.7-4.5-2.3-5.5,1.6c-5.2,19.7-13.6,38.7-11.8,59.7c0.4,4.3,0.6,8.8,1.5,13c1,4.6,2.9,8.6,7.1,11.9
	c10.4,8.3,13.8,19.6,11.7,32.5c-1.6,9.5-9.6,16.1-21.6,17.3c-7.9,0.8-15.9,1.3-23.8,1.2c-15.6-0.2-28-13.9-26.4-29.9
	c1-9.3-2-17.6-3.7-26.3c-0.7-3.6-3.2-6.4-6.6-8.1c-5.3-2.7-7.2-6.9-6.4-12.8c2.2-16.8-0.4-32.7-8-48c-1.5-3.1-2.5-3.6-5.5-2.1
	c-23.1,11.5-47.5,15.3-73.1,11.7c-20.2-2.9-38.7-10.3-55.3-22.3C170.5,303.4,168.7,302.2,166.6,300.7z"/>
<path style="fill:#B95529; transform:scale(0.2)" :class="ValueId+'_color4'" d="M192.2,212.5c23.2,10.3,47.3,17.8,72.4,21.9c13.3,2.2,26.6,3.7,40.1,3c-5.6,14-8,28.5-7.1,43.6
	c0,0.6,0,1.2,0,1.8c0.4,12,0.5,12-11,16.5c-36.4,14.3-70.7,10.4-103.1-11.4c-1.3-0.9-2.5-2-3.8-2.9c-3.9-2.7-4.3-5.5-2-10
	C187.9,255.4,191.9,234.4,192.2,212.5z M122.7,322.8c13-10.3,23.7-22.4,28.5-38.7c1.3-4.2,3.1-8,5.2-11.9
	c8.4-15.3,13.8-31.5,14.6-49.1c-0.4,0.8-1,1.7-1.3,2.6c-8.7,22.7-20.5,43.6-38.5,60.4c-6.5,6.1-11.3,12.4-12.4,21.8
	c-1.2,11.1-9,19.5-14.6,28.7C110.9,332.8,116.6,327.5,122.7,322.8z M449.4,263.7c0,6.7,1.4,13.6,6.1,18.1
	c10.3,9.8,22.1,17.3,37.4,16.5c4.2-0.2,5.8-0.6,4.9-5.7c-1.3-7.3-3.6-15.6,5.2-20.6c-11.5,0.7-22.5-2.2-32.8-6.6
	c-7.2-3.1-15.6-5.1-20.5-12.4C449.6,256.6,449.4,260.1,449.4,263.7z M400.8,279.6c-0.6,2.5-0.3,4.2,2.4,5.1c9,3,18.1,3.9,27.4,1.8
	c2.7-0.6,3.2-1.6,2.2-4c-3.5-8-4-16.4-3.9-25c-3.1,0-6.4,0.5-9.4-0.1c-3.3-0.7-7.6,0.7-9.7-3.5C405.5,262.1,402.9,270.7,400.8,279.6
	z M91.1,420.8c9.1,2.2,18.5,1.8,27.7,1.3c3.8-0.2,4.4-2.3,2.7-5.6c-2.9-5.3-6.6-9.8-11.4-13.4c-9.6-0.3-19.3,1-28.9-1.2
	C77.6,407.8,83.1,418.9,91.1,420.8z M517.6,286.6c0.1,3.9,1.1,6.6,6.4,5.9c7.3-0.9,14.6,0.8,21.6,3.3c8.2,2.9,10.3,2.3,16.2-4.7
	c-14.8-8.7-30.5-15.1-47.7-16.8C516.7,278,517.4,282.2,517.6,286.6z M351.5,414.5c0.1,4.1,1.9,6.3,6.4,6.8c6.5,0.8,13-0.5,19.4-0.2
	c5.3,0.3,5.8-3.1,5-7c-1.1-5.2-5-8.3-9.3-11c-7.1-0.5-14.3,1.3-21.4-1.1C351.6,406.2,351.4,410.3,351.5,414.5z"/>
<path style="fill:#FFD3B7; transform:scale(0.2)" :class="ValueId+'_color2'" d="M479,171.8c-3.3,0.5-6.2-0.6-9.1-2.2c-25.7-14.8-54.6-21.3-82.2-31.1c-15.8-5.6-32.2-6.1-48.7-6
	c-29.3,0.2-58.5,0.6-87.8-0.2c-19.3-0.5-38.7-2.2-57.9-5.2c-37.7-6-73.9-2.2-107.3,17.6c-14.2,8.4-25.3,20.3-34.4,34
	c-1,1.5-1.3,4.1-4.1,3.9c9.8-33.4,30.6-57,63.5-69.1c24.3-8.9,49.3-11.2,75.1-7.4c38.4,5.6,77.2,7.3,116,6.5
	c17.7-0.4,35.4-0.2,53.2-0.2c13.7,0,26.5,4.8,39.4,8.7c25.9,7.8,51.5,16.3,75.1,29.9c5.3,3,10,1,14.7-1.3
	c12.3-6.1,24.2-12.8,37.6-16.5c9.7-2.6,19.2-2.8,28.5,1.4c3.8,1.7,5.2,3.5,1.4,6.6c-4.3,3.5-7.8,7.9-12.8,10.6
	c-2.6,1.2-5.3,1.3-8.1,1.6c-11,1.2-21.3,4.5-31.2,9.3c-2.5,1.2-4.9,2.6-7.9,2.2C486,163.9,481.6,166.2,479,171.8z M566.1,272.8
	c-3.7-3.2-6.8-7.1-10.1-10.8c-9.3-10.5-18.9-20.8-22.1-35.2c-2,9.9-0.7,19.2,5,27.6c4.1,6,9.4,11.2,14.1,16.7
	c4.2,4.8,10.3,7.5,13.6,13.1C570.1,280.2,570.7,276.7,566.1,272.8z"/>
<path style="fill:#FFB594; transform:scale(0.2)" :class="ValueId+'_color3'" d="M104.1,336.6c-12.9,9.2-12.1,21.8-8.7,35.1c2.9,11.4,8.2,21.7,14.7,31.5c-6.7,3.3-23.5,2.7-28.9-1.2
	c0-16.6-5.6-31.5-14.1-45.3c-4.4-7.1-5.7-13-2.3-21.1c5.8-13.8,8.5-28.4,5.9-43.5c-1-5.9-3-11.5-6.8-16.3
	c-17.6-22-22.8-47.3-19.8-74.8c0.7-6.3,1.2-12.6,3.5-18.5c3.6-5.2,6.6-10.7,10.6-15.6c20.1-24.5,46.8-36.5,77.4-41.9
	c22.1-3.9,43.9-1.6,65.8,1.4c19.5,2.7,39.1,4.3,58.8,4.4c27.7,0.1,55.3,0.2,83,0c15.6-0.1,30.9,1.2,45.8,6.4
	c23.3,8.1,47.2,14.3,69.7,24.7c6.8,3.2,13.3,7,20.2,10c-1.1,8,3.2,12,10.1,14.6c10.3,4,20.8,4.8,31.5,2.2c3.8-1,5.4,0,7,3.5
	c5.2,11.1,5.5,22.9,6.3,34.7c-1.1,16.9,6.6,29.9,18.3,41.2c3.4,3.3,6.7,6.7,10.4,9.7c2.1,1.6,4.7,3.2,4.1,6.6
	c-1,2.8-2.5,5.1-4.9,6.9c-1.2,0.5-2.3,0-3.4-0.5c-13-6.8-26.7-11.8-41.1-14.8c-1.2-0.2-2.3-0.7-3.2-1.5c-3.2-2.7-7-2.6-10.9-2.3
	c-3.9,1.8-8,1.7-12.2,1c-12.9-2.2-24.7-7-36.1-13.2c-2.8-1.5-4.8-3.5-5.1-6.8c-1.1-5.6-4.6-8.5-10.3-8.5c-6,0-8.6,3.9-10,9
	c-0.3,1.3-0.4,2.7-0.6,4.1c-6,3.6-12,1.8-17.9-0.2c-1.5-0.5-1.9-1.9-1.3-3.4c-0.3-5.8-2.4-10.6-8.8-11.7c-6.5-1.1-9.5,3.1-12.2,8.3
	c-5.5,10.9-7.8,22.9-10.5,34.6c-4.1,18-10.3,35.3-14.2,53.3c-3.2,15-2.5,30-0.4,44.9c1.1,7.4,5,13.7,9.4,19.7
	c-6.4,3.2-17.2,2.7-21.4-1.1c-2.9-13-3.7-26.9-14.5-36.9c-1.8-1.6-1.6-3.9-1.5-6.1c0.2-17.1-3.8-33.1-10.4-49
	c-8.8-20.9-10.7-42.5-1.9-64.2c3.4-8.4,2.1-13.9-3.8-16.4c-6-2.5-10.9,0.1-14.8,8c-6,3.2-12.5,1.9-18.7,1.4
	c-29.9-2.7-58.9-9.6-86.6-21.3c-2.8-1.2-5.3-2.6-7.3-4.9c-1.3-1.3-0.8-3-0.9-4.5c-0.3-6.5-3.8-10.1-9.8-10c-6,0.1-10,4.7-9.9,10.9
	c0,4.7-0.4,9.4-0.6,14.1c-5.3,22-17.7,40.1-31.8,57.1c-1.5,1.8-3.3,3.5-5.1,5.1c-7.6,6.5-12.7,13.9-14.3,24.4
	C118.1,320.2,112,329.1,104.1,336.6z M519.7,167c6.9-4.2,13.5-9.6,19.6-15.2c-17.2-1-32.4,5.3-47.2,13.1
	C501,170.4,511,172.3,519.7,167z"/>
<path style="fill:#790000; transform:scale(0.2)" :class="ValueId+'_color1'" d="M495.6,207.4c7.1,0,18.2,10.2,18.4,16.5c0.2,4.1-1.1,7.4-4.9,9.5c-3.9,2.2-7.8,1.9-11.2-0.8
	c-3.6-2.8-6.9-6.1-9.9-9.5c-2.8-3.1-2.6-7.1-0.9-10.6C489,209.2,491.9,207,495.6,207.4z"/>
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
                                    <button :style="{background:'rgba('+getterPigBg1+')'}" @click="ShowElement(getterPigBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPigBg2+')'}" @click="ShowElement1(getterPigBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPigBg3+')'}" @click="ShowElement2(getterPigBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPigBg4+')'}" @click="ShowElement3(getterPigBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPigBg5+')'}" @click="ShowElement4(getterPigBg5)" :class="this.ValueId+'_color5btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterPigBg6+')'}" @click="ShowElement5(getterPigBg6)" :class="this.ValueId+'_color6btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterPigBg7+')'}" @click="ShowElement6(getterPigBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Pig= [
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
            var randomNumber = Pig[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Pig[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Pig'){
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
                getterPigBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pig') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPigBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pig') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPigBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pig') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPigBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPigBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPigBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPigBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },

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
                            name:'Pig',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
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