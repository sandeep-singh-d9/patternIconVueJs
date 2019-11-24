<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform:scale(0.7);">
                    <path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M79.5,437.2c0-34.9,0.2-69.7-0.1-104.6c-0.2-25.3,7.3-47.9,22.1-68.2c16.5-22.6,15.7-22.6,14-50.5
	C113,172.4,114.6,131.1,127,91c0.6-2,0.8-3.9,0.2-6c-2-7.6-1.3-15,1.3-22.4c0.6-1.7,1.8-3.4-1.4-4c-1.4-0.3-2.1-1.7-2.3-3.3
	c-1.1-11.8,6.5-23.3,18.2-25.9c15.6-3.4,31.4-3.5,46.9,0.2c12.3,2.9,19.3,13.1,18.4,25.6c-0.1,0.8-0.1,2.1-0.5,2.3
	c-5.8,2.1-2.2,6-1.8,9.2c0.3,2.2,1.4,4.6,1,6.6c-3,14.3,2.7,27.4,5.3,40.8c6.9,35.1,7.5,70.4,5.2,105.9c-0.3,5.3-0.9,10.6-1.4,15.9
	c-0.4,4.3,1.3,8.1,3.6,11.5c4.5,6.6,9.2,13,13.8,19.5c13.7,19.3,20.4,40.6,20.3,64.4c-0.2,71.6-0.1,143.1-0.1,214.7
	c0,7.4-0.7,14.8-3,21.8c-4.8,15.1-13.9,26.5-28.8,32.3c-36.7,14.2-73.7,14.6-110.3,0.1c-24-9.4-32.1-29.7-32.3-53.7
	C79.3,510.2,79.5,473.7,79.5,437.2L79.5,437.2z"/>

	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M246.9,352.5c0-1.4,0.8-3.2-1.1-4.5c-5.1,4.7-11.1,7.7-17.4,10c-11.2,4.1-22.9,6-34.7,7.8l0,0
		c-13.1,1.2-26.2,1.7-39.3,0.9c-23.7-1.6-47.3-3.9-67.7-19c0,51.9,0,103.4,0,154.8c0,4.2,2.2,7.4,5.3,10c3.3,2.8,7,5,11,6.6
		c29.4,11.3,59.8,12.8,90.7,8.8l0,0c15.4-1.4,30.3-4.7,43.9-12.5c6.4-3.7,9.5-8.9,9.4-16.6C246.8,450.1,246.9,401.3,246.9,352.5z
		 M179.2,494.8c3.1-1.7,6.3-0.8,9.1-0.9C185.6,494.7,182.7,495.8,179.2,494.8z M217.6,449.9c0.1,0.5,0.3,1.1,0.6,1.5
		c1.2,3.2-1.2,5.2-2.6,7.5c-1,1.6-3.1,2.7-2.1,5.2c0.9,0.6,1.8,0.6,2.9,0c-2.2,3.3-5.9,5-7.1,8.7c-0.4,1.1,3.1,1.4,0.5,3.3
		c-2.2,1.6-5.3,2.3-6.6,5.1c1.9,2.4-0.1,3.5-1.7,4.3c-3.5,1.8-5.9,4.6-7.7,7.9c-0.8-0.2-1.6-0.2-2.5-0.2c0.5-0.2,1-0.5,1.4-0.9
		c0.1-0.4,0.1-0.9-0.2-1.2c-1.3-1.5-3.1-3.1-1.3-5.2c2.4-2.9,2.5,1.3,4,1.5c2.2,0.3,4.1-0.4,5.4-2.1c1.6-2-0.9-2.7-1.6-3.9
		c-1.4-2,0.1-4.3-0.7-6.4c-4.8-3.1-11.6-2.4-14.8,1.7c-1.3,1.6-2.4,3.2-4.5,3.7c-7.3,0.4-14.6,0.1-21.9,0.2c-3.1,0-5.6-0.8-7.3-3.5
		c-1.4-1.5-1.9-4.4-4.9-3.6c-3.3,0.9-4.9,3.3-4.9,6.7c0.3,1.8,1.5,3.2,2.4,4.8c1.1,2,1.5,3.7-0.9,5.1c-0.8,0.8-1.4,1.8,0,2.4
		c2.4,1,4.8,2.5,7.5,0.8c1.8-1.1,3.3-0.7,4.4,2.1c-6.8-1.1-13.3-0.9-17.2-7.3c-2.7-2.3-5.5-4.5-9-5.1c0.8-0.2,1.8,0.2,2.6-0.6
		c0.2-2.9-2.3-3.6-4-4.7c-2.4-1.6-3.8-3.5-3.2-6.5c-0.9-2.3-2.8-3.8-4.4-5.6c-1.2-1.4-1-2.3,0.4-3.3c0.6-3.9-4.8-6.6-2.1-10.9
		c-0.2-4.3-2.3-8.2-3.1-12.6c0.3,1.4,1.1,1.8,2.2,1.9c0.5-0.2,0.9-0.6,1.1-1.2c0.3-3.5-2.1-7.8,2.6-10.2c0.3-2.6-0.6-5.4,0.8-7.9
		c3.4-2.8,3-10.5,10.5-8.3c0.7,0.2,1.7-1,1.5-2.2c-0.8-4.7-0.3-8.2,5.9-7.4c1.1,0.1,2-1.3,2.9-2.1c2.5-2.2,5.1-4.3,7.5-5.3
		c-7.2,6.7-14.8,13.9-18.5,24.2c-1.4,2.7-4.5,4.4-4.6,7.9c2.2,3.8-1.6,6.9-1,10.6c1.2,7.6-0.7,10.9-7.2,14.1c-0.3,2.5,1,4.4,3.1,5.2
		c2.5,0.9,3.2-1.7,4.4-3.1c0.5-0.6,0.9-1.3,1.6-1.8c3.6,2.6,6.6,1.9,9.6-1.2c3.8-4,7.9-7.7,11.8-11.6c1.4-3.5-0.8-5.7-2.5-8.3
		c-2.6-4-0.7-9.5,3.7-9.2c5.6,0.4,10.8-1.8,16.3-1.3c9-5.9,17.2-12.6,21.9-22.6c-0.1-0.8-0.4-1.6-1-2.2c0.8-0.4,1,0.6,1.6,0.7
		c2,0.5,4,4.2,6.1,2.4c0.1,0.6,0.3,1.1,0.8,1.3c10.8,6,16.8,15.7,20.6,27c0.2,0.5,0.5,1,0.9,1.5c1.5,2.9,0.3,6.1,1.4,9.1
		c0.2,0.5,0.5,1,0.8,1.5C220.6,443.6,217,446.6,217.6,449.9z"/>
	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M129.2,215.5c17.4,6.8,35.4,7.4,53.6,5c7.7,0,14.9-2.2,21.9-5.1c4.7-1.9,7.1-5.2,7.1-10.3
		c0-9.2,0.4-18.4,0.2-27.6c-0.3-15.7-1.3-31.3-4-47.5c-7.3,4.6-15.2,5.8-22.8,7.9c-2,0.1-4.1,0.1-6.1,0.3c-17.5,1.4-34.7,1-51-6.9
		c-3.6-1.8-3,1.4-3.2,3.1c-2.8,23.4-4,46.8-2.9,70.4C122.2,210.2,124.2,213.6,129.2,215.5z"/>

