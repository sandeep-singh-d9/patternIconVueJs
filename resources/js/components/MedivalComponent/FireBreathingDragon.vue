<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(1);">
                  <path style="fill:#D68DC5; transform:scale(0.2)" :class="ValueId+'_color1'" d="M478.9,180.9c7.1-3.5,14.6-4.6,22.5-3.8c-5.8,2.4-11.2,5.4-16.6,8.7c-9,5.8-15.9,13.4-18.1,24.3
    c-2.8,14.2-10.2,24.8-22.8,31.8c-7.3,4-15.3,5.1-23.4,5.9c-29.3,2.9-58.6,2.1-88,2.1c-1.3,0-2.5,0-3.8-0.1s-2.6-0.5-3-2
    c-0.5-1.5,0.2-2.7,1.2-3.7c0.8-0.7,1.7-1.2,2.7-1.5c6-2,9.7-6.5,12.4-11.9c1.7-3.3,2.8-6.9,4.2-9.3c-3.7,8.4-10.4,15-19.5,19.3
    c-2.5,1.2-2.8,3.1-2.4,5.4c1.5,8.8,4.3,17.2,7.7,25.5c1.1,2.6,2.7,5.2,2.7,8.2c-0.5,1.9-2.1,2-3.6,2.3c-8.7,1.7-17.5,3.3-26.4,3.8
    c-5.3,0.3-9.6,3-14.1,5.4c-1.4,0.7-2.8,2.7-4.2,1.3c-1.6-1.5,0.4-3.1,1.1-4.5c0.2-0.3,0.4-0.6,0.8-1.1c-3.5,1.2-6.2,3.2-9.1,4.7
    c-0.9,0.5-1.7,1.6-2.8,0.8c-1-0.8-0.7-2.1-0.3-3.2c0.8-2.5,2-4.8,3.4-7.3c-1.7,1.6-3.6,2.6-5.4,3.5c-0.6,0.3-1.3,0.7-1.9,0
    c-0.5-0.6-0.3-1.3,0-2c1.2-2.3,2.8-4.2,4.8-5.8c7.3-5.7,15.8-8.6,24.5-11c1.7-0.5,3.4-0.6,4.8-1.8c1.4-1.2,0.3-2.3-0.3-3.4
    c-1.9-3.4-4.4-6.5-6.5-9.8c-4.3-6.6-6.9-13.7-6.7-21.8c0.1-6,1.7-11.2,5.7-15.6c8.8-9.6,19-17.1,31.8-20.6c0.7-0.2,1.3-0.4,2.3-0.3
    c-9.4,0.4-13.8,1.7-21.9,6.5c-6.8,4-13.4,8-18.4,14.4c-4.8,6.2-6.4,12.9-4.8,20.5c0.2,1.1,0.9,2.2-0.4,3.2c-0.6,0.1-1,0-1.5-0.4
    c-0.5-0.5-0.8-1.2-1.1-1.8c-0.8-2.8-2.3-5.4-2.8-8.3c-0.1-1.6-0.7-3-1.3-4.4c-0.8-2.4-1.3-4.9-1.6-7.4c-0.1-1.5,0.1-2.9-0.5-4.3
    c-0.2-1.1-0.3-2.2-0.3-3.4c0-1.9,0.2-3.7-0.4-5.6c-0.2-0.8-0.3-1.6-0.2-2.4c0.2-2.7-0.1-5-3.4-5.7c-0.6-0.1-1-0.9-1.2-1.6
    c-0.5-2.2-0.2-4.5-0.3-6.7c0-0.9,0.1-1.8,0.3-2.7c-2.6,1.9-2.1,5.5-4.3,7.6c-0.3,0.1-0.7,0-1-0.2c-2.1-3-1.5-5.9-0.2-8.9
    c-1.1,1.3-1.3,3.3-2.6,4.5c-0.4,0.4-0.8,0.9-1.4,0.8c-0.8-0.2-0.9-0.9-1-1.6c-0.2-2,0.5-3.8,0.7-5.8c0.1-0.7,0.4-1.4,0.6-2.1
    c0.7-1.9,1.1-3.9,2.8-5.2c5.7-4.6,12.5-5.3,19.5-5.7c5.2-0.3,10.3-0.7,15.5-1.3c2.1-0.2,2.2-1,1.4-2.7c-2-4.1-4.4-8.1-4.4-11.8
    c0.3,2.8,1.3,6.4,2.8,10c1.2,2.8,0.6,3.9-2.4,4.2c-4.9,0.4-9.7,2.2-14.7,0.9c-1.4-1.6-0.2-3.1,0.4-4.5c0.6-1,1-2.1,1.4-3.3
    c1-2.6,2.2-5.2,3-7.9c0.3-0.8,0.4-1.7,0.6-2.5c1.2-4.3,2.6-8.6,2.2-13.1c2-7.8,0.3-15.6-0.1-23.4c-0.1-3,2-5.4,2.6-8.2
    c0.4-1.7,1.1-3.3,1.1-5.6c-4.7,5.1-9.8,9-16.1,10.9c-3.7,1.2-7.4,2.6-11.4,1.8c-0.9-1-0.7-2.3-0.8-3.6c-0.2-1.6-0.8-2.8-2.5-3.3
    c-1.4-0.4-2.8-0.5-4.2-0.5c-1.8-0.4-3.7-0.7-5.6-0.8c-2.1-0.2-4.2-0.9-6.4-0.2c-1.1-0.2-2.2-0.9-3.4-0.7c-1.9,0-3.8,0.2-5.5-0.9
    c-1.6,0-3.2,0.1-4.8,0.1c-2.4,1.3-4.7,1.3-7.1,0c-1.6,0-3.2,0-4.7,0c-1.7,0.8-3.4,1.1-5.2,0.6c-2.4-0.6-4.9-0.5-7.4-0.1
    c-0.2,0-0.4,0.1-0.6,0.2c-1.9,1.4-3.7,1-5.6,0c-0.9,0-1.8,0-2.7,0c-3,1.4-6.1-0.4-9.1,0.6l0,0c-2.1,1.3-4.2,1.5-6.3,0.1
    c-6-0.5-6-0.5-6.4-6.6c-0.3-5,0.2-9.9,2.9-14.4c1.1-1.9,1.6-4.3,2.3-6.5c2-6.5,5.1-8.5,12-7.2c10.1,1.9,19.8,0.6,29.3-2.9
    c5.8-2.1,10.4-5.4,13.3-11.3c3.4-7,9.9-11.2,17.1-13.4c17.9-5.6,34.5-14.4,51.7-21.8c9.7-4.2,19.8-4,30-3.2
    c4.9,0.4,9.7,1.1,14.4,2.7c-11.7,1.1-23.2,2.9-34.2,6.7c-6.2,2.1-12,4.9-16.6,9.7c-1.8,1.8-0.9,2.2,1,2.2c4.2,0.5,7.6,2.6,10.4,5.6
    c0.4,1.9,2.2,2.9,3.3,4.3c5.9,7.8,7.4,16.9,7.6,26.2c0.3,11.4,0.5,22.9-0.5,34.3c-0.6,6.8,2,13.2,3.5,19.7c1.2,5.2,1.3,5.3,6.7,4.9
    c6.1-0.4,12.1-1.4,18.1-2.8c16.6-4,24.4-15.4,27.1-31.4c1.3-7.4,0.5-14.7-1.6-21.9c-0.4-1,0-1.8,0.5-2.6c1.7-2.5,2.8-5.2,3.5-8.1
    c0.3-1.1,0.6-2.6,2.4-2c36.6,13.5,66.6,35.7,88.5,68.2c8.2,12.1,14.6,25.1,20.4,38.5c0.5,1.2,0.9,2.4,1.2,3.6c0.3,1,0.8,2.3-0.1,2.9
    c-0.9,0.7-2.2,0.4-3.1-0.5c-4-8.8-8.1-17.6-13.2-25.9c-9.9-15.9-21.7-30.1-35.7-42.6c-13.6-12.2-29.1-21.7-44.9-30.6
    c-0.7-0.4-1.3-0.9-2.1-1.3c-1.7-0.8-3.2-3.4-5.1-1.8c-2,1.8-3.8,4.1-3.5,7.2c0.8,8.4,0.8,16.8-0.1,25.2c-0.6,5-2.1,9.7-4.4,14.2
    c-1,2-1,3.4,0.4,5.3c6,8.4,11.1,17.3,16.1,26.3c0.6,1.2,0.9,2.4,0.9,3.6c-0.2,0.6-0.5,1.3-1.3,1.4c-1.3-0.7-2.1-1.8-2.8-3
    c-4.8-8.5-11.4-15.6-18.1-22.6c-1.9-2-3.7-2.2-6.1-0.9c-10.1,5.3-21.1,8.1-32.4,9.5c-0.7,0.1-1.4,0.3-2,0.3
    c-2.3,0.2-2.6,1.3-1.7,3.3c2,4.5,4,9.1,6,13.6c0.4,1.1,1.1,2.1,1,3.3c8.3,12.7,16.6,25.5,24.9,38.2c5.1,5.5,10.9,10,17.5,13.3
    c12.5,6.3,25.5,11.6,39.4,13.8c7.8,1.2,15.5,0.3,23.1-1.5c4.4-1,7.3-4.2,8.6-8.7c3.2-11,9.2-20.3,17.5-28.3
    C475.1,184.4,478,183.7,478.9,180.9z"/>
