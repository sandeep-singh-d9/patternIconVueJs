<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#4C94D0; transform:scale(0.2)" :class="ValueId+'_color1'" d="M311.6,33.7c91.8,0,183.6,0,275.4-0.1c4.8,0,5.8,1.5,5.8,6c-0.1,129.5-0.1,259.1,0,388.6
    c0,4.8-1.5,5.7-6,5.7c-177.7-0.1-355.4-0.1-533-0.1c-5.9,0-11.9-0.4-17.8,0.1c-4.5,0.3-5.5-1.3-5.5-5.6c0.2-34.8,0.1-69.5,0.1-104.3
    c0-94.6,0-189.2-0.1-283.8c0-4.7,0.7-6.6,6.2-6.6C128.3,33.8,220,33.7,311.6,33.7C311.6,33.7,311.6,33.7,311.6,33.7z"/>
<path style="fill:#35B56F; transform:scale(0.2)" :class="ValueId+'_color2'" d="M310.5,398.3c-75.6,0-151.3-0.1-226.9,0.1c-5.4,0-6.8-1.5-6.7-6.8c0.2-97.2,0.2-194.4,0-291.6
    c0-5.5,1.3-7.4,7.1-7.4c151.5,0.1,302.9,0.1,454.4,0c4.6,0,6,1.2,6,5.9c-0.1,97.9-0.1,195.9,0,293.8c0,5.2-1.7,6.1-6.4,6.1
    C462.1,398.2,386.3,398.3,310.5,398.3z"/>
<path style="fill:#FFFFFF; transform:scale(0.2)" :class="ValueId+'_color3'" d="M310.6,379.2c-68.6,0-137.2,0-205.7,0c-8.9,0-7.9,1-7.9-7.6c0-84.4,0-168.7-0.1-253.1
    c0-5.4,1.4-6.7,6.8-6.7c137,0.2,274,0.1,410.9,0.1c1.5,0,3,0.2,4.5,0c4.5-0.6,5.6,1.3,5.6,5.6c-0.1,69.9-0.1,139.8-0.1,209.6
    c0,15.4-0.2,30.9,0.1,46.3c0.1,4.6-1.3,5.9-5.9,5.9C449.2,379.1,379.9,379.1,310.6,379.2C310.6,379.1,310.6,379.2,310.6,379.2z"/>
<path style="fill:#35B56F; transform:scale(0.2)" :class="ValueId+'_color2'" d="M308.8,282.3c52.4,0,104.8,0,157.1,0c2.6,0,5.7-1.1,5.9,3.6c0.2,4.2-1.2,5.4-5.4,5.3
    c-34.5-0.1-69.1-0.1-103.6-0.1c-69.8,0-139.7,0-209.5-0.1c-1.9,0-4.5,1.1-5.6-1.1c-0.9-1.8-3.3-3.3-1.9-6c1.3-2.4,3.4-1.8,5.4-1.8
    C203.7,282.3,256.3,282.3,308.8,282.3z M465.8,254.5c3.3,0,6.1,0.4,6.1-4.6c0-5.3-3.3-4.3-6.4-4.3c-10.2,0-20.4,0-30.7,0
    c-93.8,0-187.6,0-281.5,0c-3.5,0-6.6-0.5-6.4,4.9c0.2,4.9,3.3,4,6.1,4c52,0,104,0,156.1,0C361.4,254.4,413.6,254.4,465.8,254.5z
     M467.7,347c3.8,0,4-2,4.1-4.9c0.1-3.2-1.2-4-4.3-4.2c-5.2-0.3-10.8,1.6-15.7-1.8c-0.5-0.3-1.7,0.2-2.6,0.5
    c-6.3,2.2-12.5,2.3-18.7-0.2c-1.3-0.5-2.3-0.4-3.6,0.1c-6,2.3-12.2,2.2-18.3,0.1c-1.3-0.4-2.3-0.9-3.6-0.3
    c-6.2,2.6-12.5,2.5-18.7,0.3c-3.2-1.1-5.1,1.3-4.4,2.8c1.4,3.2,1.5,7.9,7.5,7.6c12.8-0.6,25.7-0.2,38.6-0.2
    C441.2,347,454.5,346.9,467.7,347z M225.9,336.8c-6.6,2.1-13.3,0-19.8-0.1c-6.6-0.1-13.5,2.3-20.4,0.2c-1.2-0.4-2.4-1.4-3.6-0.5
    c-2.8,2.3-6,1.7-9.1,1.6c-3.6-0.1-7.1,0-10.8-1.4c-3.4-1.2-7.4,2.2-11.6,1.5c-3.8-0.6-3.5,2.3-3.4,4.7c0.1,2.6,0.7,4.5,4.2,4.4
    c10.5-0.3,21-0.3,31.6-0.3c15.9,0,31.7-0.1,47.6,0c3.5,0,5.4-0.9,4.8-4.3C235.3,338.3,230.1,335.5,225.9,336.8z"/>
