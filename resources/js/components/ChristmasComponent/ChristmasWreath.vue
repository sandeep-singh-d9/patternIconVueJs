<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#BE8E30; transform:scale(0.2)" :class="ValueId+'_color5'" d="M442.6,90.8c3.5-4.7,7.3-9.2,12-12.8c12.1-7.3,24.9-9.6,38.4-4.3c25.5,10,34.1,41.3,17.5,63.1
    c-1,1.3-2,2.6-3.1,3.9c-3.1,6.2-9.4,8-14.8,10.9c-27.3,8.6-52.9-7.3-56.6-35.6C434.7,106.9,435.9,97.9,442.6,90.8z M108.8,375.2
    c15.6-26.6,2.8-57-27.3-64.4c-5.9-1-11.8-2.7-17.3,1.4c-0.9,0.3-1.7,0.6-2.6,0.9c-23.4,7.6-35,31.3-26.4,54
    c8.4,22,33.2,31.9,55.5,22.1c1.3-0.6,2.5-1.5,4.1-0.9C100.8,385.3,104.8,380.2,108.8,375.2z"/>
<path style="fill:#A03234; transform:scale(0.2)" :class="ValueId+'_color3'" d="M384.2,487.8c8.5,14.3,17,28.7,25.7,42.9c2.4,3.9,4.5,7.7,1.7,12.2c-3,4.7-7.5,4.4-12.3,3.9
    c-8-0.8-16.1-1.2-24.1-2.2c-3.1-0.4-4.2,0.9-5.2,3.4c-3.2,7.8-6.6,15.5-9.7,23.3c-1.6,4-3.7,7.3-8.3,7.7c-4.9,0.4-7.5-2.8-9.8-6.7
    c-13.3-22.1-26.8-44.2-40.2-66.3c-0.8-1.4-1.8-2.7-2.7-4.2c-2,1-2.5,2.9-3.4,4.3c-13.3,21.9-26.7,43.9-39.9,65.9
    c-2.4,4-5,7.5-10.2,6.9c-4.9-0.5-6.8-4.2-8.4-8.4c-2.8-7.4-5.9-14.6-8.7-22c-1.1-3-2.5-4.3-6-3.8c-8,1.1-16.1,1.6-24.1,2.5
    c-4.3,0.5-8.1,0.1-10.6-4c-2.5-4.1-0.9-7.7,1.2-11.3c8.5-14.8,16.8-29.6,25.2-44.4c-0.1-2.9-2.3-3.9-4.4-5.1
    c-10.4-5.5-15.8-14.3-17.1-25.9c-0.2-8.3-0.2-16.5-0.1-24.8c0.3-17.3,13.5-30.4,30.9-30.7c7.7-0.1,15.4-0.3,23.1,0.1
    c5.9,0.3,10.5-0.7,12.2-7.1c2.6-3.1,6-4.1,9.8-4.1c19.8-0.1,39.6-0.1,59.5,0c3.8,0,7.3,1,9.9,4c1.7,6.3,6.2,7.6,12.1,7.2
    c7.1-0.5,14.3-0.1,21.5-0.1c19.6,0.1,32.2,11.7,33.6,31.2c0.5,7.7,0.5,15.4-0.1,23.1c-0.8,2.6-0.9,5.4-1.6,8
    c-2.3,8.4-7.3,14.7-15,18.7C386.2,483.5,383.9,484.7,384.2,487.8z M118.5,77.9c-4.2-0.4-8.4-0.3-12.6-0.2
    c-11,0.1-18.4,6.1-20.3,16.9c-0.5,2.9-1.5,3.7-4.3,4.2c-10.5,1.7-16.7,9.2-16.9,19.8c-0.1,3.3-0.1,6.6,0,9.9
    c0.2,10.7,6.1,18,16.8,19.8c3.7,0.6,4.6,2.2,4.2,5.4c-0.5,3.3,0.7,6,2.6,8.7c2.8,3.9,6.8,5.9,11,7.8c6.8,2.1,13.7,1.9,20.6,0.5
    c8.1-1.7,13.6-6.4,16.1-14.1c1.2-3.7,3.1-5.8,6.9-6.8c6.9-1.7,11.8-6.2,14-12.9c2.9-8.8,2.9-17.8-0.6-26.4
    c-1.8-4.6-4.6-8.8-10.2-9.8c-7.6-0.2-11.5-4.2-12.1-11.7c0-0.4-0.1-0.7-0.2-1.1C129.8,82.6,125.2,78.5,118.5,77.9z M529,305.2
    c-4.9-0.2-9.8,0.1-14.7,0.2c-9.3,1-14.9,6.5-17.5,15.2c-0.9,3.2-2.4,4.8-5.6,5.8c-10.7,3.2-15.8,10.3-16,21.6
    c-0.1,2.7,0.1,5.5,0,8.2c-0.3,10.4,4.5,17.4,14,21.3c4.6,0.6,7.4,2.8,8.1,7.8c0.4,2.9,1.6,6,5.1,7.1c6.9,6.3,15.2,6.2,23.8,6
    c12.2-0.2,19-5.6,21.3-17.6c0.4-2.1,1-3,3.3-3.4c12.3-2.4,17.6-8.9,17.6-21.2c0-2.6,0-5.1,0-7.7c-0.1-12.2-5.1-18.5-17.2-21.1
    c-1.9-0.4-3.5-0.6-3.7-3.1c-0.5-8.2-5.3-13.4-12.3-16.9C533.8,304.8,531.3,305.3,529,305.2z"/>
