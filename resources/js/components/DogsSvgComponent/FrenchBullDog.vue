<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="transform:scale(0.2)" d="M166,433.5c0,8.3,0,15.4,0,22.5c0,2.1,1.7,2.7,2.9,3.8c12.5,11.7,16.5,30,10.2,45.9c-0.9,2.4-2.1,3.3-4.7,3.3
	c-21.7-0.1-43.3-0.1-65,0c-2.4,0-3.5-0.9-4.3-3c-6.5-15.6-2.5-34.4,9.9-45.9c2.2-2,3.1-3.8,3.1-6.8c-0.1-16-0.1-32-0.1-48
	c0-2-0.2-3.9-1-5.8c-7.8-19.2-11.1-39.3-13.1-59.7c-1.3-13.1-2.1-26.2-1.9-39.4c0-1.9-0.4-3.5-1.7-5c-5.8-6.8-7.7-14.7-5.6-23.3
	c0.9-3.5,0.1-5.9-2.3-8.5c-6.1-6.6-11.1-14.1-15-22.3c-1.9-3.9-4.1-7.4-7-10.8c-14.2-16.6-16.4-38.5-6.4-57.8c0.5-1,1-2.1,1.7-3.3
	c-13.8-5.9-23.7-15.4-28.5-29.7c-4.8-14.3-4.4-29.1-0.8-43.4c2.7-10.9,1.2-20.6-3.1-30.5c-4.3-9.9-8.9-19.7-10.9-30.4
	C19.1,15.7,32.7,2,52.4,5.5C70.5,8.7,83,20.3,94,33.8c13.7,16.8,23.4,35.9,31.5,55.9c1.8,4.3,2.9,5.6,7.9,3.5
	c27.5-11.2,55.1-11.1,82.5,0.5c3.6,1.5,4.7,0.7,6-2.6c9.3-22.9,20.4-44.9,37.2-63.3c9.9-10.9,21.2-19.6,36.3-22.3
	C315.5,2,329,15.6,325.3,35.7c-1.8,9.8-5.8,18.7-9.8,27.7c-4.9,10.9-7.1,21.5-4,33.8c3.7,14.4,3.8,29.4-1.5,43.8
	c-4.5,12.4-13,21.2-24.7,26.8c-2.6,1.2-3.3,2-1.8,4.9c10.8,20.9,7.6,42.9-8.4,60.4c-4.2,4.6-5.7,10.8-9,16c-1.5,2.4,1.6,2.4,2.8,2.9
	c14.5,5.9,28.7,12.5,42.3,20.1c47.6,26.6,87.1,61.6,113.3,110.3c7.5,13.9,13.5,28.5,18,43.7c0.8,2.5,1.3,3.6,4.6,3.4
	c18-1.6,32.3,5.1,41.7,20.8c8,13.5,6.5,30.1-3.3,42.6c-10.4,13.3-28.2,19.2-44.8,14.5c-3.3-0.9-6.2-1.3-9.5,0.2
	c-2.9,1.3-6.1,1.5-9.3,1.4c-75.8-0.1-151.6-0.1-227.5,0c-3.5,0-4.8-1.3-5.9-4.3c-3.5-9.8-3.4-19.5,0.2-29.3c0.6-1.6,1.8-3,0.5-5.1
	C181.6,458.4,174.2,446.5,166,433.5z"/>
