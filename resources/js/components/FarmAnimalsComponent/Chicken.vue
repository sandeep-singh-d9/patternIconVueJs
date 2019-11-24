<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#780101; transform:scale(0.2)" :class="ValueId+'_color1'" d="M37.2,279.2c-5.9-3.5-7.4-6.8-5.7-13.9c8.2-34.1,25.5-62.7,51.9-85.7c25-21.8,54.3-32.7,87.4-32.7
	c32.3,0,57.4,14.8,78,38.7c15.3,17.8,27.1,37.7,38,58.2c5.1,9.7,10.8,19.1,20.2,25.4c13.7,9.1,30.7,5.7,39.6-8.1
	c10.5-16.3,16.9-34.6,24.3-52.3c18.2-43.7,19.3-45.7,49.8-84.7c-9.4-3.2-18-7.6-25.9-13.3c-14.9-10.7-23.5-25-24.5-43.6
	c-0.6-11.5,4.7-21.1,14.2-25.3c10.8-4.8,20.9-3.2,30.2,4c1.1,0.8,2.1,1.8,3.2,2.6c0.1,0.1,0.4,0,0.9-0.1c1.7-4.4,3-9.1,5.5-13.4
	c9-15.3,26.8-18.1,40.1-6.3c7.3,6.5,11.3,15.2,16.9,23.3c2.1-4.4,3.7-8.7,5.9-12.6c7.2-12.9,20.7-14,29.4-2.1
	c18.4,25.3,19.2,52.1,5.1,79.6c-1.7,3.3-4.1,6.1-1.1,10.2c1.7,2.3,3,3.5,5.9,4.1c20.4,4.1,37.9,13.1,50.1,30.6
	c3.1,4.4,5.3,9.3,6.6,14.6c2.3,9.1-2.6,15-11.9,14.1c-12.1-1.2-24.1-2.4-36.3-2.5c-1.2,0-2.3,0-3.9,0c0.6,2.8,2.8,3.6,4.3,4.9
	c10.5,8.7,20,18.2,26.5,30.3c5.6,10.4,7.9,21.2,3.1,32.6c-6.6,15.9-21.8,22.6-38.1,16.9c-2.2-0.8-4.4-1.7-7.2-2.9
	c1.3,13.3,1.1,26,0.3,38.6c-4.9,77.1-54.9,127.2-117.8,146.6c-3.7,1.1-6.3,2.6-8.4,5.8c-2.9,4.4-6.4,8.5-10.2,13.3
	c9.4-0.9,13.7,5.8,18.3,11.1c14.6,16.8,22.5,36.4,22.3,58.8c0,4.6,0.8,5.7,5.6,4.4c10.1-2.6,19.5-8.1,30.5-7.8
	c4.6,0.1,8.2,1.4,10.4,5.6c3.2,6.2-0.3,13.8-7.4,14.4c-8.3,0.8-15.8,3.8-23.5,6.2c-2.5,0.8-5,1.8-7.5,1.8
	c-11.7,0-19.4,6.1-25.7,15.2c-3.1,4.5-7.6,6.4-13,4c-5.4-2.4-7.5-8.9-4.6-14c1.2-2,2.6-4.1,4.4-5.6c12.9-10.6,12.4-24.3,9-38.6
	c-3.2-13.9-10.1-25.8-20.4-35.7c-3.4-3.3-6.4-6.6-5-13.1c-10.2,8-19.8,14.1-31.3,16.8c-2.3,0.5-2.4,2.3-2.3,4.2
	c0.7,21.2-4.5,40.9-15.4,59c-1.6,2.7-1.1,3.6,2,4.3c9.1,1.9,18.7,1.6,27.6,4.8c2.4,0.9,5,1.5,7,3.3c3.8,3.5,5.1,7.6,2.7,12.3
	c-2.4,4.5-6.5,7-11.4,5.3c-14.2-5-29.6-4-43.5-9.6c-2.1-0.8-3.4,0.4-4.9,1.2c-3.8,2.1-7.5,4.5-11.4,6.5c-4.6,2.3-9.8,0.7-12.6-3.4
	c-3.1-4.5-2.6-9.6,1.7-13.3c1.8-1.5,3.8-2.9,6-3.8c11.9-5.2,18.6-15,23.8-26.2c5.8-12.7,8.6-25.9,8.3-39.8c0-2.1,0.3-4.2-2.5-5.3
	c-8.6-3.5-14.2-10.3-15.6-19c-2.3-13.8-8.7-18.5-23.3-19.6c-38.3-3-69.4-21.2-93.6-51.1c-5.3-6.6-5.1-10.7,0.9-16.4
	c3.8-4.1,6.8-4.5,11.4-1.6c2.5,1.6,4.6,3.8,6.5,6.1c21.6,26.4,49.7,39.9,83.7,42c8.8,0.5,18.1,0.8,24.7,8.4c2.5,2.3,3.7,5.5,5.2,8.5
	c1.9,5,3.1,10.2,4.6,15.4c1.4,4.8,4.3,7.1,9.6,7.1c14-0.1,23.8-8,32.8-17.2c4.3-4.4,8.1-9.3,11.3-14.6c3-5.1,7.4-8.1,13.1-9.6
	c28.3-7.3,52.2-21.9,72.1-43.2c14.1-15.1,24-32.5,28.8-52.7c4.5-15.3,5.5-31,6.6-47.4c-5,2.2-9,4.8-13.5,6.2
	c-9.1,2.7-15.3,0.5-20.4-7.5c-2.2-3.4-3.7-7-4.9-10.8c-1.2-4.2-3.3-4.4-6.4-1.8c-3.1,2.5-6.4,4.7-9.7,6.9c-1,0.7-2,1.3-3,1.9
	c-9.9,5.8-18.3,3.7-24.1-6.3c-2.7-4.6-4-9.9-5.5-15c-2.1-7.4-2.1-7.4-9-4.4c-3.3,1.4-6.5,2.9-10,3.6c-7.2,1.4-13.2-0.8-18.1-6.1
	c-3.1,0.8-3.2,3.8-4.4,5.9c-5.2,8.7-10.2,17.5-19,23.4c-18.6,12.3-45.7,10.1-61.9-5.3c-2.6-2.5-5.1-5-7.6-7.5
	c-8.8-10.2-14.6-22.2-21-33.9c-9.7-17.7-20.9-34.1-35.2-48.6c-20.4-20.7-44.8-27.5-73.1-22.5c-38.5,6.9-65.1,29.6-84.5,62.2
	c-5.4,9.1-9,19-12.5,28.9c-0.8,1.7-0.9,3.5-1.4,5.3c-0.2,0.6-0.3,1.1-0.4,1.7C51.1,279.2,48.6,280.9,37.2,279.2z"/>
