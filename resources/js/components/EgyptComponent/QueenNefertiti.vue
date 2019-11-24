<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#FDCAB0; transform:scale(0.2)" :class="ValueId+'_color4'" d="M108.1,449.4c-7.7-0.4-14.9,2-22.2,3.8c-3.8,1-7.5,1.1-11.2,0.7c-13.2-1.4-18.7-7.3-16.4-19.9
	c1.5-8.6-1.3-14.6-7.2-19.1c-9-6.9-7.9-17-7.4-25.4c0.4-7.7-2.1-11.2-7.5-14.4c-1.9-1.2-4.1-2-6-3.2c-3.4-2-4.7-4.8-1.9-8
	c20.7-23.6,16.9-51.8,14.9-79.6c6.8-3.9,14.3-1.1,21.4-2c34.2,2,67.2,9.7,98.7,23.2c8.1,3.7,16.6,6.6,23.1,13.1
	c3.7,8.5,3,16.5-2.4,24.3c-4.9,7.1-9.4,14.3-16.2,19.8c-5.9,4.7-9.3,4.6-15.1-0.6c4.2,5.4,5.8,6.1,11.5,3.6
	c13.5-6,23.6-15.2,27.8-29.9c1.3-4.5,1.3-4.4,4.7-5.3c3.4,10.7,3.8,22,6.6,32.8c-0.1,3.6-2.5,5.9-4.8,8.2
	c-21.5,21.6-43.1,43.1-64.6,64.7C126.6,443.5,118.1,447.9,108.1,449.4z"/>
<path style="fill:#EBB99F; transform:scale(0.2)" :class="ValueId+'_color5'" d="M204.9,433c-0.5-2.5-1-5.1-1.5-7.6c-3.8-8.1-3.4-16.1,0-24.2c0.5-2.5,1-5.1,1.5-7.6
	c-1.9-5.8,1.1-10.4,3.9-15c1.5-1.1,3.1-0.6,4,0.5c7.4,9.3,17.6,15.1,26.9,21.9c-1.1,25.7,2,50.9,9.2,75.6c0.9,3.1,2.1,6.1,3.1,9.2
	c-6.8,6.3-13.7,12.4-21.6,17.4c-0.8,0-1.4-0.3-2-0.8c-6.5-12.3-15.2-23.5-18.6-37.4c-0.6-2.6-2.4-5.1-0.3-7.8
	c-2.3-2.6-0.3-6.6-3-9.1C203,443.3,201.5,438.4,204.9,433z"/>
<path style="fill:#FED883; transform:scale(0.2)" :class="ValueId+'_color7'" d="M276.3,535.7c-2,1.3-2,3.4-2.1,5.4c-0.8,10.4-6.6,17.8-14.5,23.8c-8.3,6.3-18.1,9.9-27.8,13.5
	c-1.7,1.1-4.4,0.8-5.4,2.9c-0.7-0.1-1.4-0.2-2.2-0.3c-6.8,0.8-13.2,3.1-20,4.2c-33.7,5.4-67.8,5.2-101.8,5.8
	c-6.3,0.1-12.5-1.9-18.8-1.1c-1.3,0-2.5,0.3-3.7,0.7c-0.7,0.4-1.5,0.9-2.2,1.3c-3.7-0.5-7.5-0.8-11.1-1.7
	c-7.1-1.8-14.7-2.7-19.7-9.1c-15.9,7.7-30,18.1-43,29.9c-5.4,4.9-5.4,11.1,0.1,13.8c12,6.1,23.8,13,37.2,15.6l0,0l0,0
	c1.1,0.5,2.2,1.2,3.3,1.5c25.1,7.6,51.1,7.2,76.9,8.7c29.5,1.7,58.9-1.1,88.3-1.5c1.4,0,2.8-0.7,4.3-1.1c17.3,0,34-2.8,49.5-10.6
	c13.8-7,21.9-18.1,22.9-33.8C288.1,580.3,283.3,557.8,276.3,535.7z"/>
