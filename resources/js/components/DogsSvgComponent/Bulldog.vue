<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="fill:#472D17;transform:scale(0.2)" d="M532.8,136.5c5.8,19.6,7.7,38.8,5.5,58.4c-1.7,15.3-5.4,30-11.6,44.1c-1.8,4-4.8,7.2-7.4,10.7
	c-13.2,17.7-27.2,34.8-43.6,49.8c-3.1,2.8-6.2,5.8-9.8,7.7c-5.5,2.8-6.5,6.7-6.3,12.5c0.8,22.5-2.1,44.7-7.3,66.6
	c-0.6,2.6-0.9,5.1-0.9,7.7c0,32.9,0.4,65.8-0.2,98.6c-0.2,9.3,1.2,16.2,7.6,23.8c11.1,13,11.8,28.7,5.8,44.7c-0.9,2.4-2.2,3-4.6,3
	c-25.2-0.1-50.4-0.1-75.7,0c-2.9,0-3.8-1.4-4.7-3.6c-6.9-17.3-2.8-37,10.5-50c4.5-4.4,4.5-4.4,2.5-11c-7.6,7.8-15.2,15.5-23.6,22.2
	c-2.2,1.8-0.7,3.4-0.1,5.1c4.1,10.8,4.1,21.6,0.3,32.6c-1.3,3.9-3.2,4.8-7.1,4.8c-74.6-0.1-149.2-0.1-223.9-0.1
	c-7,0-14,0.5-20.9-0.3c-13.1-1.5-22.5-8.7-28.1-20.6c-1.5-3.1-3-4.2-6.6-4.3c-20.4-0.3-37.9-14.2-43.2-33.8
	c-5.2-19.3,3.2-40.8,20.4-51c3.1-1.9,3.6-3.8,3.5-7.1c-5.5-109.6,63.2-207,165.2-236.8c3.5-1,4.4-2.2,3.7-6
	c-3.7-21-3.1-41.9,2.7-62.5c0.6-2,1.5-3.9-2.4-3.7c-5.6,0.3-9.2-2.9-10.8-8.1c-4-13.3-8.1-26.5-11.7-40c-4.5-17,6.4-33.3,23.7-36.4
	c28.2-5.1,56.4-10.1,84.6-15.3c6.5-1.2,10.7,2.1,14.1,6.8c1.8,2.5,3.4,3.1,6.4,2.4c31.4-7.3,62.7-7.2,93.9,0.7
	c2.7,0.7,4.4,0.3,6-2.3c4-6.3,9.3-8.7,17.3-7.2c27.8,5.4,55.7,9.9,83.6,15c17.2,3.1,27.8,19.9,23.1,36.8
	c-3.6,13.2-7.7,26.3-11.7,39.4c-2,6.4-7.4,9.3-13.8,7.7C536.2,137.4,534.9,137.1,532.8,136.5z"/>
<path :style="{fill:'rgba(196, 142, 73, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M237.6,446.1C237.6,446.1,237.6,446.1,237.6,446.1c-3.6-15.1-10.2-28.6-19.8-40.7c0,0,0,0,0,0
	c-1.2-2.8-3.5-4.7-5.4-7c-31.2-37.4-82.7-49.1-126.8-29c-3.8,1.7-5.8,4-6.8,8.2c-6.7,26.9-8.9,54-5.9,81.5c1.6,14.4,4,28.8,9,42.5
	c4.1,15.1,9.7,29.5,18,42.7c5.1,7.7,12.5,11.3,21.6,11.4c11.6,0.2,23.3-0.1,35,0.1c3.3,0,4.6-0.4,3.8-4.2
	c-3.8-19.2,5.3-39,22.3-48.1c18.9-10.2,36.8-7.8,53.3,5.5c2.6,2.1,3.3,2.3,4-1.4c1.2-5.6,2-11.3,2.5-17
	C243.5,475.5,242.5,460.6,237.6,446.1z"/>