<path style="fill:#FFB594; transform:scale(0.2)" :class="ValueId+'_color7'" d="M65.6,286.2c-6.6-5.4-12-11.4-13.1-20.3c0.4-1.6-0.1-3.4,1.4-4.6c7.2-15,17.4-27.8,29.3-39.3
	c20.8-20.1,45.4-32,74.5-35.2c34.9-3.9,62.2,9.1,84.7,35.1c13.7,15.8,23.9,33.6,33.8,51.7c1.3,2.4,2.7,4.9,2.5,7.8
	c-0.3,2.8-1.3,5.2-3.3,7.3c-1.7,0.9-3.1-0.1-4.5-0.7c-4.3-1.8-7.9-0.9-10.4,2.8c-2.8,4-1.7,7.9,1.2,11.4c1.8,2.2,5.1,3.3,5.4,6.7
	c-1,4.3-2.3,8.4-5,12c-2,0.9-3.8-0.7-5.7-0.8c-4-0.2-6.8,1.7-8.7,5c-1.8,3.1-0.7,5.9,1.1,8.7c2.3,3.5,7.2,4.2,8.4,8.6
	c-1.9,2.9-2,6.5-3.6,9.5c-1.9,1.1-3.9,0.4-5.8,0.3c-4.2-0.1-7.2,1.4-8.8,5.5c-1.6,4.2,0.2,7.2,3.2,9.9c2.2,1.9,5.2,3,6.1,6.1
	c0,3.8-0.2,7.5-2.8,10.6c-1.5,1.1-3.3,1.1-5,1.3c-8.5,0.9-11.2,5.6-7.6,13.3c0.5,1.1,1.2,2,1.2,3.3c-1.1,1.3-2,0.4-3-0.2
	c-15.6-9-27.7-21.5-37.8-36.2c-1.3-1.9-2.1-4.3-4.3-5.6c-1.4-17.5,1.9-33.5,14.8-46.5c3.3-3.3,7.1-5.7,11.3-7.6
	c6.7-2.9,9.5-7.2,8.2-12.5c-1.3-5.5-5.6-7.9-13-7.3c-0.8,0.1-1.6,0.2-2.4,0.3c-6.3-2.9-9.8-8.2-12.1-14.5c2.4-4.5,3.2-8.9-0.4-13.2
	c-3.9-4.4-8.6-4-13.6-2.2c-6.2-3.2-10.6-8.2-13.6-14.4c3.4-4.8,4.2-9.7-0.2-14.4c-3.8-4.1-8-4.1-15.9,0c-5.6-3.6-11.2-7.2-14.7-13.2
	c3.2-6.6,2.8-10.8-1.6-14.4c-4.8-3.9-9.5-2.6-14.2,0.6c-23.1,15.9-37.9,38-48.7,63.2C69.9,271.4,67.4,278.7,65.6,286.2z
	 M439.9,311.4c8.7,2.4,10.2,5.1,7.9,13.7c-2.8,10.2-7,19.9-13.1,28.6c-29.5,42.2-70.8,63.5-121.4,68.2c-2.1,0.2-4.5-0.4-6,1.8
	c3.3,7.6,5.7,15.4,7.1,23.5c1.5,2.4,3.1,4.9,4.6,7.3c1.6,2.7,3.8,4.5,7.1,4.8c10.7,1,21.1,0.1,30.6-5.5
	c10.1-5.9,19.1-13.1,25.6-22.8c5.9-8.8,12.7-15.6,23.9-16.6c1.4-0.1,2.6-0.9,3.9-1.4c19.5-7.5,37.1-18.1,52.7-32.1
	c12.9-11.7,24.2-24.6,30.7-41c5.5-16.4,6.1-33.5,7.1-52.4c-5.1,4.7-9.5,7.2-14.3,8.8c-10.2,3.5-16.7,1-21.5-8.8
	c-1.8-3.7-3.2-7.7-4.4-11.6c-0.9-3-2.1-3.4-4.6-1.5c-4,3.2-8.2,6.2-12.3,9.3c2.7,6.1-0.4,12.2-0.1,18.3c0.2,4.5-1.8,6.8-5.9,7.7
	C438,310.9,438.9,311.2,439.9,311.4z"/>
