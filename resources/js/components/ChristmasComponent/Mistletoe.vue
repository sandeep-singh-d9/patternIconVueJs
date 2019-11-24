<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M287.2,26.4c1,1.5,2.4,2.6,3.3,4.3c16,30.8,40,53.2,71.8,67.1c5.7,2.5,11.4,4.7,17.1,7.1
    c4.9,2.1,6,5.8,2.6,9.9c-18.2,22.5-26.1,48.2-23.5,77.1c1.3,15,6.1,29.1,13.6,42.1c2.5,4.3,2.2,7.4-1.5,11
    c-6.7,6.3-13.3,12.7-19.3,19.8c-11.6,13.8-19.4,29.5-23.7,47c-0.8,3.2-0.8,6.1,0.9,9.1c3.4,6.2,5.1,13.1,5.7,20.1
    c0.3,3,1.4,3.2,3.7,2.7c2-0.4,4-1.1,5.9-0.8c6.2,0.9,7.8-2.4,8.8-7.7c2-10.8,2-21.7,1.7-32.5c-0.1-4.8,1.5-7,6.3-8.4
    c35.8-11.1,56.4-35.4,62-72.4c1-6.5,3.3-7.8,9.6-5.1c18.4,7.9,37.2,14,57.6,13.6c11.9-0.3,23.7-1.9,34.9-6.1c2.3-0.9,4.2-1,6.1,0.6
    c1.9,1.6,2.1,4,1.4,6c-10.7,30.8-6.4,60.5,5.9,89.8c4.8,11.4,4.4,11.3-7.8,13.5c-28.9,5.2-50.2,20.8-63.3,47.3
    c-2.2,4.5-4.1,9.1-5.2,14.1c-1,4.7-3.6,6.5-8.5,6.5c-11.7-0.2-23.4-0.7-35,2.1c-3.5,0.8-4.6,2-4.9,5.8
    c-1.8,24.4-13.7,42.8-35.3,54.1c-21.5,11.2-42.8,9.6-63.4-3.3c-1-0.6-2-1.3-3.3-2.1c-4.6,13.1-11.8,24.5-22.3,33.4
    c-21.6,18.4-46.2,24.1-73,14.2c-27-9.9-43.4-29.8-48.7-58.3c-2.1-11.1-1.1-22.1,2.4-32.7c1.1-3.4,0.4-4.7-2.7-5.9
    c-10.2-4-20.6-6.8-31.6-7.1c-5.9-0.1-11.7-0.1-17.6-0.1c-7.5,0-7.7-0.2-9.8-7.2c-5-16.6-13.8-30.7-27.2-41.9
    c-13.1-10.9-28.1-17.2-45-19.2c-6.3-0.7-7.8-3.1-5.5-9.1c5.3-13.9,11-27.6,12.7-42.6c2-17,0.9-33.7-4.8-50c-0.8-2.4-1.1-4.5,0.7-6.5
    c1.9-2.1,4.2-1.9,6.5-1.1c28.1,9.5,55.6,7.3,82.7-3.8c3.7-1.5,7.4-3,11.2-4.4c4.4-1.6,7.2,0.1,7.8,4.6c5.2,38,26.1,62.7,62.8,73.8
    c3.7,1.1,5.7,3,5.5,7.1c-0.2,3.6,0,7.2,0,12c5.7-8,11.5-14.4,18.8-19.2c2.3-1.5,1.1-3.1,0.4-4.7c-5.3-11.5-12.4-21.8-21.2-30.9
    c-4.8-4.9-9.4-10-14.5-14.6c-3.5-3.2-3.6-6.2-1.4-10.2c10.9-18.9,15.6-39.3,13.9-61.1c-1.7-20.9-9.2-39.5-21.9-56.1
    c-5.6-7.3-5.2-9.3,3.3-12.7c16.7-6.9,33.1-14.3,47.4-25.7c16-12.8,28.9-28.2,38.5-46.4c1.1-2.1,2.2-4.1,4-5.7
    C284.5,26.4,285.8,26.4,287.2,26.4z"/>
