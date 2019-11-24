<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#B61C1C; transform:scale(0.2)" :class="ValueId+'_color3'" d="M376.9,437.3c30.7,6.3,60.3,15.3,87.4,31.5c18.5,11,30.1,26.2,33.1,48.2c3.3,24.1,7.9,47.9,12,71.9
	c-43.8,36.5-93.6,61.1-148.9,74.7c-66.8,16.5-133.4,14.5-199.4-4.8c-0.1-3.2,2.4-4.9,4.2-6.9c22-24.3,46.2-46.6,68.6-70.4
	c22.1-23.5,45.8-45.5,67.7-69.2c20.5-22.3,42.4-43.1,63.6-64.6C369,444,370.7,438,376.9,437.3z"/>
<path style="fill:#42A534; transform:scale(0.2)" :class="ValueId+'_color6'" d="M265.9,482.4c-15.4-18.4-33.4-34.2-50-51.3c-1.1-1.1-2.3-2-4-1.9c-15.3,2.4-30.6,4.3-45.8,7.3
	c-31.7,6.3-62.5,15.3-90.6,32.1c-17.9,10.7-30,25.2-33.1,46.6c-3.6,24.6-8.1,49-12.2,73.5c0.5,0.7,0.8,1.7,1.3,2.3
	c0.4,0.2,0.8,0.4,1.1,0.7c1.1,0.6,1.9,1.2,2.5,1.8c1.5,1.2,3,2.5,4.3,4c0.5,0.4,1,0.9,1.4,1.4c1,0.7,2,1.4,3,2.2
	c0.2,0.1,0.3,0.1,0.5,0.3c3.3,1.9,6.9,3.9,9.3,6.7c3.2,2.2,6.5,4.4,9.8,6.5c2.7,0.3,5.5,1.9,8.5,5.1l0,0c4.3,2.4,8.6,4.7,13.1,6.8
	c10.5,4,21.2,6.9,29.8,14.5c1.5,0.9,3,1.8,4.5,3c8.2-4.4,12.6-12.8,19-19c40.2-39.2,78-80.6,118.2-119.8c0.7-0.7,1.6-1.4,2.1-2.2
	c3.4-5,8.7-8.5,10.7-14.6C269.1,485.8,267.4,484.2,265.9,482.4z"/>
<path style="fill:#ECC82F; transform:scale(0.2)" :class="ValueId+'_color7'" d="M118.9,643.9c4.6-7.4,11.3-13,17.2-19.1c44.2-45.6,88.7-90.9,133-136.4c5.4-8,12.6-14.4,18.9-21.5
	c10.5-11.6,22-22.2,33-33.4c3.3-3.4,6.7-5.2,11.4-3.7c15,1.5,29.9,3.5,44.4,7.4c-39,40-78,79.9-117,119.9
	c-32.9,33.8-65.8,67.7-98.7,101.6C146.6,655.4,133,649,118.9,643.9z"/>
<path style="fill:#FFB74D; transform:scale(0.2)" :class="ValueId+'_color2'" d="M215,361.6c-7.7-8.1-15.4-16.1-23.1-24.2c-13.7-13.7-21.3-31-28.3-48.6c-2.6-6.6-4.6-13.4-11.5-17
	c-6.6-4.3-9.1-11.2-11.1-18.3c-3.8-13.3-6.2-26.9-6.8-40.8c-0.3-8.4,1.8-15.9,8.1-21.9c8.2-4.3,9.3,3.8,13.5,7.8
	c1.7-3.4,0-7.9,3.2-10.5c3.1-2.4,6.9-3.2,10.4-4.5c18.8-7,33.5-20,47.5-33.7c15.2-15,31.3-28.9,46.8-43.6c4.6-4.4,8.4-3.6,12.5,0.3
	c14.7,14,30.4,26.9,44.6,41.4c16.5,16.8,34.5,31.6,57.7,38.3c6.9,2,4.7,7.3,5.1,12.5c4.9-3.1,5.6-12.7,13.9-8.1
	c6.3,5.7,8.4,12.8,8.2,21.1c-0.4,15.5-2.9,30.6-7.8,45.3c-2,6-4.2,12-10.5,15.2c-6.7,3.7-8.9,10.2-11.4,16.9
	c-5.7,15.2-12.8,29.8-22.9,42.6c-1.6,2-3,4.1-5.4,5.3c-7.7,8.2-15.3,16.4-23,24.5C288.1,394.1,251.2,394.1,215,361.6z"/>
