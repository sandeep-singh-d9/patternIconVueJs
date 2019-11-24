<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#D770AD;transform:scale(0.2)" :class="ValueId+'_color1'" d="M139.7,100.9c-2.1-8.9-2.5-16.9,2.1-23.5c3.2-4.5,3-7.1,0.1-11.8c-4.7-7.6-5.8-16.8-4.6-25.6
	c1.5-11,10.7-19.3,22.7-21.5c11.1-2,22.2-4.8,33.4-5.4c13.8-0.7,27.7-1.2,41.6,0.1c4.5,0.4,9,0.5,13.5,0.8c1.9,0.1,3.2-0.5,4.3-2.1
	c8.7-13.2,28.1-15.6,41.2-2c3,3.1,6.7,2.9,10.3,3.7c13.8,3.3,26.8,7.8,34.8,20.9c0.3-0.1,0.8-0.2,0.9-0.5
	c7.7-16.2,15.1-20.5,33.5-19.3c6,0.4,12.1-0.3,18,1c10.1,2.2,17.5,7.9,21.4,17.5c6.6,16.2,12.8,32.6,19.1,48.9
	c1.4,3.5,1.7,7.3,1.6,11.7c19.4-12.3,39.9-7.3,59.8-4.6c24.4,3.3,35.1,17,34.9,41.7c-0.1,17-0.5,33.9-1.2,50.8
	c-0.2,4.4,1.2,5.4,5.3,5.4c6.6-0.1,13.1-0.5,19.7,0.6c15.2,2.6,26.1,12.7,28.7,27.8c1.7,10,3,20.1,4.1,30.2c1.1,9.8-1.4,18.7-8.4,26
	c-2.7,2.8-2.6,6.3-2.6,9.5c-0.4,30.1-1.1,60.3,3,90.3c1.1,8,3.2,15.9,2.1,24.1c-2.4,17.8-13,28.7-29.3,34.6
	c-12.1,4.4-25,5.4-37.7,6.5c-50.5,4.6-98-5.7-142.4-30.4c-0.8-0.4-1.6-0.7-3.8-1.6c3,8.1,5.4,15.1,8.1,22
	c23,57.8,55.2,109.5,99.9,153.1c3.1,3,3.5,4.1-1,6.2c-27.2,12.4-53.8,9.6-80-2.9c-1.7-0.8-3.4-1.6-5.9-2.9c2.2,6.9,4.2,13,6,19.2
	c2.2,7.4,3.1,15.1,3.1,22.8c0,4.1-1.3,5-5.2,4.8c-21.9-0.9-41-9.4-58.2-22.2c-17-12.7-29.9-29-39.6-47.9c-0.9-1.7-1.7-3.3-2.9-5.5
	c-6.8,13.6-14.5,26-24.3,37c-21,23.4-46.1,40.2-77.5,46.6c-4,0.8-4.9-0.4-5-4c-0.8-18.5-1.3-36.9,4.2-54.8c1-3.3,0.2-3.9-3.1-3.1
	c-21,5-40.3,1.1-58-11.1c-2.9-2-3.2-3-0.1-4.9c45.2-28.4,71.5-71.6,92.8-118.8c5-11.1,9.5-22.5,13.3-34.2c0.6-1.7,1.7-3.3,1.1-5.8
	c-5.3,3.1-10.4,6.3-15.6,9.1c-37.6,20.7-77.8,30.9-120.7,30.3c-18-0.3-36.1-1.8-53.7-6.4c-24.2-6.5-36.4-25.7-32.4-50.5
	c5.9-36.3,5.5-72.8,3.8-109.3c-0.2-4.9-0.8-9.8-0.7-14.7c0.3-12.9-7.5-23.5-10-35.6c-8.5-40.1-1.9-76.6,25.9-107.5
	C57.5,83.4,99,77.5,132.7,96.8C134.6,97.9,136.5,99,139.7,100.9z"/>
