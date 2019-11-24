<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M78.5,201.5c-6.2-4.5-11.7-9.3-16.4-14.9c-15.6-18.3-20-39.7-17.6-63c1-9.8,1-19.6,0.6-29.5
	c-0.2-5.2-2-9.5-6.1-13.1c-5-4.4-9-9.5-8.6-16.7c0.5-7.9,5.6-13.5,14.2-15.1C72.4,44,102.7,55,113,90.3c3,10.3,5,20.7,5.4,31.4
	c0.2,5.1,2.7,6.8,7.1,7.5c11.5,1.9,23.2,2.7,34.4,6.1c7.2,2.2,12.5,0.6,18.8-3c52.1-28.8,103.5-27.3,154,4.5
	c2.9,1.9,5.3,2.5,8.6,1.3c14.4-4.8,29.5-6.4,44.5-8.8c4.9-0.8,7.5-2.3,7.8-7.9c0.7-11.5,2.9-22.7,6.3-33.8c9.8-30.9,38-44,67.3-38.4
	c14.5,2.7,19.9,17.8,9.3,27.8c-8.9,8.4-10.1,17.7-9.7,28.4c0.4,9.5,1.1,19,1.4,28.4c0.7,29.2-11.6,51.7-35.4,68.1
	c-1,0.7-1.9,1.3-2.9,2c-0.1,0.1-0.2,0.2-1.1,1.3c3.9,3.6,8.1,7,11.7,11c8.9,10.1,16.4,21.2,17.6,35.1c2.3,28.5-24.7,49.6-52,41
	c-4.8-1.5-9.3-3.5-13.6-6.1c-1.9-1.2-2.7-1.1-3.3,1.3c-6.5,22.9-18.2,42.7-34.9,59.6c-1.4,1.4-1.9,2.9-2.2,4.8
	c-1.7,11.7-2.5,23.5-2.6,35.4c-0.1,9.7-1.1,19.3-3.5,28.7c-6.6,25.4-22.6,41.6-48.6,45.5c-30.4,4.6-61.2,5-91.5-0.3
	c-27.6-4.9-43.4-22.2-48.7-50c-1.7-9-2.3-18.2-2.4-27.3c-0.1-9-1-18-1.8-26.9c-0.4-5.4-2.4-9.5-6.3-13.5
	c-14.8-15.6-25.1-33.9-31.1-54.5c-1.1-3.7-2.1-3.8-5.2-2c-10.1,5.7-20.8,9.1-32.5,6.7c-24.2-5.1-37.7-29.8-29.2-53.1
	c5.1-14.2,14.8-25.1,25.6-35.2C75.6,204.1,76.9,202.9,78.5,201.5z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M54.1,62.3C69.3,61.6,82.3,66,92,78.4c1.4,1.8,2.8,3.7,3.1,6.1c3.9,9.4,5.1,19.2,4.5,29.3
	c-0.3,6,0.7,11.9,1.3,17.9c0.9,8.7,6.2,14,15.6,14.6c10.6,0.7,21.2,0.6,31.8,1.1c10.3,1.8,20.5,4.3,30,8.9
	c16.8,8.2,22.1,24.7,13.2,41c-1.3,0.9-2.7,1.2-4.3,1.1c-24.8-1.9-49.4-4.4-72.7-13.9c-3.7-1.5-7.3-3.3-10.8-5.2
	c-13.9-7.5-21.4-19.5-24.5-34.6c-2.1-10.1-2.6-20.4-3.4-30.7c-0.7-9-1.7-17.9-4.9-26.4c-3.2-8.4-8.5-15-16-19.8
	c-0.6-0.4-1.2-0.7-1.7-1.1c-1.2-0.8-3.2-1.4-2.9-3.1C50.6,61.7,52.9,63.2,54.1,62.3z M319.2,194.1c-6.3-16.5-1.3-29.5,14.5-37.7
	c2.6-1.4,5.2-2.9,8.2-3.3c3.1-1.1,6.4-1.4,9.6-2.4c13-3,26.1-4.4,39.4-4.9c18.6-0.8,27.2-9.2,27.8-27.9c0.1-4.5,0.1-9,0-13.5
	c-0.2-10.1,0-20.2,4.7-29.5c11.4-11.5,25.3-14.3,40.7-11.8c1.6,0.3,3.5,0.6,2.9,3c-1.8,1.5-3.8,2.7-5.9,3.6
	c-16.9,7.8-25.2,21.7-27.4,39.5c-1.4,10.9-1.8,21.9-2.1,32.8c-0.5,15-6.1,26.3-20.7,32.9c-13.3,6-27.2,10.1-41.3,13.3
	c-14.1,3.2-28.4,5.9-42.7,7.8C324.1,196.4,321.1,197.2,319.2,194.1z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M319.2,194.1c4.6,2.6,9.3,0.4,13.6-0.3c19.9-3.2,39.7-7,59.1-12.8c8.5-2.6,16.4-6.2,24.2-10.4
	c11.3-6.2,13.1-17.1,14-28.4c1.2-13.8,0.4-27.8,3.8-41.4c4.5-17.9,15.7-29.1,33-34.6c-0.3,1.6-1.5,2.6-2.6,3.5
	c-9.4,7.4-12.1,17.6-12,28.8c0.1,9.6,0.2,19.3,1.1,28.9c2.7,30.1-9.6,53.1-36.2,67.4c-14,7.5-29.5,9.9-44.7,13.4
	c-11.4,2.6-22.9,4.5-34.5,2C329,208.1,322.2,203.2,319.2,194.1z M54.1,62.3c-1,0.4-2.1,0.9-3.4,1.4c17.5,8.7,23.8,23.9,25.6,42.1
	c1.2,12.7,1.7,25.4,4,38c3.7,19.9,15.9,32.2,34.3,39.4c17.1,6.7,34.9,10.2,53.1,12c7.9,0.8,15.8,1.4,23.7,2.1
	c-5.1,10.7-14.7,13.3-25.2,13.8c-14.8,0.7-28.9-3.7-43.2-6.7c-14.9-3.2-28.7-8.4-40.6-18.1c-18.6-15.1-25.6-34.8-23.8-58.4
	c1.1-13.4,2.6-26.9,0.3-40.3C57.7,80.7,54,75.4,49,70.7c-1.7-1.6-4.9-3.1-3.6-5.9c1.1-2.4,4.3-2.2,6.7-2.5
	C52.7,62.1,53.4,62.2,54.1,62.3z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M136.1,267.3c3.2,18.9,8.6,36.9,21.3,51.9c5,6,11.1,10.6,18.4,13.2c3,1,4.1,2.4,4.1,5.7
	c0.2,17,1.2,33.9,2.1,50.8c0.2,4.4,1.7,4.4,5.1,3.2c14.8-5.3,30.1-8.2,45.9-7.8c0.6,0.4,1.6,0.7,1,1.8
	c-21.5,3.4-41.5,10.4-59.3,23.1c-2.4,1.7-3.2,1.5-3.7-1.5c-1-6.2-2-12.5-1.9-18.8c0.2-14.2-1.5-28.2-3.2-42.3
	c-0.4-3.3-1.8-5.8-4.2-8.1c-16.6-15.9-27.5-35.2-33.7-57.3c-1.1-4-1-6.9,2.7-9.3C132.7,270.6,134.3,268.9,136.1,267.3z"/>
