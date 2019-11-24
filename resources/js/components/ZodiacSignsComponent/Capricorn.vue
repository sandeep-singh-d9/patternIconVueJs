<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M73.1,354.3c0-15,4.8-28.7,12.3-41.3c14.5-24.3,31.9-46.3,55.1-63c3.3-2.4,2.1-4.2,0.9-6.7
	c-20.5-44.6-41.1-89.2-61.5-133.9c-6.8-14.9-14.3-29.6-17.3-46C61.1,55.1,62.9,48,70,42.8c6.9-5.1,14.2-4.3,21.4-0.8
	c11.1,5.5,20.1,13.8,29.1,22c44,39.5,87.4,79.7,131.6,119c5.4,4.8,9.5,6.1,16.4,4.5c21.3-4.9,42.7-4.2,63.9,1c3.2,0.8,5,0.2,7.4-2.1
	c17-15.6,34.2-31,51.4-46.4c31.2-28,61.6-56.8,93.3-84.1c5.7-4.9,11.6-9.7,18.3-13.2c7.5-3.9,15-5.3,22.5-0.1s9,12.6,7.7,21
	c-1.4,9.5-5.1,18.3-9,26.9c-23,50.7-46.2,101.4-69.5,151.9c-2,4.2-1.3,5.9,2.2,8.8c27.8,22.3,50.3,48.7,62.5,82.8
	c3.7,10.4,4.5,21.2,2.1,32.1c-6.3,29.4-34.3,43.3-61.7,30.6c-11.9-5.5-21.3-14.1-28.7-24.7c-2.6-3.7-3.6-3-5.7,0.3
	c-6.3,9.8-14.6,17.6-24.6,23.5c-3.5,2.1-4.9,4.6-5.3,8.7c-3.9,36.9-12.3,72.5-31.1,104.9c-6.5,11.3-14.3,21.7-24.3,30.2
	c-27.7,23.7-61.7,22.6-87.8-2.8c-18.8-18.3-29.9-41.2-38.2-65.6c-7.5-22.1-12-44.8-14.1-68.1c-0.3-3.3-1.6-5.1-4.4-6.8
	c-10.3-6.1-19.1-14-25.4-24.2c-2.5-4-3.6-3-5.8,0.1c-6,8.4-13.2,15.8-22.2,21.1c-15.3,9-31.2,11.8-47.4,2.6
	C79.1,386.8,73.3,371.9,73.1,354.3z"/>
<path :style="{fill:'rgba(255, 182, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M259.1,519.3c23.1-7,33.2-24.3,38-46.6c3.7-17,6-34,7-51.4c0.7-13.3,1.1-26.7,0.6-40
	c-0.6-15.2-2-30.4-2.2-45.6c-0.1-6.4,2.1-10.8,7.6-14.3c19.6-12.6,37.5-27.2,50.4-47c0.6-0.9,0.9-2.1,1.4-3.1
	c10.4,6,21.1,11.4,33.2,13.2c2,0.3,2.7,1.4,3,3.5c3,20.5,9.7,39.8,18.4,58.4c1.4,3,1.2,5.4-0.1,8.2c-6.6,13.9-17,23.9-30.7,30.5
	c-4,2-5.5,4.3-5.9,8.7c-2.4,30.2-8.2,59.7-20.1,87.8c-6.9,16.2-15.5,31.2-28.4,43.4C306.5,548.6,278.5,542.5,259.1,519.3z
	 M503.7,367.8c-5.3,13.5-17.4,19.6-31.3,15.6s-23.2-13.7-30.6-25.4c-13-20.5-21.2-43-26.2-66.7c-0.9-4.2-0.9-7,4.6-8.1
	c8.4-1.7,14.8-7.2,20.7-13.2c2.3-0.8,3.7,0.9,4.9,2.3c21,22.7,39.9,46.8,51.5,75.8C500,354.5,502.1,361.1,503.7,367.8z M160.7,275.8
	c5.1,3.5,10.4,6.8,16.6,8c3.5,0.7,3.8,2.2,3.3,5.2c-2.9,17.9-9,34.8-16.5,51.1c-5.3,11.5-11.5,22.4-20.7,31.3
	c-8.3,8-17.7,13.8-29.9,12.9c-6.6-0.5-12.3-2.9-16.4-8.4c6.2-24.7,20.9-45,34.9-65.5C140.4,298,150.2,286.6,160.7,275.8z"/>
