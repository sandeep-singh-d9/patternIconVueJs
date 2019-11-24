<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="fill:#91C527; transform:scale(0.2)" :class="ValueId+'_color1'" d="M279.9,137.9c-26.2,10.6-53.9,9.8-81.4,10.4c-18.5,0.4-17.7-2.2-27.7,13.7
	c-8.8,14.1-23.7,25.4-37,31.3c6.3-12,3.1-24.4,4.9-36.3c0.9-6.2,2.4-12,6.5-17c2.5-3.2,4.2-6.8,5.3-11.4c-15.6,1.3-30.3,3.5-42.3,14
	c-1.9,1.6-3.9,3.2-5.7,4.9c-5.2,4.7-10.8,7.8-17.8,4.3c-7.3-3.6-9.8-10-9.3-17.7c0.6-8.6,4.6-15.7,10.1-22.2
	c9.4-11.1,22.1-16.3,35.7-20.1c4.2-1.2,8.4-2.5,13-3.9c-15.2-14.7-16.9-32.2-12.7-51.1c1.3-5.6,2.4-11.3,3.6-16.9
	c0.7-3.1,2.2-5.8,4.5-8c4.6-4.5,9.3-4,13,1.2c8.9,12.6,16.9,25.8,23.9,39.5c3.7,7.3,4.4,7.7,12.6,6c10.9-2.3,21.8-4.7,32.7-7
	c16.9-3.5,33.8-5.8,51-1.7c2.1,0.5,4.1,1,6.1,1.7c1.7,0.6,4.3,0.5,4.2,3.2c-0.1,3-2.8,2.7-4.7,3.1c-1.1,0.2-2.3,0.2-3.5,0.3
	c-12.4,0.8-21.6,5.2-24.7,18.9c-1.8,8-6.3,15.3-8.5,23.3c-2.9,10.5,2.7,19.4,13.2,22c12.4,3,24.9,4.7,37.7,5.3
	c4.4,0.6,3.8,3.5,2.5,6.2C284,136,282.4,137.6,279.9,137.9z"/>
