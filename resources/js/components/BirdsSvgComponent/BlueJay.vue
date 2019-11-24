<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#284066;transform:scale(0.2)" :class="ValueId+'_color9'" d="M67.1,500c-0.2-2.8-0.3-5.6-0.5-8.8c-4.6,2.8-8.9,5.5-13.3,7.9c-2,1.1-4.5,2.5-6.5,0.6
	c-1.8-1.8-0.1-4.1,0.6-6.1c2.2-5.6,5.8-10.5,8.8-15.6c3.8-5,9.3-8,14.3-11.4c20.1-13.7,39.4-28.2,55.9-46.2
	c5.7-6.2,11.1-12.8,16.8-19c1.1-1.2,2-2.7,3.7-3.2c8.7-0.4,16.4-4.1,24-7.9c1.8-0.9,4.3-3.1,5.8-1c1.2,1.7-1.7,3.2-3,4.5
	c-14,14.9-28.2,29.6-42.2,44.5c-6.8,7.3-14.2,14-20.6,21.7l0,0c-1.1,2.1-2.9,3.6-4.6,5.2c-8.6,8.2-16.3,17.2-24.4,25.9l0,0
	c-2.9,3.7-6.1,7.1-10.1,9.8C69.9,502.1,68.4,502.3,67.1,500z"/>
<path style="fill:#5F9ED5;transform:scale(0.2)" :class="ValueId+'_color5'" d="M350.2,128.2c-2,8.8-0.8,17.7-0.6,26.6c0,2.1,0.3,4.3,0.4,6.4c-7.6-0.6-12.3,3.9-16.5,9.3
	c-3.3,4.2-6.6,8.3-10.4,12.1c-3.1,3.2-2.8,5.2,0.8,7.7c1.4,1,2.8,1.8,4.4,2.4c16.3,6.9,21.6,20.6,23.1,36.7
	c2.1,22.2-7.9,39.5-22.4,55c-1.6,1.7-3.3,3.5-6,2.8c-1.7-2.6,0.1-4.7,1.1-6.9c3-6.2,5.9-12.5,7.4-19.2c-0.9-2.1-2.6-1.5-4.2-1.2
	c-1.2,0.2-2.5,1.2-3.6-0.2c-1-2.5,0.4-4.6,1.6-6.5c4.3-6.9,5.2-13.8,3.2-21.9c-1.5-6.3-3.7-12-6.9-17.4c-2.7-4.6-6.6-8-11.2-10.4
	c-3.8-2.1-7.7-1.5-11.2,1.2c-2.4,1.8-4.5,3.9-7.3,5.2c-8.4,3.5-15.5,8.9-22.3,14.9c-12.6,11.1-25.2,22.2-37.1,34.1
	c-0.7,0.7-1.5,1.4-2.4,1.8c-2.5,0.4-4.4-0.5-5.8-2.5c-0.9-2.4,1.3-3.2,2.5-4.4c22.8-23.6,47.2-45.5,72.2-66.6
	c18.6-15.8,33.1-35,47.4-54.5C347.5,131.1,348.3,129.1,350.2,128.2z M254.1,311.1c-6.2,3.7-12.1,8-18.6,11.1
	c-7.7,3.7-15.8,6.5-24.4,10c1.3-4.7,6.2-4.8,8.2-9.2c-9.6,4.6-18.2,8.6-26.8,12.8c-7,3.4-14.5,5.8-20.9,10.3
	c-1.2,0.9-2.6,2.8-4.1,0.5c-1-1.6-1.2-3.8,0.6-5c1.9-1.2,1.9-2.1,1.1-4.2c-1-2.7,1.7-3.9,3.7-5.1c11-6.7,21.4-14.4,31.2-22.9
	c-10.6,5.1-19.3,13.1-29.6,18.9c6.5-11,18.4-16.6,27.2-26.1c-6-0.2-7.6,6.1-13.1,7c1.9-5.5,5.3-9.5,9.4-12.6c5.4-4.2,10-9,13.4-14.9
	c2-3.5-0.6-5-2.7-6.9c5.1-5.6,10.2-11.3,15.3-16.9c1.9,0.7,3.8,1.4,5.8,2c0.8,0.2,1.3,0.6,1.4,1.5c-1.4,4-5,6-7.6,9
	c-2.2,2.6-5.1,4.6-7.3,8.3c4.5-0.2,6.6,1.7,7,5.7c0.2,2.5,2.4,2.3,4.3,2.3c4,0.1,5.6,2.1,5.3,6.1c-0.3,5.1,1.2,7.1,6.2,7.6
	c4.1,0.4,7.8,0.4,8.8,5.8C248.5,309,252.7,308.6,254.1,311.1z"/>
