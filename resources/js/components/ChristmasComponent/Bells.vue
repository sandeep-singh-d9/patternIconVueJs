<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color1'" d="M142.4,424.2c-0.4,4.4-1.1,8.8-2.8,13c-6.2,14.9-23.3,19.7-38.8,10.8c-2.9-4-6.8-7.2-8.9-11.9
    c-5.7-12.9-1.9-26.1,10-33.7c3-1.9,5.6-4,6.4-7.6c-0.4-4.1-3.9-4.9-6.7-6.5c-24.7-13.5-49.7-26.7-74.2-40.6c-2-1.2-3.9-2.5-5.5-4.2
    c-4.7-4.2-8.2-9.1-9.2-15.6c-3.1-20.2,18.5-29.3,30.5-22.7c5.6,3.1,9.8,1.5,14.4-1.2c13.5-8,24.4-19,34.4-30.7
    c18.4-21.6,36.5-43.5,54.8-65.2c1.6-1.9,1.9-3.6,1.5-5.8c-3.3-17.8-1.9-35.4,2.6-52.8c-1.2-4.4-4.8-4.7-8.5-5.2
    c-3.8-0.5-7.5,1.7-11.2-0.2c-4.3-0.4-5.9-2.5-4.9-6.9c1.1-4.5,1.1-9-1.9-13c-5.9-7.9-13-12.9-23.4-10c-0.7,0.2-1.5,0-2.2-0.3
    c-6.1-0.1-8.7-2.5-6.3-6.8c7.3-12.6,5.9-25.6,2.9-38.8C92.2,55,87,42.4,79.6,30.7c-1.4-2.2-2.8-4.3-0.9-6.8c1.8-2.5,4.2-1.8,6.8-1.2
    c22.3,5.8,44.9,7.5,67.6,2.9c6.3-1.3,12.1-3.8,17.2-7.8c2-1.6,4.1-3.2,6.8-1.5c2.7,1.7,2.7,4.2,2.1,7.2c-1.1,5.7,1.1,10.3,5.8,13.5
    c7.8,5.3,16.4,6.6,25.4,3.5c7.1-2.4,8.6-1.6,9.1,5.7c0.6,9.8,5,16.9,14.4,20.4c3.9,1.5,7.8,1.7,11.8,0c5.9-2.5,8.9-0.4,8.2,6.1
    c-0.9,8,2.1,13.9,8.9,18c6.6,4,11.8,3.7,18.2-0.9c4.6-3.3,6.7-2.7,9.4,2.5c6.5,12.8,12.1,25.9,13.8,40.3c0.2,1.7,0.6,3,2.7,3
    c2.1,0,1.7-1.7,1.9-2.9c2.4-14,7.1-27.2,13.6-39.8c3.7-7,4.9-7.4,11.1-2.8c9.3,6.8,24.7-0.9,26.1-13.1c0-0.4,0-0.8,0.1-1.2
    c0.6-11.1,0.6-11.1,11.1-8.7c9.1,2.1,20.8-6.9,22.5-17.4c0.3-1.9,0.2-3.9,0.5-5.8c0.7-5.2,3.1-6.8,8-4.6c7,3.1,13.9,2.8,20.8,0.2
    c9-3.4,11.9-8,11.4-17.6c-0.1-2.4-0.2-4.7,2.2-6.1c2.1-1.3,4.2-0.7,5.9,0.7c10.4,8.7,23.1,10.4,35.9,11c16.8,0.8,33.6-0.6,49.8-5.4
    c2.7-0.8,5.3-1.4,7.2,1.5c1.8,2.7-0.1,4.6-1.3,6.8c-9.9,16.8-17,34.6-17.9,54.3c-0.3,7.2,0.8,14.2,4.7,20.6c3.1,5.2,1.5,7.6-4.6,8
    c-0.9,0.2-1.9,0.6-2.8,0.4c-10.2-2.7-17.5,1.9-23.6,9.5c-2.6,4.4-3.7,8.9-2.1,14c0.8,2.5,0.4,5-2.8,5.8c-4.7,2.1-9.8,1.1-14.7,1.4
    c-4,0.2-7.6,1-8.9,5.6c5.7,20.9,5.7,41.9,0.4,62.9c-0.6,2.3-1,4.3,0.8,6.4c17.2,20.8,33,42.8,51.2,62.7c9.1,10,18.9,19.3,31,25.7
    c2.5,1.3,4.6,1.9,7.5,0.5c18.6-8.8,34.8,2.5,33,22.8c-0.1,0.6,0,1.2,0,1.7c-0.1,7.7-5.7,11.5-11.3,14.9
    c-11.2,6.8-23.1,12.3-34.7,18.5c-13.1,7-26.2,14.1-39.5,20.6c-5,2.4-6.5,5.2-4.3,10.1c0.3,0.4,0.6,1,1.1,1.3
    c15.6,11,18.2,18.9,11.9,37.3c-3,9.7-10.9,13.5-19.7,14.5c-8.8,1-17.3-1-22.9-9.2c-6.1-7-7.4-15.5-7.3-24.4
    c-3.7-4.9-7.5-3.8-12.4-1.3c-28.9,15-57.5,30.4-86.5,45.3c-7.6,3.9-15.1,6-22.7,0.3c-17.2-11.9-16.4-29.8,1.9-40.5
    c3.3-1.9,3.8-4.7,3.9-7.7c0.2-6.2,0.4-12.4-0.1-18.5c-0.9-10.2-3.3-20.2-5.9-30.1c-6.1,2.1-9.3,0.8-8.8-4.4
    c2.2-22.4-5.1-43-11.5-63.8c-5.7-18.8-9.8-37.9-10.9-59.1c-9,19.1-14.6,37.6-18.4,56.7c-4.2,21.3-5.7,42.9-6.5,64.5
    c-0.1,3.1,0,6.6-4,7.3c-3.7,0.7-4.9-2.4-6.2-5c-1.3-2.5-2.6-5.1-4.6-8.8c-6.2,21.8-13.1,42.1-11.1,64.1c0.2,2.3,0.2,4.7,2.7,6
    c13.2,6.6,16.7,17.3,13.3,31c-5.1,12.1-19.6,17-32.1,10.5c-9.8-5-19.3-10.5-29-15.8c-18.6-10.3-37.3-20.2-55.9-30.5
    c-2.1-1.2-4.3-2.9-7-1.4C143.8,417.7,142.4,420.6,142.4,424.2z"/>
