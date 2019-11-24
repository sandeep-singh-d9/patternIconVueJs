<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#D83A31;transform:scale(0.2)"  :class="ValueId+'_color2'" d="M523.7,261.4c-19.3,55.8-48.3,105-96.1,141.4c-2.5,4.2-6.5,6.3-10.9,7.9c-1.9,0.3-3.9,0.5-5.8,1.2
	c-28.5,11-58.1,15.3-88.5,13.6c-20.3-1.1-39.7-6.8-58.5-14.6c-13.3-5.6-26.5-11.6-39.3-18.3c-13.8-7.2-14.6-17.6-1.3-26
	c13.4-8.4,27.7-15.3,42-22.1c31.4-14.9,63.7-28.2,93.7-46c29.1-17.2,54.7-38.3,73-67.4c3.2-5,5.7-10.4,8.4-15.7
	c1.3-2.5,2.4-5,4.3-7.1c5.6-6.5,11.5-7,17.9-1.3c1.2,1,2.3,2.2,3.5,3.2c0.9,0.8,1.5,1.9,1.8,3.1c0.6,8.1,4.9,14.6,9.6,20.9
	c0.3,0.5,0.4,1,0.5,1.6c-0.1,3-3.4,6.8,0.8,8.9c3.8,1.9,5.8-1.8,7.9-4.2c0.5-0.6,1.1-1.1,1.7-1.5c6.3-2.2,7.6-1.6,9.9,4.2
	c-0.2,3.9-2.5,6.9-4.7,10c-3,4.1-3.4,8.3-0.4,12.6c2.9,4.2,7.1,5.6,11.9,4.6c4.9-0.9,6.9-4.7,7.8-9.2c0.6-2.9,0.7-5.9,1.8-8.6
	c3-2.1,4.1,0.7,5.3,2.4C521.5,256.9,521.8,259.6,523.7,261.4z M389.5,122.3c9.1,11.1,18.5,21.9,25,35c12.6,25.3,13.4,50.3-1.1,74.9
	c-13.5,23-34.5,37.8-56.8,51.2c-32.6,19.5-67.5,34.4-101.2,51.7c-3.1,1.6-6.3,3.2-9.4,4.8c-3.4,0.1-3.6-2.4-3.8-4.8
	c-0.2-2,0.4-3.9,0.7-5.9c0.8-7.1,0.4-7.6-6.7-9.4c-5.3-1.3-8.4-5.1-8.3-11.4c0.1-5.4-0.5-9.2-6.9-11c-5.3-1.5-6.6-8.6-3.4-13.5
	c1-1.5,2.4-2.6,3.7-3.9c5.1-4.7,4.8-6.4-1.5-8.9c-4.6-1.8-5.7-4-4.3-9.4c1.2-4.5,3.8-8.7,4.1-13.5c21.6-25.5,46.4-47.5,72.9-67.6
	c28.5-21.7,59-40.4,90.4-57.4C385.1,122.1,387.1,120.9,389.5,122.3z"/>
<path style="fill:#9A9389;transform:scale(0.2)"  :class="ValueId+'_color4'" d="M336.5,436.9c8.5-1.5,17.2-1.6,25.5-4.2c1.1,4.6,4.6,7.8,7.2,11.4c12.3,17,24.9,33.8,37.1,50.8
	c2.4,3.4,4.6,4.2,8.8,3.3c17.1-3.6,34.4-5,51.8-2.7c3.5,0.4,8.7,0.5,9.1,4.9c0.4,4.2-4.6,4.6-7.9,5.8c-8.1,3-16.8,3.6-26.4,5.1
	c7.8,2.2,14.8,3.4,21.3,6.4c2.1,1,4.2,2.1,6.2,3.4c1.5,1,2.7,2.5,2.2,4.5c-0.5,2.1-2.3,2.5-4.1,2.9c-8.3,2.2-16.6,0.6-24.8-0.3
	c-10-1.2-19.9-3-29.5-6.2c-5.7-1.9-10.9,0.7-16.3,1.2c-10.1,0.9-20.1,1.6-30.1-0.8c-2.8-0.7-6.4-1.4-6.4-5.1c0-3.1,3.2-4.3,5.7-5.3
	c8.3-3.4,17-4.6,27-5c-6.3-8.7-12.1-16.8-18-24.9c-9.9-13.6-20-27-29.8-40.7C343,438.1,340.4,436.4,336.5,436.9z"/>