<path style="fill:#FDFDFC;transform:scale(0.2)" d="M190,320c2,7.1,0.7,14.4,2,21.6c2.7,15.1,7,29.3,21,38.1c5.4,3.4,11.4,5.6,17.9,5.3l0.5-0.1l0.3,0.4
	c2,3.2-0.1,6.4-0.1,9.6c0.2,17.2-0.3,34.3,0.2,51.5c0.3,9.8,1.5,19.6,3.8,29.2c0.4,1.7,1.1,3.3,0,5c-11.8-28.3-17.4-58-19.9-88.4
	c-0.3-3.4-1.5-5-4.4-6.4c-14-6.8-24.9-16.8-31.8-31c-1.4-3-1.7-5.5-0.3-8.7C183.1,337.6,186.4,328.7,190,320z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M190,320c3.1-10.4,6.2-20.7,7.5-31.5c0.5-3.8,2.9-3.8,5.5-4.4c24.1-5.6,43.3-18.5,56.5-39.5
	c7-11.2,10.2-23.4,7.4-36.6c-0.6-2.7,0.6-3.5,2.7-3.9c18.8-3.9,37.7-3.9,56.5,0.1c1.8,0.4,2.9,0.9,2.5,3.5
	c-3.8,24.4,7.8,42.1,25.1,57.2c2.6,2.3,5.4,4.3,8.2,6.5c1.7,3.1-0.8,5.2-2.2,7.2c-8.8,13-20.4,23.3-32.5,33
	c-5.3,4.2-10.8,8.2-16.6,11.8c-4.2,2.6-6.2,6.1-6.3,11c-0.3,14.3,1,28.6,1.7,42.9c0.7,13.9,0.9,27.8,0,41.8
	c-0.7,11.4-0.8,22.8-2.9,34.1c-2.4,12.7-4.3,25.7-9.7,37.6c-5.6,12.6-14,22.7-27.4,27.7c-2.1,0.8-4.3,1.8-6.7,0.9
	c-10.7-11.2-17.6-24.6-23.6-38.7c-2.1-9.6-4.8-19.1-5.2-29c-0.8-21.8-1.8-43.7,0.7-65.5c1.5-2.8,3.7-1.1,5.5-0.8
	c7.1,1.1,14.3,1.3,21.3-0.4c11.9-3,16.7-11.6,13.1-23.4c-3.2-10.7-16.1-23.5-30-22.4c-4.4,0.4-8.9-0.2-13.3,0.8
	c-12.8,2.9-17.6,11.4-13.1,23.8c2.4,6.8,7.3,11.8,12.4,16.5c1.6,1.5,4.2,2.4,3.3,5.4c-2.2,1.5-4.5,0.7-6.7,0.2
	c-16.7-3.9-25.5-15.7-30.4-31.1C189.9,343.4,188.5,331.8,190,320z M160.7,275.8c-0.9,3.7-3.6,6.3-6.1,8.9
	c-19.8,21.6-36.1,45.5-49.1,71.7c-2.4,4.9-4.4,9.8-5.7,15c-0.4,1.6-0.3,4.1-2.9,4.5c-7.1-8.6-8.5-18.5-6.4-29.1
	c2.7-1.3,2.2-4.2,3.1-6.3c12.4-29,30.6-53.7,55-73.8c0.9-0.8,1.8-1.4,3.1-1.5C154.7,268.8,157.7,272.3,160.7,275.8z M503.7,367.8
	c-4.2-3.2-3.7-8.5-5.3-12.8c-8.5-23.8-22-44.6-38-63.8c-6.2-7.4-12.2-14.9-19.5-21.2c0.4-0.7,0.8-1.3,1.1-2c2.2-5.3,4.8-4.2,8.4-1.1
	c5.7,4.9,11.3,10,16.5,15.4c12.1,12.8,22.8,26.8,31,42.4C505.2,338.3,508.5,352.6,503.7,367.8z M151.7,265.3
	c-6,5.7-12.2,11.3-18,17.3c-17.2,17.4-30.1,37.7-39.4,60.3c-0.7,1.8-1.4,3.7-2.5,5.2c-0.6,0.8-0.8-0.8-1.2-1.2
	c0.7-7.4,3.3-14.3,6.7-20.7c12.4-23.3,28.7-43.3,49.3-59.8C147.8,265.3,149.3,261.7,151.7,265.3z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M199.9,222.6c11.6-9.2,22.1-19.4,28.3-33.2c0.6-1.4,1.3-3,3.4-1.4c5.6,4.4,11.2,8.7,15,14.9
	c5.8,9.3,5.4,18.7,0.7,28.4c-7.4,15.2-19.2,25.4-34.5,31.9c-1.5-0.8-2.2-2.2-2.6-3.7c-3.4-11.5-7.1-23-10.2-34.6
	C199.7,224.2,199.9,223.4,199.9,222.6z M439.1,159.2c8,4.3,15.8,9.3,24.8,11.6c2.4,0.6,2.4,1.9,1.5,3.9
	c-6.6,14.4-13.3,28.8-19.8,43.2c-1.5,3.4-4.9,3.6-7.2,3.4c-12.9-1-25-4.7-35.1-13.4c-0.9-1.8,0.4-2.9,1.3-4.1
	c10.3-14.1,20.6-28.1,31.1-42C436.5,160.7,437.4,159.4,439.1,159.2z M392.7,221.6c11.8,7.7,24.2,14.1,38.7,15.1c4.1,0.3,5,2,3.1,5.9
	c-3.6,7.2-5.8,15.3-12.6,20.3c-10.7,7.9-22.6,7.2-34.5,3.2c-7.2-2.5-14.4-5.5-20-10.9c-0.7-1.8,0.5-2.9,1.4-4.1
	c6.7-9,13.8-17.8,20.4-26.9C390.1,223,391.1,221.8,392.7,221.6z M195.4,204.3c-5.8-18.9-11.6-37.9-17.5-56.8c-0.8-2.7-1-5.7-3.4-7.7
	c0.9-1.5,1.8-1,2.8-0.1c11.9,10.7,23.8,21.4,35.7,32.1c2.4,2.2,2.1,4.6,1.3,7.3C211.1,189.7,203.9,197.4,195.4,204.3z M480.6,104.9
	c4.1,2.6,8,5.4,12.2,7.8c2.3,1.3,2.5,2.4,1.5,4.6c-5.4,11.4-10.7,22.7-16,34.2c-1.2,2.7-2.9,4.3-5.8,3.3c-7-2.6-14.5-4.4-19.8-10.2
	c-1.3-1.6-0.4-2.9,0.5-4.1c8.4-11.2,16.6-22.6,25.2-33.7C479,105.9,479.7,105.2,480.6,104.9z M516.6,58.3c0.3,9.6-4.8,17.7-7.9,26.3
	c-1.4,3.8-3.3,7.4-4.8,11.1c-1.1,2.6-2.3,3.8-5,1.5c-2.8-2.3-5.9-4.3-8.9-6.4c7.3-9.9,14.8-19.7,22.2-29.5
	C513.3,59.9,514.2,57.8,516.6,58.3z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M129.2,170.2c18.5-5.7,33.5-16.4,45.5-31.5c2.9,0.2,3.5,2.7,4.1,4.8c5.4,18.3,11,36.5,16.5,54.7
	c0.6,1.8,1.1,3.7,0.4,5.6c-12.2,10.9-26.1,17.2-42.8,16.4c-3.5-0.2-5.7-1.3-5.5-4.9c0.2-2.8-3.3-3.8-2.9-6.6
	c-4-10.3-8.6-20.2-12.9-30.3C130.4,175.8,128.7,173.3,129.2,170.2z M104.9,111.7c7.4-4.6,14.5-9.6,20.3-16.2c2-2.3,3.4-2.2,5.6-0.1
	c9.6,9,19.2,18,29.1,26.7c3.3,2.9,3,5.2,0.4,8.1c-10.4,11.6-22.5,20.5-37.8,24.7c-1.5-1-2.2-2.7-2.8-4.3c-4.4-11.1-9-22.2-13.6-33.2
	C105.4,115.5,104.6,113.7,104.9,111.7z M441.2,158.3C429.1,174.7,417,191,405,207.4c-12-6.9-19.6-17.4-24.3-30.2
	c7.4-9,16.6-16,25.2-23.8c5.3-4.8,9.8-10.4,15.6-14.6C426.7,146.7,434.2,152.2,441.2,158.3z M394.5,221.2
	c-8.5,11.3-17.1,22.5-25.6,33.8c-14.4-10.4-25.2-22.9-24.4-42.2c0-1.1-0.2-2.4,0.9-3.2c5.2-6.2,11.6-11.4,17.3-17.1
	c1.2-1.2,2.8-2.2,4.7-1.7c3.9,4.8,6.6,10.3,10.5,15.1C382.9,211.8,388.7,216.4,394.5,221.2z M200.1,222.2c4.9,10.2,6.6,21.5,10.4,32
	c1,2.9,1.7,5.9,2.5,8.8c-13.3,6.2-26.7,9.4-40.1,0.4c-8.5-5.7-10.7-15.4-15-23.7c-1.3-2.5,1.1-2.3,2.4-2.5
	c8.2-1.4,16.2-3.4,23.9-6.6C189.9,228.4,194.6,224.6,200.1,222.2z M480.6,104.9c-5.7,9.5-13,17.9-19.3,26.9
	c-2.9,4.2-6.9,7.7-8.6,12.7c-8-3.3-13-10.1-18.5-16.3c1.8-3.6,5.2-5.7,7.9-8.2c8.2-7.5,16-15.6,24.7-22.6c1-0.8,2-1.8,3.5-1.9
	C473.8,98.6,477.2,101.7,480.6,104.9z M83.6,57.3c6.3,1.5,10.4,6.4,15.2,10c4.7,3.6,8.9,7.9,13.5,11.8c2.4,2,2.9,3.5,0.3,5.9
	c-4.3,3.9-8.4,7.9-13.6,10.6c-2.2-0.6-2.8-2.5-3.6-4.3c-4-9.7-7.6-19.5-11.8-29.1C83,60.6,82.4,58.9,83.6,57.3z M516.6,58.3
	c-7.6,9.9-15.2,19.7-22.8,29.6c-1.1,1.4-1.8,3-3.9,3c-2.8-1.8-5.1-4.2-7.1-6.8c0.2-1.9,1.5-3.1,2.8-4.2c8.7-7.6,16.6-16.2,26.3-22.7
	C514.1,55.4,515.8,55.1,516.6,58.3z"/>
