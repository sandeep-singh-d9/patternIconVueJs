<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(253, 182, 47, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M553.4,402.7c-2.2-1.9-4.9-1.6-7.5-1.6c-53.9,0-107.8,0-161.7,0c-2.6,0-5.3-0.2-7.6,1.4
	c-3.2,5.5-1.2,11.4-1.6,17.1c-0.2,5.7-0.2,11.3,0,17c-0.2,5.6-0.2,11.2,0,16.9c-0.2,5.6-0.2,11.2,0,16.9c-0.2,5.6-0.2,11.3,0,16.9
	c-0.2,5.7-0.1,11.3,0,17c-0.3,9.1-0.1,18.3-0.1,27.4c0,2.1-0.1,4.3,1.6,5.9c21.2,0.1,42.4,0,63.7,0.3c3.6,0,3.9-1.5,3.8-4.4
	c-0.1-16.1-0.1-32.3,0-48.4c0-13.6,8.9-23.2,21.3-23.1c12.1,0.1,20.8,9.7,20.9,23c0,15.4,0.2,30.9-0.1,46.3
	c-0.1,5.1,0.8,6.8,6.4,6.7c20.3-0.4,40.7-0.1,61,0C553.4,492.8,553.4,447.8,553.4,402.7z M207.7,402.4c-2.2-1.4-4.7-1.3-7.1-1.3
	c-54.2,0-108.4,0-162.6,0c-2.4,0-5-0.2-7,1.6c0,45,0,90.1,0,135.1c20.2,0,40.3,0,60.5-0.1c7.9,0,6.8,1.1,6.8-7.1
	c0.1-15.6,0-31.2,0-46.8c0-6.7,2.3-12.4,7.4-16.7c6.6-5.5,14.1-6.9,22.1-3.3c8.1,3.7,12.5,10.2,12.6,19c0.2,16.8,0.1,33.7,0,50.5
	c0,2.8,0.2,4.5,3.8,4.4c21.2-0.2,42.4-0.2,63.7-0.3c1.6-1.6,1.6-3.8,1.6-5.8c0-9.2,0.2-18.4-0.1-27.6c0.2-5.7,0.2-11.3,0-17
	c0.2-5.6,0.2-11.3,0-16.9c0.2-5.6,0.2-11.2,0-16.9c0.2-5.6,0.2-11.2,0-16.9c0.2-5.7,0.1-11.3,0-17
	C209,413.8,211.1,407.8,207.7,402.4z M200.5,249.4c-54.2,0-108.4,0-162.6,0c-2.4,0-5-0.2-7,1.6c0,45,0,90.1,0,135.1
	c2.4,2,5.3,1.6,8.1,1.6c53.5,0,107.1,0,160.6,0c2.6,0,5.3,0.2,7.8-0.9c0.6-0.4,1.1-0.9,1.4-1.5c0.6-1.5,0.7-3.1,0.7-4.6
	c0-31.8,0.2-63.7-0.1-95.5c0.2-5.7,0.2-11.5,0-17.2c-0.4-5.7,1.7-11.7-1.8-17.1C205.5,249.2,203,249.4,200.5,249.4z M374.9,267.9
	c-0.2,5.7-0.2,11.5,0,17.2c-0.3,31.8-0.1,63.5-0.1,95.3c0,1.8,0.1,3.5,1,5.1c0.4,0.6,0.9,1.1,1.6,1.4c2,0.8,4.1,0.7,6.2,0.7
	c54.3,0,108.5,0,162.8,0c2.4,0,5,0.2,7-1.6c0-45,0-90.1,0-135.1c-2.2-1.9-4.9-1.6-7.5-1.6c-53.9,0-107.8,0-161.7,0
	c-2.6,0-5.3-0.2-7.6,1.4C373.3,256.3,375.3,262.2,374.9,267.9z M292.2,32.1c13-0.1,25.9-0.1,38.9-0.2c2.5,0,3.4,0.7,3.3,3.3
	c-0.2,7.3-0.2,14.7-0.2,22.1c-0.8,0.8-1.7,1.3-2.8,1.4c-12.8,0.2-25.5,1-38.3-0.4c-0.6-0.3-1.2-0.7-1.5-1.3
	C290.3,48.6,289.2,40.3,292.2,32.1z"/>
<path :style="{fill:'rgba(201, 71, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M292.2,82.3c0-8.4,0-16.8-0.1-25.1c14,0,28,0,42,0c0.1,7.4,0,14.7,0.2,22.1c0.1,2.5-0.8,3.3-3.3,3.3
	C318.1,82.4,305.1,82.4,292.2,82.3z M292.2,57.3c-14,0-28,0-42-0.1c-0.1-7.4,0-14.7-0.2-22.1c-0.1-2.5,0.8-3.3,3.3-3.3
	c13,0.2,25.9,0.2,38.9,0.2C292.2,40.5,292.2,48.9,292.2,57.3z"/>
<path :style="{fill:'rgba(42, 110, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M507,436.6c-0.3,0-0.7,0-1,0c-12,0-13.6-2-11.4-14.2c0.3-1.7,0.8-2.6,2.6-2.6
	c6.6,0,13.6-1.2,19.9,0.3c6.1,1.5,1.7,7.9,2.8,12c0.6,2.3,0.2,4.6-3.3,4.5C513.3,436.4,510.1,436.5,507,436.6
	C507,436.5,507,436.5,507,436.6z M464.9,419.7c0.2,0,0.3,0,0.5,0c13.4,0,13.3,0,12.2,13.5c-0.2,2.4-1,3.4-3.4,3.4
	c-6.1-0.1-12.2,0-18.4,0c-0.3,0-0.8,0.1-1-0.1c-5.5-3.3-1.3-8.5-2.4-12.6c-0.6-2.1-0.2-4.3,3-4.2
	C458.6,419.8,461.7,419.7,464.9,419.7z M422.7,436.6c-0.2,0-0.3,0-0.5,0c-13.5,0-13.4,0-12.1-13.6c0.2-2.6,1.3-3.3,3.6-3.2
	c6.1,0.1,12.2,0.1,18.4,0c2.5,0,3.6,1,3.4,3.4c0,0.2,0,0.3,0,0.5C436.1,436.5,436.1,436.5,422.7,436.6z M77.1,436.5
	c-0.2,0-0.3,0-0.5,0c-13.4,0-13.4,0-12.1-13.6c0.2-2.5,1.3-3.3,3.6-3.2c6.1,0.1,12.2,0.1,18.4,0c2.5,0,3.6,1,3.4,3.4
	c0,0.2,0,0.3,0,0.5C90.5,436.6,90.5,436.6,77.1,436.5z M119.3,436.5c-0.2,0-0.3,0-0.5,0c-13.4,0-13.3,0-12.1-13.6
	c0.2-2.5,1.1-3.3,3.5-3.3c6.1,0.1,12.2,0,18.4,0c0.3,0,0.8-0.1,1,0.1c5.3,3.4,1.3,8.5,2.3,12.7c0.6,2.2,0,4.2-3.1,4.1
	C125.6,436.4,122.5,436.5,119.3,436.5z M161.7,419.7c0.3,0,0.7,0,1,0c12,0,13.6,2,11.4,14.2c-0.3,1.6-0.8,2.6-2.6,2.6
	c-6.6,0-13.6,1.2-19.9-0.3c-6.1-1.5-1.7-7.9-2.8-12c-0.6-2.3-0.2-4.6,3.3-4.5C155.4,419.8,158.5,419.7,161.7,419.7L161.7,419.7z"/>
<path :style="{fill:'rgba(67, 152, 209, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M553.6,548.9c-0.4-3.6-0.1-7.4-0.2-11c-2.1-2.1-4.9-1.7-7.5-1.7c-16.3,0-32.7,0-49,0
	c-9.3,0-9.3,0-9.3-9.3c0-14.6,0.3-29.2-0.2-43.7c-0.3-9.3-4.8-16.3-13.4-20.5c-8.2-4-15.8-2.5-22.8,2.7c-6.3,4.7-9,11.5-9.1,19.3
	c-0.1,14.4,0,28.8,0,43.2c0,8.2-0.1,8.3-8.1,8.3c-19.3,0.1-38.6-0.1-57.9,0.1c-14.1-0.3-28.3,0-42.4-0.1c-5.8-0.1-6.2-0.5-6.2-6.3
	c-0.1-8.6,0.1-17.1-0.1-25.7c0.2-5.6,0.2-11.3,0-16.9c0.2-5.6,0.2-11.2,0-16.7c0.1-5.4,0.1-10.8,0-16.1c-0.1-6.2-1.5-12.2-4.6-17.6
	c-5.4-10.7-14.8-15.6-26-18c-3.1-0.5-6.2-0.5-9.3,0c-11.2,2.3-20.5,7.4-26,18.1c-3.2,5.5-4.5,11.4-4.6,17.6
	c-0.1,5.4-0.1,10.8,0,16.2c-0.2,5.6-0.1,11.2,0,16.7c-0.2,5.6-0.2,11.3,0,16.9c-0.3,8.4,0,16.8-0.1,25.1c-0.1,6.4-0.4,6.7-6.9,6.8
	c-14,0.1-27.9-0.1-41.9,0.1c-19.1-0.2-38.3,0-57.4-0.1c-8.5,0-8.5,0-8.5-8.5c-0.1-14.9,0.3-29.8-0.1-44.8c-0.3-9.4-5-16.2-13.5-20.3
	c-8.2-4-15.8-2.3-22.7,2.8c-6.4,4.7-9,11.4-9,19.3c0,14.7,0,29.5,0,44.2c0,6.8-0.4,7.1-7.2,7.2c-16.9,0-33.7,0-50.6,0
	c-2.8,0-5.7-0.5-8,1.7c0,3.3,0.3,6.7-0.2,10c-0.7,5.3,1,6.9,6.6,6.9c127.4-0.2,254.8-0.1,382.2-0.1c42.8,0,85.6-0.1,128.4,0.1
	C552.8,554.7,554,553.4,553.6,548.9z M208.2,218.9c2.1,0.3,4.2,0.2,6.3,0.2c39.7,0,79.4,0,119.1,0c14.2,0,28.4,0.2,42.7-0.1
	c5.8-0.3,11.7,1.3,17.3-1.3c2-5.7,2.4-11.4-0.2-17c-5.7-2.5-11.3-5-17-7.5c-1-1-2.1-1.8-3.4-2.4c-25.1-10.6-50.2-21-75.3-31.4
	c-4.1-1.7-8.1-1.5-12.2,0.3c-23.8,10.1-47.6,19.9-71.4,29.8c-2.3,0.9-4.6,1.7-6.2,3.8c-5.7,2.5-11.3,5-17,7.5
	c-2.5,5.7-2.2,11.4,0,17.1C196.5,220.2,202.4,218.7,208.2,218.9z M266.9,82.7c-5.6-0.1-11.2-0.2-16.8-0.3c0-8.4,0.1-16.8,0.1-25.2
	c1.6-1.7,3.8-1.6,5.9-1.7c10.1-0.1,20.2-0.1,30.3,0c2.1,0,4.2,0.2,5.9,1.7l-0.1-0.1c1.7,1.8,1.9,4.1,1.7,6.3
	c-0.6,6.3,1.7,12.8-1.6,18.8C283.7,82.4,275.3,82.6,266.9,82.7z M89.9,279.4c0-2.2-0.8-3.7-2.6-4.8c-2.8-1.8-5.6-3.5-8.3-5.5
	c-1.4-1-2.3-0.7-3.7,0c-7.4,3.9-13.1,8.6-10.8,18.3c0.4,1.8,0.1,3.8,0.1,5.8c0,4.2,0.1,8.4,0,12.6c-0.1,3,0.7,4.5,4.1,4.4
	c5.8-0.2,11.5-0.2,17.3,0c2.9,0.1,4-1,4-3.9C89.8,297.3,89.8,288.4,89.9,279.4z M174.1,352c0-4.2,0-8.4,0-12.6c0-2-0.2-3.7-1.8-5.2
	c-7.8-7.2-10.6-7.4-19.3-1.5c-2.3,1.5-4.3,2.8-4.2,6c0.1,8.9,0.1,17.8,0,26.8c0,2.7,0.9,3.8,3.6,3.7c5.9-0.1,11.9-0.2,17.8,0
	c3,0.1,4-1.1,3.9-4C174,360.8,174.1,356.4,174.1,352z M132,351.9c0-4.2,0-8.4,0-12.6c0-1.4,0.4-3.1-0.8-4c-3.6-2.7-7.1-5.9-11.1-7.6
	c-2.7-1.2-5.1,2.3-7.5,3.8c-2.6,1.7-6,2.8-5.9,7.2c0.2,8.9,0.1,17.8,0,26.8c0,2.8,1,3.7,3.7,3.6c5.6-0.1,11.2-0.3,16.8,0.1
	c4.2,0.2,5.1-1.5,4.9-5.2C131.8,360,132,356,132,351.9z M89.8,352.2c0-4.4,0-8.7,0-13.1c0-1.4,0.3-3-1-3.9
	c-3.6-2.7-7.1-5.9-11.2-7.5c-2.6-1-5,2.5-7.4,4.1c-2.5,1.6-5.8,2.7-5.7,6.8c0.2,9.1,0.1,18.2,0,27.3c0,2.5,1,3.4,3.4,3.4
	c6.1-0.1,12.2-0.1,18.4,0c2.9,0.1,3.6-1.3,3.5-3.8C89.8,360.9,89.8,356.6,89.8,352.2z M174.1,293.1c0-4.4-0.1-8.8,0-13.1
	c0.1-2.6-0.9-4.2-3-5.6c-9.5-6.7-9.4-6.7-18.9-0.2c-2.5,1.7-3.4,3.6-3.4,6.5c0.1,8.4,0.1,16.8,0,25.2c0,3,0.7,4.5,4.1,4.4
	c5.8-0.2,11.5-0.2,17.3,0c2.9,0.1,4.1-0.9,4-3.9C174,301.9,174.1,297.5,174.1,293.1z M122.2,269.8c-2.1-1.1-3.2-1.3-5.5-0.2
	c-7.8,3.8-11.8,9.2-10.1,18.2c0.3,1.7,0,3.5,0.1,5.2c0,4.5,0.1,9.1,0,13.6c0,2.4,0.8,3.5,3.3,3.5c6.1-0.1,12.2-0.1,18.4,0
	c2.8,0.1,3.7-1.1,3.6-3.7c-0.1-6.3-0.8-12.7,0.1-18.9C133.5,278.6,129.6,273.5,122.2,269.8z M477.6,351.7c0-4.2,0-8.4,0-12.6
	c0-1.4,0.3-3-0.9-4c-3.6-2.7-7.1-5.9-11.2-7.5c-2.6-1-5,2.4-7.5,4c-2.6,1.7-5.9,2.9-5.8,7.3c0.3,8.7,0.2,17.5,0,26.2
	c0,2.9,0.9,4.1,3.9,4c5.8-0.2,11.6-0.2,17.3,0c3.3,0.1,4.3-1.2,4.1-4.3C477.5,360.5,477.6,356.1,477.6,351.7z M499.7,310.1
	c1-0.2,2.1,0,3.1,0c5.4-0.3,12.4,2.3,15.7-1c3.6-3.5,0.7-10.6,1.2-15.2c0-4.1-0.5-7.4,0.1-10.4c1.7-9.1-6-10.9-11.1-14.3
	c-3.8-2.6-5.8,2.4-8.8,3.6c-4.4,1.8-5.8,5.2-5.5,10c0.4,7.3,0.3,14.7,0,22C494.2,309,495.5,310.7,499.7,310.1z M435.5,338.9
	c0-2.6-1-4.2-3.1-5.6c-9.5-6.7-9.4-6.6-19-0.2c-2.5,1.7-3.5,3.6-3.3,6.5c0.2,4,0,8,0,12.1c0,4.5,0.1,9.1,0,13.6
	c-0.1,2.6,0.8,3.8,3.6,3.8c5.9-0.1,11.9-0.1,17.8,0c3,0.1,4-1.1,3.9-4C435.4,356.4,435.4,347.7,435.5,338.9z M452.3,306.2
	c0,2.9,0.9,4.1,3.9,4c5.8-0.2,11.6-0.2,17.3,0c3.3,0.1,4.3-1.2,4.1-4.3c-0.2-4.2,0-8.4,0-12.6c0-4.4,0-8.7,0-13.1
	c0-1.4,0.3-3-0.9-3.9c-3.6-2.7-7.1-5.9-11.2-7.5c-2.6-1-5,2.4-7.5,4c-2.6,1.7-5.9,2.9-5.8,7.3C452.5,288.7,452.4,297.4,452.3,306.2z
	 M425.7,269.8c-2.4-1.2-3.6-1-5.9,0.1c-7.7,3.7-11.4,9.2-9.7,17.8c0.3,1.7,0,3.5,0,5.2c0,4.4,0.1,8.8,0,13.1
	c-0.1,2.8,0.7,4.2,3.8,4.1c5.9-0.2,11.9-0.1,17.8,0c2.7,0.1,3.7-1,3.7-3.7c-0.1-6.3-0.8-12.7,0.1-18.9
	C437,278.7,433.1,273.6,425.7,269.8z M519.8,351.7c0-4.2,0-8.4,0-12.6c0-1.4,0.3-3-0.9-4c-3.6-2.7-7.1-5.9-11.2-7.5
	c-2.6-1-5,2.4-7.5,4c-2.6,1.7-5.9,2.9-5.8,7.3c0.3,8.7,0.2,17.5,0,26.2c0,2.9,0.9,4.1,3.9,4c5.8-0.2,11.6-0.2,17.3,0
	c3.3,0.1,4.3-1.2,4.1-4.3C519.6,360.5,519.8,356.1,519.8,351.7z"/>
<path :style="{fill:'rgba(201, 71, 58, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M190.9,200.6c0.1,5.6,0.2,11.2,0.3,16.8c2.1,2.8,1.2,6,1.4,9.1c0.2,5.7,0.5,6,6.4,6.2
	c2.8,0.1,5.6-0.3,8.3,0.7c0.6,0.3,1,0.7,1.4,1.2c1.3,5.3,1.4,10.6,0,15.8c-0.2,0.2-0.4,0.5-0.7,0.7c-56.9,0-113.8,0-170.6,0
	c-2.1,0-4.2-0.1-6.3-0.1c0-4.4,0-8.8-0.1-13.1c-0.1-2.7,0.7-4,3.5-3.6c0.7,0.1,1.4,0.1,2.1,0c3.6-0.3,8.9,1.7,10.5-0.9
	c2.3-3.8,0.6-9.2,0.8-13.9c0-1.6-0.9-2.1-2.4-2c-1.1,0-2.1,0.1-3.2,0c-3.6-0.3-8.8,1.7-10.5-0.9c-2.4-3.8-0.6-9.2-0.8-13.8
	c-0.1-1.6,0.8-2.2,2.3-2.1c0.5,0,1.1,0,1.6,0C86.8,200.5,138.8,200.6,190.9,200.6z M393.2,217.5c0.1-5.6,0.2-11.2,0.3-16.8
	c52.1,0,104.1,0,156.2-0.1c2.9,0,3.9,0.7,4,3.8c0.4,12.9,0.5,13-12.5,13.1c-3.2,0-4.6,0.6-4.6,4.3c0,12.5-0.2,12.6,12.4,12.5
	c3.8,0,4.9,1.2,4.6,4.8c-0.3,4-0.1,8.1-0.2,12.1c-57.2,0-114.5,0.1-171.7,0.1c-1.8,0-3.5,0-5.3,0c-0.2-0.2-0.4-0.5-0.6-0.7
	c-1.4-5.2-1.2-10.4-0.1-15.7c0.3-0.6,0.7-1,1.3-1.3c3.4-1.3,6.9-0.7,10.4-0.8c3.1-0.1,4.3-1.5,4.5-4.5
	C392,224.6,390.9,220.8,393.2,217.5z M376.5,386.1c43.3-0.1,86.7-0.1,130-0.2c15.6,0,31.2,0.1,46.9,0.1c0,5.5,0,11.1,0,16.6
	c-51.8,0-103.6,0.1-155.4,0.1c-7.2,0-14.4,0-21.6,0c-0.2-0.2-0.4-0.5-0.7-0.7C374.7,396.8,373.8,391.4,376.5,386.1z M30.9,386.1
	c59,0,117.9,0,176.9,0c2.7,5.2,1.8,10.6,0.7,16c-0.2,0.2-0.4,0.5-0.7,0.7c-57.1,0-114.1,0-171.2,0c-1.9,0-3.9-0.1-5.8-0.1
	C30.9,397.2,30.9,391.6,30.9,386.1z M431.1,107.6c2.1-0.1,3.4,1.1,4,2.8c2.7,6.7,7.4,11.2,13.9,14.2c4.7,2.2,4.6,6.2-0.3,8.4
	c-6.2,2.9-10.8,7-13.3,13.4c-0.7,1.8-1.8,3.4-4.1,3.5c-2.6,0.1-3.8-1.5-4.6-3.5c-2.6-6.3-7-10.7-13.4-13.3c-1.8-0.8-3.3-1.9-3.3-4.2
	c0-2.5,1.5-3.8,3.6-4.6c6.1-2.5,10.5-6.8,13-13C427.4,109.2,428.6,107.5,431.1,107.6z M174.3,128.3c0.1,2.1-1.1,3.4-2.8,4.1
	c-6.7,2.7-11.4,7.3-14.1,14c-0.8,1.9-2.1,3.3-4.3,3.2s-3.4-1.6-4.2-3.5c-2.6-6.3-6.9-10.8-13.3-13.4c-1.8-0.7-3.4-1.9-3.5-4.2
	c-0.1-2.5,1.5-3.9,3.6-4.7c6.4-2.6,10.8-7,13.3-13.4c0.7-1.9,2-3.4,4.2-3.5c2.1,0,3.5,1.3,4.3,3.2c2.6,6.5,7.1,11.2,13.7,13.7
	C173,124.8,174.5,126,174.3,128.3z M207.9,436.5c1.8,1.7,4.1,1.7,6.4,1.7c14,0.1,27.9,0.1,41.9,0c2.3,0,4.6,0,6.4-1.7
	c5.8-9,14.1-14.4,24.5-16.7c-26.4,0-52.8-0.1-79.2-0.1C207.9,425.3,207.9,430.9,207.9,436.5z M207.9,470.3c1.9,1.7,4.2,1.6,6.4,1.7
	c12.5,0.1,25.1,0.1,37.6,0c2.2,0,4.6,0.1,6.4-1.6c0-5.7,0-11.3,0-17c-16.8,0-33.6,0-50.4,0.1C207.9,459,207.9,464.7,207.9,470.3z
	 M207.9,504c16.8,0,33.6,0.1,50.4,0.1c0-5.7,0-11.3,0-17c-16.8,0-33.6,0.1-50.4,0.1C207.9,492.8,207.9,498.4,207.9,504z
	 M376.4,385.8c-2.3-1.8-5-1.4-7.6-1.4c-11.6-0.1-23.1,0-34.7,0c-6.1,0-6.6-0.5-6.6-6.6c0-28.2,0-56.4,0-84.6c0-6.1,0.5-6.5,6.7-6.5
	c11.6-0.1,23.1,0,34.7,0c2.6,0,5.3,0.3,7.5-1.7c0-5.6,0-11.2,0-16.8c-2-1.8-4.5-1.7-7-1.7c-51.6,0-103.1,0-154.7,0
	c-2.4,0-5-0.1-7,1.7c0,5.6,0,11.2,0,16.9c2.2,1.9,4.9,1.7,7.5,1.7c11.6,0.1,23.1,0,34.7,0c6.2,0,6.7,0.5,6.7,6.5
	c0.1,28.2,0,56.4,0,84.6c0,6.1-0.5,6.6-6.6,6.6c-11.6,0.1-23.1,0-34.7,0c-2.6,0-5.3-0.3-7.6,1.4l-0.1,0.4c0,5.5,0,11.1,0,16.6
	c56.2,0,112.5,0,168.7,0c0-5.5,0-11.1,0-16.6C376.5,386.1,376.4,385.8,376.4,385.8z M370,438.2c2.3,0,4.6,0,6.4-1.7
	c0-5.6,0-11.2,0-16.8c-26.4,0-52.8,0.1-79.2,0.1c10.4,2.3,18.6,7.8,24.4,16.7c1.8,1.7,4.1,1.7,6.4,1.7
	C342.1,438.3,356.1,438.3,370,438.2z M326,453.3c0,5.7,0,11.3,0,17c1.7,1.6,3.8,1.6,5.9,1.6c12.9,0.1,25.8,0.1,38.6,0
	c2.1,0,4.2-0.1,5.9-1.6c0-5.6,0-11.3,0-16.9C359.7,453.4,342.8,453.4,326,453.3z M326,504.1c16.8,0,33.6-0.1,50.4-0.1
	c0-5.6,0-11.2,0-16.8c-16.8,0-33.6,0-50.4-0.1C326,492.7,326,498.4,326,504.1z M321.4,234.2c-37.9,0-75.7,0.1-113.6,0.2
	c0,5.5,0,11.1,0.1,16.6c56.2,0,112.5,0,168.7,0c0-5.5,0-11.1,0.1-16.6C358.2,234.3,339.8,234.2,321.4,234.2z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M207.8,217.4c0,5.6,0.1,11.1,0.1,16.7c-0.2,0-0.3,0-0.5,0c-5.3-0.3-12.4,2.4-15.5-1.1
	c-3-3.4-0.8-10.3-0.7-15.6C196.7,217.5,202.2,217.4,207.8,217.4z M376.4,234.2c0-5.6,0.1-11.1,0.1-16.7c5.5,0,11.1,0,16.6,0
	c0.1,5.4,2.3,12.4-0.7,15.6C389.1,236.6,381.9,233.9,376.4,234.2z M77.6,234.2c-0.2,0-0.4,0-0.5,0c-14.2,0-14.2,0-12.5-14.1
	c0.2-2,0.9-2.7,2.9-2.7c6.5,0.1,13,0.1,19.5,0c2.3,0,3.2,0.9,3,3.1c0,0.3,0,0.7,0,1.1C90.2,234.2,90.2,234.2,77.6,234.2z
	 M119.2,234.2c-13,0-12.9,0-12.6-13.1c0.1-3,0.9-4,3.9-3.9c6,0.2,11.9,0.2,17.9,0c2.7-0.1,3.5,0.8,3.6,3.6
	C132.6,234.2,132.7,234.2,119.2,234.2z M161.2,234.2c-12.7,0-12.6,0-12.4-12.7c0-3.1,0.8-4.4,4.1-4.2c6,0.3,11.9,0.2,17.9,0
	c2.4,0,3.3,0.7,3.4,3.2C175.1,234.2,175.2,234.2,161.2,234.2z M423.3,217.4c12.3,0,12.2,0,12.2,12.4c0,3.3-0.6,4.7-4.3,4.6
	c-6-0.3-11.9-0.1-17.9-0.1c-5.2,0.1-3.5-4.2-2.9-6c1.1-3.6-4-9.2,3-10.7C416.6,216.8,420,217.4,423.3,217.4z M465.1,234.2
	c-14,0-13.9,0-12.8-13.8c0.2-2.3,0.8-3.1,3.1-3c6.3,0.1,12.6,0.1,19,0c2.5-0.1,3.2,0.9,3.3,3.4C478.4,234.2,478.5,234.2,465.1,234.2
	z M507.1,234.2c-13,0-12.8,0-12.7-12.8c0-3.1,0.8-4.3,4.1-4.2c5.7,0.3,11.6-0.4,17.3,0.2c8.4,0.9,2.4,7.6,3.8,11.4
	c1,2.7,0.7,6-4.1,5.4C512.7,233.9,509.9,234.2,507.1,234.2z"/>
<path :style="{fill:'rgba(253, 202, 104, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M369.5,401.1c-51.6,0-103.1,0-154.7,0c-2.4,0-5-0.1-7,1.7l0.1,0.1c0,5.6,0,11.2,0,16.8
	c1.4,1.3,3.1,1.7,4.9,1.6c24.8-0.6,49.6,1.7,74.3-1.5c3.4,0,6.8,0,10.2,0c4.2,0.1,8.2,1.6,12.4,1.6c19.9,0,39.9,0,59.8,0
	c2.4,0,4.9,0.1,7-1.7c0-5.6,0-11.2,0-16.8l0.1-0.1C374.5,401,372,401.1,369.5,401.1z M207.9,193.1c26.4-10.2,52.3-21.5,78.4-32.3
	c2.5-1,4.8-2.8,7.9-1.5c14.2,6,28.4,11.8,42.6,17.6c13.2,5.4,26.2,11.5,39.7,16.2c0-13,0-25.9,0-38.9c0-2.6-0.2-4.4-3.6-4.3
	c-11.7,0.1-23.5,0.1-35.2,0c-2,0-3.6,0.5-3.3,2.9c0.6,4.5-2.1,4.6-5.5,4.6c-18.9-0.1-37.9-0.2-56.8,0.1c-4.2,0-5.4-1.2-5.3-5.3
	c0.2-23.1,0.1-46.3,0.1-69.4c-5.6-3-11.2-2.5-16.8-0.3c0,20.9-0.1,41.7,0,62.6c0,3.9-1.1,5.2-5,5.1c-10.5-0.3-21,0.2-31.5-0.2
	c-4.8-0.2-5.9,1.5-5.8,6C208,168.2,207.9,180.7,207.9,193.1z M251.9,502.3c-12.5-0.1-25.1-0.1-37.6,0c-2.3,0-4.6,0-6.4,1.7
	c0,11.2,0,22.4,0,33.6c15.8,0.1,31.5,0.1,47.3,0.2c2.4,0,3.4-0.7,3.3-3.2c-0.2-10.2-0.2-20.3-0.2-30.5
	C256.5,502.2,254.2,502.3,251.9,502.3z M332.4,502.3c-2.3,0-4.6-0.1-6.4,1.7c-0.1,10.2,0,20.3-0.2,30.5c0,2.6,0.9,3.3,3.3,3.2
	c15.8-0.1,31.5-0.2,47.3-0.2c0-11.2,0-22.4,0-33.6c-1.8-1.7-4.1-1.7-6.4-1.7C357.5,502.3,345,502.3,332.4,502.3z M207.9,453.4
	c1.8,1.7,4.1,1.7,6.4,1.7c12.5,0.1,25.1,0.1,37.6,0c2.3,0,4.6,0.1,6.4-1.7c0.2-5.9,2.1-11.4,4.3-16.8c-18.2,0-36.5,0-54.7,0
	C207.9,442.2,207.9,447.8,207.9,453.4z M332.4,455.1c12.5,0.1,25.1,0.1,37.6,0c2.3,0,4.6,0,6.4-1.7c0-5.6,0-11.2,0-16.9
	c-18.2,0-36.5,0-54.7,0c2.2,5.4,4.1,10.9,4.3,16.8C327.8,455.1,330.2,455.1,332.4,455.1z M251.9,488.8c2.3,0,4.6,0.1,6.4-1.7
	c0-5.6,0-11.1,0-16.7c-16.8,0-33.6,0-50.4,0c0,5.6,0,11.2,0,16.8c1.8,1.7,4.1,1.7,6.4,1.7C226.8,488.9,239.4,488.9,251.9,488.8z
	 M326,487.1c1.8,1.8,4.1,1.7,6.4,1.7c12.5,0.1,25.1,0.1,37.6,0c2.3,0,4.6,0,6.4-1.7c0-5.6,0-11.2,0-16.8c-16.8,0-33.6,0-50.4,0
	C326,475.9,326,481.5,326,487.1z M253.1,284.7c-15.1,0.2-30.1,0.1-45.2,0.1c0,33.6,0,67.3,0,100.9c15.6,0.1,31.2,0,46.8,0.3
	c4.2,0.1,3.8-2.5,3.8-5.2c0-30.3-0.1-60.6,0.1-91C258.6,285.5,257,284.7,253.1,284.7z M369.5,249.4c-51.6,0-103.1,0-154.7,0
	c-2.4,0-5-0.1-7,1.6l0.1,0.1c0,5.6,0,11.2,0,16.8c56.2,0,112.4,0,168.6,0c0-5.6,0-11.2,0-16.8l0.1-0.1
	C374.5,249.3,372,249.4,369.5,249.4z M329.6,386c15.6-0.2,31.2-0.2,46.8-0.3c0-33.6,0-67.3,0-100.9c-15.2,0-30.5,0-45.7,0
	c-2.9,0-4.9,0.1-4.9,4.1c0.1,31,0.1,62,0,93.1C325.8,384.7,326.5,386.1,329.6,386z M376.5,217.4c-56.2,0-112.5,0-168.7,0
	c-2.4,5.6-2.5,11.2,0.1,16.7l-0.1,0.2c2.1,1.6,4.6,1.5,7.1,1.5c51.6,0,103.2,0,154.7,0c2.5,0,4.9,0.1,7.1-1.5l-0.1-0.2
	C379,228.6,378.9,223,376.5,217.4z M279.3,386c8.2-0.1,16.5-0.2,24.7,0c3.9,0.1,5.1-1,5.1-5c-0.2-15.3-0.1-30.5-0.1-45.8
	s0-30.5,0-45.8c0-2.7,0-4.8-3.8-4.7c-8.8,0.2-17.5,0.1-26.3,0c-2.7,0-3.7,0.9-3.7,3.7c0.1,31.2,0.1,62.5,0,93.7
	C275.3,385.2,276.4,386.1,279.3,386z"/>
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
                                    <button :style="{background:'rgba('+getterBuckinghamPalaceBg1+')'}" @click="ShowElement(getterBuckinghamPalaceBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBuckinghamPalaceBg2+')'}" @click="ShowElement1(getterBuckinghamPalaceBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBuckinghamPalaceBg3+')'}" @click="ShowElement2(getterBuckinghamPalaceBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBuckinghamPalaceBg4+')'}" @click="ShowElement3(getterBuckinghamPalaceBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBuckinghamPalaceBg5+')'}" @click="ShowElement4(getterBuckinghamPalaceBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var BuckinghamPalace= [
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
            var randomNumber = BuckinghamPalace[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BuckinghamPalace[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BuckinghamPalace'){
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
                getterBuckinghamPalaceBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BuckinghamPalace') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBuckinghamPalaceBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BuckinghamPalace') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBuckinghamPalaceBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BuckinghamPalace') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBuckinghamPalaceBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBuckinghamPalaceBg5: {
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
                            name:'BuckinghamPalace',
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