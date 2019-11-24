<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M371.4,542.4c-2.9,10-7.5,13.5-18.7,13.6c-30.8,0.1-61.7-0.1-92.5,0.1c-58.3,0.4-116.7,1.1-175,1.4
	c-24,0.1-48-1.4-72-3.5c-8-0.7-13-5.7-13.2-12.8c-0.1-7.2,4.5-12.8,12.5-13.3c5.7-0.4,8.9-3,12.5-6.8
	c57.5-61.6,104.1-131.5,153.4-199.3c20.6-28.4,41.9-56.2,67-81c13.3-13.1,28.1-23,47-25.7c12.8-1.9,24.6,0.9,35.7,7.2
	c16.6,9.5,29.1,23.6,41.9,37.4c42.3,45.7,74.2,98.7,107.3,150.8c23.3,36.7,47.3,72.8,76.8,104.9c2.3,2.5,4.7,3.5,8,3.8
	c3.4,0.2,7,0.8,10.2,1.9c6.4,2.1,11.5,5.8,12,13.3c0.6,8.5-1.3,15.8-9.8,19.9c-6.6,3.2-13.6,4.5-20.8,4.4
	c-30.4-0.2-60.8-1.6-91.2-3.7c-8.9-0.6-18-2.2-21.8-12.5c-1.7-9.3,1.1-14.1,10.4-17.6c8.1-3,16.7-3.3,25.2-3.7
	c13.1-0.7,26.2-2.1,40.6-2.7c-14.4-18.3-27.6-36.3-39.5-55.2c-23-35-44.2-71.2-67.8-105.8c-9.8-14.4-20-28.6-30.9-42.2
	c-2.3-3.2-4.7-6.4-7.2-9.5c-1.4-1.5-2.5-3.3-3.8-4.9c-2.4-2.5-4.2-5.4-6.6-7.9c-1.3-1.6-2.3-3.4-3.8-4.9c-2.5-2.4-4.2-5.4-6.6-7.8
	c-1.2-1.3-2.5-2.6-3.9-3.9c-2.6-2.3-4.5-5.1-6.8-7.7c-1.6-1.4-3.4-2.5-4.9-4c-6.1-6.5-13.3-11.8-20.5-17c-2-1.4-4.1-2.4-6.4-3.1
	c-12-3.2-22.6,0-32.2,7.1c-12.7,9.4-23.1,21.1-32.8,33.4c-19.4,24.8-39.6,49-57.7,74.9c-18.2,24-35.2,48.9-53.1,73.1
	c-6.2,8.4-12.6,16.6-18.6,25.2c-16.5,22-34.6,42.7-53.5,62.8c2.1,1.5,4,0.8,5.8,0.5c4.4-0.7,8.9-0.8,13.3-0.8
	c89.9,0,179.8,0,269.7,0c2.9,0,5.8-0.2,8.7,0.3C368.9,522.6,375.1,532.7,371.4,542.4z"/>