<path :style="{fill:'rgba(196, 142, 73, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M448.3,313.6c-6.7-0.6-12.5-3.5-16.1-9.3c-2-3.2-3.3-2.3-5.5-0.6c-5.6,4.4-11.9,7.7-18.7,10.1
	c-11.7,4.2-23.7,4.9-35.9,3.2c0,0,0,0,0,0c-10.9-1.6-20.9-5.9-29.3-12.7c-3.9-3.2-5-1-6.8,1.3c-6.4,7.8-17,10.4-26.2,6.1
	c-5.8-2.7-11-6.4-15.5-10.8c-10.8-10.8-21.5-21.7-31-33.8c-11.3-14.3-23.8-27.9-27.4-46.6c-0.5-2.6-2-3.2-4.5-2.4
	c-9.3,3-18.4,6.1-27.4,10c-2.3,1-3.5,2.4-4.3,4.8c-2.7,7.7-4.6,15.7-5.8,23.7c-3.2,22-1.4,43.6,6.7,64.5
	c3.3,10.5,8.2,20.3,14.7,29.2c17.4,26.1,41,43.9,71.1,53.1c4.2,2.1,8.9,3,13.5,3.6c4.3,0.5,5.5,2.3,5.4,6.7
	c-0.2,27.8-0.1,55.6-0.1,83.4c0,3.5,0.3,5.3,4.6,3.5c10.2-4.3,20.6-4,31-0.7c6.1,1.9,6.1,2,6.1-4.7c0-27.4,0.1-54.9,0-82.3
	c0-3.2,0.5-4.8,4.2-5.5c5.7-1,11.6-2,16.8-4.7c0,0,0,0,0,0c27.8-8.8,49.8-25.4,66.6-49.1c0,0,0,0,0,0c6.4-8.1,11-17.2,15-26.6
	c1.4-3.2,1.6-6.3,1.6-9.6C451.4,314.8,450.8,313.8,448.3,313.6z"/>
<path :style="{fill:'rgba(196, 142, 73, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M519,124.8C519,124.8,519,124.8,519,124.8c-0.7-1.6-1.3-3.2-2.1-4.7c-14.8-26.8-36.7-45.5-64.9-56.8
	c-33.8-13.6-68.7-15.8-104.2-9c-31.4,6-58.8,19.7-80.1,44.1C259.2,108,252,118.5,248,131c-0.5,0.9-1,1.8-1.4,2.7
	c-6.8,17.6-9,36-7.8,54.7c0.8,11.4,2.6,22.8,7,34.7c9.3-25.4,27.2-41.9,49.2-54.9c-16.9-12.7-23.7-27.8-23.1-46.6c0,0,0,0,0,0
	c0.4-1.5,0.8-3,1-4.6c4.3-28.4,34.2-47.5,62-39.7c28.7,8.1,43.8,36.9,34.2,65.2c-1.2,3.6-1.9,5.1,3.4,4.6c8.1-0.8,16.3-0.6,24.5,0
	c4,0.3,5.1,0.2,3.5-4c-3.2-8.4-4.1-17.1-2.3-26.1c3.8-19,14.8-32,32.9-38.4c18.3-6.4,34.9-2.6,49.5,9.9c10.2,8.7,15,20.2,16.9,33.1
	c0.5,18.4-6,33.6-21,44.6c-3.3,2.4-0.6,3.3,1.1,4.2c11.8,6.9,22.2,15.4,30.8,26.1c6.3,7.8,11.2,16.5,15.3,27.2
	C534,189.1,533.7,156.6,519,124.8z"/>
<path :style="{fill:'rgba(101, 68, 43, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M231.7,555.8c-9.8,0-9.8,0-9.8-9.8c0-7.8-0.1-15.7,0.1-23.5c0.1-3-0.7-4.3-4-4.3
	c-3.5,0-4.5,1.1-4.4,4.5c0.1,9.6-0.2,19.1,0,28.7c0,3.2-0.7,4.5-4.3,4.6c-12.4,0.1-12.4,0.2-12.4-12c0-7.3-0.2-14.6,0-21.9
	c0.1-3.1-1.2-3.8-4-3.8c-2.8,0-4.5,0.2-4.5,3.8c0.2,9.7-0.1,19.5,0.1,29.2c0.1,3.7-1.2,5-4.7,4.6c-2.2-0.2-4.5,0-6.8,0
	c-7.9,0-8,0-9.2-7.7c-2.2-14.1,5.9-30.2,18.8-37.4c14.1-7.8,30.9-6.4,42.4,3.5c9.4,8.1,14,18.3,13.7,30.8
	C242.5,554.9,241.6,555.8,231.7,555.8z"/>
