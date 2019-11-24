<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(187, 227, 238, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M144,534.6c-28-9.8-50.7-26.8-68.1-50.8c-18.7-25.9-27.6-55-27.2-86.9c0.2-14.6,0-29.2,0-43.9
	c2.9-2.9,6.6-2.1,10.1-2.1c42.1-0.1,84.2,0,126.3,0c71.1,0,142.3,0,213.4,0c3.7,0,7.5-0.6,11.1,1.3c2.8,2.9,2,6.6,2,10.1
	c0.2,12.3,0.2,24.7,0,37c0,6.1-0.2,12.2,0,18.3c0.3,5.9,3.2,9.3,7.8,9.2c4.6-0.1,7.3-3.4,7.6-9.4c0.2-3.9,0-7.9,0.1-11.8
	c0.1-2.1,0-4.4,1.9-6c6.1-1.8,12.1-1.7,18.2-0.1c2.2,1.6,2,4.1,2.1,6.4c0.1,3.5,0,7.1,0.1,10.6c0.2,6.8,3.1,10.4,7.9,10.3
	c4.7-0.1,7.3-3.6,7.6-10c0.1-3.5,0-7.1,0.1-10.6c0.1-2.3-0.1-4.8,1.9-6.5c6.1-1.8,12.1-1.7,18.2-0.1c2.7,2.2,2,5.3,2.2,8.2
	c0.2,3.7-0.2,7.5,0.2,11.2c0.6,5,3.7,8,7.9,7.9c4-0.2,6.9-3,7.3-7.9c0.5-6.5,0.1-13,0.2-19.5c-0.2-12.3-0.2-24.7,0-37
	c0-3.5-0.7-7.1,1.7-10.1c2.3-1.5,4.9-1.4,7.4-1.4c14,0,28-0.1,41.9,0c2.7,0,5.6-0.3,7.7,2.1c0,17.2,0.4,34.4-0.2,51.6
	c-1,31.7-11.5,60-31.4,84.8c-16.9,21.2-38.2,36.2-63.7,45.2c-0.8,1.8-2.3,2.6-4,3.2c-10.1,3.3-20.5,5.3-31.1,6c-1,0.1-1.9-0.4-2.7-1
	c-82.3,0-164.6,0-246.9,0c-1.3,1.1-2.9,1-4.5,0.9c-9.2-0.8-18.2-2.6-27.1-5.2C147.9,537.8,145.3,537.2,144,534.6z"/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M409.6,352.8c-118.5,0-237,0-355.5,0c-1.8,0-3.6,0.1-5.3,0.2c-9.3-0.9-15.8-5.4-18.4-14.7
	c-2.2-7.8,0.9-15,9-21.1c4.5-4.6,12-5.6,19-2.4c117.1,0,234.1,0,351.2,0c1.8,1.4,2,3.4,2,5.4c0.2,9.1,0.2,18.2,0,27.3
	C411.6,349.4,411.4,351.4,409.6,352.8z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M58.4,314.8c-6.4,0.3-13-1-19,2.4c0-72.8-0.2-145.6,0-218.4c0.1-39.8,31.8-73.4,72.9-78.2
	c38.4-4.5,76.1,22,86,60.5c2.2,8.5,2.9,17.1,2.4,25.9c-6.3,1.1-12.5,1.1-18.8,0c0.7-20-4.9-37.7-20.1-51.2
	c-19.3-17.2-41.6-21.5-65.5-11.5c-23.6,9.9-37.5,28.6-37.7,54.1C57.8,170.5,58.4,242.6,58.4,314.8z"/>
<path :style="{fill:'rgba(229, 184, 94, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M409.6,352.8c0-12.7,0-25.3,0-38c0.8-15.8,6.7-24.5,19.1-27.7c2.2-0.6,4.7-0.7,7-0.7
	c13-0.1,26.1,0.7,39.1-0.2c17.4-1.2,31.2,10,30.2,28.7c1.2,1.4,1.6,3.1,1.6,4.9c0.2,9.4,0.2,18.8,0,28.2c0,1.8-0.4,3.5-1.6,4.9
	c-0.1,3.2-0.3,6.3-0.4,9.5c-2.2,2.2-5.1,1.9-7.8,1.9c-26.3,0.1-52.6,0.1-78.9,0c-2.7,0-5.6,0.3-7.8-1.9
	C409.9,359.1,409.8,356,409.6,352.8z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M552.2,314.8c0-34.8,0.1-69.6,0.1-104.4c0-10.9-8.6-19.2-19.2-19.1c-10.3,0.1-18.4,8.4-18.7,19.1
	c-0.1,3.4,0.2,6.7-0.1,10.1c-0.5,5.2-3.6,8.4-8.8,8.8c-5,0.4-8.4-2.3-9.8-7c-5.4-18.4,6.1-40.7,24.3-47.5c23.9-9,50.8,8.1,51.2,33.3
	c0.6,36,0,72,0,107.9C564.7,317.9,558.4,317.2,552.2,314.8z"/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M552.2,314.8c6.3,0,12.7-0.2,18.9,1.2c0.6,0.8,1,1.7,1.7,2.3c6.7,5.5,9.7,12.4,7.1,21
	c-2.7,8.8-9.2,12.9-18,13.7c-19-0.1-37.9-0.1-56.9-0.2c0-12.7,0-25.3,0-38C520.7,314.8,536.5,314.8,552.2,314.8z"/>
<path :style="{fill:'rgba(187, 227, 238, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M181.9,106.9c6.3-1.6,12.5-1.6,18.8,0c15.5,4.5,24.6,14.8,28.2,30.3c1.1,4.7,0.2,6.8-5.3,6.7
	c-21.5-0.3-43.1-0.3-64.6,0c-5.5,0.1-6.4-2-5.3-6.7C157.4,121.7,166.5,111.4,181.9,106.9z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M144,534.6c12.1,4.9,25,6.5,37.8,8.2c0,6.3,0.1,12.6-0.1,18.9c-0.2,10.9-8.6,19.2-19.2,19
	c-10.3-0.1-18.6-8.3-18.7-19C143.7,552.7,144,543.7,144,534.6z"/>
<path :style="{fill:'rgba(0, 118, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M428.8,542.8c12.8-1.8,25.7-3.3,37.8-8.2c0.1,9.3,0.3,18.6,0.1,27.8c-0.2,10.5-8.9,18.5-19.3,18.4
	c-10.1-0.1-18.3-8.2-18.6-18.5C428.7,555.8,428.8,549.3,428.8,542.8z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M476.3,105.8c-10.4,0-18.9-8.4-19-18.7c-0.1-10.7,8.4-19.3,19-19.3s19.1,8.6,19,19.3
	C495.2,97.5,486.7,105.8,476.3,105.8z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M305.3,105.8c10.7,0,19.1,8.6,19,19.3c-0.1,10.4-8.6,18.7-19,18.7c-10.7,0-19.1-8.6-19-19.3
	C286.4,114.1,294.9,105.8,305.3,105.8z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M390.7,172.3c-10.6-0.1-19.1-8.8-18.9-19.4c0.2-10.3,8.8-18.6,19.2-18.6c10.6,0.1,19,8.8,18.8,19.5
	C409.6,164.1,401.1,172.4,390.7,172.3z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M343.3,210.3c0,10.7-8.6,19.1-19.3,19c-10.3-0.1-18.7-8.6-18.7-19c0-10.6,8.7-19.1,19.3-19
	C335,191.4,343.4,199.9,343.3,210.3z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M428.7,200.8c10.7,0,19.2,8.5,19.1,19.2c-0.1,10.3-8.6,18.8-18.9,18.8c-10.6,0-19.2-8.5-19.1-19.2
	C409.9,209.2,418.3,200.8,428.7,200.8z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M143.8,267.3c-10.4,0-18.9-8.3-19-18.7c-0.1-10.7,8.4-19.3,19-19.3c10.4,0,18.9,8.4,19,18.7
	C162.9,258.7,154.5,267.3,143.8,267.3z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M248.3,238.8c10.7,0,19.2,8.6,19.1,19.2c-0.1,10.3-8.6,18.7-19,18.8c-10.6,0-19.2-8.6-19-19.2
	C229.4,247.2,237.9,238.8,248.3,238.8z"/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M162.8,186.4c0,10-3.1,14.6-9.8,14.4c-6.5-0.2-9.2-4.5-9.2-14.4c0-9.7,3-14.1,9.5-14.1
	C159.8,172.3,162.8,176.7,162.8,186.4z"/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M200.8,186.8c0,1.4,0.1,2.8,0,4.1c-0.3,5.9-4.2,9.9-9.6,9.8c-5.4-0.1-9.1-4-9.3-10.1
	c-0.1-2.8-0.1-5.5,0-8.3c0.2-6,3.9-10,9.3-10.1c5.4-0.1,9.4,3.9,9.6,9.8C200.9,183.7,200.8,185.3,200.8,186.8z"/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M219.8,186.8c0-10,3.1-14.6,9.7-14.5c6.4,0.1,9.3,4.5,9.3,14.3c0,9.7-2.9,14.1-9.4,14.2
	C222.9,200.8,219.8,196.3,219.8,186.8z"/>
<path :style="{fill:'rgba(253, 203, 102, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M410,362.3c31.5,0,63.1,0,94.6,0c0,12.7,0,25.4,0,38c-6.3,2.9-12.6,2.7-18.9,0.1
	c-6.3,0-12.6,0-18.9,0c-6.4,2.7-12.7,2.7-19.1,0c-6.3,0-12.6,0-18.9,0c-6.3,2.6-12.6,2.8-18.9-0.1C410,387.6,410,374.9,410,362.3z"
	/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M410,400.3c6.3,0,12.6,0.1,18.9,0.1c0,6.1,0.1,12.2-0.1,18.3c-0.1,6-3.9,10-9.2,10.1
	c-5.6,0.1-9.6-4-9.7-10.2C409.8,412.5,409.9,406.4,410,400.3z"/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M447.8,400.4c6.4,0,12.7,0,19.1,0c0,6.1,0.1,12.3-0.1,18.4c-0.2,6-4,10-9.5,10c-5.4,0-9.3-4-9.5-10
	C447.7,412.7,447.8,406.5,447.8,400.4z"/>
<path :style="{fill:'rgba(227, 42, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M485.8,400.4c6.3,0,12.6-0.1,18.9-0.1c0.1,6.3,0.3,12.6,0.1,18.8c-0.1,5.8-4.3,9.8-9.7,9.6
	c-5.2-0.1-9-4-9.2-9.5C485.7,413,485.8,406.7,485.8,400.4z"/>
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
                                    <button :style="{background:'rgba('+getterBathtubBg1+')'}" @click="ShowElement(getterBathtubBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBathtubBg2+')'}" @click="ShowElement1(getterBathtubBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBathtubBg3+')'}" @click="ShowElement2(getterBathtubBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBathtubBg4+')'}" @click="ShowElement3(getterBathtubBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBathtubBg5+')'}" @click="ShowElement4(getterBathtubBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Bathtub= [
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
            var randomNumber = Bathtub[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Bathtub[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Bathtub'){
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
                getterBathtubBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bathtub') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBathtubBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bathtub') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBathtubBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bathtub') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBathtubBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBathtubBg5: {
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
                            name:'Bathtub',
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