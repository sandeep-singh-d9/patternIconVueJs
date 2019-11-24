
<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                 <path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M125.2,499.7c-6-4-7.5-8.9-3.8-13.2c1.4-1.6,3.2-3.2,5.2-2.8c5.1,0.9,7.8-2.3,10.8-5.3
	c9.9-10,19.8-19.9,29.8-29.8c2.2-2.1,2.7-3.3-0.4-5.1c-6.4-3.7-12.3-8.3-17.9-13.2c-1.7-1.5-3.1-2.2-5.4-0.8c-3.3,2-6.5,1-9.1-1.6
	c-2.6-2.6-3.4-5.9-1.4-9.1c1.2-2,1-3.2-0.4-4.9c-18.9-21.7-30.6-46.8-35.3-75.2c-0.5-2.8-1.1-5.6-1.3-8.4c-0.3-4.4,0.3-8.4-5.7-10.7
	c-5.4-2.1-3.9-11,2.1-13.4c2.5-1,3.2-2.1,3.4-4.7c2.5-33.2,14.7-62.3,36.2-87.6c1.6-1.8,2.5-3.1,0.9-5.6c-2-3.2-1-6.5,1.6-9.1
	c2.6-2.7,6.1-3,9.2-1.3c2.2,1.2,3.3,0.8,4.9-0.6c12-10.5,25.3-18.9,40-24.9c3-1.2,3.9-2.8,3.9-6c-0.2-11.4-0.2-22.7,0-34.1
	c0-3.1-0.6-4.4-4.1-4.4c-37.9,0.1-75.8,0.1-113.7,0.1c-4.1,0-8.2-0.3-12.3-0.5c-3.9-0.3-6.5-2.3-7.3-6.2c-0.8-4,0.6-7.6,4.5-8.9
	c3.1-1,3.2-2.8,3.2-5.3c0-24.2,0-48.3-0.1-72.5c0-1.4,0.8-2.9-1.2-4.1c-8.6-5.1-9.1-9.7-1.7-16.1c50.6,0,101.1,0,151.7,0
	c6.9,2.9,8.5,10.9,2.4,15.3c-5.2,3.7-3.8,8.5-3.6,13.2c0.1,2,1.9,2.1,3.5,2.4c10,1.3,12.3,3.9,12.3,14.1c0,8.1,0.1,16.1,0,24.2
	c-0.1,9.3-2.6,12.1-11.8,12.8c-3,0.2-4.3,1.3-4.3,4.3c0,4.7-0.4,9.1,4.5,12.5c4.6,3.3,4.2,10-0.5,13.5c-3.3,2.4-4.1,5.1-4,8.9
	c0.2,7.6,0,15.2,0.1,22.7c0.1,4.7,0.5,5.1,4.9,4.1c6.8-1.5,13.7-2.6,20.6-3.2c2.3-0.2,3.7-1.2,5-3c5.5-7.3,11.1-7.2,16.7,0.2
	c1.2,1.7,2.6,2.5,4.7,2.7c7.2,0.8,14.4,1.8,21.5,3.5c3.1,0.7,4.4-0.2,4.4-3.4c0-8.7,0-17.4,0-26.1c0-2.4-1-4-3-5.5
	c-6.1-4.7-6.2-10.6-0.5-15.5c3.1-2.7,4.7-10.2,3.1-13.8c-0.8-1.9-2.4-1.7-4-1.8c-9.2-0.8-11.6-3.3-11.7-12.4
	c-0.1-8.8-0.1-17.7,0-26.5c0.1-8,3.3-11.6,11.3-12.1c3.8-0.2,4.8-1.9,4.8-5.3c0-4.2-0.3-7.7-4.3-10.7c-5.7-4.3-3.9-12.2,2.8-15
	c50.6,0,101.1,0,151.7,0c7.3,6.5,6.9,10.5-1.8,16.1c-1.7,1.1-1.2,2.5-1.2,3.7c0,24.6,0,49.3,0,73.9c0,1.9,0.3,3.2,2.5,3.9
	c4.3,1.5,6.2,4.8,5.2,9.3c-1,4.3-4,6-8.3,6.2c-14.1,0.8-28.1,0.4-42.2,0.4c-27.3,0.1-54.7,0.1-82-0.1c-4.1,0-5,1.3-4.9,5.1
	c0.2,11.2,0.2,22.4,0,33.6c-0.1,3.3,1.1,4.6,4,5.8c14.5,6.1,27.7,14.3,39.6,24.7c1.4,1.3,2.5,2.4,4.8,1c3-1.8,6.4-1.5,9.2,1.1
	c2.8,2.7,3.6,6.1,1.7,9.5c-1.3,2.2-0.6,3.2,0.8,4.8c19,22.3,30.7,47.9,35.5,76.7c0.4,2.5,0.9,5,0.9,7.5c-0.1,4.4,0.7,7.4,5.4,9.8
	c5.8,3,4.3,11.4-2.1,13.7c-2.5,0.9-3,2-3.1,4.3c-2.6,32.8-14.6,61.8-35.6,87c-1.9,2.3-3.6,3.8-1.4,7.2c2,3,0.5,6.2-2,8.5
	c-2.5,2.3-5.6,3.5-8.6,1.4c-2.6-1.7-4.1-0.8-6,1c-5.4,4.9-11.3,9.1-17.5,12.9c-2.5,1.5-3.1,2.4-0.7,4.7c11.3,11,22.4,22.2,33.6,33.5
	c1.3,1.3,2.7,2.1,4.6,1.9c4.6-0.4,8.2,1,9.7,5.7c1.6,5-1.5,8-5.3,10.4c-9.8,0-19.6,0-29.4,0c-6.7-2.6-8.3-7.1-4.5-13.4
	c1.4-2.4,1.2-3.9-0.7-5.7c-7.6-7.6-15.3-15.1-22.8-22.8c-2.1-2.2-4.2-2.4-6.8-1.2c-14.9,6.4-30.5,10.3-46.7,11.3
	c-1.9,0.1-3.1,1.1-4.1,2.7c-5.2,7.9-12,7.9-17.5-0.1c-1.2-1.8-2.6-2.5-4.7-2.7c-15.9-1.1-31.2-4.9-45.8-11c-3.1-1.3-5.2-1-7.5,1.4
	c-7.5,7.7-15.1,15.2-22.7,22.8c-1.6,1.6-2.6,2.6-0.6,5c4.5,5.6,2.6,11-4.1,13.7C144.8,499.7,135,499.7,125.2,499.7z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M380.1,353.7c-4.7,18-13.8,33.8-25.6,47.9c-21.5,25.6-48.8,41.7-81.7,47.3
	c-39.6,6.8-75.7-2.1-107.8-26.5c-21.4-16.2-36.4-37.3-45.6-62.5c-0.8-2.1-1.8-4-1.7-6.3c2.5,0.1,3.2,2.3,4.1,4
	c13,24,31.3,42.9,54.8,56.6c8.3,4.9,17.1,8.8,26.2,11.9c2,0.7,3.9,1,6,0.9c10.4,2.6,20.8,5.1,31.6,6.1c14.1,1.4,27.7-1.1,41.2-4.3
	c1.5-0.4,3-1,4.6-1.1c5.6,0.6,10.5-2,15.4-4c32.9-13.5,58.1-35.6,74.9-67.1C377.3,355.3,377.8,353.4,380.1,353.7z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M117.5,274.1c5.3-20.1,15.7-37.4,29.5-52.7c21.7-23.8,48.5-38.8,80.3-43.5
	c38.3-5.7,73.3,2.9,104.4,26.2c21.4,16,36.6,36.8,46,61.8c0.7,1.8,1.1,3.6,1.6,5.4c-0.7,2.3-1.7,0.5-2.1-0.1c-1.5-2-2.7-4.3-3.9-6.5
	c-17.4-29.4-42.3-49.7-73.9-62.2c-4-1.6-8-2.9-12.4-3.1c-1.7-0.2-3.4-0.6-5.1-1.1c-22.6-6.3-45.2-6.1-67.7,0.4
	c-2.1,0.6-4.2,1.4-6.4,1.6c-6.3-0.1-11.6,3-17,5.4c-30.6,13.4-53.5,35.2-69.6,64.3C120.5,271.7,120.3,274.1,117.5,274.1z"/>
