<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.5);">
                   <path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M246.5,689.4c-2.7,0-5.3,0-8,0c-7.7-2.5-10.6-7.7-8.5-15.3c0.3-1.2,0.8-2.2,1.3-3.3c3.8-9.2,3.8-9.2-5-14.5
	c-18.9-11.3-37.8-22.6-56.6-34c-10.4-6.4-12-13.1-5.4-23.2c2.3-3.6,4.6-7.3,7.2-10.7c2.8-3.7,2.5-5.7-2.4-6.8
	c-6.6-1.4-13-3.1-19.5-4.8c-11.2-3.1-14.8-10.8-9.9-21.4c4.1-8.9,8.9-17.4,13.3-27.2c-7.5,1.8-13.8,4.7-20.2,6.9
	c-19.9,6.9-39.8,13.7-59.5,21.2c-3.1,1.2-6.2,2.6-8.9,4.6C39,577.7,25.6,601,26,631.9c0.2,16,0.1,32,0,48.1c0,3.3,0.6,6.8-2.1,9.5
	c-7.4-0.1-16.8,2.6-21.5-1c-4.5-3.4-1.4-13.4-1.3-20.5c0.3-18.2-1.8-36.5,1.2-54.5c6.4-39.6,28.5-67.5,65.8-81.8
	c32.3-12.4,65.2-23.3,97.8-34.6c4.1-1.4,6.9-3.5,8.7-7.6c3.1-7,6.8-13.7,10.1-20.6c2-4.3,4.3-8.2,9.4-9c2.5-0.4,2.2-1.9,2.3-3.5
	c1.6-16.4,1.6-16.6-14.6-17.8c-24.9-1.9-46.8-9.7-61.9-31c-12.5-17.6-16.3-37.9-18.2-58.8c-0.3-2.9-0.4-5.7-0.4-8.6
	c0.2-8.6-1.3-16.6-4.9-24.8c-6.7-15.4-4-30.5,6-44c2.2-3,3.8-5.9,4.3-9.6c3.2-21.1,9-41.5,17.4-61.1c1.4-3.2,1.8-5-2.2-7
	c-5.5-2.8-7.3-8-5-14C132,138,147.1,96.2,162.3,54.5c3.2-8.7,10.3-10.8,18.5-6c2.8,1.7,5.6,3.4,9.3,5.7c2.1-14.4,4.2-28,6.1-41.5
	c1.7-12,9.4-15.9,19.8-9.7c14.8,8.8,29.6,17.6,44.2,26.6c3.8,2.4,6.5,2.3,10.3-0.1c14.4-9,29-17.6,43.6-26.3
	c10.9-6.5,18.6-3,20.4,9.4c2,13.5,4,26.9,6,40.7c4.1-0.8,6.9-3.6,10.1-5.4c7.5-4.1,14.7-2.1,17.6,5.9
	c15.4,41.9,30.6,83.8,45.7,125.8c2.3,6.3,0.2,11.4-5.8,14.4c-2.8,1.4-3,2.8-1.9,5.4c9,21,15.1,42.7,18.4,65.3
	c0.3,2.4,1.8,3.8,3.1,5.5c11.8,15.9,13.5,32.8,4.4,50.4c-1.7,3.4-2.4,6.6-2.4,10.3c-0.2,18-1.8,35.8-7.3,53.1
	c-10.8,33.5-34.5,50.3-68.6,54.1c-4.8,0.5-9.6,1.2-14.3,1c-4.9-0.3-5.6,1.9-5.2,5.8c0.3,2.6,0.2,5.3,0,7.9c-0.4,4.1-0.1,7.4,5.1,8.1
	c2.2,0.3,3.6,2.3,4.8,4.1c0.6,1,1.3,2.1,1.6,3.2c6.1,21.4,21.1,31.4,42.1,37.2c24.3,6.6,47.8,16.5,71.7,24.8
	c42.8,15,70.2,53.6,70.3,99.1c0,18.4-0.1,36.9,0.1,55.3c0,4.1-1,5.4-5.1,5.1c-6-0.4-12-0.2-17.9-0.3c-2.4-2.6-1.9-5.8-1.9-8.9
	c-0.1-16.8,0-33.5,0-50.3c0-35.3-19.6-64-52.8-76.2c-24.2-8.9-48.7-17.2-74.1-26.3c2.9,7.4,6.6,13.6,9.6,20.1
	c1.3,2.8,2.9,5.5,4.1,8.4c4,9.6,0.6,17.2-9.3,20.1c-6.4,1.9-13,3.3-19.5,5c-6.7,1.7-6.7,1.8-2.8,7.8c2.6,4,5.5,7.9,7.9,12
	c4.5,7.8,3,15.1-4.7,19.8c-36.2,21.9-72.6,43.7-108.9,65.4C252,687.9,249.2,688.6,246.5,689.4z"/>
