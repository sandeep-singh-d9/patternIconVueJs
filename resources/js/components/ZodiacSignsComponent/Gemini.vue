<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M536,279.2c5.5,10.2,13,17.3,20.9,24c4.7,4,9.6,7.9,13.8,12.4c10.5,11.4,9.7,24.4-2,34.6
	c-3.9,3.4-9.5,5.5-12,9.7c-2.7,4.6,3.6,8.6,4.5,13.6c1.5,8.5,0.1,16.2-4.8,23.4c-1.1,1.6-2.4,2.8-1.2,5.2
	c5.9,11.4,2.2,21.6-5.7,30.2c-5,5.5-5.4,9.8-1.9,16.4c8.4,16,2.2,35.6-13.6,45.4c-14.1,8.7-29.8,10-45.7,7.9
	c-45.6-6.1-88.3-20.6-128.1-43.7c-3.6-2.1-5.6-2.3-8.5,1.5c-35.6,46.2-83.4,70.4-140.6,77.6c-6.7,0.8-13.5,1.3-20.3,1.6
	c-9.5,0.5-18.1-1.5-23-10.7c-5.2-9.6-1.9-18.2,4.3-26c3.3-4.2,6.9-8.1,11.2-13c-16.7,4.5-32.2,9.1-48.1,11.6
	c-15.3,2.4-30.6,3.1-45.6-2c-24.9-8.5-33.7-34-21.9-53.2c2.6-4.3,1.4-7.8-1.8-11.3c-6.5-7.1-12.4-15.2-9.4-25.2
	c2.1-7.1,1-12.3-2.2-18.5c-4.4-8.6-2.9-17.6,2.3-25.6c2.4-3.7,1.4-5.2-1.8-7.3c-4-2.6-7.8-5.6-11.3-8.9c-9.5-9-10.2-20.8-2.1-31.2
	c3.6-4.6,8-8.4,12.6-11.9c3-2.2,3.2-4,1.7-7.3c-8.4-18.4-15.1-37.3-17.9-57.4c-4.6-32.5,2.1-61.2,28.4-83.1c1.9-1.6,2.5-3.3,2.6-5.6
	c0.8-17.3,9.4-29.6,23.3-39.6c63.6-45.5,149.4-48.2,215.1-6c3.7,2.4,5.9,1.9,9.3-0.3C368.9,72,424.1,64,481.9,90.2
	c41,18.6,66.1,52.2,81.4,93.7c7.9,21.5,12.1,43.8,14.1,66.5c1.3,14.8-6.4,24.6-21.1,26.9C549.8,278.2,543.2,278.5,536,279.2z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M204.8,93.8c-15.6,3.9-31.2,7.9-46.1,14.2c-9.2,3.9-18,8.5-26.1,14.4c-23.4,17-31.7,39.4-25.2,67.6
	c5.8,25,18.7,46.4,33.5,66.8c11,15,23.4,28.7,36.5,41.9c0.2,1.1-0.1,1.7-1.4,1.3c-40.3-31.4-72.1-69.2-87.5-118.9
	c-3.3-10.6-3.4-21.6-2.1-32.6c0.8-6.6,3.6-12.3,8.8-16.5C127.4,106.6,163.7,93.2,204.8,93.8z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M560,330c2.7,3.9-0.5,5.9-2.8,7.7c-5.8,4.8-12,9.2-17.8,14c-3.5,2.9-6,6.5-3.8,11.5
	c-1.3,4.2-0.1,7.8,2.9,10.9c2.6,2.8,4.5,6.1,5.6,9.7c-1.5,4.8-5.6,7.6-8.9,11c-4.4,4.6-4.3,6.5,0.6,10.7c6.4,5.5,7.1,8.8,1.2,14.9
	c-10.6,10.9-12.3,22.3-4.8,35.7c4.1,7.3,1.6,16-5.2,21.4c-6.1,4.9-13.3,7.1-21.1,6.9c-26-3.7-48.7-14.6-68.7-31.4
	c-19.2-16.2-33.4-36.4-44.5-58.7c-1.3-2.6-2.9-5.3-2-8.4c3.7-14,7.6-28,9.8-42.4c4.3-28.2,4.8-56.4-0.1-84.6
	c-1.4-8.2,3.6-13.3,6.2-20.1c11,9.2,22,17,34.5,22.6c2.5,1.1,2.5,2,1.3,4.4c-7.3,13.5-4.8,25.7,7,35.6c14,11.8,33.2,12.9,45.7,2.6
	c5.7-4.7,9.4-10.8,11-18c1.7-8.3,1.7-8.4,10.6-6.7c-1.5,1-3.1,1-1.7,4.1c7.2,15.9,16.8,29.7,31.5,39.6
	C550.6,325.8,555,328.5,560,330z M75.6,367.4c5-8.4,4.5-11.3-3.3-18c-5.1-4.4-11.2-7.5-15.9-12.4c-0.9-2.8,1-4.4,2.4-6.3
	c6.3-8.5,14.5-15.2,21.6-22.9c6.5-7.1,13.6-14,15.9-24c0.7-3.1,1.9-6.1,1.1-9.3c1.8-10.8,0.8-21.6-0.3-33.9
	c5.3,7.3,9.8,13.3,14.2,19.4c1.9,2.6,0.3,4.1-1.9,5.1c-2.6,1.2-4.9,2.9-5.8,5.7c-0.5,1.5-2.6,4.7,2.1,4.1c2.5-0.3,1.5,1.6,1.6,2.8
	c0.9,25.7,21.2,39.3,45.6,30.5c2.8-1,4.9-1.4,6.6,1.4c4.5,5.6,9.3,11,14.5,15.9c12.2,11.6,17,26.3,19.2,42.1
	c4.7,33.9-1.3,66.2-16.4,96.9c-1.9,3.9-4,7.8-7.7,10.5c-20.8,6.3-41.7,11.8-63.8,9.7c-6.4-0.6-12.5-2.4-17.8-6.3
	c-7.6-5.6-9.7-14.9-5.4-23.4c6.9-13.7,5.8-21.4-4.3-33.1c-6.5-7.5-6.5-10.3,1-16.6c4-3.5,3.8-6.5,0.2-10c-2.8-2.8-6.2-5.1-7.9-8.8
	C69.9,379.3,72.1,373.2,75.6,367.4z M390.8,385.9c4.8,13.2,12.2,25,20.3,36.3c11,15.4,24.1,28.7,40,39.4c14.9,10,31,16.6,48.4,20.4
	c2.3,0.5,4.7,0.7,6.5,2.5c-11.3,2-22.2-0.2-33.1-2.5c-36.3-7.5-71.1-19.3-103.3-37.9c-4-2.3-4.6-3.8-2.1-7.9
	C377.5,420.4,384.3,403.2,390.8,385.9z M169.1,474.7c5.8-10.2,11.1-20.5,14.9-31.7c6.7-20.2,10.1-40.9,8.9-62
	c-0.8-14.6-2.8-29.2-10.3-42.4c-4.4-7.7-11.5-13-16.9-19.9c-2.3-3-5.2-5.5-6.2-9.3c14.9,11,30.1,21.6,46.8,29.6
	c1.7,0.8,2.2,1.9,2.5,3.7c5.4,38.9,5.8,77.4-7.4,115.1c-2,5.7-5,9.4-11.2,10.9C183.2,470.3,176.4,473.5,169.1,474.7z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M554,220.6c-19.9-55.8-59.2-92.3-113.6-113.6c-14.5-5.7-29.5-9.2-44.5-13.2
	c53.8-9,109.7,18.1,137.6,66.6c10.6,18.4,18,38,21.9,58.9C555.7,220.5,555.2,220.9,554,220.6z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M183.5,515.5c0.3,2.4,1.5,2.3,3.3,1.4c19-8.9,36.6-20,53.5-32.4c8.9-6.5,17-13.8,24.7-21.5c13.7-13.6,25.8-28.6,36.1-45
	c14.1-22.4,24.1-46.6,30.9-72.1c4.3-16.1,7-32.5,8.7-49.1c1.5-15.1,1.4-30.3,0.9-45.4c-1.3-39.7-9.4-77.9-26.4-114
	c-0.8-1.8-1.5-3.7-2.2-5.5c19,14.2,33.3,32.4,45,52.8c14.4,25.2,23.1,52.5,26.7,81.1c6.8,54.5-1.5,106.7-28.1,155.2
	c-19.8,36-47.2,64.4-85.1,81.7c-21.5,9.8-44.1,15.7-67.7,17.8c-5.6,0.5-11.1,1.1-16.6,1C183.1,521.4,180.9,519.8,183.5,515.5z
	 M527.6,261.4c-29.2,0.9-57-4.5-83.2-17.6c-17.8-8.9-32.2-21.8-44.6-38.2c-1.2,7-2.9,13.2-6.5,20c-3.3-11.5-7.1-21.7-11.6-31.6
	c-12-26.5-28.7-49.6-50.1-69.3c-5.5-5-5.3-5.2,1.6-8.4c14-5.1,28.1-2.1,41.8,0.9c32,6.9,59,23.2,83.5,44.6
	c28.1,24.5,49.5,54,65.7,87.4C526.1,253,529.2,256.6,527.6,261.4z M74.3,195.5c5.1,9,6.8,18.2,5.5,28.9c-1.2,10.1,0.1,20.6,1.3,30.8
	c1.4,11.9-0.7,22.4-8.1,31.9c-1.1,1.4-2.1,2.7-3.4,0c-5-11-9.2-22.3-11.9-34.1c1.8-17.6,6.1-34.6,12-51.3
	C70.6,199.2,70.7,196,74.3,195.5z"/>