<path style="fill:#F59407; transform:scale(0.2)"  :class="ValueId+'_color6'" d="M260.9,102.3c1.4-0.3,2.7-0.2,4.1,0.1c0.4,1.9-1.1,2.6-2.1,3.6c-7.7,7.6-15.8,14.8-23.7,22.3
    c-0.2,0.2-0.5,0.4-0.8,0.6c-3,2.5-5.9,5.3-8.9,7.8c-0.6,0.6-1.2,1.1-1.8,1.6c-1.9,1.1-3.2,3-5,4.2c-0.9,0.6-1.7,1.3-2.4,2
    c-1,1.1-2.3,2-3.5,2.9c-1.5,1.4-3.2,2.5-4.8,3.8c-1.2,0.6-2.1,1.8-3.5,1.9c-22.1,17.6-45,34-70.7,46c-6.6,3.1-11.2,7.7-13.8,14.6
    c-1.9,4.8-4.3,9.5-6.7,14.1c-0.7,1.5-1.7,3.5-3.8,3.1c-1.9-0.4-1.8-2.5-2.1-4c-0.6-3-0.4-6,0.1-9c0.2-1.1,0.7-2.4-0.4-3.2
    s-2.3,0-3.2,0.5c-5.6,3-10.6,7-15.7,10.7c-4.6,3.4-9,7.3-14.2,10c-1.5,0.8-3.5,2.3-4.7,0.8c-1.4-1.6,0.2-3.6,1.4-4.9
    c4.4-4.8,8.4-9.8,12-15.2c0.2-0.4,0.4-0.8,0.9-1.8c-10.3,3.8-19.7,7.9-26.5,16.4c-5.5,7-10.8,9.1-20.3,8.4c2.3-2.1,5-2.7,7.3-4.1
    c1.7-1,3.4-2,5-3.2s3.1-2.8,2.2-5c-0.9-2.1-2.7-3.6-5.2-3.4c-6,0.4-12,1-18,1.5c-0.9,0.1-1.8,0.1-2.8-0.2
    c11.1-4.2,22.8-6.7,34.2-10.4c-5.5-0.4-10.9-0.3-16.3-0.7c-10.2-0.7-16.3-7.3-22.3-14.3c-0.9-1-1.2-2.4,0-3.4
    c1.3-1.1,2.6-0.6,3.8,0.1c6.1,3.5,12.4,6.2,19.3,7.4c8.6,1.5,16.8,0.5,24.2-4.5c0.9-0.6,2.4-1.2,2.1-2.5s-1.9-1-3-1.1
    c-8-0.8-16.2,0.1-24.1-2.1c-4.6-1.3-9.1-3-10.4-9c17.5,3.5,34.5,8.9,52.4,5.8c0-0.3,0-0.6,0.1-0.9c-4.6,0-9.3,0.1-13.9,0
    c-3-0.1-5.9-0.8-8.7-2.2c-2.2-1-3.4-2.8-3.2-5.3c0.2-3.1,1.8-5.5,3.8-7.6c0.6-0.6,1.3-0.1,1.6,0.7c0.2,0.5,0.2,1.1,0.1,1.7
    c-1,6.3-0.1,7.8,6.1,8.3c8.9,0.7,17.4-1.6,26.2-3.7c-4.9-4.7-12.6-7.2-10.6-16.1c0.6,0.2,1.1,0.2,1.2,0.4c3.9,7.9,10.8,9.1,18.3,7.4
    c16.1-3.6,32.1-7.7,47.7-13.3c28.4-10.2,54.1-25.3,79.2-41.8c1.3-0.8,0.8-3.5,3.2-2.8c3.4-3.1,7.2-5.5,10.9-8.1
    c0.5-0.4,1.1-0.7,1.6-1.1C255.5,105,257.4,102,260.9,102.3z"/>
