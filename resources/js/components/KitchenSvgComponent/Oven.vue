<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#414143;transform:scale(0.2)" :class="ValueId+'_color1'" d="M415.9,345.7c-93.7,0-187.4,0-281.1,0c-9.9,0-9.9,0-11.1,9.4c-0.2-0.1-0.5-0.1-0.5-0.2
	c-1.8-8-8-7.3-14.1-7.2c-3.4,0.1-7.1,0.8-10.1-1.8c-14.5-0.1-29.1-0.1-43.6-0.2c-12.5-0.1-18.3-5.8-18.3-18.2
	c0-91.4,0-182.8,0-274.2c0-10.7,5.7-16.9,15.7-16.9c119.7,0,239.3,0,359,0c1.4,0,2.8,0.1,4.2,0.2c2.1,2.3,1.9,5.2,1.9,7.9
	c0,97.7,0,195.5,0,293.2c0,2,0,4-0.6,5.9C416.9,344.5,416.5,345.1,415.9,345.7z M415.9,345.7c0-0.4,0-0.7,0.1-1.1
	c3.7-2.8,8.1-1.7,12.1-1.8c4.2-0.1,6.3-1.7,6.1-6c-0.1-2.4,0-4.8,0-7.2c0-93.9,0-187.7,0-281.6c0-3.9-0.9-8,1.9-11.5
	c40.8,0,81.6-0.1,122.4,0c10.2,0,16.2,6.1,16.2,16.5c0.1,50.5,0,101.1,0,151.6c0,41,0,82,0,123c0,12-5.9,18-17.9,18.1
	c-14.7,0.2-29.4,0.2-44.2,0.2c-3.6,2.9-7.9,1.9-11.9,1.7c-5.7-0.2-10.7,0-11.2,7.4c0,0.6-0.8,0.8-1.3,1.1
	c-1.8-10.3-1.8-10.4-13-10.4C455.5,345.7,435.7,345.7,415.9,345.7z"/>
<path style="fill:#273339;transform:scale(0.2)" :class="ValueId+'_color3'" d="M488.3,356.2c0.1-10.5,0.1-10.6,10.8-10.6c4.6,0,9.1,0.2,13.7,0.3c1,18.1-3.2,15.5-18.1,15.5
	C491.4,361.4,489.3,359.3,488.3,356.2z M99.1,345.9c6.3-0.1,12.6,0,18.9-0.4c4.4-0.3,6.2,1,5.6,5.5c-0.2,1.3,0.1,2.7,0.2,4.1
	c-1,4.6-4,6.4-8.6,6.4C99.4,361.8,99.2,361.7,99.1,345.9z"/>
<path style="fill:#00B4BA;transform:scale(0.2)" :class="ValueId+'_color5'" d="M556.9,191c0,38,0,76.1,0,114.1c0,7.9-1.9,10-9.7,10c-26.5,0-53,0-79.4,0c-7.6,0-9.9-2.2-9.9-10
	c0-75.9,0-151.7,0-227.6c0-8.1,3.1-11,11.3-11c25.7,0,51.4,0,77,0c8.5,0,10.7,2.3,10.7,11.1C556.9,115.3,556.9,153.1,556.9,191z"/>
