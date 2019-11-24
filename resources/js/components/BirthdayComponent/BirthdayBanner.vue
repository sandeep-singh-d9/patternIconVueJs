<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M277,265.6c0,21.1,0,42.1,0,63.2c0,3,0.6,6.2-3,7.8c-3.6,1.6-5.7-1-7.9-3
	c-31.9-29.4-62.8-59.7-93.6-90.2c-6-6-15.2-3.7-17.3,4.6c-10.1,38.9-18.6,78.2-27.5,117.4c-0.2,0.8-0.3,1.6-0.5,2.4
	c-0.9,2.8-0.7,6.4-4.5,7.2c-4.2,0.9-5.5-2.6-7.3-5.2c-23.4-33.3-46.8-66.5-70-99.9c-2.4-3.5-4.9-4.6-9-4.1c-9.4,1-18.9,1.6-28.4,2.4
	c-3.7,0.3-7.5,0.1-7.7-4.5c-0.3-4.7,3.5-5,7.2-5.2c55.5-3.3,109.7-13.8,162.9-29.8c3.6-1.1,4.8-2.5,4.7-6.2
	c-0.2-16.8-0.1-33.6-0.1-50.4c0-2.5-0.2-4.5-2.8-6.1c-2.8-1.7-4.1,0.3-5.8,1.4c-32.8,20-65.6,40-98.4,60c-2.3,1.4-4.4,3.1-7.2,1.3
	c-3-1.9-2.5-4.7-2-7.6C65,181.6,71,142,77.4,102.5c0.7-4.2-1.6-5.9-4.1-7.9C49.5,75,26.7,54.4,4.8,32.8c-1-1-2.1-1.9-3-3
	c-2.1-2.3-2.5-4.7-0.1-7c2.3-2.2,4.9-2,7,0.1c4.6,4.3,8.9,8.8,13.5,13.1c59.5,56.5,123.5,107,196.6,145.2c10,5.2,20.3,9.9,30.8,14.3
	c3.1,1.3,5.6,1.2,8.6-0.2c67.6-31.4,128.1-73,182-124.4c21.7-20.7,42-42.7,61-65.9c0.5-0.6,1-1.2,1.6-1.9c2.1-2.6,4.6-4.4,7.7-1.8
	c3.1,2.5,2.1,5.3-0.2,7.9c-5.5,6.5-10.4,13.6-16.6,19.4c-7,6.5-7.8,12.6-4.7,21.6c12.1,35.8,23.2,71.9,34.7,107.8
	c0.9,2.7,2.1,5.4-0.6,7.8c-2.7,2.5-5.3,0.9-7.9-0.2c-36.2-15.1-72.3-30.1-108.5-45.3c-3.9-1.7-7.1-2.1-10.3,1.2
	c-3.4,3.5-8.3,4.9-7,12.3c6.6,38.8,12.4,77.8,18.4,116.8c0.4,2.7,0.7,5.3-1.9,7.1c-2.8,1.9-4.9,0.3-7.2-1.1
	c-33.2-20.9-66.6-41.5-99.6-62.7c-5.9-3.8-9.9-3.4-15.6-0.4c-4.9,2.5-6.9,5.2-6.8,10.9C277.2,224.7,277,245.2,277,265.6z M462,345
	c15.9-31.8,31.4-62.8,47.2-94.3c-11.5-1-22.4-2-33.3-3c-12.5-1.2-25-2.4-37.5-3.6c-3.5-0.3-6.1-1.7-5.8-5.4c0.4-3.8,3.3-4.6,6.8-4.3
	c18.7,1.8,37.5,3.4,56.2,5.3c13.7,1.4,27.5,1,41.2,0.6c3.5-0.1,7-0.1,7.3,4.3c0.3,4.7-3.4,5.3-7.1,5.4c-0.4,0-0.8,0.1-1.2,0
	c-12.4-2.4-18.1,3.9-23.1,14.8c-14.2,30.6-29.9,60.5-45,90.7c-1.3,2.7-2.3,6-6.1,6c-3.8,0-4.7-3.4-5.9-6.1
	c-12.1-27.5-24.2-55.1-36.4-82.6c-1.5-3.4-2.8-6.9,1.6-8.8c4.5-1.9,6,1.7,7.4,4.9c10.2,23.3,20.5,46.6,30.8,69.9
	C459.9,340.5,460.8,342.3,462,345z M323.6,326.2c10.7-12.8,20.7-24.7,30.6-36.6c5.1-6.1,10.1-12.1,15.1-18.2c2.1-2.6,4.6-4.5,7.7-2
	c3.4,2.7,2.1,5.5-0.3,8.3c-17,20.3-33.9,40.7-50.9,61.1c-1.6,1.9-3.2,3.9-6.1,3.1c-3-0.8-3.6-3.3-4.2-6
	c-7.8-37.8-15.7-75.6-23.6-113.3c-0.7-3.6-0.4-6.8,3.7-7.6c3.8-0.7,5.1,2,5.8,5.4c6.8,32.8,13.6,65.7,20.4,98.5
	C322.4,320.8,322.8,322.8,323.6,326.2z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M245.7,45.5c2.5-2,4.1-3.2,5.7-4.4c13.6-10,28.3-3.5,30.4,13.3c1.4,11.2-8.7,21.2-20.8,20.5
	c-5.6-0.4-10.8-2-14.9-5.9c-2.4-2.3-3.5-2.4-5,0.9c-5.8,12.5-4.5,24.2,3.9,31.2c5.7-9.2,13.2-15.2,24.8-14
	c10.4,1.1,17.4,7.2,17.1,15.3c-0.4,9.1-9.5,17.7-19,17.9c-6,0.1-11.4-2.3-17-3.8c-2.8,8.9-1.2,17.4,1,25.9c1,3.8,2,7.7-2.9,8.9
	c-5.1,1.3-5.7-3.2-6.6-6.7c-2.5-9.7-3.6-19.4-1.7-29.4c0.4-1.9,1.3-3.8-0.9-5.5c-15-11.9-14-31.3-6.4-45.8c3-5.6,3.6-11,3.1-17.2
	c-0.9-13.3,2.2-25.7,11.5-35.9c2.3-2.5,4.8-4,7.8-1.5c3,2.6,1.9,5.4-0.5,7.9C248,24.9,246.3,34.5,245.7,45.5z M320.7,55.4
	c0-10.1,4.5-16.8,11.1-22.4c3.1-2.6,6.4-4.9,9.5-7.5c4.6-3.8,8.6-8,8.6-14.6c0-3.1,1.8-5.1,4.9-5c3.4,0.1,4.9,2.4,4.7,5.8
	c-0.4,8.5-4.6,14.9-10.8,20.2c-3.2,2.7-6.8,5.2-10,7.9c-11.4,9.4-11.3,19.9,0.2,29.4c3.6,3,7.4,5.7,10.9,8.7
	c5.6,4.8,9.1,10.8,9.7,18.2c0.3,3.4-0.5,6.4-4.3,6.7c-3.8,0.4-5.3-2.2-5.4-5.8c-0.2-6.5-4.5-10.6-9.2-14.3c-4.4-3.5-9.1-6.7-13-10.9
	C323.1,66.9,320.9,61,320.7,55.4z M81.7,44.7c-10-0.5-19-10.5-18.5-20.3c0.5-10,10.4-19,20.3-18.5c10,0.5,19.1,10.5,18.6,20.3
	C101.6,36.1,91.5,45.2,81.7,44.7z M413,54.4c-9.9-0.1-19.4-9.6-19.3-19.6s9.6-19.4,19.5-19.3c10,0.1,19.4,9.6,19.4,19.5
	C432.5,45,422.8,54.5,413,54.4z M145.8,88.2c0-3.2-0.1-6.5,0-9.7c0.2-2.8,1.9-4.5,4.7-4.6s4.7,1.7,4.8,4.4c0.2,6.7,0.2,13.4,0,20
	c-0.1,2.8-1.9,4.5-4.7,4.6c-3.1,0-4.8-1.9-4.9-5C145.7,94.7,145.8,91.4,145.8,88.2z M170.5,64.2c3,0,6.1-0.1,9.1,0
	c3.1,0.1,5,1.8,5,4.9c0,2.8-1.8,4.6-4.6,4.7c-6.7,0.1-13.4,0.2-20,0c-2.7-0.1-4.5-2-4.4-4.9c0.1-2.8,1.8-4.5,4.6-4.7
	C163.6,64,167.1,64.2,170.5,64.2z M130.5,73.9c-2.8,0-5.7,0-8.5,0c-3.1-0.1-5.1-1.6-5.2-4.7s1.8-4.9,4.9-5c6.5-0.1,12.9-0.1,19.4,0
	c2.8,0.1,4.6,1.8,4.6,4.6c0.1,3.1-1.8,4.9-4.9,5C137.3,74,133.9,73.9,130.5,73.9z M155.5,49.5c0,3.2,0.1,6.5,0,9.7
	c-0.2,3.1-2,4.9-5.1,4.8c-2.8-0.1-4.5-2-4.5-4.8c-0.1-6.5-0.1-12.9,0-19.4c0.1-3.1,2-4.9,5.1-4.8c2.8,0.1,4.4,2,4.5,4.8
	C155.6,43.1,155.5,46.3,155.5,49.5z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M178.9,236.6c15.8-5.6,30.4-10.5,44.9-16.1c14.4-5.6,28.6-12,43.2-18.1c0,39.5,0,78.8,0,119.4
	C237.4,293.1,208.6,265.2,178.9,236.6z M511.2,153.3c-34.2-14.2-67.5-28.1-101.3-42.2c10.6-9.5,20.9-18.7,31.2-28
	c11.6-10.5,22.6-21.5,33-33c1.8-2,3.4-4.5,5,0.5c10.5,33.3,21.2,66.6,31.8,99.8C511.2,151,511.1,151.6,511.2,153.3z M86.6,105.4
	c24.2,19.1,48.5,36.8,74.5,53.6c-30.7,18.7-60.6,37-91.5,55.8C75.3,177.9,80.9,142.1,86.6,105.4z"/>