<path style="fill:#2D3E50; transform:scale(0.2)" :class="ValueId+'_color4'" d="M405.9,163.6c-4,5.8-7.9,11.5-11.9,17.3c-4.3,6.3-7.1,6.2-11.5-0.3c-3.7-5.7-7.6-11.2-12.4-18.2
    c0,10.7,0,19.7,0,28.7c0,3.3-0.1,6.7-4.7,6.6c-4.3-0.1-4.2-3.3-4.2-6.4c0-14.1,0-28.2,0-42.4c0-3,0.2-5.7,3.3-7c3.4-1.3,5,1,6.7,3.4
    c5.4,7.8,10.9,15.5,16.2,23.4c2,3,3.1,3.5,5.3,0.1c5.2-7.9,10.8-15.6,16.2-23.3c1.5-2.2,2.9-4.8,6.1-3.7c3.8,1.3,0.9,3.9,0.9,6.1
    c-0.1,10.6-0.1,21.2-0.2,31.8c0,4.6,0.1,9.3,0,13.9c0,3-1.3,5.1-4.6,5c-3.5,0-4.2-2.3-4.2-5.2c0-9.8,0-19.6,0-29.5
    C406.6,163.9,406.3,163.8,405.9,163.6z M352.4,168c-0.2-14.8-13.1-26.6-28.8-26.2c-15.5,0.3-27.5,13.1-27.2,29.2
    c0.3,15.2,12.8,27.1,28.2,26.9C340.9,197.6,352.7,184.9,352.4,168z M151.4,192.5c0,3.8,1.6,5.4,5.4,5.3c4.3-0.1,8.5,0.1,12.8-0.1
    c14.1-0.6,25.1-11.4,26.6-26c1.4-13.4-7.2-25.3-20.8-29c-6.1-1.6-12.2-0.6-18.3-1c-4-0.3-5.7,1.6-5.7,5.6c0.1,7.2,0,14.5,0,21.7
    C151.4,176.9,151.5,184.7,151.4,192.5z M430.6,198.2c2.3,0.8,4-0.4,5-2.4c0.7-1.3,1.3-2.7,1.6-4.1c1.2-6,4.4-8.2,10.9-7.8
    c10.2,0.7,10.3,0.1,14.3,9.8c1.3,3,2.9,5.7,6.5,4.2c3.2-1.3,2.9-4.3,1.8-7.2c-5.5-14.3-10.9-28.7-16.3-43c-1-2.6-1.9-4.8-5.2-4.9
    c-3.3-0.1-4.3,2.2-5.3,4.7c-5.3,14.2-10.6,28.4-16,42.6c-0.4,1-0.6,2.1-1,3.2C426.6,196.2,428.3,197.5,430.6,198.2z M226.6,192.6
    c0,3,1.2,5.1,4.5,5.2c3.5,0.1,4.4-2.1,4.3-5.1c-0.1-3,0-5.9,0-8.9c0-8.2,0-8.2,8-8.5c9.6-0.3,16.5-7.2,16.5-16.6
    c0-9.3-7.4-16.7-17-16.9c-3.2,0-6.3,0.2-9.5,0c-5.1-0.4-7,2.1-7,6.9c0.1,7,0,14.1,0,21.1C226.6,177.4,226.6,185,226.6,192.6z
     M267.9,192c0,3.1,0.9,5.7,4.5,5.8c6.3,0.1,12.6,0.1,18.9,0c2.7,0,4.1-1.7,4-4.3c-0.1-2.3-1.5-3.8-3.9-3.9c-3.1-0.1-6.3-0.3-9.4,0
    c-4.3,0.4-5.4-1.4-5.3-5.5c0.2-12,0.1-24.1,0.1-36.1c0-3.1-0.5-5.9-4.1-6c-4-0.2-4.7,3-4.7,6.1c-0.1,7,0,14.1,0,21.1
    C267.9,176.8,267.9,184.4,267.9,192z M216.4,147.9c0-3.1-0.8-5.8-4.3-5.9c-3.9-0.1-4.7,2.7-4.7,6.1c0,14.6,0,29.3,0,43.9
    c0,3,0.4,5.8,4.2,5.9c4.1,0.1,4.7-2.7,4.7-6c0-7.2,0-14.4,0-21.7C216.4,162.7,216.3,155.3,216.4,147.9z"/>
