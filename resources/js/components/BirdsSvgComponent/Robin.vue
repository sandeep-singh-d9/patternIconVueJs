<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#E2E2E2;transform:scale(0.2)" :class="ValueId+'_color6'" d="M227.8,241.5c-7-3.8-14.1-7.5-21.1-11.3c-7-3.9-14.2-7.5-21.4-11c-2.6-1.3-5.3-2.3-7.9-3.6
	c-2.4-1.3-4.6-0.8-6.9,0.1c-4.8,1.9-9.6,3.7-14.7,4.6c-1.2,0.2-2.3,0.6-3,1.6c-3.6,0.2-7.1,1-10.5,1.9c-2.9-0.1-5.8,0.4-8.7,1
	c-2.8-0.2-5.5,0.1-8.3-0.2c-0.5-0.6-1.2-0.5-1.8-0.5c-8.2,0.3-16.4-0.7-24.5-2.3c-11.8-2.2-22.9-6.2-33-13.1
	c-12.5-8.7-22.7-19.5-31.2-32c-3.4-5-6.5-10.1-8.9-15.6c0.2-0.9,0.9-1.2,1.5-1.7c6.7-4.9,12.3-11,17.9-17c1.5-2.1,3.6-3.7,5.3-5.7
	c2.7-3.2,5.6-6.2,8-9.5c3.6-4,6.9-8.2,9.9-12.7c2.9-4.6,6.3-8.9,8.7-13.8c0.3-0.6,0.7-1.1,1.4-1c0.8,0.7,0.9,1.7,1.2,2.7
	c2.1,8.4,6.8,15.4,12.6,21.6c7.5,8.2,16,15.2,24.5,22.2c7.4,6.1,14.8,12.2,22.3,18.1c6.4,5.1,13.2,9.8,19.9,14.6
	c9,6.5,18,13.1,27,19.6c7,5.1,13.8,10.4,20.6,15.7c2.1,1.6,4.5,3,5.9,5.4c2.5,3.8,5.4,7.2,8.1,10.9c2.3,3.2,4.3,6.5,6.8,9.5
	C227.9,240.5,228.2,241,227.8,241.5z"/>
<path style="fill:#664F4F;transform:scale(0.2)" :class="ValueId+'_color4'" d="M212.4,219.9c3.2,1.8,5.7,4.6,8.5,6.9c8.1,6.6,15.2,14.4,23.8,20.4c2.1,1.5,4.5,2.6,6.8,3.7
	c-0.4,0.1-0.7,0.1-0.3,0.6c8.6,14.3,17.1,28.6,25.7,43c1.4,2.4,2.8,4.9,4.3,7.3c0.9,1.4,0.2,1.7-0.9,1.9c-3.4,0.5-5.8-1.5-8-3.6
	c-3.1-2.9-5.6-6.4-8.1-9.8c-5.9-7.7-11.7-15.4-17.5-23.2c-6.3-8.5-12.6-17.1-18.9-25.6c-4.6-6.4-9-12.9-13.9-19.1
	C213.3,221.6,212.7,220.9,212.4,219.9z M32.3,47.5c0.5,1.7,2.1,2.1,3.3,2.8c3.2,1.7,6.5,3,9.8,4.5c0.8,0.3-0.2,0.4-0.2,0.6
	c-0.8,0.9-1.9,0.9-2.9,0.9c-10.1-0.1-20.2-0.4-30.3-0.7c-0.6,0-1.3,0-1.8-0.5c6.3-2,12.6-4,18.9-6.1C30.2,48.6,31.4,48.4,32.3,47.5z
	"/>
