<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                   <path :style="{fill:'rgba(66, 120, 174, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M492.5,608.1c11.4-30.8,22.8-61.6,34.2-92.4c12.7-34.2,25.4-68.3,38.1-102.5c0.4-1.2,1.1-2.1,2.2-2.7
	c3.7,27.1,7.3,54.1,11.1,81.2c3.1,22.1,6.3,44.2,9.3,66.3c2.1,15.4,4.2,30.8,6.3,46.2c0.4,2.9-0.3,4.2-3.7,4.2
	C557.5,608.1,525,608.1,492.5,608.1z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M88,410.2c9.7,2.1,19.6,1.3,29.4,1.3c20.3,0.1,40.5,1.1,60.7,1.6c11.3,0.3,22.8,0.3,34.1,2
	c-2,0-4,0-6,0c-49,0-98.1,0-147.1,0c-7.5,0-7.4,0-5.4,7c11.2,39.8,22.3,79.7,33.5,119.5c6.2,22.1,12.8,44.2,19.1,66.3
	C80.2,608,54.1,608,28,608.2c-3.5,0-3.8-1.2-3.5-4.3c7.2-56.4,14.4-112.9,21.6-169.3c1-7.7,2.3-15.4,3.5-23.2c1.7-3,4.6-3,7.4-3
	c7.4-0.1,14.9-0.2,22.3,0.1C82.3,408.6,85.4,408.1,88,410.2z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M204.8,127.8c0.9-3.3,3.8-3.8,6.5-4.5c11.5-2.9,23.3-4,35.1-4.9c20.8-1.6,41.7-2.2,62.6-2.5c16,0.4,32,0.5,47.9,1.5
	c16.7,1,33.4,1.9,49.8,5.9c2.7,0.7,5.5,1.3,6.4,4.6c-2.1,2.3-2.6,5-2.7,8.1c-0.2,15.9-1.1,31.8-2.6,47.7c-1.9,1.7-3.9,1.5-6,0.3
	c-2.4-3.4-1.5-7.4-1.5-11.1c0-4.1-1.1-7.4-4.5-9.9c-5.1-3.8-6-9.7-7.2-15.4c-1.3-6.5-1.3-6.8-7.7-5.3c-23.5,5.5-47.5,6.8-71.5,8
	c-1,0-2.1-0.2-3.1-0.4c-5.8-1.4-11.6-0.5-17.4-0.7c-17-0.8-33.9-3-50.5-6.7c-9.3-2.1-8.3-0.5-9.2,6c-0.8,6.2-2.9,12.1-8.6,15.9
	c-2.8,1.9-3.1,4.8-3,8c0.1,3.9,1.1,8-1.4,11.7c-2.1,1.1-4.1,1.3-6-0.4c-1.6-15.9-2.4-31.7-2.7-47.7
	C207.5,132.7,207.1,130,204.8,127.8z M401.9,183.4c2,0,4,0.1,5.9,0.1c3.4,3.6,4,7-1.1,9.7c-2,1.5-3.9,1.6-5.9,0
	c-1.6,0-3.2,0.1-4.8-0.1c-3.2-0.4-4.4,0.7-4.8,4.1c-2,17.8-16,30.6-34.4,31.8c-16.7,1.1-33.1-10.1-37.6-26c-1.2-4.3-0.8-9.4-5.7-12
	c-1.4-0.7-2.7-1.7-4.5-1.4c-7.6-0.1-10.8,2.5-12,9.6c-2.9,17.2-18.2,29.8-36.3,29.8c-18,0-33.8-12.7-36.2-29.8
	c-0.7-5-2.1-7.3-7.3-6.1c-2,1.6-3.9,1.5-5.9,0c-5-2.7-4.5-6-1.1-9.7c2,0,4-0.1,5.9-0.1c6-1.3,10.5-4.5,14.5-9.4
	c3.7-4.5,9.5-6.6,15.3-7.7c11.2-2.2,22.3-2.1,33.3,1.1c5.1,1.5,9.8,4.1,13,8.3c3.1,4.1,6.2,5.2,10.7,3c1-0.5,2.4-0.4,3.6-0.4
	c8.1,2.5,13.7,0.4,20.4-5.7c11.2-10.1,26.1-8.5,40.1-6.7c7.6,0.9,14.3,4.1,19.2,10.1c3.2,4,6.8,6.6,12.2,6.1
	C399.8,181.9,400.9,182.6,401.9,183.4z"/>