<path :style="{fill:'rgba(101, 68, 43, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M405.5,537.2c0,5.2-0.1,10.4,0,15.6c0.1,2.3-0.7,3.1-3,3c-2.8-0.2-5.6,0-8.3,0c-8.4,0-8.4,0-9.4-8.3
	c-1.7-14.6,5.9-29.4,18.9-36.8c13.3-7.6,29.7-6.6,41.6,3.1c12.3,10,16.7,23,13.5,38.6c-0.6,2.8-1.9,3.6-4.6,3.5
	c-4.8-0.3-11.1,1.6-14.1-0.8c-3.2-2.5-0.8-9.1-1-13.9c-0.2-6.1-0.2-12.2,0-18.3c0.1-3.4-0.5-4.8-4.4-4.8c-3.8,0-4.1,1.5-4.1,4.6
	c0.1,9.7-0.1,19.5,0.1,29.2c0.1,3.3-1,4-4.1,4c-12.6,0.1-12.6,0.2-12.6-12.6c0-7.1-0.2-14.3,0.1-21.4c0.2-3.8-1.7-3.6-4.4-3.7
	c-3-0.1-4.4,0.5-4.2,3.9C405.8,527.1,405.6,532.2,405.5,537.2C405.6,537.2,405.5,537.2,405.5,537.2z"/>
<path :style="{fill:'rgba(255, 255, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M317.9,536.7c0-4.9-0.2-9.8,0.1-14.6c0.2-3.5-1.2-4-4.2-3.9c-2.7,0.1-4.5,0-4.4,3.7
	c0.3,9.9-0.1,19.8,0.2,29.7c0.1,3.5-1.1,4.5-4.4,4.2c-2.8-0.3-5.6-0.4-8.3,0c-5.5,0.9-7-1.8-7.8-6.7c-2.4-14.3,4.7-30,17.6-37.9
	c13.3-8.2,29.9-7.3,42.5,2.3c11.7,9,17.4,25.4,13.5,39.1c-0.6,2.1-1.4,3.3-3.9,3.2c-4.2-0.2-8.4-0.2-12.5,0c-2.9,0.2-3.4-1-3.4-3.6
	c0.1-10.1-0.1-20.2,0.1-30.3c0.1-3.6-1.4-3.9-4.2-3.8c-2.8,0-4.4,0.2-4.3,3.8c0.3,10.1,0,20.2,0.1,30.3c0,2.6-0.5,3.6-3.4,3.7
	c-13.3,0.4-13.3,0.5-13.3-12.9C317.9,540.9,317.9,538.8,317.9,536.7z"/>
<path :style="{fill:'rgba(126, 66, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M447.1,121.6c-12.3,0-24.7-0.1-37,0.1c-3.5,0.1-4.3-0.8-3.6-4.4c2.9-16.4,17-29.7,35.4-33
	c15.4-2.7,33.2,6.1,41.4,20.4c0.3,0.5,0.5,0.9,0.7,1.4c2.5,4.6,6,10.2,3.9,14.5c-1.5,3.1-8.3,0.9-12.7,1
	C465.8,121.7,456.5,121.6,447.1,121.6z"/>
<path :style="{fill:'rgba(126, 66, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M322,121.6c-12.3,0-24.7-0.2-37,0.1c-4.1,0.1-4.4-1.2-3.8-4.7c3-16.4,17.4-29.8,35.6-32.7
	c15.5-2.5,33.3,6.4,41.3,20.7c2.2,3.9,3.8,8.1,4.8,12.6c0.7,3.3-0.1,4.2-3.4,4.1C347,121.5,334.5,121.6,322,121.6z"/>
<path :style="{fill:'rgba(196, 142, 73, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M443.1,419.1c0,26.3,0,52.5,0,78.8c0,2.9-0.6,4.2-3.9,2.8c-11.3-4.6-22.7-4.5-34,0
	c-2.8,1.1-3.7,0.5-3.8-2.4c-0.3-5.3,0.6-9.8,4.2-14.4c14.9-18.7,26.4-39.5,35.3-61.8c0.4-1.1,0.9-2.1,1.4-3.2
	C442.5,419,442.8,419.1,443.1,419.1z"/>
