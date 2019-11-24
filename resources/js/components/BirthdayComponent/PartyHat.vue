<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M131.4,143.3c-10.2,1.3-19.6,2.4-28.9,3.8c-8.4,1.2-16.4-4.3-17-12.1c-0.7-7.8,6.1-14.7,14.7-14.8
	c7.8-0.1,15.5,0,23.3,0c0.2-0.5,0.3-1,0.5-1.4c-7.4-4.7-14.7-9.5-22.2-14c-4-2.4-6.5-5.8-7-10.4c-0.6-5.4,0.6-10.2,5.5-13.3
	c4.9-3.1,11.1-2.8,15.9,0.8c5,3.9,9.9,8,15.9,12.8c0-7.1,0-13.2,0-19.2c0-8.1,6-14.4,13.2-14.3c7.2,0.1,12.9,6.3,13,14.1
	c0.1,6.9,0.1,13.8,0.2,20.7c0,0.1,0.2,0.2,0.8,0.7c5.5-4.5,11.1-9,16.7-13.5c7.2-5.8,16-5.4,20.8,1c4.9,6.5,2.4,16-5.4,21
	c-7.1,4.5-14.3,9.1-21.4,13.6c0.1,0.5,0.2,1,0.3,1.5c7.5,0,15.1-0.1,22.6,0c9.2,0.1,16,6.5,15.5,14.6c-0.6,8.2-8.5,13.4-17.9,12.1
	c-10.6-1.5-21.1-2.7-32.5-4.1c6,15.8,11.6,30.7,17.3,45.6c16.6,43.4,33.2,86.8,49.8,130.2c14.8,38.6,29.6,77.2,44.4,115.8
	c5.4,14,1.1,23.3-12.9,29c-40.2,16.4-82,23.3-125.3,21.3c-34.4-1.6-67.6-9-99.4-22.4c-11.1-4.7-15.6-14.9-11.3-26.3
	C56.9,340.4,93.2,244.7,129.5,149C130,147.3,130.5,145.8,131.4,143.3z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M22.9,109.2c0-6,3.6-9.9,8.1-12.7c12.3-7.6,12.5-9.9,0.2-18c-11.7-7.7-11.2-18,0.4-26.2
	c3.9-2.7,8.7-4.5,9.4-10.4c0.2-2.1,2.6-3,4.8-2.3c2.1,0.6,3.3,2.2,3.3,4.5c0,3.7-1.4,6.8-4.2,9.1c-3,2.6-6.3,4.8-9.5,7.2
	c-5.2,3.9-5.2,6.6,0.2,10.5c2.6,1.9,5.5,3.6,7.9,5.8c7.8,6.8,7.7,15.1-0.3,21.8c-2.8,2.3-5.9,4.2-8.8,6.4c-3.8,3-3.8,5.9,0,8.9
	c3.4,2.7,7.1,5,10.4,7.8c2.9,2.4,4.4,5.8,4.3,9.6c-0.1,2.3-1.4,3.7-3.6,4.2c-2,0.4-4.2-0.4-4.4-2.2c-0.7-6.4-6.2-8-10.2-11.1
	C26.6,118.7,22.7,115.2,22.9,109.2z M223.9,240.5c0-4,1.5-7.5,4.6-10s6.4-4.8,9.6-7.2c4.7-3.5,4.6-6.3-0.1-9.8
	c-2.9-2.2-6-4.1-8.7-6.5c-7.2-6.4-7.1-14.6,0.2-21.1c2-1.8,4.4-3.3,6.6-4.8c2.6-1.9,5.4-3.4,5.7-7.4c0.2-2.4,2.3-3.7,4.9-3.2
	c2.5,0.5,3.7,2.2,3.6,4.7c-0.1,3.8-1.7,7.1-4.7,9.5c-3.2,2.6-6.8,4.9-10,7.5c-3.8,3-3.8,5.9,0,8.9c3.1,2.5,6.6,4.5,9.6,7.1
	c7,6.2,6.9,14.4-0.1,20.7c-2.2,1.9-4.6,3.5-7,5.2c-7.2,5.1-7.2,7.4-0.2,12.4c3,2.1,5.9,4.2,8.6,6.7c2.6,2.4,4,5.6,3.7,9.3
	c-0.2,2.3-1.5,3.7-3.8,4.1c-2,0.3-4.2-0.6-4.4-2.4c-0.6-5.9-5.5-7.6-9.4-10.4C228.1,250.3,224.1,246.7,223.9,240.5z M197.6,43.8
	c0-11.4,10.6-22,22.1-21.9c11.1,0.1,21.5,10.6,21.6,21.8c0.1,11.1-10.5,21.8-21.5,21.9C208.3,65.7,197.6,55.1,197.6,43.8z
	 M276.4,314.6c11.4,0.1,21.8,10.9,21.7,22.3c-0.2,11.1-10.9,21.5-22,21.4c-11.2-0.2-21.6-10.6-21.7-21.7
	C254.4,325,265,314.5,276.4,314.6z M302.3,112.6c-2.7,0-5.5,0-8.2,0c-2.8,0-4.6-1.4-4.7-4.2c-0.1-2.8,1.6-4.4,4.4-4.5
	c5.8-0.1,11.6-0.1,17.4,0c2.5,0.1,4.1,1.7,4.2,4.2c0.1,2.8-1.6,4.4-4.4,4.5C308.1,112.7,305.2,112.6,302.3,112.6L302.3,112.6z
	 M267.4,112.6c-2.9,0-5.8,0.1-8.7,0c-2.5-0.1-4.1-1.6-4.2-4.1c-0.1-2.8,1.6-4.5,4.4-4.5c5.8-0.1,11.6-0.1,17.5,0
	c2.5,0,4.1,1.6,4.2,4.1c0.1,2.8-1.6,4.4-4.4,4.5C273.2,112.7,270.3,112.6,267.4,112.6z M49.1,201.2c0,2.7,0,5.5,0,8.2
	c-0.1,2.8-1.5,4.6-4.2,4.7c-2.8,0.1-4.4-1.7-4.4-4.5c-0.1-5.6-0.1-11.3,0-16.9c0-2.8,1.5-4.6,4.2-4.7c2.8-0.1,4.3,1.7,4.4,4.5
	S49.1,198.3,49.1,201.2z M289.3,91.2c0,2.5,0,5.1,0,7.6c0,3-1.4,5-4.5,4.9c-2.8-0.1-4.2-1.9-4.2-4.7c0-5.5,0-10.9,0-16.4
	c0-3,1.4-5,4.5-4.9s4.3,2.3,4.2,5.3C289.2,85.7,289.3,88.4,289.3,91.2z M62,222.8c-2.9,0-5.8,0.1-8.7,0c-2.5-0.2-4-1.7-4.1-4.3
	c0-2.5,1.5-4.2,4-4.3c6-0.2,12-0.1,18,0c2.5,0.1,4,1.7,4.1,4.2c0,2.5-1.5,4.2-4,4.3C68.1,222.9,65,222.8,62,222.8z M27,222.8
	c-2.9,0-5.8,0.2-8.7,0c-2.5-0.2-4-1.8-4-4.3s1.6-4.2,4.1-4.3c6-0.2,12-0.2,18,0c2.5,0.1,4,1.8,4,4.3s-1.5,4.1-4.1,4.3
	C33.2,222.9,30.1,222.8,27,222.8z M40.4,235.8c0-2.7,0-5.5,0-8.2c0.1-2.8,1.5-4.6,4.2-4.7c2.8-0.1,4.4,1.7,4.4,4.5
	c0.1,5.6,0.1,11.3,0,16.9c0,2.8-1.5,4.6-4.2,4.7c-3.1,0.1-4.5-2-4.5-5C40.4,241.2,40.4,238.5,40.4,235.8L40.4,235.8z M280.6,125.5
	c0-2.9-0.1-5.8,0-8.7c0.2-2.5,1.7-4.1,4.2-4.1s4.3,1.5,4.3,4c0.2,6,0.1,12,0,18c-0.1,2.5-1.7,4.1-4.2,4.1s-4.2-1.5-4.3-4
	C280.4,131.7,280.6,128.6,280.6,125.5z"/>