<path style="fill:#9A9389;transform:scale(0.2)"  :class="ValueId+'_color4'" d="M413.3,412.4c1.2-0.9,2.4-1.8,3.6-2.7c3.6-2.3,7.1-4.5,10.7-6.8c12.5,16.8,25,33.6,37.4,50.5
	c1.8,2.5,3.5,2.9,6.5,2.3c17.1-3.3,34.3-5.9,51.7-3.1c3.6,0.6,8.7,0.7,9.2,4.9c0.6,4.9-5,5.6-8.4,6.7c-6.2,1.9-12.7,2.9-19.9,4.5
	c6.4,2.4,12.8,3.2,18.3,6.2c3.2,1.7,8.4,2.6,7.6,7c-0.8,4.3-6,3.7-9.6,3.9c-14.4,0.8-28.4-1.4-42.1-5.5c-8.1-2.4-15.6-2.3-23.8-1
	c-10.1,1.6-20.5,1.9-30.6-0.7c-2.6-0.7-6.1-1.2-6.3-4.5c-0.2-3.5,3.1-4.8,5.8-5.9c8.3-3.5,17.1-4.3,27-5.1
	C437.7,445.7,425.5,429.1,413.3,412.4z"/>
<path style="fill:#F37B25;transform:scale(0.2)"  :class="ValueId+'_color6'" d="M589.1,215c-3.2-4.4-8.7-4.5-13.1-6.2c-15.4-5.7-30-13-44.8-20.1c-7.9-3.8-16.2-7.1-25.4-7
	c-3.5,0.1-6.1,2.5-10.6,2.3c8.4-7,16.9-7.3,26-5.3c8.2,1.9,15.4,5.8,22.8,9.6c12.1,6.2,24.3,12.1,36.3,18.3
	c3.7,1.9,7.1,4.3,10.6,6.4c0.9,0.6,1.5,1.3,0.3,2.2C590.5,215.2,589.8,215.1,589.1,215z"/>
<path style="fill:#E12B19;transform:scale(0.2)"  d="M515.5,250.8c1.9-6.6,5.3-11.8,12.8-12.8c1.2-0.2,1.5-1.2,1.7-2.1c0.7,9.2-3.6,17.3-6.3,25.6
	c-2.7,1.4-2.9-1.1-3.3-2.5c-0.8-2.9-2.1-5.3-4.6-7c-0.4-0.2-0.6-0.4-0.5-0.7C515.3,250.9,515.4,250.8,515.5,250.8z"/>
<path style="fill:#DE2B19;transform:scale(0.2)"  d="M466.8,213.8c2.1,1.5,3.4,3.7,5.7,5c9.1,5.3,9.4,6.7,4.6,16.5C471.4,229.3,467.4,222.4,466.8,213.8z"
	/>
