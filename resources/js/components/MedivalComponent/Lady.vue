<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.8);">
                  <path style="fill:#FDD243; transform:scale(0.2)" :class="ValueId+'_color1'" d="M241,148.9h-0.4h-0.4c-3,1.7-6.2,2.1-9.6,2.3c-17.8,0.8-35.4,3.1-52.6,8.3c-6.4,2-7.8,1.1-9.1-5.6
    c-1-5.1-1.8-10.2-2.6-15.2c-1.8-10.8,5-24.1,14-27.8c0.8-3.7-0.8-7.4,0-11.2c3-15.6,12.7-25.2,28.7-27.4c3.3-0.5,4.4-1.8,5.1-4.8
    c2.6-11.6,7.9-22,17.1-29.8c18.9-15.9,43.5-11.8,57.8,9.3c4.2,6.3,7.3,13,8.9,20.4c0.6,3,1.8,4.3,5.1,4.7
    c17.6,2.3,29.6,16,29.1,32.5c-0.1,2.1-1.9,4-0.4,6.2c8.7,3.8,15.7,17.1,14.1,27.4c-0.8,5.6-1.7,11.1-2.8,16.7
    c-1.1,5.3-3.1,6.5-8,4.9c-17.7-5.6-35.9-7.5-54.3-8.9c-10.6-0.8-21.2-0.8-31.8-0.8C246.1,150.2,243.7,149,241,148.9z M295,416.1
    c-2-7.1-0.4-10,7.1-12.5c-5.5-6-5.5-8.9,0.1-15.3c4.2-0.9,7.8,0.1,10.9,3c0.4,1.6,0.8,3.1,1.1,4.7c2.4,4.2-0.5,7-3.5,8.1
    c-2.9,1.1-1,2.7-1.6,3.9c0.4,1,0.7,2,1.1,3c2.3,2.8,1,5.3-0.9,7.5c-2.6,3-6,4-9.8,2.9C297,420.8,294.6,419.5,295,416.1z
     M212.9,404.2c1,0.7,2.1,1.4,3.1,2c0.6,1.5,1.6,3,1.9,4.6c0.6,3.6-0.8,6.5-4.2,8.3s-6.6,1.2-9.2-1.3c-2.7-2.5-3.3-5.8-1.6-9.1
    c0.7-1.4,1.9-2.7,3.1-4.2c-2.9-0.9-5.8-1.8-7.2-5c-1.2-2.7-0.7-5.2,0.3-7.7c3-3.6,6.6-4.7,11-2.7c0.6,0.4,1.3,0.8,1.9,1.2
    c3.8,2.4,4.7,5.8,2.8,10.1C214.2,401.6,212.6,402.5,212.9,404.2z M255.1,448c9.8,1.1,13.6,5.8,12.3,15.6c-0.2,1.4,0,2.2,1.3,2.8
    c-1.5,0.6-3,1.1-4.4,2.2c-5.8,4.9-10.6,4.9-16.5,0c-1.4-1.1-2.8-1.6-4.4-2.2c0.9-0.5,1.8-1.1,1.3-2.3c-2.4-6.4,0.9-10.8,5.3-14.8
    C251.8,448.8,253.5,448.4,255.1,448z M219.1,420.3c1.3-0.1,2.7-0.2,4-0.3c5.5-0.8,7.8,1.5,7.1,7.1c-0.1,1.3-0.2,2.7-0.3,4
    c-2.1,3.3-4.7,5.6-8.9,5c-3.2-0.5-5.5-2.3-6.5-5.4C213,425.9,215.4,422.7,219.1,420.3z M244,434.3c0.6,1,1.3,2,1.9,3
    c0,1,0.2,2,0.1,3c-0.2,4-2.3,6.6-6.1,7.6c-3.6,0.9-6.6-0.3-8.6-3.5s-1.8-6.5,0.6-9.3c2.5-3,5.8-3.8,9.4-2.1
    C242.3,433.3,243.2,433.8,244,434.3z M288.1,420c0.2,0,0.3,0,0.5,0c5.8,0.3,8.9,2.6,9.4,6.9c0.5,4.1-1.3,7.2-5.2,8.6
    c-3.9,1.4-7.2,0.3-9.5-3.3c-2.4-3.8-1.5-7.3,2.8-11.3C286.8,420.7,287.4,420.4,288.1,420z M271.1,432.4c6.5-0.5,10.2,1.8,10.9,6.6
    c0.6,4.2-2.4,8.3-6.6,9.1c-4.2,0.7-8.4-2.1-9.1-6.4c-0.2-1.4,0-3,0.1-4.4C267.6,435.2,269.2,433.6,271.1,432.4z"/>