<path style="fill:#000000;transform:scale(0.2)" :class="ValueId+'_color7`'" d="M212.4,219.9c-3.9-3.9-8.4-7.1-12.8-10.5c-7.8-5.9-15.6-11.8-23.5-17.5c-9.3-6.8-18.7-13.3-27.9-20.1
	c-6.9-5.1-13.7-10.3-20.2-15.8c-6.1-5.1-12.3-9.9-18.4-15.1c-8.5-7.2-16.9-14.5-23.3-23.7c-3.7-5.3-6.4-11-7.6-17.4
	c-0.6-1.4,0.7-2.3,1-3.4c1.5-2.3,2.8-4.8,4.9-6.6c0.6-0.6,1.3-1.1,2.1-1.4c1.4-0.3,2.5,0.2,3.5,1.1c3.4,3.3,7.2,6.1,11.2,8.7
	c3.8,2.6,7.4,5.5,11.1,8.2c2.9,2.1,5.9,4.2,8.9,6c2,1.2,3.8,2.6,5.5,4.2c2.6,2.4,5.9,4.1,8.7,6.3c1.8,1.4,3.7,2.6,5.5,3.9
	c0.2,0.1,0.9,0.6,1.7,1.3c0.6,0.5,1,0.9,1.3,1.2c0.3,0.2,0.7,0.5,1.2,0.4c0.3-0.1,0.3-0.2,0.6-0.2c0.4,0,0.6,0.5,1.2,1.1
	c0.3,0.4,0.6,0.7,1.2,1.1c0.7,0.6,1.4,1,1.6,1.1c1.8,1.1,6.8,4.4,11.2,8.3c1.9,1.6,4.1,2.8,6,4.4c4.6,4,10.1,6.5,14.8,10.3
	s9.7,7.3,14.9,10.4c1.4,0.8,2.4,1.9,3.6,3c3.5,3.2,8,5,11.4,8.4c1.3,1.3,2.8,1.1,4.3,0.8c3.3,6.4,6.3,13,9.9,19.2
	c4.2,7.4,8.7,14.6,13.5,21.6c7.4,10.9,15.1,21.5,23.7,31.4c1.2,1.4,0.9,2-1,2.4c-3.9,0.7-7.4-0.3-10.8-2.3c-2.6-0.2-4.7-1.5-6.6-2.9
	c-4.6-3.3-9-6.8-13.1-10.8c-5.2-5-10.8-9.5-16.2-14.3C214.5,222,213.5,220.9,212.4,219.9z M216.3,178.6c-1.9,2-3.7,0.6-4.9-0.7
	c-3.4-3.3-8.1-5-11.4-8.4c-3.1-3.2-7.1-5.2-10.6-7.5c-5.9-3.9-11.3-8.6-17.4-12.2c-4.2-2.5-8.2-5.7-12-9c-0.9-0.8-3.5-2.5-7.1-5
	c-1.8-1.3-3.3-2.4-4.2-3.1c-0.3-0.2-0.6-0.4-1-0.6c-0.2-0.2-0.4-0.4-0.6-0.5c-0.3-0.1-0.5-0.3-0.8-0.4c-0.2-0.1-0.3-0.2-0.5-0.2
	c-0.3-0.2-0.5-0.4-0.8-0.6c-0.3-0.1-0.6-0.3-0.9-0.4c-0.2-0.2-0.4-0.3-0.5-0.5c-0.3-0.3-0.6-0.6-0.9-0.9c-0.5-0.4-1-0.8-1.5-1.3
	c-0.4-0.4-1.1-0.9-2-1.6c-3.8-3-7-4.9-8-5.5c-4.7-3-8.7-6.9-13.4-9.7c-4.5-2.7-8.9-5.7-12.9-9c-4.3-3.5-9.5-5.9-13.4-10
	c-1.2-1.3-2.3-3-4.5-2.7c-0.6-1,0.3-1.2,0.9-1.5c5.6-3.2,11.5-5.7,17.8-7.4c0.9-0.2,1.8-0.2,2.7-0.1c0.4,0,0.8,0.1,1,0.4
	c0.9,2.2,3.2,2.4,4.9,3.4c2.6,1.6,5.2,3.5,7.5,5.5c1,0.8,1.9,1.7,3.2,1.9c0.6,0.1,1.1,0.4,1.5,0.8c5,4.2,10.5,7.7,15.7,11.6
	c4.9,3.7,9.5,8,14.9,10.9c4.9,2.6,8.6,6.9,13.4,9.5c2.1,1.2,3.6,3.4,5.9,4.5c5.1,2.4,9.3,6.1,13.7,9.5c2.3,1.8,4.8,3.4,7.1,5.3
	c0.8,0.7,1.7,1.2,2.4-0.2c0.3-0.7,0.8-0.5,1.1,0.1c2.2,4.9,4.4,9.7,6.6,14.6c3,6.7,5.9,13.4,8.9,20.1
	C216.1,177.9,216.2,178.3,216.3,178.6z M47.4,24.1c2.9-3.2,6.3-5.8,10.1-7.7c0.8-0.4,1.3,0.1,1.8,0.6c0.6,0.7,1.4,1.1,2.2,1.7
	c2.2,1.6,4.7,1.8,7.4,1.9c8.4,0.2,16.6,1.1,24.3,4.7c0.6,0.3,1.2,0.4,1.8,0.5c3.7,0.9,6.9,2.9,10.2,4.7
	c10.3,5.7,19.5,13.1,28.3,20.9c6.9,6.1,13.4,12.6,19.8,19.2c4.6,4.8,9.2,9.6,13.6,14.6c0.3,0.4,0.8,0.7,0.8,1.2c0.4,2,1,3.9,1.5,5.9
	c-0.9,1.2-1.9,0.8-3,0.2c-5.6-3.1-10.2-7.6-15.7-10.8c-2.3-1.3-4.5-2.6-6-4.9c-0.3-0.5-0.8-0.8-1.4-1c-5.7-2.8-10.4-7.1-15.5-10.8
	c-2.5-1.8-4.7-4.2-7.8-5.1c-0.4-0.1-0.8-0.3-1.1-0.6c-3.2-3.7-7.6-5.9-11.4-8.7c-3.5-2.6-6.7-5.8-11-7.4c-1.5-0.6-2.4-1.9-3.2-3.3
	c-0.5-1-1.2-1.2-2.2-1.1c-1.9-2.3-4.2-4.1-6.9-5.6c-1.1-0.6-2.2-0.9-3.5-0.8c-1.2-0.6-2.1-1.9-3.6-2c-0.4,0-0.8-0.4-0.7-0.7
	c0.7-1.9-0.9-1.6-1.8-1.9c-0.7-0.3-1.4-0.6-2-1.2c-3.7-4-8.4-4.5-13.5-3.7c-3.6,0.5-7,1.8-10.5,2.6C47.5,25.7,47,25.4,47.4,24.1z
	 M169,92.2c-0.7-1.3-1.5-2.6-1.4-4.1c0.1-1.9-1.3-2.9-2.4-4c-7-7.5-13.9-15-21.2-22.2c-9.3-9.3-19.3-17.8-30-25.4
	c-4.7-3.3-9.7-6.2-15-8.5c-1.2-0.5-2.3-1.5-3.7-1.7c-0.4-0.2,0.6-0.4-0.1-0.9c-3.4-3-7.5-4.9-11.3-7.3c-2.5-1.6-5-3.1-6.7-5.6
	c-0.4-0.6-1.1-0.5-1.7-0.6c-0.8-0.1-1.7,0.2-2.4-0.6c7.3-1.1,14.5-0.4,21.6,1.6c9.1,2.6,17.3,6.9,25.1,12.2
	c13.2,9,24.1,20.2,34.1,32.6c6.4,8,12.2,16.5,17.5,25.3c3.1,5.2,6.2,10.5,8.8,15.9c-1.5,1-2.5,0.4-3.6-0.7c-1.6-1.6-3.2-3.2-4.5-5.1
	c-2.5,4.9,1,7.5,3.9,10.3c1.9,1.9,3.8,3.8,5.7,5.7c1.2,1.2,2.6,1.9,4.3,1.7c0.4,0.9,0.8,1.7,1.2,2.6c-3,1.4-4.3,1.3-6.6-1
	c-3.5-3.5-6.9-7.1-10.5-10.4c-2.1-2-2.9-4.1-2-6.8C168.5,94.2,168.4,93.1,169,92.2z M169,92.2c0.3,1.5-0.2,2.9-0.6,4.4
	c-0.4,1.6,0,2.9,1.1,4c4,4,8,8,12,12c1.3,1.3,2.7,1.7,4.4,1c0.5-0.2,0.9-0.3,1.4-0.1c1.4,3.3,3.3,6.3,4.3,9.8
	c-0.7,1.5-1.5,1.7-3,0.6c-4.3-3.5-9.1-6.4-13.4-9.8c-4.1-3.3-8.9-5.5-13-8.7c-1.7-1.4-3.4-2.8-5.2-4c-5.4-3.8-11.1-7.1-16.2-11.2
	c-4.4-3.4-8.8-6.9-13.3-10.1c-3.3-2.4-6.5-5.1-10.5-6.2c-1-0.3-1.3-1.4-2-2.1c-2.3-2.3-5.4-3.7-6.7-6.9c-0.2-0.5-0.8-0.2-1.2-0.3
	c-2.1-1-3.1-3.2-4.4-4.9c-2.1-2.7-3.9-5.7-5.5-8.7c-1.6-3.1-3.5-6.1-4.9-9.3c-0.4-0.9-1.9-1.5-1.2-2.9c0.9-0.6,1.7-0.7,2.2,0.4
	c1,2.2,2.5,3.7,5,4.3c1.2,0.3,1.9,1.5,2.9,2.1c4.4,2.9,8.3,6.5,12.8,9.1c0.5,0.3,1.1,0.7,1.5,1.1c1.9,2.1,4.1,3.7,6.8,4.9
	c1.9,0.8,3.5,2.4,5.1,3.7c4.3,3.5,8.7,6.8,13.3,9.7c2.3,1.4,4.6,2.7,6.2,5c0.9,1.3,2.7,1.7,4,2.5c4,2.5,7.8,5.4,11.5,8.3
	c1.4,1.1,3.3,1.5,4.7,2.8C167.7,92.9,168.5,92.5,169,92.2z M107.3,64.1c0.6-0.7,1.3-0.5,1.5,0.1c1.1,3.3,4.3,4.4,6.3,6.7
	c2.1,2.4,5.2,3.1,7.6,4.9c2.9,2,5.7,4.1,8.6,6.1c2.3,1.6,4.4,3.5,6.7,5c1.9,1.3,3.5,3.2,5.6,4.3c3.3,1.7,5.8,4.6,9.2,6.3
	c3.2,1.6,5.9,4.2,8.8,6.5c2.3,1.8,4.6,3.9,7.4,5c1.2,0.4,2.2,1.1,3.2,2c2.3,2.2,4.9,4.1,7.7,5.5c0.9,0.5,1.5,1.3,2.2,1.9
	c0.4,0.4,0.8,1,1.2,1.1c2.7,0.6,4,2.9,6,4.4c1.2,0.9,1.3-0.7,2.1-0.7c2.5,5.8,5.6,11.5,7.8,17.4c0.3,0.7,1.1,1.3,1.1,2.2
	c-0.3,0-0.8-0.3-0.8,0.2c-0.2,2.6-1.7,1.5-2.6,0.8c-2.8-2.2-5.7-4.2-8.4-6.5c-2.6-2.2-5.6-4-8.1-6.4c-1-1-2.6-1-4-1.8
	c-3.5-2-5.9-5.5-9.8-7c-1.6-0.6-2.5-2.2-3.8-3.2c-6.8-5-14-9.3-20.6-14.7c-4.3-3.5-8.7-7-13.6-9.7c-0.7-0.4-1.2-1-1.7-1.6
	c-0.9-0.9-1.7-1.9-3.2-1.8c-0.4,0-0.9-0.2-1.1-0.5c-1.8-2-4.2-3.1-6.2-4.8c-1.5-1.3-3-2.6-4.9-2.7c-2-0.2-1.9-2.2-3.2-2.9
	c0-1.2,0.9-1.2,1.7-1.4c1.7-0.3,3.3-0.8,4.9-1.2c1.9-0.5,1.9-1.1,0.6-2.5c-2.4-2.4-4.5-5.1-6.8-7.5C108.1,66.8,107,65.7,107.3,64.1z
	 M56.6,39.4c-6.1-0.3-12-1.6-17.5-4.3c1.9-4.3,4.9-7.8,8.2-11c0.4,0.5,0.4,0.9,1.5,0.6c5-1.2,10-3.2,15.3-2.8
	c3.3,0.3,6.3,1.3,8.6,3.9c1.4,1.6,3.3,1.7,5.5,1.7c-0.5,0.9-1.7,0.9-1.5,1.9c0.3,1,1.2,0.5,1.8,0.6c1.3,0.2,1.3,1.6,2.3,2.1
	c0.1,0.3,0,0.6-0.3,0.7c-2.8,0.3-4.8,2.2-7,3.7c-1.5,1.1-3.2,1.7-4.9,2.2c-0.2,0.1-0.4,0.2-0.6,0.2c-0.9,0-1.7,0.5-2.6,0.9
	C62.6,40,59.6,40.6,56.6,39.4z M73.2,11.2c0.4,0,0.7,0,1.1,0.1c1.5,0.2,3-0.6,4.2,1.8c0.7,1.5,3.1,2.9,5,4c3.7,2.2,7.7,4.1,11,7
	c0.9,0.7,1.5,0.9,2.4,0.3c-0.5,0.6-1,1.2-1.5,1.9c-2.4,0.4-4.2-1.4-6.2-2c-4.6-1.4-9.2-2.2-14-2.7c-3.2-0.4-6.5-0.1-9.7-0.5
	c-2.4-0.2-4.5-1.8-6.3-3.4c-0.5-0.4-0.7-1.2-1.6-1.2C62.3,13.4,67.6,11.9,73.2,11.2z M186.1,110.9c-1.3,1.2-2.5,0.7-3.5-0.3
	c-3.8-3.6-7.4-7.4-11.1-11.1c-1.2-1.2-1-2.7-0.5-4c0.4-1.1,0.6-2.2,0.6-3.6c1.9,2,3.6,3.9,5.3,5.8c0.9,1,1.8,1.9,3.3,1.2
	C182.2,102.9,184.1,106.9,186.1,110.9z"/>