<path style="fill:#FCB435; transform:scale(0.2)" :class="ValueId+'_color4'" d="M153.3,223.7c1.6,3.7,3.3,7.3,4.7,11c0.8,2.1,1.9,3.7,4.2,4.3c1.2,1.2,2.8,1.2,4.3,1.3
    c27.7,1.2,54.7-1.8,80.2-13.8c2.6-1.2,5.2-2.5,7.7-3.9c1.6-0.9,3.1-2.6,5.3-1.2c-15.1,28.7-25.6,59-30.4,91.1
    c-1.7,11.6-3,23.3-3,35.1c0,2.5-0.2,5.2,2.7,6.4c2.8,1.1,4.7-0.4,6.6-2.3c5.1-5.3,10.2-10.6,15.4-15.7c1.4-1.3,2.6-4.6,4.6-3.1
    c1.9,1.4,3.4,4.3,3.1,7.1c-0.2,1.9-1,3.7-1.6,5.5c-5.7,18.8-11.7,37.6-12.4,57.4c-0.2,4.6,0.1,9.3,0.2,13.9
    c0.2,6.1,1.9,11.2,8.2,13.7c1.8,4,6.2,5.4,8.9,8.4c1.6,5.9-0.5,10.8-5.1,14.3c-4.8,3.7-9.8,2.3-14.6-0.3
    C171.2,414,100.1,375.3,29.1,336.6c-3.7-2-6.7-4.5-7.5-9c3.7-8.4,14-12.8,22.2-8.2c7.1,4,12.5,2.5,18.8-1.1c14.1-8.3,25-20,35.7-32
    c16.5-18.4,31.4-38.1,47.4-57C147.7,226.9,149.5,223.8,153.3,223.7z M352.2,415.7c-0.9,8.7-1.3,17.5-11.5,21.7
    c-3.4,1.4-6.1,4.6-5.5,9.2c4.1,7.9,9.8,9.3,18.8,4.6c51.9-27.2,103.7-54.5,155.6-81.7c19.5-10.2,38.9-20.4,58.4-30.7
    c8.4-4.5,10.3-9.6,6.6-17.2c-5.3-2.9-10.4-1.7-15.4,0.7c-2.9,1.4-5.6,2.3-8.8,0.7c-7.6-3.8-15.1-7.7-21.4-13.5
    c-28.9-22.8-48.6-53.8-72.1-81.4c-2.8,3.7-2.4,8.8-6.8,10.8c-0.9,1.2-2.3,1.3-3.6,1.4c-29.1,1.1-57.6-1.6-84.1-15.3
    c-3-1.6-5.8-4.7-9.9-3.5c0.8,1.8,1.5,3.5,2.3,5.3c18,37.9,26.9,77.8,26.9,119.8c0,2.9,0.3,6.1-3.1,7.4c-3.4,1.3-5.4-1.2-7.4-3.3
    c-3-3.2-5.9-6.6-9.1-9.7c-3-2.9-5.6-8.7-8.9-8.1c-2.7,0.5-4.5,6.6-6.5,10.3c-2.1,3.9-4.9,7.4-3.2,12.8c5.6,17.7,9,35.9,8.4,54.7
    C352.5,412.3,352.4,414,352.2,415.7z"/>
