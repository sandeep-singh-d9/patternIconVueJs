
<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                 <path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M405,431.4c-8.9-2-16.6-4.3-23.8-8.4c-15.6-8.9-21.8-24.4-15.5-39.2c5.5-12.9,19.7-20.8,33.7-18.8
	c13.5,1.9,24.2,13.8,25.7,28.7c0.9,8.9,0.2,17.6-2.7,26.1c-0.6,1.8-1.9,3.8,1.8,4c18,1,35.6,0,52.4-7.2c5.2-2.3,10-5.2,14.5-8.8
	c2.7-2.1,5.5-2.8,7.8,0.3c2.5,3.1,0.8,5.6-1.8,7.7c-12.5,9.9-26.9,15-42.5,17.2c-11.6,1.7-23.2,1.6-34.9,0.3
	c-1.8-0.2-3.4-0.4-4.8,1.5c-12.1,16.6-28.6,19-47.2,14.7c-14.8-3.5-27.9-10.7-40.6-18.7c-12.2-7.7-24.8-14.2-38.8-17.9
	c-3.4-0.9-4.4-0.2-5.2,3.2c-4.9,22.2-13.8,42.4-30.1,58.7c-29.9,30-72.1,36.6-112,17.7c-5.1-2.4-10.1-5.2-14.9-8.1
	c-2.5-1.5-4.2-1.5-6.7,0c-9.8,5.8-20.1,9.6-31.8,7.7C64.9,488.6,52.8,464,64,443.8c1.2-2.2,2.1-3.8-0.2-5.9c-1.1-1-2.1-3.1-1.9-4.4
	c0.8-5.2-2.8-7.7-5.7-10.8c-17.4-18.9-32.4-39.3-40.4-64.1C1.1,312.2,22.2,263.5,66,242.2c19.7-9.6,40.4-14,62.1-14.9
	c21.8-1,36.6-11.9,44.6-32c6-15,14.9-28,27.3-38.2c18.8-15.3,39.9-15.6,61.9-8.6c14.3,4.6,26.7,12.7,37.8,22.7
	c3.1,2.8,4.6,1.9,7-0.5c29.9-30,59.7-60,89.8-89.8c5.2-5.2,5.7-11.7,7.5-18.1c0.8-2.9,0.6-6,2.3-8.6c1.5-2.3-0.7-2.9-1.7-4
	c-2.3-2.5-3.4-5.2-0.6-7.9c2.7-2.7,5.6-1.7,7.8,0.9c1.9,2.2,3.3,2.3,5,0c1-1.3,2.2-2.5,3.5-3.6c1.6-1.4,2.3-2.6,0.3-4.4
	c-2.6-2.3-4.1-5.2-1.2-8.2c2.9-2.9,5.9-1.5,8.2,1.1c1.6,1.8,2.6,1.4,3.9-0.2c1.2-1.4,2.4-2.8,3.8-3.9c2-1.6,2.1-2.9,0.1-4.8
	c-2.5-2.3-3.4-5.1-0.6-7.8c2.6-2.5,5.3-1.7,7.4,0.7c1.9,2.1,3,1.5,4.7-0.2c5.2-5.1,6.1-5.2,11.7-0.7c15.2,12.2,29.4,25.6,41.2,41.3
	c3.7,4.9,3.8,6.5-0.5,10.6c-2.2,2.1-3.1,3.5-0.3,5.8c2.3,2,2.6,4.7,0.4,7.1c-2.4,2.6-5.2,2.2-7.5-0.2c-5.1-5.3-5.9,1.7-8.7,3
	c-3.2,1.5-1.7,3.3,0.2,5.2c2.3,2.2,2.8,5.1,0.3,7.5c-2.3,2.2-5.2,2-7.1-0.4c-2.9-3.6-4.7-1.9-7,0.5c-2.6,2.7-6.4,4.7-1.1,8.5
	c2.2,1.6,2,4.6-0.1,6.7c-2.1,2-4.9,2.3-6.7,0.1c-2.6-3.1-5.1-1.9-8.4-1.6c-14,1.1-23.5,9-32.8,18.5c-33,33.7-66.5,66.9-100,100.1
	c-3.2,3.2-3.3,6-2,9.7c1.7,5,5.4,8.3,9.9,10.8c6.4,3.6,13,6.7,19.4,10.3c22.8,13.2,27.1,38.3,10,58.5c-9.8,11.6-21.5,20.8-35.7,26.6
	c-5.6,2.3-10.9,4.9-15.9,8.3c-11.7,8-17.2,19.6-19,33.2c-0.8,5.8-0.7,11.6-1.3,17.4c-0.2,2.4,0.7,3.3,2.8,3.8
	c17.3,3.9,32.5,12.4,47.3,21.8c11.6,7.3,23.8,13.5,37.4,15.9C385.1,442.7,395.9,441.5,405,431.4z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M418.1,99.1c6.2,7.4,6.2,7.4-0.7,14.2c-2.4,2.4-4.8,4.7-7.1,7.1c-2.1,2.2-4.2,3.9-7.2,1.3
	c-1.2-1-2.5-0.6-3.6,0.5s-1.4,2-0.4,3.5c2.1,2.9,0.9,5.2-1.5,7.4c-3,2.9-5.9,5.9-8.9,8.8c-2.6,2.6-4.6,5.5-9.2,2.7
	c-2.5-1.5-4.3,1-2.8,3.5c2.1,3.5,0.5,5.5-1.9,7.7c-3.4,3.2-6.7,6.5-9.9,9.9c-2.2,2.3-4.6,3.4-7.4,1.3c-1.4-1.1-2.4-0.6-3.4,0.5
	s-1.4,2.4-0.3,3.6c2.3,2.8,1,4.8-1.1,6.9c-4.1,3.9-8.1,8-12,12c-1.8,1.9-3.7,2.9-6.1,1c-1.2-0.9-2.4-1.3-3.6-0.2s-0.9,2.4,0,3.6
	c2.1,2.6,0.7,4.5-1.2,6.5c-3.7,3.6-7.4,7.2-11,11c-2.1,2.2-4.4,3.1-7,1.3c-1.4-0.9-2.3-1-3.5,0.2c-1.2,1.3-1.5,2.6-0.4,4
	c2.1,2.6,0.9,4.5-1.1,6.5c-3.7,3.6-7.4,7.2-11,11c-2.1,2.2-4.3,3.2-7,1.4c-1.3-0.9-2.3-1.1-3.5,0.1c-1.2,1.2-1.1,2.1-0.2,3.5
	c1.8,2.7,0.9,4.9-1.3,7c-4.7,4.5-9.4,9-13.7,13.8c-2.7,3.1-5.2,3.6-8.4,1.3c-1.5-1.1-3.1-1.9-4.7-2.8c6-6.4,12.2-12.6,18.6-18.6
	c2.3-2.1,2.2-3.5,0.2-5.6c-3-3.2-7-5.6-8.8-9.9c2-2.6,4.3-5,7-6.9c4.4,0.2,6,4.2,8.7,6.6c4.5,4,4.3,4.2,8.6-0.1
	c2.1-2.1,4.1-4.3,6.3-6.3c2.6-2.3,2.7-4.2,0-6.5c-2-1.7-3.8-3.7-5.6-5.6c-1.1-1.2-2.7-2.1-2-4.2c1.9-2.8,4.3-5,6.9-7
	c3.9,1.5,6.2,5,8.9,7.8c2.7,2.8,4.7,3.8,7.4,0c1.9-2.7,4.5-4.9,7-7.1c2.7-2.4,2.3-4.1-0.1-6.5c-2.9-2.9-6.5-5.2-8.2-9.2
	c2.7-2.7,5.3-5.3,8-8c4.3,1.8,6.7,5.8,9.9,8.8c2,1.9,3.4,2.1,5.3,0c2.8-3.1,5.7-6,8.8-8.8c2.5-2.3,2.1-4.1-0.2-6.2
	c-2-1.8-3.8-3.7-5.6-5.6c-1.1-1.2-2.7-2.1-2.1-4.2c1.9-2.8,4.3-5,6.9-7c3.9,1.5,6,5.1,8.9,7.8c3.9,3.6,3.8,3.7,7.6-0.4
	c2.2-2.3,4.3-4.6,6.7-6.7c2.7-2.4,2.3-4.1-0.1-6.5c-2.9-2.9-6.5-5.2-8.2-9.2c2.6-2.7,5.3-5.3,7.9-8c4.2,1.7,6.5,5.5,9.5,8.5
	c2.3,2.3,3.9,2.4,6.1,0c2.7-2.9,5.4-5.8,8.5-8.3c2.2-1.7,1.7-3.1,0.1-4.9c-3.1-3.4-7.2-5.9-9.1-10.3c2.1-2.6,4.3-5,7-6.9
	c4.3,0.1,5.8,3.9,8.3,6.3c4.8,4.4,4.6,4.4,9.3,0C409.8,106.6,413,101.8,418.1,99.1z M428.1,94.2c-4-3.7-7.9-7.4-11.9-11.1
	c0.9-6.6,3.1-12.9,5.1-19.2c0.8-2.5,2.5-4.7,5.6-5c1.6,1.1,1.2,2.9,1.8,4.4c0.9,2.5,2.7,3.7,5.3,3.3c2.6-0.4,4.2-2,4.3-4.6
	c0.1-2.5-1.7-3.7-3.9-4.3c-1.4-0.4-3-0.2-4.2-1.2c-0.2-0.3-0.5-0.6-0.4-0.9c3-6.6,7.7-11.6,14.5-14.5c1.2,1.3,0.9,3.1,1.5,4.6
	c1.1,2.4,3,3.4,5.6,2.9c2.3-0.5,3.8-2,4-4.4c0.2-2.5-1.5-3.8-3.8-4.5c-1.4-0.4-3-0.3-4.3-1.1c-1-0.9-0.5-1.9,0.1-2.6
	c3.6-3.8,6.7-8.2,11.5-10.7c10.1,7.8,19.4,16.5,27.2,26.8c-2.7,5.3-7.4,9-11.7,12.7c-7,6.1-13.6,12.7-20.1,19.4
	C447.1,91.6,437.6,92.9,428.1,94.2z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M415.4,403.3c0,4.1-1.2,10.1-3.4,15.9c-0.6,1.5-0.8,3.3-3.3,2.8c-10.4-2.3-20.8-4.7-28.9-12.4
	c-8.4-7.9-8.9-18.9-1.6-27.2c7.6-8.6,20.3-10.1,28.7-3.2C413.9,384.8,415.5,392.7,415.4,403.3z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M113.6,476.4c-8.3,4.6-16.3,7.5-25.3,5.7c-13.7-2.6-22-17-17.3-30.1c1.2-3.4,2.3-4.9,5.3-1.4
	c3.2,3.7,6.9,6.8,12.4,5.7c1.1-0.2,1.8,0.6,2.6,1.2C98.2,464.2,105.5,470.2,113.6,476.4z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M288.1,189c-15.7,15.8-31.4,31.7-47.1,47.5c-5.8,5.8-6.2,7.7-2.7,15.3c5.5,12,15.7,18.6,27.6,23
	c2.7,1,4.7-0.5,6.6-2.3c7.9-7.9,15.7-15.8,23.6-23.7c1.3-1.3,2.7-2.4,4.1-3.7c1.9-0.2,2.6,1.3,3.4,2.5c5.5,7.4,12.6,12.8,20.8,16.7
	c4.8,2.3,9.7,4.5,14.2,7.3c10.2,6.3,12.4,15.5,5.9,25.5c-7.3,11.3-17.8,18.7-29.8,24.2c-10.8,4.9-21.3,10-29.7,18.9
	c-10.5,11.1-16.1,24.2-17.8,39.3c-1.1,9.9-0.9,19.9-3.1,29.7c-4.3,19.5-11.4,37.9-26.2,51.9c-23.2,22-50.4,27.7-80.8,17
	c-17.1-6-31.7-16.2-45.2-27.9c-1.7-1.5-4.4-2.9-3.1-6.1c10.4-6.9,20.7-13.8,31.1-20.7c4.4-2.9,5.1-5.2,2.4-9.5
	c-9.8-15.5-22.1-28.6-37.9-38.2c-4.8-3-6.7-2.5-9.9,2.1C87.2,388.5,80,399.2,72.8,410c-2.4,0.5-3.7-1.3-4.9-2.7
	c-11.3-12.9-22-26.3-29.4-42c-15.2-31.9-12.1-64.2,12.6-90.6c8.4-9,19-15.1,30.3-19.8c14.8-6,30.3-8.4,46.2-9.4
	c25.8-1.5,46-12.2,58-36c1.3-2.5,2.2-5.2,4.6-7c1.9-0.5,3,1,4.4,1.8c3.7,2.2,7.6,1.4,9.6-1.8c2.1-3.4,0.7-7.3-3.2-9.5
	c-1.4-0.8-3.2-0.8-4.5-2.1c0.1-5.1,3.2-9.1,7.6-10c0.7,0.8,0.8,1.8,1.1,2.7c1.8,5.1,5.8,6.3,9.4,2.3c10.4-11.7,23.3-12.1,37.1-8.6
	c3.7,0.9,7.3,2.4,10.8,3.8c5.8,2.4,7.7,1.7,10.8-3.9c0.5-0.6,1.1-0.9,1.7-0.5c4.6,2.6,9,5.6,12.4,9.8
	C288.2,187.4,288.4,188.2,288.1,189z M90.1,437c3.8-4.9,9.3-7.8,14.1-11.5c7.3-5.6,14.2-11.8,22.2-16.5c6.8,7.1,6.8,7.1-0.9,12.2
	c-10.1,6.7-20.3,13.3-30.4,19.9C91.8,441.8,90.2,440.4,90.1,437z M77.1,423.1c1.2,4.4,5.5,6.3,8.1,9.5c1.2,1.5,2.6,2.9,4,4.3
	c-1.3,3.2-3.6,5-7.1,5.1c-1.3-1.2-2.7-2.4-4-3.7C71,431.4,71,431.4,77.1,423.1z M82.1,442.1c2.4-1.7,4.7-3.4,7.1-5.1
	c0.3,0,0.6,0.1,0.9,0c1.2,1.9,2.5,3.8,5,4c-1.2,0.9-2.4,1.6-3.5,2.6C87.7,447.5,84.6,446.5,82.1,442.1z"/>