<path style="fill:#8FC9F8;transform:scale(0.2)" :class="ValueId+'_color5'" d="M64.6,558.8c-2.1,8.6-8.8,14.9-11.4,23.3C49.8,592.6,47,603,47,614.2c0.1,25.1,0.1,50.2,0.1,75.3
	c-7.7,0-15.5,0-23.2,0c0-21.1-0.6-42.1,0.3-63.2C25.4,596.7,38.7,573.9,64.6,558.8z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M93,689.4c0-9.8,0.1-19.6-0.1-29.4c-0.1-3.7,0.9-4.8,4.7-4.9c18.3-0.5,18.3-0.7,18.3,17.9c0,5.5,0,11,0,16.5
	C108.3,689.4,100.7,689.4,93,689.4z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M414.9,689.4c0-9.8,0.1-19.6-0.1-29.4c-0.1-3.7,0.9-4.8,4.7-4.9c18.3-0.5,18.3-0.7,18.3,17.9c0,5.5,0,11,0,16.5
	C430.2,689.4,422.6,689.4,414.9,689.4z"/>
<path :style="{fill:'rgba(66, 164, 244, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M246.5,689.4c37.4-22.5,74.9-45.1,112.3-67.6c12.1-7.3,13-11.7,5.1-23.6c-3.4-5.2-6.9-10.3-10.8-16.2
	c9.5-2.4,18.4-4.7,27.3-7.1c11-2.9,14-9.1,9.1-19.1s-9.9-20-15.6-31.4c11.5,4.1,21.5,7.6,31.5,11.1c16.4,5.8,33,11.3,49.3,17.5
	c31.6,11.9,52,41.6,52.1,75.3c0,20.3,0,40.7,0,61c-23,0-46,0-69,0c-3-3.5-1.9-7.7-2.1-11.7c-0.1-3.1,0-6.2,0-9.3
	c0-10.7-4.1-13.6-14.7-10.9c-3.4,0.9-3.8,3.2-3.9,5.9c-0.2,5.7,0,11.5-0.1,17.2c-0.1,3.1,0.3,6.3-2.1,8.8
	C358.8,689.4,302.6,689.4,246.5,689.4z M64.6,558.8c4.1-3.5,9.2-5,14.1-6.7c24-8.6,48.1-17,72.2-25.5c1.5-0.5,3.1-1,5.9-1.9
	c-5.5,11.2-10.5,21.1-15.4,31c-5,10.1-2.1,16.3,8.9,19.2c9,2.3,17.9,4.6,27.4,7.1c-4.4,6.6-8.4,12.5-12.3,18.5
	c-5.8,8.9-4.5,14.5,4.7,20.1c20.2,12.2,40.4,24.6,60.9,36.4c5.3,3.1,6.2,5.5,3.4,11c-5.8,11.7-4.8,15,3.9,21.4
	c-40.8,0-81.6,0-122.5,0c-3-3.5-1.9-7.7-2.1-11.7c-0.1-3.1,0-6.2,0-9.3c0-10.7-4.1-13.6-14.7-10.9c-3.4,0.9-3.8,3.2-3.9,5.9
	c-0.2,5.7,0,11.5-0.1,17.2c-0.1,3.1,0.3,6.3-2.1,8.8c-15.3,0-30.6,0-45.9,0c-2.5-2.5-2.2-5.7-2.2-8.7c0-23.1-0.6-46.2,0.1-69.3
	C45.7,591.9,51.6,573.9,64.6,558.8z M351.4,74.7c8.3,22.7,16.4,44.9,24.5,67.1c3.8,10.3,7.4,20.7,11.3,30.9c1.5,3.8,0.5,5.3-3.1,6.8
	c-38.2,15.8-76.3,31.7-114.4,47.7c-3.2,1.3-5.8,1.2-8.8-0.1c-37.9-15.9-75.8-31.7-113.7-47.4c-3.1-1.3-5.4-2.1-3.7-6.5
	c11.8-31.8,23.3-63.7,34.9-95.5c0.3-0.9,1-1.6,1.6-2.6c25,15.7,50.1,31,74.8,47c7.8,5,13.9,4.8,21.6-0.1
	C301,105.9,326,90.6,351.4,74.7z M267.8,649.6c22.8-51.3,44.8-100.8,67.3-151.4c6.5,12.9,12.5,24.9,18.5,36.9
	c2.8,5.6,5.4,11.2,8.4,16.6c1.6,3,1,4-2.2,4.7c-8.4,1.9-16.7,4.2-25,6.4c-12.4,3.2-15,10.3-8,21.1c3.8,5.8,7.5,11.7,11.6,17.3
	c2.5,3.4,1.7,5-1.7,7.1C314.3,621.6,292,635.1,267.8,649.6z M195.9,498.2c15.9,35.7,31.2,70.1,46.5,104.5c2.2,5,4,10.3,6.8,15
	c4,6.6,2.7,12.4-0.6,18.6c-1.6,3.1-2.9,2.9-5.4,1.4c-16.5-10-33.1-20-49.7-29.9c-3.1-1.8-3.3-3.3-1.3-6.1
	c4.4-6.2,8.6-12.6,12.7-19.1c5.9-9.2,3-16.8-7.5-19.5c-8.5-2.2-17.1-4.4-25.7-6.5c-2.9-0.7-4.7-1.2-2.8-5
	C178,534.3,186.6,516.7,195.9,498.2z M216.9,30.3c13.6,8.2,26.6,15.6,39.3,23.7c6.5,4.1,12,4.1,18.5,0c12.6-8,25.7-15.5,39.2-23.6
	c1.7,11.7,3.1,22.5,4.8,33.2c0.6,3.5-0.9,5.2-3.6,6.8c-15.2,9.4-30.4,18.9-45.5,28.5c-3.1,1.9-5.4,1.9-8.4,0
	c-15.1-9.6-30.3-19.1-45.6-28.4c-3.2-1.9-4-4.2-3.4-7.6C213.8,52.4,215.2,42,216.9,30.3z"/>
