<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#FBF05A;transform:scale(0.2)" :class="ValueId+'_color5'" d="M559.7,191.6c-3.3,12.3-9.9,21.8-22.2,26.6c-7,2.9-14.1,2.1-21.3,1c-0.7-0.3-1.5-0.7-2.2-1
	c-21.7-8.5-28.6-34.4-15.7-51.6c8.2-11,19.3-15.9,32.8-13.7c14.6,2.4,23.9,11.3,27.7,25.7c0.2,0.8,0.7,1.6,1,2.4
	C559.7,184.5,559.7,188,559.7,191.6z"/>
<path style="fill:#FBF05A;transform:scale(0.2)" :class="ValueId+'_color5'" d="M38.7,218.2c-12.4-4.7-18.9-14.3-22.2-26.6c0-3.5,0-7.1,0-10.6c3.1-10.9,8.4-20,19.1-25.2
	c16.6-8,36.4-1.6,44.8,14.9c8.7,16.9,2.6,36.7-14,45.5c-1.4,0.7-2.9,1.4-4.3,2.1C54.4,220.7,46.6,221.2,38.7,218.2z"/>
<path style="fill:#DB527D;transform:scale(0.2)" :class="ValueId+'_color2'" d="M276.4,84.3c7.8,0,15.6,0,23.4,0c29.6,0,59.2,0.1,88.8,0.1c7,0,11.3,3.5,12.5,9.7
	c1.1,5.8-2.2,10.4-9.1,12.8c-9.8,0-19.5,2-29.4,1.5c-2.3-0.1-4.6,0-6.7-1.1c-17.7-0.2-35.4-0.5-53,0.1c-7.2,0.2-14.4,1.7-21.6,0.9
	c-20.3-2.2-40.6-0.5-60.9-1c-6,2.2-12.4,1.6-18.3,0.8c-5.6-0.7-11.2-0.5-16.8-1.2c-7-1.5-11-6.3-10.3-12.4
	c0.7-6.2,5.5-10.1,12.7-10.1C217.3,84.3,246.9,84.3,276.4,84.3z"/>
<path style="fill:#55B369;transform:scale(0.2)" :class="ValueId+'_color4'" d="M299.8,154.3c14.8,6.3,23.3,19.5,22.2,34.5c-1,14.1-11.3,26.7-24.5,30.2
	c-17.3,4.5-35.4-4.4-41.2-20.3c-6.3-17.3,0.9-34.9,17.7-43.1c0.8-0.4,1.6-0.8,2.4-1.1C282,149.4,294.2,149.4,299.8,154.3z"/>
<path style="fill:#D6186B;transform:scale(0.2)" :class="ValueId+'_color3'" d="M378.3,131.1c11.8,5.3,20,13.5,22.3,26.8c3,17.2-7.6,33.9-24.6,38.5c-16.7,4.6-34.2-4.4-40.3-20.6
	c-6.2-16.3,0.7-34.3,16.2-42.4c1.4-0.7,2.8-1.5,4.2-2.2C362,127.3,372.7,127.3,378.3,131.1z"/>
<path style="fill:#D9176C;transform:scale(0.2)" :class="ValueId+'_color3'" d="M220.2,131.1c8.3,4.3,15.7,9.5,19.5,18.5c5.5,13.1,4,25.4-5.2,36.1c-9,10.4-20.8,14.4-34.3,10.6
	c-13.2-3.7-21.7-12.5-24.4-25.9c-3.3-15.9,3.9-29.8,18.3-37.3c1.2-0.7,2.5-1.4,3.7-2C203.7,127.3,214.7,127.3,220.2,131.1z"/>
<path style="fill:#E4E7EB;transform:scale(0.2)" :class="ValueId+'_color6'" d="M62.1,412.2c14.8,0,29.6,0,44.5-0.1c0,17.2,0,34.4,0.2,51.7c0.1,4.2-0.9,6.3-5.5,5.7
	c-1.4-0.2-2.8,0-4.2,0c-5.2,2.5-30.1,2.5-35-0.1C62.2,450.4,62.2,431.3,62.1,412.2z"/>
<path style="fill:#E4E7EB;transform:scale(0.2)" :class="ValueId+'_color6'" d="M469.7,412.2c14.8,0,29.6,0,44.4,0c0,19.1,0,38.1,0,57.2c-14.8,0-29.6,0-44.4,0.1
	C469.7,450.4,469.7,431.3,469.7,412.2z"/>