<path style="fill:#3AB44A; transform:scale(0.2)" :class="ValueId+'_color2'" d="M436.3,43.1c2-3.5,4.1-7,6.1-10.5c2.5-0.8,4.5,0.6,6.6,1.5c9.5,4.1,19.4,6.1,29.7,6.1
    c11.5,0,23,0.3,34.5-1.8c1.9-0.3,3.8-0.5,5.4,1c-7.1,16.8-12.4,34-11.5,52.6c0.2,3.2,2.9,7,0.4,9.3c-1.9,1.8-5.8,1.3-8.7,2.3
    c-12.2,4-19,12.5-20.6,25.3c-0.2,1.9-0.1,4.5-2.7,4.4c-6.3-0.2-12.4,1.2-19.3,3c1.3-3.9,3.7-3.8,5.9-3.8c2.5,0,5-0.4,7.4-1.2
    c3-1,4.8-2.9,3.8-6c-0.9-2.7-3.1-3.8-6-3c-13.6,3.3-27,1-41.4-1.9c7.7-6.3,14.8-12.1,21.9-17.9c8.7-7.1,17.3-14.2,25.3-22.1
    c2.4-2.3,4.5-4.7,1.5-7.8c-3.1-3.1-5.6-0.7-8,1.4c-14.9,13.4-30.1,26.4-46.3,38.3c-1.1,0.8-2.1,2.9-3.8,1.9
    c-1.5-0.9-0.8-2.9-0.7-4.3c0.8-12.3,2.9-24.4,7.1-36.1c0.5-1.3,0.9-2.5,1.4-3.8c0.9-2.7,1.7-5.6-1.8-6.9c-3.3-1.2-5.6,0.4-6.9,3.5
    c-3.2,7.9-5.5,16-6.8,24.4c-1.4,9.1-3.5,18.2-1.4,27.5c0.8,3.5-4.9,8.5-10.9,10.4c-2,0.6-4.1,0.9-6.2,1.4c-7.1,1.8-7.1,1.8-7-5.7
    c0.1-9.7,1.8-19.1,3.8-28.6c0.2-1.1,0.7-2.2,0.8-3.4c0.1-2.6,0.9-5.7-2.9-6.5c-3.7-0.8-5.4,1.5-6.1,4.6c-1.3,5.8-2.7,11.6-3.5,17.5
    c-1,7.4-1.8,15-1.2,22.5c0.3,3.4-0.8,5.3-4,6.6c-6.2,2.6-12.2,5.6-18.8,8.7c0.7-6.6,3.8-12,7.2-17.2c0.6-1,1.7-1.7,2.1-2.7
    c1.2-2.5,1-5-1.4-6.7c-2.6-1.9-4.8-0.8-6.5,1.4c-5.4,7.2-9.7,14.9-11.1,23.9c-0.9,5.5-3.1,4.7-6,1.9c-4-3.9-8.8-6.3-13.9-8.1
    c-3.1-1.1-3.8-2.9-3.3-5.7c2.1-10.6,5.1-20.9,10.3-30.4c1-0.4,1.9-0.1,2.8,0.2c12.8,5.2,18.7,3.9,28.5-6.3c3.8-4.4,6.5-9.5,8.3-15
    c1.1-1,2.4-1.3,3.7-1.2c10.9,0.7,18-5.4,23.9-13.6c2.1-3.9,4.8-7.5,6-11.9c2-1.2,4.2-0.4,6.2-0.2C419.4,55.4,428.9,52,436.3,43.1z
     M189.8,52.6c-5.3-2.7-10.7-5.4-13.3-11.3c-2.5-2.5-3.9-5.6-5.5-8.6c-2.5-0.4-4.5,0.8-6.6,1.7c-5.5,2.3-11.2,4-17.2,4.7
    c-15,1.8-29.9,1.5-44.8-0.5c-2.4-0.3-5-1.1-7.1,1c0.4,1.3,0.8,2.5,1.3,3.8c6.8,18.3,13.3,36.7,8.9,56.7c-0.9,3.9,1.5,3,3.5,3.2
    c11.4,0.9,19.6,6.7,24.2,17c1.8,4.1,1.4,10.3,4.4,12.5c3,2.3,8.9,0.9,13.3,2.3c1.9,0.6,3.8,1.5,5-0.9c1.1-2.2,3.3-4.4,2.5-6.8
    c-0.7-1.9-3.5-0.6-5.3-0.9c-1.9-0.3-3.8-0.8-5.7-1c-4.1-0.3-7.7-1.5-6.7-6.5c1-4.8,5.2-3.2,8.2-2.7c11.2,1.7,22.2,1.1,33.3-1.2
    c1.4-0.3,3.6,0.2,4.1-1.5c0.5-2.1-1.8-2.6-3.1-3.6c-14.5-11.8-29.3-23.3-42.7-36.3c-2.4-2.3-3.5-5.1-1-7.6c2.3-2.2,4.9-1.2,7.2,0.8
    c6.6,5.9,13.1,11.9,20,17.6c9.9,8.2,20,16.1,30.6,24.6c1.3-15.8-2-29.8-6.9-43.4c-1.6-4.4-2.4-8.4,3.6-10
    C193.9,52.9,191.3,53.4,189.8,52.6z"/>