<path :style="{fill:'rgba(114, 92, 56, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M246.1,385c0.9-0.9,2.1-0.8,3.3-0.9c6-0.3,6.5-1.1,5.6-7.1c-0.8-5.9-1.6-11.8-1.8-17.7
	c-0.3-9.1-1.4-18.2-1.1-27.3c0.6-21.4,2-42.7,8.1-63.3c1.5-5.1,3.5-10.1,6-14.7c9.1-16.7,16-34.3,18.5-53.3
	c1.9-14.5,2.2-29.1,0.6-43.7c-1-8.9-1.5-17.8-2.3-26.7c12.2,2.5,23.3,7.7,34.2,13.5c3.7,2,4.1,3.7,0.6,6.2
	c-8.9,6.3-13.7,15.2-15,25.9c-2.4,18.8,6.6,39.9,26.1,46.5c5.2,1.8,8.6,4.4,11.4,9.2c9,15.1,20.3,28.4,33.2,40.3
	c3.1,2.8,4,5.4,2.8,9.5c-5.6,19.5-14.1,37.4-28.7,51.7c-7.3,7.1-9.5,15.2-10.6,24.9c-1.7,14.7-0.9,29.5-2.7,44.2
	c-0.3,2.5-0.2,4.4-3.7,2.3c-17.8-10.7-37.2-16.7-57.7-19.1C264,384.3,255,384.7,246.1,385z M433.1,275.2c-8.7,6.4-17.8,6-27.2,1.9
	c-13.7-6.1-24.3-16.1-34.1-27c-5.8-6.5-11.4-13.4-16-20.9c-0.8-1.3-3.5-3.6,0.8-4c16.2-1.6,31.8-6.1,47.5-9.9c0.6-0.2,1.3-0.1,2-0.2
	c1.3,0.2,2.1,1,2.8,1.9c11.4,14.4,20.6,29.8,23.9,48.2C433.4,268.5,433.6,271.8,433.1,275.2z M286,449c5.4-15.2,4.3-29.9-3.6-44
	c-0.7-1.3-1.6-2.5-2.3-3.8c14.4,1.7,27.6,6.8,40.3,13.7c0.4,0.2,0.8,0.6,1.2,0.9c9.1,5.5,9.1,5.9,2.7,14.7
	c-7.9,10.9-19.2,15.3-31.8,17.6C290.3,448.5,288.2,448.7,286,449z"/>