<path style="fill:#00A551; transform:scale(0.2)" :class="ValueId+'_color2'" d="M490,376.5c1.1,3.4-1.7,5.4-3.1,7.6c-16.2,24.2-35.7,45.2-60.1,61.6c-6.1,4.1-12.2,8-18.5,11.7
    c-1.4,0.8-3.6,3.1-4.5-0.7c-0.6-9.9,0.8-19.8-0.8-29.7c-2.2-13.9-13.9-23.9-28-24.1c-8.6-0.1-17.3-0.4-25.9,0.1
    c-6.2,0.3-11.1-0.1-11.4-7.8c1.6-2,4.2-2.2,6.3-3.1c49.2-18.8,80.6-53.5,90.5-105.3c8.2-43-3.3-81.6-32.2-114.7
    c-24.2-27.7-55-43.2-91.5-46.6c-23.7-2.2-46.6,1.9-68.1,12.2c-46,22.1-72.5,58.8-78.8,109.3c-4.9,39.1,6.8,73.6,31.9,103.8
    c15.6,18.9,35.4,31.8,58.1,40.6c2.2,0.8,4.8,1,5.8,3.6c-0.3,7.8-5.3,8.1-11.5,7.8c-8.2-0.5-16.5-0.2-24.8-0.1
    c-16.2,0.2-28.8,12.9-29,29.2c-0.1,8.6-0.1,17.3-0.1,25.9c-10.8-3.9-20-10.8-28.8-17.7c-21.6-16.8-40.3-36.5-54.8-60
    c-1-1.7-2.2-3.3-3.3-5c9.4-16,9.4-31.9-1.2-47.3c-5.8-8.5-14.4-13.2-24.2-15.8c-0.3-8.6-3.2-16.8-3.5-25.4
    c-0.4-11.6-2-23.1-1.3-34.9c1-15.8,3.2-31.2,7-46.4c2.9-11.5,6.7-22.8,11.7-33.6c0.6-1.4,0.9-2.8,2.8-3c6.7,1.1,13.5,1.4,20.2,0.4
    c8.5-1.3,14.4-6.5,16.1-15c0.7-3.6,2.1-4.9,5.8-5.6c8.8-1.7,14.5-7.4,15.5-16.3c1.3-11.9,2.1-24.1-10.3-31.8
    c11.1-12.9,25.1-22.3,39.4-31.2c22.5-13.9,47.2-22.5,73.1-26.9c16.2-2.8,32.6-4.5,49.1-3.6C349.7,41.3,389,53,424.2,77.1
    c6.3,4.3,12.3,9.1,18.5,13.7c-5.4,11.1-7.4,22.5-3.1,34.4c7.2,20.2,28.5,31.4,49.4,26c1.4-0.4,2.8-0.7,4.2-1.1
    c6.3,12.6,13,25,17.4,38.4c5.9,18.1,9.8,36.5,11.6,55.5c1.8,18.8-0.3,37.1-2.7,55.6c-0.5,4-2.1,6.6-6.3,7.1
    c-8.8,2.3-14.4,7.8-15.4,17c-0.3,2.7-1.6,3.1-3.8,3.6c-12.2,2.8-17.2,9.3-17.3,21.6c0,2.2,0.1,4.4,0,6.6
    C476.2,365.6,480.7,372.6,490,376.5z"/>
