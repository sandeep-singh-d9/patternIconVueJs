<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(14, 14, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M193.6,613.5c-8.2-7.1-8.7-9.9-3.4-19.8c9.7-18,19.3-36.1,29.2-54c1.6-2.9,1.8-5.1,0.2-8.2
	c-16.8-33.1-33.3-66.4-50.3-99.4c-4.6-9-4.4-16.4,1-25c20-32.2,39.2-65,59.5-97.1c6.5-10.3,9.7-20.6,7.3-33.3
	c-6.5,4.1-13.2,7.9-19.3,12.4c-7.7,5.6-15.1,6.1-23.9,1.9c-19.1-9.3-39.3-12.3-60.4-7.6c-6.8,1.5-12.5-2.2-13.8-8.2
	c-1.3-6.3,2.6-11.5,9.9-13.1c24.2-5.3,47.5-2.4,69.9,7.6c3.4,1.5,5.9,1.6,9.2-0.5c11.6-7.7,23.4-15.1,35.2-22.4
	c2.7-1.7,3.3-3.6,3.7-6.6c2.1-14.4-1.7-26-14.6-33.9c-0.3-0.2-0.6-0.5-0.9-0.8c-19.2-18.2-16.6-12.4-17.3-36.9
	c-0.6-21.7-9.2-40.1-26.6-53.8c-2.6-2.1-5.6-4-6.4-7.6c-1.1-4.8-0.2-9.2,4.2-12.1c4.5-2.9,8.9-2.6,13.3,0.7
	c20.3,15.2,32.3,35.3,36.1,60.3c0.7,4.7,1.8,9.6,1.1,14.2c-1.3,9.2,3.3,14.4,10.6,18.8c1.6-17.5,10-30.8,24.5-40.2
	c1.5-1,2.3-1.7,1.2-3.7c-20.2-38.9-40.6-77.7-72.9-108.3c-9.6-9.1-20.5-16.3-34.4-17.7c-5.6-0.6-8.6-5-7.8-10.1
	c0.7-4.7,4.7-7.7,10-7.3c14,1.2,25.8,7.5,36.6,16c22.6,17.8,38.8,40.9,53.8,64.9c10.9,17.3,20.7,35.3,29.7,53.7
	c1.6,3.2,3.1,4.3,6.8,3.5c8.2-1.8,16.7-1.8,24.9,0c3.8,0.8,5.2-0.5,6.8-3.6c15.3-30.4,31.8-60.1,52.9-87
	c11.1-14.2,23.3-27.2,38.5-37.1c8.8-5.7,18.3-9.5,28.8-10.5c5.4-0.5,9.2,2.5,9.9,7.2c0.8,5.1-2.2,9.5-7.8,10.1
	c-15.4,1.7-26.9,10.4-37.4,20.5c-17.7,16.9-31.1,37.2-43.8,57.9c-9.1,14.9-17.3,30.4-25.3,45.9c-1.1,2.1-2.3,3.7,0.8,5.7
	c14.3,9.3,22.6,22.5,24,39.8c7.8-4.3,10.7-10.1,10.8-19.2c0.3-29.5,11.8-54,35.2-72.5c6.7-5.3,13.2-5.4,17.4-0.3
	c4.3,5.1,3.1,11.8-3.5,17c-19.7,15.4-28.4,36.1-27.6,60.5c0.4,11.1-2.8,19.1-11.4,25.8c-6.6,5.1-12.3,11.3-18.5,16.9
	c-1.9,1.7-2.8,3.6-2.7,6.2c0.3,6.9-1.9,15,1,20.5c2.7,5.2,10.6,7.8,16.3,11.4c7.2,4.6,14.6,9,21.6,13.8c3.2,2.2,5.6,2.3,9.2,0.7
	c22.4-10,45.8-12.9,69.9-7.7c7.3,1.6,11.3,6.8,9.9,13.1c-1.3,6.2-7.2,9.8-14.4,8.2c-21.3-4.9-41.5-1.2-60.9,8
	c-7.6,3.7-14.3,3.5-21.2-1.4c-6.7-4.6-13.7-8.7-21.3-13.5c-0.2,10.5-1,19.6,4.9,28.9c21.5,34.1,42,68.9,63.2,103.3
	c4.6,7.4,4.8,14.1,0.8,21.8c-17,33.2-33.6,66.7-50.5,100c-1.8,3.5-2.1,6.1,0,9.8c9.9,17.7,19.3,35.6,28.9,53.5
	c5.3,9.8,4.8,12.6-3.5,19.8c-2.4,0-4.8,0-7.2,0c-4.7-0.9-7.2-4-9.4-8.1c-10.7-19.8-21.1-39.7-32.1-59.4c-3.9-7-3.8-13.1-0.1-20.2
	c11.3-21.7,21.9-43.8,33.1-65.6c2.5-4.8,2.2-8-1.6-12.1c-8.5-8.9-16.2-18.6-24.5-28c-2,1.6-1.6,3.7-2,5.5
	c-3.9,22.6-11.3,43.9-23.4,63.5c-5.9,9.5-12.5,18.5-21.9,25c-18.8,13.1-37.4,11.6-54.3-4.2c-15.3-14.3-23.8-32.6-31-51.8
	c-4.5-12.1-7.9-24.6-9.7-38.8c-5.4,4.6-8.8,9.7-12.8,14.1c-4.9,5.2-9.1,11-14.1,16.2c-2.6,2.7-3,5.2-1.3,8.6
	c11.3,22.2,21.9,44.7,33.7,66.6c3.9,7.2,4.5,13.4,0.5,20.7c-11.5,20.7-22.5,41.7-33.7,62.5c-1.9,3.5-5,4.3-8,5.5
	C198.4,613.5,196,613.5,193.6,613.5z"/>
<path :style="{fill:'rgba(175, 139, 124, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M277.3,257.3c4-0.1,8,0.2,11.9-0.3c5.6-0.7,7.4,1.1,7.3,7.1c-0.3,37.6-0.2,75.3-0.2,112.9
	c0,39,0,78.1,0,117.6c-4-0.7-5.6-3.7-7.4-6.4c-6.7-10.8-8.1-23.2-10.6-35.3c-4-19.3-5.5-39-5.5-58.8c0.2-39.4,0.1-78.9,0-118.3
	c0-4.4,0.2-8.8,1.1-13.1C274.6,260.6,275.1,258.5,277.3,257.3z M325.3,488.2c-1.6,2.6-3.8,4.6-6.1,6.5c-2.1-1.1-1.1-2.9-1.1-4.3
	c-0.1-75.8,0-151.6-0.2-227.4c0-4.9,1.6-6.2,6.1-5.8c4.4,0.4,8.7,0.2,13.1,0.2c2.2,1.2,2.7,3.3,3.1,5.5c0.9,4.1,1.1,8.3,1.1,12.5
	c0,43.8,0.3,87.6-0.1,131.5c-0.3,24.6-4.6,48.7-11.4,72.4C328.9,482.4,326.9,485.2,325.3,488.2z M345.2,210.8c0,6.7,0,13.5,0.2,20.2
	c0.1,3.3-0.8,4.6-4.3,4.5c-22.6-0.1-45.2-0.1-67.8,0c-3.5,0-4.4-1.3-4.3-4.5c0.2-6.7,0.2-13.5,0.2-20.2c2.5-6.7,8.8-9.1,14.4-11.7
	c19.7-8.9,38.6-6.6,56.5,5.3C342.5,206.1,344.3,208.1,345.2,210.8z"/>
<path :style="{fill:'rgba(123, 98, 88, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M325.3,488.2c4.5-15.6,8.8-31.2,10.9-47.3c1.3-10.4,3-20.8,3.1-31.2c0.3-45.7,0.1-91.4,0.2-137.2
	c0-5.2-0.9-10.2-2.3-15.2c11.6-0.2,14.9,1.3,17.2,7.9c0.8,2.2,0.7,4.3,0.7,6.5c0,46.9,0.7,93.9-0.3,140.8
	c-0.5,26.8-11.3,50.8-26.4,72.8C327.5,486.5,326.3,487.2,325.3,488.2z M277.3,257.3c-1.5,4.7-2.3,9.6-2.3,14.6
	c0,45.5-0.5,91.1,0.2,136.6c0.3,24.8,5,49.1,12.1,72.9c0.7,2.3,1.2,4.6,1.8,6.8c-9.3-8.9-14-20.6-18.9-32.1c-8-19-11.4-38.9-11-59.7
	c0.7-40.5,0.2-81.1,0.2-121.7C259.4,260.1,262.5,257,277.3,257.3z M345.2,210.8c-21.2-20.4-54.8-20.6-76,0
	c-0.1-7.1-0.6-14.3-0.1-21.4c0.8-10.5,6.7-17.9,15.7-23.1c15.5-8.9,35.1-7.9,49.2,3c7.3,5.6,11.4,13.1,11.4,22.5
	C345.4,198.1,345.3,204.5,345.2,210.8z"/>
<path :style="{fill:'rgba(98, 66, 64, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M237.8,340.5c0,13.4,0.2,26.3-0.1,39.2c-0.1,5.4-5.2,8.2-8.2,11.9c-9.7,11.8-19.8,23.2-29.8,34.7
	c-1.2,1.4-2.5,2.6-3.7,3.8c-0.7,0.7-1.4,1.4-2.5,0.7c-2.9-1.6-5.2-11.3-3.3-14.4c10.3-16.9,20.7-33.9,31-50.8
	c4.2-6.9,8.4-13.9,12.6-20.9C234.5,343.3,235,341.4,237.8,340.5z M378,340.4c4.3,7,8.6,14,12.9,21c10.8,17.8,21.6,35.6,32.5,53.4
	c2.9,4.8,2.2,11.5-1.8,15.5c-2.3,2.3-3.2-0.3-4.2-1.3c-6.2-6.9-12.4-13.9-18.5-21c-6.6-7.6-13-15.4-19.7-23
	c-1.7-1.9-2.7-3.7-2.7-6.3c0.1-12.5,0-25.1,0-37.6C377,340.9,377.5,340.6,378,340.4z"/>
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
                                    <button :style="{background:'rgba('+getterCricketBg1+')'}" @click="ShowElement(getterCricketBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCricketBg2+')'}" @click="ShowElement1(getterCricketBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCricketBg3+')'}" @click="ShowElement2(getterCricketBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCricketBg4+')'}" @click="ShowElement3(getterCricketBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCricketBg5+')'}" @click="ShowElement4(getterCricketBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCricketBg6+')'}" @click="ShowElement5(getterCricketBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCricketBg7+')'}" @click="ShowElement6(getterCricketBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Cricket= [
                {top:472 ,left:44},
                {top:464 ,left:57},
                {top:18 ,left:151},
                {top:294 ,left:104},
                {top:310 ,left:36},
                {top:21 ,left:79},
                {top:466 ,left:93},
                {top:512 ,left:41},
                {top:418 ,left:125},
                {top:294 ,left:52},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Cricket[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cricket[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cricket'){
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
                getterCricketBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cricket') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCricketBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cricket') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCricketBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cricket') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCricketBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCricketBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCricketBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCricketBg7: {
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
                            name:'Cricket',
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