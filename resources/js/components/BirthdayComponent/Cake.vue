<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M253.6,476.6c-74,0-148,0-222,0.1c-4.8,0-6.3-0.9-6.2-6c0.4-15.2,0.3-30.5,0-45.7
	c-0.1-3.9,1-5.2,4.9-4.9c4.3,0.3,8.7-0.3,13,0.2c5.3,0.6,6-1.6,5.9-6.3c-0.2-51.4-0.1-102.9-0.1-154.3c0-6.5-0.1-13.1,0-19.6
	c0.2-20.4,15.9-36.5,36.4-36.9c16.4-0.3,32.8-0.3,49.3,0.1c5.1,0.1,6.1-1.5,6-6.3c-0.2-27.1,0-54.2-0.2-81.3c0-4.5,0.9-6.1,5.8-5.9
	c12.1,0.4,24.1,0.4,36.2,0c5-0.2,5.7,1.7,5.6,6c-0.2,27.3,0,54.6-0.2,81.9c0,4.3,0.8,5.8,5.5,5.6c10.1-0.4,20.2-0.4,30.3,0
	c4.6,0.2,6-0.9,5.9-5.8c-0.3-27.3,0-54.6-0.2-81.9c0-4.7,1.2-5.9,5.9-5.8c12.1,0.3,24.1,0.3,36.2,0c4.6-0.1,5.5,1.4,5.5,5.7
	c-0.2,27.3,0,54.6-0.2,81.9c0,4.6,1.1,6.1,5.8,5.9c9.9-0.4,19.8-0.4,29.7,0c4.6,0.2,6-1.1,6-5.9c-0.2-27.1,0-54.2-0.2-81.3
	c0-4.7,0.9-6.5,6-6.3c12.1,0.4,24.1,0.3,36.2,0c4.3-0.1,5.2,1.3,5.2,5.3c-0.2,27.3,0,54.6-0.2,81.9c0,4.8,1.1,6.4,6.1,6.3
	c16-0.3,32.1-0.2,48.1-0.1c22.6,0.1,38.3,15.9,38.3,38.6c0.1,57.4,0.1,114.8-0.1,172.1c0,5.3,1.3,6.6,6.5,6.4
	c5.6-0.3,13.2-2.6,16.5,1c2.8,3.1,0.8,10.5,0.9,16.1c0,11.3-0.2,22.6,0.1,33.8c0.1,4.4-1,5.5-5.5,5.5
	C402,476.5,327.8,476.6,253.6,476.6z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M317.8,76.7c0.7-10.3,5.7-20.1,11.9-29.3c2.2-3.3,4.5-6.5,7-9.5c3.4-4.1,8-4.5,11.2-0.5
	c8.8,10.9,16.7,22.5,19,36.8c2.2,14.2-9.9,28.3-24.3,28.4C330,102.6,317.7,90.4,317.8,76.7z M189.8,75.5c0,12.9-5.6,19-13.9,23.7
	c-10.1,5.8-18.5,2.5-26.7-3.5s-9.9-14.5-7.9-23.8c2.8-13.3,10.2-24.2,18.6-34.5c2.8-3.4,7.1-4,9.9-0.8
	C180,48.7,188.8,61.7,189.8,75.5z M278.5,75.8c-0.1,14.9-12.8,28-25.1,26.5c-12.1-1.5-25.2-9.7-24.1-25.6c0.8-12.5,7-22.8,14-32.7
	c9-12.8,11.9-12.8,20.9-0.2C271.6,54.2,277.9,65,278.5,75.8z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M63.4,277.7c8.3,7.9,16,14.6,24.9,19.8c27.2,16,57.1,12.6,82.3-9.4c4.6-4,9.3-8.1,13-13
	c2.3-3,3.6-2.8,6.1,0c10.7,12.1,22.9,22.4,37.9,28.7c26.8,11.1,50.4,3.7,72.1-13.3c5.8-4.5,11.3-9.4,15.8-15.2
	c2.5-3.3,3.9-3.1,6.5-0.1c11.4,13.1,24.7,24,41.3,29.9c25.1,9,47.1,1.8,67.4-13.7c4.2-3.2,8.1-6.9,12.2-10.4
	c1.4,1.5,0.7,3.3,0.7,4.9c0.1,42.7,0,85.5,0.2,128.2c0,4.9-1.2,6.2-6.2,6.2c-122.7-0.1-245.4-0.1-368.1,0c-5,0-6.2-1.4-6.2-6.2
	C63.5,369.2,63.4,324.1,63.4,277.7z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M253.8,216.9c54.6,0,109.2,0,163.8,0c12.9,0,22.2,5.1,24.6,16c2.7,12.5,5.1,25.6-6.8,36.1
	c-7.4,6.6-14.5,13.3-23.4,18c-18.8,9.9-37.4,9.4-55.7-1c-12-6.8-21.7-16.4-30.3-27.1c-5.7-7.1-9.4-6.9-14.7,0.2
	c-6.5,8.8-14.2,16.5-23.1,22.8c-25,17.6-52,16-76.4-4.5c-6.7-5.6-12.7-11.8-18.1-18.7c-5.2-6.8-9.3-6.6-14.4,0.2
	c-12.2,16.1-26.7,28.9-47.4,33c-13.2,2.6-25.4-0.5-36.9-6.9c-11.7-6.6-21-16-29.7-26.1c-0.5-0.6-1.3-1.3-1.3-1.9
	c-0.2-9.9-2.8-20.1,3.1-29.3c5.4-8.4,13.5-10.8,22.9-10.8C144.6,216.9,199.2,216.9,253.8,216.9z"/>
