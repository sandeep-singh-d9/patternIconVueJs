<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#FED400; transform:scale(0.2)" :class="ValueId+'_color1'" d="M387.2,271c-18.8,11.7-37.7,23.4-57.2,35.6c19,11.7,37.5,23.1,56.1,34.5c-1.3,3.9-5,3.4-7.9,3.8
    c-5,0.7-6.1,3-5,7.8c0.8,3.5,3.1,7,0.8,10.8c-17.1-10.5-34.3-21-51.4-31.6c-4.2-2.6-4.4-0.5-4.4,3c0.1,17.2,0,34.3,0,51.5
    c0,2.4-0.1,4.7-0.1,7.1c-4.4-0.7-6.3-4.5-9-7.1c-2.7-2.7-4.7-2.7-7.4,0c-2.7,2.7-4.7,6.5-9,7.1c-0.1-19.5-0.2-39-0.1-58.6
    c0-3.6-0.4-5.4-4.4-2.9c-17.1,10.6-34.3,21-51.4,31.4c-2.2-4,0.3-7.7,1-11.4c0.8-4.2-0.3-6.2-4.6-7c-3-0.6-6.9,0.2-8.4-3.9
    c18.5-11.4,37-22.7,56.1-34.5c-19.5-12.1-38.3-23.8-57.2-35.6c1.4-2.6,4.1-2.7,6.5-3.4c8.4-2.3,8.4-2.3,7-10.6
    c-0.4-2.1-1.2-4.2,0.4-6.2c12,5.5,22.6,13.4,34,20c5.3,3,10.5,6.2,15.6,9.6c4,2.7,5.6,2.6,5.5-2.9c-0.2-18.1,0-36.3,0-54.4
    c0-1.6,0.1-3.2,0.1-4.7c4.4,0.6,6.3,4.4,9,7.1c2.7,2.7,4.7,2.7,7.4,0c2.7-2.7,4.7-6.5,9-7.1c0.1,19.9,0.2,39.8,0.2,59.7
    c0,4.6,1,5.1,4.8,2.7c16.6-10.2,33.3-20.3,49.9-30.4c2.1,2.3,1,4.8,0.5,7.2c-1.5,7.2-1.2,7.6,6.1,9.7
    C382.3,268.1,385.5,268.1,387.2,271z M372.8,552.5c-17.1-17.1-34.1-34.1-51.2-51.1c-2.1-2-3.3-4-3.3-7.2c0.1-19.4,0-38.8,0-58.1
    c0-1.7-0.5-3.6,1-5.1c-2.3-6.1-8-9.1-12.5-13.1c-0.7-0.6-2.1-0.6-2.8,0c-4.5,4-10.2,7-12.5,13.1c1.4,1.5,1,3.3,1,5.1
    c0,19-0.1,38,0,57c0,3.7-1.1,6.2-3.7,8.8c-18,17.8-35.9,35.7-53.7,53.7c-5.7,5.7-6,13.4-0.8,18.5c4.8,4.8,13.3,4.6,18.7-0.7
    c7.2-7.1,14.4-14.2,21.4-21.4c5.6-5.8,11-11.7,16.6-17.7c2.2,2.6,1.5,4.2,1.5,5.7c0,16.2,0,32.4,0,48.7c0,7.2,4,12.5,10.3,14.2
    c4.9,1.3,10.6-1.3,13.6-6.2c2-3.4,2.1-7.1,2.1-10.9c0-16.7,0-33.4,0-50.1c0.5-0.3,1-0.6,1.5-0.9c2.9,3.1,5.7,6.4,8.7,9.4
    c9.6,9.7,19.2,19.4,28.9,29c5.7,5.6,14.1,6,19.1,1c5.1-5,4.7-12.6-0.8-18.6C374.8,554.4,373.7,553.5,372.8,552.5z M288.3,109.6
    c2.9,2.9,4.2,5.8,4.2,9.9c-0.2,18.8-0.1,37.6-0.1,56.4c0,1.7,0.5,3.6-1,5.1c1.9,6.9,7.9,10.3,12.9,14.4c0.6,0.5,1.7,0.4,2.3-0.1
    c4.9-4.3,11-7.5,12.8-14.5c-1.8-1.8-1.1-4.1-1.1-6.2c-0.1-18.4,0.1-36.8-0.1-55.2c0-3.9,1.1-6.6,3.9-9.4
    c17.9-17.6,35.6-35.4,53.3-53.2c6.3-6.3,6.5-13.1,0.9-18.7c-5.5-5.5-12.7-5.2-18.8,0.9c-11.4,11.3-22.7,22.7-34,33.9
    c-1.3,1.3-2.3,3.2-5.1,3.7c0-2.9,0-5.5,0-8.2c0-14.8,0.1-29.7-0.1-44.5c-0.1-8.3-5.9-14-13.8-13.9c-6.2,0.1-11.8,6.5-12,13.8
    c-0.1,4.2,0,8.3,0,12.5c0,13.3,0,26.7,0,40.1c-2.3,0-2.9-1.4-3.9-2.3c-11.6-11.6-23.2-23.2-34.8-34.8c-6.3-6.3-13.8-6.8-19.3-1.3
    c-5.7,5.7-5.2,12.6,1.4,19.2C253.3,74.8,270.7,92.3,288.3,109.6z M46.9,235.8c3.6,1.7,7.4,1,11,0.1c22-5.3,44.1-10.4,66.1-16
    c7.6-1.9,14.2-2.2,20.8,3.1c5.7,4.5,12.5,7.5,18.6,11.6c9.3,6.2,19.7,10.9,28.3,18.2c6.1,1.5,11.5-1.4,17.1-3c0.9-0.3,1.6-1.1,2-2
    c1.2-2.8-2.4-14.7-5.1-17.1c-15.7-9.5-31.1-19.6-47.2-28.4c-8.2-4.5-12-10.5-13.8-19.5c-4.6-22.2-10.1-44.2-15.4-66.2
    c-2-8.5-8.9-12.7-16.9-10.6c-6.1,1.6-9.5,8.4-7.9,15.7c1.1,5,2.3,10,3.5,15c2.9,12.8,5.9,25.6,9,39.3c-2.2-1.1-3.5-1.7-4.6-2.4
    C98.6,165,84.8,156.4,71,148c-6.5-4-14.6-2.3-18.3,3.7c-3.8,6.1-1.7,13.9,4.7,17.9c10.6,6.5,21.3,12.8,31.8,19.6
    c4.6,3,9.9,5.2,14.4,9.7c-5,1.2-9.1,2.2-13.3,3.2c-14,3.4-28,6.6-41.9,10.2c-5.5,1.4-8.7,5.5-9.1,11.2
    C38.9,229.2,41.8,233.3,46.9,235.8z M401.6,249.5c5.7,1.8,11.2,4.7,17.4,3.3c0.5-1.8,2.1-2.3,3.4-3.1c16.2-9.9,32.4-19.7,48.5-29.7
    c3.1-1.9,5.9-2.3,9.4-1.4c10.1,2.6,20.3,5,30.5,7.4c14.4,3.5,28.7,7.1,43.1,10.3c8.8,2,15.5-2,17.2-9.3c1.6-7.4-2.8-13.2-11.9-15.4
    c-11.5-2.8-23-5.5-34.5-8.3c-5.8-1.4-11.5-2.9-18.5-4.7c16.2-10,31.1-19.2,46-28.4c7.3-4.5,9.6-11.7,5.8-18.1
    c-3.9-6.5-11.6-7.9-19.1-3.4c-8.6,5.2-17.2,10.6-25.8,15.7c-6.2,3.6-11.9,8.1-19.2,11.2c0.2-1.8,0.3-3,0.6-4.1
    c3.8-16.5,7.7-33,11.5-49.5c1.9-8.4-1.6-14.3-9.4-16.2c-7-1.7-13.7,2.5-15.4,10.2c-5.7,24.6-11.3,49.2-17,73.7
    c-0.7,2.8-1.1,5.7-4.1,7.5c-18.5,11.1-36.8,22.3-55.2,33.5c-2.6,2.2-6.2,14.1-5.2,16.9C400.1,248.4,400.7,249.2,401.6,249.5z
     M552.2,376c-24.1,6.2-48.2,12.3-72.2,18.5c-2.4,0.6-4.5,0.8-6.7-0.6c-18.3-11.3-36.6-22.6-55-33.9c-6.3-2.3-11.7,0.9-17.3,2.7
    c-0.7,0.2-1.1,1-1.4,1.8c-1.2,3,2.6,15.6,5.5,18c0.6,0.1,1.2,0.2,1.7,0.5c17.6,10.7,35.1,21.4,52.7,32c2.7,1.6,3.6,4,4.3,6.7
    c4.2,17.6,8.4,35.3,12.5,52.9c1.8,7.5,3.3,15,5.4,22.4c1.9,6.9,9,11.1,14.9,9.5c7.6-2,11.4-8.6,9.6-16.3c-2.3-9.6-4.8-19.1-6.9-28.8
    c-1.8-8.2-4.5-16.3-5.5-25.6c4.2,2.6,7.6,4.7,11,6.7c11.6,7.1,23.2,14.3,35,21.3c7.1,4.2,15.1,2.2,18.6-4.2
    c3.4-6.3,1.1-13.6-5.7-17.7c-6.3-3.8-12.5-7.5-18.8-11.3c-8.7-5.3-17.3-10.7-26.6-16.5c2-0.7,3.2-1.3,4.5-1.6
    c16.2-4.1,32.5-8.1,48.7-12.3c8.1-2.1,12.4-8.7,10.6-15.8C569.1,376.9,561.5,373.7,552.2,376z M209.8,362.9
    c-5.7-1.9-11.2-5-17.5-2.8c-18.3,11.3-36.7,22.5-55,33.8c-1.8,1.1-3.4,1.2-5.5,0.7c-15.3-3.9-30.6-7.6-45.9-11.5
    c-9.7-2.4-19.5-5-29.2-7.5c-8.1-2-15,1.6-17,8.8c-1.9,6.8,2.3,13.4,10,15.7c1.7,0.5,3.4,0.9,5.2,1.3c16,4,31.9,8.1,48.2,12.2
    c-1.7,2.5-4,3.3-5.9,4.5c-13.3,8.1-26.7,16.1-40,24.3c-5.6,3.5-7.6,9.3-5.5,15.4c1.8,5.3,6.9,8.2,13.1,8c3.9-0.1,6.6-2.4,9.6-4.2
    c14.1-8.4,28-16.9,42.2-25.5c0.6,2.3-0.2,4.1-0.6,5.9c-3.8,16.1-7.6,32.2-11.6,48.3c-1,4.2-0.3,7.9,2.2,11.1
    c2.9,3.8,6.7,6.2,11.8,5.2c6-1.2,9.6-5.1,11-11.1c5.2-21.7,11-43.2,15.3-65c2-10.3,6.7-16.4,15.7-21.3c15.5-8.3,30.2-17.8,45.3-26.9
    c2.7-2.4,6.5-14.7,5.5-17.7C210.9,364,210.5,363.1,209.8,362.9z"/>
