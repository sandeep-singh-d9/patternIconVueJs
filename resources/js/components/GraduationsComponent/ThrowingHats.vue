<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#F7BA8D; transform:scale(0.2)" :class="ValueId+'_color4'" d="M347.2,535.7c0-12.2-0.1-24.3,0-36.5c0-3.1-0.8-5.7-2.4-8.5c-6.1-10.6-11.3-21.7-14.7-33.6
    c-4.4-15.7-7.6-31.7-10.4-47.7c-1.2-6.8-2.6-13.7-2.4-20.7c0-0.7,0-1.4,0-2c0.2-2.7,1.6-4.6,4.2-5c2.8-0.4,4.4,1.5,5,4
    c1.9,8.2,3.8,16.4,5.7,24.6c0.2,1,0.5,1.9,1.2,2.8c-0.5-5.1-1.1-10.3-1.6-15.4c-1-9.7-2.2-19.4-3-29.1c-0.4-4.3,1.5-6.2,5.4-6.7
    c3.6-0.5,5.9,1,6.8,4.9c3.1,12.7,5.6,25.4,8,38.2c0.2,1,0.1,2,1.2,3c-0.4-5.6-0.8-11-1.3-16.4c-0.6-6.4-1.3-12.7-1.8-19.1
    c-0.4-5.3-0.6-10.5-0.7-15.8c-0.1-5,1.8-7.4,5.9-7.7c4.2-0.3,6.9,1.8,7.5,6.5c1.3,10.2,2.3,20.5,3.5,30.8c0.8,7.1,1.8,14.2,2.8,22.1
    c1-3.2,0-5.5,0-7.8c-0.3-11.1-0.6-22.3-0.7-33.4c-0.1-5.2,2.6-7.7,7.4-7.4c3.6,0.2,4.8,3,5.3,5.7c1.4,7.8,2.4,15.7,3.5,23.6
    c1.3,9.4,2.5,18.9,3.8,28.3c0.3,2.3-0.2,4.8,1.6,7.3c4.1-4.5,7.7-9.3,11-14.4c0.7-1.1,1.6-2.2,2.2-3.4c1.5-2.6,3.7-3.7,6.5-3.1
    c2.8,0.7,4.5,2.8,5.3,5.6c0.7,2.7,0.5,5.3-0.3,7.9c-5.6,17.2-10.8,34.6-18.2,51.1c-2.2,4.8-4.3,9.7-7.2,14.1
    c-2.8,4.1-2.4,8.1-1.6,12.5c2.3,12.1,4.3,24.3,6.4,36.5c-0.8,1.5-2.3,1.7-3.7,1.8c-11.7,1-23.4,2.1-35.1,3.3
    C350.5,536.9,348.7,537.1,347.2,535.7z"/>
