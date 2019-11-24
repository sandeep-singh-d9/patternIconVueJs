<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.8);">
                  <path style="fill:#F30E34; transform:scale(0.2)" :class="ValueId+'_color4'" d="M183.1,395.4c105.4,0,209.6,0,313.8,0c0,0.2,0.1,0.4,0.1,0.5c-10.9,2.4-21.8,4.8-32.7,7.1
    c-31.5,6.7-63.1,13.4-94.7,20c-3,0.6-4,2-4.8,4.7c-4.8,16.4-9.8,32.8-14.5,49.2c-1,3.7-1.8,4.8-5.8,2.9
    c-31.5-14.9-63.5-28.9-94.7-44.6c-19-9.6-36.7-21.6-54.9-32.5C191.2,400.5,187.6,398.2,183.1,395.4z M12.3,395.2
    c50.6,0,100.3,0,149.9,0c2,0,3.5,0.7,5.1,1.7c23.2,14,46.4,28.1,69.7,42c3.1,1.9,3.2,2.7,0.4,5c-14.6,11.6-29.1,23.4-43.4,35.3
    c-2.6,2.1-3.6,2.1-5.3-1c-8.4-15.9-17.1-31.6-25.4-47.5c-1.7-3.3-3.2-3.6-6.5-2.3c-24.1,9.6-48.2,19-72.4,28.5
    c-1.9,0.7-3.5,1.7-5.8-0.4c-21.4-19.8-43-39.4-64.5-59.1C13.6,396.9,13.3,396.4,12.3,395.2z"/>
<path style="fill:#69C229; transform:scale(0.2)" :class="ValueId+'_color1'" d="M65.4,67c8.7,2,16.7,3.9,24.8,5.8c5.2,1.2,7.1-0.6,6.1-5.9c-1.2-6.9-2.4-13.8-3.8-20.6
    c-0.5-2.6-0.1-3.2,2.7-2.6c8.5,1.7,17,3.1,25.5,4.6c2.6,0.5,4.7-0.2,6.9-1.9c6.9-5.2,13.9-10.2,21.4-15.7
    c1.8,10.2,3.5,19.8,5.1,29.4c0.3,1.8,0.2,3.6,2.4,4.5c2.4,1,3.3-0.9,4.5-2.1c6.1-6.3,12.2-12.7,18.8-19.7c3.6,9.8,7,19,10.4,28.3
    c1.9,5.1,6.2,6.6,10.8,3.7c7.2-4.5,14.3-9,22.1-13.9c0.9,9.7,1.9,18.7,2.7,27.8c0.4,4.2,1.9,5.8,6.5,4.9c9.1-1.8,18.3-3,28.1-4.5
    c-3.1,9.7-5.9,18.9-8.8,28c-1.8,5.8-0.1,10.3,5.2,13.3c8,4.7,16.1,9.3,24.5,14.2c-7.9,5.3-15.2,10.4-22.8,15.3
    c-4,2.5-4.2,5.6-2.1,9.3c3.3,5.6,6.5,11.2,9.9,16.7c1.6,2.6,1.1,3.4-1.9,3.4c-2.3,0-4.7,0.8-7,0.5c-11.1-1.3-18.8,3.7-25.4,12.2
    c-3.4,4.4-7.9,8.1-11.2,12.7c-4.6,6.5-6.9,13.6-5.6,21.6c1.6,10.1,7.9,15.7,18.1,15.8c13.8,0.1,27.7,0,41.5,0c1.6,0,3.2,0,5.2,0
    c-0.5,1.8-1.9,2.2-2.8,2.9c-11.9,9-19.4,20.8-22.9,35.3c-0.4,1.7,0.1,4.5-3,4.3c-2.6-0.1-5.2,1.1-7.3-2.4
    c-18-29.4-52.5-34.2-77.9-11.1c-0.2,0.2-0.6,0.3-0.9,0.5c-5.9-4.6-7.5-16.3-6.5-25.8c1.6-16.5,8.1-30.8,18.4-43.5
    c6.4-7.9,13.3-15.4,19.9-23.1c4.9-5.7,9.5-11.6,12.9-18.4c8.9-17.8,5.5-41.5-8.3-54.6c-10.9-10.4-24.4-12.7-38.8-12.1
    c-1,1.9,0.5,2.9,1,4.2c6.8,15.5,0.4,32.9-14.9,40c-2.5,1.2-4.5,2.7-6.4,4.6c-20.2,20.3-40.5,40.6-60.8,60.8
    c-6.3,6.3-13.5,6.6-20.2,0.8c21.6-21.5,43.1-43,64.8-64.6c-8.8-4.5-8.8-4.5-15.5,2.2c-21.1,21.1-42.4,42-63.2,63.4
    c-7.2,7.3-14.9,7.2-22.6,3.1c-7.6-4.1-11.4-13.1-9.2-21.3c2.2-8.5,9.5-14.9,18.2-14.1c6,0.5,9.4-1.8,13.2-5.7
    c8.4-8.8,17.1-17.3,25.8-25.8c1.8-1.8,2.2-3.1,0.9-5.5c-2.8-5.1-5.4-10.3-7.9-15.5c-4.1-8.4-4.1-16.5,2.5-23.6c4-4.3,5-8.5,3.3-14.2
    C68.9,84.5,67.4,76,65.4,67z M306.9,368.4c-8.9-8.3-16.6-15.8-24.6-23c-10-8.9-17.1-19.3-19.5-32.7c-4.8-26.8,13-53.7,39.7-59.5
    c27.5-6,54.7,10.7,61.7,37.6c2.8,10.9,0.7,21.5-0.5,32.2c-1.6,13.9-3.1,27.8-4.6,41.7c-0.2,2.1-0.7,3.6,2.5,3.9
    c5.8,0.6,8.8,4.3,8.6,9.1c-0.3,5.1-4.2,8.3-10.5,8.3c-36.1,0-72.3,0-108.4,0c-8.8,0-17.7-0.2-26.5,0.1c-4.2,0.2-5.2-1.3-4.4-5.1
    c3.4-16.5,22.9-24.6,36.8-15.1c2.8,1.9,5.5,2.6,8.8,2.6C279.1,368.3,292.2,368.4,306.9,368.4z M193.2,368.1c3.4,0.2,5.4,0.2,7.4,0.5
    c4.6,0.8,7.5,4.3,7.5,8.6c0,4.3-3.1,7.9-7.6,8.6c-1.8,0.3-3.7,0.2-5.5,0.2c-37.8,0-75.6,0-113.4,0c-5.3,0-5.7-0.5-4.4-5.7
    c3.8-16.2,22.9-23.7,36.8-14.2c2.7,1.8,5.2,2.5,8.3,2.4c5.8-0.1,11.7-0.1,17.5,0c2.5,0.1,3.8-0.5,4.7-3.2
    c5.2-16.1,10.7-32.1,16-48.2c1-2.9,0.8-6.2,1.4-9.3c4-18.7,19.3-31.5,38.2-31.8c18.7-0.3,34.9,11.8,39.6,29.6
    c4.8,18.3-3.6,36.9-20.6,45.9C210.4,356,202.7,362,193.2,368.1z"/>
