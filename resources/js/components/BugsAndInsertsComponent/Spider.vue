<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path  :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M407.9,0.1c9.8,8.2,16.9,18.7,25,28.4c31,36.9,61.8,74,92.7,111.1c7.4,8.9,7.3,13.3-0.9,21.6
	C490.8,195,457,228.8,423.1,262.6c-2.7,2.6-3.1,4.5-1.4,7.9c3,6.1,5.5,12.5,7.5,19c1.5,4.7,2.8,4.6,6.5,1.9
	c33.1-23.8,66.3-47.5,99.5-71.2c12.1-8.6,24-17.4,36.3-25.8c3.6-2.5,4.6-5.1,4-9.3c-4.5-30.9-9-61.7-13.4-92.6
	c-2.7-18.7-5.5-37.4-7.8-56.2c-1-8.2,4.8-13.8,12.5-13c5.4,0.6,9.1,4.1,10.1,10.4c3.1,20.8,6.1,41.7,9.1,62.5
	c4.5,31.7,8.9,63.3,13.6,95c1.1,7.1-0.8,11.9-6.6,16c-50.4,35.9-100.7,71.9-151.1,107.8c-3.8,2.7-5.6,5.3-4.7,10
	c1.4,7.3,1.5,14.8,1.2,22.2c-0.1,3.5,1,5.7,3.7,7.8c34.5,27.5,68.8,55.2,103.5,82.5c6.6,5.2,9.2,10.5,7.7,19
	c-7.7,44.2-14.9,88.4-22.3,132.7c-1.2,7.3-7,11.8-13.6,10.6c-6.6-1.2-10.4-7.2-9.2-14.6c7.1-42.3,14.1-84.6,21.2-126.9
	c0.4-2.4,0-4-1.9-5.6c-30.2-24.1-60.4-48.2-90.6-72.3c-0.3-0.2-0.7-0.1-1.5-0.2c-2.1,10.4-5,20.7-8.9,30.6c-1.2,2.9,0.4,4.4,1.8,6.2
	c17.4,23.3,34.8,46.6,52.4,69.8c4.3,5.7,4.9,10.8,1.6,17.2c-14.8,29-29.3,58.2-43.7,87.4c-2.4,4.9-5.6,8.5-11.4,8.6
	c-8.8,0.2-14.1-8.6-10.1-17.1c6.1-12.8,12.6-25.5,19-38.2c7.2-14.5,14.5-29,21.7-43.4c1.1-2.1,2-3.8,0.2-6.3
	c-14.5-19.1-28.9-38.3-43.6-57.9c-27.3,41.4-62.5,70.5-114.4,70.4c-51.7-0.1-86.8-28.9-114-70.4c-14.7,19.6-29.2,39-43.8,58.3
	c-1.9,2.6-0.5,4.3,0.5,6.3c13.2,26.3,26.3,52.7,39.5,79c1.3,2.6,2.7,5.2,2.6,8.3c-0.1,5.1-4,10-9,10.9c-5.6,1.1-10.1-1-12.7-6.1
	c-5.7-11.1-11.2-22.3-16.8-33.5c-9.4-18.8-18.7-37.7-28.3-56.5c-3.2-6.2-2.6-11.2,1.6-16.7c17.5-23,34.6-46.2,52.1-69.2
	c2.4-3.2,2.8-5.8,1.3-9.4c-3.6-9-6.1-18.4-7.9-27.9c-2.1-0.4-3,1.2-4.1,2.1c-28.7,22.9-57.3,45.9-86.1,68.7
	c-3.3,2.6-4.3,4.9-3.5,9.3c7.2,41.9,14.1,83.8,21.1,125.7c1.1,6.6-3.3,12.8-9.7,13.7c-6.4,1-12-3.4-13.2-10.4
	c-2.7-15.6-5.3-31.1-7.8-46.7c-4.9-29.4-9.6-58.9-14.7-88.3c-1.2-7,1-11.5,6.3-15.6c35-27.8,69.8-55.8,104.8-83.6
	c2.9-2.3,4.1-4.7,3.9-8.4c-0.4-7.8,0-15.6,1.3-23.4c0.6-3.6-0.7-5.6-3.6-7.7C109.7,280.5,60,245,10.3,209.5
	c-4-2.8-8.2-5.4-10.2-10.2c0-2.7,0-5.5,0-8.2c1.8-23.3,5.8-46.3,9-69.5c3.9-28.2,8.1-56.4,12-84.6c0.2-1.7,0.7-3.5,1.2-5.1
	c2.3-7,8-10.8,14.7-9.6c6.4,1.1,10.5,6.3,10.3,13.5c-0.3,10-2.4,19.8-3.8,29.6c-5.7,39.2-11,78.5-16.9,117.6
	c-0.8,5.1,0.8,8.4,5,11.4c40.1,28.5,80.1,57.1,120.1,85.7c4.3,3.1,8.6,6,12.8,9.2c2.8,2.1,4.4,1.8,5.5-1.7
	c1.7-5.4,3.5-10.8,6.1-15.8c2-3.8,1.2-6.4-1.7-9.3c-10.7-10.5-21.3-21.2-31.9-31.9c-21.7-21.7-43.4-43.4-65-65
	c-1.5-1.5-3.1-3-4.5-4.6c-6.4-7.3-6.7-13.3-0.6-20.9c6.2-7.8,12.7-15.3,19.1-23C122.2,80.2,153,43.4,183.7,6.4
	c2.4-2.9,5.1-5.4,8.8-6.4c2.3,0,4.7,0,7,0c10.1,2.6,13,12,6,20.8c-10.1,12.7-20.8,24.8-31.1,37.4c-23.7,29-48,57.5-72.1,86.3
	c-3,3.6-2.7,6.3,0.6,9.5c28.5,28.4,57,56.8,85.4,85.3c3,3.1,5.1,3.4,7.8-0.4c10.9-15.1,24.5-27.3,40.2-37c3.2-2,3.5-3.6,1.8-7
	c-14.4-27.5-10.5-57.5,10.6-80.2c3.4-3.6,3.2-5.9-0.2-9.2c-5-4.7-10-9.4-14.4-14.6c-7-8.2-5.2-18.1,3.6-22c5.3-2.3,9.9-1,13.9,2.9
	c6.6,6.4,13.1,12.9,19.5,19.5c2.9,3.1,5.7,3.8,9.8,2.5c12.8-4.1,25.8-4.1,38.6,0c4.2,1.3,6.9,0.5,9.8-2.5
	c6.1-6.4,12.3-12.5,18.6-18.7c6.1-5.9,12.6-6.4,18.3-1.6c5.5,4.7,6,12.5,0.8,19c-4.5,5.7-9.9,10.5-15.2,15.5
	c-3.4,3.3-3.5,5.6-0.1,9.2c21.1,22.7,25,52.7,10.6,80.2c-1.8,3.4-1.4,5,1.8,7c15.8,9.7,29.2,22,40.3,37c3.2,4.3,3.9,4.3,8.1,0
	c24.6-24.6,49.2-49.2,73.8-73.7c3.9-3.9,7.6-7.8,11.6-11.6c3-2.8,3.2-5.5,0.5-8.6c-14.8-17.2-29-34.8-43.6-52.1
	c-20.1-23.9-40.3-47.7-60-72c-4.3-5.2-4.6-11.5-1.7-16.3c1.8-3.1,4.8-3.6,7.8-4.5C403.2,0.1,405.6,0.1,407.9,0.1z"/>
