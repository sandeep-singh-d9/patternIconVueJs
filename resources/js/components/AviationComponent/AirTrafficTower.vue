<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   

<path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M210.3,23.1c2.4,9.2,2.2,8.9-6.5,12.3C105.3,73.1,43.1,142.9,23.9,246.8
	c-18.3,99.5,12.2,184.8,85.3,254.4c28.9,27.6,63.2,46.8,101.1,59.3c3.4,1.1,5.3,1.3,6-3.2c0.9-5.7,3-11.1,4.1-16.8
	c0.7-3.6,2.1-4.8,5.9-4.8c12.4,0,12.4-0.1,12.4-12.8c0-64.5-0.1-129.1,0.1-193.6c0-8.1-1.1-15.7-3.5-23.4
	c-7.1-22.8-13.9-45.6-20.4-68.6c-1.6-5.6-3.7-8.8-10-7.5c-2.3,0.4-4.8-0.2-7.2,0.1c-5.2,0.7-7.2-0.8-7-6.6c0.5-15.3,0.3-30.7,0.1-46
	c-0.1-4,1.2-5,5-5c4.7,0,10.9,2.4,13.6-1.1c2.2-2.9,0.6-8.8,0.6-13.4c0-6.2,0.3-12.4-0.1-18.5c-0.3-4.4,1.4-5.5,5.4-5.1
	c3.3,0.3,6.7,0.1,10.7,0.1c-0.5-6.2-2.6-11.7-3.9-17.4c-0.5-2.3-2.4-1.7-3.8-1.7c-4.8-0.1-9.6-0.1-14.3,0c-2.5,0.1-3.5-0.7-3.5-3.4
	c0.1-16.9,0.1-33.9,0-50.8c0-2.8,1.2-3.3,3.6-3.3c7,0.1,13.9-0.1,20.9,0.1c2.8,0.1,4.4-0.3,4.3-3.8C229,42.1,229,30.2,229,18.2
	c0.1-4.8,0.3-9.5,0.2-14.3c-0.1-3,1-3.9,3.7-3.5c0.6,0.1,1.2,0,1.8,0c4.3,0.1,9.9-1.4,12.7,0.7c3,2.3,0.4,8.2,1.2,12.4
	c1.9,2.4,1.7,5.2,1.7,8c0.1,9.3,0.1,18.7,0,28c-0.1,4.5,1.7,6.4,6.3,6.4c13.7-0.1,27.4-0.1,41.1,0c4.7,0.1,6.3-2,6.2-6.4
	c-0.1-10.3-0.1-20.7,0-31c0-2.9-0.3-6,1.7-8.6c0.5-9.5,0.5-9.5,10.4-9.5c8.7,0,8.7,0,9.1,10.8c-0.1,14.1,0,28.3-0.2,42.4
	c-0.1,3.5,1.2,4.2,4.4,4.3c14.7,0.3,14.7,0.4,14.8-14.2c0-15.6,0-15.5,15.5-14.7c2.9,0.2,3.7,1,3.7,3.8c-0.2,6.8,0.1,13.5-0.1,20.3
	c-0.1,3.6,0.8,4.9,4.6,4.7c6.6-0.3,13.1,0,19.7-0.1c3.2-0.1,4.6,0.5,4.5,4.2c-0.2,16.5-0.1,33.1,0,49.6c0,2.9-0.9,3.9-3.7,3.7
	c-4.6-0.2-9.2,0.1-13.7-0.1c-3-0.2-4.2,0.9-4.8,3.8c-1,5-2.3,10-3.7,15.4c4.3,0,8.1,0.3,11.9-0.1c3.9-0.4,4.6,1.3,4.5,4.8
	c-0.2,9.8,0.1,19.5-0.1,29.3c-0.1,3.4,1,4.4,4.4,4.4c4.9,0.1,11.4-2.3,14.2,1.2c2.3,3,0.7,9.2,0.7,13.9c0,12.3-0.1,24.7,0.1,37
	c0,3.6-0.5,5.3-4.7,5.2c-5.6-0.1-12.7-2.6-16.6,1.2c-3.5,3.5-3.7,10.2-5.3,15.5c-6,20-11.8,40-18.1,59.9c-2.2,7.1-3.3,14.2-3.2,21.6
	c0.1,66.9,0.1,133.8,0,200.8c0,5.2,1,7.2,6.7,6.9c10.4-0.5,10.4-0.1,12.9,9.9c0.9,3.7,2.3,7.3,2.8,11c0.6,4.4,2.2,4.9,6.3,3.6
	c23.5-7.9,45.8-18.3,66.4-32.2c66.1-44.8,107.8-106.2,120.9-185c14.4-86.4-7.7-163.8-65.2-230.3C472.8,77,433.9,51.6,389,35.5
	c-9.4-3.4-9.4-3.3-7.1-12.4c3.5-9,3.6-9.3,12.8-5.8C500.5,57.8,566.6,133,587.3,244.4c17.5,94.4-7.7,178.8-71.4,250.7
	c-44.9,50.6-101.4,82.5-168.3,93.4c-105.8,17.2-196.4-13.9-269.9-91.6C34.3,450.8,9.2,395.3,2,332.3C-12.8,201.9,54.2,82.1,172,27.6
	c9.4-4.3,19.1-7.8,28.7-11.6c5-1.9,7.8-1.5,8.4,4.3C209.2,21.2,209.9,22.1,210.3,23.1z"/>