<path style="fill:#FDDFD7; transform:scale(0.2)" :class="ValueId+'_color5'" d="M208.1,329.1c-1.6-1.6-3.2-3.2-4.8-4.7c-2.2-0.2-3.7-1.4-4.9-3.1c-9-11.6-17-23.8-21.8-37.9
    c-1.9-5.6-2.7-11.3-2.5-17.2c0.1-6.3,0.4-12.7-0.1-18.9c-0.7-8.9,2.7-16.2,7.7-23.1c9.3-12.6,19.9-24.1,30-36
    c9.9-11.7,20-23.1,26.1-37.5c0.3-0.8,0.9-1.4,1.5-1.9c0.4-0.3,0.9-0.5,1.4-0.6c2.1-0.2,3.9,1.1,5.5,2.1c18.5,11.5,37.6,22,54.8,35.6
    c7.6,6,15.1,12.1,21,19.9c1.4,1.9,3,3.6,3.3,6c0.1,3-1.8,4.9-3.7,6.8c-35.7,35.6-71.3,71.3-107,106.9
    C212.8,327.3,211.4,330,208.1,329.1z M243.5,466.4c-19.4-0.8-38.3-3.6-56.4-11.1c-7.1-3-13.8-6.7-18.9-12.6
    c-1.5-1.7-2.8-1.7-4.7-0.8c-5.5,2.8-9.4,7.3-12.5,12.5c-5.5,9.5-8.2,19.9-9.7,30.6c-13.1-5.7-24.8-13.7-36.5-21.9
    c-0.8-0.5-1.2-1.5-1.8-2.3c2.4-18.1,9.6-33.2,26.4-42.2c22.1-11.9,45.5-20.4,69.7-26.9c1.1,1,1,2.4,1,3.7c0.1,2.9,1.4,5.1,4.1,6.3
    c3.1,1.4,4,3.2,1.6,6.1c-1.2,1.4-1.9,3.2-1.5,5.1c0.7,3.2,2.7,4.9,6,4.9c3.1,0,5.5-2.6,5.6-5.9c0-2-1.1-3.9-0.8-5.9
    c0.3-1.8,1.7-2.8,2.9-4c15.1-15.2,30.5-30.2,45.4-45.6c5.9-6.1,14-8.2,21-12.2c1.2-0.7,2.6-0.5,3.8,0.3c2.9,4,0.4,6.9-2.2,9.5
    c-5.5,5.5-11,11-16.6,16.6c-15.4,15.4-30.8,30.8-46.2,46.2c-1.2,1.2-2.6,2.1-3,3.9c-0.8,1.5-2.1,2.5-3,3.9c-1.7,2.7-1.6,5.4,0.7,7.6
    s5,2.3,7.6,0.6c1.4-0.9,2.4-2.2,3.9-3c1.9-0.5,2.9-2.1,4.2-3.4c15.5-15.5,31.1-31,46.6-46.6c0.9-0.9,1.8-1.9,2.9-2.8
    c1.3-1.1,2.7-2.1,4.5-1.4s2,2.5,2.2,4.2c0.6,6.2-0.5,11.4-5.5,16.2c-12,11.3-23.3,23.2-35,34.8c-1.5,1.5-2.8,3.3-5,3.9
    c-1.5,0.3-2.9-0.2-4.4-0.4c-4-0.6-6.9,1.2-7.5,4.6c-0.6,3,1.4,6,4.4,6.7c3.4,0.8,6.4-1.4,7.3-5.6c0.2-1.1,0.3-2.3,0.7-3.4
    c0.7-2.1,2.3-3.6,3.8-5.2c10.9-10.8,21.6-21.7,32.5-32.5c0.5-0.5,0.9-1,1.4-1.4c1.5-1.4,3-2.9,5.2-2c2,0.8,2,2.9,2.2,4.7
    c0.9,9.1-2.8,15.6-11.4,19.6c-2.6,1.2-5.2,2.1-5.1,5.7c0,1.5-1.5,2.5-2.6,3.6c-5.5,5.6-11,11.1-16.7,16.6c-1.2,1.2-2.4,2.3-2.8,4
    c-2.9,4.2-6.4,8.1-5.2,13.9C246.5,465.2,245.6,466.8,243.5,466.4z M288.1,345.1c-7.7,3-15.7,5.7-21.7,11.4
    c-14.3,13.6-28.1,27.9-42.1,41.8c-2.7,2.7-5.5,5.3-8.3,7.9c-1.8,0.5-2.9-0.1-3.4-1.9c0.7-3.1,3.1-5,5.2-7.1
    c11.9-12,23.9-24,35.9-35.9c2.1-2.1,3.6-4.3,2.9-7.4c0.7-1.9,2.3-2.9,4-3.5c5.5-2,9.7-5.7,13.7-9.8c7-7.1,13.8-14.5,21.2-21.1
    c10.5-9.5,18-20.8,22.8-32.7c-22.4,22.1-45.1,45.5-68.5,68.2c-10,10.6-20.4,20.7-30.7,31c-2,2-3.8,4.2-6.9,4.6
    c-1.1-0.1-1.8-0.6-2.1-1.7c1.6-0.9,2.2-2.3,2.2-4c0.9-2.7,2.6-4.9,4.6-6.9c8.5-8.3,16.7-16.8,25.3-25.1c25-25.4,50.3-50.5,75.6-75.6
    c3.8-3.8,5.4-7.7,3.9-13.6c-29.2,28.8-57.6,57.8-86.5,86.2c-5.3,5.6-10.8,11.1-16.4,16.4c-1.7,1.7-3.4,3.8-6.4,2.6c0-1.3,0-2.7,0-4
    c2.2-6.1,7.7-9.3,11.6-13.8c1.6-1.9,3.7-3.3,5.2-5.3c29.5-29.5,59-59.1,88.6-88.5c3.8-3.8,5.4-7.7,3.8-13.6
    c-33.2,32.8-65.6,65.7-98.5,98.2c-1.9,1.7-3.5,3.9-5.6,5.5c-1.5,1.2-3.1,2.6-5.3,1.5c0-1.3,0-2.7,0-4c0.9-2.9,2.9-5.1,5.1-7.2
    c33.2-33.5,66.6-66.7,100-100c3.9-3.8,6-7.8,4.4-13.3c-2.2,0.5-3.3,2.3-4.6,3.7c-33.1,33.1-66.2,66.2-99.4,99.3
    c-2,2-3.6,4.5-6.8,4.8c-1-1-2-2.1-3-3.1c1.4-1.2,2.8-2.3,4.1-3.6c36-36,72-72,108-108c1.6-1.6,3.7-3,4-5.6
    c7.7,9.7,11.9,20.6,11.9,33c0,6.3-0.4,12.7,0.1,18.9c1.1,12.5-3.2,23.3-8.9,34c-5.2,9.7-11.9,18.3-18.3,27.1c-3.2,3.2-7,5.9-9,10.1
    C297,339.6,293.5,343.5,288.1,345.1z M301.1,462.2c-1.5,1.1-3.3,1-5,0.9c-1.9-3.6,1.2-5.2,3-7c14.2-14.3,28.5-28.5,42.7-42.8
    c1.3-1.3,2.8-2.4,3.6-4.2c-3.6-2.7-6.5-2.8-9.8,0.5c-17.4,17.5-34.9,34.9-52.2,52.3c-0.9,0.9-2.2,1.7-2,3.3
    c-2.7,1.2-5.5,0.9-8.3,0.7c-1.7-3,0.8-4.6,2.4-6.3c8.2-8.4,16.6-16.7,25-25.1c9-9.1,18.1-18.1,27.1-27.2c1.1-1.1,3.8-2.4,2.1-4.2
    c-1.6-1.8-4.3-2.6-6.7-0.6c-2.3,1.9-4.2,4.2-6.5,6.2c-1.9,1.6-3.7,3.5-6.6,2.6c-1.1-0.8-1.5-1.9-1.4-3.2c0.7-3.2,3.7-4.5,5.6-6.6
    c2.1-2.3,1.9-3.8-0.7-5.3c-1-1.6-1.7-3.2-0.2-4.9c22,6.4,43.4,14.2,64.2,24c18.3,8.6,28.2,22.9,31.8,42.3c0.2,0.9,0.7,1.8,1,2.7
    c-3.5,3.6-7.7,6.3-12,8.8c-3.8-0.6-5.3,2.4-7.1,4.9c-4.3,2.4-8.6,4.9-13,7.3c-1.2-3.1,1.1-5,2.8-6.9c3.4-3.9,7.2-7.3,10.8-11
    c1.2-1.2,2.5-2.3,3-3.9c0.6-2.1,0.5-4.7-1.2-6c-1.6-1.1-2.8,1.2-3.9,2.3c-4.6,4.5-9.1,9.2-13.8,13.6c-1.9,1.8-3.7,3.9-6.7,3.8
    c-1-1.2-1-2.6-1.2-4c0.5-2.4,2.1-4.1,3.8-5.7c5-4.9,9.9-9.9,14.8-14.8c0.9-0.9,1.9-1.9,2.7-2.9c1.9-2.4,0.9-4.6-0.8-6.2
    c-1.8-1.7-3,0.6-4,1.6c-5,4.9-9.9,9.9-14.9,14.8c-1.5,1.5-2.9,3.3-5.3,3.3c-0.7-1.3-1.4-2.7-2.1-4c0.2-2.4,1.8-3.8,3.3-5.4
    c5-5.1,10.1-10.1,15.2-15.2c1.9-1.9,2.9-3.7,0.5-6s-3.9-0.4-5.5,1.1c-4.8,4.6-9.4,9.4-14.2,14.1c-1.5,1.5-2.9,3.3-5.4,3.3
    c-1.1-1-2.1-1.9-3.2-2.9c0.1-2.4,1.8-3.8,3.3-5.3c4.4-4.5,8.9-8.9,13.3-13.4c1.2-1.2,3.2-2.5,1.1-4.5c-1.7-1.6-3.6-2.3-5.7-0.4
    c-0.5,0.4,0.1-0.1-0.4,0.3c-9.8,10.1-20.3,19.5-30.2,29.4c-3,2.4-6.5,4.1-10.2,5.1c-2.1-3.2,0.6-4.9,2.3-6.7
    c8.9-9.2,18-18.1,27.1-27.2c1.1-1.1,2.2-2,3.1-3.2c0.8-1.1,2.8-2.1,1.3-3.7c-1.4-1.5-3.2-2.5-5.4-1.4c-1.6,0.8-2.8,2.3-4.1,3.6
    c-12.8,12.8-25.6,25.6-38.4,38.4C307.4,458,304.5,460.4,301.1,462.2z M288.1,345.1c3.5-3.9,7.3-7.4,11.8-10c0,16,0.1,32,0.2,47.9
    c0,1.9-1.1,4.5,2.1,5.4c0.4,1,0.2,2-0.3,2.8c-2.1,3.5-2.2,6.8,0.5,10c1.2,1.5,1.5,3.3-0.6,4.1c-5.1,1.9-5.8,6.2-6.2,10.7
    c-1.5,2.7-4.9,2.7-6.8,4.9c-0.8,0.6-1.7,0.9-2.6,1c-2.1-0.1-3.9,0.2-5.3,2.1c-2.5,3.3-6.1,5.6-8.6,8.9c-1.7,1.9-3.5,3.6-5.3,5.3
    c-4.1,3.5-7.4,7.9-11.9,11c-1.7,0.7-3.3,1.3-5,0c0-2.5,2-3.7,3.5-5.2c5.5-5.6,11-11.1,16.6-16.6c2.2-2.2,4-4-1.5-5.5
    c6.5-2.7,11.9-4.6,16.3-9.1c4.5-4.7,2.6-9.9,2.9-15c0.1-1.3-1.1-1.5-2.2-0.8c-0.3,0.2-0.5,0.4-0.8,0.6c-13,13.2-26,26.4-39,39.6
    c-2-0.2-2.4-1.3-1.9-3c3-4.4,7.2-7.8,11-11.6c9.9-10.1,20-20,30-30c2.6-2.6,4.4-11.7,3-14.9c-0.6-1.3-1.4-1.4-2.3-0.6
    c-1,0.8-2,1.8-2.9,2.7c-15.9,15.9-31.8,31.8-47.7,47.6c-1.5,1.5-2.7,3.5-5.2,3.5c-1.1-1-1.2-2.2-0.9-3.5c1.2-2.6,3.2-4.6,5.2-6.6
    c15.9-15.9,31.7-31.9,47.7-47.6c3.7-3.7,5.1-7.5,3.9-12.8c-2.1,0.6-3.2,2.3-4.5,3.6c-17.2,17.2-34.4,34.4-51.6,51.6
    c-2.1,2.1-4.1,4.3-7,5.6c-1.3,0.3-2.6,0.2-3.6-1c0.1-2.5,2-3.7,3.5-5.2c20.7-20.7,41.4-41.5,62.2-62.1
    C287.1,350.7,288.6,348.4,288.1,345.1z M211,332.2c1.1-1.3,2.1-2.6,3.2-3.8c34.9-34.9,69.7-69.8,104.6-104.7
    c0.8-0.8,1.6-1.7,2.5-2.4c1.5-1.2,2.6-0.8,2.6,1.1c0.1,5.7,0.6,11-4.4,15.9c-32.6,32-64.7,64.4-97,96.7c-1.4,1.4-3,2.7-4.5,4
    c-3.6,1-4.3-2.1-5.8-4C211.9,334.1,211.4,333.2,211,332.2z M212.3,369.1c6-3.4,9.9-9.1,14.9-13.6c2.3-2.1,4.6-4.2,6.9-6.4
    c3.7,0.4,7.1,1.3,9,5c-9.8,10.8-20.3,20.9-30.8,31C212.3,379.7,212.3,374.4,212.3,369.1z M230.1,347.1c-5.5,6.4-11.6,12.2-17.8,17.9
    c0-5.3,0-10.7,0-16c4.1-1.6,6.2-5.7,9.8-8C225.5,342.2,228.3,344,230.1,347.1z M212.3,335.1c2.6,0.3,3.6,3,5.8,4
    c-1.6,2.4-3.6,4.2-5.8,6C212.3,341.7,212.3,338.4,212.3,335.1z M369,473.3c7.5-7.3,15-14.6,22.4-22c2.3-2.3,3.3-1.9,4.3,1.1
    c1.8,5,1.4,8.9-2.9,12.8c-5.4,4.9-11.1,9.6-14.7,16.1c-2.1,1.7-4.6,2.7-7.1,3.7C370.3,481.1,369.6,477.2,369,473.3z M391,474
    c-0.6-4,2.9-5.3,5.2-7c1.8-1.4,1.7,1,1.9,2.2C395.7,470.8,393.4,472.4,391,474z M295,416.1c2.3,3.2,5.4,4.8,9.3,3.6
    c4.2-1.3,5.8-4.5,5.9-8.6c4.5-2.1,7.3-6.2,10.8-9.5c2.8-2.6,9.6-2.3,12,0.6c1.3,1.6-0.1,2.4-0.9,3.3c-2.7,2.7-5.4,5.4-8.1,8.1
    c-15.7,15.7-31.5,31.5-47.2,47.2c-1.5,1.5-3.4,2.7-3.8,5.1c-1.5,0.1-2.9,0.3-4.4,0.4c-2.5,0.5-3-1.4-2.8-3
    c0.8-7.2-2.8-11.3-9.1-13.6c-0.8-0.3-1.4-0.9-1.7-1.8c3.5-3.9,6.8-7.9,11.2-10.8c1.7,1.2,1.5,3.2,2.2,4.8c1.2,2.7,3.2,4.2,6.2,3.9
    c3-0.3,4.8-2.2,5.1-5.1c0.3-3-1.2-5-3.9-6.2c-1.6-0.7-3.7-0.5-4.8-2.2c2.6-4.2,6.5-7.3,10.1-10.6c1.2-1.1,3-2.3,4.8-0.7
    c0.2,2-1.1,3.4-1.5,5.2c-0.9,3.4,0.2,5.9,3.4,7.3c2.9,1.3,6.2-0.1,7.4-3.1c1.3-3.3,0.2-5.8-2.8-7.6c-1.5-0.9-3.6-0.9-4.5-2.8
    C289.8,417.7,292.4,416.8,295,416.1z M281.3,465.2c-0.8-0.5-3.4,0.4-1.7-2.1c0.6-0.9,1.6-1.7,2.4-2.5c17.6-17.6,35.3-35.3,52.9-52.9
    c3.5-3.5,9.3-3.5,12.5,0.2c2,2.2-0.7,2.9-1.6,3.8c-12.4,12.5-24.9,25-37.4,37.5c-3.2,3.2-6.4,6.3-9.5,9.5c-1.3,1.3-2.8,2.4-2.9,4.5
    C291.3,464.6,286.4,465.2,281.3,465.2z M301.1,462.2c4.1-5.5,9.4-9.9,14.2-14.7c11.3-11.5,22.8-22.9,34.2-34.3
    c3.2-3.2,8.9-2.9,11.6,0.6c1.7,2.3-0.6,3.3-1.7,4.4c-10.5,10.6-21.2,21.2-31.7,31.8c-1.5,1.5-3.5,2.7-3.4,5.3
    C316.9,458.9,309.2,461.1,301.1,462.2z M334.4,450.3c-1.3-2,0.8-2.6,1.6-3.5c9.2-9.3,18.5-18.6,27.8-27.8c2.5-2.5,9.4-0.9,10.7,2.5
    c0.4,1.2-0.2,1.9-0.9,2.6c-6.9,6.7-13.2,14-20.7,20.1c-4.3-3.3-8.2-4-11.8,1.3C339.6,447.7,337.1,449.3,334.4,450.3z M364.1,459.1
    c7.3-7.5,14.6-14.9,21.9-22.4c1.7-1.7,2.6-1.1,3.8,0.7c3.8,6.1,3.9,6.7-1.3,11.7c-6.9,6.7-13.2,14-20.7,20.1
    C366.6,465.9,365.3,462.5,364.1,459.1z M356.1,447.1c6.8-7,13.7-14,20.5-21c2.5-2.6,4.4-0.9,5.8,1c1.4,1.8,4.9,3.5,1.7,6.5
    c-7.4,7.2-14.2,14.9-22.1,21.6C360.1,452.4,358.1,449.8,356.1,447.1z M230.1,347.1c-3.6-0.8-6.2-2.8-8-6c1.2-1.4,2.3-2.8,3.6-4.1
    c31-31,61.9-62,92.9-92.9c1.3-1.3,2.4-4,4.6-3.1c1.8,0.8,0.6,3.3,0.9,5.1c0.9,5.5-1.5,9.2-5.4,13c-28.2,27.9-56.1,56-84.2,84
    C233.1,344.5,231.6,345.8,230.1,347.1z M243.1,354.1c-3.1-1.5-6.8-1.8-9-5c1.1-1.3,2.1-2.6,3.3-3.7c27.2-27.2,54.4-54.5,81.7-81.6
    c1.2-1.2,2.2-3.7,4.2-2.7c1.6,0.8,0.6,3,0.8,4.6c0.9,5.6-1.4,9.6-5.4,13.6c-23.9,23.5-47.5,47.3-71.1,70.9
    C246.2,351.5,244.6,352.8,243.1,354.1z M249.1,354.1c1.2-1.4,2.3-2.8,3.6-4.1c21.3-21.3,42.6-42.6,63.9-63.9c1.3-1.3,2.6-2.5,4-3.8
    c1.3,1.6,0.4,2.8-0.1,3.9c-4.3,10.3-9.1,20.3-17.3,28.3c-8.2,8-16.5,16-24.3,24.4c-6.3,6.7-13,12.4-21.8,15.2
    C253.2,357.5,251.7,357.5,249.1,354.1z M249.1,354.1c2.7,2.3,5.3-0.2,8,0c1.3,1.4,4.2,2.4,1.5,5c-15.3,15-29.9,30.6-45.6,45.1
    c-0.8-0.1-1.6-0.1-3.1-0.3c4.6-4.2,5.7-8.7,2.3-13.7c11.7-11.1,23.3-22.4,34.2-34.4C247.1,354.9,247.9,354.2,249.1,354.1z
     M309.2,408.1c-1-1.1-2-2.2-3.2-3.5c4.6-1.1,7.9-3.4,8.3-8.4c1.6,0.1,3.6-0.4,4.3,1.6c0.6,1.7-1.1,2.6-2.1,3.6
    C314,403.6,311.6,405.8,309.2,408.1z M230.2,427c-1-3.7-3.3-6.1-7.1-7.1c6.3-6.4,12.5-12.9,18.8-19.3c13.7-13.8,27.5-27.6,41.3-41.3
    c1.1-1.1,2-3.3,3.9-2.4c1.7,0.8,0.6,3,0.9,4.6c1,5.8-1.5,9.9-5.7,13.9c-16.1,15.7-31.9,31.7-47.8,47.6
    C233.2,424.4,231.7,425.7,230.2,427z M272.2,275.3c-3.2,6.1-8.6,6.9-14.5,6.6c-4.5-0.3-7.7-2.7-10.1-6.5
    C255.9,277.3,264,277.7,272.2,275.3z"/>
