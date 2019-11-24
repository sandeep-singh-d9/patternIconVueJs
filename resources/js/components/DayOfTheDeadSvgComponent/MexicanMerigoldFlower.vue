<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M29.4,403c0-2.1,0-4.1,0-6.2C36,369,49,344.7,69.1,323.7c-8.9-5.1-16.5-11.7-22.7-19.8
	C37,291.6,30.7,278,29.4,262.4c0-6.8,0-13.7,0-20.5c1.3-8.2,2.2-16.5,4.2-24.6c8.2-32.2,36.9-57.2,69.9-61.1
	c3.7-0.4,7.4-0.9,11.7-1.1c-4-8.2-7.4-15.8-9.8-23.8c-3.8-13-6.1-26.3-6.7-39.8c-0.2-4.9-1.2-9.8-0.9-14.8c0.5-8,3.9-11.4,11.9-11.6
	c24.1-0.7,47.3,2.8,69.6,12.4c7.3,3.1,13.9,7.4,20.3,12c4.5,3.2,4.6,3.2,6.2-1.7c9.3-28.3,28.4-46.4,56.6-55.5
	c4.6-1.5,9.4-2.1,14.1-2.1c11.6-0.1,23.2-0.7,34.8,0.4c16.7,1.5,30.7,9,43,19.8c11.8,10.3,19.9,23,24.3,37.9
	c1.1,3.8,2.5,4.2,5.6,1.8c18.9-14.6,40.9-20.8,64.1-23.9c8.7-1.1,17.4-1.1,26.1-1c8.1,0.1,12.1,3.5,12,11.4
	c-0.4,26-3.7,51.5-15.6,75.1c-0.5,1-1.5,1.9-1.2,3.6c11.3,0.4,22.3,2.1,32.7,6.8c27.7,12.3,44.3,33.3,50,63.1
	c2.3,12.1,3.6,24.2,2.7,36.6c-1.1,17-8.4,31.1-18.6,44.1c-5,6.4-11,11.8-17.9,15.9c-3.1,1.9-2.6,3-0.4,5.2
	c17.8,18.8,28.8,41.4,36.3,65.9c0.4,1.3,0.5,2.7,0.7,4c1.1,7.8-0.5,10.8-8,13.1c-18.7,5.7-37.8,9.3-57.5,8.9
	c-7.5-0.2-7.3-0.1-6.3,7.3c4.6,34.4-6.8,62.1-34.9,82.8c-9.5,7-18.8,14.3-30.3,18c-29.6,9.7-56.6,5.2-81.1-14.1
	c-4.2-3.3-4.2-3.4-6.9,1.3c-7.8,13.8-17.6,26-28.7,37.3c-2.1,2.1-4.3,3.8-7.2,4.7c-2.1,0-4.1,0-6.2,0c-7.7-3-12.2-9.7-17.4-15.4
	c-6.9-7.6-12.8-16-18-24.9c-2.7-4.7-2.9-4.8-7.1-1.5c-11.4,9-24.3,14.6-38.6,16.7c-23.4,3.4-44.4-2.1-63.2-16.3
	c-2.3-1.8-4.6-3.5-7-5.1c-27.9-18.8-41.7-52.3-35.3-85.4c1-5,0.9-5.3-4.4-5.1c-20.4,0.5-40.2-2.9-59.6-8.8
	C33.7,408.9,30.3,407.4,29.4,403z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M29.4,262.4c1.8,6.1,3.1,12.4,5.4,18.3c6.9,18.5,19,32.8,36.6,42.9C58,336.1,48.6,351,41,367.1
	c-4.6,9.6-7.5,19.9-11.6,29.8C29.4,352,29.4,307.2,29.4,262.4z"/>
<path style="fill:#FBD634;transform:scale(0.2)" :class="ValueId+'_color4'" d="M292.2,180.1c58-1.1,102.6,45.5,105,99.4c2.8,63.7-47.4,110.2-103.9,110.5
	c-58.9,0.3-104.5-45.7-106.1-101.8C185.4,226.9,234.1,178.9,292.2,180.1z"/>