<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M91.5,346.8c5.1,4.4,11.1,6.8,17.3,8.9c19,6.6,38.8,7.9,58.7,8c8.7,0,17.6,0.6,26.2-1.8
	c16.2-1.3,31.8-4.5,45.9-13.2c5.1-3.2,8-7.5,6.9-13.8c-2.9-6.2-8.4-9.3-14.2-11.8c-10.2-4.4-20.8-7.2-31.8-8.3
	c-2.6-0.3-5.4-1.9-7.9,0.3c-1.3-1-2.6-1.6-4-2c1.4,0,2.7-0.2,3.9-1.1c0.1-0.1,0.1-0.2,0.2-0.3c2.7,2.4,6.2,2.2,9.5,2.8
	c14.4,2.4,28.5,5.6,40.6,14.4c1.1,0.8,2.3,1.7,3.9,1.1c0.8-12-1.4-23.6-5.6-34.8c-5.5-14.8-14.8-27.3-24.2-39.7
	c-6.6-8.8-8.6-18.3-6.6-28.9c0.6-3.2,0.4-6.6,0.7-10.7c-5.7,3.4-10.8,5.4-16.3,6.4c-6,1.1-12,1.9-18,2.8l0,0
	c-18.5,0.7-36.7-0.3-54.1-8.8c0,1.4-0.2,2.5,0,3.4c4.4,17.7-1,32.6-13.1,45.6c-0.8,0.9-1.5,2-2.2,2.9
	c-13.3,18.4-21.6,38.4-20.5,61.6c1.5,0.4,2.8-0.1,3.9-0.8c-1.9,1.8-3.3,4-3.8,7.1C86,340.7,88.3,344,91.5,346.8z M176.5,312.1
	c-12.1-0.2-24.3-0.4-36.3,1.2c-5.8,0.8-11.6,1.6-17.4,2.8C140.5,312.4,158.4,311.2,176.5,312.1z M110,319.4c0.5-0.2,1.1-0.3,1.6-0.5
	c-4.6,1.4-9,3.1-13.4,5.3c-0.6,0.3-1.2,0.6-1.7,0.9C100.8,322.7,105.3,320.8,110,319.4z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M246.8,516.4c0-0.9,0.3-2.1-1.3-2.6c-15.1,12-33.4,15.1-51.8,18.1l0,0c-1.8,0.1-3.7,0.1-5.5,0.2
	c-35.3,2.1-70.3,2-101.4-18.7c0,13.9-1,28.1,0.3,42.1c1.7,18.1,10.5,31.9,28.3,38.9c22.6,8.9,45.9,11.1,69.9,8.2
	c10.2-0.9,20.1-3.3,29.7-6.9c20.2-7.5,31.2-22.6,31.7-44.2C247,539.8,246.8,528.1,246.8,516.4z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M133.4,130.2c16.4,5.8,33.3,6.7,50.4,3.9l0,0l0,0c6.7-0.2,12.9-2.2,18.8-5c2.8-1.3,5.3-3.2,4.4-7.1
	c-1-4.4-1.7-8.8-2.7-13.2c-2.4-10.8-7.6-21.2-3.6-32.8c0.6-1.7-0.4-4-0.8-6c-1.3-7.3-5.8-9.1-11.8-4.8c-2,1.5-4.1,1.7-6.3,0.7
	c-1.4-0.6-2.7-1-4.1-0.4c-7.2,3.1-14.2,1.9-21.6,0.4c-4.7-1-10,0.9-14.3-2.9c-0.2-0.2-1.3,0.7-2.1,1.1c-2.6-0.8-4.5-1-5.3,2.6
	c-0.6,3-1.7,6.2-0.9,9c2.9,10.9-1.1,20.8-3.6,31c-0.7,2.9-1.8,5.9-1.4,9l0,0c-1.4,1.4-1,3.2-1,4.9
	C124.2,127.1,129.5,128.8,133.4,130.2z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M166,34.1c7.9,0.1,15.5,0.1,22.9,2c1.2,0.3,2.4,0.7,3.5,1.2c2.5,1.3,5.9,2.6,6,5.6
	c0.1,3.5-3.9,3.8-6.4,4.5c-16.9,4.8-33.9,4.8-50.8-0.2c-2.4-0.7-6-1.1-6-4.2c0-2.9,3.1-4.7,5.7-5.8C149.1,33.8,157.8,34.5,166,34.1z
	"/>