<path :style="{fill:'rgba(0, 212, 11, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M69.3,300.1c-6.4,0.3-11.1-1.7-13.9-7.4c-2-4-0.8-7.5,2.1-10.4c1.9-2,4.4-3.1,7.2-1.4
	c3.6,2.2,6.3,4.7,5.2,9.6c-1.1,5.3,3.1,3.7,5.3,3.3c7.9-1.5,15-5.2,21.5-9.9c5.4-3.8,9.7-8.5,13.4-13.9c0.9-1.4,1.9-2.8,3.8-2.9
	c12-0.4,22.3-5.9,32.8-10.9c3.9-1.9,8-3.3,12.3-3.8c5.3-0.6,9.2,2.4,12.2,6.4c2.2,2.8,2.4,6.1,0.8,9.4c-1.7,3.6-5.9,5.5-9,4.3
	c-4.5-1.8-6.7-5.6-5.1-9.7c1.6-4.1-1-3.9-3.3-3.7c-5.7,0.5-10.3,3.8-14.7,6.9c-7,5-13.3,11.1-18.4,18.1c-2.8,3.9-6.3,4.9-10.9,5.4
	c-11.3,1.2-21.9,5.2-32.4,9C75.2,299.7,72.1,300.5,69.3,300.1z M261.1,353.5c0.1,5.4-1.9,10-4.1,14.5c-5,10.3-9.7,20.7-11.1,32.3
	c-0.4,3.5-4.5,4.6-6.9,6.7c-10.2,9.3-18.3,19.7-19,34.2c-0.1,2.8,0.4,4.3,3.6,2.5c4.5-2.4,6.6,1.4,8.4,4c1.9,2.7,1.8,5.9-0.9,8.6
	c-5.3,5.3-14.5,2.3-17-5.5c-1.7-5.2-0.9-10.1,0.8-15.1c3.2-9.4,7.1-18.6,8.5-28.5c0.2-1.5,0.6-2.9,0.6-4.4c0-4.5,2-7.8,5.5-10.6
	c10.2-8.2,19.1-17.5,24.4-29.8c0.6-1.4,1.4-2.7,1.2-4.3c-0.2-2.2-1-3.8-3.5-2.4c-4.7,2.6-7.3-0.6-9.5-3.6c-1.8-2.5-1.8-5.7,0.6-8.2
	c3.1-3.3,7-4.2,10.9-2.1C258.1,344.4,261.7,347.9,261.1,353.5z"/>
