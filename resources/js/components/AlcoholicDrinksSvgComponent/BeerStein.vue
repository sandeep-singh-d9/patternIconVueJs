<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M443.4,330.4c11.9-8.5,25.7-6.4,35.8-16.3c3.4-3.4,5.8-6,6.5-10.4c0.5-3,0.1-6.3,1.2-9
	c9-21.9-7.8-31.6-20.2-43.4c-0.8-0.7-2-1.7-2.8-1.6c-16.3,2.7-26.1-8.5-36-17.8c-46.6-43.9-81.5-96.3-108.6-154
	C306,49.8,312.9,38.8,344,32.3c19.5-4.1,37.5,0.5,55.2,7.8c4.7,2,8.8,3.2,14,1.8c20.2-5.6,39-1.8,56.3,9.5c4.6,3,7.5,3.6,12.7,0.3
	c10.6-6.6,22-1.5,33.1,0.3c1.9,0.3,3.4,2.2,3,4.3c-1.8,10.7-0.5,22.8-9.2,30.8c-5,4.7-4.2,8.3-2.7,13.8c5.5,20.4,3.4,39.8-9.9,57
	c-2.9,3.8-3.1,7.4-2.7,11.6c2,25-2.8,48.3-18.2,68.6c-2.7,3.6-2.4,5.8,0.5,8.6c3.3,3.1,6.5,6.3,9.5,9.8c4.2,4.8,8,5,13.4,1.3
	c7.9-5.3,17.2-7.5,26.5-9.4c8.9-1.9,17.3-5.3,24.7-11c2.3-1.7,4.5-5.4,7.7-3.6c3,1.7,3.3,5.7,3.4,9.2c0.5,16.8-16.2,35.9-34.9,37.4
	c-9.6,0.8-12.2,4.5-12.4,12.9c-0.3,9.7-6.2,19.9,4,28.4c1.7,1.4,3.1,3,5.1,4c54.9,26.9,73.8,74.4,52.6,131.4
	c-10.8,29-29.5,52.5-51.2,74c-15.3,15.2-31.3,29.7-44.5,48.5c10.7,2.9,18.3,8.7,21.5,19.1c2.4,7.6,1.7,15-2.1,21.9
	c-10.2,18.7-33.3,20.4-59.8,4.1c-1.8,11-4,21.3,9.6,27.2c5.1,2.2,7.1,8.5,8.4,14.2c2.3,10.1,2.2,20.3,1.8,30.5
	c-0.3,8.8-5.5,14.4-12.9,18.6c-25.1,14.2-52.6,21.4-80.9,24.2c-76.1,7.4-150.3-0.8-221.6-29.4c-19-7.6-36.5-18.1-51.9-32
	c-6.7-6.1-9.9-13.1-8.3-22.2c1.5-8.9,2.8-17.9,4.3-26.9c1.7-9.8,7.3-16.9,16.5-19.9c5.8-1.8,7.5-5.2,8.4-10.4
	c14.6-83.4,31.8-166.3,50.7-248.8c1.4-6,0.4-8.3-6.6-9.2c-37.9-5.2-53-41.2-30.5-72.4c2.7-3.8,3.2-6.5,1.9-11.2
	c-7.9-28,2.3-46,30.5-54c4.6-1.3,5.5-4.3,7.1-7.8c7.6-16.5,20.8-23.2,38.7-19.7c3.6,0.7,6.8,2.6,9.3-2.7
	c13.2-28.5,50.9-34.8,78.6-12.4c5,4,9.1,5.6,15.9,4.4c23.9-4.1,44.9,11.2,50.7,36.4c1.1,4.6,1.3,8.1,7.9,8.5
	c21,1.3,33.7,13.6,40.4,32.8c2,5.9,4.3,9.8,11.6,11.4c12.8,2.9,21.1,15.4,22,29.9C442.2,298.6,444.3,313.2,443.4,330.4z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M442.2,556.2c1.4-51.5,1.7-102.6,2.4-153.7c0.2-16.9,20.4-29.9,36.3-24.3c6.4,2.3,13.9,4.1,20.1,1.6
	c8.2-3.2,13,0.5,18,5.1c17.7,16.3,18.5,36.2,11.8,57.4c-5.9,18.8-17.9,34-30.4,48.7C481.6,513.2,460.1,532.9,442.2,556.2z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M26.2,226.3c-7.5,0.3-13.2-2.7-16.9-9.3c-4-7.1-2.7-13.9,1.5-20.3c8.6-13.1,21.7-18.3,36.4-20.2
	c22.1-2.9,42.6,3.8,62.5,12.4c2.1,0.9,4.3,1.9,4.1,4.7c-0.2,2.3-2.1,2.8-4,3.1c-23.1,3.9-43.2,15.2-64,24.9
	C39.7,224.6,33.2,226.5,26.2,226.3z M59.1,107.6c17.8,0.5,43.4,18.4,48.2,32.4c1.5,4.3,0.2,7.1-4.6,5.9C87,142,70.4,142.5,55,137
	c-8.1-2.9-15.6-8-13.6-18.1C43.5,108.6,52.2,107.6,59.1,107.6z M200,101.8c-11-0.1-18.3-7.4-18.4-18.6c-0.2-11.1,8.8-20.6,19.6-20.8
	s19.5,9.4,19.1,21C220,94.4,211.8,101.8,200,101.8z M151.8,113.2c8.4-0.1,15.8,6.5,16,14.3c0.3,8.5-8.1,17.1-16.6,16.5
	c-9-0.7-14.5-5.9-15.1-15.1C135.6,120.5,143,113.3,151.8,113.2z M125.6,588.4c48.2,38.8,104.8,49.4,163,53.5
	c45.6,3.2,90.9,1,133.4-18.8c5.2-2.4,5.5,0.2,5.8,4.4c1.6,22.2-0.8,26.4-21.5,34.7c-37.5,15.1-76.9,16.3-116.2,13.7
	c-42-2.7-83.3-10-122.4-26.6c-11.9-5-23-11.3-33.5-18.9c-10-7.2-16.5-15.2-11.3-28.4C124.4,597.9,124.7,593.3,125.6,588.4z
	 M348.7,337.1c-49.8-1.7-96.5-7.8-140.8-26.2c-6.3-2.6-12.1-6.2-18.1-9.3c-3.9-2-3.7-5.5-2.6-8.9c1.2-3.6,4.1-2.6,6.6-1.9
	c5,1.4,10.5,0.9,14.5-1.2c11.7-6.2,22.6-2,33.8,0.9c38.2,10,77.1,15.2,116.6,14.9c21.6-0.2,43.1-2.7,63.7-9.3
	c8.5-2.7,9.5,0.3,9.7,7.5c0.6,17.4,0.8,17.3-15.4,23.3C394,335.4,370.2,335.7,348.7,337.1z"/>
