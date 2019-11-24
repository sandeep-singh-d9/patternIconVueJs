<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color2'" d="M351,453.6c-3.1,1.5-5.2,2.5-7.3,3.6c-1.8,0.9-3.9,1.6-5.5-0.1c-1.6-1.8-0.7-3.7,0.5-5.4
	c4.9-7.5,7.6-16,10.9-24.3c-2.7-1.1-5.1,0.7-7.6,0.5c-2-0.1-4.1-0.1-5.2-2.1c-1.1-1.9,0.3-3.4,1.4-4.8c6.3-8,10.1-17.4,14.8-26.2
	c1.8-3.4,1.1-4.4-2.5-5.4c-19-5.4-38.2-10-56.7-17.1c-4.6-1.8-8.9-4-15.1-6.7c4.1,5.2,7.2,9,10.3,12.9c-10.7,0-22.6-5.2-29.4-12.6
	c-0.7-0.7-1.3-1.5-2-2.2c-3.5-3.7-7.9-7.7-12.4-7.3c-5,0.4-4.8,7-6.3,11c-2.2,5.7-4.2,11.5-5.6,17.5c-4.5,18.4-12.9,35.1-22.1,51.5
	c-9.7,17.5-10.3,36.2-5,55.2c1.8,6.4,5.7,11.2,11.3,14.6c4.7,2.9,9.6,5.5,14.4,8.2c3.3,1.9,6.1,4.5,7.9,7.9
	c2.9,5.6,1.2,11.1-4.9,12.8c-9.7,2.8-19.7,4.4-29.8,4.1c-6.6-0.2-11.8-3.3-15.1-9c-5.2-9.1-10.1-18.3-15.1-27.5
	c-3-5.4-6.3-10.5-10.7-14.9c-10.6-10.7-13.2-23.4-8.7-37.7c6-19.1,9.3-38.4,6.5-58.5c-0.9-6.4-3.5-12.1-6.8-17.5
	c-11-18.3-21.7-36.7-27-57.7c-1.6-6.5-2.6-13-3.9-19.6c-2.7,18.8-0.1,37,6.2,54.8c2.5,6.9,4.9,13.8,8.3,20.3
	c10.1,19.3,10.8,39.4,5.7,60c-4.5,18.4-9.5,36.7-14.2,55.1c-1.1,4.4-1.1,9-0.1,13.5c2.2,9.6-1.6,15.4-11.4,16.7
	c-4.7,0.6-9.5,0.2-14.2,0c-3.8-0.1-5.7-3.1-7.5-6c-4.2-6.9-6.5-14.6-9.6-22.4c-10,7.4-20,14.2-23.2,27.4c-5.3-12-3.2-23.1,8.8-47
	c-16.6,4.6-19.7,18.2-23.8,32.7c-9.1-22.7-6.4-42.7,7.5-61.3c-14.3,6.5-22,20.7-24.9,46.4c-11.2-16.3-14.4-32.8-8.1-51.1
	c-4.9,2.3-7.8,5.4-10.5,10.5c-2.4,4.6-2.2,9.9-3.9,15.2c-7.2-21.1-4.6-51.5,20.7-62.5c3.6-1.6,7.1-3.5,10.8-4.7
	c26-8.5,39.7-27.9,47.1-53c5.8-19.7,9-40.1,14.2-60c5.3-20.3,16.4-37.4,29.2-53.7c16.4-20.9,40.7-27.5,63.6-37.1
	c19.5-8.1,39.3-5.5,59.1-4.1c37.6,2.6,75.2,3.6,112.2-5.3c18.8-4.5,37.5-9.7,55-18.1c11.8-5.7,21.1-13.8,25.4-26.7
	c1.9-5.8,6.6-10.8,8-16.3c1.3-5.5-6.7-9-8.6-14.8c-1.4-4.4-2.9-8.6-2.7-13.3c0.1-3.3,1.4-6.6,0.5-10c-0.8-3-1.5-6-2.3-9.2
	c15.9,4.5,28.5,13.4,37.4,27.2c2.6,4.1,5.8,5.5,10.8,5.3c11.1-0.4,22.2,0.4,33,3.3c3.3,0.9,6.6,1.9,8.8,4.6
	c6.2,7.6,14.7,9.4,23.9,9.8c14,0.6,28.1,0.5,42,3.1c5.8,1.1,7.4,4.3,7.5,9.4c0.3,14.8-7.5,25.3-21.7,29.4c-9.7,2.8-19.7,4.2-29.1,8
	c-3.6,1.5-8.7,3-8,7.4c0.7,4,6.1,3.9,9.7,4c11.5,0.3,23,0.2,34.5,0.3c5.9,0.1,7.3,2.3,5.2,7.9c-3.3,8.7-9.2,12.6-18.7,12.3
	c-6.2-0.2-12.3-0.1-18.3,1.2c-11,2.5-12.7,5.3-9.6,16.1c2,6.8,4.5,13.5,5.6,20.6c2.2,14.3,0.5,28-5.4,41.2
	c-8.5,18.9-16.9,37.9-25.3,56.8c-1,2.3-1.6,5.5-4.9,5.1c-3.9-0.4-2.7-4.1-3.4-6.6c-0.4,0.2-1,0.3-1.1,0.5c-5,15.5-15.2,28-23.5,41.6
	c-1.8,2.9-2,5.5-1.1,8.9c6.1,23.5,11.6,47.2,18.2,70.6c4.7,16.8,13.3,31.6,27.1,43c3.7,3.1,6.9,6.5,8.8,11
	c3.1,7.6,0.5,13.3-7.2,15.9c-5.5,1.8-11.1,2.9-16.9,3.1c-9.3,0.3-16.9-2.7-21.9-11.4c-5.2-9.1-10.6-18.2-16.9-26.5
	c-11.3-15-15.4-33.2-23.1-49.8c-9.4-20-19.7-39.5-27.8-60.3c-0.9,10.6-0.8,21.4-5.7,32.3c-3.7-9.1-6.8-17.2-13-24.6
	c-4.3,9.7-5.4,19.6-7.9,29c-4.2,15.3-8.9,30.2-17.7,43.7c-6.5,10-8.1,21.3-5.1,33.1c0.6,2.3,1.2,4.6,1.5,6.9
	c1.3,8.3-2.9,13.9-11.3,14.8c-6.6,0.7-13.1,0-19.3-2.4c-7.9-3-9.5-10.2-10.1-17.4c-0.8-10.1,3.1-19.4,5.1-29.1
	C347.7,466.1,349.3,460.4,351,453.6z"/>