<path style="fill:#8C427D; transform:scale(0.2)" :class="ValueId+'_color8'" d="M478.9,180.9c1.4,1,0.9,1.7-0.3,2.5c-10.8,7.4-17.8,17.6-21.4,30c-2.3,8.1-7.9,10.8-15.4,11.9
    c-18.4,2.7-34.9-3.1-51.2-10.7c-5-2.3-9.9-4.9-14.5-7.9c-3.6-2.4-6.9-5.3-9-9.2c5.6,3.6,11.6,6.6,17.5,9.6c3.8,3,8.5,4.6,12.8,6.6
    c11.6,5.3,23.7,8.3,36.5,8.4c3.7,0,7.4-0.3,10.9-1.7c4.2-1.7,7.4-4.3,9.3-8.7c3.5-8.5,8.7-16,14.7-23c2.5-2.9,5.9-4.6,8.8-7.1
    C477.9,181.1,478.3,180.8,478.9,180.9z M477.5,181.6c0.6,0.7-0.1,1-0.5,1.3c-7.9,4.7-12.4,12.4-17.3,19.7c-2.4,3.6-3.9,7.8-6,11.6
    c-2.9,5.4-8.1,7.7-13.9,8.3c-13.8,1.5-26.9-1.5-39.7-6.7c-5-2-9.8-4.5-14.5-7.1c-0.4-0.2-1.8-0.3-1-1.6c11.5,4.5,23.1,8.7,35.4,10.9
    c6.5,1.2,13,2.1,19.6,1.1c4.8-0.8,8.2-2.9,10.4-7.5c5.2-11.2,12.5-20.8,23-27.6C474.4,183.1,476,182.4,477.5,181.6z"/>
<path style="fill:#FCC219; transform:scale(0.2)"  :class="ValueId+'_color9'" d="M246.2,167.6c1.5-1.9,2.9-3.8,4.5-5.6c1.4-1.6,0.6-2.1-0.8-2.6c1.5-0.1,3.1,0.1,4.1-1.4
    c3.4-1.6,7-1.2,10.5-1c6.4,0.3,12.8,0.6,19.1,2c1.3,0.3,3,0.3,2.4,2.4c-0.5,1.4-0.9,2.8-1.4,4.1c-0.2,0.5-0.6,1.1-1.2,1.2
    c-4.9,0.3-9.5,2.2-14.6,1.8c-6.4-0.5-12.9-0.4-19.3,0C248.3,168.6,246.8,169.4,246.2,167.6z"/>