<path style="fill:#28528C;transform:scale(0.2)" :class="ValueId+'_color8'" d="M138.1,380.3c3.2-5.6,9.2-7.3,14.4-9.9c8.1-4,15.8-8.8,24.6-11.2c0.6,1.3-0.1,2.3-0.8,3.2
	c-8.2,12.3-17.4,23.8-26.8,35.1c-0.7,0.8-1.7,1-2.4,1.7c-7.8,8.7-15.5,17.3-23.3,26c-13.8,15.4-30.6,27.1-47.3,39
	c-6.6,4.7-13.4,9.3-20.1,13.9c3.7-8.1,9.5-14.7,14.9-21.6c13-16.5,27.9-31.3,41.8-46.9c7.9-8.8,16-17.4,23.9-26.2
	C137.7,382.6,139.6,381.9,138.1,380.3z"/>
<path style="fill:#494B46;transform:scale(0.2)" :class="ValueId+'_color4'" d="M294.2,429.1c-2.6-1.3-3.6-4-5-6.2c6.8-6.1,6.8-6.2,2.4-15.2c-4-8.2-8.6-16.1-12.9-24.1
	c-0.9-1.7-2.4-3.3-1.5-5.5c3.4-2.7,6.4-6.2,11-7.1c11.2,18.2,22.3,36.5,33.5,54.6c4.5,7.2,9.3,8.4,17.4,4.7c4-1.8,7.9-3.6,12.2-1.3
	c0,1.5-1.7,2.4-1.7,3.9c1.3,1.7,3.8,0.5,4.8,2.4c-2.3,3.6-5.4,3.8-8.5,1.6c-3.3-2.4-5.8-1.3-8.6,0.7c-8.9,6.3-15.2,6.3-24.2,0
	c-2.6-1.8-5.3-3.5-7.6-5.6C302.1,428.9,298.2,428.9,294.2,429.1z"/>
<path style="fill:#494B46;transform:scale(0.2)" :class="ValueId+'_color4'" d="M252.2,387c4.6-0.5,8.9-3.3,13.8-2c2.1,0.5,2.6,2.4,3.5,4c6.4,11.3,13.6,22.1,20.4,33.1
	c1.2,2.5,3.4,4.3,4.3,7c4.2,9.4,9.1,18.4,16.3,25.8c2.1,2.1,5,1.5,7.6,0.7c3.2-1,6.2-2.3,9.4-3.4c2.6-0.9,5.2-1.2,7.8,0.1
	c-1.3,2.8-1.7,5.1,2.6,5.1c0.8,0,1.5,0.6,1.3,1.6c-3.8,3.3-7.6,3.4-11.9,0.4c-1.9-1.4-4.2,0-5.9,1.5c-8.2,7.6-17.2,6-25.8-0.4
	c-1.2-0.9-2.5-1.7-3.6-2.6c-6.9-5.8-14.1-6.7-22-2.1c-9.2,5.3-19.3,6.8-29.8,5.6c-1.7-0.2-3.4-0.1-4-2.2c-0.1-2.3,1.7-1.9,3-2.2
	c4.9-1,4.9-0.9,2.3-5.2c-0.3-0.4-0.4-0.9-0.3-1.4c8.5-3,17.5-2,26.2-3.1c2.8-0.4,5.6-0.8,8.3-1.8c5.1-1.9,5.7-5.6,1.6-9.7
	c-1.6-4.9-3.6-9.4-9.2-10.8c1.4-0.4,2.8-0.7,5-1.3C265.9,411.3,259.1,399.2,252.2,387z M432.1,154.1c4.8-1.2,6.8,3,9.9,5
	c8.5,9.6,15.7,20.1,21.5,31.5c1.3,2.6,2.6,5,0.2,7.7c-2.7,3-5.2,0.8-7.6-0.3c-5.3-2.5-9.7-6.3-14.4-9.7c-3.9-2.8-7.9-5.4-12.7-6.6
	c-2.1-0.5-3.5-0.2-4.7,1.4c-4.8-0.7-7.6-2.7-7.4-8.3c0.1-2.6-2.5-4.5-4.8-6c-1.9-1.3-4.3-2.1-5.4-4.2c-0.9-1.7-3-3.5-1.8-5.3
	c1.3-2,3.9-2.4,6.2-2.1c2,0.2,3.9,0.6,5.8,1.2C425.2,161.2,426.7,160.8,432.1,154.1z"/>