<path style="fill:#9A1D17;transform:scale(0.2)" :class="ValueId+'_color4'" d="M412.6,348.2c1.6,2.9,0.5,6.4,2.3,9.2c-0.5,19.5-5.3,38-13.1,55.8c-6.1,14-14.3,26.9-24.9,37.8
	c-19.1,19.6-42,31.5-69.9,33.3c-26.5,1.7-49.9-5.6-70.6-21.7c-19.9-15.4-33.2-35.8-41.8-59.3c-5.3-14.5-8.6-29.4-9.1-44.8
	c2.2-3.1-0.1-7.2,2.3-10.3c3.5,0.7,2.7,3.8,3.3,6c5.3,22.1,13.8,42.6,27.5,60.9c21,27.9,48,44.9,83.7,45.1
	c16.1,0.1,31.2-4.9,44.9-13.2c23.5-14.2,39.5-35,51-59.5c5.1-11,8.6-22.6,11.5-34.3C410,351.3,409.4,348.5,412.6,348.2z
	 M345.7,166.4c-3.8-11.3-9-21.4-18.9-29.2c-25.7-20-54.4-6.5-66.6,15.5c-2.2,4-3.9,8.4-5.8,12.6c-2.4-24.9,12.6-44.9,36.1-49
	C323.4,110.7,349.1,133.2,345.7,166.4z"/>
