<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M197.9,472.4c-9,7.2-17.5,14.2-26.2,20.9c-2.5,1.9-3.1,4.3-3.8,6.9c-5.5,21.8-10.9,43.6-16.4,65.4c-1.8,7-4.4,9.1-11.5,9.1
    c-11.4,0-22.7,0.1-34.1,0c-8,0-11.8-4.4-10.8-12.4c3-24.1,6.1-48.2,9.1-72.2c0.4-3.1,1.8-5.5,3.7-7.8c10.5-13.1,21-26.3,31.6-39.4
    c1.7-2.1,2.5-4.1,2.5-6.9c-0.2-8.8-0.1-17.6,0-26.5c0-2.2-0.2-3.9-2.3-5.4c-16-11.8-23.3-28.4-25.9-47.5c-0.1-1-0.3-2-0.3-2.9
    c0.3-5.9-2.2-8.2-8.3-9.4c-28.7-5.9-43.7-31.6-36.8-61.8c1.6-6.9,3.6-13.6,6.6-20c3.7-8,9.2-9.7,16.4-4.6
    c13.1,9.3,26.1,18.7,39,28.2c2.7,2,4.6,2.3,7.8,0.8c13-6.2,26.4-7.3,40.6-4c24.8,5.9,50.1,6.4,75.4,6.3c26.7-0.1,53.3-1.5,79.4-6.9
    c21.3-4.4,30.4-14.8,33.2-36.7c1.7-13.5,1-27,1.1-40.5c0.1-15.1,0.1-30.2,0-45.3c-0.1-11.7,3-22.5,9.7-32c1.9-2.7,1.9-4.6,0.5-7.3
    c-4.9-9.7-8-19.9-9.1-30.7c-0.3-3.3-1.6-4.1-4.8-4.1c-8.6,0.2-17.2,0.1-25.9,0.1c-20.1-0.2-36-16.2-36.2-36.3c0-2.2,0-4.3,0-6.5
    c0-14.9,1.1-15.7,16.4-13.7c2.8,0.4,2.4,1.8,2.4,3.5c0,5.7-0.1,11.4,0,17c0.2,8.6,6.8,16,15,17c2.5,0.3,4,0.1,3.8-3.1
    c-0.3-4.1,0.1-8.2-0.1-12.3c-0.1-2.6,0.7-3.4,3.3-3.3c4.9,0.2,11.1-1.7,14.3,0.6c3.5,2.5,1.1,9.1,1.1,13.9c0,3.7,1,4.5,4.6,4.5
    c12.3-0.2,24.6-0.1,37.7-0.1c-6-11.1-4.2-22.6-4.6-33.8c-0.1-3.2,1-3.8,3.9-3.9c14.9-0.3,15-0.4,14.9,14.5
    c-0.1,6.8-0.1,13.3,5.5,18.4c2.9,2.7,5.3,2.6,8-0.1c3.3-3.4,5.4-7.2,5.4-12c0-5.7,0.2-11.4-0.1-17c-0.2-3.3,1.1-3.8,4-3.8
    c14.9-0.3,14.8-0.4,15,14.6c0.1,7.7-0.7,15.2-4.5,23.1c13.8,0,27,0,40.1,0c2.1,0,1.9-1.4,1.9-2.8c0-3.5,0.2-7.1-0.1-10.6
    c-0.4-4.1,0.4-5.7,5.2-5.6c13.6,0.3,13.6,0.1,13.7,13.5c0,6.2,0.6,6.6,6.7,4.5c7.3-2.5,11.9-8.6,12.1-16.3c0.1-5.7,0.1-11.4,0-17
    c-0.1-2.5,0.6-3.2,3.2-3.4c15.7-0.9,15.1-1,15.8,15c1,24.1-13.8,36.5-26.7,40.1c-8.8,2.5-17.9,1.2-26.9,1.3
    c-12.5,0.2-11.2,0.5-15.2,12c-3.8,11.1-0.8,17.2,7.7,24.2c11.8,9.8,20.2,22.9,27.3,36.5c4.1,7.8,11.7,11.3,17.8,16.6
    c1.5,1.3,2.9,0,4.3-0.6c11-4.8,21.2-3.4,29.9,4.7c8.2,7.6,10.8,17.3,7.2,27.9c-3.8,11.3-12.2,17.4-24.1,18.5c-2.4,0.2-4,1.3-5.7,2.5
    c-7.7,5.5-16.3,8.3-25.8,8.3c-19.8-0.1-39.6,0-59.4,0c-2.5,0-4.8-0.6-4.8,3.6c0.2,29,0.1,58,0.1,87.7c8.4-2.1,16.5-3.9,24.5-6.1
    c4-1.1,7.2-0.4,10.4,2c11.9,9,23.8,17.9,35.7,26.8c4.3,3.2,5.6,7.1,3.8,12.3c-12.3,36.8-24.5,73.8-36.9,110.6
    c-2.4,7.3-7.8,9.4-14.8,6c-11.4-5.6-22.7-11.4-34.1-17.1c-7.6-3.8-9-7.3-6.1-15.1c6.2-16.6,12.5-33.3,18.7-49.9
    c0.4-1.2,1.6-2.3,0.6-4.2c-6.3,2.1-12.7,4.4-19.2,6.3c-2.1,0.6-3.2,2.1-4.3,3.6c-10.3,14-23.5,24-40.4,28.5
    c-4.2,1.1-3.8,3.5-3.8,6.5c0,41.3,0,82.7,0,124c0,10-2.9,12.9-12.9,12.9c-10.6,0-21.2,0-31.7,0c-8.5,0-11.8-3.3-11.8-11.6
    c0-27.6-0.1-55.3,0.1-82.9c0-4.6-0.9-8.8-3.1-12.8c-3.7-6.9-7.2-13.9-10.5-21c-1.2-2.5-2.5-3.4-5.3-3.4c-11.9,0.1-23.9,0.1-35.8-0.2
    c-3.4-0.1-3.7,1.6-4.1,4.2c-2.2,14.1-4.7,28.2-6.8,42.3c-0.6,4-2.3,6.9-5,9.6c-7.1,7-14.1,14.2-21.2,21.2c-2,2-3.2,4.1-3.7,7
    c-2.4,12.9-5.1,25.7-7.8,38.5c-1.4,6.8-4.3,9.2-11.4,9.2c-11.4,0-22.7,0.1-34.1,0c-8,0-12.1-4.6-10.8-12.4c2.9-17.4,6-34.7,8.7-52.1
    c0.7-4.4,2.4-7.7,5.6-10.6c2.2-2,3.9-4.5,6.3-6.1C198.5,488.4,199.7,481.3,197.9,472.4z"/>