<path style="fill:#4C8A20; transform:scale(0.2)" :class="ValueId+'_color3'" d="M87.3,280.5c-0.4-22.5,7.7-41.9,21.4-59.3c11.6-14.7,25.9-26.8,39.7-39.4c6.5-5.9,13-12,18.2-19.1
    c4.6-6.2,7.5-13.1,6.5-20.9c-0.7-5.6,1.8-10.4,2.4-15.6c0.2-2,0.5-4,0.5-6c0-6.9,0-7,6.8-4.6c13.5,4.7,20.5,14.5,22.3,28.5
    c1.6,12.2-2.1,22.7-9.7,32c-5.9,7.2-12.1,14.2-18.2,21.2c-10.9,12.5-20.5,25.8-24.9,42.2c-2.8,10.7-4.5,21.5-2.3,32.6
    c1.1,5.7,3.5,10.7,7.2,15.2c1.5,1.8,1.6,3.1,0.4,5.2c-3.4,5.8-4.7,12.3-5.9,18.9c-2.4,12.9-7.8,25-11.7,37.5
    c-0.8,2.6-2.6,1.2-4.1,0.7c-25.5-9.3-41.7-26.6-46.8-53.6C88.2,290.8,87.9,285.6,87.3,280.5z M451.6,355.9c-27.3,0-52.9,0-78.6,0
    c-2.3,0-3.7-0.2-3.3-3.2c1.9-15.5,3.6-31.1,5.2-46.6c0.2-1.9,1.1-2.1,2.6-2.1c9.2,0,18.3,0.1,27.5,0c2.1,0,3,1.2,3.9,2.6
    c2.6,3.9,5,7.9,7.6,11.8C425.9,332.3,436.1,345.6,451.6,355.9z M283,196.9c-3.1-7.6-3.1-7.5,4.7-11c5.3-2.4,10.9-4.1,16.5-5.4
    c2.1-0.5,3,0.1,3.6,2c4.4,14.4,8.9,28.9,13.5,43.3c0.8,2.6,0.2,3.1-2.3,3.2c-9,0.5-17.7,3-26.3,5.4c-2.8,0.8-6,1.7-8.2,3.6
    c-8.6,7.1-18.8,3.7-28.3,4.5c-2.1,0.2-2.2-1.4-2.3-3c-0.9-12.9,2.1-24.7,9.8-35.3c2.9-3.9,5.9-7,11.4-6.5
    C277.7,197.8,280.2,197.2,283,196.9z M233.3,353.8c8.4-8.1,14.1-17.6,16.2-29.2c1-5.8,1-11.6,0-17.4c-0.2-1.1-1.3-2.7,1-3.1
    c1.7-0.3,2.4,0.6,2.4,2.3c0.3,19.2,9.7,33.8,23.6,46c0.9,0.8,2.2,1.5,2.2,3.6c-8.5-0.6-17,1.4-25.4-2
    C247,351.5,240.2,352.1,233.3,353.8z M362.4,265.6c13.9,6.9,25.9,16.3,37.1,28.8c-8.4,0-15.6,0-22.9,0c-1.6,0-2.2-0.8-2.5-2.4
    C372.1,282.4,368,273.8,362.4,265.6z"/>
