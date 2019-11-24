<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.5);">
                  <path style="fill:#2E2C77; transform:scale(0.2)" :class="ValueId+'_color1'" d="M447.5,550.1c0.2,13.6,2.3,27,3.6,40.4c3.3,33.9,6.9,67.8,10.4,101.7c0.2,2.1,0.2,3.6-2,4.6
    c-25.5,11.5-51.5,21.9-78.9,28.3c-2.6-2.8-1.8-6.4-1.8-9.7c-0.1-39.3,0-78.7,0-118c0-93,0-186,0-279c0-3.4-0.1-6.8,0.3-10.1
    c0.3-4.3,3.2-7.1,5.7-10.1c12.9-15.5,25.8-30.9,38.7-46.4c1.5-1.9,2.9-4,5.7-4.2c8.4,19.5,16.8,39,25.1,58.5
    c19.9,46.9,39.8,93.8,59.6,140.8c0.5,1.2,0.8,2.5,1.2,3.7c-0.7,2.7-2.9,4.3-4.7,6.2c-19.4,19.3-39.5,38-59.3,56.9
    c-5,4.7-6.3,9.4-5.2,16C446.9,536.3,449,543.1,447.5,550.1z M128,461.5c17,17.8,35.1,34.5,52.9,51.5c5.8,5.5,7.1,11,5.8,18.5
    c-1.1,6.2-2.9,12.5-1.6,18.9c-0.1,1.7,0,3.4-0.2,5.1c-4.6,45.3-9.2,90.7-13.9,136c-0.3,2.7-0.3,4.4,2.7,5.8
    c25.1,11.3,50.6,21.3,77.3,27.9c2.3-3.4,1.5-7.3,1.5-11c0-132.6,0-265.3,0-397.9c0-3,0.1-6-0.3-9c-0.4-4-2.8-6.9-5.3-9.7
    c-10.5-12-20.4-24.4-31.1-36.2c-4-4.5-6.7-10.5-12.9-12.8c-0.5,1-1.2,1.9-1.6,2.9c-17.7,41.7-35.3,83.4-52.9,125.2
    c-10.4,24.6-20.6,49.2-31,73.8C118.9,455.8,124.4,457.7,128,461.5z M315.4,37.8c-0.7,0.3-1.4,0.7-2.1,1
    c-38.4,14.4-76.7,28.7-115.1,43.1c-1,0.4-2.2,0.6-3.3,1.6c15.2,5.7,30.1,11.3,45.1,16.9c0.5,1,1.6,1.2,2.5,1.6
    c23.4,8.8,46.9,17.5,70.4,26.4c2.1,0.8,4.1,0.8,6.2,0c4.7-1.9,9.5-3.6,14.2-5.4c13.2-4.9,26.4-9.9,39.5-14.8
    c1.3-0.5,2.8-0.7,3.5-2.1c-0.2-1.2-1.3-1.2-2.2-1.6c-14.9-5.7-29.9-11.2-44.8-16.8c-3.7-1.4-7.5-2.6-11.4-4.4
    c2.9-1.1,5.3-2.4,8.3-1.2c14.4,5.6,28.8,10.9,43.3,16.3c4.9,1.8,9.6,4,14.7,5.2c2.7-0.7,5.5-1.2,7.6-3.2c15-5.6,30-11.2,45.5-17.1
    c-1.3-0.5-1.9-0.8-2.6-1c-31.2-11.7-62.4-23.4-93.6-35.1c-8.3-3.1-16.5-6.3-24.7-9.4C316,37.8,315.7,37.8,315.4,37.8z"/>