<path style="fill:#FFFFFF; transform:scale(0.2)" :class="ValueId+'_color3'" d="M305.3,169.7c0-10.7,8.3-19,18.9-19c10.8,0,19.4,8.6,19.3,19.4c-0.1,10.3-9,19.3-19.1,19.3
    C313.9,189.4,305.3,180.5,305.3,169.7z M160.3,185.8c0,2.1,0.4,3.4,2.9,3.7c8,1,17.2-3,21.2-9.6c3.9-6.5,3.9-13-0.3-19.4
    c-4.7-7.2-13.1-10.5-21.4-8.9c-2.3,0.4-2.5,1.8-2.5,3.5c0,5,0,10,0,15C160.3,175.4,160.3,180.6,160.3,185.8z M443.9,172.3
    c-0.3,0.9-1.3,2.5,0.3,2.7c2.5,0.3,5.2,0.2,7.7-0.1c1.2-0.1,0.8-1.5,0.5-2.3c-1.3-3.4-1.9-7.1-4.6-11
    C446.3,165.7,445.1,169,443.9,172.3z M240.5,165.5c6.7-0.5,10.1-2.4,9.9-7c-0.1-4-3.8-6.4-9.1-6.9c-5.7-0.6-6.8,2.1-6,5.9
    C235.6,161.9,234.1,166,240.5,165.5z"/>
<path style="fill:#C65C5C; transform:scale(0.2)" :class="ValueId+'_color8'" d="M478.9,425.9c-0.6-0.1-0.8,0.4-1.2,0.7c-0.6,0.5-1.1,1-1.7,1.5c-3.5,2.8-6.3,2.7-9.6-0.4
    c-0.6-0.6-1.1-1.3-1.9-1.7c-2.2-3.8-5.3-6.6-9.6-7.8c-3.4-1-6.8-0.9-10.2,0.1c-2.4,0.7-4.8,1.1-7.3,0.6c-4.1-0.8-5.9-4-6-7.7
    c-0.1-3.3-0.1-6.6-1.7-9.6c-0.2-0.5-0.4-1-1-1.3c-1.7-3.5-4.4-5.8-8-7.2c-1.8-0.7-3.7-1.2-5.4-2.2c-3.4-2-4.8-6-3.3-9.7
    c0.7-1.8,1.9-3.3,2.9-4.9c3.8-6.2,3.7-12.5-0.1-18.7c-0.9-1.4-1.8-2.8-2.6-4.3c-1.9-3.8-0.5-8.2,3.3-10.1c1.1-0.6,2.3-1,3.4-1.4
    c8-2.9,12.1-8.6,12.3-17.2c0-1.1,0-2.2,0.2-3.2c0.8-4.5,4.4-7.1,8.9-6.4c2.2,0.3,4.4,0.7,6.5,1.2c6.6,1.3,11.7-1.1,15.9-6
    c1-1.2,2-2.4,3.1-3.5c3.5-3.4,7.5-3.4,11,0c1.2,1.1,2.3,2.3,3.3,3.6c5,6.2,11,7.6,19.1,5.3c2.3-0.6,4.5-1,6.9-0.4
    c2.3,0.6,3.8,2,4.6,4.2c0.6,1.7,0.9,3.4,0.9,5.2c0.2,8.8,3.9,14.1,12.2,17.1c1.4,0.5,2.7,1,4,1.8c3.5,2.2,4.7,6.3,2.8,9.9
    c-0.7,1.5-1.7,2.9-2.6,4.3c-3.9,6.3-3.8,12.5,0,18.8c0.9,1.5,1.9,2.9,2.6,4.5c1.8,3.7,0.4,8-3.2,9.9c-1.5,0.8-3.1,1.3-4.6,1.9
    c-3.3,1.2-6,3.2-8,6.1c-0.3,0.4-0.7,0.8-0.7,1.4c-1.4,1.3-1.9,3.1-2.2,4.9c-0.3,1.8-0.4,3.6-0.4,5.5c-0.1,6.5-4.5,9.3-10.3,8.3
    c-2.8-0.5-5.5-1.5-8.4-1.5c-4.3,0-7.8,1.7-10.8,4.4C481.2,423.1,479.6,424.1,478.9,425.9z"/>
