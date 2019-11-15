<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(248, 186, 50, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M115.65,406.77c1.16-13.25,3.87-26.24,7.17-39.08c1.11-4.35,0.08-5.78-4.07-6.93
                    c-25.26-7.01-49.61-16.27-72.13-29.91c-9.75-5.91-18.81-12.7-26.84-20.81c-26.18-26.43-26.4-58.73-0.43-85.33
                    c18.12-18.56,40.71-29.97,64.41-39.49c10.88-4.37,21.88-8.56,33.29-11.13c6.54-1.47,6.69-3.94,5.3-9.62
                    c-6.32-25.68-9.93-51.74-8.78-78.29c0.46-10.61,1.96-21.08,4.99-31.25c10.88-36.48,38.5-51.68,75.46-41.66
                    c0.93,0.25,1.85,0.54,2.77,0.8c-1.3,5.99-4.18,11.3-7.12,16.59c-5.24,0.89-10.2-1.3-15.41-1.37c-16.64-0.23-27.62,7.67-34.35,22.44
                    c-4.54,9.97-6.67,20.57-7.28,31.32c-1.5,26.51,1.99,52.59,8.17,78.35c0.82,3.43,2.54,4.18,5.83,3.46c22-4.83,44.2-8.46,66.65-10.47
                    c4.84-0.43,8.48-2.32,11.43-6.58c13.36-19.33,28.16-37.55,43.7-55.15c3.35-3.8,2.9-6.28-0.55-9.63
                    c-5.53-5.36-11.55-10.17-17.16-15.42c-1.4-1.31-3.06-2.37-3.62-4.36c2.04-5.71,4.65-11.04,9.84-14.64
                    c9.49,7.27,18.38,15.23,26.71,23.77c2.66,2.73,4.08,2.61,6.73-0.03c17.5-17.46,36.47-33.16,57.98-45.47
                    c16.13-9.23,33.07-16.43,52.18-16.52c23.19-0.11,39.53,10.77,49.67,31.27c7.13,14.4,9.6,29.95,10.21,45.82
                    c1.02,26.35-2.62,52.2-9.02,77.69c-1.23,4.91-0.71,6.95,4.78,8.51c30.27,8.58,59.41,19.82,84.89,38.93
                    c9.31,6.98,17.61,14.94,23.84,24.87c12.39,19.74,12.16,39.47-0.16,59.17c-3.7,5.92-8.53,10.89-13.25,15.96
                    c-5.05-3.81-8.3-8.93-10.77-14.65c1.23-3.57,4.07-6.03,6.22-8.96c10.44-14.19,10.72-28.04,0.92-42.88
                    c-8.78-13.3-21.65-21.8-35.02-29.53c-18.77-10.86-38.99-18.37-59.78-24.41c-6-1.74-6.61-1.49-8.63,4.75
                    c-7.18,22.2-15.14,44.1-24.94,65.3c-1.6,3.47-1.31,6.75,0.2,10.03c10.04,21.73,18.24,44.15,25.19,67.03
                    c1.12,3.69,2.69,4.27,6.23,3.12c8.62-2.79,17.26-5.46,25.75-8.63c2.49-0.93,4.94-2.34,7.77-1.17c3.02,4.89,6.13,9.75,7,15.61
                    c-12.03,5.17-24.46,9.18-37.07,12.6c-3.97,1.07-4.46,2.46-3.54,6.26c6.13,25.33,10.2,50.94,9.45,77.12
                    c-0.36,12.55-1.93,24.92-5.75,36.94c-11.05,34.71-38.92,49.68-74.06,39.91c-21.91-6.09-40.74-17.85-58.59-31.43
                    c-11.2-8.52-21.89-17.66-31.69-27.77c-2.65-2.74-4.1-2.62-6.77,0.02c-18.68,18.5-38.92,35.03-62.1,47.66
                    c-11.7,6.37-23.93,11.46-37.25,13.34c-30.5,4.31-52.14-8.25-63.35-36.81c-1.33-3.38-2.09-6.98-3.11-10.48
                    c5.21-3.25,11.06-1.93,16.66-2.36c2.73,1.02,3.21,3.63,4.08,5.93c7.53,19.86,22.05,28.2,43.12,24.98
                    c12.61-1.93,23.9-7.15,34.86-13.31C235.63,480.01,252,465.7,268.05,451c4.42-4.05,4.39-5.6,0.28-10.05
                    c-15.97-17.28-30.3-35.86-43.8-55.09c-2.68-3.82-5.95-5.74-10.49-6.09c-22.28-1.76-44.28-5.51-66.16-9.96
                    c-6.05-1.23-6.2-1.25-7.63,5.08c-2.04,9.01-3.76,18.09-5.3,27.2c-0.34,2.03-0.16,4.32-2.18,5.74
                    C127,408.53,121.3,408.05,115.65,406.77z" />
                    <path :style="{fill:'#FDFDFD', transform: 'scale(0.2)' }" d="M396.49,267.09c-0.55,1.18-1.11,2.39-1.68,3.6c-14.26,30.12-30.78,58.97-48.83,86.97
                    c-2.51,3.9-5.42,5.22-9.86,5.42c-15.01,0.68-30.02,1.3-45.06,1.44c-18.4,0.18-36.76-0.62-55.12-1.48c-3.22-0.15-5.24-1.33-7.02-4.03
                    c-18.76-28.47-35.39-58.14-50.2-88.84c-1.13-2.33-0.95-4.15,0.13-6.43c14.51-30.43,31.07-59.69,49.53-87.9
                    c1.95-2.98,4.04-4.47,7.8-4.7c33.89-2.04,67.77-2.33,101.66,0c2.86,0.2,5.01,0.66,6.75,3.3c18.99,28.79,35.83,58.78,50.75,89.86
                    C395.76,265.15,396.07,266.06,396.49,267.09z" />
                    <path :style="{fill:'#FEFEFE' ,transform: 'scale(0.2)'}" d="M126.43,189.41c2.55-0.9,2.73,1.09,3.11,2.4c7.34,24.91,16.8,49.03,27.37,72.73
                    c0.86,1.93,0.69,3.59-0.17,5.49c-10.52,23.51-19.88,47.45-27.16,72.18c-0.51,1.73-0.67,3.61-3.73,2.73
                    c-31-8.95-61.05-19.9-86.59-40.47c-6.02-4.85-11.31-10.45-15.48-17.02c-8.6-13.56-8.5-27.14,0.1-40.66
                    c5.35-8.41,12.48-15.14,20.47-20.95c24.48-17.79,52.38-27.97,81.14-36.2C125.87,189.54,126.25,189.46,126.43,189.41z" />
                    <path :style="{fill:'#FEFEFE' ,transform: 'scale(0.2)'}" d="M443.29,441.73c0.31,7.48-0.91,19.34-4.1,30.9c-7.95,28.89-27.63,39.58-56.32,31
                    c-19.72-5.89-36.44-17.07-52.5-29.41c-9.92-7.62-19.08-16.16-28.17-24.76c-2.85-2.69-2.49-4.23-0.02-6.87
                    c17.34-18.62,32.87-38.72,47.38-59.59c1.96-2.82,4.12-4.15,7.43-4.45c24.54-2.19,48.85-5.92,72.85-11.5
                    c2.86-0.67,3.55,0.27,4.18,2.87C439.34,392.05,443.11,414.37,443.29,441.73z" />
                    <path :style="{fill:'#FEFEFE' ,transform: 'scale(0.2)'}" d="M443.29,92.73c-0.18,26.89-3.95,49.2-9.24,71.33c-0.67,2.79-1.61,3.29-4.27,2.69
                    c-24.78-5.6-49.88-9.28-75.17-11.64c-2.36-0.22-3.26-1.61-4.36-3.18c-15.02-21.46-31.1-42.08-48.87-61.35
                    c-1.42-1.54-2.49-2.69-0.4-4.7c23.69-22.76,48.32-44.12,80.19-54.94c4.76-1.61,9.66-2.65,14.64-3.06
                    c19.78-1.59,32.76,6.37,40.25,24.8c1.87,4.6,3.47,9.4,4.49,14.26C442.6,76.77,443.64,86.73,443.29,92.73z" />
                    <path :style="{fill:'#FDFDFD',transform: 'scale(0.2)'}" d="M540.89,298.53c-13.77-9.22-28-10.6-41.92-0.99c-12.12,8.37-16.85,20.43-14.45,35.1
                    c-11.23,3.94-22.39,8.1-33.86,11.37c-3.77,1.07-5.55,1.07-6.89-3.43c-7.07-23.78-15.92-46.92-26.22-69.49
                    c-1.33-2.91-1.26-5.31,0.05-8.18c10.44-22.93,19.34-46.45,26.61-70.58c0.7-2.31,0.87-4.15,4.47-3.11
                    c26.69,7.73,52.59,17.21,75.88,32.78c8.03,5.37,15.49,11.44,21.54,19.06c14.05,17.7,13.97,34.19-0.26,51.81
                    C544.27,294.83,542.54,296.65,540.89,298.53z" />
                    <path :style="{fill:'#FEFEFE' ,transform: 'scale(0.2)'}" d="M189.68,30.15c-2.03,15.23,3.1,27.56,16.2,35.54c13.05,7.95,26.36,7.13,39-1.74
                    c0.78-0.55,1.69-0.91,2.53-1.35c8.09,7.38,16.14,14.8,24.31,22.1c2.4,2.14,3.1,3.53,0.45,6.38c-17.69,19.07-33.65,39.54-48.51,60.87
                    c-1.44,2.07-2.95,3.04-5.52,3.31c-24.87,2.55-49.58,6.16-73.98,11.68c-2.15,0.49-3.38,0.85-4.06-2.03
                    c-7.57-32-12.78-64.14-6.88-97.08c1.12-6.26,3.08-12.29,5.86-18.02c8.24-17.04,22.95-24.71,41.62-21.64
                    C183.72,28.67,186.69,29.48,189.68,30.15z" />
                    <path :style="{fill:'#FEFEFE' ,transform: 'scale(0.2)'}" d="M135.16,473.87c8.3-4.44,15.38-10.03,19.27-19.03c7.38-17.1,0.26-36.9-16.4-45.14
                    c-1.71-0.85-3.43-1.67-5.14-2.51c1.55-12.22,3.94-24.28,6.79-36.26c0.74-3.1,1.21-4.36,5.12-3.49c23.3,5.18,46.83,9.07,70.64,11.02
                    c4.28,0.35,7.14,1.98,9.73,5.7c14.32,20.55,29.75,40.24,46.73,58.68c1.51,1.64,3.52,2.93,0.79,5.55
                    c-22.31,21.41-45.5,41.59-74.88,52.93c-10.11,3.9-20.57,6.31-31.61,4.49c-16.03-2.64-24.34-13.44-29.61-27.56
                    C136.06,476.81,135.64,475.33,135.16,473.87z" />
                    <path :style="{fill:'#FEFEFE' ,transform: 'scale(0.2)'}" d="M245.29,381.9c13.88,0,27.88,0.06,41.88-0.02c13.84-0.07,27.69,0.05,41.89-1.15
                    c-1.36,3.99-4.08,6.74-6.33,9.72c-10.3,13.67-21.12,26.93-32.6,39.64c-2.26,2.5-3.55,3.21-6.18,0.26
                    c-13.33-14.94-25.97-30.41-37.66-46.65C245.75,382.96,245.39,382.08,245.29,381.9z" />
                    <path :style="{fill:'#FEFEFE' ,transform: 'scale(0.2)'}" d="M328.67,153.06c-27.89-1.31-55.45-1.42-84.09,0.14c6.63-10.4,13.69-18.94,20.63-27.55
                    c6.15-7.64,12.81-14.87,19.17-22.35c1.6-1.88,2.64-2.83,4.84-0.4c13.82,15.3,26.72,31.33,38.84,47.99
                    C328.35,151.29,328.36,151.9,328.67,153.06z" />
                    <path :style="{fill:'#FDFDFD',transform: 'scale(0.2)'}" d="M364.72,173.53c21.08,2.39,40.63,5.48,59.98,9.77c2.08,0.46,4.15,0.63,3.11,3.92
                    c-6.17,19.59-13.18,38.86-21.84,58.82C393.06,221.02,380.07,197.26,364.72,173.53z" />
                    <path :style="{fill:'#FDFDFD',transform: 'scale(0.2)'}" d="M167.87,287.92c12.97,25.28,25.94,48.93,41.18,72.39c-16.49-1.48-31.75-4.04-46.97-6.88
                    c-4.52-0.85-8.98-2.02-13.51-2.82c-2.11-0.38-3.22-1.05-2.52-3.35C152.06,327.48,159.35,308.19,167.87,287.92z" />
                    <path :style="{fill:'#FDFDFD',transform: 'scale(0.2)'}" d="M364.94,360.24c15.33-23.71,28.15-47.3,40.78-71.62c4.02,6.38,5.81,13.27,8.5,19.75
                    c5.08,12.26,9.25,24.84,13.2,37.51c0.7,2.25,1.33,3.88-1.99,4.59C405.86,354.61,386.2,358.11,364.94,360.24z" />
                    <path :style="{fill:'#FDFDFD',transform: 'scale(0.2)'}" d="M208.95,173.93c-15.14,23.44-28.21,47.03-40.45,71.11c-2.16-0.83-2.28-2.78-2.88-4.27
                    c-6.92-17.06-13.65-34.19-18.86-51.87c-0.61-2.08-2.31-4.23,1.74-5.1C168.16,179.55,187.93,176.11,208.95,173.93z" />
                    <circle :style="{fill:'rgba(123, 209, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="222.78" cy="36.13" r="36.13" />
                    <path :style="{fill:'#FFFFCC',transform: 'scale(0.2)' }" d="M251.35,37.02c-0.16,9.14-2.22,16.51-8.76,22.2c-2.52,2.19-5.33,3.22-8.49,3.59
                    c-3.14,0.37-6.1-0.42-7.44-3.39c-1.47-3.25-1.33-7.02,2.05-8.97c8.71-5.04,8.41-12.46,6.44-20.72c-1.18-4.94-0.33-9.34,5.37-11.01
                    c3.91-1.15,8.57,2.7,9.36,8.05C250.41,30.47,252.05,34.05,251.35,37.02z" />
                    <circle :style="{fill:'rgba(236, 4, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" cx="124.17" cy="440.45" r="37.26" />
                    <path :style="{fill:'#FFFFCC',transform: 'scale(0.2)' }" d="M122.97,466.52c-2.61,0.38-5.05-0.84-7.49-2.09c-3.39-1.73-5.42-4.67-4.14-8.16
                    c1.33-3.62,4.64-6.83,8.74-5.68c7.65,2.14,10.65-2.88,13.93-7.75c1.74-2.58,2.58-5.77,5.19-7.78c2.4-1.85,4.78-3.35,7.98-1.48
                    c3.12,1.82,4.32,4.53,4.02,7.89C150.16,452.9,134.74,466.66,122.97,466.52z" />
                    <circle :style="{fill:'rgba(12, 204, 197, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" cx="518.76" cy="324.11" r="37.26" />
                    <path :style="{fill:'#FFFFCC',transform: 'scale(0.2)' }" d="M549.81,328.84c-0.48,3.72-1.59,7.58-6.58,8.08c-5.35,0.54-7.96-2.3-8.69-7.54
                    c-1.19-8.51-4.18-15.54-13.77-18.1c-4.2-1.12-6.32-5.01-4.45-9.55c1.72-4.18,4.95-5.92,9.62-4.58
                    C541.59,301.63,548.05,313.9,549.81,328.84z" />
                    <path :style="{fill:'rgba(198, 34, 33, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M302.07,206.76c26.94,5.42,47.1,30.71,47.14,59.12c0.04,28.88-19.97,54.14-47.26,59.64
                    c-6.81,0.55-12.22-3.17-17.34-6.57c-18.15-12.03-28.09-28.75-28.56-51.02c-0.56-26.25,11.23-44.93,33.52-57.71
                    C293.45,208.01,297.48,206.38,302.07,206.76z" />
                    <path :style="{fill:'rgba(198, 34, 33, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M302.07,206.76c-16.57,5.46-29.62,15.25-37.88,30.9c-12.89,24.43-7.38,58.56,16.2,76.47
                    c6.6,5.01,14.01,8.29,21.56,11.39c-24.4,8.04-55.23-5.92-68.22-30.87c-20.93-40.21,7-88.29,52.34-90.11
                    C291.53,204.33,296.89,204.98,302.07,206.76z" />
                    <path :style="{fill:'rgba(198, 34, 33, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M288.32,228.3c10.59,0.09,18.93,8.76,18.71,19.45c-0.2,9.97-9.11,18.52-19.19,18.42
                    c-10-0.1-18.67-8.89-18.67-18.94C269.16,236.48,277.54,228.2,288.32,228.3z" />
                    <path :style="{fill:'#FFFFCC',transform: 'scale(0.2)'}" d="M293.8,315.43c-5.85,0.04-8.91-2.04-9.34-6.4c-0.48-4.91,2.32-7.93,7.17-8.71
                    c9.5-1.52,18.19-4.63,25.17-11.67c3.66-3.69,6.32-7.67,6.85-13.05c0.24-2.39,1.02-4.86,2.82-6.87c2.65-2.96,5.97-3.51,9.12-1.88
                    c2.84,1.47,4.27,4.21,3.78,7.91c-2.77,20.81-16.39,31.65-34.78,38.05C300.68,314.18,296.5,314.79,293.8,315.43z" />
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
                                    <button :style="{background:'rgba('+getterAtomBg1+')'}" @click="ShowElement(getterAtomBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAtomBg2+')'}" @click="ShowElement1(getterAtomBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAtomBg3+')'}" @click="ShowElement2(getterAtomBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAtomBg4+')'}" @click="ShowElement3(getterAtomBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAtomBg5+')'}" @click="ShowElement4(getterAtomBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Atom= [
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
            var randomNumber = Atom[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Atom[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Atom'){
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
                getterAtomBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Atom') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAtomBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Atom') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAtomBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Atom') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAtomBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterAtomBg5: {
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
                            name:'Atom',
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