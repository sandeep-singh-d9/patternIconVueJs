<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.59);">
                  <path style="fill:#FEFEFE;transform:scale(0.2)" d="M141.6,283.1c-0.3,0.6-0.2,1.5-1.3,1.2C140,283,140.8,283.1,141.6,283.1z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M459.7,294.1c-1.5,1-1.9-0.5-2.6-1.2C458.2,292.7,459.4,292.5,459.7,294.1z"/>
<path style="fill:#CC0001;transform:scale(0.2)" :class="ValueId+'_color1'" d="M417,295.5c-0.4,8.6-1.6,17.2-2.4,25.8c0,0.3-0.1,0.6-0.2,0.8c0.8-8.3,1.9-16.6,2.3-24.9
	c0.2-3.7,0.3-6.3,0.7-8C417.2,290.8,417.1,292.9,417,295.5z"/>
<path style="fill:#CC0001;transform:scale(0.2)" :class="ValueId+'_color1'" d="M479,306.8"/>
<path style="fill:#CC0001;transform:scale(0.2)" :class="ValueId+'_color1'" d="M459.5,295.7c0,0.1,0,0.1,0,0.2c0.1,0,0.1-0.1,0.2-0.1C459.7,295.8,459.5,295.7,459.5,295.7z"/>
<path style="fill:#CC0001;transform:scale(0.2)" :class="ValueId+'_color1'" d="M219.5,80.6L219.5,80.6L219.5,80.6L219.5,80.6z"/>
<path style="fill:#CC0001;transform:scale(0.2)" :class="ValueId+'_color1'" d="M140.3,284.3C140.4,284.3,140.4,284.3,140.3,284.3C140.4,284.3,140.4,284.2,140.3,284.3
	C140.4,284.2,140.3,284.3,140.3,284.3z"/>
<path style="fill:#EA3C30;transform:scale(0.2)" d="M392.6,87.9c-0.4,0.3-0.9,0.6-1.3,0.9c-0.1-0.2-0.2-0.3-0.3-0.5C391.6,88.2,392.1,88.1,392.6,87.9
	L392.6,87.9z"/>
