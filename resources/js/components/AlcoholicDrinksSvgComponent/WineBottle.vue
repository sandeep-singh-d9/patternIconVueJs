<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M42.9,423c0-38.6,0-77.3,0-115.9c0-12.7,0.2-25.5,0.4-38.2c0.4-21.9,17.5-39.1,39.5-39.7
	c7-0.2,13.9-0.2,20.9,0.1c3.5,0.1,5-0.8,4.9-4.6c-0.4-29.5-0.7-58.9-0.9-88.4c0-2.5-0.5-3.9-3.2-4.8c-6.7-2.2-9.7-7-9.6-14
	c0.1-29.7,0-59.4,0-89c0-11.7,9.5-21.1,21.3-21.2c15.3-0.1,30.7-0.1,46,0c11.9,0.1,21.2,9.3,21.3,21.2c0.1,29.9,0,59.8,0,89.6
	c0,6.5-2.9,11.3-9.1,13.2c-3.7,1.1-3.8,3.2-3.8,6.2c0.1,10.8,0.1,21.5,0,32.3c-0.2,18.1-0.5,36.2-1,54.3c-0.1,4.2,1.2,5.5,5.4,5.3
	c7-0.3,13.9-0.2,20.9,0c21.5,0.4,38.9,17.9,39.1,39.4c1,90.4,0.6,180.8,0.6,271.2c0,13.3,0,26.7,0,40c0.1,16.8-10.7,27.2-29.2,27.3
	c-32.9,0.3-65.7,0.3-98.6,0.4c-11.9,0-23.9-0.2-35.9-0.3c-5.2,0-10.2-1.3-15-3.3c-11.4-4.6-14.3-14-14.3-25.1
	C42.8,527,42.8,475,42.9,423C42.8,423,42.8,423,42.9,423z"/>

	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M214.3,548.7c-33.6,0.2-67.3,0.1-100.9,0.1c-9.2,0-11.2-1.9-11.2-11.1c0-63.7,0-127.4,0-191.1
		c0-9.1,2.5-11.6,11.7-11.6c30.5,0,60.9,0,91.4,0c15.8,0,15.8,0,15.1-15.7c-2.9-2.4-6.4-1.7-9.7-1.8c-34.4,0-68.8,0-103.1,0
		c-1.8,0-3.6,0-5.4,0.1c-3,0.3-5.6,0.9-5.2,4.9c0.2,1.4-0.1,2.9-1.9,3.1s-2.5-1.3-2.6-2.6c-0.6-5.3-4.3-5.5-8.3-5.4
		c-2.2,0-4.4,0.1-6.3,1.5c-2.7,6.1-1.5,12.5-1,18.8c0.7,2.7,2.7,2.2,4.7,1.9c1.8-0.2,3.9,0,3.9,2.3c0,2.7-2.1,3-4.2,2.4
		c-2.1-0.5-3.9-0.6-4.5,2c-0.6,10.9-1,21.8,0.3,32.7c1.1,2.5,3.6,2.9,5.6,4c5.8,3.1,8.8,8.2,7.8,13.3c-1.1,5.6-4.9,8.7-11.6,9.9
		c-1.9,0.3-4.7-0.3-4.4,3.2c1.7,3.1,1.8,6.4,1.8,9.9c0,14.9,0.1,29.9,0,44.8c-0.1,13.3,0.6,26.7-0.4,40c-0.3,1.5-0.3,2.9,0,4.4
		c0.6,2.5,0.4,5.1,0.5,7.7c0.3,8.1-0.8,16.3,0.7,24.3c1.1,2.6,3.9,2.5,5.8,3.7c2.8,1.7,5.3,3.8,5.1,7.4c-0.3,3.6-2.7,5.5-6.1,6.3
		c-1.9,0.5-4,0.6-4.8,2.9c-1.3,8.2-0.7,16.4-0.4,24.6c0.1,3,1.4,5.7,4,7.5c38.8,0.1,77.6,0.1,116.5,0.2c3.6,0,7.2,0.4,10.7-0.1
		c7.2-1,13.3-2.1,12.8-13.4c-0.4-8.1-0.4-16.3,0-24.5C220.9,550,219.3,548.6,214.3,548.7z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M78.1,294c5.6,0.1,11.1,0.2,16.7,0.2c40,0,79.9,0,119.9,0c2.8,0,6.2,1,6-4
		c-0.3-8.5,0.2-17.1-0.2-25.6c-0.5-10.3-8.2-18.6-18.4-20.6c-9.9-1.9-19.8-0.6-29.7-1c-1.5,0-2.7,0.6-3.4,1.9
		c0.5,2.4,1.7,4.5,3.3,6.2c2.8,3.1,1.3,5-1.5,6.6c-3.7,2.2-7.9,0.2-9.3-4.2c-0.6-1.9,0.2-4-0.7-5.9c-4.2-0.9-4.9-4-4.9-7.7
		c0-13.5-0.2-27.1,0.1-40.6c0.1-5-0.9-7.2-6.5-6.8c-6.9,0.5-13.9,0.3-20.9,0c-4.6-0.2-6.3,1-6.1,5.9c0.4,13.9,0.1,27.9,0.2,41.8
		c0,3.2-0.8,5.8-4.1,7.2c-3.2,1.3-5.8,0.7-8.1-1.8c-1.1-1.1-2-2.7-3.8-2.6c-9.5,0.4-19-1.3-28.5,0.7c1.7,2.3,4.6,1.3,6.4,1.9
		C73.1,260.7,75.7,277.3,78.1,294z"/>

