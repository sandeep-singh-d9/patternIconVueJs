<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(1);">
                  <path style="fill:#FDEEB5; transform:scale(0.2)" :class="ValueId+'_color5'" d="M228.9,169.9c-8.9-1.3-17.9-2.6-26.8-4c-1.2-1.3-1.5-3-1.3-4.7c1.6-17.7,2.2-35.5,3.4-53.2
    c0.9-12.6,1.7-25.2,2.2-37.8c0.3-6.8,1.5-13.6,1.2-20.4c-0.1-2.3,1-4.1,2.6-5.7c5.5-1.7,11-3,16.8-3.3c3.8-0.6,7.6-0.3,11.4-0.3
    c4.4,0,5.4,1,5,5.8c-0.6,7.1-1.3,14.2-2.1,21.4c-3.2,30.9-6.8,61.8-9.9,92.8C231.1,163.7,231.3,167.2,228.9,169.9z M280.9,180.9
    c2.1-2.2,2-5.2,2.5-7.9c1.2-7.7,1.8-15.5,2.8-23.3c2.9-23.4,5.7-46.9,8.3-70.4c0.3-3.1,0.9-6.3-0.3-9.4c-6.2-8.7-14-15.5-23-21
    c-2.2,10.5-2.6,21.2-3.9,31.8c-1.7,13.9-2.8,27.9-4.3,41.9c-1.8,17.4-3.8,34.8-5.7,52.2C265.1,177,273,178.9,280.9,180.9z
     M154.9,103.9c-0.5,1.7-0.8,3.5-0.9,5.3c-0.4,5.7-1.7,11.4,0.9,16.9c0.1,10.3,0.2,20.5,0.1,30.8c0,2.8,0.7,3.9,3.7,4.4
    c4.8,0.9,9.6,0.6,14.3,0.7c0.3-19.4,2.3-38.7,2.1-58c0-0.8,0.2-1.6,0.3-2.5c1.5-10.2-0.3-20.5,1.6-30.7c0.1-0.5-0.5-1.1-0.8-1.7
    C167.6,79.8,160.2,91.2,154.9,103.9z M331.1,196.1c-4.9-6.1-8-13-9.2-20.7c-2.4-16.1-4.7-32.2-7-48.3c-1.3,0-1.6,0.7-1.8,1.9
    c-3.4,19-6.7,38-10.1,57C311.4,191.9,320.8,195.2,331.1,196.1z"/>