<path style="fill:#FCFDFD;transform:scale(0.2)" d="M60.3,407.1c-8.4,0-17.2-5.9-17.8-11.9c-0.4-4.1,8.1-10.1,15.8-11c4.9-0.6,9.7,0.4,14,2.8
	c6.7,3.7,7.5,9.4,2.2,14.8C71.1,405.4,66.5,407.1,60.3,407.1z"/>
<path style="fill:#FBFCFC;transform:scale(0.2)" d="M262.7,65.4c-5.9-0.1-13.3-4.2-13.5-7.5c-0.2-3,10.2-12.1,14-12.3c4.8-0.3,8.9,4.3,9.1,10.1
	C272.5,61.9,269,65.4,262.7,65.4z"/>
<path style="fill:#FAFBFB;transform:scale(0.2)" d="M266.8,96.6c0.4,0,1.9-0.1,3.2,0.4c2.6,1.1,7.1-0.3,7.1,4.8c0,4.4-3.9,8.6-8.4,8.8
	c-4.5,0.3-8.7-1.5-12.9-2.8c-2.5-0.8-2.2-2.3-1.1-4.2C257.1,99.3,260.5,96.4,266.8,96.6z"/>
<path style="fill:#FAFCFC;transform:scale(0.2)" d="M82.5,35c-6,0-9.7-3.9-9.6-10c0.1-5.7,3.8-9.4,9.5-9.5c6-0.1,9.9,3.7,9.9,9.7
	C92.4,31.2,88.5,35,82.5,35z"/>