<path style="fill:#C12627; transform:scale(0.2)" :class="ValueId+'_color2'" d="M235.1,512.1c-5.9-2.2-12.3-1.9-18.4-2.9c-26.4-4.2-51.6-12.1-75.5-24.2c-1.4-1.3-1.4-3-1.1-4.7
    c1.9-12.5,5.9-24.2,14.4-34c1.9-2.1,4-4,6.6-5.3c3.1-1.6,6.2-1.7,8.8,0.7c14.2,13.4,32.4,17,50.6,20.3c7.4,1.3,14.8,1.8,22.3,2.4
    c2.9,1.1,5.9,2.1,8.5,3.9c3.2,2.1,6.7,2,9.9-0.2c2.5-1.8,5.3-2.6,8.1-3.7c1.3-0.4,2.6-0.3,3.9-0.1c2.6-0.3,5.3,0.2,7.9-0.9
    c4.8-0.7,9.6-1.5,14.5-2c1.9,0.2,3.6-0.5,5.4-1c7.7-1.5,15.1-3.9,22.4-6.7c4-0.5,6.9-3.3,10.3-4.9c2.7-1.3,5.1-3,7.2-5.1
    c5-5.1,6.4-5.1,12.8-1.1c1.1,1.2,2.4,2.3,3.6,3.5c2.6,2.4,4.5,5.3,6.2,8.4c0.8,1.4,1.3,3,2.3,4.3c1.8,3.2,2.7,6.7,3.9,10.1
    c0.2,1.5,0.6,3,1.3,4.3c0.6,3.9,2.9,7.7,0.1,11.6c-28.9,14.6-59.5,23.3-91.8,26.1c-1.1,0.1-2.4-0.4-3.1,1
    C262.4,512.1,248.8,512.1,235.1,512.1z M244,76.6c0.2-8.2,1.2-15.8,4.8-22.7c1.5-2.9,3.5-5.5,7-5.6c3.6-0.1,5.9,2.3,7.3,5.3
    c7,15.1,7.1,30.3-0.1,45.2c-3.5,7.3-9.9,7.1-14,0C245.1,91.7,244.2,84,244,76.6z M220.1,103.7c0.1,6.8-5.4,12.4-12.2,12.4
    c-6.1,0-11.7-5.5-11.8-11.8c-0.1-6.4,5.5-12.2,12-12.2C214.3,92.1,220,97.5,220.1,103.7z M292.1,104.1c0.1-6.8,5.8-12.2,12.6-12
    c6.1,0.2,11.5,6,11.4,12.2c-0.1,6.4-6,12-12.4,11.8C297.4,115.9,292,110.2,292.1,104.1z M284.8,291.3c-0.5,2.9-2.5,5-4.3,7
    c-4,4.6-8,9.3-13.9,11.8c-2.9,2.7-6.9,3.1-10.7,1.3c-0.5-0.7-1.3-0.6-2-0.6c-8.1-4.5-14.2-10.9-19.2-19.4
    c11.3,1.7,21.9,2.2,32.6,1.8C273.1,293,279,292.6,284.8,291.3z"/>