<path style="fill:#78BA24; transform:scale(0.2)" :class="ValueId+'_color1'" d="M364.1,237c-3.4,1.9-7.1,0.6-10.7,0.9c-2.2,0.2-3.4,0.3-2.6,3.1c3.2,10.9,0.9,19.2-10.8,23.5
    c-2.9,1.1-5.3,3.3-7.9,5.2c-9.3,6.8-9.3,6.8-21.5,6c2.6-5.8,5.9-10.7,11.2-14c0.8-0.5,1.7-1,2.6-1.5c10.8-5.7,10.8-5.7,7.2-17.3
    c-0.3-0.9-0.4-1.9-0.7-2.9c-0.9-2.5,0.9-3,2.5-3.2c3.1-0.5,3.3-2.3,2.6-4.7c-1.2-4-2.4-8-4.8-11.4c-1.8-2.6-3.2-5.4-5.3-9.1
    c-1.2,9.9-1,19.5-9.8,25.2c-9.6,11.2-20.7,20.9-30.8,31.8c-9.1,9.8-20.9,14.9-34.9,13.4c-2.4-0.3-2.2-1.4-1.5-3
    c1.4-3.2,3.8-5.5,6.7-7.2c9.2-5.3,14.7-14.1,21.4-21.9c4.1-7.4,1.2-15.2,1.3-22.9c0-1.1-0.4-2.5-1.9-2.5c-1.4,0-1.7,1.4-1.8,2.6
    c-0.6,6.6-2.4,13-4.3,19.4c-0.6,2.1-1.1,4.2-3.2,5.4c-1.3,0.4-2.6,0.7-3.9,1.1c-2.7-0.1-2.2-2.5-2.7-4c-1.8-5.4-1.6-11.2-2.7-16.7
    c-0.6-3.1-1.4-6.2-2.7-9.1c-0.4-0.9-0.9-1.9-2.1-1.8c-1.1,0.1-1.6,1.2-1.9,2.1c-0.9,3.5-1.5,7.2-1.6,10.8c-0.2,5-1,9.9-1.7,14.9
    c-0.3,2.2-0.8,4.3-2.7,5.7c-0.6,0-1.3,0.1-1.9,0.1c-7,0.8-7.5,0.5-7.4-6.5c0.1-10.4-2.8-20-6.7-29.5c-0.6-1.5-1.3-3.6-3.3-3.3
    c-1.9,0.3-1.9,2.5-2.2,4.1c-1.7,10.8-5.5,20.9-11.2,30.2c-1.1,1.8-2.2,3.8-4.4,4.6c-2.3,0-4.7,0-7-0.1c-3.5,0.1-4.4-1.6-4.5-5.1
    c-0.2-8.6-1.1-17.3-3.8-25.6c-0.5-1.5-1.1-3.7-3.1-3.4c-1.7,0.2-1.4,2.4-1.7,3.8c-1.7,10.7-7.6,19.4-13,28.3c-1,3.7,1.6,6.5,2.9,9.5
    c2.7,6,1.2,10.7-3,15.4c-7.8,8.5-17.9,11.7-28.8,13.3c-0.8,0.1-1.6,0.2-2.5,0.4c-1.8,0.3-4.1,1.9-5.3-0.5c-1.2-2.3,0.1-4.6,1.9-6.3
    c1.3-1.2,3-2.1,4.5-3c5.8-3.4,9.7-8.5,13.1-14.1c1.9-3.2-0.1-4.9-1.7-7c-4.6-6.2-4.6-6.2-11.5-3.5c-17,6.7-33.7,14.3-51.4,19.2
    c-2.4,0.6-4.6,1.9-6.7,3.3c-7.3,4.5-15.4,3.5-23.3,3.5c-2.9,0-2.1-2-1.2-3.5c2.6-4.6,6.8-7.3,11.7-8.7c17.8-5.1,32.7-15.5,47.7-25.7
    c0.8-0.5,1.5-1.3,2.5-2.2c-10.4-8-21.6-9.7-33.9-7.3c-12.2,2.3-23.2,8-34.9,11.7c-3.3,1-6,1.3-8.7-1.5c-2.1-2.2-1.7-4.7-1.4-7
    c0.3-2.9,2.8-1.7,4.4-1.6c2.9,0.1,2.8-1.8,2.7-3.6c-0.2-2.6,0.9-3.8,3.4-3.4c7.3,1.3,11.4-3.4,15.1-8.5c2.5-3.5,4.3-7.5,6.7-11.1
    c1.6-2.4,1-4.2-0.3-6.4c-1.6-2.8-3.1-3.5-5.8-1c-5.4,5-11.1,9.6-18.2,11.9c-1.7,0.5-2.3,1.8-2.9,3.1c-0.9,1.9-1.9,3.8-3.5,7.1
    c-1.7-7.9-5.6-8.3-11.6-6.9c-6.1,1.5-6.3,5.2-5.8,9.9c-2.2,0.1-2.9-1.5-3.7-2.6c-1.3-1.9-2.5-2.3-4.9-1.8c-5.4,1.3-7.1-0.8-7.8-6.6
    c-2.2-16.1,4.8-28.6,14.9-40.1c4.6-5.3,9.2-10.6,14.9-14.6c16.9-11.9,35.4-14.1,55.1-8.7c9.9,2.7,19.8,5.8,30.2,6.2
    c3.8-1.9,7.8-1.4,11.8-1.2c1.7,0.1,3.3,0.5,5,0.6c7.2,0.7,7.9,0.1,7.9-7c0-6.8-0.1-13.7,0.1-20.5c0.1-2.2-0.6-4.8,2.4-5.9
    c2,1.8,1.6,4.3,1.6,6.5c0.1,7.1,0,14.3,0.1,21.4c0.1,5.1,0.9,5.9,6.1,6.5c3.3,0.4,6.6,0,9.9,0.6c9.8,1.4,19.6,2.3,29.4,3.7
    c9.1,1,18.2,2.3,27.2,4c9.4,1.3,18.7,3.3,28,5.1c8.1,1.8,16.2,3.6,24.1,5.9c7.3,1.8,14.3,4.8,21.8,6c8.9,4.7,18.6,7.4,28,10.5
    c1.9,1.2,3.7,2.8,6,3.1c5.4,2.2,7,7.1,8.8,11.9c1.3,3.4,0.9,7.2,2.7,11.1c3.7-4.2,5.9-8.4,7-13.3c0.3-1.5-0.3-3.9,2.5-4
    c3.4,0.5,6.8,0.8,9.9,2.2c1.5,1.6,1.4,3.7,1.5,5.6c0.4,6-0.7,12-1.3,17.9C368,233.3,367.1,235.9,364.1,237z M419.1,216.1
    c-3.3-0.7-6.5-1.4-9.9-1.3c-2.4-0.8-3.7,0.7-4.9,2.4c-1,1.5-1.3,3.4-2.2,5c-0.5,1-1,2.4-2.4,2.2c-1.5-0.2-1.3-1.8-1.3-2.9
    c-0.1-3.5-0.1-7.1-3.4-9.5c-6.3-1.1-12.7-2.2-19-3.3c-0.5,1-0.2,2,0.3,2.8c3.9,6.3,4.7,13.3,4.3,20.5c-0.1,2,0,4,1.4,5.6
    c11.1,0.7,22.1-1.3,33.2-0.8c0.6,0,1.2-0.5,1.8-0.8C422.4,231.3,423.4,221,419.1,216.1z M473.1,234c7,0.6,13.9-0.7,20.9-1
    c3-0.1,5.1-1.4,5.2-4.8c0.1-3.2-1.6-4.8-4.6-5.4c-5.1-1.1-10.2-0.7-15.4-0.7C476.3,225.6,472.7,228.8,473.1,234z M446.8,222.6
    c3.9,3.4,5.8,8,8.4,12.2c4.6-0.3,9.3-0.7,13.9-1c2.5-5,0-8.9-3-12.7c-6.3-0.4-12.6-0.8-18.9-1.2C446.2,221.7,446,221.9,446.8,222.6z
     M443.1,235.1c4.2-5.5,4.2-10.8-0.1-15.9c-3.6-0.4-7.3-0.9-10.9-1.3c-1.9,0.3-1.8,1.3-1.4,2.8c1.3,5,1.5,10,1.3,15.1
    C435.8,235.9,439.6,236.6,443.1,235.1z"/>