<path style="fill:#FF2328; transform:scale(0.2)" :class="ValueId+'_color2'" d="M374.9,450.7c3.7,3.7,6.1,7.8,4.8,13.2c-2.4,10.1-14.1,13.2-21.9,5.6c-13-12.7-25.8-25.7-38.7-38.5
    c-4.8-4.2-8.6-12.5-14.1-12.1c-4.8,0.3-9.1,7.8-13.7,12.1c-12.7,12.7-25.4,25.5-38.2,38.1c-6.4,6.3-14,6.3-19.3,0.5
    c-4.9-5.5-4.5-12.5,1.5-18.5c17.6-17.7,35.2-35.3,52.8-52.9c1.5-1.5,2.9-3.2,4.4-4.8c3.4-3.3,6.9-6.4,10.1-9.9c2-2.1,3.3-2,5.2,0
    c3.2,3.4,6.7,6.6,10.1,9.9C337,412.5,355.9,431.6,374.9,450.7z M239.8,349.6c0.7-2.9,0.2-4.6-3.3-5.4c-4-0.9-8.2-1-11.9-3.1
    c-1.7-0.3-3.5-0.5-5.2-0.9c-24.7-5.9-49.4-11.8-74.1-17.6c-10.3-2.4-17.9,3.7-16.9,13.5c0.6,6.1,4.3,9.5,10.1,10.9
    c18,4.4,35.9,8.8,53.9,13.2c5,1.1,9.9,2.3,14.9,3.3c2,0.4,3.4,0.7,2.7,3.3c-1.5,5.2-2.8,10.5-4.2,15.7c-0.3,1.6-0.4,3.1-0.8,4.7
    c-4,16.9-8,33.8-11.9,50.7c-1.5,6.6,1.7,12.4,7.8,14.9c5.6,2.2,12.4,0,15.3-5.4c1.3-2.4,1.9-5.2,2.5-7.8c6-25.3,12-50.7,18-76
    C237.7,358.8,238.7,354.2,239.8,349.6z M482.1,330.7c-1.8-6.6-8.8-10.1-16.7-8.2c-6.7,1.6-13.4,3.3-20.1,4.8
    c-19.7,4.6-39.5,9.2-59.3,13.7c-3.7,2-7.9,2.3-11.9,3.2c-3.5,0.8-4.1,2.4-3.3,5.4c1.1,4.6,2.1,9.2,3.2,13.8c0.5,1.9,1,3.8,1.4,5.7
    c5.8,24.6,11.5,49.1,17.5,73.7c1.9,8,8.5,12.2,15.3,10.4c7.4-1.9,11.1-8.5,9.2-16.5c-4.1-18.1-8.2-36.1-12.4-54.2
    c-1.4-5.3-2.7-10.5-4.2-15.8c-0.7-2.6,0.6-3,2.6-3.4c5-1,9.9-2.2,14.9-3.3c17.8-4.4,35.6-8.7,53.3-13.1
    C480.2,344.8,484.2,338.3,482.1,330.7z M292.6,218.5c3.4,3.3,6.9,6.4,10.1,9.9c2,2.1,3.3,2.1,5.2,0c3.2-3.4,6.7-6.6,10.1-9.9
    c1.5-1.6,2.9-3.3,4.4-4.8c17.5-17.5,34.9-35,52.4-52.4c3.6-3.5,6-7.5,5-12.6c-0.9-4.8-3.7-8.1-8.5-9.8c-5.3-1.9-9.7-0.3-13.5,3.5
    c-12.9,12.8-25.8,25.7-38.6,38.5c-4.6,4.7-8.8,12.9-14.2,12.6c-4.8-0.2-9.2-8-13.8-12.5c-12.9-12.8-25.7-25.8-38.7-38.5
    c-7.7-7.6-19.4-4.5-21.8,5.6c-1.3,5.4,1.2,9.5,4.9,13.2C254.7,180.3,273.6,199.4,292.6,218.5z M371,260.8c-1.1,4.1,0,6.3,4.3,7.1
    c4,0.8,7.9,2.1,11.9,3.1c0.8,0.1,1.6,0.2,2.3,0.4c25.2,6.4,50.5,12.9,75.7,19.2c8.3,2.1,15.3-1.5,17-8.6c1.9-7.6-2.4-13.9-10.9-16.1
    c-17.4-4.4-34.8-8.8-52.2-13.2c-3.2-0.8-6.4-1.6-9.6-2.4c-8.8-2.2-8.7-2.2-7-11c0.6-3,0.9-6.1,2.4-8.9c0.3-1.7,0.5-3.5,0.9-5.2
    c3.9-16.5,7.9-32.9,11.8-49.4c1.7-7.4-1.9-13.7-8.9-15.7c-7.1-2-13.6,1.7-15.6,9.6c-3.3,12.8-6.1,25.7-9.4,38.4
    c-3.6,14.1-5.9,28.5-10.7,42.3C373.3,254.1,372,257.4,371,260.8z M145.6,290.5c26-6.5,51.9-13,77.9-19.5c3.8-1,7.6-2.2,11.4-3
    c4.3-0.9,6.3-2.6,4.5-7.3c-1.1-3.1-1.4-6.5-2-9.8c-0.3-0.5-0.7-1-0.8-1.5c-6.2-26.1-12.3-52.2-18.6-78.3
    c-2.1-8.6-8.1-12.8-15.3-11.1c-7.8,1.8-11.2,8.1-9.2,16.9c4.1,17.9,8.2,35.8,12.3,53.6c2.1,4.3,2.1,9.2,3.6,13.6
    c1.1,3.1,0.1,4.3-2.8,4.9c-5,1.1-9.9,2.5-14.9,3.7c-17.7,4.5-35.5,8.9-53.2,13.5c-8.4,2.2-12.5,9.8-9.6,17.2
    C131.4,289.8,137.7,292.5,145.6,290.5z"/>
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
                                    <button :style="{background:'rgba('+getterSnowflakeBg1+')'}" @click="ShowElement(getterSnowflakeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSnowflakeBg2+')'}" @click="ShowElement1(getterSnowflakeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <!--<button :style="{backgroundColor:'rgba('+getterSnowflakeBg3+')'}" @click="ShowElement2(getterSnowflakeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSnowflakeBg4+')'}" @click="ShowElement3(getterSnowflakeBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterSnowflakeBg5 +')'}" @click="ShowElement4(getterSnowflakeBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSnowflakeBg6+')'}" @click="ShowElement5(getterSnowflakeBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSnowflakeBg7+')'}" @click="ShowElement6(getterSnowflakeBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterSnowflakeBg8+')'}" @click="ShowElement7(getterSnowflakeBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSnowflakeBg9+')'}" @click="ShowElement8(getterSnowflakeBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSnowflakeBg10+')'}" @click="ShowElement9(getterSnowflakeBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Snowflake= [
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
            var randomNumber = Snowflake[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Snowflake[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Snowflake'){
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
                getterSnowflakeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Snowflake') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Snowflake') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Snowflake') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSnowflakeBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowflakeBg10: {
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
                            name:'Snowflake',
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