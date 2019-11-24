<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.59);">
                  <path style="fill:#DC4A43;transform:scale(0.2)" :class="ValueId+'_color1'" d="M477.5,465.4c-6.5,1.2-12,6.7-13.3,13.3c-0.5,1.5-0.9,3-1.4,4.6c-3.8,12.8,1.5,26.4,12.9,33.1
	c11.4,6.7,25.3,5,34.7-4.2c9.6-9.4,11.4-23.5,4.7-35.1C507.6,464.1,494.4,460,477.5,465.4z M136.8,465.3c-1.5-0.5-3-0.9-4.6-1.4
	c-12.7-3.7-25.9,1.3-32.7,12.4c-7,11.4-5.4,25.7,4,35.2c9.2,9.4,23.2,11.4,34.6,5c13-7.3,17.3-21,12-38
	C148.8,472.1,143.3,466.6,136.8,465.3z M139.1,100.7c-11.2-6.9-25.3-5.4-34.8,3.5c-9.7,9.2-11.9,23.4-5.4,35.1
	c7.2,13,21,17.4,37.9,12c6.6-1.2,12-6.7,13.3-13.3c0.5-1.5,0.9-3,1.4-4.6C155.2,120.8,150.1,107.4,139.1,100.7z M477.4,151.2
	c1.5,0.5,3,0.9,4.6,1.4c12.8,3.8,26.3-1.4,33.1-12.9c6.7-11.3,5-25.4-4.2-34.7c-9.4-9.6-23.5-11.5-35.1-4.7
	c-12.8,7.5-16.8,20.7-11.5,37.6C465.4,144.5,470.9,150,477.4,151.2z M316.6,539.7c-6-4-13-4-19,0c-1.4,0.8-2.8,1.5-4.1,2.3
	c-12.5,6.9-18.2,21.5-13.6,34.8c4.6,13.2,18.9,21.6,32.3,18.9c14.4-2.9,24.3-15,23.7-29.5C335.3,553.3,327.9,545.1,316.6,539.7z
	 M594.7,303.8c-2.5-14.3-14.6-24.6-29-24.3c-13.3,0.3-21.6,7.8-27.1,19.2c-4,6-4,13,0,19c0.7,1.2,1.4,2.4,2,3.6
	c6.7,12.8,21.6,18.8,35.1,14.1C588.6,331,597,317.1,594.7,303.8z M302.1,20.9c-14.3,2.9-24.3,15.1-23.7,29.5
	c0.6,13,8,21.1,19.2,26.5c6,4,13,4,19,0c1.4-0.8,2.8-1.5,4.1-2.3c12.5-6.9,18.2-21.5,13.6-34.8C329.7,26.6,315.4,18.2,302.1,20.9z
	 M73.4,294.7c-6.9-12.5-21.5-18.2-34.8-13.6c-13.2,4.6-21.6,18.8-18.9,32.3c2.8,14.3,15.1,24.3,29.5,23.7c12.9-0.6,21.2-8,26.5-19.2
	c4-6,4-13,0-19C74.9,297.4,74.2,296,73.4,294.7z M215.2,229.5c2.6,3.1,4.3,3.3,7.3,0.2c10.1-10.3,10.2-10.2-0.2-20.3
	c-1.1-1.1-2.3-2-3.5-3.2c-1.3,1.3-2.5,2.3-3.6,3.4c-3.2,3.3-8.7,6.6-8.7,9.9C206.5,222.8,212.3,226,215.2,229.5z M391.7,229.5
	c1.1,1.1,2.3,2.2,3.6,3.4c1.3-1.2,2.5-2.2,3.6-3.3c10.2-10,10.1-9.9,0.4-19.9c-3-3.1-4.8-3.8-7.7-0.1c-2.8,3.6-8.6,6.7-8.6,10
	S388.5,226.2,391.7,229.5z M222.2,385.4c-2.6-2.6-3.8-2.7-6.5-0.1c-11.5,11.4-11.6,11.4,1.1,22c0.7,0.6,1.5,1.2,2.3,1.8
	c0.8-0.7,1.4-1.2,2-1.7C233.7,396.9,233.6,396.8,222.2,385.4z M388.7,388.9c-7,7-6.9,6.9,0,13.9c2.1,2.1,3.9,4.5,6.6,7.7
	c2.7-3.1,4.5-5.4,6.5-7.5c7.1-7.2,7.2-7.2,0-14.3C395.3,382.3,395.3,382.3,388.7,388.9z M185.4,298.1c-12.6,0-12.6,0-12.6,7.4
	c0,11.8,0,11.8,9.3,11.8c9.9,0,9.9,0,9.9-6.5C192,298.1,192,298.1,185.4,298.1z M435.1,298.4c-4.4,1.2-13-6-12.9,5.7
	c0.1,13.3,0,13.3,6.1,13.3c13.1,0,13.1,0,13.1-9.8C440.9,303.3,443.9,296,435.1,298.4z M307.2,422.8c-9.7,0-9.7,0-9.7,9.7
	c0,9.5,0,9.5,9.8,9.5c9.4,0,9.4,0,9.4-9.4C316.7,422.8,316.7,422.8,307.2,422.8z M316.9,186.2c-0.7-12.8-0.2-12.8-6.7-12.8
	c-12.7,0-12.7,0-12.7,7.9c0,11.3,0,11.3,9.8,11.3C311.5,192,317.4,195.3,316.9,186.2z"/>
