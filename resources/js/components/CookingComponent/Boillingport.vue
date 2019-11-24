<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(194, 67, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M487,348.5c0,6.8,0,13.7-0.1,20.5c-2.5,0.2-3.1-2.1-4.4-3.5c-5.1-5.9-11.4-8-17.6-5.8
	c-6.6,2.4-10.7,8.1-10.8,15.8c-0.1,6.2-0.1,12.5-0.1,18.7c0,17.1-1.6,20.3,0,39.9c0.3,3.2,0.6,5.7,0.8,7.4c1,4.8,2.5,11.8,4.4,21
	c1.1,5.3,1.9,9.6-0.5,12.4c-0.7,0.8-1.7,1.4-6.2,2.8c-6.9,2.1-10.8,2.6-10.8,2.6c-10.5,1.5-10.6,2.8-24.5,4.9
	c-6.3,1-14.7,2-24.8,2.4c-42.1,0.6-59.4,0.6-61.9,0.2c-0.4-0.1-2.2-0.4-4.6-0.4c-1.8,0-2.4,0.2-3.9,0.2c-1.1,0-2.7-0.1-4.8-0.7
	c-1.7-0.4-4.2-0.9-7.2-1.6c-2.7-0.6-4.4-0.9-6.2-1.2c-4.4-0.9-9.1-1.9-11.6-2.5c-3.7-0.9-9-2.4-15.5-4.9c-2.5-0.7-5.2-1.6-8.1-2.8
	c-3.9-1.6-7.3-3.5-10.1-5.2c-12.2-4.5-23-11.7-33.2-19.6c-23.3-17.8-41.5-39.9-55.2-65.8c-18.5-34.9,4-73.4,38.5-78.9
	c3-0.5,6.1-0.6,9.1-0.6c79.3,0,158.6,0,237.9,0c2.7,0,5.4-0.3,8,0.8c2.3,2.3-0.4,3-1.5,4c-8,6.9-11,18.8-6.9,28.7
	c2.3,5.6,6.6,8.9,12.7,9.6c6,0.7,10.7-2,14.5-6.6c1.3-1.6,1.8-5.3,5.4-2.8C488.7,341.3,489.3,345,487,348.5z"/>
<path :style="{fill:'rgba(178, 22, 45, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M464.3,305.5c-83.5,0-166.9-0.1-250.4,0c-21.6,0-43.7,19.5-48.1,40.8c-3.8,18.2,3.3,33.3,12.1,48.1
	c10,16.7,22.5,31.5,37,44.4c13.4,11.9,28.1,21.9,44.6,29.3c3.8,2,10,5.1,18,7.7c26.9,8.8,45.8,3.9,49.6,12.7c1.1,2.5-3.8,5.7-3,12.2
	c0.1,1.1,0.4,2,0.5,2.5c-12.8,0.9-23.1,1.3-30.5,1.4c-7.2,0.1-12.9,0.1-25.3,0.3c-6.5,0.1-11.3,0.3-15.9,0.4
	c-21.1,0.7-42.2,0.1-63.3,0c-0.3,0-1.7-0.3-3.7-0.5c-1.6-0.1-3-0.1-3.7,0c-1.1,0.1-2.2,0.2-3.3,0.4c-2.1,0-4.2-0.1-6.4-0.1
	c-3.4,0.1-6.8,0.2-10.2,0.2c-2.7,0.2-5.4,0.3-8.1,0.5c-3,0-6-0.1-9.1-0.1c-1.4-0.1-2.8-0.2-4.2-0.2c-1.1,0-2.1,0-3.2,0
	c-1.7-0.1-3.5-0.3-5.2-0.4c-1.6-0.3-3.4-0.6-5.3-0.8c-2.3-0.3-4.4-0.4-6.4-0.5c-15.8-3-26-11.8-29.7-27.8c-0.5-2.2-0.5-4.3-0.5-6.4
	c0-40.3,0-80.7,0-121c-1.6-1.7-1.7-3.9-1.7-6c0-9.5-0.2-18.9,0.1-28.4c-0.3-9.5-0.1-19-0.1-28.5c0-2.2,0.2-4.3,1.7-6.1l-0.1,0.1
	c2.8-2.3,6.1-1.7,9.3-1.7c29.8,0,59.6,0,89.4,0c95.8,0,191.7,0,287.5,0c3.5,0,7.2-0.7,10.4,1.7l-0.1-0.1c1.9,2.2,1.8,5,1.7,7.6
	c-0.4,6.2,1.4,12.5-1.4,18.5C479.6,308,471.9,308.4,464.3,305.5z"/>
<path :style="{fill:'rgba(194, 67, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M323.1,193.4c28.9,4.6,57.8,9.3,86.8,13.9c17,2.7,34.1,5.1,51.1,7.7c2.3,0.4,4.4,1.4,6.6,2.1
	c0.2,3.5-2.4,5-4.8,6.5c-6.6,4-13.7,6-21.5,6c-28-0.1-56,0-83.9,0c-72.8,0-145.6,0-218.4,0c-7.9,0-15.4-1.3-22.3-4.9
	c-3.1-1.6-6.7-3.1-6.7-7.6c8.8-3.7,18.4-3.6,27.7-5.3c16.9-3.1,34-5.5,51-8.2c17.7-2.8,35.5-5.4,53.2-8.1c4.2-0.6,8.4-1.4,12.6-2.2
	c2-1.9,4.6-1.7,7.1-1.7c18.2,0,36.4,0,54.6,0C318.5,191.8,321.1,191.6,323.1,193.4z"/>
<path :style="{fill:'rgba(250, 188, 61, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M487,279.7c-132.2,0-264.4,0-396.5,0c0.1-11.4,0.1-22.9,0.2-34.3c1.7-1.7,3.9-1.8,6-1.8
	c6.2,0.2,12.5-0.7,18.7,0.6c1.3,0.5,1.8,1.6,2.3,2.7c5.4,12.5,8.6,14.6,21.8,13.8c82.3-0.1,164.6-0.1,246.9-0.1
	c6.2,0.3,12.4-0.1,18.6,0.1c11.1-0.1,22.1-0.1,33.2,0c12.9,0.7,16.6-1.6,21.6-13.7c0.5-1.2,1-2.3,2.3-2.9c7-1.4,14-0.6,21-0.6
	c1.4,0,2.7,0.6,3.8,1.6C486.9,256.8,486.9,268.2,487,279.7z"/>
<path :style="{fill:'rgba(178, 22, 45, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M116.3,245.3c-8.6,0-17.1,0-25.7,0c-0.3-12.6,7.7-24.3,19.3-28.1c6,7.7,14.7,10.6,23.7,10.6
	c103.8,0.3,207.6,0.2,311.4,0c8.7,0,16.7-3.4,22.6-10.6c11.6,3.8,19.6,15.5,19.3,28.1c-8.6,0-17.1,0-25.7,0
	c-4.6,2.8-9.8,1.1-14.6,1.5c-2.3,0.2-4.6-0.2-6.9,0c-11.1,0.1-22.2,0.1-33.2,0c-6.2-0.1-12.5,0-18.7,0c-83.1,0.1-166.2,0.1-249.3,0
	c-5.1-0.2-10.2,0.1-15.3,0C120.6,246.8,118.3,246.9,116.3,245.3z"/>
<path :style="{fill:'rgba(194, 67, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M452.2,443.7c0.1-22.3,0.2-44.7,0.2-67c0-9.8,4.8-16.7,13.1-19c7.9-2.2,15.1,1.5,20.2,10.2
	c0.3,0.4,0.7,0.8,1.1,1.2c0,29.5,0,58.9,0,88.4c-3,12.9-18.7,17.1-28.6,9.1C455.5,459.2,451.9,452,452.2,443.7z"/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M245.6,31.9c-0.6,6.6-3.2,13.1-8.4,18.5c-1.4,1.4-2.8,2.7-4.2,4.1c-6.4,6.6-6.4,12.6,0,19.2
	c1.9,1.9,4,3.7,5.7,5.7c10.2,12.1,9.1,29.6-2.5,40.9c-4.2,4.1-8,7.9-8.1,14.5c-0.1,4.3-4.7,7.2-8.9,6.8c-4.5-0.3-7.9-3.8-8-8.6
	c0-7.9,2.9-14.7,8.1-20.5c1.4-1.6,3.1-3,4.6-4.5c6.2-6.4,6.2-12.5,0-18.8c-1.2-1.3-2.6-2.5-3.9-3.8c-11.9-12.1-12-30.5,0-42.5
	c4.3-4.4,8.6-8.3,8.7-15.3c0.1-4.4,5.4-7.2,9.7-6.5C243,22,245.8,25.9,245.6,31.9z"/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M314.6,31.9c-0.6,6.5-3.2,13.1-8.3,18.5c-1.5,1.6-3.1,3-4.6,4.5c-5.9,6.2-6,12.2-0.1,18.5
	c1.1,1.2,2.3,2.2,3.5,3.4c12.7,12.4,12.8,31.3,0.1,43.6c-4.2,4-8.1,7.9-8.1,14.4c-0.1,4.3-4.6,7.2-8.9,6.9c-4.5-0.3-8-3.8-8-8.5
	c-0.1-7.7,2.7-14.4,7.7-20.1c1.1-1.2,2.3-2.3,3.4-3.4c8.3-8,8.3-13.9,0.1-21.9c-1.8-1.8-3.7-3.5-5.2-5.5
	c-9.2-12.2-8.1-28.4,2.7-39.2c4.3-4.4,8.7-8.3,8.8-15.3c0.1-4.4,5.3-7.3,9.6-6.5C311.9,22,314.7,25.8,314.6,31.9z"/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M383.5,31.8c-0.6,6.4-3,12.8-7.9,18.2c-1.1,1.2-2.3,2.3-3.5,3.4c-8.1,8-8.1,13.9,0.3,21.9
	c2.7,2.6,5.3,5.3,7.2,8.6c6.8,12.1,4.8,26.6-5.4,36.5c-4.2,4-7.9,7.9-8.2,14.4c-0.2,4.5-4,7.1-8.8,6.9c-4.5-0.1-8-3.7-8.1-8.5
	c-0.1-7.3,2.5-13.7,7-19.3c0.8-1,1.7-1.9,2.6-2.7c10.7-10.5,10.7-14.5-0.2-25.2c-2.4-2.4-4.5-5.1-6.1-8.2c-6-11.9-3.9-25.5,5.9-35.1
	c4.3-4.2,8.3-8.1,8.4-14.9c0.1-4.4,5.2-7.3,9.6-6.6C380.8,21.9,383.6,25.8,383.5,31.8z"/>
<g>
	<path :style="{fill:'rgba(66, 62, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M73.3,279.9c0,0,0-0.1,0-0.1c-13.4,0-26.8-0.1-40.2-0.2c-9.1-0.1-11.8,2.8-11.4,11.9
		c0,0.1,0.1,0.1,0.1,0.2c0,4.6-0.2,9.3-0.1,13.8c0.1,5.3,3.3,8.5,8.7,8.6c5.7,0.1,11.4,0,17.1,0c2,1.3,4.2,1.7,6.6,1.7
		c10.1,0,20.2,0.1,30.3,0c2.1,0,4.3,0,6-1.6c0-11.5,0.1-23.1,0.1-34.6c-5.7,0.1-11.4,0.1-17.1,0.2C73.4,279.8,73.3,279.9,73.3,279.9
		z"/>
	<path :style="{fill:'rgba(66, 62, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M555.8,291.6c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0.4-9-2.4-12-11.4-12c-13.4,0.1-26.8,0.1-40.2,0.2
		c-5.7-0.1-11.5-0.1-17.2-0.2c-0.1,8.7-0.1,17.3-0.2,26c-1.9,3.1-1.9,6.1,0.4,9c1.4,1,3,1.2,4.6,1.2c11,0.1,21.9,0.1,32.8,0
		c2.1,0,3.9-0.6,5.6-1.7c5.7,0,11.4,0.1,17.1,0c5.4-0.1,8.6-3.2,8.7-8.6C556,300.9,555.9,296.2,555.8,291.6z"/>
	<path :style="{fill:'rgba(66, 62, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M298.2,184.9c-6.1-0.6-12.3-0.5-18.3,0c-10.6,0.9-19.5-1.3-25.5-10.8c0,6.5,0,12.9,0.1,19.3
		c22.9,0,45.8,0,68.7,0c-0.1-6.4-0.1-12.9-0.1-19.3C317.2,183.3,308.7,185.9,298.2,184.9z"/>
</g>
<g>
	<path :style="{fill:'rgba(41, 39, 33, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M304.6,159c-10.6,0-21.2,0-31.8,0c-10.1,0-16.1,5-18.4,15.1c3,8.4,9.2,12.1,17.6,12.2
		c11.1,0.2,22.2,0.2,33.3,0c8.5-0.2,14.7-3.9,17.7-12.2C320.7,164,314.8,159,304.6,159z"/>
	<path :style="{fill:'rgba(41, 39, 33, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M487,314.2c-3,7.5-2.6,15-0.3,22.6c0.1,3.9,0.1,7.8,0.2,11.7c2.9-0.1,5.7-0.1,8.6-0.1
		c1.7-1.7,1.4-3.9,1.5-6c0.5-12.6,6.1-18,18.7-18.2c3.3-0.1,6.8,0.8,9.8-1.5c1.5-2.9,3-5.7,4.5-8.6
		C515.7,314.2,501.3,314.2,487,314.2z"/>
	<path :style="{fill:'rgba(41, 39, 33, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M47.4,314.1c1.3,3,2.5,6,4.6,8.6c3.1,2.4,6.8,1.4,10.3,1.5c11.8,0.2,17.7,5.8,18.1,17.6
		c0.1,2.3-0.3,4.7,1.5,6.6c2.9,0,5.7,0.1,8.6,0.1c0-11.4-0.1-22.9-0.1-34.3C76,314.2,61.7,314.1,47.4,314.1z"/>
</g>
<path :style="{fill:'rgba(194, 67, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M461.3,486.4c-0.7-6.8-1.5-13.6-2.2-20.4c12.7,6.5,20.7,3.1,27.9-8.6c-0.5,6.4,1.3,13-1.1,19.3
	C481.3,486.7,470.8,490.8,461.3,486.4z"/>
<path :style="{fill:'rgba(178, 22, 45, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M459.8,473c5.4,9,14.2,12.7,20.1,10.2c1-0.4,3.9-1.9,5.9-6.4c-2.6,13.6-11.2,21.6-23.9,25.7
	c-1.7,0.5-3.4,0.8-5.2,1.2c-21.2,0-42.4,0-63.6,0c-3.3-7.7-2.6-14.5,0.7-16.7c0.7-0.4,1.9-1,4-0.7
	C418.5,481.8,439.1,477.4,459.8,473z"/>
<path :style="{fill:'rgba(194, 67, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M487,314.2c-0.1,7.5-0.2,15-0.3,22.6c-3.2,3.2-5,7.4-9.4,9.9c-9.2,5.2-22.6-0.7-24.1-10.8
	c-1.4-9.3-3.2-19,5.5-26.3c1.7-1.5,3.7-2.7,5.6-4c7.5,0,14.9,0,22.4,0.1C486.8,308.5,486.9,311.3,487,314.2z"/>
<path :style="{fill:'rgba(178, 22, 45, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M318.9,503.7c1.1-1.8,2.6-4.9,3.1-8.9c0.7-4.8-0.2-8.7-0.9-10.8c11.7,1.3,24.2,2.2,37.6,2.6
	c12.5,0.4,24.3,0.3,35.4-0.2c-2.3,5.7-2.3,11.4-0.9,17.3c-1.4-0.1-4.2-0.3-7.8-0.5c-18.9-1-29.2,0.3-53.8,0.5
	C329,503.7,324.5,503.7,318.9,503.7z"/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M137.9,245.3c47.5-0.1,95-0.1,142.5-0.2c35.8,0,71.7,0.1,107.5,0.1c4.1,1.7,5.7,5,5.5,9.3
	c-0.2,4.2-2.6,6.7-6.6,7.8c-82.9,0-165.9,0-248.8,0C130.3,257.6,130.3,250,137.9,245.3z"/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M406.1,245.3c11.2,0,22.4,0,33.5,0c7.6,4.6,7.5,12.3-0.1,17c-11.5,0-23,0-34.4,0
	c-4.2-1.9-5.9-5.3-5.5-9.8C400,248.7,402.1,246.2,406.1,245.3z"/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M439.5,262.4c6-7.6,6-9.6,0.1-17c7.2,0,14.3,0,21.5,0C461,254.8,453.2,264.1,439.5,262.4z"/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M137.9,245.3c-6,7.4-6,9.4,0.1,17c-13.6,1.7-21.5-7.5-21.6-17C123.5,245.3,130.7,245.3,137.9,245.3z"
	/>
<path :style="{fill:'rgba(250, 171, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M406.1,245.3c-6.9,5.4-7.1,9.3-1,17c-6.1,0-12.2,0-18.3,0c7-5.6,7.2-9.5,1.1-17
	C393.9,245.3,400,245.3,406.1,245.3z"/>
<path :style="{fill:'rgba(194, 67, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M249.7,479"/>
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
                                    <button :style="{background:'rgba('+getterBoillingportBg1+')'}" @click="ShowElement(getterBoillingportBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBoillingportBg2+')'}" @click="ShowElement1(getterBoillingportBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBoillingportBg3+')'}" @click="ShowElement2(getterBoillingportBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBoillingportBg4+')'}" @click="ShowElement3(getterBoillingportBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBoillingportBg5+')'}" @click="ShowElement4(getterBoillingportBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBoillingportBg6+')'}" @click="ShowElement5(getterBoillingportBg6)" :class="this.ValueId+'_color6btn'"></button>
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
        var Boillingport= [
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
            var randomNumber = Boillingport[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Boillingport[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Boillingport'){
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
                getterBoillingportBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Boillingport') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBoillingportBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Boillingport') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBoillingportBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Boillingport') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBoillingportBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBoillingportBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBoillingportBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
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
                            name:'Boillingport',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
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