<path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M341.1,285.8c9.8-2.6,19.5-2.7,28.5-6.2c4.3-1.7,7.6-5.5,12.7-5.4c2.6,0,5.2-0.8,7.6,0.9
	c12.3,9,23.2,6.2,34-3.5c1.5-1.4,3.2-2.7,5-3.7c6.2-3.6,9.5-2.5,12.6,3.9c4.9,10.3,16.3,15.3,28.6,13.2c23.6-3.9,47.3-7.4,70.9-11.2
	c6.6-1.1,13.4-1.5,19.9-6.1c-1.8,14.4-1.4,27.8-1.3,40.9c0.2,18.1-0.1,36.4,2.5,54.5c1.2,8.1,2.4,16.3,3.6,24.4
	c1.9,13.6-9.8,27.9-25.5,31.1c-23.4,4.8-47.1,6-70.7,4.3c-32.6-2.4-63.2-12.5-91.9-28.2c-3.8-2.1-5.6-4.7-5.4-9.4
	c0.4-12.1-3-23.7-6.4-35.2c-0.4-1.4-0.7-2.8-1.2-4.8c7.1,1.8,13.6,4.6,21.8,2.5c-9-4.4-21.5-0.2-25.4-13.5c11.6,3,22.7,3.3,33.8,0.8
	c1.3-0.3,3.6,0.3,3.2-2c-0.5-2.3-2.4-0.9-3.7-0.6c-9.3,2.2-18.6,1.9-27.9,0.2c-3.3-0.6-6.6-1.5-8-5.3
	C353.3,313.3,347.6,299.6,341.1,285.8z"/>
<path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M204.3,346.7c7.6,3.3,14.6,0.8,21.8-2.3c-1.6,12.5-1.6,24.3,1.7,35.8c1,3.6-0.1,5-2.8,6.7
	c-23.7,15.1-49.1,25.9-76.6,31.9c-23.5,5.1-47.2,5.5-71.1,3.5c-9.2-0.8-18.3-1.9-27.2-3.7c-8.8-1.8-16.5-6-21.7-13.9
	c-4.9-7.4-4.1-15.7-2.9-23.5c2.1-14.1,3.8-28.2,4-42.5c0.2-13.5,2.4-27.1,1-40.6c-1.4-13.9-0.5-27.8-2-41.6
	c-0.1-1.3-0.7-2.9,0.9-4.6c7.1,10.2,15.8,18.6,26.6,24.6c23.8,13.1,47.2,12.7,70.4-1.4c1.9-1.2,4.3-2.1,5.6-3.8
	c4.9-6.6,11.2-5.5,17.8-3.8c2.9,0.7,5.8,1.6,8.8,1.9c4.9,0.5,8.3,1.9,10.7,7.2c2.6,5.8,8.7,8.1,15,8.7c9.8,1,19.5-1,29.3-1.4
	c8.8-0.4,17.5-1.8,26.2-2.8c2.8-0.3,2.7,1.2,2,3.2c-5.1,14.7-9.7,29.6-13.1,44.8c-0.6,2.9-3.3,3.2-5.7,3.7
	c-9.3,1.9-18.6,1.7-27.9-0.5c-1.3-0.3-2.8-1.1-3.2,0.8c-0.4,1.9,1.4,1.7,2.7,2c9.6,1.7,19.2,2.7,28.9,0.5c1.4-0.3,3.1-1.1,3.9,0.8
	c0.8,1.8-0.1,3.4-1.5,4.4c-3.6,2.5-7.5,4.1-12,4.5C210.5,345.5,207.4,346.2,204.3,346.7z"/>
<path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M452.2,577.4c-1.6,1.5-3,1.8-4.5,2c-26.1,2.4-48.8-5.6-68.8-22.2c-4.6-3.9-9.3-7.7-13.2-12.3
	c-3.3-3.9-5.4-1-8,0.5c-3.5,2-1.4,3.9-0.3,6c9.3,17.6,18.1,35.4,23.2,54.9c1.5,5.9-0.9,5.6-4.6,4.6c-13.3-3.8-25.5-10-36.5-18.5
	c-21.2-16.5-34-38.8-43.3-63.4c-0.8-2.1-0.2-3.6,0.4-5.4c6.6-21.3,9.4-43.1,10.5-65.3c0.6-13.7-0.3-27.3-1-41
	c-0.2-3.7,2-3.3,3.8-2.9c7.7,1.8,15.4,0.6,23.1,1c4.9,0.3,10-0.3,14.4-1.9c5.7-2,7.5,0.4,9,5c6.5,19.9,15.3,38.8,24.8,57.4
	c14.9,29,32.2,56.4,53.3,81.4C440,564,445.7,570.8,452.2,577.4z"/>
