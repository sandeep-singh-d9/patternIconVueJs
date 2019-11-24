<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#B7781C;transform:scale(0.2)" :class="ValueId+'_color2'" d="M398.2,149.3c-0.1,1.2,0.5,1.6,1.7,2c18.4,6.9,36.8,13.6,55.1,20.8c14.4,5.6,23.1,16.5,26.8,31.4
	c2.5,10.1,0.9,19.8-3,29.2c-1.1,2.7-2.2,5.4-3.2,8.1c-1.8,4.9-5.4,6.8-10.2,5.2c-2-0.7-3.9-1.6-5.8-2.4c-1.4,0.7-2.6-0.1-3.8-0.6
	c-25.8-9.6-51.6-19.3-77.3-29c-12-4.5-24.1-8.9-36-13.6c-1.4-0.5-3-0.8-3.9-2.2c0.1-3.2,1.6-5.9,2.7-8.7
	c7.2-17.3,16.7-33.3,28.7-47.7c0.4-0.5,0.9-0.9,1.4-1.2c3.7,1.3,7.4,2.6,11.2,3.9c0.5,0.2,1.2,0.2,1.7,0.3c3.2,0.5,6.1,2.2,9.2,3.1
	C394.9,148.6,396.4,149.5,398.2,149.3z"/>
<path style="fill:#D49A33;transform:scale(0.2)" :class="ValueId+'_color5'" d="M459.5,243.7c-10.3-3.8-20.7-7.7-31-11.5c-20.8-7.8-41.5-15.6-62.3-23.4c-9.3-3.5-18.7-6.6-27.7-10.7
	c-0.8-1.2-2.2-1.5-3.4-1.9c-16.3-6.1-32.6-12.2-48.8-18.3c-1.2-0.5-2.5-1.2-3.8-0.2c-3.3,9.4-5.6,19.1-7.2,28.9
	c-2,12.6-3.1,25.3-2.5,38.1c0.5,10.1,1.6,20.2,3.9,30.1c1.8,7.9,4.3,15.6,7.4,23.1c4.4,10.5,9.8,20.2,16.8,29.2
	c4.9,6.2,10.6,11.6,16.8,16.5l0,0l0,0c1,0.8,1.9,1.9,3.3,2c9.5,0.7,19,0.3,28.4-1.7c14.1-3.1,27.3-8.2,39.6-16
	c9-5.8,17.5-12.1,25.4-19.3c7.3-6.7,13.8-14,19.8-21.8c8.4-10.9,15.5-22.6,21.4-35.1l0,0l0,0C456.8,249,458.2,246.4,459.5,243.7z"/>