<path style="fill:#261D17; transform:scale(0.2)" :class="ValueId+'_color1'" d="M397.5,190.7c-6.7-1-8.6,4-10.8,8.6c-0.7,1.5-1,3.9-3.4,3.3c-2.1-0.5-2.4-2.9-1.9-4.4
	c2.9-8.4-2.6-10-8.8-11.9c-18.1-5.7-32.7-17.2-46.1-30.2c-16.9-16.5-34.6-32.1-51.9-48.3c-3.8-3.5-6-3.7-9.9,0
	c-19.2,18.2-38.8,35.9-58.1,53.9c-12.4,11.6-26.4,20.6-42.7,25.7c-4.2,1.3-6.7,2.9-5.9,7.8c0.4,2.5,1.8,6.4-1.8,7.2
	c-3.2,0.7-3.1-3.3-4.2-5.4c-2.1-4.1-4.7-7.3-10-6.3c0.9-37.6,2-75.1,14.5-111.1c12.7-36.5,37.4-58.9,76-65.2
	c28.6-4.7,57.2-4.8,85.3,2.4c37,9.4,57.2,35.6,67.6,70.7c6.8,23,9.4,46.7,10.8,70.5C397.1,168.9,397.2,179.8,397.5,190.7z"/>
<path style="fill:#ECE5E0; transform:scale(0.2)" :class="ValueId+'_color4'" d="M201.1,216.6c1.1-2.2,3.5-1.7,5.3-2.3c3.7-1.4,7-2.5,5.6,4.3c-1.2,5.7,3,9.1,8.3,9.6
	c5.2,0.5,9.5-2.8,9.4-7.8c-0.2-8.9,4.1-4.9,7.5-3.2c2.9,1.5,5.4,3.6,8.1,5.4c1.5,2.2-0.2,3.3-1.5,4.5c-13.5,7.9-30.4,6.5-39.3-3.3
	C202.8,221.7,200.9,219.7,201.1,216.6z"/>
<path style="fill:#F0E9E4; transform:scale(0.2)" :class="ValueId+'_color4'"  d="M294.3,222.7c2.3-1.6,4.4-3.4,6.9-4.7c3.8-2,8.6-7.4,9,3.1c0.2,5,5.1,8.1,10.9,6.7
	c5.9-1.4,7.8-6.2,5.7-14.7c4.2,1.6,10.9-2.6,10.6,6.3c-5,9.9-17.4,14.8-30.4,11.8c-3.9-0.9-7.9-1.7-11.2-4.3
	C294.8,225.8,293.2,224.7,294.3,222.7z"/>
<path style="fill:#B61C1C; transform:scale(0.2)" :class="ValueId+'_color3'" d="M301.9,318.8c3,3.4-0.7,4.4-2.4,5.6c-17.6,13.2-41.8,13.2-59.4,0c-1.7-1.3-5.3-2.3-2.4-5.7
	c7.2-5.1,15.6-5.6,23.9-4.9c5.6,0.5,11,0.6,16.5,0C286.5,312.9,294.7,313.7,301.9,318.8z M297.1,313.1c-6.1-7.8-13.4-10.2-22.6-5.8
	c-4.3,2-8.4,0.2-12.5-0.8c-10.4-2.4-19.2,1.9-24.2,12.2c21.4-3.7,42.8-4.3,64.2,0.1C300.3,316.9,298.6,315.1,297.1,313.1z
	 M269.7,176.7c-4,0-6.1,2-6.2,6.1c-0.1,4.4,2,6.6,6.5,6.5c4,0,6.1-2,6.1-6.1C276.3,178.8,274.2,176.6,269.7,176.7z"/>