<path :style="{fill:'rgba(244, 248, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M478.3,462.1c13.1,18.8,25.9,37.9,40.6,55.6c0.3,0.4,0.4,1,0.7,2c-8.4,0.5-16.6,1-24.7,1.6
	c-12.9,1.1-25.9,0.8-38.6,3.5c-2.8,0.6-5.5,1.7-8.1,3c-5.9,3-8,8.1-7.2,14.4c-1.2-2.9-3.2-4-6.3-3.5c-3.2,0.5-6.5,0.8-9.7,1.2
	c-1.6-1-1.9-2.8-2.8-4.3c-2.6-4.9-6.1-8.4-12.2-8.2c-6.4,0.2-10.5,3.4-12.9,9.2c-0.7,1.6-1,3.4-2.5,4.5c-7.7,0.6-15.5-1.4-23.2,1.2
	c1.5-12.5-5.9-20.1-19.7-20.1c-92,0.4-184.1,0.3-276.1,0.4c-6.2,0-12.3,1.6-19.8,0.6c21.4-21.3,40-44.1,58.3-67.1c2,1,2.9,3.1,4,4.9
	c5.3,9.1,13.3,14.5,23.3,17.1c7.5,1.9,15.2,3.1,23,3.1c20.6-0.1,41.1,0.5,61.7-0.1c39.7-1.2,79.4-0.4,119.1-1.3
	c29.8-0.6,59.6-0.9,89.4-1c7,0,13.9-1.2,20.7-2.9c6.3-1.6,11.9-4.6,16.5-9.3C473.6,464.8,475.3,462.5,478.3,462.1z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M314.2,15.3c0,8.7-7.2,16-15.7,16.1c-8.1,0-14.8-7-14.9-15.4c-0.1-8.9,6.8-15.9,15.7-16
	C307.4,0,314.2,6.9,314.2,15.3z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M294.5,115.8c0,8.9-6.6,15.9-15.1,15.7c-8.1-0.1-14.8-7-15-15.4c-0.2-8.7,6.6-15.9,15-16
	C287.9,100.1,294.5,106.9,294.5,115.8z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M329.1,149.1c-8.5-0.1-15-7.1-14.8-16c0.2-8.4,6.9-15.4,15-15.4c8.3,0,15.2,7.3,15.2,15.9
	C344.3,142.4,337.6,149.2,329.1,149.1z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M294.5,172.9c-0.1,8.8-6.8,15.7-15.3,15.6c-7.8-0.1-14.9-7.4-14.8-15.6c0-9,7-16,15.7-15.8
	C288.2,157.3,294.6,164.4,294.5,172.9z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M394.5,541.2c1.8-9.9,6.9-15.1,15.1-15.2c8.2-0.1,13.3,4.6,15.3,14.2c-0.8,13.7-12.4,21.2-22.9,14.8
	C397,551.7,395.2,546.8,394.5,541.2z"/>