<path style="fill:#494B46;transform:scale(0.2)" :class="ValueId+'_color4'" d="M267.9,425c6.7,0.4,9.4,3.5,9.2,10.8c-6.6,2-13.3,2.7-20.1,2.3c-2.2-0.1-4.2-0.5-5.9-2.1
	c0.5-2.6,2.9-2.6,4.6-2.6c3.8-0.1,4.5-1.7,3.2-4.9c-0.2-0.5-0.1-1,0.2-1.4C261.7,424.8,264.8,425,267.9,425z"/>
<path style="fill:#85BBDE;transform:scale(0.2)" d="M82,491.1c2.1-4.9,6.4-7.9,9.9-11.6c6.2-6.7,12-13.6,19.1-19.4c-0.1,0.5,0,1.1-0.3,1.4
	C101,471.2,92.3,481.9,82,491.1z"/>
<path style="fill:#85BBDE;transform:scale(0.2)" d="M67.1,500c2.7,2.1,4.7,0.1,6.6-1.4c2.9-2.4,5.6-5.1,8.4-7.6c-2.3,5.2-6.5,8.5-11.1,11.4
	C68.6,503.9,67.2,502.7,67.1,500z"/>
<path style="fill:#FCFCFD;transform:scale(0.2)" d="M277.1,378.1c5.9,10.9,12.3,21.6,17.3,33c3.4,7.8,2.8,9.1-5.2,11.8C281,410.5,273.1,398,266,385
	C268.4,380.7,273.3,380.3,277.1,378.1z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" :class="ValueId+'_color6'" d="M399.2,214c4.4,1.6,7.5,4.5,9,9.1c-4.1,8.6-10.6,15.6-15.3,23.8c-0.6,1-2.1,2.3-0.6,3.5
	c1,0.8,2.1-0.4,3.1-1c0.7-0.4,1.4-1.3,2.2-0.6c0.9,0.7,0.6,1.8,0.4,2.8c-1.2,5-2.9,9.5-6.9,13.4c-23.5,23.1-46.8,46.5-70,69.9
	c-5.1,5.2-11.9,6.4-18.2,9c2.7-6.5,9.8-9.3,12.5-16.4c-4.1,0.4-6.7,2.5-9.2,4.5c-6.3,4.9-12.7,9.7-17.9,15.7
	c-3.3,3.9-8.2,4.1-12.6,5.4c-0.5,0.2-1.5-0.1-1.8-0.5c-0.6-0.8,0.2-1.5,0.7-2.2c1.2-1.8,5-3.2,3-5.4c-2.2-2.4-4.7,0.7-6.9,2
	c-0.1,0.1-0.3,0.2-0.4,0.2c-3.7,2.4-7.8,3.6-12,4.5c-1.9,0.4-4.2,1.2-5.3-1.1c-1.1-2.2,0.5-3.8,1.9-5.2
	c11.2-10.9,21.5-22.6,33.5-32.7c1.1-1,2.1-2.1,3.2-3.1c8.5-7.7,18.4-13.6,27.3-20.8c1.3-1,2.8-1.8,4.6-1c12.1,4.9,22.1,0.4,31.1-7.3
	c8.9-7.5,14.7-17.5,20.8-27.2c7.1-11.3,13.7-22.7,19.5-34.8C395.5,216.5,396,213.8,399.2,214z M243.1,354.1c-4,0.7-8.1,1.4-12.1,2.2
	c-1.1,0.2-2.3,1.1-3.1-0.2c-0.7-1.2,0.2-2.3,0.9-3.1c6.3-6.3,12.6-12.6,19.1-18.7c1.4-1.3,3.1-2.4,4.1-4.2c0.2-3,2.9-3.6,4.8-5
	c5.7-2.3,11-5.4,16.6-8c0.9-0.4,1.8-0.9,2.7-1.2c1.7-0.6,3.8-1.5,4.9,0.5c0.9,1.6-0.5,3.1-1.6,4.3c-8.3,8.4-16.7,16.6-24.9,25
	c-3.2,3.2-6.3,6.3-10.4,8.4C243.8,354.1,243.4,354.1,243.1,354.1z M219.1,358.1c-3.3,0.3-6.5,1.7-9.8,0.8c-1.6-0.4-4.1-0.8-1.9-3.6
	c8.5-10.9,20.9-15.3,33-20.2c0.2-0.1,0.6,0.2,1.6,0.6c-6.5,8.4-14.5,15.1-21.9,22.3C219.8,358.1,219.4,358.1,219.1,358.1z"/>