<path style="fill:#AF5E32; transform:scale(0.2)" :class="ValueId+'_color3'" d="M255.1,395.1c-0.1-1.4-0.3-2.8-0.2-4.1c0.3-3.2-0.7-4.5-4.2-4.4c-14.1,0.2-28.2,0-42.3,0.1
    c-6.5,0.1-9.9,3.8-10,10.4c-0.1,14.9-0.2,29.8,0.1,44.7c0.1,4.7-1.5,7.5-5.1,10.2c-12.3,9.6-24.5,19.6-36.8,29.3
    c-2.9,2.3-4.7,4.9-5.6,8.6c-4.9,20.3-10.1,40.5-15.1,60.8c-0.9,3.7-2.1,6.2-6.5,5.2c-0.4-0.1-0.8,0-1.2,0
    c-4.3-0.3-11.2,1.7-12.2-0.8c-2-4.6,0.2-10.6,1.1-15.9c0.4-2.7,2.5-2,4.1-2.1c11.3-0.6,10.9-0.6,11.4-11.3c0.3-6.1-1.4-8.6-7.6-7.5
    c-4.3,0.7-6.4-0.7-4.7-5.4c0.4-1.3,0.4-2.7,0.4-4.1c0.4-9.6,3.2-17.9,10-25.4c9.5-10.4,17.7-21.9,26.6-32.9c2.2-2.7,3.4-5.5,3.4-9.1
    c-0.1-22.5-0.1-45.1,0-67.6c0-3.7-0.8-5.5-4.8-5c-1.5,0.2-3.1,0-4.7,0c-9.1,0-9.1,0-9.6,10c-4.9-6.8-7.3-13.8-8.9-21.1
    c-2.4-11-2.2-22.2-0.2-33.3c3.6-20.4,18.5-28.1,36.7-24.3c35.4,7.6,71.1,8.2,106.9,7.1c21.7-0.7,43.3-2.9,64.6-7.6
    c25.1-5.6,38.4-21.8,43.2-46.1c1.8-9,2.5-18.2,2.5-27.4c-0.1-22.3,0-44.7,0-67c0-6.8,1.8-13.1,5.4-19.7c13.4,12.2,29.6,12.3,46,11.9
    c3.5-0.1,5.1-0.6,5.2-4.7c0.1-14.2,0.3-14.3-13.8-14.1c-7.7,0.1-15.3-0.1-22.1-5.3c5.5-3,11.1-4,16.9-4.1c7.4-0.1,14.9,0.4,22.3-0.1
    c10.1-0.8,17.8,3.4,24.6,10.1c8.8,8.7,16.8,18.3,22.4,29.3c5.5,10.6,12.9,19,22.9,25.1c3.2,1.9,4.3,4,3.5,8.1
    c-1.4,7,1.3,13.4,5.5,19.5c-2.7,2.2-5.8,2.1-8.8,2.1c-21.5,0-43.1,0-64.6,0c-14.8,0-25.8-9.6-27.5-24.3c-0.4-3.6-1.8-4.2-4.7-3.9
    c-1.2,0.1-2.3,0-3.5,0c-12,0-12.2,0-9.5,11.7c2.9,12.2,9.4,22.2,20.4,28.2c6,3.3,7.5,7.1,6.4,13c-1.4,4.7-4.1,8.8-6.6,12.9
    c-7.8,13.3-13.8,27.4-17.9,42.2c-0.5,1.7-1,3.3-2.4,4.6c-10.6,0.5-10.3,0.5-10.8,11.5c-0.7,15.6-1.8,31.3-7,46.3
    c-1.7,4.8-3.7,9.5-7,13.5c-1.5,1.8-3,3.5-5.5,4.2c-7.2,1.8-8.6,3.5-8.6,10.8c0,51.9,0,103.8,0,155.8c0,12.2,0,11.9-12.2,12.3
    c-5.4,0.2-6.8-1.4-6.7-6.7c0.3-25.1,0.1-50.2,0.2-75.2c0-3.4-0.6-6.5-2.2-9.6c-5.1-9.9-10.4-19.8-14.9-30
    c-3.2-7.5-7.9-11.4-16.1-10.5c-5-3.9-7-9.8-9.6-15.1c-2.5-5-5.9-7.3-11.3-7.7c-11.7-0.7-23.2-2.9-34.8-3.7
    C258.1,397.4,256.1,397.1,255.1,395.1z"/>