<path style="fill:#E61F62;transform:scale(0.2)" :class="ValueId+'_color2'" d="M125.7,83.9c15.7,1.2,32.7,3.6,48.5,11.2c10.5,5,19.4,12.1,26.3,21.5c1.7,2.3,2.4,4.7,2.4,7.6
	c0.3,21.3,4.1,41.7,14.9,60.4c1.3,2.2,0.8,3.2-1,4.5c-2.9,2.1-5.5,6-8.4,6.2c-2.2,0.1-4.7-4.3-7.2-6.6
	c-15.5-14.6-34.5-22.4-54.7-27.5c-2.8-0.7-4.9-1.9-6.8-4c-11.5-13-16.8-28.7-19.8-45.4c-1.3-7.1-2.1-14.2-2.4-21.4
	C117.3,83.6,117.2,83.6,125.7,83.9z M466.9,89.8c1.1-4.9-0.5-6.5-5.6-6.1c-10.4,0.9-20.7,1.9-30.9,4.4
	c-18.4,4.5-34.6,12.5-46.2,28.1c-1.8,2.4-2.7,4.8-2.8,8c-0.3,21.2-4.1,41.7-14.8,60.4c-0.5,0.9-1.9,1.9-0.5,3.1c3,2.6,6,5.1,9,7.6
	c1.5,1.2,2.1-0.4,2.8-1.2c15.1-17.2,35-26.4,56.6-32c5.9-1.5,10.2-4.3,13.5-9.1c1.8-2.7,3.7-5.3,5.3-8.1
	c9.2-16.5,12.3-34.5,13.5-53.1C466.8,91.1,466.8,90.4,466.9,89.8z M412.3,342.1c24.5,10.9,42.1,29.4,56.1,51.6
	c2,3.1,4.2,4.6,7.6,5.1c18.9,3,37.4,0.4,55.8-4c2.4-0.6,3-1.8,2.2-4c-7.6-21.1-17.2-40.9-34.8-55.8c-3.3-2.8-6.2-3.5-10.6-2.3
	c-24.6,6.3-49.2,7.6-73.8-0.4c-8.9-2.9-8.8-3-12.5,6C405.7,339.5,409.1,340.6,412.3,342.1z M95.4,400c11,0.4,20.6-1.7,25.2-13.4
	c0.1-0.2,0.2-0.3,0.3-0.4c14.8-20.2,32.2-37.3,56.3-45.9c4.3-1.5,5.6-3.1,2.8-6.8c-1.1-1.5-0.3-5.2-4.5-3.5
	c-26.5,10.6-53.5,9.4-80.5,2.5c-3.7-1-6.3-0.4-9.2,2.1c-18.1,15-27.7,35.2-35.5,56.6c-0.9,2.5,0.4,3.3,2.5,3.8
	c12.5,2.9,25.1,5.4,38,5.2C92.3,400,93.8,399.9,95.4,400z M290.7,435.7c-3.8,20.6-13,38.7-25.3,55.4c-1.5,2-2.6,3.6-1.2,6.4
	c6.6,12.6,14.6,24.3,24.2,34.8c2,2.1,3.1,2.4,5.2,0.1c10.2-11.2,18.6-23.6,25.3-37.1c0.8-1.6,1.2-2.9-0.1-4.6
	c-13.6-18.4-23.2-38.4-27.1-61.3C291.3,431.4,291,433.5,290.7,435.7z"/>