<path style="fill:#F7BA8D; transform:scale(0.2)" :class="ValueId+'_color4'" d="M214.5,531.5c1.2-6.5,2.3-13,3.5-19.6c1.3-7.2,2.6-14.3,3.9-21.5c0.3-1.6,0.1-3.1-0.7-4.6
    c-10.1-17.6-17-36.5-23-55.7c-1.9-6-5-11.6-4.7-18.2c0.2-3.9,2.1-7,5.1-8c2.9-0.9,5.3,0.2,7.7,4c3.3,5.3,7.1,10.1,10.9,14.9
    c0.4,0.6,0.7,1.7,1.7,1.4c0.8-0.3,0.9-1.2,1-2c0.9-7.1,1.8-14.2,2.8-21.4c1.6-11.7,3.1-23.4,4.9-35c0.7-4.7,3.3-6.6,7.7-6.1
    c3.2,0.3,5,3,5,7.3c0.1,12.6-0.4,25.2-1.3,37.8c0,0.5,0.1,1.1,0.1,1.7c1.6-0.5,1-1.7,1.1-2.6c2-16.1,3.9-32.3,6.1-48.4
    c0.6-4.8,3.2-6.9,7-6.5c4.4,0.5,6.7,2.9,6.5,7.8c-0.2,6.2-0.8,12.3-1.4,18.5c-0.6,6.7-1.3,13.4-1.9,20.1c-0.4,4.2-0.7,8.4-0.4,12.7
    c0.6-3,1.1-5.9,1.7-8.9c2.2-10.8,4.5-21.6,6.8-32.3c1-4.4,2.9-5.6,7.3-5c3.5,0.5,5.2,2.5,4.9,6.7c-0.5,7.6-1.4,15.2-2.1,22.8
    c-0.8,7.2-1.6,14.5-2.5,21.9c1.3-0.8,1.1-1.9,1.4-2.9c1.8-7.5,3.5-15.1,5.2-22.7c0.9-4,3-6.5,5.5-6.2c2.7,0.3,4.9,4.2,4.6,8
    c-1.3,14.1-4.1,28-6.9,41.8c-2.6,12.7-5.6,25.2-10.1,37.3c-3.1,8.2-7.1,16-11.8,23.5c-1.1,1.7-1.6,3.4-1.5,5.4c0,12.7,0,25.5,0,38.2
    c-1.4,1.4-3.1,1.2-4.8,1c-11.5-1.2-23.1-2.2-34.6-3.3C217.3,533.2,215.6,533.2,214.5,531.5z"/>
<path style="fill:#F7BA8D; transform:scale(0.2)" :class="ValueId+'_color4'" d="M474.9,531.5c1.7-9.6,3.3-19.2,5-28.8c0.7-4.2,1.5-8.4,2.3-12.6c0.5-2.2-0.6-4-1.5-5.7
    c-7.9-14.1-14.1-28.8-18.9-44.3c-2.3-7.4-4.9-14.7-7.3-22.1c-1.5-4.6-1.9-9.1,2.1-12.7c2.8-2.5,6.7-2.1,8.7,1.1
    c3.6,5.6,7.5,10.9,11.5,16.2c0.6,0.8,1,2.1,2.2,1.7c0.9-0.3,0.9-1.5,1-2.3c1-7,1.9-14,2.8-21c1.6-11.9,3.1-23.8,4.9-35.7
    c0.6-3.6,2.7-6.1,7.1-5.6c3.1,0.3,5.4,2.7,5.6,6.5c0.2,4.3,0.4,8.6-0.1,12.8c-0.6,4.8-0.6,9.7-0.5,14.5c0.1,4.7-1.1,9.4-0.2,14.2
    c0.9-7,1.9-13.9,2.8-20.9c1.2-10.4,2.3-20.7,3.5-31.1c0.7-5.7,4.9-8.2,9.8-6.1c2.2,0.9,3.6,2.5,3.6,5.1c0.1,9.6-1,19.1-1.9,28.6
    c-0.6,5.9-1.1,11.9-1.5,17.8c-0.1,2.2-0.2,4.4,0,6.7c0.9-4.3,1.7-8.7,2.6-13c1.9-9.2,3.7-18.5,5.8-27.7c1.3-5.5,4.8-6.9,9.6-4.5
    c2.1,1.1,2.8,2.7,2.9,4.9c0.1,5.6-1.2,11.2-1.6,16.8c-0.6,7.7-1.6,15.4-2.5,23.1c-0.2,1.9-0.4,3.8,0,5.7c1.6-6.8,3.2-13.6,4.8-20.4
    c0.6-2.4,1.1-4.8,1.7-7.2c0.6-2.4,2-4.2,4.7-4c2.9,0.2,4.3,2.3,4.5,5.1c0.4,6.1-0.7,12.1-1.6,18.1c-2.3,15.5-5.7,30.7-9.4,45.8
    c-3.6,14.6-9.2,28.4-17.3,41.2c-1.2,1.9-1.6,3.9-1.6,6.1c0,12.6,0,25.2-0.1,37.9c-1.6,1.5-3.6,1.2-5.5,1
    c-11.4-1.2-22.9-2.2-34.3-3.3C477.5,533.3,475.9,533.2,474.9,531.5z"/>
