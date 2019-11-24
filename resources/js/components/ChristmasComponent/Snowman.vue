<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M33.8,173.5c2.1-1.1,4-3.3,6.8-1.6c2.7,1.6,2.5,4.2,2.5,6.7c0,7.8,0,15.5,0,23.3c0,2-0.4,4,1.2,5.6
    c5.4,5.4,10.9,10.9,17.2,17.2c0-10.2,0-19.1,0-28c0-7.5,3.3-11.4,9.3-11.4c5.9,0,9.2,4,9.2,11.5c0,5.8,0,11.5,0,18.8
    c6.9-6.9,12.9-13,18.9-19c1.7-1.7,3.3-3.3,5-5c2.1-2.1,4.4-2.8,6.7-0.6c2.5,2.3,2,4.9-0.1,7.1c-5.6,5.7-10.7,11.9-17,16.7
    c-10.9,8.5-15.1,18.7-13.7,32.6c1.3,12.9,0.4,26,0.2,39c0,3.9,1,6.8,3.8,9.6c9.2,9,18.1,18.1,28.4,28.5c0-6.9,0-12.3,0-17.8
    c0-3.4-0.1-6.9,0-10.3c0.1-2.8,1.3-5,4.5-5.1c3.4-0.1,4.8,2,4.8,5.2c0,10.8,0.1,21.7-0.1,32.5c-0.1,3.1,0.8,5.4,3.1,7.6
    c8.4,8.2,16.7,16.5,24.9,24.9c2.1,2.2,3,2.1,4.5-0.7c10.4-20,24.7-36.8,42.3-50.8c3.4-2.7,5.6-6.2,6.6-10.3
    c1.7-7.3,4.6-14.1,9.3-19.9c1.8-2.3,1.2-3.5-0.2-5.5c-18.5-25.5-24.3-53.7-18.1-84.6c1.6-8.2,5.3-15.6,8.1-23.5
    c-7.2-2.5-14.4-4.9-20.6-9.3c-11.8-8.3-11.9-18.9,0.1-26.9c11.3-7.5,24.4-10.4,37.5-13.1c9-1.8,9-1.7,9-10.7c0-13.2,0-26.4,0-39.6
    c0-16.7,12.7-29.4,29.4-29.5c22.2-0.1,44.4,0.4,66.6-0.2c10.1-0.3,18.4,2.5,25.2,9.6c5.2,5.4,7.9,11.8,7.9,19.5
    c-0.2,14.6,0,29.3-0.1,43.9c0,3.6,0.2,5.6,4.8,6.2c10.5,1.4,20.8,4.1,30.8,8.1c4,1.6,7.9,3.5,11.5,6c11.3,8,11.3,18.2,0,26.3
    c-4,2.9-8.4,4.8-12.9,6.7c-2.6,1.1-5.4,1.9-8.3,3c5.4,11.6,9,23.6,10.1,36.3c2.2,26-4.1,49.7-19.5,70.8c-2,2.8-2.3,4.5-0.1,7.3
    c4.3,5.2,6.8,11.4,8.4,18c1.1,4.8,3.5,8.6,7.3,11.7c17.2,13.7,31.1,30.1,41.3,49.5c2.1,4.1,3.3,3.3,5.8,0.7
    c7.9-8.2,16-16.2,24.1-24.1c2.3-2.2,3.1-4.5,3-7.6c-0.2-10.3,0-20.6-0.1-30.9c0-3.3,0.2-6.5,4.4-6.7c4.6-0.2,4.9,3.3,4.9,6.7
    c0,8.2,0,16.4,0,26.1c10.9-10.9,20.8-20.8,30.6-30.8c1.7-1.7,1.5-4,1.5-6.1c0-18.4-0.1-36.8,0.1-55.3c0-2.8-1-4.7-2.9-6.6
    c-8.2-8.1-16.4-16.3-24.5-24.5c-2.6-2.7-7.5-5.4-3.4-9.7c4.6-4.8,7.3,0.8,10,3.4c6.7,6.4,13.2,13.1,20.8,20.7c0-7.6,0-14,0-20.4
    c0-3.9,1.5-7.1,5.1-8.9c3.1-1.6,6.3-1.4,9.3,0.5c3.2,2.1,4.1,5.3,4.1,8.9c0,9.2,0,18.4,0,29.2c6.6-6.7,12.4-12.3,17.9-18.3
    c0.9-1,0.6-3.1,0.6-4.7c0.1-7.9,0-15.9,0-23.8c0-3.3,0.5-6.5,4.7-6.5c4.1,0,4.6,3.1,4.6,6.5c-0.1,8.5-0.1,17,0,25.5
    c0,4.6-1.6,8.4-4.9,11.6c-6.7,6.6-13.2,13.4-20,19.9c-2.1,2.1-3,4.2-3,7.1c0.1,14.6,0,29.3,0.1,43.9c0.1,9.4-3.2,17.1-9.8,23.7
    c-23.3,23.2-46.5,46.5-69.8,69.6c-2.4,2.3-3.1,4.2-2,7.4c5.4,15.7,7.8,31.8,7.7,48.4c-0.1,20.4,0.7,40.8-1.4,61.2
    c-3,29.3-13,54.7-39.3,71.1c-14.7,9.2-30.9,14.5-47.8,17.9c-16.7,3.4-33.5,5.1-50.5,5.6c-11.5,0.8-23,0.1-34.5,0.4
    c-29,0.5-57.3-3-84.3-14.2c-27.4-11.4-45.6-31-52.6-60.4c-3-12.7-4.7-25.5-4.7-38.6c0-15.2,0.2-30.3-0.1-45.5
    c-0.2-14,1.7-27.8,6-41.1c2.1-6.4,1.1-10.8-3.9-15.7c-21.7-21.1-42.9-42.9-64.5-64.1c-7.9-7.7-11.7-16.4-11.3-27.5
    c0.5-12.1-0.2-24.2,0.2-36.3c0.2-6.7-1.8-11.8-6.8-16.2c-4.7-4.2-8.9-8.9-13.5-13.3c-3-2.9-5.7-6-6.5-10.3
    C33.8,196.6,33.8,185,33.8,173.5z"/>