<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M109.9,193c-13.1,0-26.3-0.1-39.4,0c-3,0-4.3-0.2-3.6-4.1c2.7-15.1,15.5-31.9,36.4-35.4
	c22.8-3.8,46.6,12.7,49.9,35.6c0.5,3.4-0.3,3.9-3.3,3.8C136.5,192.9,123.2,193,109.9,193z"/>

	<path :style="{fill:'rgba(232, 224, 166, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M239.2,257.9c-10-14.3-24.5-21.5-41.3-26.1c0.6,4.2-1.8,6.4-4.4,8.6c-3.6,3-7,6.2-10.6,9.2
		c-5.5,4.6-12.3,4.6-17.8,0.1c-4.1-3.4-8-7-12.1-10.5c-1.6-1.3-3-2.9-3-5c0-2.4-0.9-2.2-2.7-1.7c-9.2,2.5-17.8,6.4-25.6,12.1
		c-8.5,6.3-15.2,14-18.3,24.3c-3.9,13-0.2,22,11.5,27.9c16.9,8.6,37.6,2.2,45.4-9.6c6.5-9.9,19.6-9.6,26.9-0.6
		c11.3,13.8,27.6,18,43.7,11.2c12.1-5.1,16.8-14,14-26.8C244,266.3,242,261.9,239.2,257.9z"/>
	<path :style="{fill:'rgba(232, 224, 166, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M281.2,189.5c-3.2-21.1-22.4-36.9-44.5-36.5c-21.9,0.4-39.8,17.2-42.2,39.6c0.5,0.1,0.9,0.4,1.4,0.4
		c27.6,0,55.2,0,82.8,0.1C281.8,193.1,281.6,191.8,281.2,189.5z"/>


	<path :style="{fill:'rgba(65, 59, 54, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M444.8,477.7c-0.6-8.9-2.1-17.7-4-26.4c-6.5-30.5-18.1-58.9-35.2-85.1c-1.9-3-4.1-3.6-7.5-2.8
		c-32.5,7.5-57.8,25.2-75.3,53.6c-5.6,9.1-9.8,18.9-12.6,29.2c-0.7,2.7-0.8,4.5,3.2,3.3c4.4-1.3,8.9-0.5,13.3,0.5
		c21.1,4.8,34.1,25.3,30.9,45.7c-0.6,4.1-0.1,5.4,4.1,5.3c10.2-0.2,20.3-0.1,30.5-0.1c10.3,0,20.7,0.3,31-0.1
		C438.1,500.3,445.4,487.8,444.8,477.7z"/>
	<path :style="{fill:'rgba(65, 59, 54, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M301.7,94.9c0.3-1.3,0.6-2.6,0.2-3.9c-1.5-10.9,1.9-20.8,6.2-30.6c3.7-8.3,7.3-16.7,9.4-25.6
		c3-12.9-4.5-22.2-17.7-21.7c-6.5,0.3-12.6,2.4-18.3,5.9c-11.6,7-20.2,17-27.6,28.1c-2.1,4.1-0.7,7.2,2.6,9.9
		c3.5,2.8,6.9,2.7,10.3,0.1c1.6-1.7,2.9-3.6,4.7-5.1c6.3-5.1,14.3-3,16.9,4.4c0.9,2.6,1.4,5.3,1.5,8.2c0.2,7-2.5,13.6-3.1,20.4
		c0.2,5.9,3.5,9.7,8.3,12.6C298.8,99.6,300.8,98.8,301.7,94.9z"/>
	<path :style="{fill:'rgba(65, 59, 54, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M84.3,34.6C75.6,23.9,65,15.9,51.2,13.3C40.2,11.2,29,17,30,30.7c0.5,6.3,2.7,12.3,4.9,18.1
		C38.8,58.8,44,68.3,46,79c0.7,0.8,0.8,1.7,1,2.7c0.7,4.4,2.1,5.1,5.9,2.8c3.2-1.9,5.7-4.5,6.1-8.5c0.1-4.3-1.5-8.4-1-12.8
		C58.6,57.4,60,52,66,49.6c5.5-2.2,9.4,1.3,13,4.9c0.6,0.6,1.3,1,1.9,1.5c2.6,3.4,5.4,2.2,8.2,0.3c4.5-3.1,5.4-5.5,3.8-10.3
		C90.9,41.6,87.4,38.2,84.3,34.6z"/>
	<path :style="{fill:'rgba(65, 59, 54, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M323,377.7c6.6-16.5,16.6-28.9,36.3-29.9c7.3-0.4,14.2-3.4,20.4-7.3c1.5-1,4.2-2.1,1.4-4.9
		c-11.9-11.8-23.5-23.9-37.4-33.5c-2.9-2-3.2-0.8-3.7,1.5c-1,4.3-2,8.7-3.1,13c-6.6,24.8-17.2,47.6-34.1,67.2
		c-1.2,1.4-4.1,2.6-3,4.5c0.9,1.7,3.7,1.8,5.9,1.7c0.5,0,1,0,1.5,0C315.8,390,319.2,387.1,323,377.7z"/>

