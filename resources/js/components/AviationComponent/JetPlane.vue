<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M0,135.5c10-9.5,19.8-19.1,29.9-28.5c2.3-2.1,1.7-3.9,1-6.2C24.5,79.9,18,59,11.6,38
	c-3.6-11.5-2-14.7,9.1-18.8c7.6-2.8,15.3-5.7,22.9-8.4c6.4-2.3,10.2-1,14.2,4.5c7.5,10.4,15,20.7,22.7,31.3
	c5.7-6.2,11.3-12.2,16.7-18.2c1.9-2.2,4-3.1,7-2.9c5.5,0.2,11-0.1,16.5,0.1c6.8,0.2,8.7,3.4,5.8,9.3c-6.7,13.6-13.2,27.2-20.1,40.7
	c-1.5,3-1.5,5.2,0.8,7.5c0.7,0.7,1.4,1.5,1.8,2.4c4.1,8.9,10.2,10.5,19.8,8.3c29.5-6.5,59.4-11.8,89.1-17.5c0.3-0.1,0.5-0.3,0.8-0.6
	c-0.2-1.9-1.9-2.6-3-3.7c-15.6-14.6-31.2-29.1-46.7-43.6c-1-0.9-2-1.8-2.9-2.7c-4.9-5.2-3.1-12,3.9-13.9
	c15.1-3.9,30.3-7.6,45.4-11.5c3.3-0.8,5.8,0.6,8.4,2.1c28.8,17.6,57.6,35.2,86.4,52.9c2.7,1.6,5.1,2.1,8.4,1.6
	c18.5-2.5,36-9.5,54.3-12.8c15.5-2.8,31-3.7,46.5,0.3c14.3,3.7,26.2,11.2,35.6,22.6c1.8,2.2,3.8,3.2,6.7,3.6
	c8.9,1.1,17.6,3.3,25.9,6.9c11.3,4.9,20.3,12,24.4,24c0,3.7,0,7.3,0,11c-3.6,15.4-14.4,24.1-28,30.2c-19.3,8.7-39.9,12.7-60.6,15.7
	c-45.1,6.6-90.6,10.8-135.9,16c-2.8,0.3-5,1.7-7.1,3.3c-37.3,26.3-74.6,52.5-111.8,78.9c-4.3,3-8.3,4.5-13.7,4.2
	c-13.6-0.8-27.3-0.6-41-0.8c-2.1,0-4.3,0.1-6.2-1.3c-4.9-3.3-4.9-9.1,0.2-13.4c19-15.9,38.1-31.8,57.1-47.8
	c3.7-3.1,7.3-6.2,10.7-10.2c-7.8,0.8-15.6,1.6-23.3,2.5c-18.4,2.1-36.7,4.2-55.1,6.2c-2.1,0.2-4.4,0.5-6.5,0
	c-11.9-2.6-24.1-2.3-36.1-3.6c-4.7-0.5-9.1-2-13.1-4.5c-8.3-5.2-10.6-13.2-6.4-22c2.2-4.6,5.4-8.4,9.3-11.6c1.9-1.5,2.1-3,1.4-5.1
	c-1.5-4.2-2.7-8.5-4-12.8c-0.4,0-0.9-0.1-1,0c-7.4,9.5-17.9,8.5-28.1,8.2c-4.5-0.1-9.3,1.1-12.8-3.2C0,139.5,0,137.5,0,135.5z"/>