<path :style="{fill:'rgba(138, 122, 92, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M246.1,385c-3,0.3-6,0.7-9,1c-0.3-0.8,0.4-1.1,0.9-1.4c-0.4,0.2-0.8,0.2-1.2,0.3
	c-1.4,0.4-2.9,0.2-4.4,0.3c-15.6,0.7-30.8,3.3-45.5,8.3c-4.3,1.5-5.8,0.2-6.1-4.4c-1-16.1-2.4-32.2-2-48.3c0.1-3.2-0.5-5.8-4-7.2
	c-14.1-5.5-22.6-16.6-29.1-29.6c-4.9-9.7-8-20.1-10.1-30.8c-0.4-2-0.9-3.9,0.5-5.8c9.3-10.6,18.8-21,26.3-33.1c1-1.5,2.1-3,2.9-4.6
	c1.5-3.2,3.7-4.4,7.3-4.7c19.5-1.7,34.3-17.3,36.7-36.7c1.5-12.7-1.2-23.6-9.3-33.4c-2.3-2.8-5.3-4.4-7.9-6.7
	c12.6-9.8,26.3-17,42.2-19.7c2.1-0.9,4.7-0.2,6.7-1.5c3.6-1.9,7.5-0.8,11.2-0.7c10.4,0.4,20.7,1,30.8,3.9c2.8,5.2,2.4,11,3,16.5
	c2.2,19.1,2.7,38.2-0.4,57.2c-2.3,14.2-6.3,28.1-13.3,40.7c-12,21.7-16.4,45-18,69.4c-1.4,21.4,0,42.5,1.9,63.7
	c0.4,4.7,0.9,7.5-6.3,6.9C248.7,384.5,247.3,384.3,246.1,385z M196.1,413c12.1-7,25.3-10.6,39-12.7c14-2.2,28.1-1.8,42.2-0.1
	c1,0.1,1.9,0.6,2.8,1c2.6,1.2,3.9,3.5,5.1,5.9c6.1,11.9,6.7,24.4,4.1,37.2c-0.4,2-1,3.9-3.1,4.8c-18.2,1.8-36.5,1.2-54.8,0.9
	c-10.5-0.2-21.1-1.1-31.2-4.7c-1.9-8.7-4.4-17.2-4.9-26.1C195,416.9,194.5,414.8,196.1,413z M99.9,213.3c12.9,3,25.8,6.1,38.6,9.1
	c3.1,0.7,6.2,1.4,9.3,1.7c2.9,0.2,3.7,1,2,3.5c-9.3,13.4-19.4,26.1-32,36.8c-7.4,6.3-15.2,11.9-24.7,14.6
	c-11.2,3.2-21.2-0.5-28.1-9.9c-1-1.3-1.8-2.8-2.7-4.1c7-19.9,19.6-36,34.9-50.1C98,214,98.9,213.6,99.9,213.3z M433.1,275.2
	c-2.3-2.7-0.9-6.1-1.4-9.1c-3.1-17.3-11.3-32-21.9-45.7c-1.3-1.7-2.5-3.5-3.7-5.2c2.3-0.9,4.5-1.9,6.8-2.8c1.7-0.6,3.2-0.4,4.6,0.9
	c8.8,8.3,17.6,16.7,23,27.9C447,254.5,444.7,265.4,433.1,275.2z"/>