<path :style="{fill:'rgba(249, 135, 250, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M244.8,395c6.2,16.2,12.3,31.7,18,47.3c1.9,5.3-0.7,9.3-6.8,11.8c-19.2,8.1-39,13.9-59.4,17.6
	c-20.8,3.7-41.8,5.3-63,4.3c-34.4-1.5-67.6-8.8-99.4-22.3c-5.9-2.5-8.4-6.7-6.5-12c5.7-15.7,11.7-31.2,17.8-47.2
	c2.6,1.8,3.5,4.2,4.7,6.3c3,5.8,5.6,11.8,9.5,17.2c6.2,8.7,13.2,10.5,22.8,6c6.4-3.1,12-7.5,17.9-11.4c8.9-5.8,11.6-5.6,18.7,2.1
	c4.8,5.2,9.2,10.8,14.6,15.5c7.8,6.8,15,6.9,23,0.6c4.6-3.6,8.3-8.2,12.1-12.5c11.2-12.4,12.1-12.6,26.1-2.9c4.5,3.1,9,6.2,13.9,8.6
	c9,4.4,16,2.7,22-5.3c3.7-5,6.3-10.6,9.2-16.1C241.1,400.2,241.9,397.5,244.8,395z M145.1,217.3c-3.5,0.4-6.3,2.4-8.4,5.3
	c-3.3,4.5-6.6,9.2-9.7,13.8c-1.9,2.8-3.4,3.8-5.2,0c-2.7-5.7-5.5-11.4-8.5-17c-1-1.9-0.1-3.2,0.5-4.6c8.9-23.4,17.7-46.9,26.7-70.3
	c0.8-2,0.8-4.7,4.3-4.7c3.4,0,3.6,2.7,4.3,4.7c9,23.4,17.8,46.8,26.9,70.2c1.2,3.2,1.1,5.7-0.7,8.7c-2.5,4.2-4.2,8.8-6.3,13.3
	c-1.3,2.8-2.8,3.1-4.6,0.4c-3.2-4.6-6.3-9.4-9.7-13.8C152.3,220.2,149.6,217.4,145.1,217.3z"/>