<path :style="{fill:'rgba(66, 33, 11, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M206,229c-17.9,6.9-35.8,10-53.9,12.2c-6.1,0.7-10.7,2.4-12.7,8.4c-1,3-2.7,3.8-5.3,3.1
	c-3.7-1-1.1-3.6-0.8-5.2c2.1-13.5,7.4-26,12.1-38.7c1.2-3.2,3.1-3.5,6.1-2.2C169.6,214.1,187.8,221.5,206,229z M179.8,414.1
	c-19.1-1.4-35.2-7.7-44.5-25.2c-6.8-12.6-8.8-26.5-10.6-40.4c-0.6-5.1,1.4-5.2,5.9-5.1c8.8,0.3,12,5,14.2,12.8
	c6.1,21.2,17.3,39.6,32.9,55.2C178.4,412.3,179,413.2,179.8,414.1z M351.4,414.6c10.6-11,19.2-23.2,26-36.6
	c4.5-8.7,8.1-17.7,10.4-27.3c0.5-2.1,0.3-5.2,3.3-5.8c4.7-0.9,9.4-1.6,14.1-1.8c1.3-0.1,1,2.4,0.9,3.8c-1.6,17.4-4.1,34.9-15.2,49.1
	C381.3,408.5,367.3,413.7,351.4,414.6z M398.1,249.3c0.8,2.2,0.3,3.3-1.6,3.4c-1.9,0.1-4,0.4-4.6-2.2c-1.3-5.5-5.8-7.6-10.3-10.2
	c-9.1-5.3-17.8-11-25.6-18.3c-3.2-3-3.3-4.9,1-6.5c7.5-3,15.1-6,22.5-9.2c2.6-1.1,4.5-1.2,5.8,1.8
	C390.8,221.7,395.3,235.5,398.1,249.3z"/>