<path style="fill:#8F8F8F; transform:scale(0.2)" d="M274.4,591.8c0-0.3,0-0.6-0.1-0.9c12,0,24,0,36,0c-0.1,0.3-0.1,0.6-0.1,0.9
    C298.2,591.8,286.3,591.8,274.4,591.8z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color5'" d="M368.7,564.7c-15.9,5.1-32.5,6.6-49,7.3c-28.3,1.3-56.7,1.3-84.8-3c-11.9-1.8-23.6-4.7-34.9-9.3
    c-25.2-10.2-39.8-29-43.4-55.5c-4.3-32.1-5.2-64.5-0.1-96.6c4.7-29.7,19.6-54.6,41.7-75.1c1.9-1.8,3.3-1.9,5.6-0.8
    c39.2,18.6,80.3,23.1,122.9,16.8c3.3-0.5,4.3,0.2,5.2,3.2c5.5,19.6,5.7,39.1,0.2,58.7c-2.4,8.5-1.2,10,7.5,10
    c7.6,0,15.2,0.1,22.7-0.1c2.8-0.1,3.9,0.5,3.3,3.5c-1.3,5.6-2.1,11.3-3.5,16.9c-0.7,3-0.5,5.3,2.3,7c14.6,0.7,29.2,0.2,43.7,0.2
    c3.6,0,5.4,1.1,5.4,4.8c0.2,22.3,1.3,44.7-5.6,66.4C401.3,540.1,389.5,556.3,368.7,564.7z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color5'" d="M335.1,283.9c-28.9,19.5-74.6,14.5-99.4-10.3C220.1,258,210.3,240,208.8,218
    c-1.1-16.1,3.1-31,10.5-45.1c1.2-2.2,2.6-2.3,4.9-1.9c29.3,4.8,58.8,5.6,88.4,4.6c11-0.4,21.9-1.5,32.9-2.3c4.3-1,5.2,2.4,6.3,5.2
    c7.8,20,8.7,40.3,2.7,60.9c-3.5,12.1-9.1,23.1-17.4,32.7c-2.6,3-4.7,5.9-1.7,9.9C335.9,282.5,335.5,283.3,335.1,283.9z"/>