<path :style="{fill:'rgba(101, 68, 43, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M426.5,290.1c-2.1-5.8-3.9-11.8-7.3-17.1c-4.7-10.7-10.8-20.5-19.6-28.3c-9.3-8.2-19.3-8.7-28.6-1
	c-9.5,7.8-16,18-20.8,29.2c0,0,0,0,0,0c-3.3,5.3-5.1,11.3-7.3,17.1c-0.7,2,0,3.1,1.5,4.4c22.1,19.9,58.3,19.9,80.6,0
	C426.4,293.2,427.2,292.1,426.5,290.1z M379.2,272.3c0.6-0.1,1.1-0.2,1.7,0C380.4,272.3,379.8,272.3,379.2,272.3z"/>
<path :style="{fill:'rgba(255, 255, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M416.8,129.9c1.2,0,2.4,0.1,3.6,0c4.1-0.5,6.6,0.4,8.5,5c3.2,7.9,10.1,11.8,18.7,11.7
	c8.7-0.2,15.4-4.5,18.7-12.6c1.4-3.4,3.1-4.3,6.4-4.1c4.3,0.3,8.7,0.2,13,0c2.2-0.1,3,0.4,2.6,2.9c-2.5,13.3-9.7,23.1-21.4,29.8
	c-1.9,1.1-3.3,0.4-4.8-0.3c-14.3-6.4-29.3-10.7-44.8-13c-4-0.6-6.3-2.1-7.5-5.8c-0.2-0.5-0.5-0.9-0.7-1.4
	C403.9,130.4,404.2,129.9,416.8,129.9z"/>
<path :style="{fill:'rgba(255, 255, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M291.6,129.9c1.4,0,2.8,0.2,4.2,0c3.9-0.5,6,0.7,7.6,4.6c3.4,8.1,10.3,12.2,19,12
	c8.7-0.2,15.3-4.6,18.6-12.7c1.3-3.1,2.7-4.2,6-4c4.3,0.3,8.7,0.2,13,0c2.5-0.1,4.1,0.3,3,3.4c-0.5,1.4-0.8,3-1.1,4.5
	c-1.6,7.3-5.3,11.3-13.4,12.2c-14,1.7-27.4,6.1-40.3,11.9c-2.8,1.3-5,1.2-7.6-0.5c-10.4-6.6-16.8-15.8-19.4-27.8
	c-0.6-2.9-0.1-4.1,3.1-3.8C286.7,130.1,289.2,129.9,291.6,129.9z"/>
<path :style="{fill:'rgba(126, 66, 14, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M46.5,491.7c0.4-10.6,5.4-20.5,14.7-28.3c2.5-2.1,3.7-1.9,4.1,1.8c2.3,21,8,41.1,16.1,60.6
	c0.6,1.4,1.6,3.5,1.1,4.3c-1,1.6-3.1,0.6-4.8,0.2C58.8,526.1,46.3,511.3,46.5,491.7z"/>
