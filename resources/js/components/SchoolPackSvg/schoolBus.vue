<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path style="fill:#FEFEFE;transform:scale(0.2)" d="M0.11,205.5C0.11,138.09,0.15,70.69,0,3.28C-0.01,0.54,0.8,0,4.9,0c200.81,0.09,401.62,0.09,602.44,0
	c4.09,0,4.9,0.54,4.89,3.28c-0.13,134.81-0.13,269.63,0,404.44c0,2.74-0.8,3.28-4.89,3.28c-200.81-0.09-401.62-0.09-602.44,0
	c-4.09,0-4.9-0.54-4.9-3.28C0.15,340.31,0.11,272.91,0.11,205.5z"/>
<path style="transform:scale(0.2)" d="M540.01,353.98c17.06,0,32.8,0.14,48.53-0.1c3.78-0.06,4.55,1.02,4.55,4.63c0.01,14.61,0.15,14.6-14.21,14.6
	c-184.46,0-368.93-0.03-553.39,0.13c-5.31,0-6.55-1.28-6.39-6.46c0.4-12.81,0.12-12.82,13.05-12.81c12.95,0,25.89,0,39.79,0
	c-6.52-8.49-11.37-17.19-13.32-27.21c-0.4-2.07-2.12-1.38-3.35-1.43c-3.98-0.17-8.03,0.23-11.92-0.4
	c-14.06-2.29-24.06-14.06-24.07-28.42c-0.06-70.12-0.08-140.24,0.01-210.36c0.02-16.62,12.84-28.59,30.19-28.59
	c117.73-0.02,235.46-0.01,353.19-0.01c36.06,0,72.11,0,108.17,0.01c14.75,0,24.09,6.15,29.53,19.7
	c17.21,42.91,34.35,85.85,51.52,128.78c0.74,1.84,1.28,3.61,1.27,5.72c-0.13,27.69-0.11,55.38-0.16,83.06
	c-0.04,18.55-12.04,30.63-30.74,30.37c-5.77-0.08-9.02,0.64-10.33,7.41C550.42,340.3,545.83,347.05,540.01,353.98z"/>
<path :style="{fill:'rgba(246, 229, 70, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M244.35,94.48c66.61,0,133.23,0.06,199.84-0.12c4.64-0.01,5.91,1.24,5.87,6.65
	c-0.25,29.87,1.22,59.78-0.12,89.62c-0.15,3.31,0.49,11.61,3.42,14.87c2.93,3.26,32.73,1.69,32.73,1.69s42-0.18,94.12-0.18
	c0.95-0.1,5.51,3.04,7,4.41c0.23,5.12-1.47,16.18-1.09,21.41c0.38,5.23-11.65,3.98-25.12,3.98c-0.2,0-0.4,0-0.6,0
	c0.83,0.83,0.32-0.01,1.34,18.17c0.17,3.05,1.13,3.84,3.65,3.78c6.98-0.16,10.97,0.11,17.94-0.13c3.18-0.11,3.98,0.6,3.9,4.74
	c-0.24,12.76,0.13,25.54,0.01,38.31c0,10.5-16.57,11.38-22.81,11.76c-9.19,0.56-9.19,0.56-12.03-9.26
	c-7.89-27.22-30.59-45.69-55.53-45.18c-25.31,0.51-47.42,19.93-54.2,47.95c-1.15,4.74-2.46,6.73-7.37,6.69
	c-37.89-0.35-75.79-0.29-113.68-0.06c-4.68,0.03-5.9-1.33-5.85-6.68c0.26-24.85,0.28-49.71-0.01-74.57
	c-0.07-5.56,1.44-6.61,5.94-6.58c30.71,0.22,61.43,0.13,92.14,0.11c11.48-0.01,16.93-6.16,16.94-19.14
	c0.02-23.94,0.03-47.89-0.01-71.83c-0.02-12.11-5.64-18.51-16.27-18.51c-113.68-0.02-227.36-0.02-341.05,0.01
	c-10.55,0-16.08,6.47-16.09,18.71c-0.03,23.94-0.03,47.89,0,71.83c0.02,12.62,5.49,18.91,16.52,18.91
	c50.06,0.03,100.12,0.1,150.18-0.13c4.86-0.02,5.8,1.62,5.75,6.78c-0.23,24.85-0.22,49.71-0.01,74.57c0.04,4.8-0.59,6.65-5.37,6.53
	c-16.15-0.41-32.31-0.26-48.46-0.07c-3.31,0.04-4.62-0.91-5.56-4.8c-7.29-30.06-29.3-49.64-55.41-49.74
	c-26.33-0.1-48.44,19.55-55.88,49.99c-0.69,2.82-2.2,4.16-2.2,4.16c-0.47,1.85-0.08,2.65-0.69,3.39c-1.03,1.24-3.57,0.73-6.59,0
	c-6.97-1.69-10.46-2.53-12.47-3.76c0,0-4.75-2.89-8.24-8.71c-9.41-15.69-4.58-96.87-4.7-132c-0.13-35.19-5.42-73.77,6.12-77.41
	c3.82-1.2,14.21-0.07,14.21-0.11c0-0.01-0.63-0.03-0.63-0.03c0.01,0,75.72-0.03,194.46-0.03C240.36,94.48,242.36,94.48,244.35,94.48
	z"/>