<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M246.6,334.8c-15.1-14.7-34.7-17.1-54.2-19.7c-27.8-2.8-55.4-2-82.3,6.1c-9.1,2.7-17.7,6.3-23.2,14.8
	c0-2.1,0-4.2,0-6.3c12.4-10.9,27.8-14.3,43.3-17c15.7-2.7,31.7-3.3,47.6-2.6c4.9,0.2,9.7,0.7,14.6,1.1c15.7,2,31.2,4.5,45.5,12.2
	c3.3,1.8,5.7,4.5,8.8,6.4C246.6,331.6,246.6,333.2,246.6,334.8z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M149.3,62.7c-2.9-0.3-4-4-7.2-3.7c-2.1-2.8-0.8-5,1.2-7.1c2.8,0.5,5.6,0.9,8.4,1.4
	C153.9,57.2,152,60.1,149.3,62.7z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M172.7,54.4c0.5,2.9,1.1,5.8,1.6,8.8c-2.3,2.7-4.3-0.4-6.4-0.4c-3.6-2.3-3.4-5.1-1.2-8.3
	C168.7,54.5,170.7,54.5,172.7,54.4z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M159.2,63c-1.6-0.5-3.2-1-4.9-1.5c-3-4.2-2.2-6.4,2.6-7.3c2,0.1,3.9,0.2,5.9,0.3
	C163.7,58.2,162.5,61,159.2,63z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M137.2,56.7c-0.1-0.2-0.3-0.3-0.4-0.5c-1-2.4-5.7-3.7-3.3-6.8c2.1-2.8,4.6,1.3,7.1,1.3
	C142.1,54.3,141,56.3,137.2,56.7z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M197,49c-7.6,3.9-16.1,4.1-24.4,5.5c-1.8,3.4-1,6.2,1.6,8.8c2-0.6,3.9-1.1,5.9-1.7
	c0.9-0.8,1-1.7,1-2.4c0.3,1.1,1.7,2.2,2.5,3.6c3.8-0.2,6.3-5.6,10.9-2.7c0.6,0.4,6.4-8.8,6-9.7C200.1,48.2,199,48,197,49z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M166.7,54.5c-1.3,0-2.6,0-3.9,0c-1.2,2.8-2.4,5.7-3.6,8.5c3,3.4,5.7-1.2,8.7-0.2
	C165.9,60.2,166.7,57.3,166.7,54.5z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M137.2,56.7c-0.1,4.3,2.2,3.7,4.9,2.4c0.4-2.4,0.8-4.7,1.2-7.1c-0.9-0.4-1.8-0.8-2.6-1.2
	C140.5,53.3,139.3,55.3,137.2,56.7z"/>