<path style="fill:#5E0500;transform:scale(0.2)"  :class="ValueId+'_color3'" d="M198.4,355.2c2.2,2.7-0.4,4.5-1.4,6.2c-11.8,18.5-18.4,38.9-23.2,60.1c-0.7,3.2,0.4,6.8-1.4,9.8
	c-22.2,20.3-44.3,40.6-66.6,60.8c-4.4,4-9.2,7.5-14.8,9.6c-5.6,2-10.9,1.5-15.9-1.6c-2.1-1.3-3.4-2.9-3.8-5.6c-1.2-6.9-1.4-7-8-3.8
	c-11.7,5.7-23.8,9.5-36.9,10.1c-1.8,0.1-3.6,0.2-5.3,0.1c-7.5-0.4-9.9-4.6-6.2-11.1c3.2-5.7,8.4-9.4,13.5-13.1
	c1.6-1.2,4.3-2,3.1-4.9c-1-2.4-3.2-2.7-5.5-2.5c-2.8,0.2-5.5,0.6-8.3,0.7c-1.6,0.1-3.4,0-4-1.8c-0.5-1.6,0.9-2.5,1.9-3.4
	c7.8-7.4,16.6-13.4,25.3-19.6c36.9-26.2,75-50.6,113.3-74.6c1.2-1.8,3.1-2.3,5-2.6c11.7-2,22.8-5.6,33.2-11.3
	C194.2,355.6,196.1,354.3,198.4,355.2z M465.9,211.5c-0.5-5.7,1.5-10.8,4.2-15.7c6.6-12.2,5.9-19.1-4.4-28.4
	c-13.9-12.4-21.4-27.1-20.2-45.8c0.8-12.7,6.5-23.1,16.1-31.2c6.8-5.8,14.9-4.8,20.8,1.8c6.7,7.5,10.4,8.8,19.7,5.2
	c7.2-2.8,14.2-2.9,21.4-0.7c12.7,10,16.3,25,21.4,39.2c0.3,0.8-0.3,1.9-0.5,2.9c1.4,3.6-0.5,6.6-2.2,9.4
	c-5.4,8.9-13.1,14.5-23.1,17.2c-22.5,6.2-31.1,21.4-24.9,44c0.2,0.6,0.3,1.1,0.5,1.7c2.6,10.2,5.1,11.9,15.8,10.3
	c3.9-0.6,7.8-1.1,11.7-1.6c3-0.4,6-0.4,7.4,3.2c0.2,4.3,0.4,8.5,0.6,12.8c0.6,2.3-1.2,3.3-2.7,3.8c-5,1.7-8.2,4.9-9.7,10
	c-0.3,1-1,1.6-2.1,1.7c-6.1-2.2-12-5-18-7.7c-1.5-5.2-4.7-5.8-9.1-3.4c-4.9,1.1-8.6-0.3-10.8-4.9h-0.4c-0.2-1.2-0.3-2.4,0.2-3.5
	c2.1-5.1,0.4-8.8-4.4-11.2c-3-1.5-5-3.7-6.1-6.8C466.5,213.1,466.2,212.3,465.9,211.5z M515.5,248.8c0.1,0.4,0.2,0.8,0.3,1.1
	c-0.5,3.3-1,6.6-1.5,9.9c-0.7,5.2-3.2,9-8.4,10.2c-5.6,1.3-10.6-0.2-14.1-5.1c-3.2-4.5-3.3-9.2-0.1-13.7c2.2-3,4.2-6.1,5.7-9.6
	C504.5,241.7,510,245.2,515.5,248.8z M477.6,235.3c3.1,2.7,6.9,4,10.8,4.9c-0.9,1.3-1.7,2.7-2.8,3.8c-2.3,2.2-4.7,4.7-8.2,2.3
	c-3.2-2.2-2.8-5.3-1.3-8.4C476.6,237,477.1,236.2,477.6,235.3z M402.7,188.4c0.7,26.3-8.5,47.2-24.8,64.9
	c-7.3,7.9-16.4,14.2-26,19.3c-20,10.4-39.9,20.8-59.9,31.2c-10.7,5.6-21.4,11.1-32.1,16.6c-1.4,0.7-2.8,2.1-4.4,1.2
	c-1.9-1.2-0.1-2.9,0-4.3c0.7-9.2-1.9-13.1-10.9-15.4c-3.4-0.9-6.3-2.3-7.2-6.1c-0.4-1.7-1.4-2.9-3.5-3.5c-5.3-1.4-5.5-5.1-3.3-9.2
	c1.5-2.7,3.5-5.3,5.6-7.5c3.7-3.9,4-7.7,0-11.3c-4-3.5-4-7.2-1.8-11.7c5.2-11,13-19.8,21.7-28.3c15.4-14.8,31.8-28.3,49.2-40.5
	c18.9-13.2,38.3-25.8,59.9-34.1c19.6-7.5,29,2,35,18.9C402.7,175.5,403.4,182.7,402.7,188.4z"/>
