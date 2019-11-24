<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M142,90c78-84.2,210.6-84.1,288.9,0.5c4-4.2,10.4-7.9,11.2-12.6c1-5.1-6.6-8.3-10.3-12.4
	c-7.8-8.5-8.1-18.5-0.1-26.7c7.9-8.1,15.9-16.1,24-24c8-7.8,18.2-7.8,26.2,0c8.1,7.9,16,16,24,24c4.4,4.3,6.4,9.4,5.8,15.5
	c-0.4,3.7,1.3,5.6,5,5.2c6.4-0.7,11.6,1.5,16,6c7.8,7.9,15.8,15.7,23.6,23.6c8,8.2,8,18.4-0.1,26.6c-7.8,7.9-15.7,15.8-23.6,23.6
	c-8.2,8.1-18.4,8.1-26.6,0.1c-0.3-0.3-0.5-0.5-0.8-0.8c-3.8-3.5-7.1-10.2-11.3-9.9c-4,0.3-7.5,6.5-11.2,10.2
	c-4.4,4.5-11,8.4-12.5,13.7c-1.3,5,3,11.4,4.6,17.3c12.6,46.1,9,91-10.7,134.5c-1.8,3.9-2.4,7.2-1.3,11.5
	c5.8,23.6-4.1,49.5-24.2,63.7c-3.4,2.4-3.9,3.6-0.7,6.8c17.8,17.4,35.3,35,52.8,52.7c2.7,2.8,4.3,2.9,6.8,0c2.7-3.3,5.9-6.1,9-9.1
	c7.4-7.1,17.6-7.4,25-0.4c8.8,8.5,17.5,17.1,26,26c6.6,7,6.5,17.2-0.2,24.1c-8.5,8.8-17.2,17.4-26,26c-3.8,3.7-8.5,5.3-13.7,4.8
	c-4.7-0.5-6.3,1.3-5.9,6c0.5,5.4-1.3,10.2-5.2,14.1c-8.4,8.4-16.7,16.9-25.2,25.2c-7.4,7.1-17.6,7.2-25,0.1
	c-8.7-8.4-17.2-16.9-25.6-25.6c-6.8-7.1-6.7-17.3,0.1-24.6c3.4-3.7,7-7.2,10.6-10.6c1.8-1.7,1.6-2.7-0.1-4.4
	c-19.1-19-38.1-38-57.1-57c-1-1-2-2.6-3.7-1.4c-8.3,5.7-17.8,4.2-27,4.1c-4.1-0.1-5.9,0.9-5.1,5.1c0.1,0.5,0,1.1,0,1.7
	c0.1,3.5-1,7.8,0.6,10.3c1.6,2.4,6.2,0.6,9.4,1c13.5,1.6,24.1,13,23.4,26.6c-0.7,14.6-3.2,29.1-6.4,43.4
	c-2.5,11.2-13.1,18.9-24.6,18.9c-43.2,0.1-86.5,0.1-129.7,0c-12.8,0-23.3-9.4-25.4-22.2c-1.9-11.5-3.7-23-5.3-34.6
	c-2.6-18.9,9.1-32.3,28.2-32.1c4.1,0,5.3-0.9,5.2-5.1c-0.3-12.8-0.1-12.9-12.9-12.8c-6.4,0.1-12.7-0.2-18.2-3.7
	c-2.1-1.3-3.2-0.7-4.7,0.8c-19,19.1-38,38.1-57.1,57.1c-1.7,1.6-2,2.7-0.1,4.4c3.4,3.1,6.6,6.5,9.8,9.8c7.8,8,7.9,18.3,0.2,26.2
	c-8.1,8.2-16.2,16.4-24.4,24.4c-7.8,7.6-18,7.6-25.8,0c-8.2-8-16.3-16.3-24.4-24.4c-4.2-4.2-6.2-9.1-5.6-15.1
	c0.4-4.3-1.4-6.1-5.8-5.5c-5.5,0.7-10.3-1.1-14.2-5c-8.4-8.4-16.9-16.7-25.2-25.2c-7.3-7.5-7.3-17.8,0.1-25.4
	c8.2-8.4,16.4-16.7,24.8-24.8c7.8-7.5,18-7.3,25.8,0.2c3.2,3.1,6.4,6.2,9.5,9.4c1.8,1.9,2.9,2.5,5.2,0.2
	c18-18.2,36.1-36.3,54.3-54.3c2.2-2.2,2.5-3.1-0.3-5.3c-22.5-17-31-39.3-24.5-67c0.5-2.3,0.2-4.2-0.8-6.3
	c-22.8-49.2-25.5-99.5-7.5-150.7c0.9-2.5,1-4.3-1.2-6.4c-6.8-6.5-13.5-13.3-20.1-20.1c-1.9-1.9-3-2-4.8,0
	c-3.3,3.5-6.7,6.9-10.2,10.2c-7.4,7-17.6,7.2-25,0.1c-8.7-8.3-17.2-16.9-25.6-25.6c-6.9-7.1-6.8-17.4,0.1-24.6
	C23.5,81.6,32,73.3,40.5,65c4.2-4.1,9.3-5.9,15.2-5.4c3.7,0.4,5.5-1.5,5.1-5.2c-0.7-6.4,1.6-11.5,6.1-16
	c7.8-7.7,15.5-15.5,23.2-23.2c8.5-8.4,18.6-8.4,27-0.1c7.9,7.8,15.8,15.7,23.6,23.6c8,8.2,7.9,18.3,0,26.6
	c-3.8,4-11.3,7.9-10.5,11.9C131.1,82.2,137.8,85.9,142,90z"/>
