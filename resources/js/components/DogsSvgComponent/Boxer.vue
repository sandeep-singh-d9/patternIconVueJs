<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
	<path :style="{fill:'rgba(176, 114, 74, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M384.6,153.6c0-3.4-1.4-6.8-0.4-10.3c-1-5-4-9.1-6.8-13.2c-17.8-24.9-35.7-49.7-53.5-74.5
		c-3.9-5-8-9.6-14.8-10.5c-6.2-2.2-12.5-2.9-19.1-2.8c-29.6,0.6-59.2-1-88.7,1c-6.4,1.7-11.4,5.5-15.8,10.3
		c-0.6,0.6-1.1,1.2-1.6,1.9c-13.9,19.3-27.8,38.7-41.6,58.1c-6.2,8.7-13.2,16.8-17.8,26.5c1.1,3.6-1.3,6.7-1.3,10.2
		c0.1,19.6,0.1,39.2,0.1,58.9c0.2,0.4,0.4,0.9,0.4,1.4c-0.2,18.6,6.4,35.2,15,51.1c1,1.8,1.8,4,4.1,4.8c2,0,2.3-1.6,2.8-3
		c4.5-12.5,11.3-23.6,20-33.6c1-1.1,2.7-2.3,1.3-4.2c-0.7-0.4-1.6-0.7-2.4-0.5c-6.2,1.3-10-1.8-13.4-6.5c-4.9-7-9.4-14.2-12.7-22.1
		c-7.1-17-8.4-33.8,4.2-49c8.9-10.8,17.5-21.9,27.8-31.4c3.9-3.6,8.2-6.1,13.4-7.4c6.4-1.7,12.9-1.2,19.4-1.3
		c7.2,0,13.7,2.3,19.6,6.5c8.7,6.3,13.5,15,15.9,25.2c1.6,6.7,1.7,13.5,2.5,20.3c1,8.4-0.8,15.8-5.5,22.7c-2.4,3-4.7,6-7.7,8.4
		c-9.5,7.6-20.2,13.5-30.9,19.2c-18.7,9.9-33.1,24.3-44.5,42c-1,1.6-2.7,3.2-1.6,5.4c5.7-1,7.9-6.1,11.3-9.7c2.3-2.9,5-5.3,7.9-7.5
		c9.9-7.6,21.3-11.6,33.3-14.3c10.2-2.3,18.9-7.3,26.2-14.7c10.7-10.8,15.8-24.5,19.6-38.8c1.4-5.3,2.3-10.7,3.9-15.9
		c0.8,5.9,1.9,11.6,3,17.3c3.3,16.6,10.8,30.9,23.9,41.6c6.1,4.9,11.5,9.9,14.1,17.5c3.8,1.2,7.7,1.7,11.7,1.8
		c18.7,0.9,34.9,7.2,47.3,21.7c1,1.1,1.9,2.3,3.6,2.3c1.7-1.7,0.4-3.1-0.4-4.5c-10.4-18-24-33-42.1-43.5
		c-11.2-6.5-23-12.1-33.2-20.1c-11.6-9-19-19.9-15.7-35.5c-0.3-3.7,0.7-7.3,1.2-10.9c2.6-18.5,12.6-34.1,32.2-37.8
		c6.4-1.2,12.9-0.8,19.4,0c7.8,1,14.1,4.6,19.6,10c9.8,9.6,18.2,20.3,26.8,30.9c7.6,9.4,9.9,20.2,8,31.9
		c-2.4,15.6-10.2,28.7-19.6,40.9c-2,2.6-4.8,4-8.2,4.1c-1.6,0-3.4,0-4.2,2c-0.1,1.9,1.2,3,2.2,4.3c6.2,7.6,11.5,15.7,15.4,24.8
		c1.7,3.9,2,8.4,5.2,11.6c2,0.3,3.1-0.9,3.9-2.4c10.5-18.2,17.7-37.3,17-58.7C385,188.2,384.8,170.9,384.6,153.6z"/>
	<path :style="{fill:'rgba(176, 114, 74, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M181,471c-15.3-19.3-21.4-41.4-19.9-65.7c-0.4-1.9-2.1-2.5-3.4-3.3c-5.9-3.7-10.5-8.4-13.6-14.7
		c-5.7-11.4-7.2-23.6-8.1-36c-1.2-11.6,0.7-23.1,1.1-34.7c0.3-8.3,2.7-16.3,2-24.7c-6.9-14.1-11.8-28.7-13.7-44.3
		c-0.2-1.4,0-3.1-2.1-3.3c-0.1,1.3-0.2,2.7-0.2,4c0,42.9,0,85.9,0,128.8c0,5.9,0.5,11.7,1.3,17.4c7.2,53.3,48.4,97.3,101.8,108.9
		c0.4-0.2,0.7-0.5,1.1-0.7c-0.4-0.2-0.8-0.4-1.2-0.5C207.9,496.1,192.8,485.9,181,471z"/>
	<path :style="{fill:'rgba(176, 114, 74, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M384.1,247.1c-2.7,0.3-2.1,2.6-2.4,4.2c-1.6,10.2-4.3,20.1-8.2,29.6c-2,4.9-5.2,9.3-4.9,14.9
		c0,1.8,0.1,3.6,0.3,5.4c1.3,12.6,2.8,25.3,2.7,38c0.9,6.3-0.7,12.5-0.9,18.8c-0.3,10.4-2.9,20.3-7.5,29.7
		c-2.9,5.9-7.1,10.8-13.2,13.8c-1.6,0.8-3.4,1.5-3.9,3.5c-0.1,7.3,0.4,14.6-0.9,21.9c-6.6,36.5-27.2,61.2-62,74.1
		c-0.1,1.8,0.9,1.5,1.9,1c1.8-0.4,3.6-0.7,5.3-1.3c55.1-16.4,92.8-66.1,93.7-123.5c0.2-13.3,0.1-26.6,0.1-39.9
		C384.2,307.3,384.1,277.2,384.1,247.1z"/>


	<path :style="{fill:'rgba(146, 97, 77, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M417.1,101.1c-4.8,3-5.8,2.9-9.1-1.9c-2.8-4.1-5.7-8.2-8.6-12.2c-10.8-15-23.2-28.2-40.8-35.4
		c-5.2-2.2-10.6-3.9-15.9-5.9c-3.4-1.3-5.8-4.5-9.7-4.5c-3.3,5.1-5,11.1-9.9,15.2c0.6,1,1.1,2.1,1.7,3
		c15.1,21.1,30.2,42.2,45.5,63.2c5,6.8,9.3,13.9,13.9,20.9c3.2-2.3,3.4-6,4.2-9.3c0.6-2.7,2-4.1,4.6-5.2c12-5.1,20.7-13.6,26.2-25.4
		C418.9,102.3,418.1,101.6,417.1,101.1z"/>
	<path :style="{fill:'rgba(146, 97, 77, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M177.3,44.9c-4.9,4.6-11.2,6.6-17.3,8.7c-13.8,4.7-25.7,12.2-35.7,23c-6.6,7.1-12.3,14.9-17.8,22.8
		c-2.9,4.2-5.7,8.5-10.6,10.9c4,7.2,9.8,12.9,17.2,16.1c6.7,2.8,10.4,6.9,11.3,13.9c3.1-1.5,3.7-4.9,5.5-7.3
		c18.8-26.2,37.5-52.4,56.2-78.7c-2.6-3-4.4-6.4-6.1-9.9C178.9,43.7,178,44.2,177.3,44.9z"/>


	<path :style="{fill:'rgba(146, 97, 77, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M384.4,205.4c-1.2,16.2-5.1,31.7-11.9,46.4c-2.4,5.1-4.2,10.8-9.1,14.4c-0.5,0.3-0.8,0.7-0.8,1.3
		c1.4,8.7,4.6,16.9,5.4,25.7c0.1,1,0.6,1.9,1.8,2c0-2.7,0.7-5.2,1.9-7.6c3.3-6.3,5.5-13.1,7.7-19.9c2.1-6.8,2.5-13.9,4.6-20.6
		C384.7,233.2,385.4,219.3,384.4,205.4z"/>
	<path :style="{fill:'rgba(146, 97, 77, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M128.1,233.3c-2.4-7.9-3.3-16.1-4.9-24.1c0,11.7,0,23.3,0,35c0.2,0.4,0.7,0.8,0.7,1.3
		c0.6,11.8,4.1,23,8.2,34c1.5,4.1,3,8.3,6,11.7c2-0.8,2.1-2.7,2.5-4.5c1.1-5.8,2.3-11.6,3.4-17.4c0.2-1.2,0.1-2.2-0.8-3.1
		C136,256.1,131.6,244.9,128.1,233.3z"/>