<path :style="{fill:'rgba(246, 146, 30, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M535.98,88.06c-5.07,0.02-9.32,0.03-12.42,0.04c0,0-452.32,2.39-483.06-0.24
	c-0.68-0.06-3.83-0.44-7.66-1.57c-2.72-0.8-4.08-1.2-4.71-2c-2.71-3.44,1.22-12.92,8.07-17.05c2.08-1.25,4.31-1.77,4.31-1.77
	c2-0.32,4.06-0.12,6.1-0.12c155.73,0,311.45,0,467.18,0c1.13,0,5.01-0.47,9.03,1.5c4.27,2.1,6.53,5.81,8.45,8.97
	C532.8,78.33,534.88,82.43,535.98,88.06z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M157.82,353.56c6.47-7.63,10.7-15.7,12.77-24.7c0.72-3.1,1.94-3.65,4.68-3.61
	c8.76,0.13,17.53,0.04,26.29,0.04c77.68,0,155.35,0.05,233.03-0.13c4.85-0.01,6.76,1.21,7.8,6c1.8,8.23,6.18,15.38,11.96,22.39
	C355.42,353.56,257.04,353.56,157.82,353.56z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M580.21,201.91c-40.6,0-80-0.04-119.4,0.07c-3.54,0.01-4.52-1.07-4.51-4.63
	c0.12-32.89,0.11-65.77-0.01-98.66c-0.01-3.54,0.94-4.66,4.5-4.64c24.23,0.15,48.46,0.09,72.69,0.06c2.56,0,4.4,0.15,5.62,3.27
	C552.58,131.98,566.25,166.49,580.21,201.91z"/>
<path :style="{fill:'rgba(246, 146, 30, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M240.62,218.64c0-28.87,0.19-57.74-0.17-86.61c-0.07-5.56,1.65-6.92,7.93-6.78
	c17.8,0.39,35.62,0.25,53.43,0.06c4.73-0.05,6.89,0.45,6.88,5.4c-0.22,59.21-0.19,118.41-0.04,177.62c0.01,4.19-1.43,5.32-6.17,5.26
	c-18.37-0.22-36.76-0.3-55.12,0.04c-5.79,0.11-6.88-1.58-6.85-6.18C240.73,277.84,240.62,248.24,240.62,218.64z"/>
<path :style="{fill:'rgba(84, 86, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M160.89,315.93c-0.03,25.34-20.75,45.88-46.22,45.83c-25.35-0.04-45.86-20.73-45.83-46.22
	c0.03-25.34,20.75-45.88,46.22-45.83C140.41,269.75,160.93,290.44,160.89,315.93z"/>