<path style="fill:#2E2D2B;transform:scale(0.2)" :class="ValueId+'_color2'" d="M414.1,256.1c-2.9-3.2-2.8-7.2-3-11.2c-0.4-7.4,0.3-15-3-22c-3.1-2.8-5.2-6.8-9.6-8.2
	c-2.8-1.2-6.1-1.1-8.7-3c-11.8-10.9-22.6-22.6-30.3-36.7c-2.8-5.1-5-10.5-9.9-14.1c-0.3-0.5-0.5-1-0.6-1.5c-2-8.3-1.2-16.7-1.2-25
	c0-2.4,1-4.5,2.5-6.3c6.6-8.4,13.2-16.7,19.9-25.1c1.1-1.7,2.6-1.7,4.4-1.5c23.1,2.3,40.5,12.8,49.8,34.8c2.5,6,5.4,11.7,8.4,17.4
	c-2.5,6.2-7,8.7-13.3,7c-2.6-0.7-5.1-1.6-7.7-1.9c-1.8-0.2-3.9-0.5-4.8,1.6c-0.8,2,0.8,3.4,2.1,4.7c0.8,0.8,1.8,1.5,2.8,2.1
	c3.7,2.3,6.3,5.3,6.9,9.8c0.3,2.2,1.5,3.6,3.7,4.2c1,0.3,2.5,0.2,2.1,2c-2.1,13.7-0.9,27.6-3.1,41.3
	C419.4,235.2,417.4,245.8,414.1,256.1z M259.1,427c0.7,1.4,2.1,2.5,2.1,4.3c-0.1,2.1,0.2,3.9-3.1,3c-2.3-0.6-4.7,0.4-6.9,1.6
	c-3.5,2.3-6,5.6-8,9.3c-0.6,1.1-1,2.9-2.7,2.2c-1.3-0.5-1.3-2.1-1.4-3.5c-0.2-8,8.9-17,17.5-17C257.4,426.9,258.3,427,259.1,427z
	 M241.1,450.3c1,1,2.6,1.3,3.3,2.7c1.6,2.9,0.6,4.8-2.7,5.1c-1.9,0.1-4-0.6-5.6,1c-4.7,1.8-7.1,5.8-9.4,9.9c-0.5,1-0.9,2.4-2.4,2.1
	c-1.9-0.3-1.3-2.1-1.3-3.2C222.7,459,231,451,241.1,450.3z M339.1,459c-0.5-0.8-1.3-0.8-2.1-0.9c-1.8-0.2-4.4,1.3-5.1-1.4
	c-0.6-2.3,1.8-3.2,3.3-4.4c5.1-1.2,8.8,0.7,11,5.4c2.4,5,1.3,9.9-3,14C340.7,467.7,344.1,461.9,339.1,459z M354.3,435.3
	c-0.3,0-0.6-0.1-1-0.1c-2-0.3-4.9,1.1-5.7-1.1c-1-2.6,2-3.6,3.6-5c6.4-0.3,9.8,1.6,11.9,6.6c2,4.6,1,8.3-3.4,12.4
	C357.3,444,362.4,436.6,354.3,435.3z M390.1,211.1c-19.7-1.2-31.7-13.6-37.8-33.4c-1.7-5.3-2.6-11-2.1-16.7c3.8,0.9,5.8,4.1,7.2,7.1
	c6.9,15.3,17.5,27.8,29.5,39.3C388,208.5,389,209.9,390.1,211.1z"/>
<path style="fill:#292929;transform:scale(0.2)" d="M399.1,136.1c-9.4-1.3-18.7-1.3-28.1,0c-3-3.5-3.1-8-0.1-12c6.3-8.6,21.9-8.6,28.3,0
	C402.2,128.1,402.2,132.6,399.1,136.1z"/>
