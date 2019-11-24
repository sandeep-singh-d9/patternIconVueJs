<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M395.8,187.2c7.2,14.9,12.2,30,12.6,46.2c0.7,30.7-10.4,56.7-32.8,77.4c-9.5,8.7-15.5,19-20.1,30.6
	c-7.4,18.7-11.6,38.5-18.8,57.3c-4.5,12-9.7,23.6-17.8,33.7c-23.6,29.6-68.1,30.4-92.6,1.7c-11.3-13.2-17.4-29-22.7-45.1
	s-9.2-32.6-15.5-48.3c-4.4-11-10.1-20.8-19.1-29.1c-23.1-21.2-35-47.6-33.7-79.3c0.7-16.1,5.6-30.9,13.7-44.7
	c1.1-1.9,2.2-3.7,3.2-5.4c-0.7-1.3-1.2-0.5-1.5-0.2c-26.4,25.3-57.6,29.9-91.1,19c-33.3-10.8-51.3-35.8-57.5-69.6
	C-10.6,61.8,36.6,3.4,107.2,1.1c52.5-1.7,93.8,19.9,126,60.3c14.3,17.9,26.1,37.2,31.3,59.9c1,4.4,3.9,2.9,6.4,3.2
	c2.9,0.4,4.6-0.2,5.6-3.6C288.6,78.3,314,45,351.4,22.3C393.7-3.3,438.9-8.1,484,14.4c40.2,20,57.2,54.9,56.7,98.9
	c-0.1,14.1-2.9,27.7-8.5,40.7c-22.1,51-88.6,68.7-133.2,35.5C398,188.7,396.9,188,395.8,187.2z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M185.9,188.5c-11.5,17.2-18.1,35.8-16,56.8c1.4,13.9,5.2,27.5,15.7,36.5
	c23.3,19.9,32.2,46.1,36.8,74.9c2,12.6,4.6,25.1,6.9,37.6c-1,1.2-2.1,2.4-3.6,4c-3.8-6.9-5.5-14-7.7-20.9
	c-5.3-16.7-9.7-33.6-16.7-49.7c-5.9-13.4-15.1-23.8-25.5-34.1c-26.8-26.2-30.7-66.8-10.9-98.9c0.1-0.2,0.2-0.4,0.3-0.5
	c2.8-3.8,4.9-9.2,8.7-11.1C178.2,180.9,181.5,187.3,185.9,188.5z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M442.5,134.2c-15.5,0.1-25.2-14.4-19.5-29c0.7-1.7,2-2.4,3.3-3.3c6.8-4.8,9.9-11.2,8.5-19.6
	c-0.2-1.4-1.5-2.8,1.5-3.2c17.8-2,37.1,20.4,32.7,38.1C466.2,127.9,456.7,134.1,442.5,134.2z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M107.4,79.1c-2.6,9.4-0.6,16.8,6.8,21.9c3.4,2.3,4.8,5.2,4.9,8.9c0.7,15.3-5,25.3-21.7,24.2
	C88,133.5,79,131.3,74.2,122s-2.5-18.4,2.8-26.6C83.9,84.6,94.2,79.8,107.4,79.1z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M276.7,377.4c-18.1-0.9-33.7,5.4-47.4,16.9c-3-1.6-2.5-4.8-3.1-7.3c-3.9-17.7-5.9-35.8-10.4-53.4
	c-4.3-16.8-11.5-31.9-24.7-43.5c-28.7-25-28.4-66.6-10.7-95.7c1.4-2.4,2.8-4.9,5.6-6c27.7,9.9,57.3,1.4,72-20.7
	c4.4-6.6,7.1-13.8,8.2-21.6c0.4-3,1.2-5,5.1-4.9c3.9,0.2,3.8,2.6,4.2,5.1c3.1,23.2,22.9,42.4,46.9,45.3c4.4,0.5,8.7,0.8,13.1,1.2
	c2.3,2.8,3,6.2,2.7,9.5c-0.9,10.2-1.1,20.5-4.1,30.4c-1.8,2.9-4.9,2.2-7.5,2.7c-15.2,2.7-27.5,16-28,29.8
	c-0.2,6.5,2.1,11.1,7.3,14.6c1.8,1.2,3.9,2,4.8,4.3c-0.1,3.6-2.7,6.1-4.4,9c-14,23.8-22.5,49.4-26.7,76.6
	C279.2,372.5,279,375.4,276.7,377.4z M276.7,437.4c-12.8,1.4-24-1.9-33.8-10.4c-2-1.7-3.5-3.6-4.3-6.2c-1.8-2.3-3.8-4.4-3.6-7.6
	c10.9-11.9,23.5-19.8,40.4-18.4c2,1.8,1.8,4.3,1.9,6.7c0.2,9.7-0.4,19.5,1,29.2C278.7,433,278.5,435.5,276.7,437.4z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M395.8,161c-11.4-20.3-14.1-40-4.2-60.2c4-8.2,11-14.2,20.3-16.5c1.9-0.5,4.5-1.1,5.4,1.1
	c0.8,2-1.8,2.6-3.1,3.7c-9.3,8.2-10.3,19.1-8.6,30.2c2.3,14.8,2.3,17.3-4.8,30C398.9,152.5,397.8,156.1,395.8,161z"/>