<path style="fill:#003366;transform:scale(0.2)" :class="ValueId+'_color3'" d="M364.9,184.6c0.2-5.2,3.2-7.6,8.1-8.9c15-4.1,30.3-4.8,45.6-5.8c3.2-0.2,6.5-0.3,9.7-0.5
	c4.4,0.1,8.9,0.2,13.3,0.3c22.7-0.6,45.3,0.6,67.9,1.7l0,0c9.4,0.7,18.7,1.5,28.1,2.2c1.6,0.1,3.2,0.1,4.8,0.3
	c10.3,1.5,20.5,2.6,30.6-0.9c1-0.6,2-1.2,3.1-1.7c9.8-4.6,11.8-7.7,10.6-18.4c-1.7-15.4-6.6-30.1-11.5-44.8
	c-0.1-0.3-0.6-0.5-0.9-0.8c-1.4,2.4-3.4,4.1-6,5.2c-0.8,0.5-1.7,1-2.5,1.5c-10.8,7.4-23.5,10.1-35.7,14.1c-1.9,0.6-3.9,1.1-5.8,1.6
	c-10.2,1.8-20,5.3-30.5,6c-11.6,3.2-23.6,4.8-35.4,6.6c-19.9,3.2-39.7,6.3-59.6,9.5c-7,1-14,1.9-21,2.9c-3.7,0.5-5.3-0.6-4.6-4.6
	c1.5-8.7,2.5-17.5,2.2-26.4c-4,1.9-8.6,3.2-11.8,6c-4.4,3.7,1.5,8,0.8,12.2c-0.1,0.8,0.1,1.6,0.2,2.4c1.9,10.4,1.6,10.7-9.1,8.9
	c-1.2-0.2-2.4,0-3.6-0.1c1.3,10.8-0.5,21.8,1,32.6c0.3,2.3-1.6,1.9-2.8,2c-6.2,0.6-12.4,1.1-18.7,1.6l0,0c-7.7-0.1-15.3-0.2-23-0.3
	c-7,0.1-14,0.5-21-0.8c-4.1,0-8.1,0-12.2,0c0,5,0.2,10,0.2,15c0-5-0.1-10-0.2-15c-8.5-0.8-17.1-1.3-25.5-3.5
	c-0.8-0.2-1.5-0.4-2.3-0.6c-1.7-0.4-3.3-0.7-5-1.1c-0.9,4.3,1.9,9.9-1.2,12.6c-2.9,2.6-8.4,1.7-12.7,2.4c-3,0.5-6.4,0.1-9.2,2
	c1.6,6.4-2.5,9-7.3,11.3c-10.2,4.8-20.5,9.5-30.7,14.2c0.4,1,1,2,1.2,3c-0.2-1-0.9-2-1.2-3c-14.9,5.7-29.5,12.4-44.8,17.1
	c-16.7,6.2-33.7,11.7-51.1,15.8c-4.1,1.3-8.3,2.5-12.4,3.8l0,0c-17.1,3.1-34.3,5.7-51.9,4.9c1.6,10.4,4.3,20.6,8.4,30.3
	c1.3,2.9,2.7,6,6.9,5.7c12.7-0.9,25.5-1.4,38-3.9c16.1-1.5,31.7-5.7,47.3-10c6.1-1.7,11.8-4.9,18.3-5c-0.3-1.2,0.5-1.1,1.3-1.1
	c14.4-6.4,29-12.6,42.4-21l0,0c19.6-10.5,36.9-24,52.3-40.2c2.2-2.4,5-4.4,6.6-7.2c2.5-4.3,5.4-4.9,10-3.8c7,1.7,7.1,1.4,3.7,7.6
	c-1.4,2.5-2.7,5-4,7.4c6.7,0.1,5.5,5.6,5.9,9.3c0.6,6.4-0.8,13.1,0.4,19.4c2.2,12.1-2.9,22-7.6,32.2c-9,19.5-19.9,38.1-30.8,56.6
	c1,2.3,1.5,4.6,1.6,7c-0.1-2.4-0.6-4.8-1.6-7c-12.5,17.9-24.5,36-38.6,52.6c-4.6,5.5-9.5,10.7-14.3,16.1
	c-12.8,15.4-27.3,29-42.2,42.3c-5.3,4.7-10.9,9.2-16.3,13.9c-7.9,6.4-15.7,12.8-23.6,19.2l0,0c-5.8,3.7-11.8,7.1-17.3,11.1
	C53.4,509,38,517.8,22,525.5c3.9,19.6,9,38.9,17,57.3c1.8,4.2,4.1,4.7,7.9,2.1c15.4-10.6,29.8-22.4,43.4-35.1c1-0.7,2-1.4,2.9-2.2
	c32.9-30,63.2-62.4,91.4-96.8c14.2-17.3,27.9-35,40.1-53.9c36.6-52.9,65.8-109,76.9-173.2c6.8,64.5,32.4,121.8,65.4,176.4
	c0.6,1.3,1.1,2.6,1.8,3.8c20.9,34.8,44.7,67.7,70.4,99.1c16.8,20.6,33.9,40.9,53.2,59.3c1.7-12,2.9-24,4-36c-1.1,12-2.4,24-4,36
	c12.1,12.9,24.9,25,38.8,35.9c6.9,5.3,7.3,5.2,11.3-2.4c5.9-11.3,9.4-23.5,13.7-35.4c2.2-6,4.8-12,5.3-18.5
	c-1.4-0.7-2.9-1.4-4.3-2.2c-20.1-11.9-38.9-25.7-57.2-40.2c-4.4-5.4-11.1-8.2-15.1-14.1c-21.5-18.8-41.2-39.3-58.6-62.1
	c-7.5-7.7-13.2-16.7-19.5-25.3c-11.3-15.4-20.8-31.9-30.7-48.2l0,0c-12.6-23.9-24.3-48.2-33.4-73.7c-1.5-4.1-2.3-7.9-1.5-12.3
	c1.6-9.9,2.8-20,3.6-30c0.3-3.9,1.9-4.9,5.2-4.6c-0.5-1.7-1.2-3.4-1.5-5.2c-0.4-2.8-5.5-5.1-1.8-8.2c4.2-3.6,10.8-2.1,14,2.3
	c12.6,17.4,28.3,31.7,45.7,44.2c4.3,3.1,8.1,7,13.1,9.2c12.5,7,25,14.1,37.5,21.1c1.1-0.2,2.2-0.3,2.5,1.2c2.5-0.4,4.5,1.1,6.7,2
	c18.5,7.3,37.2,13.5,56.8,17.1c1.2-11.2,2.4-22.4,3.6-33.6c-1.2,11.2-2.4,22.4-3.6,33.6c11.5,2.5,23.2,4,34.8,5.8
	c5.6,0.9,8.4-0.9,10.6-5.5c4.6-9.3,7.7-19.2,10.1-29.2c-17.1-0.3-33.7-3.7-50.2-7.9c-8.3-2.9-16.6-5.7-24.9-8.6
	c-15.8-5.5-31.5-11.3-46.5-18.9c-9.8-2.8-18.4-8.6-27.8-12.4c-2-0.8-3.7-2.5-6.1-2.3c-9.8-5.4-19.6-11-29.5-16.1
	c-5.6-2.9-10-6-8.3-13.2c-5.8-2.7-12.1-2.6-18.2-3.6c-3.5-0.6-4.1-2.1-3.5-4.8C364.5,192.6,364.7,188.6,364.9,184.6z"/>