<path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color2'" d="M471.4,82.8c13.6,1.8,21.2,11.9,32,19.7c-8.5,1-15.2,1.7-20.2-5.9C479.9,91.6,475.3,87.4,471.4,82.8z
	"/>
<path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color2'" d="M551.6,179.8c4.7-9.2,17-6.5,32.2,1.1C572.5,180.5,562.1,181.2,551.6,179.8z"/>
<path style="fill:#FFD3B7;transform:scale(0.2)" :class="ValueId+'_color3'" d="M501.3,240.8c0.6-3.8,1.2-7.3,1.9-11.8c4.5,6.9,8.4,13,12.8,19.8c6.5-14,8.9-29.9,24.7-37.3
	c0.7,12.9,7.2,24.1,7.9,36.6c0.6,10.1-0.2,19.8-4.1,29.1c-7.1,16.6-14.5,33.2-21.9,50c-2.1-3.3,0.4-8.9-4.6-9.1
	c-4.5-0.2-4.4,5-5.5,8.1c-6.2,17.3-13.3,34.1-26,48.3c-3.5-15.5-6.5-30.9-8.6-46.5c-2.3-16.8-8.2-31.9-20.2-44.5
	c-9.9-10.4-17.4-22.9-26.4-34.4c1.6,6,3.2,12,5.3,19.6c-7.1-7.8-13.4-14.2-19.2-21c-11.4-13.5-24.4-25.3-38.2-36.4
	c-5.8-4.6-9.6-10.4-10.7-17.8c-0.6-4.1,0.6-5.8,4.8-6.8c18.1-4.3,36.3-8.7,52.4-18.1c8.8-5.1,15-2.6,21.9,1.9c7,4.5,12,10.9,16,18.1
	c5.2,9.4,11.6,17.9,18.7,25.9c6.3,7.2,9.3,16.5,15.7,23.7C498.9,239,499.2,240.6,501.3,240.8z M469.4,368.2c2.1,9.2,3,18.8,2.4,28.3
	c-0.7,11.1-1.7,22.1-15.1,25.9c-2.7,0.8-1.4,2.6-0.6,4.2c3.4,7.3,6.8,14.7,10.3,22c6,12.6,8.6,26.6,17,38.2
	c6.7,9.3,12.4,19.3,18.5,28.9c6.8,10.8,11.7,13,24.3,10.4c4.2-0.9,10.5-0.1,11.8-5c1.5-5.4-3.4-9.3-7.4-12.5
	c-8.6-7-14.7-15.9-20.3-25.3c-9.6-16.1-11.8-34.7-16.8-52.2c-7.7-27.1-14.2-54.5-20-82.2C470.3,355.1,467.7,360.9,469.4,368.2z
	 M358.3,453.7c-3.2,13-6.9,26-9.1,39.2c-2.6,15.9,1.2,20.2,15.3,21.3c10,0.8,12.7-2.1,10.1-11.8c-3.7-14-2.4-27.7,5.5-39.8
	c9.2-14,13.5-29.6,17.5-45.6c0.4-1.8,1-3.4-1.1-4.6c-10.5-6.2-21-12.6-31.5-18.7c-1.8-1.1-3.7-1.7-5,1.4
	c-3.6,8.2-7.5,16.3-12.7,24.5c2.9-0.4,4.4-1.5,5.7-3c1.5-1.7,3-3.4,5.5-1.9c2.5,1.5,1.4,3.6,0.8,5.8c-2.5,8.4-5.8,16.6-9.2,24.9
	C360.3,442.9,360.8,443.6,358.3,453.7z M113,445.8c-3.7,13.1-6.9,26.5-17.8,36.1c-1.4,1.2-1.6,2.6-1,4.2c2.8,6.9,5.4,14,8.6,20.8
	c2.4,5.2,17.9,5.5,21.1,0.7c1-1.5,0.9-2.9,0.4-4.5c-2-6.9-1.4-13.7,0.4-20.5c3.8-14.5,7.9-28.9,11.6-43.5c2.3-9,4.9-18.1,3.8-29.2
	c-5.7,10-10.6,18.7-16.3,28.7c-0.4-11.7,1.2-21.7-2.6-31.5C118.8,420.1,116.5,433.1,113,445.8z M187.2,485.9
	c-7.1,7.9-6.1,14.4-1.1,23.2c14.4,25.5,10.7,25.4,41,20.9c1.4-0.2,2.7-0.6,4.1-0.9c4.4-0.7,4-2.9,1.8-5.7c-2.8-3.5-6.7-5.5-10.7-7.3
	c-14.2-6.3-22.4-17-24.4-32.4c-0.7-5.5-1.1-11-1.7-16.5C194,474.1,191.8,480.9,187.2,485.9z M557.9,147.9c0.8,4,2,8,3,12
	c0.3,1.2-0.1,3.1,2.3,2.4c8.7-2.5,18-3.1,26-7.6c4.8-2.7,7.5-7.2,7.4-12.6c-0.1-3.8-9.7-10.9-13.5-11.3c-12.8-1.4-25.7-0.5-38.6-1.9
	C551.5,133.7,556.2,139.7,557.9,147.9z"/>