<path style="fill:#986213;transform:scale(0.2)" :class="ValueId+'_color6'" d="M338.5,198.1c-5.8-1.6-11.3-4-17-6.1c-12.4-4.5-24.7-9.2-37-13.8c-0.7-0.2-1.4-0.3-2.1-0.5
	c-2.8-1.8-6.2-2-9-4.2c-2.6-2-2.9-4.7-2-7.1c3.2-8.6,5.4-17.6,11.3-25.1c8-10.2,18.3-15.7,30.9-17.3c9.1-1.2,17.5,1.4,25.8,4.5
	c9.8,3.7,19.6,7.3,29.4,11c0.8,0.3,1.6,0.8,2.4,1.3c-2.2,4.4-5.8,7.8-8.6,11.8c-5.8,8.2-10.9,16.8-15.5,25.8
	C343.9,184.8,341.4,191.5,338.5,198.1z M398.2,149.3c-0.5,0.3-0.6,1.1-1.5,0.7c-4.2-1.6-8.7-2.7-12.6-5.1c1.3-5,3.9-9.5,6.1-14.2
	c2-4.2,4.4-8.2,6.7-12.2c1.9-3.3,4.2-4.3,7.8-3.1c2.4,0.7,4.8,1.5,7,2.5c3.3,1.4,4.4,5.4,2,8.3C407.7,133.4,402.8,141.2,398.2,149.3
	z M390.3,194c0,4.1-2.9,7.1-7.2,7.1c-3.2,0-6.1-3-6.1-6.4c0-3.8,2.9-7.1,6.1-7.1C387.1,187.6,390.3,190.4,390.3,194z M453,227
	c-3.8-0.1-6.7-3-6.6-6.9c0.1-3.6,3.2-6.5,6.8-6.4c3.6,0.1,6.5,3.2,6.4,6.8C459.6,224.2,456.8,227,453,227z M374.6,164.1
	c3.3,0,6.4,3.1,6.4,6.2c0,3.7-3.4,7.3-6.9,7.2c-3.4-0.1-6.4-3.4-6.3-6.9C367.9,167.1,371.1,164.1,374.6,164.1z M450.1,197
	c-0.1,3.5-3.1,6.6-6.3,6.5c-3.2-0.1-6.7-3.4-6.7-6.4c0-3.7,3.3-7.1,6.8-7.1C447.7,190.1,450.2,193,450.1,197z M416.2,184
	c0,3.6-3,6.7-6.3,6.6c-3.4-0.1-7-3.7-6.9-6.8c0.2-3.6,3.1-6.4,6.7-6.4C413.4,177.4,416.2,180.2,416.2,184z M425.5,208
	c0,3.7-2.9,6.1-6.9,6.1c-3.3-0.1-6-3-6-6.4c0-3.9,2.7-6.5,6.8-6.5C423,201.1,425.5,203.9,425.5,208z"/>