<path style="fill:#2D75BB;transform:scale(0.2)" :class="ValueId+'_color1'" d="M62.2,514.3c0,9.7-0.3,19.3,0,29c0.3,7.3-1.6,13.1-8.5,16.5c-2.1,0-4.2,0-6.4,0
	c-7.2-1.4-9.6-6.5-10.1-13c-0.2-2.3-0.1-4.6-0.1-6.9c0-103.8,0-207.5,0-311.3c0-3.2-0.4-6.4,0.8-9.5c0.7-1.6,2.2-1.7,3.6-1.4
	c5.9,1.4,11.8,1.1,17.8-0.1c1-0.2,2.1-0.1,3,0.5c-0.1,6.4,0.1,12.7-0.2,19.1c-0.2,4.2,1.1,5.4,5.3,5.3c30.6-0.2,61.1-0.1,91.7-0.1
	c115.4,0,230.7,0,346.1,0c10.4,0,8.9,1.4,9-8.9c0.1-5.1-0.1-10.2-0.2-15.4c1.3-0.7,2.2,0.1,3,1c3.2,4.8,3.8,9.7,0.5,14.8
	c-0.9,1.4-1,3-0.5,4.6c1.6,5.9,1.6,5.9-4.3,6.6c-3.7,0.2-7.4,0.1-11.1,0.1c-142.4,0-284.8,0-427.2,0c-10.8,0-10.8,0-10.5,10.5
	c0.2,7.1,0.4,7.3,7.7,7.3c9.5,0,19.1-0.1,28.6,0.1c2.5,0,5.4-0.6,6.7,2.7c-2.2,2-4.9,1.6-7.5,1.7c-9.3,0.1-18.7,0-28,0
	c-7,0-7.4,0.4-7.4,7.6c0,43.6,0,87.1,0,130.7c0,2.1,0,4.2-0.1,6.3c0.2,18.9,0.3,37.8,0,56.6c-0.4,11.7,0.3,23.3-0.2,35
	C63.6,507.4,64.5,511,62.2,514.3z M512.8,256.9c0.3,5.5-0.1,6-5.6,6.2c-4.2,0.1-8.5,0-12.7,0c-6.7,0-13.4-0.2-20.1,0.1
	c-1.8,0.1-4.8-0.6-4.4,3c2.2,1.5,4.7,1.2,7.2,1.2c8.7,0,17.3,0,26,0c9.2,0,9.2,0,9.2,9.5c0,11.7,0,23.3,0,35
	c0.1,33.4-0.2,66.8,0.1,100.2c-0.1,18.9-0.4,37.9,0.2,56.8c0.1,9.8-0.1,19.5,0.1,29.3c0.1,5.3-1.5,10.8,1.3,15.9
	c0,9.8,0.3,19.6,0.1,29.4c-0.2,7.1,1.8,12.7,8.5,15.9c2.1,0,4.2,0,6.4,0c7.2-1.4,9.6-6.5,10.1-13c0.1-1.6,0.1-3.2,0.1-4.8
	c0-105.1,0-210.2,0-315.3c0-2.6,0.2-5.3-0.9-7.8c-0.9-1.6-2.4-1.4-3.7-1.1c-5,1-10,1.2-15,0.4c-1.2-0.2-2.4,0.1-3.3,1.1
	c2.1,5.3,3.6,10.4-0.8,15.6c-0.9,1.1-1.1,4.1,0.5,5.8c0.6,0.6,2.3,0.6,1.9,1.9c-0.6,1.7-2.4,0.7-3.7,1
	C511.3,247.8,512.6,252.4,512.8,256.9z M555.5,559.8c3.7,0.1,4.4-0.7,4.3-4.4c-0.1-121.3-0.1-242.6-0.1-363.9
	c-2.1-0.2-2,1.6-2.4,2.8c-2.9,9-7.6,16.5-16.6,20.7c-1.4,0.7-2.9,1.4-3.2,3.2c-0.1,4.1-0.2,8.1-0.2,12.2c0,104.4,0,208.8,0.1,313.3
	c0,7.1-1.7,12.8-8.5,16.1C537.8,559.7,546.7,559.5,555.5,559.8z M284.9,16.5c-7,3.4-8.7,9.2-8.6,16.5c0.3,17.1,0.1,34.2,0.1,51.3
	c7.8,2.9,15.6,2.9,23.4,0c0-17.1-0.3-34.2,0-51.3c0.1-7.4-1.6-13.1-8.5-16.5C289.2,16.5,287.1,16.5,284.9,16.5z M299.7,112.1
	c0-3,0.6-4.5,4-4.4c17.4,0.2,34.8,0.1,52.2,0.2l0.4-0.4L356,107c-1.6-0.1-3.2-0.3-4.7-0.3c-26.4,0-52.9-0.1-79.3,0
	c-17.3,0-34.5,0.2-51.8,0.3c-0.1,0-0.1,0.1-0.2,0.3c-0.1,0.2,0,0.4,0.3,0.5c17.3-0.1,34.7-0.1,52-0.3c3.2,0,4.3,1,4.3,4.2
	c-0.2,14.1-0.1,28.3-0.1,42.4c7.8-2.9,15.6-2.7,23.3,0C299.8,140.2,299.8,126.1,299.7,112.1z M356.1,131.2
	c7.4-1.7,14.8-1.8,22.2-0.1c0-6.3,0.2-12.6,0-18.9c-0.1-3.4,0.9-4.7,4.4-4.6c3.1,0.1,6.3,1,9.2-0.7c-12,0-24,0.1-36,0.1
	c0,0.3,0,0.6,0,0.8C356,115.6,356.1,123.4,356.1,131.2z M185.3,106.9c2.3,1.4,4.8,0.8,7.1,0.7c3.9-0.2,5.8,0.7,5.5,5.1
	c-0.4,6.1-0.1,12.2-0.2,18.3c7.5-1.5,15-1.6,22.5,0.1c0-7.8,0.1-15.5,0.1-23.3c-0.1-0.3-0.1-0.6-0.1-0.8
	C208.6,107,197,107,185.3,106.9z M125.4,243.5c-19.4,0-38.9,0-58.3,0c-3.4,0-6.5,0.5-5.5,4.8c0.9,4.1,0.6,8.1,0.6,12.1
	c-0.1,3.6,1.3,4.5,4.7,4.5c11.5-0.2,23-0.1,34.5,0c1.8,0,3.9-0.8,5.4,1.1c-2.2,2.6-1.6,5.7-1.6,8.6c-0.1,23.8-0.1,47.7,0,71.5
	c0,21.9-0.2,43.8,0.2,65.7c-0.2,16.4-0.2,32.7,0,49.1c0,4.8-1.5,7.3-6.4,7.5c-0.7,0.2-1.4,0.4-1.8,1c-5.2,7.6-12.4,13.4-18.8,19.9
	c-5,5.1-9.5,10.8-16,14.2c0,3.6,0,7.2,0,10.8c1.8,0,3.5-0.1,5.3-0.1c2.7-3.5,5.8-6.7,8.9-9.8c9.5-9.5,19-19,28.5-28.4
	c2.5-2.4,4.4-5,4.5-8.6c0.2-3.3,0.1-6.7,0.1-10.1c0-60.3,0-120.6,0-180.9c0-8.7,0.1-8.7,8.4-8.8c9.4,0,9.4,0,9.4,9.3
	c0,61.4,0,122.7,0,184.1c0,2.8-0.3,5.7,0.1,8.5c1.4,2.7,2.6,1.5,3.7-0.3c0.5-1.3,0.6-2.8,0.6-4.2c0-17.6,0.2-35.2-0.1-52.9
	c0.2-2.3,0.1-4.6,0.1-6.9c0-43.5,0-86.9,0-130.4c0-6.9,0.4-7.3,7.1-7.3c9.2,0,18.4-0.1,27.6,0c5.8,0.1,6.4,0.6,6.4,6.4
	c0.1,13.1,0,26.1,0,39.2c0.1,33-0.2,66.1,0.1,99.1c-0.3,17.2-0.1,34.4-0.1,51.6c0,1.9,0.1,3.9,1.4,5.5c0.7,0.4,1.3,0.3,1.8-0.3
	c1.8-3.1,1.2-6.5,1.2-9.9c0-61.1,0-122.3,0-183.4c0-8,0.2-8.1,7.2-8.4c10.5-0.4,10.6-0.4,10.6,10.3c0,60.6,0,121.2,0,181.8
	c0,3.3-0.7,6.8,1.4,9.8c0.7,0.5,1.3,0.4,1.8-0.2c1.2-1.7,1.2-3.7,1.2-5.6c0-17.1,0.2-34.3-0.1-51.4c0.2-2.3,0.1-4.6,0.1-6.9
	c0-43.5,0-86.9,0-130.4c0-6.9,0.4-7.3,7.1-7.3c9.2,0,18.4-0.1,27.6,0c5.8,0.1,6.4,0.6,6.4,6.4c0.1,13.1,0,26.1,0,39.2
	c0.1,33-0.2,66.1,0.1,99.1c-0.3,16.9-0.1,33.7-0.1,50.6c0,1.9,0.1,3.9,1.4,5.5c0.7,0.4,1.3,0.4,1.8-0.3c1.7-2.9,1.2-6.2,1.2-9.3
	c0-59.9,0-119.8,0-179.7c0-1.9,0.1-3.9,0-5.8c-0.1-3.6,1.3-5.3,5.1-5.8c11.4-1.3,12.6-0.4,12.6,10.9c0,59.7,0,119.5,0,179.2
	c0,3.3-0.7,6.8,1.4,9.8c0.7,0.5,1.3,0.4,1.8-0.2c1.2-1.7,1.2-3.7,1.2-5.6c0-16.4,0.2-32.9-0.1-49.3c0.3-23.2,0.1-46.3,0.1-69.5
	c0.1-22.8,0-45.6,0-68.4c0-6.1,0.6-6.6,6.7-6.7c9-0.1,18,0,27.1,0c6.9,0,7.3,0.4,7.3,7.1c0.1,14.3,0,28.6,0,43
	c0.1,31.5-0.2,62.9,0.1,94.4c-0.4,18.5,0.3,37-0.3,55.5c-0.1,3.5-2.1,5.8-4.4,8.1c-10.8,10.8-21.6,21.5-32.3,32.4
	c-1.6,1.6-4.3,2.9-2.7,6c3.5,0,7.1,0,10.6,0c2.7-3.5,5.8-6.6,8.9-9.7c9.4-9.3,18.7-18.6,28-28c3.6-3.7,3.5-4.4-0.8-6.8
	c-1.2-0.7-1.9-1.4-2.2-2.7c-0.3-2.1-0.3-4.2-0.3-6.3c0-61.1,0-122.3,0-183.4c0-1.4,0.1-2.8,0-4.2c-0.2-4.1,2.1-5.6,5.8-5.9
	c2-0.1,3.9,0.2,5.8,0.4c5.7,0.6,6.1,0.9,6.1,6.9c0,63.4,0.1,126.9,0,190.3c0,0.9-0.1,1.8-0.2,2.7c-0.1,3.1-2.2,5.1-4.2,7.1
	c-11.2,11.2-22.5,22.4-33.6,33.7c-1.6,1.6-4.4,2.9-2.8,6.1c3.5,0,7.1,0,10.6,0c6.7-8.4,14.9-15.5,22.4-23.2
	c5.4-5.6,11-10.9,16.4-16.5c1.8-1.9,4.1-4.2,0-6.2c-4.4-0.8-4.1-4.2-4.1-7.3c-0.1-16.4,0.1-32.7-0.1-49.1c0.4-14.7,0.1-29.3,0.1-44
	c0-31.1,0-62.2,0-93.4c0-6.3,0.5-6.8,6.5-6.8c9.4-0.1,18.7-0.1,28.1,0c5.8,0.1,6.4,0.6,6.4,6.4c0.1,14.3,0,28.6,0,43
	c0.1,31.6-0.2,63.3,0.2,94.9c-0.2,16.2,0,32.4-0.1,48.6c0,2.7,0.6,5.8-2.4,7.6c-3.8,4.4-7.5,8.7-11.7,12.8c-9.1,9-18.2,18-27.1,27.2
	c-1.5,1.6-4.3,2.9-2.7,6c3.5,0,7.1,0,10.6,0c2.3-2.9,4.7-5.6,7.3-8.2c9.2-9.1,18.3-18.5,27.6-27.5c3.5-3.4,5.6-6.6,3-11.4
	c-0.3-2.3-0.2-4.6-0.2-6.9c0-61,0-122,0-182.9c0-10.1,0-10.1,10.1-9.7c7.6,0.3,7.7,0.4,7.7,7.9c0,0.5,0,1.1,0,1.6
	c0,61.3,0,122.7,0,184c0,1.9,0.1,3.9-0.2,5.8c-0.7,3.6-4.5,3.6-6.5,5.7c-12.2,12.2-24.4,24.4-36.6,36.7c-1.3,1.3-3.1,2.6-1.6,4.9
	c3.5,0,7.1,0,10.6,0c2.7-3.5,5.8-6.6,8.9-9.8c10-9.9,20-19.9,29.9-29.9c1.7-1.8,4.5-3.6,1.7-6.6c-2.1-2.4-1.6-5.3-1.6-8
	c-0.1-16,0.1-32-0.1-48c0.4-14.3,0.1-28.6,0.1-43c0-31.5,0-62.9,0-94.4c0-6.3,0.5-6.8,6.5-6.8c9.4-0.1,18.7-0.1,28.1,0
	c5.8,0.1,6.4,0.6,6.4,6.4c0.1,14.3,0,28.6,0,43c0.1,31.6-0.2,63.3,0.2,94.9c-0.2,16.2,0,32.3-0.1,48.5c0,6.7-0.1,6.7-6.3,8
	c-3.6,1.6-4.8,5.4-7.4,8c-10.7,10.4-21.3,21-31.7,31.7c-1.6,1.6-4.3,2.9-2.7,6.1c3.5,0,7.1,0,10.6,0c2.7-3.5,5.8-6.7,8.9-9.8
	c9.5-9.5,19-19,28.5-28.5c2.5-2.4,4.4-5,4.5-8.7c0.2-2.3,0.1-4.6,0.1-6.9c0-61.7,0-123.3,0-185c0-7.6,0.3-7.8,7.6-7.8
	c10.1-0.1,10.1-0.1,10.1,10.2c0,60.8,0,121.5,0,182.3c0,3.1-0.6,6.4,1.4,9.3c0.7,0.5,1.3,0.4,1.8-0.2c1.2-1.7,1.2-3.6,1.2-5.6
	c0-17.2,0.2-34.4-0.1-51.6c0.4-46.7,0.1-93.5,0.1-140.2c0-2.1-0.1-4.3-1.7-6c1.5-1.8,3.6-1.1,5.4-1.1c11.8-0.1,23.6-0.1,35.3,0
	c3.7,0,5.6-1.5,4.6-5c-1.5-5.4-0.5-10.8-0.9-16.2C384.5,243.5,254.9,243.5,125.4,243.5z M243.5,468.5c-0.3,0-0.6,0-0.9,0
	c-0.9-0.2-1.7-0.6-2.6-0.6c-12.5-0.1-25-0.1-37.5,0c-1.6,0-3.2,0.2-4.4,1.5c-0.4,0-0.9,0.1-1.3,0.1c-7.1-2.6-14.1-2.6-21.2,0
	c-0.4,0-0.8,0-1.2-0.1c-1.7-1.6-3.9-1.6-6-1.6c-10.8-0.1-21.6-0.1-32.3,0c-2.1,0-4.3,0-6,1.5c-0.6,1.1-1.4,1.3-2.2,0.2
	c-6.7-2.7-13.4-2.6-20.1,0c0,2.5-2,3.6-3.5,5.1c-11.2,11.3-22.5,22.5-33.7,33.8c-1.6,1.6-3.5,3.1-3.1,5.8c21.3,0,42.7,0.1,64,0.1
	c45.9,0,91.7-0.1,137.6-0.1c0.1-2.5,2.1-3.6,3.5-5.1c11.2-11.3,22.5-22.5,33.7-33.7c1.6-1.6,3.5-3.1,3.1-5.8
	c-2.2-2.1-4.9-1.6-7.5-1.6c-12.1-0.2-24.1,0.4-36.2-0.5c-0.3,0-0.6,0-0.9,0C257.8,468.7,250.6,467.3,243.5,468.5z M413.3,514.2
	c33.6,0,67.2,0.1,100.8,0.1c0-11.2,0.8-22.4,0-33.6c-0.3-3.8,2.6-7.6,0-11.3c-1.6-1.4-3.5-1.5-5.4-1.5c-11.2-0.1-22.4-0.1-33.6,0
	c-1.9,0-3.9,0.1-5.4,1.6c-0.4,0-0.8,0-1.2,0.1c-7.1-2.6-14.1-2.6-21.2,0c0,2.5-2,3.6-3.5,5.1c-11.2,11.3-22.5,22.5-33.7,33.8
	c-1.6,1.6-3.5,3.1-3.1,5.8C409.1,514.2,411.2,514.2,413.3,514.2z M370.2,468.1c-8.8-0.5-17.5-0.5-26.3,0c-1.1,0.1-2,0.6-2.7,1.4
	c-0.1,2.5-2.1,3.6-3.5,5.1c-11.2,11.3-22.5,22.5-33.7,33.7c-1.6,1.6-3.5,3.1-3.1,5.8c10.6,0,21.2,0,31.8,0c0.1-2.5,2.1-3.6,3.5-5.1
	c11.2-11.3,22.5-22.5,33.7-33.7c1.6-1.6,3.5-3.1,3.1-5.8C372.3,468.7,371.3,468.2,370.2,468.1z M433.4,468.1
	c-8.1-0.4-16.1-0.4-24.2,0c-1.2,0.1-2.4,0.5-3.3,1.5c-1.3,1.4-2.5,3-3.8,4.3c-11.5,11.5-23,23-34.4,34.5c-1.6,1.6-3.5,3.1-3.1,5.8
	c10.6,0,21.2,0,31.8,0c0.1-2.5,2.1-3.6,3.5-5.1c11.2-11.3,22.5-22.5,33.7-33.7c1.6-1.6,3.5-3.1,3.1-5.8
	C435.8,468.6,434.6,468.1,433.4,468.1z M353.9,514.1c0-2.5,2.1-3.6,3.5-5c10.3-10.4,20.7-20.6,31-31c3.3-3.4,6.7-6.6,11.2-8.5
	c-6.4-2.6-12.7-2.6-19.1,0c2.1,2.2,1.2,3.7-0.7,5.6c-11.2,11-22.2,22.1-33.3,33.2c-1.6,1.6-3.5,3.1-3.1,5.8
	C346.8,514.1,350.4,514.1,353.9,514.1z M290.2,514.1c0.1-2.5,2.1-3.6,3.5-5.1c11.4-11.5,22.9-22.9,34.4-34.4
	c1.4-1.5,3.5-2.6,3.5-5.1c-6.4-2.6-12.7-2.6-19.1,0c1.4,1.9,4.7,0.3,5.7,3.3c-11.8,11.8-23.7,23.7-35.5,35.5
	c-1.6,1.6-3.5,3.1-3.1,5.8C283.2,514.1,286.7,514.1,290.2,514.1z M62.1,503.5c2.7,0.4,4.6-0.8,6.5-2.7c8.5-8.7,17.2-17.3,25.8-25.8
	c1.5-1.5,3.1-3,2.7-5.4c-11.7,0-23.3-0.1-35-0.1C62.2,480.8,62.1,492.1,62.1,503.5z M196.9,272.4c0-7.7-0.3-7.9-7.7-6.8
	c-2.2,0.3-4.6,0.4-6.9,0.1c-5.4-0.8-6.8,1.2-6.8,6.6c0.2,65.7,0.1,131.4,0.1,197.1c7.1,0,14.1,0,21.2,0
	C196.9,403.8,196.9,338.1,196.9,272.4z M264.8,300.9c0-10.1-0.1-20.2,0-30.2c0-3-0.4-4.4-4.1-5.2c-3.8-0.7-7.3,0.7-10.9,0.2
	c-5.3-0.7-6.4,1.6-6.3,6.5c0.1,65.4,0.1,130.8,0.1,196.2c6.7,2.1,13.5,0.9,20.3,0.6c0.4,0,0.7-1.1,1-1.7
	C264.8,411.9,264.8,356.4,264.8,300.9z M332.6,463c0-62.1,0-124.1,0-186.2c0-3.3,1.2-7.2-0.6-9.9c-1.8-2.6-5.6-0.6-8.5-1.2
	c-0.9-0.2-1.7-0.6-2.5-0.7c-6.9-0.9-9.5,1.3-9.5,8.1c0,63.5,0,127,0,190.4c0,2-0.8,4.3,1,6c6.4,0,12.7,0,19.1,0
	C333.5,467.6,332.6,465.2,332.6,463z M400.5,463.5c0.1-36.8,0-73.5,0-110.3c0-27.4-0.1-54.8,0.1-82.2c0-4.3-1.2-5.7-5.4-5.3
	c-3,0.3-6,0.1-9-0.3c-5.9-1-6.9-0.3-6.9,5.7c0,64.3,0,128.6,0,193c0,1.9-0.7,3.9,1,5.5c6.4,0,12.7,0,19.1,0
	C401.3,467.8,400.5,465.5,400.5,463.5z M468.4,280.4c0-4.6,1.9-10.4-0.8-13.3c-3-3.3-9-0.5-13.7-1.2c-5.3-0.8-6.8,1.2-6.8,6.6
	c0.2,65.7,0.1,131.4,0.1,197.1c7.1,0,14.1,0,21.2,0C468.5,406.5,468.5,343.4,468.4,280.4z M128.9,463.5c0-61,0.1-122,0-183
	c0-4.7,2.1-10.7-1-13.8c-3.1-3-9.1-0.4-13.8-1c-5.2-0.7-6.4,1.5-6.4,6.5c0.2,65.8,0.1,131.5,0.1,197.3c6.7,0,13.4,0,20.1,0
	C129.7,467.8,128.9,465.5,128.9,463.5z"/>