<path style="fill:#F7F7F7;transform:scale(0.2)" :class="ValueId+'_color1'" d="M515.5,142.7c-1.2-0.1-3.2,0.5-3-2.1c0.1-1.6,7.8-10.1,9.1-9.7c3.4,0.9,4.5,4.2,5.8,6.9
	C528,139.4,520.4,142.6,515.5,142.7z"/>
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
                                    <button :style="{background:'rgba('+getterSheepDogBg1+')'}" @click="ShowElement(getterSheepDogBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSheepDogBg2+')'}" @click="ShowElement1(getterSheepDogBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSheepDogBg3+')'}" @click="ShowElement2(getterSheepDogBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSheepDogBg4+')'}" @click="ShowElement3(getterSheepDogBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSheepDogBg5+')'}" @click="ShowElement4(getterSheepDogBg5)" :class="this.ValueId+'_color5btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterSheepDogBg6+')'}" @click="ShowElement5(getterSheepDogBg6)" :class="this.ValueId+'_color6btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterSheepDogBg7+')'}" @click="ShowElement6(getterSheepDogBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var SheepDog= [
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
            var randomNumber = SheepDog[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  SheepDog[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'SheepDog'){
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
                getterSheepDogBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SheepDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepDogBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SheepDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepDogBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SheepDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepDogBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSheepDogBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepDogBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSheepDogBg7: {
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
                            name:'SheepDog',
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