<path :style="{fill:'rgba(234, 234, 234, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M478.3,462.1c-7.9,11-18.9,16.1-32,17.4c-23.8,2.4-47.6,0.2-71.4,1.2c-37.5,1.7-75,0.1-112.4,1.3
	c-33.8,1.1-67.6,0.8-101.4,0.8c-11.4,0-22.6-1.9-32.6-8.4c-7-4.5-11.8-10.4-14.3-18.3c23.5-32.2,47-64.5,70.5-96.7
	c10.4-9.6,21.8-18,33.6-25.7c2.3-1.5,4.1-3.5,6-5.5c26.8-26.8,53.7-53.7,80.5-80.5c1.5-1.5,2.9-3.1,4.8-4.2c2.1,0.7,4.2,1.5,5.7,3.2
	c-9.5,10.1-19.6,19.7-29.3,29.6c-1.9,1.9-3.9,3.7-5.5,6c-0.8,1.1-1.8,2.1-2.9,2.9c-10,8.9-19,18.8-28.6,28.1
	c-2.9,2.8-5.7,5.8-9.4,8.9c0,0,1.4,0.6,0.9,0.1c-0.3-0.3-0.3-0.4-0.1-0.6c1.8-1.5,3.6-2.4,5.5-0.2c0.1,2.2-1.3,4-1.8,6.1
	c-1.4,6,2,12.2,7.6,13.8c5.8,1.6,11.4-1.4,12.9-6.7c2-7.4-0.9-13.5-7.5-15.2c-1.5-0.4-3.1-0.3-4.4-1.3c-1-1.4,0-2.4,1-2.6
	c9.6-2.4,15.8-9.7,23-15.6c2.5-0.1,3.7,1.2,4.1,3.5c-0.1,1.3-1.2,2.2-2,3.4c2.5,0.1,4.1-0.7,5.3-2.3c3.3-0.5,6.6-0.8,9.9-1.5
	c2.9,0,4.3-2.3,6.1-4c10.4-10.3,20.7-20.7,31-31c1.6-1.6,3-3.5,5.4-4.2c1.4,1.3,2.8,2.6,4.2,4c-9.4,10.3-19.6,19.7-29.3,29.7
	c-1.5,1.5-3,2.9-4.5,4.6c8.4,1.7,15-0.3,20.6-7c4.7-5.6,10.2-10.5,15.5-15.6c1.5-1.5,2.8-3.3,5-3.7c1.1,1.2,2.3,2.5,3.4,3.7
	c-2.5,5.2-7.4,8.3-11.1,12.4c-3.2,3.6-6.9,6.7-10.2,10.4c7.5,3.4,10.3,2.9,15.4-2.1c4.3-4.2,8.2-8.7,12.8-12.6
	c1.8,1.1,2.8,2.8,3.7,4.6c-2,4.6-6.2,7.3-9.5,10.7c-2.5,2.6-3.2,4,1.1,5.3c3.8,1.1,6.7,0.9,9.4-2.1c1.8-2,3.4-4.2,5.8-5.6
	c1.2,1.5,2.4,3.1,3.5,4.6c-0.1,0.8-0.5,1.4-0.9,2.1c-1,2-5.3,3.4-3.3,5.6c2.3,2.6,6.2,4.6,10.2,1.8c0.3-0.2,0.7-0.3,1.1-0.3
	c11.7,13.9,22.1,28.8,32.3,43.9C435,392,456.2,427.3,478.3,462.1z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M309.5,243.6c-0.2,2.4-2.2,3.6-3.6,5c-27.3,27.4-54.6,54.7-82,82c-7.4,7.4-16.9,12-25.1,18.5
	c-4.6,3.6-8.2,8.7-14.2,10.4c12-17.8,25.4-34.6,38.8-51.3c13.2-16.4,25.3-33.8,40.7-48.4c7.1-6.7,14.6-12.6,23.9-16
	C295.1,241.3,302.3,240.8,309.5,243.6z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M279.4,282.1c2.2-4.7,6.5-7.5,9.9-11c6.8-7.1,13.8-13.9,20.8-20.8c1.5-1.4,2.6-3.4,5.1-3.4
	c8,4.5,15,10.4,21.3,17c-12.4,14.1-26.3,26.7-39.4,40c-1,1-2,1.1-2.8-0.2c-0.5-2,1-3.2,1.8-4.7c2.8-5.2,2.6-10.1-0.8-14.1
	s-7.7-4.9-12.6-2.9C281.7,282.4,280.6,282.7,279.4,282.1z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M348.1,275.6c-7.9,9.5-17,18-26.1,26.4c-4.8,4.4-11.4,0.6-17.2,2c-0.4-0.7-0.9-1.3-1.3-2
	c4.7-4.2,9.4-8.3,14-12.7c6.1-5.9,12.1-12.1,18.1-18c1.5-1.5,2.6-3.5,5.1-3.5C343.2,270.4,345.7,273,348.1,275.6z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M358.5,287.4c-3.8,7.6-10.5,12.7-16.8,17.8c-3.1,2.5-8.5-0.3-12.7-0.8c-2.4-0.3-0.8-2.3,0.3-3.4
	c7.4-7.3,14.9-14.5,22.3-21.7C353.8,282,356.2,284.7,358.5,287.4z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M368.9,300.3c-4.2,9.3-10.3,11.7-19.5,8.1c-2.6-1-2.2-2.2-0.6-3.7c4.5-4.2,8.3-9.1,13.4-12.7
	C364.4,294.8,366.7,297.5,368.9,300.3z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M379.5,314c-1.2,2-2.5,4.3-5.2,3.4c-3.2-1.1-6.2-2.7-9.1-4.4c-0.9-0.5,0.3-1.7,0.9-2.3
	c2.1-2,4.2-3.8,6.3-5.7C375.2,307.6,377.5,310.7,379.5,314z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M300.9,357.3c-8.2-0.1-14.7-6.9-14.7-15.6c0-8.5,7.2-16,15.3-15.9c7.9,0.1,14.9,7.5,14.9,15.7
	C316.3,350,309,357.4,300.9,357.3z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M176.8,455.1c0.1,8.5-6.8,16-14.9,16.3c-8,0.3-15.1-6.7-15.3-15.1s7.2-16.2,15.5-16.3
	C169.6,439.8,176.7,447.1,176.8,455.1z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M385.1,396.6c0.1-8.5,7.4-15.9,15.4-15.7c7.8,0.3,15,8.4,14.7,16.6c-0.3,7.6-7.6,14.8-15.1,14.8
	C391.4,412.3,385,405.6,385.1,396.6z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M279.4,282.1c7.9-3.9,13.9-3.1,17.8,2.5c4.3,6,3.3,12.4-2.9,19c-3.3,1.7-6.7,2.4-10.4,1.6
	c-1.7,0.8-2.8,0.1-3.5-1.5c-1.2-1.2-2.3-2.3-3.5-3.5c-5.2-5-5-10,0.6-16.2C278.2,283.4,278.8,282.8,279.4,282.1z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M252.6,317.5c9.4,0.5,14,4.5,14.3,12.4c0.2,5.8-1.8,10.3-7.2,12.6c-4.8,2-9.5,1.4-13.3-2.4
	c-4.1-4.1-5.2-8.9-3.1-14.3c0.6-1.6,1.6-3.1,2.4-4.6C246.9,318.1,249,316.4,252.6,317.5z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M285.3,388.5c0,7.1-5.6,12.9-12.3,12.9c-6.7,0-12.6-6.4-12.4-13.5c0.2-7.2,5.6-12.9,12.3-13
	C279.5,374.9,285.4,381.2,285.3,388.5z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M343.2,341.5c0.1-7.1,5.6-12.9,12.2-12.9c6.9-0.1,12.5,6,12.4,13.4c-0.1,7.1-5.6,12.9-12.3,12.9
	C348.5,354.9,343.1,349,343.2,341.5z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M330.9,403c-7.2,0-12.8-5.7-12.9-12.9c0-7,5.5-12.9,12.2-13c6.9-0.1,12.7,5.9,12.8,13.1
	C343.2,397.1,337.7,403,330.9,403z"/>
