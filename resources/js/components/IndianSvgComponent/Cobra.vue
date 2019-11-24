<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="fill:#62AC80; transform:scale(0.2)" :class="ValueId+'_color1'" d="M284.8,122.3c-8.1-13-9.5-28-12.9-42.4c-0.9-5.2-2-10.3-2.6-15.6c-1.6-13.6,7.2-23.6,20.9-23.6
	c23.7-0.1,47.4-0.1,71.1,0c12.3,0,21.2,9.3,20.3,21.6c-0.4,5.9-1.8,11.7-2.7,17.5c-1.3,5.3-3.1,10.5-3.6,15.9
	c-0.9,9.7-5.5,17.9-9.3,26.5c-5.5,12-16.6,16.4-28,20.2c-2.5,0.8-5.3,1.3-8,1.6c-3,0.2-6,0.2-9,0.1c-11.4-1.2-21.2-6-30.1-13.1
	C288,128.6,286.2,125.6,284.8,122.3z M496.7,542.5c10.3-8.8,14.3-22.2,10.1-34.3c-4.3-12.2-16.3-20.3-30.1-20.3
	c-36.8,0-73.7,0-110.5,0c-1.8,1.5-1.9,3.6-1.9,5.6c-0.4,15-0.3,30-0.1,44.9c0.3,3.6-1,7.4,1.9,10.5c39.5,0,78.9-0.1,118.4-0.1
	C488.4,546.5,493,545.6,496.7,542.5z M286.6,538.4c0.2-15,0.3-30-0.1-44.9c-0.1-2.1-0.1-4.2-1.9-5.6c-17,0-34,0.1-50.9,0.1
	c-2.1,0-4.2,0.2-5.9-1.5c-13.9-1.1-27.8-0.4-41.7-0.3c-1.7,0-3.4,0.4-4.6,1.8c-3,0-5.9,0-8.9,0c-17,0.3-31,14.5-30.2,31.5
	c0.7,15.3,10,24.3,23.7,29.3c39.5,0,79,0.1,118.4,0.1C287.6,545.9,286.3,542,286.6,538.4z"/>
<path style="fill:#85CDA2; transform:scale(0.2)" :class="ValueId+'_color3'" d="M378.8,79.9c31.3,10.8,57,28.6,71.3,59.5c12.1,26,10.3,52.1-5.8,75.3
	c-24.8,35.7-51.4,70.2-77.3,105.2c-0.2,0.3-0.7,0.5-1,0.7c-2.1-1.9-1.8-4.5-1.9-7c-0.3-14.7-0.3-29.4,0-44.2
	c-0.3-15.2-0.2-30.5-0.1-45.7c-0.1-33.4-0.5-66.7,0.2-100.1c0-1.5,0.1-3.1,0.9-4.3c6.6-10.3,7.9-22.2,10.4-33.7
	C376,83.4,376.2,80.9,378.8,79.9z M286.6,313.5c0.3-14.7,0.2-29.5,0-44.2c0.4-15.2,0.1-30.5,0.1-45.7c0.1-33.3,0.4-66.7-0.2-100.1
	c-0.1-0.6,0-1.3-0.3-1.9c-6.5-11.8-9.2-24.7-11.4-37.8c-0.3-1.7-1-3.2-2.8-3.9c-17,5.3-32.3,13.7-45.7,25.4
	c-35,30.6-46.3,76.9-13.5,119.2c16.2,20.9,31.5,42.5,47.4,63.6c8.1,10.8,15.6,22.1,24.5,32.3C286.8,318.6,286.4,316,286.6,313.5z
	 M476.1,546.9c-34-0.1-68-0.1-101.9,0c-2.1,0-4.2,0-6.3,0.6c-3.7,1.2-3.2,4.6-3.6,7.4c-4.3,26.8-19.2,44.1-45.4,51.8
	c-1.8,0.5-4.5,0.1-4.8,3c0.2,0,0.4,0.1,0.6,0.1c75.1,0,150.2,0.2,225.3,0c16.5,0,29.5-14.3,29.4-31.2c-0.2-16.1-13.9-29.6-30.3-29.7
	c-18.2-0.1-36.4-0.1-54.6-0.1C482,546.6,479,546.9,476.1,546.9z M240.8,608.7c23.6-5.2,43.7-29.2,45.4-55.1c0.2-2.6-0.3-5.2-3.4-6.1
	c-1.2-0.3-2.5-0.5-3.7-0.5c-35.5-0.2-70.9-0.1-106.4,0c-2.3,0-4.7,0-6.5,1.8c-18.4,0-36.8-0.1-55.2,0.2c-16,0.2-29.3,13.9-29.6,29.8
	c-0.3,16,12.5,30.8,28.2,31c41,0.4,82.1,0,123.1,0C235.4,608.9,238.1,609.3,240.8,608.7z M191.9,424c-6.8-11.8-18.2-15.8-28.7-10
	c-10.7,5.9-13.4,18.1-6.7,30c8.3,14.7,16.7,29.3,25,43.9c13.5,0,27,0.1,40.4,0c2,0,4.3,0.6,5.8-1.5
	C215.8,465.6,203.8,444.8,191.9,424z"/>
