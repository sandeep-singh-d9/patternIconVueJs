<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#824C97; transform:scale(0.2)" :class="ValueId+'_color1'" d="M258.3,453.2c-0.1,31-0.1,62.1-0.4,93.1c0,3.4,1.5,3.8,4.3,3.8c10.1-0.1,20.3,0,30.4,0
	c82,0,164,0,245.9,0c1.8,0,3.6-0.1,5.4-0.2c14.7,0.1,29.5,0.1,44.2,0.2c7.7,0,11.7,2.8,12.2,8.5c0.5,6.1-2.8,9.5-10.8,10.7
	c-2.9,2.4-6.4,1.8-9.7,1.8c-34.9,0.1-69.7,0-104.6,0c-145,0-290,0-435.1,0c-3.9,0-8,1-11.5-1.7c-2.4-0.1-4.8-0.1-7.1-0.3
	c-5.9-0.4-9.6-4-9.6-9.3c-0.1-5.6,3.6-9.6,9.8-9.6c15.3-0.2,30.7,0,46-0.1c1.8,0,3.6-0.1,5.4-0.2c2.9-2.3,6.4-1.7,9.8-1.7
	c27.6,0,55.2,0,82.8,0c9.3,0,9.5-0.2,9.5-9.2c0-25.2,0-50.4,0-75.7c0-2.6,0.2-5.2-0.9-7.6c-4.3-3.9-9.8-2.1-14.7-2.9
	c-10-1.5-20-2.8-29.8-5.2c-17.5-4.4-34.6-10-50.8-18.3c-2.3-1.2-4.6-2.3-6-4.7c-11.6-7.7-23-15.6-32.5-26
	c-29.3-32.1-29-73.9,0.7-105.8c9.3-10,20.5-17.6,31.8-24.9c1.2-2.2,3.3-3.4,5.4-4.5c24.3-12.6,50.3-19.8,77.4-23.3
	c14.6-1.9,29.3-2.9,44.1-2.5c41.6,1.3,81.4,9.6,117.9,30.5c1.2,0.7,2.4,2.2,3.7,1.3c1.7-1.2,0.9-3.3,0.7-5
	c-2.2-20.2-9.6-38.5-20.4-55.6c-9.4-14.8-19.5-29.1-27-45.1c-11.7-25.1-13-51-6.3-77.5c0.6-2.3,1.5-4.5,2.6-6.6
	c5.3-10.5,11.9-20,20.4-28.1c16.6-14.2,35.6-23.3,57.4-25.9c7.5-0.9,15.2-3.3,22.9-0.2c12.6,1.6,25.1,3.4,37,8.3
	c18.7,7.7,34.2,19.2,45.4,36.2c1.2,1.9,2.5,3.5,4.7,4.2c22.8,6.9,45.5,13.8,68.3,20.6c8,0.6,15.7,2.1,22.4,7
	c9.1,2.8,18.2,5.7,27.3,8.5c5.2,1.6,9.2,4.1,8.9,10.2c-0.3,6.1-4.3,8.3-9.8,9.2c-12.7,2.1-25.4,4.5-38.1,6.8
	c-4.3,3.2-9.6,2.1-14.2,3.5c-2.9,0.2-5.7,1.8-8.7,0.2c-19.8,3.2-39.6,6.4-59.4,9.5c-1.8,0.3-2.7,1.5-3.7,2.8
	c-15,21.3-41.1,36.7-74.2,40.5c-0.9,1.7,0.4,2.9,1,4.3c25.5,60.3,22.1,118.9-11.2,175.4c-19.6,33.2-49.2,53.9-85.2,66.2
	c-0.9,0.3-1.8,0.8-2.7,1.2c-3.1,2.9-7.1,3.8-10.9,4.5C263.5,445.4,259.8,447.8,258.3,453.2z"/>
<path style="fill:#C28DCA; transform:scale(0.2)" :class="ValueId+'_color6'" d="M28.6,569.3c1.8-0.1,3.6-0.2,5.4-0.2c183.6,0,367.2,0,550.8,0c1.6,0,3.2,0.1,4.8,0.2
	c3,8.5-5,16.9-12.6,16.6c-6.1-0.2-12.2,0-18.4,0.1c-3.6,2.5-7.7,1.8-11.6,1.8c-115.7,0-231.4,0-347.1,0c-43.4,0-86.8,0-130.2,0
	c-3.8,0-7.6,0.4-11-1.9c-5.8,0-11.5,0.1-17.3,0C32.2,585.6,26.6,578.3,28.6,569.3z"/>
