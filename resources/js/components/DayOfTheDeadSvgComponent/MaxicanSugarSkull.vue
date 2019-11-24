<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                  <path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M260.2,36c13.2,0,26.3,0,39.5,0c10.4,1.4,20.9,1,31.2,2.9c26.3,4.9,51.1,13.6,75,25.7
	c23.9,12.1,45.4,27.7,64,46.6c32.4,32.9,54.7,71.7,63.4,117.5c3.4,18,2.8,36.2,2.4,54.4c-0.8,31.1-10.6,59.8-24.5,87.2
	c-1.8,3.5-1.3,6.8-0.2,10.2c1.9,5.6,3.2,11.4,3.7,17.3c1.9,23.8-8.7,41-28.4,53.1c-4.7,2.9-6.3,5.7-6.1,11.4
	c0.8,17.4-6.8,31.1-21.8,40c-5.3,3.2-7.1,6.8-6.9,12.7c0.4,13.1,0.4,26.3,0.7,39.4c0.4,19.2-8.6,35.5-17.3,51.8
	c-11.5,21.6-24.9,41.9-42.1,59.4c-18.4,18.7-39.4,32.9-66.6,35.1c-13.6,1.1-26.6-1.6-39-7.2c-3.3-1.5-6.4-2.5-10-0.8
	c-35.4,16.2-66.7,7.4-95.2-16.2c-21.5-17.7-37-40.2-50.6-64.2c-7.6-13.4-15-26.8-18.8-41.8c-2-7.8-2.4-15.9-1.8-24.1
	c0.9-11.8,0.3-23.7,0.3-35.5c0-3.2-1.5-5.3-4.2-6.9c-17.5-10-25.9-25-24.3-45.2c0.3-3.4-1.9-5.1-4.4-6.7c-7.1-4.5-13.8-9.3-19-16
	c-12.5-15.9-13.8-33.7-8.4-52.3c1.8-6.3,2.1-11.5-1.1-17.5c-8.9-17-15.1-35-19.2-53.7c-1.7-7.5-1.4-15.2-3.1-22.6
	c0-14,0-28.1,0-42.1c1.2-15.9,3.8-31.6,9.2-46.7c10.6-29.9,26.4-56.5,47.4-80.4c17.9-20.3,38.6-37.2,61.9-50.3
	c34.8-19.6,72-33.2,112.7-33.8C259.1,36.7,259.6,36.4,260.2,36z"/>
<path style="fill:#03A9F4;transform:scale(0.2)" :class="ValueId+'_color3'" d="M512.8,259.6c0,0.6-0.2,1.2-0.4,2.7c-7.5-5.3-14.7-10.4-22-15.6c-12.2-5.8-24.4-11.8-37.8-14.7
	c-33.4-7.2-64.8-0.9-94.9,14.2c-27.8,14-51.2,33.7-72.4,56.1c-3.5,3.7-5.1,3.6-8.5,0c-23.6-24.8-49.6-46.5-81.4-60.2
	c-50.3-21.8-97.3-16.4-141,17c-1.3,1-2.7,2-4.9,3.7c-0.3-13.7,1.8-26.1,4.5-38.4c6-26.6,17.3-50.9,33.3-73c2.3-3.3,4.3-5.4,9-3.8
	c4.2,1.5,8.2-0.4,11-4c2.9-3.7,3.4-7.8,1-11.6c-1.7-2.7-1-4.1,1-6.1c12.2-11.8,25.4-22.2,39.8-31.2c1.7-1.1,3.2-1.8,5.5-1.1
	c34.8,11,68.9,23.5,96.5,48.7c10.8,9.9,18.5,21.5,18.7,37c0.1,6.9,5.1,11.6,11,11.9c5.5,0.3,11.4-4.2,11.5-10.4
	c0.4-23.2,15.1-37.1,32-49.2c22.8-16.4,48.5-27,75.2-35.1c0,0,0,0,0,0c6.4-3.5,12.1-3.5,18.5,1.2c11.9,8.6,23.6,17.4,34.2,27.6
	c2.2,2.1,3.8,3.7,1.6,7.1c-2.4,3.8-1.7,8,1.2,11.6c3.1,3.8,7.2,5,11.8,3.8c2.5-0.7,4.4-1.1,6.3,1.4
	C497.4,181.9,511.2,218.6,512.8,259.6z"/>
