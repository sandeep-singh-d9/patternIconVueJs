<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#790000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M61.1,125.9c-4,4.1-4.9,8.8-4.9,13.7c0,24,0,47.9,0,71.9c0,1.2-0.3,2.6,0.2,3.4
	c7.7,11-0.6,21.8-0.4,32.6c0,1.9-1.9,3.2-4.2,3.3c-2.5,0.1-4.4-1.1-4.8-3.4c-1.4-8.2-5.1-17.1-3.3-24.7c6.8-28.7,1-57.6,3.2-86.2
	c0.7-8.8,4.5-16,11.1-21.8c1.8-1.6,3-3.1,3-5.8c0.1-11.5,6.2-19.3,16.3-24c32.5-15.1,65.9-15.1,99.8-5.4
	c14.5,4.1,28.7,9.5,43.9,10.6c5.2,0.4,10.5,0.8,15.7,0.8c23.6,0,47.2,0.2,70.7-0.3c13.8-0.3,27.1-4.4,40.3-8.1
	c24.2-6.7,48.4-6.6,72.3,0.7c12.8,3.9,23.5,1.8,33.5-6.8c2.3-1.9,2.2-3,0.7-5.5c-4.8-7.9-0.1-17.2,9-16.2
	c14.3,1.6,25.5-3.1,35.8-12.5c5.2-4.8,11.7-5.1,17.9-1.8c6,3.3,9,8.7,8.1,15.5c-0.7,5.1,1.3,8.4,5,11.5c7.6,6.3,13.3,13.5,12.9,24.2
	c-0.1,2.8,1.5,5.5,3.4,7.9c4.7,5.7,9.2,11.6,13.8,17.3c1.6,2,3.3,3.7,5.6,5c7.2,4.2,10.9,11.6,9.2,17.9c-1.9,7.4-8.9,14.2-17,13.5
	c-13.2-1.2-23.8,3.6-33.9,11c-2.7,2-6,2.5-9.4,2.5c-7.2-0.2-14.4,0.2-21.6-0.1c-4.7-0.2-7.3,1.4-9.7,5.4
	c-22.2,37.7-44.6,75.2-66.8,112.8c-4.9,8.3-11.2,14.5-20.7,17.7c-5.3,1.8-7,7.4-7.2,12.3c-0.6,10.7,0,21.4-0.3,32.1
	c-0.1,3.2,1.7,3.8,3.9,4.8c9.2,4.1,16.8,9.9,19.1,20.5c1.6,7.3-0.3,9.6-7.8,9.6c-18.1,0-36.2-0.1-54.4,0.1c-4.4,0.1-6.6-1.5-8.4-5.4
	c-5.9-13.4-9.9-27.1-8.5-41.9c1.5-15.7-2.4-30.4-7.1-45.1c-2.1-6.5-3.5-13.2-4.8-19.8c-0.7-3.7-2-5-6-4.9
	c-17.5,0.2-35.1-0.1-52.6,0.2c-21.3,0.3-41.7-3.6-61.3-11.7c-3.4-1.4-6.2-2.1-7.7,2.4c-0.3,0.9-1,1.8-1.7,2.3
	c-8.4,6.4-9.1,15.2-8.6,24.9c0.4,7.3-5.6,13.8-12.4,14.7c-6,0.8-12.6-3.6-14.8-10.1c-0.4-1.3-0.7-2.6-0.7-4
	c-0.1-2.5,0.6-5.1-3.6-4.7c-3.2,0.3-5.9,0.4-5.8,4.6c0.1,3.1-0.7,6.2-2.9,8c-7.4,6.1-6.2,14-4.4,21.5c2.9,11.7,6.9,23.1,10.2,34.7
	c0.8,2.7,2.9,3.4,4.9,4.5c8.9,5,14.5,12.2,15.5,22.6c0.5,4.8-1.3,7.3-6.5,7.2c-9.5-0.2-19.1-0.1-28.6,0c-3.3,0.1-5.3-1.2-7.3-3.7
	c-7.7-9.9-11.4-21.6-14.8-33.4c-5.4-18.7-11.1-37.3-16.8-56.6c-3.9,5.6-5.1,11.4-5.2,17.3c-0.3,13.8,0,27.7-0.2,41.5
	c0,2.9,1.3,4,3.5,5.3c8.7,4.8,14.2,12,15.2,22.1c0.5,5.7-1,7.4-6.8,7.4c-9.4,0.1-18.7-0.2-28.1,0.1c-3.9,0.1-6-1.5-8-4.5
	c-6.3-9.4-8.8-19.8-9.3-30.9c-1.2-22.6-2.4-45.1-3.7-67.7c-0.2-3.9,0.5-7.2,2.5-10.5c5.6-9.6,10.7-19.4,16.5-28.9
	c3.4-5.6,4-11.2,2.8-17.3c-4.3-21.9-7.2-44-11.9-65.9C59.4,146.5,61.1,136,61.1,125.9z"/>