<path style="fill:#CD9CD5; transform:scale(0.2)" :class="ValueId+'_color6'" d="M58.7,585.8c164.7,0,329.3,0,494,0c2,0,4,0.1,6,0.2c-1,9.2-5.3,13-15,13c-156.5,0-312.9,0-469.4,0
	C65.2,599,62.9,597.1,58.7,585.8z"/>
<path style="fill:#824C97; transform:scale(0.2)" :class="ValueId+'_color1'" d="M523.6,138.7c4.7-1.5,9.6-2.1,14.5-2.3c17.8,39.6,35.2,79.4,48.4,120.8c3.2,10,6.4,20,6.5,30.7
	c0.1,29.6-17.6,54.3-45.7,63.5c-1.1,0.4-2.2,0.9-3.3,1.3c-13.4,2.1-26.7,2.5-39.7-2.6c-12.9-5.1-23.4-13-30.9-24.9
	c2.3-2.1,2.4-2.3,6.6-0.4c12.7,5.7,25.9,6.1,39.2,3.4c32.7-6.6,54.9-40,48.5-72.7c-3.4-17.4-9.7-34-15.8-50.7
	c-7-19.3-15.1-38.1-23.1-56.9C527.4,144.7,525.7,141.6,523.6,138.7z"/>
<path style="fill:#AB72C1; transform:scale(0.2)" :class="ValueId+'_color4'" d="M549.8,101.7c-7.5-2.3-14.9-4.7-22.4-7c1.7-8.9,4-17.4,10.2-24.4c8.7-9.6,19.7-13.7,32.4-14
	c3.8-0.1,5.2,1.1,5.2,5c-0.1,17.2-7,30.3-22.5,38.4C551.6,100.2,550.7,101,549.8,101.7z M515.2,140.1c-6.1,14.2-12.4,28.3-18.3,42.6
	c-12.8,31-26.2,61.7-33.4,94.6c-3.8,17.4,0,33.4,9.9,48c1.8-2.2,3.3-0.2,4.7,0.5c11.6,6.1,24.3,6.9,36.7,5.1
	c37.8-5.5,63.7-42.7,53.4-80.8c-10.2-37.5-25.1-73.2-40.6-108.7c-0.9-2.1-2-2.7-4-2.7C520.7,138.5,517.9,139.2,515.2,140.1z"/>
<path style="fill:#FFFFFF; transform:scale(0.2)" :class="ValueId+'_color2'" d="M104.1,417.3c-20.7-7.6-38.9-19.1-53.1-36.1c-20.2-24.3-17.7-53.5,6.7-77.4
	c19.2-18.8,42.7-29.6,68.2-36.4c55.3-14.7,109.8-12.8,163.2,9c13,5.3,24.9,12.4,35.6,21.6c3.4,2.9,7,4.6,11.4,2.6
	c4.4-2,5.4-5.8,6-10.2c4.4-32.3-4.1-61.4-20.8-88.8c-10.4-17.1-22.5-33.3-30-52.2c-6.5-16.3-8.4-33.3-5.1-50.4
	c3.7-19.2,16.1-32.4,32.5-42.1c31.8-18.8,75.9-16.1,104.5,6.6c6.3,5,11.9,10.5,15.6,17.8c6,16.3,0.7,31.1-7.5,44.8
	c-12.9,21.6-33.1,33.3-57,39.2c-6.9,1.7-14,2.8-21.3,2.6c-5.7-0.1-5.9,0.3-3.3,5.7c1.1,2.3,2.4,4.6,2,7.3c-0.6,3.8,0.7,6.9,2.6,10.1
	c3.6,6.1,7.2,12.3,9.2,19.2c3.9,12.6,5.8,25.3,6.6,38.6c1.7,30.8-4.4,59.7-17.7,87.2c-16.9,35.2-43.6,60.2-80.1,74.5
	c-24.9,9.7-50.6,14.8-77.2,17c-22.6,1.8-44.8-0.2-67-3.9C120,422.4,112.1,419.7,104.1,417.3z"/>