<path style="fill:#FF8100; transform:scale(0.2)" :class="ValueId+'_color5'" d="M314.5,447.2c-6.3-7.1-15-7.6-23.4-8c-26.1-1.5-49.6-9.3-69.7-26.3c-5.2-4.4-9.9-9.1-14.3-14.2
	c-1.6-1.8-3.1-3.6-4.6-5.4c-3.9-4.4-8.4-5.8-13.6-2.2c-2.2-6.7-4.6-13.2-13.1-13.9c0.1-0.2,0.2-0.4,0.4-0.5
	c9.5-1.1,11.9-7.5,12.1-15.7c3.6-2.7,4.4,1.1,5.6,2.8c6.3,9.1,13.4,17.6,21.7,24.9c6,5.3,12.1,10.8,20.2,12.9
	c14,8.1,28.5,15.1,44.6,18.1c6.8,1.2,13.7,2.5,20.7,2.3c2.2-0.1,4.4-0.1,6.4,1.1C312.3,430.2,315.9,438,314.5,447.2z M52.5,265.9
	c-4,13.3-4,13.3-15.3,13.3c5.1,0.9,7.3,3.9,9,8.9c3,8.5,7.1,16.7,13.6,23.3c2.5-8.3,2.7-17,5.7-25.2
	C60.9,279.6,55.8,273.4,52.5,265.9z M323.4,471.1c1.5,5.2,4.5,7.7,10.4,7.5c7.7-0.3,14.4-2.4,20.7-6.4c10.4-6.6,18.3-15.7,24.8-26
	c2.8-4.4,6.1-7.6,11.3-8.9c32.4-8.3,59.1-25.4,80.3-51.3c11.1-13.6,18.9-28.7,22.6-45.9c-9.5,15.3-19.7,30-33.8,41.7
	c-18.6,15.4-38.6,27.7-62.3,33.4c-4.4,1.1-7.7,3.1-10.4,7.1c-8,12-17.4,22.7-30.3,29.7c-12.1,6.5-24.7,9.8-37.8,2.6
	C320.5,460,321.9,465.6,323.4,471.1z"/>