<path style="fill:#D2B392;transform:scale(0.2)" d="M283.2,501.2c0.4,0.9,1.2,0.8,1.9,1c-5.2,1.8-10.5,3.1-16,2.8C273.8,503.7,278.5,502.5,283.2,501.2z"
	/>

	<path :style="{fill:'rgba(49, 41, 37, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M454.7,111.4c-4.1-14.4-7.2-29-8.1-44c-0.3-4.6-0.9-9.6,2.8-13.2c3.7-3.7,2.7-6.7-0.4-9.8
		c-5.7-5.8-12.9-8.8-20.4-10.9c-28.1-7.9-56.3-15.7-84.5-23.4c-9.5-2.6-16.2,0.2-20.9,8.8c-4.8,8.7-9.4,17.5-14.1,26.3
		c5.5,2.7,10.1,6.5,14,11.1c2.3,0.4,3.1-1.6,4.1-2.9c3-3.6,4.5-8,6.6-12.1c4.8-12.8,14.1-16.3,26.3-10.2c3.4,1.7,6.1,4.1,8.4,7
		c3.3,4,6.6,7.9,9.7,12c12.8,17,25,34.5,38,51.4c0.8,0.9,1.6,1.8,2.9,2.1c3.2,3.1,6.2,6.5,9.5,9.4c5.3,4.5,11.3,7.7,18.4,8.2
		C454.1,121.4,456.6,118,454.7,111.4z"/>
	<path :style="{fill:'rgba(49, 41, 37, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M177.5,41.4c0.4,1.1,0.9,2.1,1.5,3.2c2.2,3.3,2.7,7.9,7.2,9.6c4.3-4.7,10-7.3,15.1-10.9
		c-4.6-8.5-9-17-13.8-25.4c-4.2-7.5-11.3-10.3-19.5-8.2c-5.3,1.4-10.6,2.9-15.9,4.4c-23.8,6.7-47.7,13.3-71.5,20
		c-7.1,2-13.7,5.1-18.8,10.7c-2,2.2-3.8,5-1.2,7.5c4.6,4.4,4.4,9.8,4.1,15.3c-0.9,14.8-4,29.3-8,43.6c-2,7,0.9,10.6,8.4,9.7
		c7.5-1,13.8-4.6,19.3-9.7c2.6-2.5,5.1-5.2,7.7-7.7c2.1-0.5,3.1-2.4,4.3-3.9c11-14.4,21.5-29.2,32.2-43.8
		c5.3-7.2,10.6-14.5,17.1-20.8C157.2,23.7,171.3,26.6,177.5,41.4z"/>
	<path :style="{fill:'rgba(49, 41, 37, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M315,205.4c-9.2-4.8-18.4-9.8-27.4-15.1c-13.7-8.1-24-18.5-21.6-36.3c0.1-0.6,0-1.2,0-2.7
		c-0.9,1.9-1.4,2.8-1.8,3.8c-0.5,3.7-1.6,7.3-0.8,11.3c2.1,10.6,8.2,18.4,16.5,24.7c10.2,7.8,21.7,13.5,32.9,19.9
		c19.6,11.3,34.1,27.3,44.5,47.3c2.6,2.5,2.4,7,6,8.8c0-0.3,0.1-0.6,0.2-0.9c-4.3-15.2-11.8-28.7-22.7-40.1
		C333.4,217.7,325,210.6,315,205.4z"/>
	<path :style="{fill:'rgba(49, 41, 37, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M233.8,183.9c-3.6,2.9-7.3,5.7-11.3,8c-10.5,6-20.8,12.4-31.4,18c-8.5,4.5-15.2,11.7-23.8,16.1
		c-10.9,11.6-18.9,25-24.1,40.1c0,0.9-0.1,1.9-0.1,2.8c0.3,1.3,0.9,2,1.4,0.3c1.4-4.5,4-8.3,6.7-12.1c3.3-7.9,8.9-14.3,14.3-20.8
		c11.7-13.9,26.9-22.9,42.6-31.4c10.5-5.7,21.1-11.4,28-21.8C234.9,182,234.4,183.4,233.8,183.9z"/>


	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M346.2,404.8c-1.6-0.9-3.3-0.3-4.9-0.1c-19.9,2.4-32.7-12-35.2-26.5c-0.7-3.8-0.9-8-3.8-11.2
		c-0.2,0-0.3,0.1-0.4,0.1c-0.6-2.3-1.2-4.5-1.9-6.8c-3.8-1.7-4.3,2.1-5.7,3.8c-10.5,12.7-23.9,19.6-40.3,19.6
		c-17.1,0-31.2-7-41.7-20.8c-1-1.3-1.4-3.9-4.1-3.3c-1.3,2.6-2.3,5.3-2.8,8.1c-0.2,0-0.4,0.1-0.6,0.1c-3.4,3.7-3.3,8.6-4.4,12.9
		c-4.3,16.1-17.6,25.4-34.1,23.9c-1.8-0.2-3.6-0.9-5.3,0.2c-0.9,1.1-1,2.4-1.1,3.8c-2.7,34.9,18.2,71.7,49.5,87.6
		c5.4,2.8,11.3,4.2,16.7,7c0.4,0.3,0.8,0.7,1.2,0.8c13,2.9,26.1,2,39.2,2.1c1,0,2-0.2,2.6-1.1c4.9-0.5,9.6-1.9,14.3-2.9
		c5.5-1.8,11.1-3.7,16.1-6.7c27.4-16.3,43.4-40.3,47.5-71.9C347.9,417.4,348.6,411,346.2,404.8z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M233.1,230.3c2.5,1.2,5.2-0.3,7.8,0.4c8.5,0,17,0,25.6,0c2.9-0.8,5.8,1.3,8.6-0.3
		c6.3,0.5,12.6,1,18.9,1.5c-0.1-5.4-2.6-9.6-6.9-12.6c-16.9-12.2-26.9-28.5-30.4-49c-1-5.9-0.7-12.1-3.4-18.4c-1.6,2.3-2,4.1-2.3,6
		c-2.1,11.8-5,23.4-10.1,34.3c-7.7,16.6-19.8,28.1-38.1,32.2c-8.4,1.9-16.7,4.4-24.3,8.7c-6.6,3.8-13.2,7.5-17.4,14.2
		c8.7-6.3,18.1-11.5,28.8-12.9C204.3,232.6,218.7,231.6,233.1,230.3z"/>

	<path :style="{fill:'rgba(21, 19, 3, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M161,27.1c-8.4,0.4-14.9,4.4-20,10.7C123.8,59,108.5,81.7,92,103.5c0.8,2.5,2.2,4.7,3.9,6.8
		c3.2,0.3,5.3-1.2,7.1-3.7c5.4-7.6,10.4-15.4,16.4-22.5c8.9-10.6,18.7-20.1,31.9-25.6c9.8-4.2,20.9-6.1,28.8-14.2
		c-0.9-2.3-1.8-4.7-2.9-6.9C173.9,30.7,168.9,26.7,161,27.1z"/>
	<path :style="{fill:'rgba(21, 19, 3, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M415.9,98.9c-13.6-18.4-27-36.8-40.8-54.9c-4.5-5.8-8.8-12-16.3-15c-12.5-5-23.1-0.1-25.9,12.1
		c5.5,4.8,12.4,6.9,19.1,9.2c16,5.5,28.8,15.2,39.3,28.4c5.7,7.1,10.9,14.6,16,22.1c4,5.8,6.6,5.7,9.6,0.3
		C416.7,100.3,416.4,99.5,415.9,98.9z"/>

	<path style="transform:scale(0.2)" d="M372.1,343.5c-1.2,9.6-3.1,19-7.5,27.7c-5.9,11.6-15,19-28.2,18.6c-13.5-0.4-24.4-7.9-29.6-21.4c-1.7-4.6-2.6-9.6-3.9-14.4
		c-6.6-25.1-20.9-45.2-40.4-61.9c-4.9-4.1-12.6-4.2-17.6-0.2c-12.7,10.4-23,22.8-30.9,37.3c-6.4,11.8-9.7,24.7-13,37.5
		c-4.9,19-29.3,29.9-46.6,18.3c-9.3-6.2-13.3-15.8-16.5-25.9c-0.8-2.4,0-5.5-2.9-7c-0.4,4.6,0.2,9.2,1,13.8c3,16.5,7.9,31.8,25,39.4
		c20.1,5,38.7-7.7,41.3-27.5c0.4-3.3,1.9-6.4,2.9-9.6c2.3-2.5,2.7-5.8,3.8-8.7c6.7-21.1,21.1-36.7,37.5-50.5
		c4.6-3.9,10.3-3.5,14.8,0.1c17.4,13.6,30.2,30.7,37.4,51.7c0.7,2.3,0.8,5,3.2,6.5c1,3.8,2.2,7.6,3.1,11.4c4.9,21,20,30.8,41.1,26.6
		c11-4.3,17.3-12.8,21.3-23.5c4.9-13.4,5.4-27.4,5.6-41.5C371.9,341.1,372.2,342.3,372.1,343.5z"/>
	<path style="transform:scale(0.2)" d="M241.9,267.1c8.3,0,16.7,0.2,25,0c8-0.2,14-3.9,17.4-11.3c4.5-9.7,1.5-17.8-9.1-25.4c-2.6-0.5-5.2-1.7-8-1.1
		c-0.1,2.1,1.8,2.6,3,3.6c4.7,4,6.4,8.3,4.8,13.1c-1.7,5.2-6.2,8.7-12,8.9c-6.1,0.2-12.3,0.2-18.4,0c-5.7-0.2-9.8-3.1-11.4-8
		c-1.7-5.1-0.2-10.2,4-13.9c1.2-1,3.1-1.5,3-3.6c-2.4-0.5-4.7,0.5-7,1c-0.2,0.2-0.5,0.5-0.7,0.7c-8.7,4.9-12.4,12.9-10.1,22.2
		C224.2,261.1,232.5,267,241.9,267.1z"/>