<path style="fill:#B7781C;transform:scale(0.2)" :class="ValueId+'_color2'" d="M114.7,83.3c1.9-2.4,3.8-4.9,5.7-7.3c4.6,1.1,8.6,3.8,12.9,5.6c3.9,1.6,7.7,1.8,11.6,0.3
	c5.6-2.2,8.9-6.4,9.3-12.4c0.4-6.2-2.2-11-7.7-14.3c-1.6-1-4.4-0.8-4.3-3.8c2.5-2.4,5-4.9,7.5-7.3c1.7-0.4,2.4,1.1,3.4,1.9
	c5.1,4.7,12,5.2,18.4,1.4c5.2-3.1,7.7-9.7,6.1-16c-0.5-1.8-2-3.6-0.8-5.7c7.5-4.1,15.5-6.3,24-6c11.9,0.3,20.5,6.3,26.7,16.1
	c3.2,5,5.3,10.5,6.8,16.2c-0.6,1.6-2.2,1.5-3.4,2c-6.5,2.6-10.5,9.3-9.6,16c0.9,6.9,6.2,12.2,13.3,13.1c1.2,0.2,2.5-0.1,3.4,1.1
	c-0.1,3.8-0.1,7.5-0.2,11.3c-1.7,0.9-3.1-0.2-4.6-0.8c-8.3-3.4-17-0.3-20.3,7.3c-3.3,7.7,0.2,16,8.5,19.8c3.2,1.5,6.3,3,9.6,4.2
	c1,0.4,2.3,0.6,2.2,2.1c-0.6,2.8-1.1,5.6-1.7,8.4c-1.6,0.7-2.9-0.2-4.3-0.8c-3.4-1.5-6.8-3.1-10.3-4.6c-7.8-3.4-16.1-0.6-20.1,6.6
	c-3.4,6.1-1.2,14.8,5.3,19.3c5.4,3.7,11.6,5.9,17.6,8.3c1.2,0.5,2.8,0.6,3.4,2.1c-1,3.1-2.1,6.2-3.1,9.3c-1.4,0.3-2.3-0.7-3.3-1.4
	c-5.5-3.5-11.5-6.2-17.6-8.2c-8-2.6-16.5,1.2-19.2,8.1c-3.1,7.9,0.4,16.2,8.6,19.8c6,2.7,11.8,6.1,18.4,7.5c2.3,0.5,2.9,1.7,1.7,3.7
	c-0.4,0.7-0.7,1.6-1.1,2.4c-0.8,1.9-1.6,3.9-2.5,5.8c-3.7-1.1-6.6-3.9-10.2-5.2c-4.1-1.5-8-3.6-12-5.3c-7.4-3.1-15.9,0.2-19.1,7.2
	c-3.4,7.5-0.5,16,6.9,19.4c6.9,3.2,13.6,7,21.1,8.8c0.5,0.1,0.9,0.4,1.2,0.8c-1,2.3-2.1,4.6-3.1,6.9c-2.5,1.9-5.1,0.7-7.7,0.2
	c-5-2.7-10.3-5.1-15.6-7.2c-9.4-3.8-19.5,2.6-20.5,12.7c-0.1,0.9,0,1.7-0.1,2.6c-0.3,1.7-1.7,2.4-3,3.1c-6.1,3.3-12,6.7-17.6,10.8
	c-0.9,0.7-1.9,1.9-3.2,0.5c-1.7-5.3-5.5-8.7-10.4-10.9c-3.7-1.7-7.4-3.4-11.2-4.9c-2.3-3.6-3.1-7.3-1.5-11.4
	c5.4,2.3,10.5,5,15.9,7.3c2.4,1,4.9,1.9,7.5,2.3c6.8,0.8,14-3.4,16-9.3c2.4-7.2-0.2-15-6.7-18.5c-5.3-2.8-10.8-5.3-16.4-7.4
	c-6.2-2.4-11.8-0.9-16.4,3.9c-0.8,0.8-1.4,1.7-2.3,2.4c-1.9,0.7-2.1-0.9-2.3-2c-2-8.3-4-16.6-6.3-24.9c-0.3-1.1-0.3-2.2,0.8-3
	c2.1-1,4.4-0.8,6.5-1.7c5.8-2.3,9.1-6.5,9.5-12.7c0.3-6.1-2.1-11.2-7.7-13.9c-7.3-3.5-14.4-7.5-22.5-9.2c-0.4-0.2-0.6-0.5-0.8-0.9
	c1.7-3.6,3.4-7.2,5.1-10.9c6.4,4.5,13.6,7.6,20.8,10.6c5.8,2.4,11.4,2.1,16.4-2.3c6.8-6,6.9-16.1,0.1-22c-5.7-4.9-12.8-7.1-19.6-9.8
	c-1.5-0.6-3.2-0.5-4.4-1.9c1.7-2.8,3.3-5.6,5-8.5c1.2-0.5,2.2,0,3.2,0.7c4.5,2.9,9.6,4.8,14.5,7c3.9,1.7,8.1,2.5,12.4,1
	c6-2.1,9.8-5.9,10.5-12.4c0.7-6.4-2.5-12-8.3-15.1c-3.5-1.8-7.3-3.3-10.9-5C117,85.5,115.3,85,114.7,83.3z"/>
<path style="fill:#388D3C;transform:scale(0.2)"  :class="ValueId+'_color4'" d="M51.6,115.4c-0.4,1.3,0.3,2.5,0.8,3.6c5.1,10.5,7.8,21.8,10.4,33c7.4,31.9,11.1,64.3,13.9,96.9
	c2.3,26.6,3.7,53.3,4.7,80c0,1-0.1,2-0.2,3c-2.5-1.1-5-2.3-7.5-3.4c-15.1-7.4-21.1-20.9-24-36.3c-3.3-17-2.4-34.1-1.2-51.2
	c1.6-23.1,4.2-46.1,4.6-69.2c0.3-15.3-1.2-30.5-3.2-45.6c-0.1-0.5-0.1-1-0.5-1.4c-1.1-6.5-2.6-12.9-4.8-19.2
	C47.5,108.5,49.6,111.9,51.6,115.4z M82,332.2c0.9-2.1,2.5-3.7,3.9-5.4c14.1-16.1,29.5-30.9,46.6-43.7c9.9-7.4,20.4-13.8,31.9-18.6
	c10.9-4.6,21.9-7.3,33.8-6.2c13.6,1.2,24.4,7.8,33.4,17.9c1.7,1.9,2.9,4.4,5.3,5.8c5.3,7.8,9.2,16.3,12.6,25.2
	c-1.7,0.2-2.1-1-2.8-1.8c-7-8.3-14-16.6-23.2-22.7c-12.5-8.3-25.3-8.4-38.4-1.8c-10,5.1-18.4,12.5-26.8,19.8
	c-10.4,9-20.3,18.6-32,25.9c-6.8,4.2-13.9,7.2-21.8,8.8c-5.5,1.1-10.9,0.6-16.2-0.8C86,334.4,84,333.3,82,332.2z"/>
