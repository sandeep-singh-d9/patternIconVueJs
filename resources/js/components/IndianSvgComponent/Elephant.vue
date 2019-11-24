<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);"> 
                   <path style="fill:#7F99AB; transform:scale(0.2)" :class="ValueId+'_color5'" d="M402.7,97.5c38.2,1,70,28.8,77.6,65.2c0.7,3.4,0.1,8.2,2.1,10c2,1.9,6.7,0.6,10.1,1.2
	c12.5,1.9,21.5,9.5,28.1,19.6c7.2,11,10.3,23.5,11.4,36.5c0.3,3.7,0.1,7.6-4.9,7.8c-5,0.2-6-3.7-6.3-7.7c-0.7-7.9-2.6-15.5-5.6-22.7
	c-3.3-7.9-8-14.8-15.6-19.2c-2.1-1.2-4.4-2.2-6.7-2.8c-8.8-2.2-10.5-0.8-10.5,8.2c0,78.2-0.1,156.3,0.1,234.5c0,5.4-1.3,7.1-6.8,6.9
	c-11.4-0.4-22.9-0.2-34.3-0.1c-3.4,0.1-4.8-0.7-5.1-4.6c-1.6-19.3-3.6-38.6-5.3-57.9c-1.3-14.7-2.5-29.4-3.5-44.1
	c-0.3-4.6-1.9-9.1-2.2-13.9c-2.3,12.2-4.6,24.4-6.8,36.6c-3.6,19.6-7.1,39.2-10.6,58.8c-1.3,7.1-2.9,14.3-3.9,21.4
	c-0.4,3.1-1.8,3.6-4.4,3.6c-12.2-0.1-24.4-0.1-36.5,0c-3.6,0.1-4.5-1.5-4.2-4.7c1.3-14.7,2.4-29.4,3.8-44c0.9-10.2,2-20.4,3-30.6
	c1.1-11.5,2.1-23,3.2-34.5c0.1-1.3,0-2.6,0.2-3.9c0.7-4.5-0.8-6.2-5.7-6.1c-14.6,0.3-29.2,0.1-43.9,0.1c-18.9,0-37.9,0.1-56.8-0.1
	c-3.8,0-5.5,0.9-5.1,5c1.5,15,2.8,30.1,4.2,45.1c0.8,8.2,1.7,16.3,2.4,24.5c1.2,14.1,2.3,28.3,3.7,42.4c0.5,5.3-1.1,7.1-6.6,6.9
	c-11-0.4-22.1-0.2-33.2-0.1c-3.1,0-4.8-0.3-5.5-4.2c-5.3-30.8-11-61.6-16.6-92.4c-1.4-7.9-3-15.7-5.2-23.5c-0.9,9-1.7,18.1-2.6,27.1
	c-1.8,19.1-3.7,38.2-5.4,57.4c-0.9,10.2-1.9,20.4-2.4,30.7c-0.2,3.9-1.4,5.2-5.2,5c-8.8-0.3-17.6-0.2-26.4-0.2
	c-1.8-2-1.6-4.5-1.6-6.9c0-48.5-0.1-97.1,0-145.6c0-7.5,1.7-9,9.2-9.7c30.5-3.1,54.1-17.6,71-43c5.2-7.7,7.9-16.5,9.4-25.7
	c0.8-4.6-0.3-8.7-2.8-12.8c-16.3-25.8-32.6-51.7-48.5-77.7c-3.9-6.5-3.1-8.3,4.4-8.4c20.6-0.1,41.2-0.1,61.8,0
	c6.6,0,7.7,1.2,7.7,8.1c0.1,21.9,0,43.9,0.1,65.8c0,2.2-0.7,4.6,1.4,6.3c3.3,1.4,6.8,0.6,10.3,0.8c36.6-0.3,73.1-0.1,109.6-0.1
	c10.2,0,10.2,0,10.2-10.1c0.1-22.1-0.2-44.2,0.2-66.3C401.2,105.2,400,101.1,402.7,97.5z M145.6,226.2c0-37.5,0.1-74.9,0-112.4
	c0-6.7-1.2-7.8-7.9-7.9c-10.3-0.2-20.6-0.1-30.9,0c-31,0-55.3,23.6-55.5,54.5c-0.3,60.1-0.1,120.3-0.1,180.4
	c0,7.2,1.2,14.2,6.2,19.9c3.2,3.1,7.2,4.7,11.4,5.5c13.1,2.5,26.5,0.6,39.7,1.1c3.2,0.1,2.8-2.4,2.8-4.4c0-8.2-0.2-16.5,0.1-24.7
	c0.1-3.8-1.4-4.8-4.9-4.7c-7.9,0.2-15.7-0.1-23.6,0.2c-4.2,0.2-5.4-1.2-5.4-5.4c0.2-30.1,0.2-60.3,0-90.4c0-4.5,1.4-5.7,5.7-5.6
	c20.2,0.2,40.4,0.1,60.6,0.1C145.9,230.7,145.6,228.4,145.6,226.2z"/>
