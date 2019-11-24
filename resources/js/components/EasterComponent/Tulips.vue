<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(248, 186, 50, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M282.2,52c1.6,1.7,3,0.4,4.5-0.2c6.2-2.2,13.1-0.7,16.5,4.5c10.9,16.3,19.5,33.8,24.8,52.8
	c-3,0.3-4.3-2.1-6.1-3.7c-7.4-6.8-15.1-4.9-18.6,4.6c-2.7,7.4-2.2,15.1-1.3,22.7c1.4,11.9,3.6,23.7,4.9,35.6
	c0.9,8.4-0.3,16.6-0.7,24.9c-0.6,12.1-2.2,24.2-4.8,36.1c-2.5,11.7-7.2,22.1-15.7,30.7c-11.1,11.2-12.4,25.3-11.1,40
	c0.2,2.5,0.9,5-1.7,6.8c-6.6,2-13.2,3.2-20.2,2.2c-3.8-1.2-4.4-4.2-4.1-7.5c1.5-14.1,2.8-28.1,4.1-42.2c1.7-18.7,3.6-37.4,4.8-56.1
	c0.9-14.3,2-28.5,1.9-42.8c-0.1-15.7-1.3-31.2-4.4-46.6c-0.5-2.7-1.5-5.5-0.1-8.3c4.4-10.9,8.5-21.9,14.2-32.2
	C273.2,65.9,277.1,58.6,282.2,52z M208.1,58c3.5,12.8,7.3,25.5,10.6,38.3c4.8,18.7,7.9,37.7,6.3,57.1c-0.9,10.3-3,20.6-5.1,30.8
	c-2.7,13.1-1.7,26,0.8,38.9c5,26,10.2,51.9,15.3,77.9c0.2,1.2,0.3,2.3-0.9,3.1c-3.1,2.1-4.7-0.7-6.8-2c-20.2-9.4-31.6-26-39.1-46.3
	c-10.4-28.1-15.9-56.9-14.9-86.8C175.6,129.1,186,91.7,208.1,58z"/>
<path :style="{fill:'rgba(240, 96, 151, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M462.7,145.3c-4.8-7.9-10-9.4-18.5-5.4c-2.9,0.7-4.1,3.3-5.5,5.5c-7.3,11.8-13.1,24.3-17.4,37.5
	c-0.5,2.3,0,4.6,0.5,6.9c2.1,10,3,20,2.8,30.2c-0.3,12.8,0.1,25.6-0.8,38.4c-1.6,21.7-3.9,43.4-5.7,65.1c-0.6,7.2-2.5,14.4-1,21.8
	c7,2.2,13.8,2.1,20.3-1.7c1.1-1.7,0.6-3.5,0.4-5.4c-1.2-12.3,0.8-23.5,10.1-32.7c4-4,6.9-8.9,8.8-14.4c4.7-13.5,6-27.6,6.9-41.8
	c0.9-15.1-0.9-29.9-3.4-44.7c-1-6.2-1.3-12.7,0.7-18.8c2.4-7.1,8.1-8.8,14-4.5c1.3,0.9,2.4,2.4,4.4,1.8
	C475.9,169.5,469.8,157.2,462.7,145.3z M394.3,279.8c-2.4-12.8-3.2-25.5-0.4-38.5c2.1-9.3,4.2-18.8,4.1-28.4
	c-0.2-14.8-3.5-29.2-6.9-43.5c-2.1-8.9-6.2-17.2-7-26.4c-4.5,6.2-8.9,12.4-12,19.4c-17.2,39.7-19.8,80.6-9.4,122.3
	c5.7,23.1,14,45,37.7,56.3c2,1.3,3.8,3.6,6.7,1.8c-0.3-0.6-0.7-1.2-0.8-1.8C402.3,320.7,398.1,300.3,394.3,279.8z M93.1,214.8
	c0-8.6-0.9-17.1-2.7-25.6c-0.5-2.3-1.8-4.7-0.4-7.2c-0.2-2-0.4-3.9-1.1-5.8c-4.3-12.1-10.3-23.4-17.2-34.2c-0.9-1.4-1.9-2.7-3.7-3
	c-6.4-2-12.6-2.8-17,4c0.2,1.5,0.3,3,0.7,4.4c3.7,12,7.2,24.1,9.7,36.5c3.1,15.3,5.2,30.6,1.7,46.2c-3.4,15.2-5.3,30.4-2.3,46.2
	c4.3,22.2,8.8,44.4,13.2,66.6c3.2,3.4,6.7,4.1,11,2.1c-0.5-5,0.7-9.9,1-14.8c0.6-8.9,1.3-17.8,2.1-26.7c1.2-13,2.7-25.9,3.8-38.9
	C93.5,248,93.1,231.4,93.1,214.8z M154.9,217.1c-1.2-10.8-2.9-21.7-6.8-32c-2-1.8-3.9-3.6-5.9-5.3c-4.4-4-9.9-3.6-13.4,1.3
	c-2.1,2.9-3.5,6.1-3.7,9.7c-0.5,6.8,0.3,13.6,1.4,20.3c1.7,10.6,4.1,21.2,3.4,32c-0.5,9.2-1.6,18.5-2.9,27.6
	c-1.8,12.9-4.7,25.4-14.2,35.4c-5.1,5.4-8.9,11.6-9.6,19.2c-0.5,6-0.1,11.9,0.9,17.9c3.2,2.1,5.4-0.3,7.8-1.9c3-1.8,6-3.5,8.9-5.4
	c13-8.5,19.3-21.6,24.3-35.5C154.9,273.3,158.1,245.5,154.9,217.1z"/>
<path :style="{fill:'rgba(142, 193, 61, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color7'" d="M253.2,307.7c-6.3,0-12.4-0.7-18.1-3.6c-2.5,0.3-4.4-1.7-6.8-2c9.9,23.6,16.5,47.8,14.6,73.8
	c-0.9,7,0.5,14.2-0.8,21.2c0,2.7,0,5.3,0,8c0.9,1.7,0.4,3.6,0.5,5.4c0.2,19.6-0.3,39.2,0.3,58.8c0,9.6,0.2,19.3,0.1,28.9
	c0,3,0.9,4.1,4,4c4.1-0.2,8.3,0,12.5,0c9.8,0,9.8,0,10-9.9c0.6-12.1,0.1-24.1,0.3-36.2c0-21.6,0-43.2,0-64.8
	c-0.2-5.8,0.4-11.6-0.3-17.4c0-9.7-0.5-19.5,1.5-29.1c2.9-14.3,7.5-28.1,12.8-41.6c-3.5,0.9-7,1.8-10.5,2.7
	C266.5,306.9,259.9,308.5,253.2,307.7z M104.1,343.1c-6.2,2.4-12.6,2.2-19,1.9c-3.9,0.3-7.5-0.6-11-2c-2.1-0.6-4.2-1.2-6.3-1.8
	c0.6,1.6,1,3.2,1.7,4.7c6.6,16.9,10.2,34.1,9.9,52.5c-0.6,33-0.1,65.9-0.2,98.9c0,3.6,0.7,5.2,4.6,4.8c4.1-0.4,8.3-0.2,12.5,0
	c2.9,0.1,4.1-0.6,4.1-3.8c0.1-29.8,1.4-59.7,0.2-89.4c-1-23.7,2.2-46,11.4-67.6C109.2,341.4,106.9,343.3,104.1,343.1z M444.7,341.1
	c-2.6,0.2-4.8,2.2-7.6,1.9c-6.5,2.6-13.2,2.2-20,1.9c-3.5,0.1-6.8-0.6-10-2c-2.2-0.6-4.4-1.2-6.7-1.8c6.9,17.2,12.2,34.7,11.8,53.7
	c-0.5,23.6-0.3,47.3-0.3,70.9c0,10.5,0.3,21,0.1,31.5c-0.1,4.1,1.3,5.1,5.1,4.9c4.1-0.3,8.3-0.2,12.5,0c2.4,0.1,3.6-0.5,3.6-3.3
	c0-24.8,0.1-49.6,0.4-74.4c0.2-15.5-1.7-31,0.5-46.4C435.8,365.1,440,353,444.7,341.1z"/>
<path :style="{fill:'rgba(237, 170, 64, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M257.1,105.1c-2.7-0.4-2.4-2.9-2.9-4.6c-4.9-14.8-12.3-28.5-20.3-41.8c-1.3-2.1-3.2-3.8-4.8-5.7
	c4-13.1,9.9-25.4,17.4-36.8c5.3-8,14.3-7.9,19.6,0.1c7.3,11,12.5,23,16.2,35.7c-1.4,5.9-5.5,10.4-8.4,15.5
	C267,79.5,261.2,91.9,257.1,105.1z"/>
<path :style="{fill:'rgba(236, 56, 119, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M423.1,182c-3.4-4.3-4-9.7-6.1-14.6c-4.4-10.1-9.8-19.5-16-28.6c3.1-10.4,7.7-20.1,13.7-29.1
	c4.5-6.7,11.8-6.6,16.1,0.3c5.9,9.3,10.1,19.4,13.4,29.8C434.6,152.7,428.2,167,423.1,182z M90.1,182c-3.6-8.7-6.8-17.5-11.3-25.8
	c-3.2-6-6.8-11.7-10.7-17.2c3-10,7.5-19.4,13.1-28.3c5.1-7.9,12.2-7.8,17.2,0.2c5.7,9,9.6,18.8,12.9,28.9
	c-8.5,11.3-14.6,23.8-19.3,37.1C91.4,178.6,90.7,180.3,90.1,182z"/>
<path style="fill:#AED392;transform:scale(0.2)" d="M269.3,456.3c0-21.7,0-43.5-0.1-65.2c0.3-0.4,0.5-0.4,0.7,0.1c0,21.6,0,43.3,0,64.9
	C269.9,456.4,269.6,456.5,269.3,456.3z"/>
<path style="fill:#C1DDAC;transform:scale(0.2)" d="M242.1,405.1c0.3,0.7,0.8,1.5,0.8,2.2c0,20.6,0,41.3-0.1,61.9c-0.9-1.3-0.7-2.9-0.7-4.4
	C242.2,445,242.2,425,242.1,405.1z"/>
<path style="fill:#D0E5C0;transform:scale(0.2)" d="M269.3,456.3c0.2-0.1,0.4-0.2,0.7-0.3c-0.1,12.1,0.9,24.1-0.6,36.2
	C269.3,480.2,269.3,468.2,269.3,456.3z"/>
<path style="fill:#C1DDAC;transform:scale(0.2)" d="M242.9,375.9c-0.1,7.1,1.2,14.2-0.8,21.2C242.5,390,241.4,382.9,242.9,375.9z"/>
<path style="fill:#B4D79B;transform:scale(0.2)" d="M270,391.1c-0.2,0-0.5,0-0.7,0c0-5.7,0-11.5,0.1-17.2C270.7,379.5,269.9,385.3,270,391.1z"/>
<path :style="{fill:'rgba(244, 184, 72, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M257.1,105.1c-1.8,1.3-1.5,2.9-1.1,4.8c4.8,21.8,6,44,4.9,66.2c-0.8,16.8-1.6,33.7-3.7,50.4
	c-1.1,9-1.4,18.1-2.2,27.2c-1.2,12.2-2.5,24.3-3.8,36.4c-0.4,4.3-0.7,8.6-1.2,12.8c-0.3,2.6,0.6,4.1,3.1,4.8
	c-0.7,1.4-2.1,1.7-3.4,1.4c-5.2-1.1-11-0.1-15.1-4.8c-3.8-21.8-8.4-43.5-12.6-65.2c-2.2-11.3-4.3-22.6-5.2-34
	c-0.8-10,1.1-19.9,2.9-29.7c1.6-8.8,3.6-17.6,3.9-26.6c0.8-21.1-3.6-41.4-8.9-61.5c-1.9-7.1-3.9-14.1-6.3-21.1
	c-0.9-2.7-1.7-5.4-0.4-8.3c4.6-7.5,11-9,20.9-5.1c3.4,1.1,5.1,4,6.9,6.8C244.8,74,251.8,89.1,257.1,105.1z M273,305.8
	c1.1-1.3,0.7-2.6,0.5-4.2c-2-16.8,0.2-32.3,13.2-44.9c9.2-8.9,12.3-20.9,14.3-33.2c2.2-13.2,3.2-26.5,4.3-39.9
	c1.2-15.1-1.8-29.5-3.9-44.2c-1.3-9.4-2.4-18.7-0.2-28.1c0.6-2.6,1.8-5,3.4-7.1c4.1-5.6,11.3-6.3,16.5-1.6c2.4,2.1,4.6,4.3,6.9,6.5
	c4.3,10.9,6.2,22.3,8,33.8c2.3,13.8,2.5,27.8,2,41.8c-1.2,30.6-8.2,59.8-21.9,87.2c-6.2,12.4-15.8,21.7-28,28.2
	c-1.6,0.8-3.4,1.4-4.6,2.9C280.3,305,277.3,308,273,305.8z M205.6,259c-4-9.4-6.5-19.3-8.4-29.3c-3.7-19.2-6.1-38.4-7.2-58
	c-0.8-15-1.3-29.8,1.2-44.6c0.6-3.4,2.3-6.2,4.9-8.5c1-0.9,2-2,3.5-1.3c1.7,0.7,1.9,2.3,1.6,3.8c-3.3,16.3-2.1,32.8-1.7,49.2
	c0.3,12.5,2.3,25,3.6,37.5c0.8,8.1,1.4,16.1,2.3,24.2C206.1,241,206.4,249.9,205.6,259z"/>
<path :style="{fill:'rgba(238, 59, 135, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M111.3,139.9c4.2-3,8.3-2.5,12.5,0.2c4.2,2.8,7.3,6.7,10,10.9c6.8,10.5,11.6,21.9,14.4,34.1
	c-3,0.5-4.3-2.1-6.1-3.6c-5.1-4.3-9.9-3.5-13.1,2.4c-3.4,6.2-2.7,12.9-1.9,19.6c1,9.3,3.2,18.4,3.8,27.7c1.2,19.9-1.2,39.5-6.7,58.7
	c-1.9,6.7-5.7,12.5-10.4,17.5c-8.3,8.7-10.1,19.2-8.8,30.6c0.2,2,0.7,4-0.6,5.8c-6.2,3.6-12.8,3.9-19.5,1.6c-1.7-2.8-1.2-5.8-1-8.7
	c2.1-21.7,3.9-43.4,5.9-65.1c1.5-17.1,1.9-34.2,1.9-51.3c0-10.5-0.7-20.9-2.8-31.2c-0.4-2-0.8-3.9-0.4-5.9
	c4.6-13.5,10.1-26.5,18-38.5C107.7,142.6,108.7,140.4,111.3,139.9z M67.8,341.1c-27.5-15.3-37.2-41.4-41.6-70.2
	c-6-38.8-0.8-76.2,15.9-111.8c2.6-5.6,5.7-10.9,9.1-16c1.4,1.1,1.7,2.8,2.2,4.4c6,18.9,11,38,13,57.8c0.9,8.4-0.2,16.6-1.6,24.8
	c-0.9,5.6-2.1,11.1-3.1,16.7c-2.3,12.4-0.2,24.5,2,36.6c3.3,17.5,7,34.9,10.4,52.4c0.4,2.3,1.2,4.5,0.5,6.9
	C71.7,344.8,69.9,342.3,67.8,341.1z M423.1,182c-3.6-14.9-10.5-28.2-19.1-40.8c-0.7-1.1-1.6-2.2-3.1-2.4c-6.5-2-12.5-2.4-16.8,4.2
	c-1.5,2.8-0.8,5.5,0.1,8.2c1.9,5.9,3.6,11.8,5.2,17.7c6,22.7,9.7,45.5,3.6,69c-3.4,12.9-3.1,26-0.6,39.1
	c3.8,20.3,7.9,40.5,11.9,60.8c0.4,2,0.7,4,2.1,5.5c3.4,2,6.7,3.8,10.7,1.4c1.3-1.8,0.9-3.8,1-5.8c0.3-5,0.7-9.9,1.1-14.8
	c1.2-13.3,2.5-26.6,3.8-39.9c0.9-9.6,1.7-19.1,2.2-28.7c1-21.9,2.3-43.7-1.9-65.4C422.9,187.6,421.2,184.8,423.1,182z M485.8,206.3
	c-1.2-7.9-1.9-16.2-6.6-23.2c-0.7-0.5-1.4-0.9-2-1.4c-8.1-7.6-15.6-5.2-18.3,5.7c-1.4,5.9-1,11.8-0.3,17.8
	c1.3,10.8,3.7,21.4,3.6,32.5s-0.5,22.2-2.2,33.1c-1.9,12.5-4.3,24.9-13.6,34.5c-5.4,5.5-9.1,11.8-10,19.5
	c-0.7,6.1-0.7,12.2,0.7,18.3c3.2,2.1,5.4,0,7.6-1.9c3.6-2.3,7.4-4.4,10.8-7c15.2-12,22.7-28.7,27.5-46.8
	C490.1,260.5,489.9,233.4,485.8,206.3z M376.2,227.5c-0.6-10.7-0.6-21.6,1.8-32.2c0.3-1.3,0.3-2.8-1-3.6c-1.6-1-2.4,0.5-3.3,1.3
	c-1.9,1.7-3.3,3.7-3.6,6.3c-1.4,10.3-1.9,20.6-1.2,31.1c1,16.2,2.4,32.3,5.3,48.2c1.6,8.7,3.4,17.4,7.2,25.5
	c1.7-12.6-0.3-24.9-1.6-37.2C378.4,253.9,377,240.7,376.2,227.5z"/>
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
                                    <button :style="{background:'rgba('+getterTulipsBg1+')'}" @click="ShowElement(getterTulipsBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTulipsBg2+')'}" @click="ShowElement1(getterTulipsBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTulipsBg3+')'}" @click="ShowElement2(getterTulipsBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTulipsBg4+')'}" @click="ShowElement3(getterTulipsBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTulipsBg5+')'}" @click="ShowElement4(getterTulipsBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTulipsBg6+')'}" @click="ShowElement5(getterTulipsBg6)" :class="this.ValueId+'_color6btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTulipsBg7+')'}" @click="ShowElement6(getterTulipsBg7)" :class="this.ValueId+'_color7btn'"></button>
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
        var Tulips= [
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
            var randomNumber = Tulips[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Tulips[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Tulips'){
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
                getterTulipsBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tulips') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTulipsBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tulips') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTulipsBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Tulips') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTulipsBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTulipsBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTulipsBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTulipsBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
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
                            name:'Tulips',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
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