<path style="fill:#E08E70;transform:scale(0.2)" d="M272.8,315c11,7.3,22.7,12.2,36.2,12c16.8,0.8,30.6-6.2,42.8-16.8c7.8-6.8,14.8-14.4,21-22.7
	c1.3,8.2,0.1,16.7,3.1,24.7c-21.3,21.2-42.6,42.4-63.8,63.6c-0.8,0.8-1.4,2-2.8,2.1c-5.5-5.7-9.1-12.6-13.3-19.2
	c-7.6-12.3-15.2-24.5-22.5-37C272.5,319.8,269.2,317.6,272.8,315z"/>
<path :style="{fill:'rgba(66, 120, 174, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M310.2,518.4c-2.4-3.9-1-8.2-1.1-12.2c-0.2-7.4-0.1-14.7-0.1-22.1c5.8-7.2,5.8-7.2,0-13.5
	c0-9.4,0-18.8,0-28.1c0-2.2-0.3-4.4,1.2-6.3c4.1-4.3,3.6-8.6,0-12.9c0-14.3,0.1-28.6,0.1-42.8c3.2-0.6,4.6,2,6.3,3.7
	c12,11.9,24,23.7,35.7,35.8c3.4,3.5,5.4,3.2,8.7-0.1c18.7-19,37.6-37.8,56.6-56.6c2-2,3.6-5.2,7.4-3.6c7.5,2.5,15,5,22.5,7.5
	c1.2,2,0.4,4-0.4,5.7c-2,4.7,0,6.8,4.4,8.3c10.7,3.8,21.4,7.8,32.2,11.4c3.7,1.8,7.6,3,11.5,4.3c1.9,0.6,3.9,1.3,5.8,2
	c4.1,1.9,8.3,3.2,12.6,4.5c3.5,1.2,7.1,2.5,10.4,4.1c1.7,0.9,4.3,1.6,3.1,4.6c-8.6,2.6-17.5,1.8-26.2,1.9c-21.4,0.2-42.8,1.8-64.3,2
	c-1.7,0-3.5,0.7-4.2,0.2c39.4-1.2,79.6-2.8,119.8-3.8c-5.1-0.3-10.3,0.8-15.3-0.6c-2.7-4.1-1.5-8.9,3.2-13.7c5.8,4.6,13.3,5,19.8,8
	c2.5,1.2,6.6,0.3,7.1,4.7c-8.4,25.7-18.4,50.9-27.8,76.2c-14.3,38.6-28.4,77.1-42.9,115.6c-0.8,2.2-1.2,4.8-3.8,5.8
	c-38.5,0.1-77,0.2-115.5,0.2c-22.7,0-45.3-0.1-68-0.2c0-9.6,0-19.2,0-28.7c0.1-0.2,0-0.4,0.2-0.6c6.7-7.6,5-7.3-0.2-13
	c0-9.4,0-18.8,0-28.1c0-2.2-0.2-4.4,1.2-6.3C314.5,527,313.6,522.7,310.2,518.4z M309.1,10c25.8-0.6,48.6,8.4,69.9,21.9
	c18.7,11.9,34.6,26.8,45.2,46.6c3.9,7.3,6.7,14.9,6.8,23.4c0.1,10.3-4.5,17.6-13.3,22.5c-1.7,1-3.6,1.6-4.6,3.5
	c-12.9-5.8-26.9-6.4-40.6-7.5c-19.2-1.5-38.4-2.4-57.7-2.6c-2.2,0-4.4-0.1-6.2-1.7c-2.6-8.1-1.5-16.2-0.6-24.4
	c0.3-0.5,0.6-1.4,1.1-1.4c8.3-0.2,15-6.3,23.4-6.2c3.8,0.1,7.1-1.1,10.6-3.7c-6.9-0.3-13.3-0.2-19.8-0.1c-4,0.1-6.2,3.3-9,5.5
	c-1.7,1.4-3.5,4.7-6.3,1c-0.9-2.5-0.8-5.1-0.8-7.7c0-20,0-40,0-60C307.1,15.9,306.6,12.6,309.1,10z M307.8,10
	c-8.7,8.3-18.7,14.8-28.2,22.1c-29.1,22.3-58.5,44.3-87.7,66.4c-1.4,1.1-3,2-4.5,2.9c-0.2-8.7,2.7-16.7,7.2-23.8
	C219.9,37,256.7,14.7,304.2,9.9C305.4,9.7,306.6,10,307.8,10z M243.5,312.7c4.9,5.2,9.8,10.4,14.8,15.5c-7.3,1.5-13.6,5.6-20.3,8.6
	c-14.1,6.5-27.9,13.7-42.4,19.2c14.1-14.3,28.3-28.5,42.2-42.9C240,310.9,241.5,312.1,243.5,312.7z M75.9,398.9
	c1.3,3.8,2.7,7.6,4,11.4c-7.8,0-15.5,0-23.3,0c-2.4,0-4.8-0.1-6.9,1.2c-0.8-3.3,1.5-4,3.8-4.8C60.9,404.2,68.4,401.5,75.9,398.9z"/>