<path style="fill:#539615; transform:scale(0.2)" :class="ValueId+'_color4'" d="M228.9,169.9c2-18.4,4.1-36.8,6-55.3c1.5-14.1,2.8-28.3,4.2-42.5c0.8-8,1.7-16.1,2.8-24.1
    c0.9-6.4,0.4-7.3-6-7.2c-3,0-6,0-9-0.1c15.6-2.1,30.7-1.3,44.1,8.2c1.6,5.5-0.1,10.9-0.7,16.3c-4,34.4-7.2,68.8-10.9,103.2
    c-0.3,2.3-0.6,4.6-2.3,6.5C247.8,173.3,238.3,171.6,228.9,169.9z M176.2,69.1c-0.8,4.7-1.9,9.4-1.7,14.3c0.4,12.8-0.8,25.5-1.3,38.2
    c-0.4,9.9-0.1,19.9-1.5,29.8c-0.5,3.5-1,7.3,1.4,10.6c9.6,2.1,19.4,2.5,29,4c0-1.3-0.1-2.7,0-4c1.3-18.3,2.7-36.6,3.9-54.9
    c0.9-14.1,1-28.2,2.3-42.2c0.7-6.9-0.3-14,1.9-20.7C196.6,49.4,185.4,57.9,176.2,69.1z M293.2,184.4c3.3,0.5,6,4,9.7,1.6
    c2-1.6,2.1-4.1,2.5-6.3c1.7-9.5,3.3-19,5.1-28.5c1.5-8,2.6-16.1,4.4-24c0-0.7,0.2-1.4,0.1-2c-4.1-19.5-11.4-37.7-20.9-55.2
    c-1,8-2.1,16.1-3,24.1c-1.5,13-2.8,26-4.3,39c-1.9,16-3.9,31.9-5.9,47.9C285,182.1,289.1,183.8,293.2,184.4z M219,255.7
    c8.1,0,16.2,1.3,24.2-0.6c-5.1,0.7-6.5-1.5-6.2-6.5c0.7-11-2.8-21.3-7.2-31.2c-0.8-1.9-1.5-4.4-4.4-4c-2.6,0.4-2.6,2.9-2.8,4.7
    c-1.7,13.5-7.2,25.4-14.5,36.7C211.7,255.2,215.3,255.7,219,255.7z M145.2,129.4c-3.4,11.5-8.7,21.9-17.3,30.4
    c5.6,0.4,11.2,0.2,16.9,1c9.2,1.2,9.3,0.8,9.3-8.5c0-2.5-0.1-5,0-7.5c0.4-6.3-1-12.6,0.7-18.8c0-7.4,0-14.8,0-22.2
    C151.2,112.2,147.8,120.7,145.2,129.4z M201,254.8c-0.5-1.5-3.8,0.3-3.2-2.7c1-4.5-0.2-8.9-0.9-13.3c-0.9-5.9-0.9-11.9-3.7-17.4
    c-0.9-1.6-1.8-3.5-4-3.2c-2.2,0.3-2,2.2-2.2,3.9c-0.6,5.7-2.4,10.9-5,16c-2.4,4.9-6.4,9-7.1,14.7C183.7,253.3,192.3,255.1,201,254.8
    z M263.2,253.1c-1.7-4.4-2.8-9-3.1-13.8c-0.3-6.1-1.8-12-4-17.8c-0.6-1.6-1.5-2.5-3.2-2.5c-1.5,0.1-2.4,0.9-2.8,2.4
    c-0.4,1.4-0.8,2.9-1,4.3c-1.6,9.7-1.3,19.7-4,29.3C251.2,254.9,257.3,255.7,263.2,253.1z M368.1,207.1c0,4,0.5,8-0.1,11.9
    c-1,6.1,0.3,12.6-3.8,18c2.6,1.5,5.5,0.7,8.3,1c3.3,0.3,6.5-1.6,9.8-0.2c0.1-10.1,0.9-20.3-6.1-28.9
    C373.5,207.7,370.9,206.8,368.1,207.1z M324.4,237c2.8-0.1,5.2,0.3,6.5,3.1c0.2-1.6,1.3-2.2,2.8-2.1c4.6,0.5,4.4-1.8,3.8-5.5
    c-1.5-8.2-7.4-14.3-10.3-21.7c-0.2-0.6-1.3-1.3-1.9-1.3c-1.3,0.1-1.2,1.4-1.1,2.3c0.7,9.5-1.7,17.9-8,25.2
    C318.9,237,321.6,237.1,324.4,237z M277,250c2.4-0.2,3-2.1,3.1-3.9c0.6-6.9,0.2-13.8-0.8-20.6c-0.2-1.6-0.7-3.6-2.9-3.3
    c-2.3,0.3-3.2,2-3.3,4.3c-0.3,8.9-3.2,17.2-6,25.5C270.6,252.2,273.7,250.6,277,250z M337.1,199.2c5.7,5.4,8.5,12.1,9,19.8
    c0.1,1.8-0.5,4,1.8,4.7c2.8,0.8,2.9-2,4.1-3.4c3.7-4.5,4.5-10.1,6.2-15.4C351.5,201.7,344.3,200.4,337.1,199.2z M432.1,235.9
    c1.6-1.8,1.3-4,1.3-6.1c0.1-4-1.3-7.8-1.3-11.8c-4.3-1.2-8.6-1.7-13-1.8c1.9,6.9,1.7,13.6-2,20C422.1,236.1,427.1,236,432.1,235.9z
     M455.1,234.8c-0.5-4.4-2.3-8-5.6-11c-1.1-1-3.4-1.6-2.4-4c-1.2-1.1-2.7-0.8-4.1-0.7c2.1,5.3,2.4,10.6,0.1,15.9
    C447.1,235,451.1,234.9,455.1,234.8z M395.1,212.1c1.4,3.4,2.5,6.8,2.1,10.6c-0.2,1.6-0.2,3.5,2,4c2.2,0.5,2.6-1.5,3.6-2.7
    c0.9-1.1,1.2-2.3,1.5-3.6c0.6-2.7,1.9-5,5-5.6C404.6,213.2,400,212,395.1,212.1z M473.1,234c1.2-4.4,5.1-7.4,6-11.9
    c-4.2-2-8.7-0.8-13-1c0.9,4.3,3.5,8.1,3,12.7C470.4,233.9,471.7,233.9,473.1,234z"/>