<path style="fill:#FFFFFF;transform:scale(0.2)" d="M156.4,398.1c10.4,5.8,21.1,10.8,32.8,13.2c2.8,0.6,5.6,1.4,8.4,1.4c3.8-0.1,4.6,1.3,4.5,4.9
	c-0.2,12.2-0.3,24.3,0,36.5c0.1,5.1-4.4,6.2-6.6,9.3c-0.8,1.1-1.6-0.6-2.1-1.3C180.1,441.4,167.3,420.4,156.4,398.1z"/>
<path :style="{fill:'rgba(215, 148, 228, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M79.3,141.2c-6.5-8.6-8.1-18-8.2-27.7c-0.1-10.6,1.3-21.2-2.1-31.6c-1.2-3.8-1.9-7.7-2.6-11.7
	c-0.6-3.4-0.9-6.9,0.4-10.4c1.1-3,2.8-3.5,5.2-1.3c2.5,2.3,4.1,5.3,5.5,8.3c7.8,16.9,11.5,35,14.8,53.2c0.4,2-0.5,3.2-1.5,4.4
	C86.6,129.3,83,134.7,79.3,141.2z"/>
<path :style="{fill:'rgba(215, 148, 228, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M282,66.2c-0.8,8.2-3,16.2-4.9,24.3c-1.8,7.7,0.3,15.2-0.1,22.9c-0.4,8.4-1.7,16.5-5.6,24.1
	c-1.7,3.3-2.9,3.9-4.9,0.1c-2.5-4.7-5.7-9-9.2-13c-1.2-1.4-2.1-2.6-1.7-4.9c3.4-17.5,6.8-34.9,14.2-51.2c1.3-2.9,3-5.6,4.7-8.2
	c1-1.5,2.3-3.3,4.3-2.9c2.4,0.4,2.4,2.9,2.8,4.8C282,63.3,281.9,64.7,282,66.2z"/>
<path :style="{fill:'rgba(65, 59, 54, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M158,420.3c0-0.9-0.4-2-0.8-2.8c-3.7-6.9-7.4-13.7-11.1-20.5c-0.3-0.8-0.5-1.6-0.9-2.3
	c-8.7-17.6-16.7-35.5-22.7-54.2c-3.4-10.5-6.3-21-7.5-32c-0.3-2.5-1.5-4.6-3.8-4.3c-2.2,0.2-1,2.8-0.9,4.2
	c0.2,14.2,1.1,28.3,3.1,42.3c1.9,13,3.8,26,8.8,38.3c0.3,3.4,2.2,6.2,3.2,9.4c0.3,1,1.3,1.4,1.2,2.9c-0.3,10.4-0.3,20.9-0.4,31.3
	c0,5.5,0,11,0,16.5c0,1.2-0.7,3.6,2,2.5c9.9-3.9,19.8-3.3,29.9,0.7C158,441.2,158,430.8,158,420.3z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M134.9,101.9c15.9,12.2,26.8,28.1,34.8,46.2c1.3,4,2.6,8,4,12c3.8,2.2,1.7,6,2.3,9
	c2.6,16.6,3.1,33.1-0.8,49.6c-0.3,1.2-0.4,2.3,1.4,2.4c5.1,0.3,10.2,0.7,15.3,1.1c0-0.7,0.1-1.1,0-1.3c-9.3-19.1-7.3-37.3,4.2-54.8
	c0.3-0.2,0.6-0.3,0.8-0.6c17.4-20.9,41.7-26.1,65.8-14c0.7,0.4,1.4,1,2.1,0C239.2,95.1,173.2,81.7,134.9,101.9z"/>

	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M279.3,201c-4.3,0.1-8.7,0.2-13,0c-3.2-0.2-4.8,0.4-6,4c-3,9.5-12.1,15.8-21.9,16
		c-9.6,0.2-19.1-5.4-22.2-14.7c-1.7-5.1-4.3-5.9-8.6-5.3c-1,0.1-2,0-3,0c-12.2,0-12.2,0-7.7,11.7c0.6,1.5,1.3,3.1,2,4.5
		c2.5,5.1,5.8,8.8,11.7,10.5c7.4,2.1,14,6,20.2,10.6c1.6,1.2,3,2.4,5.2,2.7c20.6,2.1,43.3-16.7,45.4-37.4
		C281.7,201.6,281.4,200.9,279.3,201z"/>
	<path style="fill:#FFFFFF;transform:scale(0.2)" d="M151.3,201c-5.2,0.1-10.3,0.1-15.5,0c-1.6,0-2.4,0.5-2.8,2.1c-2.8,10.3-10.1,15.6-20,17.9
		c-12.9,0.2-22.1-5.2-26-17.9c-0.6-1.9-1.7-2.1-3.3-2.1c-4.7,0-9.3,0.2-14,0c-3-0.1-3.4,0.7-3,3.6c3.1,19.8,21.3,35.8,41.7,36.5
		c3.9,0.1,7.2-0.6,9.8-3.6c7.4-4.6,14.9-8.7,23.2-11.3c1.3-0.4,2.5-1,3.3-2.1c4.5-6.1,7.6-12.8,8.8-20.4
		C153.8,201.6,153.4,201,151.3,201z"/>

