<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#B37900;transform:scale(0.2)"  :class="ValueId+'_color5'" d="M310.7,86.1c5.3-14.5,17-20.9,31.6-16.5c56,16.7,111.9,33.4,167.8,50.3c15.6,4.7,21.7,17.5,16.8,34
	c-25.2,84.1-50.4,168.2-75.6,252.3c-15.6,52.1-31.2,104.3-46.9,156.4c-5.1,16.9-17.1,23.3-34,18.3c-21.3-6.3-42.6-12.5-64-18.8
	c-7.8,0.3-14.7-3.2-21.9-5.2c-26-7.5-51.8-15.5-77.8-23.1c-8.7-2.6-16.1-6.8-20.1-15.5c-2.4-5.3-1.4-11-1.7-16.5
	c0.2-3.2,1.4-6.2,2.2-9.3c1.3-5.1,0.7-6.1-4.6-6.2c-10-0.2-19.9,0-29.9-0.1c-11.1,0-22.3,0.1-33.4-0.1c-6.9-0.1-8.3-1.7-8.6-8.5
	c-0.1-1.8-0.1-3.6-0.1-5.4c0-133.2,0-266.4,0-399.6c0-2.4-0.2-4.8,0.2-7.2c0.3-1.9,0.2-4.2,3-4.5c1.9,1.9,1.8,4.3,1.8,6.7
	c0,15.7,0.3,31.4-0.1,47.1c0.3,3.2,0.2,6.4,0.2,9.6c0,115.1,0,230.2,0,345.3c0,11.4,0,11.4,11.5,11.4c18.5,0,37,0,55.6,0
	c3.6,0,7.3,0.2,9.2-3.9c2.3-6.5,4-13.2,6.2-19.7c2.4-8.3,4.8-16.7,7.3-25c2.2-7.1,4.2-14.2,6.4-21.3c3.1-10.1,6.1-20.2,9-30.3
	c1.9-7.5,4.8-14.6,6.6-22.2c2.9-9.1,5.4-18.4,8.3-27.5c2.1-6.8,4.1-13.6,6-20.4c2.6-6.7,3.7-13.8,5.9-20.6
	c6.4-19.1,11.8-38.5,17.1-57.9c6.4-21.4,15.1-42.2,13.6-65.5c-1.1-17.4-0.3-35-0.2-52.5C277.7,98.6,278,83,278,67.5
	c0-2,0.1-4,1.1-5.8c1.1-1.5,2-0.9,2.7,0.3c1.2,2,1.1,4.2,1.1,6.4c0,33.8,0,67.7,0.1,101.5c0,3.1-1.4,6.1-0.2,9.2
	c-0.9-3,0-5.9,0.9-8.8c7.7-25.7,15.3-51.5,23.1-77.2C307.4,90.6,308.2,87.9,310.7,86.1z"/>
<path style="fill:#DFBA69;transform:scale(0.2)"  :class="ValueId+'_color1'" d="M113.8,61.3c-2.3,1.6-1.2,4-1.2,6.1c0,136.6,0,273.2-0.1,409.8c0,5.9,1.8,7.2,7.4,7.1
	c21.9-0.3,43.8,0,65.7-0.2c5.2-0.1,6,1.5,4.5,6c-1.5,4.3-3.4,8.5-3.6,13.2c-0.1,0.2-0.2,0.4-0.2,0.6c-1,11-1,11-12.6,11
	c-21.3,0-42.6,0-63.9,0c-14.7,0-21.5-5-26-18.7c-0.1-17.9-0.2-35.8-0.2-53.7c0-126.3,0-252.6,0-378.9c0-4.4-0.2-8.9,0.7-13.1
	c2.4-11.1,11.9-18.3,24.1-18.3c34.5-0.1,68.9-0.1,103.4-0.1c24.7,0,49.4-0.1,74.1,0.1c14.1,0.1,23.8,10.3,24,24.4
	c0.1,8,0,15.9,0.1,23.9c0,1.9-0.6,4,0.8,5.7c-9.6,31.9-19.2,63.9-28.8,95.8c-0.3-0.1-0.6-0.1-0.9-0.2c0-22,0-44.1,0-66.1
	c0-16.3,0.1-32.6,0-48.9c0-1.8,1-4-1.2-5.4c-2.4,2-5.2,1.7-8,1.7c-50,0-100,0-150,0C119,63,116.1,63.3,113.8,61.3z M428,204.5
	c0.5,7.6-1.6,14.5-5.6,20.9c-1.7,2.8-1.7,4.5,2,5.7c3.6,1.2,6.9,3.1,10.2,4.8c6,3.1,8.2,7.4,6,13.8c-12.1,34.4-21.6,69.7-38.3,102.5
	c-18.6,36.6-35.4,74.2-53.1,111.4c-1.5,3.1-1.2,6.2-1.3,9.3c-0.3,10.4-5.5,19.9-20.3,14.9c-11.2-3.8-22.7-7-34.1-10.3
	c-14.4-4.2-18.3-12.7-9.6-24.6c3.6-5,4.5-10,5.2-15.2c4.2-28.5,8.1-57.1,12-85.6c2.9-21.1,5-42.4,8.7-63.4
	c2.6-14.8,7.4-29.1,11.2-43.7c2.2-8.4,4.5-16.8,6.7-25.3c2.4-9.3,4.9-11.1,14.7-10.3c1.6,0.1,3.1,0.7,4.6,1c8.2,1.3,9,0.2,10.4-7.8
	c4-22.6,23.7-40,46.5-33.9C418.3,172.4,428,186.8,428,204.5z"/>