<path style="fill:#0B3F5A;transform:scale(0.2)" d="M510.8,373.7c-0.5,1.8-1,3.6-1.5,5.4c-0.5,1.7-0.1,3.8-2.5,4.4c-2.3,0.3-4.4-0.4-6.2-1.8
	c-1.2-2.1,0-3.6,1.4-5.1c0.8-1.7,1.6-3.4,2.3-5.1C506.5,372.2,508.7,373,510.8,373.7z"/>
<path style="fill:#16333F;transform:scale(0.2)" d="M400.8,193.2c2,0,3.9,0,5.9,0c-0.7,4.3-2.1,8.3-5,11.6c-2,0.5-2.5-0.4-2-2.2
	C400.8,199.6,400.8,196.4,400.8,193.2z"/>
<path style="fill:#163340;transform:scale(0.2)" d="M211.3,193.2c2,0,3.9,0,5.9,0c0,3.2-0.1,6.3,0.9,9.4c0.6,1.7,0.3,2.7-1.8,2.2
	C213.4,201.5,212,197.5,211.3,193.2z"/>
<path :style="{fill:'rgba(5, 38, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M176.2,492.4c17.5,0,35,0,52.4,0c3.2,0,6.9-0.5,6.7,4.5c-0.1,4.2-2.9,5.2-6.6,5.2
	c-35.4,0-70.7,0-106.1,0c-3.7,0-5.7-1.1-5.6-5.1c0.1-4.4,2.8-4.6,6.1-4.6C140.9,492.4,158.6,492.4,176.2,492.4z"/>