<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M169,103.2c0-2.5,0-5.1,0-7.6c-2.9-1.6-2.1-3.1,0.1-4.5c0-20.9,0.1-41.8,0.2-62.7
	c0-4.7-1.9-6.9-6.8-6.9c-16.1,0.1-32.2,0.1-48.4,0.2c-2.8,3.5-2.9,7.7-3,11.9c-0.1,10.3-0.1,20.6,0,31c0.1,8.5-0.7,17.1,0.6,25.6
	c0.7,2,0.3,3.9,0,5.9c-0.4,2.2-0.5,4.4,0,6.6c0.4,1.8,0.7,3.6,0.3,5.5c-0.7,3.6-1.7,7.2,0.9,10.5c15.3,0,30.6,0.2,45.8,0.1
	c11.3-0.1,10.6,2.7,10.3-10.9C167,106.2,166,104.7,169,103.2z"/>

	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M120.7,386.2c-3.6-0.2-4.3,1.4-4.2,4.5c0.2,7.7,0.1,15.5,0.1,23.2c0,38.3,0.1,76.7-0.1,115
		c0,4.3,0.8,6.1,5.5,5.8c6.1-0.5,12.3-0.3,18.4-0.4c0-49.3,0-98.6,0-147.9C133.8,386.4,127.2,386.5,120.7,386.2z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M135.1,350.2c-6.1,0.3-12.3,0.1-18.4,0.1c-0.1,5.8,0,11.5-0.2,17.3c-0.1,3.2,0.7,4.7,4.3,4.5
		c6.5-0.3,13.1-0.2,19.7-0.3c0-5.4-0.2-10.7,0.1-16.1C140.7,351.7,139.4,350,135.1,350.2z"/>