<path style="fill:#03A9F4;transform:scale(0.2)" :class="ValueId+'_color2'" d="M401.5,391.9c1.7,0,3.5,0.5,5-0.1c8.4-3,13.5,1.5,18.9,7.1c17.7,18.2,35.8,36.1,53.8,54
	c9.8,9.8,19.6,9.8,29.5,0c2.5-2.5,5.1-4.9,7.5-7.5c2-2.2,3.3-2.7,5.7-0.3c6.4,6.7,13,13.3,19.7,19.7c2.3,2.2,2.3,3.6,0,5.8
	c-6.5,6.3-12.9,12.8-19.2,19.4c-2.3,2.4-4,3-6,0c-2.5-3.8-4.5-2.7-7.1,0.1c-6,6.3-12.2,12.5-18.6,18.4c-2.5,2.3-3.4,4.1-0.1,6.3
	c3.4,2.3,2.7,4.3-0.1,6.8c-6.4,6-12.5,12.2-18.5,18.5c-2.2,2.3-3.6,3-6.2,0.3c-6.4-6.8-13-13.3-19.7-19.7c-2.1-2-2.2-3.3,0-5.3
	c3.2-2.9,6.1-6,9.1-9c8.3-8.5,8.4-18.6-0.1-27c-19.8-19.9-39.6-39.7-59.5-59.4c-2.2-2.2-3.4-4.2-2.9-7.7c0.7-4.9,0.6-10,0.1-15
	c-0.4-4.7,1.1-6.5,5.7-5.4C399.6,392.1,400.6,391.9,401.5,391.9C401.5,391.9,401.5,391.9,401.5,391.9z M179.4,396.9
	c0.4-3.9-0.4-5.8-5-5.1c-4.4,0.6-8.9,0.5-13.3-0.7c-3.8-1-6.4,0.1-9.3,3c-19.4,19.7-39,39.2-58.6,58.7c-10.1,10.1-19.7,10-29.9-0.1
	c-2.5-2.5-5.1-4.9-7.5-7.5c-1.9-2.1-3.2-2.2-5.3-0.1c-6.4,6.7-12.9,13.3-19.7,19.7c-2.6,2.5-2.2,3.9,0.2,6.2
	c6.4,6.1,12.8,12.4,18.9,18.9c2.6,2.8,4.4,2.7,6.4-0.2c2.1-3.1,3.9-2.6,6.3,0c6.2,6.6,12.6,13.1,19.2,19.3c2.6,2.5,2.5,4-0.2,5.9
	c-3.2,2.3-3,4.2-0.1,6.8c6.4,5.9,12.6,12.1,18.6,18.4c2.4,2.6,4,2.9,6.6,0.1c6.1-6.5,12.4-12.8,18.9-18.9c2.9-2.7,2.3-4.3-0.2-6.5
	c-2.7-2.3-5-4.9-7.5-7.5c-9.5-9.6-9.5-19.2-0.1-28.6c17.3-17.3,34.4-34.9,52-51.8c6.7-6.5,12.5-12.5,9.4-22.7
	C179.4,401.7,179.2,399.3,179.4,396.9z M119.8,119.5c3.1-5.4,10.2-10.4,9.3-15.6c-0.9-5.1-8-9.1-12.4-13.7
	c-7.5-7.8-7.6-18.1-0.1-25.8c3.2-3.4,6.4-6.7,9.8-9.8c1.9-1.8,2.1-3,0.1-4.9c-6.8-6.6-13.5-13.2-20-20.1c-2.3-2.4-3.6-2.1-5.8,0.1
	c-6.2,6.4-12.4,12.8-18.9,18.9c-2.9,2.7-3,4.6,0.1,6.8c2.8,2,2.6,3.5,0.1,5.9C75.4,67.6,68.9,74,62.7,80.6c-2.5,2.6-4.1,2.9-6.4,0
	c-1.4-1.8-2.8-4-5.6-1c-6.6,7-13.4,13.8-20.3,20.6c-2,1.9-1.7,3.2,0.1,5c6.9,6.7,13.7,13.5,20.5,20.4c1.7,1.7,2.8,1.8,4.5,0
	c3-3.2,6.3-6.3,9.4-9.4c8.5-8.3,18.6-8.3,27,0.1c6.2,6.1,12.2,12.4,18.8,19.1C114.1,129.5,116.9,124.5,119.8,119.5z M462.1,134.3
	c6.3-6.2,12.6-12.6,19-18.7c7.7-7.4,18.2-7.3,25.9,0c3.2,3,6.4,6.2,9.4,9.4c1.8,1.9,3.1,2.6,5.3,0.3c6.5-6.8,13.2-13.5,20-20
	c2.5-2.4,1.7-3.7-0.3-5.7C535.2,93.4,529,87.3,523,81c-2.7-2.9-4.8-3.9-7.2-0.1c-2,3.1-3.6,2.3-5.9-0.1c-5.8-6.2-11.8-12.3-18-18.1
	c-3.2-3-4.8-5.4-0.2-8.3c2.2-1.4,2-3,0.1-4.8c-6.9-6.7-13.8-13.5-20.6-20.3c-1.6-1.6-2.8-2-4.5-0.2c-6.9,7-13.8,14-20.8,20.9
	c-1.8,1.7-1.6,2.9,0.1,4.5c3.5,3.3,6.9,6.7,10.2,10.2c7.2,7.6,7.1,17.8-0.1,25.4c-3.8,4-7.8,7.9-11.8,11.8c-1.6,1.6-1.9,2.8-0.5,4.6
	c6.7,8.9,12.3,18.5,17.5,28.2C461.7,134.4,462,134.4,462.1,134.3z"/>