<path :style="{fill:'rgba(84, 86, 86, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M497.13,359.41c-24.05-0.05-43.48-19.69-43.44-43.91c0.04-24.03,19.71-43.49,43.91-43.44
	c24.04,0.05,43.48,19.69,43.44,43.91C541,340,521.33,359.46,497.13,359.41z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M114.85,146.63c0,5.93-0.13,11.86,0.07,17.79c0.07,2.06-0.94,2.73-4.5,2.69
	C97.71,167,84.99,167,72.28,167.11c-3.52,0.03-4.56-0.59-4.53-2.68c0.15-12.15,0.15-24.3,0-36.44c-0.03-2.07,0.95-2.72,4.5-2.69
	c12.71,0.12,25.43,0.11,38.15,0c3.52-0.03,4.6,0.59,4.53,2.68C114.72,134.2,114.85,140.42,114.85,146.63z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M172.22,146.22c0,5.93-0.1,11.85,0.06,17.78c0.05,2-0.22,3.16-4.68,3.1
	c-13.08-0.17-26.17-0.13-39.26-0.01c-3.71,0.03-4.62-0.68-4.59-2.71c0.14-12.14,0.15-24.28-0.01-36.42
	c-0.03-2.11,1.14-2.68,4.7-2.65c13.08,0.11,26.17,0.12,39.26,0c3.71-0.03,4.66,0.68,4.59,2.71
	C172.09,134.08,172.22,140.15,172.22,146.22z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M179.36,146.21c0-6.07,0.14-12.15-0.08-18.22c-0.08-2.07,1.02-2.72,4.81-2.69
	c13.58,0.12,27.17,0.12,40.75,0c3.77-0.03,4.86,0.6,4.83,2.68c-0.16,12.15-0.16,24.3,0,36.45c0.03,2.07-1.04,2.72-4.82,2.68
	c-13.58-0.11-27.17-0.11-40.75,0c-3.77,0.03-4.91-0.6-4.83-2.68C179.5,158.36,179.36,152.29,179.36,146.21z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M366.01,146.61c0,5.93-0.14,11.85,0.08,17.77c0.08,2.05-0.97,2.74-4.8,2.7
	c-13.6-0.12-27.21-0.12-40.81-0.01c-3.74,0.03-4.89-0.57-4.86-2.67c0.16-12.14,0.16-24.28,0-36.42c-0.03-2.05,0.98-2.73,4.8-2.69
	c13.6,0.12,27.21,0.11,40.81,0c3.75-0.03,4.94,0.57,4.86,2.67C365.87,134.18,366.01,140.39,366.01,146.61z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M373.06,146.23c0-6.07,0.12-12.14-0.07-18.21c-0.06-2.01,0.78-2.76,4.35-2.73
	c12.47,0.12,24.95,0.11,37.41,0.01c3.37-0.03,4.53,0.5,4.51,2.63c-0.16,12.14-0.14,24.28-0.01,36.42c0.02,2.01-0.78,2.76-4.35,2.73
	c-12.47-0.12-24.95-0.16-37.41,0.01c-4.22,0.06-4.54-1.07-4.49-3.09C373.17,158.09,373.06,152.16,373.06,146.23z"/>
<path  style="transform:scale(0.2)" d="M272.52,239.23c-14.46,0-14.36,0-14.3-14.45c0.01-3.38,0.47-4.99,4.44-4.78c6.72,0.36,13.49,0.3,20.22,0.02
	c3.55-0.15,4.14,1.22,4.19,4.41C287.28,239.24,287.38,239.24,272.52,239.23z"/>
<path :style="{fill:'rgba(246, 146, 30, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M133.97,316.02c-0.28,10.47-8.94,18.94-19.24,18.81c-10.62-0.13-19.5-9.36-18.95-19.69
	c0.56-10.58,9.36-18.92,19.54-18.52C125.8,297.04,134.24,305.81,133.97,316.02z"/>