<path style="fill:#FC6D30;transform:scale(0.2)" :class="ValueId+'_color2'" d="M351.5,339c-5.2-4.9-10.3-10.1-15.3-15.2c-1.2-1.2-3.3-2.2-2.6-4.3c0.9-2.6,3.4-1.4,5.2-1.5
	c3.8-0.2,7.6-0.1,11.4,0c15.1,0,15,0,14.5-15.2c-0.1-3.1-0.9-4.2-4.1-4.1c-7.8,0.2-15.6,0.1-23.4,0c-1.3,0-2.9,0.4-3.6-1.3
	c-0.7-1.6,0.5-2.6,1.5-3.6c3-3,5.9-5.9,8.9-8.9c11-11,10.9-10.9-0.3-21.4c-2.4-2.2-3.6-2-5.7,0.1c-5.1,5.4-10.4,10.5-15.7,15.7
	c-1.2,1.2-2.2,3.3-4.4,2.3c-2.2-1-1.2-3.2-1.3-4.8c-0.1-4,0-8,0-12c0-14.6,0-14.5-14.9-14.2c-3.4,0.1-4.5,0.9-4.4,4.4
	c0.2,7.8,0.1,15.6,0.1,23.4c0,1.1,0.3,2.5-1,3.2c-1.6,0.9-2.6-0.2-3.6-1.2c-3.1-3.1-6.2-6.2-9.3-9.3c-10.6-10.6-10.5-10.5-21,0.3
	c-2.5,2.6-2.1,4,0.2,6.2c4.7,4.4,9.2,8.9,13.6,13.6c1.7,1.8,5.2,3.1,4.1,6c-1.1,3.1-4.6,1.4-6.9,1.5c-6.4,0.2-12.8,0.2-19.2,0
	c-3.4-0.1-4.8,0.5-4.9,4.5c-0.2,14.8-0.3,14.8,14.3,14.8c0.4,0,0.8,0,1.2,0c4.2,0,8.4,0,12.6,0c1.2,0,2.5-0.1,3,1.4
	c0.5,1.4-0.3,2.3-1.2,3.1c-3.2,3.3-6.5,6.5-9.7,9.8c-10.1,10.1-10,10-0.1,20.1c3.1,3.2,4.8,2.7,7.5-0.2c4.4-4.9,9.2-9.4,14-14
	c1.5-1.4,2.5-4.2,5.2-3c2.3,1,1.1,3.6,1.2,5.4c0.2,3.8,0,7.6,0,11.4c0,14.6,0,14.5,14.9,14.2c3.4-0.1,4.4-1,4.3-4.4
	c-0.2-7.8-0.1-15.6,0-23.4c0-1.1-0.3-2.5,1.1-3.2c1.6-0.8,2.6,0.2,3.6,1.2c3.1,3.1,6.2,6.2,9.3,9.3c10.6,10.6,10.5,10.5,21-0.3
	C354.2,342.6,353.9,341.2,351.5,339z M245.6,113.4c0-10.5-9.1-19.6-19.5-19.3c-10.6,0.2-18.8,8.6-18.8,19.2c0,11,8.2,19.2,19.2,19.1
	C237,132.3,245.6,123.7,245.6,113.4z M521.4,227.9c0.2-10.6-8.5-19.3-19.2-19.4c-10.8,0-18.9,8-19.1,18.7
	c-0.2,10.8,8.4,19.6,19,19.6C512.3,246.8,521.2,238.2,521.4,227.9z M112.1,369.8c-10.2,0-19.1,8.9-19.2,19.1
	c-0.1,10.4,8.3,19,18.8,19.3c11.1,0.2,19.4-7.8,19.5-18.8C131.3,378.5,122.7,369.7,112.1,369.8z M387.8,484.3
	c-10.5,0-19,8.4-19.1,18.8c-0.1,10.5,9,19.6,19.4,19.4c10.5-0.1,18.9-8.6,18.9-19.1C407,492.5,398.8,484.3,387.8,484.3z M150.1,138
	c-3.2,5.6-7.7,10.1-13.3,13.3c5.9,6,11.7,12,17.6,17.9c10.8,10.9,10.8,10.8,21.3-0.7c2-2.2,1.9-3.3-0.1-5.3
	C167,154.8,158.6,146.4,150.1,138z M447,176.9c2.2,2,3.3,1.9,5.3-0.1c8.3-8.6,16.8-17.1,25.2-25.6c-5.6-3.2-10-7.7-13.3-13.3
	c-6,5.9-12,11.7-17.9,17.6C435.4,166.4,435.5,166.3,447,176.9z M438.5,448.2c-2,2.2-1.9,3.3,0.1,5.3c8.6,8.3,17.1,16.8,25.6,25.2
	c3.2-5.6,7.6-10.1,13.3-13.3c-5.9-6-11.7-12-17.6-17.9C449,436.6,449,436.7,438.5,448.2z M167.2,439.7c-2.2-2-3.3-1.9-5.3,0.1
	c-8.3,8.6-16.8,17.1-25.2,25.6c5.6,3.2,10.1,7.6,13.3,13.3c6-5.9,12-11.7,17.9-17.6C178.8,450.2,178.8,450.2,167.2,439.7z
	 M312.5,116.5c3.5-0.1,4.3-1.1,4.3-4.4c-0.2-11.7-0.1-23.5-0.2-35.2c-6.3,1.6-12.7,1.6-19,0c0,8.4-0.1,16.7-0.1,25.1
	C297.5,117,297.5,116.8,312.5,116.5z M538.6,298.8c-8.4,0-16.7-0.1-25.1-0.1c-15,0-14.9,0-14.6,15c0.1,3.5,1.1,4.3,4.4,4.3
	c11.7-0.2,23.5-0.1,35.2-0.2C537,311.5,537,305.1,538.6,298.8z M100.8,317.9c15,0,14.9,0,14.6-15c-0.1-3.4-1.1-4.4-4.4-4.3
	c-11.7,0.2-23.5,0.1-35.2,0.2c1.6,6.3,1.6,12.7,0,19C84.1,317.8,92.4,317.9,100.8,317.9z M301.8,500.1c-3.4,0.1-4.4,1.1-4.3,4.4
	c0.2,11.7,0.1,23.5,0.2,35.2c6.3-1.6,12.7-1.6,19,0c0-8.4,0.1-16.7,0.1-25.1C316.7,499.6,316.7,499.8,301.8,500.1z M216.1,280.7
	c5,2.4,10.5,6.5,15.3,5.9c4.7-0.6,4.4-8.4,6.9-12.7c0.6-1.1,2.4-3,0.3-4.1c-5-2.5-10.2-4.5-16.1-7.1c-2,4.7-4.2,9.2-6,13.9
	C216,277.8,213.9,279.7,216.1,280.7z M462.3,234.7c-4.3-1.9-10.1,3.3-15.2,5.3c-1.1,0.4-1.4,1.4-1,2.5c1.9,4.8,3.7,9.7,6,14.3
	c1.4,2.9,3.7,0.3,5.1-0.4c4.3-1.9,9.2-2.8,12.9-6.1C467.2,244.6,467,236.7,462.3,234.7z M158.2,359.7c-4.5,2.6-12.3,2.1-13.1,7.2
	c-0.7,4.5,2.4,11.1,6,14.4c3.6,3.2,8.4-2,12.7-3.3c1.8-0.6,4.6-0.6,4.5-4.1c-1.9-4.5-3.9-9.3-6-14
	C161.1,357.5,159.4,359,158.2,359.7z M446.8,372.2c-0.1,0.4-0.3,0.7-0.4,1.1c-0.7,1.8-0.2,2.9,1.7,3.7c4.3,1.7,8.5,3.5,12.7,5.3
	c1.3,0.5,2.4,0.4,3-0.9c2.1-4.7,4-9.5,6.2-14.7c0.1-1.1-0.7-1.6-1.9-2.2C454.7,356.8,451.6,357.8,446.8,372.2z M328.7,233.9
	c5.1,2.2,10.2,4.4,15.4,6.5c0.4,0.1,1.3-0.2,1.4-0.5c2.3-5.1,4.5-10.2,6.6-15c-0.1-0.7,0-1.3-0.2-1.4c-5.4-2.4-10.9-4.8-16.4-7.1
	c-0.2-0.1-0.7,0.3-0.9,0.6c-2.2,5.1-4.4,10.2-6.5,15.4C328.1,232.8,328.4,233.8,328.7,233.9z M284.8,382.2c-4.8-2-9.5-4-14.3-6
	c-1.3-0.6-1.9,0.2-2.3,1.1c-2,4.8-4.1,9.5-5.9,14.3c-0.9,2.4,1.5,2.6,2.7,2.9c4.9,1.4,10.2,7.2,14.3,4.2c3.9-2.9,4.8-9.7,6.7-14.3
	C286.3,382.9,285.4,382.5,284.8,382.2z M344.2,376.1c-0.7,0.3-1.1,0.4-1.5,0.5c-4.8,2.3-12.5,2.8-13.9,6.9
	c-1.3,3.9,3.1,9.7,5.1,14.7c0.4,0.9,0.7,2.5,2.5,1.7c4.9-2.1,11.5-2.9,14.4-6.6c3.1-4-2.6-9-3.9-13.7
	C346.5,378.2,346.4,375.9,344.2,376.1z M273,239.3c4.4-2.1,9.6-2.9,13.3-6.5c-2.3-5.4-4.3-10.4-6.6-15.3c-1.3-2.6-3.3-0.5-4.5,0.2
	c-4.3,2.4-11.9,1.9-12.5,6.9c-0.5,4.7,3.4,9.9,5.7,14.8C269.6,242,271.6,240,273,239.3z M360,164.1c14,7.6,14.8,7.3,20.4-7.6
	c0.3-0.7,0.7-1.5,0.9-2.2c0.3-0.8,0.2-1.7-0.6-2.1c-5.1-2.3-10.2-4.5-15-6.5c-1.6,0-2,0.8-2.4,1.8c-1.8,4.4-3.6,8.8-5.5,13.2
	C356.9,162.9,358.6,163.3,360,164.1z M255.9,453.5c-4.9-2.1-9.9-4.2-14.9-6.1c-0.5-0.2-1.8,0.2-2,0.7c-2.2,4.9-4.5,9.8-6,14.9
	c-0.7,2.4,2.6,2.8,4.2,3.2c4.5,1.2,9.4,6.7,12.8,3.8c3.8-3.3,4.7-9.9,6.9-15.1C256.5,454.4,256.4,453.6,255.9,453.5z M381.6,463.4
	c-0.2-0.9-0.4-1.3-0.5-1.6c-3.2-14.3-5.9-15.8-19-10.1c-1.1,0.5-2.2,1-3.3,1.5c-0.7,0.3-1.6,0.8-1.3,1.7c2,5.2,3.9,10.5,6.4,15.4
	c1.1,2.1,3.3,0.1,4.7-0.6C373,467.6,378.1,466.9,381.6,463.4z M239.3,345.5c-2.1-5.2-4.2-10.3-6.4-15.4c-0.2-0.4-1-0.8-1.3-0.7
	c-5.2,2.1-10.3,4.2-15.4,6.4c-0.4,0.2-0.8,1-0.7,1.3c2.1,5.2,4.2,10.3,6.4,15.4c0.2,0.4,0.8,0.7,1.3,1c5.3-2.3,10.4-4.5,15.4-6.7
	C238.9,346.7,239.4,345.8,239.3,345.5z M382.9,329.2c-2.3,0.4-2.7,2.6-3.1,4.3c-1.1,4.6-7,9.3-3.7,13.1c3.1,3.6,9.4,4.8,14.5,6.5
	c2.8,0.9,2.8-2.4,3.3-3.9c1.3-4.5,6.9-9.3,3.7-13.1C394.5,332.4,388.1,331.5,382.9,329.2z M378.9,280.7c0.5,1.7,1.3,3.3,2,5
	c0.5,1.1,1.1,2,2.7,1.3c4.7-2.1,9.6-3.9,14.3-6.1c2.6-1.2,0.5-3.2-0.1-4.5c-2.1-4.5-2.9-9.6-6.5-13.5c-5.5,2.4-11.6,3.7-15.4,7.2
	C373.2,272.6,377.8,277.1,378.9,280.7z M164.3,238.8c-4.5-1.3-9.5-6.7-13.3-3.5c-3.6,3.1-4.5,9.5-6.5,14.5c-0.2,0.4,0.1,1.4,0.5,1.5
	c5.1,2.2,10.2,4.4,15,6.4c1.3,0.2,1.9-0.3,2.2-1.1c2-4.8,4.2-9.5,5.8-14.4C169,239.4,165.9,239.3,164.3,238.8z M232.9,153.8
	c1.8,5.1,2.9,11.1,6.4,14.6c3.1,3,7.8-1.8,11.8-3.1c2-0.7,4.8-0.8,5.6-3.7c-2.2-5.2-3.1-12.1-6.9-15c-3.7-2.8-9.1,2.9-13.9,4.3
	C234.5,151.3,232.2,151.8,232.9,153.8z"/>