<path style="fill:#3AB44A; transform:scale(0.2)" :class="ValueId+'_color2'" d="M307.2,294.9c2.2-21.1,10.2-39.6,25.1-54.9c6.1-6.3,5.9-6.1,2.5-14.2c-7.7-18.3-8.4-37.2-3.3-56.3
    c2.3-8.6,5.9-16.7,10.9-24.1c1.9-2.7,1-3.7-1.6-4.9c-12.6-5.9-24.5-13-34.3-23.1c-7.6-7.8-14-16.5-18.6-26.5
    c-0.5-1.2-0.9-2.7-2.5-2.9c-1.7-0.1-2.1,1.5-2.6,2.6c-10.9,22.2-28.3,37.5-50.3,48c-6.2,2.9-6,3-2.7,8.7c15.3,26.6,16.7,54,4.2,81.9
    c-1.4,3.1-0.8,4.6,1.4,6.8c12.3,12.3,20.9,26.7,25.4,43.5c0.3,1.3,0.3,2.6,0.5,3.9c-4.6,1.4-9.3,2.6-13.8,4.2
    c-2.3,0.8-2.6-0.6-3.2-1.9c-7.9-17.4-19.8-31.7-33.7-44.5c-2.6-2.4-2.6-4.3-1.1-7.4c19.1-40,16.6-78.8-6.6-116.4
    c-3.4-5.5-3.5-5.5,2.3-7.8c23.4-9.2,43.8-22.8,60.7-41.5c6.3-6.9,12.1-14.3,16.8-22.4c1.7-3,2.9-4,5.2-0.3
    c18.5,30.1,44.7,51,77.4,64.1c6.1,2.4,6.1,2.5,2.4,8c-14.4,22-20.5,46.3-18.8,72.4c1,15.4,5,30.3,12.3,44c1.6,3.1,1.4,5-1.1,7.3
    c-11.4,10.7-21.7,22.2-29.3,36c-4.2,7.7-7.5,15.7-10.2,23.9c-0.4,1.2-0.6,2.6-1.7,3.7C314.8,301.8,311,298.4,307.2,294.9z
     M175.7,389.3c-5.1-2.2-10.3-4.1-15.7-5.3c-4.4-1-7.3-3.4-9.4-7.5c-2.5-5.1-5.9-9.7-9.4-14.2c-11.3-14.1-25-25-41.6-32.3
    c-3.6-1.6-5-3.7-4.3-7.7c2.5-13.9-0.2-27.2-4.8-40.3c-1-3-2.8-5.6-3.7-8.6c0.9-0.7,1.5-0.3,2.1-0.1c15.2,7.3,31.1,11,48.1,8.3
    c3.2-0.5,4.8,0.6,6.1,3.6c9.6,21.8,24.8,38.8,45.2,50.9c5.5,3.2,8.6,7.2,10,13.4c1.7,7.3,4.1,14.4,9.3,20.3c0.6-0.2,1.4-0.4,1.6-0.8
    c0.3-0.5,0.1-1.3-0.1-1.9c-3-9.3-3.9-18.8-2.7-28.6c1.2-9.5-1.8-19-0.8-28.5c0.5-4.5-1.1-6.5-5.5-8.2
    c-32.3-12.6-52.8-35.9-60.9-69.7c-0.8-3.4-1.6-4.7-5.5-3c-17.8,7.9-36.5,11.7-56,11.2c-9.1-0.2-18.1-1.6-27.5-3.6
    c1.7,8.5,3.1,16.5,3.5,24.6c0.9,20.2-2.9,39.5-10.9,58c-1.8,4-0.8,5.5,3.3,6.4c34.1,8.2,57.1,29.2,69.7,61.7c1.5,4,3.3,5,7.1,4.8
    c14.8-0.8,29.3,1.2,43.3,6.4c9.1,3.4,9.1,3.3,14.2-5.4C179.9,390.7,177.7,390.2,175.7,389.3z M380.2,336.3
    c12-6.3,21.7-15.5,30.4-25.7c6.5-7.5,11.4-16.1,15.6-25c1.3-2.7,2.8-4.8,6.4-4.4c17,2.2,33.3-0.2,48.8-7.8c0.4-0.2,0.6,0,0.9,0.6
    c-0.9,2.3-1.9,4.8-2.9,7.3c-5.1,12.8-6.8,26.2-5.2,39.8c0.6,4.6-0.5,6.9-4.9,8.8c-15.3,6.9-28,17.2-39.2,29.7
    c-7.2,8.1-10,19.7-20.3,25.3c0.6,2.4,1.4,4.8,1.9,7.2c0.5,2.2,1.5,3.1,3.9,2.4c10.6-3,21.5-2.9,32.3-2.6c3.2,0.1,4.8-1.1,5.9-4.1
    c12.3-33.2,35.7-54.2,70.1-62.5c4.5-1.1,4.7-2.6,3.1-6.4c-6.9-16.1-10.5-33-10.8-50.6c-0.2-10.7,1.6-21.2,3.5-32
    c-1.1,0.1-1.7,0.1-2.3,0.2c-14.4,3.3-29.1,4.1-43.7,2.4c-13.2-1.5-25.8-5.1-38-10.5c-2.7-1.2-4-1-4.8,2.3c-8,35-29.2,58.6-62.6,71.2
    c-2.9,1.1-4,2.4-3.8,5.4c0.4,8.2-0.1,16.4-1.4,24.5c-0.6,3.6-2.9,7.9-1.6,10.6c1.4,3.2,6.8,2.4,10.2,3.9
    C373.2,342.1,375.7,338.7,380.2,336.3z"/>
