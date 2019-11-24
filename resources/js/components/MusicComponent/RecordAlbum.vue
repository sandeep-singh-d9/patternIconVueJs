
<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                 <path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M414.5,468.8c-1.2-4.4-3.3-3.1-6-1.2c-27.3,19.7-57.6,32.5-90.4,39.7c-29.4,6.4-58.9,6.9-88.6,2.8
	c-44.5-6.3-84.2-23.8-118.9-51.9C69.6,425,40.9,382.9,27.5,331.7c-21.3-81.2-6.3-155.9,45.9-221.9c35.2-44.6,81.6-73.6,137.2-85.7
	C282.2,8.4,349,21,409.3,63.6c49.8,35.3,81.8,82.9,97,141.9c0.8,3.2,2.6,6.2,3.9,9.3c5.6,21.3,5.1,43.1,4.9,64.8
	c0,5-0.6,10-0.6,14.9c0.3,2.2,0.4,4.5-0.4,6.7c-3.9,6.5-2.8,14.2-5.2,21.1c-2.5,8.7-4.7,17.4-7.7,25.9c-0.8,2.4-1.8,4.7,0,7.1
	c-5.4,6-8.7,13.1-11.1,20.7c-13.1,24.2-28.6,46.7-48.3,66.1c-6.1,6.3-12.7,12.1-19.8,17.3C418.5,462,417.3,465.9,414.5,468.8z"/>
<path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M488.5,376c0.9-6.3,5-11.4,6.9-17.3c0.9-2.8,4.1-1.4,5.5-3.1c8.5-4.7,8.7-4.7,7.2-15.3
	c-0.8-6-1.2-11.8-0.4-17.8c0.9-6.5,1.9-13.1,2.8-19.6c0.3-1.9,1.4-1.1,2.4-0.7c2.1,1.5,1.7,4,2.2,6.1c0.8,3.8,3.4,4.3,6.6,3.7
	c3.3-0.6,4.2-2.4,3.9-5.8c-0.9-8.4-0.7-8.4-9.4-9.5c-1.2-0.1-2.1-0.6-3-1.4c-3-2.6-0.2-5.5-0.2-8.2c0.2-22.3,1.4-44.7-3.7-66.8
	c-0.4-1.8-1.3-4,0.9-5.6c15.7,29.1,23.1,60.4,26.2,93.1c3,31.2,6.9,62.3,10.3,93.4c3.4,30.5,6.7,60.9,10,91.4c1,9.5,1.7,19,3.2,28.4
	c0.6,4.2-0.7,4.9-4.3,5.3c-26.9,2.9-53.7,6-80.6,9c-15.1,1.7-30.3,3.2-45.4,5.2c-5.3,0.7-7.6,0-8.2-6.1c-2-21.9-4.6-43.8-6.9-65.8
	c0.1-3.2,0.6-5.9,3.4-8.2c7.6-6.2,15-12.7,22.5-19.1c16.5-3.4,33.3-4.1,50-6.3c7.2-1,14.4-1.6,21.6-2.5c4.2-0.5,6.1-2.2,5.5-6.6
	c-2-14.8-3.4-29.8-5.1-44.6c-0.5-4.1-2.2-5.5-6.2-5.2c-3.2,0.3-6.3,0.6-9.5,1C494,377.7,491,378.3,488.5,376z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M496.7,265.4C496.5,392.2,396.5,491.3,276,495.8c-137.1,5.1-236.5-102-240.6-221.1
	c-4.7-136,101.7-235.1,219.9-240C391.8,29,497.2,138.2,496.7,265.4z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M488.5,376c6.8-0.7,13.6-1.1,20.3-2.1c3.4-0.5,5-0.1,5.4,3.7c1.7,17,3.6,33.9,5.6,50.8
	c0.5,4.3-0.7,5.8-5.2,6.2c-22.8,2.3-45.6,5.1-68.4,7.6c-1.9,0.2-4,1.4-5.7-0.7C459.5,421.9,475,399.7,488.5,376z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M513.2,295.4c12.6-0.9,12.1-0.8,14.5,11.3c1.3,6.8-2.6,6.6-6.8,7.4c-5,1-7.8-0.3-7.6-5.8
	c0.1-2-0.2-4-0.3-6.1C513,300,513.1,297.7,513.2,295.4z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M507.7,322.5c1.2,9.4,2.2,18.8,3.6,28.2c0.4,3.1-0.9,4.1-3.6,4.3c-2.3,0.2-4.5,0.3-6.8,0.5
	c-1.6-0.6-4.4,0.5-3.1-3.2C501.3,342.4,504.4,332.4,507.7,322.5z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M443.3,466.4c-1.1-3.3,0.5-5,4.7-5.4c23.1-2.4,46.1-4.9,69.1-7.5c4-0.5,5.5,0.4,5.9,4.7
	c1.7,17.2,3.7,34.3,5.8,51.5c0.4,3.1-0.5,3.8-3.4,4.2c-23.7,2.6-47.4,5.3-71.1,7.9c-2.4,0.3-4.9,0.9-5.3-3.1
	C447.2,501.5,445.2,484.3,443.3,466.4z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M535.3,473.5c-7.3-3.8-4.6-11.2-5.1-16.4c-0.6-6.6,7.1-4.6,9.6-4.2c9.2,1.6,4.3,10.2,5.2,15.4
	C546.1,474.4,538.8,470.5,535.3,473.5z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M525.6,331.5c9.2,2.1,5.2,10.2,6.1,15.2c1.6,8.3-6.9,5.1-9.4,4.7c-8.5-1.4-4.4-9.4-5.4-14.5
	C515.5,329.6,522.6,334,525.6,331.5z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M536.7,389c1.2,3.9-2.4,4.3-6.4,4.5c-3.9,0.2-8.6,1.9-7.9-5.1c0.1-1.3-0.4-2.7-0.6-4
	c-1.3-8.9,2.3-12.2,11.2-10.6c1.9,0.3,2,1.5,2.1,2.8C535.5,380.1,536,383.7,536.7,389z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M540.5,424.8c1.3,9.1-6.1,5.3-9.5,6.6c-4.6,1.7-4.1-2.3-4.4-5.1c-0.2-2.5-0.6-4.9-1.1-7.4
	c-0.9-4.2,0-6.4,5.1-6.9C539.8,411,539.8,410.6,540.5,424.8z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M543.3,489.9c9,2.4,5.1,10.5,5.9,15.5c1.1,7.3-6.5,4.7-9.3,4.3c-9.9-1.3-4.2-10.1-5.4-15.1
	C533.1,488.6,540.1,492.2,543.3,489.9z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M442.5,515.2c2,4.8-1.1,6.1-6.3,6.6c-5.1,0.5-8.5,0-7.8-6.3c0.1-1.1-0.2-2.2-0.3-3.4
	c-1.2-8.5,2.5-11.9,11-10.4c1.8,0.3,2,1.5,2.2,2.8C441.6,507.8,442,510.9,442.5,515.2z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M438.2,476.4c-0.4,2.4,1.9,5.7-1.2,6.8c-3.5,1.2-7.6,1-11.4,1.1c-0.3,0-1-1.9-1.1-2.9
	c-0.4-2.5-0.4-5-0.8-7.4c-1.1-8.5-1.1-8.3,7.4-9.3c4.3-0.5,6.3,0.6,6.4,5.1C437.5,471.9,437.9,474.2,438.2,476.4z"/>