<path style="fill:#FBB530;transform:scale(0.2)" :class="ValueId+'_color3'" d="M387.6,94c-10.1,0.1-19,9.1-19,19.3c0,10.3,8.5,18.9,19,19.1c11,0.1,19.1-7.7,19.3-18.4
	C407.1,102.8,398.5,93.9,387.6,94z M226.6,484.3c-11.1-0.1-19.3,8-19.2,19.1c0,10.8,8.8,19.4,19.4,19.2c10.2-0.2,18.9-9.1,18.9-19.4
	C245.7,492.9,237.1,484.4,226.6,484.3z M112.1,208.5c-10.8,0-19.4,8.7-19.2,19.4c0.2,10.1,9.1,18.9,19.3,19c10.3,0,18.9-8.6,19-19.1
	C131.2,216.6,123.1,208.5,112.1,208.5z M502.1,369.8c-10.4,0-18.9,8.6-18.9,19c-0.1,11.2,8,19.3,19,19.3c10.7,0,19.5-8.8,19.3-19.4
	C521.2,378.5,512.3,369.8,502.1,369.8z M256.1,372.9c1.1-1.1,2.6-1.9,2.8-3.9c-1-1.1-2-2.2-3.1-3.3c-9.8-9.9-9.7-9.8-19.6-0.2
	c-3.1,3-3.4,4.7-0.1,7.9C246.3,383,246.1,383.2,256.1,372.9z M182.6,419c-3.9,3.7-3.7,5.7,0.1,9.2c9.4,8.8,9.2,9,18.4-0.2
	c1.4-1.4,2.6-2.8,4.2-4.4c-1.6-1.7-2.9-3.1-4.3-4.5C191.8,410,192,410.2,182.6,419z M257.5,249.4c0.6-0.7,1.2-1.5,1.8-2.3
	c-1.2-1.3-2.1-2.3-3.1-3.3c-10.2-10.5-10.1-10.4-20.4-0.1c-2.7,2.7-2.9,4.2-0.1,7C247,261.9,247.2,261.9,257.5,249.4z M357.2,244.5
	c-1.8,2-2.2,3-0.2,5.3c10.6,11.9,12.3,11.9,22.5-0.3c0.6-0.7,1.2-1.4,1.9-2.3c-0.9-1-1.5-1.7-2.1-2.4
	C368.7,232.6,368.1,232.6,357.2,244.5z M361.3,362.6c-6.7,6.7-6.7,6.7,0.1,13.6c2.1,2.1,3.8,4.5,5.6,6.6c3.9-1.7,5.5-4.3,7.6-6.3
	c7.2-7.1,7.2-7.2,0.3-14C368.2,355.8,368.2,355.8,361.3,362.6z M418.5,413.7c-9.8,10.1-10,10,0.4,20c1.1,1.1,2,2.6,3.9,2.9
	c1.1-1,2.2-2,3.3-3.1c10-9.8,9.8-9.7,0.2-19.6C423.4,410.7,421.7,410.3,418.5,413.7z M316.7,221.8c0-9.4,0-9.4-9.3-9.4
	c-9.9,0-9.9,0-9.9,10.1c0,9.1,0,9.1,9,9.1C316.7,231.6,316.7,231.6,316.7,221.8z M188.3,248.8c-1.5-0.6-2.1,0.4-2.6,1.6
	c-1.8,5-6.7,10.5-5.1,14.8c1.7,4.3,9.1,4.5,13.9,6.9c0.9,0.4,2.3,0.7,2.7-0.3c2.4-5,4.5-10.1,6.8-15.5c-0.5-0.6-0.8-1.5-1.4-1.7
	C197.9,252.6,193.1,250.7,188.3,248.8z M428.9,251.2c-0.8-2.3-1.8-2.8-4.4-1.9c-15.1,5.1-15.8,6.3-8.8,20.3c0.3,0.5,0.5,1.1,0.7,1.6
	c0.5,1.1,1.4,1.3,3.4,1c4.2-1.9,10-3.4,13.9-6.9c2-1.8-2.2-6.6-3.3-10.2C430.1,253.7,429.3,252.5,428.9,251.2z M143.9,298.7
	c-9.4,0-9.4,0-9.4,6.3c0,12.9,0,12.9,6.5,12.9c12.7,0,12.7,0,12.7-12C153.6,298.7,153.6,298.7,143.9,298.7z M218.2,317.9
	c12.2,0,12.2,0,12.2-9.5c0-9.7,0-9.7-6.7-9.7c-12.5,0-12.5,0-12.5,7.4C211.2,317.9,211.2,317.9,218.2,317.9z M403.1,309.1
	c0-10.4,0-10.4-10.2-10.4c-9,0-9,0-9,9.1c0,10,0,10,9.9,10c1.2,0,2.4-0.2,3.6,0c4.8,0.8,6.5-1.3,5.8-5.9
	C402.9,311.1,403.1,310.1,403.1,309.1z M469.7,298.7c-9.1,0-9.1,0-9.1,9.1c0,10.1,0,10.1,9.8,10.1c9.4,0,9.4,0,9.4-9.4
	C479.8,298.7,479.8,298.7,469.7,298.7z M309.9,404.2c6.9,0,6.9,0,6.8-9.5c0-9.7,0-9.7-6.7-9.7c-12.5,0-12.5,0-12.5,12.2
	C297.5,404.2,297.5,404.2,309.9,404.2z M270,417.6c-4.7-2.1-9.5-4-14.5-6.1c-1.2,0.1-2,0.8-2.4,2c-1.7,5-6.8,10.6-4.9,14.7
	c1.6,3.5,8.8,4.5,13.4,6.6c2,0.9,3.3,0.6,4.2-1.6c1.6-4.1,3.4-8.1,5.1-12.1C271.3,419.8,271.7,418.4,270,417.6z M316.7,471.3
	c0-9.5,0-9.5-9.2-9.5c-10,0-10,0-10,11.8c0,7.4,0,7.5,12.5,7.4C317.8,480.9,316.6,482.5,316.7,471.3z M255,205.2
	c1-0.4,1.3-0.5,1.7-0.6c14.6-3.9,16.4-8.1,9-21.2c-0.7-1.2-1.2-2.7-3-2c-4.8,1.9-9.7,3.7-14.3,6c-2.7,1.4-0.3,3.7,0.4,5.1
	C250.9,196.8,251.4,201.9,255,205.2z M303.8,154.8c12.9,0,12.9,0,12.9-9.4c0-9.8,0-9.8-6.6-9.8c-12.6,0-12.6,0-12.6,6.1
	C297.5,154.8,297.5,154.8,303.8,154.8z M419.7,344.5c-0.9-0.4-2.3-0.7-2.7,0.2c-2.4,5-4.5,10.1-6.9,15.4c0.5,0.7,0.9,1.5,1.5,1.8
	c4.7,2.1,9.5,4,14.3,6c1.5,0.6,2.1-0.4,2.6-1.6c1.9-5,6.7-10.5,5.1-14.7C431.9,347.1,424.5,346.9,419.7,344.5z M355.7,203.7
	c1.3,0.9,3.7,2.8,5.1-0.1c2.2-4.7,4-9.5,6-14.4c0-2.7-2.5-2.8-4.2-3.3c-4.6-1.2-9.2-6.9-13.2-3.5c-3.5,3-6.1,9.3-5.8,13.9
	C343.9,202.3,351.7,201,355.7,203.7z M358.4,411.7c-4.8,1.9-9.7,3.7-14.3,6c-2.6,1.3-0.6,3.6,0.1,5.2c2,4.3,3,9.1,5.7,12.6
	c1.3-0.3,1.5-0.3,1.7-0.4c4.9-2.5,12.7-2.7,14.4-7.1c1.7-4.3-3.3-10.1-5.3-15.2C360.4,411.9,359.5,411.3,358.4,411.7z M187.3,367.3
	c3.7,1.3,9.3-3.1,14.2-4.9c1.7-0.6,2.9-1.4,2-3.5c-1.9-4.4-3.7-8.8-5.5-13.2c-0.4-1-1.1-1.6-2.9-1.5c-4.4,1.9-9.4,3.9-14.2,6.1
	c-1.4,0.6-0.9,2.1-0.4,3.1C182.9,358.2,183,365.8,187.3,367.3z M415.9,185.9c-7,7-7,7-0.1,13.9c6.7,6.7,6.6,6.6,13.6-0.1
	c2.1-2.1,4.6-3.7,8.7-6.9c-4-3-6.7-4.6-9-6.7C422.3,179.5,422.4,179.4,415.9,185.9z M197.7,200.6c2.4-2.4,5.1-4.4,6.8-5.9
	c0.2-3-1.1-3.5-1.9-4.3c-2.5-2.6-5.2-5-7.6-7.7c-2.4-2.8-4.3-3.1-6.6,0c-0.8,1.1-2,2-2.9,3c-7.4,7.4-7.4,7.4,0.1,15
	C191.7,206.5,191.7,206.5,197.7,200.6z"/>
