<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                    <path :style="{fill:'rgba(221, 200, 177, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M513.9,450.6c0.8,3.7,3.8,2.2,5.8,2.2c18.5,0.1,37,0,55.5,0c13.7,0,24.1,9.1,25.8,22.5
	c1.8,13.7-6.3,26.3-19.3,29.6c-4.5,1.2-9.1,0.6-13.7,0.6c-34.2,0-68.4-0.1-102.7,0c-10.4,0-19.2,4-24,13.7c-5,10-4.3,20.2,2.1,29.3
	c5.6,7.9,13.8,9.5,23.3,10.2c12.8,1,26.4-3.2,38.5,3.9c9.8,5.8,13.1,15.2,11.9,25.9c-1.2,10.4-6.8,18.1-16.9,21.9
	c-1.1,0.4-2.4,0.2-3.2,1.3c-90,0-180,0-270,0c-17.5-3.1-22.2-18.5-21.2-29.6c1.3-15,12.3-24.4,27.7-24.6c6.5-0.1,13.1,1.1,19.2-2.2
	c1.8,0.6,2.7,2.3,3.8,3.7c3.6,4.5,8.3,6.7,14,6.8c23.5,0.1,47,0.2,70.5,0c11-0.1,16.8-6.3,16.9-17.3c0.1-12.3,0.1-24.7,0-37
	c0-4.7,1.1-8.5,5.5-11c3.5-2,5.2-5.4,5.2-9.5c0.1-4,0.3-8-0.2-11.9c-0.8-6.5-3.9-9.9-10.5-9.8c-12.5,0.1-11.9-2.3-11.9-13
	c0-5,0-10,0-14.9c0-3.9,0.5-7.5,2.9-10.7c1.5-2,1.8-4.4,2-6.8c2.1-25.4,11.6-48.2,25.4-69.4c1.9-3,2.7-7.3,7.3-7.8
	c46.3,0,92.6,0,138.9,0c12.3,0,23.3,9.8,24.7,21.6c1.9,15.4-5.2,27.8-18.4,30.3c-7.9,1.5-16.1,1.2-24.2,1.1c-5-0.1-10.6-2.8-15,2.1
	c-2.6-0.1-3.7-2.2-5.1-3.8c-11.5-13-25.8-16.9-42.1-12c-16.3,4.9-26.4,15.7-28.6,33c-0.5,3.7-2.2,6.1-5.2,8.2
	c-8.3,5.8-11.5,14.2-8.9,22.6c2.8,8.7,10.6,14.5,20.3,14.5c22.3,0.1,44.5,0.2,66.8,0c9.2-0.1,17-3.5,22.9-10.9
	C510.9,452.2,511.6,450.2,513.9,450.6z"/>
<path :style="{fill:'rgba(244, 231, 208, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M252.4,555.5c-0.4,3.5-2.8,3.8-5.7,3.8c-5.4-0.1-10.7,0-16.1,0c-14.6,0.1-24,15.1-23.1,27.6
	c1,13.2,8.7,20.1,19.6,25c-48.2,0-96.4,0-144.6,0c-12.6-5.2-19.7-14-19.2-28.2c0.5-13.7,12.3-26.5,28.1-24.6
	c5.6,0.7,11.4,0.4,17.2-0.5c5.3-0.9,10.7,0.9,16.4-0.2c10.2-2,19.3-9.2,20.5-19.5c1.4-11.8,0.8-21.5-12.4-29.8
	c-4.6-2.9-9.6-3.4-14.8-3.4c-27.3-0.1-54.5,0-81.8-0.1c-15.3,0-25.7-11-25.7-26.6c0-14.4,11.4-26.4,25.7-26.1
	c25.5,0.5,50.9,0.1,76.4,0.2c5.2,0,10.4-0.5,15.2-2.1c11.4-3.9,17.2-13.6,16.4-27.4c-0.5-9.2-6.8-19.9-18.6-22.8
	c-7-1.7-14.1-1-21.2-1c-8.4,0-17.2,1.3-25.2-1.6c-14.1-5.1-20.5-22.9-14-36.6c0.6-1.2,1-2.6,1.4-3.9c1.3-1.3,2.9-1.1,4.5-1.1
	c33.6,0.4,67.2,0.1,100.7,0.2c2.4,0,4.8-0.1,7.1,0.8c3.3,1.8,1.8,4.4,1.1,6.8c-1.7,5.6-2.3,11.2-0.3,17c3.7,10.4,11.4,16,22.4,16.4
	c11.9,0.5,23.8-0.4,35.6,1.2c8,1.1,14.8,4.4,20,10.7c2.9,7.1,2,14.8,3.8,22c-1.6,13.4-13.4,22.7-29.6,23.1
	c-12.5,0.3-25,0.1-37.6,0.1c-3.2,0-6.4-0.1-9.5,0c-14.5,0.5-23.6,10-23.6,24.5s9,24.2,23.5,24.4c19.5,0.3,39,0,58.4,0.1
	c3.2,0,6.9-0.9,9.5,2.2c1.4,3,1.1,6.2,1.1,9.4c0,10.7,0.1,21.4,0,32.1C254.1,550.2,254.5,553.1,252.4,555.5z"/>