<path style="fill:#151515;transform:scale(0.2)" :class="ValueId+'_color6'" d="M193.7,475.8c-8,0-15.9,0.1-23.9,0c-9.4-0.1-14.4-5.1-14.3-14.4c0-5.5,0.4-10.6,2.5-16.1
	c1.8-4.7-0.9-11.1-1.8-16.7c-3-19.9-6.1-39.8-9.2-59.7c-2.4-15.8-4.9-31.6-7.4-47.4c-3.1-19.3-6.2-38.6-9.3-57.9
	c-2.1-13.6-1.9-27.3-2.6-40.9c-1.1-18.6,0.1-37.3-2.1-55.9c-0.4-3.7-0.1-7.5,1.2-11.2c1.2-3.5,3.3-5.4,7.1-4.8
	c1.7,1,2.3,2.7,2.7,4.5c0.6,5.4,0.3,10.7,0.3,16.1c-0.5,11,0.6,22,1.2,32.9c0.2,8.2-0.2,16.4,0.7,24.6c0.1,8.7,0.4,17.4,2.4,26
	c1.5,8.6,3,17.3,4,26c1.1,8.9,2.4,17.8,4.3,26.6c1.3,7.9,2.3,15.9,3.8,23.8c0.7,8.4,2.1,16.7,3.6,25s2.9,16.7,3.9,25.1
	c1,9.7,2.8,19.2,4.6,28.7c1.1,6.9,1.9,13.9,3.3,20.8c0.7,3.6,0.3,7.1-1.5,10.4c-1.2,2.1-1.6,4.5-1.6,6.9c-0.1,6.2,1.3,7.8,7.5,8.1
	c6.3,0.3,12.7,0,19,0.1c2.5,0,5.2-0.3,7.4,1.4C197.6,463.7,195.7,469.8,193.7,475.8z"/>