<path style="fill:#E9EFF3;transform:scale(0.2)" d="M212.2,175.1c0.6,8.8-3,10.5-10.1,13c-7,2.4-14.3,2.3-21.6,0.4c-5.2-1.4-7.7-4.9-8.1-10.1
	c-0.8-8.5,2.7-14.8,9.9-19.1c6.5-5.1,13.4-4.1,19.9-0.8C208.7,161.8,212.7,167.2,212.2,175.1z"/>
<path style="fill:#040404;transform:scale(0.2)" d="M212.2,175.1c-3.5-15.2-14.9-21.2-30-15.9c1.5-4.7,6-4.2,9.3-4.8c9-1.7,20.4,7.3,21.5,16.5
	C213.2,172.3,213.5,173.9,212.2,175.1z"/>
<path style="fill:#EAEFF3;transform:scale(0.2)" d="M325,160.2c6.5,4.5,8.9,10.9,8.1,18.6c-0.5,4.6-2.6,8-7.1,9.3c-8.9,2.6-17.7,2.4-26.3-1.4
	c-4-1.8-6.9-4.7-6.7-9.5c-0.5-8.3,3.8-15.4,11.4-19.1C311.8,154.4,319.4,155.2,325,160.2z"/>
<path style="fill:#050505; transform:scale(0.2)" d="M325,160.2c-13.7-8-30.3-0.1-32,16.9c-2.4-7.7,3.2-17.8,11.8-21.3c7-2.8,13.5-1.9,19.6,2.5
	C325.1,158.8,326,159.2,325,160.2z"/>

	<path :style="{fill:'rgba(41, 41, 41, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M363.3,267.1c-2.5-2.6-1.7-7.4-6-8.8c-0.9-0.8-1.8-1.4-2.6-2.3c-7.9-9.7-18-16.1-29.8-19.8
		c-10.1-3.2-20.6-2.9-31-4.3c-5.9-2.5-12.1-3.1-18.5-2.2c-1.4,3.2,1.7,3.9,3.1,5.3c5.6,5.6,7.9,11.9,4.7,19.5
		c-3.2,7.6-9.2,11.2-17.3,11.3c-8,0.1-16,0.1-24,0c-8.6-0.2-15.8-4.8-17.8-12c-1.9-6.9-1.4-15.1,6.6-20.4c1.1-0.8,3.4-1.4,2-3.7
		c-1.4-0.8-2.9-0.6-4.4-0.5c-9.9,0.9-19.9,1.9-29.8,2.7c-14.1,1.1-27.1,5-37.4,15.5c-3.3,3.3-6.7,6.6-10,9.8
		c-2.2,0.7-3.2,2.7-4.4,4.3c-1.7,2.3-1.5,5.5-3.7,7.5c-2.6,7.2-2.8,14.9-4.9,22.2c-1.2,13.7-3.1,27.4-3.6,41.2
		c-0.2,6.6-1.4,13.2,0.6,19.7c0.6,0.8,0.9,1.8,1,2.8c1.1,8.3,4.3,15.6,8.9,22.5c12.1,18.1,36.9,17.7,50.8,1.9
		c5.2-5.9,7-13.1,8.7-20.4c6.2-26.1,19.6-47.8,40.3-65c5.4-4.4,11.7-4.8,16.9-0.6c12.6,10.3,22.9,22.6,30.7,37
		c5.8,10.8,9.1,22.5,12,34.3c2.1,8.7,7,15.4,14.1,20.5c12.4,9,30.7,7.3,40.6-3.8c6.6-7.4,10.6-16.1,12.1-25.9
		c0.8-5.1,1.5-10.2,1.8-15.3c0.1-1.8,0.2-3.6,0.2-5.5c-0.3-13.3-2-26.4-3.2-39.6C368.3,285.7,366.5,276.2,363.3,267.1z"/>
	<path :style="{fill:'rgba(41, 41, 41, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M167.2,226.1c2.5,0.8,4.1-1,5.8-2.2c6.9-5,13.7-10,21-14.3c14.3-8.4,29.7-15,42.1-26.4
		c3.5-3.4,4.7-7.8,6-12.3c1.8-6.5,0-12.9-0.3-19.3c-0.6-12-3.7-23.3-11.8-32.7c-11.5-13.3-26.7-14.3-42.6-12.2
		c-7.9,1-14.4,4.7-20,10.3c-9.9,9.9-18.6,20.9-27.4,31.7c-8.2,10.2-9.7,21.9-7.3,34.4c2.4,12.7,8.8,23.5,15.5,34.3
		C152.9,224.4,158.3,228.8,167.2,226.1z"/>
	<path :style="{fill:'rgba(41, 41, 41, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M265.6,154c-0.1,0.7-0.3,1.3-0.4,1.9c-0.7,5.9-0.7,11.6,2.4,16.9c3,5.3,7.1,9.6,11.8,13.3
		c8.7,6.8,18.6,11.5,28.3,16.6c8.4,4.4,16.5,9.1,23.7,15.5c3,2.6,5,6.7,9.3,7.7c0.9-1.6,2.3-1,3.6-0.9c4.4,0.3,7.8-1.6,10.3-5
		c7-9.5,13.3-19.6,16.9-30.9c4.7-14.8,5-29.2-5.1-42.1c-8-10.2-16.3-20.1-25.2-29.6c-6.7-7.2-14.6-11.8-24.5-13
		c-23.2-2.7-41.1,5.3-49,28.6c-2.4,7.1-3.3,14.5-3.4,22C265.2,155.4,265.3,154.5,265.6,154z"/>
	<path :style="{fill:'rgba(41, 41, 41, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M238,230.6c-5.7,3.3-8.4,9.6-6.7,15.7c1.6,5.9,6.8,9.8,13.4,9.8c6.3,0,12.6,0.1,19,0
		c9.5-0.2,15.7-10.2,12-18.8c-1.7-4-5.3-5.8-8.5-8c-9-0.5-18-0.5-27.1,0C239.4,229.7,238.7,230.2,238,230.6z"/>