<path style="fill:#FCFBF6;transform:scale(0.2)" d="M393.5,49c0.2,0.3,0.4,0.7,0.5,1c1.8,5.1,11.9,6.1,8.8,12.3c-4.3,8.7-11.4-0.1-16.6-1
	c-5.9-1-11.8-3.6-18.3-3.8c-4.1-0.1-7.7-2.5-7.5-6.9c0.2-4.5,4.5-4.5,7.9-4.3c7.9,0.5,15.7,1.2,23.5,1.9
	C392.6,48.3,393.2,48.5,393.5,49z"/>
<g>
	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M502.6,267.7c25.3,9.4,43.6,1.2,49.3-21.5C537.1,257.3,518.6,256.9,502.6,267.7z"/>
	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M509,63.9c1.4-8.5-6.4-4.6-9.8-6.2c-5.6,0.2-14.1,0-12.7,5.6c1.7,6.7,8.5,16.1,14.1,16.9
		C507.4,81.1,508,70.2,509,63.9z"/>
	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M288.8,573.7c-7.2,0.7-13.8-2.1-20.8-3.2c-2.7,9.2,4.4,12.2,9.5,15.8c5.1,3.7,8.8-1.9,13.1-3.3
		c3.6-1.1,3.7-4.7,3.5-7.5C293.9,572.2,290.7,573.5,288.8,573.7z"/>
	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M502,277.7c-3.2-0.3-3.2,2.5-3.4,4.6c-0.9,7.4-1.6,14.9-2.5,23.3c0.9,1.5-2.4,6,2.2,6.3
		c3.9,0.3,3.3-4.4,3.8-7c1.3-7.4,2.1-14.8,3-22.2C505.3,280.4,504.8,278,502,277.7z"/>
