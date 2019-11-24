<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(253, 214, 1, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M118,174.5c7.5,2,15.2,1.6,22.9,2.1c21.6,1.4,43.2,0.7,64.6-3.4c8.9-2,18-3.2,26.8-5.8
	c5.7-1.1,11.1-3.6,16.6-5.3c7.2-3.5,14.7-6.4,21.4-10.9c1-1.1,2.6-2.2,0.8-3.9c-2.6-1-5.1,0.1-7.5,0.7c-5.2,1.1-10.3,2.9-15.7,2.9
	c-17.1,2.4-34.3,3.8-51.7,3.7c-10.6-0.1-21.2-1.2-31.8-1.3c-12.5-0.9-24.7-3.2-36.8-6.3c-14.1-3.5-27.8-8-39.9-16.2
	c-10.9-7.4-19.6-16.3-17.5-31.1c0.3-2.1-0.2-4.3-0.2-5.8c2.9,5.1,6.9,9.8,12.2,13.5c13.9,9.5,29.3,15.5,45.5,19.6
	c12.9,3.6,26.2,4.5,39.3,7c4.3,0.8,8.6,0.4,12.9,0.8c23.9,2.2,47.5,0,71-4.1c8.8-1.9,17.7-3.9,26.4-6.2c5.8-1.7,11.3-4.1,17-6.2
	c6.9-3.5,13.8-7,19.9-11.8c6.3-5.4,13.2-10.5,13.1-20.1c1.1-11.6-5.1-19.5-13.4-26.2c-10-8-21.6-13.1-33.8-16.7
	c-47.9-14.4-96.4-15.2-145.2-5.1c-19,3.8-37.3,9.6-52.9,21.5c-8.2,6.2-14.3,13.8-13.7,24.8c0.2,3.4-2.1,3.9-4.2,4.7
	c-7.7,3.1-15.1,6.8-21.8,11.9c-9.4,7.3-15.8,16.1-13.9,28.8c1.3,7.6,5.8,12.9,11.8,17.6c12.9,10,27.6,15.6,43,19.8
	C94.6,170.8,106.4,172.6,118,174.5z M314.7,268.5c-6.1,5.2-12.9,9.3-20.4,12.3c-5.7,2.3-11.5,4.5-17.5,6.4
	c-9.1,2.9-18.4,5.2-27.9,6.3c-17,2.4-34.1,3.8-51.3,3.6c-11.8-0.1-23.6-1-35.5-1.2c-11.7-1.3-23.2-3.2-34.6-6.3
	c-18.5-5-36.6-10.8-50.5-25.1c-1.2-1.2-2.5-2.7-4.6-1.4c-4.4,5.7-4.7,12.2-3.9,19c1.1,6.6,5,11.3,10,15.4
	c13.9,11.4,30.2,17.6,47.4,22c11.5,3.2,23.3,4.6,35,6.8c18.7,2.5,37.4,1.9,56.1,1.3c10.4-0.3,20.9-0.7,31.1-3.6
	c9.2-1.9,18.4-3.9,27.6-6.1c13.3-4.4,26.3-9.6,37.8-17.7c7.4-5.3,13.3-11.7,13.6-21.6c0.3-6-0.8-11.6-3.7-16.9
	C318.7,261.7,318,266.8,314.7,268.5z M319.6,224c-18.1,11.4-37.9,17.7-58.9,20.9c-28.8,4.4-57.6,6.3-86.6,2.4
	c-7.6,0.5-15-1.1-22.3-2.6c-20.7-4.1-40.8-9.6-58.3-22.2c-5.1-3-8.2-7.8-11.4-12.5c-1-1.5-1.3-3.9-3.9-3.8
	c-8.5,6.7-11.1,15.6-9.6,26c1.8,7.8,7,12.9,13.1,17.5c13.7,10.1,29.4,15.7,45.7,19.9c12.5,3.3,25.4,4.7,38.2,6.8
	c4.9,0.9,9.8,0.4,14.7,0.8c23.7,2.1,47.2,0.3,70.5-4c8.9-1.8,17.6-4.1,26.4-6.3c5.8-1.7,11.3-4,16.9-6.3c6.6-3.4,13.3-6.6,19.4-11
	c6.5-5.2,13-10.5,13.5-19.7c0.4-2.8,0.6-5.7-0.7-8.4C323.4,220.4,321.7,222.7,319.6,224z M323.9,155.2c-1.3,1.1-1.7,2.7-1.6,4.3
	c1,10.1-4.9,16.7-11.9,22.5c-4.6,3.8-9.7,6.8-15.1,9.3c-25.6,11.7-52.9,14.3-80.4,14c-11.5-0.1-23.2-0.4-34.8-1.7
	c-19-2.2-38-3.6-56.7-7.9c-2.3-0.5-4.6-0.6-6.9-0.7c-9.6-2.2-19.4-3.5-29-5.7c-1.7-0.4-3.5-0.9-5,0.8c-0.9,2.6,1,4.1,2.4,5.6
	c2.5,2.8,5.4,5.3,8.5,7.4c8.3,5.5,17.1,9.8,26.4,13.2c17.6,6.5,36,9,54.4,11.9c28.5,2.5,57,2.6,85.3-2.5c3.4-1,6.9-1.8,10.4-2.5
	c20.1-4.1,39.3-10.2,55.7-23.3c5.6-4.5,10.5-9.6,11.2-17.3C338.3,170.6,333.1,162,323.9,155.2z"/>
<path :style="{fill:'rgba(217, 131, 10, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M203.2,326.2c-14.4-0.1-28.8,0-43.2-1.3c-3,7.5-3,14.9,0,22.4c7.7,0.7,15.3,1.6,23,2
	c22.2,1.2,44.2,0.1,66.1-4.1c2.9-7.5,3-15.1,0-22.6C233.9,324.8,218.6,326.2,203.2,326.2z M77.5,189.3c2.1,4.8,0.6,11.2,0.7,17
	c1,1.7,1.8,3.5,3,5c3.3,4.2,5.3,9.8,11.1,11.6c1.5,0.1,2.3-0.9,2.4-2c0.8-6.5,2-13.1-1.2-19.4c-3.8-3.3-7.8-6.5-10.7-10.7
	c3.3-8.3,3.2-16.6,0-24.9c-2.8-0.8-5.7-1.5-8.5-2.5c-18.4-6.8-36.8-13.7-45.9-33.2c-0.1,4.5,0.1,9.1-0.3,13.6
	c-0.8,10.7,4.2,18.5,11.8,25.2c6.7,6,15.1,9.2,22.8,13.4C67.6,185,75.3,184.1,77.5,189.3z M107.1,261.6
	c-15.6-6.1-30.1-13.8-38.5-29.4c-0.8,10.6-1.1,21.1,3.9,31c2,0.2,2.9,1.8,4.2,3c13.9,13.8,31.4,20.3,50.1,24.3
	c3.4-7.5,4.8-15,0-22.5C120.2,265.9,113.5,264.1,107.1,261.6z M103.2,310.5c-14.2-6.1-27.5-13.6-34.7-28.3c-0.1,3.9,0,7.9-0.3,11.8
	c-1,10.6,3.2,18.9,11,25.6c13.1,11.1,28.5,17.2,45.1,20.9c0.6,0.1,1.4,0.2,1.5-0.3c1.3-7.4,6.4-14.9-0.3-22.2
	C117.8,316.3,110.4,313.6,103.2,310.5z M327.4,291.7c-0.4-4.3-0.2-8.7-0.2-13c-2.5,9.9-8.7,16.8-17.1,22.3
	c-10.5,6.9-22.2,10.9-33.7,15.6c-2.8,1.7-5.5,3.8-3.8,7.5c1.6,3.3,2,6.6,2.3,10.1c0.2,2.2,0.2,5.1,4,3.9c12.4-3,23.7-8.3,33.9-15.9
	C323,314.6,328.6,304.9,327.4,291.7z M315.2,126.5c8.1-5.8,12.2-13.6,12.1-23.6c-0.1-5.5-0.1-11-0.2-16.6c-1.8,8.4-7.6,13.9-13.9,19
	c0.3,2.3,2,4.5,0.9,6.8C311.7,117.2,313.6,121.8,315.2,126.5z M315.6,269.1c2.6-2.4,5.2-4.8,7.9-7.3c5.1-10.2,3.9-21.1,3.6-31.9
	c-2.4,8-8.3,13.4-13.9,18.9c-0.9,3.4-1.3,6.9-1.5,10.4C311.5,262.8,311.1,267.2,315.6,269.1z M153.5,86.3c2.7-0.3,5.5-0.1,8.3-0.1
	c5.5,0.1,6.9,2.6,4,7.3c-2.8,4.5-7,7.5-11.9,9.4c-4.8,1.8-7,3.8-1.9,8.2c2.8,2.5,3.9,7.2,9.2,5.4c15.4-5.3,30.8-2.5,46.1,0
	c12.6,2.1,25,1,37.5-1c1.1-0.2,3.5,0.1,3.3-2.3c-0.4-4.1-9.6-10.4-13.7-9.7c-6.8,1.3-13.7,2.7-20.5,1.4c-10.3-1.9-20.7-2.4-32.6-2.2
	c3.6-3.8,8.8-4.6,9.6-8.6c1.6-8.6,7.3-8.7,13.9-8.1c2.7,0.2,5.5-0.1,8.3,0c2.6,0.1,3.9-0.7,4.1-3.6c0.6-7.4-1.4-9.4-8.8-7.9
	c-5.7,1.1-11.3,1-17,0c-5.9-1.1-6.4-5.9-7.4-10.1c-1.1-4.5,2.1-7,5.7-8.5c7.7-3.2,15.4-2.5,23.1,0.2c1.7,0.6,3.4,1.7,4,3.4
	c1.4,4.1,4.6,4.5,8.1,4c5.3-0.9,10.5-1.4,15.9-1.2c3.4,0.2,3.6-1.3,2.3-3.9c-2.3-4.9-6.3-8-11-10.3c-8-3.8-16.6-4.2-25.3-5.1
	c-12.8-1.3-24.6,1.1-36.3,5.4c-8.4,3-13.2,11.9-11.4,19.8c1.6,7,1.6,7.3-5.7,7.1c-4.4-0.1-5.2,1.7-5.3,5.6
	C147.9,85.2,149.4,86.7,153.5,86.3z M206.3,194.3c2.9-7.5,3-15,0-22.5c-16.7,2.1-33.5,3.8-50.4,3.6c-13-0.2-25.8-1.4-38.7-2.4
	c-3,7.8-2.4,15.7-1.2,23.7c2.4,0,4.7,0.1,7.1,0.1c18.4,1.6,36.9,1.4,55.3,1C187.8,197.6,197.1,196.3,206.3,194.3z M166,132.5
	c-3.8-1.4-5.7,0.5-6.2,3.9c-0.7,4.7-0.5,9.4-0.1,14.1c0.2,2.5,1.7,3.8,3.9,4.5c6.7-0.7,13.2,1.2,19.9,1.3c22,0.4,43.9-0.3,65.6-3.7
	c5.1-7.5,3.3-15.6,2.4-23.7c-18.6,2.9-37.3,4.9-56.1,4.7C185.5,133.6,175.8,132.9,166,132.5z M77.8,124.7
	c13.8,13.1,30.9,19.2,49,23.3c3.5-7.5,5.5-15,0-22.5c-1.3-0.4-2.6-0.9-3.9-1.3c-20.6-6.8-41.4-13.2-54.3-34.5c0,5,0.3,8.8-0.1,12.4
	C67.6,111.4,71.2,118.5,77.8,124.7z M286.6,149.7c0.5-5.9,2.7-8.4,7.5-10c1.9-7.5,1.9-15.1,0-22.6c-5.5,2-11.1,4-16.6,6
	c-2.8,3.7-1.7,8-1.6,12c0.1,4.9-0.5,9.4-4.4,12.9c-0.8,0.8-1.6,1.6-2.3,2.4c-2.7,7.5-3.1,15,0,22.5
	C278.1,167.4,285.7,160.4,286.6,149.7z M249,161c-5.5,1.6-11,3.2-16.6,4.9c0,7.5,0,15,0,22.5c6.2-1.1,12.5-2.2,17.8-5.9
	C249.5,175.3,251.8,168,249,161z M209.5,276.2c-14.9,1-29.8-1.2-44.7-1.2c-2.8-1.1-4.5,0.6-4.7,2.9c-0.7,6.6-2.3,13.3,1.2,19.7
	c7.1,0.4,14.1,1.1,21.2,1.2c22.7,0.5,45.3,0.2,67.8-3.6c2.8-7.8,2.8-15.7,1.2-23.7C237.6,274.3,223.5,275.3,209.5,276.2z
	 M294.2,259.6c-5.5,2-11.1,4-16.6,6c0,7.5,0,15,0,22.5c6.3-1,11.8-4.1,17.8-6C294.8,274.6,296.7,267,294.2,259.6z M260.9,224
	c-29.2,4.2-58.5,4.6-87.8,2.4c-3,7.5-3,15,0,22.5c11.1,1.2,22.2,2.5,33.4,2.5c18.7-0.1,37.2-2,55.6-4.8
	C261.5,239,263.5,231.4,260.9,224z"/>
<path :style="{fill:'rgba(229, 178, 1, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M323.9,155.2c2.6,22.7-14,31-30.3,38.5c-19.5,8.9-40.5,11.4-61.9,12.9c-14.1,1-27.9-0.5-41.8-0.7
	c-15.6-0.3-31.2-2.6-46.8-5c-6.7-1.1-13.5-1.6-20-4.1c2-2.1,4.7-1.8,7.2-1.6c25,1.7,49.9,1.9,74.7-2.2c9.2-0.4,18-2.8,26.7-5.4
	c6.1-1.7,12.2-3.1,18-5.8c6.8-2.4,13.2-5.6,19-9.9c9.3-6.6,16.6-14.3,17.1-26.6c0.2-4.8,4.5-5.3,8.1-6.2c1.4-0.1,2,1.3,3,1.8
	C306.8,143.9,316,148.3,323.9,155.2z M260.9,224c7.4-3,15.4-3.9,23.1-5.9c15-3.9,28.7-10.3,41-19.8c5.3-4.1,9.2-9.6,11.8-15.8
	c0.1,6.5,0.3,12.9,0.1,19.4c-0.3,8.2-6.1,13.7-10.5,19.8c-16.5,11.7-35,18.5-54.5,23c-3.2,0.7-6.5,1.2-9.8,1.9
	C258.9,239.1,260.4,231.5,260.9,224z M124.3,340.4c2.5-4.4,0.5-9.9,3.7-14.4c0.9-1.3-3.4-4.7-2.5-8.1c10.8,2.3,21.5,5,32.5,6
	c0.7,0.1,1.3,0.7,2,1c0,7.5,0,14.9,0,22.4C147.8,346.4,135.9,344.6,124.3,340.4z M276.4,316.6c-2.1,3.1-5.1,5.9-0.5,9.8
	c1.2,1,0.4,4.4,0.5,6.7c0.1,2-0.6,4.5,2.5,5c-9.6,3.9-19.5,6.4-29.8,7.1c0-7.5,0-15.1,0-22.6C258.2,320.6,267.3,318.6,276.4,316.6z
	 M296.9,140.7c-0.9-0.3-1.8-0.7-2.8-1c-0.9-7.5-0.9-15.1,0-22.6c6.2-4.2,13.2-7,19.1-11.7c1.8,1.2,2.8,3.2,2.3,5
	c-1.5,5.4-0.1,10.8-0.3,16.1c-4.1,5.2-10.2,7.5-15.5,10.8C298.5,138.1,295.7,137.9,296.9,140.7z M126.8,148c0.1-3.5-0.5-7,1.9-10.2
	c1.2-1.6,0.9-3.9-0.5-5.5c-1.7-2.1-1.2-4.5-1.4-6.8c13.1,2.3,26.1,4.7,39.2,7c-1.6,0.1-3.2,0-4.2,1.6c-1.7,2.6-0.4,18.2,1.8,20.9
	C151.1,153.5,138.6,152.4,126.8,148z M117.2,172.9c-0.2,7.9,0.7,15.8-1.2,23.7c-11.1-2.1-22-5.3-33.3-5.9c0.9-8.3,0.1-16.6,0-24.9
	C94.3,168.2,105.8,170.6,117.2,172.9z M277.6,123.1c0,5.8-0.2,11.6,0.1,17.4c0.2,4.6-1.6,6.9-6,7.5c-7.5,1.6-15,3.1-22.5,4.7
	c1.6-2.5,1.3-5.3,1.1-8c-0.4-5.3,0.7-10.5,1.2-15.7C260.1,127,268.9,125.1,277.6,123.1z M206.3,194.3c0-7.5,0-15,0-22.5
	c8.7-2,17.4-3.9,26.1-5.9c2.9,7.5,2.9,15,0,22.5C224.1,192,215.4,194,206.3,194.3z M269.3,150.4c0,7.5,0,15,0,22.5
	c-5.7,4.4-11.8,8-19,9.5c-3.4-7-1.7-14.3-1.3-21.5C255.8,157.5,262.5,153.9,269.3,150.4z M164.8,275c-3.1,0.3-3.6,2.4-3.6,5
	c0.1,5.9,0,11.7,0,17.6c-11.6-1.9-23.4-2.5-34.5-7c0-3.7,0.2-7.2,1.6-10.9c1.5-3.8-3-7.4-1.6-11.7
	C139.4,270.3,152.1,272.7,164.8,275z M250.2,295.2c0-7.9-0.3-15.8,1.2-23.7c8.7-2,17.4-4,26.2-5.9c3,7.5,2.9,15,0,22.5
	C268.9,292.2,259.4,293.2,250.2,295.2z M313.2,248.9c1.1,2,1.8,4.2,0.9,6.3c-2.3,5-0.6,9.5,1.5,14c-5.5,6.2-13.1,9.3-20.2,13
	c-3.1-7.4-1.8-15-1.2-22.5C300.5,256,306.8,252.5,313.2,248.9z M173.1,226.4c0,7.5,0,15,0,22.5c-14.8-0.3-29-3.9-43.1-7.8
	c-11.8-3.3-22.9-8-33.4-14.4c-1.7-1-3.3-2.1-4.3-3.9c2.7-7,0.5-14.3,1.2-21.4c21.6,14,46,19.6,70.9,23.7
	C167.3,225.6,170.4,224.6,173.1,226.4z"/>
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
                                    <button :style="{background:'rgba('+getterBritishPoundsBg1+')'}" @click="ShowElement(getterBritishPoundsBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBritishPoundsBg2+')'}" @click="ShowElement1(getterBritishPoundsBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBritishPoundsBg3+')'}" @click="ShowElement2(getterBritishPoundsBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBritishPoundsBg4+')'}" @click="ShowElement3(getterBritishPoundsBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBritishPoundsBg5+')'}" @click="ShowElement4(getterBritishPoundsBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var BritishPounds= [
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
            var randomNumber = BritishPounds[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BritishPounds[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BritishPounds'){
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
                getterBritishPoundsBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BritishPounds') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBritishPoundsBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BritishPounds') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBritishPoundsBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BritishPounds') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBritishPoundsBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBritishPoundsBg5: {
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
                            name:'BritishPounds',
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