<path style="fill:#E41E27; transform:scale(0.2)" :class="ValueId+'_color7'" d="M390.7,439c-4.7,0-9.4-0.2-14.1,0.1c-3.7,0.2-4.5-0.8-3.6-4.4c3.4-14.9,3.9-29.9,1.3-45.1
    c-2.7-15.9-8.2-30.6-17.7-43.6c-2.5-3.4-1.6-4.2,1.8-5.2c5.1-1.6,10.1-3.7,15.1-5.7c2.3-1,3.7-1.1,5.3,1.3
    c16.6,24.6,29.4,50.8,31.8,81c0.5,6-0.2,11.9-0.8,17.8c-0.3,2.7-1.3,4.1-4.4,3.9C400.5,438.8,395.6,439,390.7,439z M358.3,318.5
    c-5.3-4.3-8.9-9.8-11.4-16.1c-0.5-1.3-1.3-2.7-3.2-2.1c-39.3,21.1-77.1,18.7-113.3-7.3c-3.3-2.4-4.6-1.7-6.3,1.5
    c-3,5.8-3,12.7-6.9,18.1c-2.7,3.7-1.1,4.7,2.4,6.2c27.8,12,57,15.5,86.9,13.7c18.1-1.1,35.7-4.4,52.5-11.6
    C359.4,319.9,359,319.1,358.3,318.5z"/>
<path style="fill:#D6DDE1; transform:scale(0.2)" :class="ValueId+'_color6'" d="M368.7,564.7c9.4-6.3,18.8-12.4,25.8-21.7c8.6-11.6,12.9-24.7,15.4-38.6c3.1-16.8,1.9-33.7,2.3-50.6
    c0.1-3.7-1-5-4.8-4.9c-12.4,0.2-24.9,0.1-37.3,0c-1.9,0-4,0.7-5.6-1c15.5,0.1,31,0,46.5,0.2c4.1,0.1,5.7-2.1,6.6-5.6
    c4.1-16.9,2.5-33.6-1.9-50.2c-2.3-8.9-5.5-17.5-9.2-25.9c-3.6-8.1-7.8-16-12.5-23.6c2.6-0.8,3.4,1.1,4.5,2.4
    c20.2,24,31.3,51.7,32.1,83c0.6,22.3,0.9,44.7-1,67.1C426.3,532.5,403.4,558.9,368.7,564.7z"/>
<path style="fill:#3AB44A; transform:scale(0.2)" :class="ValueId+'_color2'" d="M338.1,125.9c0.2,2.1,0.2,4.3,0.8,6.4c1.7,5.7,8.5,9.1,12.7,5.4c5.4-4.8,10.6-2.4,16.1-1.8
    c1.1,0.1,2.1,0.6,3.1,0.8c7.2,4.3,7.6,8.5,1.2,13c-14.2,3.8-28.7,5.2-43.2,6.4c-24.3,2-48.7,1.9-73,0c-19.8-1.6-39.4-4.3-58.5-9.8
    c-2.1-0.6-4-1.5-6.9-2.6c7.1-4.4,14.5-5.2,21.5-6.8c3.1-0.7,6.4-0.9,9.6-1.6c3.8-0.8,6.9-1,10.4,1.9c5.3,4.5,13.2,0.6,14.3-6.4
    c0.2-1.6,0.1-3.2,0.1-4.9c0.1-10,0.1-10,10.3-10c21.1,0,42.2,0.1,63.4,0.2c1.4,5.5,5.1,7.5,10.7,7.5
    C333.1,123.6,336,123.8,338.1,125.9z M321.4,83.9c0.2-7.1,0.4-14.2-0.2-21.3c-0.2-2.6-1.2-4.8-3.5-6.3c-21.1-0.1-42.2-0.2-63.4-0.2
    c-5.5,0-8.1,2.6-8.2,7.9c-0.2,6.9,0,13.7-0.1,20.6c0,2.5,0.7,3.5,3.4,3.5c23.5-0.1,46.9-0.2,70.4-0.3
    C320.9,86.7,321.4,85.4,321.4,83.9z"/>