<path style="fill:#F7BA8D; transform:scale(0.2)" :class="ValueId+'_color4'" d="M87.3,535.6c0-10.3-0.3-20.5,0-30.8c0.2-6-0.8-11.4-4.1-16.6c-8.6-13.8-13.4-29.1-17-44.9
    C62.4,426.7,59.2,410,57,393c-0.3-2.3-0.3-4.7,0-7.1c0.3-2.5,1.9-4.2,4.4-4.4c2.2-0.2,3.9,1.1,4.4,3.4c1.8,7.3,3.5,14.6,5.2,21.9
    c0.5,2.1,1,4.1,2.1,6.1c-0.4-3.3-0.7-6.6-1.1-10c-1.2-11.3-2.5-22.5-3.7-33.8c-0.3-2.9,0-5.7,3.4-6.9c5-1.7,8.3,0.5,9.4,5.8
    c2.6,12.6,5.5,25.2,7.7,37.9c0.1,0.5,0.4,1,0.9,1.5c-0.4-3.3-0.3-6.7-0.6-10C88,383.7,86.3,369.9,86,356c-0.1-3.1,1-5.5,4.2-6.5
    c4.7-1.6,8.7,1,9.3,6.3c1.9,15.2,3.7,30.5,5.5,45.8c0.3,2.1,0.6,4.1,1.2,6.2c-0.9-10.7-0.2-21.3-1-32c-0.3-3.5-0.5-7,0.1-10.4
    c0.8-4,2.5-5.5,6-5.5c3.4,0,5.9,1.9,6.5,5.6c1.3,8,2.3,16,3.4,24c1.6,11.7,3.2,23.3,4.9,35.4c2.9-2,4.6-4.7,6.4-7.1
    c2.6-3.5,5.3-6.9,7.4-10.8c1.2-2.3,3.6-3.5,6.3-2.9c2.8,0.6,4.5,2.5,5.3,5.1c0.7,2.3,1,4.6,0.2,7c-3.7,12.1-7.9,24.1-12,36.1
    c-3.7,10.8-8.5,21.1-14.1,31c-1.9,3.3-2.5,6.4-1.7,10.1c2.3,11.8,4.4,23.6,6.5,35.4c0.2,1,0.1,2,0.2,3c-1.1,1.6-2.8,1.7-4.5,1.9
    c-11.3,1.2-22.6,2-33.8,3.2C90.6,536.8,88.8,537.1,87.3,535.6z"/>
<path style="fill:#050505; transform:scale(0.2)" :class="ValueId+'_color5'" d="M87.3,535.6c14.5-1,28.9-2.3,43.3-4.1c5,0,9.9-0.9,14.8-1.2c5.6-0.3,4.9-1.6,5.3,4.5
    c0.7,12.9,1.4,25.9,2,38.8c1.2,24.3,2.5,48.6,3.7,72.8c-28.5,0-56.9,0-85.4,0.1c2-19.5,4.1-38.9,6.1-58.4c1.7-16.3,3.4-32.7,4.8-49
    C82.4,534.9,85.6,536.7,87.3,535.6z M197.4,530.1c-1.8-0.2-2.5,0.1-2.6,2.2c-0.5,11.7-1.2,23.4-1.8,35c-1.4,26.4-2.8,52.8-4.2,79.2
    c28.5,0,56.9,0,85.4,0c-0.9-9-1.8-17.9-2.7-26.9c-2.7-26.1-5.4-52.1-7.9-78.2c-0.4-3.7-1.2-5.8-5.2-5.7c-3.2-0.2-6.5-0.4-9.7-0.7
    c-11.4-1.1-22.8-2.3-34.1-3.4C208.8,531.1,203.1,530.7,197.4,530.1z M457.8,530.1c-2.1-0.2-2.7,0.4-2.7,2.5
    c-0.2,6.4-0.7,12.8-1,19.2c-1.6,31.6-3.3,63.1-4.9,94.7c28.5,0,56.9,0,85.4,0c-3.6-35-7.3-70-10.7-105c-0.4-3.6-0.9-6-5-5.8
    c-5.8-0.5-11.6-0.9-17.4-1.4c-8.8-0.8-17.6-1.8-26.4-2.7C469.2,531.1,463.5,530.7,457.8,530.1z M342.3,539.1
    c-3.4,35.8-7.2,71.6-10.9,107.4c28.5,0,56.9,0,85.4,0c-0.5-8.8-1-17.5-1.4-26.3c-1.5-29.1-3.1-58.2-4.5-87.3
    c-0.1-2.3-0.6-3.1-3.1-2.8c-5.6,0.6-11.2,1-16.8,1.4c-14.6,1.7-29.2,3.1-43.9,4.1C345.7,537,342.7,535.1,342.3,539.1z"/>
