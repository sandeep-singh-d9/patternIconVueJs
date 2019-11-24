<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(236, 236, 236, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M445.8,220.3c0,1.8,0.3,3.6,0,5.4c-2.3,14.3,6.2,23.2,16,31.1c6.2,5,13.1,9.3,19.8,13.6
	c2.6,1.6,3,3.6,3,6.3c-0.1,13.3,0.5,26.6-0.2,39.8c-0.5,9.7-0.8,19.6-2.9,29.2c-0.5,2.3-1,4.5-2,6.6c-2.4,5.2-5.9,8-12.1,7.3
	c-5.1-0.6-10.4,0-15.6-0.1c-5.6-0.1-9.9-3.8-10.4-8.8c-0.6-5.7,2.5-10.1,8.1-11.6c10.2-2.8,10.2-2.8,10.2-13.2c0-7.7,0-15.3-1-23
	c-1-7.4-5.4-11.7-11.9-14.5c-11.4-8.4-24-15-36-22.5c-15.9-9.8-31.1-20.6-43.8-34.5c-1.6-1.7-4.3-3-3.1-6.2
	c4.3-3.2,9.8-2.3,14.5-4.1c10.4-3.9,11.9-6.1,12-16.9c0-3.4-0.1-6.8,0.6-10.2c0.9-4.3,2.6-7.7,7.5-8.7c3-0.6,4.3-2.9,4.7-5.8
	c0.2-2.1-0.1-4.4,2-5.8c3-0.5,6-0.6,9,0c0.3,0.2,0.7,0.4,0.8,0.7c3.9,11.4,11.7,19.6,21,26.9C442.2,205.7,444.7,212.9,445.8,220.3z"
	/>
<path :style="{fill:'rgba(236, 236, 236, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M152.9,364.7c-0.8-0.3-1.7-0.7-2.5-0.8c-12.2-2.1-16.3-11.8-8.9-22.3c-1.7-0.5-3.3-1.3-4.9-1.5
	c-8.3-1.1-10.2-8.3-9.6-14.8c0.5-5.3,4.7-8.5,11.7-8.9c1.3-0.1,2.5,0,3.8,0c4.6,0.1,7.3-1.8,8.3-6.6c2.5-11.2,3.5-22.6,3.2-34
	c-0.3-10.2,0.8-20.4-1-30.6c4.3,0.1,5.5,3.6,6.8,6.6c3.5,7.9,5.3,16.3,5.9,24.9c0.3,3.5,1.1,7,0.7,9.4c0.1,1.9,0.9,1.1,0.2,1.3
	c-0.2,0.1-0.3-0.1-0.3-0.4c-0.2-6.2-0.5-12.5-1.6-18.6c-0.4-2.1-0.5-4.3,0.3-6.3c0.6-1.2,1.7-1.7,2.8-2.2c6-2.8,8.2-7.9,8.6-14.1
	c1.2-5.8,0.9-11.8,3.1-17.3c1.1-2.9,1.8-7,5.6-7.1c4.1-0.1,4.2,4.3,5.1,7.2c1.1,3.4,1.5,7,2.2,10.5c1,7.6,7,11.4,12,15.9
	c-1,14.2-3.6,28.1-6.2,42.1c-3.6,19.4-8.9,38.1-17.7,55.8c-2.7,5.4-6.1,10.1-12.7,11.2C162.9,365.2,157.8,363.4,152.9,364.7z"/>
<path :style="{fill:'rgba(236, 236, 236, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M149.5,225.8c-9.8-11.3-20.4-21.9-29.3-34c-13.1-17.9-22.5-37.2-25.8-59.3c-0.2-1.2-0.7-2.4-1-3.6
	c4.1-4.2,9.6-4.4,14.8-4.1c4,0.3,8.1,1.1,12,2.5c4.8,3.5,8,8.6,12.8,12.1c9.4,7,19.5,12.8,29,19.5c3.4,2.4,6.7,4.8,9.8,7.5
	c7,6.3,6.9,13.5-0.1,19.8c-2.1,1.9-4.5,3.5-6.5,5.6c-2.9,3-3.8,6.1-2.2,10.2c2.3,5.8,1.3,7.6-4.7,10.4c-5.4,1.9-6.4,6.8-7.8,11.4
	C150.6,224.7,150.2,225.4,149.5,225.8z"/>
<path style="fill:#CDCCCB; transform:scale(0.2)" d="M120.5,128.8c-9-2.9-18-3.6-27,0c-3.2,0.4-6.3-0.5-9.4-1.2c-5.6-1.3-8.6-5.1-9.7-10.6
	c-1.6-3.5,0.1-6.7,1-9.9c1.9-3.4,2.3-6.8,1.9-10.7c-1.5-14.6,3.4-26.8,15.5-35.7c4.5-4.3,6.5-9.9,7.3-15.8c1.1-7.5,0.5-15,0.2-22.5
	c-0.2-4-3.3-5.1-5.8-6.9c7.9-1.6,15.9-1.5,23.8-0.1c-3.8,2-5.2,5.2-5.6,9.5c-0.8,7.9-1,15.7,1,23.4c1.3,5,3.4,9.4,7.4,12.7
	c10.9,7.9,15.2,18.9,14.7,32c-0.2,5.6-0.1,11.1,2.6,16.1c0.3,0.9,0.5,1.8,0.5,2.7c0.1,10.5-1.7,14-8.6,16.5
	C127.2,129.7,123.8,129,120.5,128.8z"/>
<path :style="{fill:'rgba(113, 72, 46, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M76.5,107.6c-0.7,3.1-1.4,6.3-2.1,9.4c-7.7,7.9-23.4,9-34.8,1.9C27.2,111.2,22.7,99,21.4,85.2
	c-0.1-1.5,0.4-3.3,1.1-4.6C29.8,66.2,37.7,52,49.2,40.5c4.8-4.8,10-9.4,17.4-9.6c1.9,2.6,0.7,5.3,0,7.7c-3.5,12.2-0.9,23.3,4.8,34.2
	C77.2,83.8,78.9,95.4,76.5,107.6z"/>
<path :style="{fill:'rgba(113, 72, 46, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M137.8,111.6c-0.1-0.7-0.2-1.4-0.2-2c-3.8-12.1-2.3-23.8,3.5-34.7c6.7-12.7,8.7-25.6,5-39.4
	c-0.4-1.5-1-3.1,0.3-4.6c5.6-0.3,9.9,2.8,13.8,6.1c11,9.2,18.3,21.3,25.4,33.5c4.3,7.3,8.4,14.6,5.3,23.6c-0.1,0.3,0.5,0.9,0.7,1.4
	c-1,4.9-3.2,9.4-5.8,13.7c-7.5,11.7-18.6,16.2-32,16.2c-2.5-0.1-4.9-0.4-7.2-1.3C140.9,121.7,137.4,118,137.8,111.6z"/>
<path :style="{fill:'rgba(186, 95, 63, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M204.4,254.7c-7-2.6-11.7-7.2-13-14.8c3.2-10.6,9.2-14.8,20.1-13.1c25.8,3.9,51.2,1.1,76.6-3.2
	c11.2-1.9,21.8-5.9,32.4-10c7.7-3,15.5-5.7,23.7-7c12.1-1.9,22.7,1.7,32,9.5c1.8,1.5,4.3,3.1,2.9,6.2c-5,1.2-10,2.4-15,3.6
	c-0.6,0.4-1.3,0.8-2,0.5c-7-3.3-14.4-3.3-21.9-3c-8.3,1.8-15.9,5.4-23.9,8.1c-34,11.7-68.8,15.1-104.4,11.1c-4.8-0.5-7,0-7,5.1
	C204.9,250.1,204.6,252.4,204.4,254.7z"/>
<path :style="{fill:'rgba(236, 236, 236, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M445.8,302.3c0.4,9-1.1,17.8-2.3,26.6c-1.1,8.2-6.5,12.3-14.8,12.3c-4.8,0-9.7,0.1-14.5,0
	c-5.2-0.1-9.6-3.7-10.3-8.4c-0.7-4.7,2.6-9.4,7.6-10.9c1.5-0.5,3.1-0.8,4.7-1.1c6.3-1.2,8-3.1,6.9-9.4c-1.4-7.7-0.6-15.3-0.9-23
	c0.5-0.2,1.1-0.5,1.5-0.2C431.6,292.1,439.6,295.7,445.8,302.3z"/>
<path style="fill:#CCCCCC;transform:scale(0.2)" d="M445.8,302.3c-7.9-4.7-15.8-9.3-23.6-14c-0.7-12.9-10.8-18.1-20-23.8c-17.4-10.9-35.6-20.6-51.9-33.1
	c-3.4-2.6-6.8-5.3-10.1-7.9c8.4-3.5,16.2-0.8,23.9,2.5c13.8,16,30.3,28.5,48.4,39.2c10.6,6.3,20.9,12.9,31.4,19.3
	c1.5,0.9,3.2,1.7,3.2,3.9C446.6,293,446.2,297.6,445.8,302.3z"/>
<path :style="{fill:'rgba(186, 95, 63, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M146.3,30.8c5.2,15.6,4.2,30.4-4,44.9c-5.2,9.2-6.1,19.6-4.7,30.1c0.2,1.2,0,2.5,0.1,3.8
	c-2.8-3.8-3.6-7.9-3.1-12.6c1.3-14-2.4-26-14-34.9c-1.8-3.3-1.1-6.2,1.4-8.8c1.7-0.1,1.8,1.5,2.4,2.4c4.4,6.7,13.1,6.6,17.1-0.2
	c1.5-2.5,1.1-4.3-1.5-5.7c-3.8-2.1-7.5-1.6-11.3,0.2c-1.6,0.8-3.2,2.6-5.3,0.8c-0.7-2.3,0.5-4.2,1.6-6.1c4.3-7.4,4.9-15.2,2.6-23.3
	c-0.3-1-2.3-3,0.6-3.6C135.8,19.8,142.1,23.8,146.3,30.8z"/>
<path :style="{fill:'rgba(186, 95, 63, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M76.5,107.6c0.6-14.4-2.4-27.9-9.4-40.7c-5.7-10.5-3.8-21.8-1-32.9c0.3-1,0.4-2.1,0.6-3.2
	c5-6.5,10.9-11.7,19.3-13.2c1,3.2-0.5,6.3-1.1,9.3c-1.2,5.8,0,10.8,2.7,15.8c1.3,2.4,3.1,4.8,2.3,7.9c-2,2.1-3.6,0-5.2-0.7
	c-2.9-1.4-5.7-1.9-8.8-0.9c-5.7,1.9-6.4,4.6-2.2,8.8c3.2,3.2,8.2,3.7,12.4,1.3c1.8-1.1,3.3-2.8,5.7-2.9c2.3,1.3,3.1,3.1,1.7,5.5
	c-12.6,9.5-16.6,22.3-14.3,37.5C79.6,102.5,78.3,105.2,76.5,107.6z"/>
<path :style="{fill:'rgba(186, 95, 63, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M428.6,170.8c7.8-0.5,10.3-2.5,10.9-8.7c8.4,16.6,8.6,34.4,7,52.3c-0.2,2-0.4,3.9-0.7,5.9
	c-3.8-11-10.2-19.8-20.1-26.5c-6.5-4.5-8.8-12.3-11.3-19.6C418.5,170.5,423.4,170,428.6,170.8z"/>
<path style="fill:#DA6839;transform:scale(0.2)" d="M128,17.8c3.5,10.7,3,20.9-3.4,30.6c-0.5,0.8-0.6,2-0.9,3c0.3,1.1-0.2,1.7-1.3,2
	c-1.5,2.7-2,5.6-2.1,8.7c-7.2-5-8.3-12.9-9.4-20.6c-1-7.4,0-14.9,1-22.3c0.6-4.2,3.6-3.6,6.4-3.7C121.7,15.9,125,16.1,128,17.8z"/>
<path style="fill:#DA6839;transform:scale(0.2)" d="M89.2,51.3c0.3-2.9-1.3-5.2-2.7-7.4c-5.4-8.7-4.1-17.4-0.6-26.3c2.7-1.5,5.6-1.7,8.6-2.1
	c4.6-0.8,6.8,0.9,7.2,5.8c0.8,10.9,1.9,21.8-2.4,32.3c-1.3,3.1-2.8,6.2-5.9,8.1c-0.5-1.8-0.7-3.7-2.1-5.1
	C89.9,55.2,88.7,53.6,89.2,51.3z"/>
<path style="fill:#CDCCCB;transform:scale(0.2)" d="M149.5,225.8c0-0.8,0.1-1.5,0.1-2.3c4.3,1.6,6.9,5.1,8.8,8.8c4.6,9.2,6.6,19.1,7.3,29.3
	c0.2,9.2,2,18.4,0.5,29.1c-1.6-13.1-2.9-24.8-6.9-36c-1.3-3.8-2.9-7.3-6.5-9.5C152.5,238.6,151.5,232.1,149.5,225.8z"/>
<path style="fill:#E7D1C6;transform:scale(0.2)" d="M152.9,364.7c4.9-2,10-0.5,14.9-1C163,366,157.9,364.3,152.9,364.7z"/>
<path style="fill:#DA6839;transform:scale(0.2)" d="M379,222.3c-4.4-8.3-12.3-11.5-20.7-13.7c-13.2-3.5-25.1,1.7-36.8,6.3c-17.8,6.9-35.9,11.4-54.9,13.3
	c-12.7,1.3-25.3,2.1-38,1.8c-5-0.1-10-0.4-14.9-1.4c-9.5-2-17.5,0.2-20.4,9.5c-0.2,0.7-1.3,1.2-1.9,1.7c-1-4.1-1.9-8.3-3-12.3
	c-0.6-2.1-0.7-5.5-3.1-5.6c-2.9-0.2-3.2,3.4-4.1,5.6c-1.6,4-2.1,8.2-2.6,12.5c-0.2,2.1-0.7,4.2-1.1,6.3c-3-0.3-3.2-3-3.8-5.1
	c-2.4-8.9-6.1-17-12.8-23.5c-1.6-1.5-3.4-3.3-2.7-6c4.7-1.9,6.3-4.9,3.7-9.6c-2.3-4.1-1-7.7,2.1-10.7c2.8-2.8,6-5.1,8.8-7.9
	c4.5-4.6,4.5-8.8,0.5-13.8c-2.4-3-5.4-5.3-8.5-7.4c-7.7-5.2-15.5-10.2-23.3-15.3c-7.8-5.1-14.9-11.1-20.9-18.2
	c0.9-1.7,2.5-1,3.8-1.1c10.1-0.3,13.3-3.6,13.4-13.5c0-0.9,0.1-1.8,0.2-2.7c1.3,9.3,8.5,11.3,16.1,12.9c0.5-0.1,1.1-0.2,1.6,0.1
	c10.7,7.2,21.4,14.4,26.3,27.4c3.1,8.4,5.5,17,10.4,24.7c5.7,9,13.5,15,23.7,17.1c10.5,2.2,20.3,5.6,29.4,11.3
	c4.3,2.7,9.4,3.7,14.4,4c17.4,1,34.5-0.4,50.6-7.6c12.2-5.5,24.5-7.8,37.7-4.5c1.9,0.5,3.9,0.5,5.9,0.3c5.5-0.4,8.1-2.9,8.6-8.4
	c0.2-2.3,0-4.7,0.2-7c0.4-6.2,1.6-12.3,5.6-17.1c5.4-6.4,8.2-13.8,10.3-21.6c0.5-1.7,0.9-3.5,2.3-4.8c6.2-0.3,12.9,5.2,14.3,11.7
	c0.5,2.4,0.7,4.9,1.1,7.4c0.9,5.7,2.9,10.6,8.1,13.8c0.9,0.5,1.8,1.3,1.6,2.6c-2,1.6-0.7,3.7-0.8,5.5c-0.4,4.5-2.4,7.7-7.1,7.8
	c-3.2,0.1-4,1.9-4.7,4.2c-1.3,4.3-1.1,8.8-1.1,13.3C392.2,215.6,389.7,218.9,379,222.3z"/>
<path :style="{fill:'rgba(113, 72, 46, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M439.5,162.1c-1.9-7.1-5.9-13-10.4-18.6c-2.4-3-2.7-5.8-2.3-9.3c1.5-11.4,4-22.6,6.7-33.7
	c6.6-27.4,8.4-54.8,2.5-82.5c-0.5-2.4,0.1-6.3-3.8-5.9c-3.4,0.4-2.4,3.9-2.4,6.2c0.1,10,0.1,20.1-1.2,30.1
	c-2.5,19.1-7.2,37.4-19.7,52.6c-6.8,8.3-14.6,15.5-26.7,14.1c-1,3.8-0.1,7.7-0.3,11.5c0.1,1.2,0.3,2.3,0.9,3.3
	c0.1,0.1,0.1,0.1,0.2,0.1c-3.3,2.3-3.2,5.3-1.8,8.6c7.4,3.2,13.1,7.2,13.2,16.7c0.1,7.9,3.3,15,11.4,18.6c2.8,1.4,5.7,0.6,8.6,0.4
	c4.5-1.1,9.1-2.2,13.6-3.2c0.3,0.3,0.7,0.5,1.2,0.7C437.2,172,440.7,168.7,439.5,162.1z"/>
<path :style="{fill:'rgba(186, 95, 63, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M158.1,211.8c4.5,7,11.2,12.4,14.2,20.6c1.7,4.6,1.7,9.9,5.1,13.9c-0.7,9.4-3.7,13.3-11.7,15.4
	c-2.5-3.5-2.3-7.8-3-11.7c-1.8-10.1-5.2-19.3-13.1-26.3C151.5,218.9,151.5,213,158.1,211.8z"/>
<path style="transform:scale(0.2)" d="M106.4,101.1c-5.1-0.9-9.3-3.3-12.2-7.8c-4.8-7.3-3.7-10.8,4.8-13.6c0.5,0.3,1,0.5,1.6,0.6c5.6,0.4,11.2-0.2,16.8,0
	c5.7,3.2,6.5,5.5,3.5,11c-2.8,5.4-7.2,8.7-13.2,9.7C107.2,101.4,106.8,101.4,106.4,101.1z"/>
<path style="transform:scale(0.2)" d="M106.4,101.1c0.4,0,0.8,0,1.2,0c-0.7,7.6-0.3,14.8,7.2,19.9c-6.5-4.9-11.6-3.5-16.9,1.5c-3,2.9-7.1,3.9-11.1,0.6
	c5.1,1.3,9.1,0,12.8-3.8c3.4-3.6,6.8-6.7,5.9-12.4C105.2,105,106,103,106.4,101.1z"/>
<path style="fill:#947D6F;transform:scale(0.2)" d="M117.3,80.3c-6.2,1.3-12.4,2.8-18.4-0.4c5-0.4,10.1,0.5,15.1-0.5C115.2,79,116.3,79.3,117.3,80.3z"/>
<path style="fill:#421B04;transform:scale(0.2)" d="M113.9,79.4c-5,1.8-10,0.9-15.1,0.5c0,0,0.1-0.3,0.1-0.3C103.9,78.8,108.9,79.1,113.9,79.4z"/>
<path :style="{fill:'rgba(66, 47, 36, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M383.3,126.7c-0.2-3.9,0.9-7.9-1-11.6c-35.7-2-71.4-0.7-107.1-1.3c-11.5-0.2-22.9-1.3-34.3-2.6
	c-17.5-2-33.2-9.4-49.3-15.7c-3.5,3.7-3.9,8.8-6.4,13c0,0,0,0,0,0c0,0,0,0,0,0c-5.8,7.5-12.8,13.1-22.5,14.9
	c-2.9,0.5-6.1-0.9-8.7,1.2c3,2.3,5.8,4.9,8.9,7c10.4,6.8,16.9,16.3,20.2,28.2c0.6,2.2,1.4,4.5,2.2,6.6c6.1,15.7,16.2,27,33.6,29.9
	c8.8,1.5,16.8,4.8,24.3,9.5c3.2,2,6.6,3.5,10.4,4.1c17.9,2.6,35.6,1.8,52.3-5.1c14.3-5.8,28.1-9.4,43.8-6.1
	c10.7,2.3,14.4-1.9,14.4-12.9c0-6.5,0.1-13.4,4.4-18.5c7.1-8.4,10.4-18.3,12.9-28.6c0.4-3,0.6-6,1.9-8.7
	C383.2,128.8,383.3,127.7,383.3,126.7C383.3,126.7,383.3,126.7,383.3,126.7C383.3,126.7,383.3,126.7,383.3,126.7z"/>
<path style="fill:#844729;transform:scale(0.2)" d="M122.5,53.4c0.4-0.7,0.9-1.3,1.3-2c5-3.4,10.1-6.1,16.3-3.1c4.6,2.2,5.1,4.5,2.1,8.7
	c-3.3,4.7-7.8,6.4-13,4.7C125.6,60.5,121.8,58.5,122.5,53.4z"/>
<path style="fill:#854729;transform:scale(0.2)" d="M89.2,51.3c1.1,1.6,2.6,3.1,2.2,5.4c-2.3,1.9-4.4,4.3-7.4,5.2c-5.9,1.7-12.6-1.8-14.8-7.7
	c-1.1-2.8,0.9-3.9,2.7-5C78.2,45.4,83.9,47,89.2,51.3z"/>
<path style="transform:scale(0.2)" d="M138.6,53.3c-0.5,2.7-2.1,5.1-5,5.2c-2.8,0.1-5.2-1.7-5.4-4.8c-0.1-1.7,2.3-4.4,2.6-4C132.8,52.6,138.3,47.2,138.6,53.3z"/>
<path style="transform:scale(0.2)" d="M79.7,49.8c3.5-1.1,4.9,0.7,5.2,3.6c0.4,3.3-1.7,5.2-4.6,5.3c-2.8,0.1-5-1.4-5.1-4.8C75,50.3,76.4,48.8,79.7,49.8z"/>
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
                                    <button :style="{background:'rgba('+getterBeagleBg1+')'}" @click="ShowElement(getterBeagleBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBeagleBg2+')'}" @click="ShowElement1(getterBeagleBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBeagleBg3+')'}" @click="ShowElement2(getterBeagleBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBeagleBg4+')'}" @click="ShowElement3(getterBeagleBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBeagleBg5+')'}" @click="ShowElement4(getterBeagleBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Beagle= [
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
            var randomNumber = Beagle[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Beagle[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Beagle'){
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
                getterBeagleBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Beagle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeagleBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Beagle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeagleBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Beagle') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeagleBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBeagleBg5: {
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
                            name:'Beagle',
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