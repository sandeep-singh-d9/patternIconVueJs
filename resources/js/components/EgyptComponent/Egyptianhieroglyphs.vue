<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(1);">
                  <path style="fill:#C66401;transform:scale(0.2)" :class="ValueId+'_color8'" d="M74.3,284c-0.5,0.6-1.2,0.3-1.8,0.3c-21.4,0-42.8,0-64.2,0c-1.9,0-2.6-0.4-2.4-2.4
	c0.3-3.7-0.2-7.4,0.2-11.1c0.8-0.7,1.9-0.6,2.8-0.6c17.3,0,34.7-0.1,52,0.1c2.3,0,4.6-0.2,6.9,0c0.2,0,0.5,0.1,0.7,0.3
	c0.5,0.3,0.5,0.8,0.4,1.3c-0.3,3,0.1,6,0,9c-0.1,2.3,0.1,2.4,2.4,2.6C72.4,283.5,73.6,282.7,74.3,284z M74.3,284c-1.5,0-3,0-4.5-0.1
	c-0.8,0-1.4-0.1-1.4-1.1c0-3.7,0-7.5,0.1-11.2c0-0.3,0.2-0.5,0.3-0.8c0.8-0.8,1.8-0.7,2.8-0.7c18,0,35.9,0,53.9,0
	c1.8,0,3.6-0.1,5.4,0.6c0,4.1,0,8.1,0.1,12.2c0,1.3-0.8,1.2-1.7,1.2c-5.3,0-10.5,0-15.8,0c-12.4,0-24.7,0-37.1,0
	C75.7,284.3,74.9,284.5,74.3,284z"/>
<path style="fill:#DC8702;transform:scale(0.2)" :class="ValueId+'_color7'" d="M130.8,270.9c-1.5,0.3-3,0-4.5,0c-19.2,0-38.3,0-57.5,0c-0.2,0-0.3,0-0.5-0.1
	c-0.2-0.3-0.5-0.6-0.5-0.9c-0.3-3.8-0.3-7.5,0-11.3c0-0.4,0.2-0.7,0.5-0.9c0.8-0.7,1.8-0.6,2.8-0.6c8.2,0,16.4,0,24.6,0
	c1.1,0,2.1,0.1,3,0.7c10.1,0,20.1,0,30.2,0c1.5,0,2,0.6,2,2C130.9,263.4,130.9,267.2,130.8,270.9z"/>
<path style="fill:#FDA103;transform:scale(0.2)" :class="ValueId+'_color5'" d="M68.4,257.8c0,4.3,0,8.7,0,13c-20.4,0-40.8,0-61.2,0c-0.3,0-0.7-0.1-1-0.1c-0.4-3.9,0-7.9-0.2-11.8
	c0-1.3,0.9-1.2,1.7-1.2c10.1,0,20.3,0,30.4,0c2.2-1.2,4.7-0.6,7-0.6c7,0.1,14-0.1,20.9-0.1c0.8,0,1.5-0.2,2.2,0.4
	C68.3,257.6,68.3,257.7,68.4,257.8z"/>
<path style="fill:#FDA002;transform:scale(0.2)" :class="ValueId+'_color1'" d="M7.2,66.2c0-1.6,0-3.2,0.8-4.6c1.7-2.5,3.9-4.5,6-6.6c1.7-1.7,3.7-1.8,5.7-0.5
	c0.9,0.6,1.9,0.9,2.8,1.5c0.5,0.4,0.7,0.9,0.5,1.5c-0.8,2-1.1,4.3-2.6,6c-0.5,0.3-1,0.5-1.5,0.6c-3.9,0.3-6.9,1.8-8.1,5.8
	c-1.1,3.9,1.3,7.9,5.3,8.8c0.9,0.2,1.9,0.1,2.3,1.1c0.5,4.1,0.3,8.3,0,12.4c-1.9,3.3-3.5,3.6-6.2,1c-6.8-6.5-5.5-3.7-5.6-12.9
	C6.7,75.5,6.6,70.8,7.2,66.2z"/>