<path :style="{fill:'rgba(26, 19, 48, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M402.2,292.5c-19.3-18.9-14.9-45.1,9.5-56.4c2.1-1,3-1.8,3.1-4.2c0.4-25.2,12.1-43.8,33.6-56.5
	c14.7-7.1,30-10.1,46.3-7.1c20.8,3.9,35.8,15.4,45.5,34c1.6,3.1,3.4,4.8,6.8,5.6c23.2,5.2,39.3,26.5,37,48.6
	c-2.6,25.1-21.5,43.2-46.2,43.4c-38.4,0.3-76.8,0.1-115.2,0C414.9,299.9,408.3,296.7,402.2,292.5z"/>
<path :style="{fill:'rgba(26, 19, 48, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M513.9,450.6c-6.8,10.9-16.6,15.7-29.5,15.5c-21.3-0.3-42.5-0.1-63.8-0.1c-11.1,0-19.8-6.1-22.5-15.9
	c-2.8-9.8,1-18.7,10.6-24.8c2.2-1.4,3.3-2.8,3.6-5.5c1.8-18.5,13.5-31.6,31.9-36.2c17.6-4.4,34.5,2.2,44.6,17.4
	c0.2,0.3,0.6,0.5,0.9,0.8c0.9,2.7,2.4,4.6,5.4,5.6C514.9,413.4,522.7,431.7,513.9,450.6z"/>
<path :style="{fill:'rgba(26, 19, 48, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M252.4,555.5c-0.1-16.6-0.3-33.3-0.4-49.9c-10.6-4.4-12.2-7-12.3-18.9c0-1.8,0-3.6,0-5.4
	c0.2-10.7,4.7-15.2,15.2-15.7c7.2-0.3,7.7-0.5,7.4-7.5c-0.3-8.9,1.6-17.9-1.8-26.5c-2.3-4.8-1.5-10.1-2.3-15.2
	c-0.3-2.1-0.9-4.2-1.3-6.4c-4.2-10-6.7-20.6-11.4-30.6c-5.1-11-11.2-21.4-17.8-31.5c-2.3-4.2-4-1.1-5.9,0.4
	c-10.2,8.4-21.9,12.5-35.2,11.9c-2.2-0.1-4.4,0-6.2-1.4c-33.7-0.1-67.4-0.2-101.1-0.2c-4.2,0-8.3-0.2-12.4-1.1
	c-19-7.9-27.7-23.5-22.7-41c2.9-10.2,9.6-17.2,19.2-21.4c2.4-1,3.8-2,3.9-5c1.1-46.6,44.1-70.1,80.1-63.2c0.4,0.1,0.8-0.1,1.7-0.2
	c-2.1-10.6-4.1-21.2-4.7-32C140.7,121,186.1,54.9,256.3,32.1c88.5-28.8,184.3,24.4,206.6,114.6c0.7,3,1.5,5.2-2.7,5.9
	c-3.5,0.6-5.4,1-6.7-3.6c-15.3-54.7-50.1-91-104-108.8c-1.9-0.6-3.8-1-6.9-1.9c5,5.3,9.2,9.8,13.4,14.3c8.7,7.3,13.3,17.3,17.7,27.3
	c11.7,26.4,17.8,54.3,20.1,83.1c2.8,34.7-0.5,68.7-9.9,102.1c-4.9,17.5-13.7,33.5-20.5,50.3c-8,19.7-15.6,39.6-20.6,60.4
	c-2.3,9.6-5.9,18.9-7,28.8c-0.8,6.1-1.6,12.2-2.5,18.3c-0.4,3,1,4.1,3.7,3.5c2.3-0.5,6,2,6.3-2.9c3.3-46,29.2-80.9,56.8-115
	c2.7-3.3,4-1.4,6,0.2c2.4,1.9,3.9,3.3,1.1,6.5c-8.6,9.9-16.9,20-23.6,31.3c-16.5,23.6-29.1,48.7-30.8,78.1c-0.1,2,0.1,4.1-1.2,5.7
	c-8.3,10.7-2.6,22.9-4,34.4c-0.3,2.6,2.3,2.2,4,2.3c17.9,1.1,18.4,1.7,18.6,19.5c0.1,7.5,0,14.5-9.1,17.1c-2.5,0.7-1.4,3.4-1.4,5.3
	c-0.1,13.5,0,27.1,0,40.6c0,11.3-6.3,17.7-17.8,17.8c-24.1,0.1-48.1,0-72.2,0C261.2,567.4,255.6,563.3,252.4,555.5z M594.4,416.9
	c0,9.2-7.4,16.7-16.5,16.8c-9,0-16.7-7.7-16.7-16.7c0.1-9.3,7.3-16.6,16.6-16.7C586.9,400.2,594.4,407.7,594.4,416.9z M452.4,62.3
	c-9.2,0.1-16.7-7.2-16.9-16.4c-0.2-8.8,7.7-16.9,16.6-16.9c9.1-0.1,16.6,7.4,16.7,16.6C468.8,54.9,461.7,62.3,452.4,62.3z
	 M59.8,414.5c-0.1,9-8.1,16.7-16.9,16.5c-9.2-0.3-16.5-7.9-16.4-16.9c0.1-9.2,7.6-16.4,16.9-16.3C52.5,397.9,59.9,405.4,59.8,414.5z
	 M89.1,115.9c9.2-0.1,16.9,7.2,17.1,16.3c0.2,8.7-7.6,16.9-16.5,17.1c-9,0.2-16.7-7.4-16.9-16.5C72.7,123.4,79.9,116,89.1,115.9z"/>