<path style="fill:#0C4B74; transform:scale(0.2)" :class="ValueId+'_color1'" d="M313.7,131.2c-6.3-1.7-12.7-3-18.6-5.9c-2.3-1.1-3.3-2.5-3.4-5.1c-0.3-10.5-1-20.9-1.4-31.4
    c-0.1-2-0.7-2.8-2.8-3.3c-15.7-3.2-31.2-6.8-46.9-9.9c-3.5-0.7-3.3-2.8-3.6-5.2c-0.5-2.9,1.7-3,3.4-3.5
    c36.9-10.2,73.8-20.3,110.7-30.5c2-0.5,3.8-0.7,5.9-0.3c32.1,6.9,64.3,13.7,96.4,20.6c1.2,0.3,3,0.1,2.8,2.1
    c-0.2,2.1,1.8,4.8-1.6,6.1c-1.7,2.4-4.7,2.1-6.9,3.5c-8.6,3.3-17.3,6.4-26.1,9.4c-2.8,1-3.9,2.5-3.8,5.4c0.3,8.2,0.5,16.4,1.3,24.6
    c0.9,9.7,0.3,11.1-8.5,15.3c-6.5,3.1-13.4,5.4-20.4,6.5c1.3-0.3,2.7,0.1,4.1,0.3c18.4,3.6,36.6,7.7,55,11.1c1.4,0.3,2.8,0.9,4.2,1.2
    c5,3.2,9.6,6.9,15.1,9.4c0.4,0.5,0.5,1-0.1,1.4c-1,0.5-1.9,0.4-3,0.2c-30.3-6.1-60.6-12.2-90.9-18.1c-2.9-0.6-5.9-1.4-8.9-1.5
    c-1.6,0-3.2,0.1-4.8,0c-2-1-4.1-2-3-5c5-1.7,10.2-1.4,15.3-2c10.2-1.4,20.2-3.4,29.9-7c1.5-0.5,2.9-1.1,4.3-2.1
    c-5.5,0.8-10.9,0.6-16.3,0.3c-12.9-0.6-25.4-3.2-38-6.2c-17.8-4.2-34.7-1.7-50.5,7.6c-0.8,0.4-1.9,0.8-1.9,1.7
    c0,1.3,1.4,1.3,2.2,1.7c4.9,2.3,10,3.3,15.3,3.9c1.2,0.1,2.5,0,3.5,0.9C320.9,129.8,316.7,131.7,313.7,131.2z M197.8,202.3
    c3.2,1.8,3.9-1.6,5.6-2.8c1.8-1.2,0.4-2.3-0.3-3.4c-16.5-28.7-33-57.4-49.5-86c-0.9-1.5-2.1-2.5-3.6-3.5C117.5,85.8,85,65,52.4,44.1
    c-1.4-0.9-2.7-2.1-4.2,0c-1.3,1.8-3.7,2.5-1.8,5.7c8.2,13.7,16,27.7,24,41.5c1.2,2.1,1.3,3.3-0.6,5.1c-7.6,7.3-15,14.9-22.6,22.3
    c-1.4,1.4-1.8,2.6-1.3,4.4c1.6,5.8,4,11.2,7.2,16.3c15.5,25,35.8,45.3,60.2,61.7c5.3,3.6,11.1,6.3,17.3,8.4c2.7,0.9,4.5,0.5,6.5-1.6
    c7.6-7.8,15.4-15.5,23.2-23.1c0.7-0.7,1.2-2.1,2.7-1.2c9.5,5.4,19.4,9.9,28.7,15.7C193.9,200.3,194.9,203.2,197.8,202.3z M353,128.3
    c-2.8-1.9-2-3.5-0.4-5.5c0.4-1.3,1.2-2.6-0.6-3.5c-2.4,1-4.5,2.6-6.9,3.6c-11.1,4.9-22.1,10.1-33.2,15.2
    c-17,7.8-33.8,15.9-50.9,23.4c-2.9,1.3-5.1,3.1-7.1,5.6c-4.6,5.8-9,11.9-13.6,17.7c-6.4,8.1-12.7,16.4-19,24.6
    c-8.6,11.3-17.2,22.6-26,33.7c-3.2,4.1-6.1,8.4-9.3,12.4c-0.7,0.9-2.6,2.5,0.2,3.5c2-0.8,3.9-1.6,5.9-2.5
    c12.6-5.8,25.2-11.5,37.7-17.4c2.2-1,3.4-0.9,5,1.1c6.5,8.2,13.3,16.1,19.9,24.3c1.4,1.8,2.8,2.2,4.9,1.8c6.4-1.2,12.4-3.4,18.1-6.3
    c24.4-12.6,45.2-29.8,63-50.7c5-5.9,9.1-12.3,12.2-19.4c1.1-2.6,1-4.4-0.9-6.6c-7-8.2-13.8-16.7-20.8-24.9c-1.4-1.7-1.5-2.8-0.2-4.6
    c2.6-3.6,5.3-7.1,7.2-11c3.5-7.5,8.7-11.2,17.1-9.7c0.1,0,0.2,0,0.3,0C356.1,130.7,354.3,129.2,353,128.3z M526,217
    c9.5,1.1,18.9,2.3,28.3,3.5c2.4,0.5,4.6,2.6,7.3,0.9c0.6-0.4,1.5,0.5,2-0.4c0.3-1.3-0.8-1.8-1.5-2.4c-4.9-3.7-9.7-7.7-14.5-11.6
    c-14.5-11.6-28.8-23.3-43.4-34.8c-6.7-5.3-12.9-11.2-20-16.1c-4.6-3.2-9.8-4-15.2-3.5c-4.3-0.7-8.6-1.5-12.8-2.5
    c-10.9-2.5-21.9-4.6-32.9-6.7c-16.2-3.1-32.2-6.9-48.4-9.5c-3-0.5-6.1-2.3-9.3-1.1c0.1,1.7,1.3,2.6,2.4,3.5
    c11.2,8.9,22.1,18.2,33.4,26.9c1,0.8,1.8,2.1,3.5,1.6c2.7-1.7,3.3-4.8,4.6-7.3c1.2-2.5,3-3.1,5.5-2.7c17.3,3,34.1,7.7,50.4,14.4
    c20.8,8.6,40,19.9,57.4,34.1c2.2,1.8,3.2,3.9,1.6,6.8c-1.2,2-2,4.2-3,6.4C522.7,215.9,524.3,216.8,526,217z"/>
