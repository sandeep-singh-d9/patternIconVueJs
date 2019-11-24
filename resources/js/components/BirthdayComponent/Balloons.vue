<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M184,450.3c0,14,0,27.9,0,41.9c0,1.9,0,3.8,0,5.7c0,3-1.1,5.4-4.4,5.4c-3.3,0-4.6-2.3-4.6-5.3
	c-0.1-9.8,0-19.7,0-29.5c0-4.6,0-9.3-1.1-14.1c-5,10.7-9.9,21.4-14.9,32.1c-0.7,1.5-1.3,3.2-2.3,4.5c-1.4,1.8-3.3,2.5-5.5,1.2
	c-2-1.2-3.1-3-2.2-5.2c1.1-2.8,2.4-5.5,3.7-8.3c6.9-14.9,13.7-29.9,20.7-44.7c1.7-3.5,1.7-6.7,0.1-10.3
	c-18.7-42.7-37.3-85.5-55.7-128.3c-1.8-4.3-4.2-5.1-8.2-4.1c-15.5,3.9-15.1,0.2-11.8-12.2c1.4-5.3,2.4-10.7,3.8-16
	c0.6-2.4,0.8-3.6-2.4-4.1c-15.8-2.5-27.4-11.8-35.9-24.5c-22-32.4-27.3-66.9-11.8-103.3c4.9-11.5,12.9-20.5,25.2-24.6
	c3.7-1.2,2.6-3.7,2.3-5.8c-2.1-16-0.6-31.7,4.6-47c1.9-5.6,4.5-10.8,7.7-15.7c15.2-22.8,39.5-26,60.2-7.8c11,9.7,18.2,22,23.9,36.4
	c1.8-4.5,3.2-8.4,4.9-12.1c5.5-12.4,12.7-23.6,23.7-32c20.7-15.9,43.9-11.8,57.8,10.3c11.6,18.4,14.1,38.8,12.2,60
	c-0.3,3.6-2.3,7.6-1.2,10.5c1.2,3.2,6.1,2.1,9.3,3.3c13,5,20.6,15,25.9,27.1c15.1,34.2,5.9,83.4-20.5,109.9
	c-7.8,7.8-16.8,13.5-27.8,15.2c-3.2,0.5-3.5,1.5-2.7,4.3c1.9,7.3,3.5,14.7,5.1,22.1c1.3,6.2-0.6,8.1-6.6,7.2
	c-9.9-1.5-9.9-1.5-14,7.8c-18,41.4-36,82.7-54.1,124.1c-1.4,3.2-1.4,5.9,0.1,9.1c7.7,16.4,15.2,32.9,22.8,49.4
	c0.4,0.9,0.8,1.7,1.2,2.6c1.4,3,1.3,5.6-2.1,7c-3.2,1.3-5-0.8-6.2-3.3c-5-10.8-9.9-21.6-14.9-32.4c-1-2.2-2.1-4.4-3.1-6.5
	C184.7,450.2,184.3,450.2,184,450.3z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M74.7,282.2c-0.4,4.8-2.8,8.3-6.4,11c-3,2.3-6.2,4.3-9.2,6.6c-3.7,3-3.7,5.9,0.1,8.9
	c3.4,2.7,7.2,4.9,10.4,7.8c7,6.3,6.9,14.8-0.2,21.1c-2.7,2.4-5.7,4.3-8.6,6.4c-5.9,4.3-5.9,7-0.1,11.2c3.3,2.4,6.8,4.8,9.9,7.5
	c2.8,2.5,4.2,5.8,4.1,9.6c-0.1,2.4-1.4,3.9-3.7,4.4c-2.4,0.5-4.7-0.6-4.9-2.7c-0.5-5.3-4.6-7-8-9.5c-2.3-1.7-4.6-3.3-6.6-5.3
	c-5.6-5.6-5.7-13.7,0.1-19.2c3.1-3,6.9-5.3,10.3-7.9c5.1-3.8,5.1-6.7-0.2-10.6c-3-2.2-6.3-4.2-9.1-6.7c-7.1-6.3-7.1-14.8-0.2-21.1
	c2.5-2.3,5.4-4.1,8.1-6.1c2.5-1.8,4.9-3.3,5.2-6.9c0.2-2.5,2.3-4,4.9-3.6C73.5,277.5,74.7,279.5,74.7,282.2z M310.7,304.6
	c-0.4,4.9-3.2,8.3-7,11.2c-2.7,2.1-5.7,3.8-8.3,5.9c-4,3.1-3.9,6.1,0,9.2c3.4,2.7,7.2,4.9,10.4,7.8c6.8,6.1,6.7,14.5-0.1,20.7
	c-2.6,2.4-5.7,4.4-8.6,6.4c-6.4,4.6-6.3,7.2,0.3,11.8c3.2,2.3,6.5,4.6,9.4,7.3c2.7,2.5,4.2,5.8,3.9,9.6c-0.2,2.3-1.6,3.9-3.9,4.2
	c-2.4,0.4-4.6-0.8-4.8-3c-0.3-4.9-4-6.5-7.1-8.8c-2.3-1.7-4.7-3.2-6.7-5.2c-6.4-6.1-6.5-14.4,0-20.4c3.2-2.9,7-5.2,10.4-7.8
	c4.3-3.3,4.2-6.2-0.1-9.5c-3.1-2.4-6.6-4.4-9.5-7c-7.5-6.7-7.4-15.2,0.2-21.9c2.1-1.9,4.5-3.4,6.8-5c2.7-2,5.6-3.6,6-7.7
	c0.2-2.5,2.4-3.9,5.1-3.4C309.9,299.7,310.9,301.8,310.7,304.6z M33.8,71.9C21.9,71.9,10.9,60.8,11,49c0.1-11.7,10.9-22.4,22.6-22.5
	c11.8-0.1,22.8,11,22.8,22.9C56.4,60.9,45.3,72,33.8,71.9z M83.8,411.9c11.8,0,22.8,11.2,22.6,23.1c-0.1,11.5-11.3,22.4-22.8,22.3
	c-11.6,0-22.5-10.9-22.6-22.4C61,423,71.9,411.9,83.8,411.9z M278.6,453.4c-2.8,0-5.7,0.1-8.5,0c-2.9-0.1-4.7-1.7-4.7-4.6
	s1.9-4.4,4.8-4.5c5.9-0.1,11.7-0.1,17.6,0c2.9,0,4.7,1.7,4.7,4.6s-1.9,4.4-4.8,4.5C284.7,453.5,281.6,453.4,278.6,453.4z
	 M242.8,444.3c2.8,0,5.7,0,8.5,0c2.9,0,4.8,1.5,4.9,4.4s-1.7,4.6-4.6,4.6c-5.9,0.1-11.7,0.1-17.6,0c-2.9,0-4.8-1.5-4.9-4.4
	c0-3.2,2.1-4.7,5.2-4.7C237.1,444.3,239.9,444.3,242.8,444.3L242.8,444.3z M265.3,430.9c0,2.8,0,5.7,0,8.5c-0.1,2.9-1.5,4.8-4.4,4.9
	s-4.6-1.7-4.6-4.6c-0.1-5.9-0.1-11.7,0-17.6c0-2.9,1.5-4.8,4.4-4.9c3.2,0,4.6,2.1,4.7,5.2C265.3,425.2,265.3,428,265.3,430.9z
	 M265.3,467.2c0,2.8,0,5.7,0,8.5c0,2.9-1.4,4.8-4.4,4.9c-2.9,0.1-4.6-1.7-4.7-4.6c-0.1-6-0.1-12.1,0-18.1c0.1-2.6,1.7-4.3,4.3-4.3
	c2.9-0.1,4.6,1.7,4.7,4.6C265.4,461.1,265.3,464.1,265.3,467.2z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M180.7,226.2c-15.3-0.5-25.2-9.4-32-21.5c-18.6-32.8-18.5-66.6-3.6-100.7c3.3-7.5,8.3-13.9,14.7-19.2
	c13.5-11.1,30.3-10.7,43.1,1.3c12,11.2,17.9,25.6,20.9,41.3c4.6,24.1,3.4,47.8-7.5,70.2c-4.2,8.7-9.6,16.7-17.7,22.5
	C193.1,224,187.1,225.9,180.7,226.2z M232.8,126.2c-3.7-15.4-9.1-28.9-18.7-40.5c-6.9-8.3-15.2-14.8-26-17c-3.2-0.7-2.9-2.1-2.1-4.3
	c4.4-12,10.1-23.2,19.6-32.1c16.7-15.6,37.3-13.2,49.5,6.1c10.4,16.5,11.1,34.8,9.9,53.6c-0.6,8.9-3,15.1-12.7,18.2
	C244.4,112.5,238.8,119.4,232.8,126.2z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M125.6,154.3c0.3,15.8,3.4,31.1,10,45.5c1.2,2.7,1.8,5.3,1.5,8.2c-1.4,10.8-4.7,21.1-11.3,29.8
	c-10.5,13.9-27.9,16.4-43,5.2c-11.6-8.6-18.8-20.6-23.6-33.9c-7.6-21-10-42.5-3.9-64.4c1.1-3.8,2.5-7.5,4.3-11
	c12.2-23.5,36.6-26.5,54.3-6.7c0.9,1,1.7,2,2.5,3C124.7,139.5,125.5,141.5,125.6,154.3z M306.2,173.3c-0.9,20.2-6.3,42.2-21.6,60.9
	c-5.5,6.7-12.1,12.1-20.5,14.6c-15.4,4.5-28.7-2.6-36.9-19.3c-1.1-2.2-1.9-4.5-2.7-6.8c-2.9-7.9-3.5-15.2,0.7-23.6
	c8.6-17,10.9-35.5,9.6-54.5c-0.2-3.4,0.3-6.2,2.3-9c5-6.7,10.4-13,17.8-17.2c14.8-8.3,30-4.9,39.8,9.1
	C303.7,140.3,306.2,154.8,306.2,173.3z M127.3,128.7c-4.3-4.6-8-9.1-12.6-12.8c-6.6-5.3-13.8-9.3-22.2-10.7
	c-2.1-0.4-3.9-0.5-4.3-3.3c-2.4-18.7-1.7-37.1,7.2-54.2c6.3-12.1,15.5-20.5,30.3-19.9c6.4,0.3,12.1,2.9,17.2,6.7
	c11.3,8.5,18,20.2,23,33.1c0.7,1.7,0.7,2.6-1.1,3.6C141.8,83.1,133.3,104.6,127.3,128.7z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M180.4,243.1c2.6,6.5,4.9,12,7.1,17.4c1,2.4-0.1,3.1-2.3,3c-2.1-0.1-4.1-0.5-6.2-0.4
	c-7.2,0.2-7.2,0.2-4.5-6.2C176.4,252.6,178.2,248.3,180.4,243.1z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M110.1,265.7c1.9,2.8,3.2,4.8,4.5,6.8c5.7,8.6,5.7,8.6-4.8,9.7c-2.7,0.3-3.9,0.1-3-3
	C107.9,275,108.8,270.8,110.1,265.7z M240.3,277.4c-0.7,1.1-2.2,2.8,0.5,3.4c2.9,0.6,5.9,0.9,8.8,1.5c2.1,0.4,2.2-0.9,1.9-2.3
	c-1-4.5-2.2-8.9-3.6-14.4C244.8,270.4,242.5,273.8,240.3,277.4z"/>
