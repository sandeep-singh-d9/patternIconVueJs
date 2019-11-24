<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.5);">
                    <path :style="{fill:'rgba(254, 201, 103, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M211,70.4c-2.6,1.2-4.8,2.9-6.9,4.9c-8.3,8-15.9,16.6-24.7,24c-9.1,7.6-15.9,16.9-17.7,29.2
	c-0.1,0.6-0.2,1.6-1.4,1.6c-1.3-3.3-2.4-6.5-3.5-9.9c-3.1-10-5-20.3-8.6-30.1c-5.7-15.5-21.7-19.9-34.3-19.9c-5.3,0-6.9,2.2-6.9,7.6
	c0,6.8,0.1,13.7,0,20.5c0,3.3,0.5,6.7-0.5,10.3c-3.4-2.6-5.6-5.8-9.1-7.6c-11.9-6.3-24.2-5.6-36.3-1.3
	c-12.6,4.4-15.1,10.4-12.2,23.7c1.8,8,4.8,15.5,7.7,23.4c-1.5,0-2.6,0.1-3.7,0c-10.6-1.1-21.1-2.3-31.7-0.7
	c-5.2,0.8-9.5,3.1-11.6,8.2c-3.6,8.8,1,26.8,9.8,31.7c7.1,4,14.2,7.9,21.7,11.1c4.2,1.8,8.4,3.5,12.5,5.2c-4.7,2.2-9.3,3.4-13.9,4.7
	c-11.5,3.2-23.3,5.3-33.6,12c0,1,0,2,0,3c2,1.2,3.9,2.5,6.1,3.4c11.4,5.1,23.5,8.1,35.7,10.4c8.9,1.7,18,3.7,27.1,3
	c15-1.2,29.8-4.2,44.7-6.4c13.7-2,27.2-1.2,39.2,6.7c5.3,3.4,10.2,7.4,15.1,11.4c5.2,4.2,10.5,7.7,17.6,6.5c2.1-0.4,4.2-0.7,6.4-1
	c1.9-0.2,3.3-1.2,4.1-3c2-3.1,2.3-7.1,5.7-9.6c1.6-1.2,1.3-3.5,0.9-5.6c-1.7-7.4-3-14.9-4.9-22.3c-2.3-9.3-3.8-19-11.5-26
	c-1.4-1.3-0.7-2.6-0.4-4.1c2.1-10.3,8.6-18.2,14.2-26.7c5.3-8,10.3-16,11.8-25.6c1.5-9.3,2.6-18.7,3.1-28.1
	c0.6-10.3,0.6-20.6-1.8-30.8C217.8,69.4,215.4,68.4,211,70.4z M601.8,84.7c-6.6-0.2-12.8,1.7-19,3.8c-0.9,0.3-2,0.9-2.9,0.3
	c-1-0.8-0.3-1.9,0-2.7c5.1-12.5-0.3-22.5-8.2-31.4c-7.4-8.3-13.2-7.8-20.2,0.8c-3.3,4.1-7.1,7.8-11.2,11.7c-1.3-5.4-2.7-10.2-6.1-14
	c-7.4-8.2-15.8-14.7-27.2-16.1c-3,0-6,0-9,0c-13.8,8.8-17.8,24-24.5,37.5c-4.3-4.1-8.4-8-12.4-12c-5.3-5.3-10.5-10.7-16.9-14.7
	c-4.1-2.5-8.4-3.9-13.2-2c-8.6,3.3-16.7,14.9-17.2,24c-0.4,8.7,2.8,16.3,6.1,23.9c2.3,5.2,4.6,10.4,7,15.7c-2.2,0.9-3.4-0.3-4.7-0.9
	c-6.1-3-12.2-6.1-18.4-9c-5.9-2.8-11.8-5.3-18.1-7.1c-2.2-0.6-4.8-1.2-6.7,0.4c-2.1,1.9-0.2,4.1,0.4,6c1.6,5.1,4.3,9.7,7.1,14.2
	c9.2,14.7,18.6,29.4,33,39.5c11.3,7.9,23.3,14.8,34.9,22.2c13.2,8.5,22.2,19.8,24.1,35.9c0.8,7,1.3,14.1,2,21.2
	c2.4,3.1,4.6,6.2,8.3,8c7,3.4,14.3,4.2,21.9,3.1c3-0.4,5.7-1.8,7-5c1-8.3,1.7-16.6,4.7-24.7c4.8-12.8,8-26.1,14.2-38.6
	c4.3-8.8,9.5-14.5,18.6-18.1c17.4-6.8,26.9-21.9,37-36.4c6-8.6,10.8-17.8,15.6-27.1c0-1.7,0-3.3,0-5
	C606.8,85.3,604.5,84.8,601.8,84.7z"/>