<path :style="{fill:'rgba(166, 10, 148, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M378.3,30.6c12.4-0.1,24.9-0.1,37.3-0.2c2.8,0,3.4,1.2,3.4,3.7c-0.1,24.4-0.1,48.9,0,73.3
	c0,3-1.1,3.8-3.9,3.7c-12.3-0.2-24.6-0.1-36.9-0.2c-1.7-1.8-1.5-4.1-1.5-6.3c0-22.6,0-45.2,0-67.7C376.8,34.7,376.6,32.4,378.3,30.6
	z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M288,198.4c6.4,0.4,12.1,3.1,17.8,5.6c13.7,5.8,26,13.7,37.5,23.2c14.6,12.1,25.6,27,34.7,43.5
	c0.3,0.5,0.5,1.3,1.3,0.6c7.1,19,7.7,38.7,6,58.5c-0.7,8.2-2.5,16.1-5.3,23.9c-3.6,5.7-7,11.5-10.7,17.1
	c-15.8,23.2-36.3,40.7-62.3,51.8c-5.4,2.3-10.8,4.4-16.3,6.2c-1.2,0.4-2.3,1.2-3.5-0.1c0.9-1.9,2.9-2.3,4.6-3.1
	c42.8-18.1,69.2-49.6,75.7-95.9c5.4-38.8-6.2-72.6-33.7-100.9c-12-12.3-26.1-21.3-42.1-27.5C290.3,200.8,288.4,200.5,288,198.4z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M117.5,274.1c4-6.2,7.5-12.7,11.6-18.8c17-24.8,39.6-42.3,67.5-53.2c3.3-1.3,6.5-3.3,10.4-2.9
	c-0.2,2.2-2.2,2.5-3.7,3.2c-26.8,11.5-47.4,30-61,55.8c-8.2,15.5-12.4,32.2-13.2,49.9c-0.9,21.2,3.1,41.1,12.7,59.9
	c13.3,26,33.7,44.6,60.4,56.4c2,0.9,4.3,1.2,5.4,3.5c-3.9,1-7.3-1.1-10.7-2.4c-23.3-9.3-43.3-23.2-59.6-42.6
	c-7.7-9.1-13.2-19.4-19.8-29.2c-3.6-9.8-5.2-20-5.8-30.4c-0.8-15,0-29.8,3.9-44.4C116.2,277.3,116.9,275.7,117.5,274.1z"/>