<path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M201.8,264.1c0.3-33.6,27.3-61.2,60.2-63c38.9-2.1,67.9,28.6,68.1,63.2c0.2,36.1-28.1,64.9-63.7,65.1
	C230,329.6,202,301.3,201.8,264.1z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M83.2,189.8c-0.1-28,23.9-52.2,52.1-52.5c29.4-0.3,54.1,23.9,53.9,52.8c-0.2,29.5-24,53.1-53.5,53.2
	C107,243.3,83.3,219.1,83.2,189.8z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M83.2,340.5c0-29.6,23.8-53.4,53.3-53.2c28.6,0.1,52.3,23.8,52.6,52.7c0.3,28.8-23.8,53.2-52.7,53.3
	C107.4,393.3,83.2,369.4,83.2,340.5z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M266.2,362.3c29.2,0.3,53.2,24.5,52.8,53.1c-0.4,29.4-24.9,53.4-53.9,52.8
	c-29.1-0.6-52.2-24.6-52.1-53.9C213.1,386.1,237.7,362,266.2,362.3z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M395.8,243.2c-29,0-53.2-24.3-52.9-53c0.3-29.6,24.2-53.2,53.7-53c28.6,0.3,52.2,24.2,52.2,53
	C448.8,219.3,424.8,243.3,395.8,243.2z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M448.8,340.4c-0.3,29.5-24.4,53.1-53.8,52.9c-28.7-0.3-52.3-24.7-52.1-53.9
	c0.2-28.3,24.8-52.4,53.2-52.1C425.2,287.6,449.1,311.7,448.8,340.4z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M213,114.6c0.1-28,24.3-52.2,52.3-52.2c29.3,0,53.6,23.6,53.7,52.3c0.1,29.8-23.8,53.6-53.7,53.6
	C236.7,168.2,213,143.9,213,114.6z"/>
<path :style="{fill:'rgba(255, 197, 4, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M267.3,220.6c25.7,0.3,43.7,19.5,43.4,46.5c-0.3,24.9-19.9,43.2-45.9,42.9
	c-25.4-0.3-43.6-19.3-43.4-45.4C221.5,238.6,240.5,220.3,267.3,220.6z"/>
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
                                    <button :style="{background:'rgba('+getterRecordAlbumBg1+')'}" @click="ShowElement(getterRecordAlbumBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRecordAlbumBg2+')'}" @click="ShowElement1(getterRecordAlbumBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRecordAlbumBg3+')'}" @click="ShowElement2(getterRecordAlbumBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterRecordAlbumBg4+')'}" @click="ShowElement3(getterRecordAlbumBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRecordAlbumBg5+')'}" @click="ShowElement4(getterRecordAlbumBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var RecordAlbum= [
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
            var randomNumber = RecordAlbum[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  RecordAlbum[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'RecordAlbum'){
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
                getterRecordAlbumBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RecordAlbum') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRecordAlbumBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RecordAlbum') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRecordAlbumBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RecordAlbum') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRecordAlbumBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterRecordAlbumBg5: {
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
                            name:'RecordAlbum',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            // background3:  background3Clone,
                            // background4:  background4Clone,
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