<path style="fill:#F2CD7D;transform:scale(0.2)" d="M125.4,49.8c-0.6-1.1-1.9-1.9-1.7-3.4C124.5,47.4,125.7,48.2,125.4,49.8z"/>
<path style="fill:#FDA002;transform:scale(0.2)" :class="ValueId+'_color1'" d="M125.4,49.8c-0.3-1.3-1.4-2.1-1.7-3.4c-3.9-7.7-9.1-14.1-15.8-19.6c-9.8-8.1-21-12.5-33.6-13.8
	c-8.8-0.9-17.2,0.3-25.6,2.9c-5.8,1.8-11,4.6-16,8c-6.1,4.1-11.1,9.3-15.3,15.3c-3.3,4.8-6.1,9.9-7.7,15.6l0,0
	c-1.2,2.1-1.3,4.5-1.7,6.7c1.9-1.4,3.5-3.2,5.1-5c2.2-2.7,4.2-3.1,7.1-1.3c0.7,0.5,1.5,0.8,2.3,0.8c0.7,0.4,1.1-0.1,1.5-0.6
	c0.3-0.7,0.8-1.3,0.7-2.1c0.1,0,0.1-0.1,0.2-0.1c0.8-0.8,1.5-1.7,2.1-2.6c1.5-2.4,3.3-4.6,5.2-6.6c4-4.3,8.8-7.6,14-10.4
	s10.9-3.9,16.6-4.7c3.9-0.5,7.9-0.5,11.8,0c11.9,1.4,22.1,6.4,30.3,15.2c8.5,9.2,13.2,20,13.2,32.6c0,31.2,0.1,62.4,0,93.7
	c0,5.3,0.5,10.7-0.3,16c-2.4,16.7-11.3,28.9-26,37c-8,4.4-16.8,5.8-25.9,5.5c-8.3-0.3-15.8-2.8-23-6.8c-2.1-1.2-3.8-2.9-6-3.8
	c-0.2,0-0.3,0-0.4,0c0.2-0.4,1.3-1.1-0.3-0.8c-0.5,0.1-0.8-0.4-1.2-0.8c-1.3-1.2-2.9-2.1-3.2-4.3c-0.3-1.6-2.3-2-3.7-2.8
	c0.1-0.3,0.1-0.6,0-0.9c-0.3-0.7-0.7-1.4-1.1-2c-5.7-9-8.1-18.8-8-29.5c0.1-26.1,0.1-52.2,0-78.2c0-1.3,0.3-2.7-0.6-3.8
	c0.1-0.1,0.3-0.3,0.3-0.4c0.2-0.8,0.2-1.6-0.2-2.3c-0.1-0.1-0.2-0.1-0.3-0.2c-2.4,2.7-2.9,2.7-5.5,0.2c-1-0.9-2-1.8-3-2.7
	c-1.7-1.3-2.7-3-2.6-5.5c0.2-6,0.1-12.1,0.1-18.1c-0.7,1.8-0.7,3.7-0.8,5.6c-0.1,5.8,0,11.5,0,17.3c0,32.7,0,65.4,0.1,98.1
	c0,1.5-0.1,3.1,0.7,4.5l0,0c0.1,2.7,1,5.2,1.6,7.7c1.5,7,4.8,13.2,8.7,19.2c1,1.4,1.9,2.8,3,4.1c2.2,2.4,4.2,5.1,7,7l0,0
	c1,1.2,2.3,2.1,3.5,3.1c5.4,3.9,11.2,7,17.6,9.2c0.8,1,1.3,0.1,1.9-0.3c2.6-1.9,5.3-3.6,8.5-4.3s6.3-2,9.6-1.3
	c0.7,0.1,1.4,0.2,2.1,0.2c4,0,7.8,0.8,11.4,2.8c2.9,1.6,5.9,3.6,9.5,1.7c6.1-1.9,11.2-5.4,16.1-9.2c6.7-5.3,11.9-11.9,15.8-19.4
	c4.1-7.9,6.7-16.2,6.8-25c0.2-36.5,0-73.1,0.2-109.6C130.5,67.7,129.2,58.5,125.4,49.8z"/>