<path style="fill:#FDCF9D; transform:scale(0.2)" :class="ValueId+'_color5'" d="M406.6,301.8c4.5-21.9,14.3-41.5,26.8-59.8c0,29.8,0.4,59.6-0.2,89.3c-0.4,18.5-3.9,36.6-12.9,53.1
    c-7.4,13.5-17.8,23.5-33.8,28.6c0-6.4,0-12.1,0-17.9c0-1.1,0.4-1.9,1.2-2.5c15.1-10.2,19.3-26.4,22.9-42.8c2.9-13,3.7-26.4,4-39.7
    C414.8,302.1,414.8,302.1,406.6,301.8z"/>
<path style="fill:#AA5410; transform:scale(0.2)" :class="ValueId+'_color3'" d="M444.6,376c2.4-9.2,4.9-17.6,5.7-26.3c0.2-2.1,1.7-2.7,3.6-3.2c7.2-1.7,14.4-3.6,21.5-5.5
    c2.4-0.6,4.2,0.1,6,1.5c7.5,5.7,14.9,11.4,22.5,16.9c2.6,1.9,2.8,3.6,1.9,6.5c-9.8,29.2-19.6,58.5-29.2,87.8
    c-1.2,3.7-2.7,4.1-5.8,2.2c-5-3-12.7-3.8-14.8-8.6c-2-4.5,2.9-10.4,4.8-15.7c6-16.5,12.3-32.9,18.6-49.3c1.6-4.2,1.9-8-1.4-11.5
    c-3.2-3.4-7-3.6-11.3-2.1C459.6,371.2,452.4,373.5,444.6,376z"/>
<path style="fill:#AA5410; transform:scale(0.2)" :class="ValueId+'_color3'" d="M217.2,429.3c11.6,4.2,22.7,7.7,34.2,10.2c3,0.6,1.5,2.6,1.3,4.2c-2,13.1-4.1,26.3-6.1,39.4
    c-0.3,2.1-1.5,3.5-2.9,4.9c-3.8,3.7-7.1,8-11.3,11.1c-12.2,9.1-17.3,21.5-18.7,36.1c-0.6,5.8-2.4,11.5-3.3,17.3
    c-0.4,2.8-1.6,3.8-4.2,3.5c-0.4,0-0.8,0-1.2,0c-15.1,0.3-15,0.3-11.8-14.6c0.7-3.4,2.1-4.7,5.4-4.2c1,0.1,2-0.1,2.9,0
    c5,0.8,7.4-0.9,6.4-6.3c-0.3-1.5-0.2-3.2,0-4.7c0.7-5.5-0.3-9.2-7.2-7.9c-1.1,0.2-3,0.6-3.3-1.4c-0.3-1.8,0.4-3.4,1.8-4.8
    c4.2-4.1,8.1-8.5,12.5-12.4c4.1-3.7,5.8-7.9,5.7-13.4C217.1,467.5,217.2,448.7,217.2,429.3z"/>