<path style="fill:#FFD3B7; transform:scale(0.2)" :class="ValueId+'_color4'" d="M444.2,306.5c-0.6,2.8-3.2,3.7-5.6,4.7c-3.6,1.4-5.9,4-7,7.6c-8.5,29.9-28.9,50.1-54.7,65.5
	c-24.4,14.6-50.7,22.9-79.5,20.4c-17.5-1.5-34-6.3-48.8-15.9c-1.6-1.1-3.6-1.9-3.7-4.3c0.8-3.7,1.7-7.4,2.5-11
	c3.3-1.2,5.7,1.1,8.3,2.3c13,6.1,26.4,9.9,41,9.1c1.6-0.1,3.2-0.1,4.8-0.3c6.3-1.1,9.1-4.1,8.7-9.3c-0.4-4.8-3.5-7.5-9.8-7.3
	c-11.5,0.3-22.7-1.2-33.2-5.9c-5.3-2.3-11.4-3.9-13.9-10.1c0.3-3.5-0.3-7.3,3.4-9.7c3.5-1.2,6,1.3,8.8,2.6c10.9,5.2,22.3,8,34.4,7.8
	c2.2,0,4.4-0.1,6.3-1.2c3.3-1.9,5.6-4.4,5-8.6c-0.7-4.3-3.4-6.7-7.6-7c-5.3-0.3-10.7-0.7-15.9-1.6c-7.7-1.4-14.8-4.3-21.4-8.5
	c-2-1.3-4.2-2.4-4.5-5.2c1.3-4,2.4-8.1,4.8-11.7c2.4-0.8,4.2,0.8,6,1.8c6.8,3.8,13.8,7,21.5,8.5c13.1,2.5,14.5,1.8,18.7-10.2
	c0.4,0.4,0.8,0.7,1.2,1c-0.1-0.4-0.3-0.8-0.4-1.1c-4.8-4.6-10.8-6.1-17.1-6.9c-3.3-0.4-6.6-1.2-9-4c-2.5-5.7-7.9-9.8-8.9-16.3
	c-0.4,0.1-0.8,0.1-1.2-0.2c-1.2-8.4-6.8-14.7-10.6-21.8c-9.4-17.5-20.9-33.6-35.5-47.3c-14.2-13.4-30.7-22-50.5-24.1
	c-31.4-3.3-59.5,5.4-84.2,24c-16.2,12.2-29.9,27.2-39.4,45.5c-0.7,1.3-1,3.4-3.3,3.3c16.1-48.8,46.6-82.6,98.9-92.6
	c34.1-6.5,61,6.3,82.5,32.5c12.2,14.8,22,31.1,31,47.9c4.7,8.8,9.9,17.2,15.8,25.2c0,0,0,0,0,0c0,0,0,0,0,0c1.6,1.5,3.3,2.9,4.7,4.5
	c19.1,21,60.6,23.8,78.6-9.2c2.5-4.7,5.3-9.2,8-13.8c0-0.1,0.4-0.1,0.5,0c0.2,0.1,0.3,0.3,0.4,0.4c0,0,0,0,0,0c0,0,0,0,0,0
	c7.7,9.3,12.9,10.3,27.3,3.7c8.9-4,8.8-4,11.5,5.3c1.2,4.2,2.2,8.4,3.9,12.4c4.6,10.9,13.3,13.7,23.5,7.8c1-0.6,2.1-1.1,3.1-1.7
	c1.8,0.1,2.2,1.5,2.4,2.9C447,293.4,445.6,300,444.2,306.5z"/>