<path style="fill:#FCFCFC;transform:scale(0.2)" d="M423.4,74.8c0.7,3.9-1.7,7.2-2.3,10.8c-1.5,8.4-0.8,16.9-0.9,25.4c-0.1,4.1-0.1,8.3-0.5,12.4
	c-1.7,16.3-11.8,22.7-27,23.6c-13.9,0.9-27.8,1.6-41.6,4c-0.2-0.2-0.3-0.4-0.2-0.6c0.1-0.2,0.2-0.3,0.3-0.3
	c12.3-3.5,25.1-4.6,37.6-7.1c2.4-0.5,4.8-1.2,7.2-1.9c6.9-1.9,10.4-6.5,11.2-13.6c1.2-11.6,2.5-23.1,6-34.3
	C415.3,86.5,418.4,80.2,423.4,74.8z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M99.9,213.3c-8.4,8.5-16.8,17.1-23.5,27c-4.5,6.6-8.3,13.6-11.4,21c-0.5,1.3-0.1,3.6-2.6,3.6
	c-4.1-9.7-1.8-18.6,3.2-27.1c6.2-10.6,14.9-19.2,24.4-26.9C93.9,207.6,96.7,211.8,99.9,213.3z"/>
<path style="fill:#FCFBFA;transform:scale(0.2)" d="M148.2,147.4c-11.9,0.7-23.9,2.3-35.7-0.4c-9.3-2.1-12.5-7.4-13.5-16.8c-1.2-11.8,0-23.7-1.9-35.4
	c-0.5-3.4-1.3-6.8-2-10.2c6.1,10.7,7.6,22.6,8.9,34.4c2,18.9,4.2,21.6,22.6,24.9C133.8,145.1,141,146.2,148.2,147.4z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M196.1,413c0.7,10.2,1.5,20.5,5.4,30.1c0.7,1.7,0,2-1.4,2.1c-8.8-3.3-16-8.5-21.2-16.5
	c-1.5-2.3-1.9-3.7,0.8-5.6C185,419.4,190.1,415.5,196.1,413z"/>
<path style="fill:#F6F6F5;transform:scale(0.2)" d="M235,129c-13.9,3.1-26.6,8.8-38.1,17.1c-1.4,1-2.6,2.6-4.8,2.1c-1.8-1.2-3.6-2.4-5.9-3.9
	c15.1-8.6,30.7-14.5,47.7-16.3C235,127.5,235.2,128,235,129z"/>