<path style="fill:#FDFEFE;transform:scale(0.2)" d="M213.7,218.4c5,15.9,11.9,29.7,27.1,37.5c2.8,1.4,0.8,2.8,0,4c-4,6.2-8.1,12.3-12.1,18.5
	c-4.1,6.3-3.3,8.7,4,10.1c3,0.6,3.3,1.3,2.1,3.9c-16.6,38-33.1,76.1-49.8,114.5c-1.5-1.1-0.9-2.5-0.9-3.5
	c-0.1-41.6,0-83.2-0.2-124.9c0-4.6,1-6.8,5.9-6c1.1,0.2,2.3,0.1,3.4,0c6.2-0.2,7.9-2.6,5.7-8.3c-3.4-8.8-7.1-17.5-10.5-26.3
	c-0.4-1-2.6-2.9,0.2-3.6C198.5,231.8,206.4,225.8,213.7,218.4z M174.6,401.6c0.1-1.3,0.2-2.5,0.2-3.8c0-39.5-0.1-79,0.1-118.5
	c0-5.4-1.2-7.2-6.8-6.9c-7.2,0.4-8.7-2.3-6-9.1c3.4-8.4,6.9-16.8,10.2-25.2c0.6-1.3,2.5-3.1-0.6-3.9c-10.8-2.9-19-9.6-26.5-18.2
	c-0.6,1.6-1.1,2.6-1.4,3.7c-4.5,15.1-11.6,28.3-26.2,36c-3,1.5-1.3,2.8-0.3,4.3c4.4,6.6,8.8,13.2,13.1,19.9c2.2,3.5,2.3,6.8-2.3,7.9
	c-3.6,0.9-3.2,2.4-2,5c3.7,8.3,7.3,16.6,10.9,24.9c12.1,28,24.3,56,36.5,84C173.9,401.7,174.3,401.6,174.6,401.6z M33.7,35.6
	c-8.2,0-13.8,5.8-13.6,14.1c0.2,7.9,6,13.3,14,13.1C42,62.7,47.4,57,47.3,49C47.2,41.1,41.6,35.6,33.7,35.6z M97.4,434.8
	c0-8-5.5-13.6-13.4-13.7c-8.3-0.1-14,5.6-13.9,13.8c0.1,7.9,5.7,13.4,13.7,13.4C91.8,448.2,97.3,442.8,97.4,434.8z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M148.2,144.1c1-12.9,4-26.4,11.4-38.6c1.8-3,4-5.7,7.6-3.3c3.3,2.2,1.8,5.3,0.2,8
	c-6.9,11.4-9.8,23.9-10.1,37.1c0,1.5,0,3-0.3,4.5c-0.5,2.4-1.8,4.3-4.6,4.1c-2.9-0.2-4.2-2.2-4.2-5
	C148.2,149,148.2,147.1,148.2,144.1z M69,146.3c-4.3,13-4.5,26.2-2.4,39.6c0.4,3,1.9,5.2,5.1,4.8c3.6-0.5,4.4-3.3,3.9-6.4
	c-2-12.7-1.7-25.1,2.8-37.3c1.4-3.9-0.8-5.6-3.8-6.1C70.6,141,69.8,143.7,69,146.3z M269,127.5c-7.4,0.6-22.3,13.8-23.7,21
	c-0.5,2.9,1,4.7,3.8,5.2c2.9,0.5,4.2-1.7,5.7-3.7c4.4-5.8,8.2-12.3,16.4-13.5c3.1-0.5,5.7-1.6,5.3-5.2c-0.4-3.6-3.3-4.1-5.3-4
	C269.7,127.4,269.3,127.4,269,127.5z M202.8,60.1c-0.2,2.1,0.6,3.7,2.5,4.6c2.2,1.1,4.1,0.4,5.4-1.5c1.5-2.2,2.4-4.7,3.8-6.9
	c3.7-6.1,7.5-11.8,15.9-11.8c2.8,0,4.6-2,4.2-5c-0.4-3.4-2.8-4.2-5.8-4C219.1,35.4,203.5,50.1,202.8,60.1z M100.8,89.9
	c-0.1,3.5,0.7,6.9,4.9,6.7c3.9-0.1,4.3-3.4,4.2-6.7c-0.4-13.5,1-26.4,9.6-37.6c1.6-2.1,1.3-4.8-1.2-6.5c-2.3-1.5-4.4-0.8-6,1.2
	c-1.5,1.9-3,4-4.1,6.1c-5.3,9.9-7.2,20.5-7.5,31.6C100.7,86.4,100.7,88.1,100.8,89.9z"/>
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
                                    <button :style="{background:'rgba('+getterBalloonsBg1+')'}" @click="ShowElement(getterBalloonsBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBg2+')'}" @click="ShowElement1(getterBalloonsBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBg3+')'}" @click="ShowElement2(getterBalloonsBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBalloonsBg4+')'}" @click="ShowElement3(getterBalloonsBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBalloonsBg5+')'}" @click="ShowElement4(getterBalloonsBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Balloons= [
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
            var randomNumber = Balloons[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Balloons[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Balloons'){
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
                getterBalloonsBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Balloons') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Balloons') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Balloons') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBalloonsBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBalloonsBg5: {
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
                            name:'Balloons',
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