<path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M297.7,446.3c-0.4,30.6-4.1,60.6-15.8,89.1c-14.6,35.5-38.5,62.3-73.5,78.9
	c-11.4,5.4-11.8,5.3-11.4-6.9c0.7-19.8,4.6-38.7,17.8-54.5c3.2-3.8-0.9-5.1-2.4-7.3c-2-2.8-3.4-1.3-5.3,0.3
	c-15.1,12.5-32.2,18.2-51.8,14c-1.5-0.3-3.8-0.3-4.2-2.2c-0.3-1.7,1.9-2.1,3-3c23.3-19.3,41.3-42.9,56.7-68.8
	c14.4-24.3,25.6-50.2,34.8-76.9c1.1-3.3,1.6-4.8,6.3-3.6c11.4,2.9,23.1,4.7,34.8,6.2c9.7,1.3,9.2,0.9,10.1,10.9
	C297.3,430.5,297.6,438.4,297.7,446.3z"/>
<path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M324.4,402.9c-23,0.6-45.4-4.4-67.9-8.3c-11-1.9-18.1-13.1-19-26.3c-1.7-26.1,5.4-50.5,13.5-74.8
	c0.4-1.1,1-2.1,1.2-3.1c1.3-7.4,4.8-11.3,13-12.3c9.1-1.1,14.2-9.3,14.1-20.2c0-4.7,1.7-6.1,5.9-5.5c2.8,0.4,5.6,0.7,8.3,1.2
	c2.6,0.5,3.9,2.2,4,4.7c0.6,16.6,13.4,26.2,27.3,27.9c1.9,0.2,3.1,0.8,4,2.5c14.1,29,26.5,58.5,30.9,90.7
	c2.2,15.8-4.4,22.7-20.6,23.4C334.2,403,329.3,402.9,324.4,402.9z"/>