<path style="fill:#D4E349; transform:scale(0.2)" :class="ValueId+'_color5'" d="M284.6,548.9c0-3.4,0.1-6.8,0.1-10.2c2.4-1.7,4.5-0.2,6.5,0.7c22.7,10.2,45.4,10,68.1,0
	c2.1-0.9,4.1-2.4,6.5-0.7c0,3.4,0.1,6.8,0.1,10.1c-0.6,30.3-21.1,54.6-50.5,59.9c-0.6,0.1-1.1,0.6-1.6,0.9c-27.1,0-54.2,0-81.3,0
	c13.7-3.4,26.1-8.8,35.8-19.6C279,578.3,284.6,564.8,284.6,548.9z M284.6,487.9c0.1,1.7,0.1,3.4,0.2,5.2c1.8,2.5,4.5,3.7,7.2,4.9
	c13.8,6.2,28.3,8.5,43.1,6.5c11-1.5,22.1-3.6,30.8-11.5c0.1-1.7,0.1-3.4,0.2-5.2c-0.1-13.1-0.2-26.1-0.3-39.2c-27,13.8-54,13.8-81,0
	C284.8,461.8,284.7,474.8,284.6,487.9z M284.8,402.8c27,14.5,54,14.6,81,0c0-14.7-0.1-29.5-0.1-44.2c-26.9,14.7-53.8,14.7-80.8,0
	C284.9,373.3,284.9,388.1,284.8,402.8z M329.4,156c1.8,11.8,5.5,22.9,12.9,33.8c-4.5-2.7-7.8-5.3-11.1-7.7c-4-2.9-7.7-2.9-11.6,0
	c-3.4,2.4-6.5,5.2-10.9,7.4c7.2-10.5,10.9-21.7,12.7-33.5c0.7-4.5,1.7-9.2-1-13.5c-14.5-2-26.2-9-35.5-20.1c0,33.8,0,67.7,0.1,101.5
	c1.2,2.8,3.8,3.9,6.3,4.9c22.8,9.7,45.5,9.7,68.3,0c2.5-1.1,5.1-2.2,6.3-4.9c0-33.9,0.1-67.7,0.1-101.6c-9.3,11.3-21,18.1-35.5,20.2
	C327.7,146.8,328.7,151.5,329.4,156z M284.8,313.9c1.6,0.6,3.2,1.1,4.7,1.8c15,6.7,30.4,10,47.1,7.4c10.3-1.6,19.7-5.5,29.3-9.2
	c0-14.8,0-29.7-0.1-44.5c-13.8,6.5-28,10.9-43.6,10.3c-13.3-0.5-25.4-4.9-37.3-10.3C284.9,284.3,284.9,299.1,284.8,313.9z"/>