<path style="fill:#717171;transform:scale(0.2)" d="M141.8,289.3c0.3-0.1,0.8,0.1,0.9-0.5c1.8,0.4,3.2,1.4,4.7,2.3C145.4,290.7,143.5,290.4,141.8,289.3z
	"/>
<path style="fill:#C20000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M71.8,115.7"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M142.3,223.8c-2.4,4.2-4.9,8.4-7.3,12.7c-5.3,9.2-10.7,18.3-16,27.5c-2.1,3.6-4.3,7.2-6.4,10.8
	c-0.5,0.9-1,1.1-2,0.9c-2.3-0.5-4.7-0.8-7.4-1.3c10.3-16.7,20.4-33.2,30.6-49.7c2.6-1.5,5.5-1,8.3-1.3
	C142.2,223.3,142.3,223.6,142.3,223.8z"/>
<path style="fill:#C20000;transform:scale(0.2)" :class="ValueId+'_color1'" d="M59.5,39.6c3.1,0,5.6-0.3,7.5-0.6c0.1,0,1.2,0.1,1.5-0.5c0-0.1,0.1-0.1,0.1-0.2l0,0
	c0.1-0.1,0.2-0.3,0.4-0.4c0.6,0.2,1.1,0.4,1.6,0.6c0.1,0.1,0.4,0.1,0.6,0.4c0,0,0.2,0.2,0.3,0.4c0.2,0.5-0.1,1.1-0.6,1.6
	c-0.2,1.2-0.3,1.9-0.3,2.4c0,0.1-0.1,0.4-0.2,1.1c-0.1,0.4-0.2,0.8-0.6,1c-0.4,0.8-0.8,1.5-1.2,2.3c-0.1,1.1-0.3,2.1-0.4,3.2
	c0.3,1.9,0.3,3.9,1.1,5.8c0.7,1.6,2,2.7,2.8,4.2c0.3,0.7,0.9,1.2,1.4,1.8c0,0,0.6,1,1.1,2c1.1,2.7,0.9,6.5,0.8,6.9
	c0.7,3.9,1.3,7.8,2,11.7c0,2.1,0.1,4.9,1,7.9c0.4,1.3,0.8,2.5,1.2,3.5c0.4,1.3,0.7,2,0.7,2s-0.6,1.1-1,2.4c-0.1,0.4-0.2,0.8-0.3,1
	c-1.1,1.7-2.1,3.5-3.2,5.2c-2.2,3.3-4.4,6.5-6.5,9.8c0,0-2,2.1-2.1,2.2c-0.4,0.5-0.8,1.1-1.2,1.6c-0.2,0.2-0.4,0.5-0.5,0.7
	c-0.3,0.4-0.7,0.9-1,1.3c-3.2,4.1-6.3,8.2-9.5,12.2c-3.8,4.2-7.6,8.3-11.4,12.5c-4.3,4.3-8.6,8.5-12.9,12.8
	c-2.6,2.9-4.1,2.7-4.6,2.6c-1.4-0.4-2.1-2.2-3.7-8.3c-1.9-7.2-2.3-9.2-2.3-9.2c-1.6-8.9-2.5-13.3-2.7-16c-0.6-7.6-1.4-19.4,3.8-32.4
	c1.8-4.4,3.8-7.8,5.1-9.8c4.1-5.5,6.8-10.2,7.7-12.7c0.9-2.4,1.1-4.5,1.1-4.5c0.1-1.1,0.1-2,0-2.6c-0.1-0.4-0.3-1-0.7-1.7
	c-0.7-1-1.5-1.1-1.6-1.5c-0.2-0.6,1.5-1.9,9.3-5.1c0.9-0.2,1.5-0.9,1.6-1.7c0.1-0.7-0.2-1.2-0.4-1.3c-3.6-1.9-7.2-3.9-10.7-5.8
	c-0.2-0.2-0.4-0.3-0.5-0.5c1.3-2.5,2.5-5,3.8-7.5c1.2-1.9,2.3-3.8,3.5-5.7c2.9,1.5,5.5,2.4,7.5,3C47.9,38.3,52.8,39.7,59.5,39.6z
	 M69.9,44.1c0-1.8-0.6-3.7,1.1-5.2c-0.9-0.6-1.8-0.3-2.5-0.4c0.1-0.2,0.3-0.6,0.4-0.7c3.2-0.1,5.2-2.5,7.5-4.1
	c1.5-1,3.1-0.8,4.4-1.6c1.7-1.2,3.1,0.1,4.2,0.8c2.3,1.5,5,2.8,6.2,5.6c1.8,3.1,3.7,6.2,5.4,9.3c2.5,4.9,5.2,9.7,8.8,13.9
	c0.7,0.7,0.6,2.1,1.9,2.3c1.4,3.2,4.3,5.2,6.4,7.8c1.1,1.3,2.2,2.5,3.6,3.6c0.7,0.5,0.9,1.7-0.6,2.3c-2.1,0.8-4.2,1.3-6.4,1.6
	c-0.7,0.1-1.4,0.1-1.8,0.9c-3.1-0.4-5.7,1.1-8.5,1.9c-4.5,1.3-8.6,3.8-12.8,5.9c-0.2,0.1-0.3,0.5-0.4,0.7c-2.3,1.5-4,3.4-5.3,5.7
	c-0.4,0.7-0.7,1.5-1.5,1.9c-0.6-1-1.3-2-1.9-3c-0.3-0.5-0.8-1.3-0.6-1.7c1-2.2-0.9-4.1-0.3-6.3c0.3-1-0.9-2.2-1-3.4
	c-0.5-5.1-2.1-10.1-2.3-15.1c-0.1-2.7-1.7-4.2-2.4-6.3c2.3,0.7,4.2,2.1,6.7,2.4c6.8,0.9,13.3-5.6,12.5-12.5
	c-0.6-5.1-3.4-8.5-7.8-10.2c-2.9-1.2-6.2-0.5-9.2,1.2C72.5,42.2,71.7,43.8,69.9,44.1z"/>