<path :style="{fill:'rgba(5, 38, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M176.4,511.7c17.5,0,35,0,52.4,0c3,0,6.5-0.5,6.6,4c0.1,4.6-2.8,5.6-6.7,5.6c-35.2,0-70.3,0-105.5,0
	c-3.3,0-6-0.3-6.1-4.6c-0.1-4.6,2.6-5.1,6.3-5.1C141,511.8,158.7,511.7,176.4,511.7z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M167.9,367.2c8.3-2.6,16.7-5.2,25-7.7c3.5-0.7,4.9,2.3,6.8,4.1c18.7,18.5,37.3,37.2,55.9,55.8
	c5.1,5.1,5.3,5.2,10.5-0.2c12.1-12.6,25.7-23.7,37.8-36.4c2-2,4.7-6.4,7.8-0.7c0.7,13.3,1,26.7-0.1,40c-0.1,0.2-0.1,0.4-0.2,0.5
	c-7.2,7-7.2,7-0.4,14.1c-0.3,10.9,0.6,21.7-0.6,32.6c-6.1,7.7-6.1,7.7,0,15.8c1.3,10.8,0.3,21.7,0.7,32.5c-0.2,1.6-1.5,2.1-2.7,2.9
	c-4.7,3.1-4.7,5.8-0.2,8.9c1.1,0.8,2.6,1.1,2.8,2.8c-0.4,10.8,0.7,21.7-0.6,32.5c-0.3,0.7-0.6,1.4-1.2,2c-5.7,5.4-5.7,5.6-0.2,11.6
	c0.7,0.7,1.2,1.5,1.5,2.5c1.1,7.7,0.5,15.3,0.4,23c0,1.6-0.5,3.1-1.7,4.3c-41.7,0.1-83.4,0.2-125.1,0.2c-25.9,0-51.7-0.1-77.6-0.2
	c-2.5-1.7-3.3-4.5-4-7.2C85.6,542.3,69.1,483.7,52.6,425c-0.3-1-0.6-1.9-0.8-2.9c-1.6-6.7-0.4-8.5,6.4-8.7
	c13.5-0.2,26.9,0.1,40.4-0.1c26.3-0.3,52.6,0.6,79,0.8c10.2,0.1,20.4,0.2,27.8,0.4c-17.5,0.3-37.8-0.6-58.1-0.8
	c-16.3-0.2-32.5-0.4-48.8-0.5c-3.2,0-6.4-0.4-9.4-1.9c-2.6-2.7,0.2-3.3,1.7-4c3.6-1.6,7.2-3.1,11-4.3c3.7-1.1,7.4-2.3,11-3.8
	c2.4-1,4.9-1.8,7.4-2.7c3.9-1.3,7.8-2.5,11.5-4.2c10.8-3.7,21.5-7.8,32.4-11.5c4.3-1.5,5.9-3.5,4-8
	C167.3,371.2,166.4,369.2,167.9,367.2z M425.1,359.5c-2.9,0.3-4.4,2.6-6.2,4.4c-19.5,19.4-39,38.8-58.3,58.4c-3.3,3.3-4.8,3-7.9-0.1
	c-14-14.1-28.2-28-42.4-41.9c-2.4-0.3-3.6,1.6-5,2.9c-13.5,13.1-27.2,26.2-40.5,39.5c-3.2,3.2-5,3.2-8.1-0.1
	c-19.5-19.8-39.2-39.3-58.8-58.9c-1.6-1.5-3.3-2.9-5-4.3c0.2-1.7,1.2-2.7,2.6-3.4c6.4-5,14.1-7.5,21.3-10.9
	c11.4-5.3,22.6-11.1,34.1-16.1c2.2-0.9,4.3-2.2,6.8-2c3.2,0.5,5.1,3,7.2,5.1c12.9,12.9,25.8,25.8,38.8,38.7c1.7,1.7,3.1,3.8,5.5,4.5
	c2.5-0.8,3.7-3,5.4-4.7c18.1-18.1,36.3-36.2,54.4-54.3c1.9-1.9,3.7-4.4,6.9-4.3c1.7-1.5,2.9-0.3,4.1,0.9
	c14.7,14.8,29.5,29.5,44.2,44.4C424.7,357.8,424.8,358.7,425.1,359.5z M309.1,90.7c0,8.4,0,16.8-0.1,25.2c-2.8,2.7-6.4,1.8-9.7,1.9
	c-24.8,0.9-49.6,1.4-74.3,4.7c-7,0.9-13.8,2.5-20.2,5.3c-0.9-2.5-3.4-3-5.4-4.2c-8.3-5.1-12.8-12.2-12-22.1c1-2.6,3.4-3.9,5.4-5.4
	c33.7-25.2,67.1-50.7,100.5-76.3c4.6-3.5,9.1-7.2,14.4-9.7c0.4,0,0.9,0,1.3-0.1c0,25.9,0,51.9,0,77.8c-3,1.3-4.5-1.1-5.9-2.7
	c-3.5-4-7.8-5.3-12.9-5c-4.9,0.3-9.9,0.1-15.5,0c2.3,1.8,4.3,3.7,6.3,3.4c9.2-1.2,16.5,5.9,25.4,5.7
	C307.5,89.3,308.4,89.8,309.1,90.7z M527.4,410.5c2.8,0,5.7-0.1,8.5-0.1c6.8,0,13.7,0,20.5,0c1.4,0,3.2-0.2,3.3,1.7
	c0.1,2-1.7,1.8-3.1,1.9c-0.4,0-0.8,0-1.2,0c-20.3-0.9-40.4,1.3-60.7,1.3c-20.4,0-40.9,0.7-61.3,1.1c-2,0-3.9,0-5.9-0.5
	c7.6-1.2,15.3-1.5,22.8-1.6c15.4-0.2,30.8-1.1,46.2-1.9C506.8,411.9,517.2,413,527.4,410.5z"/>