<path :style="{fill:'rgba(88, 160, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M125.1,247.5c0.3-1.9,2-2.5,3.2-3.5c37.7-31.6,75.4-63,112.9-94.7c4.8-4,9.7-6.5,15.9-7.1
	c8.6-0.9,17.1-2.5,25.6-3.8c1.1-0.4,2.5-1,3.1,0.3c0.7,1.4-0.6,2.5-1.6,3.3c-6.6,5.1-13,10.4-19.6,15.5
	c-35.3,27.3-70.1,55.3-105.2,82.8c-2.8,2.2-5.7,4-8.4,6.2c-1,0.9-2.3,1.5-3.6,1.4C140,247.8,132.6,248.6,125.1,247.5z M125.1,247.5
	c2.2,0,4.4-0.4,6.5,0c12.7,2.6,21.9-3.6,31.2-11.2c19.6-15.9,39.7-31.4,59.6-47c20.5-16.1,41.1-32.3,61.6-48.4
	c0.6-0.5,1.6-1.1,1.1-1.9c-0.3-0.5-1.5-0.4-2.3-0.6c11.6-2,23.2-3.9,34.9-5.9c1.8-0.3,3.6-0.6,5.5-0.8c0.1,1.9-1.7,2.2-2.7,2.9
	c-52.9,37.3-105.9,74.7-158.8,112c-1.3,0.9-2.6,2-4.4,2c-10.7-0.2-21.3-0.3-32-0.4c-0.1,0-0.2-0.1-0.3-0.2
	C125,247.8,125,247.7,125.1,247.5z M271,65.6c-11.2,3.1-22.7,4.5-34.1,7c-1.3,0.3-2.6,0.2-3.7-0.9c-17.6-16.4-35.2-32.9-53.5-49.9
	c9.6-2.2,18.3-4.3,27.1-6.3c2.3-1,3.8,0.6,5.3,1.7c18.8,14.2,37.3,28.9,56,43.4C269.7,61.8,272.4,62.7,271,65.6z M271,65.6
	c-3.2-5.7-9.2-8.4-14-12.2C241.6,41,225.7,29.1,210,17c-1-0.7-1.9-1.3-3.1-1.5c6.3-2.9,11.7-2.4,17.9,1.5
	c21.7,13.9,43.8,27,65.8,40.5c1.6,1,3.3,2,5.8,3.6C287.2,62.6,279.3,65,271,65.6z"/>
