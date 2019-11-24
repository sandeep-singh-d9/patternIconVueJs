<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.59);">
                  <path style="fill:#38D5BC; transform:scale(0.2)" d="M244.9,415.5c6.2-3.9,9.1-10.6,13.1-16.3c2.6-3.7,4.3-3.7,7.5-0.8c7.5,6.9,15.2,13.4,23,20.1
	c2,1.7,3.1,3.1,1.1,5.8c-5,6.9-9.7,13.9-14.5,20.9c-0.9,0.6-1.8,0.4-2.6,0c-7.5-4.1-7.5-4.1-11.8,3.1c-1,1.6-2,3.2-2.9,4.8
	c-2,3.4-4.2,6.8,2.1,8.2c1.6,0.4,2.7,1.9,2.9,3.7c-4.7,10.7-10.6,20.6-19.4,28.5c-4.3,6.2-8.6,12.4-12.9,18.5
	c-5.9-0.3-7-5.2-9.4-8.9c0.5,8.4,2,16.9,3,25.5c1,8.7,2.3,17.3,1.9,26.1c-2.2,6.6-9.4,6.4-13.8,10.1c-1.2,1.5-2.2,3-4,3.9
	c-11.5,5.5-22.3,12.3-34.7,15.8c-2.6,0.7-5.4,2.4-7.9-0.3c-1.3-2.6-1.2-5.4-1.2-8.1c1.9-23.4,4.4-46.7,6.4-70
	c2-24.3,5-48.6,6.5-72.9c0-0.2,1.2-2-0.7-1.2c-0.4,0.1-0.5,0.8-0.8,1.2c-23.4,34.4-46.2,69.2-69.5,103.7c-1.7,2.5-2.6,6.3-6.7,6.5
	c-5-11.4-9.9-22.9-15-34.2c-1.2-2.7,0.2-4.5,1.4-6.5c4.1-6.9,8.2-13.8,12.2-20.7c0.4-3.9,2.8-7,4.7-10.2
	c19.5-31.5,38.1-63.5,58.3-94.6c8.6-13.2,13.3-27.7,17.7-43.6c-9.5,12.1-17.7,24-26.6,35.5c-16.9,21.8-33,44.1-49.8,65.9
	c-1.5,1.9-2.3,4.9-5.8,4.2c-4.1-14-8.2-28.1-12.4-42.1c-0.9-3,1-4.3,2.6-6c4.7-4.9,10.5-8.8,14.4-14.6c10.9-12.9,24.4-23,36.4-34.8
	c4.4-4.3,9-8.4,13.4-12.7c1.9-1.8,3.7-3.5,2-6.7c-2.1-4,1-4,3.4-3.3c8.7,2.7,16.8,1.9,24.4-3.4c2.1-1.5,4.1-0.8,5.4,1.5
	c0.7,7.9,2.7,15.2,10.1,19.7c5.3,15.7,9.2,31.7,10.3,48.2c-4,8.9-10.7,16-15.6,24.3c-1.4,2.4-3,4.7-4.3,7.3
	c4.9-2.7,9.9-4.9,14.5-7.7c2.6-1.6,5.4-3.4,8.3-0.5c3.3,10.4,3.1,21.3,4.6,32c0.4,2.8-0.2,5.7,0.5,8.5c0.5,2.3,0.7,4.6,0.7,7.8
	C225.4,442.8,234.7,428.8,244.9,415.5z M201.9,660.2c5.4,0,10.7,0.1,16.1,0.1c2.3,0,4.8,0.4,5.6-2.7c7.1,5.3,3.5,13,4.3,19.7
	c-46.3,0-92.6,0-138.9-0.1c0-0.9,0-1.9,0-2.8c0.1-4.3-1.1-9.2,0.7-12.6c2-3.6,7.4-0.8,11.1-1.7c0.8-0.2,1.6-1,2.3-1.5
	c4.7-1.1,9.5-0.6,14.2-0.6c21.6-0.1,43.2,0,64.8-0.1C188.9,657.9,195.4,658.6,201.9,660.2z M184.8,288.2
	c-7.9-4.4-12.9-11.3-17.2-20.1c-5.6,10.2-14.1,15.9-22.7,21.5c-1.2,2.7-1.9,5.9-5.9,5.7c-3.5,1.9-2.5-1-2.7-2.6
	c-0.7-6.3,1.4-12.7-1.4-18.9c-1.5-1.9-1.5-3.8,0-5.7c0.8-2.7,1.7-5.5,2.5-8.2c-0.1-1.5,0.9-2.4,1.8-3.2c1.7-1.5,3.9-2.8,4.3-5.4
	c2.2-2.7,5.3-3.4,8.4-4.1c2.8-0.7,5.6-1.3,8.5-2c3.6-3.9,7.7-2.8,11.9-1.5c2.5,2.8,6,3.1,9.4,3.2c3.2,0.8,6,2.1,7.3,5.5
	c1.4,1.4,2.8,2.8,4.2,4.2c0.9,1.1,2.8,1.3,2.8,3.1c0.5,2.8,1,5.6,1.5,8.4c1.5,1.9,1.4,3.8,0,5.7c-0.4,0.5-0.9,1.1-1.3,1.6
	c-1.6-0.8-2.2-2.4-2.9-3.9c-10.3-21.4-35.7-24.3-50.9-5.9c-0.5,0.5-0.8,1.2-1.3,1.7c14.3-15.4,40.7-13.5,51.4,3.6
	c1.4,2.2,3,4.3,2.3,7.2c-0.9,6.1,1.7,12.5-1.5,18.4C188.3,296,187.3,291.4,184.8,288.2z M46.5,111.1c-3.9-0.5-3.5-3-2.7-5.7
	c1.5-5,3.2-9.9,4.4-14.9c1.3-5.5,3.6-9,10-7.8c6.1,1.2,2.7-5.6,5.7-7c0.2,0.3,0.4,0.5,0.7,0.8c1.1,3.3,3.3,4.7,6.8,4.7
	c5.3,0,10.6-0.2,15.9-0.8c0.5,1.9,1.9,2.8,3.7,2.4c7.7-1.7,9.7,3.1,11.1,9.2c1,4.6,2.6,9.1,4.1,13.6c0.9,2.8,1.1,5.2-2.7,5.7
	C84.5,112.7,65.5,112.7,46.5,111.1z M76.2,279.3c3.3,5-0.1,11.4,4.1,16.6c7.8-7.7,15.6-15.4,23.5-23.1c1.3-1.3,1.1-3,1.3-4.7
	c5.4,6.4,7.9,14.4,12.3,21.3c1.8,3-1.2,4.8-1.1,7.2c-4.4,0.7-6.4,4.6-9.2,7.3c-7.5,7.4-14.7,15.1-22.1,22.7
	c-1.7,1.2-3.4,2.5-5.4,3.9c-4.9-8.8-8.6-18-12.3-27.2c-0.7-1.7-0.4-3.1,0.4-4.7C70.6,292.3,73.4,285.8,76.2,279.3z"/>