<path style="fill:#B95529;transform:scale(0.2)" :class="ValueId+'_color2'" d="M272.5,101.2c21.2,0.1,42.4,1,63.1-4.7c2.2-0.6,4.4-1.7,6.7-2c1.9-0.2,4.6-3,5.5-0.3
	c0.7,2.2,0.1,5.9-3.4,7.2c-6.9,2.6-13.6,5.7-20.6,8c-16.4,5.5-33.1,9.3-50.4,10.6c-10.3,0.8-20.5,1.5-30.7-0.1
	c-2.1-0.3-3.7-0.4-4.3-2.9c-1.1-4.5-2.5-8.9-4.5-13.2c-1.7-3.6,1.6-2.7,3.1-2.7C248.8,101.2,260.6,101.2,272.5,101.2z M72.3,127.1
	c1.6-2.2,3-4.6,5-6.4c13.6-12.4,29.9-18.9,47.9-20.4c8-0.6,12.2-1.2,11.9-13.4c-0.1-3.2-1-4.4-4.4-4.4c-19-0.1-37,4.1-53.8,12.8
	c-4.9,2.6-8.1,6.9-8.4,12.5c-0.4,6-0.1,12-0.1,18C70.9,126.3,71.6,126.7,72.3,127.1z"/>
<path style="fill:#D7909A;transform:scale(0.2)" :class="ValueId+'_color4'" d="M176.7,241.6c-10.7-8-21.4-15.9-29.8-26.5c-1.7-2.2-2.8-1.3-3.6,0.8c-4.2,10.7-10.2,20.3-15.8,30.3
	c0,0,0,0,0,0c-1.5,2-2.8,4.2-4.5,6c-3,3.3-3.1,5.9,0.9,8.4c2.2,1.4,2.7,3.6,2.6,6.1c-0.1,5,0,10.1-0.1,15.2c0,3.4,0.5,6.5,4.8,6.4
	c4.3-0.1,4.6-3.3,4.6-6.6c-0.1-2.5-0.1-5.1,0-7.6c0.1-4.3,2.9-6.1,6.6-5.3c5.1,1.1,9.9,1,15,0.1c4-0.7,6.4,1.1,6.4,5.4
	c0,3.1,0,6.2,0.1,9.3c0.1,3,1.6,4.7,4.7,4.7c3.1-0.1,4.5-1.9,4.6-4.9c0-3.7,0.3-7.4-0.1-11.1c-0.6-6.2,1.4-10.6,6.1-15.2
	C190.5,245.7,188,248,176.7,241.6z"/>