<path style="fill:#D04537;transform:scale(0.2)" d="M47.5,139.2c-0.1,0.6-0.5,1-1,1.1c-0.3,0.1-0.5-0.3-0.3-0.6C46.4,139.1,46.9,138.9,47.5,139.2z"/>
<path style="fill:#DC7A31;transform:scale(0.2)" :class="ValueId+'_color2'" d="M69.9,44.1c3.2-3.9,7.4-5.3,12.3-4.8c1.8,0.2,3.2,1.3,4.5,2.4c4.7,3.8,5.8,9,4,14.1
	c-2.1,5.7-7.6,8.5-13.2,7.5c-2.3-0.4-4.1-1.2-5.8-2.7c-2.8-2.8-4.4-6.1-3.9-10.2c-0.8-2.3,0.7-3.8,1.7-5.5
	C69.6,44.6,69.8,44.4,69.9,44.1z"/>
<path style="fill:#040708;transform:scale(0.2)" :class="ValueId+'_color5'" d="M142.3,223.8c0.5-0.4,0.7-1,1.4-1.1c2.8-0.5,5.5-1,8.3-1.5c0.7-0.1,0.9,0.1,0.8,0.8
	c-3.1,4.1-5.6,8.6-8.4,13c-7.5,11.6-14.9,23.3-22.4,35c-1.4,2.3-2.9,4.5-4.5,6.9c8.5,4.1,16.8,8,25.2,12c0,0.8-0.4,0.7-0.9,0.5
	c-8.4-2.9-16.7-5.8-25.1-8.7c-1.3-0.5-2.6-0.4-4-0.4c-14.6,0.4-29.2,0.7-43.8,1.1c-1,0-2.1,0-3.1,0c0-0.2,0-0.4,0-0.5
	c13.3-1.1,26.6-2.1,39.9-3.2c0-0.3,0-0.5,0-0.8c-16-0.4-32.1-0.8-48.1-1.1c0-0.1,0-0.2,0-0.3c7.5-0.3,15-0.6,22.6-0.9
	c5.4-0.2,10.9-0.5,16.3-0.7c1.1,0,1.7-0.4,2.2-1.3c5.9-10.7,11.9-21.4,17.8-32c2.9-5.2,5.9-10.5,8.8-15.7c2.8-0.5,5.7-1.1,8.5-0.1
	c-0.2,2.5-1.9,4.2-3.1,6.2c-8.4,13.3-16.5,26.9-24.9,40.3c-0.1,0.1-0.1,0.2-0.2,0.4c-1.4,2.4-1.3,2.5,1.4,3c4.8,0.9,4.8,0.8,7.2-3.4
	c7.8-13.4,15.6-26.8,23.6-40.1c1-1.7,1.9-3.5,2.9-5.2C141.2,225,141.4,224.1,142.3,223.8z M10.2,55.1c2.8,0,5.6,0.1,8.5,0.1
	c8.1,0.1,16.1,0.2,24.2,0.3c0.8,0,1.5-0.1,2.3-0.1c0.3,0.1,0.6,0.1,0.8,0.2c-2.9,1.5-5.8,3.1-8.8,4.6c-1.6,0.8-3.1,2.1-5.1,1.9
	c-6-1.8-12-3.5-18-5.4c-1.4-0.4-2.9-0.3-4.2-1.1c0,0-0.1-0.2,0-0.2C10,55.2,10.1,55.2,10.2,55.1z M87.7,51.3c0,4.6-3.6,8.2-8.1,8.3
	c-4.1,0-8.1-3.7-8-7.7c0.1-5.9,3.6-8.4,8.5-8.7C83.9,43,87.7,47.1,87.7,51.3z"/>
<path style="fill:#F5F5F6;transform:scale(0.2)" :class="ValueId+'_color3'" d="M77.1,45.9c1.8-0.1,3.1,1.2,3.1,3c0,1.7-1.2,3-2.9,3c-1.6,0-2.9-1.3-3-2.9
	C74.2,47.2,75.4,45.9,77.1,45.9z"/>
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
                                    <button :style="{background:'rgba('+getterRobinBg1+')'}" @click="ShowElement(getterRobinBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRobinBg2+')'}" @click="ShowElement1(getterRobinBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRobinBg3+')'}" @click="ShowElement2(getterRobinBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRobinBg4+')'}" @click="ShowElement3(getterRobinBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterRobinBg5 +')'}" @click="ShowElement4(getterRobinBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRobinBg6+')'}" @click="ShowElement5(getterRobinBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRobinBg7+')'}" @click="ShowElement6(getterRobinBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterRobinBg8+')'}" @click="ShowElement7(getterRobinBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Robin= [
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
            var randomNumber = Robin[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Robin[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Robin'){
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
                getterRobinBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Robin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRobinBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Robin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRobinBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Robin') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRobinBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterRobinBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRobinBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRobinBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRobinBg8: {
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
                            name:'Robin',
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