<path style="fill:#667B89; transform:scale(0.2)" d="M269,187.3c-2.1-1.5-1.2-3.8-1.2-5.7c-0.1-23-0.1-46.1,0-69.1c0-4.4-0.9-6.2-5.8-6.2
	c-21.2,0.3-42.3,0.1-63.5,0.1c-1.4,0-3.3-0.7-4.2,0.7c-1.1,1.6,0.9,2.7,1.6,3.8c16.9,27.3,34,54.5,51,81.7c4,6.3,1.4,12.7-0.3,18.9
	c-6.4,23.4-22,39.4-42.6,50.9c-12.2,6.8-25.1,11.4-39.4,11.5c-4.7,0-6.1,2.4-6.1,7.2c0.1,51.2,0.1,102.3,0,153.5
	c-14.4,0.6-14.4,0.6-14.4-13.9c0-49.4,0-98.7,0-148.1c0-2.2,0.2-4.5,0.2-6.7c3.1-2.4,7-0.8,10.3-1.9c26.3-4.1,48-16.1,64.5-37.3
	c6.6-8.4,10.5-18.1,12.8-28.5c1.4-6.3,0.3-12-3.3-17.6c-14.7-23.5-29.7-46.8-44-70.5c-1.5-2.9-3.7-5.4-5.1-8.4
	c-0.8-1.7-2.3-3.6,0.2-5.2c3.2-1.1,6.5-0.6,9.7-0.7c7.6-0.2,15.3-0.2,22.9,0c3.2-0.2,6.4-0.1,9.6,0c13.6-0.4,27.1-0.1,40.7-0.1
	c2.2,0,4.5,0,6.4,1.5c1.8,2.5,1.5,5.3,1.5,8.1c0,24.7,0,49.3,0,74C270.7,182.1,271,185,269,187.3z M144.3,232.3
	c3.5-1.7,2.7-5,2.7-7.8c0.1-39.8,0.1-79.7,0-119.5c0-2.6,0.2-5.3-1.8-7.4c-17.8,0-35.6-0.1-53.4-0.1c-0.9,0-1.9,0.1-2.8,0.2
	c-27.7,5.1-45.9,26.5-46,54.7c-0.2,60-0.1,119.9,0,179.9c0,11.6,4.4,21.5,14.4,28.3c-3.3-7.4-4.6-15.2-4.5-23.3
	c0.1-57.7,0.1-115.5,0-173.2c0-4.7,0.2-9.3,1.2-13.9c5.1-23.3,21.5-39.2,45.1-42.3c13.6-1.8,27.7-0.3,41.6-0.4c2.9,0,3.3,1.7,3.3,4
	c-0.1,40.3-0.1,80.6-0.2,120.9L144.3,232.3z"/>
<path style="fill:#FCD770; transform:scale(0.2)" :class="ValueId+'_color2'" d="M360.6,47.7c0-2.2,0.1-4.5-1.8-6.3c-1.9,1.2-0.9,3-0.9,4.5c-0.2,5.9-0.2,11.8-0.2,17.7
	c-48.3,0-96.7,0.1-145,0.1c-0.9,0.7-1.4,1.8-1.5,2.9c-0.5,9.2-0.6,18.5,0,27.7c0.1,1.1,0.7,2.1,1.5,2.9c3,0,5.9,0,8.9,0c0,0,0,0,0,0
	c15.7,0.1,31.4,0.2,47.2,0.2c2.4,2,5.3,1.8,8.1,1.8c24.7,0,49.5,0,74.2,0c2.8,0,5.7,0.3,8.1-1.6c1.5-1.9,1.5-4.2,1.5-6.4
	C360.7,76.8,360.7,62.2,360.6,47.7z"/>