<path style="fill:#565656;transform:scale(0.2)" :class="ValueId+'_color4'" d="M436.2,36.6c0.1,60.5,0.1,120.9,0.1,181.4c0,39.8,0,79.6,0,119.3c0,7.6,0,7.6-7.9,7.6
	c-4.2,0-8.3-0.2-12.5-0.2c0-102.7,0-205.3,0-308C422.7,36.6,429.5,36.6,436.2,36.6z M532,269.1c-0.2,13.7-11.4,24.4-25,24.1
	c-13.2-0.3-24-11.5-24-24.7c0.1-13.7,11.4-24.5,25.5-24.2C521.9,244.6,532.2,255.5,532,269.1z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" :class="ValueId+'_color6'" d="M507.3,177.6c7.3,0,14.7-0.1,22,0c9.5,0.2,15.5,6.2,15.7,15.7c0.1,2.2,0.1,4.4,0,6.6
	c-0.2,9.1-6.1,15.5-15.2,15.7c-14.9,0.2-29.8,0.2-44.7,0c-6.5-0.1-11.6-3.3-14-9.4c-2.4-6.2-2.4-13,0-19.2c2.5-6.3,7.8-9.3,14.6-9.4
	C493,177.5,500.1,177.6,507.3,177.6L507.3,177.6z M537.8,114.4c4,0.4,9.7-1.7,9.6,6.3c-0.1,8.1-0.5,8.8-8.7,8.8c-0.4,0-0.8,0-1.2,0
	c-9.7,0-10.3-0.5-10.3-7.8C527.3,114.8,527.9,114.4,537.8,114.4z M508.4,129.5c-5.2-0.4-11,1.7-10.9-6.6c0.1-7.5,0.8-8.5,8.4-8.5
	c1.2,0,2.4,0,3.6,0c7.2,0,11.1,6.5,7.6,12.7C514.9,130.9,511,128.9,508.4,129.5z M478,129.4c-9.9,0.1-10.8-1.1-10-10.1
	c0.3-3.1,1.6-4.8,4.8-4.8c2,0,4-0.1,6-0.1c8.5,0,11.5,4,8.7,11.9C485.7,131.3,481,128.7,478,129.4z M507.8,155.2
	c-4.6-0.5-10.5,1.9-10.3-6.3c0.1-7.7,0.6-8.4,8.4-8.5c1,0,2,0,3,0c8.2,0,11,3.7,8.5,11.6C515.6,157.3,510.8,154.2,507.8,155.2z
	 M507.9,103.4c-9.8,0-10.2-0.3-10.3-6.9c-0.1-7.1,0.5-7.7,7.8-7.8c1.2,0,2.4,0,3.6,0c8,0,11,4,8.4,11.6
	C515.5,105.6,510.8,102.5,507.9,103.4z M537.4,103.4c-9.7,0-10-0.4-10.2-7.9c-0.1-5.3,1.9-7.3,7.1-6.8c1.6,0.2,3.2,0,4.8,0
	c7.6,0,10.9,5.1,8,12C546,103.1,544.8,103.5,537.4,103.4z M537.5,155.2c-4.5-0.5-10.3,2-10.3-6.2c0-7.7,0.6-8.6,8.3-8.5
	c1.2,0,2.4,0,3.6,0c7.5,0,11,5.2,7.9,12C545,156.9,540.6,154.4,537.5,155.2z M477.2,88.8c1.4,0,2.4,0.1,3.4,0
	c5.4-0.7,7.3,1.5,7.2,7.1c-0.1,5.4-1.4,8.4-7.4,7.6c-1.2-0.2-2.4,0-3.6,0c-8.6,0-10.8-2.8-8.7-11.2
	C469.6,86.5,474.4,89.8,477.2,88.8z M478.3,155.1c-10.1,0-10.2,0-10.3-6.7c-0.1-7.5,0.3-7.9,8.1-7.9c1,0,2,0,3,0
	c7.9,0,11.4,4.9,8.3,12.1C485.5,157,481.1,154.3,478.3,155.1z"/>