<path :style="{fill:'rgba(255, 197, 4, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M119.5,30.6c10.7,0,21.5,0,32.2,0c1.8,1.7,1.6,4,1.6,6.2c0,22.6,0,45.2,0,67.9c0,2.2,0.2,4.4-1.5,6.2
	c-10.7,0-21.5,0-32.2,0c-1.7-1.8-1.5-4.1-1.5-6.3c0-22.6,0-45.2,0-67.8C118,34.7,117.8,32.4,119.5,30.6z"/>
<path :style="{fill:'rgba(255, 197, 4, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M378.3,30.6c0,26.8,0,53.5,0,80.3c-10.7,0-21.5,0-32.2,0c-1.7-1.8-1.5-4.1-1.5-6.3
	c0-22.6,0-45.2,0-67.7c0-2.2-0.3-4.5,1.5-6.3C356.8,30.6,367.6,30.6,378.3,30.6z"/>
<path :style="{fill:'rgba(166, 10, 148, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M151.8,110.9c0-26.8,0-53.5,0-80.3c12.5-0.1,24.9-0.1,37.4-0.2c2.4,0,3.6,0.7,3.3,3.2
	c-0.1,1.1,0,2.2,0,3.3c0,8.8,0,8.8-8.8,9.6c-4.6,0.4-7.8,3.7-7.9,9c-0.2,10.1-0.2,20.2,0,30.3c0.1,6.4,4.1,10,10.9,9.7
	c4.9-0.2,6.2,1.2,6,6c-0.4,9.4-0.1,9.4-9.5,9.4C172.6,111,162.2,111,151.8,110.9z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M119.5,30.6c0,26.8,0,53.5,0,80.3c-8.2,0-16.4,0-24.6,0c-1.7-1.8-1.6-4.1-1.6-6.2
	c0-22.6,0-45.2,0-67.8c0-2.2-0.2-4.5,1.6-6.2C103.2,30.6,111.3,30.6,119.5,30.6z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M346.1,30.6c0,26.8,0,53.5,0,80.3c-8.2,0-16.4,0-24.6,0c-2.7-6.7-2.1-13.3-0.2-20
	c1.1-13.2,0.7-26.4,0.1-39.6c-2-6.9-2.7-13.7,0.1-20.6C329.7,30.7,337.9,30.6,346.1,30.6z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M95,30.7c0,26.7,0,53.5,0,80.2c-4.3,0.1-8.5,0-12.8,0.2c-2.4,0.1-3.4-0.7-3.4-3.2
	c0.1-24.8,0.1-49.5,0-74.3c0-2.6,1-3.3,3.4-3.2C86.5,30.6,90.7,30.6,95,30.7z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M321.6,30.7c0,6.9-0.1,13.7-0.1,20.6c-2.8-4.5-7.1-5.2-11.9-4.7c-3.3,0.4-4.2-0.9-4.3-4.2
	c-0.1-12-0.2-12,11.6-11.9C318.5,30.5,320,30.6,321.6,30.7z"/>