<path :style="{fill:'rgba(5, 38, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M260.8,176.2c1.4,0,2.8,0,4.2,0c11.4,0.1,20.9,4.9,22,12.2c1.5,10.3-0.6,20.8-12.7,27.5
	c-16.6,9.1-36.2,0.3-40.3-18.2c-2.5-11.3,5.4-20.3,19-21.4C255.5,176.1,258.1,176.3,260.8,176.2
	C260.8,176.3,260.8,176.3,260.8,176.2z M381.6,194.6c-0.1,10.3-5.3,17.4-14.3,21.8c-10.5,5.1-20.6,4-30-2.9
	c-8.3-6.2-10.6-15.2-8.8-24.7c1.7-8.5,9.3-11.3,16.8-12.2c7.7-0.9,15.6-1.2,23.3,0.9C377.5,180,381.6,185.5,381.6,194.6z"/>
<path :style="{fill:'rgba(5, 38, 53, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M167.9,367.2c3.8,12.3,3.8,12.4-8.6,16.9c-9.1,3.3-18.4,6.3-27.6,9.5c-4-4.6-5.6-10-6-15.9
	c0.7-2.4,2.6-3.5,4.7-4.2c9.6-3.4,19.1-7.1,28.7-10.4c2.6-0.9,5.4-2.1,7.4,1.3C167,365.4,167.5,366.3,167.9,367.2z M483.7,393.7
	c-12.2-4.2-24.5-8.5-36.7-12.7c-2.6-0.9-3.4-2.4-2.5-5c1.1-3,2.1-6,3.1-9c0.5-1.2,1.1-2.4,1.7-3.6c1.6-1.3,3.3-1.3,5.1-0.7
	c10.6,3.7,21.2,7.6,31.8,11.3c1.3,0.5,2.5,1.3,3.2,2.6C490.1,383.1,487.6,388.6,483.7,393.7z M166.5,364.5c-1.4-0.8-2.8-1.3-4.5-0.7
	c-11.2,4.1-22.5,8.1-33.7,12.2c-0.6,0.2-1,1.2-1.5,1.8c-2.8,0.1-2.5-2.6-3.5-4c-0.8-2.1-2-4.1-1.2-6.4c11.6-4.2,23.3-8.1,34.8-12.6
	c4.4-1.7,6.5-1.1,7.5,3.6C164.8,360.5,165.8,362.4,166.5,364.5z M489.2,376.7c-12.1-4.4-24.2-8.8-36.3-13.2
	c-1.1-0.4-2.4-0.2-3.5-0.3c3.8-10.4,3.8-10.4,14.3-6.6c9.8,3.5,19.5,7,29.3,10.5c1.2,2.1,0.1,3.9-0.6,5.8
	C491.4,374.4,491.3,376.4,489.2,376.7z M88,410.2c-2.7,0-5.4,0.1-8.2,0.1c-3.8-2.9-4.9-6.8-4-11.4c-0.4-1.4-0.7-2.8-1.1-4.2
	c6.7-4.3,13.8-7.2,21.8-7.8c3.5,5.2,6.5,10.7,6,17.3C97.8,406.2,92.9,408.2,88,410.2z M540.2,397.7c-1.4,4.2-2.9,8.4-4.3,12.6
	c-2.8,2.2-5.6,2.2-8.5,0.1c-4.8-2.1-9.7-4.1-14.5-6.2c-0.3-6.5,2-12.2,6-17.3c7.9,0.7,15.1,3.5,21.8,7.8
	C540.5,395.7,540.3,396.7,540.2,397.7z M540.7,394.7c-7.2-2.4-14.3-4.8-21.5-7.2c-1.6-1.6-0.6-3.4-0.2-5.2c0.7-1.6,0.9-3.6,2.8-4.4
	c5.5,1.9,10.9,4.2,16.5,5.5c5.8,1.3,6.4,4.1,3.7,8.7C541.5,392.9,541.1,393.8,540.7,394.7z M96.4,387.4c-7.2,2.4-14.4,4.9-21.6,7.3
	c-4.1-9-4.1-9,5-12.2c4.5-1.6,9-3.1,13.5-4.6c2.1,0.9,2.3,3,3.1,4.7C96.7,384.3,97.8,385.9,96.4,387.4z M106.1,379.1
	c-0.5-1.8-0.9-3.6-1.4-5.4c2.2-0.8,4.3-1.5,6.5-2.3c0.7,1.7,1.5,3.5,2.2,5.2c1.4,1.3,2.1,2.9,1.5,4.9c-1.9,1.7-4.1,2.4-6.5,2.8
	C105.9,383.3,105.8,381.3,106.1,379.1z M113.8,400.4c-1.7-5.5-3.4-11-5.1-16.5c1.5-1.9,3.5-2.5,5.8-2.5c2.1,5.6,4.2,11.1,6.3,16.7
	C118.4,398.8,116.1,399.6,113.8,400.4z M494.7,398.1c2.1-5.6,4.3-11.1,6.4-16.7c2.1,0.5,4.1,0.9,6.2,1.4c-1.5,6-3.6,11.7-6.2,17.3
	C498.9,399.4,496.8,398.7,494.7,398.1z"/>