<path style="fill:#FDFBFB; transform:scale(0.2)" :class="ValueId+'_color2'" d="M61,166c5.1,0.5,8.5,3.3,8.6,8.8c0.1,5.8-3.4,9.6-9,9.5c-5.6-0.1-9.3-4-9.2-9.6
    C51.6,169.4,55.3,166.5,61,166z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color3'" d="M58.9,170.8c3.5,0.4,5.9,2.3,6,6.1c0.1,4-2.3,6.7-6.3,6.6c-3.9-0.1-6.5-2.8-6.4-6.7
    C52.3,173.1,54.9,171.1,58.9,170.8z"/>
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
                                    <button :style="{background:'rgba('+getterDimetrodonBg1+')'}" @click="ShowElement(getterDimetrodonBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDimetrodonBg2+')'}" @click="ShowElement1(getterDimetrodonBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDimetrodonBg3+')'}" @click="ShowElement2(getterDimetrodonBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDimetrodonBg4+')'}" @click="ShowElement3(getterDimetrodonBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterDimetrodonBg5 +')'}" @click="ShowElement4(getterDimetrodonBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDimetrodonBg6+')'}" @click="ShowElement5(getterDimetrodonBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDimetrodonBg7+')'}" @click="ShowElement6(getterDimetrodonBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDimetrodonBg8+')'}" @click="ShowElement7(getterDimetrodonBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDimetrodonBg9+')'}" @click="ShowElement8(getterDimetrodonBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDimetrodonBg10+')'}" @click="ShowElement9(getterDimetrodonBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Dimetrodon= [
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
            var randomNumber = Dimetrodon[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Dimetrodon[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Dimetrodon'){
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
                getterDimetrodonBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Dimetrodon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Dimetrodon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Dimetrodon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterDimetrodonBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDimetrodonBg10: {
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
                            name:'Dimetrodon',
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