<path style="fill:#FCC1DE;transform:scale(0.2)" :class="ValueId+'_color2'" d="M369.3,236c-0.7,5.9,0.7,10.1,1.3,14.3c0.7,4.4,0.7,8.6-0.9,12.8c-1.3,3.3-3.4,5.5-7.1,6.5
	c-10.7,3-21.8,4.4-32.7,5.1c-10.4,0.6-19.8-3.9-21.2-18.3c-1.6-17.2-4.3-34.2-6.3-51.3c-2.1-17.1-4-34.3-6-51.4
	c-0.9-7.8-2.6-15.6-2.4-23.5c0.2-8.2,4.2-13.9,11.8-16.8c8.8-3.5,18.5-5.7,27.1-3.1c10.6,3.2,20.1,0,30.2-0.3
	c22.6-0.7,44,8.3,57.2,30.7c10.2,17.4,3.8,41.3-13,53.1c-5.3,3.7-10.8,7-16.8,9.2c-4.3,1.6-5.1,2.4-0.9,5.7c12,9.6,24.3,19,35.2,30
	c7.2,7.3,6.9,11.7-1.1,18c-3.7,2.9-7.2,6-10.9,8.9c-6,4.6-12.2,3.9-17.5-1.7C387,254.9,378,246.6,369.3,236z M81.6,180.4
	c0.6-8.5,2.5-16.7,7.6-23.8c6.8-9.5,13.2-10.5,22.3-3.6c2.7,2,5.5,4,8.5,5.6c7.4,3.9,14.5,3,21.3-1.5c5.3-3.4,6.5-8.8,3.3-14.1
	c-5.9-10-13.6-18.5-23.7-24.6c-25.4-15.4-54.9-10.6-74.6,10.7c-19.2,20.8-25.9,46-22.8,74c2.4,22.1,11,41,27.6,55.7
	c14.3,12.7,31.3,18.6,50.1,13.8c28.3-7.2,44.9-26.8,52.3-54.4c1.2-4.4,2.8-6,7.1-5.6c4.1,0.4,8.3,0.1,12.4,0.2
	c4.3,0.1,6.3-1.8,6.9-6.3c0.7-5.3,0.1-10.4,0-15.7c0-5.4-2.6-6.9-7.5-7.7c-7.7-1.3-15.4-0.8-23-1.6c-11-1.1-22.1-1.2-33.2-1.6
	c-3.3-0.1-5.2,1.5-5.6,5c-0.7,5.6-1.4,11.2-2.6,16.7c-1,4.8,1.6,6.6,5.4,7.6c1.6,0.4,3.4,0.2,5.1,0.3c2,0.1,2.5,1.1,1.8,3
	c-2.8,7.6-13.2,14.2-22.1,13.9c-7.1-0.3-12.4-5.3-15-14.6c-1.9-6.9-2.1-14.1-1.8-20.9C81.6,187.2,81.4,183.8,81.6,180.4z
	 M502.5,135.9c0-3.2,0.1-6.4,0-9.6c-0.2-8.1-3.1-11.9-10.9-13.3c-10.9-1.9-22-2.6-33-3.2c-13.5-0.7-18.3,8.8-17.1,19.5
	c1.1,10.5,1.7,20.9,2.2,31.5c0.6,12.6,1.5,25.1,2.3,37.7c1.4,20.2,3.1,40.4,4.3,60.7c0.6,11,7,16.3,17.9,14.5
	c19.9-3.4,39.9-6.5,59.9-9.8c7.2-1.2,14.5-2,21.6-3.6c7.1-1.6,11-6.7,10.2-12.2c-1.1-8.2-2.2-16.4-3.2-24.5
	c-1.2-9.3-5.1-12.8-14.5-12.8c-11.7-0.1-23.4-0.2-35.1,0.1c-4.6,0.1-6-1.1-6.1-5.9c-0.2-19.8,1.5-39.5,1.4-59.3
	C502.5,142.3,502.5,139.1,502.5,135.9z M205,231.6c-0.2,2.9-1.1,4-4,3.9c-5.6-0.2-11.3-0.3-16.9,0c-6.6,0.3-10.3,4.5-9.6,10.6
	c0.6,5.4,1.4,10.8,2.3,16.1c1.7,10.2,4.9,12.5,15.3,11.6c17.2-1.5,34.4-3,51.5-4.5c5.8-0.5,11.5-1.3,17.3-2.1
	c4.5-0.6,6.6-2.9,6.3-7.6c-0.3-4.9,0-9.8-0.1-14.7c0-5.8-2.2-8.1-8.1-8.4c-4.1-0.2-8.3-0.2-12.4-0.1c-2.4,0-3.5-1-3.3-3.4
	c0.3-3.4,0.8-6.7,1.1-10.1c1.9-21.1,3.9-42.2,5.7-63.3c0.2-2.7,1.3-3.5,3.8-3.6c4.5-0.2,9-0.7,13.5-1.1c7.1-0.6,10.9-4.6,11-11.7
	c0.1-6.8,0.1-13.6,0-20.3c-0.1-10.2-5.8-14.5-15.8-12.7c-14.7,2.7-29.5,4.9-44.3,7.4c-12.7,2.2-25.5,4.2-38.2,6.8
	c-7.1,1.4-9.2,4.9-8.1,12c0.7,5,1.5,10,2.3,15c1,6.2,5.3,9.9,11.3,8.8c5.3-1,10.5-0.4,15.7-0.9c3.8-0.4,4.8,1.3,4.7,4.9
	c-0.2,9.2-0.1,18.5-0.1,23.3C205.9,205.3,206.1,218.4,205,231.6z M316.5,93.7c8.2-7.5,11.2-22.2-3.4-29.7c-3.4-1.8-6.9-3.4-10.3-5.2
	c-2.4-1.3-6.6-2.1-5.6-5.2c0.9-2.6,5.1-1.1,7.7-0.8c3.5,0.4,11.6-3.8,12.8-6.9c0.6-1.6,0.1-2.7-1-3.8c-7.2-6.8-25.2-9.5-33.7-4.9
	c-6.6,3.6-8.9,9.6-8.7,16.8c0.2,6.5,4.9,8.9,10.1,10.6c4.6,1.5,9.3,2.5,14,3.9c1.8,0.5,3.7,1.6,3.4,3.7c-0.3,2.2-2.2,3.4-4.4,3.4
	c-5.2,0.1-10.7,1-15.2-2.5c-4-3.1-6.8-0.5-9.8,1.5c-3.1,2.1-3.5,5-2.4,8.6c3.1,9.9,15,18.2,27.6,18.1
	C303.8,100.6,310.9,98.8,316.5,93.7z M373.1,34.7c-10.6,0-11.5,1-12.3,11.6c-0.6,7.4-2,14.8-2.9,22.2c-0.9,8-3.2,15.8-3.2,23.9
	c0,2-0.2,4.1,2,5.3c7.1,4,12.5,1.5,13.9-6.3c0.4-2,1.1-4,1.1-5.9c0-3.4,2-4.7,4.8-5.4c9.6-2.6,13.7-0.4,17.3,9
	c0.6,1.5,1.5,2.9,1.9,4.5c1.5,6,5.1,6.4,10.1,4.4c4.8-1.9,7.5-4.2,5.2-10c-5.5-13.5-10.7-27.1-15.7-40.7C391,35.6,390,34.7,378,34.7
	c-0.8,0-1.6,0-2.4,0S373.9,34.7,373.1,34.7z M189,101.5c5.1-0.3,5.1-3.2,5.2-6.9c0.2-4.4-2.5-4.3-5.5-4.3c-2.3,0-5.3,0.5-5-3.4
	c0.6-8.3,1.3-16.5,2-24.8c0.5-6.2,2-11.4,10-10.9c2.5,0.1,3.4-1.9,3.4-4.2c0-2.4,0.2-4.9,0-7.3c-0.3-3.9-1.9-5.7-6.4-4.9
	c-10.7,2.1-21.4,4-32.2,5.3c-4.4,0.5-5.5,2.3-5.3,6.2c0.2,4.9,1.7,8.4,7.5,7.4c6-1,7.6,1.7,7.3,7.4c-0.5,7.5-0.4,15,0,22.5
	c0.2,5.1-1.6,6.8-6.7,6.7c-6.9-0.2-7.5,1-6.8,7.7c0.7,6.1,4.6,6.2,9.2,6C173.4,103.2,181.2,102,189,101.5z M220.6,95.6
	c-0.2,4.8,1.9,6.9,6.9,7c5.1,0.1,7.4-2,7.8-7c1.1-12,2.6-24,3.5-36.1c0.4-4.9,1.8-6.6,6.8-5.1c4.3,1.3,6.5-1,6.7-5.3
	c0.1-2.4,0.1-4.9,0-7.3c-0.1-2.8-1.5-4.8-4.3-5.1c-12.3-1-24.5-1.7-36.8-2.6c-2.3-0.2-3.8,0.5-4.2,3.2c-0.5,3.2-1.5,6.3-2,9.4
	c-0.5,3.2,1.3,5,4.3,5.5c2,0.3,4.1,0.3,6.1,0.1c5.2-0.6,6.4,1.8,6.6,6.7c0.3,9.5-1.7,18.9-1.3,28.1
	C220.7,90.3,220.7,92.9,220.6,95.6z M264.7,44.2c4.2-5.4,8.6-10.7,12.4-16.3c1.6-2.3-1.3-3.4-2.6-4.7c-1.3-1.3-2.8-1.5-4,0.4
	c-3.4,5.2-7,10.4-10.2,15.7c-1.7,2.8,0.5,4.4,2.9,5.7C263.7,44.7,264.4,44.6,264.7,44.2z"/>
