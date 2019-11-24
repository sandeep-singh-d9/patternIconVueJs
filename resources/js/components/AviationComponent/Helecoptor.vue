<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M191.3,573.6c-41.4,0-82.8,0.1-124.2,0c-14.7,0-26.9-11-28.5-25.4c-1.7-14.6,7.9-28,22.6-31.3
	c6.7-1.5,13.5-0.6,20.2-0.6c3.8,0,5.1-0.9,4.9-4.9c-0.3-9.7-0.2-19.5,0-29.3c0.1-3.4-0.9-4.3-4.2-4.3c-7.9,0-15.9,0.5-23.8-0.7
	c-19.3-3.1-39.6-23-38.1-45.9c1.2-18.4-1.1-37,0.2-55.5c5.7-76.5,65-144.4,140-160.6c15-3.2,30.2-5,45.6-4.7
	c3.6,0.1,4.7-0.8,4.6-4.5c-0.3-9.9,0-19.9-0.2-29.9c-0.1-3.1,0.8-4,3.9-4c5.1,0,11.9,2.4,14.7-1.2c2.4-3.1,0.6-9.6,0.6-14.5
	c0-6-0.2-12,0.1-17.9c0.2-3.7-0.8-4.6-4.6-4.6c-20.3,0.2-40.6,0.1-60.9,0.1c-38.6,0-77.3,0.1-115.9,0c-15.1,0-27.4-11.1-28.9-25.6
	c-1.5-14.6,8.1-27.9,22.9-31.1c2.5-0.5,5.1-0.6,7.7-0.6c56.7,0,113.5,0,170.2,0c9.3,0,9.3,0,9.4-9.1c0.2-16.1,12.4-28.8,27.9-29.1
	c16.3-0.3,29.2,12.3,29.4,28.8c0.1,9.4,0.1,9.4,9.7,9.4c57.1,0,114.3,0,171.4,0c15.1,0,27.4,10.9,29.1,25.4
	c1.6,14.9-8.3,28.4-23.3,31.4c-2.5,0.5-5.1,0.5-7.7,0.5c-57.7,0-115.5,0.1-173.2-0.1c-5,0-6.3,1.1-6.1,6.1c0.5,9.3,0.3,18.7,0,28.1
	c-0.1,3.4,1,4.3,4.3,4.3c4.9,0,11.6-2.4,14.2,1c2.4,3.1,0.7,9.5,0.7,14.5c0,6.4,0.2,12.7-0.1,19.1c-0.1,2.9,0.9,3.6,3.7,3.6
	c44.2-0.1,88.4-0.1,132.6,0c4.1,0,4.3-2.8,5.4-5c14-28.2,43.3-45,74.6-42.7c30.5,2.2,57.4,23.3,66.8,52.5
	c10.5,32.3-1.5,67.8-29.4,86.9c-28.1,19.2-65.2,17.8-91.5-3.9c-4-3.3-7-3.6-11.4-1.7c-8.2,3.5-16.6,6.5-25,9.6
	c-2.6,0.9-4.2,2.2-4.9,5.1c-14.9,62.4-55.3,100.5-114.8,120.3c-4.6,1.5-6.4,3.6-7.3,8.3C302,454.2,294,465,281.3,472
	c-3.1,1.7-4,3.5-4,6.9c0.2,10.9,0.3,21.9,0,32.8c-0.1,4.2,1.4,4.8,5,4.7c10.9-0.2,21.9-0.1,32.9-0.1c16.3,0.1,29.1,12.6,29.1,28.5
	c0.1,16.2-12.7,28.8-29.3,28.9C273.7,573.7,232.5,573.6,191.3,573.6z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M181.7,478c23.9,0,47.8,0.1,71.7-0.1c3.9,0,5,0.9,4.9,4.9c-0.3,9.7-0.2,19.5,0,29.3
	c0.1,3.4-0.9,4.3-4.3,4.3c-48.2-0.1-96.4-0.1-144.5,0c-3.3,0-4.4-0.8-4.3-4.3c0.2-9.8,0.3-19.5,0-29.3c-0.1-3.9,1-4.9,4.9-4.9
	C134,478.1,157.9,478,181.7,478z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M191.3,306c0,23.7-0.1,47.4,0.1,71.1c0,4.6-1.3,5.6-5.7,5.5c-46.8-0.2-93.6-0.2-140.3,0
	c-6.1,0-6.9-1.5-6.2-7.3C46.9,307.5,93.3,253,159.1,235c8.8-2.4,17.9-3.6,26.9-4.9c4.5-0.6,5.4,0.6,5.3,4.8
	C191.2,258.6,191.3,282.3,191.3,306z M516.2,296.4c-31.6,0-57.3-25.7-57.3-57.3c0-31.9,25.7-57.5,57.7-57.4
	c31.2,0.1,56.9,25.7,57,57C573.7,270.6,548.1,296.4,516.2,296.4z"/>