<path style="fill:#003366;transform:scale(0.2)" :class="ValueId+'_color3'" d="M140.4,284.2h-0.1C140.3,284.2,140.3,284.3,140.4,284.2L140.4,284.2z"/>
<path style="fill:#003366;transform:scale(0.2)" :class="ValueId+'_color3'" d="M459.7,294.1C459.7,294,459.7,294,459.7,294.1c-0.1-0.1-0.1-0.1-0.2,0
	C459.5,294,459.7,294.1,459.7,294.1z"/>
<path style="fill:#003366;transform:scale(0.2)" :class="ValueId+'_color3'" d="M35.5,157.4c8.1,2,16.3,2.9,24.6,1.6c2.4-0.4,4.9-0.5,7.2,0.4c10.2-0.3,20.4-0.5,30.6-0.8
	c23,0.6,46,0.8,68.9,2.6c2.5,0,4.9,0,7.4,0c6.1,1.7,12.4,1.4,18.5,2.3c16.8,2.4,33.8,3.6,49,12.3c0.4-7.4,0.8-14.8,1.1-22.2
	c-0.1-7.4,1.7-14.4,4.7-21.1c1.4-3.2,1.2-5.2-2-6.9c-5.4-2.7-10.1-6.6-16-8.5c-0.2,8.6-0.9,17.2,0.8,25.9c0.7,3.7,1.2,8.1-5.6,5.9
	c-4.9-1.6-10.2-1.9-15.4-2.8c-1.1-0.4-2.2-0.9-3.4-1.1c-19.2-4.2-38.3-8.4-57.5-12.6c-15.4-3.5-30.9-6.6-45.9-11.8
	c-4.8-0.1-9.1-2.6-13.7-3.3c0.2,7.7,0,15.5,0.5,23.2c-0.5-7.7-0.3-15.5-0.5-23.2c-12.8-4.2-25.5-8.5-37.4-14.9
	c-1.9-1-4.2-1.5-5.1-3.8c-1.6,0-2.9-0.8-3.8-2c-2.6-1.3-4.7-3.1-6-5.8c-6.4,11.3-9.9,23.7-13.4,36C18,145.9,18.8,147.5,35.5,157.4z"
	/>
