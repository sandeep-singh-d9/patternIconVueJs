<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#824C97; transform:scale(0.2)" :class="ValueId+'_color2'" d="M378,542c-18.2-0.4-35.7-4.8-49.3-19.3c-3.5-3.7-6.5-7.9-8.6-12.5c-1-2.3-2.1-2.6-4.3-1.6
	c-17.8,8.3-35.6,8.2-53.4,0.1c-2.1-0.9-3.2-0.9-4.4,1.4c-11.6,22.3-31.5,30.9-55.2,31.7c-38.8,1.3-70.4-20.5-86.5-59.4
	c-10.3-25-14-50.6-4.9-76.9c0.7-1.9,0.1-3.1-1-4.6c-24.8-30-24.6-63-10.2-96.9c11.3-26.9,28.8-49.2,53.7-65.1
	c2.3-1.5,2.4-2.6,1.2-4.9C142.4,210.4,141,185,144.2,159c0.7-5.4,0.2-9.4-4.3-13.2c-8.6-7.3-15.7-16.2-21.4-26
	c-16.2-27.5-10.4-52.9,16.1-70.9c20.9-14.2,44.4-13.8,65.5,2.3c7.3,5.6,12.4,6.5,20.8,2c19.4-10.5,40.6-15.8,62.6-16.7
	c28.3-1.1,54.6,6.4,79.4,19.7c3.5,1.9,5.7,2.3,9.1-0.6c10.5-8.9,22.5-14.7,36.4-16.6c26.6-3.7,63.8,24.4,60.3,55.3
	c-1.6,14-8.1,25.6-16.4,36.5c-4.1,5.4-8.4,10.8-13.8,14.8c-4.9,3.8-5.3,8.1-4.6,13.6c2.5,18,2.2,36-2.4,53.7
	c-1.9,7.1-4.2,14.1-8.1,20.3c-2,3.2-1.2,4.3,1.7,6.3c32.6,22.4,53.5,52.9,60.9,91.9c4.7,24.7-0.7,47.5-16.6,67.3
	c-2.7,3.4-3.2,5.9-1.8,10c13.2,40.3-6.5,104.7-53.9,126C402.7,539.6,391,541.9,378,542z"/>
<path style="fill:#FF8453; transform:scale(0.2)" :class="ValueId+'_color5'" d="M393,311.2c0,1.1,0,2.3,0,3.4c0,5.7-1.5,9.5-7.9,12.1c-21.2,8.8-31.3,25.9-32.7,48.5
	c-0.3,4.3-0.5,8.7,0.2,12.9c0.8,4.6-1.1,7.4-4.1,10.2c-16.3,15.3-34.5,27.7-54.8,37.3c-3.2,1.5-5.9,1.5-9,0
	c-20.7-9.8-39.4-22.6-56-38.5c-2.3-2.2-3.3-4.4-3.1-7.9c0.9-10.3,0.7-20.6-2.7-30.6c-5.5-16.3-16.5-27.1-32.2-33.2
	c-3-1.2-4.3-2.6-4.9-5.8c-4.2-23.3,7.9-43.5,29.2-48.1c8.9-1.9,17.2,0.4,25,4.5c18.4,9.7,31,25.3,42.3,42.1c0.6,0.9,1.2,1.9,1.8,2.9
	c3.6,5.5,6.5,5.6,10,0.1c8.1-12.8,17.4-24.6,28.8-34.5c9.1-7.9,19-14.5,31.3-15.5C376.4,269.5,392.9,286.9,393,311.2z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color4'" d="M296.3,280.1c-25.1-0.1-40.8-5.6-55.4-15.5c-13.8-9.3-16.9-22.1-14.5-37.3
	c5.5-35.9,35.4-54.6,71.1-50.6c30.6,3.4,49.4,21.2,54.3,50.6c2.5,15.1-0.7,27.9-14.5,37.3C322.5,274.6,306.6,280.1,296.3,280.1z"/>