<path style="fill:#F9A652; transform:scale(0.2)" :class="ValueId+'_color5'" d="M311.6,312.4c13.8,0,25.2,11.7,25.1,25.8c-0.1,12.4-12.3,25.4-24.5,25.2
    c-15.8-0.3-26.8-12.2-26.8-25.7C285.6,323.4,297,312.4,311.6,312.4z M510.9,364.3c-2.1-8.2-6.2-15.2-12.7-20.8
    c-9.5-8.2-20.5-11.5-32.7-9.4c-16.5,2.7-27.2,12.5-32.5,28.4c-0.6,1.9-0.7,3.8-1.3,5.7c-0.1,2.3,0.4,4.6,0.8,6.9
    c1.4,6.7,4.2,12.6,8.6,17.8c3.7,4.4,8.1,7.9,13.3,10.3c7.4,3.5,15.2,4.8,23.4,3.4c8.1-1.4,15.2-4.8,21.1-10.4
    c4-3.8,7.1-8.2,9.3-13.3c2-4.7,3-9.6,3.3-14.7C511.1,366.9,511.3,365.6,510.9,364.3z"/>
<path style="fill:#AF4646; transform:scale(0.2)" :class="ValueId+'_color7'" d="M440.3,470.4c-1.5-2.3-2.2-4.9-3.2-7.4c-2.1-5-4.1-10.1-6-15.2c-0.4-1.1-0.9-1.2-1.9-0.9
    c-7.1,2.1-14.3,4.2-21.4,6.3c-2.1,0.6-2.8,0.1-2.9-2.1c-0.1-0.9,0.1-1.7,0.5-2.5c7.8-16,15.6-32,23.3-48c0.1-0.1,0.2-0.3,0.3-0.4
    c0.9-0.1,1.1,0.6,1.4,1.2c1.1,2.1,1.6,4.4,1.7,6.7c0,1,0,1.9,0,2.9c0.2,4.7,3,7.5,7.7,7.6c2.1,0.1,4.2-0.6,6.2-1.1
    c4.5-1.1,8.8-0.6,12.8,1.7c2.7,1.5,4.8,3.6,6.2,6.4c0,1.1-0.5,2-1,2.9c-3.8,7.3-7.2,14.7-10.8,22.1c-2.7,5.6-5.6,11.1-8.1,16.8
    c-0.7,1.5-1.7,2.6-3.4,2.9C441.1,470.4,440.7,470.4,440.3,470.4z M513.3,401.3c-0.7,1.3-1.2,2.7-1.4,4.1c-0.3,1.9-0.3,3.8-0.4,5.6
    c-0.2,3.6-1.9,6.8-6.1,7.5c-1.3,0.2-2.7,0.2-4-0.1c-1.4-0.3-2.8-0.8-4.2-1c-5.5-1.1-10.4,0-14.6,3.8c-1.5,1.4-3.2,2.6-4,4.6
    c-0.1,0.6,0.2,1.2,0.5,1.7c6.6,13.3,13,26.7,19.5,40c0.7,1.5,1.7,2.6,3.4,2.9c0.4,0,0.9,0,1.3,0c0.5-0.5,0.7-1.1,1-1.7
    c2.7-6.9,5.5-13.7,8.2-20.6c0.4-1.1,0.9-1.5,2.2-1.1c6.9,2.1,13.8,4.1,20.6,6.1c2.9,0.9,4-0.1,3.4-3.2c-0.1-0.5-0.3-1-0.6-1.5
    c-4.4-9.1-8.8-18.3-13.3-27.4c-3.4-6.9-6.8-13.8-10.2-20.8C513.8,400.2,513.6,400.8,513.3,401.3z M511,359.9
    c-2-10.5-7.3-19-15.9-25.2c-9.1-6.5-19.2-8.9-30.3-6.9c-10.6,1.9-19.1,7.3-25.4,15.9c-5.3,7.2-7.8,15.4-7.6,24.4
    c0.4-0.2,0.6-0.6,0.6-1c1.7-9.4,6-17.3,13.3-23.5c9.4-8,20.3-10.9,32.3-9.1c9.4,1.4,17.3,5.9,23.6,13.1c4.6,5.3,7.7,11.4,9.1,18.3
    c0.1,0.7-0.4,1.9,0.8,2.2C511.8,365.4,511.6,362.6,511,359.9z"/>