<path style="fill:#050303; transform:scale(0.2)" :class="ValueId+'_color2'" d="M280,65.1c-2.1,2.2-4.5,2.7-7.2,1.1c-3.3-2-3.2-4.9,0.2-6.7c1.9-1,3.9-2,5.8-2.9
    C283.1,58.5,283.6,62.4,280,65.1z"/>
<path style="fill:#F9F8F7; transform:scale(0.2)" :class="ValueId+'_color3'" d="M280,65.1c2.2-3.7,2-5.2-1.1-8.6c1.1-0.6,2.1-1.3,3.2-1.9c3.2-1.7,4-1.3,4.5,2.3
    C287.2,61.5,283.9,65.6,280,65.1z"/>
<path style="fill:#FCC219; transform:scale(0.2)" :class="ValueId+'_color9'" d="M279.6,208c0,1.1,0.1,2.3,0.1,3.4c0.8,2.6-0.9,3.2-2.8,3.7c-3.3,0.8-6.6,0.9-9.9,1.2
    c-11.8,0.8-23.5,2.2-35.4,1.5c-1.9-8.8-2.9-17.7,0.1-26.5c0.2,0.1,0.4,0.1,0.6,0.2c3.5,0.9,6.9-0.3,10.3-0.6c10.1-1.1,20-0.5,30,1.1
    c0.6,0.1,1.1,0.4,1.5,0.9c0.1,0.2,0.3,0.5,0.4,0.5c6,0.4,4.3,5,4.5,8.5c0,0.2,0,0.5,0,0.7c-0.4,1.9-1.9,1.5-3,1.2
    c-13.9-3.8-27.9-3-41.9-1.4c13.9-1.5,27.7-2.3,41.5,1.3C278.4,204.1,279.4,205.4,279.6,208z M264.3,179.5c-0.2,2.3-0.4,4.5-0.7,7.2
    c2.4-1.9,2.7-4.8,5.2-6.7c-0.8,3.7-1.8,7.1-0.4,10.5c-3.3,1.2-6.6,0-9.8-0.1c-7.4-0.3-14.7,0.3-22,1c-1.5,0.1-3.2,0.9-4.7-0.1
    l-0.2-0.2c0.7-2.8,2.1-5.3,3.3-7.9c0.4-0.8,1.6-1.6,0.4-2.7c-0.3-0.9,0.2-1.6,0.7-2.1c2.3-2.3,4.4-4.9,6.4-7.6
    c0.8-1.1,2-1.9,3.4-2.1c6.2-1,12.4-0.8,18.7-0.8c0.9,0,1.9-0.1,2.8,0.1c2.5,0.5,2.9,1.6,1.2,3.5c-0.5,0.5-1,0.9-1.4,1.5
    c-1.4,1.3-1.5,3.2-2.1,4.8c-0.7,0.7-1.7,0.7-2.6,0.8c-7.4,0.1-14.8-0.3-20.9,0.7c5.5-0.6,12.3-0.9,19.2-0.7
    C261.9,178.8,263.3,178.5,264.3,179.5z M280.3,215.6c0.5,2.5,1,5.1,1.5,7.6c-0.2,2-1.9,2.1-3.3,2.5c-5.9,1.6-12,2.2-18.1,2.6
    c-7.3,0.4-14.7,0.9-22,0.2c-1.2-0.1-2.3-0.2-3.2-1c-1.8-2.5-2.5-5.5-3.3-8.4c1.8-1.4,3.9-1.2,5.9-1.3c13-0.3,26-0.9,38.9-2.8
    C277.9,214.8,279.2,214.5,280.3,215.6z M262,146.8c8.3-0.1,16.6,0.1,24.8,2.1c1.2,0.3,2.5,0.4,3.4,1.4c-1,2.8-2,5.5-3,8.3
    c-0.9,0.7-1.9,0.9-2.9,0.7c-8.7-1.8-17.6-2.1-26.4-2c-0.9,0-1.9,0.1-2.6-0.7C257.5,153.3,259.8,150,262,146.8z M285.8,235.7
    c-9.8,3-19.9,4.2-30.1,5.5c-1.9,0.2-3.5-0.1-5.2-1.2c-4.7-2.9-9.3-5.8-13.5-10.5c5.1,0,9.4,0,13.7,0c9.7,0,19.3-1,28.7-3.2
    c1.6-0.4,2.6-0.1,3.6,1.1C284,230.1,284.9,232.9,285.8,235.7z M287.2,237.8c0.6,2.5,2.4,4.3,3.5,6.6c0.8,1.8,0.8,2.7-1.4,3.1
    c-3.2,0.6-6.4,1.3-9.6,2c-8.3,0.6-15.2-3.1-22.4-6.4c9.9-1.6,19.8-2.7,29.3-6C286.7,237.4,287,237.6,287.2,237.8z M290.7,148.3
    c-6.4-1.4-12.8-2.6-20.2-3c8.1-3.2,16-4.9,22.3-10.1C293.7,139.8,292.2,144.1,290.7,148.3z M274,185c-0.8,0.7-0.6,1.7-0.6,2.6
    c-0.2,4-0.2,4-4.1,3c0.7-3.7,1.6-7.2,5.2-9.5C274.3,182.5,274.2,183.8,274,185z M277,191.9c0.7-1.3,1.4-2.6,2-3.9
    C279.5,191.5,279,192.5,277,191.9z M281.1,250.3c2.4-0.3,4.9-0.1,7.1-0.9c4.1-1.6,6.4,0,8,3.6c-4.7,0.2-9.2-0.9-13.9-1.4
    C281.5,251.6,281.1,251.2,281.1,250.3z"/>