<path style="fill:#0C4B74; transform:scale(0.2)" :class="ValueId+'_color1'" d="M521,216.5c-4.9,11.1-9.9,22.2-14.7,33.3c-0.9,2.2-2.6,2.2-4.4,2.3c-11.2,0.7-22-1.5-32.6-4.8
    c-23.7-7.4-46-17.6-65.7-33c-4.4-3.4-8.2-7.3-11.7-11.7c-1.5-1.9-1.8-3.5-0.7-5.8c2-3.8,3.5-7.8,5.3-11.7c0.4-0.6,1.1-0.9,1.8-0.8
    c4.6,0.8,9.2-0.1,13.4-0.5c-4.5-1.9-9.5-3.8-10.7-9.9c0.3-3.4,2.9-6.1,3.3-9.5c1.3-2.1,2.5-4.3,3.6-6.5c2-4,3.5-4.6,7.9-4
    c17.6,2.7,34.4,7.8,50.8,14.7c19.6,8.3,37.7,19,54.6,32.1C527.8,206,525.9,211.8,521,216.5z M345.4,115.6c-7.1,3-14,6.6-21.1,9.9
    c-0.9,0.4-2.3,0.6-2.2,2.1c-2.8,1.2-5.6,2.3-8.4,3.5c-0.7,0.4-1.3,0.8-2,1.1c-18.5,8.5-36.9,17.1-55.4,25.6
    c-1.5,0.7-2.7,1.5-3.7,2.8c-23.8,30.8-47.6,61.6-71.6,92.3c-2.2,2.8-0.1,3.8,1,5.5c1.3,2,2.7,2,4.3,0.5c-1.6-1.2,0-2,0.5-2.8
    c2.9-4,5.7-8.1,8.8-11.9c11.9-14.4,22.9-29.7,34.4-44.4c8.6-10.9,17-22.1,25.4-33.1c1.4-1.8,3.2-3.2,5.2-4.1
    c11.6-5.2,23.1-10.5,34.6-15.7c17.3-7.9,34.5-15.8,51.7-23.9c1.7-0.8,4.4-1,4.8-3.6C351.1,115.3,349,114,345.4,115.6z M565.7,216.9
    c0.8-1.3,0.2-2-0.8-2.8c-13.3-10.7-26.6-21.4-39.9-32.2c-1.9-0.2-2.5-2.2-4-2.9c-0.3-0.4-0.5-1-1-1.3c-10.1-8-19.9-16.5-30.3-24.2
    c-2.1-1.5-3.5-3.8-6.4-4.3c-6.3-1.2-12.6-2.5-18.8-3.7c-0.7,3.3,1.6,4.9,3.8,6.5c0.2,0.2,0.4,0.4,0.6,0.6c6.5,1.2,13.2,1.8,18.3,6.8
    c1.4,1.3,2.8,2.6,4.3,3.8c9.6,7.6,19.1,15.2,28.6,22.9c14.5,11.7,28.9,23.4,43.5,34.9C564.7,219.9,564.9,218.2,565.7,216.9z"/>
