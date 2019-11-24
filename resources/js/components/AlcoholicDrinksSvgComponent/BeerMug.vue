<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M124.8,592c-0.9-1.8-2.9-1.5-4.3-2c-23.4-8.2-34.8-33.7-24-55.9c13.8-28.6,19.9-58.5,19.8-90.2
	c-0.4-76.7-0.2-153.5,0-230.2c0-4.1-1-6.1-4.9-7.8c-29.1-12.8-45.5-41.9-42-73.8c3.3-30,26.2-54.7,56.6-60.9
	c5.8-1.2,11.8-1.6,17.7-0.9c3.2,0.4,4.8-0.5,6.5-3.4C167,36.8,192.8,22,227.3,22.8c15.3,0.3,29.4,5.3,42.1,14
	c2.5,1.7,4.2,1.8,6.8-0.1c33.6-24,76.5-16.7,100.3,17c2.2,3.2,3.5,2.7,6.3,1.1c21.5-12.1,43.1-11.9,63.4,1.9
	c20.4,13.8,29.1,34,25.3,58.3c-3.8,24.2-18.6,40.2-42,47.6c-3.6,1.1-4.7,2.5-4.5,6.1c0.3,5,0.3,10,0,15c-0.2,3.8,0.9,5,4.8,5
	c13.5,0.1,27-0.8,40.6,0.6c38.8,4,71.9,37.8,72.7,76.8c1,43.2,1,86.4,0,129.5c-0.9,41.1-36.2,75.7-77.3,77.6
	c-11.7,0.5-23.4,0.3-35,0.1c-4-0.1-4.4,1.1-3.8,4.8c2.7,19.2,8.8,37.2,17.1,54.5c12.1,25.1-0.5,51.7-27.6,58.5
	c-0.4,0.1-0.8,0.6-1.2,0.9C318.3,592,221.6,592,124.8,592z M400.7,314.2C400.7,314.2,400.8,314.2,400.7,314.2c0.1-48,0-96,0.2-144
	c0-4-0.8-5.4-5.1-5.4c-37.1,0.2-74.1,0.1-111.2,0c-2.7,0-4.8,0.5-7,2.4c-22.6,19.3-48.2,25.7-77.1,17.9c-2.9-0.8-4.7-0.2-6.7,2.1
	c-12.6,14.5-28.3,23.1-47.6,24.5c-4.9,0.4-6.3,2-6.3,7c0.2,76.2,0.2,152.3,0.2,228.5c0,33.3-6.8,65-21.4,95
	c-6.7,13.7,1.2,26.2,16.6,26.2c90.1,0,180.1-0.1,270.2-0.2c15.5,0,23.1-12.3,16.4-26.1c-14.4-29.7-21.2-61-21.3-93.9
	C400.7,403.5,400.7,358.9,400.7,314.2z M356.3,141.3C356.3,141.2,356.3,141.2,356.3,141.3c18.3,0,36.7,0,55,0c0.4,0,0.7,0,1.1,0
	c21.4-0.6,37.3-17.6,35.9-38.3c-1.4-20.2-19.2-34.9-40-32.5c-8.3,1-16.5,3.7-21.7,10.7c-3.5,4.8-6.9,8.8-13.2,8
	c-6.5-0.7-9-5.3-10.9-11c-11.6-33.2-53-42.7-77.8-18c-9.2,9.2-12.7,9.1-22.9,0.6c-16.3-13.8-35-18-55.5-12
	c-19.5,5.7-32.2,18.9-39.2,37.8c-3,8.1-7.6,10.6-16,8.6c-5.6-1.3-11.3-2-17.1-1.2c-22,3-39.1,20.6-41.3,42.4
	c-2.2,21.9,11.2,42.7,32.1,49.7c21.3,7.2,43.6-1.2,55.8-20.8c5.1-8.2,9.6-9.6,18.6-5.7c10.1,4.4,20.5,6.3,31.4,4.7
	c18.3-2.7,32.4-11.9,42.4-27.4c2.8-4.4,6.5-7,11.9-6.5c5.2,0.5,8.6,3.4,9.9,8.4c0.9,3.3,3.2,2.5,5.3,2.5
	C318.9,141.3,337.6,141.3,356.3,141.3z M519.6,331.2c0-19.8,0.1-39.7,0-59.5c-0.1-27-18-50.2-44.1-57.3c-10.6-2.9-21.4-1.6-32.1-1.8
	c-5.9-0.1-13.8-2-17.2,0.9c-3.9,3.4-0.7,11.5-1.3,17.5c-0.4,3.8,0.7,5.1,4.8,5c9.4-0.3,18.9-0.1,28.4-0.1
	c22.8,0,38.1,15.1,38.1,37.8c0,38.2,0.1,76.4,0,114.5c0,22.3-15.4,37.7-37.7,37.8c-9.8,0-19.6,0.1-29.5-0.1c-3.1-0.1-4.3,0.8-4.1,4
	c0.2,5,0.3,10,0,15c-0.3,3.9,1.3,4.5,4.7,4.5c10-0.2,20,0,30-0.1c33.7-0.1,59.8-26.3,59.9-60C519.6,370.1,519.5,350.6,519.6,331.2z
	 M424.9,331.1c0,22,0.1,44.1-0.1,66.1c0,4,1.1,5,5,4.9c9.4-0.3,18.9-0.1,28.3-0.1c9.9,0,13.9-4,13.9-13.7c0-38.1,0-76.3,0-114.4
	c0-9.9-4.3-14-14.3-14.1c-9.1,0-18.2,0.3-27.2-0.1c-4.9-0.2-5.7,1.5-5.7,6C425,287.4,424.9,309.3,424.9,331.1z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M400.7,314.2c0,44.7,0,89.3,0,134c0,32.9,6.9,64.3,21.3,93.9c6.7,13.8-1,26.1-16.4,26.1
	c-90.1,0.1-180.1,0.2-270.2,0.2c-15.4,0-23.3-12.4-16.6-26.2c14.6-30,21.4-61.7,21.4-95c0-76.2,0-152.3-0.2-228.5c0-5,1.4-6.6,6.3-7
	c19.2-1.5,35-10,47.6-24.5c2-2.3,3.7-2.9,6.7-2.1c28.9,7.8,54.5,1.4,77.1-17.9c2.2-1.9,4.3-2.4,7-2.4c37.1,0.1,74.1,0.2,111.2,0
	c4.3,0,5.2,1.4,5.1,5.4C400.8,218.2,400.8,266.2,400.7,314.2C400.8,314.2,400.7,314.2,400.7,314.2z M211.4,367.4
	C211.3,367.4,211.3,367.4,211.4,367.4c-0.1-38.4-0.1-76.7-0.1-115.1c0-1.9,0.2-3.7-0.2-5.5c-1-5.1-3.6-9-8.9-10.3
	c-4.9-1.2-9.2,0.3-12.3,4.4c-2.3,2.9-2.6,6.4-2.6,10c0,77.3,0,154.5,0,231.8c0,1.3-0.1,2.6,0.1,3.9c0.8,4.7,3.3,8.2,7.9,9.9
	c8.5,3.1,16-3.1,16-13.4C211.4,444.4,211.4,405.9,211.4,367.4z M353.8,367.3C353.8,367.3,353.7,367.3,353.8,367.3
	c-0.1-38.2-0.1-76.4-0.1-114.5c0-11.1-4-16.6-11.9-16.7c-8-0.1-12.1,5.5-12.2,16.4c0,76.2,0,152.4-0.1,228.5c0,1.7-0.1,3.4,0.1,5
	c0.7,5,3.2,8.6,8.1,10.4c8.5,3.1,16-3.1,16-13.4C353.8,444.4,353.8,405.9,353.8,367.3z M282.6,366.7
	C282.5,366.7,282.5,366.7,282.6,366.7c-0.1-38.2-0.1-76.3-0.1-114.5c0-10.6-4-16-11.8-16.1c-8-0.1-12.1,5.5-12.2,16.4
	c0,76.1,0,152.3-0.1,228.4c0,1.8-0.1,3.7,0.2,5.5c0.8,4.9,3.5,8.5,8.4,10c8.3,2.5,15.5-3.7,15.5-13.6
	C282.6,444.2,282.6,405.5,282.6,366.7z"/>