<path style="fill:#D6DDE1; transform:scale(0.2)" :class="ValueId+'_color6'" d="M335.1,283.9c-6.1-5.8-1.5-9.8,2-14.3c21.8-28.2,25.1-59.1,12.9-92.1c-0.8-2.2-1.9-3.9-4.4-4.2
    c5.3-0.8,10.6-1.6,15.9-2.6c2.5-0.5,3.1,1.2,4,2.8c17.1,29.7,12.8,68.3-10.6,93.9C349,273.7,342.8,279.8,335.1,283.9z"/>
<path style="fill:#A3041B; transform:scale(0.2)" :class="ValueId+'_color8'" d="M353.2,411.1c-3.2-0.4-8.4,1.7-10.6-1c-1.6-2,0.7-7.1,1.3-10.8c2.4-16.3,1.6-32.3-2.6-48.2
    c-0.5-1.7-2.1-3.9,0.3-5.2c2.4-1.3,4,0.6,5.3,2.4c13.7,17.4,19.5,37.5,19.7,59.4c0,2.6-0.9,3.5-3.4,3.4
    C360.1,411,357,411.1,353.2,411.1z M367.4,317.7c1.4-0.5,2.3-1.3,1.2-2.8c-4.3-6-4.9-13.4-7.9-19.9c-1.6-3.5-3.3-5.1-7-1.8
    c-3,2.7-6.7,4.7-10.1,7c4.2,7.5,7.8,15.5,15.2,20.6C361.8,319.8,364.6,318.7,367.4,317.7z"/>
<path style="fill:#0B9343; transform:scale(0.2)" :class="ValueId+'_color3'" d="M319.9,87.8c0-6.7-0.1-13.3,0.1-20c0.1-4.1-0.5-7.9-2.1-11.6c4.3,0,8.6,0.2,12.9,0.1
    c5-0.2,7.4,2.6,7.5,7.1c0.3,7,0,14,0.1,21c0.1,3-1.4,3.6-4,3.5C329.6,87.9,324.7,87.9,319.9,87.8z M338.4,122.1
    c0.8-4.9-1.1-6.8-6.1-6.2c-4.1,0.4-8.3,0.2-12.4,0.2c0.1,3.7-1,8.1,5.1,8.5c4.4,0.3,8.8,0.9,13.2,1.3
    C338.2,124.6,338.2,123.4,338.4,122.1z M394.2,143.5c-8-4.2-15.7-5.7-23.4-6.8c5.8,6.6,5.8,6.8,1.2,13
    C379.3,148.7,386.5,147,394.2,143.5z"/>
<path style="fill:#010101; transform:scale(0.2)" d="M292.4,494.4c12.1,0.1,23.2,11.3,23.1,23.3c-0.2,11.9-11.1,22.8-23,22.9c-12,0.1-23.3-11.1-23.3-23.1
    C269.1,505.5,280.3,494.3,292.4,494.4z"/>
<path style="fill:#000001; transform:scale(0.2)" d="M292.1,475.9c-12.1-0.1-23.2-11.3-23-23.3c0.2-11.9,11.1-22.7,23-22.8c12.1-0.1,23.3,11,23.3,23.1
    C315.4,464.9,304.3,475.9,292.1,475.9z"/>
<path style="fill:#000001; transform:scale(0.2)" d="M292.4,365.2c12.2,0.1,23.2,11.2,23,23.3c-0.2,12-11,22.7-23,22.7c-12.2,0.1-23.3-10.9-23.3-23
    C269.1,376.1,280.2,365.2,292.4,365.2z"/>
<path style="fill:#000000; transform:scale(0.2)" d="M292.5,222.1c12.8-0.6,28.3,15.2,20.9,31.3c-4.4,9.6-10.6,18-17,26.3c-2.5,3.2-5.6,3.4-8.1,0.1c-6.5-8.2-12.6-16.7-17-26.2
    C263.6,237.1,279.6,221.3,292.5,222.1z"/>