<path :style="{fill:'rgba(194, 228, 248, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M151.7,53.3c0.4,3.4-2.1,6.1-2.4,9.4c1.7-0.4,3.4-0.8,5-1.3c-1.4-3.2-1.3-5.9,2.6-7.3
	C155.3,53,153.5,53.2,151.7,53.3z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M180.2,61.5c-0.1-2.1-0.8-4.2,0.5-6.7c2,2.5,2.5,5.2,3,7.8C182.6,62.3,181.4,61.9,180.2,61.5z"/>
<path style="fill:#EBBE42;transform:scale(0.2)" d="M219.6,450.6c-2.3,2.4-4.6,4.8-7.1,7.4c-1.5-2.3-2.7-4.3-4-6.3c0.5-0.6,1-0.7,1.6,0
	c3.1,2.9,5.5,0.8,7.9-1.2C218.6,450.5,219.1,450.5,219.6,450.6z"/>
<path style="fill:#EEC34B;transform:scale(0.2)" d="M210.8,441.6c2.9,1,5.1,0.2,6.9-2.2c0.6,0,1.1,0,1.7,0c-1.8,2.4-3.6,4.8-5.4,7.3
	C212.4,445.2,211.3,443.6,210.8,441.6z"/>
<path style="fill:#EEC551;transform:scale(0.2)" d="M217.1,428.3c-1.2,2.3-2.4,4.5-3.8,7.1c-1.8-1.4-3-2.7-3.7-4.6c2.7,0.7,4.7-0.1,6.2-2.4
	C216.2,428.3,216.6,428.3,217.1,428.3z"/>
<path :style="{fill:'rgba(241, 201, 32, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M178.8,481.1c-6.5,0-13,0-19.5,0c-8.2,0-9.3-1.1-9.8-9.5c0.8-10.3,2.8-20.5-0.1-30.8
	c-1-3.7,1-4.8,3.8-3.7c2.8,1.1,6.1,0.3,8.6,2.7c1.3,1.2,3.3,1.2,4.6,0.2c5.9-4.3,5.2,0.3,5,3.7c-0.1,2-0.9,4-1.1,6
	c-0.3,2.7,0.9,4.3,3.7,4.4c2.6,0.1,3.7-1.4,3.7-3.8c0-0.4,0.1-0.9-0.1-1.2c-3.1-6.2,0.1-9.4,5.7-11.2c1.4,2.4-1.7,3.8-1.5,6
	c13.3,1.7,13.3,1.7,14.4,13.8c0.3,3.4,0.7,6.9,0.9,10.3c0.2,2.5-0.5,4.6-3.5,4.5c-5.8-0.2-11.8-1.1-13.1,7
	C180.6,480.2,179.4,480.7,178.8,481.1z"/>
