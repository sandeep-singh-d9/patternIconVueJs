<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M157.5,230.1c-6.9,0-13.1,0.2-19.2-0.1c-3.9-0.2-5.4,0.9-6.1,5c-5.3,30.1-10.9,60.1-16.3,90.1
	c-0.8,4.3-2.8,7.2-6.3,9.5c-17.9,11.8-35.6,23.8-53.5,35.6c-6.3,4.2-11.8,3.6-15.1-1.5c-3.3-5-1.6-10.2,4.7-14.4
	C60.9,344.2,76,333.9,91.3,324c4.6-2.9,6.8-6.4,7.7-11.7c5.3-30.5,10.9-60.9,16.5-91.3c1.4-7.7,4.3-10,12.1-10
	c10.7,0,21.4-0.1,32.2,0.1c3.8,0.1,5.9-0.8,7.8-4.5c6.1-12.1,13.4-23.3,25-31.3c4.1-2.8,0.5-5.9-2.1-7.8
	c-6.6-4.7-13.3-9.3-20.3-13.5c-4.9-3-7.1-6.9-6.9-12.7c0.3-12.1,0-24.2,0.2-36.3c0-3.1-0.8-5.2-3.2-7.1
	C146.8,87.3,132.9,78,115,77.5c-5.2-0.1-8.8-4.5-8.8-9.5c0-5.2,3.9-9.3,9.5-9.5c10.5-0.2,20.4,2.8,29.8,7.2
	c11.9,5.7,22.5,13.3,32.3,22.2c3.5,3.2,4.9,6.8,4.8,11.6c-0.2,10.9,0.2,21.9-0.2,32.8c-0.2,5.2,1.3,8.3,5.9,10.9
	c8.2,4.8,7.9,5.1,13.5-2.2c12.1-15.8,26.4-28.5,46.2-33.6c3-0.8,3.6-3,4.4-5.1c0.9-2.5-1.9-2.6-3.2-3.5
	c-17.2-11-27.3-26.2-28.4-46.9c-0.4-7.8,3.2-12.5,9.3-12.6c5.9-0.1,9.3,4,9.7,11.7c1,16.9,10.7,27.6,25.1,34.8
	c2.1,1.1,3.7,0.2,5.5-0.6c24-10.6,48-10.6,72,0c2.7,1.2,4.7,1,7.2-0.3c14.4-7.6,23.2-18.9,23.6-35.8c0.2-6,4.3-10,9.7-9.9
	c5.4,0.1,9.4,4.2,9.3,10.2c-0.2,21.2-10,37-27.4,48.6c-1.6,1-4.8,1.2-4.1,4.1c0.6,2.7,2.2,4.3,5.5,5.2c20.1,5.8,35,18.9,46.6,35.9
	c2.6,3.8,4,4.6,8.5,2.1c7.3-4.1,10-9.2,9.3-17.5c-0.8-9.9-0.1-19.8-0.2-29.8c0-3.4,0.6-6.3,3.1-8.6c16-15,33.7-27.1,56-30.6
	c2.7-0.4,5.6-0.6,8.3-0.4c5.2,0.4,8.9,4.5,8.9,9.4s-3.7,9.3-8.9,9.4c-18,0.5-31.8,9.8-45.2,20.4c-2.4,1.9-3.2,4.1-3.2,7.1
	c0.2,12.3-0.1,24.6,0.1,36.9c0.1,5.4-1.9,9-6.4,11.8c-6.9,4.3-13.6,8.9-20.3,13.5c-5.3,3.7-5.2,6.1-0.1,10
	c9.6,7.2,16.3,16.8,21.4,27.4c2.6,5.3,5.6,6.9,11.3,6.6c10.1-0.5,20.2-0.2,30.4-0.1c7.1,0,10.2,2.6,11.4,9.4
	c5.6,30.6,11.2,61.2,16.6,91.9c0.9,5.3,3.2,8.8,7.7,11.7c15.4,9.8,30.4,20.1,45.6,30.3c6.3,4.2,8,9.4,4.7,14.4
	c-3.3,5.1-8.8,5.7-15.1,1.5c-17.8-11.9-35.6-23.8-53.5-35.6c-3.5-2.3-5.5-5.2-6.3-9.5c-5.4-30-11-60-16.3-90.1
	c-0.7-4.1-2.3-5.2-6.1-5c-6.1,0.3-12.3,0.1-19,0.1c3.1,11.1,6.2,21.9,8.5,32.8c6.7,32.2,5.1,64.3,0.3,96.5
	c-2.3,15.3-5.5,30.4-10.2,45.2c-0.9,2.8-0.2,4.3,1.9,5.9c8.5,6.5,16.9,13.2,25.3,19.8c6.7,5.3,7.4,7.7,4.6,15.9
	c-5,15-10,30.1-15.2,45c-1.2,3.5-1,6.3,1,9.4c14.4,23.1,31.2,43.5,57.3,54.3c5.6,2.3,7.4,7.8,5.1,12.7c-2.4,5-7.2,6.7-13.1,4.4
	c-22-8.7-38.4-24.3-52.5-42.5c-6-7.7-11.2-15.9-16.1-24.3c-2.9-5-3.5-9.6-1.5-15.2c5-14,9.3-28.2,14.2-42.2c1.3-3.7,0.6-5.8-2.4-8
	c-4.4-3.1-8.7-6.3-12.7-9.9c-3.2-2.8-4.3-2.3-6,1.5c-9.1,20.7-21.1,39.5-37.5,55.3c-25.1,24.2-55.3,36.5-89.8,38.4
	c-38.9,2.2-74.4-7-104.5-32.8c-19.2-16.4-33.1-36.8-43.1-59.8c-2.1-4.7-3.6-5.6-7.5-1.9c-3.6,3.4-7.6,6.3-11.7,9.2
	c-3.1,2.2-3.7,4.3-2.4,8c4.9,14,9.2,28.2,14.2,42.2c2,5.6,1.4,10.1-1.5,15.2c-14.8,25.4-32.6,47.9-58.9,62.3
	c-3.3,1.8-6.8,3.3-10.3,4.7c-5.5,2.1-10.7,0-12.8-5.1c-1.9-4.8,0-10,5.4-12.2c25.9-10.7,42.6-31,57-53.8c2.2-3.5,2.5-6.6,1.1-10.5
	c-5.2-14.8-10.1-29.6-15-44.5c-2.8-8.2-2-10.6,4.7-15.9c8.3-6.5,16.5-13.1,24.9-19.4c2.7-2,3.2-3.7,2.2-6.9
	c-10.3-34.3-15-69.3-14-105.1c0.6-22.3,5.1-44.1,11.9-65.3C156.6,232.7,156.9,231.7,157.5,230.1z"/>