<path style="fill:#E4E5E6;transform:scale(0.2)" :class="ValueId+'_color7'" d="M269.7,552.2c0,13.9,0,13.4-14.1,13.3c-6.6,0-8.1-2.2-7.5-8.2c0.5-5,0-10.1,0.2-15.1
	c0.3-6.4,3.5-8.8,11.1-8.8c7.2,0.1,9.9,2.4,10.2,8.9C269.8,545.7,269.7,549,269.7,552.2z"/>
<path style="fill:#EAEEEF;transform:scale(0.2)" :class="ValueId+'_color7'" d="M292.7,552.2c0-2.2,0-4.4,0-6.6c0.1-10.3,2.7-12.8,12.9-12.1c5.3,0.3,8.1,3.2,8.4,8.2
	c0.3,6.8,0,13.6,0.2,20.3c0.1,2.8-1.2,3.3-3.6,3.2c-1.3-0.1-2.6,0.1-3.9,0.1C292.7,566.2,292.7,566.2,292.7,552.2z"/>
<path style="fill:#E9EDEE;transform:scale(0.2)" :class="ValueId+'_color7'" d="M225.9,551.8c0,12.3,0,12.3-12,10c-10.2-1.9-10.2-1.9-10.2-12.7c0-2-0.1-3.9,0.1-5.9
	c0.7-7.6,3.7-9.9,12.4-9.7c6.6,0.2,9.5,3.2,9.7,10.4C226,546.5,225.9,549.2,225.9,551.8z"/>
<path style="fill:#E3E4E5;transform:scale(0.2)" :class="ValueId+'_color7'" d="M336.5,551.1c0-2,0-3.9,0-5.9c0.1-8.9,2.7-11.7,11-11.7c8.1,0,10.9,2.9,11.1,11.7
	c0.4,15.7,0.4,15.7-13.4,17.2c-8.7,1-8.7,1-8.7-8.1C336.5,553.3,336.5,552.2,336.5,551.1z"/>
<path style="fill:#E9EDEE;transform:scale(0.2)" :class="ValueId+'_color7'" d="M203.8,593c0-9.8,0-9.8,10.1-8.4c12.2,1.7,12.2,1.7,12,13.5c-0.1,8.8-3,12-11,12.1
	c-7.9,0.1-11-3.2-11.1-11.9C203.8,596.5,203.8,594.8,203.8,593z"/>
<path style="fill:#E3E4E5;transform:scale(0.2)" :class="ValueId+'_color7'" d="M358.5,594.1c0,2.2,0.2,4.4,0,6.6c-0.7,7.1-4.4,9.9-12.2,9.6c-6.7-0.3-9.6-3.4-9.8-10.5
	c-0.5-13.2-0.5-13.2,12.4-15.2C358.7,583,358.7,583,358.5,594.1z"/>