<path :style="{fill:'rgba(249, 219, 179, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M168.8,262.7c23.4-4.6,46.7-9.5,69-18.3c3.6-1.4,6.8,0.3,9.5,2c12.2,7.4,23.7,6.8,36.3,0.2
	s26.4-11.1,39.5-16.8c4.1-1.8,6.8-1.6,9.9,1.8c9.1,9.9,19.6,18.3,31.2,25.1c3.9,2.3,4.9,4.9,4.9,9.2c-0.2,16.7-0.7,33.5,0,50.3
	c1.2,28.6-9.2,52.9-27.2,74.2c-18.4,21.7-40.1,38.9-68.6,45.7c-7.1,1.7-14.2,1.3-20.9-1.8c-8.9-4.9-18.5-8.6-26.8-14.8
	c-35-26-52.7-60.8-53.9-104.2c-0.4-13.8-0.1-27.7,0-41.6C171.6,269.5,171.1,265.9,168.8,262.7z M230.9,451.4
	c26.9,12.4,52.9,9.5,78.1-5c0.6-0.3,1.2-0.4,2.4-0.8c0.1,12.7-1,25.2,4.2,36.9c0.5,1.1-0.1,2.8-0.6,4.1
	c-16.2,36.6-32.5,73.2-49.6,111.6c-15.1-34.2-29.6-66.9-44.1-99.6c5.9-9.9,8.1-20.5,7.7-32C228.9,461.5,227.4,456.1,230.9,451.4z
	 M168.8,262.7c4.3-0.1,4.8,2.5,4.8,6.1c-0.1,15-0.5,30.1,0,45.1c1.8,54.5,27,93.8,76.7,117.1c1.3,0.6,3.7,0.5,2,3.1
	c-14.9-3.6-27.4-11.7-39.2-21c-23.3-18.2-41.2-40.4-48.7-69.7c-1.6-6.3-2.4-12.6-2.4-19.1c0.1-18.2,0.2-36.3-0.1-54.5
	C161.8,264.3,163.1,261.8,168.8,262.7z M139,299.2c0,6.2-0.2,12.4,0.1,18.6c0.2,3.9-1.4,4.3-4.6,3.7c-10.4-2.1-18.3-11.8-18.4-22.6
	c-0.1-10.7,8-20.5,18.4-22.6c3.2-0.7,4.8-0.3,4.7,3.6C138.8,286.3,139,292.7,139,299.2z M391.9,298.8c0-6.5,0.2-12.9-0.1-19.4
	c-0.1-3.5,1.4-3.9,4.3-3.4c10.3,1.8,18.6,11.6,18.8,22.3c0.1,11.1-8.2,21.2-18.7,23.1c-3.8,0.7-4.4-0.7-4.3-4.1
	C392.1,311.3,391.9,305,391.9,298.8z M230.9,451.4c-0.5,11.3,1.7,22.7-1.7,33.8c-1.5,4.9-1.9,10.9-7.9,13.3
	c-4.5-8-7.6-15.7-3.5-25.4c3.5-8.4,1.1-17.9,1.8-27.8C223.7,447.5,227.3,449.5,230.9,451.4z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M266.4,402.3c-14.6,0.2-27.1-3.8-38.7-11.2c-3-1.9-3.9-3.5-1.2-6.5c3.7-4.1,6.2-9.8,10.6-12.4c4.8-2.8,8.9,3.3,13.8,4.8
	c13.4,4,26,2.7,37.9-4.2c3.1-1.8,4.9-2.1,6.9,1.2c1.4,2.2,3.3,4.1,4.9,6.2c7.2,9,7.3,9.1-3.4,14.6
	C287.3,399.8,276.8,402.6,266.4,402.3z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M231,299.2c-0.2,12.5-10.5,22.6-23,22.6c-12.8,0-23.1-10.6-23-23.4c0.2-12.5,10.5-22.6,23-22.6
	C220.8,275.9,231.1,286.4,231,299.2z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M345.9,299.1c-0.1,12.5-10.4,22.7-22.9,22.7c-12.8,0-23.2-10.5-23.1-23.3c0.1-12.5,10.4-22.7,22.9-22.7
	C335.7,275.8,346,286.3,345.9,299.1z"/>
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
                                    <button :style="{background:'rgba('+getterFlightAttendantBg1+')'}" @click="ShowElement(getterFlightAttendantBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFlightAttendantBg2+')'}" @click="ShowElement1(getterFlightAttendantBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFlightAttendantBg3+')'}" @click="ShowElement2(getterFlightAttendantBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFlightAttendantBg4+')'}" @click="ShowElement3(getterFlightAttendantBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFlightAttendantBg5+')'}" @click="ShowElement4(getterFlightAttendantBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var FlightAttendant= [
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
            var randomNumber = FlightAttendant[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  FlightAttendant[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'FlightAttendant'){
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
                getterFlightAttendantBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FlightAttendant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlightAttendantBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FlightAttendant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlightAttendantBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FlightAttendant') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFlightAttendantBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterFlightAttendantBg5: {
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
                            name:'FlightAttendant',
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