<path :style="{fill:'rgba(221, 200, 177, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M260.5,431.5c3.2,2,4.1,4.8,4,8.6c-0.3,7.3-0.3,14.7,0,22.1c0.2,4.1-1.4,5.4-5.1,4.9
	c-1.8-0.2-3.6-0.1-5.4,0c-8.4,0.2-12.2,4.1-12.3,12.6c0,2.6,0.2,5.2,0,7.7c-0.6,7.9,1,14.3,9.8,16.6c0.3,0.1,0.4,1,0.6,1.6
	c-21.7,0-43.3-0.1-65,0c-10.8,0.1-19.7-3.2-24.4-13.5c-4.5-9.9-4.2-19.9,2.2-29.2c4.8-7,11.7-9.8,19.8-9.9
	c16.1-0.1,32.2,0.4,48.3-0.2C246.8,452.2,258.5,445.2,260.5,431.5z"/>
<path :style="{fill:'rgba(221, 200, 177, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M228.3,346.6c13.3,18.4,23.1,38.3,28.6,60.4c0.2,0.9,0.1,2,0.1,3c-9.6-9-20.9-10.8-33.8-10.2
	c-8.7,0.4-17.9,0.7-26.5-1.1c-15.2-3.1-23.4-20.2-17.7-35.5c0.6-1.5,1.1-3,1.6-4.4c7.9-0.4,15.8,0.2,23.5-2.3c6.7-2.2,12.4-6,18-10
	C224.1,345.4,226.2,345,228.3,346.6z"/>
<path :style="{fill:'rgba(234, 96, 96, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M335.8,404.6c0.1-11.9,3.7-23.1,6.7-34.4c7.2-26.7,17.5-52.3,29.2-77.4c9.9-21.2,15.7-43.7,18.8-66.9
	c5-38.3,3.1-76.2-6.9-113.6c-5.7-21.5-14.8-41.5-27.6-59.7c29,10.4,51.6,29,68.8,54.4c13.9,20.6,21.6,43.5,23.6,68.3
	c-0.5,2.7-2.9,3.6-4.8,4.9c-17.5,11.9-26.1,28.8-27.2,49.7c-0.2,3.8-1.2,6.3-4.9,7.9c-19.8,8.3-25.8,33.8-11.4,50.2
	c1.1,1.2,3,2.2,2.2,4.4C372.4,325.3,347,360.7,335.8,404.6z M288.2,417c-4.8-44.8-20-86.4-38.6-127c-18.1-39.4-23.2-81-20.4-123.9
	c2-30.2,8.2-59.3,21.7-86.6c6.4-12.9,14.3-24.8,25.7-33.9c6.4-3,13.3-3,20.1-3.6c1.6-0.1,3.1,0,4.3,1.4
	c0.1,50.1,0.2,100.3,0.2,150.4c0,72.2,0,144.5,0,216.7c0,2.2-0.1,4.4-0.2,6.6C296.7,419.7,292.5,419.7,288.2,417z"/>