<path style="fill:#242263; transform:scale(0.2)" :class="ValueId+'_color3'" d="M417.1,219.7c-32.5,39.5-65.1,79-97.5,118.6c-2.8,3.4-4,3.4-6.8,0c-32.4-39.6-65-79.1-97.5-118.6
    c14.7-5.4,29.9-8.4,45.3-10.9c52-8.4,103.4-5,154,9.7C415.5,218.8,416.3,219.3,417.1,219.7z M239.9,153.2c0,1.1,0,2,1.1,2.9
    c21.1,16.2,44.8,24.9,71.4,25.8c20.4,0.6,39.8-3.8,58.1-13c0.4-0.7,0.1-1.4-0.1-2c-1.6-5.9-0.1-10,5-13.3c0.9-0.6,1.7-1.1,1.9-2.2
    c0.3-7.9,0.1-15.9,0.1-23.8c0-6.1,0-12.1,0-18.2c0-1.2,0.4-2.6-1.2-3.2c-5.4,2.1-10.7,4.2-16.1,6.2c-13.6,5.1-27.3,10.2-40.9,15.4
    c-2.2,0.8-4.1,1-6.3,0.2c-8.1-3.2-16.3-6.3-24.5-9.3c-16.1-6-32.3-12.1-48.4-18.1C239.9,118,239.9,135.6,239.9,153.2z"/>
<path style="fill:#25374B; transform:scale(0.2)" d="M389.9,156.4c-1.6-1.9-3.6-3.4-5.8-4.5c-0.8-0.9-0.7-2.1-0.7-3.1c0-14.2,0-28.3,0-42.5
    c0-1.1-0.1-2.2,0.7-3.1c2.6-1,5.1-1.9,7.7-2.9c0,17.6,0,35.2,0,52.8C391.9,154.7,391.5,155.9,389.9,156.4z"/>
