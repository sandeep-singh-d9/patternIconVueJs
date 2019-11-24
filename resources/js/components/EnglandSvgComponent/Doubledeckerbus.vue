<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(235, 187, 87, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M20.6,128.7c-0.5-1-1.4-2-1.4-3c0.7-22.1-1.7-44.3,1.5-66.4C25,29.3,45.6,9.8,75.8,9.6
	c80.5-0.5,161-0.4,241.6-0.4c63.9,0,127.9,0,191.8,0.4c18.7,0.1,30.1,11.2,32.2,29.6c2,17.3,4.3,34.5,6.5,51.7
	c-20.8-2.7-41.8-1.5-62.7-1.4c-16.1,0.1-32.4-0.4-48.6,0.1c-18.2,0.5-36.5,1.5-54.7-0.4c-7.2-0.7-14.2,1.9-21.2,0.9
	c-17.7-2.3-35.4-0.3-53-0.5c-16.1-0.2-32.4-0.4-48.6,0c-18.2,0.4-36.5,0.6-54.8-0.1c-15-0.6-30-0.1-45.1-0.1
	c-21.5-0.1-43-0.2-64.5,0c-22.1,0.2-44.2-0.2-66.3,0.6c-4.7,0.2-5,3.3-5.1,6.7c-0.2,7.1,0.1,14.2-0.1,21.3
	C23.3,121.7,23.9,125.7,20.6,128.7z M21.2,130.4c176.3,0,352.6,0,529,0.1c-0.1,3.5-2.4,7.3,3,9.6c2.1,0.9,1.6,5.6-0.1,6
	c-7.2,1.9-4.6,7.4-4.7,11.5c-0.2,16.8,0.1,33.6-0.2,50.5c-0.1,5.5,0.8,9.2,7.1,9.6c7.5,0.5,9.1,4.8,8.9,11.9
	c-0.5,15.6,0.2,31.3,0.2,46.9c0,2.7,1.6,5.9-1.5,8c-3.8-4.3-2.5-9.5-2.6-14.4c-0.2-13.5-0.1-13.5-13-15.3c-3.7-1.2-5.2-4.6-7.1-7.5
	c-17-26.4-50.2-29.7-72-7.3c-2.9,3-5.3,9.1-10,7.1c-4.2-1.8-2.6-7.9-2.7-12.2c-0.2-15.6,0.1-31.3-0.2-46.9c-0.1-6.2,0-12.4-0.1-18.6
	c-0.1-5.1-2.5-7.6-7.6-7.6c-18.6-0.2-37.2-0.2-55.8,0c-5.2,0.1-7.3,2.8-7.5,7.7c-0.2,6.8,0.2,13.6-0.2,20.4
	c0.5,17.7,0.2,35.5,0.2,53.2c0,3.5,0,7.1-2.2,10.2c-6.2,3.2-9.1,0.6-9.9-5.6c-0.4-3.4-0.1-6.9-0.4-10.3c-0.2-16.4-0.3-32.8,0.1-49.2
	c-0.4-6.2,0.1-12.4-0.2-18.6c-0.3-5-2.7-7.6-7.8-7.7c-18.9-0.2-37.9-0.2-56.8,0c-5.1,0-7.5,2.7-7.8,7.6c-0.4,6.2,0.1,12.4-0.2,18.7
	c0.4,17.7,0.2,35.4,0.2,53.1c0,4.1,0.3,8.3-2.2,12c-2.7,2.1-5.4,2.1-8.2,0.3c-2.3-3-2.3-6.6-2.3-10.2c0-17.8-0.3-35.5,0.2-53.2
	c-0.4-6.5-0.1-12.9-0.1-19.4c0-5.7-2.1-8.8-8.3-8.8c-18.3,0-36.5-0.1-54.8,0c-5.6,0-7.8,2.9-7.9,8.3c-0.1,6.5,0.2,13-0.1,19.4
	c0.3,13.9,0.3,27.8,0,41.7c-0.1,3.6,0.6,9-4.1,9.3c-5.1,0.3-7.3-4.5-7.9-9.2c-1.2-9.7-0.3-19.5-0.6-29.2c-0.1-4.7,0.4-9.5-0.3-14.2
	c-0.1-5.9,0.7-11.8,0.3-17.7c-0.4-5.3-3-8.2-8.3-8.3c-18.9-0.4-37.9-0.3-56.8-0.1c-5.2,0.1-7.3,3.1-7.5,7.9
	c-0.3,6.2,0.2,12.4-0.2,18.6c0.5,18,0.2,36,0.2,54c0,3.8,0.2,7.7-2.2,11.1c-3.2,2.7-7.1,2.5-11,2.5c-9.1-0.2-11.5-2.4-11.6-11.7
	c-0.2-21.9,0-43.7-0.1-65.6c0-3.8,0.4-7.7-0.8-11.4c-1.8-6.7-6.4-9.3-13-9.3c-4.7,0-9.3,0.1-14,0.6c-3.3,0-6.6-0.6-10-0.5
	c-7.5,0-15,0-22.6,0c-3.1,0-6.5-0.6-8.2,3.2c-1.6,13.6-0.5,27.2-0.7,40.8c-0.2,18.1,0,36.1-0.1,54.2c0,4.1,0.4,8.3-1.8,12.2
	c-0.8,1.1-1.7,1.3-2.9,0.7c0.1-35.7,0.2-71.3,0.4-107c0-3,0.4-6-4.3-5.7c-3.1,0.2-7.7,1.8-8.9-1.6c-1.6-4.5-2.5-10.8,0.5-14.4
	C21.8,136.6,20.4,133.5,21.2,130.4z"/>
<path style="fill:#F6C358; transform:scale(0.2)" d="M221.5,284.7c-0.6-9.1,1-18.3-1.1-27.4c-1.3-5.5,3.6-4.2,6.5-4.2c20.7-0.1,41.5-0.1,62.2-0.1
	c2.4,0,4.8,0,7.2,0c3.4-3.1,7.7-2.7,11.8-2.7c16.5-0.1,33.1-0.2,49.6,0c6.8,0.1,12.5-0.5,12.9-9.2c0.1-1.9,1-4.1,3.7-4.1
	c0,3.1,0.4,6.3,0.1,9.4c-0.5,5.5,2.1,7.2,7.1,6.6c2.9-2.6,6.4-2.8,10-2.8c18.3-0.1,36.6-0.2,54.9,0.1c10.4,0.2,12.3,2.1,10.8,12.2
	c-1.1,7.4,0,15.4-4.4,22.2c-57.5,0.1-115.1,0.3-172.6,0.3C260.5,285,241,284.8,221.5,284.7z"/>
<path style="fill:#141515; transform:scale(0.2)" d="M536.4,276.7c-3.1,19-16.7,31.4-34.5,31.5c-18.5,0.1-32.2-12.1-35.5-31.5c-5.1-12.8,1-22.8,9.4-30.9
	c10.2-9.8,23.1-12.7,37-8.3c13.5,4.3,21.9,13.4,25,27.3C538.7,268.8,538.8,272.9,536.4,276.7z M209.5,276.7
	c-3.2,19.2-16.5,31.3-34.5,31.5c-18.4,0.1-32.1-12-35.5-31.5c-4.9-10.5,0.1-19,5.8-27c8.2-11.7,25.1-16.7,39.7-12.5
	c15.2,4.4,24.8,15.9,26.1,31.1C211.3,271.3,211.1,274,209.5,276.7z"/>
<path style="fill:#F6C358; transform:scale(0.2)" d="M127.4,253c0.3,10.6-3.4,21-1.8,31.7c-32.1,0.1-64.3,0-96.4,0.5c-6.9,0.1-8.1-2.1-8.3-8.5
	c-0.2-7.1,2.5-8.8,8.7-7.9c0.6,0.1,1.2,0,1.8,0c0.6,0,1.2,0.1,1.8,0.1c6.4-4.5,13.7-2.3,20.7-2.7c9.4-0.5,10.3-1,10.3-10.2
	c0.1-28.6,0.1-57.3,0-85.9c0-9.3-1-9.8-10.1-10.4c-6.9-0.4-14.3,1.9-20.6-2.7c11.9-3.8,24-1.1,36.1-1.5c2.8,3.9,2.1,8.5,2.1,12.8
	c0.1,28.8,0,57.7,0.1,86.5c0,4.7-1.2,10.6,6.3,11.4c4.7-0.3,9.5,0,14.2-0.1c10.1-0.2,11-1,11-11.4c0.1-25.7,0-51.5,0.1-77.2
	c0-4.6-0.9-9.6,2.8-13.5c2.8,2.7,1.7,6.1,1.7,9.3c0.1,23.4,0.4,46.7-0.1,70.1c-0.2,8,2.3,10.7,10,9.7
	C120.9,252.7,124.2,253,127.4,253z"/>
<path style="fill:#F6C358; transform:scale(0.2)" d="M550.2,284.7c0.7-10.7-0.5-21.3-3.6-31.6c19,0.1,15.7-2.2,16,15.6c0.1,5.3,0,10.6,0.1,15.9
	C558.6,284.6,554.4,284.6,550.2,284.7z"/>
<path :style="{fill:'rgba(41, 157, 211, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M170.7,70c-8.6,0-17.1,0-25.7,0c-1.8,0-4,0.5-5.2-0.3c-9.7-6.7-3.6-16.7-4.8-25.2
	c-0.7-4.8,2.6-7.7,7.6-7.7c18.9-0.1,37.8-0.1,56.6,0c0.9,0,1.9-0.1,2.6,0.4c10.7,6.7,3.7,17.2,5.1,25.8c0.9,5.5-3.6,7.2-8.8,7.2
	C189,69.9,179.9,70,170.7,70z M324.9,70c-8.3,0-16.6,0-24.9,0c-2.1,0-4.7,0.6-6.1-0.5c-9-7-3.5-16.9-4.4-25.5
	c-0.6-5.6,3.8-7.3,8.9-7.3c18.1,0.1,36.1,0.1,54.2,0c6.4,0,9,3.1,9,9.3c-0.1,27.8,2,23.8-22.5,24C334.4,70,329.7,70,324.9,70z
	 M480.5,70c-8.6,0-17.1,0-25.7,0c-2.1,0-4.6,0.6-6.1-0.4c-9.7-6.7-3.4-16.7-4.8-25.2c-0.8-5,2.9-7.6,7.7-7.6
	c18.9-0.1,38-1.5,56.7,0.5c14.2,1.5,5.7,14.8,7.4,22.7c1.3,5.8-1.2,10.4-8.6,10.2C498.2,69.8,489.3,70,480.5,70z M247.9,70
	c-9.2,0-18.3-0.2-27.5,0c-5.7,0.1-8.1-2.5-8-8c0.3-28.6-3.7-25.2,23.7-25.3c12.7-0.1,25.4,0.2,38.1-0.1c7.2-0.1,10,2.8,9.9,10.1
	c-0.4,27.4,2.6,22.9-22.9,23.3C256.8,70,252.4,70,247.9,70z M401.9,70c-8.3,0-16.6,0-24.9,0c-1.8,0-4,0.6-5.2-0.3
	c-9.9-6.6-3.4-16.6-4.9-25c-0.9-5,2.2-7.9,7.2-7.9c18.9-0.1,37.9,0,56.8,0c0.3,0,0.6,0,0.9,0.1c13,5.2,4.7,16.3,6.5,24.5
	c1.2,5.5-1.7,8.9-8,8.7C420.9,69.8,411.4,70,401.9,70z M94.4,70c-9.4,0-18.9-0.1-28.3,0c-5.5,0-8.1-2.5-8.1-8.1
	c0.3-27.8-3.7-25.1,22.9-25.2c13-0.1,26,0.1,39-0.1c7.1-0.1,10,2.9,9.9,10.1c-0.3,27.3,2.3,22.9-23,23.3C102.7,70,98.6,70,94.4,70z
	 M374,186.8c-2.2,3.2-5.1,4.4-9,4.3c-19.8-0.2-39.6-0.2-59.4,0c-3.9,0-6.9-1-9.1-4.1c0-6.8,0-13.5,0-20.3c0-5.8,2.7-8.6,8.6-8.5
	c20,0.1,40,0.1,60,0c6.5,0,8.9,3.2,8.9,9.3C373.9,173.8,374,180.3,374,186.8z M204.6,187.1c-2,3.7-5.4,4-9.2,4
	c-19.5-0.1-39-0.1-58.5,0c-3.8,0-6.9-0.9-9.4-3.8c0-6.8,0-13.6-0.1-20.4c-0.1-5.9,2.5-8.8,8.5-8.8c20.1,0,40.3,0.1,60.4,0
	c6,0,8.8,2.8,8.7,8.6C205,173.5,204.8,180.3,204.6,187.1z M288.8,188.5c-2.6,2.2-5.7,2.6-9,2.6c-19.3-0.1-38.7,0-58,0
	c-3.3,0-6.4-0.1-9.1-2.4c-0.2-7.4-0.3-14.8-0.6-22.2c-0.2-6.2,3-8.4,8.7-8.4c19.8,0.1,39.7,0.1,59.5,0c6.4,0,9.2,2.8,8.9,9.2
	C288.9,174.3,288.9,181.4,288.8,188.5z M457.7,188.5c-2.6,2.2-5.7,2.5-9,2.5c-19.3,0-38.7,0-58,0c-3.3,0-6.4-0.4-9-2.6
	c-0.1-7.4-0.2-14.8-0.4-22.2c-0.2-5.6,2.4-8.2,7.9-8.2c20.4,0,40.8,0,61.2,0c5.5,0,8.1,2.7,7.9,8.2
	C457.9,173.7,457.8,181.1,457.7,188.5z"/>
<path style="fill:#FDFCFC; transform:scale(0.2)" d="M539.2,206.5c-0.5,4.4-1.7,7-7.1,4.8c-8-3.2-17-3.7-24.7-8c-2-2.4-2.5-5.2-2.6-8.2
	c-0.2-11.7-0.2-23.5,0-35.2c0.1-3,0.7-5.8,2.9-8.1c8.4-0.9,16.7-1.7,25.1-2.7c2.3-0.3,4.6-1.2,6.4,1.2c2.7,2,3,5,3,7.9
	c0.3,13.5,0.3,26.9,0,40.4C542.2,201.5,541.9,204.5,539.2,206.5z"/>
<path style="fill:#FDFDFD; transform:scale(0.2)" d="M497.4,178.3c-1,6.7,3.6,17.5-2,21.4c-4,2.8-14-3.4-21.5-4.9c-6.8-1.3-10.7-4-9-11.5
	c0.1-0.6,0-1.2,0-1.8c-1.1-24.2,2.5-24.9,26.9-27.9c4.2-0.5,5.9,0.6,5.7,5.1C497.2,164.8,497.4,171,497.4,178.3z"/>
<path style="fill:#D3CFCF; transform:scale(0.2)" d="M77.2,157.3c-0.1,37.1-0.2,74.3-0.3,111.4c-3.5-0.3-8.6,2.7-8.5-4.8c0.2-35.3,0.2-70.6,0.3-105.9
	c0-0.8,0.5-1.7,0.7-2.5C72,156.2,74.9,155.5,77.2,157.3z"/>
<path :style="{fill:'rgba(178, 31, 17, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M20.6,128.7c0.1-12.1,0.2-24.3,0.1-36.4c0-5.1,1.6-6.9,6.9-5.6c7.5,1.8,15.2,1.8,22.8-0.2
	c6.3-1.7,12.5,1.9,18.4,1c18.5-2.7,37,2.7,55.4-1.4c6.2-1.4,12.3,2.6,18.4,1.5c17.8-3.3,35.8-0.4,53.6-0.6
	c15.9-0.2,32.2-2.5,48.2,0.4c5.9,1.1,12.4,1.2,18.5-0.7c6.5-2.1,13,1.7,19.2,0.8c18.5-2.7,36.9,2.2,55.4-1.1
	c6.1-1.1,13,2.1,19.2,1.1c17.6-2.8,35.3-0.5,52.7-0.5c15.9,0,32.2-2.5,48.3,0.5c5.9,1.1,12.4,1.2,18.5-0.8c7.2-2.3,14,1.5,21,1
	c13.8-1,27.5-1.3,41.3,0c3.5,0.3,7.1-0.3,9.4,3.4c1.6,11.5,3.2,23.1,4.8,34.6c0.3,2.3,1.5,4.9-2.5,4.8c-4.9,4-10.7,2.8-16.2,2.8
	c-114.3,0.1-228.6,0.1-342.9,0.1c-51.8,0-103.6,0-155.5-0.1c-4.9,0-10.2,1-14.4-2.9C21,129.8,20.8,129.2,20.6,128.7z M204.6,187.1
	c1.9,13.4,0.5,26.9,0.7,40.4c0.1,5.1,0.9,9.2,7.4,12.4c0-17.7,0-34.5,0-51.3c13.8-1.5,27.7-0.5,41.6-0.5c11.5,0,23-0.9,34.5,0.4
	c0.1,21.5,0.2,43,0.3,64.5c-3.4,3.3-7.7,2.6-11.7,2.7c-14.8,0.1-29.6,0.2-44.4,0c-6.8-0.1-9.5,2.1-9,9.3c0.4,6.6,2.1,13.6-2.4,19.7
	c-8.1,2.4-7.6-3.2-7.8-8.3c-2-3.4-2.6-7.2-3.2-10.9c-3.2-19.8-17.9-31.8-38.3-31.5c-18.5,0.3-33.1,14-35.3,33.1
	c-0.4,3.2-0.1,6.5-2.2,9.3c0.5,6.6-1.5,10.6-9.1,8.3c-5.2-10.9-2.2-21.3,1.8-31.7c0-21.9,0.1-43.8,0.1-65.7
	c17.8,1.1,35.6,0.7,53.5,0.8C188.9,188.2,196.7,187.7,204.6,187.1z M452.6,284.7c-1.1-8.3,0.5-16.5,2.1-24.4
	c1.5-7.7-1.8-7.4-7.2-7.4c-22,0.2-44.1,0.1-66.1,0.1c0.1-21.5,0.1-43,0.2-64.5c25.4-0.8,50.7-0.8,76.1,0c0,19.1,0,38.3,0,59.4
	c7.5-7.8,12.7-15.3,21-19.6c24.4-12.5,52.2-3.9,65.1,20.4c0.8,1.5,1.9,2.9,2.9,4.4c7,9.9,8.3,20.4,3.6,31.6
	c-7.4,2.1-9.9-1.3-9.1-8.2c-2.3-3-1.9-6.7-2.5-10.2c-2.6-16.1-14.2-29.1-28.2-31.8c-16-3.1-31.8,3.3-40.3,16.1
	c-3.5,5.3-4.6,11.4-6,17.4c-0.6,2.9-0.6,5.9-2.5,8.4C462.3,283.2,460.2,287,452.6,284.7z M374.3,237c-0.5,0.7-1.3,1.4-1.4,2.2
	c-2.2,13.8-2.2,13.8-16.4,13.8c-20.1,0-40.1,0-60.2,0c0.1-22,0.1-44,0.2-66c25.9,1.7,51.7,2.1,77.6-0.2
	C374.1,203.5,374.2,220.2,374.3,237z M33.3,157c9.1,0,18.3,0.1,27.4-0.1c4.5-0.1,6.3,1.6,6.3,6.2c-0.1,33.3-0.1,66.6,0,99.9
	c0,4.8-2.2,6-6.5,5.9c-9.1-0.2-18.3-0.1-27.4-0.1C33.2,231.6,33.2,194.3,33.3,157z M106.1,164.1c0,32-0.2,63.9,0.1,95.9
	c0.1,6.8-1.5,9.8-8.8,9.1c-6.7-0.7-13.6-0.3-20.4-0.4c-1.9-2.5-2.1-5.5-2.1-8.4c-0.1-31.5-0.2-63.1,0-94.6c0-2.9,0.2-5.9,2.3-8.3
	C90.4,152.2,101.6,154.8,106.1,164.1z M539.2,206.5c0-18.7,0-37.4,0-56.1c6.2-4.6,7.5-1.1,7.5,4.6c0,17.2,0.1,34.3-0.1,51.5
	c0,2.6,2.4,7.2-2.4,7.7C538.9,214.6,539.8,209.8,539.2,206.5z M507.8,151.8c-0.1,17.2-0.2,34.3-0.3,51.5c-6.4,0.7-9.1-2.1-8.8-8.7
	c0.4-11.2,0.4-22.5,0-33.7C498.4,154.1,500.7,150.8,507.8,151.8z"/>
<path :style="{fill:'rgba(248, 232, 135, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M501.5,290.9c-10,0-18.1-7.8-18.3-17.7c-0.2-9.9,8.6-18.7,18.6-18.4c9.8,0.2,17.9,8.6,17.9,18.3
	C519.6,282.9,511.5,290.9,501.5,290.9z M174.8,290.9c-10.1,0.2-18.2-7.3-18.5-17.3c-0.4-10.1,8.1-18.7,18.3-18.7
	c9.8,0,18,8.2,18.1,18C192.8,282.7,184.9,290.7,174.8,290.9z"/>
<path :style="{fill:'rgba(64, 72, 75, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M536.4,276.7c-1.3-23.7-9.8-34.6-29.8-38.1c-22-3.8-39.4,13.2-39.9,31.9c0,2.1-0.2,4.1-0.3,6.2
	c-1.6-0.1-3.2-0.2-4.7-0.2c-1.2-26.2,15.4-44.8,39.9-44.8c24.7,0,40.8,18.2,39.6,44.9C539.6,276.5,538,276.6,536.4,276.7z
	 M209.5,276.7c-1.2-23.2-10-34.6-28.9-38c-22.9-4.2-41,13.7-40.8,32.7c0,1.8-0.2,3.5-0.3,5.3c-1.6-0.1-3.2-0.2-4.7-0.3
	c-1.7-17.1,4.6-30.8,19.2-39.7c12.8-7.8,26.5-7.5,39.5-0.3c15.4,8.7,21,22.9,20.4,40C212.3,276.5,210.9,276.6,209.5,276.7z
	 M502.3,280.1c-5.1,0.1-7.8-2.6-8.1-6.8c-0.3-4.4,2.5-7.4,6.9-7.6c4.5-0.2,7.4,2.6,7.7,6.9S506.4,279.6,502.3,280.1z M173.8,265.5
	c4.7,0.3,7.7,2.7,7.9,7c0.2,4.2-2.1,7.3-6.8,7.6c-4.7,0.3-7.4-2.5-7.7-6.7C166.9,268.9,169.9,266.5,173.8,265.5z"/>
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
                                    <button :style="{background:'rgba('+getterDoubledeckerbusBg1+')'}" @click="ShowElement(getterDoubledeckerbusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDoubledeckerbusBg2+')'}" @click="ShowElement1(getterDoubledeckerbusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDoubledeckerbusBg3+')'}" @click="ShowElement2(getterDoubledeckerbusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDoubledeckerbusBg4+')'}" @click="ShowElement3(getterDoubledeckerbusBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDoubledeckerbusBg5+')'}" @click="ShowElement4(getterDoubledeckerbusBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Doubledeckerbus= [
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
            var randomNumber = Doubledeckerbus[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Doubledeckerbus[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Doubledeckerbus'){
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
                getterDoubledeckerbusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Doubledeckerbus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDoubledeckerbusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Doubledeckerbus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDoubledeckerbusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Doubledeckerbus') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDoubledeckerbusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterDoubledeckerbusBg5: {
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
                            name:'Doubledeckerbus',
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