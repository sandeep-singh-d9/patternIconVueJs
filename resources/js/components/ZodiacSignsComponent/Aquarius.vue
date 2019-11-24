<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M262.9,0c19.7,0,36.5,7.7,51.8,19.4c7.9,6.1,15.2,12.9,21.1,20.9c6.4,8.7,13.8,16.6,21.3,24.3
	c4.4,4.5,10.6,6.2,17.4,4.3c13.2-3.8,11.1-6,17.4,7.9c11.4,25.2,22.7,50.4,34.3,75.5c2.5,5.4,2.5,9.3-3.8,11.3
	c-2.8,0.9-3.4,2.9-3.8,5.7c-3.2,22.6-12.2,42.8-25.9,61.1c-26,34.8-72.2,43.4-106.5,32.9c-12.3-3.8-24.3-8.6-36-13.7
	c-21.8-9.4-40.2-3.3-58,9.7c-11.3,8.2-19.8,19-27.8,30.2c-5.5,7.5-10.5,15.3-15.9,22.9c-2.4,3.4-3.6,8-9.4,8.2
	c-1.9,0.1-3.9,3-4.3,5.8c-0.6,5.1-0.9,10.1,0.9,15c1.1,3,2.2,6.4,4.7,8.1c3.2,2,4.8-2.1,7.1-3.4c21.2-11.9,44.7,0,50.3,25.6
	c2.5,11.7,2.4,23.2-4.5,33.6c-1.9,2.8,0.1,4.3,1.1,6.1c9.4,16.9,14.1,34.8,7.4,53.5c-6.5,18.1-18,33.9-32.5,45.9
	c-17.5,14.4-38.8,19.1-61.3,11.4c-4.6-1.6-18.1-3.4-23.1-2.9c-10.9,1-20.2-2.4-26.6-11.4c-7.5-10.4-9.8-22.1-4.6-34.2
	c4.6-10.6,11.4-19.3,23.8-21.6c3.9-0.7,4.3-4.2,5.3-7.2c3.2-9.8,3.2-9.8-4.7-16.1c-25.3-20.3-40-46.7-43.4-78.9
	c-3.3-30.7,8-56.3,29.5-77.8c16.2-16.2,35.3-28.2,56.4-36.8c4.5-1.8,5.1-3.9,3.7-7.9c-1.5-4.2-2.6-8.5-5.8-11.8
	c-3.5-3.6-2.4-6.4,1.6-8.5c5.9-3.2,12.4-4,19-4.1c22.5-0.5,41-10.2,57.2-25c4.9-4.5,8-10.2,8.6-17.2c0.6-7.1,2.1-14.2,4.4-21
	c1.8-5.5-0.6-10.9-0.9-16.3c-0.6-8.4-2.5-16-6.2-24C183.2,59.3,204.7,0.2,262.9,0z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M0,412.9c0-7.7,5.1-12.8,13.4-12.8c8.9,0,16.4,3.5,22.3,10.3c8.5,10,12.1,22,14.4,34.6
	c0.4,2.1-0.2,3.7-2.1,4.8c-2.1,1.2-3.8,0.5-5-1.1c-5.8-7.7-14.4-10.8-22.7-14.4c-4.5-1.9-8.9-3.8-12.9-6.7C2.5,424,0.1,419,0,412.9z
	"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M253,412.2c0.2,4.6-2.5,8.9-7.5,11.7c-4.6,2.6-9.5,4.6-14.2,6.8c-4.2,2-8,4.5-11.2,8
	c-2.8,3.1-6.3,2-7.1-1.7c-2.8-13,12.8-35.2,26-36.9C247.3,399.1,253,403.5,253,412.2z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M250.3,446.8c-0.4,5.1-3.1,9-8.7,10.5c-7.4,2.1-15.4,1.2-22.6,4.8c-3,1.5-5-1.5-4.4-4.9
	c1.5-7.7,14.1-19,22-19.8C244,436.6,250.2,440.7,250.3,446.8z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M5,455.3c0.2-2.7,2.6-5,5.7-6.6c5.5-2.8,11-2.1,16.3,0.7c5.9,3.2,10.3,7.9,14.1,13.3
	c1.2,1.7,1.5,3.5,0.3,5.3c-0.9,1.3-2.5,2.3-3.8,1.6c-7-3.7-14.5-1.2-21.8-2.2C9.4,466.6,4.7,461.8,5,455.3z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M220.7,66.5c0-27,23.4-45,51.6-40.5c18.9,3,32.7,13.9,45,27.5c1.5,1.6,1.8,3.2,0.8,5.1
	c-1.2,2.6-3.5,1.9-5.5,1.9c-22.6-0.4-43.4,5.2-62.4,17.6c-4.4,2.9-8.7,6-12.4,9.8c-1.5,1.6-3.1,2.4-5.4,2.6c-5.2,0.5-8.1-1-9.1-6.6
	C222.1,78,220.4,72,220.7,66.5z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M59.6,490.1c-2.6-10.6,6.2-26.5,16.4-29.7c2.5-0.8,4.9-0.7,7.5-0.2c4.1,0.8,5.6,2.2,3.1,6.6
	c-2.5,4.3-4,9.2-4.1,14.4C77.4,489.7,67.6,493.5,59.6,490.1z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M156.1,241.2c-0.3-9.3-0.6-18.6-3.6-27.5c-1.6-4.5,2.1-4.3,4.4-5c17-5.2,32.4-13.2,45.2-25.8
	c6.7-6.6,9.8-14.6,11.3-24.1c7.9-49.2,33.5-83,85.1-89.9c9.1-1.2,18.4-0.6,29.1,0.1c-5.1,3.8-9.9,5.7-13.3,9.4
	c-2.2,2.4-4.7,4.9-3,8.3s5.2,2.2,8,1.8c15.9-2.1,31.8-4.1,48-3.7c4.2,0.1,6.9,1.4,7.5,6.4c-8.4,1.2-16.8,3-24.1,7.8
	c-2.4,1.5-5.9,2.5-4.8,6.4c1,3.7,4.5,3.4,7.4,3.5c9.1,0.3,18.1,1.2,27.1,2.4c3.4,0.5,5.4,1.9,6.6,4.9c0.6,1.6,1.6,3,2.1,4.6
	c2.6,7.5,10.9,14.1,2.1,23.1c-5.9,6.1-9.5,14.6-18.5,17.4c-2.6,0.8-4.9,2.3-3.8,5.5s3.8,3.6,6.8,2.9c7.3-1.9,14.7-3.9,21.5-7.2
	c1.2,2.8,1.3,2.8-0.8,5.8c-5.5,7.9-11.7,15.3-19.9,20.2c-26.3,15.7-53.3,30.1-84,35.9c-14.6,2.8-28.9,2.4-43.4-0.8
	c-3.8-0.8-7.2-2.2-9.9-5.1c-2.7-3.4-0.5-10.9-8.4-10c-7-5.3-6.9-5.2-11.3,2.4c-5.6,9.8-13.6,17-24,21.7c-8.5,3.9-17.2,7.1-26.2,9.2
	C165.1,243.1,160.4,244.1,156.1,241.2z M227.7,99.3c-3.8,6.6-7.4,12.9-11,19.2c1-10.1-5.4-17.2-8.9-25.4
	c-9.9-23.6-4.1-51.7,13.8-69.2C238.8,7.1,264.7,3,288.8,13.3c9.6,4.1,18.1,9.9,26.1,16.6c11.2,9.5,18.9,21.9,29.6,33.6
	c-6.2-0.9-11-1.7-15.9-2.4c-1.9-0.3-2.8-0.9-1.6-2.8c2.2-3.8,0.1-6.2-2.3-8.9c-13.2-14.8-28.1-26.8-48.1-31
	c-25.1-5.3-51.6,6.5-60.1,27.8c-6.6,16.4-3.8,32.8,2,48.9C220,99.6,224.1,98.5,227.7,99.3z M126.9,212.9c17.8-4.3,17.2-3.5,20,13.3
	c1.7,10,0,20.2,0,30.4c0,11.1-1.3,22.5,5.3,32.5c1.1,1.7,0.2,2.8-0.6,3.9c-4.3,6.2-8.6,12.4-13.4,19.5c-4.6-8.8-5.4-17.4-4.3-26.3
	c2.3-20,2.7-40-2-59.8C130.9,221.9,129.1,217.7,126.9,212.9z M276.8,251.2c4.1-2.7,8.2,0,12.2,0.2c22.8,1.1,45.1-1.1,66.1-10.8
	c15.6-7.1,28.6-17.7,39.5-31c0.7-0.8,0.8-2.8,2.6-1.4c-22.9,47.2-72.7,59.2-111.5,46C282.7,253.2,279.8,252.2,276.8,251.2z
	 M416.8,157.3c-8-13.8-14.7-27.8-21.3-41.9c-5.5-11.8-10.9-23.7-16.3-35.6c-0.6-1.2-2-2.5,0.2-3.7c2.1-1.1,3-0.1,3.8,1.7
	c11.5,25.5,23.1,51.1,34.7,76.6C418.4,155.2,418.4,156,416.8,157.3z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M128.2,459.5c-0.7,1.4-1.6,2.5-3.3,2.6c-9.7,0.4-16.6,5.9-22.7,12.7c-2.9,3.2-6.1,5.7-10.8,5.1
	c0.7-13,14.9-26.1,27.6-25.4C122.7,454.8,125.4,457.2,128.2,459.5z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M126.7,341.6c2.1,4.8,3.9,9.8,7.6,13.7c2,2.1,1,4.1,0.3,6.4c-4.7,15.1,2,27.5,17,31.9
	c6.1,1.8,12.4-0.3,16.3-5.3c3.5-4.6,3.9-12.5,0.4-17.3c-2.8-3.9-5.4-3.3-7.4,0.9c-2.6,7.4-6.5,10.2-13.9,10.3c-3.6-2.5-5.6-6-6-10.4
	c3.6-2.5,7-5.1,9.8-8.7c4-5.2,9.9-6.7,16.2-6.9c5.3-0.2,10.5,0.6,15.6,1.8c3.3,4.1,5.7,8.6,6.4,13.8c-7.3,7.1-12.7,15.6-18.5,23.9
	c-1.8,2.6-5.1,4.1-8.3,4.1c-12.4,0-24.8-0.7-36.5-5.2c-13.3-18.3-20-38.3-15.6-61.1C117.4,332.6,122,337.2,126.7,341.6z
	 M125.7,394.8c8.7,1,17.5,1.7,26.2,3.2c12.8,2.3,19.3-1.2,23.5-13.5c1.1-3.2,3.2-5.2,6.1-6.9c2.7-1.5,5.1-3.7,7.6-5.6
	c7.7,23.9-2.5,34.1-25,39.3C147,415.4,135.3,407.6,125.7,394.8z M91.2,485c9.6,0.4,15.4,4.8,18.4,14.4c1.8,5.8,11.7,8.5,18.9,6.7
	c8.6-2.2,16.3-5.8,20.7-14.1c2.1-3.8,5.3-6.5,9.1-8.4c-0.7,16.3-18.8,31.9-29.6,33.6C109.9,520.4,91.1,505.8,91.2,485z M59.6,490.1
	c9.1,1,16.4-2.9,22.8-8.9c0.7,8.2,1.8,16.3,6.1,23.5c2,3.5,1.3,5-2.6,6.2C73.7,514.5,60.7,504.4,59.6,490.1z M87.3,406.4
	c-6.9-2.6-9.2-9.9-14.5-14.2c-4.9-4.1-8-3.3-9.6,2.8c-5.9-18.8-8-37.9-3.5-57.4C63.5,362.8,72.3,385.8,87.3,406.4z M126.7,341.6
	c-5.8-2.1-10.3-6.9-16.7-7.9c1.1-14.5,7.8-26.8,15.2-40.8c0.4,7.8,1.8,13.8,3.7,19.6c1.2,3.6-1,6.5-1.8,9.7
	C125.7,328.7,125.6,335.1,126.7,341.6z M107.3,448.7c-3.7,2.2-7.4,4.2-10.9,6.4c-2.3,1.4-4-0.1-5.8-1.1c-2.2-1.2-1.5-2.9-1-4.9
	c2.7-9.5,2.7-9.6,11.6-4.8c1.7,0.9,3.3,1.8,4.9,2.8C106.6,447.5,106.8,448.1,107.3,448.7z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M119.3,482.4c6.7,5.1,12.8,2.6,18.9-1.3c0,4.9-2.7,8.3-6.8,10.4C124.9,495,119.1,490.5,119.3,482.4z"
	/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M87.3,406.4c13.6,16,29.6,28.9,48.9,37.5c3,1.3,6.3,3,8-1.2c1.6-3.9-1.9-4.9-4.6-6.2
	c-42.8-20-65.4-54.4-71.2-100.6c-0.3-2.5-0.6-5-1-7.5c-3.4-18.6,6.8-31.9,17.9-44.6c10.2-11.7,22.6-21,36-28.8
	c1.6-0.9,3.7-3.6,5.4-1.4c1.9,2.6-0.6,4.6-2.6,6.2c-12.8,10.1-23.2,22.4-29.6,37.4c-15.4,35.7-10.4,69.5,12.3,100.4
	c12.2,16.6,30.3,23,50.7,22.7c6.9-0.1,12.9,1.5,17.8,6.6c1.9,2,4.2,3.4,6.5,1c2.3-2.3,1.3-4.7-0.7-6.6c-1.5-1.4-3.2-2.7-5-4.1
	c9.3-6.3,9.5-6.2,13.8,2.7c7.9,16.4,9.9,33.1,1.2,49.9c-0.5,1-0.7,2.5-2.8,2.8c-0.3-6.4-1.1-12.8-3.6-18.8c-0.8-1.9-1.9-3.8-2.9-5.6
	c-1.3-2.2-3.3-3.6-5.8-2.2c-2.8,1.6-2.5,4.1-0.9,6.5c7.2,11.2,7.2,23.2,2.7,35.2c-3.7,9.9-11,16.6-20.7,20.9
	c4.4-7.4,8.8-14.6,10-23.3c0.9-7-0.5-13.4-2.7-19.8c-1-2.8-2.7-4.4-5.7-3.4c-2.9,1-2.8,3.5-1.9,5.8c1.8,5.1,2.7,10.2,2,15.5
	c-4,5.2-8,10.3-12.4,15.1c-5.9,6.4-14,9.5-22.7,9.3c-7.4-0.2-13.7-3.2-16.5-10.6c-2.2-5.9-5.3-10-12.1-9.9c-1.6,0-2.6-1.3-3.4-2.5
	c0-1.7,0.1-3.4,0.1-5.1c5.5-2.4,10-6.2,14-10.6c6.1-6.6,14.4-8.3,22.8-9.9c9.8,5.9,12.9,12.5,10,21.7c-5.7,7.2-13.9,7.8-18.9,1.3
	c0.1-0.6,0-1.3,0.3-1.9c1.5-2.8,0.8-5.2-2.1-6.2c-3.1-1.1-4.6,1.2-5.6,3.7c-2.7,6.5-0.3,15.3,5.3,19.4c6.3,4.6,16.2,4.1,21.7-1.1
	c12.1-11.3,10.8-31.2-2.9-41.6c-5.4-4.1-11.2-7.5-17.3-10.4c-16.6-8.1-32.1-17.8-45.4-30.8c-5.4-5.3-8.6-11.3-10.1-18.5
	c-0.2-6,3.3-8.3,8.4-5.4c3.3,1.9,5.8,4.7,7.9,8C81.6,400.9,84.2,403.9,87.3,406.4z M124.8,243.1C100.4,256.8,79,273.5,64.7,298
	c-14.4,24.7-17.7,51.3-14.5,79.3c-8.9-21.7-10.8-43.5-2.7-65.8C58.9,279.9,95.9,252.5,124.8,243.1z M113.9,392.7
	c-25.3-29.2-32.1-86.9,12.3-123.8c1.8,4.7,0.1,8.3-2.5,12c-12.7,17.9-21,37.6-23.1,59.5c-1.5,16,2.7,31,9.8,45.2
	C111.5,388,112.7,390.3,113.9,392.7z M182.6,358.2c-2,1.9-4.2,0.8-6.5,0.5c-10.3-1.4-20.3-1.8-26.6,8.9c-1.7,2.9-4.5,5.1-8.4,4.3
	c-0.5-10,3.9-16.5,14.1-20.5C166.9,346.9,175.2,349,182.6,358.2z M147,382.3c5.9-1.7,10.6-5.1,13.9-10.3c0.1,0.6,0.1,1.3,0.2,1.9
	c0.9,4,3.2,8.7-1.7,11.3C155,387.5,150.5,386.3,147,382.3z M39.5,434.1c-8-4.7-15.1-7.4-22.1-10.3c-3.2-1.3-6.2-3-8-6
	c-1.6-2.6-2.2-5.6-0.3-8.3c1.8-2.5,4.4-1.8,6.9-1.3c9.1,1.7,15,7.4,18.9,15.3C36.5,426.5,37.6,429.7,39.5,434.1z M224.3,424.4
	c2.9-8.1,6.6-13.6,14-15.7c2.1-0.6,4.7-2.4,6.1,0.6c1.5,2.9,0,5.6-2.6,7C236.5,419.1,230.9,421.4,224.3,424.4z M229.4,450.4
	c4-4.8,8-5.5,13.2-4.2C239.2,451.4,234.4,449,229.4,450.4z M12.8,456.7c5.2-3,9-1.5,13.7,2.2C21.2,459.4,16.9,461.1,12.8,456.7z"/>