<path style="fill:#261D17; transform:scale(0.2)" :class="ValueId+'_color1'" d="M152,271.8c6.4,0.3,9.2,4.1,11,10c6.2,20.2,17,38.2,28.8,55.6c-16.4-10.2-25.9-25.9-33.1-43.2
	C155.8,287,152.9,279.7,152,271.8z M347.7,337.1c12.6-17.3,23-35.9,29.3-56.3c1.8-5.7,4.7-8.4,10.4-8.4c-5.1,24.6-15.7,46-35.2,62.4
	C351,335.8,349.8,337.3,347.7,337.1z M294.3,222.7c5.1-12.6,15-18.4,29.5-16.9c8.1,0.9,15.2,4.5,22.6,8.3c-1.9,3.6-6.9,1.6-8,5.4
	c-0.6,0.5-1.3,0.4-1.8-0.1c-5.5-4.9-5.5-4.9-7.3,1.8c-1.2,4.5-3.8,7.9-8.5,8.6c-4.6,0.7-9.4-1.2-10.9-5.3c-2.8-7.6-6.3-7-11.4-2.8
	C297.3,222.7,295.9,223.5,294.3,222.7z M199.5,216.7c-1.8-0.4-4.7,0.9-5.3-1.6c-0.7-2.8,2.4-2.6,4-3.3c7.5-3.6,15.2-6.7,23.8-6.1
	c11.4,0.7,19.4,6.1,23.5,16.9c-1,0.6-2,0.5-2.8-0.1c-5.4-4.1-9.9-6.5-13.2,2.6c-1.3,3.7-6,5.3-10.4,4.5c-4.1-0.7-7.7-3-8-7.1
	c-0.5-7.5-4.6-6.9-9.6-5.1C200.8,217.4,200.1,217.1,199.5,216.7z M353.1,199.3c-2.5,1.1-4.6-0.5-6.4-1.5c-13.4-7.7-27-6.7-40.9-1.7
	c-4,1.5-10.1,5.9-12.4-0.7c-2.6-7.7,5.5-7.7,10-9.2c17.5-5.8,33.4-2.7,47.2,9.6C351.7,196.7,353.1,197.5,353.1,199.3z M185.8,199.7
	c16.8-18.9,37.6-19.5,57-11.6c3.1,1.2,5.3,3.3,3.9,7.1c-1.4,3.7-4.4,3.6-7.6,2.6c-4.8-1.5-9.6-3.3-14.5-4.5
	c-9.3-2.3-18.5-2.2-27.3,2.4C193.9,197.3,190.6,199.1,185.8,199.7z M201.1,216.6c7.2,12.3,16.6,16.3,31.9,13.3
	c3.7-0.7,7.3-1.8,10.9-2.7c0.1,0.5,0.3,1.2,0.2,1.4c-14,11.3-37.9,4.9-44.6-11.8C200,216.6,200.6,216.6,201.1,216.6z M295.8,227.1
	c6.2,1.2,12.2,3.3,18.6,3.4c9.6,0.1,17.5-2.7,22.9-10.9c0.3,0,0.7-0.1,1.1-0.1c0.5,3-1.7,4.6-3.4,6.4
	C325.9,235.6,304.1,236.2,295.8,227.1z"/>
<path style="fill:#FB8C00; transform:scale(0.2)" :class="ValueId+'_color5'" d="M215,361.6c9.6,5.5,18.6,11.8,28.5,16.6c23.9,11.4,45.6,4.9,66.8-7.3c5-2.9,9-7.3,14.5-9.2
	c-1.2,8.4-2.3,16.9-3.6,25.3c-1.9,12.5,0.4,24.5,3.9,36.4c1.2,4,4.3,5.2,7.5,6.5c-4.2-0.4-7.1,1.8-9.8,4.7
	c-15.6,16.3-31.4,32.4-47.2,48.6c-1.9,2-3.6,4.4-6.4,5.3c-18.3-20.6-38.3-39.5-57.3-59.3c8.6-17.1,8.6-35.1,5.6-53.4
	C216.7,371,215.8,366.3,215,361.6z M282.9,221.2c-5.3,12.1-5,24.2-0.1,36.5C280.8,245.7,282.2,233.5,282.9,221.2z"/>
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
                                    <button :style="{background:'rgba('+getterIndianWomanBg1+')'}" @click="ShowElement(getterIndianWomanBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterIndianWomanBg2+')'}" @click="ShowElement1(getterIndianWomanBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterIndianWomanBg3+')'}" @click="ShowElement2(getterIndianWomanBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterIndianWomanBg4+')'}" @click="ShowElement3(getterIndianWomanBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterIndianWomanBg5+')'}" @click="ShowElement4(getterIndianWomanBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterIndianWomanBg6+')'}" @click="ShowElement5(getterIndianWomanBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterIndianWomanBg7+')'}" @click="ShowElement6(getterIndianWomanBg7)" :class="this.ValueId+'_color7btn'"></button>
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
        var IndianWoman= [
            {top:135 ,left:106},
            {top:95 ,left:32},
            {top:127 ,left:12},
            {top:9 ,left:99},
            {top:502 ,left:81},
            {top:362 ,left:123},
            {top:251 ,left:133},
            {top:376 ,left:155},
            {top:134 ,left:110},
            {top:468 ,left:124},
        ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = IndianWoman[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  IndianWoman[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'IndianWoman'){
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
                getterIndianWomanBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'IndianWoman') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianWomanBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'IndianWoman') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianWomanBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'IndianWoman') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianWomanBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterIndianWomanBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianWomanBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterIndianWomanBg7: {
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
                            name:'IndianWoman',
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