<path style="transform:scale(0.2)" d="M384.8,159.1c7.5,0.7,14.6,2.3,21.3,6.1c2.7,1.5,2.2,2.6,0.4,4.1c-5.2,4.3-10.2,8.8-15.6,12.9c-4,3.1-8.6,2.9-12.6-0.1
	c-5.2-4-10.1-8.3-15.2-12.6c-2-1.7-2.6-2.8,0.4-4.5C370.2,161.3,377.3,159.6,384.8,159.1z"/>

	<path :style="{fill:'rgba(101, 68, 43, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M320.3,46.6c-14.1,2.7-28.1,5.4-42.2,8.1c-13.4,2.3-26.9,4.3-40.3,6.9c-17.4,3.5-23.7,15-17.8,31.8
		c0,0,0,0,0,0c1.9,6.3,3.8,12.6,5.7,18.9c1.1,4.1,2.2,8.3,3.5,12.4c0.6,2,0.6,5.2,3.5,4.9c2.7-0.3,6.3-0.2,7.6-3.4
		c4.5-11.1,11.4-20.8,17.9-30.7c0,0,0,0,0,0c0,0,0,0,0,0c17.6-19.9,38.6-34.5,63.8-43.1c1.3-0.4,4.3,0,3.6-2.6
		C325,47.8,323,46.1,320.3,46.6z"/>
	<path :style="{fill:'rgba(101, 68, 43, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M532.8,61c-10.4-1.5-20.8-3.4-31.2-5.2v0c-0.8-0.3-1.6-0.8-2.4-0.9c-14.8-2.6-29.7-5.1-44.5-7.7
		c-5.7-1-5.9-0.9-8.8,4.5c24.5,8.6,46,21.8,63,41.6c7.4,9.2,14,19,18.8,29.8c0.5,1.1,1,2.6,1.9,3c3.7,1.8,7.9,3.9,11.8,3.2
		c3.2-0.6,2.7-5.1,3.8-7.9c0,0,0,0,0,0c0,0,0,0,0,0c2.1-7.3,4.3-14.6,6.4-21.9c0.2-1.4,0.6-2.6,1.1-3.9
		C560.5,77.1,552.9,64,532.8,61z M507,59.2c0.7,0.3,1.1,0.8,1.5,1.5C508,60.1,507.5,59.6,507,59.2z M542.1,91.3
		c-0.7-0.7-1.4-1.3-2.2-1.9C540.9,89.6,541.7,90.2,542.1,91.3z M530.8,82.1c-0.8-0.7-1.6-1.4-2.4-2.1
		C529.5,80.4,530.3,81,530.8,82.1z M520.3,72.3c-1.1-1-2.1-1.9-3.2-2.9C519,69.6,520,70.4,520.3,72.3z"/>

<path style="transform:scale(0.2)" d="M324.3,129.2c1.7,0,3.5-0.2,5.1,0c3.3,0.4,8.2-1.8,9.5,1.4c1.5,3.8-3.4,6-6,8.3c-6.7,6.1-16.3,5.7-22.4-0.5
	c-1.6-1.6-3.6-3.2-2.8-5.8c0.9-3.1,3.5-3.4,6.2-3.4C317.4,129.2,320.8,129.2,324.3,129.2z"/>