<path :style="{fill:'rgba(28, 113, 218, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M428.1,94.2c5-1.5,10-3.4,15.1-4.5c4-0.9,6.9-2.9,9.6-5.7c10.6-11.1,22.1-21.4,33.3-31.9
	c5.2,5.3,5.4,5.5,0.4,10c-11.3,10.2-22,21.1-32.7,31.9c-3.1,3.2-7.3,2.6-11,3.9c-0.9,0.3-2.1,0-2.9,0.4
	C434.2,101.7,431,98.3,428.1,94.2z M266.2,295.7c0.1,5.3-1.5,9.2-4.7,12.5c-5.1,5.2-10.2,10.5-15.5,15.5c-7,6.7-15.7,7.3-22.9,1
	c-11.6-10.2-22.5-21.3-32.9-32.7c-6.6-7.3-5.8-16.6,1.2-23.8c4.8-4.9,9.6-9.7,14.5-14.5c7.5-7.3,16.9-7.7,24.5-0.5
	c10.5,10,20.6,20.3,30.7,30.7C264.4,287.3,266.7,291.4,266.2,295.7z M184.9,377.3c-4.7,0.4-8.6-1.4-11.7-4.6
	c-10.5-10.4-21-20.8-31.4-31.4c-6.5-6.7-6.4-16.6,0-23.4c5.2-5.4,10.5-10.7,15.9-15.9c6.8-6.5,16.6-6.9,23.4-0.3
	c10.9,10.5,21.6,21.2,32.1,32.1c6.1,6.3,6,16.3,0,22.7c-5.3,5.7-11,11.1-16.5,16.6C193.3,376.2,189.4,377.7,184.9,377.3z M170,429.6
	c-0.9,3.3-3,5.8-6.9,5.4c-3.6-0.5-6-2.8-6-6.7c0-3.3,4.1-6.6,7.2-6.1C167.5,422.6,170.4,426.3,170,429.6z M195,444.9
	c4,0.2,6.5,2.1,6.9,5.9c0.4,3.3-3.2,7.3-6.4,6.9c-3.6-0.4-6.4-2.3-6.4-6.3C189.2,447.6,191.2,445.3,195,444.9z M163.5,454
	c3.8,0.3,6.2,2.2,6.5,6.1c0.3,3.3-3.4,7.1-6.5,6.7c-3.6-0.5-6.3-2.5-6.3-6.4C157.3,456.6,159.6,454.4,163.5,454z M189.1,418.7
	c0.5-3.2,2.4-5.6,6.4-5.6c3.2,0,6.5,3.4,6.4,6.4c-0.2,3.2-3.5,6.5-6.6,6.4C192.2,425.8,189,422.5,189.1,418.7z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M202,271.9c0,2.8,1.4,5,3.4,6.9c10,9.9,20,19.9,29.9,29.9c2.2,2.3,4.7,3.6,7.9,3.4
	c-1.3,1.5-2.6,3-4.1,4.4c-3.7,3.3-6.9,3.4-10.5-0.2c-10.1-9.9-20.1-19.9-30-30C193.9,281.6,194.9,278.1,202,271.9z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M109.1,444.2c3,6.3,9.1,9.5,14.3,13.4c14,10.7,29.1,19,46.6,22.7c22.8,4.8,43-0.6,61.2-14.7
	c17.2-13.3,25.5-31.8,31-52.1c3-10.8,2.9-22,4-33c2.3-23.9,13.7-41.8,34.5-53.8c9-5.2,19.4-7.9,27.6-14.7c7.4-6.1,15.3-11.8,18-21.8
	c1.8-6.6-0.2-12.4-5.8-16c-4.6-2.9-9.5-5.5-14.5-7.8c-10.5-4.8-19.3-11.7-25.7-21.4c2.6-2.8,5.2-5.6,8.2-8.9
	c4.5,11.4,13.7,17,23.7,21.9c5.5,2.7,11.1,5.3,16,9.2c9.9,7.8,13,19.8,7.4,31.2c-6.7,13.7-18.3,22.6-31.4,29.7
	c-8,4.3-16.8,7.1-24.3,12.6c-14.5,10.8-21.6,25.5-22.7,43.1c-1.4,23.3-5.2,45.9-17.6,66.2c-18.8,30.5-46.2,45.5-82,42.8
	c-21.4-1.6-40-11.5-57.2-24c-6.6-4.8-12.8-10-19-15.4c-2.2-2-2.2-2.9,0.2-4.3C104.1,447.5,106.6,445.8,109.1,444.2z M203.9,181
	c-2.9,2.9-5.7,5.9-6.9,10c-3.5,3.3-4.5,7.8-5.9,12.1c-4.2,6.3-6.9,13.5-11.8,19.5c-11,13.6-25.4,20.9-42.4,23.5
	c-12.7,2-25.7,1.6-38.3,4.9c-16.8,4.4-32.6,11.1-44.9,23.4c-13.5,13.4-21.9,29.7-22.7,49.4c-1,25.6,9.7,46.6,24.5,66.2
	c5.4,7.1,10.6,14.4,17.6,20.2c-7.1,11.3-4.6,11.1-13.6,1.2c-13-14.5-24.1-30.1-31.5-48.2c-17.8-43.7-0.6-89.9,41.4-111.3
	c16.4-8.3,33.7-12.9,52.1-13.9c12.1-0.6,24.1-2.1,35-8.3c13.2-7.5,20.9-19.2,26.4-32.7c5.3-13.1,13.3-24.2,24.5-32.7
	c10.3-7.9,21.9-10.7,35.1-9.4c19.4,1.9,34.7,11.4,49.5,22.9c3.6,2.8,3.9,5.1,0.1,7.8c-1.5,1.1-2.7,2.4-4.1,3.6
	c-3.6-5.2-9.3-7.9-13.9-12c-3.4-4.4-8.1-6.7-13.2-8.4c-9.9-3.4-19.9-5.3-30.4-3.5c-8.7,1.5-16,5.2-22,11.7
	C207.3,178.4,206.3,180.5,203.9,181z M77.1,423.1c7.7-11.7,15.3-23.4,22.9-35.1c1.2-1.8,2.1-2.2,3.9-0.8c8.4,6.3,16.4,13,22.4,21.8
	c-5.3,6.2-12.5,10.1-18.7,15.3c-5.6,4.6-11.5,8.8-17.3,13.1c-0.5,0.1-1,0.2-1.4,0.1c-4.2-2.9-7.4-6.9-11-10.4
	C77,426,76,424.7,77.1,423.1z M267.1,225c3.8,3.7,7.6,7.3,11.5,11c1.2,1.2,2,2.3,0.2,3.7c-6.7,5.2-12.1,11.8-18.3,17.6
	c-1,0.9-1.9,1.9-3.4,1.8c-3.7-3.1-7.3-6.2-9.3-10.7c-0.9-2.1-0.8-3.7,0.9-5.4C254.8,237.1,260.9,231,267.1,225z M444.1,41.1
	c-5.1,4.5-10.4,8.9-14,14.9c-0.4,1.6-0.7,3.3-3,3c-5.1,2.6-5.3,8-6.9,12.5c-1.4,3.8-1.3,8.1-4,11.5c-4.8-3.5-4.3-7.7-3.7-13.3
	c1.4-12.5,11.4-18.1,18.2-26.3c5.4-6.5,11.8-12.1,17.7-18.2c5.4-5.5,5.4-5.5,10.6-0.1c-3.9,4.3-7.9,8.5-11.8,12.8
	C446.7,39.6,446.4,41.3,444.1,41.1z M418.1,99.1c-4.4,5.6-10,10.1-14.8,15.3c-1.6,1.8-2.9,1.5-4.5-0.1c-3.5-3.5-7.1-6.8-10.7-10.3
	c4.9-5.1,9.9-10.2,14.8-15.4c1.6-1.7,2.8-1.7,4.5,0C410.9,92.3,414.5,95.7,418.1,99.1z M336.1,156.1c3.2,3.4,6.2,6.9,9.7,10.1
	c2.5,2.3,2.2,3.9-0.1,6c-3.7,3.4-7.2,7-10.6,10.6c-1.7,1.8-2.9,2.2-4.8,0.1c-3.3-3.7-6.8-7.2-10.3-10.9
	C325.1,166.4,330.3,160.9,336.1,156.1z M312.1,180c3.7,3.5,7.3,7.1,11.1,10.6c1.6,1.4,1.6,2.4,0.1,4c-3.9,4-8.4,7.5-11.6,12.2
	c-1.3,1.8-2.5,0.8-3.6-0.3c-3.7-3.8-7.3-7.6-11-11.4C301.7,189.7,306.8,184.7,312.1,180z M358.1,134c3.7,3.5,7.3,7.1,11.1,10.6
	c1.6,1.4,1.6,2.4,0.1,4c-3.9,4-8.4,7.5-11.6,12.2c-1.3,1.8-2.5,0.8-3.6-0.3c-3.7-3.8-7.3-7.6-11-11.4
	C347.7,143.7,352.7,138.7,358.1,134z M381.1,111c3.8,3.7,7.6,7.3,11.4,11c1.2,1.1,2.1,2.4,0.3,3.6c-4.7,3.2-8.2,7.7-12.2,11.6
	c-1.6,1.5-2.6,1.5-4-0.1c-3.5-3.8-7-7.4-10.6-11.1C370.7,120.7,375.7,115.7,381.1,111z M290.1,202.1c3.3,3.5,6.6,7,10,10.4
	c1.7,1.7,2.3,3,0.3,4.9c-3.8,3.5-7.4,7.2-10.9,10.9c-1.9,2.1-3.2,1.4-4.9-0.3c-3.4-3.4-6.9-6.7-10.4-10
	C279,212.3,284.3,207,290.1,202.1z M202,271.9c3.7-3.8,7.3-7.7,11.1-11.4c3.3-3.2,6.9-3.3,10.2-0.1c10.4,10.3,20.8,20.6,31,31
	c3,3.1,2.8,6.7-0.2,9.8c-3.5,3.7-7.3,7.2-11,10.8c-3,1.9-5.5,0.4-7.6-1.5c-10.8-10.4-21.5-21.1-32-31.9
	C201.9,276.8,200.5,274.6,202,271.9z M153,321c3.7-3.8,7.3-7.8,11.1-11.4c3.6-3.4,7.1-3.5,10.6-0.1c10.3,10.1,20.6,20.4,30.7,30.7
	c3.1,3.2,2.9,7-0.2,10.2c-3.6,3.7-7.4,7.2-11,10.8c-3.6,1.9-6.2-0.4-8.4-2.4c-10.2-9.7-20.2-19.5-29.8-29.9
	C154.1,326.8,151.6,324.5,153,321z"/>