<path style="fill:#E41E27; transform:scale(0.2)" :class="ValueId+'_color3'" d="M216,140.8c15.3,4.1,30.2,9.4,43.7,18c1.9,1.2,5.1,1.7,3.3,5.5c-1.7,3.6-3.9,1.2-5.8,0.6
    c-17.2-5.7-35-7.5-53.1-7.8c-3.2-0.1-6.8,0.3-7.3,4.1c-0.6,4.5,2.8,5.2,6.4,5.3c15.1,0.2,30.1,1.3,44.7,5.4c1.3,0.4,2.6,0.7,3.9,1.1
    c6.8,2.2,9.5,7.6,7.3,14.5c-0.7,2.2-2.8,2.5-4.5,3.1c-15.3,5.5-31.2,7.1-47.3,7.3c-1.4,0-2.7,0-4.1,0c-3.4,0.1-6.6,1-6.5,4.9
    c0,3.6,3.1,4.4,6.3,4.4c18.7,0.2,37-1.7,54.8-7.8c2.1-0.7,3.9-2.2,5.5,1.2c1.5,3.2,0.8,4.5-2,6.4c-28,18.1-58.8,24.5-91.7,22.9
    c-2.8-0.1-4-1.4-5-3.8c-11.6-29.4-11.9-58.7,0.5-87.9c6.1-3.3,12.7-1.8,19.1-2c8.8-0.2,17.5,1.4,26.2,2.7
    C212.2,138.9,214.5,138.8,216,140.8z M432.6,135.9c-11.7,0.2-23.5,0.1-34.7,4.5c-1.5,0.4-2.9,1-4.4,1.3
    c-15.2,3.6-29.3,9.7-42.6,17.8c-2.1,1.3-2.9,2.4-1.8,5.1c1.1,2.6,2.4,1.9,4.1,1.3c15.5-6,31.8-7.6,48.2-8.7c3.6-0.2,7.3-0.1,11,0.3
    c2.6,0.3,4.2,2.2,3.8,4.9c-0.3,2.3-1.8,3.8-4.3,3.9c-1.5,0.1-3.1,0-4.6,0.1c-15.9,0.6-31.6,1.7-46.8,6.7c-4.2,1.4-7.8,2.3-7.9,8.6
    c-0.1,6.3,2.9,8.1,7.6,9.4c1.9,0.5,3.7,1.1,5.5,1.6c14.1,3.8,28.5,5.1,43,4.9c3.4,0,7.2,0.3,7.5,4.6c0.3,4.5-3.5,4.8-7,4.8
    c-18.5,0.1-36.6-1.8-54.2-7.9c-2.3-0.8-4.4-2.8-6.4,1.4c-1.9,4.1,0.4,5,2.8,6.5c25.7,16.5,54,23.4,84.3,22.7
    c11.7-0.3,9.8,2.1,14-10.2c9.5-27.6,8.9-54.9-2.9-81.8C442.3,135,437.4,135.8,432.6,135.9z M277.6,158.4c-7.8,8.9-9.9,19.6-8,30.9
    c2.6,15.9,15.4,27.3,32.6,29.9c13.8,2.1,29.5-6.3,36.6-19.5c7.4-13.8,5.1-30.7-5.6-42.3c-4.3-4-8.5-8.3-15.1-8
    c-6.8-1.4-13.5-3.9-20.4-0.8c-0.5,0.2-1.1,0.1-1.7,0.1C288.2,148.9,282.6,153.2,277.6,158.4z M338.5,215.7
    c-6.2,5.5-12.6,9.8-20,11.3c-5.4,1.1-4.6,3-3,6.8c10.4,23.9,16.4,49,18.8,74.9c1,10.4,1.7,20.9,2.7,32.4c3.5-6.5,6.5-12.1,9.6-17.6
    c3.4-6,6.2-6.4,11-1.2c4.5,4.9,9.1,9.7,14.5,15.6C370.7,293.5,359.6,253.5,338.5,215.7z M271.5,339.9c2.6-37.6,9-74.3,25.7-108.6
    c1.3-2.6,0.2-3.3-2.1-3.8c-6.3-1.3-12.1-4-17-8.2c-3.4-2.9-4.9-2.7-7.2,1.3c-15.6,27.5-26.1,56.7-31.5,87.8
    c-1.6,9.1-3.1,18.3-2.9,28.3c5.4-5.3,10.2-10,15-14.7c4.8-4.7,7.5-4.3,10.6,1.7c2.9,5.6,5.7,11.2,8.5,16.9
    C271.2,340.1,271.5,340,271.5,339.9z"/>