<path style="fill:#F9FAFA;transform:scale(0.2)" :class="ValueId+'_color3'" d="M399.1,136.1c2.5-7,0.6-12.1-5.9-15.3c-5.6-2.7-11.2-2.7-16.7,0.2c-6.3,3.4-8,8.2-5.5,15
	c-5.9,2.1-7.1,1.3-6.7-4.6c0.1-1.3,0.4-2.6,0.8-3.9c2.6-9.1,12.4-14.1,24.3-12.4c9.2,1.3,16.1,8.5,16.1,16.8
	C405.5,137.6,404.8,138.1,399.1,136.1z"/>
<path style="fill:#5F9ED5;transform:scale(0.2)" :class="ValueId+'_color5'" d="M291.1,209.1c-3.2,4.5-7.4,8.1-12.1,10.9c-9.6,5.8-18,13.1-25.9,20.8c-7,6.8-15.1,12.5-21.1,20.4
	c-0.3,0.3-0.7,0.3-1,0s-0.7-0.7-1-1c7.4-9.3,16.9-16.4,25.4-24.6c6.3-6.1,13.2-11.5,19.9-17.2C280,214.3,285.4,211.4,291.1,209.1z"
	/>
<path style="fill:#3C79BC;transform:scale(0.2)" :class="ValueId+'_color1'"  d="M432.1,154.1c-4.7-5.3-6.9-12.1-9.6-18.4c-7.1-17.3-20.8-26.5-37.9-31.4c-4.6-1.3-9.6-2.3-14.6-1.2
	c11.3-19.9,17.5-41.5,21.7-63.8c1.3-6.8-0.4-13.6,0-20.4c0.2-3-1.2-7.5,2.3-8.4c3.6-0.9,4.7,3.6,6,6.2c6.6,12.9,11.6,26.4,15.9,40.2
	c6.3,20.3,13.9,40,24.9,58.4c8.5,14.1,8.7,29,1.1,43.7C438.2,158.5,435.7,155.2,432.1,154.1z M138.1,380.3c-2,2.7-4.6,4.7-7.4,6.6
	c-1.2,0.9-2.6,2-4,0.8c-1.5-1.3-0.3-2.8,0.4-4c3.5-6.7,8.3-12.4,12.8-18.4c21.7-28.8,42.7-58.2,65.3-86.3c1.1-1.4,2.5-2.7,3.7-4
	c4.4,1.6,5.3,3.8,3.4,7.7c-2.6,5.4-6.5,9.6-11.2,13.2c-3.9,3-6.8,6.7-9.6,10.7c2-1.1,3.4-2.9,5.3-4c1.6-0.9,3.6-2.2,4.9-0.3
	c1.1,1.6-0.8,3-2,4c-5.9,4.9-11.7,9.9-17.7,14.6c-1.8,1.4-3.6,2.9-4.7,5.2c5.3-3.6,10.4-7.6,15.7-11.2c2.5-1.7,4.9-3.5,7.4-5
	c1.4-0.8,3.2-2.2,4.4-0.4c0.9,1.4-0.8,2.7-2,3.6c-3,2.3-6,4.8-9.1,7c-6.3,4.6-12.7,9.1-19.4,13.2c-2.2,1.4-4.2,2.7-3.3,5.9
	c0.5,1.9-1.5,2.8-2.2,4.3c-0.3,0.6-0.5,1.3,0,1.9s1.2,0.4,1.8,0.2c0.5-0.2,0.9-0.4,1.3-0.7c13.2-7.7,27.5-13.3,41.2-20.1
	c1.8-0.9,4.5-3.1,5.7-1c1.5,2.6-2,3.5-3.6,5c-0.3,0.2-0.5,0.4-0.6,0.5c14-4,26.5-11.6,39.1-18.8c1.3-0.7,2.8-1.3,4.2-1.6
	c5.9-0.9,6.8-0.2,7.8,6.9c0,0.5-0.2,1-0.4,1.5c-3.8,3.4-8.9,4.5-13.3,6.8c-20.9,10-41.8,20.1-62.8,29.9c-4.1,1.9-8,4-11.9,6.2
	C163.8,365.6,150.4,371.9,138.1,380.3z M399.2,214c-2.3,1.2-2.8,3.6-3.8,5.6c-9.1,18.8-19.7,36.8-32.3,53.5
	c-8.2,10.9-18.7,18.2-33.1,18c-2.8,0-5.3-0.5-6.9-3c-0.3-0.4-0.2-0.7,0.1-1c8.7-5.2,13.7-13.8,18.9-22c10.4-16.5,10.3-34.4,4.6-52.1
	c-2.5-7.7-7.9-14.1-15.9-17.6c-3.2-1.4-6.2-3.2-9.1-5.1c-2.5-1.7-3.8-4.4-1.2-6.7c6.8-6.2,11.5-14.2,18.2-20.4
	c3.5-3.2,7.1-3.9,11.4-2l0.2-0.1c2,3.6,1.4,7.7,2.3,11.6c2.9,13,8.4,24.3,20.1,31.9c3.4,2.2,7.2,3.3,11,4.3c2.2,0.6,4.6,0.9,6.5,2.3
	C393.1,212.1,396.1,213,399.2,214z M291.1,209.1c2.1-1.6,4.3-3.1,6.3-4.8c5.3-4.4,10.5-4.4,16.2-0.3c8.9,6.5,13.1,15.3,15.9,25.9
	c2.5,9.8,1.1,17.8-4.2,25.8c-0.8,1.2-1.3,2.7-1.2,4.3c-0.5,1.8-2.1,2.5-3.6,3.2c-18.7,5.9-37.5,10.4-57.3,9.3
	c-9.8-0.5-19-3.2-27.8-7.3c-1.4-0.6-2.6-1.4-3.4-2.8c-1-2.4,0.6-3.8,2.1-5.1c14.4-13,27.6-27.5,44.2-38
	C282.8,216.3,286.6,212.2,291.1,209.1z M321.1,262c1-0.7,2-1.3,3-2c3-1,6-4.2,8.9,0.1c-8.2,14.3-19.7,25.4-32.9,35
	c-8.4,5.7-16.1,12.7-26,16c-0.6-2.5,1.3-3.6,2.8-4.8c7.2-5.6,13-12.7,19.6-19c1.2-1.2,3.1-2.6,0.4-4.2c-0.2-2.7,2.1-3.6,3.7-4.8
	C307.7,273.1,315.2,268.6,321.1,262z M231.1,261.2c0.3,0,0.7,0,1,0c6.7,5.2,14.7,7.4,22.8,8.8c21.1,3.7,41.3-1.3,61.4-6.8
	c1.6-0.4,3.2-0.8,4.8-1.2c-2.1,5-6.4,7.9-10.6,10.9c-4.6,3.2-9.7,5.7-13.4,10.2c-3.1,4.9-8.2,7.6-12.8,10.8
	c-8.4,5.9-16.8,11.9-26.3,16.2c-1.3,0.3-2.7,0.7-4,1c-3.5-1.5-8.5-1.2-8.2-7.3c0.1-2-2.1-1.7-3.5-1.6c-2.7,0.1-5.4-0.1-7.7-1.5
	c-2.5-1.5-4-3.7-2.9-7.1c1.2-3.7-0.2-6.1-4.4-5.4c-4,0.7-5.7-0.3-5.3-4.4c0.2-2.8-1.3-4-4-3.5c-1.1,0.2-2.3,1.2-3.1-0.2
	c-0.7-1.4,0.4-2.6,1.3-3.5c4.5-4.6,9.1-9.2,13.7-13.8C230.3,262.3,230.7,261.7,231.1,261.2z"/>