<path style="fill:#FDC454; transform:scale(0.2)" :class="ValueId+'_color6'" d="M477.8,102.8c-5.9,0-11.7,0-17.6,0c-2.9,0-3.7-0.7-1.9-3.4c4.7-7.1,11.1-10.8,19.7-10.9
    c8.7-0.1,14.9,4.5,19.8,10.9c2.1,2.8,0,3.4-2.4,3.4C489.6,102.8,483.7,102.8,477.8,102.8z M462.3,120.5c-1.5,0-3.7-0.9-4.5,0.7
    c-0.7,1.5,0.8,3.1,1.7,4.4c8.7,12.6,30.1,11.8,37.9-1.3c1.6-2.7,1.2-3.9-2.2-3.8c-5.7,0.1-11.3,0-17,0
    C472.9,120.5,467.6,120.4,462.3,120.5z M81.9,369.1c-0.1,3.6,1.1,4.3,4.1,2.4c8.1-5,10.8-12.4,10.3-21.5c-0.5-8.1-5-13.5-11.3-17.8
    c-2.6-1.7-3.1,0-3.1,2.2c0,5.7,0,11.4,0,17.1C81.9,357.4,82,363.3,81.9,369.1z M49.9,351.7c-0.5,7.1,5.4,17.6,11.1,20.3
    c2,0.9,3.1,1,3.1-1.6c0-12.8,0-25.5,0-38.3C56.3,332.6,50.6,343.4,49.9,351.7z"/>
<path style="fill:#FE5257; transform:scale(0.2)" :class="ValueId+'_color4'" d="M275.9,443.6c0-9.9,0.1-19.8-0.1-29.7c-0.1-3.3,1-4.5,4.4-4.4c12.5,0.2,25,0.2,37.4,0
    c3.8-0.1,4.6,1.4,4.6,4.8c-0.1,19.6-0.1,39.3,0,58.9c0,3.6-1,4.8-4.7,4.7c-12.3-0.2-24.6-0.2-36.9,0c-4,0.1-4.9-1.4-4.9-5.1
    C276,463,275.9,453.3,275.9,443.6z M353.4,542.7c1-2.4,2.1-4.7,3.1-7.1c3.5-8.6,5.1-9.8,14.4-9.3c5.2,0.3,10.3,1.8,16,0.7
    c-3.1-5.2-5.9-9.8-8.7-14.5c-2.8-4.7-5.8-9.4-8.6-14.1c-8.5-14.3-8.5-14.4-25.1-14c-0.2,0-0.4,0-0.6,0c-2.6-0.3-3.7,0.5-4.5,3.4
    c-1.4,5.2-5.1,7.9-10.6,7.6c-2.9-0.1-5.9,0.1-8.8,0c-3.1-0.1-3.5,1.1-2,3.6c10.5,17,21,33.9,32.1,51.9
    C351.5,547.5,352.4,545.1,353.4,542.7z M225.5,526.6c9.4-1.4,12.5,0.2,16.3,8.8c1.5,3.5,2.9,7.1,4.4,10.6c0.5,1.1,1.2,2.8,2,3
    c1.8,0.5,2.1-1.6,2.9-2.8c8.8-14.6,17.6-29.2,26.3-43.8c1.3-2.3,4.7-5,3.2-7c-1.8-2.3-5.7-0.9-8.8-0.6c-4.7,0.4-10.4,0.5-11.8-4.4
    c-2-7.1-6.7-6.1-11.6-6.1c-2.9,0-5.9,0.1-8.8,0c-1.9-0.1-3.1,0.6-4,2.2c-7.8,13.6-15.6,27.2-23.8,41.6
    C216.9,527.6,221.2,527.2,225.5,526.6z M338.9,462c-0.2,4,1.3,5,5.1,4.9c9.9-0.2,19.8,0,29.7-0.1c7.1,0,12.2-4.7,12.5-11.8
    c0.3-7.5,0.2-15,0-22.5c-0.2-6.7-5-11.8-11.2-11.9c-10.6-0.2-21.3,0-31.9-0.1c-3.1,0-4.2,1.1-4.1,4.1c0.2,6.2,0,12.5,0,18.7
    C338.9,449.5,339.2,455.7,338.9,462z M258.5,425c0.1-3.1-0.6-4.7-4.2-4.6c-10.3,0.2-20.6,0-30.9,0.1c-6.2,0.1-11.2,5-11.3,11.2
    c-0.2,8.1-0.2,16.2,0,24.2c0.1,5.9,5.1,10.7,11.1,10.8c10.5,0.2,20.9-0.1,31.4,0.1c3.3,0.1,4-1.5,3.9-4.3c-0.1-6.2,0-12.5,0-18.7
    C258.4,437.5,258.3,431.3,258.5,425z M118.9,145.1c1.1-7.9,7.7-12.9,15.9-13.6c3.4-0.3,4.6-1.7,4.4-4.8c-0.1-1.6-0.1-3.3,0-5
    c0.3-3.8-0.9-5.3-5.1-5.9c-8-1-13.2-6.2-15.4-13.9c-0.8-2.8-0.4-5.8-4.6-6.3c-3.1-0.4-6.2-0.7-9.3-0.1c-1.5,0.3-1.7,1.7-1.9,3
    c-1.3,10.5-6.9,16.6-17.7,17.7c-4.7,0.5-3,4.2-3.3,6.9c-0.4,4.5-0.6,8.2,6.1,9.1c7.1,0.9,12.4,6,13.9,13.2c1.1,5.2,3.1,7.5,8.3,5.9
    C115.5,152.5,118,151,118.9,145.1z M544.3,343.9c-6.5-0.8-11.8-5.8-12.9-12.2c-1.2-7.5-5.3-7.8-11-7.4c-3.1,0.2-4.7,0.4-5.4,4.2
    c-1.5,8.9-7.9,14.5-16.7,15.8c-2.7,0.4-4.1,1.3-3.9,4.1c0.1,2.4,0.1,4.8,0,7.2c-0.1,2.7,0.9,3.9,3.8,4.2c9.4,1.2,15,7,16.6,15.9
    c1.2,6.8,5.8,4.4,9.5,5c4.5,0.8,5.7-1.7,6.3-5.4c1.3-8.2,6.6-13.5,14.2-14.9c5.6-1,6.6-3.2,5.7-7.8
    C551.4,347.6,550.7,344.7,544.3,343.9z"/>