<path style="fill:#CB8C01;transform:scale(0.2)"  :class="ValueId+'_color2'" d="M83.7,496.1c1.4,2.4,2.5,5,4.2,7.1c4.9,6.1,10.9,10,19.3,9.9c23.4-0.2,46.9-0.2,70.4,0
	c5.4,0.1,9.1-0.5,7.8-7.2c-0.2-0.8,0.6-1.8,1-2.7c0.5,17.2,4.4,23.4,18.2,28.1c7.5,2.6,15.2,4.4,22.8,6.7c26.3,8,52.6,16,78.9,24
	c-4,6.7-10.3,9.2-17.7,9.2c-61.3,0.1-122.6,0.1-184,0c-12.9,0-21-8.1-21.1-20.8C83.5,532.3,83.7,514.2,83.7,496.1z M193.7,475.8
	c0.1,5.5-2.3,7.4-8,7.3c-22.1-0.3-44.2-0.2-66.3-0.1c-3.7,0-5.8-0.4-5.8-5c0.1-121.1,0.2-242.2,0.2-363.3c0.6-0.5,1.2-1.2,2-1.2
	c13.1-0.7,26.2-1.7,39.3,0.5c0.8,0.6,1.5,1.5,1.4,2.4c-0.9,8.4,0.4,16.8,0.1,25.1c-1.5,3.3-4.6,3.3-7.5,3.6
	c-5.8,0.6-11.3,1.8-15.3,6.5c-5.8,2.6-6.4,7.8-6.2,13.1c1.4,25.2,1.6,50.4,2.4,75.7c0.7,20.9,5.2,41.4,8.5,62
	c7.1,45.4,14.1,90.8,21.3,136.2c0.5,3.4,0.6,6.6-0.9,9.9c-2.4,5.3-1.9,11-1,16.5c0.8,5.1,5.2,8.3,11.3,8.8
	c5.8,0.4,11.5,0.1,17.3,0.2C189,474.2,191.7,473.8,193.7,475.8z M155.5,114.9c-13.9,0-27.8-0.1-41.7-0.1c0-17.8,0-35.6,0-53.4
	c39.8-0.1,79.6-0.2,119.4-0.2c15.5,0,31,0.1,46.6,0.2c0,17.8,0,35.6,0,53.5c-1.5,1.5-3.4,1.9-5.4,1.9c-11.4,0-22.9,0.6-34.3-0.3
	c-3.8-0.8-4.5-4.1-5.7-7.1c-3.1-7.9-7-15.2-14.8-19.5c-2.9-1.4-4.8-4.1-7.5-5.7c-10.5-6.5-20.9-6.3-31.1,0.4
	c-2.3,1.5-4.4,3.3-6.7,4.8c-8,4.9-12.2,12.6-15.6,20.9C157.8,111.9,157.8,114.1,155.5,114.9z M238,114.9c13.9,0,27.8-0.1,41.7-0.1
	c0,24.1,0,48.1,0.1,72.2c0,4.9-2.4,9.2-3.6,13.7c-2.6,9.5-5.5,19-8.4,28.5c-0.5,1.5-1,3-2.3,4.1c-1.9-1.7-1.7-3.9-1.8-6.1
	c-0.3-20.9,1.5-41.7,1.7-62.5c0-4.1-0.1-7.9-2.4-11.3c-2.8-0.1-2.1,3.5-4.3,3.6c-1.4-0.7-1.7-2-1.9-3.3c0.2-5-2.7-6.7-7.3-7.6
	c-4.3-0.8-9.4,0.5-12.5-4.2C237.6,132.9,236.2,123.8,238,114.9z"/>
<path style="fill:#151615;transform:scale(0.2)"  :class="ValueId+'_color6'" d="M258.6,156.6c1.8-2.2,0-5.1,1.5-7.3c5.4,2.2,8.7,7.9,7.4,13.8c-0.7,3.2-0.8,6.3-0.7,9.5
	c0.7,20.3-2.1,40.5-1.2,60.7c-1,9.5-4.6,18.4-7.3,27.5c-2.9,10-5.2,20.3-9.4,29.9c-0.5-4.5,1.9-8.7,1.1-13.2
	c-1.3-7.9,1.5-15.3,2.4-23c2-8.2,1.9-16.5,1.9-24.8c-0.1-2.9-0.1-5.8,0.5-8.7c0.2-1.2,0.7-2.3,0.7-3.5c-0.9-17.4,1.8-34.8,1.2-52.2
	C256.5,162.1,255.9,159,258.6,156.6z"/>
<path style="fill:#151616;transform:scale(0.2)"  :class="ValueId+'_color6'" d="M164.1,128c0,4.6,2.6,8.4,4.2,13c-4.4,0-8.4,2-12.7,1.3c-1.1-9.1-2.2-18.3-0.1-27.4
	c2.8-9,6.5-17.4,13.7-23.9c1.2-1.1,2.1-2.4,3.9-2.5c1.4,2.3-0.6,3.6-1.7,5.1c-2.5,3.6-4.3,7.4-5.2,11.7c-1.5,6.2-2.5,12.4-1.4,18.7
	C165.1,125.4,165,126.8,164.1,128z"/>
<path style="fill:#151615;transform:scale(0.2)"  :class="ValueId+'_color6'" d="M228.2,104.1c-0.8-6.2-4.7-10.7-8-15.6c8.3,4.1,12,11.7,15.3,19.7c0.9,2.2,1.6,4.5,2.5,6.7
	c1.9,9.2,1.3,18.3-0.1,27.5c-4.4,0.6-8.4-1.4-12.9-1.4c1.6-4.9,4.5-9.1,4.4-14.2C229,119.2,227.5,111.7,228.2,104.1z"/>