<path style="fill:#A9A9A9;transform:scale(0.2)" d="M300,360.3c-1.9-0.5-2.2,1.2-2.9,2.2c-23.8,31.2-65.7,30.1-88.2-2.3c-0.2-0.3-0.5-0.4-0.7-0.6
	c0.4-6,3.4-11.1,6.3-16.1c7.6-13,17.8-24,28.9-34.1c6.1-5.6,14-5.7,21.4,0.6C281,323.8,292.9,340.4,300,360.3z"/>
<path style="fill:#5A2A10;transform:scale(0.2)" d="M179.2,178.1c-2.5-5.9-0.2-10.7,4-14.8c4.3-4.3,10.6-5.1,16.1-2.3c5.7,2.9,8.6,7.5,7.9,14.2
	c-1,0.6-1.7,0-2.5-0.5c-1.4-1.2-3.3-1.3-4.7-2.5c-0.9-3.3-2.8-5.4-6.4-5.8c-4.4-0.5-6.5,2.3-8.5,5.4
	C182.1,173,182.4,177.2,179.2,178.1z"/>
<path style="fill:#7B380F;transform:scale(0.2)" d="M179.2,178.1c1.5-2.4,1.9-5.6,4.8-7c0.7,0.5,1,1.3,1.2,2.1c2.1,9,6.9,10.8,14.4,5.5
	c2.5-0.7,3.9-2.9,5.6-4.6c0.6,0.3,1.3,0.7,1.9,1c-0.9,7.3-5.4,12.2-12,13.1C187.5,189.2,182,185.7,179.2,178.1z"/>