<path style="fill:#FC6650; transform:scale(0.2)" :class="ValueId+'_color1'" d="M227.9,677.3c16.6,0.1,33.2,0.4,49.8,0c5.8-0.1,7.4,1.8,7,7.3c-0.5,6.4-0.4,12.8,0,19.2
	c0.3,5-1.2,6.5-6.3,6.4c-46.5-0.2-93.1-0.1-139.6-0.1c-33,0-66-0.2-99,0.1c-6.5,0.1-8.3-1.8-7.7-8c0.6-6.1,0.4-12.4,0.1-18.5
	c-0.3-4.9,1.2-6.5,6.3-6.4c16.8,0.3,33.7,0,50.6-0.1c2.8-2.2,6.2-2.2,9.5-2.2c40,0,79.9,0,119.9,0
	C221.7,675.1,225.1,675.1,227.9,677.3z M89.2,35.8c1,1.6,1.9,3.2,2.9,4.8c9.4,14.8,8,23.9-5.2,35.1C79.3,79,71.6,78.8,64,75.9
	l-0.1-0.4c-7.2-7.1-13.2-14.5-9-25.6c3.1-2.3,3.2-6.1,4.5-9.3c4-5.2,8.3-10.1,12-15.5c3.3-4.8,6-4.8,9.1-0.1c0.9,1.3,2,2.5,3,3.7
	C85.6,31,87.4,33.4,89.2,35.8z"/>