<path style="fill:#AB72C1; transform:scale(0.2)" :class="ValueId+'_color1'" d="M354.2,262.2c9.5-14.4,8.2-29,4.3-43.5c-9-34-38-53.5-75.1-51.4c-38.8,2.2-67.6,33.5-66.3,72.1
	c0.3,7.8,0.6,15.8,7.1,21.9c-25.5,4-52.1-11.3-63.7-36.2c-7.3-15.7-9.1-32.5-8.6-49.5c0.8-28.3,7.9-54.7,25.8-77.2
	c22.1-27.9,51.6-44.3,86.1-50.4c51.2-9,95.3,6.9,130.8,44.2c26.3,27.7,33.7,62.5,31.3,99.7c-1.4,21-7.7,39.9-24.3,53.9
	C388,257.2,372,261.6,354.2,262.2z M458.5,409.3c-6.8-18.2-18.1-26-37.3-25.3c-21.3,0.8-40.6,7.4-57.3,20.7
	c-25.4,20.2-41,45.8-40.8,79.2c0.1,23.2,12.8,40.5,34.2,46.1c24.6,6.5,48,3,68.4-12.7c25.9-20.1,36.1-48,37.6-79.8
	C463.4,427.8,461.9,418.4,458.5,409.3z M121,472.3c14.4,42.9,50,65.6,92.8,59.5c20.9-3,35.1-15.8,39.8-36.1
	c2.4-10.2,2-20.5-0.2-30.8c-9.4-43.2-47.7-76.8-91.9-80.7c-23.5-2.1-36.9,7.1-43.5,29.9c-2.2,7.4-3.2,15.1-2.9,22.4
	C114.9,449.1,117.2,460.9,121,472.3z M478.7,351.3c1.4-24.3-7-45.7-19.9-65.7c-10-15.5-22.5-28.6-38.2-38.5c-3.1-2-5.4-2.5-8.1,0.8
	c-4,4.8-9.2,8.2-14.5,11.5c-5.7,3.5-12.1,5.7-18.8,8.4c16.8,10.8,22.8,26.5,22.8,45c0,7.7,0,7.8,7.7,7.9c3.3,0,5.8,1.1,5.7,4.6
	c0,3.2-2.3,4.4-5.4,4.4c-6.1,0.1-11.9,1.6-17.6,3.4c-25.1,7.9-36.1,32.2-29.2,60.8c13-8.8,27.2-14.5,42.5-17.3
	c21.6-4,41.4-2.5,55.6,18C472,381.8,477.8,367.5,478.7,351.3z M166.5,249.4c-4-4.7-6.9-3.9-11.1-0.9c-30.4,21.6-49.9,50.4-55.5,87.4
	c-3.3,21.5,2.3,41.3,16.9,58.6c8.5-11.7,19.4-18.8,33.6-19.5c14.4-0.7,28.4,2.2,41.9,7.2c8.1,3,15.5,7.3,23,11.9
	c7.2-37.7-10.5-60.7-45.5-64.2c-3.6-0.4-7.4-0.3-7-5c0.4-4.7,4.5-4.2,7.9-4c0.2,0,0.4,0,0.6,0c5.1,1.6,5.4-1.1,5.1-5.1
	c-0.5-6.4,0.2-12.7,1.8-19c2.9-11.8,9.4-21.1,19.9-28.3C185.6,264.3,174.7,258.8,166.5,249.4z M430.7,140.7
	c12.9-11.9,23-24.7,27.5-41.2c1.1-4.1,1.5-8.5,0.8-12.9c-2.5-16-12.6-26.1-25.9-33.5C415.3,43.1,394,47.3,376.3,64
	C403.7,83.1,421.8,108.2,430.7,140.7z M180.3,50.5c-23.6-8.4-52.4,6.1-59.8,30.2c-1.3,4.2-2.1,8.4-1.6,12.8
	c2.6,19.6,14.2,33.7,28.4,47.3c8.7-32.8,26.9-58,54.5-77.1C195,57.9,188.2,53.3,180.3,50.5z M245.9,425.5
	c13.7,21.6,21.4,44.6,17,70.5c-0.5,3.1,1.2,3.5,3,4.3c15.4,7.3,30.7,7.3,46.2,0.2c2.9-1.3,3.8-2.7,3.1-5.9
	c-2.8-14.8-0.3-29.1,4.3-43.2c3.2-9.8,8.2-18.7,13.3-27.7c-1.9,0.8-3.6,1.8-5.2,2.8c-10.8,7.2-22.1,13.5-33.8,19
	c-3.4,1.6-6.1,1.4-9.5-0.1c-13.5-6.2-26.2-13.7-39.8-23C245.4,424.5,245.6,425,245.9,425.5z M287.8,310.2c0.9,1.3,1.7,1.2,2.5,0
	c5.4-7.9,11.4-15.2,18.6-23.1c-13.6,2.7-26.1,2.6-39.7,0.1C276.4,295,282.5,302.4,287.8,310.2z"/>
<path style="fill:#5D4037; transform:scale(0.2)" :class="ValueId+'_color3'" d="M243.9,171.9c-0.1,8.6-7.4,15.7-16,15.6c-8.6-0.1-15.7-7.4-15.6-16c0.1-8.5,7.5-15.7,16-15.6
	C236.9,156,244,163.3,243.9,171.9z M334.3,171.6c0,8.6,7.1,15.8,15.7,15.9c8.5,0.1,15.9-7.2,15.9-15.7c0-8.6-7.1-15.8-15.7-15.9
	C341.5,155.9,334.3,163,334.3,171.6z M284.7,249.1c0.7,5.2-1.5,5.9-6,4.6c-7.7-2.2-14.7-5.7-20.5-11.2c-2.4-2.3-5-4.1-7.7-1.1
	c-2.7,2.8-1,5.3,1.4,7.7c20.6,19.5,53.5,19.7,74.3,0.4c2.4-2.3,5.1-4.6,2.1-8c-3-3.3-5.7-1.1-8.2,1.3c-6,5.7-13.2,9.2-21.2,11.2
	c-3.5,0.9-5.8,0.7-5.2-4c0.4-3.5,0.3-7.2,0-10.7c-0.3-3.4,0.6-5.2,4.2-6.5c10.2-4,15.8-14.8,13.6-25.1c-2.2-10.5-11.4-17.9-22.3-18
	c-10.7,0-19.8,7.4-22,18.2c-2.1,10.1,3.3,20.8,13.2,24.7c3.8,1.5,4.7,3.5,4.4,7c-0.2,1.5,0,3,0,4.5
	C284.7,245.7,284.5,247.4,284.7,249.1z"/>
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
                                    <button :style="{background:'rgba('+getterTeddyBearBg1+')'}" @click="ShowElement(getterTeddyBearBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTeddyBearBg2+')'}" @click="ShowElement1(getterTeddyBearBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTeddyBearBg3+')'}" @click="ShowElement2(getterTeddyBearBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTeddyBearBg4+')'}" @click="ShowElement3(getterTeddyBearBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTeddyBearBg5 +')'}" @click="ShowElement4(getterTeddyBearBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTeddyBearBg6+')'}" @click="ShowElement5(getterTeddyBearBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTeddyBearBg7+')'}" @click="ShowElement6(getterTeddyBearBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var TeddyBear= [
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
            var randomNumber = TeddyBear[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  TeddyBear[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'TeddyBear'){
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
                getterTeddyBearBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TeddyBear') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TeddyBear') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TeddyBear') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTeddyBearBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTeddyBearBg7: {
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
                            name:'TeddyBear',
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