<path style="transform:scale(0.2)" d="M448.7,127.8c1.5,0,3.1-0.2,4.6,0c3.8,0.5,9.6-2.1,10.9,1.7c1.4,4.1-4.3,6.9-7.4,9.5c-6.8,5.8-18.2,4.7-23.2-1.8
	c-1.5-1.9-3.3-4.1-2.3-6.7c1-2.7,3.8-2.7,6.3-2.7C441.3,127.8,445,127.8,448.7,127.8z"/>

	<path :style="{fill:'rgba(159, 86, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M516.8,229.9c-3.3-11.8-9-22.2-17.1-31.2c-16.8-18.7-38.3-29.5-62.1-36.4
		c-8.9-2.6-17.8-4.8-28.3-5.4c2.8,2.2,4.7,3.4,6.3,4.9c3.2,3,3.7,7.3,0.5,10.1c-8.1,6.8-15.3,14.8-25,19.4c-2.2,1-2.2,2.3-2.2,4
		c0,10.4,0.1,20.9,0,31.3c0,2.4,0.5,3.8,3.1,4.4c6.3,1.5,11.2,5.3,15.8,9.7c6.6,6.3,11.4,14,16,21.8c5.4,10.7,9.9,21.7,13.4,33.1
		c2.7,9,11.8,12.3,20,7.5c2.8-1.6,5.6-3.5,8.1-5.6c17.1-14.5,31.6-31.5,44.8-49.6c1.4-1.7,2.6-3.7,4.3-5.2
		C518.2,239,518.1,234.8,516.8,229.9z"/>
	<path :style="{fill:'rgba(159, 86, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M372.6,232.4C372.6,232.4,372.6,232.4,372.6,232.4c2.5-2,7.9,0.4,7.9-5.4c0-10.6,0-21.2,0-31.8
		c0-1.5,0.3-2.8-1.8-3.8c-9.9-4.3-16.9-12.6-25.1-19.2c-3.7-3-3.1-7.6,0.6-10.9c1.6-1.4,3.3-2.5,5-3.8c-33.8,4.2-64.5,14.7-88.4,40
		c-7.7,8.1-13.9,17.3-16.6,28.4c-3.2,6.3-3.4,11.8,1.6,17.9c9.2,11.3,18,23,27.9,33.7c8.6,9.3,17.2,18.7,28.3,25.3
		c8.7,5.2,17.5,1.7,20.7-7.9c1.7-5.1,3.2-10.3,5.3-15.2C345.6,261.2,354.5,243.4,372.6,232.4z"/>
	<path :style="{fill:'rgba(159, 86, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M399.2,398c-1.5,1.5-2.7,3.5-5.3,3c-9.2,4.4-18.5,8.3-28,11.8c-10.8,1.3-10.8,1.3-10.3,11.5
		c0,4.2,0,8.4,0,12.5c-0.1,1.9-0.2,3.8-0.2,5.7c0,18.6,0.6,37.2-0.4,55.7c-0.3,6.6,0.4,11.2,5.6,15c0.1,0.1,0.2,0.3,0.3,0.4
		c1.4,2.2,2.7,1.8,4.5,0.2c27.1-23.1,48-50.8,62.6-83.3c3-7.6,5.9-15.1,8.9-22.7c0-2-0.1-4.1,1.9-5.5c3-8.3,5.2-16.7,7-25.3
		c2-10,3.7-20.1,4.5-31.2C424.9,379.4,424.9,379.4,399.2,398z M389.1,410.4c0-0.1-0.1-0.1-0.1-0.2c0.1,0,0.3-0.1,0.4-0.1
		C389.3,410.2,389.2,410.3,389.1,410.4z M409.9,410.6c0-0.1-0.1-0.1-0.1-0.2c0.1,0,0.2,0,0.3,0C410,410.5,409.9,410.5,409.9,410.6z
		 M430.9,410.4c-0.1,0.1-0.1,0.1-0.2,0.2c0-0.1-0.1-0.1-0.1-0.2C430.7,410.4,430.8,410.4,430.9,410.4z"/>
	<path :style="{fill:'rgba(159, 86, 23, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M296.8,497.4c0-4.2,0-8.3,0-12.5c0-1.7,0-3.5,0-5.2c0.1-20.5,0.1-41,0.2-61.6c0-2.5-0.9-3.4-3-3.8
		c-20.6-4.4-38.7-13.9-55.5-26.3c-0.5-0.5-1-1-1.5-1.4c-42.6-36.8-59.6-82.8-49.8-138.4c0.7-4.1,1.7-8.2,2.8-13.2
		c-51.8,28.8-86.6,70.5-106.2,125.3c2.1,0.6,3.2-0.5,4.4-0.9c30.1-11.5,59.8-10.7,89.2,2.4c19.3,8.6,34.7,22.2,47.7,38.6
		c7,10.5,13.3,21.4,17.7,33.3c6.9,18.8,9,38.3,8.2,58.2c-0.2,1-0.5,2.1-0.5,3c-1.3,8.2-2.6,16.5-4.9,24.5c-0.4,1.3,0,2.4,0.6,3.5
		c4.6,9.5,6.4,19.4,3.9,29.8c-0.6,2.5,0,3.3,2.7,3.3c8.3-0.2,16.7-0.2,25,0c3.6,0.1,4.3-0.9,3.6-4.3c-3.2-16.4,1.9-30.2,13.7-41.6
		c2.6-2.5,3.9-4.5,2.5-8C296.9,500.6,297,498.9,296.8,497.4z"/>
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
                                    <button :style="{background:'rgba('+getterBullDogBg1+')'}" @click="ShowElement(getterBullDogBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBullDogBg2+')'}" @click="ShowElement1(getterBullDogBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBullDogBg3+')'}" @click="ShowElement2(getterBullDogBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBullDogBg4+')'}" @click="ShowElement3(getterBullDogBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBullDogBg5+')'}" @click="ShowElement4(getterBullDogBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var BullDog= [
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
            var randomNumber = BullDog[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BullDog[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BullDog'){
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
                getterBullDogBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BullDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBullDogBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BullDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBullDogBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BullDog') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBullDogBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBullDogBg5: {
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
                            name:'BullDog',
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