<path style="fill:#0B7C49; transform:scale(0.2)" :class="ValueId+'_color1'" d="M133.6,87.8c25.6-24.7,54.6-44,88.8-54.3c82.3-24.9,158.3-12,227,40.4c1.7,1.3,3.5,2.7,5.2,4
    c-3.7,5-7,10.4-12.9,13.3c-5.2-2.8-9.6-6.7-14.4-10.1c-31.9-22.7-67.5-35.6-106.3-39.5c-37.8-3.8-74.4,1.6-109.5,16.1
    c-22.8,9.4-43.1,22.9-61.1,39.8c-1.5,1.4-2.8,3-4.7,3.7C135.6,101.1,131.8,96.9,133.6,87.8z M540.4,258.8
    c-0.6-42.3-11.8-81.7-33.1-118.2c-4.2,3.9-9.2,6.7-14.2,9.5c-1.4,2.4,0.3,4.2,1.3,6.1c4.3,8.1,8.4,16.4,11.6,24.9
    c12.6,33.1,18.3,67.2,13.9,102.6c-1,7.9-0.2,16.6-6.8,22.9c7.4,0.3,14.8-0.8,22.1,0.7C538.9,291.4,540.7,275.1,540.4,258.8z
     M76.4,172.5c-18.1,45.4-21.7,92-12.1,139.8c5.9-1.3,11.7-1.2,17.6-0.1c2.4-2.9,0.9-6,0.3-9c-5.1-27.9-5.1-55.7,0.3-83.6
    c3.4-17.6,9.1-34.4,16.1-50.8c-6.8-3-11.2-8-13.2-15.2C81.9,159.7,79,166,76.4,172.5z M129.4,432.3c24.3,24.6,52.9,42.6,85,55.4
    c1.8-2,3.1-3.5-0.8-4.9c-11.4-4.3-17.3-13-19.3-24.8c-6.5-5.1-14-8.6-20.7-13.4c-24.9-17.8-45.8-39.5-62.1-65.4
    c-1-1.5-1.4-4-4.1-3.9c-4.1,4.3-8.3,8.7-12.4,13C104.4,404.5,116.2,419,129.4,432.3z M484.2,385.9c-17,25.1-38,46-63.5,62.4
    c-5.3,3.4-10,8.2-16.9,8.4c-1.8,12.5-7.7,21.7-19.9,26.4c-4.1,1.5-0.4,3.2,0.3,4.8c49.8-19,89.2-50.8,118.3-95.5
    c-1.4-2.7-4-5.1-4-8.2c0-6-3.5-7.5-8.4-7.6C487.8,379.5,486.3,382.8,484.2,385.9z M269.7,391.8c19.3,0.1,38.6,0.1,57.8,0
    c3.9,0,7.2,0.9,10.1,3.4c1.2-0.2,2.5-0.3,3.7-0.7c25.8-8.6,47.7-22.9,64.9-44.1c28.5-35.1,38.2-74.7,28.4-118.8
    c-7.2-32.5-25-58.6-51.2-79c-19.9-15.5-42.5-24.6-67.7-27.7c-21.5-2.6-42.3-0.3-62.6,7.1c-23.7,8.6-43.9,22.3-60,42
    c-19.6,23.9-30.1,51.2-31.9,81.9c-1.3,21.7,2.9,42.6,11.9,62.5c9.8,21.6,23.8,39.8,42.7,54.2c13.2,10.1,27.9,17.4,43.6,22.8
    C262.5,392.6,265.8,391.7,269.7,391.8z M176.8,391.9c-4.9-0.1-8.8,3.6-8.9,8.6c-0.1,5.2,3.7,9.1,9,9c5-0.1,8.6-3.7,8.7-8.7
    C185.6,396,181.6,392,176.8,391.9z M412.7,108.7c0.2-5.2-3.5-9.2-8.7-9.2c-5-0.1-8.8,3.5-8.9,8.4c-0.1,4.2,4.8,9.1,9.2,9.2
    C408.8,117.2,412.5,113.4,412.7,108.7z M410.6,387.1c0.2,4.2,5,9,8.9,9c3.9-0.1,8.8-5.1,8.7-9c-0.1-5.1-3.8-8.7-9.1-8.6
    C414.3,378.6,410.4,382.5,410.6,387.1z M122.4,228.5c3.7,0.1,8.9-4.8,8.9-8.3c0.1-4.4-4.8-9.3-9.2-9.3c-4.7,0-8.3,4-8.3,9
    C113.9,224.9,117.5,228.5,122.4,228.5z M219.6,79.6c4.2,0,8.8-4.8,8.6-9c-0.1-4.3-4.8-8.7-9.2-8.6c-4.7,0.1-8.2,4-8.1,9.1
    C211,76,214.6,79.6,219.6,79.6z"/>