<path style="fill:#FDFCFC;transform:scale(0.2)" d="M307.2,317.9c5.2-0.1,9.5-4.3,9.5-9.5s-4.2-9.5-9.4-9.6c-5.4-0.1-9.9,4.4-9.8,9.8
	C297.7,313.7,302,317.9,307.2,317.9z M490,482c-5.3,0.1-9.2,4.3-9.1,9.6c0.1,5.3,4.3,9.5,9.5,9.5c5,0,9.6-4.5,9.6-9.5
	C500,486.2,495.5,481.9,490,482z M123.4,482c-5.2,0.3-9.3,4.7-9.1,9.8c0.2,5,4.9,9.4,9.9,9.2c5.4-0.2,9.5-4.7,9.2-10.3
	C133.1,485.5,128.8,481.8,123.4,482z M123.9,115.5c-5,0-9.5,4.6-9.5,9.6c0,5.4,4.4,9.7,10,9.5c5.3-0.1,9.2-4.3,9.1-9.7
	C133.3,119.6,129,115.5,123.9,115.5z M490,134.6c5.6,0.1,10-4.2,10-9.6c0-5-4.6-9.5-9.6-9.5c-5.1,0-9.4,4.2-9.5,9.5
	C480.7,130.3,484.7,134.5,490,134.6z M307.1,557.8c-5.2,0-9.5,4.2-9.6,9.4s4.1,9.6,9.3,9.7c5.4,0.2,10-4.4,9.9-9.8
	C316.6,562,312.3,557.7,307.1,557.8z M566.4,298.7c-5.2-0.1-9.6,4-9.8,9.2c-0.2,5.4,4.2,10,9.6,10c5.2,0,9.5-4.3,9.6-9.5
	C575.8,303.2,571.6,298.9,566.4,298.7z M307.2,58.8c5.2,0,9.5-4.3,9.5-9.5s-4.1-9.6-9.3-9.7c-5.4-0.1-9.9,4.4-9.8,9.8
	C297.6,54.6,302,58.9,307.2,58.8z M48.5,298.7c-5.4-0.2-10,4.2-10,9.6c0,5.2,4.3,9.5,9.5,9.5c5.2,0.1,9.5-4.2,9.7-9.3
	C57.8,303.3,53.6,298.9,48.5,298.7z"/>
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
                                    <button :style="{background:'rgba('+getterFireworksBg1+')'}" @click="ShowElement(getterFireworksBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFireworksBg2+')'}" @click="ShowElement1(getterFireworksBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFireworksBg3+')'}" @click="ShowElement2(getterFireworksBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterFireworksBg4+')'}" @click="ShowElement3(getterFireworksBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFireworksBg5+')'}" @click="ShowElement4(getterFireworksBg5)" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterFireworksBg6+')'}" @click="ShowElement5(getterFireworksBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterFireworksBg7+')'}" @click="ShowElement6(getterFireworksBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Fireworks= [
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
            var randomNumber = Fireworks[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Fireworks[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Fireworks'){
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
                getterFireworksBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Fireworks') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireworksBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Fireworks') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireworksBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Fireworks') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireworksBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterFireworksBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireworksBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireworksBg7: {
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
                            name:'Fireworks',
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