<path style="fill:#3C79BC;transform:scale(0.2)" :class="ValueId+'_color1'" d="M258.1,310.1c6-5.2,13.4-8.4,19.7-13.1c6.3-4.7,12.9-9.3,19.3-13.9c1.1-0.2,2.2-0.4,3.8-0.8
	c-1.7,5.7-6.5,8.5-9.9,12.2c-5.4,5.8-11.3,11.1-16.9,16.6c-2.8,2-5.8,3.7-9,5c-0.2-0.8-0.6-1.5-0.6-2.3
	C264.3,309.3,261.9,308.4,258.1,310.1z"/>
<path style="fill:#5F9ED5;transform:scale(0.2)" :class="ValueId+'_color5'" d="M203.6,335.4c-9.9,4.9-19.8,9.8-29.6,14.8c-0.2-0.5-0.5-1-0.7-1.5c9.4-5.8,19.3-10.6,29.6-14.8
	C203.1,334.4,203.4,334.9,203.6,335.4z"/>
<path style="fill:#CFD7E2;transform:scale(0.2)" :class="ValueId+'_color7'" d="M252.2,387c-7.7,0.4-15.1-1.1-22.3-3.9c-10.4-4.1-21.1-3.6-31.7-0.4c-4.4,1.3-8.7,2.9-13.1,4.4
	c-3.4,0.9-2.7-1.3-2.1-3c0.8-2.3,2.6-3.8,4.3-5.4c3-2.9,6.4-5.6,10.2-7c8.4-2.9,15.2-7.8,21.3-14.1c0.4-0.2,0.9-0.3,1.4-0.4
	c2.2,0.2,3,1.5,2.2,3.4c-1.4,3.5,0.7,2.7,2.8,2.7c7.8,0.1,12.5-5,17.5-9.7c0.4-0.2,0.9-0.4,1.3-0.5c5.8,0.1,2,3.7,2,6.1
	c7.1-0.1,13.5-1.4,18.1-7.4c1.5-2,3.5-3.6,5.2-5.3c1.2-1.1,2.5-2.2,4.1-2.8c1.6-0.6,3.4-1,4.6,0.5c1.3,1.6,0.4,3.1-0.6,4.5
	c-0.5,0.7-1.2,1.2-1.5,2.5c4.9-0.2,8.9-1.9,12.2-5.4c5.9-6.4,12.8-11.7,19.9-16.6c2-1.4,4.9-4.2,6.9-1.6c2,2.5-1.1,4.7-2.9,6.7
	c-2.2,2.5-4.8,4.6-7.8,8.1c6.4-2.6,11.8-4.4,16.1-8.7c23.2-23.4,46.6-46.7,69.9-70c3.5-3.5,5.4-7.4,5.8-12.3c-5.8,0-6.7-1.2-4-6.1
	c4.1-7.2,10.1-13.3,13.8-20.8c0.5-1.1,1.7-2.1,3.3-1.2c3.2,4.7,2.7,10.1,3,15.3c0.3,5.9,0.7,11.8,1.7,17.7
	c-8.6,37.6-28.9,66.6-62.5,86.2c-16.1,9.4-33.1,16.3-50.8,21.7c-4.6,1.4-9.7,2.4-12.8,6.9c-3.2,3-7.1,5.2-10.7,7.8
	c-3.7,2.5-7.8,4.2-11.5,6.7C261.3,385.9,256.9,388.1,252.2,387z M147.1,399.1c10-13.4,21.1-25.9,30-40c11.3-7.1,23.8-11.7,35.7-17.8
	c11.9-6,24-11.4,36-17.1c1-0.5,2.2-0.8,3.3-1.1c1.4,2.1-0.3,3.5-1.3,4.9c-1.6,2.2,1.4,1,1.4,2c0.4,2.7-1.8,3.7-3.4,5.1
	c-6.4,5.4-11.9,11.6-17.8,17.4c-0.6,0.6-1.2,1.2-0.8,2.4c4.3,0.8,8.5-2.8,12.9-0.7c-4.4,7.2-11.2,10.3-19.3,10.9
	c-1.3,0.1-3,0.3-3.8-0.4c-1.4-1.2,0.6-2.2,1-3.3c0.5-1.3,1.9-2.8-0.9-3.2c-0.6-2.4,1.4-3.1,2.7-4.3c5.8-5.2,11.1-10.8,16.2-16.7
	c-9.9,4.9-21.2,7.4-28.4,16.7c-0.7,0.9-2.1,1.6-1.7,2.8c0.5,1.6,2.2,1,3.5,1.2c2.2,0.3,4.5-1.6,6.7,0.3c-4.6,6-10,10.7-17.5,13.1
	c-6.4,2-11.7,6.1-16.1,11.2c-1,1.1-4.2,2.8-0.4,4.7c-7.8,2.3-12.2,8.8-17.4,14.3c-18.3,19.1-36.4,38.3-54.6,57.4
	c-0.5,0.6-1.4,0.8-2,1.3c0.3-2.2,2.2-3.2,3.5-4.6c20.7-21.9,41.5-43.7,62-65.9C166.9,393.3,158,399.4,147.1,399.1z M244.1,354.1
	c10.9-10.7,21.7-21.4,32.6-32.1c1.5-1.5,3.4-2.7,3.8-5.9c-8.7,1.7-15.3,7.7-23.4,10c0.5-5,5.1-6.3,8-9c0-0.3,0-0.6,0-0.9
	c2.2-3,5.7-4.1,8.8-5.8c7.2-3.3,13.8-7.6,20.1-12.4c1.8-1.4,3.4-3.2,6-3c1.6,2.3-0.4,3.6-1.6,5c-1.9,2.2-4.2,4.1-6.1,6.3
	c-1,1.2-2.4,2.5-0.3,3.9c-7.8,7.7-15.7,15.3-23.5,23c-4.5,4.4-9,8.9-13.4,13.4c-1,1-2.7,2.1-1.6,3.7c1,1.6,2.7,0.5,4.1,0.2
	c4.1-1.1,8.3-2.2,12.5-3.3c-3.4,3.6-6.5,7.6-10.4,10.6c-4.1,3.1-9.7,2.6-14.7,3.2c-2.8,0.3-1.1-1.6-0.5-2.9
	C245.2,356.8,249.5,354.7,244.1,354.1z M300.1,295.1c5.4-5.2,10.5-10.6,16.1-15.5c6.6-5.7,10.9-13.3,16.8-19.5
	c-1,6.4-3.9,12.1-6.4,17.9c-1.3,3-3.6,5.5-3.5,9c0,0.3-0.1,0.7-0.1,1c-6.4,1.9-10.4,7.4-15.8,10.7c-5.3,3.3-10,7.5-15,11.2
	c-1.1,0.2-2.2,0.4-3.7,0.7c0.9-3.5,3.2-5.5,5.2-7.8C295.8,300.4,299.3,298.9,300.1,295.1z M265.1,317c-2.7,3-5.3,6-8,9
	c-1.7,1.3-3.3,2.7-5,4c-1.1,0.1-2.3,0.2-3.6,0.3c0.4-2.9,3.4-4.4,3.6-7.3C256.2,320.5,260.6,318.8,265.1,317z"/>