<path style="fill:#CEBEA2;transform:scale(0.2)" d="M351.1,150.2c0,0.3-0.1,0.6-0.1,0.9c-2.9,1.4-6,1.9-9.2,2C344.8,151.4,347.9,150.7,351.1,150.2z"/>
<path style="fill:#D1C8C3;transform:scale(0.2)" d="M235,129c-0.4-0.3-0.7-0.7-1.1-1c2.2-1.4,4.7-0.7,7.1-1C239.6,129.3,237,128.2,235,129z"/>
<path style="fill:#C6BDB7;transform:scale(0.2)" d="M234,386c-0.3-0.6-0.7-1.2-1-1.8c2,0,3.9,0,6,0c0.1,1.4-1.6,0.9-1.9,1.8C236,386,235,386,234,386z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M186.1,298.2c-10.3-0.5-19.5-3.2-24.2-13.4c-4.2-9-0.4-18.4,8.8-22.3c4.5-1.9,9.1-2.6,14.1-1.5
	c8,1.9,15.1,5.3,20.7,11.2c8.3,8.6,5.6,19.8-5.6,23.8C195.5,297.6,190.9,298.3,186.1,298.2z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M325.5,298.1c-4.9,0.2-9.6-0.7-14.1-2.4c-9.5-3.7-12.2-13-6.4-21.4c6.1-8.9,22.1-15.5,31.9-13.2
	c8.4,2,14.4,7.9,15.2,15.1c0.7,6.6-4.3,15.1-11.2,18.6C336.1,297.1,331,298.4,325.5,298.1z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M186.1,291c-5.5,0-10.8-1.2-15-5.2c-2.9-2.8-4.4-6.3-3.5-10.4c1-4.2,4.3-6.2,8.1-7.2
	c8.1-2.3,22.3,4,26.4,11.5c1.9,3.6,0.8,7-3.3,9C194.9,290.6,190.6,290.8,186.1,291z"/>
<path style="fill:#FDFCFC;transform:scale(0.2)" d="M325,291c-3.8-0.2-8.1-0.5-12-2.6c-4.3-2.3-5.3-6.2-2.2-9.9c6.1-7.2,13.9-11.3,23.5-10.6
	c4.7,0.4,8.8,2.3,10.1,7.4c1.2,4.9-1,8.8-4.8,11.7C335.5,290.2,330.6,291,325,291z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M185.9,288.8c-4.4,0-8.7-0.9-12.1-4.2c-2.3-2.3-3.6-5-2.8-8.3c0.8-3.4,3.5-5,6.5-5.8c6.5-1.8,18,3.2,21.2,9.2
	c1.6,2.9,0.6,5.6-2.7,7.2C193,288.4,189.5,288.6,185.9,288.8z M325.5,289c-3.1-0.2-6.7-0.4-9.9-2.1c-3.5-1.9-4.4-5.1-1.8-8.1
	c5-5.9,11.4-9.3,19.4-8.7c3.9,0.3,7.3,1.9,8.3,6.1c1,4.1-0.8,7.2-3.9,9.6C334.2,288.3,330.1,289,325.5,289z"/>
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
                                    <button :style="{background:'rgba('+getterTaurusBg1+')'}" @click="ShowElement(getterTaurusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTaurusBg2+')'}" @click="ShowElement1(getterTaurusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTaurusBg3+')'}" @click="ShowElement2(getterTaurusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTaurusBg4+')'}" @click="ShowElement3(getterTaurusBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTaurusBg5+')'}" @click="ShowElement4(getterTaurusBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTaurusBg6+')'}" @click="ShowElement5(getterTaurusBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterTaurusBg7+')'}" @click="ShowElement6(getterTaurusBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Taurus= [
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
            var randomNumber = Taurus[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Taurus[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Taurus'){
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
                getterTaurusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Taurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTaurusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Taurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTaurusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Taurus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTaurusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTaurusBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTaurusBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTaurusBg7: {
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
                            name:'Taurus',
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