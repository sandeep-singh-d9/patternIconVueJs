<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="fill:#FF1744;transform:scale(0.2)"  :class="ValueId+'_color1'" d="M180.4,552.9c-8.3,0-16.6,0-25,0c-3.4-1.2-6.8-0.2-10.2-0.5c-17.8-0.4-35.6-0.6-52.8-6.3
	C76.7,540.9,62,534.6,50.5,522c-10.5-11.5-16.2-25.4-20.3-39.9c-6-21-8.2-42.5-8.5-64.2c-0.9-61.1,9.3-120.5,29.2-178.1
	c11.4-32.9,26-64.4,48-91.7c28.3-34.9,64.8-55.8,109.3-62.5c13-2,26.2-2.1,39.4-0.2c2.3,0.3,4.3,1.3,6.5,1.8
	c2.5,0.4,3.4,2.3,3.9,4.3c7.6,29.5,28.4,47.5,53.4,62c22.2,12.8,46.2,21.4,70.8,28.3c7.7,2.2,11.8,6.2,14.9,13.2
	c13.9,30.6,26.9,61.7,45.1,90.1c7.6,11.9,16.1,23,27.4,31.7c4.6,3.5,9,5.2,13.9,0.6c0.9-0.9,2.2-1,3.4-0.6c2.1,0.9,2.4,2.7,2.8,4.7
	c4,24,2.9,47.6-4,71c-8.7,29.6-24.5,55-46.7,76.3c-13.8,13.3-29.7,23.8-46.6,32.9c-47.7,25.8-99.1,40-152.4,48
	c-16,2.4-32.3,2.6-48.5,2.6C187.8,552.7,184,551.8,180.4,552.9z"/>
<path style="fill:#F29785;transform:scale(0.2)" d="M192,552c-0.1,0.3-0.1,0.6-0.2,0.9c-3.8,0-7.6,0-11.4,0C184.1,551.4,188.1,551.7,192,552z"/>
<path style="fill:#F29B8A;transform:scale(0.2)" d="M145,552.9c-0.1-0.3-0.1-0.6-0.2-0.9c3.6-0.3,7.1-0.6,10.6,0.9C151.9,552.9,148.5,552.9,145,552.9z"
	/>
<path style="fill:#689F38;transform:scale(0.2)" :class="ValueId+'_color2'" d="M254.4,88.9c-0.1-5.8,2.7-9,8.4-10.8c20.8-6.4,40.4-2.5,59.6,5.9c12.3,5.4,23.6,12.4,34.4,20.2
	c1.5,1.1,3.1,2.1,5.5,3.7c-0.2-9.7,0.2-18.6,2.1-27.4c4.2-20.1,12.8-38.4,23.5-55.7c3.3-5.3,8.8-6.1,13.3-1.9
	c20.1,18.7,35.4,40.3,39.7,68.2c1.8,12.1,1.3,24.2-0.9,36.2c-0.2,1.2-0.3,2.4-0.6,4.1c5.9-3.5,11.3-6.9,16.9-9.9
	c16.1-8.7,33-14.3,51.5-14.1c7,0.1,13.8,1.4,20.5,3.2c5.9,1.6,8.8,5.8,7.4,10.5c-1.5,5-5.7,7.2-11.6,5.5c-27-7.5-49.8,2.4-71.7,17.5
	c8,0.6,16,1,24,1.7c16.8,1.6,33.3,4.1,49,10.8c6.6,2.8,12.6,6.6,17.3,12.1c5.3,6.2,6.9,13.4,5.9,21.4c-0.5,4.2-3,6.8-6.6,8.7
	c-11.9,6.5-24.8,8.5-38,9.3c-11.4,0.7-22.9,0.7-34.3-0.4c-1.7-0.2-3.4-0.2-5.8-0.3c5.4,10.5,10.6,20.5,14.8,30.9
	c7.1,17.6,12.2,35.7,11.9,55c-0.1,8.2-2.3,16.1-4.3,24c-5,7.5-8.5,8.3-15.8,3.2c-15-10.4-25.2-25.1-34.4-40.5
	c-16.4-27.6-29.1-57.1-42.3-86.3c-2.4-5.3-5.8-7.5-10.9-8.9c-26.9-7.6-53.1-17.1-77.2-31.7c-19.9-12-37-26.9-46.2-49.1
	C257.5,99.2,256.1,94,254.4,88.9z"/>