<path style="fill:#CBD0D8;transform:scale(0.2)"  :class="ValueId+'_color3'" d="M244.3,277.9c-6.7,2.3-13.1,0.4-19.8-0.3c-6.5-0.7-13.4,3-20.4,1c-0.4-0.1-0.8-0.3-1.1-0.5
	c-2.2-1.5-4.4-1-6.8-0.1c-5.2,2-10.7,2.1-15.8,0.5c-3.2-1-5.8-1.4-9-0.1c-4.7,1.8-10.2,2.1-14.6,0.2c-5.4-2.3-9.1-0.6-13.1,2.4
	c0.9,8.9,1.8,17.9,4.4,26.6c2,0.4,3.9,0.4,5.9,0.4c25.7,0.1,51.4,0.1,77-0.1c4.3,0,8.3,0.6,11.7,3.3c3.1-6.5,3.9-13.7,6-20.6
	c0.6-4.3,3.5-8.4,1.6-13C248.3,275.8,246.4,277.2,244.3,277.9z M155.6,356.3c5.4,1.6,10.8,4.5,16.4,3.2c3.9-0.9,7.9-2.3,11.6-1.4
	c6.8,1.6,13.3,1.1,20.2,0.1c7.4-1.1,14.9,3.2,22.5,0.5c0.6-0.2,1.5,0.3,2.3,0.5c3.3-9.1,6-18.4,8.3-27.8c-28.4,0-56.7,0-85.1,0
	C152.2,339.7,153.6,348.1,155.6,356.3z M217.1,380.7c-3.4,2.7-7.2,2.1-10.8,1.9c-8-0.4-16-1.1-23.9,0.1c-6.4,0.9-12.7-2.5-19.2-0.1
	c-1,0.4-2.6-0.7-3.9-1.1c1,9.7,2.1,19.3,4.7,28.7c0.5,0.3,1,0.7,1.6,0.6c12-2.7,24.2-0.1,36.3-1.2c3.8-0.4,7.5,0.3,11,1.9
	c3.7-9.8,6.3-20,9.2-30.1C220.6,380.4,218.6,379.5,217.1,380.7z M183.8,432.8c-5.6-0.2-11.5,1.6-16.6-2.2c0.1,4.1,0,7.6-2.5,11.6
	c-5.2,8.2-0.4,15.5,9.2,15.5c8.5,0,17.1,0,25.6-0.1c2.4-8.3,4.8-16.5,7.2-24.8C199.1,432.8,191.4,433,183.8,432.8z M252.3,144.8
	c-4.8-0.6-9.7-0.7-14.4-2.5c-1.1-1-2.4-1.3-3.8-1.6c-6.2-1.3-6.1-1.3-4.4-7.7c0.6-2.5,2.5-5.5-1.6-7c-16.1,0-32.1,0-48.2,0.1
	c-4.9,0-9.9-0.6-14.8,0.7c-1.7,0.7-2.8,2.4-2.1,3.7c5,8.9-1.5,10.1-7.5,11.8c-4.2,1.7-8.8,1.9-13.2,2.4c-4.1,0.5-7.2,1.7-8.3,6
	c0.4,1.2,0.8,2.4,1.2,3.6c2.3,1.2,4.7,0.5,7.1,0.6c4,0.1,8-0.6,11.8,0.9c2.8,1.1,5.4,0.4,8.1,0.1c12.9-1.1,25.9-0.1,38.8-0.4
	c0.8,0-0.2,0.1,0.6,0.1c10.3,0.6,20.6-0.6,31.1,0.2c5.9,0.5,12.1-1.6,18.2,0.4c3.4,1.1,5.8,0.3,7.4-3
	C259.9,147.8,257.3,145.5,252.3,144.8z M227.4,104.7c2.8-1.2,1.5-3.2,1-5c-1.4-4.7-4.5-8.2-8.2-11.2c-2.3-1.9-4.4-4-6.9-5.6
	c-11.4-7.3-25.4-8.5-40.2,5.6c-3.3,4.9-7.2,9.4-7.9,15.6c1.1,0.6,2.3,0.6,3.5,0.6C188.2,104.9,207.8,104.8,227.4,104.7z
	 M255.6,169.2c-0.2,6-4.4,8.3-9.1,8.2c-11.2-0.1-22.4-0.6-33.6,0.1c-0.6,0-1.2-0.1-1.7-0.3c-3.3-1.4-6.5-0.4-9.8-0.3
	c-12.7,0.6-25.5,0.6-38.2,0c-3.1-0.1-6.1-0.6-9.3,0c-6.8,1.2-14.2,3.4-17.8-5.7c0-0.1-0.4-0.1-0.6-0.1c-0.3,11.2-0.1,22.3,1.2,33.5
	c1.6,1.5,3.5,1.7,5.5,1.7c21.1,0.5,42.1,0,63.2,0.2c14.3,0.2,28.6-0.3,42.9,0.1c5,0.2,6.1,2.2,6,6.5c-0.1,2.9-0.7,6,1.9,8.4
	c1.4-18.8,2.1-37.6,2-56.5C255.6,165.4,255.6,167.5,255.6,169.2z M251.2,227.4c-16.5,0.5-32.9,0.1-49.4,0.1c-14.3,0-28.6,0-42.8,0
	c-7.2,0-14.7-1.3-21.6,2c-0.8,8.6,0.3,16.9,2.5,25.2c5,1.3,9.5,4.9,15.1,3.1c6.2-2,12.4-2.5,18.5,0.3c2.1,0.9,3.8,0.2,5.7-0.4
	c6.6-2.1,13-0.5,19.7,0.4c6.2,0.8,13-2.8,19.8-1.2c0.6,0.1,1.1,0.4,1.6,0.7c2.2,1.4,4.4,1.1,6.8,0.1c5.3-2.1,11.1-2.4,16.3-0.3
	c4.6,1.9,7.5,0.8,10.3-2.7c2.6-8.2,2.7-16.6,2.3-25.1C254.6,228.2,253.1,227.4,251.2,227.4z"/>