<path style="fill:#4CAE50;transform:scale(0.2)" :class="ValueId+'_color3'" d="M98.9,242.6c0.4,3.5,0.9,7.1,1.3,10.6c1.4,2.2,1.2,4.8,1.3,7.2c0.6,8.3,0.9,16.6,0.7,25.4
	c5.5-5.2,10.9-9.7,16.5-14.1c1.1-0.9,2.1-2.2,3.9-2c7.3-5.2,15.1-9.8,22.9-14.1c2.7-2.5,6.1-3.8,9.4-4.9c7.7-2.6,15.5-4.7,23.6-5
	c1.4-0.1,2.7-0.1,3.9,0.7c2.4,0.1,4.9,0.2,7.3,0.3c20.1,3.4,34.2,15.4,45.1,31.9c0.7,1,1.2,2.2,1.8,3.2c-2.6,0.3-3.3-1.9-4.5-3.3
	c-5-6.1-10.8-11.1-17.8-14.7c-12.9-6.5-26.3-6.1-39.8-2.1c-16,4.7-29.9,13.2-43,23.2c-17.4,13.3-33.1,28.6-47.4,45.3
	c-0.7,0.8-1.3,1.5-2.3,1.9c-0.2-0.1-0.5-0.2-0.7-0.3c-0.9-1.6-0.7-3.4-0.8-5.1c-1.5-39.9-4-79.7-9-119.3c-3-23.6-6.8-47.1-13.4-69.9
	c-1.7-6-3.1-12.1-6.2-17.6c-0.7-1.3-1.8-2.8-0.2-4.4c7.7,10.8,13.8,22.5,19.7,34.3c0.8,1.7,1.7,3.3,2.6,5l0.2,0.1
	c2.3,3.1,3.6,6.8,5.1,10.3c3.5,8.4,6.6,16.9,9.1,25.6c0.3,0.9,0.7,1.9,0.1,2.9c2.4,9.9,4.9,19.8,7.3,29.7
	C98.2,229.5,99.3,236,98.9,242.6z M49.5,124.8c2.4,3.3,2.1,7.3,2.6,11.1c3.2,22,2.2,44,0.5,66.1c-1.5,20.4-3.9,40.7-4.1,61.2
	c-0.1,14.1,0.3,28.3,5.8,41.6c3.9,9.6,9.3,17.9,18.9,22.8c0.3,0.2,0.4,0.6,0.7,0.9c-17.9-8.9-33.7-20.1-42.1-39.3
	c-5.6-12.9-6.1-26.4-4.5-40.1c2-16.6,6.8-32.5,11.2-48.5c5.8-20.9,11.8-41.9,11.6-63.9C50,132.8,49.7,128.8,49.5,124.8z M88.4,334.5
	c5.1,0.1,10.1,1,15.2,0.1c10.6-1.8,19.7-6.7,28.3-12.9c11.9-8.6,22.2-19,33.4-28.3c9.3-7.7,18.9-15.1,31.3-17.6
	c9.6-1.9,18.4,0.2,26.7,5.5c9,5.7,16,13.4,22.3,21.8c0.5,0.7,1.1,1.3,1.1,2.3c-6-5.3-11.8-10.8-18.4-15.2
	c-14.8-9.9-28.1-9.3-41.6,2.1c-7.4,6.2-13.5,13.6-20.1,20.6c-8.6,9.1-17.7,17.7-29.6,22.6C120.7,342.2,104.5,340.7,88.4,334.5z"/>