<path style="fill:#FFC107;transform:scale(0.2)" :class="ValueId+'_color3'" d="M271.6,162.4c-0.3,0.8-0.6,2.3-1.3,3.4c-3.6,5.4-8,10-13.5,13.4c-3.9,2.4-7.7,1.4-10.5-2.2
	c-2.7-3.4-2.7-6.8,0.2-10.3c3.7-4.4,7.4-8.7,12.2-11.8c2.5-1.6,5.1-1.9,7.8-0.4C269.6,156,271.2,158.6,271.6,162.4z M164.4,202.3
	c6.6-3.6,11.8-9,15.8-15.2c2.1-3.3,0.7-6.8-2.1-9.3c-2.7-2.4-5.9-3.1-9.1-1c-5.6,3.8-10.6,8.4-14.1,14.2c-3.1,5.2,1,11.8,7.4,11.9
	C162.7,202.8,163.6,202.7,164.4,202.3z M334.9,222.9c-3.3-1.5-6.6-1.2-9.2,1.2c-3.8,3.5-7.6,7.1-11,11c-3.1,3.5-2.8,8.3,0.1,11.3
	c2.9,3.1,7.8,3.6,11.3,0.6c4-3.5,7.7-7.5,11.4-11.3c1.3-1.4,1.9-3.3,1.9-6C339.4,227.1,338.1,224.4,334.9,222.9z M396.5,291
	c-5.9,3.1-10.4,8.1-14.1,13.5c-2.2,3.3-1.9,7.5,1.3,10.5c3.1,2.8,6.8,3.7,10.3,0.5c4.3-4,8.4-8.2,12.5-12.4c1.1-1.1,1.5-2.7,1.6-4.3
	C408.3,292.9,401.7,288.2,396.5,291z M101.2,472.3c3.6-3.5,7.2-7,10.7-10.7c3.2-3.3,3.5-7.1,0.7-10.8c-2.9-3.8-7.2-4.1-10.7-1.9
	c-5.6,3.5-10.4,8.1-13.6,14c-2.8,5.2,1.5,11.8,7.4,11.8C97.8,474.7,99.6,473.8,101.2,472.3z M369.4,407.1
	c6.7-3.3,11.8-8.6,15.3-14.9c1.8-3.2,1.1-7.2-2.3-9.8c-3.3-2.5-6.9-2.7-10,0.1c-4.2,3.8-8.2,7.9-12.1,12.1c-2.2,2.3-2.4,5.3-0.9,8.2
	c1.6,3,4,4.7,7.7,4.8C367.7,407.6,368.6,407.5,369.4,407.1z M142.9,293.1c5.9-3.9,11.1-8.8,14.8-14.9c2-3.4,0.7-7.2-2.4-9.7
	c-3.1-2.6-7-2.7-10-0.2c-4.3,3.7-8.2,7.9-12,12.1c-2.1,2.4-2.3,5.3-0.7,8.2c1.7,3,4.2,4.9,8.1,5.2
	C141.3,293.5,142.3,293.5,142.9,293.1z M222.3,335.7c-2.8-1.7-5.9-1.8-8.3,0.3c-4.3,3.8-8.5,7.7-12.1,12.1
	c-2.7,3.3-2.8,7.5,0.5,10.9c3.4,3.4,7.5,3.4,10.8,0.7c4.4-3.6,8.2-7.9,12.2-12c1.1-1.1,1.5-2.7,1.5-4.6
	C226.9,339.9,225.1,337.5,222.3,335.7z M190.7,427.6c-3.6,3.5-7.2,7-10.6,10.6c-3.1,3.3-4,7-0.9,10.7c2.9,3.5,7,4.2,10.8,2
	c5.6-3.2,10.2-7.8,13.3-13.4c3.1-5.6-1.2-12.6-7.1-12.4C194.1,425.2,192.3,426.1,190.7,427.6z M290.5,404.2
	c-3.4-1.8-6.8-1.4-9.7,1.2c-3.7,3.4-7.3,6.9-10.7,10.6c-3.3,3.7-3,7.7,0.4,11.1c3.5,3.6,7.7,4,11.5,0.5c3.6-3.2,6.9-6.8,10.3-10.3
	c1.6-1.7,2.4-3.8,2.4-6.1C295,407.9,293.3,405.6,290.5,404.2z M302.9,338.1c5.3-3.4,9.7-7.8,13.2-13c2.7-4,1.4-7.8-1.9-10.7
	c-3.3-2.9-7.2-2.5-10.4,0.4c-4,3.6-7.8,7.4-11.4,11.3c-2.4,2.6-2.1,5.8-0.8,8.8c1.3,3,3.8,4.4,7.6,4.7
	C300.1,339.2,301.7,338.9,302.9,338.1z M120.4,383.4c5.9-4.2,11.2-9.3,15.2-15.2c2.1-3.1,0.9-6.5-1.9-8.8c-3-2.5-6.7-3.1-10.1-0.8
	c-5.1,3.4-9.3,7.7-12.8,12.7c-2,2.8-1.7,5.9-0.2,8.8c1.4,2.7,3.7,4,7,4.2C118.5,384,119.6,384,120.4,383.4z M238.2,244.7
	c-6.4,3.8-11.6,8.8-15.2,15.2c-2,3.5-0.6,6.9,2.3,9.3c3,2.5,6.8,2.7,9.6,0.3c4.6-3.9,8.8-8.3,12.7-12.9c2-2.3,2-5.5,0.4-8.3
	c-1.6-2.8-4.3-3.8-7.4-4.3C239.8,244.2,238.9,244.3,238.2,244.7z"/>      
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
                                    <button :style="{background:'rgba('+getterStrawberryBg1+')'}" @click="ShowElement(getterStrawberryBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStrawberryBg2+')'}" @click="ShowElement1(getterStrawberryBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStrawberryBg3+')'}" @click="ShowElement2(getterStrawberryBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStrawberryBg4+')'}" @click="ShowElement3(getterStrawberryBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStrawberryBg5+')'}" @click="ShowElement4(getterStrawberryBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Strawberry= [
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
            var randomNumber = Strawberry[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Strawberry[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Strawberry'){
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
                getterStrawberryBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Strawberry') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStrawberryBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Strawberry') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStrawberryBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Strawberry') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStrawberryBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterStrawberryBg5: {
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
                            name:'Strawberry',
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