<path style="fill:#FBFBFB;transform:scale(0.2)" d="M255.9,52.6c-31.6,11.4-55.6,32-72.7,60.6c-32.6,54.6-24.8,124.3,18.8,170.6
	c24.4,25.9,46.3,53.5,61.8,85.8c5.4,11.3,8.9,23.3,12.6,35.3c0.7,5.9,1.4,11.8,2.2,17.7c0.4,2.8-0.6,4.3-3.6,3.7
	c-2.5-0.5-6.2,1.9-6.6-3.3c-3.4-45.1-28.3-79.6-55.5-113c-11.7-14.3-25.5-26.7-35.5-42.5c-55.5-88.1-8.7-203.8,91.7-228.9
	C264.5,43.6,260.2,48.1,255.9,52.6z"/>
<path style="fill:#FBFBFC;transform:scale(0.2)" d="M155.4,246.2c-12.5-4.8-25.2-5.1-37.9-1.1c-23.5,7.4-37.1,30.1-33.1,55.1c1.2,7.5,1.2,7.5-6.1,8.3
	c-4.3,0.5-8.7,1.1-12.3,3.9c-5.5,4.2-7.8,11.6-5.7,18.2c2.2,6.9,8,11.2,15.8,11.2c28.8,0.1,57.7,0.1,86.5,0.1c8.5,0,17.1-0.2,25.6,0
	c11.5,0.3,20.4-4.2,27-13.4c5.2,5.8,5.2,5.9-0.5,10.9c-6.8,6-14.8,9.4-23.8,9.4c-38.4,0.1-76.8,0.1-115.1,0
	c-12.4,0-22.5-9.8-23.2-21.9c-0.7-12.5,7.7-23,20.3-24.5c4-0.5,4.7-1.7,4.3-5.6c-3.9-44.6,36.7-68.2,72.2-60
	C154.4,238.1,154.2,242.6,155.4,246.2z"/>
<path style="fill:#FCFCFA;transform:scale(0.2)" d="M306.3,503.9c13.1,0,26.2,0.1,39.4-0.1c3.7-0.1,4.7,1.1,4.6,4.7c-0.2,13.7-0.2,27.4,0,41.2
	c0.1,5.6-2.5,8-7.9,8c-24.3,0-48.5,0-72.8,0c-5.4,0-7.9-2.5-7.8-8.1c0.2-13.7,0.2-27.4-0.1-41.2c-0.1-3.7,1-4.7,4.7-4.6
	C279.7,504.1,293,503.9,306.3,503.9z"/>
<path style="fill:#F9F9F8;transform:scale(0.2)" d="M306.6,476.6c16.1,0,32.2,0.1,48.4-0.1c4.2-0.1,5.9,0.8,5.9,5.5c-0.2,12.4,0.1,12.4-12.2,12.4
	c-30.4,0-60.9-0.1-91.3,0.1c-4.6,0-6.2-1.1-6.1-6c0.2-11.9,0-11.9,11.8-11.9C277.6,476.6,292.1,476.6,306.6,476.6L306.6,476.6z"/>
<path :style="{fill:'rgba(221, 200, 177, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M297.5,451.7c0-1.4,0-2.8,0-4.2c0-11.9,2.4-13.7,14.5-11.5c2.1,0.4,2.6,1.3,2.6,3.1
	c0,8.3,0,16.7,0,25c0,1.9-0.8,3-2.8,2.9c-0.4,0-0.8,0-1.2,0C297.4,467.9,297.4,467.9,297.5,451.7z"/>
<path :style="{fill:'rgba(221, 200, 177, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M274,451.2c0-2.6,0.3-5.2-0.1-7.7c-1-6.1,1.4-7.8,7.4-7.6c5,0.2,7.2,0.9,6.7,6.5
	c-0.5,6.7-0.3,13.5-0.1,20.3c0.1,3.2-0.8,4.9-4.3,4.5c-1.8-0.2-3.6-0.2-5.4,0c-3.5,0.3-4.5-1.4-4.4-4.6
	C274.1,458.7,274,454.9,274,451.2z"/>
<path :style="{fill:'rgba(221, 200, 177, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M338,451.7c0,2.8-0.3,5.6,0.1,8.3c0.8,5.8-1.6,7.3-7.3,7.3c-5.5,0-7.2-1.6-6.9-7
	c0.5-6.5,0.3-13.1,0-19.7c-0.2-3.8,1.3-5,4.8-4.6c1.8,0.2,3.6,0.1,5.4,0c2.8-0.2,4,0.9,3.9,3.8C337.9,443.7,338,447.7,338,451.7z"/>