<path style="fill:#CC0001;transform:scale(0.2)" :class="ValueId+'_color1'" d="M580.6,175.5c-2.4-0.1-4.9,0.4-6.9-1.5c-10.2,3.5-20.5,2.4-30.8,0.9c-1.6-0.2-3.2-0.2-4.8-0.3l0,0
	c-9.4-0.7-18.8-1.5-28.2-2.2c-22.8-1.1-45.5-2.3-68.3-1.7c-4.5-0.1-8.9-0.2-13.4-0.3c-3.3,0.2-6.5,0.2-9.8,0.5
	c-15.4,1.1-30.9,1.8-45.9,5.9c-4.9,1.3-7.9,3.7-8.1,9c-0.2,4.1-0.4,8.1-1.3,12.1c-0.6,2.7,0,4.2,3.5,4.8c6.1,1,12.5,0.9,18.3,3.6
	c17.2,3,34.3,6.1,51.5,9.1l0,0c8.2,1.7,16.4,3.3,24.6,5c15.5,2.6,31.1,5.3,46.6,7.9c2.6,0.2,5.2,0.7,7.7,0.7
	c6.2-0.1,11.8,3.4,18.1,2.3c9.9,1.1,19.7,2.6,29.6,3.1c9.3,0.5,18.7,1.7,27.8-1.5c3.3-13.5,5-27.3,5.3-41.2
	C596.2,180.7,591.6,176,580.6,175.5z M349.2,153c3,0.2,5.9,0.4,8.9,0.6c2.3,0,4.7,0.1,7,0.1c0.1-2.6-0.2-4.6-0.4-6
	c-0.8-5.1-1.3-8.5-2.7-11.9c-0.3-0.6-0.9-2-0.4-3.5c0.3-1,0.9-1.7,1.5-2.1c3.3-2.8,7.9-4.1,11.9-6c8.7-4,17.4-8,26.1-12
	c-1.1-4.2,0.4-8.3,0.8-12.5c-0.4,4.1-2,8.2-0.8,12.5c18.5-6.7,36.9-13.8,55.8-19.6c1.6-0.5,3.2-0.8,4.7-1.1
	c11.8-4.1,23.6-7.6,35.7-10.7c0.5-0.4,1.1-0.8,1.6-1.2c-0.2-6,0.3-12,1.1-17.9c-0.7,5.9-1.3,11.9-1.1,17.9
	c13.9-4,27.7-7.9,41.6-11.9c3.7-1.1,6.7-4,10.9-3.6c1.8-1.3,3.7-2.7,5.5-4c-2.4-7.1-6.9-13.1-10-19.8c-8.3-18-14.3-22.4-37.1-18.3
	c-2,0.3-4.1,0.4-6,0.9c-38.5,10.9-72.3,31.3-105.6,52.8c0.4,2.7,0.2,5.1-1.1,6.9c1.3-1.9,1.5-4.3,1.1-6.9
	c-22.9,13.8-44.4,29.4-65.9,45.1c-2.1,1.5-4.2,3-6.8,3.1c0.8-0.1,1.9-0.3,3.1-0.8c0.6-0.2,2.6-1.1,2.6-1.5
	c-0.2-0.9-10.6,0.4-12.8,0.7c-8.4,1-20.9,1.6-38.6-0.3c-11.4-10.1-23.6-19.2-35.4-28.8C230,81.6,215.1,70.7,200,60
	c-0.2,3.6,2.5,5.1,4.7,7.1c4.9,4.5,11.6,7.1,14.8,13.4c-11-3.6-11-3.5-11,8.7c0,2,0.2,4.1,0,6c-0.4,3.2,1.5,6.9-1.5,9.7
	c7.5,4.1,15.1,8.2,22.6,12.2c5.8,1.9,10.6,5.7,16,8.5c3.2,1.6,3.4,3.7,2,6.9c-2.9,6.7-4.7,13.7-4.7,21.1c1-0.3,2-0.5,3-0.8
	c1.3-0.1,2.6-0.1,3.9-0.2c2.9-0.3,5.8-0.6,8.7-0.8c3.5-0.3,7-0.6,10.4-0.9c1.8,0,3.6-0.1,5.4-0.1c0.9,0,1.8-0.1,2.7-0.1
	c1.2-0.1,2.3-0.2,3.5-0.3c2.3-0.1,4.7-0.2,7.2-0.2c3.8-0.1,7.6-0.1,11.2,0c4.8,0.1,8.8,0.2,11.8,0.3c3.9,0.1,5.9,0.2,8.2,0.3
	c2.7,0.2,3.7,0.3,6.9,0.5c2.9,0.2,3.6,0.1,5.6,0.2c2.2,0.1,5.3,0.3,9.2,0.9C343.5,152.6,346.4,152.8,349.2,153z M392.2,88.3
	L392.2,88.3c-0.4,0.3-0.9,0.6-1.3,0.9c-0.1-0.2-0.2-0.3-0.3-0.5C391.1,88.6,391.7,88.5,392.2,88.3z M219.6,80.6
	c0.5,0.1,1,0.3,1.6,0.4C220.2,82.2,220,81.1,219.6,80.6z M253.9,210.8c-3.2-1.4-3.4-2.5-4.8-2.5c-2.2,0.1-3.3,2.7-6.2,6.5
	c-2,2.6-4.3,4.8-6.6,7.2c-15.3,16.1-32.6,29.7-52.3,40.2c-13.5,8.4-28,14.6-42.4,21c-0.2,0.6-0.2,1.5-1.2,1.2c0,2.5-3.3,2.4-3.7,4.7
	c-23.7,19.4-46,40.3-67.4,62.2c0.5,0.4,0.9,0.8,1.2,1.2s0.6,0.9,0.8,1.3c-0.2-0.5-0.5-0.9-0.8-1.3s-0.7-0.8-1.2-1.2
	c-16.4,15.1-31.4,31.6-45.9,48.5c-8.7,10.2-16,21-15.2,35.9C9,450,10.4,464.5,12.5,479c22.9-11.7,42.9-27.6,62.1-44.5
	c10.1-7.4,18.3-16.9,28-24.7c20.5-20.6,40.4-41.8,59.6-63.6c6.1-7.7,12.3-15.3,18.4-23c9.8-11.3,18.6-23.3,27.7-35.1
	c9.9-12.8,19.4-25.8,28.7-38.9c6-8.5,10.5-18.2,15.5-23c2.2-2.1,2.9-3.5,4.5-6.1c1.6-2.7,3.2-5.5,2.2-7.1
	C258.4,211.7,257.2,212.3,253.9,210.8z M21.8,216.1c15.5,2,31,1,46.5-0.3c0.4-12.9-0.9-25.8-1.3-38.7c0.4,12.9,1.6,25.8,1.3,38.7
	c4.9-0.2,9.9-0.4,14.8-0.6c17.4-1.7,34.8-3.4,52.2-5.1c11-1.4,21.9-2.8,32.9-4.2c17.1-2,34.2-3.9,51.3-5.9c2.8-1.9,6.2-1.5,9.2-2
	c4.3-0.7,9.7,0.1,12.7-2.4c3.2-2.8,0.3-8.4,1.2-12.6c-1.5-2.2-0.4-4.7-0.8-7.1c-15.2-8.7-32.2-10-49-12.3
	c-6.2-0.9-12.5-0.5-18.5-2.3c-2.5,0-4.9,0-7.4,0c-22.9-1.8-45.9-2.1-68.9-2.6c-10.2,0.3-20.4,0.5-30.6,0.8c-2.4-1-4.8-0.8-7.2-0.4
	c-8.3,1.3-16.5,0.4-24.6-1.6c-3.8,2.6-8.1,1.1-12.2,1.1c-7.6,0.1-11.7,3.2-12.5,10.8c-1.5,14.6,0.5,29.1,2,43.6
	C15.5,214.8,18.5,215.7,21.8,216.1z M62.5,49.2c4.2,0.4,7.8,2.3,11.3,4.4c9.3,3.1,18.7,5.9,27.6,10c4.1,1.3,8.1,2.5,12.2,3.8
	c0.6-5-0.3-10-0.8-14.9c0.6,5,1.4,9.9,0.8,14.9c11.9,4.6,23.8,9.3,35.7,13.9c16.6,5.5,32.5,12.7,48.4,19.7c3.1,1.4,6.3,2.6,9.4,3.9
	c3-2.8,1-6.5,1.5-9.7c0.3-2,0-4,0-6c0-12.2,0-12.3,11-8.7c-3.2-6.4-9.9-8.9-14.8-13.4c-2.2-2.1-5-3.5-4.7-7.1
	c-20.9-15.5-42.8-29.3-66.3-40.3c-8.1-3.8-16.1-8.2-25.1-9.6c-5.9-2.1-11.9-2.9-18-2.7c-5,0.2-9.7,0.9-13.1,5
	c-8.4,9.9-15.1,20.9-20.2,32.8C59,46.6,61.4,47,62.5,49.2z M578.8,472.8c-1.8,7.7-3.1,15.5-4.6,23.3c-0.9-0.4-2-0.6-2.8-1.1
	c-20.5-13.9-39.5-29.6-56.8-47.4c-7.8-6-13.5-14.1-20.9-20.5c-5.3-5.9-10.7-11.8-16-17.9c-15.4-17.6-29.9-35.2-43.5-52.4
	c-3.6-4.5-7.1-9-10.7-13.5c-3.9-5.6-7.8-11.2-11.7-16.8c-16.1-21.1-30.4-43.4-44.3-65.9c-6.1-9.9-12-19.8-18-29.7
	c-1.5-2.5-2.8-5-4.3-7.5c-1.7-2.8-3-4.9-4.1-8.2c-0.4-1.4-0.7-2.6-0.9-3.4c5.9-0.9,11.7-1.8,17.6-2.7c0.9,2.1,2.4,5.8,5,10.1
	c6.8,11.6,15.3,19,28.9,30.7c13.3,11.4,24.5,19.1,32.2,24.3c11.3,7.6,21.1,13.4,28.3,17.4c1.8,1,3.7,2,5.5,3.1
	c0.8,0.6,1.6,1.1,2.3,1.7c0.7,0.5,1.3,0.9,2,1.4c0.6,0.5,1.2,1.1,1.8,1.6c1.3,1.2,2.6,2.4,3.9,3.6c1.3,1.4,2.6,2.8,3.9,4.3
	c22.8,21.4,38.5,39.1,48.9,51.8c1.9,2.3,1.7,2.5,4.2,5.1c14,14.9,26.3,31.4,39.8,46.8C580.4,429.3,584.3,449.7,578.8,472.8z"/>