<path style="fill:#FFFFFF; transform:scale(0.2)" :class="ValueId+'_color2'" d="M239.1,500.2c0,14.7-0.1,29.4,0.1,44.2c0.1,4.2-0.7,5.9-5.4,5.8c-11.1-0.4-22.3-0.2-33.4-0.1
	c-3.6,0.1-5.3-0.5-5.2-4.8c0.2-29.2,0.1-58.5,0-87.7c0-3.2,0.7-4.6,4.2-4.6c12.1,0.1,24.2-0.9,36.2-2.9c4.4-0.7,3.4,2,3.4,4.2
	C239.1,469.6,239.1,484.9,239.1,500.2C239.1,500.2,239.1,500.2,239.1,500.2z"/>
<path style="fill:#D0D0D0; transform:scale(0.2)" :class="ValueId+'_color3'" d="M104.1,417.3c10.9,2.1,21.6,4.8,32.6,6.1c18.4,2.3,36.8,4.2,55.6,2.6c18.6-1.6,37-3.9,55-8.8
	c21.8-6,42.2-14.7,60.5-28.4c26.5-19.8,42.1-46.7,52.6-77.3c5.7-16.7,8.3-34,8.6-51.3c0.3-15.5-1.2-31.2-5.1-46.5
	c-0.3-1.1-0.3-2.3-0.4-3.5c6.6,13.1,9.8,27.3,11.6,41.6c4.8,37.7-1.9,73.2-20.8,106.3c-16.6,29-40.6,48.9-72,60.4
	c-35.9,13.2-72.8,17.7-110.8,14.5c-21.9-1.8-43.2-6.5-63.8-14C106.5,418.7,105.4,417.9,104.1,417.3z"/>
<path style="fill:#D0D0D0; transform:scale(0.2)" :class="ValueId+'_color3'" d="M351.8,181c-1.7-3.4-3.1-6.9-5.2-10.1c-2.7-4.1-0.7-4.8,2.8-4.6c14.9,0.6,29.2-2.5,42.7-8.6
	c23-10.3,39.5-26.8,46.2-51.7c2.1-8,2.1-16.4,0.6-24.7c13.1,19.6,11,45.6-5.5,64.5c-14.3,16.3-32.5,25-53.9,27.7
	c-5.1,0.7-10.3,1.5-15.4,1C358.4,174,354.3,176,351.8,181z"/>
<path style="fill:#FDFB72; transform:scale(0.2)" :class="ValueId+'_color5'" d="M533.3,117.6c-10.7,1.8-21.4,3.7-32.1,5.5c-11,1.8-22,3.3-32.9,5.4c-4.4,0.9-4.5-0.1-3.6-4
	c2.1-9.3,2.4-18.8,0.1-29.2c23.5,7.2,46,14.2,68.5,21.1C533.3,116.8,533.3,117.2,533.3,117.6z"/>
<path style="fill:#824C97; transform:scale(0.2)" :class="ValueId+'_color1'" d="M215.4,358.6c-27.5-0.4-55.7-6.9-82-20.7c-6.3-3.3-8.6-8.4-6.1-13.5c2.6-5.4,8-6.6,14.9-3.1
	c37.4,18.9,76.3,23.4,116.9,13.1c6.9-1.7,11.8,0.7,13.3,6.3c1.5,5.4-2.1,10.3-8.8,12C248.5,356.4,233.2,358.6,215.4,358.6z"/>
<path style="fill:#824C97; transform:scale(0.2)" :class="ValueId+'_color1'" d="M406.5,97.7c-0.1,8.7-7.4,15.9-16,15.9c-8.6-0.1-15.9-7.5-15.9-16.1c0.1-8.6,7.5-16,16.1-15.9
	C399.4,81.7,406.6,89.1,406.5,97.7z"/>
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
                                    <button :style="{background:'rgba('+getterStorkBg1+')'}" @click="ShowElement(getterStorkBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStorkBg2+')'}" @click="ShowElement1(getterStorkBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStorkBg3+')'}" @click="ShowElement2(getterStorkBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStorkBg4+')'}" @click="ShowElement3(getterStorkBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStorkBg5 +')'}" @click="ShowElement4(getterStorkBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStorkBg6+')'}" @click="ShowElement5(getterStorkBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStorkBg7+')'}" @click="ShowElement6(getterStorkBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Stork= [
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
            var randomNumber = Stork[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Stork[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Stork'){
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
                getterStorkBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stork') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStorkBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stork') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStorkBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Stork') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStorkBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterStorkBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStorkBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStorkBg7: {
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
                            name:'Stork',
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