<path :style="{fill:'rgba(0, 212, 11, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M200.5,86.8c-16.1-0.3-16.1-0.3-16.1-16.7c0-15.1,0-15.1,14.9-15.3c17.2-0.3,17.2-0.3,17.3,16.4
	C216.7,87.1,216.7,87.1,200.5,86.8z"/>
<path :style="{fill:'rgba(0, 212, 11, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M312.8,70.9c0,15.1,0,15.1-15.1,15.2c-15.8,0.1-15.8,0.1-15.8-15.3c0-15.6,0-15.6,15.8-15.4
	C312.7,55.7,312.7,55.7,312.8,70.9z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M321.3,90.9c0.1,6.7,0.1,13.4,0.2,20c-4.3,0.1-8.5,0-12.8,0.2c-2.4,0.1-3.6-0.7-3.3-3.2
	c0.1-0.9,0-1.9,0-2.8c0.1-2.8-0.7-6.1,0.5-8.3c1.3-2.4,4.9-0.7,7.5-1C316.8,95.2,319.2,93.2,321.3,90.9z"/>
<path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M207.7,427.9c-29.7-11.4-52.3-30.8-66.8-59.2c-32.3-62.9-3.5-140.7,62-167.4c1.4-0.6,3-0.9,4.2-2.1
	c16.3-5.1,33-7.7,50.1-6.7c10.6,0.6,20.7,3.3,30.9,5.9c10.6,4.4,21.1,9.1,30.5,15.9c28.2,20.5,45.6,47.7,50.3,82.4
	c5.3,39.4-6.2,73.7-33.8,102.3c-13.3,13.9-29.5,23.6-47.7,29.8c-12.1,3.7-24.4,6.1-37,6.2C235.7,435.2,221.5,432.5,207.7,427.9z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M147.7,341.5c-16.9-59.9,22.9-122.2,84.1-131.8c57.2-9,110.3,28.7,120.6,85.8c2.4,13.5,2,27-0.8,40.4
	c-0.4,1.8-1.2,3.5-1.8,5.3c-7.6,18.3-20.8,31.9-36.8,42.8c-14.6,9.9-30.6,16.6-48.1,18.6c-31,3.6-59.5-2.9-84.7-22.1
	c-11.7-8.9-21.7-19.3-29.1-32C149.8,346.3,149.4,343.6,147.7,341.5z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M147.7,341.5c4.3,4.6,6.5,10.6,10.4,15.6c15.4,19.7,34.6,33.5,58.7,40.7c9.9,3,20.1,4.8,30.1,4.8
	c21.7,0.1,42.2-5.2,61-16.7c18.2-11.1,31.3-26.5,41.9-44.6c-2.7,13.4-9,25.2-17.3,35.8c-17.8,23-41.2,37-70.1,40.7
	c-50.5,6.4-98.3-23.4-114.2-73.6C147.9,343.4,147.9,342.5,147.7,341.5z"/>
<path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M321.6,354.1c-0.2,18.3-15,32.8-33.1,32.4c-17.5-0.4-31.7-15.2-31.5-33c0.2-17.9,15-32.1,33.1-31.9
	C307.4,321.9,321.7,336.7,321.6,354.1z"/>
<path :style="{fill:'rgba(0, 212, 11, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M289.7,369.8c-9.8,0-16.5-6.5-16.6-16c0-8.4,8-16.2,16.5-16.2c8.1,0,15.6,7.9,15.7,16.4
	C305.4,363.3,298.9,369.8,289.7,369.8z"/>
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
                                    <button :style="{background:'rgba('+getterDrumBg1+')'}" @click="ShowElement(getterDrumBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDrumBg2+')'}" @click="ShowElement1(getterDrumBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDrumBg3+')'}" @click="ShowElement2(getterDrumBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDrumBg4+')'}" @click="ShowElement3(getterDrumBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDrumBg5+')'}" @click="ShowElement4(getterDrumBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Drum= [
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
            var randomNumber = Drum[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Drum[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Drum'){
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
                getterDrumBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Drum') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrumBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Drum') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrumBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Drum') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDrumBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterDrumBg5: {
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
                            name:'Drum',
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