<path style="fill:#EA3C30;transform:scale(0.2)" d="M219.5,80.6c0.5,0.1,1.1,0.3,1.6,0.4C220.2,82.2,220,81.1,219.5,80.6L219.5,80.6z"/>
<path style="fill:#EAEBF2;transform:scale(0.2)" :class="ValueId+'_color2'" d="M366.4,179.5c2-3.6,0.2-8.4-0.8-16.4c-0.3-2.3-0.6-5.7-0.5-10.1c-9.5-0.6-18.9-1.2-28.4-1.8
	c-7.2,1.2-14.5-1.4-21.7,0.1c1.2,2.3,1.5,4.7,1.6,7.2c0-2.4-0.3-4.8-1.6-7.2c-7.7-0.3-15.3-1-23-0.2c-4.6-1.4-9.3,0-13.9-0.6
	c-7.5,1.2-15.3,0.2-22.8,1.8c-1.4,8.7-3.7,17.4-4.4,26.2c0.6-8.8,2.9-17.5,4.4-26.2c-2.3,0.2-4.6,0.5-6.9,0.7
	c-2-0.8-3.5,0.9-5.4,0.7c-0.4,7.4-0.8,14.8-1.3,22.2c0.5,2.3,4.7,7.8,6.6,8.2l0,0c0.8,0.2,1.7,0.4,2.5,0.6c9.4,2.2,19,2.7,28.5,3.5
	c4.5,0,9.1,0,13.6,0c7.8,1.3,15.6,0.9,23.5,0.8c27.4-0.2,17-0.2,25.7,0.3c8.6,0.4,21.5,1.5,22.5-1.9c0.2-0.8-0.3-1.7,0.2-3.9
	C365.3,181.4,366.1,180.1,366.4,179.5z M514.6,447.5c-7.8-6-13.5-14.1-20.9-20.5c-5.3-6-10.9-11.8-16-17.9
	c-14.6-17.4-29-34.9-43.5-52.4c0.3-2.4-1.7-3.5-2.8-5.1c-6.4-9-13.6-17.5-19.3-27c-16-20.9-30.2-43.1-44-65.5
	c-6-9.8-11.9-19.7-17.9-29.5c-3.4-0.3-4.9,0.6-5.2,4.6c-0.8,10-2,20.1-3.6,30c-0.7,4.5,0.1,8.3,1.5,12.3
	c9.1,25.5,20.8,49.8,33.4,73.7c9.9,16.3,19.4,32.8,30.7,48.2c6.3,8.6,12,17.6,19.5,25.3c17.4,22.7,37.1,43.2,58.6,62.1
	c3.9,5.9,10.7,8.7,15.1,14.1c18.3,14.5,37,28.3,57.2,40.2c1.4,0.8,2.9,1.5,4.3,2.2c6.1-14.8,8.8-30.5,12.7-45.9
	c-0.9-0.4-2-0.6-2.8-1.1C550.8,481.1,531.8,465.4,514.6,447.5z M562.3,232.9c-9.8-0.5-19.6-2-29.4-3.1c-6.2,1.1-11.9-2.4-18-2.3
	c-2.6,0-5.1-0.4-7.7-0.6c-15.4-2.6-30.9-5.2-46.3-7.8c-0.3,4.2-0.5,8.4-1,12.6c0.5-4.1,0.8-8.4,1-12.6c-8.1-1.7-16.3-3.3-24.5-5
	c-24.3-4.9-48.5-9.5-72.4-13.9c-1.1,2.2-2.3,5.4-1.5,8.7c1.8,7.4,12.3,10,28.8,15.7c7.6,2.6,18.7,6.5,32.2,12
	c8.4,3.4,16.9,6.8,25.4,10.4c8,3.3,15.8,6.7,23.5,10.1c7,2.4,17.8,6.1,31,10.7c18.7,6.5,21,7.6,24.9,8.6c16.5,4.2,33.1,7.5,50.2,7.9
	c1.3-4.6,2.8-9.2,3.8-13.9c2.8-12.9,6.7-25.6,7.5-38.9C580.9,234.6,571.5,233.4,562.3,232.9z M73.2,262.2c4.1-1.3,8.3-2.5,12.4-3.8
	c17.4-4.1,34.4-9.6,51.1-15.8c15.3-4.7,29.8-11.4,44.8-17.1c10.3-4.7,20.5-9.5,30.7-14.2c4.8-2.2,8.9-4.9,7.3-11.3
	c-17.1,2-34.2,3.9-51.3,5.9c-11,1.4-21.9,2.8-32.9,4.2c-17.4,1.7-34.8,3.4-52.2,5.1l0,0c-4.9,0.2-9.9,0.4-14.8,0.6
	c-15.5,1.3-31,2.3-46.5,0.3c-3.3-0.4-6.3-1.2-9-3.2c1.8,18.2,4,36.4,8.6,54.2C38.9,267.9,56.1,265.3,73.2,262.2z M246.5,144.1
	c0.7-3.8,1.9-9.8,3.5-17.5c-14.3-7.2-28.7-14.4-43-21.7c-3.1-1.3-6.3-2.5-9.4-3.9c-16-7-31.8-14.2-48.4-19.7
	c-11.9-4.6-23.8-9.3-35.7-13.9c-4.1-1.3-8.1-2.5-12.2-3.8l0,0c-8.9-4.1-18.3-6.9-27.6-10c-3.5-2.1-7.1-4.1-11.3-4.4
	c-1-2.2-3.5-2.6-5.1-4c-5.4,8.5-9.6,17.6-13.5,26.8c-2.7,6.2-6.6,12-7.2,18.9c1.3,2.6,3.4,4.5,6,5.8c1.5-4.6,3.2-9.1,5-13.6
	c-1.8,4.5-3.5,9-5,13.6c0.9,1.3,2.2,2.1,3.8,2c0.9,2.4,3.3,2.8,5.1,3.8c11.9,6.4,24.6,10.7,37.4,14.9c4.7,0.7,8.9,3.2,13.7,3.3
	c15,5.2,30.5,8.3,45.9,11.8c2.7-1.8,3-4.3,2.8-6.8c0.2,2.6-0.1,5-2.8,6.8c19.2,4.2,38.3,8.4,57.5,12.6c1.2,0.3,2.3,0.8,3.4,1.1
	c8.1,2,14.6,3.9,19.2,5.4c7.5,2.4,11.4,4,14.3,2C244.9,152.3,245.3,150.1,246.5,144.1z M258.3,235.4c-0.3-3.7,0.8-9.2-5.9-9.3
	c-5.2,7.7-10.2,15.5-15.5,23c-9.3,13.2-18.9,26.2-28.7,38.9c-9.1,11.8-18,23.8-27.7,35.1c-6.1,7.7-12.3,15.3-18.4,23
	c-19.2,21.8-39.1,43-59.6,63.6c-9.7,7.8-17.9,17.3-28,24.7c-19.2,16.9-39.1,32.8-62.1,44.5c0.3,2.2,0.6,4.4,1,6.6
	c2.4,13.5,4.5,27,8.6,40.1c16-7.7,31.4-16.6,45.9-26.9c5.6-4,11.5-7.4,17.3-11.1c7.9-6.4,15.7-12.8,23.6-19.2l0,0
	c5.4-4.6,11-9.1,16.3-13.9c14.9-13.3,29.5-26.9,42.2-42.3c4.8-5.4,9.7-10.6,14.3-16.1c14.1-16.6,26.2-34.8,38.6-52.6
	c10.9-18.5,21.7-37,30.8-56.6c4.7-10.2,9.8-20.1,7.6-32.2C257.6,248.6,258.9,241.9,258.3,235.4z M378.5,154.7
	c6.9-0.9,13.6-1.7,20.4-3c11.5-2.3,31.5-5.4,59.6-9.5c0-7.1,0.6-14.2,1.3-21.2c-0.7,7-1.3,14.1-1.3,21.2c11.9-1.8,23.8-3.4,35.4-6.6
	c10.4-0.7,20.3-4.1,30.5-6c1.9-0.5,3.9-1,5.8-1.6c12.2-3.9,24.8-6.7,35.7-14.1l0,0c0.8-0.5,1.7-1,2.5-1.5c2.6-1.1,4.6-2.8,6-5.2
	c-0.1-1.2,0.1-2.5-0.3-3.6c-5.6-14.7-10.3-29.8-17.6-43.9c-1.8,1.3-3.7,2.7-5.5,4c-4.1-0.3-7.1,2.5-10.8,3.6
	c-13.8,3.9-27.5,7.9-41.3,11.8c-0.5,0.4-1.1,0.8-1.6,1.2c-12,3.1-23.8,6.6-35.5,10.6c-1.6,0.4-3.2,0.7-4.7,1.1
	c-13.1,4-28.1,7.9-55.5,19.4c-11.2,4.7-25.1,10.9-41.1,18.6c0.5,2.5,1.3,6.2,1.9,10.8c1.1,7.9,0.8,10.2,2.7,12.1
	C367.6,155.4,371.5,155.6,378.5,154.7z"/>