<path :style="{fill:'rgba(255, 182, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M333,233.7c0.9-8.5,1.1-17.1,3-25.3c1.2-5.4-1-10.2-0.5-15.3c10.7-1.4,21.3-3.4,29.9-10.7
	c1.9-1.6,3.3-1.5,5,0.4c15.2,17.8,23.2,38.1,20.8,61.6c-2.3,22.6-12.5,41-29.9,55.9c-12,10.2-18.2,24.6-23.2,39.2
	c-5.6,16.4-10.5,33-15.8,49.5c-0.9,3-2.2,5.9-3.5,9.5c-12.1-12-25.8-19.1-42-20.9c3.6-26.1,10.4-51.2,22.6-74.7
	c3.3-6.3,7.3-12.3,10.9-18.4c2.6-2.1,5.4-0.5,8-0.1c17.8,3.1,34.5-7.1,39.9-24.6c3.6-11.8-1.6-20.4-13.7-23.1
	C340.5,235.7,336.3,236.4,333,233.7z M276.7,437.4c-1.7-14.2-1.1-28.4-1.3-42.6c13.5,1.1,23.8,8,32.8,17.5c1.6,1.7,2.1,3,0.6,5.1
	C301.1,428.9,290.9,436.3,276.7,437.4z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M384.5,36c-26.4,11.3-47.8,28.9-64.7,52.1c-0.8,1.1-1.5,2.5-3.2,1.9c-3.4-5.4-2.2-9.8,1.8-14.8
	c16-20.1,34.4-37,58.4-47.1c2-0.8,4.1-1.5,6.4-2.4C383.5,29.3,384,32.7,384.5,36z"/>