<path :style="{fill:'rgba(245, 186, 22, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M122.1,367.4c0.7,1.8,1.4,3.7,2.1,5.5c-3,3.1-6.7,4.6-11.1,4.3c-2.1-1.5-3.1-3.3-1.8-5.9
	C114.6,369.3,118.4,368.5,122.1,367.4z M491.3,373c0.5-1.9,1.1-3.8,1.6-5.8c4,1.1,7.9,2.1,11.4,4.3c0.5,2.4-0.1,4.4-2.3,5.7
	C497.8,377.6,494.2,376.2,491.3,373z M95.4,382.7c-0.7-1.6-1.4-3.2-2.2-4.7c3.6-2,7.5-3.3,11.5-4.2c2.3,1.4,2.4,3.5,1.8,5.8
	C103.4,382.5,100,384.7,95.4,382.7z M521.8,377.9c-0.6,1.6-1.1,3.2-1.7,4.8c-4.6,2-8.1-0.1-11.4-3c-0.7-2.5-0.2-4.5,2.1-5.9
	C514.6,374.7,518.5,375.6,521.8,377.9z M114.5,381.4c-0.3-1.6-0.7-3.2-1-4.8c3.6-1.2,7.1-2.5,10.7-3.7c0.9,1.6,1.7,3.3,2.6,4.9
	c1.7,5.3,3.4,10.6,5.1,15.9c-3.4,2.2-7.4,2.9-11,4.4C116.4,393.4,114.2,387.9,114.5,381.4z M106.1,379.1c0.9,1.6,1.7,3.2,2.6,4.8
	c3.4,5,6.5,10.1,5.1,16.5c-3.6,1.6-7.2,3.2-11.1,3.8c-2.1-5.6-4.2-11.2-6.3-16.8c-0.3-1.6-0.6-3.2-1-4.8
	C99.3,382.4,102.7,380.8,106.1,379.1z M309,565.8c3.3,0.8,5.9,2.2,6.2,6.1c0.3,4.6-2.7,6.2-6.2,7.4c-3.4-1.1-6.2-2.6-6.2-6.9
	C302.8,568.2,305.5,566.6,309,565.8z M309.1,470.5c3.5,0.9,6.2,2.6,6.2,6.7s-2.8,5.7-6.2,6.8c-3.4-1-6.2-2.7-6.3-6.9
	C302.7,472.9,305.5,471.4,309.1,470.5z M310.2,518.4c7,4.1,7,8.9,0,12.9c-4.2-0.2-7.3-1.6-7.4-6.5
	C302.8,519.9,306.2,518.7,310.2,518.4z M310.2,423.2c3,1.1,5,2.9,5,6.5c0,3.5-2,5.4-5,6.4c-4.2-0.2-7.4-1.5-7.4-6.4
	C302.8,424.7,306.1,423.4,310.2,423.2z M426.3,560.4c1.8-4.6,6.2-6.8,9.8-9.2c6.4-4.2,8.7-9.2,8.2-16.9
	c-0.7-12.9-0.2-12.9-12.8-12.9c-10.3,0-20.5,0-30.8-0.1c-1.6,0-4,1.1-4.7-1.2c-0.8-2.9,2-3,3.8-3.6c13.1-4.6,26.1-9.2,39.3-13.5
	c3.9-1.3,5.3-3.1,5.1-7.3c-0.4-8-0.1-16.1-0.1-24.1c0-3.3,0.3-7.1,4.6-7.2c4.6-0.1,5,3.8,5,7.4c0.1,8.2,0.2,16.5-0.1,24.7
	c-0.1,3.7,1.2,5.3,4.5,6.7c10.2,4.2,20.3,8.7,30.4,13.1c1.8,0.8,4.4,1.1,3.6,3.8c-0.7,2.5-3.1,1.2-4.6,1.3c-9.6,0.1-19.3,0.3-28.9,0
	c-4.1-0.1-5.3,1.3-4.9,5.1c0.2,2.2,0.3,4.5,0,6.6c-1.3,10.1,0.6,18.6,10.6,23.5c1.3,0.7,3.3,1.8,2.5,3.6c-1,2.2-2.8,0.4-4.1,0
	c-11-3.3-21.9-4.1-32.7,0.3c-0.7,0.3-1.5,0.4-2.3,0.5C427.4,561,427,560.7,426.3,560.4z M507.2,382.8c0.7-1.2,1.4-2.5,2.1-3.7
	c3.4,1.9,6.9,3.1,10.8,3.6c-0.3,1.6-0.6,3.2-1,4.8c-2.1,5.6-4.2,11.2-6.3,16.8c-4.2-0.8-8-2.3-11.8-4.2
	C501.2,393.6,503.4,387.9,507.2,382.8z M502,376.6c-0.3,1.6-0.6,3.2-1,4.8c-0.2,6.3-1.7,12.1-6.4,16.7c-3.6-1.5-7.6-2.1-11-4.4
	c1.8-5.6,3.6-11.3,5.4-16.9c0.7-1.3,1.4-2.5,2.1-3.8C494.9,374.2,498.4,375.4,502,376.6z M309.1,90.7c-5.7-0.8-12,0.8-16.7-4.5
	c-0.7-0.8-3.1-0.3-4.7-0.3c-8.7-0.1-9-0.2-17.6-7.3c14.4,0.9,28.7-4.3,39,9.2c10.1-13.5,24.5-8.3,39-9.2c-5.3,4.2-9.1,7.9-15.3,7.4
	c-4.2-0.4-7.9,0-11.5,3.2C318.1,92,313.1,89.4,309.1,90.7z M368.5,60.8c-6.1,6-12.4,10.9-21.3,9.3c-3.6-0.7-6.6,0.5-9.7,3.2
	c-4.6,4.1-10.8,0.5-16.4,1.4c6.3-6.3,10.1-15.5,21.8-14C351.3,61.7,360,60.8,368.5,60.8z M312.7,97.1c5.7-4.7,12.8-4.7,20.7-7
	C328.1,100.9,319.6,96.7,312.7,97.1z M248.3,61.5c12.5-1.2,23.8-1.6,34.8-0.1c6.3,0.8,9.2,8.5,14.1,13c-6.6-0.2-13.5,3.4-19.2-3
	c-2.1-2.4-5.4-1.5-8-1.1C261.4,71.4,255.6,66.6,248.3,61.5z M284.4,90c8.2,2.3,15.3,2.4,21.9,6.5C295.5,99.6,290.1,98.2,284.4,90z"
	/>