<path style="fill:#F7F4F5;transform:scale(0.2)" d="M301,43.3c-8.1,0.7-16.2,1.5-24.4,2.2c5.2-4.8,11.2-8,17.9-10c6.5-1.9,6.7-1.8,6.6,4.8
	C301.2,41.4,301.1,42.4,301,43.3z"/>
<path style="fill:#F9F9F9;transform:scale(0.2)" d="M335.3,45.6c-8.1-0.8-16.2-1.5-24.3-2.3c-0.6-10-0.1-10.4,9.2-6.8C325.7,38.6,331,41.4,335.3,45.6z"
	/>
<path style="fill:#F3F5F5;transform:scale(0.2)" d="M288.2,417c4.3,0,8.5,0,12.8,0c0.1,0.6,0.2,1.2,0.2,1.8c-0.3,2.5,1.3,6.3-0.9,7.1
	c-3.1,1.2-7.4,1.4-10.4,0.1C286.2,424.5,288.6,420.1,288.2,417z"/>
<path style="fill:#F5F6F7;transform:scale(0.2)" d="M311,417c4.3,0,8.5,0,12.8,0.1c0,0.6,0.1,1.2,0.1,1.8c0,6.9-5.7,10.8-11.6,7.4
	C308.9,424.3,311.3,420.1,311,417z"/>
<path style="fill:#EFF2F4;transform:scale(0.2)" d="M228.3,346.6c-2.1,0-4.2,0-6.3-0.1C224.1,343.1,226.2,340.7,228.3,346.6z"/>
<path style="fill:#FAFBFC;transform:scale(0.2)" d="M481,290.3c-18.9,0-37.8,0-56.7,0c-13.1,0-23.3-9.1-24.2-21.5c-1-12.7,7.1-23.1,20.4-25
	c5.1-0.7,4.2-3.5,4-6.7c-1.1-22.3,6.8-40.4,26.4-51.8s40-12.3,60.2-1.1c11.2,6.2,18.6,16,23.2,27.9c1.2,3,2.7,4.1,6,4.3
	c19.6,1.2,34.8,18,34.4,37.4c-0.4,19.8-16.3,36.1-36.2,36.4C519.2,290.6,500.1,290.3,481,290.3z"/>
<path style="fill:#FBFCFC;transform:scale(0.2)" d="M453.6,456.5c-10.9,0-21.9,0-32.8,0c-7.8,0-13.1-4.3-13.9-11c-0.7-6.4,3.4-11.9,11-13
	c5.1-0.8,3.9-3.9,3.8-6.9c-0.6-12.7,4.3-22.5,15.4-28.8c11.4-6.4,23-6.8,34.5,0.1c5.7,3.4,9.6,8.4,12,14.4c1.3,3.1,2.6,4.5,6.3,4.8
	c11,0.9,18.6,10.2,18.2,21.2c-0.5,10.4-9.1,19-19.8,19.2C476.6,456.7,465.1,456.5,453.6,456.5z"/>
<path style="fill:#FBFCFC;transform:scale(0.2)" d="M584.8,416.6c-0.2,4.6-2.7,7.3-7,7.3s-7-2.7-6.9-7.1c0.1-4.1,2.4-6.7,6.6-6.8
	C582,409.8,584.3,412.4,584.8,416.6z"/>
<path style="fill:#F6F7F8;transform:scale(0.2)" d="M459.2,45.7c-0.4,4.5-2.7,7.1-7.2,7c-4.3-0.1-6.7-2.7-6.8-6.7c-0.2-4.4,2.6-7.2,6.9-7.3
	C456.4,38.6,458.9,41.3,459.2,45.7z"/>
<path style="fill:#F6F7F8;transform:scale(0.2)" d="M35.9,413.8c0.8-4.1,3.1-6.7,7.6-6.5c4.2,0.3,6.6,2.9,6.6,7c0,4.4-2.9,7.1-7.2,7
	C38.5,421.2,36.3,418.3,35.9,413.8z"/>
<path style="fill:#F8FAFA;transform:scale(0.2)" d="M89.4,125.4c4.6,0.3,7.2,2.9,7.1,7.2s-3,7.1-7.3,6.9c-3.9-0.2-6.6-2.6-6.7-6.9
	C82.5,128.1,85.1,125.9,89.4,125.4z"/>