<path style="fill:#ED5532; transform:scale(0.2)" :class="ValueId+'_color1'" d="M55,230.2c-3.2-0.2-5.1-3.9-8.6-3c2.3-36.4,4.8-72.7,7-109.1C55,90.5,56.6,62.8,58,35.2
	c0.5-9.9,5.4-17.2,14.7-20.5c4-1.4,8.1-2.4,12.2-3.6C81,27.8,76.4,44.4,73.8,61.4c-0.3,1.8-0.7,3.4-0.1,5.2c0.1,0.4,0.3,0.8,0.4,1.1
	c0,0.4,0,0.8,0,1.2c-0.3,5.9-1.7,11.7-2.1,17.6c-0.3,2.9-1.5,5.6-1.3,8.5c-2.1,19-5.1,37.9-6.2,57c-1.9,8.6-1.4,17.5-2.3,26.2
	c-3.6,0.6-2.8,3.6-3.1,5.9C57.7,199.4,56.4,214.8,55,230.2z M239.6,401.1c-10.7-2.8-18-10.4-25.5-17.9c-1.6-1.6-3-3.3-4.6-5
	c-3.3-2-5.3-4.7-5.1-8.7c-0.9-1.6-1.7-3.2-2.6-4.8c-3.7-11.2-5-22.9-6.4-34.6c-1.3-1.7-1.2-3.4,0.2-5c16.4,8.7,30.4,20.4,43.9,33
	c2.2,2,3.7,4.8,6.9,5.6C243.3,376,241,388.4,239.6,401.1z"/>
<path style="fill:#C79545; transform:scale(0.2)" d="M44.3,267.9c0.4,14.7,0.4,14.7,15.6,15.2c2,0.1,4.1-0.4,5.6,1.4c-7.5,0-15,0-22.4,0
	C43,278.9,42,273.3,44.3,267.9z"/>
<path style="fill:#181818; transform:scale(0.2)" d="M162.5,0.3c-5.6,2.5-11.4,1-17.2,1.1C151-0.5,156.8,0.2,162.5,0.3z"/>
<path style="fill:#181818; transform:scale(0.2)" d="M189,1.3c-5.3-0.1-10.7,1.5-15.8-1.1C178.5,0,183.8-0.5,189,1.3z"/>
<path  style="transform:scale(0.2)" :class="ValueId+'_color8'" d="M80.9,324.2c-8.1,9.5-19.2,9.6-28,0.6C62.5,325.6,71.7,326.5,80.9,324.2z"/>
<path style="fill:#FDB01F; transform:scale(0.2)" :class="ValueId+'_color3'" d="M55,230.2c14,7.3,29.2,11.8,43.6,18c23.4,10.1,44.4,23.4,58.5,45.5c2.7,4.2,5.1,8.7,6.3,13.6
	c-18.5-6.5-37-13.5-56.4-17.2c-13.7-2.7-27.5-4.5-41.5-5.6c-5.4-1.4-11-0.7-16.4-0.6c-4.3,0.1-6-1.3-5.5-5.6c0.4-3.5-0.6-7,0.7-10.4
	c0.7-13.6,1.3-27.1,2-40.7C50.6,224.2,52.6,227.7,55,230.2z M236.6,192.6c20.6,8.9,39.3,20.8,56.9,34.6c-2.9,8.6-5.9,17.2-8.8,25.7
	c-15.3-14.7-33.4-25-52-34.8c-1.8-0.9-3.5-1.9-5.2-2.9c-1.3-4.5-4.5-7-8.7-8.6c-4.8-1.8-5.6-5.2-3.6-9.7c1.9-4.4,4.5-7.3,9.8-5.3
	C228.8,193.2,232.6,194.4,236.6,192.6z M315.6,162.1c-18.8-15-39-27.8-60.8-37.9c1.5-5.2,2.8-10.5,3.8-15.9c0.5-2.6,0.6-5.5,3.8-6.7
	c12,2.6,22.1,9.4,32.4,15.5c10.2,5.9,19.7,13,29.6,19.6C322.5,145.4,319.6,153.9,315.6,162.1z M185.3,199.7
	c-22.9-8.5-46.8-12.8-70.8-16.5c-7.7-1.2-15.4-1.8-23.1-2.7c-9.7-0.8-19.4-1.5-29.2-2.3c-0.8-1.2-3-1.7-2.4-3.4
	c2.4-7.1-0.1-14.8,2.8-21.8c2.2-2.1,5-2.5,7.8-2c7.2,1.4,14.6,0.8,21.8,1.5c23.7,3.1,47.3,6.4,70.6,12c9.6,2.3,18.9,5.3,28.4,7.8
	c3.1,0.8,5,3.2,7.7,4.6c12.5,5.4,25.9,8.9,37.8,15.7c-1.8,5.4-5,3.7-8.9,2.3c-2.8-1-6.1-5.4-9.5,0.2c-3.3,5.5-3.8,8.8,3.3,10.9
	c4.1,1.2,9,3,6,9.3C213.5,210,200,203,185.3,199.7z M120.1,68c40.6,3.5,80.7,10.3,119.5,23.1c7.3,4.1,16.2,4.8,22.8,10.5
	c-1.5,6.2-3,12.3-4.3,18.5c-0.4,2.1-0.7,3.9-3.3,4.1c-8.7-2.6-16.6-7.4-25.6-9.1c-16.8-1.6-32.4-8.3-48.9-11.2
	c-21.3-3.7-42.7-6.4-64.3-8c-15.1-1.1-30.1-1.5-45.1-1.2c-1,0-1.7-0.5-2.1-1.4c0.5-2.3,1-4.6,1.5-6.9c0.9-0.9,2-1.4,3.2-1.8
	c6.1-2.2,6.8-4.6,1.8-8.5c-2.9-2.3-3.7-4.5-2.1-7.7l0.1-0.6c13-0.6,26.1-0.7,39.1,0.1C115.1,67.9,117.6,67.9,120.1,68z"/>