<path style="fill:#FDA002;transform:scale(0.2)" :class="ValueId+'_color1'" d="M18.2,79.3c0.5-0.6,0.6-1.3,0.6-2c-0.1-3.1,0.6-6.1,1-9.2c0.1-1.1,0.6-2.2,0.4-3.3
	c-0.1-0.5,0.1-1.7-1.1-1.1c-5.4-0.6-9.1,4.1-9,7.8C10,75.4,12.5,79.5,18.2,79.3L18.2,79.3z"/>
<path style="fill:#F9C400;transform:scale(0.2)" :class="ValueId+'_color2'" d="M98.8,257.8c-10.1,0-20.3,0-30.4,0l0,0c-0.5-0.8-0.7-1.7-0.7-2.6c0-5.8,0-11.6,0-17.4
	c0-0.8,0-1.7,0.7-2.3c4.2-0.2,8.5-0.2,12.2,2c1.8,1.1,4,1.2,5.6,2.9c0.6,0.6,2,1,3.2,0.3c0.7-0.5,1.5,0,2.2-0.1
	c-0.7,1-2.1,0.6-3.1,1.6C93.3,246.4,96.9,251.6,98.8,257.8z M68.4,235.4c0,7.5,0,14.9,0,22.4c-6,0-12,0-18,0c-4.1,0-8.2,0-12.3,0
	c2-5.8,5-11,9.8-15c0.3-0.3,0.5-0.7,0.7-1c0.3,0,0.6,0.2,0.9-0.1c2.9-2.7,6.4-4.4,10.2-5.3c2-0.5,4.1-0.9,6.1-1.2
	C66.7,235,67.6,234.7,68.4,235.4z M118.6,172c0.1-15.1,0-30.2,0-45.3c0-16.4,0-32.8,0-49.2c0-2.1-0.1-4.2-0.3-6.3
	c-1.3-10.8-5.9-19.9-13.3-27.7c-7.1-7.6-15.9-12.3-26.1-14.4c-6-1.2-12.1-1.1-18.2-0.5c-0.9,0.1-1.4,0.6-1.9,1.1
	c-1.3-1.5-2.8-0.2-3.9,0.1c-8.4,2.3-15.7,6.5-22,12.6c-3.3,3.2-5.7,7.1-8.5,10.7l0,0c-0.3,0.7-0.5,1.5-0.8,2.2l0,0l0,0
	c-0.3,0.5-0.7,0.8-1.3,0.8c0.2,0.4,0.3,0.8,0.1,1.4c-0.8,1.9-1.5,3.8-2.3,5.8c-0.5,0-1-0.1-1.2,0.4c1.2,0.2,0.7,1,0.6,1.8
	c-0.8,4.6-1.7,9.1-1.4,13.8c0,0,0,0.1-0.1,0.1c0,4.3,0,8.7-0.1,13H18c0,0.9,0.1,1.7,0.1,2.6l0,0l0,0c0,0.1-0.1,0.3-0.1,0.4
	c0,1.3,0.1,2.5,0.1,3.8c0,27.4,0,54.8,0,82.1c0,3.1,0.6,6.1,1.2,9.1c1.3,7.1,4.6,13.3,8.5,19.3c-0.1,0.4,0.2,0.7,0.5,0.8
	c1.9,0.6,3,1.8,3.4,3.8c0.1,0.7,0.7,1.1,1.3,1.6c1.1,1,2.3,1.8,3.4,2.6c4.2,2.9,8.4,5.7,13.3,7.6c12.5,4.8,25,4.8,37.4,0.2
	c10.2-3.8,18.2-10.6,24-19.9c3.9-6.1,6.3-12.8,7.2-20C118.9,181.6,118.5,176.8,118.6,172z"/>