<path :style="{fill:'rgba(253, 216, 232, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M108.6,229.3c2.8,4.6,4.4,9.5,7.5,13.6c5.3,6.8,10.5,7.1,16.1,0.4c3.1-3.7,5.8-7.9,8.6-11.9
	c4.6-6.7,4.5-6.7,9.2,0.2c2.5,3.6,4.8,7.3,7.6,10.7c6.8,8.3,12.6,7.9,18.3-1.3c2-3.2,3.6-6.6,5.8-10.6c6.3,16.5,12.4,32.3,18.4,48.1
	c5.3,13.9,10.6,27.8,16,41.7c1.1,2.7,1,4.3-1.5,6.4c-7.4,6.1-9.5,14-6.3,21.9s10.6,12.4,20.1,11.8c2.4-0.2,3.2,0.6,3.9,2.5
	c2.5,6.6,5.1,13.2,7.6,19.8c0.5,1.3,1.4,2.6,0,4c-6.5,6.4-9.5,15-13.8,22.7c-5.6,10-8.8,10.7-18.4,4.2c-5.4-3.7-10.8-7.4-16.5-10.6
	c-9-5-15.9-4-23.3,3.2c-5.1,5-9.6,10.4-14.5,15.6c-6.4,6.7-10,6.7-16.3,0c-4.9-5.1-9.4-10.6-14.5-15.6c-7.5-7.3-14.2-8.3-23.2-3.2
	c-6.2,3.5-12,7.6-17.9,11.4c-8.1,5.3-11.4,4.5-16.3-3.6c-5-8.4-7.9-18.1-15.3-24.9c-1.3-1.2-0.2-2.4,0.2-3.5
	c2.5-6.6,5.1-13.2,7.5-19.9c0.7-2.1,1.5-2.6,3.9-2.4c9.5,1.1,17.5-3.6,20.8-11.5c3.4-8.4,1-16.4-6.9-22.6c-1.9-1.4-3.1-2.4-2.1-5.2
	c11.5-30,22.9-60,34.4-90C107.9,230.3,108.1,230,108.6,229.3z M140.8,100.5c0-8.3,0.1-16.7,0-25c0-3.1,0.6-5.5,4.3-5.5
	c3.6-0.1,4.5,2,4.5,5.3c-0.1,16.9-0.1,33.7,0,50.6c0,3.1-1.1,5.2-4.2,5.1c-3-0.1-4.7-2-4.7-5.4C140.9,117.2,140.9,108.9,140.8,100.5
	L140.8,100.5z M178.5,128.9c5.2,0,10.5,0,15.7,0c3.5,0,5.6,1.6,5.2,5.3c-0.4,3.6-2.6,4.8-6.1,4.3c-10.9-1.5-21.9-2.9-32.8-4.3
	c-1.4-0.2-3.7,0.1-3.1-2.4c0.4-1.8,0.9-3.8,3.8-3.7c5.8,0.2,11.6,0.1,17.4,0.1C178.5,128.4,178.5,128.7,178.5,128.9z M133.8,134
	c-11.5,1.6-22.6,3-33.8,4.6c-3.7,0.5-5.6-1.2-5.8-4.7c-0.2-3.4,1.8-4.9,5-5c10-0.2,20-0.4,30-0.7C133.5,128.1,132.4,131.7,133.8,134
	z M158.9,115.1c-1.4-4.4-0.1-7,3.1-9.4c6.9-5.3,13.5-10.9,20.2-16.5c2.6-2.1,5-3.1,7.4,0.1c2.6,3.3,1.2,5.7-1.8,7.6
	C178.2,103,168.6,109,158.9,115.1z M131.8,113.3c-9.5-6-18.2-11.5-26.8-17.1c-2.8-1.8-3-4.3-0.9-6.9c2-2.4,4.1-2.6,6.6-0.7
	c6.4,5.3,12.8,10.6,19.4,15.7C133,106.7,132,109.5,131.8,113.3z"/>