<path style="fill:#FAFCFC;transform:scale(0.2)" d="M413.5,25.3c5.9,0.3,9.5,4.3,9.2,10.3c-0.3,5.9-4.5,9.4-10.5,9.1c-5.8-0.4-9.3-4.6-8.9-10.6
	C403.8,28.5,407.8,25,413.5,25.3z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M118.2,357C96.6,326.2,75,295.5,53,264c27.9-3.6,54.3-8.8,80.6-15.3c12-3,11.8-3,9,9.1
	c-7.5,31.8-14.8,63.7-22.2,95.5C120.1,354.5,120,355.8,118.2,357z M395.1,242.7c-30.8-19.4-61.7-38.7-93.3-58.6
	c27.4-15.1,52.9-31.3,78.1-49.9c5.7,36.5,11.2,72,16.7,107.5C396.1,242.1,395.6,242.4,395.1,242.7z M241.4,202.6
	c-18.3,8.2-35.6,14.3-53,20.2c-2.3,0.8-3.8,1-3.8-2.3c0.1-15.3,0-30.6,0-46.8C203.2,184.3,221.2,194,241.4,202.6z M459.4,347.5
	c-12.4-32.4-24.9-64.7-37.6-97.9c29.6,1.9,58.4,1.9,88.2-0.2c-16.6,33.3-32.8,65.7-49,98C460.5,347.5,460,347.5,459.4,347.5z"/>
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
                                    <button :style="{background:'rgba('+getterBirthdayBannerBg1+')'}" @click="ShowElement(getterBirthdayBannerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBirthdayBannerBg2+')'}" @click="ShowElement1(getterBirthdayBannerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBirthdayBannerBg3+')'}" @click="ShowElement2(getterBirthdayBannerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBirthdayBannerBg4+')'}" @click="ShowElement3(getterBirthdayBannerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBirthdayBannerBg5+')'}" @click="ShowElement4(getterBirthdayBannerBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var BirthdayBanner= [
                {top:17 ,left:48},
                {top:230 ,left:111},
                {top:217 ,left:119},
                {top:201 ,left:37},
                {top:162 ,left:38},
                {top:490 ,left:70},
                {top:211 ,left:103},
                {top:276 ,left:11},
                {top:259 ,left:114},
                {top:465 ,left:45},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = BirthdayBanner[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BirthdayBanner[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BirthdayBanner'){
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
                getterBirthdayBannerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BirthdayBanner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBirthdayBannerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BirthdayBanner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBirthdayBannerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BirthdayBanner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBirthdayBannerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBirthdayBannerBg5: {
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
                            name:'BirthdayBanner',
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