<g>
	<path style="fill:#FFD3B7;transform:scale(0.2)" :class="ValueId+'_color3'" d="M560.4,130.2c-1.7-0.4-3.2-1.2-4.4-2.7c-6.1-7.8-12.3-15.6-18.4-23.4c-2.4-3-4.3-6.7-4.1-10.1
		c0.6-9-4.3-14.6-10.4-19.7c-6.1-5.1-10.7-10.2-7.7-19.3c1.6-4.8-5-9.1-9.1-6c-4.2,3.1-10.5,4.6-11,11.7c-0.1,2.2-2.6,3.2-5,3.1
		c-2.9-0.1-5.8,0-8.8,0c-6.7,0-13.3,0-20.4,0c1.1,3.4,3.5,3.8,5.2,4.8c5.7,3.3,11.6,6.4,17.3,9.7c2.5,1.4,3.6,3.7,2.1,6.4
		c-1.5,2.6-3.8,3.2-6.5,1.8c-1.7-0.9-3.4-1.8-5.1-2.8c-8.4-4.7-8.3-4.6-15.9,1.1c-2.5,1.9-3,3.2-1.4,6.1c4.4,8,8.4,16.2,12.4,24.4
		c2.4,4.9,4.2,10.1,3,15.8c-2.9,13.8-20.9,25.3-34.7,22.2c-10.8-2.5-17.1-9.6-20.2-19.8c-4.2-13.8-8.4-27.5-14.6-40.5
		c-0.9-1.8-1.1-4.2-3.9-4.5c-12.4-1.4-24.8-1.8-37.2,0.5c-2.2,0.4-3.8,1.1-4,3.9c-0.9,11.6-6.7,20.9-14.5,29.1
		c-9.1,9.7-20.6,15.7-32.6,21c-14.8,6.6-20.1,17-17.1,32.9c1.2,6.2,3.7,11.8,6.7,17.3c5.2,9.5,3.7,16.4-5,22.8
		c-10.9,8.1-23.7,10.4-36.7,11.7l0,0h0c-3.3-0.1-6.6-0.1-9.9-0.2c-15.4-0.6-30.1-3.5-41.4-15.3l0,0c-10-12.1-9.7-24.6-1.9-37.7
		c6.3-10.7,13.5-20.9,18.6-32.3c2.7-6,5.8-11.9,5.1-18.8c-0.3-3-0.1-6.2-1.1-9c-2.3-6.3-4.2-13.9-12-15.1
		c-13.1-2.1-25.7-5.6-38.3-9.6c-8.9-2.8-18-4.9-27.3-6c-3-0.4-4.3,0.3-4,3.6c0.6,5.8-1.4,11.1-3.9,16.2h0
		c-5.3,6.4-12.5,9.7-20.1,12.2c-7.6,2.5-11.7,7-11.4,15.3c0.1,4.2-0.6,8.5-1.1,12.8c-1.8,15-10.7,22.9-25.8,22.9
		c-1.8,0-3.6,0.2-5.2-0.2c-4.8-1.1-5.4,0.7-4.6,5.1c3.1,17,6,34.1,8.8,51.2c1.2,7.1,0.1,13.9-3.7,20.2c-5.5,9.4-10.7,19-16.2,28.4
		c-1.5,2.6-2.3,5.2-2.1,8.3c1.3,22.2,2.4,44.3,3.7,66.5c0.5,8,1.5,15.9,5.9,22.9c1.2,1.8,2.1,3.5,4.8,3.4c6.2-0.2,12.5-0.1,18.7,0
		c3.5,0.1,3.4-1.5,2.1-3.9c-2.5-4.7-6.3-8-11.3-9.6c-4.4-1.4-5.5-4-5.4-8.3c0.2-12.3,0.5-24.6,0-36.8c-0.7-18.5,5.9-33.4,18.8-46.6
		c21.5-22,36.1-48.1,44.4-77.7c4.5-16,6.8-32.3,7-49c0-3.5,0.7-6.6,4.8-6.5c4.1,0.1,4.8,3.3,4.6,6.7c0,0.8,0,1.6,0,2.3
		c-0.2,15.1-2.9,29.8-5.9,44.5c-0.3,0.7-0.6,1.4-1,2.1c-5.3,9.7-1.6,16.5,5.8,23.9c23.6,23.8,51.9,37.2,85,40.8
		c20.8,2.3,41.6,0.7,62.4,1.1c11.6,0.2,11.6,0,10.4-11.2c-0.3-2.9-0.8-5.8-1.2-8.6l0,0c0-1.9,0.1-3.9-0.1-5.8
		c-0.3-3.4,0.1-6.7,4.3-6.9c4.1-0.2,4.9,3,5.1,6.4c1.1,17.7,3.3,35.5,8.7,52.3c6.7,20.6,10.2,41.3,9,62.9
		c-0.5,9.1,3.2,17.5,6.7,25.8c0.6,1.5,1.4,2.2,3,2.2c8.7,0,17.3,0,26.7,0c-3.4-7.9-9.4-11.4-16.2-13.2c-5.2-1.4-6.6-4.2-6.5-9.2
		c0.3-11.7,0.1-23.4,0.1-35.1c0-2.8,0.4-5.3,1.7-7.8c17.5-33.1,26.3-68.5,26.4-105.9c0-3.5,0.9-6.5,5-6.3c3.7,0.2,4.5,3.1,4.4,6.3
		c-0.3,7.6-0.7,15.1-1,22.7c-2.5,21.7-7.3,42.9-15.4,63.3c-1.5,3.7-0.9,5,2.9,6.2c11.1,3.4,20.6-0.1,27.3-11.2
		c12.3-20.3,24.3-40.8,36.4-61.2c7.9-13.4,15.7-26.8,23.5-40.3c3.1-5.1,6.1-10.4,9.3-15.4c3.3-5.2,7.9-8.3,14.5-8
		c7.4,0.3,14.8,0,22.2,0.1c2.6,0,5-0.4,7.2-2c11.4-8.5,24-13.4,38.5-12.1c3.8,0.4,6.2-1.8,6.7-5.7
		C565.6,133.9,564.6,131.1,560.4,130.2z"/>
	<path style="fill:#FFD3B7;transform:scale(0.2)" :class="ValueId+'_color3'" d="M146.1,359.2c-3.9-1.2-5.6-3.7-6.6-7.3c-2.4-8.4-4.9-16.8-7.7-25.1c-2.8-8.6-5.1-17.2-4.1-26.3
		c0.3-2.4-0.8-3.4-2.7-4.5c-5.8-3.3-8.5-8.3-8.1-15c0.2-3.9,0-7.8,0.1-11.7c0-1.8-0.7-3-2.1-3.8c-2-1.2-2.7,0.7-3.7,1.8
		c-10.3,11-10.2,11-5.8,25.6c0.4,1.3,0.8,2.6,1.2,3.9c6.2,20.5,12.1,41,18.8,61.3c4.4,13.4,6.6,14.4,19.8,14.4c3.3,0,6.6-0.1,9.9,0
		c3,0.1,3.4-1.2,2.1-3.5C154.8,364.3,151.1,360.8,146.1,359.2z"/>
	<path style="fill:#FFD3B7;transform:scale(0.2)" :class="ValueId+'_color3'" d="M384.1,358.8c-3.9-1.1-5.3-3.2-5.2-7.1c0.2-7.2-0.2-14.4,0.1-21.6c0.4-8.7-2.1-17.8,3.1-26.1
		c-2.4-0.7-4.7-0.9-6.5-1.9c-3.8-2.3-5.1-0.5-6.8,2.7c-2.9,5.3-4.2,10.6-3.9,16.7c0.4,7.8,0.3,15.6,0,23.3c-0.1,3.7,0.7,5.9,4.6,7.4
		c7,2.7,13.7,6.9,16.2,14.2c2,5.9,5.4,6.7,10.4,6.1c1.5-0.2,3.1,0,5.6,0C397.8,364,391.2,360.9,384.1,358.8z"/>
