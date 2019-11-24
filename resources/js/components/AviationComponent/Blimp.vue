<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(234, 96, 96, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M426.6,112.5c-0.9,1.6-1.4,3.3-3.3,4.4c-11.7,6.6-23.3,13.4-34.8,20.2c-3.4,2-3.3,0.4-2.7-2.2
	c-0.9-6.4,2.5-11.7,4.2-17.4c7.9-26.1,16.5-52.1,24-78.3c3.1-10.7,11.2-14,20.1-17.1c4.7-0.3,1.9,3,1.7,4.3
	c-2,19.6-4.2,39.1-6.4,58.7c-0.2,1.7-0.1,3.5-0.2,5.3C430.4,98,430.3,105.4,426.6,112.5z"/>
<path :style="{fill:'rgba(154, 179, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M349.3,254.9c0.9-0.4,1.7-0.8,2.6-1.2c9-1.7,16.2,2.2,22.2,8c12.2,11.6,19.7,25.6,19.2,43
	c-0.1,4-1,7.7-2.8,11.2c-10.7,7.3-19.4,6.6-30-2.5c-3.2-2.8-6.3-5.8-8.7-9.4c-1.1-1.8-2.7-3.5-3.3-5.4c-3.3-10-10.7-15.8-19.5-20.2
	c-4.9-2.5-7.2-6.4-6.6-11.8c0.5-2.7-0.9-5.7,1.1-8.3c4.2-0.1,8.1,1.6,11.9,2.9c3.4,1.2,6,1.4,7.8-2.2
	C344.5,256.6,346.8,255.6,349.3,254.9z"/>
<path :style="{fill:'rgba(240, 185, 74 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M434.1,22.1c-0.3,0.3-0.5,0.7-0.8,0.8c-13,4.5-17.8,14.7-21.3,27.2c-8,28.5-17.4,56.6-26.3,84.9
	c-1.1,0.4-2.2,0.8-3.3,1.2c1.8-9.4,6-18.1,8.5-27.3c0.5-1.9,1.9-3.9-1.4-4.4c3.5-1.3,4.5-4.4,5.5-7.6c6.1-20.1,12.4-40.1,18.3-60.2
	c1.5-5.2,3.9-9,8.9-11.3c3.2-1.5,6.1-3.5,9.1-5.3C433.8,18.5,434.3,19.9,434.1,22.1z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M248.3,410c2.5-4.3,0.8-9,1.2-13.4c0.3-2.4-0.6-5.2,2.4-6.5c2.5,3.3,1.3,7.2,1.4,10.8
	c0.1,3.6,1.2,3.9,4.2,2.3c8.6-4.4,10.9-11.7,6.2-20.1c-0.6-3.9,3.3-4.2,5.2-5.7c15.9-12.5,31.4-25.6,46.5-39
	c1.2,1.3,2.2,2.8,3.5,3.9c4.7,3.8,5.5,8.6,3.9,14.2c-2.2,7.7-7.2,13.8-11.3,20.4c-4.7,7.7-10.2,14.8-14.4,22.7
	c-5,9.5-13.6,14-22.2,19c-24.8,14.3-49.6,28.7-74.4,43.1c-5.4,3.2-10.9,5.4-16.8,1.3c2.1-4.6,2.5-9.7,4.4-14.4
	c1.1-2.7,2.1-5.4,4.3-7.4c6.6-4.3,12.9-9.2,20.8-11.1c2.3-3.7,0.7-7.9,1.1-11.8c0.2-2.3-0.3-4.7,2.5-5.9c2.2,2.7,1.2,6,1.4,9
	c0.1,3.2,1.2,3.7,4,2.2c2.9-1.5,5.2-4.1,8.8-4.1c2.1-3.8,0.7-7.9,1-11.8c0.2-2.3-0.3-4.7,2.4-5.9c2.9,4,0.8,8.7,1.6,13.1
	C240.4,414.3,243.3,409.3,248.3,410z M398.9,200.8c-3.7-2.1-8.6,0-12.5-3.2c10.6-7.4,20.9-14.7,31.2-21.9
	c5.4-3.8,10.8-7.7,16.2-11.5c2-1.4,3.9-2.7,6.3-1.2c7.6,0.9,13.7,5.2,19.9,9.3c16.6,10.6,34.7,18.4,52.3,27.1
	c0.7,0.3,1.3,0.8,1.9,1.2c-11.6,4.6-24,5.4-36.1,7.3c-8.7,1.4-17.4,2.5-26.3,2.1c-5.9-0.1-11.4-3-17.4-2.4
	c-8.4,0.4-16.3-2.5-24.5-3.6C406.1,203,401.8,204.1,398.9,200.8z M361.2,113.8c-8.2,3.1-16.5,6.2-24.7,9.4
	c-5.6,0.6-10.7,2.7-15.3,5.9c-4.7,1.9-9.5,3.9-14.2,5.8c-2-1.1-1.7-3-1.4-4.6c2.1-12.8,4.8-25.3,9.7-37.4c0.8-2,1.6-4,3.8-5
	c11.8,7.7,23.5,15.4,35.3,23C356.5,112.2,358.4,114.3,361.2,113.8z M193.1,442.1c-4.2,5.3-6,11.6-6.4,18.1c-0.2,2.9-1.3,2.6-3,2.7
	c-13.8-2.9-24.9-9.6-31.7-22.4c15.4-5.4,30.9-10.7,45.6-17.9c0.4-0.2,1,0.2,1.5,0.4c1.6,2.3,0,4.1-0.9,6
	C196.1,433.3,194.5,437.7,193.1,442.1z M319.1,87.9c-6.3,14-9.6,28.8-12.4,43.8c-0.2,1.3,0.1,2.2,0.3,3.3c-1.5,0.8-3,1.6-4.5,2.3
	c-0.3-3.5-3-6.1-3.9-9.4c-0.9-7.6-2.6-15.2-0.7-22.9c0.5-2.2,0.7-4.6,2.5-6.3c4.7-3.5,9.4-6.9,14.1-10.5
	C316,87,317.5,86.2,319.1,87.9z M451.6,210.2c8.4-2.3,17.2-2.2,25.8-3.6c9.9-1.7,19.9-3.4,29.8-5.3c2.3-0.4,4.6-0.8,6.9-0.5
	c-5.5,5.1-12.2,8.8-19.1,10.3C480.6,214.1,466,213.9,451.6,210.2z M300.4,98.6c-1.4,9.7-1.9,19.4-1.8,29.2
	c-1.2-6.4-5.2-11.5-8.4-16.9c-1.7-2.9-1.7-4.2,1.2-5.9C294.6,103.2,297.4,100.8,300.4,98.6z"/>
<path :style="{fill:'rgba(240, 185, 74 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M466,103.1c-14.7,19.7-34.9,33.3-53.9,48.1c-20,15.6-41.6,29-62.3,43.7
	c-17.5,12.5-35.5,24.1-53.5,35.8c-26.5,17.3-53.4,33.8-79.7,51.3c-20.8,13.8-41.9,27.2-62.9,40.8c-20.4,13.3-40.2,27.6-60.5,41.2
	c-20.6,13.8-41,27.8-58.8,45.3c-2,1.9-3.8,4-4.8,6.6c-2.1-2.3-3.4-5-3.6-8.1c-1.8-4-1-8.1-0.3-12.1c2.1-10.8,5.2-21.2,11.2-30.6
	c19.7-31,45.4-56.1,74.7-77.9c34.5-25.7,71.6-46.9,109-67.9c25.4-14.3,51.2-28,77-41.3c23.5-12.1,46.6-24.9,70.6-35.9
	c4.6-2.1,8.8-5.1,13.5-7.1c1.4-0.4,2.8-0.9,4.2-0.2c0.9-0.1-0.5,2.6,1.7,1.2c9.8-6.1,19.8-11.9,29.9-17.5c3.5-1.9,6.6-4.2,9.1-7.3
	c9-5,17.5-11.1,28.2-12.3c2.5-0.3,5-0.9,7.3,0.8C463.5,100.8,464.7,102,466,103.1z M34.3,423.1c2.5-2.8,5.2-0.1,7.6,0.1
	c19.9,1.5,38.5-4,56.9-10.7c31-11.3,58.7-28.9,86.4-46.5c34.6-22,67.3-46.5,100.4-70.6c12.6-9.2,24.5-19.2,36.8-28.8
	c2,7.4,7.5,11.5,13.9,14.7c9.4,4.8,12.5,13.8,15.6,22.8c-10.6,10-21.1,20-31.7,29.9c-1.5,1.5-3.2,2.9-4.7,4.3
	c-4.3,7.5-11.7,11.9-18,17.4c-9.8,8.7-20.1,16.7-30.5,24.7c-1.3,1-2.4,2-3,3.5c-3,4.1-8.1,5-11.7,8.1c-2.1,3.6-0.7,7.6-1.1,11.4
	c-0.3,2.4,0.5,5.1-2,6.9c-2.9-1.2-1.9-3.9-2.2-6c-0.4-2.4,0.7-5.1-1.1-7.7c-3.8,2-7.4,4.2-10.8,6.9c-2.5,2.6-1.1,5.8-1.5,8.8
	c-0.3,2.6,0.7,5.5-2,7.4c-2.9-0.9-2-3.4-2.2-5.3c-0.3-2.1,0.1-4.2-0.3-7c-4.3,2.1-8,4.5-11.7,6.8c-2.4,2.5-1.1,5.6-1.4,8.4
	c-0.3,2.6,0.7,5.6-1.9,7.6c-3.9-2-2.1-5.7-2.2-8.6c-0.2-3.4-1.1-4.1-4.1-2.5c-2.7,1.4-5.1,3.5-8,4.6c-12.9,5.5-25.8,11.1-39.1,15.5
	c-2.8,0.9-5.6,1.5-8.5,1.4c-19.7,5.8-39.7,10.2-60.3,9.4C68.9,449,48.8,441.9,34.3,423.1z M409.5,203.1c8.4,0.8,16.7,1.9,24.7,4.7
	c-12.6,16-25,32.2-38.5,47.4c-1.4,1.6-2.7,3.3-2.9,5.6c-2.8-0.1-4.4-2.3-6.2-4c-11.3-10.2-16.3-10.9-29.8-4
	c-1.4,0.7-2.8,1.4-4.2,2.1c-1.1,0.5-2.2,0.9-3.5,1c-3.6-1.1-8.1-0.1-10.2-4.5c7.9-2.6,12.5-9.8,19.3-14c0.6-0.4,1.3-0.9,1.9-1.3
	c3.8-1.2,3.3,1.3,2.8,3.4c-0.5,2.1-2.6,3.2-3.8,5.1c4.3-1.1,7.5-3.4,10.4-6.4c10-10.1,20.1-20.3,30.3-30.2
	C402.3,205.5,404.8,202,409.5,203.1z M459.9,172.4c-7.1-2-13.2-6.3-19.9-9.3c-0.5-3,1.7-4.5,3.4-6.4c8-8.4,16-16.8,22.3-26.7
	c3.9-6.2,4.1-13.1,5.9-19.7c7.7,8.9,9.4,30.4-0.8,44.9C466.9,160.8,462.8,166.3,459.9,172.4z M409.5,203.1c-3.8,0.9-6.4,3.5-9.1,6.1
	c-10.5,10.5-21.1,21-31.5,31.6c-3.5,3.5-7.6,5-12.9,6c0.9-3.2,3.3-4.3,4.8-6.2c1.5-1.8,3.1-3.6-0.7-4.6c6.4-7.6,15.1-12.9,22.1-19.8
	c5.4-5.3,11.1-10.3,16.7-15.4C402.4,201.6,406.2,201.3,409.5,203.1z"/>
<path :style="{fill:'rgba(240, 185, 74 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M321.3,129.1c4-4.8,8.7-7.7,15.3-5.9C331.9,126.3,326.6,127.8,321.3,129.1z"/>
<path :style="{fill:'rgba(255, 226, 79, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M466,103.1c2.7,1.8,4.8,4,5.7,7.2c1.7,13.6-5.9,23.3-13.8,33c-5.6,6.8-12.2,12.6-17.4,19.8
	c-10.1,3.6-17.6,11.3-26.4,17c-9,5.8-17.4,12.5-26.6,18c-0.8,0,0.3,0.8-0.1,0.2c-0.7-1.3,8.5,0.4,11.6,2.2c0.7,2.9-1.6,4.1-3.3,5.6
	c-10.5,9.2-20.7,18.8-31.6,27.5c-1.2,1-2.2,2.2-3.3,3.3c-5.1,4.7-10.8,8.6-16,13.2c-1.6,1.4-3.6,2.3-5.7,2.6
	c-5.5,0.8-9.9,3.8-14.3,6.9c-1.3,2.2-0.5,4.9-1.6,7.2c-5.9,7.5-14.1,12.4-21.4,18.1c-33.6,26-67.8,51.1-103.3,74.4
	c-24.3,16-48.6,32.2-75.1,44.6C104,413,84.2,420.7,62.9,424c-9.5,1.5-19.1,1.8-28.5-0.7c-1.9-2.1-3.5-4.5-4.6-7.2
	c-0.8-3.5,1.8-5.3,3.7-7.5c10.8-12.1,24.6-20.6,37.1-30.5c13.5-10.7,28.6-19.2,42.7-29.1c28.1-19.6,57.2-37.7,85.7-56.7
	c29.3-19.6,59.5-37.7,88.6-57.7c14.1-9.8,29.2-18.2,43.3-28.1c30.1-21.1,61.3-40.8,90.2-63.6c12.7-10.1,25.6-20,37-31.7
	C460.6,108.3,461.4,103.8,466,103.1z M382.4,136.1c-24.3,12.5-48.5,25.3-72.9,37.6c-39.9,20.2-79.3,41.2-118,63.5
	c-23.4,13.5-46.8,27.3-68.7,43.4c-20.5,15-40.2,31-57.4,49.7c-11.2,12.2-21.6,25.3-29.6,39.8c-6.3,11.5-9.7,24.2-9.7,37.6
	c-5.3-8.6-6.4-18.3-6.9-28c-2-38,10-71.9,31.7-102.5c12.2-17.1,28.4-29.8,46.4-40.5c31.6-18.8,64-36.1,97.1-51.9
	c32.9-15.7,66.1-30.8,100.1-44.3c2.7-1.1,5.4-2.3,8.1-3.4c0.9-1.9,2.6-2.9,4.4-3.7c4.7-1.9,9.4-3.9,14.2-5.6
	c5.2-1.5,10.3-3.4,15.2-5.7c8.1-3.2,15.9-7.5,24.9-8.3c9.4-3.1,18.8-6.3,28.2-9.4c3.2-1.4,3.7,1.2,3.2,2.9
	C389.8,117.1,387.6,127.1,382.4,136.1z M426.6,112.5c0.9-7.4,1.8-14.8,2.7-22.2c10.9-1,21.3,0.6,30.6,6.9c1,0.7,2,1.2,2.4,2.4
	c-9.5,0.4-18.3,3-26.3,8.1C433,109.6,429.7,110.9,426.6,112.5z M193.1,442.1c-2.3-3.5,0.9-6.1,1.7-9c1-3.5,2.8-6.8,4.2-10.1
	c3.9-3.6,8.8-5.5,14.1-8.2c0,5.6,0,10.4,0,15.2C206.5,434.1,199.8,438.1,193.1,442.1z M262.7,382.1c1.6-0.6,3.4-1.8,3.4,1.6
	c-0.1,4.1-0.1,8.2,0,12.3c0,1.5-0.6,2.6-1.9,3.4c-4.2,2.4-8.4,4.7-13.3,7.5c0-6.5,0-12.1,0-17.8C255,387,259.3,385.2,262.7,382.1z
	 M248.3,409c-4.4,2.5-8.7,5-14,8.1c0-6,0-11.1,0-16.3c3.6-2.3,7.1-4.7,10.6-7c2.2-1.5,3.5-1.3,3.4,1.8
	C248.3,400.1,248.3,404.6,248.3,409z M230.9,419.5c-4.1,3.3-8.7,5.7-14.2,8.5c0-5.7,0-10.6,0-15.6c4.5-2.5,8.9-5,14.2-7.9
	C230.9,410,230.9,414.8,230.9,419.5z"/>
<path style="fill:#ABC4D3;transform:scale(0.2)" d="M354.1,300.7c-5.4-6.4-8.2-14-9.2-22.2c-0.2-2-0.8-4.3,1-6c1.1-0.6,2.3,0.1,3.4-0.2
	c2.2,4.7,6.7,7.2,10.5,10.3c1.1,3.3,3.8,6,4.2,9.7C360.8,295.3,358.3,299,354.1,300.7z"/>
<path style="fill:#FBFBFC;transform:scale(0.2)" d="M354.1,300.7c3-2.9,5-7,9.4-8.2c1.3,0.3,1.9,1.2,2.3,2.3c0.3,1.1,0.3,2.3,0.4,3.4
	c0.3,8,0.7,8.3,8,7.2c3.2,2.2,6.4,4.3,9.9,6.7c-2.8,3.5-6.4,4.4-10.6,3.3C364.9,313.3,358.6,308.2,354.1,300.7z"/>
<path style="fill:#FBFCFC;transform:scale(0.2)" d="M372,290.4c3.7,2.6,7.2,5.4,11,7.6c3.1,1.8,4.4,4.2,4.2,7.6c-0.8,2.8-2.4,1-3.6,0.6
	c-4.2-1.5-7.8-4.1-10.8-7.5C371.7,295.9,371.6,293.2,372,290.4z"/>
<path style="fill:#FBFCFC;transform:scale(0.2)" d="M371.4,282c0.5-0.5,1-0.9,1.5-1.4c6-7,6-7,9.9,0.9c1.2,2.4,2.1,4.9,3.1,7.4c-0.2,1.5-0.6,1.7-2.2,1
	c-3.8-1.7-6.6-5.4-11.2-5.5C371.2,284.1,371,283.2,371.4,282z"/>
<path style="fill:#ABC4D2;transform:scale(0.2)" d="M366,263c-3.4,5.5,1,11,0,16.5c0.5,1.1-0.2,1.4-1.1,1.5c-2.4-2.4-6.6-2.9-7.1-7.2
	c2.4-3.4,0.6-7.2,1.2-10.7C361.2,259.9,363.6,260.6,366,263z"/>
<path :style="{fill:'rgba(209, 230, 234, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M374.1,305.5c-2.2,0.4-2.9,4.3-5.7,2.7c-3-1.6-4-4.4-3.7-7.8c0.2-1.9,0.1-3.8,0.1-5.7
	c0.4-2.1-0.7-4.2,0.3-6.2c0.3-0.5,0.7-0.8,1.2-1c2.1,0,3.8,1,5.4,2.2c0.4,0.4,0.7,0.9,0.9,1.5c0.3,2.5,1.5,5,0,7.6
	C371.5,301.2,373.3,303.2,374.1,305.5z M386,288.9c1.9,5.4,3.5,10.9,1.3,16.6c-2.1-4.6-6-7.4-9.9-10.1c-2.1-1.4-4.2-2.7-5.3-5.2
	c-0.2-0.2-0.3-0.4-0.5-0.6c-0.4-2,0-3.9,1.1-5.6c2.7-1.6,4.6,0.4,6.7,1.5C381.5,286.8,383.5,288.4,386,288.9z M366,263
	c5.7,2.2,8.5,5.9,6.4,12.2c-0.6,1.8-1.1,3.8,0.6,5.4c0.4,1.2-0.4,1.6-1.4,1.9c-2.6-0.5-5-1.3-6.6-3.7c-1.1-3.4-1.7-6.8-1.7-10.3
	C363.2,266.4,362.7,263.7,366,263z M357.7,273.8c1.6,3.1,6.4,3,7.1,6.9c1.7,2.1,2.8,4.4,1.1,7.1h0.1c-3.7,0.5-5-2.7-7.1-4.7
	c-4.8-2.3-8.9-5.2-10.5-10.6c-0.2-2.7,0.3-4.5,3.5-2.5C353.8,271.2,355.7,272.5,357.7,273.8z"/>
<path style="fill:#90A8B1;transform:scale(0.2)" d="M358.9,283.1c2.9,0.8,4.8,3,7.1,4.7c-0.6,2.3,1,4.9-1.1,6.9c-0.4-0.7-0.9-1.4-1.3-2.1
	C361.8,289.5,359.4,286.8,358.9,283.1z"/>
<path :style="{fill:'rgba(26, 19, 48, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color7'" d="M390.6,316c-0.3-4.9,1.7-9.6,1.3-14.6c-1.9-20-10.8-35.4-28.8-45.2c-3.7-2-7.8,0-11.2-2.5
	c3.1-1.7,6.1-3.4,9.2-5.1c6.9-3.8,15.5-2.3,23.2,4.1c3,2.5,5.6,5.3,8.4,8c7.3,9,12,18.9,13.4,30.5
	C407.6,303.9,402.3,311.9,390.6,316z M349.3,254.9c-0.7,0.6-1.8,1-2.2,1.8c-5.2,10.6-12.9,5.9-20.1,3.3c-1.2-0.4-2.8-0.4-3.6-1.7
	c5-2.6,9.3-6.6,15.4-7C342.3,252.6,345.8,253.8,349.3,254.9z M348.4,272.5c-0.8,1.4-1.7,0.2-2.5,0c-0.4-6.5,2.5-10.7,8.1-12.3
	c3-0.9,4.5-0.1,4.9,2.9c2.4,3.3,2,6.8,0.5,10.2c-2.1,1.9-3.9,0.6-5.8-0.5C351.9,271.9,350.3,270.6,348.4,272.5z M365.9,287.8
	c-0.4-2.3-1.6-4.6-1.1-7.1c0.4-0.4,0.8-0.9,1.1-1.3c2.4-0.4,3.8,1.3,5.5,2.5c0.4,0.8,0.8,1.6,1.2,2.4c0.3,1.9,0.2,3.8-1.1,5.4
	C369.7,289.1,367.8,288.5,365.9,287.8z"/>
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
                                    <button :style="{background:'rgba('+getterBlimpBg1+')'}" @click="ShowElement(getterBlimpBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBlimpBg2+')'}" @click="ShowElement1(getterBlimpBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBlimpBg3+')'}" @click="ShowElement2(getterBlimpBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBlimpBg4+')'}" @click="ShowElement3(getterBlimpBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBlimpBg5+')'}" @click="ShowElement4(getterBlimpBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    
                                    <button :style="{backgroundColor:'rgba('+getterBlimpBg6+')'}" @click="ShowElement5(getterBlimpBg6)" :class="this.ValueId+'_color6btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBlimpBg7+')'}" @click="ShowElement6   (getterBlimpBg7)" :class="this.ValueId+'_color7btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterBlimpBg8+')'}" @click="ShowElement7(getterBlimpBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Blimp= [
                {top:339 ,left:122},
                {top:332 ,left:12},
                {top:342 ,left:43},
                {top:147 ,left:117},
                {top:30 ,left:119},
                {top:162 ,left:111},
                {top:31 ,left:81},
                {top:141 ,left:77},
                {top:10 ,left:18},
                {top:-3 ,left:72},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Blimp[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Blimp[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Blimp'){
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
                getterBlimpBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Blimp') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlimpBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Blimp') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlimpBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Blimp') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlimpBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBlimpBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                 getterBlimpBg6:{
                    get(){
                    return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    }, 
                    set(newValue){
                        console.log(newValue)
                    }
                },
                 getterBlimpBg7:{
                    get(){
                    return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    }, 
                    set(newValue){
                        console.log(newValue)
                    }
                },
                getterBlimpBg8:{
                    get(){
                    return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    }, 
                    set(newValue){
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
                 ShowElement5(value){
                    this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5+')'
                    this.clickedInput= 'six'
                    this.showColorPicker=true
                },
                 ShowElement6(value){
                    this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6+')'
                    this.clickedInput= 'seven'
                    this.showColorPicker=true
                },
                 ShowElement7(value){
                    this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7+')'
                    this.clickedInput= 'eight'
                    this.showColorPicker=true
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
                            name:'Blimp',
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