<path style="fill:#181818; transform:scale(0.2)" d="M112.5,67.8c-13,0-26.1-0.1-39.1-0.1c0.1-0.4,0.2-0.8,0.3-1.2c10.6,0,21.1,0,31.7,0
	C107.8,66.6,110.4,65.9,112.5,67.8z"/>
<path style="fill:#8C2E1E; transform:scale(0.2)" :class="ValueId+'_color6'" d="M276.3,535.7c-2.7-19.3-9.5-36.6-24.4-50c-8.8,3.4-14.6,10.6-21.4,16.6l0,0c-0.5,0.1-1,0.1-1.4,0.1
	c-3.9-0.1-6.5,2.6-9.4,4.4c-17.6,11.3-36.6,17.9-57.7,17.8c-3,0-6.1-0.5-8.6,1.8c-2.5-0.3-5-0.7-7.5-1l0,0
	c-8.1-1.5-16.1-3.9-24.4-3.6c-3,1.3-6.1,2.3-8.9,4C88.1,541,66.8,560.1,47,580.9c-0.4,1.7,0.3,3.1,1.5,3.9
	c9.3,6.2,19.3,9.6,30.7,7.1c1-0.1,2-0.3,3.1-0.4c48.3,2.6,96.3,2.3,143.7-8.9c2-1,4.1-2,6.1-3l0,0c8.1-2,15.5-5.6,22.8-9.6
	C268.7,562.7,276.9,552,276.3,535.7z"/>