<path style="fill:#FBD634;transform:scale(0.2)" :class="ValueId+'_color2'" d="M400.9,575.2c8.1-2.3,16.2-4.5,25.6-7.2c-2.8,6.2-4.9,11.3-7.4,16.3c-12.9,26.5-27.9,51.6-50.2,71.4
	c-11.2,10-23.6,18-39.1,19.8c-14.7,3.3-28.2-0.5-41-7.5c-4.5-2.5-8.7-3.9-13.5-1.1c-31.1,18.4-60.1,8.6-82.4-11.6
	c-26.2-23.8-42.5-54.1-57-87c10.5,2.6,20,5.1,29.6,7.3c16,3.5,16.6,3.5,16,20c-0.8,22.5,19.6,38,34.8,36.8
	c6.8-0.6,12.7-3.1,17.9-7.3c2.1-1.7,3.2-1.6,5.4,0c14,9.9,24.7,9.9,38.5,0.1c2.6-1.8,3.8-1.4,6.1,0.2c13.3,9.5,24.7,9.4,38-0.2
	c2.4-1.7,3.6-1.8,5.9,0c9.8,7.6,20.6,9.7,31.9,3.9c12.1-6.2,19.6-16,20.3-30c0.3-5.2,0.2-10.5,0-15.8c-0.1-3.3,1.3-4.7,4.4-5.2
	C390.3,577.3,395.6,576.2,400.9,575.2C400.9,575.2,400.9,575.2,400.9,575.2z M279.3,141.8c2.7,3.6,3.4,0.4,4.5-1
	c10.3-14,23.8-24.4,38.3-33.6c18.4-11.8,38.5-20.4,59.1-28.3c-57-27.6-143.8-27.2-199.8-0.1c7.7,3.2,15.4,6.1,22.9,9.5
	C232.8,101.1,259.9,116,279.3,141.8z M509.9,290.6c-5.9-6.2-11.9-12.2-19.3-16.6l0,0c-36.2-26.6-75-30.3-115.9-12.2
	c-33.4,14.8-59.2,39.4-83,66.4c-7.4,8.4-13.6,8.5-21,0c-18.7-21.4-39.2-40.7-63.3-56c-50.9-32.4-107.6-27.4-150.1,13.3
	c-4.6,4.4-6.9,8.4-5.4,15.3c3.5,16.7,8,32.9,15.8,49c1.9-2.4,3.2-4.5,4.8-6.1c3.2-3.1,7-4.3,11.4-2.6c4.7,1.7,6.9,5.2,7.4,9.9
	c0.3,3.2-1.4,5.9-3.1,8.5c-6.6,10.3-12.8,20.9-15.7,33c-4.7,19.9,5,38,23.4,43.4c11.1,3.2,21.9,7.3,33.4,9.1
	c7.1,1.1,10.6,6.4,9.7,12.5c-0.9,6.1-5.9,9.9-13.1,9c-6.5-0.8-12.8-2.4-19.3-3.7c-1.6,12.7,6,21.8,20.6,24.6
	c6.7,1.3,13.5,1.4,20.3,1.6c6.4,0.2,10.9,4.9,11.1,10.8c0.2,6.1-4.6,11-11.2,11.3c-2.8,0.1-5.8,0.2-8.5-0.3c-4.1-0.8-4.8,1-4.7,4.5
	c0.2,7.9,0.3,15.8,0,23.7c-0.2,4.2,1.5,5.6,5.2,6.6c10.1,2.8,20.1,5.8,30.3,8.1c11.7,2.6,11.6,2.7,12.1-9.1c0.6-14.1,8-23.8,20-30.2
	c11.3-6,22.1-3.8,31.9,3.6c2.5,1.9,3.9,1.9,6.5,0c12.9-9.4,24.4-9.5,37.4-0.1c2.9,2.1,4.4,1.8,7.2-0.2c12.4-9,24.6-9.1,36.9,0.1
	c3.2,2.4,4.9,1.7,7.6-0.3c13-9.3,27.1-8.5,39,2c8.3,7.4,12.6,16.5,12.4,27.8c-0.2,9.1,0.1,9.2,9.1,7.2c5.1-1.2,10.1-2.7,15.2-4.1
	c6.1-1.7,12.1-3.5,18.2-4.9c3.9-0.9,5.3-2.6,5.2-6.7c-0.4-7.6-0.3-15.3,0-23c0.1-4.1-0.6-5.9-5.4-5.2c-5.8,0.9-11.8,1.1-16.7-3.4
	c0,0,0,0,0,0c-5.2-10.9-0.8-18.2,11.3-18.5c1.9,0,3.9-0.2,5.8-0.3c6.9,0,13.5-1,19.8-3.7c9.2-3.9,13.7-12,12.5-22.2
	c-8.1,1.6-16,4.6-24.4,4.1l0,0c-5.5-2.5-8.8-6.5-7.8-12.7c1.1-6.3,5.9-8.6,11.6-9.6c4.5-0.8,9-1.2,13.3-3c5.3,0,9.3-3.5,14.1-4.8
	c22.9-6.2,32.7-22.9,26.9-45.7c-3.5-13.6-11.4-24.9-18.4-36.7c0,0,0,0,0,0c-0.4-5.6,1.6-9.9,6.4-12.9c8.3-3,12.9,2.1,17.3,8.6
	c8.8-18,13.7-36.2,16.7-55C511.6,293,511,291.8,509.9,290.6z"/>
<path style="fill:#E3E4E5;transform:scale(0.2)" :class="ValueId+'_color7'" d="M248.4,595.6c-0.1-8.4-0.1-8.4,8.1-7.6c0.9,0.1,1.8,0.1,2.6,0.3c3.4,0.9,8.8-1.8,10.1,1.6
	c1.6,4.4,1.4,10-0.2,14.8c-1.9,5.7-7.1,5.6-12,5.4c-4.8-0.2-7.8-2.6-8.6-7.4C248.1,600.4,248.4,598,248.4,595.6z"/>