<path :style="{fill:'rgba(255, 226, 79, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M155.2,420.7c-37,0-74-0.1-111.1,0.1c-4.7,0-6-1.2-5.9-5.9c0.3-13.3,0.1-13.3,13.3-13.3
	c51,0,101.9-0.1,152.9,0.1c5.1,0,6.2-1.4,6.1-6.3c-0.2-53.1,0-106.3-0.2-159.4c0-5.1,0.9-6.6,6.4-6.6c72.3,0.2,144.5,0.2,216.8,0
	c5.6,0,6.9,1.5,6.5,6.9c-0.9,13.6,2.4,26.5,8.9,38.4c1.7,3.1,1.2,4.1-2.1,5.3c-10.8,3.9-21.5,8.2-32.3,12.2c-2.6,1-4.1,2.2-4.6,5.3
	c-7,47.7-33.7,81.4-75.2,104.2c-24.6,13.5-51.1,19.2-79.1,19.1C222.1,420.5,188.7,420.7,155.2,420.7z M272,153.6
	c0,1.6,0.1,3.2,0,4.8c-0.5,4.5,2.9,11.3-1.4,12.9c-6,2.3-15,0.7-22.7,0.9c-3.4,0.1-3.6-1.3-3.5-3c0-10.7,0.1-21.4,0-32.1
	c0-2.3,1-2.9,4.4-3.1c23.4-1.5,23.4-1.6,23.4,14.4C272,150,272,151.8,272,153.6z M257.7,76.8c-5.2-1.3-14.5,3.1-13.6-5.9
	c0.9-8.9,4.9-13.5,14.2-13.4c9,0.1,12.9,4.5,13.9,13C273.4,80.3,263,75.2,257.7,76.8z"/>
<path style="transform:scale(0.2)" d="M229.5,324.8c0-23.7,0.1-47.4-0.1-71c0-4.3,1.2-5.2,5.3-5.2c44.4,0.1,88.7,0.1,133.1,0.1c2.4,0,5-0.8,5.1,3.5
	c1.3,30.9-3.3,60.5-20.7,86.7c-28.1,42.3-67.8,63.4-118.8,62.9c-4.5,0-4-2.5-4-5.3C229.5,372.5,229.5,348.7,229.5,324.8z"/>
<path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M554.5,239.5c-0.2,21.1-17.5,38-38.8,37.8c-20.8-0.2-37.7-17.4-37.6-38.4
	c0.1-21.2,17.3-38.2,38.5-38.1C537.7,200.9,554.7,218.3,554.5,239.5z"/>
<path :style="{fill:'rgba(240, 185, 74, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M257.6,114.8c-68.7,0-137.4,0-206,0c-1.6,0-3.2,0.2-4.8-0.1c-5.1-1-8.3-4.1-8.3-9.4
	c-0.1-5.3,3-8.5,8.1-9.5c1.9-0.4,4-0.1,6-0.1c137.2,0,274.3,0,411.5,0c0.4,0,0.8,0,1.2,0c8.4,0,13,3.5,12.9,9.8
	c-0.1,6.1-4.5,9.4-12.7,9.4c-52.4,0-104.7,0-157.1,0C291.4,114.8,274.5,114.8,257.6,114.8z M162.6,439.8c38.6,0,77.3,0,115.9,0
	c1.9,0,4.5-1,5.5,0.8c1.2,2.2-1.1,4.1-2.3,5.7c-5.7,7.9-13.4,12.5-23.3,12.5c-63.9,0.1-127.8,0.1-191.8,0
	c-10.6,0-18.5-5.2-24.3-13.9c-2.8-4.2-1.7-5.2,3.1-5.2C84.6,439.9,123.6,439.8,162.6,439.8z M248.7,324.5c0-16.9,0.1-33.8-0.1-50.7
	c-0.1-4.4,0.8-6.2,5.8-6.1c31.2,0.2,62.5,0.2,93.7,0c4.9,0,6.1,1.5,5.7,6.1c-4,44-25.2,76.7-64.6,97c-11.4,5.9-23.6,9.2-36.3,10.9
	c-4,0.5-4.3-0.9-4.2-4C248.7,359.9,248.7,342.2,248.7,324.5z"/>
<path :style="{fill:'rgba(234, 96, 96, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M191,554.5c-40,0-80,0-120,0c-1.6,0-3.2,0.1-4.8-0.1c-5.1-0.6-8.9-4.7-8.6-9.7
	c0.3-5.3,3.3-8.4,8.4-9.3c1.5-0.3,3.2-0.1,4.8-0.1c80.4,0,160.8,0,241.3,0c1.4,0,2.8-0.1,4.2,0c5.2,0.5,8.9,4.4,9,9.4
	s-3.6,9.1-8.7,9.6c-1.6,0.2-3.2,0.1-4.8,0.1C271.4,554.5,231.2,554.5,191,554.5z M257.5,209.1c-10.2,0-20.4-0.1-30.6,0.1
	c-3.7,0.1-5.3-0.9-5.5-5c-1-19.6-1.1-19.6,18.5-19.5c16.1,0,32.2,0.2,48.3-0.1c5.1-0.1,7.1,1,7.1,6.6c-0.1,18,0.2,18-17.8,18
	C270.8,209.1,264.1,209.1,257.5,209.1z M541.6,238.8c0.1,14.1-11.3,25.7-25.5,25.6c-13.8-0.1-25.1-11.3-25.2-25.1
	c-0.1-14.1,11.3-25.7,25.5-25.6C530.3,213.8,541.5,225,541.6,238.8z"/>
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
                                    <button :style="{background:'rgba('+getterHelecoptorBg1+')'}" @click="ShowElement(getterHelecoptorBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHelecoptorBg2+')'}" @click="ShowElement1(getterHelecoptorBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHelecoptorBg3+')'}" @click="ShowElement2(getterHelecoptorBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHelecoptorBg4+')'}" @click="ShowElement3(getterHelecoptorBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHelecoptorBg5+')'}" @click="ShowElement4(getterHelecoptorBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Helecoptor= [
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
            var randomNumber = Helecoptor[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Helecoptor[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Helecoptor'){
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
                getterHelecoptorBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Helecoptor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHelecoptorBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Helecoptor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHelecoptorBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Helecoptor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHelecoptorBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterHelecoptorBg5: {
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
                            name:'Helecoptor',
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