<path style="fill:#E29411; transform:scale(0.2)" :class="ValueId+'_color3'" d="M545.5,261.1c-2,5.1,1.8,9.8,0.2,14.6c-0.2,0.7-0.6,1.4-0.9,2.2c0,0,0,0,0,0c-1,2.8-2.8,5.1-4.7,7.4
    c-6.6,7.7-7.2,9.9-6.1,19.6c-9.3-9.1-12.8-23.8-6.9-34.4c0,0.2,0,0.4,0,0.6c0-0.2,0-0.4,0-0.6c1.5-3.7,4.1-6.1,8-7.2
    c0.4-0.1,1.2-0.2,1.2-0.3c0.3-4,4.7-4.8,6-8c4.3-9.9,8.7-19.8,13.3-29.6c1.1-2.4,1-3.9-1.4-4.9c2.4,0.3,4.8,0.6,7.3,0.9
    c-5.1,11.4-10.1,22.8-15.2,34.1C545.5,257.4,546,259.8,545.5,261.1z M191.4,203.5c-7.9,7.8-15.8,15.7-23.7,23.5
    c-0.7,0.7-1.3,1.4-2.4,1.8c-4.2,1.3-7.9,4-12.6,4c-1.5,0-2.8,1.3-3.9,2.5c-9.9,7.4-12.2,23.4-6.3,35.2c0.8-8.3,5.6-13.1,12.4-16.3
    c2.5-1.2,4.9-2.7,6.8-4.9c0,0,0,0,0,0c0,0,0,0,0,0c2.3-1.8,3.9-4.2,3.9-7.1c0-2.6-0.2-5,2.4-6.6c0.5-0.3,0.9-1.5,0.8-2.1
    c-0.5-2.2,1-3.3,2.2-4.5c8.9-8.9,17.8-17.8,26.7-26.8c-2-1-3.7-2.5-6-2.9C193.4,200.9,192.9,202.1,191.4,203.5z M463.8,134.5
    c0.9-3.8,2.1-7.5,1.6-11.5c0,0,0,0,0,0c0,0,0,0,0,0c0.2-2.7-0.6-5.2-2.4-7.1c-1.9-2-4.2-3.5-3.6-6.8c0.1-0.5-0.5-1.3-1-1.6
    c-1.6-1.1-1.6-2.7-1.7-4.4c-0.6-12.7-1.3-25.3-2-38c-2.2,0.8-4.4,1.7-6.6,2.5c1.8,1.5,2,3.5,2.2,5.7c0.6,7.5,0.5,15,1.1,22.5
    c0.7,7.4-0.2,14.5-4.4,20.9c-1.7,2.6-3,5.6-1.3,8.9c0.2,0.2,0.5,0.1,0.8,0.2c0,0,0,0.1,0,0.1c-0.7,0.7-0.9,1.6-0.8,2.5
    c1.1,5.9,2.6,11.5,8.3,14.9c4.2,3.9,8.7,7.3,14.3,8.9c-1.4-2.1-3.2-4-3.8-6.5C462.6,141.9,462.9,138.2,463.8,134.5z M401.6,173.9
    c-0.1-4.1-2.5-7.2-4.4-10.5c-0.3-0.5-0.8-0.9-1.4-1.1c0-0.1-0.1-0.2-0.1-0.4c-1.7-3.4-4.8-4.6-8.2-5.1c-1.6-0.3-3-0.6-4.1-1.9
    c-0.7-0.9-1.7-1.5-2.8-1.7c-1.9-0.4-3.2-1.6-4.3-3.1c-1.4-1.9-3-3.7-4.5-5.4c-3.5-3.9-6.1-8.6-10.6-11.6c-1.3-1.1-2.5-2.4-3.3-3.9
    c-1.1-3.1-2.8-5.6-6-6.7c-1.1,1.6-2.3,3.3-3.4,4.9c1.9-0.7,3,0,3.9,1.4c1,1.5,2.1,2.9,3.2,4.3c6.3,7.5,12.5,15,18.8,22.5
    c0.3,0.4,0.7,0.9,0.8,1.5c0.3,4.3,3.7,7.9,2.8,12.6c-0.3,1.8,1.2,4,2.9,5.5c3.9,5.5,9.4,8.4,15.7,10.2c6,0.9,11.9,0.7,18-1
    C404,178.7,403.6,178.4,401.6,173.9z"/>