<path style="fill:#8C427D; transform:scale(0.2)" :class="ValueId+'_color8'" d="M208.4,153.1c0.9-0.8,1.6-1.8,2.8-2.1c6.1,0.1,11.5-1.7,16.5-5.1c0.5-0.3,1.1-0.6,1.7-0.9
    c1.3-0.7,2.4-1.7,3.7-2.6c1.3-0.8,1.8-1.9,1.4-3.4c1.6-0.9,3.7-0.6,5-2.2c1.5-1.4,3.6-2.2,3.4-4.8c3-0.9,4.7-2.2,3.6-5.9
    c-1-3.3,0.3-4.2,3.6-2.9c2.8,1.1,5.9-0.7,7.6-4.5c0.9-1.9,0.9-4.4,4.2-3.8c0.8,0.1,1.7-1.2,2-2.2c0.8-2.3,2.5-2.8,4.6-2.8
    c11.2-0.8,20.6-5.5,28.2-14.7c0.8,3.3-0.3,5.8-1,8.2c-0.8,2.5-1.8,5-2.7,7.4c-0.7,2.9-2.2,5.2-4.9,6.7c-1.8,1-3.5,2.3-4.9,3.9
    c-3.5,4.1-8.5,6-12.8,8.8c-0.3,0.2-0.7,0.1-1,0c-6.2,2.6-11.7,6.4-17.5,9.7c-11.2,6.3-22.2,12.9-33.9,18.3c-4.1,1.9-7.7,0.4-9.6-3.7
    C208.1,154.1,208.4,153.6,208.4,153.1z M441.4,246.2c-15.2,5.2-30.9,6.2-46.7,6.3c-21.1,0.1-42.2,0.5-63.4,0.7
    c-2.9,0-3.7,0.5-2.5,3.4c2.7,6.6,5.2,13.3,7.8,20c0.8,2.2,0.7,3.6-2.1,3.7c-2.7-8.3-6.8-16.1-8.9-24.7c-1-3.9-2-7.8-2.3-11.8
    c-0.1-1.3-0.1-2.5,1.5-3.1c10.6-4.3,17.7-12.1,22.2-22.5c0.1-0.3,0.4-0.6,0.9-0.7c-1.8,6.6-4.1,12.9-8,18.6c-2.7,4-6.5,6.1-10.8,7.6
    c-1.9,0.7-3.2,1.8-2.8,3.7c0.4,2,2.4,1.4,3.8,1.4c19.3,0,38.7,0.5,57.9-0.2c15-0.5,30.1-0.8,45-3.9c10-2.1,17.6-7.7,24.1-15.1
    c5.4-6.2,7.2-14,9-21.7c1.6-7,5.8-12.4,11.1-17c2.3-2,4.1-4.8,7.5-5.2c-5.7,4.6-10.9,9.6-14,16.4c-1.7,3.8-2.9,7.7-3.2,11.9
    c-0.9,13.7-7.8,23.3-20,29.3C445.6,244.3,443.5,245.2,441.4,246.2z M269.2,130.2c7.2-3.8,13-9.7,19.7-14.2c1.7-1.1,2.6-3.4,3.9-5.1
    c0.8,8.1,2.6,16.3,0,24.4c-0.1,1.4-1.1,2-2,2.6c-5.8,3.3-11.9,6-17.9,7.1c5.1-0.4,10.6,0.9,16.1,2.2c0.7,0.2,1.2,0.6,1.6,1.2
    c0,0.7,0.1,1.4-0.5,2c-3.3,0.1-6.3-1.1-9.5-1.6c-5.1-0.7-10.3-1.1-15.5-0.9c-1.1,0-2.6,0.8-3.2-1.1C265,141.5,268,136.2,269.2,130.2
    z M244.8,169.6c-3.3,3.6-5.9,7.7-9.4,11c-1.1,1.3-2.1,2.7-3.6,4.4c-2.2-5.2,0.3-9.1,2.1-13.5c-4.3,1.1-5.9,4.6-7.9,7.7
    c-1.2-4.7,1.4-8,4.5-11.8c-3.6,1.9-5.5,4.8-8.1,7c2.2-10.7,7.5-17.5,17.8-16c3.2,0.5,6.4,0.7,9.6,1c2.4,0.1,2.7,1.3,1.4,3
    c-1.4,1.8-2.9,3.5-4.3,5.3C246.4,168.6,245.8,169.4,244.8,169.6z M235.2,227.4c8,0.5,16.1,0.3,24.1-0.1c6.8-0.3,13.5-1.2,20.1-2.8
    c0.9-0.2,1.8-0.5,2.4-1.3c0.8,1.3,1.3,2.7,1.3,4.2c-2.8-0.1-5.5,0.4-8.2,0.9c-9.6,1.8-19.2,2.4-29,2.2c-1.9,0-3.9-0.1-6.5,0.2
    c4.4,4,8.6,7.1,13.4,9.2c1.1,0.5,2.3,0.4,3.4,0.2c8.6-1.1,17.2-2,25.6-4.4c1.3-0.4,2.7-1,4,0c0.2,0.5,0.4,1,0.7,1.5
    c-0.8,1.7-2.6,1.8-4.1,2.3c-7.3,2.1-14.9,3.1-23.1,4.1c6.9,2.8,13.1,5.3,20.1,5.5c0.7,0.2,1.4,0.6,2,1c3.8,1.7,8,1.3,12,2.1
    c0.9,0.2,1.8,0.1,2.7,0.3c1.6,0.9,3.1,1.9,2.2,4.1c-3.3,0.3-6.6-0.5-9.9-1c-1.2-0.2-2.2-0.1-3.3,0.1c-6.2-1.3-12.4-2.7-18.5-4.5
    c-5.1-1.5-9.9-3.7-14.7-6c-0.8-0.4-1.7-0.8-2.1-1.7c-1-1.5-2.5-2.3-4.1-2.9c-3-3.3-6.8-5.8-9-9.8
    C236.2,229.7,235.7,228.5,235.2,227.4z M313.7,41.4c-3.5-1.9-7-3.7-10.4-5.6c7.8-4.4,16.4-5,25.1-4.8c7.3,0.2,14.4,1.2,21.5,3.1
    C337.5,35.3,325.4,37.3,313.7,41.4z M384.5,62c-0.5,0.1-1.3,0-1.4,0.7c-0.2,4.6-2.9,8.1-5,11.9c-1.9-5.8-4.5-11.3-8.2-16.8
    C375.3,58.7,379.9,60.5,384.5,62z M280.3,215.6c-9.1,0.8-18.3,1.7-27.4,2.5c-2.3,0.2-4.6,0.3-6.9,0.3c-4.7-0.1-9.4,0.2-14.1,0.6
    c-0.1-0.4-0.2-0.8-0.3-1.2c0.5-0.8,1.4-0.8,2.2-0.8c10.3,0.2,20.5-1,30.7-1.4c4.2-0.2,8.5-0.9,12.7-1.4c1.6-0.2,2.6-1,2.5-2.7
    C280.8,212.7,280.1,214.2,280.3,215.6z M255.3,156.5c10.7-0.4,21.3,0.4,31.9,2.1c-0.4,1-0.8,1.9-1.3,2.9c-0.1-1.2-1-1.3-2-1.4
    c-9.6-1.4-19.3-2.9-29.1-1.5c-0.3,0-0.6-0.3-0.9-0.5C254.4,157.5,254.8,157,255.3,156.5z M298.4,256.5c-0.2-1.5-1.2-2.5-2.2-3.5
    c-2.7-3.5-6.3-3.5-10.1-2.4c-1.6,0.4-3.4,0.8-5-0.3c-0.6-0.1-1.2-0.1-1.5-0.7c2.2-2,5-2.1,7.7-2.5c2.5-0.4,3-1.5,1.8-3.8
    c-0.9-1.7-3-3.1-1.9-5.5c1-2.6-0.7-5-0.8-7.6c-0.4-9.2,4.2-16,10.4-21.6c6.1-5.5,13.2-9.6,20.7-13c4.3-2,8.9-3.2,13.7-3
    c1.2,0,2.3,0,3.4,1.1c-13.4,2.6-23.9,10-33.4,19.2c-7.7,7.4-8.4,18.7-5.6,27.9c2.5,8.2,8.2,14.3,12.5,21.3c1.3,2.2,0.5,2.5-0.8,3.4
    C303.9,263,301.9,259,298.4,256.5z M246.2,167.6c8.6,0,17.2,0.3,25.8,0c4.2-0.1,8.3-1.3,12.5-2c5.3,0.3,10.5-1.1,15.8-1.5
    c2.6-0.2,1.2-1.9,0.6-3c-2.3-4.3-2.9-8.8-2.2-13.6c1.2,6,3.6,11.6,6.7,16.8c0.8,1.3,0.2,1.8-1.2,1.9c-6.5,0.4-13.1,0.9-19.6,1.4
    c-6.3,0.4-12.3,1.7-17.5,5.5c2-4.1,2-4-2.8-4.2c-6.5-0.2-13,0.3-19.5,0.5C245.3,168.9,245.7,168.3,246.2,167.6z M277,191.9
    c-1.9-1.2-0.8-2.7-0.2-3.8c3.6-6.5,7.9-11.7,16.6-10.8c5.6,0.6,11.3,0.1,17,0.1c1,0,2.1-0.1,3.1-0.3c5.3-1.3,6.5-3.3,5.6-8.7
    c-0.9-5-1.7-9.9-2.6-14.9c-0.1-0.5-0.2-1.2,0.9-1.5c1.8,7,3.9,13.8,3.2,21.2c-0.2,2.4-1.7,4-4,4.7c-3,0.9-6,1.5-9.1,1.5
    c-5.1,0-10.2,0.4-15.2-0.1c-6.8-0.6-10.3,3.4-13.2,8.6C278.8,189.5,278.5,191,277,191.9z M279.6,208c-0.5-2.6-2.2-3.3-4.7-3.9
    c-13-3.1-26-2.9-39.1-1.2c-1.7,0.2-4.4,1.5-5-0.4c-0.4-1,2.9-1.2,4.4-1.4c12.5-1.3,24.9-1.9,37.4,0.5c2.1,0.4,4.1,2.5,6.5,0.7
    C280.1,204.1,279.5,206.1,279.6,208z M231.9,191.4c12.1-2,24.3-2.6,36.5-0.9c0.3,0,0.6,0,0.9,0c1.9-0.5,3.6-1.1,3.3-3.7
    c-0.1-0.8,0.1-1.9,1.4-1.9c0,2.6,0,5.2,0,7.7c-6.2,0-12.2-1.6-18.5-1.6c-7.4,0-14.6,0.7-21.9,1.5
    C232.6,192.8,231.4,193.3,231.9,191.4z M264.3,179.5c-9.1-0.3-18.1,0.1-27.2,0.8c9.1-3.3,18.5-1.8,27.8-2.3
    C264.8,178.5,264.5,179,264.3,179.5z M249.9,243.4c6.4,2.6,12.4,5.9,19.1,7.5c4.8,1.2,9.5,2.4,14.3,3.5c0.8,0.2,1.6,0.2,1.8,1.2
    c-10.2,2.2-20.4,3.7-30.8,4.4c-4.3,0.3-7.8,2.7-11.4,4.7c-1.7,1-3.3,2-5.4,3.3c1-3.7,3.4-6,6.3-9c-5.9,2.7-11,5-15.9,8.5
    c0.4-4.9,3.3-8.2,5.3-12.7c-3.2,2-5.9,3.6-9.4,5.7c1.7-4.2,4.2-6.5,6.9-8.5C236.6,247.9,243.2,245.7,249.9,243.4z"/> 