<path style="fill:#5A2A10;transform:scale(0.2)" d="M298.3,175.1c-0.3-9,6.2-16,14.6-15.8c8.8,0.3,14.5,7.2,14,16.8c-0.7,1.4-1.6,1.4-2.6,0.4
	c-1-2-2.8-3.1-4.6-4.4c-3.2-7.3-8.4-7.8-14.8-1.4C302.6,172,301.5,175.2,298.3,175.1z"/>
<path style="fill:#7B370E;transform:scale(0.2)" d="M324.9,175.8c0.5,1.2,1.3,0.6,2,0.3c-1.8,7.9-7.2,12.4-14.6,12.3c-7.5-0.1-12.6-4.9-14.1-13.3
	c2-1.7,3.9-3.3,5.9-5c0.8,0.7,1,1.7,1.1,2.7c1.5,9.5,6.5,11.6,14.1,6C321.3,177.9,322.8,176.2,324.9,175.8z"/>
<path style="fill:#010100;transform:scale(0.2)" d="M200.3,178.9c-2.5,3.8-5.9,5.2-10.2,3.7c-5.4-1.9-6.7-6.3-6.2-11.5c4.1-6.6,10.6-8.1,15.2-3.4
	c1.2,1.3,2.2,2.5,1,4.2C199.2,174.3,200,176.6,200.3,178.9z"/>