<path style="fill:#FDFCFC; transform:scale(0.2)" :class="ValueId+'_color2'" d="M139.7,131.1c-9,0-16.2-7.2-16.2-16.1s7.2-16.1,16.2-16c9,0,16.3,7.2,16.2,16.1
    C155.9,123.9,148.6,131.1,139.7,131.1z M88.8,133.1c-3.3-0.1-5.7-1.6-7.2-4.5c-1.5-2.9-1.5-5.9,0.6-8.4c6.5-7.9,13.2-15.8,19.8-23.6
    c1.6-1.9,3.7-2.4,5.7-0.8c2.4,1.9,1.7,4.1,0,6.1c-3.7,4.4-7.4,8.9-11.3,13.3c-1.7,1.8-2,3-0.4,5.4C99.6,126.2,95.5,133.2,88.8,133.1
    z M34.3,192.2c2.7,0.5,4.7,1.8,4.7,4.7c0,3.1-2,5-5,4.9c-2.8-0.1-4.6-2-4.5-4.9C29.6,194.1,31.5,192.6,34.3,192.2z M124.5,316.4
    c-8.4-0.1-14.7-6.5-14.7-14.9s6.5-14.8,14.8-14.9c8.5,0,15.2,6.8,15.1,15.2C139.5,310.2,132.9,316.5,124.5,316.4z M125,257.1
    c4.5,0.1,8.2,4.1,8,8.6s-4.1,8.1-8.6,8c-4.5-0.1-8.2-4.1-8-8.6S120.5,257,125,257.1z"/>
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
                                    <button :style="{background:'rgba('+getterStandingDragonBg1+')'}" @click="ShowElement(getterStandingDragonBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStandingDragonBg2+')'}" @click="ShowElement1(getterStandingDragonBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStandingDragonBg3+')'}" @click="ShowElement2(getterStandingDragonBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStandingDragonBg4+')'}" @click="ShowElement3(getterStandingDragonBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <!--<button :style="{backgroundColor:'rgba('+getterStandingDragonBg5 +')'}" @click="ShowElement4(getterStandingDragonBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStandingDragonBg6+')'}" @click="ShowElement5(getterStandingDragonBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterStandingDragonBg7+')'}" @click="ShowElement6(getterStandingDragonBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterStandingDragonBg8+')'}" @click="ShowElement7(getterStandingDragonBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStandingDragonBg9+')'}" @click="ShowElement8(getterStandingDragonBg9)" :class="this.ValueId+'_color9btn'"></button> 

                                     <button :style="{backgroundColor:'rgba('+getterStandingDragonBg10+')'}" @click="ShowElement9(getterStandingDragonBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var StandingDragon= [
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
            var randomNumber = StandingDragon[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  StandingDragon[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'StandingDragon'){
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
                getterStandingDragonBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'StandingDragon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'StandingDragon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'StandingDragon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterStandingDragonBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStandingDragonBg10: {
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
                            name:'StandingDragon',
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