<path style="fill:#FBF104; transform:scale(0.2)" :class="ValueId+'_color7'"s d="M399.6,154.4c-5.8-10.8-11.6-21.5-19-31.2c-0.5-0.6-1.1-1.2-0.5-2.1c3.9-5.7,5.5-12.1,6.1-18.8
    c0.7-7,1-14.1-0.1-21.1c-0.8-4.6,2.3-7,3.9-10.2c0.4-0.8,1.4-0.5,2.2,0c14.6,9.3,30,17.2,43.5,28.2c15.8,13,29.4,27.8,40.6,45
    c6,9.3,11.1,19.1,15.5,29.2c0.2,0.5,0.1,0.9-0.3,1.2c-12.8-9.9-25.5-19.9-39.4-28.2c-4.2-2.5-8.5-4.7-12.8-6.9
    c-9.4-4.8-18.3-3.4-26.8,2.3C407.4,145.3,403.4,149.8,399.6,154.4z M342.1,159.4c-3.7-6-5.9-12.7-8.8-19.1c-0.8-1.8,0.8-1.6,1.9-1.8
    c7.7-1.1,15.4-2.2,22.9-4.7c5-1.6,9.8-3.5,14.3-6c1.7-1,2.7-0.9,4.2,0.5c8.4,8.3,16.1,17.1,21.7,27.6c-6.1-1.6-12-3.9-18.4-4.5
    C366.5,150,353.8,152.1,342.1,159.4z M238.2,120.6c0.8,1.9-1,2.3-1.9,3c-8.9,6.4-17.8,12.7-26.8,18.9c-14.5,10.1-29,20.5-43.7,30.2
    c-11.4,7.5-22.7,15.2-35.1,21.1c-7.5,3.6-14.3,8.1-17.6,16.3c-0.5,1.3-1.5,3.2-3.3,2.2c-4.9-3-9.6-2.3-14.8,0.9
    c0.7-3.2,2.5-4.7,3.6-6.7c0.5-0.9,1.7-1.8,1-2.9c-0.8-1.2-2-0.3-3,0.1c-11.4,4.1-23.1,7.6-34.3,12.3c-1.3,0.6-3,1.9-3.9-0.1
    c-0.8-1.8,1-2.5,2.4-3c3.8-1.4,6.2-4.4,8.5-7.4c1.1-1.4,2.1-2.6,4-2.4c4.6,0.3,8.5-2,12.5-3.5c1.4-0.5,3.3-1.8,2.9-3.1
    c-1.2-3.8,1.7-3.7,3.7-4.3c7.9-2.2,15.8-4.3,23.7-6.5c1.1-0.3,2.1-0.4,3-1.4c-1.4-1.9-4.2-2-5.6-4.4c13-3.2,25.6-7.1,37.7-12.4
    c18.5-7.9,36.5-16.8,53.9-26.8c0.9-0.5,1.7-1.3,2.6-2C217.9,132.7,228,126.6,238.2,120.6z"/>