<path :style="{fill:'rgba(62, 178, 25, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M370,757c-2.2-3.5-1.9-7.6-2.5-11.7c-2.2,1-1,3.2-2.2,4.4c-1.4-0.9-0.8-2.2-0.7-3.2
	c1.9-20.6,1.3-41.3,0.3-61.9c-1.3-27.8-2.8-55.6-5.6-83.3c-3.8-38-11.5-75.3-19.8-112.5c-15.8-70.1-34.4-139.6-50.9-209.5
	c-3.8-16.2-7.5-32.5-8.7-49.1c-0.1-2-1.1-5.3,0.9-5.9c2.7-0.8,3.3,2.7,4.2,4.6c8.6,18.2,14.3,37.6,20.6,56.7
	c24.1,73.1,48.1,146.3,68,220.8c2.7,10.1,5.2,20.2,8.5,30.3c1.3-13.1,2.5-26.1,3.9-39.2c5-46,8.8-92.2,19.1-137.4
	c7.6-33.4,19-65.5,34.9-95.9c2.5-4.7,5.3-9.2,8.2-13.7c1-1.6,2-3.5,4.6-3.8c0.8,4.3-0.5,8.3-1.4,12.2
	c-8.8,37.4-17.8,74.8-26.5,112.2c-10,43-16.5,86.6-22.9,130.3c-3.6,24.9-7,49.8-10.7,74.6c-1,7,0.5,13.6,1.1,20.4
	c4.5,50.4-0.8,99.7-15.5,148.1c-1.4,4.5-3.1,8.8-5.9,12.6C370.7,757,370.3,757,370,757z M480.7,231.9c0.4-0.8,0.3-2.1,1.5-0.3
	c7.6,11.1,24.4,14,35.7,6.4c-1.9,31.9-2.9,63.9-9.7,95.2c-5.9,27-16.9,52.1-27.5,77.4c-9.2,22.1-19.1,43.9-30.7,64.8
	c-17.8,32-27.1,66.7-31.9,102.7c-4.6,34.3-9.6,68.5-14.4,102.8c-0.3,2-0.4,4-0.7,6c-1.1,2.1,0.3,4.4-0.6,7.6c0.1-0.4,1.2-1,0.5-1.1
	c-0.2,0-0.2-0.2-0.1-0.4c0.2-0.8,0.6-1.5,1.2-2.1c19-57.4,37.7-115,61.1-170.9c15.3-36.3,38.1-67,68.2-92.3
	c3.8-3.2,7.8-6.3,12.2-8.6c1.2-0.6,2.7-2,4.1-0.7c1.1,1.1-0.1,2.6-0.7,3.6c-3,5.6-6,11.1-9.4,16.5c-21.7,35.1-44.2,69.7-61.8,107.2
	C454,596,433,647.4,411.1,698.4c-7.3,17.1-14.4,34.3-23.1,50.9c-1.1,2.2-2.4,4.3-4.3,7.6c-0.2-4.7,0.8-7.7,2-10.6
	c7.2-18,9-36.8,10.5-56c4-53.1,8.5-106.2,18.7-158.6c7.2-36.7,20.2-71.6,33.3-106.5c7.4-19.6,17.1-37.9,27.2-56
	c5.4-9.7,10.4-19.7,15-29.9c8.7-19.6,9.8-39.4,3.2-59.8c-4.4-13.6-9.7-27-12-41.1C481.2,236.1,481,234,480.7,231.9z M197.9,255.9
	c1-1.5,2.6-2.2,4.1-3c14.9,31.8,29.9,63.5,44.7,95.3c31,66.8,61.9,133.7,88.9,202.3c17.7,44.9,27.5,91,26.4,139.4
	c-0.3,12.5-1,25-4.1,37.2c-0.6,2.3-0.7,5.9-3.5,5.9c-2.4,0-2.7-3.4-3.4-5.6c-6-19.9-10.1-40.3-14.4-60.7c-15-72.2-38-142-64.1-210.8
	c-23.2-61.1-46-122.3-69-183.5C201.4,267,199.7,261.4,197.9,255.9z M221.8,439.2c3.2,2.8,4.6,6.6,6.1,10.2
	c12.6,29.8,22.4,60.5,30.4,91.8c14.1,55,34.5,107.6,60,158.3c4.7,9.4,9.1,18.9,11.1,29.3c0.5,2.4,0.6,4.9,0.7,7.4
	c0.1,1.5,0.1,3.2-1.7,3.8c-1.7,0.5-2.9-0.7-3.8-1.9c-1.9-2.5-4-5-5.4-7.7c-25.9-49.6-50.7-99.7-68.4-152.8
	C238,539.5,230.7,500,224,460.4C222.8,453.5,221.5,446.5,221.8,439.2z"/>