<path style="fill:#FB9601;transform:scale(0.2)" :class="ValueId+'_color3'" d="M197.2,394.1c0-3.2-0.4-6.4,0.1-9.4c0.9-6-1.2-9.6-6.7-12.2c-2.2-1.1-3.9-1.3-6.2-0.6
	c-18.1,5.4-34,1.4-46.7-12.3c-12.4-13.4-15-29.3-8.5-46.5c1.2-3,0.6-5.1-0.8-7.7c-14.3-27.7-21.1-57.1-20.3-88.3
	c2.2-82.1,63-153.6,143.7-169C346,30.1,436.3,87.6,459.2,180.6c10.6,42.9,5.3,84.2-14.7,123.6c-1.8,3.5-2.2,6.4-0.8,10.3
	c5.9,16.6,3.1,32-8.8,45c-12.2,13.2-27.5,17.5-45.1,13c-8.7-2.2-14.5,2-14.5,11.1c0,8.2,0,16.3,0,24.5c-0.1,7.3-3.2,10.6-10.4,10.7
	c-0.2,0-0.4,0-0.6,0c-5-0.1-11.2,1.6-14.6-0.7c-3.3-2.3-0.9-9-1-13.7c-0.1-2.7-0.9-3.3-3.5-3.4c-14.1-0.6-14.2-0.7-14.3,13.6
	c0,3.4-0.9,4.3-4.3,4.3c-13.4,0.1-13.5,0.2-13.5-13.4c0-3.6-0.9-4.7-4.6-4.6c-13.2,0-13.4-0.1-13.2,13c0,3.8-0.8,5-4.8,5
	c-13-0.1-13.2,0-13-12.7c0.1-4-0.7-5.4-5.1-5.3c-12.7,0.2-13,0-12.7,13c0.1,4.4-1.4,5.1-5.3,5c-12.6-0.2-12.8,0-12.5-12.6
	c0.1-4.6-1.4-5.4-5.6-5.3c-12.3,0.2-12.6,0.1-12.2,12.3c0.1,4.7-1.2,6.2-5.8,5.7c-3.7-0.4-7.4,0-11.1-0.1c-6.5-0.2-9.7-3.5-9.9-10.1
	c-0.1-2.4,0-4.8,0-7.2C197.2,399,197.2,396.5,197.2,394.1z M350.8,522.4c2.8-14.5,5.6-29,5.9-43.8c0.1-2.7-0.9-5.1-3.7-6.3
	c-5.5-1.4-4.4,2.5-4.4,5.5c-0.1,12.2-0.1,11.9-11.9,12.3c-4.9,0.2-6.2-1.1-6.1-6c0.4-11.9,0.1-11.7-12-12c-4.6-0.1-5.9,1-5.8,5.7
	c0.3,12.3,0.1,12.1-12.3,12.3c-4.2,0.1-5.7-0.8-5.5-5.4c0.3-12.6,0.1-12.4-12.5-12.6c-4-0.1-5.4,0.7-5.3,5.1
	c0.3,13,0,12.8-12.8,12.9c-3.7,0-5.1-0.7-5-4.8c0.1-13.5-0.1-13.5-13.6-13.1c-0.4,0-0.7,0-1.1,0c-2.6-0.4-3.1,1-3,3.3
	c0.1,3.9,0,7.8,0,11.7c0,1.6-0.1,3-2.3,2.9c-5-0.2-10.7,1.1-14.7-0.9c-2.7-1.3-0.6-7.5-0.9-11.5c-0.1-1.1,0-2.2,0-3.3
	c0-1-0.2-1.6-1.3-2c-7.2-2.8-15.2,2.7-14.2,10.4c1.4,11.8,3.3,23.5,5.2,35.2c0.9,5.4,4.4,7.9,9.8,7.8c6.3,0,12.6,0,18.9,0
	c35.4-0.1,70.9-0.1,106.3-0.2C349.6,524.6,350.6,523.7,350.8,522.4z M359.3,516.8c1.8-11,3.5-21.9,4.8-32.9
	c1-8.5-2.4-11.8-11.1-11.6c1.9,2.7,2.6,5.7,2.3,8.9c-1.6,14.8-3.4,29.6-6.8,44.2C355.2,525.4,358.3,523.3,359.3,516.8z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" :class="ValueId+'_color6'" d="M259.5,445.8c0,8.5,0,8.5-8.7,8.5c-9.1,0-9.1,0-9.1-9.3c0-8.5,0-8.5,8.7-8.5
	C259.5,436.5,259.5,436.5,259.5,445.8z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" :class="ValueId+'_color6'" d="M286.5,436.5c8.7,0,8.7,0,8.7,8.6c0,9.2,0,9.2-9.1,9.2c-8.7,0-8.7,0-8.7-8.6
	C277.4,436.5,277.4,436.5,286.5,436.5z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" :class="ValueId+'_color6'" d="M330.8,445.7c0,8.6,0,8.6-8.6,8.6c-9.2,0-9.2,0-9.2-9.2c0-8.6,0-8.6,8.6-8.6
	C330.8,436.5,330.8,436.5,330.8,445.7z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M206.4,187.1c34.3,0.1,62.1,28.1,62,62.5c0,34.5-28.2,62.3-62.9,62.2c-34.2-0.1-61.9-28.3-61.8-62.8
	C143.9,214.8,172,187.1,206.4,187.1z M366.4,187.2c-34.4,0-62.2,27.9-62.3,62.3c0,34.6,28,62.5,62.7,62.4c34.3-0.1,62-28.1,62-62.5
	C428.7,215,400.7,187.1,366.4,187.2z M260,329.6c-9.9-0.2-18.2,7.7-18.2,17.7c-0.1,9.7,7.7,17.8,17.4,18c9.9,0.2,18.2-7.8,18.2-17.7
	C277.4,337.9,269.6,329.9,260,329.6z M312.4,365.3c9.9,0.3,18.2-7.6,18.4-17.5c0.1-9.7-7.6-17.8-17.2-18.1
	c-10-0.3-18.2,7.6-18.4,17.5C295,356.9,302.7,365,312.4,365.3z"/>