</g>
<path style="fill:#FAF9F0;transform:scale(0.2)" d="M452.7,53.5c1.2,3.3,6.7,5.8,3.1,9.7c-2.7,3-7.1,1.5-10.6-0.1c-2.8-1.3-6.4-2.6-5.1-6.3
	c1.8-5.2,7.1-2.9,10.9-3.9C451.6,52.8,452.2,53,452.7,53.5z"/>
<path style="fill:#F8B55B;transform:scale(0.2)" d="M489.3,598.5c-0.3,3.3,0,7.1-3.9,8.6c-2.5,0.9-3.9-1.1-5.3-3c-3.8-4.8-0.7-8.2,2.1-11.7
	C485.9,593,487.8,595.5,489.3,598.5z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M247.4,194.9c8.2,0.6,16.6,3.3,22.1,11.7c1.5,2.3,2.7,5,0.7,7.3c-2.2,2.6-4.9,0.8-7-0.8
	c-5.4-3.9-11.3-6.2-17.9-6c-9.9,0.3-17.7,3.8-20.1,14.6c-0.9,4-2.3,7.9-7.3,6.4c-4.1-1.3-3.3-5.2-2.8-8.7
	C217.3,205.4,230.5,194.9,247.4,194.9z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M291.4,239.3c12.4,0.2,20.3,4.5,24.6,14.2c1,2.4,1.5,5.5-1.2,7.2c-3,2-4.7-0.3-6.2-2.8
	c-6-9.9-14.4-9.6-23.7-5.7c-3.3,1.4-7.2,4.9-9.6-0.3c-2-4.4,2.5-6.6,5.4-8.8C284.4,240.4,288.7,239.1,291.4,239.3z"/>