<path style="fill:#0DB04B; transform:scale(0.2)"  :class="ValueId+'_color2'"  d="M284.7,101.4c4.5,10.2,8.9,20.4,10.4,31.6c0.3,2.5,0.3,3.8-2.4,4.6c-6.7,2-12.6,5.5-18.3,10.8
    c-1.8-9.9-3.6-19.1-8.8-27.1c-1.3-2.1-2.9-4.1-4.2-6.2c-2-3.1-4.6-3.5-7.4-1.6c-3.1,2.1-2,4.8-0.2,7c5.8,7.1,8.4,15.5,10.5,24.1
    c0.2,0.9,0.2,1.9,0.3,3.6c-8.5-4.4-16.3-8.9-24.6-12.1c-1.2-0.5-1.6-1.3-1.5-2.7c2-17.6,0.5-34.9-4.1-52c3.5-2.7,7-2.4,10.6-0.1
    c2.6,5.6,5,11.3,9.2,15.9C264.6,107,271.7,108,284.7,101.4z"/>
<path style="fill:#0DAF4B; transform:scale(0.2)"  :class="ValueId+'_color2'"  d="M228.7,79.1c-3.1,2.2-3.7,4.7-2.5,8.5c4.3,13.9,4.3,28.2,3.4,43.4c-8-4.6-15.1-9.5-21.9-14.7
    c-1.9-1.5-1.1-4-1-6c1-16-2-31.3-7.1-46.4c-1-3-2.4-5.7-4.5-7.9c5.2-2.8,10.7-2.4,16.3-1.3c2,4.2,4,8.4,6.9,12.2
    c1.5,3.1,3.9,5.6,6.5,7.7C226.3,75.8,228.4,76.7,228.7,79.1z"/>