<path style="fill:#C61441; transform:scale(0.2)" :class="ValueId+'_color2'" d="M506.5,148.3c-2.2-18.4-21.2-32-39.5-28.2c-15,3.1-25.9,12.5-35.9,23.3c-21.7,23.4-33,52.6-44.6,81.5
	c-0.3,0.9-0.2,1.9-0.2,2.9c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,3.9,0.7,7.4,1.8,11c1,3.1,2.7,4,5.8,2.4c4.2-2.2,8.6-4.2,13.1-5.8
	c10.2-3.6,17.4-0.2,21.3,10c2,5.2,3.2,10.6,4.7,15.9c0.8,2.8,1.7,4.1,4.7,1.7c4.8-3.8,9.8-7.5,15-10.6c10.3-6.1,18.1-3.5,23.3,7.3
	c1,2,1.8,4,2.5,6c4,11.7,4.1,11.7,12.6,2.1c3.5-4,7.4-8,5.7-14.2c-1.4-5.4-2.5-10.8-4.3-16c-5.5-16.4-4.3-32.2,3.3-47.8
	c5.6-11.3,9.1-23.2,9.8-35.8c0,0,0,0,0,0C506.9,152.2,506.7,150.2,506.5,148.3z"/>
<path style="fill:#C61441; transform:scale(0.2)" :class="ValueId+'_color2'" d="M482.3,153.4c-0.6,4.5-3.7,6.7-7.8,6.8c-3.4,0.1-6.7,0.2-10.1,0.5c-3.5,0.3-6.4-1-7.8-4.3
	c-1.6-3.5-1.3-7,1.4-10c1.2-1.4,3.5-1.9,3.5-4.2c3,1.7,5.6,0.6,8.1-1.3c2,2.5,5.2,2.2,7.8,3.4C481.4,146,482.9,149.1,482.3,153.4z"
	/>
<path style="fill:#C61441; transform:scale(0.2)" :class="ValueId+'_color2'" d="M406.3,94.2c7.6,6,17,8.4,25.5,12.6c5.2,2.5,8.7,2.3,13.5-0.3c18.2-9.7,36.7-10.5,55.1-0.1
	c3.2,1.8,4.2,0.3,5.2-2.2c3.7-8.9,5.9-18.1,4.8-27.8c0,0,0,0,0,0c0,0,0,0,0,0c-0.2-7.8-2.5-14.8-7.2-22.1c-2.3,5-4,9.2-6.2,13.2
	c-7.1,13.1-19.6,14.3-28.5,2.4c-4.6-6.1-8.2-13.1-12.5-19.5c-2.5-3.7-4.7-9-10-8c-5.3,1.1-5.9,6.9-7.2,11.4
	c-1.7,6.1-1.8,12.5-4.4,18.4c-3.7,8.3-12.1,10.3-19,4.3c-2.1-1.8-3.9-4-5.8-5.9c-3.1-3-5.5-6.8-9.1-9.3c-2.1-1.4-4.3-2.1-6.7-1
	c-2.5,1.2-3,3.5-2.9,6c0.1,5.9,1.5,11.3,5.1,16.1C397.8,87.5,402,90.9,406.3,94.2z"/>
<path style="fill:#C61441; transform:scale(0.2)" :class="ValueId+'_color2'" d="M546.9,241.6c-1.2-5.7-3.5-10.8-7.7-15c0,0,0,0,0,0c-6.3-9.3-15-16.1-23.7-22.9
	c-3.1-2.4-3.3-0.2-4.1,2.1c-4.6,12.9-0.3,23.9,7.2,34.2c3.1,6,7.7,10.4,13.8,13.3c3.5,1.6,7.5,2.4,10.7-0.4
	C546.4,250,547.8,246,546.9,241.6z"/>
<path style="fill:#C61441; transform:scale(0.2)" :class="ValueId+'_color2'" d="M137.6,214.8c-1.4,1.1-2.9,2.1-4.3,3.2c-29.3,21.5-44,51.5-50.7,86.2l0,0c0,0,0,0,0,0
	c-0.4,1.5-0.8,3-1.2,4.5c-1.7,7.4-0.6,15.3-3.6,22.5c5.5,3.4,9.5,8.6,15.3,11.5c-0.1-9.8,1.5-19.4,2.4-29c0,0,0,0,0,0
	c0.4-1.5,1-3,1.3-4.6c3.7-17.6,10.6-33.8,21.2-48.5c9.4-13,21.1-23.5,34.2-32.6C148.1,222.8,142.5,219.1,137.6,214.8z"/>