<g>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M332.1,148.4c0.5,0.3,0.9,0.5,1.4,0.8c5.6-5.7,11.3-11.5,16.9-17.3c1.8-1.9,1.9-4.5,1.1-6.7
		s-3.1-1.1-4.7-1.2c-3.7-0.1-7.5,0.1-11.2-0.1c-2.5-0.1-3.6,0.6-3.5,3.3C332.2,134.3,332.1,141.3,332.1,148.4z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M345.3,171.4c7-5.4,7.3-12.2,5.3-20.5c-3.7,3.1-6.5,7.2-10.2,10.2c-7.2,5.7-10.1,12.5-7.3,23.4
		C337.6,179.6,340.9,174.9,345.3,171.4z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M155,150.7c6.3-6.5,11.4-11.8,16.6-16.9c2.2-2.1,1.9-4.6,1.4-6.8c-0.5-2.8-3.1-1.2-4.7-1.3
		c-3.4-0.2-6.8,0.1-10.2-0.1c-2.5-0.1-3.3,0.7-3.2,3.2C155.1,135.4,155,142.2,155,150.7z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M257,133.6c2.1-2.1,2.1-4.5,1.5-6.8c-0.7-2.5-3.2-1.2-4.9-1.2c-3.4-0.2-6.8,0-10.2-0.1
		c-2-0.1-3.2,0.3-3.2,2.7c0.1,6.9,0,13.8,0,22.3C246.6,144.1,251.7,138.7,257,133.6z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M256.9,171.2c7.4-5.4,6.5-12.3,5.7-21c-4.1,4.2-7,7.9-10.7,10.7c-7.5,5.6-9.8,12.7-7.5,22.6
		C248.8,179.1,252.4,174.4,256.9,171.2z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M167,171.4c7.4-5.2,6.7-12,5.8-20.7c-4.2,4.4-7.1,8.6-10.9,11.4c-7,5.3-8,12-6.2,20.7
		C159.6,178.7,162.8,174.4,167,171.4z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M262.8,186.2c-5.5,5.6-11.1,11.2-16.8,16.9c17.6,0.9,17.6,0.9,16.9-16.7
		C262.9,186.2,262.5,185.9,262.8,186.2z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M351.7,185.4c-4.9,3.3-14.6,13-17.8,17.8c5.2,0,9.8,0,14.3,0c2.1,0,3.5-0.4,3.5-2.9
		C351.7,195.6,351.7,190.7,351.7,185.4z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M173,185.3c-5.2,5.4-10.4,10.7-15.6,16c16.4,1.6,16.4,1.6,15.8-14.7
		C173.2,186.1,173,185.6,173,185.3z"/>
</g>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M352.1,74.5c0,7.2-5.2,13.8-9.7,13.6c-4.5-0.1-9.3-6.3-9.3-12c0-8,4.2-14.5,8.2-21
	c1-1.6,1.7-0.9,2.5,0.2C348,61.6,351.5,68.1,352.1,74.5z M165.1,53.6c4.9,6.4,8.1,12.9,9.6,20.4c0.5,2.3,0,4.3-0.7,6.3
	c-1.5,4.4-4.8,8.1-9.3,7.5c-4.5-0.5-8-4.1-8.6-9.2C155,68.9,160,61.4,165.1,53.6z M254.1,53.6c4.5,7.1,9.1,13.7,9.1,22.2
	c0,6.2-4.8,12.5-9.4,12.3c-5-0.2-10.4-7.9-9.4-13.8C245.7,66.7,248.9,59.9,254.1,53.6z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M231,361c0-12.6,9.7-22.6,22.3-22.8c12.6-0.3,22.9,10.1,22.9,22.8c0,12.5-10,22.5-22.6,22.5
	C241,383.4,231,373.5,231,361z M88.4,360.9c0-12.6,9.8-22.6,22.3-22.7c12.4-0.1,23.1,10.6,23,23c-0.2,12.3-10.5,22.4-22.9,22.4
	C98.1,383.3,88.4,373.5,88.4,360.9z M418.7,360.9c0,12.7-9.8,22.5-22.4,22.5c-12.4,0-22.7-10.1-22.8-22.4
	c-0.1-12.4,10.6-23.1,23-22.9C409,338.3,418.7,348.3,418.7,360.9z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M262.5,361c-0.1,4.8-4.5,8.9-9.3,8.7c-4.8-0.2-8.8-4.6-8.5-9.5c0.3-4.7,4.3-8.4,9-8.4
	C258.5,352,262.6,356.2,262.5,361z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M119.5,360.7c0.1,5.1-3.7,9.1-8.7,9.1c-4.7,0-9.1-4.4-9-9.1c0.1-4.5,4.1-8.6,8.7-8.7
	C115.4,351.7,119.4,355.6,119.5,360.7z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M396.4,369.7c-5,0-8.8-4-8.7-9.1c0.1-4.9,3.7-8.6,8.4-8.7c4.9-0.1,9.2,4,9.3,8.7
	C405.5,365.3,401.1,369.7,396.4,369.7z"/>
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
                                    <button :style="{background:'rgba('+getterCakeBg1+')'}" @click="ShowElement(getterCakeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCakeBg2+')'}" @click="ShowElement1(getterCakeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCakeBg3+')'}" @click="ShowElement2(getterCakeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCakeBg4+')'}" @click="ShowElement3(getterCakeBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCakeBg5+')'}" @click="ShowElement4(getterCakeBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Cake= [
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
            var randomNumber = Cake[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cake[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cake'){
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
                getterCakeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cake') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCakeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cake') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCakeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cake') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCakeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCakeBg5: {
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
                            name:'Cake',
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