<path style="fill:#242424; transform:scale(0.2)" :class="ValueId+'_color4'" d="M241,148.9c8.1-1.5,16.2-0.9,24.3-0.6c21.7,0.6,43.2,2.3,64.3,7.8c3.4,0.9,6.6,2.1,10.4,3.3
    c1.7-8.3,4-16.7,3.9-25.3c-0.1-9.4-4.7-17.2-12.1-23.1c1.2-3.4,2.4-0.3,2.9,0.3c16.4,15.6,27.1,34.4,31.4,56.7
    c3.6,18.5,2.2,37.2,1.7,55.8c-0.7,25.7-4.1,51.1-12.6,75.5c-4.6,13.3-11,25.6-19.5,36.9c-2.5,3.3-4.3,4.5-8,1.1
    c-5.5-5.1-12-9-18.7-12.3c-1-2.9,0.9-4.7,2.4-6.6c7.2-9.4,13.5-19.4,18.3-30.2c2.8-6.3,4.7-12.7,4.4-19.7
    c-0.5-10.6,0.9-21.3-0.9-31.8c-0.9-5.1-2.4-10-4.9-14.6c-1.7-3.2-3.5-6.4-4.1-10.1c-7-10.5-16.6-18.5-26.4-26.2
    c-13.9-10.8-29.2-19.6-44.2-28.8C249.3,154.4,245.2,151.6,241,148.9z M180.4,110.9c-9.3,8.1-14,17.8-11.4,30.4c1.2,6,2,12,3,18.1
    c21.9-8,44.3-9.6,66.8-10.9c0.5,0,0.9,0.3,1.4,0.4c-1.7,7.7-6,14-10.5,20.2c-9.8,13.5-21.3,25.6-31.9,38.4
    c-28.3,34.1-20.8,23.5-21.6,65.9c-0.1,6.2,2.8,11.9,5.4,17.5c5.6,12.2,13.2,23.1,21.7,33.4c-7.2,4.5-14.6,8.6-20.9,14.4
    c-2.5,2.3-3.4,0.2-4.6-1.3c-11.5-14-18.7-30.2-23.7-47.4c-7-24-9.7-48.6-9.9-73.4c-0.1-16.3-1.4-32.6,1.9-48.8
    c4.5-22.2,15-41.1,31.4-56.6C178,110.7,179.1,107.7,180.4,110.9z M291.9,212.1c4.1,1,6.9,4.6,7.1,9.1c0.2,4.9-3,9.6-7.7,10.9
    c-4.3,1.2-8.3,0.4-11.4-3c-3-3.4-3.7-7.4-2-11.6c1.7-4.2,5.1-6.4,9.6-6.8c0.4,0,0.9,0.3,1.4,0.5c0.2,1.1-1.2,2.9,0.7,3.4
    C291.3,215.1,291.3,213,291.9,212.1z M224.4,212.8c0.6-1,1.3-0.6,1.9-0.1c4.3,2.7,6,9,3.7,13.8c-2.4,5-8.2,7.4-13.5,5.6
    c-5-1.7-8.3-7.2-7.3-12.3c1.1-5.4,5.9-9.3,11.1-8.9c0.2,0,0.4,0.3,0.5,0.5c0.1,1.1-1.1,2.7,0.6,3.3
    C223.1,215.3,223.5,213.5,224.4,212.8z"/>