<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M295.6,210.8c-26.9,0-53.8-0.1-80.6,0.1c-3.7,0-5-0.7-5-4.8c0.1-14.4-0.1-14.4,14.4-14.4
	c50.8,0,101.5,0.1,152.3-0.1c4.3,0,5.7,0.7,5.6,5.4c-0.3,13.8-0.1,13.8-13.9,13.8C344.2,210.8,319.9,210.8,295.6,210.8z M296.6,76.9
	c23.7,0,47.4,0.1,71.1-0.1c3.7,0,5.1,0.6,5.1,4.8c-0.2,14.4,0,14.4-14.5,14.4c-44.4,0-88.8-0.1-133.2,0.1c-4.2,0-5.8-0.7-5.7-5.4
	c0.3-13.8,0-13.8,13.8-13.8C254.4,76.9,275.5,76.9,296.6,76.9z M296.1,555c18.3,0,36.6,0.3,54.9-0.1c8.1-0.2,5.7,6.4,6.8,10
	c1,3.4-3.3,2.8-5.4,3.2c-37.5,8-75,8-112.5,0c-2.1-0.5-6.9,1-5.5-3.8c1.1-3.8-0.4-9.7,7.3-9.5C259.8,555.4,278,555,296.1,555z"/>
<path :style="{fill:'rgba(255, 226, 79, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M257.9,430.1c0-33,0.1-66.1-0.1-99.1c0-4.5,1.1-5.6,5.6-5.6c21.9,0.3,43.8,0.2,65.7,0
	c3.8,0,5.5,0.4,5.5,5c-0.2,66.9-0.1,133.7,0,200.6c0,3.9-1,5-4.9,5c-22.3-0.2-44.6-0.2-66.9,0c-4,0-4.9-1.2-4.9-5
	C257.9,497.3,257.9,463.7,257.9,430.1z M350.2,115.4c0,0.5,0.1,0.7,0.1,0.9c-2.9,18-2.9,18-20.8,18c-25.9,0-51.7-0.2-77.6,0.1
	c-4.8,0.1-6.7-1.4-7.3-5.9c-0.6-4.3-2-8.5-3-13C277.9,115.4,313.8,115.4,350.2,115.4z"/>