<path :style="{fill:'rgba(208, 232, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M153,321c0.8,3.7,3.1,6.6,5.6,9.2c8.8,8.8,17.6,17.6,26.4,26.4c2.5,2.5,5.4,4.4,9.1,4.6
	c-1.1,1.2-2.1,2.5-3.3,3.7c-3.7,3.6-7.7,3.7-11.4,0.1c-9.9-9.8-19.8-19.7-29.6-29.6C145.1,330.4,146,326.9,153,321z"/>
<path :style="{fill:'rgba(255, 197, 4, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'"  d="M211,279.3c0.4-3.9,2.4-6.2,6.3-6.3c4-0.2,6.1,2.3,6.6,6c0.4,3.4-3,6.9-6.5,6.7
	C213.5,285.4,211.5,283,211,279.3z"/>
<path :style="{fill:'rgba(255, 197, 4, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'"  d="M239.3,295.4c-0.6,3.6-2.9,5.7-6.7,5.6c-4-0.1-5.9-2.9-6.1-6.5c-0.2-3.4,3.6-6.7,7-6.2
	C237.3,288.8,239.2,291.3,239.3,295.4z"/>
<path :style="{fill:'rgba(166, 10, 148, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M118.2,343.5c2.2,0.3,3.9,1.3,5.3,2.8c13.9,13.9,27.8,27.8,41.6,41.7c2.3,2.4,4.4,4.9,1.5,8.2
	c-2.8,3.2-5.5,2-8.1-0.6c-10.2-10.3-20.5-20.5-30.7-30.7c-4.1-4.1-8.2-8.3-12.4-12.4c-1.9-1.9-2.2-4.1-1.3-6.4
	C115.1,344.3,116.7,343.7,118.2,343.5z M444.1,41.1c1-1,2-2,3-3c1,0,2-0.1,3,0c4.3,0.2,7.4,2.9,6.8,6.3c-0.6,3.3-2.6,5.8-6.4,5.8
	c-4.3,0-6.4-2.2-6.4-6.5C444.1,42.8,444.1,41.9,444.1,41.1z M427.1,59.1c1-1,2-2,3-3c1.2,0,2.3,0,3.5,0c3.9,0.2,6.5,2.3,6.3,6.1
	c-0.2,3.6-2.6,6-6.5,6s-6-2.2-6.2-6.1C427.1,61,427.1,60,427.1,59.1z M464.9,65.2c-3.5-0.4-5.8-2.2-5.8-6.2c0.1-3.7,2.2-5.7,5.9-5.9
	c3.9-0.2,7.4,2.7,6.9,6.1C471.4,62.8,469.2,65.1,464.9,65.2z M448.1,71c4.1,0.3,6.6,2.2,6.9,6.1c0.2,3.3-3.3,6.3-7,6.1
	c-3.7-0.2-5.8-2.3-5.8-6C442.1,73.1,444.5,71.2,448.1,71z M168.5,334.3c-4-0.3-6-2.7-6.2-6.4c-0.2-3.5,3.3-6.7,6.8-6.3
	c3.8,0.4,6.1,2.9,5.9,6.7C174.9,332.1,172.3,334.1,168.5,334.3z M177.9,342.7c0.3-3.2,2.5-5.3,6.3-5.6c3.6-0.2,6.5,3,6.3,6.7
	c-0.3,4-2.8,5.9-6.5,6.1C180.6,350.1,177.8,346.9,177.9,342.7z"/>
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
                                    <button :style="{background:'rgba('+getterGuitarBg1+')'}" @click="ShowElement(getterGuitarBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGuitarBg2+')'}" @click="ShowElement1(getterGuitarBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGuitarBg3+')'}" @click="ShowElement2(getterGuitarBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGuitarBg4+')'}" @click="ShowElement3(getterGuitarBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGuitarBg5+')'}" @click="ShowElement4(getterGuitarBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Guitar= [
                {top:472 ,left:44},
                {top:464 ,left:57},
                {top:18 ,left:151},
                {top:294 ,left:104},
                {top:310 ,left:36},
                {top:21 ,left:79},
                {top:466 ,left:93},
                {top:512 ,left:41},
                {top:418 ,left:125},
                {top:294 ,left:52},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Guitar[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Guitar[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Guitar'){
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
                getterGuitarBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Guitar') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGuitarBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Guitar') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGuitarBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Guitar') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGuitarBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGuitarBg5: {
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
                            name:'Guitar',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            // background3:  background3Clone,
                            // background4:  background4Clone,
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