<path style="fill:#0C4B74; transform:scale(0.2)" :class="ValueId+'_color1'" d="M525,182c-0.8,1.8-1.3,0.1-1.7-0.3c-0.9-0.8-1.6-1.7-2.3-2.6C522.7,179.4,523.7,180.9,525,182z"/>
<path style="fill:#11294B; transform:scale(0.2)" :class="ValueId+'_color2'" d="M357.8,129.1c-2-2.2-4-4.5-6-6.7c0.2-0.9,1.3-1.9,0-2.9c-3.3-4.3-3.3-4.3-7.9-2.1
    c-7.3,3.4-14.6,6.8-21.9,10.2c-8.5,0.4-16.3-2.3-24.4-6.1c5.5-4.2,11.2-7.2,17.3-9.3c9.4-3.2,19.1-4.1,28.9-3.4
    c7.1,0.5,13.8,2.8,20.7,4.3c13,2.8,26.1,3.9,39.4,3.7c2.2,0,4.4-1.3,7.1-0.3c-4.2,3.5-9.1,4.9-13.9,6.4c-8.7,2.6-17.6,4.2-26.7,5.2
    C366.3,128.5,362,128.8,357.8,129.1z M127,200.8c-9.9-9.5-17.7-20.5-24.6-32.3c-6-10.2-11-20.8-20.1-28.9c-8.5-7.5-18-12.8-29-15.6
    c-2.7-0.7-2.3,0.5-1.8,2.1c1.5,4.9,3.6,9.4,6.4,13.7c9.6,15.2,21.6,28.4,35,40.4c9,8.1,18.6,15.6,29.2,21.5c2.2,1.2,4.6,2.2,7.4,2.2
    C129.1,202.4,127.9,201.7,127,200.8z M346.5,190.7c-9,8.1-19,14.6-29.6,20.2c-6.2,3.3-12.6,5.8-19,8.6c-9.6,4.2-17.9,10.4-24.7,18.4
    c-5.4,6.4-9.8,13.4-12.5,21.4c-0.7,1.9-0.4,2.7,1.9,2.1c4.3-1.2,8.7-2.5,12.7-4.4c8.7-4.2,16.8-9.4,24.6-15.2
    c15.7-11.5,29.9-24.4,41.6-40c2.5-3.4,5.1-7,6.2-11.6C347,190.4,346.7,190.5,346.5,190.7z M497.7,246.3
    c-11.8-4.1-22.1-10.8-32.1-18.1c-6-4.4-11.3-9.6-17.2-14.1c-14.6-11.2-31.3-16.1-49.9-14.1c-1.9,0.2-2.7,0.8-1.3,2.5
    c1.4,1.7,2.8,3.6,4.4,5.1c9.7,9,20.9,16,32.7,21.7c12.8,6.2,25.9,12,39.8,15.5c8.2,2.1,16.5,3.7,25.2,2.5
    C498.8,247,498.3,246.6,497.7,246.3z"/>
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
                                    <button :style="{background:'rgba('+getterThrowingHatsBg1+')'}" @click="ShowElement(getterThrowingHatsBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg2+')'}" @click="ShowElement1(getterThrowingHatsBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg3+')'}" @click="ShowElement2(getterThrowingHatsBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg4+')'}" @click="ShowElement3(getterThrowingHatsBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg5 +')'}" @click="ShowElement4(getterThrowingHatsBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!--<button :style="{backgroundColor:'rgba('+getterThrowingHatsBg6+')'}" @click="ShowElement5(getterThrowingHatsBg6)" :class="this.ValueId+'_color6btn'"></button>

                                     <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg7+')'}" @click="ShowElement6(getterThrowingHatsBg7)" :class="this.ValueId+'_color7btn'"></button> 
                                    
                                     <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg8+')'}" @click="ShowElement7(getterThrowingHatsBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg9+')'}" @click="ShowElement8(getterThrowingHatsBg9)" :class="this.ValueId+'_color9btn'"></button> 

                                     <button :style="{backgroundColor:'rgba('+getterThrowingHatsBg10+')'}" @click="ShowElement9(getterThrowingHatsBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var ThrowingHats= [
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
            var randomNumber = ThrowingHats[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  ThrowingHats[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'ThrowingHats'){
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
                getterThrowingHatsBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ThrowingHats') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ThrowingHats') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'ThrowingHats') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterThrowingHatsBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterThrowingHatsBg10: {
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
                            name:'ThrowingHats',
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