<path style="fill:#E9EDED;transform:scale(0.2)" :class="ValueId+'_color7'" d="M303.7,588.3c10.4-0.9,10.4-0.9,10.4,9.8c0,9.8-4.3,13.5-13.8,12c-4.8-0.7-7.4-3.3-7.6-8.3
	c0-0.2,0-0.4,0-0.7C292,589.3,292,589.3,303.7,588.3z"/>
<path style="fill:#FBD634;transform:scale(0.2)" :class="ValueId+'_color2'" d="M457.8,378.2c0-4.4,0-8.7,0-13.1C459.6,369.4,459.6,373.8,457.8,378.2z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color1'" d="M104.6,371.5c0.3-33.8,23-60.1,59.1-68.2c22.8-5.1,44.6-2.9,63.7,11.7c17.9,13.6,24.3,34,18.2,55.6
	c-12.4,43.7-59.3,68.9-102.2,55C119.1,417.7,104.4,397.1,104.6,371.5z M457.8,365.1c-3.2-27.1-18.3-45.5-42.8-56.1
	c-26.9-11.7-53.7-12.4-78.6,5.1c-15.9,11.2-24.2,27.1-21.4,47.1c5,35.5,35.8,65.2,71.6,68c36.1,2.8,65.5-13.1,71.2-51
	C458.4,373.8,458.5,369.4,457.8,365.1z M323.7,448.2c-4.5-21.7-20-34.7-37.1-46.3c-3.7-2.5-7.9-1.7-11.8,0.6
	c-5.9,3.5-11.1,7.9-16,12.5c-13.2,12.5-22.1,27-21.1,46.2c1.2,22,20.9,33.8,40.6,24c1.8-0.9,3.1-1.4,5.3-0.4
	c22.2,10.4,41.1-1.6,41.5-26.2C324.6,455.2,324.4,451.7,323.7,448.2z M391.7,466.8c-0.4-6-3.6-9.9-9.5-10.8
	c-5.6-0.9-10.6,1.6-11.7,7.2c-1.4,7.6-5.6,7.6-11.3,6.2c-2.7-0.7-5.5-1.2-8.3-1.9c-6.6-1.5-12.3,1.4-14.1,7.3
	c-1.7,5.8,1.5,11.9,7.9,13.8c6.3,1.9,12.7,3.3,18.7,3C382.4,491.6,392.7,482.5,391.7,466.8z M218.1,488.4c6-1.9,9.1-7.8,7.6-13.5
	c-1.6-5.9-7.4-9-13.9-7.6c-4,0.9-8.1,2-12.2,2.5c-3.4,0.4-6.1,0-6.9-4.7c-1.3-6.9-6.7-10.3-12.8-9.2c-5.6,1-9.2,6-9,12.6
	c0.3,15,9.8,23,28.1,23C205,491.8,211.6,490.5,218.1,488.4z M275.6,225.5c-8.4-11.2-18-21.3-28.9-30c-14.1-11.3-29.4-20.8-45.3-29.4
	c-16.3-8.9-33.3-15.9-50.2-23.2c-6.7-2.9-12.7-0.3-15.2,5.8c-2.5,5.9,0.3,11.8,7.1,14.8c8.8,3.8,17.6,7.5,26.5,11
	c13.8,5.6,26.8,12.7,39.3,20.5c13.9,8.8,27.4,18.5,38.6,31c4.4,4.9,8.2,10.1,12.1,15.3c3.2,4.2,7.4,6.1,12.7,4.2
	c4.9-1.7,7.1-5.4,7.6-10C279.7,231.3,277.7,228.3,275.6,225.5z M302.4,241.8c8.5-13.2,19.9-23.5,31.9-33.3
	c11.7-9.5,24.8-17.1,37.9-24.1c14.9-8,30.4-15,46.4-20.8c7.5-2.7,10.3-8.8,7.9-14.9c-2.6-6.3-8.6-8.8-15.8-5.7
	c-10.5,4.7-21.2,8.9-31.6,13.9c-18.3,8.7-35.8,18.5-52.4,30.3c-7.1,5.1-13.7,10.7-20.2,16.4c-8.6,7.4-16.2,16-22.1,25.8
	c-4.7,7.7,0.9,17.1,9.7,16.8C297.3,245.8,300.5,244.7,302.4,241.8z M281.9,251.6c-7.4-0.3-12.4,4.1-12.6,11.1
	c-0.3,10.1,4.3,16.6,11.8,16.7c7.1,0.1,11.7-5.7,11.9-15.2C293.3,256.6,289.1,251.9,281.9,251.6z M292,86.2c0-2.4,0.2-4.8,0-7.2
	c-0.6-5.6-5.1-9.7-10.5-9.9c-5.6-0.2-10.6,4-11.1,9.9c-0.4,4.6-0.4,9.2,0.1,13.8c0.6,5.8,4.3,8.9,10.1,9.4
	c5.7,0.4,10.4-3.2,11.3-8.7c0.4-2.4,0.3-4.8,0.4-7.2C292.2,86.2,292.1,86.2,292,86.2z"/>