<path :style="{fill:'rgba(44, 66, 107 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M232.9,388.6c0,7.4-5,13-11.8,13.1c-7.3,0.1-12.7-5.4-12.8-12.8c0-7.6,5.3-13.1,12.5-13
	C227.8,375.9,232.8,381.2,232.9,388.6z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M252.6,317.5c-2.7,0.6-4.9,2.2-7.1,3.7c-2.2-0.3-4,1-6,1.7c-1.1-1.2-0.1-1.9,0.5-2.5
	c11.5-11.6,23.1-23.2,34.7-34.7c0.8-0.8,1.9-1.1,2.9-1.7c-3.3,5.3-3.5,10.7-0.6,16.2C271,309,262.6,314.3,252.6,317.5z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M280.5,303.8c1.2,0.5,2.4,1,3.5,1.5c-1.4,3.8-4.4,3-7.5,3.2C277.3,305.8,278.8,304.8,280.5,303.8z"/>
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
                                    <button :style="{background:'rgba('+getterSaltBg1+')'}" @click="ShowElement(getterSaltBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSaltBg2+')'}" @click="ShowElement1(getterSaltBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSaltBg3+')'}" @click="ShowElement2(getterSaltBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSaltBg4+')'}" @click="ShowElement3(getterSaltBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSaltBg5+')'}" @click="ShowElement4(getterSaltBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Salt= [
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
            var randomNumber = Salt[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Salt[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Salt'){
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
                getterSaltBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Salt') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Salt') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Salt') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSaltBg5: {
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
                            name:'Salt',
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