<path style="fill:#531B05;transform:scale(0.2)" :class="ValueId+'_color4'" d="M58.1,210.2c-0.7-1.2-1.3-2.5-2.1-3.6c-1-1.2-0.4-1.8,0.6-2.4c1.9-1.2,3.8-2.5,5.8-3.7
	c-1.8-2.1-1.7-2.1-3.8-0.2c-1.1,1-1.8,2.5-3.3,3.2c-1.5,1.6-3.1,3.2-4.6,4.8c-0.5,0.6-0.8,1.3-0.9,2.1c-0.3,0.9-1.1,0.6-1.8,0.6
	c-3.4,0-6.8,0.1-10.2,0c-1.1-0.2-0.8-0.9-0.4-1.5c0.6-0.9,1.4-1.4,2.4-1.8c2.1,0,4.2-0.1,6.3,0c1,0,1.5-0.3,1.8-1.3
	c2.2-6.6,4.4-13.3,6.6-19.9c0.4-1.2,1.2-2.4,1.2-3.7c-0.9-0.3-1.2,0.6-1.6,1c-2.3,2.4-4.9,4.5-7.3,6.8c-0.5,0.5-1.1,1.4-2,0.6
	c-1.5-1.3-0.7-2.3,0.4-3.3c8.4-8,16.7-16,25.1-24c1.2-1.1,1.4-1.8,0.4-3.2c-1.9-2.7-3-5.8-2.8-9.3c0.5-6.7,8.4-10.9,14.1-7.1
	c3.5,2.3,4.2,5.8,3.6,9.7c-0.3,2.1-0.7,4.4-2.2,6.1c-1.4,1.7-0.3,3.1,0.8,3.5c4,1.6,5.5,4.6,6.3,8.7c1.4,7.7,3.5,15.3,5.3,22.9
	c0.2,1,0.9,2.4-0.8,2.7c-1.8,0.3-1.6-1.3-1.8-2.2c-1.7-6.4-3.2-12.9-4.8-19.3c-0.2-0.7-0.4-1.3-0.9-2c-0.8,3.3-1.2,6.8-2.6,9.9
	c-2.4,5.3,0,9.6,2.3,13.9c0.6,1.2,0.5,2-0.2,3c-1.3,2.1-2.5,4.2-3.9,6.7c1.4,0,2.5,0,3.5,0c4.4,0,8.9,0,13.3,0
	c2.1,0,2.5,0.6,1.9,2.5c-0.5,1-1.4,0.9-2.2,0.9c-13.1,0-26.3,0-39.4,0C59.4,211,58.5,211.2,58.1,210.2z"/>
<path style="fill:#541B05;transform:scale(0.2)" :class="ValueId+'_color4'" d="M83.2,110.7c-2.6-4-5.5-7.7-8.5-11.6c-1.6,2.1-2.5,4.5-3.7,6.7c-1.2,2.1-2.2,4.4-3.3,6.5
	c-0.7,1.4-0.3,1.6,1.1,1.6c4.1-0.1,8.3,0,12.4,0c3.5,0,2.8-0.1,2.9,2.9c-0.6,0.5-1.3,0.4-2,0.4c-13,0-26.1,0-39.1,0
	c-0.7,0-1.4,0.1-2-0.4c-0.3-3-0.3-3,2.7-3c2.7,0,5.5-0.2,8.2,0.1c1.9,0.2,2.9-0.7,3.6-2.1c2.3-4.7,4.6-9.4,7-14.1
	c0.6-1.1,0.4-1.9-0.2-2.8c-4.4-6-8.8-12-13.2-18c-0.7-0.9-0.9-1.8-0.9-2.9c0-4.6-0.1-9.3,0.1-13.9c0.1-2-0.5-3.7-1.6-5.3
	c-2.1-3.2-4.1-6.5-6.4-10.1c2.2,0,4.1,0,6,0c4.8,0,9.6,0,14.3,0c2.6,0,2.7,0.2,2.7,2.8c0,3.9,0,7.9,0,11.8c0,1.3,0.4,2.3,1.2,3.3
	c7,9,13.9,18,20.8,26.9c4.9,6.4,9.8,12.8,14.7,19.2c0.5,0.7,0.9,1.4,0.9,2.3c-0.5,1-1.3,1.3-2.4,1.3c-4.2,0-8.4,0-12.6,0
	C84.7,112.2,83.7,112,83.2,110.7z"/>