<path style="fill:#FCFBFB;transform:scale(0.2)" d="M475.9,30c-0.4,0.8-0.9,1.3-1.9,1.1c-26.2-7.1-52.2-6.3-78.2,1.3c-1,0.3-1.9,0.4-2.9,0.6
	c-2.7-8.4-1.8-10.2,5.9-11.9c24.5-5.4,48.5-4.3,71.8,5.5C472.6,27.3,475,27.5,475.9,30z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color6'" d="M217.9,99.5c-9.9,12.6-23.3,18.8-38.6,21.5c-3.2,0.6-5.6,0-6.8-3.8c-5.5-16.7-14-31.7-27.6-43.2
	c-1.9-1.6-1.6-2.8-0.6-4.5c8-12.3,11.8-25.9,13.7-40.3c0.4-2.7,1.2-3.8,3.7-1.8c25.1,17,42.6,40.3,55.5,67.3
	C217.9,96.3,218,97.9,217.9,99.5z M136.2,19.5c0.2,0,0.4-0.1,0.6-0.1c16.2,4.6,13.4,1.4,11,17.6c-1.5,9.7-5.1,18.8-10.3,27.2
	c-1.5,2.4-2.7,3.1-5.7,2.1c-18.1-6.6-35.9-5.9-52.8,3.9c-2.9,1.7-4,0.8-5.4-1.8c-4.9-9.3-12.7-15.6-22-20.2
	c8.8-9.7,20.2-15.5,32.1-20c15.6-5.9,31.7-9.4,48.5-8.4C133.5,19.9,134.9,20,136.2,19.5z M475.9,30c9,2.4,15.3,8.6,22.6,14.9
	c-14.2,4.4-24.8,12.1-31.4,24.8c-1.5,2.9-3.2,1.3-4.9,0.3c-17-9.5-34.7-10.5-52.9-3.8c-3.2,1.2-4.4-0.5-5.7-2.6
	c-5.9-9.4-9.2-19.7-10.7-30.7c1.1-2.3,3.4-2.6,5.4-3.2C424.2,22.9,450.1,22.1,475.9,30z M384.5,36c1.9,11,5.6,21.3,10.9,31.1
	c1.4,3.1-1.2,3.9-3,4.7c-18.2,8.1-30.3,22.3-39.6,39.3c-1.4,2.6-2.1,6.4-6.6,5.2c-13.2-5-22.7-14.3-29.7-26.4
	c16.3-22.2,35.7-40.8,61.3-52.2C379.9,36.9,381.8,35.1,384.5,36z M228.7,170.3c-12.7,8.2-33.7,6.6-43.4-3c-3.7-3.6-5.3-8.1-5.5-12.8
	c-0.4-7.2-1.3-14.2-2.8-21.2c-0.5-2.4-0.6-3.5,2.4-3.8c15.7-2,29.2-8.7,40.9-19.2c3.1,0.1,3.7,2.7,4.4,4.9
	c5.1,16.6,6.5,33.6,5.7,50.8C230.3,167.5,229.8,169,228.7,170.3z M330.6,175c-25.2-0.2-39.3-18.8-39.6-39.6c0-1.2,0-2.4,0.9-3.3
	c2.1,1.2,1.3,3,1.2,4.7c0.6-7.3,4.7-13.3,7.8-19.5c3.2-6.5,5.6-13.5,10.9-18.8c7.7,12.3,18.9,20.5,32,26.3c1.5,1.8,1.2,3.8,0.4,5.7
	c-5.5,13.8-9.1,28.1-12.3,42.5C331.7,173.8,331.1,174.4,330.6,175z M512.8,129.6c-7.3-4.2-14.7-7.9-23.3-8.5c-2.9-0.2-3.2-1.9-3-4
	c1.3-14.1-3.3-26.2-12-37.1c-1.6-2-1.4-3.8-0.3-6c6-11,15.2-17.6,27.1-20.8c3.4-0.9,5.4,0.7,7,3.1c3.8,6.1,7.8,12,9.3,19.2
	c4.2,15.4,3.9,30.9,0.4,46.3C517.3,124.9,517.1,128.8,512.8,129.6z M45.5,55.2c10.1,3.1,16.6,10.4,21.9,19.2c1.3,2.2,0.8,4-0.7,6
	c-8.8,10.6-13,22.6-11.8,36.4c0.1,1.7,0.5,3.9-2.2,4.1c-12.3,1.2-22.7,6.6-32.3,15.6c-1.5-12-5.9-22.9-3-34.5c3,2.6,0.2,5.5,0.6,7.3
	c2.5-18.2,10.8-34.9,22.4-50C41.9,57.6,43.2,55.8,45.5,55.2z M32.2,160.6c-0.1-0.2-0.2-0.4-0.3-0.5c-9.8-13.3-9.1-16.9,5.2-25.5
	c4.3-2.6,9.1-4.1,14-5c4-0.7,7.3-0.3,10.1,3.9C66,140.7,73,146,81.5,148.4c4.4,1.2,4.1,3,2.2,6.2c-3.7,6.3-5.5,13.2-6.1,20.4
	c-3,2.5-6.4,1.8-9.7,1.3C54.6,174.3,42.5,169.5,32.2,160.6z M463.8,176.1c-0.4-7.7-2.2-14.9-6.1-21.6c-1.9-3.3-2-4.9,2.2-6.2
	c8.8-2.7,15.9-8.1,20.9-15.9c1.6-2.5,3.7-3.2,6.6-3c8.2,0.6,15.4,3.5,21.9,8.4c1.6,2.2,0.7,4.2-0.4,6.1c-9.5,16.1-23.6,26.2-41,32.2
	C466.5,176.6,465.1,177,463.8,176.1z M405,165.4c-0.5-5.5,1.9-10.1,4.8-14.4c4.5-6.8,6.6-7.2,13.8-3.9c5.3,2.5,10.8,4.3,16.7,3.8
	c4-0.3,6.3,1.3,8.2,4.5c4.2,7.1,7.2,14.6,6.8,23.1c-6.8,4.2-14.1,2.8-21.3,1.5c-8.8-1.6-17-5-24.6-9.8
	C407.3,169,406,167.4,405,165.4z M132.8,153.5c-9.7,9.6-20.7,16.9-34.4,19.6c-4,0.8-8.1,1.3-12.2,1.9c0.4-5.2,1.9-10,4.1-14.7
	c2.8-5.8,5.7-10.5,13.7-9.4c4.8,0.6,10.1-1,14-4c6-4.5,9.3-1.2,12.7,3C131.7,150.9,132.2,152.3,132.8,153.5z M137.8,144.9
	c-7.3-5-7.5-10.9-3.9-18.6c4.3-9.2,3.4-19-0.2-28.4c-1.4-3.7-3.3-7.2-7.1-9.2c-1.3-0.7-3.3-1.4-2.4-3.4c0.8-1.7,2.8-1.5,4.3-1.1
	c5.4,1.4,10.7,3.1,14.1,8.2c8.8,16.3,7.3,32.7-0.1,49C141.6,143.1,140.6,145.3,137.8,144.9z"/>