<path style="fill:#FBD62D; transform:scale(0.2)" :class="ValueId+'_color3'" d="M530.1,149c-4.5-1.7-6.9-0.8-7.5,4c-0.7,4.8-1.2,9.7-2,14.5c-0.6,3.7,1.4,4.6,4.5,4.6
	c14.3,0,28.6,0,43.7,0C557.6,161,544.3,154.3,530.1,149z M182,256.7c-12.7,7.5-24.8,15.7-33.4,28.1c-9.6,13.8-14.8,29.2-17.3,45.7
	c0,0,0,0,0,0c0,0,0,0,0,0c-1.6,10.5-0.7,21.1-1,31.7c-5.2-2-10.3-4-15.5-6c-1.5-10.2-1.5-20.4,0.3-30.6c0,0,0,0,0,0
	c3.5-32.8,18-59.1,45.3-78.2c2.6-1.8,5.3-3.4,8-5.1C172.9,247.2,177.4,252,182,256.7z"/>
<path style="fill:#B0EFA7; transform:scale(0.2)" :class="ValueId+'_color6'" d="M196,272.1c-2.8,1.8-5.6,3.7-8.5,5.4c-21.7,12.1-33,31-35.8,55.3c0,0,0,0,0,0c0,0,0,0,0,0
	c-1.6,2.3-0.8,5-1,7.5c-0.7,9,1,18.2-0.9,27.2c6.2,0.1,12.4,0.1,18.6,0.2c0.4-10.4-0.7-20.8,1.3-31.2c0,0,0,0,0,0c0,0,0,0,0,0
	c5.3-22.3,16.8-39.9,38.3-49.8C204,281.8,200,276.9,196,272.1z"/>
<path style="fill:#F9D8C0; transform:scale(0.2)" d="M288,297.3c-5.2-1.6-9.2-5.1-13.1-8.8c0.8-2.3,1.7-4.6,2.5-6.9c0.4,0,0.7-0.1,1.1-0.1
	C281.6,286.8,286.1,291.3,288,297.3z"/>