<path :style="{fill:'rgba(255, 226, 79, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M486,124.3c-11.5,7.9-24.8,11.1-38.1,14.1c-27.6,6.3-55.8,9.1-83.9,12.1c-16.5,1.8-33,3.9-49.5,5.8
	c-0.8,0.1-1.6,0-3.7,0c9.1-6.4,17.3-12.2,25.5-17.9c3.8-2.7,7.6-5.4,11.4-8.1c3.3-2.3,4.4-5.5,3.1-9.2c-1.3-3.8-4.3-5.4-8.3-4.8
	c-14,2.1-27.9,4.4-41.9,6.5c-18.2,2.8-36.3,6.5-54.7,8.4c-2,0.2-3.4,1.2-4.8,2.4c-12.5,10.5-25.1,20.9-37.4,31.6
	c-3.9,3.4-8.2,4.6-13.1,5.2c-23,2.5-45.9,5.2-68.9,7.8c-4.6,0.5-9.2,0.9-14.5,1.4c2.8-5.4,5.7-10.2,5.9-16
	c0.4-13.4-8.1-23.8-21-27.3c-9.8-2.6-17.8,1-26.1,4.8c-6,2.8-6,2.8-7.8-3.2c-3.9-12.5-3.9-12.5,6.6-20.9c7-5.6,14.1-11.2,21.1-16.7
	c4.6,2.7,6.5,7.5,9,11.7c3.6,6.1,8.6,8.5,15.4,8c10-0.8,19.7-3.1,29.5-4.9c70.6-12.8,141.1-25.9,211.8-38.2
	c17.4-3,35.1-1.8,52.6,1.3c3.1,0.5,6.8,0.7,8.4,4.4c-0.5,2.5-2.7,2.7-4.5,3.2c-2.9,0.7-3.8,2-2.7,5c1.3,3.4,2.4,6.9,3.7,10.3
	c1,2.8,2.6,3.4,5.4,2.5c6.7-2.1,13-5,19.2-8.2c2-1.1,4-2.4,6.5-2.5c13.3,1.3,25.6,5.2,36.2,13.8c4.2,3.4,7.3,7.7,9.6,12.5
	C486.6,120.9,487.4,122.6,486,124.3z M412,83.2c-1.5-2.7-4.4-2.8-6.8-3.3c-6.5-1.3-13.1-1.8-19.7-2.4c-25.7-2.6-50.3,3.9-75.1,8.3
	c-23.6,4.1-47.2,8.5-70.7,12.9c-26.8,4.9-53.6,9.9-80.5,14.8c-14.8,2.7-29.6,5.5-44.4,8c-3.4,0.6-7.1,0.6-10.4,0
	c-4-0.7-7.2-2.7-9.3-6.6c-2.6-5-6-9.6-9-14.3c2.5-3.2,6.6-4.6,8.8-8.7c3.7,5,7.4,9.7,10.7,14.7c3.1,4.6,6.9,6,12.4,4.9
	c52.7-10.3,105.3-20.4,158-30.6c22.2-4.3,44.4-8.2,66.5-13.1c13.1-2.9,25.8-7.8,39.2-9.5c19.4-2.5,38.3-1.9,54.4,11.4
	c-0.4,1.3-0.9,2.5-2.1,3.2c-5.9,3.9-11.7,7.9-18.3,10.5C414.4,83.6,413.2,84.5,412,83.2z M75,85.4c-6.7,1-13.4,2.3-20.1,3
	c-3.7,0.4-7.2,1.1-10.4,4.4c-2.9-9.3-5.7-18-8.4-26.8c-3-9.5-5.8-19-8.9-28.4c-1-3.1-0.9-4.9,2.7-5.7c2.7-0.6,5.4-1.7,8-2.5
	c2.2-0.5,2.8,1.5,3.6,2.7c10.8,16.1,21.6,32.2,32.3,48.4C74.7,81.9,76.4,83.3,75,85.4z M85.2,158.4c1.4,7.1,2.8,14.2,4.4,21.3
	c0.5,2.3-0.4,3.1-2.3,3.5c-11.7,2.7-23.6,3.8-35.4,1c-4-1-8-2.5-10-6.7c1.3-3.7,4.4-5.8,7.2-8c8.8-6.7,18.9-10.4,29.8-12.1
	C81.2,157.2,83.3,157,85.2,158.4z M486,124.3c-2.4-10.9-10.3-17.3-19.3-22.5c-7.6-4.3-15.9-6.3-24.4-7.4c-0.8-0.1-1.5-0.6-2.2-0.9
	c1.4-4.3,5.3-5.6,8.9-7.1c2.7-2.8,5.8-1.4,8.8-1.1c9.1,1.1,18,3,26.2,7.1C500.5,100.8,501.3,113.9,486,124.3z M75,85.4
	c-5-9.3-11.4-17.7-17.2-26.5c-6.5-9.9-13.3-19.6-20-29.5c0.7-0.4,1.5-0.6,2.2-1.1c4.9-3.2,7.7-1.2,10.9,3.2
	C62.3,47.5,74,63.2,85.6,79c3.2,4.4,3,4.9-2.2,5.5C80.6,84.8,77.8,85.1,75,85.4z M85.2,158.4c-15.8,0.7-29.7,5.9-40.9,17.3
	c-0.7,0.7-1.5,1.2-2.3,1.8c-2.3-3.7-0.7-7,1.1-10.2c3.5-5.9,9-9.7,14.6-13.3c6.6-4.2,13.8-7.2,21.3-9.7c2.5-0.8,4-1,4.3,2.3
	C83.7,150.6,84.6,154.5,85.2,158.4z"/>