<path :style="{fill:'rgba(255, 226, 79, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M335.3,45.6c17.7,14.6,27.9,34.2,34.7,55.3c18.9,58.3,18.7,116.7-1.6,174.8c-0.9,2.6-1.9,5.2-3,7.8
	c-1.1,2.4-2.2,4.6,0.4,6.6c-2.7,0-4,1.3-5.1,3.8c-16.2,35.5-29.3,72-35.3,110.8c-0.6,4.1-1.1,8.3-1.6,12.4
	c-4.3,2.6-8.5,2.7-12.8-0.1c-0.1-47.4-0.2-94.7-0.2-142.1c0-73.8,0-147.6,0-221.5c0-3.4,0.1-6.8,0.2-10.1c5.9-3.3,11.8-0.4,17.6,0.1
	C330.9,43.6,333.2,44.5,335.3,45.6z M255.9,52.6c-18,25.3-28.2,53.8-33,84.1c-8.7,54.9-4.7,108.5,19,159.7
	c14.8,32,27.1,64.9,33.5,99.7c0.5,2.9,0.7,5.9,1,8.9c-2.3-0.3-2.6-2.2-3-3.9c-6.5-26.4-19.8-49.4-35.2-71.3
	c-11.5-16.3-24.9-31-38.2-45.8c-23.9-26.6-37-57.5-37.9-93.6c-0.6-23.8,3.6-46.5,14.2-67.7c16-32,40.3-55.5,73.5-69.4
	C251.7,52.4,253.7,51,255.9,52.6z M305.4,551c-10.9,0-21.9-0.1-32.8,0.1c-3.4,0.1-5-0.5-4.9-4.5c0.3-10.9,0.3-21.9,0-32.8
	c-0.1-3.9,1.4-4.6,4.9-4.5c22.3,0.1,44.6,0.1,66.9,0c3.4,0,5,0.6,4.9,4.5c-0.3,10.9-0.3,21.9,0,32.8c0.1,3.9-1.5,4.6-4.9,4.5
	C328.1,550.9,316.8,551,305.4,551z M306,489.1c-14.3,0-28.6,0-42.9,0c-2.8,0-4.9-0.1-4.9-4c0-4.2,2.5-3.6,5.1-3.6
	c28.4,0,56.8,0,85.2,0c2.4,0,5.2-0.8,5.2,3.5c0.1,4.4-2.6,4.1-5.4,4.1C334.3,489.1,320.2,489.1,306,489.1L306,489.1z"/>