<path style="fill:#03A9F4;transform:scale(0.2)" :class="ValueId+'_color3'" d="M188.1,220.6c-9.4-9.4-19.9-16.5-32.5-20.2c-2.8-0.8-5.6-1.5-8.5-2c-5.5-1-10.1,1.9-10.9,6.6
	c-0.9,5.1,1.8,9.3,7.4,10.3c11.7,2.2,22.1,6.7,30.4,15.6c5.7,6.1,5.9,7.7,2.1,15.2c-1.1,2.2-2.5,1.7-4.2,1.4
	c-13.1-2.5-26.2-4.9-39.2-7.4c-1.2-0.2-2.4-0.4-3.5-0.5c-5.5-0.4-9.3,2.4-10.1,7.3c-0.8,4.7,2.5,9,8.1,10.1
	c9.5,1.9,19.1,3.6,28.7,5.3c4,0.7,8,1.6,12.1,2.2c2.5,0.4,3,1.5,3.1,4.1c0.4,8.8-4.4,12.5-12.1,14.8c-9.1,2.7-18.1,3.2-27.3,1.3
	c-5.9-1.2-10.5,1.3-11.6,6.2c-1.2,5.2,1.9,9.4,8.1,10.8c12.9,2.9,25.5,1.6,37.8-2.8c3.6-1.3,4.6-0.7,5.1,2.9
	c1.7,11.4,1.9,11.5-9.6,14.9c-23,6.8-45.6,4.2-68-2.9c-14.2-4.5-26.5-11.8-35.4-24c-11.7-16.2-13.9-34.1-8.9-53.1
	c1.2-4.6,1.4-9.4,2.5-14.1c7.4-31.4,34.2-50.6,67.4-48.1c15.6,1.1,30.8,3.9,45.2,10.2c11.3,4.9,21.2,11.6,29.3,21
	c2.3,2.6,2.7,4.7,0.1,7.4C191.5,215.2,190,217.9,188.1,220.6z M228.1,492.9c11-12.8,19.6-27.1,25.1-43.2c0.5-1.6,1.8-3.5-0.9-4.5
	c-2.5,3.8-4.8,7.9-7.7,11.5c-2.8,3.5-6.7,3.9-10.7,1.9c-3.8-1.9-5-5.4-4.4-9.5c0.4-2.3,2.1-3.9,3.3-5.7c9.1-13.6,13-28.1,7.8-44.2
	c-0.6-1.9-0.9-4.5-3.2-4.9c-2.2-0.3-2.7,2.2-3.8,3.6c-9.3,12.7-18.6,25.4-27.9,38.1c-1.6,2.3-3.4,4.3-6.3,4.9
	c-3.9,0.7-7.1-0.4-9.3-3.8c-2.3-3.6-1.7-7.1,0.7-10.5c9.5-13,18.8-26,28.6-38.8c2.7-3.5,0.8-4.8-1.8-6.1c-1.3-0.6-3-0.5-4.5-0.4
	c-16.5,0.7-28.4,9.5-38,22.2c-3.7,5-8.6,6-12.8,2.9c-4.4-3.2-5-8.1-1.4-13.1c9-12.2,20.2-21.8,34.9-26.5c3.5-1.1,4.5-2.3,1.6-5.1
	c-1-0.9-1.9-2-2.6-3.2c-2.2-4.2-5.2-4.3-9.4-3.1c-8.6,2.6-16.5,6.6-23.6,12c-16.3,12.2-28.4,28-37.2,46.3
	c-14.9,30.6-4.7,64.3,24.5,81.1c1.7,1,3.3,2.4,4.8,3.8c14.8,12.4,31.5,18.1,50.9,14.1C214.5,508.3,221.4,500.7,228.1,492.9z
	 M417,501.7c33-22.1,42.3-64.4,22.2-98.7c-6.2-10.5-13.1-20.5-21.4-29.3c-7-7.4-14.4-14.6-24-18.8c-4,0.9-4.6,5.1-7.2,7.4
	c-2.8,2.4-1.8,3.5,1.4,4.5c13.8,4.4,24.7,13.1,33.5,24.3c5.5,6.9,5.5,11.9,0.5,15.5c-4.7,3.4-8.9,1.8-14.4-5
	c-9.5-11.8-21.2-19.7-37-20.2c-2.8-0.1-5.4,0.4-6.8,2.6c-1.6,2.5,1.3,3.9,2.5,5.5c9,12.5,18.1,24.9,27.2,37.3
	c2.4,3.4,3,6.9,0.7,10.5c-2.2,3.4-5.4,4.5-9.3,3.8c-2.9-0.6-4.6-2.7-6.3-4.9c-9.6-13.1-19.2-26.2-28.7-39.4
	c-2.6-3.5-4.1-2.9-5.4,0.8c-0.3,0.8-0.6,1.6-0.9,2.4c-5.2,16.8-0.6,31.6,9.3,45.4c3.5,4.8,2.8,10.1-1.5,13.1
	c-4.1,2.8-9.2,1.7-12.5-2.8c-6-8-10.2-16.9-12.9-26.6c-2.3-8.4-2-16.9-1.6-25.4c-13,2.1-13,2.1-14.3,14.6c-0.1,1.2-0.1,2.4-0.1,3.6
	c-0.1,13.8,3.8,26.6,10.2,38.8c9.2,17.7,21.1,33.3,38,44.2c12.8,8.3,26.9,11.5,42.1,8.3C406.5,510.4,411.4,505.4,417,501.7z
	 M494.3,309.9c17.4-15.2,27.2-33.9,27.2-57.4c0-9.2-2.9-17.8-4.1-26.8c-1.8-13-7.2-24.6-15.4-34.7c-5.4-6.6-11.3-12.9-19.8-15.6
	c-12.7-2.3-25.2-0.5-37.6,1.9c-18.4,3.6-35.3,10.5-49.1,23.7c-7.7,7.3-7.3,7.3-1.8,16c2.4,3.7,3.6,3,6.2,0.5
	c10.7-10.1,23.3-16.7,37.9-19.1c5.1-0.9,9.7,2,10.6,6.5c1,5-1.8,9.2-7.2,10.6c-1,0.2-2,0.5-3,0.7c-10.8,2-19.8,7-27.6,14.7
	c-4.3,4.2-6,8.1-2.8,13.8c1.4,2.5,2.1,3.6,5.2,2.9c13-2.7,26.2-5,39.2-7.5c0.7-0.1,1.4-0.2,2-0.3c6.2-0.7,10.3,1.8,11.3,7
	c0.9,4.8-2.6,9.2-8.4,10.3c-13.3,2.5-26.5,4.9-39.8,7.4c-1.3,0.2-2.8,0.1-3.6,1.5c-1.4,2.5,2.1,12.9,4.8,14.3
	c11.1,5.6,22.7,7,34.9,4.3c5.4-1.2,10,1.5,11.2,6.3c1.2,5.1-1.7,9.4-7.6,10.8c-11.4,2.7-22.7,1.9-33.9-1.2c-2.8-0.8-6.3-3-8.1-2
	c-2.5,1.4-1.1,5.7-2.2,8.6c-1.6,4.2,0.3,6.1,4.1,7.6c22.3,8.6,44.8,7.6,67.4,1.2C487.5,313.8,491.3,312.5,494.3,309.9z M347.9,131.7
	c0.6-14.4-0.1-28.7-4.3-42.6c-5.3-17.6-15.6-31.3-32-40.1c-2.6-1-5.3-1.2-8.1-1.1c-4.2,0.2-8.6,1-12.7,0.6
	c-30.1-3.6-56.5,12.6-66,41.1c-5.1,15.5-5.6,31.5-4.1,47.6c1,10.4,3.2,20.6,7.7,30.1c4.8,10.2,4.8,10,15.2,5.4
	c3.4-1.5,3.2-2.9,1.9-5.7c-4-9.2-6.1-18.8-5.9-28.9c0.1-6.7,3.5-10.9,8.9-10.8c5.2,0.1,8.7,4.2,8.6,10.6c-0.1,7.6,1.5,14.8,4.1,22
	c1.7,4.6,4.1,6,8.8,4.4c2.7-0.9,5.7-1.4,8.6-1.3c4.1,0.1,4.7-1.8,4.6-5.3c-0.2-9.4-0.1-18.8-0.1-28.2c0-7.1,3.1-10.9,8.7-11
	c5.8-0.1,9,3.8,9,11.2c0,9.1,0.2,18.1-0.1,27.2c-0.1,4.1,0.5,6.5,5.4,6.2c2.8-0.2,5.8,0.5,8.5,1.4c4.4,1.4,6.5-0.2,8-4.2
	c2.8-7.3,4.4-14.6,4.3-22.5c-0.1-5.9,2.9-9.7,7.7-10.4c4.5-0.6,7.9,2,9.8,7.7C347.4,135.9,347.8,135.7,347.9,131.7z M424.8,503
	c3.9-2.5,6.7-6.2,10.8-8.5c24.6-13.7,36.6-42.9,28-69.8c-7.2-22.6-20.9-40.9-39.3-55.6c-9-7.2-18.8-12.9-30.6-14.2
	c0.3,0.4,0.5,1,0.9,1.2c13.9,8.9,25.3,20.6,34.8,34c9.3,13,17.2,26.9,18.5,43.1c2.4,28.7-8.4,51.4-32.3,67.8
	c-5.4,3.7-10.6,7.9-15.8,11.9C409.3,512.1,417.1,507.8,424.8,503z M497.7,311.4c25.6-9.8,40.4-32.1,40-59.5
	c-0.1-7.3-2.8-14-3.5-21.1c-2.9-29.3-24.1-51.8-52.1-55.4c12.6,8.1,22.4,18.7,28.7,32.4c4.3,9.4,5.1,19.7,7.3,29.6
	c5.6,25.3-1.1,47-18.7,65.8c-4.6,4.9-10.2,8.4-15.3,12.5C488.9,315.1,493.3,313.1,497.7,311.4z M340.7,161.8
	c-3.2,9-2.9,8.8,5.6,13.6c4.2,2.4,5.4,0.7,7.1-2.7c5.6-11.3,9.1-23.2,10.2-35.7c1.5-17.7,1.2-35.3-5.9-51.9
	c-8.7-20.2-23.8-32.9-46-36.1c0.6,1.6,2.3,2,3.4,2.9c10.7,8.4,19.8,18,24.9,30.9c6.4,16.5,6.9,33.7,6.6,51.1c0,1.5-0.6,1.8-1.9,1.2
	C344.7,144.2,343.8,153.1,340.7,161.8z M227.1,504.2c22.5-16.1,37.7-37.7,45.3-64.4c2.8-10,3.8-20.4,0.3-30.7
	c-3.7-4.1-7.6-4.4-12.1-1c0.7,13.1-2.3,25.4-8.2,37.1c0.7,0.6,0.9,1.4,0.6,2.3c-6.1,17-15.1,32.3-27,46c-6.3,7.3-13.9,13-21,19.2
	C213.1,512,220.5,508.9,227.1,504.2z"/>