<g>
	<path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M437.1,70.6c-5.9,5.5-13.2,9-20.1,12.9c-1.8,2.6-4.8,2.8-7.4,3.7c-2.5,0.8-3.2,2.1-2.3,4.5
		c0.2,0.6,0-0.2,0.2,0.5c3.4,10.8,3.8,11.1,14.5,6.9c4-1.6,7.7-3.9,12.1-4.5c5.3-2,9.4-5.9,14.1-8.9c0.3,0.3,0.6,0.6,0.9,0.9
		c-3,2.4-6,4.7-9,7.1c-8.4,4.3-16.8,8.5-25.8,11.4c-3.7,1.2-5.4,0.5-6.4-3.3s-2.4-7.6-4.1-11.2c-1.6-3.5-0.5-5.1,3.1-5.8
		c1.8-0.3,3.5-1,5.2-1.5c8.9-3.1,16.6-8,23.9-13.7C436.3,69.8,436.7,70.2,437.1,70.6z"/>
	<path :style="{fill:'rgba(29, 22, 49, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M387.9,87.9c1.8,0,2.5,1.4,3.1,3.1c2.8,8,5.7,15.9,8.6,23.9c1.2,3.3,0.6,5.3-3.4,5.9
		c-5.2,0.9-10.4,2.2-15.5,3.5c-2.8,0.7-4.1-0.4-4.6-3c-1.7-9-3.3-17.9-5-26.9c-0.3-1.9,0.3-3.4,2.3-3.8
		C378.1,89.7,382.9,88.8,387.9,87.9z M148.6,119.4c2.7-0.4,4.4,0.2,4.8,3.4c1,7.7,2.3,15.4,3.5,23.1c0.3,2.2-0.8,3.4-3,3.7
		c-3.8,0.5-7.5,1.1-11.3,1.7c-2.3,0.4-3.5-0.6-3.8-2.8c-1.2-8-2.5-16-3.7-24c-0.4-2.5,1.4-3.2,3.2-3.5
		C141.7,120.3,145.1,119.9,148.6,119.4z M257.1,119.5c-1.1,0-2.6,0.3-2.9-1.2c-0.8-4.4-1.6-8.8-2.2-13.2c-0.2-1.6,0.8-2.3,2.3-2.5
		c3-0.4,6-0.6,8.9-1.4c2.4-0.6,3,0.6,3.3,2.4c0.3,1.3,0.4,2.6,0.6,3.9C269,118,267.7,119.5,257.1,119.5z M214.9,112.6
		c0.1-1.4-0.3-2.7,0.9-3c3.8-1.2,7.7-1.9,11.7-2.1c1.3-0.1,1.5,1.1,1.7,2c0.3,1.5,0.6,2.9,0.8,4.4c1.8,10.8,0.7,11.9-10.5,12
		c-1.4,0-2.3-0.1-2.6-1.5C216.3,120.3,215.6,116.2,214.9,112.6z M183.5,133.5c-5.9-4-5-10.4-4.8-14.9c0.3-5.8,6.7-3.1,10.4-3.9
		c3.7-0.9,6.2,4.1,5.2,14C193.7,134.8,186.7,129.8,183.5,133.5z M286.1,110.3c0.3,2-0.5,2.8-2.5,3.4c-10.9,3.3-11.3,3-13.6-8.2
		c-0.9-4.4-0.9-6.7,4.6-7.6c10.9-1.8,8-2.7,10.5,7C285.4,106.7,285.7,108.5,286.1,110.3z M213.4,125.1
		C213.3,124.8,213.4,125,213.4,125.1c-2.5,4.5-7.2,2.4-10.8,3.6c-2,0.7-3.4,0.4-3.7-2.2c-0.4-3.3-1.2-6.5-1.8-9.7
		c-0.6-3,0.4-4.5,3.5-5.1c10-1.9,10-2,12,8.1C212.9,121.4,213.1,123,213.4,125.1z M305.8,94.1c-0.1-1.6,0.5-2.6,2.1-2.8
		c0.2,0,0.3-0.1,0.5-0.1c3.7-0.6,8.5-3.7,10.7-1.3c3.2,3.5,2.4,9.3,3.7,14.1c0.2,0.9-0.6,1.5-1.5,1.7c-3.5,0.8-7.1,1.6-10.6,2.4
		c-1.3,0.3-2-0.4-2.2-1.4C307.6,102.5,306.7,98.2,305.8,94.1z M293.4,111.6c-3.4,0-7.2-7.2-6-13.8c1-5.7,7.7-3,11.6-4.7
		c1.8-0.8,6.1,8.8,4.9,13.9C302.5,112.6,296.2,109.4,293.4,111.6z M340.9,99.2c0.1,0.8,0.2,1.9-0.7,2.2c-4,1-8,1.9-12.1,2.7
		c-0.3,0.1-0.9-0.5-1-0.8c-1.1-4.7-2.1-9.4-3.1-14.1c-0.2-0.9,0.4-1.5,1.4-1.8c0.5-0.1,1-0.3,1.4-0.4
		C337.2,83.9,340.8,87,340.9,99.2z M240.1,122.6c-4.2,0.1-6.4-4.2-6.1-13c0.2-7.3,6.9-3.6,10.4-4.9c3.1-1.1,5.9,4.6,5.4,13.1
		C249.5,125.1,242.3,119.7,240.1,122.6z M176.4,131.4c-1.4,4.5-6.7,2.4-10.3,3.1c-4.2,0.8-5.9-1.7-5.5-13.5c0.2-6.6,7.2-2.7,11-4.1
		C175.3,115.6,174.2,115.7,176.4,131.4z"/>