<path style="fill:#FEC007;transform:scale(0.2)" :class="ValueId+'_color1'" d="M207.6,208.3c0.2-0.7,0.3-1.5,0.7-2.1c1.1-2,0.6-2.6-1.7-3.1c-7.8-1.6-15.1-5-21.6-9.2
	c-7.8-5-8.8-12.2-5.7-19.8c2.6-6.3,9.7-11.8,20.1-8.4c7.4,2.4,14.9,5.2,20.9,10.7c8.9,10.3,2.7,24.7-8.6,26.6
	C208.7,203.5,209.3,206.8,207.6,208.3z M114.7,83.3c4.5,2.1,9.1,4.1,13.6,6.2c9,4.1,12.9,13,9.3,21.4c-3.5,8.2-13.6,11.9-22.4,8
	c-6.1-2.7-12.4-5.2-18-9c-4-5-6.1-10.6-4.1-17C95.9,84.2,105.2,80,114.7,83.3z M223.4,167.1c-7.9-2.5-15.6-5.4-22.4-10.1
	c-6.9-4.8-8.2-14.1-4.8-20.1c4.5-8,13.3-10.7,21.2-7.1c4.8,2.1,9.6,4.3,14.4,6.4c7.2,4.1,10.6,11.1,8.9,18.3
	c-1.7,7.2-7.6,11.7-15.9,12.3C224.3,166.9,223.9,167,223.4,167.1z M92.2,118.4c9,1.6,17.2,5.3,24.4,10.6c5.9,4.4,7.3,13.1,3.9,19.6
	c-3.4,6.4-12.1,10.2-19,7.7c-6.2-2.3-12.2-5.3-18.1-8.2c-1.9-0.9-3.4-2.5-4.6-4.3C71.5,132,77.9,119.8,92.2,118.4z M193,239.9
	c-2.7,0-5.1-0.6-7.6-1.7c-5-2.4-10-4.5-15-6.8c-8.9-4.1-11.1-13.2-7.5-21.1c3.3-7,11.5-11.7,20.5-7.6c4.6,2.1,9.1,4.2,13.7,6.1
	c3,1.3,5.7,3,8,5.4c2.3,4.5,3.8,9.2,2.1,14.3C205,235.4,200,238.9,193,239.9z M233.5,127.8c-4.5-2-9.1-3.9-13.6-5.9
	c-9-4.1-10.8-13.8-7.5-20.9c3.5-7.4,11.7-11.7,20.4-7.9c1.7,0.7,3.4,1.5,5.2,2.2c7.4,2.7,12,7.6,12.3,15.7
	c0.2,7.8-5.5,14.4-13.3,15.8C235.8,127,234.4,126.7,233.5,127.8z M142.3,51.3c0.7,1.6,2.3,1.8,3.6,2.4c11.3,5.3,13,20,3,27.2
	c-4.6,3.3-9.9,4.3-15.2,1.8c-4.5-2.1-9.4-3.5-13.3-6.8c-4.4-5.8-5.8-12-2.3-18.9c3.5-6.7,12.1-10,19.2-7.4
	C139,50.3,140.4,51.5,142.3,51.3z M238.2,84c-12,1-19.2-9.4-17.7-18.5c1.2-7,5.8-11.7,13.9-13.7c4.1,0.3,8.2,0.6,11.5,3.5
	c4.9,4.1,7.1,9.4,5.9,15.6c-1.1,5.9-4.7,10-10.5,12.1C240.4,83.4,239.3,83.7,238.2,84z M176.9,25.6c1.1,4.3,3.1,8.3,1.8,13.1
	c-1.6,6.2-5.6,9.7-11.5,11.5c-5.3,1.6-10.1,0.7-14.2-3c-1.1-1-2.1-2.1-3.2-3.1c-3.2-6-3.9-12.2,0.1-18c5.8-8.5,17.2-9.4,24.7-2.2
	C175.3,24.4,175.8,25.4,176.9,25.6z M143.4,175.4c-2.1-0.9-4-2-6.2-2.8c-8.4-3-12-13-9.4-19.9c3.5-9.3,11.9-13.6,21-10.1
	c6.4,2.4,12.9,4.8,18.5,9c6.5,5,7.8,13.9,4.5,19.9c-4.2,7.7-13.4,10.6-20.9,7.3C148.4,177.7,145.9,176.5,143.4,175.4z M173.8,110
	c5.1,2.4,10.8,4,13.9,9.5c3,5.2,3.2,10.7,0.5,15.7c-3.2,5.8-8.7,9.3-15.6,8.2c-8.8-1.4-17-5-23.9-10.8c-6.3-5.4-7.1-13.7-2.5-20.6
	c4.1-6.1,12.6-8.5,19.6-5.5C168.5,107.6,171.1,108.8,173.8,110z M176.4,102.2c-2.2-1-4.3-1.9-6.5-2.9c-6.9-3.2-11.2-10.7-9.9-17.5
	c1.4-7.3,7.8-12.7,15.7-13.2c0.6,0,1.3,0,1.8,0.1c8.5,2.8,17.1,5.9,24.2,11.4c5.1,3.9,6.2,14,2.9,18.9c-4.9,7.4-12.7,10.1-20.1,6.8
	C181.9,104.7,179.2,103.4,176.4,102.2z M127.3,211.9c-2.3-1-4.6-2.1-6.8-3.1c-7-3.2-11.2-10.6-10-17.4c1.3-7.3,7.6-12.7,15.6-13.3
	c0.7-0.1,1.5-0.1,2.2,0.2c8.2,2.9,16.6,5.8,23.6,11c5.4,4.1,6.7,14,3.3,19.1c-4.9,7.5-12.8,10.2-20.4,6.8
	C132.3,214.2,129.8,213,127.3,211.9z M98.9,242.6c-1.1-6.4-2.1-12.9-3.2-19.3c4.7-8.1,12.9-10.8,21.4-7c4.3,1.9,8.6,4,13,5.8
	c9,3.9,12.7,13,9,21.6c-3.4,7.8-12,11.9-21.8,8C111,249.2,104.5,246.7,98.9,242.6z M214.3,58.1c-3.7,8.1-13.4,11.8-21.5,7.7
	c-8.7-4.4-11.4-13.3-7.6-21.2c3.9-8.3,12.6-11.5,20.9-7.9C214.5,40.4,218,49.3,214.3,58.1z M88.4,193.6
	c-4.2-13.1-9.4-25.9-14.3-38.8c9.3,1,17.2,5.9,25.2,10.1c5.6,2.9,7.9,11.3,6.1,17.2c-1.9,6.4-7.6,10.9-14.3,11.4
	C90.2,193.5,89.3,193.5,88.4,193.6z M122.7,269.8c-7.1,5.6-14.2,11.3-21.3,18.4c0.4-12.2-0.4-23.5-1.1-34.9
	c7.9,2.3,15.7,4.7,20.9,11.7C122.3,266.4,123.1,267.9,122.7,269.8z M182.6,246.5c-13.1,0-25.2,4-37,9.2c-1.7-5.3,1.4-12.4,6.7-15.5
	c5.2-3,10.5-3.5,16-0.8C173,241.9,178.3,243.3,182.6,246.5z"/>
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
                                    <button :style="{background:'rgba('+getterHarvestBg1+')'}" @click="ShowElement(getterHarvestBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHarvestBg2+')'}" @click="ShowElement1(getterHarvestBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHarvestBg3+')'}" @click="ShowElement2(getterHarvestBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHarvestBg4+')'}" @click="ShowElement3(getterHarvestBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHarvestBg5+')'}" @click="ShowElement4(getterHarvestBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHarvestBg6+')'}" @click="ShowElement5(getterHarvestBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterHarvestBg7+')'}" @click="ShowElement6(getterHarvestBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Harvest= [
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
            var randomNumber = Harvest[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Harvest[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Harvest'){
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
                getterHarvestBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Harvest') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHarvestBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Harvest') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHarvestBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Harvest') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHarvestBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterHarvestBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHarvestBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterHarvestBg7: {
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
                            name:'Harvest',
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