<path style="fill:#FAFAF9;transform:scale(0.2)" d="M83.6,57.3C88.8,70,93.9,82.8,99,95.5c-1.4,1.6-3.3,2.5-5.5,3.3c-5.1-11.2-10.2-22.3-13.6-34.2
	c-0.5-1.8-0.8-3.8-0.8-5.7C79.3,55.5,81.1,55.3,83.6,57.3z"/>
<path style="fill:#F2F0F0;transform:scale(0.2)" d="M421.5,138.8c0.3,1.5-0.6,2.5-1.7,3.4c-12.4,11.4-24.7,22.7-37.1,34.1c-0.5,0.5-1.4,0.6-2,0.9
	c-1.1-2.8-0.5-4.8,2-7c11.5-10,22.8-20.3,34.3-30.5C418.2,138.5,419.4,136.2,421.5,138.8z"/>
<path style="fill:#FAF8F7;transform:scale(0.2)" d="M104.9,111.7c6.7,14,12.5,28.4,17.6,43.1c-2.3,1-3.4-0.2-4.4-2.2c-5.4-11.8-10.7-23.5-16.4-35.2
	C99.7,113.3,102.9,113.1,104.9,111.7z"/>
<path style="fill:#F6F4F3;transform:scale(0.2)" d="M470.3,95.5c-11.8,11.1-23.3,22.6-36.1,32.7c-1.5-1.7-1.6-3,0.3-4.8c10.6-9.5,21.1-19.1,31.5-28.8
	C468.1,92.7,469.2,93.4,470.3,95.5z"/>