</g>
<path :style="{fill:'rgba(234, 96, 96, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M10.8,136.5c6.3-7.5,13.8-13.7,20.7-20.6c4.6-4.6,9.6-8.7,13.9-13.5c4.5-5.2,9.9-7.2,16.5-7
	c1.1,1.7,1.2,1.8,0.3,3c-2.4,2.9-4.7,6-7.4,8.7c-8,7.9-16.2,15.7-23.8,24c-4.2,4.6-8.7,6.9-14.8,5.9
	C14.4,136.7,12.5,137.5,10.8,136.5z M10.8,136.5c9.2,1.5,15.9-1.9,21.9-8.9C41.4,117.4,52,109,60.5,98.5c0.7-0.8,2.6-1.3,1.4-3
	c6.5-1.1,13-2.1,19.8-3.2c-0.3,2.6-2.3,3.2-3.6,4.2c-14.7,12-29.5,23.7-44,35.8c-4.2,3.5-8.4,5.5-13.9,5c-3.1-0.3-6.3-0.1-9.4-0.1
	c-0.1,0-0.2-0.2-0.2-0.3C10.6,136.8,10.7,136.6,10.8,136.5z M437.1,70.6c4.9,3.3,7.8,8.4,11.5,12.9c0.7,0.9-0.3,1.5-0.5,2.2
	c-3.9,4.3-8.5,7.6-14.1,9.3c-5.1-2.8-10.1-5.9-15.3-8.8c-1-0.6-2-1.2-2.1-2.5c0.7-2.4,3.2-2.8,5-3.6C427,77.3,431.5,73.1,437.1,70.6
	z M112,33.5c2-0.3,3.9-0.4,6.5,0.4c-6.2,12.7-12.4,25.3-18.9,38.7c-3.3-4.7-6.3-8.9-9.4-13.1c5.5-7.6,11.8-14.7,17.3-22.3
	C108.7,35.5,110.4,34.6,112,33.5z M97.1,178.5c-2.1-11-4.1-21.3-6-31.7c-0.6-3,1.2-2.3,2.9-1.7c9.6,3.5,14.2,14.5,10.1,24.2
	C102.7,172.7,100.5,175.6,97.1,178.5z M112,33.5c-6.2,8-12.4,16-18.6,23.9c-0.8,1.1-1.7,2-3.2,2.1c-5.1-6.3-5.1-6.3,0.1-12.2
	c2.5-2.9,5.4-5.4,7.5-8.6C101.4,33.4,106.1,32.1,112,33.5z M434,94.5c-6.4,4.1-13.5,6.4-20.6,8.8c-2.2,0.8-3.5,0-4.1-2.2
	c-0.1-0.5-0.3-0.9-0.5-1.4c-1.1-4.1-5.2-8.7-3.2-12c1.6-2.7,7.3-2.9,11.2-4.2c4.9,2.9,9.7,5.9,14.6,8.8
	C432.5,92.8,433.5,93.4,434,94.5z M390,120.3c-11.9,3-11.9,3-14-9.2c-0.8-4.6-1.5-9.1-2.6-13.6c-1-3.9-0.3-6.1,4.2-6
	c1.8,0,3.6-0.5,5.4-0.8c1.6,1.4,2.2,3.3,2.8,5.2c1.9,6,3.2,12.2,4.8,18.3C391.1,116.3,391.7,118.4,390,120.3z M390,120.3
	c-0.7-8.6-3.8-16.6-5.9-24.8c-0.4-1.6-0.8-3.2-1.2-4.8c4.3-2.2,6.4-0.6,7.7,3.9c1.9,6.5,4.3,12.9,6.9,19.1c1.5,3.7,0.8,5.4-3.2,5.8
	C392.9,119.7,391.4,120.1,390,120.3z"/>