<path :style="{fill:'rgba(234, 96, 96, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M295.8,172.5c-20.3,0-40.6-0.1-60.9,0.1c-4.1,0-5.9-0.4-5.8-5.3c0.3-13.9,0-13.9,13.9-13.9
	c38,0,76.1,0.1,114.1-0.1c5.1,0,6.2,1.4,6.1,6.3c-0.3,13-0.1,13-13,13C332,172.5,313.9,172.5,295.8,172.5z M297.3,229.9
	c4.5,0.7,12-2.6,14.8,1.4c2.2,3.1-1.2,10.1-2.3,15.3c-2.5,12-2.5,12-15.1,12c-10,0-10,0-11.7-9.6c-0.9-4.7-1.4-9.5-2.9-14
	c-1.5-4.8,0.4-5.4,4.4-5.1C288.4,230.1,292.4,229.9,297.3,229.9z M246.4,229.9c13,0,13,0,15.7,12.7c0.7,3.1,0.8,6.4,1.9,9.3
	c2.4,6.4-0.5,7.3-5.9,6.8c-5.5-0.5-12.3,1.6-16.3-0.9c-4.1-2.6-3.9-9.9-5.5-15.2c-3.9-12.7-3.8-12.7,9.5-12.7
	C246,229.9,246.2,229.9,246.4,229.9z M346.6,229.9c3.7,0.5,9.7-2,12.1,1.1c1.6,2.1-1.5,8-2.9,12.1c-1.7,5-1.4,12-5.4,14.6
	c-3.7,2.4-10,0.7-15.1,0.8c-1.6,0-3.2-0.1-4.8,0c-3.2,0.3-3.6-1.1-3-3.9c1.5-6.6,3.2-13.1,4-19.8c0.5-4.6,2.5-5.6,6.6-5.1
	C340.6,230.1,343.2,229.9,346.6,229.9z M246.9,277.7c6.9,0,13.2,0,19.4,0c1.8,0,3,0.4,3.4,2.5c1.5,7.8,3.1,15.5,4.6,23.3
	c0.4,1.9,0.1,3.1-2.2,3c-0.4,0-0.8,0-1.2,0c-15.4,0.8-15.4,0.8-19.8-14C249.8,287.7,248.4,283,246.9,277.7z M345.4,277.7
	c-2.7,9.1-5.2,17.3-7.5,25.5c-0.6,2.2-1.6,3.6-4.1,3.2c-0.2,0-0.4,0-0.6,0c-16,0.7-16,0.7-12.9-14.8c2.8-13.9,2.8-13.9,17.3-13.9
	C339.9,277.7,342.3,277.7,345.4,277.7z M297.3,277.7c5-1.2,6.9,0.6,5,6.8c-1.8,6.1-2.6,12.4-3.8,18.7c-0.3,1.6-0.4,3.3-2.7,3.2
	c-1.9-0.1-1.9-1.7-2.2-3.1c-1.2-6-2.4-12.1-3.6-18.1C288.7,277.7,288.7,277.7,297.3,277.7z"/>
<path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M305.7,373.5c0,5-0.2,9.9,0.1,14.9c0.2,3.5-1.2,4.2-4.4,4.2c-14.8,0.2-14.8,0.3-14.8-14.6
	c0-6.5,0.2-13.1-0.1-19.6c-0.1-3.5,1.2-4.2,4.4-4.2c14.8-0.2,14.8-0.3,14.8,14.6C305.7,370.3,305.7,371.9,305.7,373.5z M286.5,430.3
	c0-5,0.2-9.9-0.1-14.9c-0.2-3.2,1-3.9,4.1-4c15.1-0.4,15.1-0.5,15.1,14.8c0,6.5-0.2,13.1,0.1,19.6c0.1,3.2-1,3.9-4.1,4
	c-15.2,0.4-15.2,0.5-15.1-14.8C286.5,433.5,286.5,431.9,286.5,430.3z M305.7,488.4c0,5.2-0.1,10.3,0,15.5c0.1,2.6-0.7,3.7-3.4,3.4
	c-0.2,0-0.4,0-0.6,0c-15.2,0.6-15.2,0.6-15.2-14.7c0-6.7,0.1-13.5,0-20.2c-0.1-2.6,0.7-3.7,3.4-3.4c0.2,0,0.4,0,0.6,0
	c15.2-0.6,15.2-0.6,15.2,14.7C305.7,485.2,305.7,486.8,305.7,488.4z"/>
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
                                    <button :style="{background:'rgba('+getterAirTrafficTowerBg1+')'}" @click="ShowElement(getterAirTrafficTowerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAirTrafficTowerBg2+')'}" @click="ShowElement1(getterAirTrafficTowerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAirTrafficTowerBg3+')'}" @click="ShowElement2(getterAirTrafficTowerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAirTrafficTowerBg4+')'}" @click="ShowElement3(getterAirTrafficTowerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterAirTrafficTowerBg5+')'}" @click="ShowElement4(getterAirTrafficTowerBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var AirTrafficTower= [
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
            var randomNumber = AirTrafficTower[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  AirTrafficTower[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'AirTrafficTower'){
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
                getterAirTrafficTowerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'AirTrafficTower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAirTrafficTowerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'AirTrafficTower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAirTrafficTowerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'AirTrafficTower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAirTrafficTowerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterAirTrafficTowerBg5: {
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
                            name:'AirTrafficTower',
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