<path style="fill:#AA2300;transform:scale(0.2)" :class="ValueId+'_color5'" d="M237.3,218.3c16.7,14.2,17.8,43.5,2.3,60.6c-23.5,25.8-64.5,17.3-75.8-15.6c-0.8-2.3-1.3-4.6-1.2-7.1
	c-0.7-7.1,2.9-12.9,6.3-18.5c11.9-19.7,37.8-29.7,60-23.5C231.9,215,234.7,216.4,237.3,218.3z"/>
<path style="fill:#6A1600;transform:scale(0.2)" :class="ValueId+'_color4'" d="M237.3,218.3c-11.8-4.1-23.8-6.3-36.2-2.6c-20.5,6.2-33,20-38.5,40.5c-3-11.2,0.3-21.3,6-30.5
	c14-22.5,44.4-27.5,65.4-11.1C235.2,215.6,236.2,217.1,237.3,218.3z"/>
<path style="fill:#AA2300;transform:scale(0.2)" :class="ValueId+'_color5'" d="M397.6,218.3c18.1,15.7,17.7,46.5-0.9,63.7c-24.2,22.5-63.4,11.8-72.9-19.8c-0.5-1.6-0.6-3.2-0.9-4.9
	c-1-8.4,3.2-15.1,7.5-21.5c12-17.9,34.9-26.8,56-22.3C390.5,214.4,394.3,215.7,397.6,218.3z"/>