<path style="fill:#F7BC9F;transform:scale(0.2)" d="M401.8,204.8c-0.9,14.9-5.5,29-10.2,43.1c-4.6,14-11.8,26.7-18.8,39.5c-12.9,21.4-30.4,36.5-55.7,41
	c-3.3,0.6-7.4,1.5-9.4-3c-0.7-2.6-0.6-5.2-0.6-7.8c0-39.5,0-79.1,0-118.6c0-2.6-0.1-5.2,0.6-7.8c1.5-3.6,4.1-2.5,6.4-1.1
	c4,2.3,5.2,6.3,6.2,10.5c3.8,14.8,15.1,24.4,31.3,26.8c12.9,1.9,27.1-5.6,34.2-17.9c1.7-3,2.9-6.1,3.5-9.5c1.3-8.6,2.9-9.6,11.4-7.3
	C404,196.5,400.8,200.8,401.8,204.8z M272.8,315c1,7.5,6.4,12.8,10,18.9c8.6,14.8,17.6,29.3,26.5,43.9c-2.3-0.5-3.5-2.6-5-4.1
	c-15.4-15.1-30.7-30.3-46.1-45.5c-5.9-4.3-11.7-8.6-14.8-15.5c0.6-8.1,1.1-16.1,1.7-24.2c3.8,0.1,4.6,3.8,6.2,5.9
	C257.5,302.4,265,308.9,272.8,315z M401.9,183.4c-1.8,0-3.6-0.1-5.4,0.1c-4.4,0.6-7.3-0.8-9.6-4.9c-2.9-5-8-7.9-13.5-9.6
	c-12-3.7-24.1-3.7-36.2-0.3c-3.5,1-6.6,2.9-9.7,4.8c-3.8,2.3-5,8.7-8.8,8.8c-3.7,0.1-7.8-2.6-12.1-2.7c0.7-8.1,0.5-16.3,0.6-24.5
	c0-2.4,0.1-4.8,1.8-6.8c20.4-1.2,40.9-1.8,61.1-5.9c4.5-0.9,9.2-1.4,13.5-2.8c4.4-1.4,6.2-0.8,6.3,4.2c0.1,3.7,1.3,7.5,2.2,11.2
	c0.4,1.5,0.9,3.7,2,4.2c10.8,5,7.8,14.4,7.7,22.9C401.9,182.6,401.9,183,401.9,183.4z"/>