<path :style="{fill:'rgba(35, 25, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M183.5,515.5c3.2-6.4,9-10.6,13.4-16c17.2-21.3,25.6-46.1,29.8-72.7c2.8-17.2,2.7-34.6,2.3-51.9
	c-0.2-8.7-1.3-17.4-2-26.7c6.2,1.9,12,3.7,18.3,3.2c5.4-0.5,10-2.4,13.6-6.5c2.4-2.8,3.5-4.6-1.8-5.8c-25.5-5.5-48.3-17.3-70.4-30.7
	c-1.2-0.7-2.2-1.7-3.2-2.6c-1.6-3.1-4.7-4.8-7.3-6.9c-10.6-9.8-20.2-20.5-29.2-31.7c-14.7-18.3-27.4-37.9-36-59.9
	c-4.9-12.6-7.8-25.5-7.1-39.2c0.9-19,10-33.5,24.7-44.6c22.5-16.9,48.2-26.1,76.1-29.7c40.3,0.6,76.7,12.4,108.2,38.1
	c9.6,12.8,13.4,28,18,42.8c11.5,37.1,14.4,75.3,12.1,113.8c-2.4,40.9-12.9,80-32.4,116.2c-9.9,18.3-22.1,35-36.2,50.5
	c-23.6,25.9-51.8,45.5-82.9,61.1c-1.8,0.9-3.5,2-5.5,2.2C183.9,518.7,182.3,518.2,183.5,515.5z M527.6,261.4
	c-7.9-21.7-20-41.1-33.8-59.4c-18.9-25.2-41.4-46.6-68.6-62.8c-21.5-12.7-44.1-21.3-69.4-23.2c-7.6-0.6-15,0.6-22.5,0.4
	c19-12.8,40-19.9,62.7-22.6c43.8,6.7,82,24.8,114.3,55.3c18.4,17.4,31.9,38.1,41.5,61.5c1.3,3.1,2.2,6.4,3.1,9.7
	c0.6,3.4,1.7,6.6,2.6,9.9c2,8.3,2.9,16.7,2.5,25.2c-0.2,3.5-2.9,4.3-5.7,5C545.4,262.2,536.5,261.4,527.6,261.4z M74.3,195.5
	c-6,11.9-8.9,24.9-11.8,37.8c-1.2,5.2-1.7,10.5-2.5,15.8c-0.2,1.7-0.6,3.1-2.3,3.8c-5.2-22.1-7.1-44,4.7-64.8
	c1.6-2.7,3.5-5.3,5.4-7.9c0.4-0.6,1-1.3,2.6-0.9C71.7,184.6,73,190,74.3,195.5z"/>