<path :style="{fill:'rgba(246, 146, 30, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M497.58,334.84c-10.25,0.2-18.98-8.26-19.32-18.74c-0.34-10.41,8.66-19.54,19.19-19.47
	c10.36,0.07,18.96,8.69,19.02,19.04C516.52,326,508.01,334.63,497.58,334.84z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M114.85,195.33c0,5.48-0.13,10.97,0.07,16.45c0.07,1.91-0.94,2.52-4.5,2.49
	c-12.71-0.11-25.43-0.11-38.15,0c-3.52,0.03-4.56-0.55-4.53-2.48c0.15-11.24,0.15-22.47,0-33.71c-0.03-1.91,0.95-2.52,4.5-2.49
	c12.71,0.11,25.43,0.11,38.15,0c3.52-0.03,4.6,0.55,4.53,2.48C114.72,183.82,114.85,189.58,114.85,195.33z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M172.22,194.94c0,5.48-0.1,10.96,0.06,16.44c0.05,1.85-0.22,2.93-4.68,2.87
	c-13.08-0.16-26.17-0.12-39.26-0.01c-3.71,0.03-4.62-0.63-4.59-2.51c0.14-11.23,0.15-22.46-0.01-33.69
	c-0.03-1.95,1.14-2.48,4.7-2.45c13.08,0.1,26.17,0.11,39.26,0c3.71-0.03,4.66,0.63,4.59,2.51
	C172.09,183.71,172.22,189.33,172.22,194.94z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M179.36,194.94c0-5.62,0.14-11.24-0.08-16.86c-0.08-1.91,1.02-2.52,4.81-2.49
	c13.58,0.11,27.17,0.11,40.75,0c3.77-0.03,4.86,0.56,4.83,2.48c-0.16,11.24-0.16,22.48,0,33.71c0.03,1.92-1.04,2.51-4.82,2.48
	c-13.58-0.11-27.17-0.11-40.75,0c-3.77,0.03-4.91-0.56-4.83-2.48C179.5,206.18,179.36,200.56,179.36,194.94z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M366.01,195.34c0,5.93-0.14,11.85,0.08,17.77c0.08,2.05-0.97,2.74-4.8,2.7
	c-13.6-0.12-27.21-0.12-40.81-0.01c-3.74,0.03-4.89-0.57-4.86-2.67c0.16-12.14,0.16-24.28,0-36.42c-0.03-2.05,0.98-2.73,4.8-2.69
	c13.6,0.12,27.21,0.11,40.81,0c3.75-0.03,4.94,0.57,4.86,2.67C365.87,182.92,366.01,189.13,366.01,195.34z"/>
<path :style="{fill:'rgba(116, 214, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M373.06,194.97c0-6.07,0.12-12.14-0.07-18.21c-0.06-2.01,0.78-2.76,4.35-2.73
	c12.47,0.12,24.95,0.11,37.41,0.01c3.37-0.03,4.53,0.5,4.51,2.63c-0.16,12.14-0.14,24.28-0.01,36.42c0.02,2.01-0.78,2.76-4.35,2.73
	c-12.47-0.12-24.95-0.16-37.41,0.01c-4.22,0.06-4.54-1.07-4.49-3.09C373.17,206.82,373.06,200.9,373.06,194.97z"/>
<path :style="{fill:'rgba(246, 229, 70, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M39.51,169.24"/>
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
                                    <button :style="{background:'rgba('+getterSchoolBusBg1+')'}" @click="ShowElement(getterSchoolBusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSchoolBusBg2+')'}" @click="ShowElement1(getterSchoolBusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSchoolBusBg3+')'}" @click="ShowElement2(getterSchoolBusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSchoolBusBg4+')'}" @click="ShowElement3(getterSchoolBusBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSchoolBusBg5+')'}" @click="ShowElement4(getterSchoolBusBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var SchoolBus= [
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
            var randomNumber = SchoolBus[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  SchoolBus[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'SchoolBus'){
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
                getterSchoolBusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SchoolBus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSchoolBusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SchoolBus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSchoolBusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'SchoolBus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSchoolBusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSchoolBusBg5: {
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
                            name:'SchoolBus',
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
                            // $('.Svg_'+cloneIndex+'_color5').css({fill: 'rgba('+background4Clone+')'})
                            
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