<path :style="{fill:'rgba(255, 182, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M239.4,218.6c22.6,9.1,45.4,7.4,68,0.7c25.4-7.6,49.1-19.3,70.9-34.2c8.1-5.5,15.5-12.6,18.9-22.5
	c2.8-2.1,5.7-4.2,9.4-7c-1.3,6.4-4.4,10.8-6.9,15.4c-5.2,9.6-9.9,19.7-19.5,26.1c-2,1.3-2.8,3.4-1.5,5.5c1.6,2.8,4.4,2.3,6.8,1.3
	c5.4-2.3,10.6-4.9,16.7-7.7c-0.4,5.2-2.5,8.7-4.9,12c-9.4,12.4-20.5,22.8-34.4,30.2c-16.8,9-34.5,13.7-53.4,14.6
	c-10.9,0.5-21.9,0-32.7-1.9c-7.4-2.9-14.9-5.6-22.2-8.8c-7.4-3.2-9.8-10.6-13-17.2C240.6,223.1,240.1,220.8,239.4,218.6z
	 M156.1,241.2c21.7-0.8,41.1-7.3,56.7-23.1c2.7-2.7,4.9-5.8,6.3-9.3c1.2-3.1,2.6-6.3,5.9-6.6c3.8-0.3,4.6,3.6,6,6.4
	c-3,2.9-1.8,6.3-0.6,9.4c2.3,6.3,4.9,12.5,7.5,19.2c-37-3-59,19.9-80,46.5C153.1,269,154.6,255.1,156.1,241.2z M328,79
	c11-6.9,20.6-8.3,31.9-2.4C349,77.4,339.4,78.1,328,79z M399.3,188c3.7-6.5,6.7-11.8,9.7-17.2C409.4,178.1,408.8,184.9,399.3,188z
	 M381.7,102.1c-6.3,1.8-10.3-0.4-14.5-1.1C371.4,100.4,375.8,99.2,381.7,102.1z M393.7,154c2.8-3.9,4.5-6.4,6.4-9
	C401.9,149.1,401.1,150.4,393.7,154z M254.6,156.2c-5.2-0.1-7.3-2.6-5.2-6.1c6.6-11.2,10.4-24.2,20.3-33.3s21.7-10.1,34.3-7.9
	c2.6,0.5,5.1,1.6,5.4,4.5c0.3,3-2.5,4.1-4.7,5.3c-6.1,3.3-12.6,5.8-18.7,9.2c-9.1,5.1-16.4,11.8-21.4,20.8
	C262.1,153.1,258.9,156.1,254.6,156.2z"/>