<path :style="{fill:'rgba(194, 29, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M163.3,310c0-35.1,7.5-67.6,22.7-98.3c0.5-1.1,1.1-2.1,1.6-3.2c5.2-12,13-17.8,27.5-17
	c25.3,1.4,50.8,0.5,76.2,0.3c4.3,0,6,0.8,5.7,5.5c-0.4,6.5-0.2,13.1-0.1,19.6c0.1,3.2-0.8,4.4-4.2,4.9c-7.9,1.1-15.3,3.8-22,8.4
	c-15.9,10.8-16,26.8-0.2,37.7c6.3,4.3,13.3,7.2,20.8,8.2c4.8,0.6,5.6,2.5,5.6,6.8c-0.1,49.8-0.1,99.6-0.1,149.4
	c0,22.8-0.1,45.6,0.1,68.5c0,4.3-0.7,5.6-5.6,5.1c-56.6-5.7-89.4-39.9-108.7-90.2C169.4,381.5,164.1,345.7,163.3,310z M315.8,391.2
	c0-36.1,0.1-72.2-0.1-108.4c0-4.3,0.8-6.1,5.6-6.7c8.3-1.1,16-4.4,22.8-9.6c13.1-10.1,13.1-24.9-0.2-34.9c-7.1-5.4-15.2-8.5-24-9.7
	c-3.4-0.5-4.2-1.7-4.2-4.9c0.2-6.9,0.2-13.9,0-20.8c-0.1-2.8,0.4-4.3,3.8-4.3c30,0.1,59.9,0.1,89.9,0c4.8,0,7,3.4,9.2,6.6
	c9.8,13.9,15.8,29.7,20.9,45.7c11.9,37.3,11.6,75.3,5.5,113.5c-4.7,29.3-12.6,57.6-27.1,83.8C396.5,480,364.1,501.9,320,506
	c-5.2,0.5-4.3-2.4-4.3-5.3C315.8,464.2,315.8,427.7,315.8,391.2z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" :class="ValueId+'_color3'" d="M245.6,137.3c-0.1,15.5-13.9,29.7-28.9,29.6c-5.3,0-6.8-1.9-5-7c3.4-9.5,10.4-16.1,17.8-22.5
	c2.2-1.9,4.7-3.6,7.3-5.1c2.3-1.4,4.9-4.2,7.2-2.9C246.2,130.8,245.5,134.5,245.6,137.3z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" :class="ValueId+'_color3'" d="M367,137.2c0.1-2.8-0.6-6.5,1.7-7.7c2.2-1.2,5,1.5,7.2,3c9.6,6.2,17.9,13.7,23.4,23.8
	c1.6,2.9,3.8,6.2,1.2,9.3c-2.3,2.7-5.9,1.5-8.9,1C378.2,164.4,367,150.8,367,137.2z"/>