<path style="fill:#FCFDFD;transform:scale(0.2)" d="M232.6,43.6c0.1,7.7-5.1,13.1-12.8,13.3c-7.7,0.1-13.2-5.1-13.4-12.6c-0.2-7.9,5.2-13.5,13.1-13.6
	C227.1,30.6,232.5,35.9,232.6,43.6z"/>
<path style="fill:#FCFDFD;transform:scale(0.2)" d="M289.3,336.6c-0.1,7.7-5.4,12.9-13.1,12.9s-13.1-5.3-13.1-13c0-7.9,5.5-13.3,13.4-13.2
	C284.1,323.4,289.4,328.9,289.3,336.6z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M138,358.2c0,9-8.4,17.5-17.4,17.5c-8.9,0-17.7-8.7-17.6-17.5c0.1-8.9,8.7-17.4,17.6-17.5
	C129.5,340.7,138,349.2,138,358.2z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M155.8,357.8c0.2-9.1,8.8-17.3,17.8-17c8.9,0.3,17.5,9.2,17.2,17.9c-0.3,8.8-9.3,17.3-18.1,17
	C163.6,375.4,155.6,366.9,155.8,357.8z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M173.2,297c-0.3,2.6-1.6,4.5-4.4,4.4c-2.5,0-4.1-1.5-4.1-4.1c0-2.8,1.5-4.5,4.3-4.5
	C171.6,292.7,172.7,294.5,173.2,297z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M125,292.7c2.5,0.3,4.1,1.6,4.1,4.2c0.1,2.8-1.5,4.5-4.3,4.5c-2.6,0-4.1-1.7-4.2-4.1
	C120.5,294.6,122.2,293,125,292.7z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M102.7,297.1c-2.6-0.4-4.1-2-4.1-4.4c0-2.7,1.7-4.5,4.6-4.3c2.5,0.1,4,1.7,4,4.3
	C107.1,295.6,105.4,296.9,102.7,297.1z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M190.6,297.1c-2.5-0.4-4-1.7-4.1-4.3c0-2.8,1.6-4.5,4.4-4.4c2.5,0,4.1,1.8,4.1,4.2
	C195,295.3,193.4,296.9,190.6,297.1z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M151.1,296.9c-0.2,2.9-1.6,4.6-4.4,4.5c-2.5-0.1-4-1.6-4-4.2c0-2.8,1.6-4.4,4.4-4.4
	C149.7,292.8,150.8,294.6,151.1,296.9z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M49.6,441.2c-2.8-0.2-4.5-1.4-4.8-3.8c-0.3-2.7,1.3-4.5,4-4.8c2.5-0.2,4.2,1.3,4.5,3.7
	C53.7,439.1,51.8,440.5,49.6,441.2z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M240.9,432.5c2.8,0.4,4.6,1.7,4.6,4.5c0,2.5-1.6,4.1-4.1,4.2c-2.7,0.1-4.4-1.6-4.5-4.3
	C237,434.3,238.8,433.1,240.9,432.5z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M66.6,445.8c0.2-2.5,1.6-4.2,4-4.4c2.7-0.2,4.5,1.4,4.7,4.1c0.2,2.5-1.5,4.2-3.9,4.4
	C68.6,450.1,67.1,448.3,66.6,445.8z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M219.3,441.2c2.6,0.3,4.4,1.7,4.4,4.4c0,2.5-1.6,4.1-4,4.2c-2.7,0.1-4.5-1.6-4.5-4.3
	C215.1,443.1,216.8,441.7,219.3,441.2z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M97.2,449.5c-0.2,2.7-1.5,4.5-3.9,4.7c-2.7,0.3-4.5-1.4-4.7-4c-0.2-2.5,1.4-4.2,3.8-4.5
	C95.1,445.4,96.4,447.3,97.2,449.5z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M202,449.5c-0.2,2.7-1.5,4.5-3.9,4.7c-2.7,0.3-4.5-1.4-4.7-4c-0.2-2.5,1.4-4.2,3.8-4.4
	C199.9,445.4,201.3,447.3,202,449.5z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M123.4,453.9c-0.3,2.8-1.7,4.6-4.5,4.6c-2.5,0-4.1-1.6-4.2-4c-0.1-2.7,1.6-4.4,4.3-4.5
	C121.6,450,122.8,451.8,123.4,453.9z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M145.4,458.7c-2.6-0.3-4.4-1.7-4.5-4.4c0-2.5,1.6-4.1,4-4.2c2.7-0.1,4.5,1.6,4.5,4.3
	C149.5,456.8,147.8,458.2,145.4,458.7z"/>
<path :style="{fill:'rgba(168, 13, 147, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M175.8,454.4c-0.5,2.4-1.8,4.2-4.2,4.2c-2.7,0-4.4-1.7-4.4-4.4c0-2.4,1.7-4.1,4.1-4.1
	C174,450,175.4,451.8,175.8,454.4z"/>
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
                                    <button :style="{background:'rgba('+getterPartyHatBg1+')'}" @click="ShowElement(getterPartyHatBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPartyHatBg2+')'}" @click="ShowElement1(getterPartyHatBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPartyHatBg3+')'}" @click="ShowElement2(getterPartyHatBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPartyHatBg4+')'}" @click="ShowElement3(getterPartyHatBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPartyHatBg5+')'}" @click="ShowElement4(getterPartyHatBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var PartyHat= [
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
            var randomNumber = PartyHat[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  PartyHat[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'PartyHat'){
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
                getterPartyHatBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PartyHat') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPartyHatBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PartyHat') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPartyHatBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'PartyHat') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPartyHatBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPartyHatBg5: {
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
                            name:'PartyHat',
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