<path style="fill:#FBE076;transform:scale(0.2)" d="M171.8,422.7c3.8-18.7,7.5-37.4,11.5-56c2.4-11.4,5.3-22.7,7.8-34.1c1-4.5,3.3-7,7.8-6.1
	c4.7,0.9,4,5.3,3.4,8.3c-1.9,10.3-4.4,20.5-6.6,30.8c-4.5,20.9-8.9,41.8-13.3,62.8c-0.9,4.3-0.6,11-6.1,10.4
	c-6.1-0.7-2.4-7.4-3.3-11.4c-0.3-1.4-0.1-3-0.1-4.5C172.6,422.8,172.2,422.7,171.8,422.7z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M445.1,663.7c-2.3-4.6-5.7-7.7-11.8-3.7c-31.6,20.5-67.4,26-103.9,27.3
	c-44.4,1.6-88.3-3.9-131.1-16.1c-28.8-8.2-56.8-18.5-79.2-40.1c-4.1-3.9-6.4-12.6-13.2-10.5c-8.2,2.6-8.1,12-9.8,19.2
	c-0.9,3.6,0.3,7.9-1,11.2c-3.6,9.5,0.3,15.8,7.3,21.7c12.8,10.8,26.9,19.7,42.3,26.1c55.2,23,113.1,31.9,172.6,32.2
	c39.8,0.8,78.5-4.1,115-20.8c6-2.7,14.5-4.4,15.4-12C449,686.8,450.6,674.7,445.1,663.7z"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M241.9,477.3c0-2.9,1.7-5.7,6.7-7.2c12.5-3.7,15.6-9.1,14.1-22.7c-1.3-12.7-1.1-12.8,11.6-10.4
	c15.9,3,32,5.9,48.3,4.6c7.1-0.6,9.1,2.5,6.6,8.7c-5.1,12.2-4.6,22.7,8,30.3c4,2.4,4.3,6.3,3,11c-4.5,16.7-14.1,29-30,36.1
	c-6.9,3.1-14.2,5.1-20.3,9.8c-3.1,2.4-6.2,2.8-8.8-0.8c-5.2-7.2-12.8-11.7-19.5-17.2C249,508.9,243.1,495.1,241.9,477.3z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M349,294.7c-40.8-0.2-80.5-7.5-119.5-18.6c-6.1-1.7-11.3-1.9-17.4,0.5c-21.4,8.2-32.9,0.7-35-22.4
	c-0.3-2.8-0.1-5.6-3.5-6c-3.2-0.4-4.6,2-5.4,4.7c-3,9.8-1.6,19,5.1,26.6c3.8,4.2,4.6,7.9,3.2,13.2c-2.8,10.2-5.4,20.5-7.2,30.9
	c-1,6-4.1,7.3-9.3,7c-13.5-0.8-24.4-6.2-29.9-19c-5.3-12.3-4.1-24.4,3.9-35.4c1.6-2.2,3-5.5,7.2-3.5c2.9,1.5,6.8,3.5,8.7-0.9
	c1.7-3.7-2.6-4.8-4.6-6.7c-15.9-15.3-10-42.9,10.8-50.3c4.1-1.5,7.8-2.9,9,3.7c0.4,2.5,2.1,4.9,3.6,7c1.8,2.5,4.4,4.8,7.6,2.7
	c2.7-1.8,1.6-4.7,0.3-7.1c-6.1-11-3.2-21,4.9-28.9c8.6-8.4,19-8.4,29.1-2.1c6.3,4,9,0.7,10.4-5c6.9-28.4,39-34.9,62.2-18.4
	c5.2,3.7,9,6.6,3.3,13c-2.4,2.7-4.5,7.2-0.3,9.9c4.9,3,6-2.2,8-5.2c8.1-11.9,24.9-14.2,38.4-5.3c9.8,6.4,14.6,16,17,27.1
	c0.9,4.2-0.1,7-4.3,9.2c-3.2,1.7-5.8,4.7-8.4,7.5c-1.3,1.4-1.4,3.6-0.1,5.3c1.4,1.8,3.3,1.4,5.1,0.4c2.3-1.3,4.5-2.8,6.9-4
	c20.6-10.7,44.2,0.7,49.1,23.5c0.3,1.5,1,3.4,0.4,4.4c-8.2,12.4,0.6,10.8,8.2,10.1c5.1-0.5,9.8,0.8,13.9,3.8
	c4.7,3.5,9.3,8.2,8.8,13.8c-0.5,5.7-7.5,5.1-11.9,6.3c-8,2.2-16.1,4-24.3,5.4C378.5,294.4,363.8,294.9,349,294.7z M299.7,396.9
	c5.8,10.9,15.2,16,23.6,22.4c27.9,21.1,39.1,48.9,33.9,83.5c-1.6,10.6-9.6,18.9-10.6,29.7c-0.3,3.1-2.8,2.9-5.2,2.4
	c-15.5-2.8-25.9,5.3-34.8,16.5c-14.6,18.4-36.3,15.1-45.6-6.8c-5.7-13.4-13.7-24.6-29.6-26.6c-4-0.5-4.2-2.2-4.7-5.8
	c-8.9-56,17.8-83.8,54.9-101.7C288,407.4,294.2,403.7,299.7,396.9z M346.1,408.5c-5.5-4.5-11.9-8-17.7-12.2
	c-2.1-1.4-4.8-2.9-3.6-6.2c1-2.8,3.4-2.1,5.7-1.8c8.1,0.7,8.4-4.5,6.7-10c-1.7-5.4-5.7-8.8-11.9-8.4c-2.5-0.1-5.3-1.5-7.4,1.2l0,0
	l0,0c-12.2,7.5-14.2,18.9-4.6,28.9c3.6,3.8,8,6.8,12.4,9.9c30.5,21.3,44.6,50.4,41.6,87.4c-0.4,5.3,0.9,5.9,5.8,6.4
	c12,1.2,10.5-8.1,10.7-14.2C385.2,456.1,371.5,429.4,346.1,408.5z M287.1,366.5c-6-3.6-12.2-3.4-17.8,1.5c-3.1,2.7-4.1,6.2-3.5,10.2
	c0.6,3.8,3,4.8,6.5,4.5c2.2-0.2,4.9-0.3,4.9,3c0,2.1-1.9,3-3.7,3.9c-7.4,3.6-15.6,5.6-21.9,11.4c-5.4,2.9-11.1,5.3-15.4,9.8l0,0l0,0
	c-17.8,13.6-29.2,31.4-33.4,53.3c-2.9,14.9-1.8,16,12.8,19.6c2.2-24.4,12.4-44.7,30.6-61.2c9.9-9,21.5-15.3,33.4-21
	c7-3.4,13.1-7.8,15.3-15.7C297.4,377.5,294.4,370.8,287.1,366.5z M157.7,462.9c-8.6,11.3-7.6,25,2.5,36c3.2,3.5,6.2,5.8,2.2,11.3
	c-11.6,16-6.5,29,13.4,33.3c7,1.5,9.8,2.5,7.2,10.7c-3.8,12-0.1,18.2,12,22.8c16.6,6.3,33.2,4.2,53.2-0.5
	C203.9,547.7,175,509.9,157.7,462.9z M412.4,540.4c-7-4.5-4.9-6.9,0.2-10.4c12-8.3,14.8-20.1,11.9-37.3c-27,44.4-64.4,71.8-111,90
	c17.3,7.6,32.9,11.3,49.4,9.4c12.9-1.4,17.5-7.5,13.9-19.8c-2-6.7,0.1-8,6-8c9.9,0,19.6-1.8,28-7.5
	C418.1,551.8,419.1,544.7,412.4,540.4z M223.2,526.6c-4.8-0.8-5.1-3.3-5-7c0.2-6.3,2.4-12.8-2-18.6c-0.6-4.2-3.2-6.9-6.5-9.1l0,0
	c-2.2-2.9-5.7-4.6-8.7-3.3c-10.5,4.5-12.7-1.7-14.2-9.9c-0.3-1.6-1.7-3.1-2.6-4.6c-3.4-7.3-8.7-12.1-17.2-13.5
	c-0.5,4.7,1.1,7.9,3.1,11l0,0c8.9,26.4,25.7,47.6,44.5,67.4c12.1,12.7,26.1,23,42.3,31.5C256.5,544.4,245.4,530.2,223.2,526.6z
	 M417.6,489.8c-14.4,1-20.2,9.3-25,18.2c-3.4,6.3-5.4,13.3-14.2,5.3c-2.6-2.3-7.2-1.6-10.4,1.2c-2.9,0.5-4.7,2.4-6.2,4.7
	c-6.1,4.9-7.3,12.1-8.4,19.1c-0.7,4.5-2,6.6-7.2,5.8c-21-3.1-37,9.3-40.5,32.4C352,559.7,391,534.9,417.6,489.8z M499.8,323.1
	c-17.1-2.1-17.1-2.5-17,14.6c0,2.6,0,5.3,0,7.9h-0.1c0,4.5,0.3,9.1-0.1,13.6c-0.5,6.1,0.5,10.2,8.1,10.4c6.9,0.2,11.4-0.5,12.1-9
	c0.7-9,2.6-17.9,4.7-26.6C509.4,326.6,507.5,324,499.8,323.1z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M570.9,401.4c-3.8-28.1-18.2-49.2-43.9-62c-6.4-3.2-9.3-2.2-10.9,5.3c-2.6,12.6-6.8,25.1,9.5,31.9
	c1,0.4,1.6,1.6,2.4,2.4c21.1,22.1,23.4,51.7,6.4,82.9c-15.8,29-39.6,51.4-61.5,75.4c-12.2,13.4-25.2,26.5-30,44.8
	c-3.4,13-3.2,25.6,7.1,36c8.7,8.8,24.8,10.5,34.5,3.4c8.1-5.9,9.9-13.8,4.9-22.9c-2.1,0.6-3.2,4.4-5.5,3.2c-3.8-2.1-0.1-6.3-1.7-9.3
	c-8.4-1.3-12.4,1-7.1,9.5c1.5,2.4,3.8,4,0.9,6.5c-2.2,1.9-5,1.8-7.5,0.6c-8.8-4.4-7.8-12.3-6.2-19.8c2.2-10.3,9-18.1,15.5-26
	c19.1-23.1,42.8-41.8,61.1-65.6C560.7,469.3,575.9,438.5,570.9,401.4z M444.1,357.1c0,5,0.1,8.8,0,12.6c-0.2,6.4,2,7.5,7.1,3.7
	c2.7-2,5.9-3.4,8.6-5.4c3.9-2.8,9.9-2,12.5-7c1.7-3.3,0.4-27.2-1.5-27.5c-8.3-1.2-15.4,2.5-22.3,6.3
	C440.3,344.3,445.5,352.2,444.1,357.1z M393.5,49c-1.9,5.1,5.2,6.9,4.2,12.4c-11-2.3-21.1-6.5-31.7-9.2c5-3.9,9.8-2.5,14.5-1.9
	c4,0.4,8.2,2.3,11.4-1.9c-16.9-8.4-34.2-8.9-52.1-4.6c60,49.9,104.1,110.1,130.3,183.3c4.8-5.3,7.5-11.5,9.7-17.9
	c7.2-20.8,6.8-41.9-0.1-62.4C465,102.1,438.3,67.5,393.5,49z M452.7,53.5c-0.5,1-0.5,2.1-0.4,3.2c0.2,2.4,0,4.5-3.2,4.3
	c-1.5-0.1-3.2-0.6-3.6-2.1c-0.6-2.3,1.7-2.8,3.2-3.7c0.9-0.6,1.8-1.3,2.3-2.3c-9.5-4.5-19.1-5.4-30.6-1.9
	c34.4,24.8,57,56.8,70.3,96.2C513.1,116.9,492.1,66.9,452.7,53.5z M455.4,218.5c-23.9-61.5-61.6-113.3-111-156.7
	c-5.4-4.7-12.8-13.3-19-8.6c-6.6,5,0.4,14.1,3.4,20.5c26,55.2,59.7,105.2,103.3,148.1c6.2,6.1,12.8,11.8,20.4,16.2
	c5,2.8,7,1.2,6.7-6.3C458.3,228.7,457.3,223.4,455.4,218.5z M429.4,522c-3.6,5.2-12.2,10.8-4.3,22c3.1,4.4-0.4,10.9-4.6,15.3
	c-7.8,8.2-17.6,11.3-28.4,12.4c-2.4,0.2-5.6-1.6-6.1,3.9c-1.5,18.7-8.4,24.5-26.9,25.8c-17.9,1.3-34.3-4.5-50.8-10.1
	c-8-2.8-14.7-2.2-20.7,3.7c3.9,5.8,7.8,11.3,11.5,17c1.6,2.5,1.7,5.2-1.1,6.9c-2.3,1.4-4.3,0.3-5.9-1.6c-4.7-5.7-7.3-15.5-15.1-15.6
	c-7.4-0.2-11.7,8.7-17.5,13.4c-2.3,1.8-4.6,2.6-7.1,0.4c-2.8-2.6-1.1-5,0.8-6.8c5.5-5.2,11.1-10.1,16.8-15.1
	c-6.4-9.6-15.5-8.9-25.2-6.9c-18.7,3.9-37.5,6.2-55.6-2.4c-11.8-5.6-17.9-14.5-15.2-25c2-7.8-1.4-8.6-7.1-10.3
	c-19.9-6.1-26-22.4-14.6-39.6c2.2-3.4,3-5.4,0.2-8.7c-2.9-3.3-5-7.2-8.2-11.9c-5.1,26.6-9.6,51.8-14.8,76.9
	c-1.3,6.5,0.3,10.7,4.8,15c14.2,13.6,31.2,22.6,49.4,29.4c45.9,17.2,93.8,23.6,142.5,22.5c32.7-0.8,64.7-6.2,94.4-21.1
	c5.5-2.8,9.1-5.7,9-12.6C429.3,572.5,429.4,546.4,429.4,522z M416.9,338.1c-2.2,0.7-4.3,1.4-6.5,1.9c-64.3,14.5-127.1,6-189.2-12.5
	c-13.2-3.9-25.4-10.6-38.4-16.9c-10.6,48.6-21,95.7-31.6,144.2c19.6-7.2,31.1,2.3,41.2,16.1c4.7-36.4,23.5-62.5,57.4-80.3
	c4.5-2.4,8.4-3.7,7.1-10.6c-2-10.5,2.8-19,12.5-23c10.2-4.3,20.8-2.8,27.8,6.3c4.7,6,7.1,5.9,12.9,1.4c9.1-7.1,19.4-6,28.4,0.7
	c8.6,6.3,11.8,14.7,6.2,24.8c-3.4,6.2,2.6,6.9,5.4,9.1c22.1,17.3,36.1,39.3,41.7,66.9c1.6,7.9,1,16.1,1.8,24.6
	c17-10.9,24.7-11.2,38.4-1.3c2.6-47.2,2.3-93.4,1.8-139.6C433.7,332.7,433.6,332.7,416.9,338.1z M291.1,524.5
	c17.9-4.5,31.5-12,38.3-28.6c1.3-3.2,3.8-6.9-0.7-10c-10.3-7.2-11.9-17.6-10.6-29.1c0.4-3.2,0.7-6.4-4.2-5.4
	c-4.5-0.3-9.1-1.3-13.6,0.3l0,0l0,0C294.6,475.4,294.5,499.7,291.1,524.5z M272,454.5c-0.3,10.5-4.7,19.3-15.1,23.1
	c-5.7,2.1-5.2,5.7-4.4,9.8c3.4,17.8,16.2,27.3,30.8,36.5c2.6-23.2,5.1-45,7.5-66.7c0.5-4.6,1.5-9.7-6.2-8.2
	c-0.8-0.2-1.6-0.3-2.3-0.5l0,0l0,0C275.5,444.7,272.2,445.9,272,454.5z"/>
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
                                    <button :style="{background:'rgba('+getterBeerSteinBg1+')'}" @click="ShowElement(getterBeerSteinBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBeerSteinBg2+')'}" @click="ShowElement1(getterBeerSteinBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBeerSteinBg3+')'}" @click="ShowElement2(getterBeerSteinBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBeerSteinBg4+')'}" @click="ShowElement3(getterBeerSteinBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBeerSteinBg5+')'}" @click="ShowElement4(getterBeerSteinBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var BeerStein= [
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
            var randomNumber = BeerStein[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BeerStein[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BeerStein'){
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
                getterBeerSteinBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BeerStein') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeerSteinBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BeerStein') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeerSteinBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BeerStein') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBeerSteinBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBeerSteinBg5: {
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
                            name:'BeerStein',
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