<path style="fill:#E4E8EA;transform:scale(0.2)" d="M200.3,178.9c-2.7-2.3-3.4-4.6-0.1-7c2.1-0.3,3.9,0.2,5,2.1C205.3,177.4,203.7,179.1,200.3,178.9z"/>
<path style="fill:#010101;transform:scale(0.2)" d="M320.1,179.1c-2.7,4-6.4,5.1-10.7,3.4c-5.8-2.2-5.9-7.2-5.2-12.4c4.1-5.1,8.3-6.5,12.8-4
	c2.2,1.2,4.3,2.6,3.3,5.7C318.9,174.2,319.4,176.7,320.1,179.1z"/>
<path style="fill:#E4E8EB;transform:scale(0.2)" d="M320.1,179.1c-3-2.4-4-4.9,0.1-7.2c2.9-0.2,4.2,1.4,4.7,4C323.9,177.8,322.4,179.1,320.1,179.1z"/>
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
                                    <button :style="{background:'rgba('+getterBoxerBg1+')'}" @click="ShowElement(getterBoxerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBoxerBg2+')'}" @click="ShowElement1(getterBoxerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBoxerBg3+')'}" @click="ShowElement2(getterBoxerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBoxerBg4+')'}" @click="ShowElement3(getterBoxerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBoxerBg5+')'}" @click="ShowElement4(getterBoxerBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Boxer= [
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
            var randomNumber = Boxer[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Boxer[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Boxer'){
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
                getterBoxerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Boxer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBoxerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Boxer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBoxerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Boxer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBoxerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBoxerBg5: {
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
                            name:'Boxer',
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