<path style="fill:#FAF8F7;transform:scale(0.2)" d="M367.5,190.8c-5.8,5.2-11.6,10.4-17.5,15.5c-1.4,1.2-2.4,3-4.5,3.3c2.5-10.7,11.1-16.6,18.9-22.7
	C367.3,184.7,366.8,189.2,367.5,190.8z"/>
<path style="fill:#F9F5F4;transform:scale(0.2)" d="M512.1,57.1c-9.7,9-19.4,17.9-29.1,26.9c-1.2-0.9-3.2-1.8-1.2-3.5C491.6,72.5,500.1,62.5,512.1,57.1z
	"/>
<path style="fill:#E6DAD3;transform:scale(0.2)" d="M129.2,170.2c5.4,12.7,11.4,25.2,15.2,38.5c-5.6-11.8-11.1-23.6-16.7-35.4
	C126.8,171.4,127.1,170.5,129.2,170.2z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M231.7,385.3c-0.2-0.2-0.5-0.3-0.8-0.3c-6.6-4.6-12.3-9.9-16-17.2c-8.3-16.3-0.9-28.7,17.3-30.4
	c16.1-1.5,29,2.9,37.6,17.2c9.6,15.9,3,30.1-15.3,32.7C246.8,388.4,239.1,388.7,231.7,385.3z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M358,337.4c4.1,0,8.1,0.2,12.1,1.2c11.4,2.9,17.1,11.7,13.4,22.8c-8.2,24.4-28,31.9-50.8,23.4
	c-9.5-3.5-12.8-12.9-9.5-23.2C328,346.2,340.8,337.3,358,337.4z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M246.5,379.6c-12.4,0.3-24.8-10.1-26.4-22.3c-0.6-4.2,0.2-8.2,4.6-9.5c14.8-4.3,28.5-4,37.4,10.4
	c7.3,11.8,3.4,19.8-10.4,21.2C250,379.5,248.2,379.5,246.5,379.6z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M357.4,345.7c3.7,0,7.3,0,10.9,1c6.5,1.8,9.3,5.8,7.1,12.1c-6.9,19.9-21,24.8-39.4,18.3
	c-5.5-1.9-6.9-6.7-5-13.1C334.6,352.5,344.5,345.6,357.4,345.7z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M245.5,376.1c-9.2,0.2-18.4-7.5-19.7-16.6c-0.4-3.1,0.2-6.1,3.5-7.1c11-3.2,21.2-3,27.8,7.7c5.5,8.8,2.5,14.7-7.7,15.8
	C248.1,376.1,246.8,376.1,245.5,376.1z M356.4,349.8c2.7,0,5.5,0,8.2,0.8c4.9,1.4,7,4.3,5.3,9.1c-5.2,14.9-15.7,18.6-29.5,13.7
	c-4.1-1.5-5.2-5-3.7-9.8C339.3,354.9,346.7,349.8,356.4,349.8z"/>
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
                                    <button :style="{background:'rgba('+getterCapricornBg1+')'}" @click="ShowElement(getterCapricornBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCapricornBg2+')'}" @click="ShowElement1(getterCapricornBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCapricornBg3+')'}" @click="ShowElement2(getterCapricornBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCapricornBg4+')'}" @click="ShowElement3(getterCapricornBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCapricornBg5+')'}" @click="ShowElement4(getterCapricornBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCapricornBg6+')'}" @click="ShowElement5(getterCapricornBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterCapricornBg7+')'}" @click="ShowElement6(getterCapricornBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Capricorn= [
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
            var randomNumber = Capricorn[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Capricorn[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Capricorn'){
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
                getterCapricornBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Capricorn') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCapricornBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Capricorn') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCapricornBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Capricorn') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCapricornBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCapricornBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCapricornBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCapricornBg7: {
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
                            name:'Capricorn',
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