<path style="fill:#9325A6;transform:scale(0.2)" d="M272.6,409.2c-3.8-2.6-7.9-2.5-12.1-1c-0.2-1.5-0.3-3-0.6-4.9c3.6,0.7,6.8,1.5,10.1,2
	C272.5,405.6,273,407.1,272.6,409.2z"/>
<path style="fill:#C71A55;transform:scale(0.2)" d="M292.2,414.8c-0.9-2.3-1.8-4.6-0.7-7c0.1-0.2,1.2-0.2,1.3,0C294.1,410.1,293.1,412.4,292.2,414.8z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M292.6,232.4c28.1,0.2,52.3,24.9,52.1,53.2c-0.2,27.7-25.1,51.9-53.1,51.7c-27.7-0.2-52-25-51.8-53
	C239.9,256.5,264.6,232.2,292.6,232.4z M237.8,352.6c15.9,12.6,33.8,19.7,54.2,19.7c5.3,0,8.9-3.7,8.9-8.6c0-4.7-3.3-8.3-8.2-8.8
	c-1.4-0.1-2.7-0.1-4.1-0.1c-27.8-0.7-53-19.1-62.2-45.4c-2.7-7.8-4-15.8-4.2-24.1c-0.1-5.5-4.1-9.4-8.9-9.3c-4.9,0.1-8.4,4-8.6,9.5
	c0,1,0,2,0,1.8C205.7,312.6,218.4,337.2,237.8,352.6z M283.5,205.5c-0.4,6,3.7,9.1,12.9,9.5c16.1,0.8,30.4,6.3,42.4,16.9
	c15.1,13.4,22.6,30.5,23.3,50.6c0.2,6.3,2.3,9.7,6.7,10.7c6.3,1.4,10.8-2.7,10.8-10c-0.1-43.6-37.5-82.8-82.2-85.8
	C288.3,196.9,283.9,199.4,283.5,205.5z"/>
