<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505; transform:scale(0.2)"  :class="ValueId+'_color1'" d="M406.5,15.6c5.7,2.3,10.1,6.3,14.4,10.6c45.7,46.1,91.4,92.1,137.1,138.1c11,11.1,11.8,21.1,2.3,33.8
    c-8.6,11.4-20.2,19.6-31.8,27.6c-2.2,1.5-4.4,3.1-6.7,4.4c-19.9,10.8-35.8,26.5-50.6,43.2c-8.6,9.7-14.6,21.5-22.8,31.7
    c-46.6,57.7-97.8,110.6-157.8,154.2c-15.3,11.2-28.6,24.1-41.4,37.7c-6.4,6.8-10.7,15.5-15.9,23.5c-7.6,11.7-15.4,23.2-25.2,33.3
    c-3.8,3.9-7.8,7.3-12.6,9.8c-10,5.2-18.3,4.1-26.2-3.9c-14.3-14.3-28.5-28.6-42.7-43c-32.1-32.3-64.2-64.7-96.4-97
    c-4.3-4.3-8.3-8.7-10.6-14.5c0-2.9,0-5.7,0-8.6c1.4-10.5,8.2-17.6,15.5-24.2c11.5-10.3,24.2-18.9,37.3-26.9
    c19.4-12,35.3-27.8,48.3-46.5c15.1-21.8,31.8-42.3,49.6-61.9c13.1-14.4,26.1-28.9,40.1-42.4c30.5-29.3,61.9-57.5,96.8-81.8
    c15.9-11.1,29.4-25.9,39.6-43.2c7.9-13.4,16.6-26.4,26.9-38.1c6.6-7.5,13.8-14.6,24.4-16C400.8,15.6,403.6,15.6,406.5,15.6z"/>
<path style="fill:#E7CFC0; transform:scale(0.2)" :class="ValueId+'_color3'" d="M476.4,237c-0.8,0.9-1.3,1.6-1.9,2.2c-3.6,3.7-7.5,7.2-10.9,11.1c-2.2,2.5-3.4,1.8-5.4-0.2
    c-19.4-19.7-39-39.3-58.5-59c-21.6-21.8-43.2-43.7-65-65.3c-3.1-3.1-2.9-4.8,0.2-7.4c3.2-2.8,6.2-5.9,9.1-9.1
    c2.1-2.3,3.4-2.7,5.8-0.2c19.4,19.8,38.9,39.3,58.5,59c21.6,21.8,43.3,43.6,64.9,65.4C474.2,234.6,475.2,235.8,476.4,237z"/>
<path style="fill:#E7CFC0; transform:scale(0.2)" :class="ValueId+'_color3'" d="M125.4,329.7c1,1,1.8,1.7,2.5,2.4c41.5,41.8,83.1,83.6,124.6,125.4c1.9,1.9,2.4,3.1,0.1,5.1
    c-4.5,4.1-8.3,11.1-13.2,11.8c-4.6,0.7-8.5-7-12.6-11.1c-17.3-17.8-34.8-35.4-52.3-52.9c-20.3-20.3-40.4-40.9-61-60.9
    c-3.2-3.1-4.2-5-0.2-8.2c3.5-2.7,6.4-6.3,9.5-9.4C123.7,331.1,124.5,330.4,125.4,329.7z"/>