<path style="fill:#2FB39E; transform:scale(0.2)" :class="ValueId+'_color3'" d="M261.9,465c-0.6-1.3-1.6-2.7-3-2.7c-9,0.2-6-4.3-3.6-8.6c0.9-1.6,2-3.2,3-4.8c6.8-11,6.8-11,16.7-3.8
	c0.2,3.6,5.4,4.1,4.6,8.8c-2,11.9-2,12.2-14.8,9.6C263.9,464.2,263.4,465.7,261.9,465z"/>
<path style="fill:#2FB49F; transform:scale(0.2)" d="M194.8,278.3c-8.7-23.9-43.6-25.4-56-5.5c-1.8-8.7,11.6-19,22-20.3c17.4-2.1,32,4.4,35.5,23
	C196.4,276.8,196.2,277.9,194.8,278.3z"/>
<path style="fill:#31B39E; transform:scale(0.2)" d="M46.5,111.1c3.8-2.2,7.9-1,11.8-1.1c12.8-0.2,25.6-0.1,38.3,0c2.3,0,4.8-0.7,6.8,1.1
	c-7,3-14.1,5.9-21.1,8.9c-4.9,3-9.8,3-14.6,0C60.6,117,53.6,114,46.5,111.1z"/>
<path style="fill:#2FB39E; transform:scale(0.2)" :class="ValueId+'_color3'" d="M184.7,316.7c-0.9-0.2-2.2-0.9-2.6-0.5c-8.8,7.7-18.7,7.6-29.8,3.8c5.7,3.2,4.7,5.7,0.9,9.2
	c-16.3,15-32.4,30.4-48.6,45.5c-1,0.9-2.4,1.3-3.7,1.9c-5.3-16.6-10.7-33.3-16-49.9c-0.9-2.2,0.6-3.6,1.9-4.9
	c7.7-7.9,15.4-15.7,23.3-23.3c1.6-1.5,3.3-3.6,6-1.8c6.6,4.2,13.2,8.3,19.8,12.5c3-0.3,4.8,2.7,8.1,2.7c0.7-7.5,0.3-14.9,0-22.2
	c1.1-3.9,5-4.7,7.7-6.8c4.5-3.5,8.5-7.4,11.9-12c1.2-1.6,3.3-4.4,4.9-2c5.2,7.8,12.9,13.4,17.9,21.3c0.7,6.5,0.4,13,0.3,19.5
	C186.9,312.2,186.9,314.8,184.7,316.7z M76.2,279.3c-2.9-28-5.9-56-8.8-84c-0.5-4.4-2.1-8-5.5-11c-5.6-5.1-10.7-10.8-16.2-16
	c-2.5-2.3-3-4.2-1.1-7.3c2.6-4.2,4.9-8.7,6.8-13.2c2.3-5.9,5.5-9.6,12.5-8.2c4.6,1,3.8-2.8,4.2-5.4c7.4,3.8,9.4,11.7,13.5,18
	c1,2.3,1.5,4.7-0.2,6.9c-3.4,3.4-7.3,6.2-12,7.7c-3,0.5-5.7-0.6-8.3-1.6c3.7,2.6,7.3,5.5,9.4,9.8c1,3.9,0.4,7.9,1.7,11.7
	c0.4,1.3,0.7,3,2.4,3.1c2.2,0.1,2.4-1.8,2.7-3.4c1.1-4.8,1.2-9.7,2-14.5c1.8-4.6,3.4-9.2,5-13.8c1.4-4.2,1.8-8.2-0.9-12.3
	c-1.1,0.8-1.2,5.2-4,1.6c-0.5-4.6-3.2-9.5,2.3-13.1c0,3.3,0.3,6.3,4.9,5.4c3.6-0.7,5.1,1.3,6.9,4.4c8.9,15.3-0.6,27.2-7.4,39.1
	c-2.3,4.1-3.4,6.8-2.2,11.2c7.1,24.6,14,49.2,21,73.8c1.9,3.1,0.4,5.4-1.7,7.6c-6,6.3-12.1,12.6-18.5,18.5c-4.6,4.3-7,3.3-8.4-3
	C75.6,287.3,76.3,283.3,76.2,279.3z M96.4,439.2c12.3-16.1,24.7-32.1,36.9-48.3c14.6-19.4,29.1-39,43.7-58.4
	c0.9-1.3,1.9-2.8,4.5-2.3c-4.8,17-9.8,33.6-19.5,48.8c-20.4,31.9-39.8,64.4-59.6,96.6c-1.4,2.2-3,4.2-4.4,6.4
	c-4.4-8.4-8.6-16.8-13.2-25.1c-1.5-2.7-0.7-4.2,1.1-6.1C89.5,447,92.9,443.1,96.4,439.2z M162,467.8c-5.8,7.7-8.3,17-12,25.6
	c-9.4,21.7-20.2,42.9-27.6,65.4c-6.5,20-12.2,40.3-18.2,60.5c-0.5,1.6-0.4,3.3-0.6,4.9c-3-3.5-1-7.7-1.2-11.5
	c-1.2-23.1-2.1-46.3-3.1-69.4c23.3-34.7,46.5-69.4,69.8-104.1c1.3-1.9,2.8-3.8,4.2-5.6c1.4,1.3,1.5,3,0.9,4.6
	c-3.7,9.7-6.1,19.9-11.4,29C162.6,467.4,162.3,467.6,162,467.8z M201.9,660.2c-30.7,0-61.5,0.1-92.2,0.1c-2.3,0-4.8,0.6-6.5-1.7
	c2.5-10.6,8.1-20.2,10-31c23.7,8.5,47.4,17,71.1,25.6C190.2,655.4,196,657.9,201.9,660.2z M218.2,359.2c-5.5-0.1-4.9,3.7-4.9,7.3
	c0,28.1,0,56.2-0.1,84.2c-2.6-7.4-0.9-15.3-2.8-22.8c-1.6-6.6-0.7-13.6-2.9-20.1c-3.8-6.7-3.7-14-2.9-21.4
	c-0.8-14.4-5.1-28.2-8.2-42.2c-0.6-2.5-1.2-5-1.8-7.6c3.7-1.7,5.2,4.1,8.8,2.6c1.2,4.2,4,7.2,7.9,9
	C215.9,350.6,218.5,353.9,218.2,359.2z M225.8,554.7c-3.3-12.5-3.5-25.4-5.2-38.1c-0.7-4.8-2.8-9.6-1.2-14.8
	c5.6,1.3,6.2,8,10.9,10.3C233,526.7,230.9,540.9,225.8,554.7z M64,75.9c7.7-0.1,15.3-0.1,23-0.2c0.1,1.5,0.3,3,0.4,4.4
	c-2.7,2.1-19.8,3.9-22.3,2.2C62.7,80.7,63.7,78.2,64,75.9z M166.2,584.7c0.9,4.1,4.1,6.8,6.5,9.9c2.2,2.9,2.2,4.5-1.4,5.7
	c-11.6,4-23.2,8-34.8,12.1c-3.7,1.3-4.7,0.3-3.8-3.6c7.2-33.6,14.3-67.2,21.3-100.9c2.8-13.3,5.3-26.8,8-40.1l0,0
	c5.9,0.8,5,5.7,5,9.4c0.2,19.5,0.2,39,0.1,58.5c-0.1,10.4-0.6,20.9-1.4,31.3c-0.3,3-0.7,6.2,0.5,9.1
	C166.2,578.9,166.2,581.8,166.2,584.7z"/>