<path style="fill:#F1786B; transform:scale(0.2)" :class="ValueId+'_color3'" d="M402.8,183.4c0,3.3-1.2,4.1-4.2,4.1c-39.5-0.1-79-0.2-118.5-0.2c-3.7,0-7.4,0.1-11.1,0.1
	c-0.1-29.9-0.1-59.9-0.2-89.8c30,0,60.1,0,90.1-0.1c2.8-2.3,6.1-1.6,9.3-1.6c6.1-0.3,12.1-0.1,18.2-0.1c2.2,0,4.4,0.1,6.2,1.7
	c3.4,0,6.8,0.1,10.2,0.1c0,3.7,0,7.4-0.1,11.2l0,0c0,0,0,0,0,0C402.7,133.6,402.7,158.5,402.8,183.4z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M392.5,97.4c-8.2,0-16.5,0-24.7,0c0,0,0,0,0,0c-3,0-6,0-8.9,0c0-18.7,0-37.3,0-56
	c10.9,0,21.7,0,32.6,0c2.2,3.2,0.9,6.7,0.9,10.1C392.2,66.8,391.8,82.1,392.5,97.4z M211.5,41.4c-10.9,0-21.7,0-32.6,0
	c0,18.6,0,37.3,0,55.9c3.4,0,6.7-0.1,10.1-0.1c0,0,0,0,0,0c7.9,0,15.8,0,23.7,0c0-11.2,0-22.3,0-33.5c-1.5-3.4-0.1-6.8-0.3-10.3
	C212.1,49.5,213.8,45.3,211.5,41.4z M88.5,131.2c-6.3-0.1-11.1,5-11,11.5c0.1,6.2,5,11,11.1,10.9c6.1-0.1,10.8-5,10.7-11.3
	C99.3,136.1,94.6,131.2,88.5,131.2z"/>
<path style="fill:#667B88; transform:scale(0.2)" :class="ValueId+'_color4'" d="M233.3,199c-6.7,28.9-25.8,46.9-51.7,58.8c-8.3,3.8-17,6.7-26.3,7.2c-3.5,2-7.2,0.8-10.9,0.9
	c-0.1-11.2-0.1-22.4-0.2-33.6c1.5-2,0.8-4.3,0.8-6.5c0.1-42.8,0.1-85.5,0.1-128.3c9.5-0.1,19-0.3,28.5-0.1c3.6,0.1,4.3-1.1,4.3-4.4
	c-0.2-15.5-0.1-31,0-46.5c0-1.7-1-3.7,0.9-5.1c2,1.9,1.8,4.5,1.8,6.9c0.1,14.1,0.1,28.1,0,42.2c0,2.4,0,4.9-1.8,6.9
	c1.5,4.5,5.5,7.7,6.7,12.4c0,0,0,0,0,0c0,0,0,0,0,0c11.9,18.8,23.8,37.6,35.7,56.4c3,4.7,5.6,9.8,9,14.2
	C234.7,186.2,234.9,192.4,233.3,199z"/>
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
                                    <button :style="{background:'rgba('+getterElephantBg1+')'}" @click="ShowElement(getterElephantBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterElephantBg2+')'}" @click="ShowElement1(getterElephantBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterElephantBg3+')'}" @click="ShowElement2(getterElephantBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterElephantBg4+')'}" @click="ShowElement3(getterElephantBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterElephantBg5+')'}" @click="ShowElement4(getterElephantBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Elephant=[
                {top:339 ,left:122},
                {top:332 ,left:12},
                {top:342 ,left:43},
                {top:147 ,left:117},
                {top:30 ,left:119},
                {top:162 ,left:111},
                {top:31 ,left:81},
                {top:141 ,left:77},
                {top:10 ,left:18},
                {top:-3 ,left:72},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Elephant[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Elephant[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Elephant'){
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
                getterElephantBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Elephant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterElephantBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Elephant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterElephantBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Elephant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterElephantBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterElephantBg5: {
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
                            name:'Elephant',
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