<path style="fill:#FACBB8;transform:scale(0.2)" d="M309,189.7c0,45.8,0,91.5,0,137.3c-1.7,2-3.9,1.6-6.1,1.3c-11.1-1.2-21-5.4-30.1-11.7
	c-11-7.6-20-17.2-27.6-28.1c0-2.8-1.4-4.9-2.8-7.1c-14-22.8-21.7-47.9-26.2-74.2c-0.1-0.8,0.1-1.6,0.1-2.4c0.9-4-2.1-8.2,0.9-12.1
	c5.9-1.3,7.3-0.6,8.7,5.5c1.5,7,4.2,13.3,9.4,18.4c10.2,10.1,22.4,13.2,35.9,9.1c12.9-3.9,21.1-12.8,24.1-26
	c1.1-4.7,2.6-8.9,7.7-10.6C305,188.5,307.2,187.6,309,189.7z M309,148.4c0,8.3-0.1,16.7,0,25c0,2.5,0,4.8-2.4,6.2
	c-7.3,3.2-12.9,2.5-17.9-5c-3.5-5.1-10.5-6.5-16.7-7.4c-11.5-1.6-22.9-1.6-33.7,3.3c-3.5,1.6-7.3,3.5-8.9,7
	c-2.9,6.4-7.7,6.6-13.3,5.9c-0.1-2.2,0-4.4-0.3-6.6c-1-7,0.3-12.2,6.9-16.7c5.2-3.6,4.8-11.1,5.4-17.2c0.3-3.3,1.1-4.6,4.7-3.7
	c18.2,4.8,36.9,6.8,55.6,8.3c6.1,1.1,12.3-0.4,18.4,0.8C307.7,148.4,308.4,148.4,309,148.4z"/>
<path style="fill:#F7BC9F;transform:scale(0.2)" d="M307,148.4c-6.1-0.1-12.3,1.2-18.4-0.8C294.7,147.4,300.9,147.3,307,148.4z"/>
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
                                    <button :style="{background:'rgba('+getterPilotBg1+')'}" @click="ShowElement(getterPilotBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPilotBg2+')'}" @click="ShowElement1(getterPilotBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPilotBg3+')'}" @click="ShowElement2(getterPilotBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPilotBg4+')'}" @click="ShowElement3(getterPilotBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPilotBg5+')'}" @click="ShowElement4(getterPilotBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Pilot= [
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
            var randomNumber = Pilot[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Pilot[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Pilot'){
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
                getterPilotBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pilot') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPilotBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pilot') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPilotBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pilot') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPilotBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPilotBg5: {
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
                            name:'Pilot',
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