<path style="fill:#E7E0CF;transform:scale(0.2)" d="M113,476.9c-0.4,3.8,2.7,4.3,5.1,5.6c2.4,1.3,5,2.4,7.8,2.5c0.1,1.8,0.2,3.6,0.2,5.5
	c0,11.5,0,11.4-11.6,10.5c-2-0.2-2.9-0.9-3.3-2.8C109.3,490.8,109.5,483.7,113,476.9z"/>
<path :style="{fill:'rgba(74, 74, 74, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M188.6,233.5c-3.2,4.5-7.9,7.2-11.8,10.6c-1.7,1.4-3.8,1.4-5.6,0c-3.4-2.6-6.6-5.4-9.8-8.3
	c-2.1-1.9-0.8-3.1,1.1-4C171.4,227.4,180,228.2,188.6,233.5z"/>

	<path :style="{fill:'rgba(232, 224, 166, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M245.4,464c-10.3-8.3-21.9-9.5-33.7-3.4c-12.4,6.5-17.9,17.4-17.7,31.2c0.1,8.6,0.8,9.1,9.4,9.1
		c1,0,2-0.1,3,0c3,0.4,3.6-1,3.5-3.7c-0.2-7,0.1-14-0.1-21c-0.1-3.4,1.7-3.3,4-3.2c2.1,0.1,4.3-0.5,4.1,3c-0.3,5.7-0.1,11.3,0,17
		c0,7.8,0,7.8,7.9,7.8c0.8,0,1.7-0.1,2.5,0c4.6,0.8,6-1,5.7-5.6c-0.4-6.1,0.1-12.3-0.2-18.5c-0.1-3.2,0.9-3.9,3.9-3.9
		c3.1,0,4.5,0.6,4.2,4c-0.3,4.6-0.1,9.3-0.1,14c0,10.1,0,10,10.3,10c3.1,0,4.3-0.9,4.9-4C259.7,483.6,255.8,472.4,245.4,464z"/>
	<path :style="{fill:'rgba(232, 224, 166, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M338.4,464.8c-9.6-8.4-20.8-10.3-32.6-5.1c-10.5,4.6-17.2,12.6-18.9,24.3c-1.9,4.9-0.8,9.8,0.2,14.7
		c0.4,1.8,1.4,2.5,3.2,2.3c3.8-0.5,7.9,1.1,11.5-1c0.3-0.2,0.2-1.3,0.2-1.9c0-5-0.1-10-0.2-15c0.1-2,0.3-4,0.1-6
		c-0.4-3.3,0.9-4.1,4.1-4.1c3.5-0.1,4.2,1.2,4,4.3c-0.2,4-0.1,8,0,12c0,12.2,0,12,12.4,11.8c2.9-0.1,3.7-0.9,3.6-3.7
		c-0.2-7.2,0.1-14.3-0.1-21.5c-0.1-3.3,1.8-2.9,3.8-2.8c1.9,0.1,4.5-1,4.3,2.8c-0.2,5,0,10,0,15c0,10.4,0,10.2,10.6,10.2
		c2.9,0,4-1,4.5-3.8C351.8,484.2,348.2,473.3,338.4,464.8z"/>
	<path :style="{fill:'rgba(232, 224, 166, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M144.4,457c-13.8-0.9-26.8,7.3-31.4,19.9c-0.4,5.3,6.5,9.6,12.9,8c0.1-3,0.3-6,0.1-9
		c-0.3-3.6,2-2.9,4.1-3c2.3-0.1,4.1-0.2,4,3.2c-0.3,7.2-0.8,14.4,0.2,21.5c1,7.1,7.2,1.7,10.9,3c1.9,0.7,5.1,1.4,4.9-3.1
		c-0.3-7.2,0.1-14.3-0.1-21.5c-0.1-3.5,1.9-3.1,4.1-3.1c2.2,0,4.3-0.4,4.1,3.1c-0.3,4.8-0.1,9.7-0.1,14.5c0,10.7,0,10.7,10.9,10.3
		c2.4-0.1,3.5-0.7,4.1-3.2c1.3-5.3,1.2-10.5,0-15.8C169.7,468.4,157.7,457.9,144.4,457z"/>
	<path :style="{fill:'rgba(232, 224, 166, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M485,462.9c-1.9-14.8-18.6-27.8-36.7-25.8c-2.1,0.2-2.2,1.2-1.8,3c1.5,6.6,2.9,13.3,4.3,19.9h0
		c0,0.1-0.1,0.2-0.1,0.3c0,0.2,0.1,0.4,0.2,0.6c0.9,2.3,2.9,4.4,1,7c-0.5,4.8,1.4,9.5,0.7,14.3c-1,6.5-3.7,12.2-7.9,17.3
		c13,4.3,29.9-2.8,37.1-15.4C485.5,477.7,487.5,470.6,485,462.9z"/>