<path style="fill:#FAF9F9;transform:scale(0.2)" d="M136.2,19.5c-8,1-16.1,1.9-24.1,3c-21.1,3-40.3,10.3-56.9,24c-1.1,0.9-2.2,1.7-3.7,1.7
	c-2.6-1-5.2-2-8.4-3.3c4.7-5.3,10.3-9.2,16.2-12.7C81,19.6,104.4,15.8,129,18.7C131.5,19.1,133.9,19.3,136.2,19.5z"/>
<path style="fill:#F8F7F7;transform:scale(0.2)" d="M45.5,55.2c-13.4,16.3-22.6,34.7-28,55.3c0-2.8,0-5.6,0-8.4c1.2-15.1,5.3-29.3,13.3-42.2
	C35.9,51.6,36.1,51.6,45.5,55.2z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M228.7,170.3c0.4-17.5-0.1-35-4.9-52c-0.8-2.8-1.1-5.9-3.6-8c4.3-4.7,8.3-9.6,11.3-15.3
	c1.6-3.1,3-2.7,4.4,0.1c7.8,14.7,14.4,29.7,13.2,47C248.4,154.2,239.8,166.4,228.7,170.3z M330.6,175c1.2-14.5,5.9-28.1,10.8-41.7
	c1-2.8,2.5-5.4,2.4-8.5c6,2.2,12.1,3.9,18.4,4.7c1.8,0.2,3.1,0.3,2.5,2.8c-2,7.7-2.3,15.6-3.2,23.5c-1.3,11-10.8,18.6-22.4,19.2
	C336.2,175.2,333.4,175,330.6,175z M217.9,99.5c-9.7-21.9-23.3-41-40.4-57.8c-5.1-5-11.3-8.7-15.9-14.2c11.1,3.1,20.5,9.3,29.7,16
	c13.3,9.7,24.2,21.7,34,34.9c2.1,2.9,2.5,5.1,1,8.1C223.9,91.2,221.7,95.9,217.9,99.5z M132.8,153.5c3.6,4.7,3.9,10.2,3.7,15.8
	c-0.1,2.2-0.9,3.8-2.6,5.1c-12.7,9.3-26.5,14.9-42.6,14c-3.7-0.2-5-2-5.2-5.1c-0.2-2.8,0-5.6,0.1-8.3c2.2-1.9,5.1-2.2,7.8-2.6
	c12.7-2.1,23.9-7.1,33.2-16.1C128.8,154.8,130.2,152.8,132.8,153.5z M346.2,116.3c3.1-0.1,3.7-2.6,4.7-4.7
	c8.4-16.3,19.8-29.8,36-39.1c2.9-1.6,7.5-0.9,8.5-5.5c3.2,2.9,3.6,5-0.2,8.3c-12.6,10.7-20.5,24.7-25.6,40.2
	c-1.8,5.4-4.7,6.5-9.3,5.1C355.5,119.3,350.4,119.2,346.2,116.3z M463.8,176.1c14-4.6,26.7-11.3,36.3-22.7c3.9-4.6,8.5-9,9.1-15.6
	c8.8,7,8.9,8.8,3,18.2c-9.3,14.8-22.1,24.7-38.8,29.6c-9.2,2.7-9.8,2.4-9.7-7.2C463.7,177.7,463.7,176.9,463.8,176.1z M137.8,144.9
	c5.5-6,6.8-13.5,8.4-21.2c2.2-11-1.3-21.1-3.6-31.5c9.4,7.1,11.8,17.7,12.9,28.4c1.3,12.9-1.7,25.2-7.8,36.8c-0.5,1-0.9,2.3-2.7,2.7
	C142.8,155,141.4,149.4,137.8,144.9z M405,165.4c10.9,8.1,23.2,12.9,36.6,14.2c4.4,0.4,9-0.7,13.5-1c0.1,9.4-0.2,9.7-9.5,9.7
	c-14.7,0-27.2-5.9-38.9-14.4C403.3,171.4,404.6,168.5,405,165.4z M32.2,160.6c9.2,4.3,17.6,10.3,27.9,12.4c5.8,1.2,11.5,2.4,17.5,2
	c0.4,14,0.4,14-13,9.5S40.2,172.4,32.2,160.6z M512.8,129.6c5.6-7.9,4.9-17.3,6-26.2c1.2-9.3-1.3-18.6-1.1-27.9
	c4,6.4,5.2,13.8,5.6,20.9c0.9,13.1,1.5,26.4-2.7,39.7C517.8,133.8,515.3,131.7,512.8,129.6z"/>