<path style="fill:#FCFCFC;transform:scale(0.2)"  :class="ValueId+'_color7'" d="M451.3,127c0-7.6,1.9-14.7,6.8-20.8c6.9-8.6,17-8.9,24.5-0.8c10.2,11.1,10,33.9-0.5,44.7
	c-7,7.2-16,7.2-22.8-0.1C453.2,143.6,451.3,135.7,451.3,127z"/>
<path style="fill:#FCB040;transform:scale(0.2)"  :class="ValueId+'_color5'" d="M529.4,223c-5.5-3.8-11.1-0.5-16.6-0.2c-2.7,0.1-5.5,0.7-8.2,0.6c-7.7-0.1-8.8-1.6-10.9-8.9
	c-2.4-8.5-4.3-16.7-2.2-25.6c3-12.6,9.8-21.3,23.1-23.9c15-3,25.5-11,29.7-26.2c7.4,2.3,13.4,6.2,17.5,13
	c8.6,14.4,18.1,28.1,27.9,41.8c3.7,5.2,6.7,10.7,7.8,17c0.4,2,2.1,4.7,0.2,6.1c-1.9,1.4-4.5-0.1-6.5-1.4
	c-4.7-5.5-11.5-7.5-17.7-10.5c-14.1-6.8-27.8-14.3-41.9-20.9c-9.9-4.6-20.3-6.7-31-2.5c5.3-1.5,10.4-1.6,15.6,0.1
	c7,2.2,13.9,4.5,20.4,8c14.3,7.7,29.3,13.8,44.5,19.6c3.1,1.2,7.1,1.5,8,5.9c-15.6-1.4-30.6,0.6-44.4,8.5
	C539.3,226.6,534.5,222.4,529.4,223z M587.8,203.1c-0.4,0.6-0.6,1.4-1.2,1.8c-1.6,1.1-2.5-0.2-3.5-1.2c-4.5-4.2-9.9-7.1-15-10.4
	c-12.7-8.1-26.6-13.8-40.9-18.4c-2.2-0.7-5.1-1.1-5.5-3.8c-0.4-3,2.2-4.8,4.5-5.6c8.2-3.2,15.5-7.4,21.8-13.8
	c3.6-3.7,6.4,0.7,8.4,3.3c3.8,4.8,7.1,9.9,10.5,15c6.6,10.1,13,20.2,19.5,30.4C586.9,201,587.2,201.9,587.8,203.1z"/>
<path style="fill:#D83A31;transform:scale(0.2)"  :class="ValueId+'_color2'" d="M160.5,363.7c-2.5-1-5.6-0.7-6.8-3.4c-1.3-3,0.9-4.8,2.9-6.5c5.6-4.7,12.3-7.6,18.2-12
	c13.4-9.8,26.1-20.3,37.7-32c1.5-1.6,3.1-4.4,5.8-2.6c2.4,1.7,2.7,4.2,1.9,7.3c-6.2,23.7-21.7,38.1-44.4,45.4
	C170.7,361.6,165.5,362.5,160.5,363.7z"/>
<path style="fill:#D83A31;transform:scale(0.2)"  :class="ValueId+'_color2'" d="M147.4,338.7c-2-0.3-4.9,0.8-5.4-2.2c-0.4-2.5,2.3-3,4-3.6c6.4-2.6,12.8-4.9,18.8-8.6
	c17-10.4,28.9-25.3,38.3-42.5c1-1.8,1.3-5.1,4-4.2c3.1,1,2.2,4.4,1.6,6.7c-2.7,10.1-7.5,19.1-14.4,26.8
	c-11.4,12.7-25,22.3-41.7,26.7c-0.8,0.2-1.5,0.6-2.3,0.7C149.4,338.6,148.4,338.6,147.4,338.7z"/>