<path :style="{fill:'rgba(255, 255, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M356.3,141.3c-18.7,0-37.4,0-56.2,0c-2,0-4.4,0.8-5.3-2.5c-1.3-5-4.7-7.8-9.9-8.4
	c-5.4-0.5-9.1,2.1-11.9,6.5c-10,15.5-24.1,24.7-42.4,27.4c-10.9,1.6-21.4-0.4-31.4-4.7c-9-3.9-13.5-2.5-18.6,5.7
	c-12.2,19.6-34.5,28-55.8,20.8c-20.9-7-34.3-27.8-32.1-49.7c2.2-21.7,19.3-39.3,41.4-42.4c5.8-0.8,11.4-0.1,17.1,1.2
	c8.4,2,13-0.5,16-8.6c6.9-18.9,19.7-32.1,39.2-37.8c20.5-6,39.2-1.8,55.5,12c10.2,8.6,13.6,8.6,22.9-0.6
	c24.8-24.7,66.3-15.1,77.8,18c2,5.7,4.5,10.3,10.9,11s9.7-3.2,13.2-8c5.1-7,13.4-9.8,21.7-10.7c20.8-2.4,38.6,12.3,40,32.5
	c1.4,20.7-14.5,37.7-35.9,38.3c-0.4,0-0.7,0-1.1,0C393,141.2,374.7,141.2,356.3,141.3C356.3,141.2,356.3,141.2,356.3,141.3z
	 M519.6,331.2c0,19.5,0,38.9,0,58.4c-0.1,33.7-26.2,59.9-59.9,60c-10,0-20-0.1-30,0.1c-3.4,0.1-5-0.6-4.7-4.5c0.3-5,0.3-10,0-15
	c-0.2-3.2,1-4.1,4.1-4c9.8,0.2,19.6,0.1,29.5,0.1c22.2-0.1,37.7-15.5,37.7-37.8c0-38.2,0-76.4,0-114.5c0-22.7-15.3-37.8-38.1-37.8
	c-9.5,0-18.9-0.2-28.4,0.1c-4.1,0.1-5.1-1.2-4.8-5c0.6-6-2.6-14.1,1.3-17.5c3.4-3,11.3-1.1,17.2-0.9c10.7,0.2,21.5-1.1,32.1,1.8
	c26.1,7.1,44,30.2,44.1,57.3C519.6,291.5,519.6,311.3,519.6,331.2z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M211.4,367.4c0,38.5,0,77.1,0,115.6c0,10.3-7.5,16.5-16,13.4c-4.6-1.7-7.1-5.2-7.9-9.9
	c-0.2-1.3-0.1-2.6-0.1-3.9c0-77.3,0-154.5,0-231.8c0-3.6,0.3-7.1,2.6-10c3.1-4.1,7.4-5.6,12.3-4.4c5.2,1.3,7.9,5.2,8.9,10.3
	c0.3,1.8,0.2,3.7,0.2,5.5C211.3,290.7,211.3,329,211.4,367.4C211.3,367.4,211.3,367.4,211.4,367.4z M353.8,367.3
	c0,38.6,0,77.1,0,115.7c0,10.3-7.5,16.5-16,13.4c-4.8-1.8-7.4-5.4-8.1-10.4c-0.2-1.6-0.1-3.3-0.1-5c0-76.2,0-152.4,0.1-228.5
	c0-10.9,4.2-16.5,12.2-16.4c7.9,0.1,11.9,5.6,11.9,16.7C353.7,291,353.7,329.1,353.8,367.3C353.7,367.3,353.8,367.3,353.8,367.3z
	 M282.6,366.7c0,38.7,0,77.4,0,116.2c0,9.9-7.1,16.1-15.5,13.6c-5-1.5-7.6-5.1-8.4-10c-0.3-1.8-0.2-3.7-0.2-5.5
	c0-76.1,0-152.3,0.1-228.4c0-10.8,4.2-16.5,12.2-16.4c7.8,0.1,11.8,5.6,11.8,16.1C282.5,290.4,282.5,328.6,282.6,366.7
	C282.5,366.7,282.5,366.7,282.6,366.7z"/>
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
                                    <button :style="{background:'rgba('+getterBeerMugBg1+')'}" @click="ShowElement(getterBeerMugBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBeerMugBg2+')'}" @click="ShowElement1(getterBeerMugBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBeerMugBg3+')'}" @click="ShowElement2(getterBeerMugBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBeerMugBg4+')'}" @click="ShowElement3(getterBeerMugBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBeerMugBg5+')'}" @click="ShowElement4(getterBeerMugBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var BeerMug= [
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
            var randomNumber = BeerMug[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BeerMug[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BeerMug'){
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
                getterBeerMugBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BeerMug') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeerMugBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BeerMug') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeerMugBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BeerMug') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeerMugBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBeerMugBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'BeerMug',
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