<path style="fill:#607C8A;transform:scale(0.2)" :class="ValueId+'_color4'" d="M173.2,407c-5.5,0.7-11,0.8-16.3-0.4c-30.7-6.4-41.2-39.5-20.2-63.4c13.5-15.3,30.7-21.9,51-20.2
	c11.8,4.5,15.8,14.5,17.3,25.6c1.8,13.5-2,26-9.5,37.2C189.8,394.6,183.9,403.4,173.2,407z"/>
<path style="fill:#37474F;transform:scale(0.2)" :class="ValueId+'_color5'" d="M173.2,407c14.7-10.8,25.2-24.3,29.4-42.5c3.8-16.7-1.2-31.4-14.9-41.5c11.3,1.5,22.4,3.1,31.2,11.7
	c7,6.7,7.8,15,6.9,23.6C222.9,383.9,199,405.8,173.2,407z"/>
<path style="fill:#607C8A;transform:scale(0.2)" :class="ValueId+'_color4'" d="M398.3,407.1c-33.4,2.7-59.9-22.4-61.8-52.6c-0.8-12.8,5.1-21.5,17.1-26.6
	c10.5-4.4,21.5-5.6,32.7-4.9c12.8,4.5,19.9,14.7,24.8,26.4c6.7,16.2,6.5,32.4-2.7,47.9C406,401.5,402.9,405,398.3,407.1z"/>
<path style="fill:#37474F;transform:scale(0.2)" :class="ValueId+'_color5'" d="M398.3,407.1c11.5-11.2,17.2-24.7,15.4-40.8c-2-18.8-11.4-33.2-27.3-43.3
	c22.7,3.1,41.3,13.2,47.4,36.3C440.5,384.4,431.8,404.7,398.3,407.1z"/>
<path style="fill:#DE1E3F;transform:scale(0.2)" :class="ValueId+'_color6'" d="M303.8,458.2c0.1,3.8-0.8,7.3-4.9,8.3c-3.7,1-5.8-1.2-7.7-4.5c-5.4-9.2-15.1-9.1-20.1,0.3
	c-1.9,3.6-4.3,5-7.8,4.1c-3.7-1-4.7-4.2-4.6-7.8c0.4-9.6,5.2-17.1,11.5-23.7c11.9-12.5,10.2-12.4,22.2,0.1
	C298.5,441.5,303,449,303.8,458.2z"/>
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
                                    <button :style="{background:'rgba('+getterMaxicanSugarSkullBg1+')'}" @click="ShowElement(getterMaxicanSugarSkullBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg2+')'}" @click="ShowElement1(getterMaxicanSugarSkullBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg3+')'}" @click="ShowElement2(getterMaxicanSugarSkullBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg4+')'}" @click="ShowElement3(getterMaxicanSugarSkullBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg5 +')'}" @click="ShowElement4(getterMaxicanSugarSkullBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg6+')'}" @click="ShowElement5(getterMaxicanSugarSkullBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg7+')'}" @click="ShowElement6(getterMaxicanSugarSkullBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg8+')'}" @click="ShowElement7(getterMaxicanSugarSkullBg8)" :class="this.ValueId+'_color8btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg9+')'}" @click="ShowElement8(getterMaxicanSugarSkullBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterMaxicanSugarSkullBg10+')'}" @click="ShowElement9(getterMaxicanSugarSkullBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var MaxicanSugarSkull= [
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
            var randomNumber = MaxicanSugarSkull[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  MaxicanSugarSkull[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'MaxicanSugarSkull'){
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
                getterMaxicanSugarSkullBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MaxicanSugarSkull') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MaxicanSugarSkull') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'MaxicanSugarSkull') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterMaxicanSugarSkullBg10: {
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
                            name:'MaxicanSugarSkull',
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