<path style="fill:#FFEC97; transform:scale(0.2)" :class="ValueId+'_color4'" d="M298.7,180.6c2.4,0.1,4.7,0.2,7.1,0.3c6.8,12.3,13.8,24.4,19.6,37.3c17.2,38.2,27.1,78.3,31.3,119.8
	c2.9,28.2,3.2,56.4,0.6,84.8c-3.9,42.8-13.3,84.1-30.4,123.6c-4.5,10.3-9.6,20.2-15.2,29.9c-4.2,7.4-4.1,7.5,3.8,9.6
	c0.8,0.2,1.4,0.6,1.9,1.3c-9.8,2.2-19.8,1.3-29.6,0.3c-6-0.6-12.3,1.1-18-1.6c7-3.3,7-3.3,2.5-10.2c-28.4-43-43.9-90.6-50.5-141.4
	c-2.6-20.1-4-40.3-3.3-60.5c1.9-52.4,12.3-102.9,35.7-150.2c5-10.2,10.4-20.3,17.2-29.4c3.4-4.5,4.3-10.3,8.3-14.3
	C286.1,178.8,292.5,177.6,298.7,180.6z M334.7,188.4c28.8,52.6,42.1,109.5,45.4,168.8c1.4,25.7,1.1,51.6-1.8,77.3
	c-5.7,50.7-18.2,99.2-42.2,144.5c-0.9,1.8-2.7,3.5-1.4,5.8c13-1.3,25.7-4.1,38-8.4c1.9-8,7.1-13.8,12.7-19.5
	c2.7-2.7,5.2-5.7,7.6-8.7c45.1-57.1,63.9-122.1,56.2-194.2c-5.5-51.8-25.8-97.7-59.2-137.7c-6.5-7.8-14.3-14.6-16.1-25.2
	c-1.5-0.3-3-0.6-4.4-1c-11.9-3.1-23.8-6.1-36-7.1C332.6,185.1,333.8,186.7,334.7,188.4z M248.7,578.5c-7.7-12.3-14-25.3-19.7-38.6
	c-19.6-45.9-29-94.1-30.5-143.8c-0.6-18.5,0.2-36.9,2.1-55.3c2.3-21.9,6.2-43.5,11.9-64.7c8.1-29.7,19.5-58,35.3-84.6
	c1.1-1.9,2.8-3.9,1-6.3c-13.2,1.2-25.5,6-38.1,9.3c-0.8,5-3.2,9-6.9,12.4c-3.3,3-6.1,6.5-8.9,9.9c-47,57.3-67.2,122.6-58.6,196.4
	c4.7,39.9,18.4,76.6,40.8,110.1c8.2,12.2,17.4,23.5,27.6,34.1c4.5,4.7,8.3,9.9,4.7,17c3,1.9,6.4,0.5,9.7,1.5c10.1,3.4,20.4,6,31,7.5
	C250.6,581.4,249.6,580,248.7,578.5z M417.3,215.5c11.5,16,21.6,32.8,29.7,50.8c23.5,52.4,30.6,107.1,21.9,163.7
	c-6.9,45.3-24.5,86.2-51.7,123c-1.5,2-4.1,3.8-2.8,7.1c13.9-6.3,26.5-14.8,38.5-24.2c28.2-21.9,50.1-48.9,63.8-82
	c17.1-41.1,19.2-83.1,5.4-125.6c-13.3-40.9-38.5-73.2-72.6-98.9c-10.9-8.2-22-16.1-34.9-21.1C413.4,211.5,415.8,213.4,417.3,215.5z
	 M166.3,547.5c-4.1-5.9-8.1-11.7-11.9-17.8c-25.3-40.4-38.6-84.7-41.4-132.1c-1.4-23.7,0.4-47.4,5.3-70.7
	c7.8-37.4,22.4-72,44.3-103.5c1.4-2.1,4-3.8,3-7c-22.4,12.6-41.5,29.2-57.6,49.2c-30.2,37.5-46,79.8-43.2,128.6
	c1.4,24.8,7.7,48.2,18.5,70.3c12.5,25.6,30,47.4,51.9,65.7c10.3,8.6,21,16.8,33.1,23C169.3,550.7,167.5,549.2,166.3,547.5z"/>