<path style="fill:#F8F8F7;transform:scale(0.2)" d="M311.8,98.5c-4.3,8.7-8.7,17.3-12.8,26.1c-2.2,4.6-4,9.3-6.1,14.3c-1.6-2.5-0.3-4.8-0.9-6.8
	c2-14.5,7.8-27.6,15.6-40.6C309.2,94.1,310.5,96.3,311.8,98.5z"/>
<path style="fill:#D9CDC8;transform:scale(0.2)" d="M163.8,163.1c1.1,6-3.5,7.4-5.9,9.9C159.7,170.1,161.4,167.3,163.8,163.1z"/>
<path style="fill:#E5DCD1;transform:scale(0.2)" d="M235,413.2c1.7,2.3,2.9,4.8,3.6,7.6C236.1,418.9,232.3,417.6,235,413.2z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M333,233.7c3.9,0.4,7.9,0.7,11.8,1.3c12.8,2.2,18.7,12.2,14.9,24.7c-6.3,20.5-24.4,30.3-46.6,25.2
	c-1-0.2-1.9-0.4-2.9-0.6c-16.5-6.4-15.9-21.5-9.2-32.4C308.2,240,318.7,233.4,333,233.7z"/>
<path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M218.2,286.4c-18.1,0.1-35.6-17.1-35.2-34.5c0.2-6.6,3-12,9-14.4c20.3-8.1,43-4.3,53.2,19.1
	c5.7,13.1,0.3,24-13.4,27.9C227.3,285.8,222.8,286.5,218.2,286.4z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M324.8,277.7c-3.4-0.4-7.6-0.3-11.7-1.8c-6.9-2.5-9.3-6.9-7.3-14c3.3-11.6,14.2-19.7,26.3-19.4
	c4,0.1,8,0.3,11.9,1.1c6.2,1.2,8.7,4.7,8.1,10.5C351.1,266.4,337.8,278.1,324.8,277.7z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" d="M211.3,242.3c12.3,0.1,22.3,7.2,26.3,18.9c2.6,7.6,0.2,12.3-7.3,14.9c-16.9,5.7-32.3-1.8-37.8-18.2
	c-2.8-8.3,0.1-13.1,8.7-14.4C204.6,242.8,208,242.6,211.3,242.3z"/>
<path :style="{fill:'rgba(21, 20, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M212.3,247.1c9,0.1,16.3,5.3,19.2,13.8c1.9,5.5,0.2,9-5.3,10.9c-12.4,4.1-23.6-1.3-27.7-13.3
	c-2-6.1,0.1-9.6,6.4-10.6C207.4,247.5,209.9,247.3,212.3,247.1z M325,274c-2.6-0.3-5.8-0.3-8.9-1.4c-5.3-1.9-7.1-5.3-5.6-10.7
	c2.6-8.9,10.9-15.1,20.1-14.8c3,0.1,6.1,0.3,9.1,0.8c4.7,0.9,6.6,3.6,6.2,8C345.1,265.3,334.9,274.3,325,274z"/>
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
                                    <button :style="{background:'rgba('+getterAriesBg1+')'}" @click="ShowElement(getterAriesBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAriesBg2+')'}" @click="ShowElement1(getterAriesBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAriesBg3+')'}" @click="ShowElement2(getterAriesBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAriesBg4+')'}" @click="ShowElement3(getterAriesBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterAriesBg5+')'}" @click="ShowElement4(getterAriesBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterAriesBg6+')'}" @click="ShowElement5(getterAriesBg6)" :class="this.ValueId+'_color6btn'"></button>
                                    <!-- <button :style="{backgroundColor:'rgba('+getterAriesBg7+')'}" @click="ShowElement6(getterAriesBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Aries= [
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
            var randomNumber = Aries[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Aries[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Aries'){
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
                getterAriesBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Aries') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAriesBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Aries') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAriesBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Aries') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAriesBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterAriesBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAriesBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterAriesBg7: {
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
                            name:'Aries',
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