<path style="fill:#A3041B; transform:scale(0.2)" :class="ValueId+'_color4'" d="M240.3,500.6c-35.4,0.4-64.1-28.4-63.7-65.1c0.4-34.2,27.4-63.4,64.2-63.3
    c36.4,0.1,64.3,27.1,64.3,64.7C304.9,473.6,276,501.2,240.3,500.6z M314.2,443.9c-0.6,3.9,1.1,6.1,4.2,8.1c8.9,5.9,18.7,9,29.2,9.2
    c29.1,0.7,51.2-19.6,55.3-45.7c6-38.3-27.4-70.2-65.3-61.9c-3,0.7-3.8,2.2-4.2,4.6c-2.7,16.9-11.8,29.9-24.9,40.4
    c-2.3,1.9-2.6,3.2-1.4,5.8c4.9,10.2,7.9,20.9,7.1,32.9C314.3,439.2,314.6,441.6,314.2,443.9z M261.5,293.9
    c-31.9,4.4-51.7,35.6-43.9,67.3c0.9,3.9,2.3,4.4,5.7,3.4c9.8-2.9,19.8-2.9,29.7-1.2c18.1,3.3,33.1,12.1,44.7,26.5
    c2.1,2.7,3.7,3,6.4,0.7c13.2-11.3,20.6-25.2,20.3-43.8C325.4,316.9,299.5,288.7,261.5,293.9z"/>
<path style="fill:#0B9343; transform:scale(0.2)" :class="ValueId+'_color3'" d="M307.2,294.9c-4.9-2.5-9.5-5.7-14.7-7.4c-2.6-0.8-2.3-3-2.3-4.9c0-13.1,0-26.1,0-39.2
    c0-36.3,0-72.6,0-109c0-1.3,0-2.7,0-4c-0.2-3.2-2.1-5.1-5.1-5.1c-2.9,0.1-4.8,2.1-4.9,5.3c0,1.3,0,2.7,0,4
    c0,47.7-0.1,95.4,0.1,143.1c0,5-1.4,6.3-6.2,5.9c-4.3-0.4-8.7,0-13,0c-2.3-3-2.8-6.8-3.9-10.2c-4.2-13.2-11.7-24.5-21.1-34.3
    c-4.2-4.3-4.5-7.6-2.2-13.1c10.8-26.6,9.4-52.6-5.3-77.6c-4.2-7.1-4.2-7.3,3.5-10.9c16.3-7.8,30.1-18.5,41-33.1
    c3.1-4.2,5.6-8.7,8-13.3c0.9-1.8,1.8-3.9,4.2-3.8c2.4,0.1,3.2,2.2,4.1,4c7.8,15.6,18.9,28.3,33.5,37.9c5.6,3.7,11.5,6.8,17.5,9.9
    c5.2,2.6,5.5,3.2,2.3,8.3c-6.6,10.7-10.8,22.3-12.3,34.7c-1.9,15.2-0.2,30,6.1,44.2c3,6.8,2.9,8.5-2.2,13.8
    c-13.4,13.7-21.7,29.9-24.7,48.9C309.1,291,309,293.3,307.2,294.9z M186.8,386.5c3.1-2.6,2.6-4.3-0.1-7
    c-25-24.8-49.9-49.8-74.9-74.8c-1.1-1.1-2.2-2.1-3.1-3.2c-1.7-2-1.9-4.3-0.2-6.4c2-2.2,4.5-2.1,6.8-0.7c1.3,0.8,2.2,2,3.3,3.1
    c23.8,23.8,47.5,47.5,71.3,71.3c8.3,8.3,8.3,8.3,17.9,1.1c-3.8-8.9-8.1-17.6-10-27.1c-0.5-2.7-2.7-4-5-5.3
    c-7.6-4.3-14.8-9.1-21.1-15c-12.1-11.3-22.1-24-28.2-39.6c-0.9-2.3-2-3-4.9-2.6c-4.9,0.7-9.8,2-14.9,1.4
    c-12.1-1.5-24.1-3.6-34.9-9.6c-1.2-0.7-2.7-2.2-4-0.7c-0.9,1.1,0.6,2.4,1,3.6c0.4,0.9,0.9,1.8,1.3,2.7c5.7,13.2,9.1,26.7,7.1,41.2
    c-1.3,9.5-1.2,9.7,7.6,13.9c21.2,10.1,37.2,25.6,48.4,46.1c1.6,3,3.6,5.1,7.3,6c8,1.8,15.7,4.5,23,8.4
    C182.7,390.9,184.5,388.4,186.8,386.5z M387.6,355.7c2.8,2.4,4.2,1.7,6.5-0.6c18-18.2,36.1-36.2,54.2-54.3c1.8-1.8,3.6-3.5,5.3-5.3
    c2.5-2.5,5.3-3.1,7.9-0.6c2.6,2.5,1.6,5.1-0.8,7.4c-2.1,2.1-4.3,4.3-6.4,6.4c-17.7,17.7-35.5,35.5-53.2,53.2
    c-1.6,1.6-3.9,2.9-1.4,5.7c4.4,5.1,7.2,11.2,10,17.3c4.4-1,7.4-3,9.8-7.3c11.9-21.5,29.2-37.5,52-47.1c3.8-1.6,4.9-3.9,4.2-7.7
    c-2.1-11.7-0.9-23.3,2.5-34.6c1.7-5.8,4.2-11.4,6.5-17.4c-0.9,0.1-1.4,0-1.8,0.2c-16.2,8.5-33.3,11.4-51.4,8.5
    c-2.7-0.4-4.3,0.7-5.5,3.2c-2.4,5-4.8,10-7.7,14.6c-10.4,16.8-24.3,30-41.6,39.5c-4.1,2.3-5.6,5.3-5.3,9.7
    C377.3,348.9,382.9,351.7,387.6,355.7z"/>