<path style="fill:#551A03;transform:scale(0.2)" :class="ValueId+'_color4'" d="M37.1,129.1c-1.5-4.3,0.5-7.2,5.1-7.2c7.4-0.1,14.9-0.1,22.3-0.1c9.9,0,19.9,0,29.8,0
	c0.1,0,0.3,0,0.4,0c4.5,0.1,6.4,2.5,5.3,6.8c-0.4,1.9-1.9,2.5-3.5,2.9c-0.9,0.2-1.8,0.3-2.7,0.3c-16.8,0-33.7,0-50.5,0
	c-1.4,0-2.8-0.1-4.1-0.7C38.3,130.8,37.3,130.3,37.1,129.1z"/>
<path style="fill:#E19B0B;transform:scale(0.2)" :class="ValueId+'_color8'" d="M37.1,129.1c1.1,1.5,2.6,2.1,4.4,2.1c11.1,0.1,22.1,0.1,33.2,0c6.5,0,13.1,0,19.6,0.1
	c2.4,0.1,4.5-0.4,5.8-2.6c0.4,1.3-0.4,1.9-1.3,2.5c-1.4,0.9-2.9,1.3-4.6,1.3c-5.8,0.1-11.6,0.2-17.4,0.1
	c-11.1-0.2-22.2,0.1-33.3-0.1c-2.2,0-4.4-0.3-6-2C37.1,130.1,36.4,129.7,37.1,129.1z"/>
<path style="fill:#F5A42D;transform:scale(0.2)" :class="ValueId+'_color6'" d="M58.1,210.2c0.5,0.5,1.2,0.3,1.8,0.3c13.2,0,26.4,0,39.5,0c0.8,0,1.6,0.1,2.2-0.4
	c0.7,0.8-0.1,1-0.5,1.1c-0.6,0.2-1.2,0.2-1.9,0.2c-13,0-26.1,0-39.1,0C59.5,211.3,57.9,212.1,58.1,210.2z"/>
<path style="fill:#EB9E28;transform:scale(0.2)" d="M40.9,116.9c14.4,0,28.7,0,43.1,0c-0.1,1-0.9,0.9-1.6,0.9c-13.4,0-26.9,0-40.3,0
	C41.7,117.7,40.6,118.3,40.9,116.9z"/>
<path style="fill:#5A1F09;transform:scale(0.2)" :class="ValueId+'_color4'" d="M81.3,136.1c-0.6,0.7-0.4,2.2-2,2.2c-1.4,0-2.2-0.8-2.4-2.1c-0.2-1.7,1.1-2,2.4-2.1
	C80.6,134,81.1,134.9,81.3,136.1z"/>
<path style="fill:#541B06;transform:scale(0.2)" :class="ValueId+'_color4'" d="M68.3,134.1c1.4,0,2.2,0.7,2.2,2s-0.6,2.1-2,2.2c-1.4,0-2.2-0.8-2.3-2.2
	C66.3,134.8,67.1,134.1,68.3,134.1z"/>
<path style="fill:#EEA326;transform:scale(0.2)" d="M83.2,110.7c0.7,0.8,1.6,1,2.6,1c4.2,0,8.4,0,12.6,0c1,0,1.8-0.2,2.5-0.8c-0.1,1.4-1,1.7-2.2,1.7
	c-4.4,0-8.7,0-13.1,0C84.4,112.6,83.2,112.4,83.2,110.7z"/>
<path style="fill:#571904;transform:scale(0.2)" :class="ValueId+'_color4'" d="M57.8,134.1c1.4,0,2.2,0.7,2.2,2s-0.7,2.1-2,2.2c-1.4,0-2.2-0.8-2.2-2.2
	C55.7,134.8,56.5,134.1,57.8,134.1z"/>
<path style="fill:#DE9530;transform:scale(0.2)" d="M44.8,191c2.2-0.3,3.1-2.2,4.6-3.4c2.2-2,4.3-4.1,6.5-6.2c0.4,0.6,0,0.9-0.2,1.2
	c-2.9,2.7-5.8,5.4-8.6,8.1c-0.4,0.4-0.8,0.9-1.3,1.1C45.3,192,44.3,192.3,44.8,191z"/>