<path style="fill:#EF4136;transform:scale(0.2)"  :class="ValueId+'_color1'" d="M465.9,211.5c-1-0.7-2-1.2-2.9-2c-8.1-7.5-14.5-6.5-19.5,3.6c-5.7,11.8-12.4,22.8-20.3,33.3
	c-12.3,16.2-27.6,29.2-43.9,40.9C356,304.1,330,316,304.1,328.2c-26.1,12.2-52.5,23.9-77.7,38c-0.3,0.2-0.6,0.5-1,0.7
	c-5.2,3.2-10.4,7.2-10.1,13.6c0.3,6.4,6.3,9,11.5,11.5c22.5,11,45,22,69.7,27.8c18.8,4.4,37.6,5,56.9,3.4c20.8-1.7,40.7-7,60.3-13.6
	c1.1-0.4,2.2-1.1,3.2,0c-0.4,2-1.4,3.1-3.6,2.7c-16.2,9-33.1,16.4-51.3,20.4c-5.5,4.3-12.1,4.6-18.6,4.3c-2.3-0.1-4.5-0.8-6.8-0.2
	c-19.9,2-38.7-1-57.1-9.3c-33.8-15.3-67.6-14.8-101.1,1.3c-1.9,0.9-4,1.6-6,2.5c-1.2-3.9-0.5-7.8,0.4-11.7
	c4.3-20,10.9-39.2,21.6-56.9c1.4-2.4,3-4.7,3.4-7.5c5.8-7,13.3-12.3,19.6-18.7c1.1-1.2,2.9-1.6,4.4-0.6c1.7,1.1,1.1,2.8,0.6,4.3
	c-0.2,0.6-0.5,1.1-0.7,1.6c-1,2.7-3.3,5.8-0.3,8.2c2.9,2.3,5.7-0.5,8-1.9c5.4-3.3,10.8-6.5,16.5-9.4c15.9-8.8,32.3-16.6,48.7-24.5
	c30.6-14.8,61.3-29.5,88.3-50.5c15.2-11.8,27.9-25.7,34.9-44c8.1-21.1,5.5-41.4-4.4-61.3c-5.6-11.3-13.1-21.1-21.3-30.6
	c-1.3-1.5-3.4-2.9-2.6-5.6c5.3-3.8,11.1-6.7,17-9.5c18-8.5,29.8-22.2,35.4-41.4C446.9,54,452,36.5,450,18c-0.3-2.7,0.6-4.6,3-5.9
	c2.7-1.5,5.3-1.1,7.8,0.7c7.1,5.2,13.1,11.4,18.7,18.1c16.9,20.4,31.4,42.5,44,65.9c-1.6,1.2-3.4,0.9-5.1,0.5
	c-5.2-1-10.2-0.3-15.1,1.5c-8.3,3-15.5,2.2-21.9-5.1c-6.3-7.1-13-6.9-20.1-0.6c-17.6,15.6-19.1,46.9-2.9,64.3
	c3.5,3.8,7.4,7.2,10.8,11c7.3,8,8.6,16,3.5,25.5C469.5,199.5,468.4,205.8,465.9,211.5z M219.6,248.2c2.1,1.5,1.4,3.4,0.6,5.3
	c-1.2,3.1-2.5,6.2-3.5,9.4c-1.1,3.7-0.8,6.9,4.3,6.8c2.9-0.1,5,1.1,5.8,4c0.7,2.9-0.6,4.9-3,6.5c-1.8,1.2-3.6,2.5-4.9,4.2
	c-3.9,4.9-1.2,12.1,5,12.5c4.7,0.3,5.8,2.3,5.5,6.4c-0.1,2-0.1,4,0,5.9c0.1,5.7,3.4,9.3,9.1,9.2c5.1-0.2,6.8,1.8,6.4,6.6
	c-0.2,2.5-0.2,5-0.9,7.6s-1.2,5.6,2,7.3c-6.6,3.9-13.1,7.8-19.7,11.6c-2,1.2-4.4,2.5-6.5,0.4c-1.9-2-1.9-4.6-1-7.2
	c0.1-0.2,0.1-0.4,0.2-0.6c0.5-2.6,4.4-5.7,2.1-7.1c-3.1-1.9-5.1,2.6-7.1,4.7c-4.8,5-10.1,9.2-15.5,13.5c-13.8,7.9-28.6,13-44.3,15.3
	c-0.5-0.3-1-0.7-1.5-0.8c-10.2-1.1-11.1-2.9-5.8-11.7c2.7-4.5,6.2-8.2,10.3-11.4c3.8-3,7.9-5.7,12.2-8.8c-5.6-1.7-9.9,0.6-14,3.1
	c-4,2.3-8.2,3.9-12.9,3.7c-3.5-0.1-6.1-1.4-7.4-4.8c-1.2-3.2,0-5.8,2.2-8.1c2.3-2.5,5.2-4.3,8.5-5.3c11.6-3.4,19.7-11.3,27-20.4
	c14.2-17.7,28.3-35.5,42.5-53.3C216.4,251.2,218.1,249.8,219.6,248.2z M387.3,186.2c0.1,14.8-3.2,26.5-9.1,37.4
	c-1,1.9-1.9,4.6-4.4,4s-3-3.4-3.2-5.8c-0.7-7.3,1.7-14.4,1.3-21.8c-0.3-6.3,0.3-12.6-3.2-18.4c-2.7-4.6-8.2-7.1-13.4-6.4
	c-8.2,1.2-15.3,5-22.3,9.1c-0.8,0.5-1.7,1.1-2.6,1.5c-2.3,1-4.9,1.7-6.5-0.6c-1.6-2.2,0.5-4.2,2-5.6c9.4-8.8,20.5-14.2,33.1-16.9
	c9.2-2,17.2-1,23.4,6.7C387.1,175.1,387.5,181.7,387.3,186.2z"/>