<path style="fill:#CE6EA9;transform:scale(0.2)" :class="ValueId+'_color3'" d="M388.2,155.3c0,6.7-2.3,10.4-8.7,12.1c-6.3,1.7-13.1,5.1-19-0.9c-6.6-6.7-7.1-14.9-5-23.6
	c0.4-1.8,1.6-3.1,3.4-3.4c6.5-1.2,13-1.7,19.4,0.6C385.4,142.7,388.2,147.2,388.2,155.3z"/>
<path style="fill:#CE6EA9;transform:scale(0.2)" :class="ValueId+'_color3'" d="M377.6,52.5c2.3,5.7,4.6,11.3,6.7,17c1.2,3.4-1.7,3.8-3.9,4c-3.1,0.2-7.1,0.8-6.9-4.2
	C373.7,63.7,374.2,58.2,377.6,52.5z"/>
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
                                    <button :style="{background:'rgba('+getterGirlBannerBg1+')'}" @click="ShowElement(getterGirlBannerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGirlBannerBg2+')'}" @click="ShowElement1(getterGirlBannerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterGirlBannerBg3+')'}" @click="ShowElement2(getterGirlBannerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGirlBannerBg4+')'}" @click="ShowElement3(getterGirlBannerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterGirlBannerBg5 +')'}" @click="ShowElement4(getterGirlBannerBg5 )" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGirlBannerBg6+')'}" @click="ShowElement5(getterGirlBannerBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGirlBannerBg7+')'}" @click="ShowElement6(getterGirlBannerBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterGirlBannerBg8+')'}" @click="ShowElement7(getterGirlBannerBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var GirlBanner= [
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
            var randomNumber = GirlBanner[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  GirlBanner[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'GirlBanner'){
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
                getterGirlBannerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GirlBanner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGirlBannerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GirlBanner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGirlBannerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'GirlBanner') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGirlBannerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterGirlBannerBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGirlBannerBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGirlBannerBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterGirlBannerBg8: {
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
                            name:'GirlBanner',
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