<path style="fill:#ADDE9D;transform:scale(0.2)" d="M403.9,690.9c-0.4,2-0.5,4.1-3.2,6.3c1.7-4,0.5-7.4,2.2-10.4C403.6,688.1,402.2,689.9,403.9,690.9z"
	/>
<path :style="{fill:'rgba(216, 9, 57, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M113.8,111.8c-7-2.5-10-1.4-12,5.8c-2.5,8.9-6.5,15.2-16.9,14.8c-1.5-0.1-3.2,0.8-4.6,1.6
	c-3.5,2.1-5.7,5.6-3.8,9.3c5.1,10.2,9.8,20.7,23,23.5c8.2,1.7,16.1,5.1,24.2,7.6c0.9,0.3,1.8,1.5,3.1,0.4c-6.8-9.1-10.5-18.9-7-30.3
	c2.7-8.8,6.3-10.5,14.8-6.8c-1.7-5.6-3.8-10.8-7.1-15.4C123.9,117.6,119.5,113.8,113.8,111.8z M525.1,78.6c-1.9-2.6-4.1-3-6.8-1
	c-9.6,6.9-19.1,9-28.7-0.1c-1.6-1.5-4-2.7-5.7-0.5c-4.3,5.6-5.2,12.5-6.6,19.1c-0.7,3.3,1.8,5.2,3.3,7.5c3.3,5.4,6.8,10.7,10.1,16.1
	c2.4,3.8,4.5,7.8,7.1,12.2c3-10.8,7.2-20.2,12.4-29.1c6.2-10.8,9.8-12.2,22.3-8.3C530.9,88.2,528.5,83.2,525.1,78.6z"/>
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
                                    <button :style="{background:'rgba('+getterDaffodilsBg1+')'}" @click="ShowElement(getterDaffodilsBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDaffodilsBg2+')'}" @click="ShowElement1(getterDaffodilsBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDaffodilsBg3+')'}" @click="ShowElement2(getterDaffodilsBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDaffodilsBg4+')'}" @click="ShowElement3(getterDaffodilsBg4)" :class="this.ValueId+'_color4btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDaffodilsBg5+')'}" @click="ShowElement4(getterDaffodilsBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Daffodils= [
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
            var randomNumber = Daffodils[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Daffodils[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Daffodils'){
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
                getterDaffodilsBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Daffodils') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDaffodilsBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Daffodils') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDaffodilsBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Daffodils') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDaffodilsBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterDaffodilsBg5: {
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
                            name:'Daffodils',
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