<path style="fill:#FFD11D; transform:scale(0.2)" :class="ValueId+'_color3'" d="M333.5,183c22,37.8,34.8,78.9,42.6,121.6c6.6,36.1,7.6,72.6,5.7,109.1c-2.2,42.1-10.4,83.2-24.9,123
	c-6.1,16.6-13.6,32.6-22.1,48.2c-5.7,1.5-11.5,2-17.4,2.2c-13-0.6-13.4-0.8-6.8-12.1c20.2-34.8,32.4-72.5,39.9-111.8
	c3.6-19,6-38.2,6.3-57.7c0.1-5.2,1-10.3,1-15.5c-0.2-31.1-2.6-62-8.8-92.6c-6.7-33.2-17.4-64.8-32.8-94.9
	c-3.6-7.1-9.3-13.3-10.2-21.7C315.2,180.2,324.4,180.9,333.5,183z M384.2,193.6c-3.2-1.3-6.5-3.2-10.3-2.5
	c-0.1,4.8-0.1,9.5,3.5,13.5c15.4,16.5,28.7,34.5,39.8,54.2c19.3,34.5,29.4,71.6,31.8,110.8c1.3,21.5-0.2,42.9-4.4,64.2
	c-9.8,49.1-31.5,92-66.1,128.3c-4,4.2-6.3,8.6-5.7,14.4c14.5-3.7,28.7-8.4,41.5-16.3c0.5-1,1-2.1,1.7-3
	c10.6-13.8,19.9-28.3,27.6-43.8c21.2-42.6,31.7-87.7,30.1-135.5c-0.6-16-1.8-31.7-4.8-47.4c-6.2-32.2-17.4-62.4-33.9-90.7
	c-6.3-10.8-14.1-20.6-20.5-31.3C405.8,200.6,394.7,197.8,384.2,193.6z M269.8,585.8c0.6,0,1.2,0,1.7-0.1c2.3-0.4,5.6,1.5,6.8-1
	c1-2.1-1.1-4.7-2.6-6.7c-0.2-0.3-0.4-0.7-0.6-1c-10.2-15-18.9-30.8-26.1-47.5c-18.9-43.4-27.3-89-29-136
	c-0.7-19.4,0.9-38.7,3.2-58.1c2.7-23.2,7.7-45.8,14.8-67.9c8.8-27.2,20.8-53,37.2-76.6c2.1-3.1,3.5-6.4,3.8-10.1
	c-1.6-1.6-3.2-1.3-4.9-0.3c-8.4,1.7-17.4,0.4-25.3,4.6c-1.7,6.4-6,11.5-9.1,17.2c-26.9,50.6-39.6,105.1-42.7,161.9
	c-1.3,24.4-0.1,48.8,3,73.1c4.1,32.2,11.6,63.4,23.4,93.5c7.2,18.3,15.3,36.2,26.6,52.4C256.8,583.7,263,586.6,269.8,585.8z
	 M175.7,559.2c10.9,6.1,22.1,11.1,33.9,15.1c4-0.4,3.9-3.3,3.2-6c-1-4.1-2.6-8-5.8-11.1c-15.7-15.5-28.4-33.2-39.2-52.4
	c-20.7-36.6-30.2-76.1-32.1-117.6c-0.5-11.9,0.8-23.8,2.1-35.6c2.9-26,9.9-50.8,20.8-74.5c12.2-26.6,28.2-50.6,48.7-71.7
	c2.7-2.8,6.5-5.9,3.5-10.9c-1.3,0.4-2.6,0.7-3.8,1.2c-14.5,5.5-28.8,11.4-41.4,20.7c-12.3,17.5-23.2,35.7-31.6,55.4
	c-13.2,30.8-20.7,63-22.5,96.3c-1.2,22.3,0.4,44.5,4.5,66.5c5.9,31.6,16.9,61.3,33.1,89.1c5.9,10.1,13,19.4,19.1,29.4
	C170.5,555.3,172.8,557.6,175.7,559.2z"/>
<path style="fill:#A47745; transform:scale(0.2)" :class="ValueId+'_color2'" d="M279.1,180.8c-1.6-0.1-3.3-0.2-4.9-0.3c0-14.5,2.7-28.6,5.7-42.6c1.3-1.4,2.7-2.7,3.9-4.2
	c2-2.5,1.4-4.5-1.3-6.1c7.5-26.3,18.7-50.5,38.8-69.7c11.5-11,25-18.4,40.3-22.8c7.7-2.2,14.8,1,16.9,7.1c2.5,7.4-0.7,15.8-8.2,18
	c-29.5,8.7-45.8,30.4-57.1,57.1c-8.5,20.2-12.8,41.5-14.6,63.2C292.2,180.7,285.7,180.8,279.1,180.8z"/>         
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
                                    <button :style="{background:'rgba('+getterMelonBg1+')'}" @click="ShowElement(getterMelonBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMelonBg2+')'}" @click="ShowElement1(getterMelonBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMelonBg3+')'}" @click="ShowElement2(getterMelonBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMelonBg4+')'}" @click="ShowElement3(getterMelonBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMelonBg5+')'}" @click="ShowElement4(getterMelonBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Melon= [
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
            var randomNumber = Melon[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Melon[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Melon'){
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
                getterMelonBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Melon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMelonBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Melon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMelonBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Melon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMelonBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMelonBg5: {
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
                            name:'Melon',
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