<path style="fill:#E29738;transform:scale(0.2)" d="M55.3,203.4c1.7-1.8,3.4-3.6,5.2-5.6c0.9,0.7,1.6,1.5,1.9,2.6c-1.1,0.2-1.1-1.9-2-1.3
	c-1.1,0.6-1.9,1.8-2.8,2.8C56.9,202.6,56.6,203.7,55.3,203.4z"/>
<path style="fill:#E49C27;transform:scale(0.2)" d="M81.7,193.2c-1.3-0.6-2.2,0.3-3.1,0.9c-5.7,3.7-11.3,7.4-17,11.1c-0.7,0.5-1.4,1-2,1.5
	c-1-0.8,0-1.1,0.4-1.3c6.7-4.4,13.3-8.7,20-13.1C81.1,191.6,81.4,192.3,81.7,193.2z"/>
<path style="fill:#E69E34;transform:scale(0.2)" d="M71.3,190.7c-0.9,0.8-1.4-0.1-1.9-0.5c-3.6-2.2-7-4.8-10.7-6.7c0.5-1.3,1.1-0.3,1.5,0
	C63.9,185.9,67.6,188.4,71.3,190.7z"/>
<path style="fill:#E9A03E;transform:scale(0.2)" d="M82,148.1c-0.1,0-0.3,0-0.4,0c-3-2.6-6-2.4-8.9,0.2c-0.1,0.1-0.3-0.1-0.5-0.2
	C75.1,144.6,79.2,144.6,82,148.1z"/>
<path style="fill:#E39A3D;transform:scale(0.2)" d="M85.7,168.4c-2.2-1.6-4.4-3.1-6.7-4.7c-0.4-0.3-0.6-0.5-0.1-0.9c2,1.4,4,2.8,6,4.3
	C85.4,167.5,86.1,167.6,85.7,168.4z"/>
<path style="fill:#DC9D17;transform:scale(0.2)" d="M92.1,102.9c-1.2-0.4-1.3-0.3-2.6-2.4c-0.8-1.3-1.8-1.8-3.3-1.7c-2.6,0.2-5.2-0.4-7.7,0.4
	c-0.4-0.2-0.8-0.4-0.8-0.9c0.1-0.4,0.5-0.4,0.9-0.4c2.9,0,5.8,0,8.8,0c0.9,0,1.3,0.6,1.8,1.2C90.1,100.4,91.1,101.7,92.1,102.9z"/>
<path style="fill:#DF9D0E;transform:scale(0.2)" d="M60.3,48.1c-4.8,0-9.6,0.1-14.4,0.1c-0.3-0.3-0.5-0.9,0.1-0.9c4.6-0.1,9.2,0,13.8,0
	C60.3,47.3,60.3,47.7,60.3,48.1z"/>