<path style="fill:#FC8035; transform:scale(0.2)" :class="ValueId+'_color5'" d="M136.3,409.9c-2.8,4.9-4.1,9.9-3.8,15.8c0.5,9.6-8.2,16.9-17.7,16.5c-8.7-0.4-18.4-9.4-16.2-18
    c0.9-2.8,2.5-5.3,4.9-6.8c6.1-3.7,10-9.2,13.3-15.2c0.4-0.7,1.1-1.1,1.8-1.4C126,401.1,131.3,405.2,136.3,409.9z M466.6,411
    c0.7,2.8,2.5,5.1,1.5,8.7c-1.8,6.5,1.9,14.1,7.8,17.8c6.5,4,12.8,3.1,18.9-0.9c6.1-4,8.3-9.8,6.9-17.4c-5-3.6-8.6-8.5-12.6-13
    c-1-1.5-2-3-2.9-4.5C478.4,402.1,472.6,406.6,466.6,411z"/>
<path style="fill:#0CA54C; transform:scale(0.2)" d="M183.7,125c6.6-0.5,13.6-7.6,20.4,1.4C196.8,127.1,190.3,124.2,183.7,125z"/>
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
                                    <button :style="{background:'rgba('+getterBellsBg1+')'}" @click="ShowElement(getterBellsBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBellsBg2+')'}" @click="ShowElement1(getterBellsBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBellsBg3+')'}" @click="ShowElement2(getterBellsBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBellsBg4+')'}" @click="ShowElement3(getterBellsBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterBellsBg5 +')'}" @click="ShowElement4(getterBellsBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBellsBg6+')'}" @click="ShowElement5(getterBellsBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBellsBg7+')'}" @click="ShowElement6(getterBellsBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBellsBg8+')'}" @click="ShowElement7(getterBellsBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBellsBg9+')'}" @click="ShowElement8(getterBellsBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBellsBg10+')'}" @click="ShowElement9(getterBellsBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Bells= [
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
            var randomNumber = Bells[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Bells[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Bells'){
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
                getterBellsBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bells') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bells') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Bells') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBellsBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBellsBg10: {
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
                            name:'Bells',
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