<path style="fill:#E6ADA6; transform:scale(0.2)" :class="ValueId+'_color4'" d="M210.8,100.9c4.2-1.2,8.4-0.3,12.6-0.5c-2,1.9-2.4,4.3-2.2,7c-1.7-0.1-2.2-1.4-2.4-2.4
    c-0.5-3.8-2.8-4.5-6-4C212.2,101.2,211.5,101,210.8,100.9z M228.2,100.4c2.4,0,4.7,0,7.1,0c-1.4,2.2-2.8,4.3-4.4,6.8
    C229.2,105,228.6,102.8,228.2,100.4z M186.5,101.8c2.1,0,4.2-0.1,6.3-0.1c-1,2.4-2,4.8-3.2,7.6C187.9,106.9,186.9,104.5,186.5,101.8
    z M192.8,101.7c3-1.1,6.1-0.3,9.1-0.6c-1.9,0.5-2.2,2.1-2.6,3.6c-0.4,1.6-0.2,3.4-1.5,5c-1-1.5-1.5-3.1-1.4-4.6
    C196.5,102.4,195.4,101.4,192.8,101.7z M246.1,100.4c0.1,2-1,3.9-0.5,5.9c0.3,1-0.9,0.6-1.4,1c-0.1-3.1-3.4-4.3-4.2-6.9
    C242.1,100.4,244.1,100.4,246.1,100.4z M204.6,101.1c1.9,0,3.7,0,5.6,0c-0.3,0.7-0.4,1.6-0.8,2.2c-0.8,1.1-0.1,3.5-1.6,3.5
    c-1.8,0-1.8-2.4-2.4-3.8C205.1,102.4,204.9,101.7,204.6,101.1z M252.2,107.8c-1.1-2-2.2-4.1-3.4-6.1c2.2-2.3,4.4-0.6,6.6-0.1
    c0.4,2.2-1.2,3.7-2.2,5.4C252.9,107.3,252.6,107.5,252.2,107.8z M228.2,146.2c-3.9,4-9.3,4.5-14.2,5.9c-1.2,0.3-1.7-1.1-2.7-1.1
    c1.7-1.4,3.5-2.8,5.2-4.2c1.3-0.4,2.4,0.4,3.6,0.7c0.1-1.1-1-2.1-0.3-3.3c0.6-0.9,1.3-1.6,2.3-2.1
    C224.7,142.5,226.3,144.6,228.2,146.2z M229,136.2c1.7,1.3,3.3,2.6,5.5,3.1c0.7,0.6,2.7,0.9,0.7,2.4c-1.8,1.3-3.3,3.1-5.5,3.7
    c-2.4-2.1-3.2-4.6-2.3-7.7C227.9,137.2,228.5,136.7,229,136.2z M240.2,137c-1.3-2.8-2.3-5.7-2.1-8.8c0.1-0.1,0.3-0.2,0.4-0.2
    c1.3,1.6,2.4,3.4,4.4,4.3c1.4,1.1,1.4,2.2-0.1,3.2C241.9,135.9,241,136.5,240.2,137z"/>