<path style="fill:#010101; transform:scale(0.2)" d="M342.9,208.3c0,9.6-8.7,18.3-18.3,18.3c-9.5,0-18.4-8.7-18.6-18.2c-0.1-9.6,9.1-18.8,18.8-18.7
    C334.3,189.8,343,198.7,342.9,208.3z"/>
<path style="fill:#010101; transform:scale(0.2)" d="M241.6,207.9c0.1-9.6,9-18.3,18.5-18.2c9.4,0.1,18.4,9.1,18.4,18.5c0,9.6-9.2,18.6-18.9,18.4
    C250,226.4,241.5,217.6,241.6,207.9z"/>
<path style="fill:#FCB435; transform:scale(0.2)" :class="ValueId+'_color4'" d="M319.9,106.3c-23.4,0.1-46.8,0.1-70.2,0.3c-4.3,0-3.4-2.5-3.5-4.9c-0.1-2.5-0.2-4.4,3.5-4.3
    c23.4,0.2,46.8,0.2,70.3,0.3C322,100.5,321.9,103.4,319.9,106.3z M333.4,106.5c3.5,0.2,5.1-0.5,5.1-4.6c0-4.2-1.7-4.7-5.2-4.5
    c-4.5,0.3-9,0.2-13.5,0.2c0,2.9,0,5.7,0,8.6C324.4,106.3,328.9,106.3,333.4,106.5z M306,517.4c0-8.3-5.1-13.5-13.4-13.6
    c-8.6-0.1-14,5-14,13.5c-0.1,8.5,5.2,13.9,13.7,13.9C300.7,531.2,306,525.9,306,517.4z M292.1,439c-8.1,0.1-13.5,5.4-13.5,13.6
    c-0.1,8.4,5.4,14.1,13.6,14.1c8.2,0.1,13.8-5.6,13.8-13.9C306,444.4,300.5,438.9,292.1,439z M292,402.1c8.1,0.2,13.8-5.2,14-13.2
    c0.2-8.7-5.3-14.6-13.7-14.7c-7.9,0-13.6,5.5-13.7,13.5C278.4,396.3,283.7,401.9,292,402.1z M299.9,259.2c1.7-2.5,3.2-5.2,4.5-8
    c3.1-6.6,1.7-13.2-3.3-17.1c-4.9-3.8-12.7-3.8-17.6,0c-5,3.9-6.4,10.5-3.3,17.1c3,6.6,7.1,12.4,12.3,18.5
    C295.1,265.9,297.7,262.6,299.9,259.2z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M324.6,199.1c5.7,0,9.2,3.4,9.2,9c0,5.4-3.6,9.3-9,9.4c-5.8,0.1-9.4-3.5-9.3-9.4
    C315.5,202.3,318.7,199.1,324.6,199.1z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M269.1,208.1c0,5.7-3.2,9.2-8.8,9.4c-5.6,0.2-9.6-3.8-9.5-9.4c0.1-5.5,3.6-8.9,9.3-8.9
    C265.8,199.2,269,202.3,269.1,208.1z"/>
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
                                    <button :style="{background:'rgba('+getterSnowmanBg1+')'}" @click="ShowElement(getterSnowmanBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSnowmanBg2+')'}" @click="ShowElement1(getterSnowmanBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSnowmanBg3+')'}" @click="ShowElement2(getterSnowmanBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSnowmanBg4+')'}" @click="ShowElement3(getterSnowmanBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterSnowmanBg5 +')'}" @click="ShowElement4(getterSnowmanBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSnowmanBg6+')'}" @click="ShowElement5(getterSnowmanBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSnowmanBg7+')'}" @click="ShowElement6(getterSnowmanBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterSnowmanBg8+')'}" @click="ShowElement7(getterSnowmanBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSnowmanBg9+')'}" @click="ShowElement8(getterSnowmanBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterSnowmanBg10+')'}" @click="ShowElement9(getterSnowmanBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Snowman= [
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
            var randomNumber = Snowman[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Snowman[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Snowman'){
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
                getterSnowmanBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Snowman') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Snowman') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Snowman') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSnowmanBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSnowmanBg10: {
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
                            name:'Snowman',
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