</g>
<path style="fill:#780101;transform:scale(0.2)" d="M510.1,87.2c4.5,0.2,9.3,5.3,9.1,9.7c-0.3,4.5-5.5,9.2-9.9,8.9c-4.3-0.3-8.8-5.2-8.8-9.4
	C500.6,91.9,505.7,87.1,510.1,87.2z"/>
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
                                    <button :style="{background:'rgba('+getterCowBg1+')'}" @click="ShowElement(getterCowBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCowBg2+')'}" @click="ShowElement1(getterCowBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCowBg3+')'}" @click="ShowElement2(getterCowBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCowBg4+')'}" @click="ShowElement3(getterCowBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCowBg5+')'}" @click="ShowElement4(getterCowBg5)" :class="this.ValueId+'_color5btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterCowBg6+')'}" @click="ShowElement5(getterCowBg6)" :class="this.ValueId+'_color6btn'"></button> -->
                                    <!-- <button :style="{backgroundColor:'rgba('+getterCowBg7+')'}" @click="ShowElement6(getterCowBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Cow= [
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
            var randomNumber = Cow[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cow[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cow'){
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
                getterCowBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cow') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCowBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cow') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCowBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cow') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCowBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCowBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCowBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCowBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },

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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Cow',
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
                            $('.Svg_'+cloneIndex+'_color6').css({fill: 'rgba('+background5Clone+')'})
                            $('.Svg_'+cloneIndex+'_color7').css({fill: 'rgba('+background6Clone+')'})
                            
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