<path style="fill:#0E0E0E; transform:scale(0.2)" :class="ValueId+'_color8'" d="M185.3,319.2c-7.3-4-14.6-7.9-21.9-11.9c-1.7-1.5-3.1-3.2-4.1-5.3c-11.4-23.8-31.6-37.9-54.4-48.9
	c-14.5-7-30.1-11.5-44.7-18.2c-3-1.4-6.2-2.4-6.8-6.4c0.5-13.2,2.2-26.3,2.9-39.5c0.2-4.5,0.2-9.8,5.9-11.9
	c9.4-1.4,18.6-0.1,27.8,1.7c6.1,3,5.9,9,6.3,14.4c1.3,16.8,8.9,30.2,22.1,40.3c5.2,4,11.7,3.9,18.1,3.5
	c15.8-1.1,26.1-10.8,35.7-21.8c4.5-5.1,8.5-10.6,12.9-15.8c3.3-1.6,6.4-0.2,9.4,0.9c11.2,4.1,22.3,8.3,33.2,13.4
	c17.3,8.9,34.4,18.3,49.8,30.3c3.2,2.5,6.1,5.1,7.4,9.1c-12.7,36.9-25.4,73.8-38.1,110.8c-3.7,1.1-5.5-1.9-7.5-3.8
	c-13.4-12.6-27.8-23.8-43.6-33.2C192,324.3,188,322.7,185.3,319.2z M162.5,0.3c3.5,0,7.1,0,10.6,0c5.2,1.4,10.6-0.4,15.8,1.1
	c18.5,1.6,36.5,5.3,54.4,10.1c34.3,9.2,63.6,26.8,90.4,49.4c9.9,8.3,11.7,15,7.4,27.4c-5.6,16.1-11.3,32.2-16.9,48.4
	c-3.6,1.5-5.4-1.6-7.8-3.2c-17.3-11.9-34.8-23.5-54.9-30.6c-5.2-3.2-10.9-4.9-16.5-7.2c-2.5-1-5.3-1.8-6.6-4.5
	c-2.1-6.5-1.1-13,0.9-19.3c5.6-17.6-3.2-27.2-17.1-36.3c-11.7-7.6-24.9-7.6-37.4-10.5c-18.3-4.3-46.7,11.8-55.4,28.5
	c-2.9,5.5-4.7,11.8-10.1,15.7c-2.5,1-5.1,0.8-7.7,0.3c-8.9-1.7-17.9-0.4-26.9-0.8c-3.7-0.2-7.5,0.5-11.1-1.1c-1.7-1-2.3-2.8-2-4.5
	c2.9-17.7,4.9-35.7,13-52c18.9-4.5,37.9-8.6,57.4-9.8c1-0.1,2,0,3,0.1C151-0.2,156.8,1.7,162.5,0.3z M315.6,162.1
	c-7.4,21.7-14.7,43.4-22.1,65.1c-3,0.1-5.1-1.9-7.3-3.5c-15.9-11.7-32.8-21.6-50.7-29.9c-9.3-4.6-18.9-8.2-28.6-11.7
	c-3.1-1.1-6.3-1.8-8.7-4.3c-2.3-2.9-1.1-5.7,0.3-8.4c1.7-3.3,2.9-7,5-10.1c8.3-12.1,13.9-25.3,18.3-39.1c1.1-3.4,3.1-6.3,7.3-6.7
	c9.2,1.3,17.4,5.5,25.9,9.1c20.2,8.7,39,19.8,55.9,33.9C312.7,158.1,315,159.3,315.6,162.1z M195.8,325.1c-0.1,1.7-0.1,3.4-0.2,5
	c-3.3,17.5-13.5,29.5-29.3,37.2c-4.2,2-8.5,3-12.7-0.3c-3.4-2.7-3.7-6-2.6-10c7.3,10.2,9.7,10.2,19.2,1.1c6.3-6,10.5-13.4,15-20.6
	c3.5-5.7,1.4-12.2,0.2-18.3C189.4,320.2,192.6,322.6,195.8,325.1z M185.3,199.7c-5.9,11.9-15.1,20.9-25,29.4
	c-11,9.4-23.4,11.1-37.1,8.7c-8.6-1.5-14.1-8.5-17.7-14c-5.3-8-11.4-17.2-11-28.1c0.2-5.4-0.9-10.4-3.1-15.3c2.1-2.7,5-1.8,7.7-1.5
	c26.7,2.9,53,8.1,78.8,15.6C180.7,195.5,184.5,195.5,185.3,199.7z M120.1,68c4.6-8.3,7.8-17.4,13.7-25c10.2-13,25.3-15,39.9-19.1
	c9.7-2.7,18,2.5,27,2c11.3-0.6,19.6,6.7,28.7,11.2c6,3,10.8,10,13.8,16.4c1.9,4.1,0.3,10.4-1,15.3c-2,7.4-3.1,14.7-2.4,22.2
	c-3.2,2.2-6.3,0.5-9.4-0.4c-32.5-10.1-65.7-16.6-99.7-19.1C126.8,71.3,122.9,71.1,120.1,68z M69.6,93.5c18.3-2.6,36.7-0.7,55,0.6
	c34.8,2.4,68.9,8.8,102.1,19.5c0.9,0.3,1.7,0.9,2.6,1.4c-8.2,3.2-8.1,11.6-9.9,18c-1.7,5.9-3.5,11.6-7.4,16.1c-6,7-8.1,16-13,23.5
	c-0.9,1.4-0.9,2.8,0,4.2c-33.6-10.6-67.9-18.1-103.1-21.4c-1-0.1-1.9-0.6-2.9-0.9c-3.2-4.1-2.6-8.7-1.4-13
	c3.6-13.4,5.1-27.2,9.7-40.3c1.4-3.9-0.1-5.1-3.7-5.1c-6.4-0.1-12.7,0.1-19-0.1C75.4,95.9,71.9,96.6,69.6,93.5z"/>
