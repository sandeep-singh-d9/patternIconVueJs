<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(44, 66, 107, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M485.8,378.7c-0.1,4.2-1.8,8.6-5.4,12.2c-15,15-29.8,30-44.9,44.8c-8.5,8.3-20.9,7.1-28-2.3
	C371.3,385.2,335,337,298.9,288.8c-2.4-3.3-4.1-4.9-7-0.7c-2.7,3.7-5.3,2.7-8.2-0.2c-9-8.9-13.4-8.8-22.5,0.3
	c-10.3,10.2-20.5,20.5-30.8,30.7c-6.8,6.7-14.6,7.9-23.3,3.8c-37.5-18-72.7-39.8-104.2-67.1c-42.5-36.7-74.8-80.9-98.1-132
	C-2.8,107-1.8,102,11.3,89.1C38.7,62.3,65.6,35,92.7,7.9c10.5-10.5,20.2-10.5,30.7,0C241.6,126,359.7,244.2,478,362.3
	C482.4,366.7,485.8,371.3,485.8,378.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M84.5,228.8c-0.6-0.6-1.2-1.3-1.9-1.9c-0.7-2.7,1.5-3.8,2.9-5.3c6.2-6.4,12.6-12.6,18.9-18.9
	c4.9-4.9,5.5-9.9,2-16c0-1.7,1.3-2.2,2.5-2.7c8.4-3.1,13.2-9.8,18-17c5.9-8.9,11.9-18.1,22.9-21.9c3.2-1.1,5.1-3.7,6.4-6.7
	c2.9-6.7,7.9-11.8,13.3-16.6c2.3-2.1,5.1-3.3,8.2-1.2c16.7,16.5,33.4,33,50,49.6c27.6,27.5,55.1,55.2,82.8,82.6
	c2.7,2.7,3,4.1,0.1,6.9c-6.9,6.5-13.5,13.3-20.2,20.1c-1.7,1.8-2.8,2-4.9,0.2c-9.5-8-18.4-7.5-27.3,1.4
	c-10.6,10.6-21.2,21.2-31.8,31.8c-6,6-9.7,6.5-17.4,2.8c-36-17.3-69.7-38.2-100.2-64.1c-2.4-2-4.6-4.3-6.9-6.4
	c0.6-1.4,1.8-2.4,2.9-3.3c3.6-2.8,4-6.6,3.6-10.7c-0.1-0.8,0-1.8-0.8-2.2c-1.1-0.6-1.8,0.4-2.5,1c-3.3,3-6.1,6.4-9.5,9.3
	c-1-1-2-2-3-2.9c-0.7-2.2,1.1-3.3,2.3-4.6c3.3-3.5,6.8-6.8,10.1-10.2c1.2-1.2,2.6-2.3,2.9-3.9c0.7-2.9,1.8-6.8-0.4-8.4
	c-2-1.5-3.8,2.3-5.5,3.8c-4.3,4.1-8.4,8.4-12.7,12.6C88.1,227.5,87,229.5,84.5,228.8z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M177.8,120.7c-3.8-0.4-6.7,1-9.3,3.7c-4.5,4.8-9.1,9.5-11.7,15.8c-1.4,3.4-4.2,5.6-8.5,6.7
	c-6.5,1.7-9.7,8.2-14.5,12.4c-4.9,4.4-6,11.3-11,15.7c-5,4.5-9,10.1-16.1,11.5c-3.1,5.4-7.9,9.2-11.7,13.9c-2.1,2.5-4.5,4.8-7,7
	c-3.8,3.4-6.9,7-6.2,12.7c0.2,1.3,0.4,3.6-2.3,3.4c-16.3-16.5-30.1-35-42.6-54.4c-11-17.1-20.4-35.4-28.5-54.3
	c-2.8-6.6-2.3-10.7,2.8-15.8C34.5,75.5,58,52.2,81.3,28.7c1.5-1.6,2.9-3.1,4.5-0.1c-3.5,4.5-4.8,9.4-3.3,15.2
	c4.2-2,5.9-6.8,10.2-8.2c1.3,0.7,2.3,1.7,3,3c-2,4.4-5.8,7.3-9.2,10.2c-4.9,4.2-5.2,9.2-4,15.6c5.3-4.9,9.8-9.7,14.5-14.3
	c1.8-1.7,3.1-4,5.7-4.6c1.3,0.7,2.3,1.7,3,3c-1.1,3.4-4.1,5.1-6.4,7.5c-4.1,4.3-8.2,8.8-12.8,12.7c-4.9,4.2-5.3,9.1-4.1,15.9
	c9.7-10.6,20.5-18.9,28.2-30.2c3.3,0.9,4.9,3.8,7,6.1c-0.8,2.9-3,4.3-5.7,5c-1.6,0.4-3.3,0.7-4.6,1.8C98.9,74.9,92,83.9,83.7,91.7
	c-2.5,2.4-2.5,5.7-1.2,12.6c9-9,17.7-17.5,26.2-26.4c2.8-5.8,5.7-11.4,11.9-14.4c2.6,2,5,4.4,7,7c-5.3,7.4-11.2,14.1-20.4,16.8
	C98.8,95,91.9,104,83.7,111.8c-2.5,2.3-2.5,6.1-1,12.4c8.9-9,17.8-17.4,26.1-26.4c2.6-7.3,8.5-12,13.6-17.4c2.8-3,6.9-3,10.2-4.9
	c1,1,2,2,3,3c-5,5.1-7,12.3-12.1,17.3c-4.8,4.8-9.1,10.1-16.2,11.5c-8.4,7.5-15.2,16.6-23.4,24.3c-2.5,2.4-2.5,4.7-1.5,12.6
	c9.3-8.7,18-17.5,26.4-26.4c2.3-6.5,7.1-11,11.8-15.6c2.5-2.5,5-4.6,8.7-5.3c3.6-0.7,5.5-4.1,8-6.3c1.9-1.6,3.2-3.8,5.3-5.1
	c1,1,2,2,3,3c-4.7,5.2-10,9.7-14.1,15.4c-3.4,4.6-5.5,10-9.9,14.1c-4.3,4-8.6,7.7-14.3,9.3c-8.4,7.6-15.4,16.6-23.5,24.5
	c-3.4,3.2-1.8,7.7-1.5,12.9c9.3-9.5,18.2-17.9,26.6-26.9c2.4-6.7,7.4-11.3,12.3-16.1c2.3-2.3,4.6-4.3,8-4.8c2.2-0.3,3.7-2.1,5.4-3.5
	c6.6-5.7,11.5-12.8,16.2-20c2.6,2,5,4.4,7,7c-1.1,3.2-3.4,5.8-6.4,6.5c-7.7,1.8-11.6,8-16.4,13c-5.9,6.1-8.7,14.4-15.2,20.1
	c-3.8,3.3-7.8,5.3-12.2,7.2c-8.4,7.5-15.2,16.6-23.5,24.3c-2.5,2.4-2.6,4.8-1.5,12.6c9.3-8.8,18-17.5,26.4-26.4
	c2.6-7.4,8.4-12.2,13.7-17.4c0.9-0.9,1.9-2,3.2-2.4c10-2.7,15.7-10.5,20.6-18.5c4.1-6.7,8.2-12.4,16.3-14c1,1,2,2,3,3
	c-2.9,4.2-6.3,8-8.4,12.8c-1.5,3.3-4.4,5.5-8.3,6.6c-6.4,1.8-9.6,7.8-14.2,12.1c-4.8,4.4-6.1,11-10.7,15.4
	c-5,4.8-9.3,10.5-16.7,11.9c-8.4,7.5-15.2,16.6-23.5,24.3c-2.5,2.4-2.6,4.7-1.5,12.6c9.3-8.7,18-17.5,26.5-26.4
	c2.6-7.3,8.4-12.2,13.7-17.4c0.9-0.9,1.9-2,3.2-2.4c11.1-3.5,17.1-12.5,22.7-21.8c2.6-4.4,5.4-8.1,10.9-9.4c4.3-0.9,6.5-4.9,9.4-7.9
	c1.3-1.3,2-3.1,4-3.5C174.5,117.3,176.1,119,177.8,120.7z"/>
<path :style="{fill:'rgba(0, 145, 251, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M464.7,396.7c-7.7,8.3-15.7,16.3-24.1,24c-6.7,2.6-11.7,1.5-15.9-4.1c-9.5-12.6-19-25.3-28.4-37.9
	c-15.1-20.1-30.2-40.1-45.2-60.3c-11.8-15.9-23.8-31.6-35.7-47.4c-1-1.3-2.4-2.5-1.8-4.4c5.3-5.3,10.6-10.6,16-16
	c3.1-0.6,4.3,2.1,6,3.7c36.1,36,72.1,72,108.1,108c6.5,6.5,13,12.9,19.4,19.5C467.7,386.6,468.1,391.4,464.7,396.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M160.7,93.8c-2.7-2.7-5.3-5.3-8-8c-0.4-4.7,2-7.8,7.2-9.2c2.1,2.6,0.3,6.1,2,9.6
	c4.2-5.2,11.2-7.7,10.8-15.7c0-0.8,0.4-1.6,1.1-2.1c20.3,20.2,40.6,40.4,60.9,60.6c31.2,31.2,62.4,62.4,93.6,93.7
	c6.7,6.7,6.7,12.3,0.2,18.9c-3.3,3.3-6,9.1-10,9.2c-4,0.1-6.8-5.6-10.1-8.9c-44.7-44.6-89.3-89.3-134-133.9
	c-0.7-0.7-1.3-1.5-1.9-2.2c-0.1-1.2,0.1-2.7-2-2c-1.3-0.7-2.3-1.7-3-3c6-4.5,5.1-10.7,4.5-17.2C167.1,85.9,165.3,91.3,160.7,93.8z"
	/>
<path :style="{fill:'rgba(7, 112, 191, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M313.7,266.6c15,20,30,40,45.1,60c18,24,36.2,47.8,54.1,71.8c3.2,4.2,6.8,8.3,9.4,12.8
	c4.3,7.5,9.9,10.8,18.4,9.5c-2.9,3-5.6,6.1-8.6,9c-7.2,7-14.1,6.5-20.2-1.6c-18.3-24.3-36.5-48.6-54.7-72.9
	c-17.8-23.8-35.7-47.6-53.6-71.3c-2.3-3.1-3.3-5.2,0.4-8.1C307.5,273.1,310.4,269.7,313.7,266.6z"/>
<path :style="{fill:'rgba(174, 218, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M464.7,396.7c2.2-6.1,0.7-11-4-15.7c-41.9-41.7-83.7-83.6-125.5-125.4c-1.8-1.8-3.7-3.3-5.6-5
	c4-4.8,9.4-8.6,10-15.6c2.4,0.4,3.3,2.1,4.5,3.3c42.9,42.8,85.6,85.7,128.7,128.4c7.9,7.8,7.9,15.7-0.1,22.4
	C469.9,391.5,467.4,394.1,464.7,396.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M130.8,63.7c-8-7.4-15.6-15.1-23-23c0.3-2.8,0.9-5.6,0.7-8.4c-0.1-0.8,0.3-2-0.2-2.4
	c-4.1-4.3-2.1-8.4-0.2-12.9c1.3-3.2,0.8-6.9-2.5-9.4c4.1-2,7.4,0,10.2,2.6c5.3,4.9,10.2,10.3,15.2,15.4c0.1,2.1,0.1,4.3,0.1,6.4
	c0,1.2-0.1,2.7,0.9,3.2c5.3,2.2,2.2,5.1,0.7,7.8c-2.7,4.8-2.3,9.1,1.5,13.4C135.9,58.2,134.5,61.1,130.8,63.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,166.7c7.2-1.5,11.4-7.2,16.4-11.8c4.7-4.2,5.5-10.8,10.3-15c5.6-4.9,8.9-12.2,17.5-13.8
	c3.3-0.6,5.5-4.4,6.8-8c1.4-4.1,4-7.4,8-9.5c2.6,2,5,4.3,7,7c-2.2,4-5.5,7-8.6,10.2c-1.2,1.2-2.6,2.5-4.2,2.6
	c-5.8,0.3-8.2,4.4-10.4,8.7c-4.1,8.4-10.2,16-18,20c-6.3,3.2-10.7,7.8-15.9,12c-3.2,2.6-3.3,6.8-5.9,9.6
	C107.2,175.1,109.3,170.3,106.8,166.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M130.8,63.7c1.2-2,2.8-3.7,3.4-6.5c-4.1,1.1-4.2-1.4-4.5-4.4c-0.6-5.8,1.2-10.7,4.9-15.1
	c-5.2-0.6-6.5-5.6-3.6-12.1c5.9,5.4,11.6,11,16.9,17c0,1.8-0.1,3.5,0.5,5.4c1.4,4.9,1.5,10.2-0.1,15.1c-0.6,1.9-0.6,3.1,0.2,4.8
	c1.7,4,0.6,9.9-1.8,11.8C141.4,74.4,136.1,69.1,130.8,63.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M162.8,105.6c-0.1,1.9-1.6,2.7-3,2.8c-5.5,0.3-8,4.1-10.1,8.4c-4.2,8.6-10.3,16.3-18.2,20.4
	c-6.3,3.2-10.7,7.8-15.8,11.9c-3.2,2.6-3.3,6.8-5.9,9.6c-2.5-3.6-0.5-8.4-3-12c7.4-2.2,12.4-7.5,17.4-12.9
	c3.9-4.2,5.2-10.2,9.5-14.3c4.2-4,7.3-9.7,12.6-11.7c4.6-1.7,7.9-4.4,11.4-7.2C159.8,102,161.4,103.7,162.8,105.6z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M150.8,93.7c-3.2,10.4-10.5,18.4-19.2,23.4c-6,3.5-10.7,7.8-15.9,12c-3.2,2.6-3.4,6.8-6,9.6
	c-2.5-3.6-0.5-8.4-3-12c7.4-2.2,12.4-7.5,17.4-13c3.9-4.2,5.1-10.3,9.6-14.3c4-3.6,6.7-8.6,12-10.8C147.8,90,149.4,91.7,150.8,93.7z
	"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M79.6,223.8c1.3-0.9,1.4-2.3,1.1-3.6c-1-5.4,1.4-9.1,5.4-12.4c7.6-6.3,12.8-15,20.7-21.1
	c4.1,2.3,4.5,11,0.6,14.9c-7,7.1-14.1,14.1-21.1,21.2c-1.3,1.3-2.4,2.8-3.5,4.1C81.4,226.1,80.4,225.1,79.6,223.8z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M146.7,79.7c2.2-3.5,2.3-9.4,0.7-10.7c-3.9-3.5-0.1-4.9,0.2-7.3c0.5-4.3,0.2-8.6,0.1-12.9
	c0-0.5-0.2-1-0.5-1.3c-2.2-2.3-2.3-2.3,0.6-4.9c4.3,3.7,8.3,7.7,11.9,12c1.3,2.1,1.3,4.4,1.3,6.7c0,1.3-0.5,3.1,0.4,3.9
	c5.3,4.8,0.9,8-1.7,11.5c-3.1,2.4-6.3,4.8-7,9.1C150.7,83.7,148.7,81.7,146.7,79.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M110.8,54.6c-0.5,3.2-2.1,5.8-4.4,8.1C99,69.8,91.8,77.2,84.5,84.4c-0.8,0.8-1.5,2.1-2.8,1.7
	c-1.4-0.5-0.8-2-0.9-3c-0.9-6.5,0.7-11.7,6-16.2c6.7-5.6,12.7-12.1,19-18.2C108.1,50.1,109.6,52.2,110.8,54.6z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M105.6,7.6c3.1-0.2,4.6,1,4.3,4.3c-0.3,3.6,0.6,7.2-2.6,10.2c-1.3,1.2-2.3,3.3,1,3.8
	c0.4,0.1,0.9,0.5,1.1,0.8c1.3,1.9,0,12-1.7,14c-5.8-5.7-11.6-11.3-17.3-17c-0.7-0.7-2.3-1.7-1-2.8C94.7,16.3,98.1,9.4,105.6,7.6z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M142.8,85.6c-3.8,5.8-7.6,11.7-15.2,13c-1.6,0.3-2.6,1.3-3.7,2.4c-5.3,5.4-11.3,10.2-14.1,17.6
	c-2.5-3.6-0.5-8.4-3-12c7.9-2,12.7-8.1,18-13.6c3.7-3.7,4.1-9.7,8.7-13c0.8-0.6,1.3-1.4,2.4-1.5C138.5,80.7,140.8,83,142.8,85.6z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M84.5,228.8c7.2-5.7,13-12.8,19.7-19c1.2-1.1,2.1-3.6,4.3-2.5c2,1,1,3.3,1.3,5
	c0.7,4.8-1.1,8.4-4.7,11.7c-4.4,4-8.9,8-12.4,12.9C89.6,234.6,86.9,231.8,84.5,228.8z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M159.8,76.7c-0.2-1.8,1-3,1.6-4.5c0.5-1.2,5.1-4-0.9-4.1c-1,0-0.7-1.7-0.7-2.6c0-3.6,0-7.3,0-10.9
	c5.1,4.3,9.6,9.1,14.1,13.9c2,10.1-6.8,13.6-11.9,19.3c-1.5,1.7-2.1-0.2-2.2-1.6C159.8,83,159.8,79.8,159.8,76.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M102.8,45.7C96.5,52.1,90.3,58.5,84,64.9c-0.7,0.7-1.3,1.7-2.5,1.1c-1.1-0.5-0.6-1.7-0.8-2.7
	C80,56.7,81.1,51,87.1,46.8c3.2-2.3,5.9-5.4,8.7-8.1C98.4,40.7,100.8,43,102.8,45.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,86.7c9.4-2.2,13.9-10.7,21-16c2,1.3,3.6,3,5,5c-0.1,1.1-0.6,1.9-1.6,2.3
	c-10.3,3.1-16.2,10.9-20.7,20c-0.1,0.3-0.5,0.4-0.7,0.7C107.2,95.1,109.3,90.3,106.8,86.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M95.7,239.8c2.1-5.5,7.3-8.4,11.1-12.4c1.3-1.3,2.4,0.1,2.8,1.5c2.3,6.9-0.7,13.3-7.7,16.7
	C99.5,244.1,97.5,242.1,95.7,239.8z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M160.7,93.8c2.4-4.4,6.2-7.7,9.6-11.2c0.7-0.7,1.4-1.7,2.4-1.4c1.4,0.5,0.9,1.9,1,3
	c0.1,2.6-0.2,5.3,0.1,7.9c0.5,4.8-1.9,7.3-6.1,8.6C165.4,98.4,163.1,96.1,160.7,93.8z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M92.8,35.7c-3.1,3.2-6.1,6.5-9.2,9.6c-1,1-2.1,1.9-2.8-0.4c-1.7-5.5,0.5-12.6,5-16.2
	C88.4,30.7,90.8,33,92.8,35.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M120.8,63.7c-4.2,4.6-8.6,9.1-11,15c-2.5-3.6-0.5-8.4-3-12c3.3-2.7,8.3-2.2,11-6
	C119.1,61.4,120.1,62.4,120.8,63.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M170.8,103.7c0.2-1.3,0.6-3.2,2.1-2.4c1.8,1,1.2,3-0.1,4.4C172.1,105.1,171.4,104.4,170.8,103.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,66.7c2.3,0.2,3,1.6,3,3.7c0,2.8,0,5.6,0,8.3c-8.6,8.8-17.2,17.5-25.8,26.2
	c-0.7,0.7-1.3,1.7-2.5,1.1c-1.1-0.5-0.7-1.7-0.8-2.7C80,96.8,81.2,91.2,87,86.8C94.5,81.1,99.3,72.5,106.8,66.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,86.7c2.3,0.2,3,1.6,3,3.7c0,2.8,0,5.6,0,8.3c-8.6,8.8-17.2,17.5-25.8,26.2
	c-0.7,0.7-1.3,1.7-2.5,1.1c-1.1-0.5-0.7-1.7-0.8-2.7c-0.8-6.6,0.4-12.2,6.2-16.6C94.5,101.1,99.3,92.5,106.8,86.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,106.7c2.3,0.2,3,1.6,3,3.7c0,2.8,0,5.6,0,8.3c-8.6,8.8-17.2,17.5-25.8,26.2
	c-0.7,0.7-1.3,1.7-2.5,1.1c-1.1-0.5-0.7-1.7-0.8-2.7c-0.8-6.6,0.4-12.2,6.2-16.6C94.5,121.1,99.3,112.5,106.8,106.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,126.7c2.3,0.2,3,1.6,3,3.7c0,2.8,0,5.6,0,8.3c-8.6,8.8-17.2,17.5-25.8,26.2
	c-0.7,0.7-1.3,1.7-2.5,1.1c-1.1-0.5-0.7-1.7-0.8-2.7c-0.8-6.6,0.4-12.2,6.2-16.6C94.5,141.1,99.3,132.5,106.8,126.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,146.7c2.3,0.2,3,1.6,3,3.7c0,2.8,0,5.6,0,8.3c-8.6,8.8-17.2,17.5-25.8,26.2
	c-0.7,0.7-1.3,1.7-2.5,1.1c-1.1-0.5-0.7-1.7-0.8-2.7c-0.8-6.6,0.4-12.2,6.2-16.6C94.5,161.1,99.3,152.5,106.8,146.7z"/>
<path :style="{fill:'rgba(232, 232, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M106.8,166.7c2.3,0.2,3,1.6,3,3.7c0,2.8,0,5.6,0,8.3c-8.6,8.8-17.2,17.5-25.8,26.2
	c-0.7,0.7-1.3,1.7-2.5,1.1c-1.1-0.5-0.7-1.7-0.8-2.7c-0.8-6.6,0.4-12.2,6.2-16.6C94.5,181.1,99.3,172.5,106.8,166.7z"/>
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
                                    <button :style="{background:'rgba('+getterButcherknifeBg1+')'}" @click="ShowElement(getterButcherknifeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterButcherknifeBg2+')'}" @click="ShowElement1(getterButcherknifeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterButcherknifeBg3+')'}" @click="ShowElement2(getterButcherknifeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterButcherknifeBg4+')'}" @click="ShowElement3(getterButcherknifeBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterButcherknifeBg5+')'}" @click="ShowElement4(getterButcherknifeBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Butcherknife= [
                {top:17 ,left:48},
                {top:230 ,left:111},
                {top:217 ,left:119},
                {top:201 ,left:37},
                {top:162 ,left:38},
                {top:490 ,left:70},
                {top:211 ,left:103},
                {top:276 ,left:11},
                {top:259 ,left:114},
                {top:465 ,left:45},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Butcherknife[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Butcherknife[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Butcherknife'){
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
                getterButcherknifeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Butcherknife') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterButcherknifeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Butcherknife') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterButcherknifeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Butcherknife') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterButcherknifeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterButcherknifeBg5: {
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
                            name:'Butcherknife',
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