<path style="fill:#6B1600;transform:scale(0.2)" :class="ValueId+'_color4'" d="M397.6,218.3c-13.1-4.8-26.3-6.5-39.9-1.4c-18.9,7.2-30.5,20.7-34.8,40.4
	c-3.3-13.2,0.9-24.9,8.5-35.3c14.3-19.7,45.5-22.7,63.7-6.6C396.1,216.2,396.8,217.3,397.6,218.3z"/>
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
                                    <button :style="{background:'rgba('+getterSaltDayOfBg1+')'}" @click="ShowElement(getterSaltDayOfBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg2+')'}" @click="ShowElement1(getterSaltDayOfBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg3+')'}" @click="ShowElement2(getterSaltDayOfBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg4+')'}" @click="ShowElement3(getterSaltDayOfBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg5 +')'}" @click="ShowElement4(getterSaltDayOfBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg6+')'}" @click="ShowElement5(getterSaltDayOfBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg7+')'}" @click="ShowElement6(getterSaltDayOfBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg8+')'}" @click="ShowElement7(getterSaltDayOfBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg9+')'}" @click="ShowElement8(getterSaltDayOfBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSaltDayOfBg10+')'}" @click="ShowElement9(getterSaltDayOfBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var SaltDayOf= [
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
            var randomNumber = SaltDayOf[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  SaltDayOf[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'SaltDayOf'){
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
                getterSaltDayOfBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SaltDayOf') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SaltDayOf') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SaltDayOf') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSaltDayOfBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSaltDayOfBg10: {
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
                            name:'SaltDayOf',
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