<path style="fill:#FCFDFD;transform:scale(0.2)" :class="ValueId+'_color3'" d="M274.2,105.7c14.6-12.3,49.8-12.2,64.1,0C316.9,105.7,295.9,105.7,274.2,105.7z"/>
<path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M249,172.4c12.1-11.9,16-25.8,14.4-41.4c-0.5-5,1.2-5.9,5.7-5.9c24.8,0.2,49.5,0.2,74.3,0
	c4.6,0,6,1,5.7,5.9c-1.1,18.8,1.7,26.7,14,41.3C325.2,172.4,287.6,172.4,249,172.4z M268.2,363.4c0.1,15.8-13,28.8-28.8,28.7
	c-15.5-0.1-28.4-13-28.4-28.5c0-15.7,13-28.8,28.8-28.7C255.2,335,268.1,347.9,268.2,363.4z M220.5,287.2c0,10.3-8.5,19-18.8,19.1
	c-10.5,0.1-19.4-8.8-19.3-19.3c0.1-10.3,8.9-18.9,19.1-18.8C211.8,268.2,220.5,276.9,220.5,287.2z M249,468.4
	c-10.3-0.1-18.9-8.8-18.9-19c0-10.5,9-19.3,19.5-19.1c10.3,0.2,18.8,9.1,18.7,19.3C268,459.8,259.2,468.4,249,468.4z M401.6,363.5
	c0,15.7-13.2,28.7-28.9,28.6c-15.5-0.1-28.3-13.1-28.3-28.6c0-15.7,13.1-28.7,28.9-28.6C388.8,335.1,401.6,348,401.6,363.5z
	 M430.2,287.5c-0.1,10.3-8.9,18.9-19.1,18.9c-10.5,0-19.3-9.1-19-19.6c0.3-10.3,9.1-18.7,19.4-18.6
	C421.7,268.4,430.3,277.2,430.2,287.5z M363.7,430.2c10.3,0.2,18.9,8.9,18.8,19.2c0,10.5-9.1,19.3-19.6,19
	c-10.3-0.3-18.7-9.2-18.5-19.5C344.6,438.7,353.5,430.1,363.7,430.2z"/>
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
                                    <button :style="{background:'rgba('+getterLadyBugBg1+')'}" @click="ShowElement(getterLadyBugBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLadyBugBg2+')'}" @click="ShowElement1(getterLadyBugBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLadyBugBg3+')'}" @click="ShowElement2(getterLadyBugBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterLadyBugBg4+')'}" @click="ShowElement3(getterLadyBugBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterLadyBugBg5+')'}" @click="ShowElement4(getterLadyBugBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLadyBugBg6+')'}" @click="ShowElement5(getterLadyBugBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterLadyBugBg7+')'}" @click="ShowElement6(getterLadyBugBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var LadyBug= [
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
            var randomNumber = LadyBug[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  LadyBug[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'LadyBug'){
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
                getterLadyBugBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'LadyBug') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBugBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'LadyBug') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBugBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'LadyBug') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBugBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterLadyBugBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBugBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBugBg7: {
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
                            name:'LadyBug',
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