<path style="fill:#C65C5C; transform:scale(0.2)" :class="ValueId+'_color6'" d="M450.7,361.6c3-1,6.2-1,9.3-1.6c1.2-0.2,2.5,0,3.7-0.6c1.2-0.4,1.9-1.3,2.4-2.4c1.3-3,2.8-6,4.3-8.9
    c0.3-0.7,0.6-1.4,1.4-1.7c0.9-0.5,1.5-0.4,2.1,0.6c1.8,3,3.2,6.2,4.5,9.3c0.9,2.2,2,3.2,4.3,3.4c3.1,0.3,6.3,0.9,9.4,1.2
    c1.1,0.1,2.3,0.2,2.5,1.3c0.2,1-0.7,1.8-1.4,2.4c-2.6,2-4.5,4.6-7.1,6.7c-1.7,1.4-1.7,2.9-1.4,4.7c0.6,3.2,1.3,6.3,1.8,9.5
    c0.1,0.9,0.4,1.9-0.5,2.5c-0.9,0.6-1.5,0-2.2-0.4c-3.4-1.8-6.8-3.6-10.2-5.4c-0.8-0.4-1.5-0.4-2.3,0c-3.3,1.7-6.6,3.4-9.9,5.1
    c-0.9,0.4-1.7,0.9-2.7,0.9c-1.2-0.8-0.8-1.9-0.6-2.9c0.6-3.1,1-6.3,1.7-9.4c0.4-1.8,0.1-3.2-1.4-4.4c-2.4-2.1-4.4-4.6-6.9-6.6
    c-0.6-0.5-1.1-1.2-1.4-1.9C450,362.5,449.7,361.8,450.7,361.6z"/>
<path style="fill:#9E3838; transform:scale(0.2)" d="M450.7,361.6c-0.8,1.6,0.5,2.3,1.3,3c2.4,2.1,4.5,4.6,6.9,6.6c1.6,1.3,1.8,2.8,1.4,4.6
    c-0.7,3.3-1.3,6.5-1.8,9.8c-0.1,0.8-0.2,1.7,0.3,2.5c-1.6,0.3-2.2-0.3-1.9-2c0.6-3.7,1.2-7.5,2-11.2c0.4-1.6-0.2-2.5-1.2-3.3
    c-3-2.3-5.4-5.2-8.1-7.8c-0.5-0.5-1.1-1.1-0.6-1.8C449.3,361.5,449.9,360.9,450.7,361.6z"/>
<path style="fill:#9E3838; transform:scale(0.2)" d="M471.8,346.4c-2.3,3.7-3.9,7.7-5.8,11.6c-0.5,1.1-1.2,1.6-2.4,1.4c1.9-3.8,3.7-7.6,5.7-11.3
    C469.8,347.2,470.2,345.8,471.8,346.4z"/>
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
                                    <button :style="{background:'rgba('+getterDiplomaFullBg1+')'}" @click="ShowElement(getterDiplomaFullBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg2+')'}" @click="ShowElement1(getterDiplomaFullBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg3+')'}" @click="ShowElement2(getterDiplomaFullBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg4+')'}" @click="ShowElement3(getterDiplomaFullBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg5 +')'}" @click="ShowElement4(getterDiplomaFullBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg6+')'}" @click="ShowElement5(getterDiplomaFullBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg7+')'}" @click="ShowElement6(getterDiplomaFullBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                    <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg8+')'}" @click="ShowElement7(getterDiplomaFullBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg9+')'}" @click="ShowElement8(getterDiplomaFullBg9)" :class="this.ValueId+'_color9btn'"></button> 

                                     <button :style="{backgroundColor:'rgba('+getterDiplomaFullBg10+')'}" @click="ShowElement9(getterDiplomaFullBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var DiplomaFull= [
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
            var randomNumber = DiplomaFull[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  DiplomaFull[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'DiplomaFull'){
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
                getterDiplomaFullBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'DiplomaFull') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'DiplomaFull') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'DiplomaFull') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterDiplomaFullBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterDiplomaFullBg10: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9
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
                ShowElement8(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8 + ')'
                    this.clickedInput = 'nine'
                    this.showColorPicker = true
                },
                ShowElement9(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9 + ')'
                    this.clickedInput = 'ten'
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
                    var background8Clone =tempArrayClone.background8 
                    var background9Clone =tempArrayClone.background9 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'DiplomaFull',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
                            background7:  background7Clone,
                            background8:  background8Clone,
                            background9:  background9Clone,
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
                            $('.Svg_'+cloneIndex+'_color9').css({fill: 'rgba('+background8Clone+')'})
                            $('.Svg_'+cloneIndex+'_color10').css({fill: 'rgba('+background9Clone+')'})
                            
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