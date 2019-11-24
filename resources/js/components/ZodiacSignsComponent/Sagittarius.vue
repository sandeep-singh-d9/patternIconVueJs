<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M130,201c-14.4,0-28.3-0.1-42.2,0.1c-3.3,0-4.8-0.7-5.8-4.1C67.2,143.9,52.2,91,37,37.1
	c5.4,1.4,10.2,2.6,15.1,4c48,13.5,96,27.1,144,40.5c4,1.1,5.2,2.7,5.1,6.9c-0.4,13.7-0.1,27.4-0.1,41.6c0.2,0.1,0.9-0.8,1.7-1.3
	c43.7-31.8,93.1-44.6,146.5-43.7c22.9,0.4,45.8,1.1,68.7,1.9c9.6,0.3,19.1-0.3,28.6-0.8c6-0.3,10.5-2.9,13.7-8.1
	c7-11.3,16-20.8,27.4-27.8c29.8-18.3,64.9-4.2,72.2,29.6c3.3,15-1.8,28.7-10.3,41.1c-4.8,6.9-10.6,12.9-16.5,18.9
	c-54.8,54.8-109.5,109.6-164.5,164.2c-3.8,3.8-3.6,5.6,0.1,9.1c12.1,11.6,23.8,23.5,35.5,35.4c2.2,2.3,4.1,2.8,7.3,2
	c18.5-4.8,37-9.2,55.5-13.8c2.8-0.7,5.1-1.1,7.5,1.4c40.9,41.1,81.9,82,122.8,123c0.3,0.3,0.4,0.7,0.8,1.5
	c-12.6,3.2-25,6.3-37.5,9.4c-21,5.2-42,10.6-63.1,15.5c-5.8,1.3-8.6,3.8-10,9.7c-7.7,32.3-15.8,64.4-23.8,96.6
	c-0.3,1.3-0.8,2.6-1.3,4c-2.2-0.6-3.3-2.4-4.6-3.7c-39.6-39.5-79.1-79.1-118.8-118.6c-2.8-2.7-3.4-5.1-2.4-8.9
	c4.8-18.3,9-36.6,13.8-54.9c0.9-3.4,0.3-5.4-2.1-7.8c-11.9-11.7-23.9-23.5-35.4-35.5c-3.4-3.5-5.1-3.8-8.7-0.1
	c-55,55.3-110.3,110.5-165.4,165.7c-7.6,7.6-15.5,14.9-25.2,19.9c-16.1,8.4-32.3,9.5-48.4,0.2c-23.5-13.6-30-41.6-15.5-65.8
	c6.3-10.6,14.5-19.6,25.2-25.8c8.4-4.9,11.4-11.7,11.8-21c1.1-24.1-0.2-48.2-1.1-72.2c-1.2-35.2,0.3-70,11.4-103.8
	c6.7-20.3,16.1-39.3,28-57.1C126.7,205.7,128.5,203.1,130,201z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M190.2,176.9c9.4-6.3,17.2-14.6,26.4-21.3c27.4-20.1,57.6-33.6,91.3-38.1c19.6-2.6,39.5-4.3,59.4-1.7
	c0.4,0.1,0.8,0,1.2,0c20.5,0.4,40.9,1.1,61.4,1.1c8.5,0,17.1-0.4,25.4-2.1c11.8-2.4,21.6-7.8,28.2-18.2c4.9-7.8,10.5-14.9,18.2-20.2
	c11.2-7.8,23.6-4.9,28.1,6.7c2.1,5.5,0.7,10.6-1.8,15.5c-3.3,6.4-7.8,11.9-13,17c-4.3,4.2-8.6,8.3-12.9,12.4
	c-11.6,11-26.1,16.4-40.8,21.3c-20.8,4.6-42,6.5-63.2,8.1c-24.7,1.8-49.6,1.9-74.1,6.8c-36.5,7.4-67,25.4-92.9,51.6
	c-6.5,3.6-11.4,8.8-15.2,15.2c-29.6,29.1-48.3,63.9-53.8,105.3c-2.2,16.3-2.7,32.8-3.8,49.3c-1.7,25.4-3,50.8-9,75.7
	c-3.8,10-6.6,20.3-12.5,29.5c-2.6,4-6,7.4-8.7,11.3c-9,10.1-17.9,20.4-30.4,26.4c-10.6,5.1-20.5,1.5-24.7-8.7
	c-2.9-7,0.3-12.8,3.9-18.4c4.7-7.3,11.5-12.6,18.8-17.1c13.7-8.6,19.1-21.6,20.5-37c1.1-12.5,1.6-25,0.9-37.5
	c-1.2-23.8-2.3-47.7-2-71.5c0.8-50,16.9-94.5,49.4-132.8c4.2-5,9.3-9.3,12.4-15.2C180.3,184.6,184.7,180.2,190.2,176.9z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M477,461.6c-2.4-0.3-3.7-2.1-5.3-3.7c-22.9-22.9-45.9-45.8-68.7-68.8c-1.3-1.3-4.2-2.3-2.7-5.2
	c18.9-4.7,37.8-9.3,56.6-14.2c3.8-1,6.4-0.6,9.4,2.4c23.1,23.4,46.3,46.6,69.6,69.7c3.8,3.8,3.1,4.7-1.7,5.8
	C515.1,452.1,496,456.9,477,461.6z M383.9,400.3c2.3-1.4,3.2,0.7,4.4,1.8c23.5,23.5,47,47,70.5,70.4c1.3,1.3,2.5,2.5,2.8,4.4
	c-4.9,19.8-9.8,39.7-14.6,59.6c-0.9,3.9-2.4,2.1-3.9,0.6c-4.5-4.5-9-9-13.5-13.5c-19.1-19.1-38.2-38.4-57.5-57.3
	c-3-3-3.4-5.6-2.4-9.4C374.6,438,379.2,419.1,383.9,400.3z M155.5,169.3c-14.7,0.4-29.4,0.8-44.1,1.3c-3,0.1-5.7,0.8-6.9-3.4
	c-7.9-28.7-16-57.3-24.3-86.8c13.7,3.8,26.8,7.4,39.9,11.1c15.1,4.2,30.1,8.7,45.3,12.7c4.3,1.1,5.5,3,5.2,7.4
	c-0.7,14.7-1,29.4-1.4,44.1C172.6,168.9,168.9,172.6,155.5,169.3z"/>