<path style="fill:#3C79BC;transform:scale(0.2)" :class="ValueId+'_color1'" d="M211.4,316.9c-12.3,8.2-24,17.5-38.7,21.3C185.5,331.1,197.2,321.8,211.4,316.9z"/>
<path style="fill:#070707;transform:scale(0.2)" d="M456.6,192.5c-10.8-9.1-22.8-16.4-34.4-24.2C435.6,173.5,447.2,181.4,456.6,192.5z"/>
<path style="fill:#F7F7F7;transform:scale(0.2)" d="M379.4,131.2c-2.9-0.2-5.2-1-5.3-3.9c-0.1-3.2,2.2-4.2,5-4.2c2.6,0,4.8,1.1,4.9,3.8
	C384.1,130,381.6,130.8,379.4,131.2z"/>
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
                                    <button :style="{background:'rgba('+getterBlueJayBg1+')'}" @click="ShowElement(getterBlueJayBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg2+')'}" @click="ShowElement1(getterBlueJayBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg3+')'}" @click="ShowElement2(getterBlueJayBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg4+')'}" @click="ShowElement3(getterBlueJayBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg5 +')'}" @click="ShowElement4(getterBlueJayBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg6+')'}" @click="ShowElement5(getterBlueJayBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg7+')'}" @click="ShowElement6(getterBlueJayBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg8+')'}" @click="ShowElement7(getterBlueJayBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBlueJayBg9+')'}" @click="ShowElement8(getterBlueJayBg9)" :class="this.ValueId+'_color9btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterBlueJayBg10+')'}" @click="ShowElement9(getterBlueJayBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var BlueJay= [
                {top:17 ,left:48},
                {top:230 ,left:111},
                {top:217 ,left:119},
                {top:201 ,left:37},
                {top:162 ,left:38},
                {top:490 ,left:70},
                {top:211 ,left:103},
                {top:276 ,left:11},
                {top:259 ,left:114},
                {top:465 ,left:45},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = BlueJay[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  BlueJay[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'BlueJay'){
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
                getterBlueJayBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BlueJay') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BlueJay') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'BlueJay') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterBlueJayBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterBlueJayBg10: {
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
                            name:'BlueJay',
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