<path style="fill:#FCFCFC;transform:scale(0.2)" d="M475,281.2c0.2,5.2,0.6,11.6,3.6,17.4c1.7,3.2,0.4,3.7-2.4,3.7c-10.7,0.1-19.2-4.3-25.9-12.5
	c-2.2-2.7-1.5-4.3,1.1-6.2c5-3.7,10.3-6.8,16.1-8.9C475.1,272.1,475.1,272.1,475,281.2z"/>
<path style="fill:#FBFBFA;transform:scale(0.2)" d="M560,330c-2.3,2.1-4.2,0-5.9-0.9c-14.4-7.3-25.6-18-33.7-32c-2.5-4.3-4.5-8.9-6.8-13.3
	c-1.7-3.4-0.4-4.6,3-4.6c6.2,12.9,14.3,24.5,25.4,33.7c4.4,3.7,8.8,7.4,13.1,11.2C557.1,325.8,559.1,327.4,560,330z"/>
<path style="fill:#F8F7F6;transform:scale(0.2)" d="M97.5,274.5c2.9,9.9-1.5,17.8-7.6,24.8c-9.7,11-19.9,21.5-29.8,32.3c-1.4,1.6-2.4,3.6-3.6,5.4
	c-4.9-2.9-4.1-6.4-0.8-9.7c3.4-3.4,7-6.5,10.7-9.5c9.4-7.8,18.2-16.1,24.6-26.7C94.1,285.9,96.4,280.4,97.5,274.5z"/>