<path :style="{fill:'rgba(255, 182, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M322.4,308.2c-3.8-3.1-7.3-6.5-10.4-10.4c0.4-2.6,2.5-4,4.1-5.7c46.4-46.4,92.8-92.9,139.2-139.3
	c1.8-1.8,3.7-3.6,6.2-4.6c1.9-1.5,4-2.4,6.3-3.1c11.4-3.3,21.6-8.8,31.1-15.8c0.9-0.7,2.1-0.9,3.2-1.4c-11.3,11.4-22.6,22.9-34,34.3
	c-46.9,47-93.9,93.9-140.8,140.9C325.6,304.7,324,306.5,322.4,308.2z"/>
<path :style="{fill:'rgba(255, 182, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M297.8,312c3.9,3,7.3,6.6,10.4,10.4c-9.9,9.8-19.8,19.5-29.6,29.4c-48.5,48.5-96.9,96.9-145.4,145.4
	c-1.7,1.7-3.5,3.2-5.2,4.8c0.7-3.5,3.5-5.6,5.3-8.4c4.8-8,9.2-16.1,11.7-25.2c0.7-2.5,1.6-4.9,3.3-6.9c1-2.7,3.1-4.6,5-6.6
	c46.1-46.1,92.3-92.3,138.4-138.4C293.5,314.7,295,312.4,297.8,312z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M216.3,229.6c0-6.4,6.5-7.9,9.3-12.3c1-1.5,2.4-1.9,4-1.1c3.4-0.4,4.8,2.4,6.7,4.3
	c25.5,25.4,50.9,50.8,76.3,76.2c3.1,3.9,7.9,6.4,9.7,11.4c18.6,18.8,37.2,37.6,55.9,56.4c5.3,5.4,10.7,10.7,16,16
	c1.7,1.7,3.3,3.5,6,3.3c15.2,16.6,31.7,31.9,47.4,48c9.7,9.9,19.9,19.4,29.3,29.7c-5.8,4.5-10.9,9.6-15.3,15.3
	c-2.9-1.5-4.6-4.3-6.9-6.5c-21.3-21.2-42.5-42.5-63.8-63.7c-2.3-2.3-4.6-4.4-7-6.4c0.1-2.2-0.9-3.7-2.4-5.2
	c-24-23.9-47.9-47.8-71.8-71.7c-0.4-0.4-1-0.7-1.5-1c-5-1.8-7.5-6.6-11.4-9.7c-25.4-25.5-50.9-50.8-76.2-76.3
	C218.8,234.4,216,233,216.3,229.6z M155.5,169.3c4.1-1.5,9.8,1.5,12.3-1.8c2.1-2.8,1.1-7.9,1.5-12c7,7.1,13.9,14.3,20.9,21.4
	c-3.9,4.9-8.3,9.3-13.3,13.3C169.8,183.2,162.6,176.2,155.5,169.3z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M461.5,148.2c-33.2,33.3-66.5,66.6-99.7,99.9c-16.6,16.6-33.2,33.1-49.8,49.6
	c-14.7-14.5-29.3-28.9-44-43.4c-12.8-12.7-25.6-25.4-38.4-38.1c0.9-5,5.3-7.3,8.6-10.1c21.8-19,46-33.9,74.4-41.1
	c12.3-3.1,24.7-5.1,37.4-6.2c34.3-2.9,68.9-2.9,102.9-9.4C455.8,148.9,458.5,147.1,461.5,148.2z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M297.8,312c-49.9,49.8-99.7,99.7-149.6,149.5c0-8.9,3.2-17.3,3.9-26.1c0.7-9.7,2.5-19.3,3.2-28.9
	c1.5-20.6,2-41.2,3.9-61.7c3.3-35.4,15.6-67.4,38-95.3c4.6-5.7,8.9-11.7,14.3-16.8c1.4-1.3,2.5-3.3,4.9-2.9
	c24.6,24.7,49.2,49.4,73.8,74.1C292.8,306.4,295.3,309.2,297.8,312z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M272.8,217.2c31.7-24.9,68.7-29.2,106.6-30.3c0.3,1.8-1.2,2.5-2.1,3.4c-20.7,20.7-41.4,41.4-62,62.2
	c-2.5,2.5-3.9,3.4-6.9,0.3C296.8,240.8,284.8,229.1,272.8,217.2z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M186.8,379.7c1.6-29.2,3.2-58.1,16.6-84.6c3.4-6.8,7.3-13.2,11.5-19.5c1.8-2.7,2.8-2.4,4.7-0.3
	c11.2,11.3,22.4,22.6,33.8,33.8c1.9,1.9,2.5,3,0.3,5.1c-21.8,21.6-43.4,43.3-65.1,64.9C188.2,379.3,187.8,379.4,186.8,379.7z"/>
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
                                    <button :style="{background:'rgba('+getterSagittariusBg1+')'}" @click="ShowElement(getterSagittariusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSagittariusBg2+')'}" @click="ShowElement1(getterSagittariusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSagittariusBg3+')'}" @click="ShowElement2(getterSagittariusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSagittariusBg4+')'}" @click="ShowElement3(getterSagittariusBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSagittariusBg5+')'}" @click="ShowElement4(getterSagittariusBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSagittariusBg6+')'}" @click="ShowElement5(getterSagittariusBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSagittariusBg7+')'}" @click="ShowElement6(getterSagittariusBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Sagittarius= [
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
            var randomNumber = Sagittarius[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Sagittarius[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Sagittarius'){
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
                getterSagittariusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sagittarius') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSagittariusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sagittarius') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSagittariusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sagittarius') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSagittariusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSagittariusBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSagittariusBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSagittariusBg7: {
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
                            name:'Sagittarius',
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