<path style="fill:#F3F2F0; transform:scale(0.2)" :class="ValueId+'_color3'" d="M256.9,128.9c19.2-0.2,38.2,0.7,57,5.2c6.2,1.5,12.1,3.7,17.5,7c1.3,0.8,3.4,1.8,2.2,3.8
    c-1.3,2.2-2.9,0.4-4.2-0.3c-12.4-7.3-26.3-9.1-40.2-10.4c-21.4-1.9-42.9-2-64.3-0.1c-14.9,1.3-29.8,3-43,11.1
    c-1,0.6-2.1,1.3-3.1,0.1c-1.1-1.4-0.2-2.5,0.9-3.3c4.7-3.3,9.9-5.4,15.4-6.9C215.3,129.5,236.1,128.8,256.9,128.9z M224.4,212.8
    c0.3,1.7-0.2,3-2.1,3.4c-1.3,0.3-2.4-0.3-2.8-1.4c-0.6-1.5-0.3-2.8,1.4-3.5C222.3,211.3,223.6,211.4,224.4,212.8z M291.9,212.1
    c1.1,1.6,0.7,3-0.9,3.9c-1.2,0.6-2.7,0.5-3.4-0.9c-0.8-1.5-0.6-3,1.3-3.8C289.9,211.5,290.9,211.8,291.9,212.1z"/>
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
                                    <button :style="{background:'rgba('+getterLadyBg1+')'}" @click="ShowElement(getterLadyBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLadyBg2+')'}" @click="ShowElement1(getterLadyBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLadyBg3+')'}" @click="ShowElement2(getterLadyBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLadyBg4+')'}" @click="ShowElement3(getterLadyBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterLadyBg5 +')'}" @click="ShowElement4(getterLadyBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterLadyBg6+')'}" @click="ShowElement5(getterLadyBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterLadyBg7+')'}" @click="ShowElement6(getterLadyBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterLadyBg8+')'}" @click="ShowElement7(getterLadyBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLadyBg9+')'}" @click="ShowElement8(getterLadyBg9)" :class="this.ValueId+'_color9btn'"></button> 

                                     <button :style="{backgroundColor:'rgba('+getterLadyBg10+')'}" @click="ShowElement9(getterLadyBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Lady= [
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
            var randomNumber = Lady[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Lady[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Lady'){
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
                getterLadyBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Lady') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Lady') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Lady') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterLadyBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterLadyBg10: {
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
                            name:'Lady',
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