<path style="fill:#F2CA21;transform:scale(0.2)" d="M144.2,429.7c-0.2-5.5,3.8-8.4,8.2-6.9c0.4,0.1,0.8,0.3,1.1,0.6c3.5,3.5,6.5-5.4,10.4-0.3
	c4,5.2,6.1-0.4,8.9-2.2c0.8-0.5,1.8-0.9,2.8-1.1c2-0.3,12.6,7.9,12.9,9.9c0.1,0.6,0,1.2-0.2,1.8c-1.1,3.4-11.2,7-14.4,5.2
	c-2.6-1.5-5.1-3.4-7.4,0.6c-0.8,1.3-2.8,1.4-3.9,0.4c-3.6-3.7-8.3-2.6-12.6-3C146.3,434.2,144.6,432.3,144.2,429.7z"/>
<path style="fill:#EED154;transform:scale(0.2)" d="M116.2,440.6c1.3,0.5,2.6,1.1,3.9,1.4c0.9,0.2,2.3-0.4,1.9,1.3c-0.2,0.9-0.8,1.9-1.5,2.6
	c-1.1,1-1.7-0.1-2.2-1C117.6,443.5,116.1,442.5,116.2,440.6C116.2,440.7,116.2,440.6,116.2,440.6z"/>
<path style="fill:#EDCF4F;transform:scale(0.2)" d="M127,463.9c-2.4,6.1-2.5,6.1-8.4-1.1c2.4,0.5,4.9,2.4,7.3-0.2C126.3,463,126.6,463.4,127,463.9z"/>
<path style="fill:#EDC931;transform:scale(0.2)" d="M160.5,405.5c0,2.6-1.1,4-3.2,4c-1.8,0.1-3-1.1-3.1-3c-0.1-1.8,0.6-3.2,2.5-3.5
	C158.8,402.7,160,404,160.5,405.5z"/>

	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M149.6,407c-3-0.8-4.9,0.2-5.3,3.6c-0.1,1.1,8.5,8.9,9.9,9c2.9,0.1,4.5-1.5,4.9-4.3
		c0.1-0.4,0-0.8-0.2-1.2c-0.9-1.6-0.4-2.4,1.1-3.3c2.2-1.4,3.5-3.5,2.4-6.2c-0.9-2.2-2.6-3.6-5.2-3.5c-3.1,0.1-4.9,1.9-5.3,4.8
		C151.7,407.4,151.4,408.2,149.6,407z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M152,490.8c-0.9-0.9-1.7-1.2-3,0c-3,2.7-3.1,2.6-7,0.3c2.7,0.4,4.7-0.2,3.2-3.5
		c-1.1-2.3-1.9-4.9-4.4-6.3c-0.5,1.1-1.5,2.1-1.5,3.2c-0.4,5.9-1.9,0.3-2.9,0.3l0,0c1.5-4.3,0.3-8.2-1.3-12.1
		c-1.7-3.2-3.1-0.6-3.7,0.5c-1.2,1.9-2.2,2.3-3.2,1.9c0.8-0.1,1.6-0.6,2.3-1.4c2.8-3.2,3.3-6.9,0.3-10.4c-1.8-2.4-2.7-0.4-3.7,0.8
		c-2.2,2.4-4.1,2-5.8,0.8c1.8,0.7,3.4,0.5,4.7-2.1c0.9-4,3-8,0.1-12.1c-1.6,2.2-3.2,4.5-5.2,7.3c-1.3-1.8-2.4-3.4-3.5-5l0,0l0,0
		c4,1.8,5.8-0.4,7.5-3.7c3.1-6.2-0.5-13.4,3.5-19.4c0.9-1.4-2.1,0.2-2.5-1.2c1.7-2.5,3.4-5,5.1-7.5l0,0l0,0
		c4.5-10.8,13.1-18.5,21-26.5c-7.2-1.5-10.1,7.7-17.5,7.3c-2.3-0.1-6.9,4.6-3.8,9.6c0.7,1.1-0.4,1.5-0.9,1.6c-1.2,0.2-1-0.8-1-1.6
		c-0.3-3.9-2.2-3.2-3.3-0.8c-1.8,3.7-4.1,7.1-6.3,10.5l0,0c-1.8,2.9-2,5.7-0.1,8.6c-2.1-0.6-4.3-2-4.1,2.2c0.1,3.1,0.6,5.9,1.4,8.8
		c0.6,1,1.4,1.8,2.4,2.4c-1.3-0.4-1.8-1.5-2.5-2.4c-1-0.5-2.1-1-3.3-1.6c-0.4,4.9,1.6,8.9,3.6,12.7l0,0l0,0
		c-3.1-0.5-3.5,1.2-2.4,3.4c1.3,2.6,3,5,4.6,7.5l0,0l0.1,0.1l0,0c-1.1-0.2-2.2-0.5-3.9-0.9c1.7,4.2,4.1,7.2,7.5,9.4l0,0
		c-0.8,1.3-3.6,2.2-0.8,4.3c2.9,2.2,5.7,4.5,8.5,6.8c-1,0-1.9,0-3.4,0c3,3,5.8,5,9.3,6.1l0,0l0,0c0.2,0.9-1.5,1.9-0.1,2.6
		c6.5,3.4,13.1,6.4,21.1,5.8C155.9,493.7,153.7,492.5,152,490.8z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M219.6,450.6c-1.1,0.8-2.1,1.5-2.8,2.1c0.4-0.6,0.9-1.3,1.2-2.2c0.7-3.7,4.5-6.9,1.4-11.1
		c-0.7,0.6-1.7,0.9-2.5,1.5c0.3-0.4,0.5-0.9,0.7-1.4c0.7-3.7,2.3-7.5-0.7-11.1c-0.7,0.6-1.3,1.4-1.9,2.2c0.3-0.5,0.5-1.2,0.6-2.1
		c-0.2-4.2-2.5-7.5-4.2-11.1c-3.9-8.7-9.7-14-17.9-17.6c-3.6-2.3-7.1-4.9-12.5-5.5c2.3,2,3.7,3.2,5.2,4.5c1.6,2.2,2,5.1,4.3,6.8
		c1.2,1.5,4.3,1.3,3.9,4.2c5.2,5.8,6.7,13.9,11.9,19.7c-1.7,0.3-1.4,2.2-1.2,4c0.3,2.4,1.9,4.1,3.3,5.9c-2.8,0-2.7,2.4-2.6,4.4
		c0.2,2.8,1.1,5.4,2.5,7.7c-0.3-0.3-0.6-0.5-1-0.8c-5.3,1.8-2.7,5.8-2.2,8.9c0.2,1.1,0.5,2.1,1,3c-0.8-1-1.8-1.6-3.3-0.3
		c-2.9,2.6-2.2,8.8,1.4,11.7c0.1,0.9,0.7,2.6-1.2,0.7c-0.8-0.8-1.3-1.9-2.5-2.1c0.1-0.2,0.2-0.5,0.3-0.7c-0.6-5.3,1-11-2.5-15.6
		c0.1-0.3,0.2-0.6,0.3-0.9c0.3-4.9,1.3-10-4.2-13c-6.7-1.3-6.6-1.3-4-8.1c1.2-3,1.4-6.4-1.2-8.5c-3.8-3-6.7-7.1-11.3-9.1
		c-5.3-1.3-8.5,3.4-12.9,4.6c-1.8-1.1-3.8-2.5-5.7-1.4c-3,1.7-5.9,1.4-9.1,0.9c-3.6-0.6-6.2,1.4-7.8,4.7c-1.5,3.1-1,6.2,1.4,8.4
		c2.1,2,3.3,4,2.7,6.9c0.2,5,1.9,10.1,0.1,15.1c-0.5,2.7-0.5,5.3-0.4,8c0,1.7,0.1,3.4,0.7,5c0.3,0.7,0.6,1.3,1.1,1.8
		c-0.1,2.3-0.2,4.6-0.4,6.9c1.5,2.9,3.4,5.2,7,5.2c8.4-0.1,16.8,0.7,25.2-0.4l0,0c2-0.3,3-1.8,4-3.3c2.7-4.1,8.7-5.4,13.4-2.7
		c-0.4,2.1-2.3,4-0.2,6.2l0,0c1,0.6,2.1,1.2,3.2,1.9c-2.6,1.4-5.2,4.4-6.3-1.1c-0.2-1.2-1.6-2.4-2.6-0.9c-1.5,2.1-3,4.5-3.5,6.9
		c-0.6,3.1,3.5,1,4.3,2.9c-2.8-0.3-6.6,3.7-8.2-2c-0.2-0.7-1.5-0.2-2.1,0.4c-1.7,1.9-4.5,3-4.7,6.3c6.1,0.8,11.2-1.7,16.4-3.9v0.5
		c4.8-3,8.2-7.8,13.3-10.1c-0.4-1.9-2.6-0.5-2.8-2.3l0,0c4.2-1.7,7.4-4.5,9.7-7.8c-1.4-2.3-2.9,1.8-4.1-0.9
		c4.3-2.4,7.2-5.9,9.4-11.2c-2.6,1.2-4.2,1.9-5.8,2.6c1.3-1.5,2.9-2.9,3.9-4.6C218.7,456.7,221.8,454.3,219.6,450.6z M195.6,465.2
		c0.2,3.1-0.1,6.2-4.2,5.6c-7.4-1.1-10.7,3-12.7,9.2c-0.1,0.4-0.1,0.8,0,1.1c-5-3-10.6-1.6-15.9-1.5c-6.5,0.2-11.4-1-13.3-7.9
		c0-0.1,0-0.1-0.1-0.2c0.1,0,0.2,0.1,0.3,0.1c2.9-1.3,2.4-4.1,2.4-6.4c0-7.4,0.4-14.7-0.3-22.1c-0.2-2.4,0-4.1,3.1-3.7
		c4.4,0.7,8.4,3.3,13.2,1.9c1.2-0.3,1.5,1.1,1.6,2.1c0.1,1.7-0.4,3.2-0.6,4.9c-0.3,3.4,0.4,6.5,4.4,6.7c4.3,0.3,5.5-2.8,5.4-6.5
		c-0.1-2.4-1.2-4.9,1.6-7.1c0.6,4.9,4.4,4.5,7.6,4.4c3.6-0.1,5,1.5,5.8,4.8c0.5,2.4-0.1,5.3,2.2,7.2
		C193.9,460.2,195.4,462.8,195.6,465.2z M214.4,431.3c-0.8,0.8-1.8,1.2-3,0.7C212.6,432,213.6,431.9,214.4,431.3z M207.3,463.8
		c1.1,1.1,2.6,1.6,4.9,1C210.5,465.9,208.8,465.9,207.3,463.8z M210.6,453.2c1.5,0.9,2.9,1.3,4.2,0.9
		C213.2,455.2,212.6,455,210.6,453.2z M213,442.8c0.9,0.3,1.7,0.2,2.5-0.3C214.5,443.7,213.7,443.5,213,442.8z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M193.6,453c-0.2-6.4-4.9-5.5-8.8-5.3c-5,0.2-2.8,3.9-2.8,6.4c0.1,3.9,0.6,7.7,0.5,11.6
		c-0.2,3.8,1.2,5.3,4.7,4.5c4.8,0.4,8.4-1.1,7.4-6.3C193.9,460.2,193.7,456.6,193.6,453z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M155.1,445.6c-3.3,7-2.9,28.6,0.6,31.8C154.2,466.9,156.7,456.5,155.1,445.6z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M177.9,478c-2.5-7.8-0.2-15.2-2.6-22.1C173,464.6,174,473.5,177.9,478z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M164.6,477.3c0.3,0,0.5,0,0.8-0.1c0-10.2,0-20.5,0-30.7c-0.3,0.1-0.5,0.2-0.8,0.3
		C164.6,456.9,164.6,467.1,164.6,477.3z"/>
	<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M168.9,443.2c-5.1,0-10.1,0-15.2,0C158.8,444.6,163.9,444.5,168.9,443.2z"/>

	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M148.1,464L148.1,464c0.1-2.8,0.1-5.5,0.2-8.3l0,0c1-5.2,2.4-10.4-1.4-15.1
		c-5.5,1.8-8.1,7-12.2,10.5c-2.8,2.4-5.3,5.5-6.8-1c-0.2-0.8-1.4-0.4-1.9,0.4c0.2,3.9-1,7.7-1,11.6c0.1,0.9,0.5,1.6,1.3,2.1
		c1.6,0.1,2.9-0.8,4.4-1c0.1,2,0.2,4,0.2,6c0,4.4-1.9,6.1-6.2,4.1c0.7,3,3.7,3.3,5.5,4.9c1.7-1.7,0.6-5.7,4.2-5.6
		c-0.1,0.1-0.1,0.1-0.2,0.2c0.8,4.2,0.8,8.5,1,12.7c0.8,1.5,1.9,3.1,3.7,2.2c2.6-1.3,2.5-3.9,1.8-6.4c0.5-2.9,1.4-5.6,4.6-6.5
		c2.2-0.6,1.1,2.3,2.5,2.8c3.1-2.7,0.8-5.7,0.4-8.6C148.3,467.3,148.2,465.7,148.1,464z"/>
	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M209.3,468.6c1.5-1.7,2.8-3.2,4.1-4.6c-2.5,0.3-5.2,0.6-5.9-2.6c-0.8-3.4-2.4-6.8-0.5-10.4
		c0,0,1,0.5,1.6,0.7c0.5,0,1.1,0,1.6,0c-1.4-3.2-2.6-6.4-3-9.8c-0.3-2.8,1.2-1.8,2.4-1.2c-0.1-3-2.2-5.1-3.1-7.7
		c-0.6-2-1.1-3.6,2-3.4c-5.9-6-7.1-15-13.4-20.8c0.4-2.7-2-2.9-3.5-3.8l0,0c-2.7-1.3-1.4-5.8-5.1-6.2c-2.2,3.9-5.1,7.3-8.4,10.4
		c-4.3,4-8.5,8.1-12.7,12.2c1.9,2.2,3.5,0.9,4.9-0.6c2-2.3,4.7-2.8,7.5-3.2l0,0c4.5,1.9,6.7,6.6,11,9.1c2.9,1.7,2.6,5.8,0,8
		c-2.5,2.1-4,4.9-2.9,7.3c1,2.3,4.4,0.6,6.7,1c0.4,0.1,0.8,0,1.2,0l0,0c5.1,2.9,3.3,8,3.9,12.3c0.8,5.8,1.7,11.6,2.5,17.4
		c2.1,1.3,2.2,3.6,3,5.8c0.1-1.6,6.8-0.5,1.5-4.4c-3.7-3.9-1.3-7.9-0.8-12.2C207.2,463.1,207.4,466.3,209.3,468.6z"/>
	<path :style="{fill:'rgba(13, 143, 217, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M191.4,452.2c-0.3-3.4-2.7-2.9-4.9-3c-2.8-0.1-2.7,1.8-2.7,3.7c0.1,3.3,0.2,6.5,0.2,9.8
		c0,3.1,0.2,5.5,4.5,5.4c4.5-0.1,4.4-2.6,4.2-5.7C192.3,459.1,191.7,455.7,191.4,452.2z"/>
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
                                    <button :style="{background:'rgba('+getterBottleBeerBg1+')'}" @click="ShowElement(getterBottleBeerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBottleBeerBg2+')'}" @click="ShowElement1(getterBottleBeerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBottleBeerBg3+')'}" @click="ShowElement2(getterBottleBeerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBottleBeerBg4+')'}" @click="ShowElement3(getterBottleBeerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBottleBeerBg5+')'}" @click="ShowElement4(getterBottleBeerBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var BottleBeer= [
                {top:17 ,left:48},
                {top:230 ,left:111},
                {top:217 ,left:119},
                {top:201 ,left:37},
                {top:162 ,left:38},
                {top:490 ,left:70},
                {top:211 ,left:103},
                {top:276 ,left:11},
                {top:259 ,left:114},
                {top:465 ,left:45},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = BottleBeer[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BottleBeer[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BottleBeer'){
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
                getterBottleBeerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BottleBeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBottleBeerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BottleBeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBottleBeerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BottleBeer') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBottleBeerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBottleBeerBg5: {
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
                            name:'BottleBeer',
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