<path style="fill:#FCFCFC;transform:scale(0.2)"  :class="ValueId+'_color4'" d="M148.2,307.6c6.8-3,14-1.1,21-1.3c9.5-0.3,19,0,28.5,0c13.3,0,26.6,0,39.9-0.2
	c3.8-0.1,4.7,2.2,5.3,5.1c-1.4,6.9-3.4,13.6-6,20.1c-2,1.7-4.4,1.8-6.8,1.8c-23.5-0.1-46.9-0.1-70.4,0c-2.8,0-5.6,0.2-8-1.8
	C150.1,323.4,148.6,315.6,148.2,307.6z M155.6,356.3c4.4,0.5,9.2-1.5,13,2.6c0.3,0.3,1.6,0.2,2.2-0.2c7.3-3.5,14.6-4.3,21.8,0.2
	c0.5,0.3,1.6,0.1,2.2-0.3c7.1-3.5,14.2-4,21.3,0.1c2,1.2,3.2-0.7,4.8-1.4c2.9-1.3,6-2.8,7.8,1.7c-2.2,7.4-4.3,14.8-6.5,22.3
	c-8.7,3.4-17.7,3.8-26.8,2.1c-3.8-0.7-7.4,0.8-11.2,1c-6.9,0.3-13.7-1.9-20.6-0.5c-1.8,0.4-3.5-0.5-4.2-2.5
	C158.1,373.1,156.8,364.7,155.6,356.3z M164,410.1c3.9-2.2,8.1-2.5,12.5-2.5c10.3,0.2,20.5,0.1,30.8,0c2.8,0,5.3,0.2,5.6,3.7
	c-1.4,7.3-3.8,14.4-6.2,21.4c-1.5,1.5-3.5,1.9-5.5,1.7c-8.7-0.6-17.3,0.3-26,0.1c-3.4-0.1-6.1-1.1-8-4.1
	C165.5,423.8,164.5,417,164,410.1z M258.1,165.1c-1.1,1.1-1.2,2.6-1,3.9c1.3,6.8-3.7,9.1-8.3,9.9c-5.4,1-11.4,2-16.8-1.1
	c-1.6-0.9-2.9-0.2-4.5,0.2c-6.5,1.9-13.1,2.8-19.5-0.3c-2-0.9-3.4,0.2-5,0.6c-6.2,1.6-12.4,2.2-18.5-0.4c-1.6-0.7-2.9-0.6-4.5-0.1
	c-6.7,2.3-13.4,2.7-20.1-0.3c-1.2-0.5-2.3-0.5-3.4,0.1c-5.2,3-10.9,1.2-16.3,1.7c-2.9,0.3-3.9-1.1-3.8-3.9c0.1-1.5,0.3-3.2-1-4.5
	c-0.1-5.6-0.2-11.2-0.2-16.7c7.1-1.5,14.3-2.8,21.3,0.7c1.1,0.6,2.3,0.4,3.4-0.1c6.8-2.9,13.6-3.1,20.4,0c1.1,0.5,2.3,0.5,3.4,0
	c6.8-3,13.6-3,20.4,0c1.2,0.5,2.3,0.5,3.4,0c7-3,14-3.2,21,0.1c1.4,0.7,2.6-0.2,3.9-0.7c6.3-2.2,12.8-2.6,18.8,0.2
	c3.2,1.5,4.8-0.4,6.9-1.6c0.1,1.2,0.2,2.3,0.4,3.5C258.5,159.4,258.3,162.2,258.1,165.1z M255.9,229.6c-3.5-1.6-7,0.3-10.5,0
	c-13.6-0.9-27.2-0.3-40.7-0.4c-10,0-20-0.3-30,0.2c-12.4,0.6-24.8,0.1-37.3,0.1c-0.8-8.3-1.1-16.7-0.8-25c19.3,0,38.6,0,57.9,0
	c19.2,0,38.5,0.1,57.7,0c3,0,3.7,1.3,3.7,4c-0.1,4.4,0.1,8.7,0.2,13.1C256,224.3,256,226.9,255.9,229.6z M139.8,254.8
	c3.7,0.4,8-1.6,11,2.5c0.2,0.3,1.7,0.2,2.1-0.2c4.1-3.6,9.4-3.3,13.6-2.1c7.2,2,14-0.5,20.9-0.2c3.7,0.1,8-1.8,11,2.4
	c0.2,0.3,1.7,0.3,2.1-0.1c4.3-3.6,9.8-3.4,14.2-2.1c8.2,2.3,16-1.1,23.9-0.3c2.4,0.2,4.8-0.4,7.1,1.9c3,3,4.8-2.5,7.8-1.9
	c-0.7,7.6-1.8,15.2-3.6,22.7c-5.8,3.3-12.1,4.3-18.8,3.6c-1.9-0.2-4,0.5-5.4-1.6c-1.2-1.9-2.6-1-4.1-0.4c-6.9,2.8-13.7,3.9-20.5-0.4
	c-0.5-0.3-1.6-0.4-2.2-0.1c-7.4,3.5-14.8,4.5-22.2-0.1c-0.5-0.3-1.5,0-2.2,0.3c-7.3,3.3-14.4,4.2-21.6-0.3c-1.2-0.7-2.4,0.1-3.2,0.8
	c-1.8,1.6-3.8,2-6.1,1.8C142.4,272.2,141.1,263.5,139.8,254.8z M228.2,104.1c2.4,7.5,3.2,15,1.3,22.7c-2.1,1.5-4.5,1.2-6.9,1.2
	c-19.5,0-39,0-58.5,0c-2-8.1-1.8-16,1.1-23.9c1.6-1,3.3-1.2,5.1-1.2c17.6,0,35.2,0,52.7,0C224.9,102.9,226.6,103.1,228.2,104.1z"/>
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
                                    <button :style="{background:'rgba('+getterMummyBg1+')'}" @click="ShowElement(getterMummyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMummyBg2+')'}" @click="ShowElement1(getterMummyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMummyBg3+')'}" @click="ShowElement2(getterMummyBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMummyBg4+')'}" @click="ShowElement3(getterMummyBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMummyBg5 +')'}" @click="ShowElement4(getterMummyBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMummyBg6+')'}" @click="ShowElement5(getterMummyBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMummyBg7+')'}" @click="ShowElement6(getterMummyBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMummyBg8+')'}" @click="ShowElement7(getterMummyBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Mummy= [
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
            var randomNumber = Mummy[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Mummy[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Mummy'){
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
                getterMummyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Mummy') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMummyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Mummy') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMummyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Mummy') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMummyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMummyBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMummyBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMummyBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMummyBg8: {
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
                    var background7Clone =tempArrayClone.background7 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Mummy',
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