<path style="fill:#279584; transform:scale(0.2)" :class="ValueId+'_color4'" d="M166.2,584.7c16.5-3.9,30.6-13.1,45.7-19.9c3.9,30.9,7.7,61.9,11.6,92.8c0.7,4.5-2.8,4.3-5.4,4.6
	c-4.9,0.5-9.9,0.5-14.8-0.2c-27.8-9.7-55.6-19.6-83.4-29.5c-2.8-1-5-2.5-6.8-4.8c-3.2-1.1-6.4-2.3-9.7-3.4c-1.8-4.1,0-7.9,0.9-11.7
	c11.9-48.2,31.5-93.5,51.8-138.5c1.1-2.5,1.7-6.2,5.9-5.9c2.8,4.4,0.3,8.8-0.5,13c-8.1,39.9-17.1,79.6-25.1,119.6
	c-0.6,2.8-2.9,6.4-0.2,8.6c2.3,1.9,5.4-0.6,8-1.5c7.1-2.5,14.2-5.3,21.5-7.5c4.8-1.5,6.3-3.6,2.8-8
	C166.9,590.2,164.3,588,166.2,584.7z M244.9,415.5c0.6,4.6-3.4,6.8-5.5,9.9c-7.3,10.9-15,21.5-22.6,32.2c-0.6,0.9-1.3,2-3.5,1.8
	c0-2.9,0-5.8,0-8.7c-2.2-28.3-2.8-56.7-2.1-85c0.1-4,0.6-8.7,7-6.6c4.4-0.5,4.1,3.3,4.8,5.7c3.5,12,7.1,24,9.8,36.2
	C234.3,408.4,237.4,413.6,244.9,415.5z M203.5,339.3c-0.3,2.4-1.6,2.5-3.3,1.4c-1.9-1.3-3.7-2.7-5.5-4c-10.3-3.2-9.9-11.7-10-20
	c0-9.5,0.1-19,0.1-28.5c3.8,1.8,5.9,5.5,8.5,8.4C196.7,310.9,200.1,325.1,203.5,339.3z M261.9,465c1-0.5,2-0.9,2.9-1.4
	c-0.1,9.9-0.3,19.9-0.1,29.8c0.1,4.1-1.2,4.9-4.9,3.9c-5.5-1.5-11-2.6-16.6-3.8C249.5,484,255.7,474.5,261.9,465z M67.7,120
	c4.9,0,9.8,0,14.6,0c-0.2,4.8-0.3,9.5-0.5,14.3c-2.3,4.7-0.9,9.6-0.9,14.4c1,1.4,1,2.8-0.3,4c-4.2-6.2-8.3-12.3-12.5-18.5
	C68,129.5,67.8,124.7,67.7,120z M139,295.3c2.2-1.7,3.1-4.7,5.9-5.7c3.2,8.4,0.3,17.1,1.8,26.4c-4.6-1.9-7.9-4-10.6-6.9
	C137,304.6,138,300,139,295.3z M172.4,243.8c-3.8,1.8-8.2-0.7-11.9,1.5c1.8-8.7,3.7-17.4,5.5-26.2c0.5,0,1,0.1,1.5,0.1
	C169.1,227.4,170.7,235.6,172.4,243.8z M189.1,252.5c-2.5-1.8-5.6-2.8-7.3-5.5c8.6-5.8,17.3-11.6,25.9-17.5c0.2,0.3,0.5,0.6,0.7,0.9
	C202,237.8,195.5,245.1,189.1,252.5z M152,247.2c-2.2,2.6-5.1,3.8-8.4,4.1c-5.8-6.4-11.6-12.8-17.5-19.3c0.3-0.4,0.7-0.9,1-1.3
	C135.4,236.2,143.7,241.7,152,247.2z M134.9,268.2c0,1.9,0,3.8,0,5.7c-5.7-0.7-11.4-1.4-17.2-2.1c0-0.5-0.1-1.1-0.1-1.6
	C123.4,269.5,129.1,268.9,134.9,268.2z M197.6,274c0-1.9,0-3.8,0-5.7c5.1,0.6,10.1,1.2,15.2,1.8c0.1,0.7,0.2,1.4,0.3,2.1
	C208,272.7,202.8,273.4,197.6,274z M139.3,256.8c-0.1,1.4-0.6,2.5-1.8,3.2c-5.5-0.7-11-1.5-16.6-2.2
	C127,256.2,133.1,256.5,139.3,256.8z M196.2,259.8c-1.3-0.7-2.4-1.6-2.8-3.1c6.2,0,12.3,0,18.5,0c0,0.3,0.1,0.7,0.1,1
	C206.6,258.4,201.4,259.1,196.2,259.8z M166.1,576c-2.2-2.2-1.2-4.9-1.3-7.4c-0.1-30.9-0.1-61.8-0.1-92.7c0-3,0.9-6.4-2.8-8.1
	c2.9-8.1,5.7-16.2,8.6-24.2c1.2-3.3,2.9-6.4,2.8-10c1.9-3.1,3.8-6.2,6.8-11c-2.9,33-5.6,63.7-8.3,94.4
	C170.1,536.6,168.1,556.3,166.1,576z M204.7,386.5c2.2,7,2.6,14.2,2.9,21.4c-8.2,4.1-16.3,8.3-26.3,13.4
	C189.3,408.3,196.2,396.9,204.7,386.5z M69.3,165.6c3.8-2.4,7.5-4.8,11.3-7.1c3.6,4.2,1.3,8.4,0.2,12.7c0.6,5.9-1.3,11.6-1.5,17.5
	c-0.1,2.5-0.9,4-3.6,4c-2.5,0-4.4,0-5-3.4c-0.9-5.1-1.5-10.2-1.4-15.3C67.5,171.1,67,168.3,69.3,165.6z"/>