<path style="fill:#E4E7EB;transform:scale(0.2)" :class="ValueId+'_color6'" d="M130.2,412.2c14.8,0,29.5,0,44.3,0c0,19.1,0,38.2,0,57.3c-14.8,0-29.6-0.1-44.3-0.1
	C130.1,450.3,130.2,431.2,130.2,412.2z"/>
<path style="fill:#E4E7EB;transform:scale(0.2)" :class="ValueId+'_color6'" d="M198,412.2c14.8,0,29.6,0,44.4,0c0.1,18.8,0.1,37.5,0.2,56.3c-1.6,1.5-3.7,0.9-5.5,1
	c-13,0-26,0-38.9,0C198.1,450.4,198.1,431.3,198,412.2z"/>
<path style="fill:#E4E7EB;transform:scale(0.2)" :class="ValueId+'_color6'" d="M265.9,412.2c14.8,0,29.6,0,44.5,0c0,17.6,0.1,35.3,0,52.9c0,1.5,0.4,3.2-1.1,4.4
	c-12.8,0-25.6,0-38.4-0.1c-1.9,0-4.4,1-5.2-2C265.8,449,265.8,430.6,265.9,412.2z"/>
<path style="fill:#E4E7EB;transform:scale(0.2)" :class="ValueId+'_color6'" d="M401.7,412.2c14.8,0,29.6,0,44.4,0c0,17.2,0,34.4,0.2,51.7c0.1,4.2-0.9,6.3-5.5,5.7
	c-1.4-0.2-2.8,0-4.2,0c-10.3,0-20.5,0-30.8,0c-3.6,0.4-4.4-1.4-4.4-4.6C401.7,447.3,401.7,429.8,401.7,412.2z"/>
<path style="fill:#E4E7EB;transform:scale(0.2)" :class="ValueId+'_color6'" d="M333.8,412.2c14.8,0,29.6,0,44.5,0c0,17.4-0.1,34.8,0.2,52.2c0.1,4.4-1.6,5.6-5.4,5.2
	c-10.6,0-21.2,0-31.8,0c-7.4-0.2-7.4-0.2-7.4-7.8C333.7,445.2,333.8,428.7,333.8,412.2z"/>
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
                                    <button :style="{background:'rgba('+getterCribBg1+')'}" @click="ShowElement(getterCribBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCribBg2+')'}" @click="ShowElement1(getterCribBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCribBg3+')'}" @click="ShowElement2(getterCribBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCribBg4+')'}" @click="ShowElement3(getterCribBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCribBg5 +')'}" @click="ShowElement4(getterCribBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCribBg6+')'}" @click="ShowElement5(getterCribBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCribBg7+')'}" @click="ShowElement6(getterCribBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Crib= [
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
            var randomNumber = Crib[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Crib[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Crib'){
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
                getterCribBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Crib') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCribBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Crib') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCribBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Crib') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCribBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCribBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCribBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCribBg7: {
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
                            name:'Crib',
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