<path  :style="{fill:'rgba(227, 29, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M185.4,358.5c-2.3-35.6,4.2-69.1,24.1-99.2c17.3-26.1,40.7-44,72.1-49.6c40-7,73.1,6.5,99.2,36.7
	c27.4,31.8,36.4,69.8,34.1,111.1c-4.2-1.7-2.1-5.9-3.7-8.7c-4.3-25-12.9-48.2-27.7-68.9c-13.9-19.5-31.5-34.6-54.5-42.4
	c-31.7-10.8-60.7-4.3-86.5,15.6c-29,22.3-44.5,53.1-52.1,88.3c-0.5,2.5-1,5-1.6,7.4c-0.7,2-0.6,4.1-1,6.1
	C187.6,356.4,188,358.5,185.4,358.5z M345.7,168.8L345.7,168.8c0-0.8,0-1.6,0-2.4c-1.5-13.7-8.6-24.1-19.8-31.5
	c-8.7-5.8-18.2-10.4-29-8.9c-22.3,3.1-37.4,17.3-42.4,39.4c0,1.2,0,2.3,0.1,3.5c1.5,6.2,2.8,12.5,6.4,18c1.8,2.8,3.6,3.5,6.8,2.5
	c6.7-2,13.5-3.8,20.5-4c15.2-0.5,30.4-0.9,45.1,4.2c2.6,0.9,4.3,0.2,5.9-2.2C342.9,181.7,344.3,175.2,345.7,168.8L345.7,168.8z
	 M412.6,348.2c-2.8,8.8-4.8,17.9-7.8,26.7c-7.7,22.3-19.8,42-36.8,58.1c-19.4,18.4-42.5,29.6-69.9,28.7
	c-22.4-0.7-42.3-8.8-59.6-23.4c-27.8-23.4-42.7-53.8-49.8-88.7c-0.1-0.5-0.6-0.9-1-1.4c5.9-35.7,20.5-67,47.5-91.4
	c20.3-18.3,44.5-28,72.2-25.7c22.1,1.8,41.3,11,57.6,25.7C392.1,281.3,406.5,312.6,412.6,348.2z"/>
<path  :style="{fill:'rgba(255, 255, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M311.8,376.7c0,8.6,0.1,17.2,0,25.8c-0.1,8-4.3,12.5-11.4,12.6c-7.5,0.1-11.8-4.4-11.9-12.7
	c-0.1-17-0.2-34,0.1-50.9c0.1-4.5-1.4-5.8-5.7-5.5c-5.6,0.3-11.3,0.1-17,0.1c-7.4-0.1-11.6-4.4-11.5-11.6
	c0.1-6.6,4.5-10.8,11.7-10.8c5.9-0.1,11.7-0.2,17.6,0c3.9,0.2,5-1.3,4.9-5.1c-0.2-9.2-0.1-18.3-0.1-27.5c0.1-8.1,5.1-14.1,11.7-14.1
	s11.6,5.9,11.6,14.1c0.1,9.4,0.1,18.7,0,28.1c-0.1,3.3,1,4.5,4.3,4.4c6-0.2,12.1-0.1,18.1,0c7.4,0.1,11.8,4.5,11.7,11.6
	c-0.1,6.6-4.5,10.8-11.7,10.9c-5.9,0.1-11.7,0.2-17.6-0.1c-3.9-0.2-5,1.3-4.9,5.1C312,359.5,311.8,368.1,311.8,376.7z"/>
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
                                    <button :style="{background:'rgba('+getterSpiderBg1+')'}" @click="ShowElement(getterSpiderBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSpiderBg2+')'}" @click="ShowElement1(getterSpiderBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSpiderBg3+')'}" @click="ShowElement2(getterSpiderBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSpiderBg4+')'}" @click="ShowElement3(getterSpiderBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSpiderBg5+')'}" @click="ShowElement4(getterSpiderBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSpiderBg6+')'}" @click="ShowElement5(getterSpiderBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSpiderBg7+')'}" @click="ShowElement6(getterSpiderBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Spider= [
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
            var randomNumber = Spider[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Spider[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Spider'){
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
                getterSpiderBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Spider') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpiderBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Spider') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpiderBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Spider') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpiderBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSpiderBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpiderBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSpiderBg7: {
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
                            name:'Spider',
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