<path style="fill:#FB9601; transform:scale(0.2)" :class="ValueId+'_color2'" d="M373.1,195.1c-0.9,1.1-1.8,2.2-2.8,3.2c-14,14.1-28,28.2-41.9,42.2c-42.3,42.6-84.7,85.2-126.9,127.9
    c-2.9,2.9-4.5,3.3-7.3,0c-4.4-5-9.1-9.7-14-14.1c-3-2.7-3.1-4.6-0.8-7.9c11.8-16.9,24.7-32.9,38.4-48.2
    c36.1-40.5,74.5-78.7,117.3-112c4.8-3.7,9.8-7.1,14.8-10.7c1.3-0.9,2.5-1.8,4.1-0.2c6,6.2,12.1,12.2,18.1,18.3
    C372.4,194,372.7,194.5,373.1,195.1z M406.9,228.8c-4.8-4.8-9.8-9.4-14.3-14.5c-3.1-3.6-4.8-3.4-8.1,0
    c-55.8,56.4-111.8,112.7-167.7,169c-0.6,0.6-1.2,1.3-1.9,1.9c-1.9,1.5-1.6,2.6,0.1,4.2c5.5,5.4,11,10.7,16.2,16.4
    c2.3,2.5,3.9,2.2,6.2,0.5c4.6-3.4,9.3-6.6,13.8-10.1c38.5-29.9,73.2-63.8,106.2-99.7c17.6-19.1,34.4-38.8,49.1-60.2
    c1-1.5,1.9-3,3-4.6C408.6,230.6,407.8,229.7,406.9,228.8z M249.6,424.5c6.7,6.6,13.5,13.2,20.1,20c1.9,1.9,3.3,1.4,5,0.1
    c4.9-3.6,9.9-7,14.7-10.7c41.9-32.7,79.5-70,115-109.6c14.4-16.1,28.2-32.8,40.4-50.7c1.3-1.9,3.3-3.6,0.5-6.3
    c-6.7-6.4-13-13.2-19.7-20C374.9,314.8,316.5,373.6,249.6,424.5z M317,138.1c-1.9-2-3.3-2-5.4-0.5c-5,3.8-10.2,7.2-15.1,11.1
    c-41.8,32.6-79.3,69.9-114.7,109.4c-14.3,16-28,32.5-40.1,50.3c-1.3,1.8-3.7,3.5-0.8,6.3c6.8,6.6,13.3,13.5,19.8,20.2
    c50.5-67.4,108.8-126.1,175.8-177.1C330,151.4,323.4,144.9,317,138.1z M422,146.1c13.7-13.8,27.4-27.7,41.2-41.4
    c2.3-2.3,1.8-3.5-0.2-5.5c-6.5-6.4-13.2-12.6-19.2-19.5c-3.8-4.3-6.7-4.2-10.3-0.3c-1,1.1-2.1,2-3,3c-12.2,13-21.2,28.2-30.8,43.1
    c-1.2,1.8-0.7,2.9,0.6,4.1c5.6,5.5,11.1,11.2,16.6,16.7c0.7,0.7,1.3,1.7,2.9,1.6C420.5,147.5,421.3,146.8,422,146.1z M128.4,398.8
    c-11.2,7.3-22.6,14.3-33.1,22.6c-5.2,4.1-10.3,8.3-14.3,13.6c-1.5,1.9-2.1,3.4,0,5.5c7.5,7.4,14.9,14.9,22.3,22.4
    c1.7,1.8,2.7,1.4,4.3-0.2c13.9-14.1,27.9-28.2,42-42.2c1.8-1.8,1.9-2.9,0.1-4.8c-5.6-5.5-11.1-11.1-16.7-16.7
    c-0.6-0.6-1.3-1.1-2.1-1.8C129.9,397.9,129.1,398.3,128.4,398.8z M505.9,142.4c-7.8-7.9-15.6-15.7-23.4-23.6
    c-1.9-1.9-2.8-0.2-3.9,0.8c-13.9,13.9-27.7,27.9-41.6,41.8c-2.3,2.3-1.8,3.6,0.3,5.5c5.3,5.1,10.5,10.3,15.5,15.6
    c2,2.1,3.5,2.2,5.8,0.6c7.6-5.2,15.5-10.1,23.1-15.4c8.1-5.6,15.9-11.5,22.4-19c1.2-1.3,2.1-2.9,3.1-4.3
    C506.7,143.6,506.4,142.9,505.9,142.4z M164.9,435.6c-14.1,14.2-28.2,28.4-42.4,42.6c-2.1,2.1-1,3.2,0.5,4.7
    c6.3,6.3,12.6,12.7,18.9,19c5.7,5.7,5.8,5.8,11.7,0c13.5-13.3,22.9-29.7,33.1-45.4c1.2-1.9,0.3-2.9-0.9-4.1
    c-5.6-5.6-11.1-11.2-16.6-16.7c-0.6-0.6-1.3-1.1-2.2-1.9C166.2,434.5,165.5,435,164.9,435.6z M421.3,57.2
    c-4.9-4.9-9.8-9.9-14.7-14.8c-5.7-5.7-5.7-5.7-11.6-0.1c-0.8,0.7-1.5,1.5-2.3,2.3c-12.2,12.9-21.1,28.2-30.8,43
    c-1.4,2.1-0.4,3.1,0.9,4.5c5.4,5.4,11,10.7,16.1,16.4c3.2,3.6,4.7,3.1,7.1-0.8c10.5-16.6,20.7-33.4,35.9-46.3
    c0.5-0.4,1.3-0.6,2.2-0.9C422.7,58.7,422,57.9,421.3,57.2z M542.7,179.4c-4.8-4.8-9.6-9.7-14.3-14.5c-5.1-5.2-5.1-5.2-9.9-0.1
    c-1.2,1.3-2.5,2.6-3.8,3.8c-12,11.6-26.1,20.5-40,29.4c-3,1.9-3.6,3.1-0.7,5.8c5.7,5.4,11.2,11,16.6,16.7c1.9,2,3.3,2.4,5.7,0.7
    c7.9-5.5,16.1-10.6,24-16c7.5-5.2,14.7-10.8,20.8-17.6c1.4-1.6,2.6-3.4,3.6-4.7C544.7,180.9,543.5,180.3,542.7,179.4z M113.4,379.6
    c-6.2-6.2-12.4-12.4-18.5-18.7c-1.7-1.7-2.8-1.2-4.5-0.1c-10.9,7.1-22,13.9-32.2,22c-5.3,4.2-10.5,8.6-14.8,13.9
    c-1.8,2.3-2.4,3.9,0.2,6.2c6,5.6,11.7,11.5,17.4,17.5c1.8,1.9,2.7,2,4.5-0.2c4.7-5.9,10.4-10.8,16.3-15.5c9.5-7.6,19.8-14,29.9-20.7
    c1.1-0.8,2.7-1.2,3.1-2.9C114.3,380.6,113.9,380,113.4,379.6z M191.3,540c13.5-13.3,22.8-29.7,33.1-45.4c1.5-2.2,0.1-3.2-1.1-4.4
    c-5-5.1-10.1-10.1-15.1-15.2c-4.8-4.9-4.9-4.9-8.6,0.9c-10.4,16.1-20.4,32.5-35.2,45c-2.5,2.1-0.5,3,0.6,4.1
    c5.8,5.9,11.6,11.7,17.4,17.5c0.8,0.8,1.4,2.1,3,1.9C187.7,543.4,189.5,541.7,191.3,540z"/>
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
                                    <button :style="{background:'rgba('+getterTamalesBg1+')'}" @click="ShowElement(getterTamalesBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTamalesBg2+')'}" @click="ShowElement1(getterTamalesBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTamalesBg3+')'}" @click="ShowElement2(getterTamalesBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterTamalesBg4+')'}" @click="ShowElement3(getterTamalesBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterTamalesBg5 +')'}" @click="ShowElement4(getterTamalesBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterTamalesBg6+')'}" @click="ShowElement5(getterTamalesBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTamalesBg7+')'}" @click="ShowElement6(getterTamalesBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTamalesBg8+')'}" @click="ShowElement7(getterTamalesBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTamalesBg9+')'}" @click="ShowElement8(getterTamalesBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTamalesBg10+')'}" @click="ShowElement9(getterTamalesBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Tamales= [
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
            var randomNumber = Tamales[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Tamales[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Tamales'){
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
                getterTamalesBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tamales') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tamales') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tamales') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTamalesBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTamalesBg10: {
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
                            name:'Tamales',
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