<path :style="{fill:'rgba(66, 120, 174, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M562.1,23.1c1.9,2.1,5.4,3.5,4.8,5.8c-0.6,2.6-3.2,5.6-6,5.7c-2,0.1-5.3-2.9-4.7-5.1
	C557,27,560,25.3,562.1,23.1z M26,35.3c-2.4-1.9-5.7-3.5-5.1-5.8c0.6-2.6,3.4-5.5,6.1-5.8c1.8-0.2,5.2,2.9,4.6,5.1
	C31,31.2,28,33.1,26,35.3z M561.3,38.4c2,2.2,5,4.1,5.6,6.6c0.5,2.1-2.7,5.2-4.7,5c-2.7-0.2-5.5-3.1-6-5.7
	C555.8,42,559,40.5,561.3,38.4z M32.6,232.9c-1.5,2.5-3.5,5.6-5.5,5.2c-2.5-0.5-5.5-3.2-5.7-6.1c-0.2-2,2.7-4.8,4.6-4.7
	C28.9,227.5,30.5,230.8,32.6,232.9z M41.8,211.3c2.2,2,5.4,3.5,5.7,6.3c0.3,2.3-2.9,5.2-4.8,5c-2.7-0.3-5.4-3.3-5.9-5.8
	C36.3,214.8,39.5,212.9,41.8,211.3z M531.7,133.9c2.4,1.8,5.5,3.6,5.7,6.3c0.2,2.2-3.2,5.4-4.9,4.9c-2.5-0.8-5.2-3.5-5.9-6
	C526.2,137.6,529.4,135.3,531.7,133.9z M547,118.4c2.6,1.6,5.5,3.6,5.9,6.2c0.4,2.2-2.9,5.3-4.7,5c-2.7-0.3-5.4-3.2-6-5.8
	C541.7,121.7,545,120.1,547,118.4z M175.8,44.3c2.4,1.3,5.5,3.6,5.1,5.1c-0.7,2.5-3.4,5.3-5.8,6.1c-1.9,0.6-5.1-2.8-5-4.8
	C170.2,47.9,173.5,46.3,175.8,44.3z M32.4,45c-1.9,2.2-3.4,5.4-5.7,5c-2.7-0.5-5.6-3.2-5.7-6c-0.1-2,2.9-5.2,4.9-4.7
	C28.3,40,30.2,42.9,32.4,45z M159.8,40.6c-2.3-1.6-5.4-3.3-5.2-5.5c0.3-2.7,3.2-5.5,5.9-5.9c2.2-0.3,5.4,3.3,5,4.8
	C164.7,36.5,161.8,38.4,159.8,40.6z M583.1,29.5c-1.9,2.2-3.4,5.4-5.7,4.9c-2.6-0.5-5.6-3.2-5.7-6c-0.1-2,2.9-5.2,5-4.7
	C579.1,24.5,580.9,27.4,583.1,29.5z M47.7,29.7c-1.7,2-3.1,5.1-5.6,4.8c-2.6-0.3-5.2-3.1-5.6-5.6c-0.4-2.4,2.9-5.3,4.7-5.1
	C43.9,24.1,45.7,27.2,47.7,29.7z M513.7,533.1c-2.3-1.4-5.5-3.6-5-5.2c0.7-2.5,3.5-5.2,5.9-6c1.6-0.5,5,2.7,4.9,4.9
	C519.2,529.5,516,531.2,513.7,533.1z M535.7,542c-2.1,2.7-3.9,5.9-6.6,6.2c-2.2,0.3-5.4-3.4-5-4.9c0.8-2.5,3.5-5,6.1-6
	C531.2,536.9,533.8,540.3,535.7,542z M42.9,568.5c-2.2,2.2-3.5,5.5-6,4.8c-2.4-0.6-5.3-3.1-5.4-5.7c-0.1-2.3,3-5.4,4.9-4.9
	C38.8,563.3,40.6,566.3,42.9,568.5z M20.9,577.6c2,2.2,5.5,3.8,5.6,6.6c0.1,2-2.7,5.2-5.2,4.6c-2.4-0.5-5.3-3.1-5.5-5.7
	C15.7,580.7,18.8,579.1,20.9,577.6z M48,232.3c-2.1,2.1-3.7,5.5-6.5,5.6c-1.8,0.1-5.2-2.8-4.5-5.2c0.8-2.4,3.1-5.6,6.2-5.4
	C45.2,227.6,46.9,230,48,232.3z M47.6,44.3c-2,2.3-3.6,5.5-6.5,5.8c-2,0.2-3.9-2.5-4.9-4.7c-0.5-1,5.6-6.7,6.4-6.1
	C44.6,40.4,46.4,42,47.6,44.3z M553.5,139.3c-2,2.3-3.7,5.5-6.5,5.8c-1.9,0.2-5.1-2.9-4.7-4.9c0.5-2.6,3.3-5.5,5.9-5.9
	C550.2,134,552.1,137,553.5,139.3z M25.8,223.1c-1.6-1.8-4.6-3.5-4.5-5.2c0.1-2.9,3.1-5.6,5.7-6.1c2.2-0.5,5.2,2.7,5,4.8
	C31.7,219.3,28.6,221.2,25.8,223.1z M538,123.7c-1.9,2.3-3.6,5.5-6.3,5.8c-2.1,0.3-5.2-2.9-4.9-4.7c0.4-2.7,3.3-5.5,5.8-6
	C534.7,118.4,536.5,121.6,538,123.7z M159.8,44.1c2,2.2,4.9,4.1,5.6,6.6c0.4,1.6-2.8,5.1-4.9,4.7c-2.7-0.4-5.5-3.3-5.9-5.9
	C154.3,47.5,157.3,45.6,159.8,44.1z M582.8,44.4c-2.1,2.1-3.6,5.5-6.5,5.6c-2,0.1-4-2.5-4.8-4.8c-0.4-1.1,5.7-6.6,6.5-6
	C579.9,40.5,581.8,42,582.8,44.4z M181.6,35c-1.9,2.1-3.5,5.3-5.7,5c-2.7-0.5-5.5-3.3-5.9-6c-0.3-2,2.9-5.3,5-4.8
	C177.6,29.9,179.4,32.9,181.6,35z M530.6,533.3c-2.9-1.8-5.8-3.7-6.4-6.3c-0.6-2.4,2.8-5.2,4.5-5.2c2.8,0.1,5.3,3.2,6.1,5.7
	C535.7,530,531.9,531,530.6,533.3z M520.1,543c-1.6,2.4-3.4,5.6-5.5,5.2c-2.6-0.5-5.5-3.3-5.9-6c-0.3-2,3.1-5.3,4.8-4.8
	C516,538,517.9,541,520.1,543z M580.2,336.9c-1.7,2.5-3.5,5.4-6.2,6c-2.1,0.4-4.8-2.5-4.8-4.4c0.1-3,3-5.4,5.7-6
	C577,331.8,578.3,335,580.2,336.9z M564.6,321.8c-2,2.2-3.5,5.3-6.4,5.6c-2,0.2-4.9-2.6-4.6-4.6c0.4-2.8,3.1-5.5,5.9-5.9
	C561.6,316.7,563.3,319.4,564.6,321.8z M573.8,316c2.3,2.5,5.8,3.9,5.8,6.9c0,1.9-2.6,4.9-4.7,4.4c-2.6-0.6-5.6-3.1-5.6-6
	C569.2,319.6,572.1,317.9,573.8,316z M21.2,574c-2.5-1.4-5.5-3.2-5.2-5.3c0.3-2.6,3-5.4,5.8-5.7c2.1-0.3,4.6,2.5,4.6,4.4
	C26.5,570.4,22.8,571.5,21.2,574z M564.6,337.9c-1.2,2.4-3,5.1-4.9,5c-2.9-0.2-5.4-3-6-5.7c-0.4-2,2.5-4.7,4.5-4.7
	C561.1,332.5,562.5,335.8,564.6,337.9z M36.5,589.3c-2.4-0.9-3.9-2.8-5.2-4.7c-0.7-1,4.5-6.8,5.9-6.4c2.3,0.6,4.8,2.7,4.7,4.5
	C41.9,585.7,38.5,587.1,36.5,589.3z M155.4,246.2c7.3,15.7,15.4,30.9,26.9,44c9.6,10.9,19.3,21.7,28.8,32.6c1.6,1.8,2.8,3.8,4.2,5.8
	c0.5,2.8-1.4,4.5-3.1,6.1c-6,5.7-13.1,8.9-21.5,8.9c-37.8,0-75.6,0.1-113.4,0c-10.6,0-17.8-6-18.9-15.3c-1.2-10,4.5-17.9,14.9-20.5
	c9.4-2.3,9.4-2.3,8.8-12c-1.8-30.9,20.5-54.7,51.4-54.8c5.6,0,11.1-0.2,16.5,1.8C152.1,243.5,154.2,244.1,155.4,246.2z M481,283.3
	c-18.7,0-37.4,0-56.1,0c-10.5,0-17.7-6.3-18.3-15.6c-0.6-8.7,6.1-16.1,16-17.6c1.4-0.2,2.8-0.4,4.2-0.3c4.5,0.3,5.6-1.4,5-6
	c-1.9-16.7,0.4-32.2,12.8-45.3c19.1-20.2,67.4-24.5,83.2,16.6c2.3,6,5.2,8.2,11.5,8.3c15.8,0.3,28.6,14.4,28.3,30.3
	s-13.4,29.3-29.3,29.5C519.2,283.4,500.1,283.3,481,283.3L481,283.3z M454.2,450.5c-11.1,0-22.3-0.1-33.4,0c-4.1,0-7.4-1.1-7.9-5.4
	c-0.5-4.6,2.8-6.6,6.9-7.3c1.4-0.2,2.8-0.5,4.1-0.4c3.1,0.1,4.3-1.2,4-4.3c-0.3-3.2-0.3-6.4-0.3-9.5c0.1-13,8.4-22.6,21.6-25.3
	c11.7-2.4,23.6,3.4,28.3,14.6c2.4,5.8,4.6,9.5,12,9.3c7.5-0.2,12.6,7,12.4,14.7c-0.3,7.5-6,13.5-13.8,13.6
	C476.9,450.7,465.6,450.5,454.2,450.5z"/>
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
                                    <button :style="{background:'rgba('+getterAirBalloonBg1+')'}" @click="ShowElement(getterAirBalloonBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAirBalloonBg2+')'}" @click="ShowElement1(getterAirBalloonBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAirBalloonBg3+')'}" @click="ShowElement2(getterAirBalloonBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAirBalloonBg4+')'}" @click="ShowElement3(getterAirBalloonBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAirBalloonBg5+')'}" @click="ShowElement4(getterAirBalloonBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAirBalloonBg6+')'}" @click="ShowElement5(getterAirBalloonBg6)" :class="this.ValueId+'_color6btn'"></button>
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
        var AirBalloon= [
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
            var randomNumber = AirBalloon[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  AirBalloon[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'AirBalloon'){
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
                getterAirBalloonBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'AirBalloon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAirBalloonBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'AirBalloon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAirBalloonBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'AirBalloon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAirBalloonBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterAirBalloonBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAirBalloonBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },

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
                            name:'AirBalloon',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
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