<path :style="{fill:'rgba(255, 255, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M148,148.4c-7.4,1.7-7.4,1.7-8.6-5.5c-0.8-4.7-1.2-9.6-2.2-14.3c-0.9-4.2,0-6.7,4.8-6.6
	c1,0,2-0.2,3-0.3c1.6,1.4,2.1,3.4,2.2,5.3c0.4,5.4,1.2,10.8,1.9,16.2C149.3,145.1,149.4,146.9,148,148.4z M148,148.4
	c-1-8.9-2-17.8-3-26.7c5.2-1.8,7.3-0.2,7.4,5.4c0.1,4.6,1.2,9.1,1.9,13.7C155.5,148.2,155.5,148.3,148,148.4z M258.8,117.9
	c-5.9-1.7-4.3-7.1-4.6-10.6c-0.5-6.3,6.6-4.7,8.4-4.1c4.6,1.4,3.6,7,3.7,10.7C266.6,118.9,261.1,115.6,258.8,117.9z M216.5,113.6
	c1.5-4.6,5.7-4.3,8.4-3.8c6,1.1,4.2,7.2,4.2,10.7c0,4.7-6.1,3.9-8.4,3.4C215.5,122.6,219,116.7,216.5,113.6z M187.3,116.1
	c7.8,0.5,4.1,7.2,5,10.8c1.2,4.7-4,3-6.2,3.4c-4.9,0.9-5.4,0-5.9-10.1C180,114.8,184.7,117.6,187.3,116.1z M284.6,109.4
	c-1.6,4.4-6,4.3-8.5,3.9c-5.9-0.9-4.3-7-4.6-10.6c-0.4-4.9,5.8-4,7.9-3.7C285.1,99.8,282,106,284.6,109.4z M198.5,117
	c1.5-5.1,5.8-4.7,8.4-4.3c6,1,4.2,7.1,4.2,10.6c0,4.7-6.1,3.9-8.4,3.4C197.4,125.7,201.3,119.7,198.5,117z M311.4,106.8
	c-3-3.4-3.4-7.9-3.3-11.6c0.1-5.3,6.2-4.3,8.3-3.7c4.6,1.3,4.1,7,4.1,10.5C320.5,106.8,314.8,104.4,311.4,106.8z M292.9,110.9
	c-3.2-3.8-3.7-8.3-3.6-11.9c0.2-4.9,6.2-4.3,8.4-3.7c4.7,1.3,4,7,4,10.6C301.7,111.1,295.8,107.8,292.9,110.9z M339.4,97.9
	c-1.9,4.4-6.7,4.5-9.1,4c-5-1.2-3.9-7-4-10.5c-0.2-5.3,6-4.2,8.3-3.8C339.7,88.6,336.8,94.6,339.4,97.9z M248.9,117.4
	c-2.3,3.6-6.2,3.7-8.9,3.2c-5.9-1.2-4-7.1-4.1-10.7c-0.1-4.6,5.2-3.7,7.9-3.3C250.1,107.6,245.9,113.9,248.9,117.4z M170.3,118.1
	c5.4,2.5,4.1,7.9,4.1,11.5c0,5.5-6.5,3.7-8.6,3.3c-5.5-1.3-3.2-7.3-3.4-10.9C162.1,117.3,167.7,120.3,170.3,118.1z"/>
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
                                    <button :style="{background:'rgba('+getterJetPlaneBg1+')'}" @click="ShowElement(getterJetPlaneBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterJetPlaneBg2+')'}" @click="ShowElement1(getterJetPlaneBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterJetPlaneBg3+')'}" @click="ShowElement2(getterJetPlaneBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterJetPlaneBg4+')'}" @click="ShowElement3(getterJetPlaneBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterJetPlaneBg5+')'}" @click="ShowElement4(getterJetPlaneBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var JetPlane= [
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
            var randomNumber = JetPlane[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  JetPlane[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'JetPlane'){
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
                getterJetPlaneBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'JetPlane') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJetPlaneBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'JetPlane') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJetPlaneBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'JetPlane') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterJetPlaneBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterJetPlaneBg5: {
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
                            name:'JetPlane',
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