<path style="fill:#EBA23F;transform:scale(0.2)" d="M70.9,75.5c-1.4,0.1-1.6-1.2-2.3-1.9c-0.5-0.4-0.7-1.1-1.4-1c-2.8,0.1-5.7-0.3-8.5,0.3
	c-0.6-0.5-0.5-0.9,0.2-0.9c2.9,0,5.9,0,8.8,0c0.9,0,1.3,1,1.8,1.6C70,74.3,70.5,74.9,70.9,75.5z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M84.6,167.3c-1.9-1.5-4.1-2.5-5.6-4.4c-0.2-0.8,0.2-1.4,0.6-1.9c0.5-0.6,0.5-1,0-1.6
	c-1.2-1.4-1.6-3.2-2.2-5c-0.5-1.7-5.2-2.9-6.6-1.7c-0.5,0.5-0.4,1-0.2,1.6c0.6,1.5,1.4,2.9,1.9,4.4c0.6,1.6,3,2.5,2.5,4
	s-2.4,2.5-3.6,3.7c-0.6,0.6-1.2,1-1.1,2.1c0.4,5.8,0.7,11.7,1,17.6c0.1,1.4,3.5,4.3,4.9,4.2c2.9-0.3,4.7-1.9,5.3-4.8
	c0.1-0.4,0.3-0.8,0.4-1.2c1.3-5.2,2.5-10.5,3.8-15.7C85.5,167.9,85,167.6,84.6,167.3z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M81.7,193.2c-1.1-1.1-2-0.2-2.8,0.3c-5.7,3.7-11.4,7.4-17.1,11.1c-0.8,0.6-2,0.8-2.2,2.1
	c0.4,1.1,1.3,0.8,2.1,0.9c4.3,0,8.6,0,12.9,0c5.5,0,5.2-0.2,8.2-4.9c2-3.2,1.2-5.7-0.5-8.4C82.1,194,81.9,193.6,81.7,193.2z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M59.1,179.4c3,1.9,5.9,3.9,9.3,6c-0.2-5.3-0.5-10-0.7-14.8c-0.2,0-0.4-0.1-0.6-0.1
	c-2.6,2.5-5.3,5-7.9,7.6C58.8,178.5,58.3,178.9,59.1,179.4z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M63.1,193.6c2.7-0.7,5.4-1.3,8.1-2c0.5-0.1,0.7-0.4,0.2-0.8c-2.4-0.8-4.4-2.6-6.6-3.8
	c-2-1.2-3.6-3-6.1-3.3c-1.6,2.7-2.3,5.3,0.5,7.7c0.3,0.3,0.6,0.6,0.8,1C60.6,193.7,61.7,193.9,63.1,193.6z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M72.8,149.7c1,0.1,2,0.1,2.9,0c2.3-0.3,3.4,0.9,4,3c0.4,1.5,0.7,3.1,1.9,4.6c1.3-3.2,2.4-6.1,0.3-9.2
	c-2.2-2-4.6-3.1-7.6-1.5c-0.8,0.4-1.4,1.1-2.2,1.5c-0.4,0.4-0.9,0.8-0.7,1.4C71.7,150,72.4,149.7,72.8,149.7z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M55.8,191.9c-1.2-0.1-0.3,1.5-0.8,2.2c-0.3,0.5-0.4,1-0.5,1.6c-0.4,2-1.5,3.7-1.8,6.1
	c2-1.7,3.5-3.4,4.9-5.2c0.4-0.5,1.5-0.9,0.6-1.8C57.5,193.8,57.1,192,55.8,191.9z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M63.6,196.8c0.4,0.6,0.7,2.2,2,1.4c2-1.2,4-2.5,5.9-3.7c-0.1-0.1-0.1-0.2-0.2-0.3
	c-2.3,0.6-4.5,1.2-6.8,1.9C64.2,196.2,63.1,196.1,63.6,196.8z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M51.1,59.8c-0.2,4.3,0,8.6-0.1,12.9c0,1.4,0.3,2.6,1.2,3.7c3.8,5.1,7.5,10.3,11.3,15.5
	c2.4,3.4,3.3,3.8,7.8,2.8c-0.2-0.3-0.4-0.6-0.5-0.9c-5.3-7.1-10.6-14.1-15.9-21.2c-0.5-0.7-1.6-1.4-1.1-2.6s1.7-0.8,2.6-0.8
	c3.1,0,6.1,0,9.7,0c-1.2-1.6-2-2.7-3-3.8C61.3,63.2,60,61,60.3,58c0.3-3.3,0-6.6,0-9.9c-0.3-0.3-0.7-0.4-1.2-0.4c-4,0-7.9,0-11.9,0
	c-0.5,0-1,0-1.3,0.5c0.9,1.5,1.8,3,2.8,4.5C50.3,54.8,51.3,57,51.1,59.8z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M63.9,72.3c-0.6,0.1-1.3,0-1.9,0c-1.1,0.1-2.4-0.4-3.4,0.6c2,2.8,4,5.5,6.1,8.3
	c3.1,4.2,6.3,8.4,9.5,12.6c0.4,0.5,0.8,1.1,1.6,1.1c3.2,0,6.4,0,10.1,0c-5.2-6.7-10.2-13.1-15.1-19.4c-0.3-0.2-0.7-0.3-0.8-0.6
	C68.8,72.3,66.4,72.1,63.9,72.3z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M80.3,98.3c-0.7,0-1.6-0.2-1.8,0.8c1.9,3.4,4.3,6.3,6.7,9.2c0.2,0.3,0.5,0.4,0.9,0.4
	c3.4,0,6.8,0,10.5,0c-1.7-2.2-3.2-4-4.6-5.9c-1.3-0.6-2-1.8-2.6-2.9c-0.7-1.3-1.7-1.8-3.1-1.7C84.3,98.3,82.3,98.2,80.3,98.3z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M68.5,97.8c-2.2-0.1-3.4,0.6-4.3,2.7c-1.6,3.7-3.5,7.2-5.4,10.7c-0.5,0.9-1.4,1.7-1.1,2.7
	c0.1,0.3,1.6,0,2.9,0c2.1,0.6,3.3-0.6,4.3-2.9c1.5-3.5,3.4-6.9,5.2-10.3C71.8,97.8,71.9,98,68.5,97.8z"/>