<path style="fill:#FEFEFE; transform:scale(0.2)" :class="ValueId+'_color7'" d="M421.2,262.7c0.1,66.2-54.1,120.5-120.7,120.6c-66.8,0.1-121.5-54.1-121.6-120.4
    c-0.1-67.1,53.7-121.4,120.2-121.6C365.8,141.2,421.1,196.1,421.2,262.7z"/>
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
                                    <button :style="{background:'rgba('+getterChristmasWreathBg1+')'}" @click="ShowElement(getterChristmasWreathBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg2+')'}" @click="ShowElement1(getterChristmasWreathBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg3+')'}" @click="ShowElement2(getterChristmasWreathBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg4+')'}" @click="ShowElement3(getterChristmasWreathBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg5 +')'}" @click="ShowElement4(getterChristmasWreathBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg6+')'}" @click="ShowElement5(getterChristmasWreathBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg7+')'}" @click="ShowElement6(getterChristmasWreathBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                    <!-- <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg8+')'}" @click="ShowElement7(getterChristmasWreathBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg9+')'}" @click="ShowElement8(getterChristmasWreathBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterChristmasWreathBg10+')'}" @click="ShowElement9(getterChristmasWreathBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var ChristmasWreath= [
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
            var randomNumber = ChristmasWreath[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  ChristmasWreath[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'ChristmasWreath'){
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
                getterChristmasWreathBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChristmasWreath') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChristmasWreath') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ChristmasWreath') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterChristmasWreathBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterChristmasWreathBg10: {
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
                            name:'ChristmasWreath',
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