<path :style="{fill:'rgba(49, 49, 48, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M232.1,140.6c3.9-15.5,9.3-31.8,24.7-42.5c1.7-1.2,3.7-2.1,5.7-2.7c2.1-0.6,3.7,0.5,4.6,2.5
	c0.9,1.9,0.1,3.7-1.4,4.4c-16.6,8.6-21.5,24.5-25.7,40.9c-0.7,2.6-1.8,4.3-4.6,4.1C232.2,146.9,231.8,144.7,232.1,140.6z
	 M289.4,82.5c3.4,0.1,6.5,0.4,6.4,4.5c-0.1,3.7-2.8,4-5.9,3.8c-2.8-0.2-5.3,0.8-7.7,2.3c-2.1,1.4-4.1,1.1-5.4-1.1
	c-1.2-2-0.8-4.1,1.1-5.6C281.4,83.7,285.4,82.6,289.4,82.5z"/>
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
                                    <button :style="{background:'rgba('+getterAquariusBg1+')'}" @click="ShowElement(getterAquariusBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAquariusBg2+')'}" @click="ShowElement1(getterAquariusBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAquariusBg3+')'}" @click="ShowElement2(getterAquariusBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAquariusBg4+')'}" @click="ShowElement3(getterAquariusBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAquariusBg5+')'}" @click="ShowElement4(getterAquariusBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAquariusBg6+')'}" @click="ShowElement5(getterAquariusBg6)" :class="this.ValueId+'_color6btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterAquariusBg7+')'}" @click="ShowElement6(getterAquariusBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Aquarius= [
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
            var randomNumber = Aquarius[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Aquarius[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Aquarius'){
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
                getterAquariusBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Aquarius') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAquariusBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Aquarius') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAquariusBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Aquarius') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAquariusBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterAquariusBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAquariusBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAquariusBg7: {
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
                            name:'Aquarius',
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