<path style="fill:#780101; transform:scale(0.2)" :class="ValueId+'_color1'" d="M114.7,356.3c-1.7,4.1-3.6,8-8.7,8.8c-5.9,0.9-10.8-2.2-11.7-8.2c-0.8-4.7-0.8-9.5-1.2-14.2
	c-2.4-3.8-1.7-8-1.3-12c0.6-5.2,1-10.5,2.1-15.7c4.1-21.9,12.2-42.2,26.3-59.7c9-11.2,19.4-20.8,31.6-28.5c3.2-2,6.4-4,10.5-3.4
	c9,1.4,12.5,10.5,7.4,19.1c-7.8,6.6-16.8,11.7-24,19.2c-17.8,18.3-26.7,40.2-29.2,65.2c-1.2,8.1-1.3,16.2-0.7,24.3
	C115.8,353,116.3,354.9,114.7,356.3z M81.7,321c0.3-5.4,1.2-10.6,2.1-15.9c5.8-29.3,17.4-55.6,39.2-76.8c4.9-4.7,10.9-8.1,15.5-13
	c3.8-6.3,3.6-10.6-0.9-15c-4.3-4.2-9.7-4.8-15.3-1.4c-6.6,4.1-12.8,8.9-18.1,14.5c-19.7,20.8-32.8,45.2-40.2,72.8
	c-2.2,8.3-5.2,16.4-4.1,25.2c-0.1,3.2,0.2,6.4-0.4,9.5c-1.1,5.5,0.1,9.9,4.9,12.9c5.1,3.1,9.5,1.1,13.5-2.5
	C81.3,328.7,81.4,324.7,81.7,321z M152.5,359.2c0.3-8.3-0.4-16.7,0.3-25c0.6-2.9,0.9-5.9,1.6-8.8c3.6-17.2,11.9-31.3,26.3-41.8
	c5.4-4,12.1-6.2,16.6-11.4c3.2-6.2,2.9-10.6-1-14.6c-4.2-4.3-9.1-4.3-14.2-2.2c-31.8,15.6-47.7,42-52.3,76.1
	c-1.3,10.3-2.4,20.5,0.6,30.7c0.3,5.4,2.5,9.6,8.1,10.9c5.2,1.2,9.2-0.9,11.6-5.8C152.7,365.3,152.4,362.2,152.5,359.2z
	 M190.5,350.4c1.1-19.3,8-35,26.7-43.5c2.8-1.3,5-3.1,6.5-5.9c3.8-7.3-1-15.9-9.3-16.3c-2-0.1-4,0-5.9,0.5
	c-6.8,2.8-13,6.4-18.5,11.5c-12.1,11.2-18.7,25.2-22,41c-1.4,10-2.6,19.9,0.5,29.8c0.7,4.5,2.4,8.2,7.2,9.6
	c11.4-0.5,13.2-2.4,13.3-14.1c0-1,0.1-1.9,0.2-2.9C191.4,357.2,190.3,353.7,190.5,350.4z M430.1,318.4c-2.4,9.5-6.2,18.5-12.1,26.3
	c-30.5,40-70.7,60.7-121.5,58.2c-18.7-0.9-36.1-7.4-51.5-18.4c-5.7-1.2-11.1-1.5-14.1,4.8c-2.5,5.2-0.9,9.4,3.4,12.9
	c22.2,14.6,46.4,22,73,21.5c4-0.1,8,0.1,11.9-0.4c29.1-3.6,55.8-13.6,79.8-30.7c23.7-17,41.7-38.3,50.4-66.7
	c2.7-8.7-0.2-17.1-11.8-16C433.4,311.2,431.2,314.2,430.1,318.4z M238.4,355.4c-3.2,5.7-1.7,10,5,14.8c1.4,1,2.7,2.2,4.1,3.3
	c3.6,1.7,7.1,3.6,10.7,5.2c13.4,6.1,27.5,8.8,42.2,7.8c7.7-0.5,11.6-3.8,11.9-9.8c0.4-7-3.9-11-11.7-10.6
	c-17.5,0.9-33.4-3.1-47.2-14.1C246.1,349.2,241.2,350.3,238.4,355.4z M246.8,323.4c-3.2,4.9-2,9.5,3.7,14.3c2,1.6,4.1,3,6.1,4.6
	c13.6,7.4,27.8,12.6,43.6,12.1c8.3-0.3,13.1-4.1,12.9-10.7c-0.2-6.7-4.2-9.6-12.8-9.7c-14.3-0.2-27.4-4.2-38.6-13.3
	C255.3,317.3,250.2,318.3,246.8,323.4z M274.9,288.5c-6.8-4.1-12.2-3.6-15.7,1.2c-3.7,5.2-2.3,10.5,4,15.9c1.2,1,2.3,2.2,3.4,3.3
	c9.5,6.2,19.6,10.9,31,12.7c10.9,1.8,15.7-1.7,15.9-12.7c-2-4.6-5.3-6.8-10.4-7.3c-5.2-0.5-10.6-1.2-15.1-4.4
	C284,293.9,280.3,289.8,274.9,288.5z M460,143.2c-5.4,3.2-7.4,7.6-5.7,12.9c1.5,4.6,6.2,7.3,12.1,6.2c2.6-0.5,5-0.2,7.6-0.2
	c5,0,8.8-2.3,10.1-7.6c1.3-5.5-1.2-10.4-6.2-12c-2.6-0.9-5.4-1.1-8.2-1.6c-2.8,0.4-5.5,0.9-8.3,1.3
	C460.9,142.5,460.5,142.9,460,143.2z"/>
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
                                    <button :style="{background:'rgba('+getterChickenBg1+')'}" @click="ShowElement(getterChickenBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChickenBg2+')'}" @click="ShowElement1(getterChickenBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChickenBg3+')'}" @click="ShowElement2(getterChickenBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChickenBg4+')'}" @click="ShowElement3(getterChickenBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChickenBg5+')'}" @click="ShowElement4(getterChickenBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChickenBg6+')'}" @click="ShowElement5(getterChickenBg6)" :class="this.ValueId+'_color6btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChickenBg7+')'}" @click="ShowElement6(getterChickenBg7)" :class="this.ValueId+'_color7btn'"></button>
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
        var Chicken= [
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
            var randomNumber = Chicken[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Chicken[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Chicken'){
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
                getterChickenBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Chicken') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChickenBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Chicken') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChickenBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Chicken') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChickenBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterChickenBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChickenBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChickenBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
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
                            name:'Chicken',
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