<path style="fill:#FD4D38; transform:scale(0.2)" :class="ValueId+'_color4'" d="M330.4,142.4c-0.5,18.3,4.5,34.9,16.6,51.2c-7.6-2.8-12.1-7-16.8-10.5c-3.5-2.5-6.1-2.7-9.5,0
	c-4.6,3.6-9.6,6.8-15.1,9.7c9.8-15.6,15.5-32.1,14.8-50.5C323.7,142.5,327,142.4,330.4,142.4z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color2'" d="M305.3,81.4c-5.5,0.2-10.2-4.2-10.4-9.7c-0.2-5.6,4-10.3,9.6-10.6c5.8-0.3,10.7,4.3,10.7,10
	C315.2,76.7,310.9,81.3,305.3,81.4z M346,61.1c-5.8-0.2-10.6,4.6-10.5,10.4c0.1,5.5,4.7,10,10.2,10c5.5,0,10.1-4.5,10.1-10
	C355.9,65.9,351.5,61.3,346,61.1z"/>
<path style="fill:#C0CE42; transform:scale(0.2)" :class="ValueId+'_color6'" d="M284.9,448.7c0-15.3,0-30.6-0.1-45.9c2.7-0.9,4.9,0.8,7.1,1.8c22.3,9.6,44.5,9.6,66.8,0
	c2.3-1,4.4-2.6,7.1-1.8c0,15.3,0,30.6,0,45.9c-1.3,2.7-3.8,3.8-6.4,4.9c-22.8,9.7-45.5,9.7-68.3,0
	C288.7,452.5,286.2,451.4,284.9,448.7z M285,358.6c1.1,2.8,3.4,4.1,6,5.2c22.9,9.8,45.8,10,68.7,0c2.6-1.1,4.9-2.4,6-5.2
	c0.1-12.7,0.2-25.3,0.3-38c-0.1-2.2-0.1-4.4-0.2-6.7c-2.4-1.7-4.5-0.1-6.5,0.8c-22.7,10-45.4,10-68,0c-2-0.9-4.1-2.4-6.5-0.8
	c-0.1,2.2-0.1,4.4-0.2,6.6C284.8,333.2,284.9,345.9,285,358.6z M284.9,269.4c2,3,5.3,4.2,8.4,5.5c21.4,8.9,42.8,8.9,64.2,0
	c3.1-1.3,6.3-2.5,8.4-5.5c0-15.2,0-30.4,0-45.6c-27,13.9-54,13.9-81,0C284.9,239,284.9,254.2,284.9,269.4z M284.8,538.8
	c1.7,0.7,3.5,1.3,5.2,2.1c14.9,6.5,30.2,9.7,46.6,7.1c10.4-1.6,19.7-5.5,29.3-9.2c0-15.2,0-30.5,0-45.7c-1.4,0.5-2.8,0.9-4.1,1.6
	c-16.1,8.1-33.1,10.5-50.9,7.4c-9.3-1.6-17.6-5.5-26.1-9C284.8,508.3,284.8,523.5,284.8,538.8z"/>
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
                                    <button :style="{background:'rgba('+getterCobraBg1+')'}" @click="ShowElement(getterCobraBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCobraBg2+')'}" @click="ShowElement1(getterCobraBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCobraBg3+')'}" @click="ShowElement2(getterCobraBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCobraBg4+')'}" @click="ShowElement3(getterCobraBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCobraBg5+')'}" @click="ShowElement4(getterCobraBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCobraBg6+')'}" @click="ShowElement5(getterCobraBg6)" :class="this.ValueId+'_color6btn'"></button>
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
        var Cobra= [
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
            var randomNumber = Cobra[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cobra[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cobra'){
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
                getterCobraBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cobra') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCobraBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cobra') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCobraBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cobra') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCobraBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCobraBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCobraBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
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
                            name:'Cobra',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
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