<path style="fill:#0D0968;transform:scale(0.2)" :class="ValueId+'_color4'" d="M241,202.6c-0.8-1.7-2-4.8-2.1-8.7c-0.1-5.4,1.9-9.3,2.9-11.1c17.9,3.1,33.4,4.6,45.8,5.4
	c11.2,0.7,27.5,1.6,48.8-0.1c11.6-0.9,21.3-2.3,28.4-3.5c0.9,2.9,2,7.5,1.6,13.2c-0.3,4.8-1.5,8.6-2.5,11.2
	c-2.9,1.3-7.4,3.1-13.2,4.5c-2.6,0.6-7.9,1.8-26.1,2.6c-10.2,0.5-17.8,0.5-20.5,0.5c-9.6,0-15.3,0.1-22.9-0.5
	c-11.8-0.9-17.8-1.4-25.2-4.4C249.1,208.9,244,205.2,241,202.6z"/>
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
                                    <button :style="{background:'rgba('+getterRibbonBg1+')'}" @click="ShowElement(getterRibbonBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRibbonBg2+')'}" @click="ShowElement1(getterRibbonBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRibbonBg3+')'}" @click="ShowElement2(getterRibbonBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRibbonBg4+')'}" @click="ShowElement3(getterRibbonBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterRibbonBg5+')'}" @click="ShowElement4(getterRibbonBg5)" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterRibbonBg6+')'}" @click="ShowElement5(getterRibbonBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterRibbonBg7+')'}" @click="ShowElement6(getterRibbonBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Ribbon= [
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
            var randomNumber = Ribbon[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Ribbon[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Ribbon'){
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
                getterRibbonBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ribbon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRibbonBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ribbon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRibbonBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Ribbon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRibbonBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterRibbonBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRibbonBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRibbonBg7: {
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
                            name:'Ribbon',
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