<path style="transform:scale(0.2)" d="M110.3,201c3.7,0,7.3,0.1,11,0c4-0.2,4.4,1.6,2.4,4.4c-3.4,4.9-8,7.8-14.2,7.6c-6.2-0.2-10.5-3.4-13.6-8.6
	c-1.4-2.5-0.6-3.3,2-3.4C102,201,106.2,201,110.3,201C110.3,201,110.3,201,110.3,201z"/>
<path style="transform:scale(0.2)" d="M238.1,213c-6.8-0.2-11.3-3.5-14.3-8.9c-1.2-2.2-0.3-3.1,1.9-3.1c8.1,0,16.3,0,24.4,0c3.2,0,3.4,1.6,2,3.8
	C248.8,210.1,244.1,213.1,238.1,213z"/>
<path style="fill:#FFFFFF;transform:scale(0.2) " d="M290.6,323.5c-5.5-16.6-5.7-33.3-1.1-50.1c0.6-2.3,0.6-3.6-1.9-4.6c-8.1-3.3-16.2-6.9-24.3-10.4
	c-0.9-0.4-2-0.7-2.8-0.4c-3,1-7.8,10.2-7.2,13.5c2.5,14-2.5,24.7-15.1,31.7c-11.8,6.6-24.3,7.4-37.1,3.3c-2.4-0.8-4.2-0.9-6.5,0.5
	c-13.6,8-27.4,8.1-41.1,0c-2-1.2-3.8-1.5-6-0.7c-7,2.5-14.2,3.4-21.6,2.1c-3.1-0.6-3,0.9-2.6,2.9c1.6,8,3.1,16,5.9,23.6
	c0.9,3.8,1.8,7.6,3.8,11.1c4.1,2.3,5.9,6.3,8.6,10.3c-1.9-1.3-3.2-3.2-5.4-1.4c1.2,3.1,2.2,6.2,3.6,9.2c2.6,5.7,3.6,12.9,8.2,16.9
	c15.8,13.9,34.1,23.1,55.7,23.9c6.3,0.2,6.3,0,6.3,6.6c0,0.8,0,1.7,0,2.5c0,11.5,0,23,0.1,34.4c0,1.2-1.2,4.2,1.9,3.1
	c10-3.7,19.8-3.3,30,0.7c0-14.6,0.1-28.6-0.1-42.5c0-3.2,0.6-4.5,4.2-5c13.1-1.6,25.1-6.2,35.9-13.9c1.1-0.8,3.6-1.3,1.7-3.6
	c-8-9.6-7.1-19.4-0.8-29.4l0-0.1c2.4-2.3,4.6-4.9,6.3-7.8c2.7-2.8,3.6-6.2,3.9-9.9C293.6,334.4,292.3,328.9,290.6,323.5z
	 M165.2,332.3C165.1,332.3,165.1,332.3,165.2,332.3c-0.1,0-0.1-0.1-0.1-0.1C165.1,332.2,165.1,332.2,165.2,332.3
	C165.2,332.2,165.2,332.3,165.2,332.3z M246.1,333.2c-0.1,0-0.1,0.1-0.1,0.1c-0.1-0.2-0.2-0.5-0.3-0.7c0.2,0.1,0.4,0.3,0.6,0.4
	C246.3,333.1,246.2,333.1,246.1,333.2z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M390.2,345.8c-1.1-1.4-1.8-2-3.5-0.7c-8.9,7.1-19.4,10.1-30.5,11.1c-8.2,0.7-13.8,5-18.6,11.1
	c-4,5.1-6.1,11-8.6,16.8c-4.1,9.4-11.3,14-21.5,14.1c-4.7,0-9.3-0.8-13.5-3c-1.6-0.8-2.8-1-4.5,0.2c-4.8,3.3-9.7,6.3-14.6,9.4l0,0
	c-6.9,2.8-13.9,5.7-21.3,7c-3,0.5-3.8,1.6-3.7,4.4c0.2,12.5,0.1,25,0,37.5c0,2.5,0.7,4.2,2.6,6c9.3,8.6,13.5,19.4,13.5,32.1
	c0,3-2.9,6.9-0.1,8.7c2.2,1.5,6.1,0.2,9.3,0.5c3.6,0.3,4.1-1,3.5-4.3c-2.9-16.4,4.4-32.9,18.5-41.7c1.5-1,3.3-1.6,3.7-3.8
	c1.9-10.5,6-20.3,10.2-30.1c1.1-1.1,1.7-2.6,2.1-4.1c1.6-2.7,3.3-5.4,4.9-8.1c0.7-0.9,1.5-1.8,2.1-2.7c16.3-23,37.8-39,64.8-47.4
	c4-1.3,8.1-2.3,12.6-3.6C394.9,351.8,392.5,348.8,390.2,345.8z"/>

	<path :style="{fill:'rgba(65, 59, 54, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M180.7,291.2c-3.2-4.2-9.8-4.4-13.1-0.3c-2.7,3.4-5.4,6.6-9,9.9c10.3,5.5,20.1,5.3,30.9,0.1
		C185.8,297.7,183.2,294.6,180.7,291.2z"/>
	<path :style="{fill:'rgba(65, 59, 54, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M242.7,248.7c6.8,10.9,6.8,10.9,13.5,0.8c0.9-1.4,1.7-2.7,3.1-4.9
		C253.5,246.5,248.5,248.1,242.7,248.7z"/>

	<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M129.5,107.8c-2.9-2.3-5-1.8-7.6-0.2c-5,3.2-9.9,6.7-14.4,10.6c-10.4,9.3-18.5,20.2-24,33
		c0.5,0.2,0.6,0.4,0.7,0.4c0.8-0.3,1.6-0.5,2.3-0.9c10.6-5.4,21.6-7.2,33.3-4.7c16,3.4,28.3,11.9,36,26.6c7.9,15.1,8.4,30.4,1.4,46
		c-0.4,1-1.9,2.3,0.2,3.3c3.3,1.5,8.8-1.2,9.7-4.9c3.4-14.5,3.6-29.1,1-43.9C163.4,146.4,150.5,124.8,129.5,107.8z"/>
	<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M333,298.2c0.3-1.8,0.8-3.5-1.2-4.8c-10.4-6.5-20.7-13.1-31.8-18.5c-2.2-1.1-2.7-0.3-3.2,1.8
		c-1.4,6.1-2.7,12.3-2.8,18.6c-0.1,9.8,2.1,19.3,5,28.7c3.7,13.4,3.2,25.7-7.4,36.3c-5.1,5.1-7.8,11.5-3.9,19
		c1.8,3.5,3.3,4.3,6.6,1.1c15.8-15.6,25-34.8,31.8-55.4c0,0,0,0,0,0c0,0,0,0,0,0C328.7,316.2,331.5,307.4,333,298.2z"/>
	<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M70.2,142.2c-0.6-0.5-0.8-1.5-1.2-2.2c-5.8-11.5-6.9-24-5.8-36.4C64,93.9,61.4,85,59,76
		c-2.2,2.6-3.5,5.8-6.7,7.6c-2.6,1.4-4.2,2.3-4.2-1.7c0-1.4-0.2-2.6-2-2.8c-0.3,4.1,0.3,8.2-0.6,12.4c-2.6,12.5-4.8,25-2.5,37.9
		c2.6,14.9,10.9,25.3,24.4,31.9c2.1,1,3.1,0.8,4-1.6C73.6,153.5,76.9,147.6,70.2,142.2z"/>
	<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M298,146.9c11.3-17.9,9.1-36.8,4-55.9c-0.6,1.7-1.3,3.4-1.9,5.1c-0.4,1.3-1.3,2.4-2.4,1.5
		c-3.2-2.8-8.3-4-8.7-9.5c-0.1-1.5-0.7-2.5-2-3.2c-1.8,4.8-3.5,9.8-2.8,14.8c0.8,5.3,1.1,10.6,0.7,15.8c-1,10.5-2.2,21.2-9.5,29.7
		c-2.2,2.6-2.5,5.2-1,8.2c0.9,1.9,1.8,3.9,2.4,6c0.7,2.5,1.9,2.7,4,1.6C287.7,157.8,293.8,153.5,298,146.9z"/>
	<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M98.9,111.1c0.5,2.7,1,3.3,3.2,1.3c4.7-4.2,9.8-8,15.2-11.2c2.7-1.6,2.9-3.3,1.8-6.2
		c-4.6-12.1-10.6-23.6-16.8-35c-2.6-4.9-5.2-10-9.3-14c-0.2,8.3-5.1,12.3-12,10c2,4.2,4.2,8.3,6,12.5
		C92.7,82.2,96.1,96.6,98.9,111.1z"/>
	<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M254,47c-6.6,8.6-11.3,18.3-16.1,27.9c-3.3,6.7-6.7,13.4-9.2,20.4c-0.9,2.5-1.2,4.4,1.6,5.9
		c5.8,3,10.8,7.1,15.7,11.3c1.8,1.6,2.6,1.6,3.1-1.1c0.8-4.6,1.9-9.1,3-13.5C255.5,83.7,259,69.5,267,57C257.6,58.5,254,55.8,254,47
		z"/>
	<path :style="{fill:'rgba(57, 53, 52, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M102.7,248.1c-4.5,0-8.5-1.9-13.4-3.3c1.9,5,5.1,8.3,7.9,11.8c1.1,1.3,2.1,1.3,3.1-0.3
		c1.1-1.8,2.4-3.5,3.6-5.4C104.9,249.6,104.4,248.1,102.7,248.1z"/>