<path style="fill:#FDCF9D; transform:scale(0.2)" :class="ValueId+'_color5'" d="M255.1,395.1c13,1.5,25.9,3.2,38.9,4.4c6.4,0.6,11.4,1.9,13.8,8.9c1.9,5.5,5.2,10.4,7.9,15.6
    c-32.1,1.5-63.7-0.2-93.7-13.2c-1.5-0.7-4.1-0.3-3.6-3.4c0.5-3.4,3-1.8,4.5-1.8c8.8-0.2,17.6-0.4,26.4,0c4.8,0.2,6.2-1.3,5.6-5.8
    C254.7,398.2,255,396.6,255.1,395.1z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color1'" d="M437,104.4c-13.8-0.6-27.4,0-39.9,6.6c-2,1.1-3.1,0.5-3.9-1.7c-2.7-6.7-4.7-13.6-5.6-20.8
    c-0.3-2.4,0.4-3,2.7-3c22.6,0.1,45.2,0.1,67.8,0c1.9,0,3,0.4,2.5,2.6c-0.2,0.8-0.2,1.6-0.3,2.3c-2.3,13.9-2.3,13.9-16.3,13.9
    C441.7,104.4,439.4,104.4,437,104.4z"/>
<path style="fill:#AA5410; transform:scale(0.2)" :class="ValueId+'_color3'" d="M89.6,279.9c0.5,0.3,1.2,0.7,1.8,1.2c9,6.5,18,13,27.1,19.5c1.9,1.4,2.4,2.6,1.2,4.8
    c-3,5.5-4.9,11.5-5.8,17.7c-0.5,3.4-1.7,3.5-4.6,2.8C92,322.1,82.6,307.2,86,288.7c0.4-2.3,1.1-4.5,1.7-6.8
    C88,281,88.1,279.9,89.6,279.9z"/>
<path style="fill:#E71B23; transform:scale(0.2)" :class="ValueId+'_color4'" d="M554.6,198.6c-0.1,4.3-4,8.2-8.4,8c-4.3-0.1-8.3-4.2-7.8-8.5c0.5-4.7,3.3-7.4,8-7.7
    C550.7,190.1,554.6,194.2,554.6,198.6z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M461.9,179.7c-9.6,0-9.6,0-9.6-11.7c0-7.1,0-7.1,11.3-7.1c7.5,0,7.5,0,7.5,12C471.2,179.7,471.2,179.7,461.9,179.7z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M348.5,339.6c-9,0-9,0-9-9.4c0-9.4,0-9.4,9.5-9.4c9.3,0,9.3,0,9.3,9.1C358.3,339.6,358.3,339.6,348.5,339.6z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M283.1,349.2c0-9.6,0-9.6,8.2-9.6c10.6,0,10.6,0,10.6,11.8c0,7,0,7-11.4,7C283.1,358.4,283.1,358.4,283.1,349.2z"/>
<path style="fill:#000000; transform:scale(0.2)" :class="ValueId+'_color2'" d="M348.9,387.1c0,8.9,0,8.9-8.9,8.9c-9.9,0-9.9,0-9.9-9.6c0-1.4,0.2-2.7,0-4.1c-0.6-4.1,1.1-5.7,5.2-5.1c1.1,0.2,2.3,0,3.5,0
    C348.9,377.2,348.9,377.2,348.9,387.1z"/>
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
                                    <button :style="{background:'rgba('+getterReindeerBg1+')'}" @click="ShowElement(getterReindeerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterReindeerBg2+')'}" @click="ShowElement1(getterReindeerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterReindeerBg3+')'}" @click="ShowElement2(getterReindeerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterReindeerBg4+')'}" @click="ShowElement3(getterReindeerBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterReindeerBg5 +')'}" @click="ShowElement4(getterReindeerBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterReindeerBg6+')'}" @click="ShowElement5(getterReindeerBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterReindeerBg7+')'}" @click="ShowElement6(getterReindeerBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterReindeerBg8+')'}" @click="ShowElement7(getterReindeerBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterReindeerBg9+')'}" @click="ShowElement8(getterReindeerBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterReindeerBg10+')'}" @click="ShowElement9(getterReindeerBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Reindeer= [
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
            var randomNumber = Reindeer[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Reindeer[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Reindeer'){
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
                getterReindeerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Reindeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Reindeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Reindeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterReindeerBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterReindeerBg10: {
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
                            name:'Reindeer',
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