<path style="fill:#EBB99F; transform:scale(0.2)" :class="ValueId+'_color4'" d="M227,496.4c-7-12.5-14.7-24.8-17.5-39.1c0.2-0.2,0.4-0.3,0.6-0.5c0-3.3,0.7-6.9-3-9
	c-0.2,0.2-0.4,0.5-0.7,0.7c0-0.1,0.1-0.2,0.1-0.4c0.2-5-2.3-9.8-1.6-14.9c0.2-0.1,0.4-0.3,0.6-0.4c0.9-2.7,0-5.1-1.5-7.3
	c-0.2-0.1-0.5-0.3-0.7-0.4c0-7.6,0-15.3,0-22.9c0.4-0.4,0.8-0.7,1.2-1.1c1.3-2.3,2.3-4.7,0.9-7.4c-0.2-0.1-0.4-0.2-0.5-0.3
	c1.6-5.1,3.1-10.1,4.7-15.2c-1.6-2.7-3.2-5.5-4.8-8.2c0.2-0.2,0.5-0.5,0.7-0.7c-0.1-2.3-0.3-4.6-3.5-4.6c-0.4,0.6-0.7,1.4-1.2,1.9
	c-23.3,23.3-46.4,46.8-69.9,69.8c-4.5,4.4-9.2,9.2-16.5,9.4c-2.2,0.1-5.1,0.7-6.2,3.6c10.7,4.5,16.7,12.5,19.9,23.8
	c3.6,13,3,25.8,1.3,38.8c-0.6,5.2-2.3,8.9-7.9,9.9c7.1,4.2,15.5,3.4,23.1,5.5c2.8-0.1,5.5,1.4,8.2,0.2c0.2-0.3,0.4-0.7,0.6-1
	c28.5,2.3,53.5-6.5,75.7-24.1C229.4,500.1,228.1,498.4,227,496.4z"/>
<path style="fill:#111010; transform:scale(0.2)" d="M69.6,93.5c10.5,0.1,21,0.4,31.5,0.3c4.9,0,5.1,1.3,3.5,5.7c-6.3,17.8-10.9,36-11.7,55
	c-10.1-0.5-20.2-1-30.3-1.6c0.1-17.6,3.6-34.8,5.3-52.3c0.2-2.5,0.6-5,0.9-7.4C69,93.3,69.3,93.4,69.6,93.5z"/>