<path style="fill:#E5DFCE;transform:scale(0.2)" d="M173.6,160.1c5.7,1.7,4.6,5.2,2.3,9C175.2,166.1,174.4,163.1,173.6,160.1z"/>
<path style="fill:#F2E8DB;transform:scale(0.2)" d="M451,461c4.1,4.1,4.2,5.2,1,7C451.1,465.7,450.9,463.4,451,461z"/>
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
                                    <button :style="{background:'rgba('+getterFrenchBullDogBg1+')'}" @click="ShowElement(getterFrenchBullDogBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFrenchBullDogBg2+')'}" @click="ShowElement1(getterFrenchBullDogBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFrenchBullDogBg3+')'}" @click="ShowElement2(getterFrenchBullDogBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFrenchBullDogBg4+')'}" @click="ShowElement3(getterFrenchBullDogBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFrenchBullDogBg5+')'}" @click="ShowElement4(getterFrenchBullDogBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var FrenchBullDog= [
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
            var randomNumber = FrenchBullDog[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  FrenchBullDog[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'FrenchBullDog'){
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
                getterFrenchBullDogBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FrenchBullDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFrenchBullDogBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FrenchBullDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFrenchBullDogBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FrenchBullDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFrenchBullDogBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterFrenchBullDogBg5: {
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
                            name:'FrenchBullDog',
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