<path style="fill:#F7BE30;transform:scale(0.2)" :class="ValueId+'_color2'" d="M315.7,100.9c23.5-0.1,47-0.2,70.5-0.2c6.2,0,8.4,2.6,8.4,9.6c0,35.6,0,71.3,0,106.9
	c0,17.9,0,35.8,0,53.8c0,7-2.3,9.4-9.2,9.4c-82.4,0-164.8,0-247.3,0c-0.6,0-1.2-0.1-1.8-0.2c-0.7-3,1.7-4.3,3.3-5.9
	c56.7-56.8,113.4-113.5,170.2-170.2C311.4,102.6,312.8,100.3,315.7,100.9z M315.7,100.9c-1.5,1.3-3.1,2.5-4.5,3.9
	c-57,57-114,114-171,171c-1.4,1.4-2.6,3-3.9,4.5c-20.1,1.2-40.1,0.6-60.2,0.3c-4.4-0.1-6.7-3-7.1-7.3c-0.1-1.6-0.1-3.2-0.1-4.8
	c0-51.9,0-103.8,0-155.7c0-10.5,2.1-12.6,12.4-12.6c76,0,152,0,227.9,0C311.5,100.1,313.7,99.6,315.7,100.9z M507.8,234.5
	c0.2,2-0.6,2.8-1.9,3s-2.4-0.4-2.7-1.7c-0.3-1.6,0.7-2.7,2.2-2.8C506.8,232.8,507.6,233.7,507.8,234.5z M525.1,239
	c-0.2,1.3-0.9,2.1-2.3,2.1c-1.6,0-2.6-0.9-2.5-2.5c0.1-1.3,1-2.2,2.3-2.2C524.2,236.3,525,237.4,525.1,239z M491.2,241
	c-0.2,1.3-0.9,2.2-2.4,2.1c-1.4-0.1-2.2-1-2.2-2.3c0-1.7,1.1-2.5,2.7-2.3C490.7,238.7,491.3,239.7,491.2,241z M538.1,250.1
	c-0.1,1.6-0.5,2.6-2,2.7c-1.4,0.1-2.4-0.7-2.5-1.9c-0.2-1.5,0.7-2.6,2.3-2.7C537.3,248,537.8,249.2,538.1,250.1z M477.5,251.6
	c1.5,0.1,2.1,1.1,2,2.4c0,1.3-0.6,2.3-2.1,2.3c-1.7,0-2.6-1.1-2.4-2.7C475.1,252.3,476,251.5,477.5,251.6z M476.2,271.3
	c-0.3,1.3-1.1,2.1-2.5,2s-2.3-1-2.2-2.3c0.1-1.5,1-2.7,2.8-2.4C475.6,268.9,476.1,270,476.2,271.3z M535.4,284.1
	c0.1-1.3,0.9-2.2,2.2-2.3c1.6-0.1,2.6,0.9,2.5,2.6c-0.1,1.5-1.1,2-2.4,2C536.3,286.3,535.5,285.6,535.4,284.1z M481.6,287.7
	c-0.1,1.4-0.9,2.1-2.3,2.1c-1.3,0-2.3-0.7-2.3-2.1c0-1.6,1-2.6,2.6-2.4C480.8,285.5,481.6,286.3,481.6,287.7z M543.7,267.1
	c-0.1,1.3-0.8,2.2-2.1,2.3c-1.6,0.1-2.6-0.9-2.4-2.6c0.1-1.3,1-2.1,2.4-2C542.8,264.9,543.6,265.7,543.7,267.1z"/>
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
                                    <button :style="{background:'rgba('+getterOvenBg1+')'}" @click="ShowElement(getterOvenBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterOvenBg2+')'}" @click="ShowElement1(getterOvenBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterOvenBg3+')'}" @click="ShowElement2(getterOvenBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterOvenBg4+')'}" @click="ShowElement3(getterOvenBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterOvenBg5 +')'}" @click="ShowElement4(getterOvenBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterOvenBg6+')'}" @click="ShowElement5(getterOvenBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterOvenBg7+')'}" @click="ShowElement6(getterOvenBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterOvenBg8+')'}" @click="ShowElement7(getterOvenBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Oven= [
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
            var randomNumber = Oven[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Oven[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Oven'){
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
                getterOvenBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Oven') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterOvenBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Oven') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterOvenBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Oven') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterOvenBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterOvenBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterOvenBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterOvenBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterOvenBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
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
                ShowElement7(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7 + ')'
                    this.clickedInput = 'eight'
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
                    var background7Clone =tempArrayClone.background7 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Oven',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
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
                            $('.Svg_'+cloneIndex+'_color8').css({fill: 'rgba('+background7Clone+')'})
                            
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