<path style="fill:#7B1B08; transform:scale(0.2)" :class="ValueId+'_color5'" d="M252.2,107.8c-3.9,2.7-7.4,5.9-11.8,7.8c1.3-2.8,2.6-5.6,3.9-8.3c1.4-2.1-0.2-5,1.9-6.9
    c1.2-0.3,2.1,0.3,2.7,1.3C250.8,103.3,252,105.3,252.2,107.8z M268.4,109.9c-3.1,0.6-3.7,3.7-5.6,5.5c-1.1,1-2.2,2.9-3.3-1
    c-0.1,4.3-2.3,6.4-4.3,8.8c-3,3.6-5.3,0.3-8-0.3c-0.6,1.3-0.2,2.4,0,3.6c1,4.4,0.3,5.3-4.4,5.6c-2.8,0-3.7-2-4.4-4.3
    c8.1-7.7,16.1-15.3,24.2-23c0.8-0.8,1.5-1.7,2.3-2.5C269.9,103.2,268.2,107,268.4,109.9z M253.3,107c0.3-2,1-3.8,2.2-5.4
    c1.9-0.7,3.7-0.2,5.5,0.7C257.9,103.2,256,105.7,253.3,107z M240.2,137c-1.2,2.5-3.5,2.3-5.7,2.3c-2.7,0.5-4.5-0.5-5.5-3.1
    c2.9-2.8,5.7-5.7,9.1-8C239.1,131.1,240.5,133.8,240.2,137z M227.4,137.7c0.3,2.7,1.3,5.2,2.3,7.7c-0.3,0.6-0.9,0.7-1.5,0.8
    c-2.5-0.7-4.3-2.6-6.2-4.1C223.9,140.7,225.2,138.6,227.4,137.7z M219.7,144.2c0.5,1.3,1.1,2.7,1.8,4.4c-2.1,0-3.6-0.8-5-1.8
    C217.6,145.9,218.6,145.1,219.7,144.2z"/>
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
                                    <button :style="{background:'rgba('+getterFireBreathingDragonBg1+')'}" @click="ShowElement(getterFireBreathingDragonBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg2+')'}" @click="ShowElement1(getterFireBreathingDragonBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg3+')'}" @click="ShowElement2(getterFireBreathingDragonBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg4+')'}" @click="ShowElement3(getterFireBreathingDragonBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg5 +')'}" @click="ShowElement4(getterFireBreathingDragonBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg6+')'}" @click="ShowElement5(getterFireBreathingDragonBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg7+')'}" @click="ShowElement6(getterFireBreathingDragonBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg8+')'}" @click="ShowElement7(getterFireBreathingDragonBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg9+')'}" @click="ShowElement8(getterFireBreathingDragonBg9)" :class="this.ValueId+'_color9btn'"></button> 

                                    <!-- <button :style="{backgroundColor:'rgba('+getterFireBreathingDragonBg10+')'}" @click="ShowElement9(getterFireBreathingDragonBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var FireBreathingDragon= [
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
            var randomNumber = FireBreathingDragon[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  FireBreathingDragon[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'FireBreathingDragon'){
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
                getterFireBreathingDragonBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FireBreathingDragon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FireBreathingDragon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'FireBreathingDragon') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterFireBreathingDragonBg10: {
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
                            name:'FireBreathingDragon',
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