<path style="fill:#F3F1EF;transform:scale(0.2)" d="M124.2,297c-7.4-7.1-8.9-14.3-7.8-22.4c0.3-2,1.4-2.7,3.3-2.7c2.2,0,2.5,1.4,2.4,3.2
	C121.7,281.9,122.1,288.6,124.2,297z"/>
<path style="fill:#F9F8F7;transform:scale(0.2)" d="M544.1,383.8c-3.1-4-6.6-7.8-9.2-12.1c-1.6-2.6-3.4-6.1,0.7-8.6c2.3,3.3,4.8,6.6,7,10.1
	C544.7,376.5,545.5,380,544.1,383.8z"/>
<path style="fill:#F9F8F8;transform:scale(0.2)" d="M134.2,302c1.5-4.1,2.8-7.7,4.2-11.7c3.4,3.2,6.7,6.3,10.4,9.8C144.1,302.8,139.4,302.3,134.2,302z"
	/>
<path style="fill:#FAF8F8;transform:scale(0.2)" d="M490.8,295.5c0.7-5.2,1.4-10.4,1.3-15.5c0-2.2,0.5-3.3,3.1-3.1c2.5,0.2,2.9,1.5,2.8,3.5
	C497.7,286.4,495.4,291.4,490.8,295.5z"/>
<path style="fill:#E6D187;transform:scale(0.2)" d="M458.3,269c-3.6,2.2-7,4.2-10.6,6.4C449.9,266.3,451.8,265.1,458.3,269z"/>
<path style="fill:#F6F3F0;transform:scale(0.2)" d="M75.6,367.4c-2.2,6.1-3.3,12.4-4.5,18.8C66.4,378.4,71,372.9,75.6,367.4z"/>
<path style="fill:#D5CECA;transform:scale(0.2)" d="M176.1,299.9c0.5-0.4,0.9-0.9,1.4-1.3c2.2,2.2,5.9,3.2,6.1,7.1C181.1,303.8,178.6,301.9,176.1,299.9z
	"/>
<path style="fill:#C7B9B3;transform:scale(0.2)" d="M554,220.6c0.4-0.4,0.9-0.9,1.3-1.3c1.4,3.5,2.3,7.1,2,10.9C555.5,227.2,554.7,223.9,554,220.6z"/>
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
                                    <button :style="{background:'rgba('+getterGeminiBg1+')'}" @click="ShowElement(getterGeminiBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGeminiBg2+')'}" @click="ShowElement1(getterGeminiBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGeminiBg3+')'}" @click="ShowElement2(getterGeminiBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGeminiBg4+')'}" @click="ShowElement3(getterGeminiBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGeminiBg5+')'}" @click="ShowElement4(getterGeminiBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGeminiBg6+')'}" @click="ShowElement5(getterGeminiBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGeminiBg7+')'}" @click="ShowElement6(getterGeminiBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Gemini= [
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
            var randomNumber = Gemini[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Gemini[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Gemini'){
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
                getterGeminiBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Gemini') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGeminiBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Gemini') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGeminiBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Gemini') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGeminiBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGeminiBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGeminiBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGeminiBg7: {
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
                            name:'Gemini',
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