<path style="fill:#FBD634;transform:scale(0.2)" :class="ValueId+'_color4'" d="M292.4,249.9c20.6,0.1,34.8,14.3,34.8,34.8c0,21-14.6,35.3-35.6,35.1c-20.2-0.2-34.4-14.9-34.3-35.5
	C257.3,264,271.7,249.8,292.4,249.9z"/>
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
                                    <button :style="{background:'rgba('+getterMexicanMerigoldFlowerBg1+')'}" @click="ShowElement(getterMexicanMerigoldFlowerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg2+')'}" @click="ShowElement1(getterMexicanMerigoldFlowerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg3+')'}" @click="ShowElement2(getterMexicanMerigoldFlowerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg4+')'}" @click="ShowElement3(getterMexicanMerigoldFlowerBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <!-- <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg5 +')'}" @click="ShowElement4(getterMexicanMerigoldFlowerBg5 )" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg6+')'}" @click="ShowElement5(getterMexicanMerigoldFlowerBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg7+')'}" @click="ShowElement6(getterMexicanMerigoldFlowerBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg8+')'}" @click="ShowElement7(getterMexicanMerigoldFlowerBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg9+')'}" @click="ShowElement8(getterMexicanMerigoldFlowerBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMexicanMerigoldFlowerBg10+')'}" @click="ShowElement9(getterMexicanMerigoldFlowerBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var MexicanMerigoldFlower= [
                {top:135 ,left:106},
            {top:95 ,left:32},
            {top:127 ,left:12},
            {top:9 ,left:99},
            {top:502 ,left:81},
            {top:362 ,left:123},
            {top:251 ,left:133},
            {top:376 ,left:155},
            {top:134 ,left:110},
            {top:468 ,left:124},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = MexicanMerigoldFlower[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  MexicanMerigoldFlower[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'MexicanMerigoldFlower'){
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
                getterMexicanMerigoldFlowerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MexicanMerigoldFlower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MexicanMerigoldFlower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MexicanMerigoldFlower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMexicanMerigoldFlowerBg10: {
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
                            name:'MexicanMerigoldFlower',
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