<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M114.1,21.6c-2.3,20.6-0.7,41.2-1.2,61.8c-0.1,2.6-0.2,5.2,1.1,7.6c-1.6,1.3-3.1,1.2-4.7,0
	c-0.1-21.2-0.1-42.4-0.2-63.6C109.1,24,110,21.4,114.1,21.6z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M114,107.7c-1.9,3.5-0.9,7.2-1.1,10.8c-2.6,0.5-4-0.4-3.8-3.3c0.2-2.5,0.2-5,0.2-7.5
	C110.9,106.4,112.5,106.4,114,107.7z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M113,95.8c0,2.3,0,4.7,0,7c-1.1,1.1-2.3,1.1-3.6,0.2c0-2.5,0-5,0-7.5C110.6,94.7,111.9,94.7,113,95.8
	z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M207.5,372c6.5,0,9.6,2.3,9.7,7c0.1,5-2.9,7.2-9.9,7.2c-6.4,0-9.6-2.5-9.5-7.1
	C197.9,374.5,201.3,372,207.5,372z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M78.2,508.2c0-1.2,0-2.5,0-3.7c-1.9-1.6-3.9-1.9-5.7,0c-0.9,1-0.9,2.8,0,3.8
	C74.3,510.1,76.4,509.8,78.2,508.2z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M169.9,244.9c-3.1-0.1-6,0.3-8.2,2.7c-1.9,5.7-0.2,10.1,4.4,12.4c4,2,6.3-1.1,9-2.8
	c1.5-1,3-2.8,1.4-4.4C174.1,250.4,173.2,246.7,169.9,244.9z M90.6,402.8c6.7-9.5,1.3-20.2-11.4-22.5c-6.8,1.4-12.4,4.3-13.2,12.1
	c-0.8,8.3,1.5,11.8,9.6,15.4C81.3,408,86.8,408.2,90.6,402.8z M79.3,541.7c-8.7,6.6-8.8,13.4-0.1,18c2.8-0.5,6,0.7,8.4-1.9
	c2.3-2.6,4.6-5.2,2.9-9C88.4,544,84.8,541.3,79.3,541.7z M157.4,561.1c-3.5-0.2-6.1,2.5-6.1,6c0,3.2,2.4,5.3,5.7,5.6
	c3.5,0.3,5.5-1.6,5.9-5.1C162.8,563.9,160.8,561.2,157.4,561.1z M89.3,422c-3,0.2-5.3,1.7-5.2,5c0.1,3,2.2,4.5,5.1,4.6
	c3.3,0,5.4-1.7,5.3-5C94.5,423.6,92.4,422.2,89.3,422z M95.1,480.7c-3.9-0.2-5.6,1.6-5.5,4.5c0.1,2.6,1,5.1,4.5,5
	c3.2-0.1,5.4-1.6,5.3-4.9C99.4,482.3,97.3,480.9,95.1,480.7z M87.8,344.6c1.2-1.6,1.5-3.3,0.2-4.8c-1.4-1.6-3.2-3-5.6-1.8
	c-1,0.5-2.1,1.1-3.1,1.6c0,1.5,0,3.1,0,4.6c0.9,0.7,1.8,1.5,2.9,2C84.4,347.3,86.3,346.6,87.8,344.6z M218.1,273.8
	c-0.1-13-13.1-26.2-26-26.3c-4.6,0-8.1,1.8-8.4,6.4c-0.3,4.6,3,7.1,7.4,7.8c9.7,1.6,12.1,3.7,13.5,13.4c0.7,4.4,2.7,7.3,7.1,7
	C216.5,281.8,218.4,278.4,218.1,273.8z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M113,95.8c1.7-1.3,1.1-3.2,1-4.9c-1.6,0-3.1,0-4.7,0c0,1.5,0,3.1,0,4.6
	C110.6,95.7,111.8,95.8,113,95.8z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M168.9,95.5c0-1.5,0.1-3,0.1-4.5c-2,0.1-4.8-1.2-4.6,2.5C164.6,96.6,167.2,95.4,168.9,95.5z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M112.9,102.9c-1.2,0.1-2.4,0.2-3.6,0.2c0,1.5,0,3.1,0,4.6c1.6,0,3.1,0,4.7,0
	C114,106,114.6,104.2,112.9,102.9z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M169,103.2c-1.8,0.1-4.4-1-4.6,2.1c-0.2,3.6,2.7,2.4,4.6,2.5C169,106.2,169,104.7,169,103.2z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M129.2,90.9c-1.9,0.1-5.1-1.4-5.1,2.2c0,3.3,3,2.3,5.1,2.6c1.8-0.5,4.9,1.2,4.9-2.4
	C134.2,89.7,131.1,90.9,129.2,90.9z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M149.9,90.9c-2,0.2-5.3-1.6-5.7,2.1c-0.4,3.5,2.7,2.3,4.6,2.7c2.1-0.3,5.3,0.9,5.5-2.7
	C154.5,89.9,151.6,90.8,149.9,90.9z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M129.8,103.1c-2.2,0.1-5.4-1.1-5.7,2.5c-0.3,3.2,2.7,2,4.5,2.4c1.9-0.7,5.3,1.4,5.6-2.5
	C134.4,102.3,131.6,103,129.8,103.1z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M149.3,103.1c-1.9,0.1-4.8-1.2-5.1,2.1c-0.3,3.5,2.8,2.3,4.8,2.7c1.8-0.7,5.2,1.4,5.3-2.4
	C154.3,102.4,151.3,103,149.3,103.1z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M116.7,350.3c1.4-2.2,3.6-1.1,5.4-1.1c30.9-0.1,61.8,0.1,92.6-0.1c4.7,0,6,1.3,6,6
	c-0.2,58-0.1,115.9-0.1,173.9c0,2.6,0.9,5.7-3.8,5.6c-25.5-0.2-51-0.2-76.5-0.3c-2.1-2.3-1.9-5.2-1.9-7.9c0-44,0-88,0-132
	c0-2.7-0.3-5.6,1.9-7.9c14.5-0.1,29-0.2,43.5-0.2c4.9,0,8.9-1,9.3-6.7c0.4-4.8-2.9-7.4-9.2-7.5c-14.5-0.1-29-0.2-43.5-0.2
	c-3-4.1-1.7-8.9-1.7-13.3c0-4.5-1.6-6.3-6.3-6.4C127.1,352,121.6,353.6,116.7,350.3z M155.9,156.1L155.9,156.1
	c0-6.4-0.1-12.7,0-19.1c0.1-3-1-4.3-4.1-4.2c-8.3,0.1-16.7,0.2-25,0c-3.5-0.1-4.4,1.4-4.3,4.6c0.1,12.5,0.1,25,0,37.5
	c0,3.3,1.1,4.6,4.5,4.5c8.1-0.2,16.3-0.2,24.4,0c3.8,0.1,4.8-1.4,4.7-4.9C155.8,168.4,155.9,162.2,155.9,156.1z M210.6,308.5
	c-47.6,0-95.2,0-142.8,0c-10.5,0-10.5,0-9.8,10.7l0,0c0,1.2-0.1,2.4-0.1,3.6c0,85.9,0,171.7,0,257.6c0,1,0,2,0,3
	c0,4.6,2.4,7.3,6.8,8.5c5.3,1.5,10.6,1.3,16,1c-2.4-4.7-2.6-9.7-2.5-14.9c0.2-6.1,0-12.2,0-18.3c-5-6.5-7.1-9,0.1-16.9
	c0.3-0.3,0.2-0.7,0.1-1.1c0-4.9,0.2-9.9-0.1-14.8c-0.3-6.2,1.3-12.6-0.9-18.7c-1.4-0.5-3.1-0.1-4-1.9c0.8-1.8,2.6-1.4,3.9-1.9
	c1.4-1.2,1-2.9,1-4.5c0-28.8-0.1-57.5,0.1-86.3c0-3.1-1.4-4.6-3.7-5.9c-0.4-1.2-1.4-1.8-2.3-2.6c-9-7.6-7.8-17.4,2.7-22.5
	c1.2-0.6,2.6-1.1,3.2-2.4c0-12,0-23.9,0-35.9c1.4-1.5,1.3-3.1,0.1-4.6c0-6.8-0.1-13.6-0.1-20.4c1.8,0,3.6,0,5.4-0.1
	c3.9-0.2,7.9-1.1,6.8,5.5c-0.4,2.4,2.1,4.2,4.9,4c2.5-0.2,4.1-1.8,4.3-4.2c0.1-1.6-0.7-3.3-1.2-5.3c40.8,0,81.4,0,122,0
	C221,308.5,221,308.5,210.6,308.5z M66.2,294.2c4,0.1,7.9-0.1,11.9-0.2c0-8.1,0.3-16.3,0-24.4c-0.2-6.1,1.2-11.7,3.7-17.2
	c1.3-2.8,4.9-4.2,5.1-8.6c-3,0-5.9,0-8.8,0c-11.7,1.6-19.2,9.6-20.6,21.2c-0.8,6.5-0.3,13.1-0.5,19.6
	C56.8,296.4,56.1,294,66.2,294.2z M123.6,229c3.6-1.3,4.2-3.9,4.9-6.3c2.4-8.1,0.6-16.5,1.1-24.7c0.1-2,0.2-4.1-2.8-4.2
	c-3.3-0.1-3.3,2.1-3.3,4.4C123.6,208.2,123.6,218.3,123.6,229z M123.7,163.2c-0.1,15,0,15,15.3,15c3.8,0,7.6-0.1,11.3,0
	c3.3,0.2,4.7-1.1,4.5-4.4c-0.2-5.4-0.2-10.7,0-16.1c0.2-3.8-1.5-4.8-4.9-4.7c-5.4,0.2-10.7,0-16.1,0.1
	C122.1,153.3,123.7,151.6,123.7,163.2z"/>
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
                                    <button :style="{background:'rgba('+getterWineBottleBg1+')'}" @click="ShowElement(getterWineBottleBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWineBottleBg2+')'}" @click="ShowElement1(getterWineBottleBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWineBottleBg3+')'}" @click="ShowElement2(getterWineBottleBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterWineBottleBg4+')'}" @click="ShowElement3(getterWineBottleBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWineBottleBg5+')'}" @click="ShowElement4(getterWineBottleBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var WineBottle= [
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
            var randomNumber = WineBottle[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  WineBottle[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'WineBottle'){
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
                getterWineBottleBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'WineBottle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWineBottleBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'WineBottle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWineBottleBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'WineBottle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWineBottleBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterWineBottleBg5: {
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
                            name:'WineBottle',
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