<path style="transform:scale(0.2)" d="M470.7,112.9c8.1,0,14.7,6.7,14.6,14.7c-0.2,8.2-6.7,14.5-15,14.3c-7.9-0.1-14.2-6.6-14.2-14.4
	C456.1,119.4,462.6,112.9,470.7,112.9z"/>
<path style="fill:#F2F2F2;transform:scale(0.2)"  :class="ValueId+'_color8'" d="M475.5,120.1c2.5,0.5,3.7,1.8,3.5,4.1c-0.1,2-1.3,3.2-3.4,3.2c-2.4,0-3.7-1.5-3.7-3.6
	C472,121.5,473.6,120.4,475.5,120.1z"/>
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
                                    <button :style="{background:'rgba('+getterCardinalBg1+')'}" @click="ShowElement(getterCardinalBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCardinalBg2+')'}" @click="ShowElement1(getterCardinalBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterCardinalBg3+')'}" @click="ShowElement2(getterCardinalBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCardinalBg4+')'}" @click="ShowElement3(getterCardinalBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterCardinalBg5 +')'}" @click="ShowElement4(getterCardinalBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCardinalBg6+')'}" @click="ShowElement5(getterCardinalBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCardinalBg7+')'}" @click="ShowElement6(getterCardinalBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterCardinalBg8+')'}" @click="ShowElement7(getterCardinalBg8)" :class="this.ValueId+'_color8btn'"></button>
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
        var Cardinal= [
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
            var randomNumber = Cardinal[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Cardinal[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Cardinal'){
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
                getterCardinalBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cardinal') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCardinalBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cardinal') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCardinalBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Cardinal') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCardinalBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterCardinalBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCardinalBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCardinalBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterCardinalBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
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
                ShowElement7(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7 + ')'
                    this.clickedInput = 'eight'
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
                    var background7Clone =tempArrayClone.background7 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Cardinal',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
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
                            $('.Svg_'+cloneIndex+'_color8').css({fill: 'rgba('+background7Clone+')'})
                            
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