<path style="fill:#F4FAF9; transform:scale(0.2)" d="M80.8,171.1c-0.1-4.2-0.2-8.5-0.2-12.7c1.8-1.9,0.5-3.8,0.1-5.7c0.1-1.3,0.2-2.7,0.3-4
	c0.5-2.3,1-4.5,1.5-6.8C89.7,149.8,89.1,159.1,80.8,171.1z"/>
<path style="fill:#F1F8F7; transform:scale(0.2)" d="M69.3,165.6c0,2.8,0,5.5-0.1,8.3c-3.9-3.3-7.8-6.6-12.7-10.7C61.6,164.1,65.4,164.8,69.3,165.6z"/>
<path style="fill:#FCD069; transform:scale(0.2)" :class="ValueId+'_color2'" d="M89.2,35.8c-4.2-0.5-5.8-3.1-5.7-7.1c2.1-1,2.4-6.5,6.2-3C93.1,28.9,93.7,32.7,89.2,35.8z M59.4,40.7
	c1.7,4.6,1.6,8.4-4.5,9.3c-3.3-2.4-4.5-5.1-1.8-8.9C55.3,38,57.2,38.8,59.4,40.7z M63.5,57.7c0.7-6.7,6.1-11.8,10.7-17.4
	c0.6-0.8,1.5-0.9,2.5-0.5c6,2.2,13.1,18.3,10.6,24.2c-2.2,5.1-8.9,9-13.8,7.2C68,69.1,63.3,65.8,63.5,57.7z"/>
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
                                    <button :style="{background:'rgba('+getterStatueOfLibertyBg1+')'}" @click="ShowElement(getterStatueOfLibertyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStatueOfLibertyBg2+')'}" @click="ShowElement1(getterStatueOfLibertyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterStatueOfLibertyBg3+')'}" @click="ShowElement2(getterStatueOfLibertyBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterStatueOfLibertyBg4+')'}" @click="ShowElement3(getterStatueOfLibertyBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStatueOfLibertyBg5+')'}" @click="ShowElement4(getterStatueOfLibertyBg5)" :class="this.ValueId+'_color5btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStatueOfLibertyBg6+')'}" @click="ShowElement5(getterStatueOfLibertyBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterStatueOfLibertyBg7+')'}" @click="ShowElement6(getterStatueOfLibertyBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var StatueOfLiberty= [
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
            var randomNumber = StatueOfLiberty[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  StatueOfLiberty[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'StatueOfLiberty'){
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
                getterStatueOfLibertyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'StatueOfLiberty') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStatueOfLibertyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'StatueOfLiberty') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStatueOfLibertyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'StatueOfLiberty') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStatueOfLibertyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterStatueOfLibertyBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStatueOfLibertyBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterStatueOfLibertyBg7: {
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
                            name:'StatueOfLiberty',
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