<path style="fill:#E9972D; transform:scale(0.2)" :class="ValueId+'_color2'" d="M73.3,68.4c0.3,2-0.9,5.3,2.2,5.4c6.9,0.3,5.5,5.1,5.2,8.9c-0.5,5.6-5.2,2.8-8.1,3.5
	c-0.7,0.2-1.5,0.1-2.2,0.1C70.3,80.2,71.1,74.2,73.3,68.4z M260.8,212.3c2.6,0.2,14.7,9.7,14.1,10.6c-2,3-2.6,7.5-7,8.1
	c-2.9,0.4-14.3-8.8-13.4-10.4C256.2,217.5,257.4,213.6,260.8,212.3z M289.3,134.5c-3.3,0.1-14.9-7.9-14.1-9.4
	c1.5-3.2,1.6-7.8,6.5-8.3c2.5-0.2,14.1,7.8,13.6,9.3C294,129.7,292.1,132.8,289.3,134.5z M97.4,162c5.5,0.1,11.2-1.2,10.6,6.5
	c-0.3,3.3-1.3,8.4-4.8,6.5c-4.8-2.5-13.4,4-14.6-5.6C87.6,162.3,92.6,161.3,97.4,162z M194.3,184.9c0.3,7.2-2.9,9.5-9.3,7.5
	c-11-3.4-11.7-4.4-8.8-12.1c0.4-1.2,0.6-3,2-2.7c5.4,0.9,10.7,2.5,15.5,5.3C194.2,183.2,194.2,184.7,194.3,184.9z M132.3,174.8
	c0.3-3.5,1.2-7.9,6.3-6.5c4.6,1.2,12.4-2,13,6.3c0.2,2.7,0.1,7.7-4.9,8C140.4,183,132.3,178.8,132.3,174.8z M116,74.1
	c3.8,0.7,10.2-1.6,10,6.1c-0.1,3.9-1.2,9-6.9,7.3c-4.6-1.3-12.4,2.4-12.7-7.4C106.1,72.3,111.4,74.5,116,74.1z M199.9,86.4
	c3.3,3.4,12-1.8,12.8,6.8c0.3,3.3-0.3,9.1-5.4,7.6c-4.8-1.4-12.6,1.1-13.9-6.5C192.9,92,192.6,85.6,199.9,86.4z M248.1,115.1
	c-4-2.8-11.1-2.1-12.5-8.2c-0.6-2.6,0.4-9.3,5.3-7.9c4.9,1.4,12.3,1,13.9,7.3C255.5,108.7,254.2,114.7,248.1,115.1z M159.2,78.8
	c2.6,2.6,10-1.9,10.1,5.3c0.1,3.1,0.4,10.3-6.4,7.9c-4.3-1.5-12.8,2.8-12.6-7.3C150.5,78.7,154.1,78.4,159.2,78.8z"/>
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
                                    <button :style="{background:'rgba('+getterQueenNefertitiBg1+')'}" @click="ShowElement(getterQueenNefertitiBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterQueenNefertitiBg2+')'}" @click="ShowElement1(getterQueenNefertitiBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterQueenNefertitiBg3+')'}" @click="ShowElement2(getterQueenNefertitiBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterQueenNefertitiBg4+')'}" @click="ShowElement3(getterQueenNefertitiBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterQueenNefertitiBg5 +')'}" @click="ShowElement4(getterQueenNefertitiBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterQueenNefertitiBg6+')'}" @click="ShowElement5(getterQueenNefertitiBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterQueenNefertitiBg7+')'}" @click="ShowElement6(getterQueenNefertitiBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterQueenNefertitiBg8+')'}" @click="ShowElement7(getterQueenNefertitiBg8)" :class="this.ValueId+'_color8btn'"></button>
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
        var QueenNefertiti= [
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
            var randomNumber = QueenNefertiti[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  QueenNefertiti[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'QueenNefertiti'){
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
                getterQueenNefertitiBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'QueenNefertiti') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterQueenNefertitiBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'QueenNefertiti') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterQueenNefertitiBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'QueenNefertiti') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterQueenNefertitiBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterQueenNefertitiBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterQueenNefertitiBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterQueenNefertitiBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterQueenNefertitiBg8: {
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
                            name:'QueenNefertiti',
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