<path style="fill:#E41E27; transform:scale(0.2)" :class="ValueId+'_color5'" d="M255.6,421.2c-10.8,1.4-20.2-9.6-19.8-19.1c0.5-11.4,8.8-20.2,19.9-20.1c10.9,0.1,19,8.8,19.5,19.9
    C275.7,411.7,266.2,422.6,255.6,421.2z M275.1,431.8c0.1,4.9,4.6,9.4,9.7,9.5c5.5,0.1,10.1-4,10.4-9.3c0.3-5.5-3.9-9.7-9.6-9.8
    C279.4,422.1,275.1,426.1,275.1,431.8z M364.3,362.9c-5.7,0-9.8,3.9-9.8,9.5c0,5.5,3.9,9.5,9.3,9.6c5.7,0.1,9.8-3.9,9.8-9.5
    C373.6,365.9,370.7,363,364.3,362.9z M379.1,392c3,0,4.3-1.8,4.5-4.8c0.2-3.2-1.7-4.8-4.4-4.9c-2.7-0.1-4.8,1.3-4.7,4.6
    C374.5,389.9,375.7,392.1,379.1,392z M275.1,313.1c0,4.7,4.6,9.4,9.6,9.6c5.2,0.2,10.2-4.2,10.4-9.3c0.2-5.3-4.5-10.4-9.8-10.5
    C280.1,302.9,275.2,307.7,275.1,313.1z M300.4,332.7c2.9,0,4.6-2.5,4.4-5.1c-0.1-2.5-1.7-5-4.8-4.7c-2.9,0.2-5.1,1.6-4.8,4.7
    C295.2,331.5,297.5,332.7,300.4,332.7z"/>
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
                                    <button :style="{background:'rgba('+getterMistletoeBg1+')'}" @click="ShowElement(getterMistletoeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMistletoeBg2+')'}" @click="ShowElement1(getterMistletoeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMistletoeBg3+')'}" @click="ShowElement2(getterMistletoeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMistletoeBg4+')'}" @click="ShowElement3(getterMistletoeBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterMistletoeBg5 +')'}" @click="ShowElement4(getterMistletoeBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterMistletoeBg6+')'}" @click="ShowElement5(getterMistletoeBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMistletoeBg7+')'}" @click="ShowElement6(getterMistletoeBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterMistletoeBg8+')'}" @click="ShowElement7(getterMistletoeBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMistletoeBg9+')'}" @click="ShowElement8(getterMistletoeBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMistletoeBg10+')'}" @click="ShowElement9(getterMistletoeBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Mistletoe= [
                 {top:135 ,left:106},
                {top:95 ,left:32},
                {top:127 ,left:12},
                {top:9 ,left:99},
                {top:502 ,left:81},
                {top:362 ,left:123},
                {top:251 ,left:133},
                {top:376 ,left:155},
                {top:134 ,left:110},
                {top:468 ,left:124},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Mistletoe[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Mistletoe[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Mistletoe'){
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
                getterMistletoeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Mistletoe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Mistletoe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Mistletoe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMistletoeBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMistletoeBg10: {
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
                            name:'Mistletoe',
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