<path style="fill:#F8BD06; transform:scale(0.2)" :class="ValueId+'_color2'" d="M251.2,304.6c-16.1-18.8-32.1-37.6-48.2-56.4c3.6-9.7,7.2-19.5,12.3-28.6c2.3,0.4,3.5,2,4.8,3.6
    c19.6,24.3,39.7,48.2,59.4,72.4c10.8,13.3,21.9,26.3,32.7,39.6c3.8,4.7,4.1,4.6,7.9,0c21.7-26.5,43.6-52.8,65.3-79.3
    c8.9-10.9,18.1-21.7,26.8-32.7c1.3-1.6,2.6-3.3,4.8-3.6c5.1,8.8,8.5,18.4,12.1,27.9c-16.2,19.4-32.5,38.8-48.7,58.2
    c-5.2,8.5-11.1,16.5-18.9,22.8c-12.2,14.6-24.3,29.3-36.5,43.9c-1.3,1.6-1.4,3.3-1.4,5.2c0,116.6,0,233.3,0,349.9
    c0,2.4,1.6,6.1-1.5,7c-4.1,1.2-8.6,1-12.8-0.1c-1.1-0.3-1-1.5-1-2.4c0-1.7,0-3.4,0-5.1c0-116.3,0-232.5,0.1-348.8
    c0-3.2-0.8-5.7-2.9-8.1c-11.9-14.1-23.6-28.3-35.4-42.5C262.3,321.1,256.1,313.4,251.2,304.6z M250.9,308c0,139,0,278,0,417
    c4,1.1,7.9,2.3,11.9,3.3c6.8,1.6,6.9,1.6,6.9-5.4c0-128.9,0-257.8,0-386.7c0-2.8,0.1-5.6,0.2-8.5c-6.3-7.7-12.6-15.3-18.9-23
    C251.1,305.7,250.9,306.9,250.9,308z M361.8,335.9c0,128.7,0,257.3,0,386c0,1.7,0.1,3.4,0,5.1c-0.1,2.3,0.9,3,3.1,2.4
    c5.2-1.5,10.7-2,15.8-4.2c0-137.1,0-274.3,0-411.4c0-2.6-0.1-5.3-0.2-7.9c-6.3,7.6-12.6,15.2-18.9,22.8
    C361.6,331,361.8,333.5,361.8,335.9z M107.7,472.3c-1.1,2.5-0.2,3.8,1.4,5.3c4.9,4.7,9.8,9.4,14.7,14.1c20.4,19.5,40.8,39,61.2,58.5
    c1.4-9.5,2.8-18.9,4.3-28.4c0.3-2-0.8-3.2-2-4.4c-23.3-22.5-46.6-44.9-69.9-67.4C114.2,457.6,111.1,465,107.7,472.3z M523.8,477.2
    c1.4-1.3,1.9-2.6,1-4.5c-3.3-7.3-6.5-14.8-9.8-22.1c-23.1,22.1-46.1,44.2-69.3,66.2c-1.8,1.7-2.4,3.4-2.1,5.9
    c1.4,9.1,2.5,18.2,3.8,27.3C472.9,525.8,498.4,501.5,523.8,477.2z M376.6,173.8c2.4,1.6,5.2,1.6,7.6,0c7.7-4.2,9.5-9.6,5.7-17.4
    c-1.1-2.7-3.5-4-6-5c-2.5-0.7-4.9-1.2-7.2,0.5c-7.6,4.4-9.2,8.9-6.1,16.9C372.2,171,374.2,172.7,376.6,173.8z M376.1,175.9
    c-2.2,6.4-4.3,12.8-6.5,19.2c-0.5,1.5-0.3,2,1.4,2c4.2-0.1,8.4,0,12.6,0c2.6,0,5.3,0,8.1,0c-0.6-2-1.2-3.6-1.7-5.3
    c-1.9-6-3.9-12-5.9-17.9c-2.5,0.6-5,0.7-7.6,0C376.5,174.5,376.3,175.2,376.1,175.9z M382.6,102.6c-18.2-6.8-36.4-13.4-54.4-20.5
    c-4.5-1.8-7.9-0.6-12,1.2c0.6,0.3,0.9,0.4,1.1,0.5c11.7,4.4,23.3,8.7,35,13.1c8,3,15.9,6,23.8,9.1c0.9,0.7,0.4,1.6,0.4,2.4
    c0,14.5,0.1,29,0.1,43.5c2.5-0.6,5-0.6,7.5,0c0-16.3,0-32.5,0-48.8C383.6,103,383.1,102.8,382.6,102.6z"/>
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
                                    <button :style="{background:'rgba('+getterGraduationRobeBg1+')'}" @click="ShowElement(getterGraduationRobeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg2+')'}" @click="ShowElement1(getterGraduationRobeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg3+')'}" @click="ShowElement2(getterGraduationRobeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterGraduationRobeBg4+')'}" @click="ShowElement3(getterGraduationRobeBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg5 +')'}" @click="ShowElement4(getterGraduationRobeBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg6+')'}" @click="ShowElement5(getterGraduationRobeBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg7+')'}" @click="ShowElement6(getterGraduationRobeBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg8+')'}" @click="ShowElement7(getterGraduationRobeBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg9+')'}" @click="ShowElement8(getterGraduationRobeBg9)" :class="this.ValueId+'_color9btn'"></button> 

                                     <button :style="{backgroundColor:'rgba('+getterGraduationRobeBg10+')'}" @click="ShowElement9(getterGraduationRobeBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var GraduationRobe= [
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
            var randomNumber = GraduationRobe[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  GraduationRobe[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'GraduationRobe'){
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
                getterGraduationRobeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GraduationRobe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GraduationRobe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GraduationRobe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGraduationRobeBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGraduationRobeBg10: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9
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
                ShowElement8(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8 + ')'
                    this.clickedInput = 'nine'
                    this.showColorPicker = true
                },
                ShowElement9(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9 + ')'
                    this.clickedInput = 'ten'
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
                    var background8Clone =tempArrayClone.background8 
                    var background9Clone =tempArrayClone.background9 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'GraduationRobe',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
                            background8:  background8Clone,
                            background9:  background9Clone,
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
                            $('.Svg_'+cloneIndex+'_color9').css({fill: 'rgba('+background8Clone+')'})
                            $('.Svg_'+cloneIndex+'_color10').css({fill: 'rgba('+background9Clone+')'})
                            
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