<path style="fill:#BF5C03;transform:scale(0.2)" :class="ValueId+'_color3'" d="M97.5,125.8c-1.7-0.6-3.5-0.7-5.4-0.7c-6.9,0-13.8,0-20.6,0c-9.5,0-19,0-28.5,0
	c-1.4,0-2.8,0.1-3.8,1.5c0.4,2.1,2.2,2,3.6,2c10,0.2,20.1,0,30.1,0.2c6.9,0.1,13.8,0,20.6-0.1c0.9,0,1.8,0,2.7-0.4
	C97.4,127.8,98.3,127.2,97.5,125.8z"/>
<path style="fill:#E19711;transform:scale(0.2)" :class="ValueId+'_color7'" d="M97.5,125.8c-0.9,1-1.8-0.2-2.7-0.1c-8.2,0.2-16.4,0.2-24.6,0.1c-9.1,0-18.2,0.1-27.3-0.1
	c-1.3,0-2.5,0.2-3.6,0.9c0.6-2.3,2.5-2,4.1-2c4.3-0.1,8.7,0,13,0c12.3,0,24.6,0,36.8,0C94.8,124.5,96.3,124.5,97.5,125.8z"/>
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
                                    <button :style="{background:'rgba('+getterEgyptianhieroglyphsBg1+')'}" @click="ShowElement(getterEgyptianhieroglyphsBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterEgyptianhieroglyphsBg2+')'}" @click="ShowElement1(getterEgyptianhieroglyphsBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterEgyptianhieroglyphsBg3+')'}" @click="ShowElement2(getterEgyptianhieroglyphsBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterEgyptianhieroglyphsBg4+')'}" @click="ShowElement3(getterEgyptianhieroglyphsBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterEgyptianhieroglyphsBg5 +')'}" @click="ShowElement4(getterEgyptianhieroglyphsBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterEgyptianhieroglyphsBg6+')'}" @click="ShowElement5(getterEgyptianhieroglyphsBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterEgyptianhieroglyphsBg7+')'}" @click="ShowElement6(getterEgyptianhieroglyphsBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterEgyptianhieroglyphsBg8+')'}" @click="ShowElement7(getterEgyptianhieroglyphsBg8)" :class="this.ValueId+'_color8btn'"></button>
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
        var Egyptianhieroglyphs= [
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
            var randomNumber = Egyptianhieroglyphs[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Egyptianhieroglyphs[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Egyptianhieroglyphs'){
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
                getterEgyptianhieroglyphsBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Egyptianhieroglyphs') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianhieroglyphsBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Egyptianhieroglyphs') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianhieroglyphsBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Egyptianhieroglyphs') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianhieroglyphsBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterEgyptianhieroglyphsBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianhieroglyphsBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianhieroglyphsBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterEgyptianhieroglyphsBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Egyptianhieroglyphs',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
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