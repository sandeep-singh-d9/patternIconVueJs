<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(142, 76, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M313.9,239.7c50.3,34.4,49.6,112.9-4.6,146.8c7.3,6.6,16,10.6,25,14.1c1.8,0.7,3,0.3,4.5-0.9
	c15.4-12.4,32-14.8,49.6-4.9c3.1,1.8,4.6,1.2,5.8-2.1c1.3-3.4,2.7-6.8,4.4-10c6.7-12.6,20.5-14.9,30.9-5c9,8.5,13.1,19.5,14.3,31.6
	c4.3,46.2-42,81.9-82.5,69.7c-13.4-4-24-12.1-30.7-24.6c-1.4-2.6-3.2-3.8-5.9-4.6c-14.9-4.6-28.9-10.9-41.6-20
	c-9-6.5-16.8-14.1-22.9-23.5c-1.4-2.2-2.8-3-5.6-2.7c-19.8,2.1-39.6,1.6-59.2-2.3c-3.9-0.8-5.9,0.3-7,3.9c-4.2,13.8-1.8,27,3.1,40
	c0.6,1.6,1.4,3,1.9,4.6c3.2,8.7,1.7,15.7-4.4,20.3c-5.8,4.5-15.4,4.5-22-0.1c-5.7-3.9-9.3-9.5-11.7-15.8
	c-7.6-19.5-9.9-39.7-5.3-60.2c1.1-4.9,0.1-7-4.3-8.7c-4-1.5-7.9-3.5-11.5-6s-5.7-1.2-7.6,1.9c-4.7,7.5-3.8,15.6-2,23.7
	c1,4.4,3,8.4,5,12.5c4.1,8.4,3.4,14.8-2.1,20.2c-5.3,5.2-14,6.2-21.4,2.5c-5.3-2.6-8.9-6.9-11.9-11.8c-11.6-19.5-15-55,2.6-76.6
	c-1.6-1.2-3.2-2.3-4.7-3.6c-3.9-3.4-5.4-3.3-8.1,1.2c-3.8,6.3-4.3,13.2-3.3,20.3c0.3,2,0.8,3.9,1.2,5.9c2.4,12.8-8.3,22.4-20.7,18.5
	c-7-2.2-11.3-7.3-13.9-14c-7.8-20.1-0.8-50.2,15.3-64.5c2.9-2.6,2.8-4.2,1.1-7.3c-36.1-66-23.7-142.6,20.2-192.6
	c33.7-38.4,77.4-60.6,127.9-69.1c0.7-0.1,1.3-0.1,2-0.2c9-0.3,16.8-2.4,24.8-7.8c18.9-13,45.5-9.8,65,6.2
	c24.2,19.8,32.2,54,18.8,80.7c-4.7,9.3-11.2,16.9-20.3,22.1c-12.4,7.1-28.4,2-30.1-14.5c-0.5-4.4,1.2-10.2-1.8-13
	c-3.1-2.9-8.4,0.6-12.8,0.5c-15.9-0.4-27.5-7.9-35.9-20.9c-1.2-1.8-1.8-3.2-4.4-1.6c-27.7,16.6-49.2,38.5-59.8,69.7
	c-3.5,10.2-5,20.8-2.3,31.5c4,16.3,15.5,25,30.9,29.4c16.5,4.8,33.2,3.9,50.1,2.6c12.8-1,22.5-4.9,31-16.1
	c14.9-19.4,37.2-27.1,60.9-30.6c10.3-1.5,20.6-1.4,30.9-1c2.1,0.1,3.6-0.2,5.2-2c17.3-19.3,41.7-24.1,65.9-13.3
	c32.2,14.4,48.6,52.8,35.8,84.2c-3.1,7.7-7.6,14.4-14,19.7c-12.6,10.3-27.2,6.1-32.4-9.3c-1.4-4.2-0.9-10.3-4.2-12.4
	c-3-2-7.8,2.1-12,2.8c-17.1,2.7-30.7-3.5-41.3-16.7c-1.7-2.2-3.4-3.2-6.1-3.3C341.1,232.1,327.3,233,313.9,239.7z"/>
<path style="fill:#FDFCFC;transform:scale(0.2)" d="M298.3,248.2c-0.7,1.6-2,0.8-3,0.6c-11.7-2.9-23.3-2.5-35,0.4c-22.9,5.6-46.1,8.1-69.7,5.9
	c-7.3-0.7-14.5-1.8-21.5-4.2c-11.5-3.9-23.1-3.9-34.9-1.2c-1.8,0.4-3.6,0.3-5.4,0.4c11.2-7,23.5-10.4,36.5-11.7
	c2.4-0.2,4.9-0.4,7.4,0.6c19.6,8.3,40.2,8.4,60.9,6.5c12.6-1.1,24.9-4.4,37.7-3.7C280.7,242.3,289.7,244.1,298.3,248.2z"/>
<path style="fill:#FCFCFC;transform:scale(0.2)" d="M441.1,194.1c-18.5-7.9-36.6-7.1-54,3.1c-1.9-2.9-3.6-6-6.6-7.8c-3.2-2-2.3-3.2,0.1-4.9
	c10.3-7,21.6-9.3,33.7-6.5C425,180.4,434,185.6,441.1,194.1z"/>
<path :style="{fill:'rgba(250, 215, 78, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M284,411.2c-8.4-6.9-14.4-15.6-18.7-25.5c-2.6-6.1-1-10.7,4.4-13.4c5.7-2.8,11.6-1.3,14.6,4.2
	c3.5,6.5,7.2,12.7,12.5,17.9c7.3,7.3,16.1,12.2,25.2,16.8c0,2-1.8,2.3-3.1,2.6C307,416.6,295.2,417.8,284,411.2z M169,451.2
	c-8.9-20.5-10.5-41.4-2.8-62.5c5.6-15.4,22.4-24.2,36.4-19.5c5.8,1.9,10.7,5.2,13.7,10.9c-0.8,3.4-3.4,1.9-5.2,1.6
	c-4.8-0.9-9.5-0.8-14.3-0.6c-11.1,0.5-17.7,6.7-21.9,16.1c-3.9,8.8-5.1,18-4.4,27.7c0.5,7.3-0.1,14.6,0.9,21.9
	C171.6,448.3,171.9,450.7,169,451.2z M375.2,209.1c-22.6-5.9-44.3-2.8-65.2,6.7c-7.8,3.5-15.7,7-21.9,13.4
	c-3.4-0.5-6.7-0.9-10.1-1.4c0.6-3.7,3.6-5.5,6.2-7.5c11.1-8.6,23.2-15.6,36.9-19.3c4.6-1.3,9.3-2,14-2.9c8-2,16.1-0.8,24.2-0.7
	c2,0,3.9,0.4,5.9,0.6C371.7,198.6,375,202.3,375.2,209.1z M109,424.2c-5.9-6.8-8.1-15.1-9.3-23.7c-1.4-10.1-1.3-20.2,2.4-29.9
	c7.8-20.6,35.5-27.7,49.9-12.9c2.9,3,3.9,5.8,0.1,8.7c-1.5-0.2-2.8-1-4-1.8c-17.3-11.1-36.3-3.2-40.6,16.9
	c-2.6,12.1-0.9,24.1,2.1,36c0.4,1.6,1.1,3.2,1,4.9C110.7,423.4,110.5,424.4,109,424.2z M59,356c0.6-11.5,4.2-21.8,12.8-29.9
	c11.1-10.5,31.1-7.7,38.8,5.1c1.3,2.1,2.4,4.1-0.2,6.1c-2.7,0.5-4.4-1.4-6.2-2.7c-13.7-10.1-24-5.5-33.3,6.2c-3.2,4-6.1,8.3-8.3,13
	c-0.7,1.4-1.1,3.6-3.6,3.1c-0.1,0-0.1-0.3-0.1-0.4C58.9,356.3,58.9,356.1,59,356z"/>
<path style="fill:#FAF9FA;transform:scale(0.2)" d="M166.2,79.3c-7.6,4.1-15.3,8-22.7,12.3c-17.9,10.4-34.2,22.8-49.5,36.8c-2.2,2-4.6,3.8-6.8,5.7
	c1.7-4.6,5.4-7.8,8.6-11.3c17.6-19,38.6-33.3,61.6-44.7C161,76.3,163.4,78.3,166.2,79.3z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M97.1,277.1c8.1-11.9,18.8-20.9,31.8-27c14.4-5.1,28.5-4.1,43.1,0s29.7,5,45,4
	c16.9-1.1,33.3-4.3,49.8-7.6c9.3-1.8,18.9-1.8,28.2,1.2c1.1,0.4,2.1,1,3.4,0.6c23.1,11.4,35.1,30.4,37.8,55.6c0.3,3,1.2,6.2,0.1,9.3
	c-10.1,11.2-23.1,17.9-37,22.8c-20.7,7.3-42,9.2-63.9,7.8c-22.8-1.5-45-5.7-66.6-12.7c-27.6-9-50.6-25.1-68.8-47.9
	C98.4,281.4,96.7,279.7,97.1,277.1z M62,188c0.7-6.4,3.5-12.1,5.4-18.1c0.5-1.7,2.2-2.4,3.7-3.1c23.2-11,45.2-7.5,66.4,5.6
	c2.6,1.6,2.8,3.8,2.4,6.5c-2.2,15.5,0.6,29.8,9.9,42.6c1.7,2.3,1.7,3.2-1.5,3.7c-25,4.1-45.7,15.8-61.4,35.9c-2.4,0-2.8-2-3.7-3.6
	c-10.4-19.4-17-40.1-21.1-61.6C61.7,193.3,61.3,190.6,62,188z M166.2,79.3c6.6,3.8,12.9,8,17,14.7c0.4,3-2.1,4.3-3.8,6
	c-10.6,10.3-20.8,20.9-28.1,33.9c-3.3,5.8-6.1,11.8-8.3,18c-0.7,1.8-1,3.9-2.9,5.1c-11.2-5.6-22.8-9.3-35.4-10.4
	c-9.1-0.8-17.7,0.8-27,2.4c2.3-5.8,5.5-10.6,9.5-14.9c8.2-9.7,18.1-17.5,28.1-25.1c13.2-10,27.2-19,42.1-26.4
	C160.2,81.2,163.1,80,166.2,79.3z M231.1,86.1c-2.3-5.6-2.4-11.2-0.3-16.8c7.7-10.2,17.6-16.9,30.2-19.4c11.1-2.3,21.4,0.3,31.3,5.3
	c1,0.5,1.7,1.7,3.1,1.2c4.6,3.8,8.2,8.3,10.9,13.6c3.8,6.6,3.8,13.7,2.9,20.9c-0.7,6.1-4.5,10.2-9.5,13.4c-2.6,1.6-5.4,1.5-8.2,0.5
	c-1.9-0.7-3.7-1.5-5.4-2.7c-6.7-4.7-13.6-5.9-21.7-3.4C252.5,102.1,236.8,96.7,231.1,86.1z M340.1,425c2.8-15,19.7-25.4,34.1-20.7
	c3.9,1.3,7.6,3.3,11.4,5.1c8.6,4,14,2.5,18.9-5.7c1.8-3.1,3.1-6.6,4.7-9.9c1.1-2.3,1.6-5.1,4.1-6.6c2-0.1,2,1.5,2.1,2.7
	c1,14.7-0.2,28.8-9,41.5c-16.1,23.3-49.4,22.7-64.5-1.3C340.8,428.5,339.7,427,340.1,425z M454,240c-3.3-6.5-6-13.2-10.8-18.8
	c-10.3-12.2-23-17.5-39-15.5c-4.8,0.6-9.3,2.3-14.1,2.4c-0.6-3.8-1.4-7.5-3.1-10.9c0.6-2.2,2.6-2.9,4.3-3.8c13-6.5,26.5-7.4,40.5-4
	c3.5,0.8,6.4,2.6,9.2,4.7C453.3,207.2,457.8,222.4,454,240z M196,86.3c-4.2-4.5-8-9.3-12.8-13.1c10.4-6.3,21.8-8.2,33.8-8
	c-0.7,3.6-1.3,7.3-2,10.9C209.3,80.6,202.6,83.3,196,86.3z"/>
<path :style="{fill:'rgba(255, 182, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M375.2,209.1c-0.5,6.9-4,10.1-10.9,10.1c-12.8-0.1-25.6-1.3-38.2,1.8c-7.7,1.8-15.1,4.3-21.6,8.7
	c-3.6,2.5-6.8,3.5-10.8,1.5c-1.7-0.9-3.7-1.3-5.6-2c-0.3-2.7,1.9-3.8,3.6-4.9c23-14.9,47.7-22.7,75.3-18.3
	C369.9,206.5,373,206.5,375.2,209.1z M284,411.2c5,0.1,9.3,2.9,14.5,3.2c8.1,0.4,16-0.1,23.6-3.1c5,0.9,7.1,3.1,4.5,8.4
	c-1.7,3.6-1.7,7.7-1.6,11.7c0.1,2.6-1.1,3.3-3.4,2.4C307.8,428.3,294.5,422,284,411.2z M109,424.2c1-5-1.8-9.4-2.6-14.2
	c-1.6-9.9-2.5-19.9-0.1-29.6c2.3-9.3,7.1-17.2,17-20.5c11-3.7,20.5-1.4,28.8,6.6c-3,2.9-6.3,2.4-9.5,0.5c-12.5-7.3-21.5-5-28.8,7.8
	c-7,12.3-5.9,25.2-1.9,38c1.1,3.6,3,7,4.5,10.5c0.6,1.4,2.4,2.9,0.4,4.4c-1.5,1.2-3.2,0.4-4.7-0.4
	C110.9,426.4,109.8,425.5,109,424.2z M169,451.2c2-2.4,0.9-5,0.8-7.6c-1-14.8-2.1-29.7,2.6-44.2c5.6-17.4,19.5-21.2,35.4-19.9
	c2.8,0.2,5.5,2.7,8.4,0.6c2.2,3.7,0.4,6.4-2.3,8.6c-2.4,1.9-5,2.1-7.8,0.1c-4.4-3.1-8.2-7.8-14.5-5.9c-7.6,2.3-12.3,7.8-15.3,14.7
	c-7.6,17.2-5.4,34.3,0.8,51.4c0.8,2.2,1.8,4.3,2.7,6.4c0.6,1.4,1,3-0.5,4.1s-2.9,0.3-4.2-0.5C172.1,457.1,170.2,454.4,169,451.2z
	 M59,356c2.7-0.6,2.6-3.2,3.6-4.9c4.6-8,9.6-15.5,17.9-20.1c7.8-4.4,15.2-3.4,22.4,1.4c2.5,1.7,5,3.3,7.4,5c-3,2.8-6,2.6-8.7-0.2
	c-3.9-4-7.4-8.5-13.9-6.9c-7.1,1.7-12.7,5.8-16.2,12.3c-5.7,10.3-6.6,21.4-4.2,32.8c0.3,1.5,1.7,3.4-0.2,4.5c-2.2,1.2-4-0.5-4.9-2.2
	C58.6,370.8,57.4,363.5,59,356z"/>
<path style="fill:#F9F8F9;transform:scale(0.2)" d="M295.4,56.3c-0.8,1.2-1.7,0.6-2.6,0.1c-24.7-12.4-46.3-4.6-60.4,12.4c-0.5,0.6-0.9,0.9-1.7,0.4
	c6.1-19.4,26.7-29.2,47.4-22.7C284.6,48.6,290.2,52,295.4,56.3z"/>
<path style="fill:#F9F8F8;transform:scale(0.2)" d="M217,65.2c-11.4,1.9-22.8,4.2-33.8,8c-1.6-1.1-3.2-2.2-5-3.4c10.4-4.9,32.7-10,40.5-9.3
	C218.1,62.1,217.5,63.6,217,65.2z"/>
<path style="fill:#FAF7F8;transform:scale(0.2)" d="M321,201.9c-16.2,5.5-30.9,13.6-43,25.9c-4,0.2-2.2-1.5-0.9-2.9c6.1-6.9,13.3-12.5,21.5-16.6
	c6.5-3.3,13.2-6.1,20.4-7.3C319.8,200.8,321.1,200,321,201.9z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M97.1,277.1c21.6,30,50.9,48.4,86.6,57c17.1,4.1,34.2,7.1,51.8,8.3c21.7,1.5,42.6-0.7,63.1-7.6
	c12.7-4.3,24.3-10.7,34.2-19.8c1-0.9,1.9-1.9,3.4-1.8c-0.4,26.2-12.5,45.9-33.8,60.5c-3.6,2.5-3.8-0.6-4.7-2.4
	c-4.2-8.7-11.1-13.5-20.7-14.2c-10.5-0.8-18.9,3.1-24.4,12.3c-3.3,5.6-3.7,11.6-2.2,17.8c0.4,1.8,0.6,2.8-1.7,2.9
	c-5.1,0.2-10.3,0.6-15.4,0.9c-1.4,0.1-2.8,0.4-2.6-2.2c1.1-17.6-7.1-28.9-24.2-33.6c-11.6-3.2-22.8-2-33.1,4.2
	c-3.4,2-4.2,1.7-5.5-2.3c-4.1-12.1-14.5-16.7-25.6-19.9c-4.2-1.2-8.5-1.3-12.9-1.1c-1.9,0.1-3.1-0.2-3.3-2.6
	C125,320,108.2,307.1,94.3,306c-7.8-0.6-8.1-1-6.4-8.8C89.5,289.9,92.2,283,97.1,277.1z M340.1,425c4.9,8.1,11,14.9,19.8,19
	c12.9,6,29.6,3.2,39.7-6.9c14.1-14,16.5-31.3,13.6-50c3.2-2.4,5.4-0.1,7.2,1.9c5.1,5.4,7.6,12.1,8.6,19.3
	c4.2,28.9-17.1,53.8-44.3,58.6c-21,3.7-40.6-8.5-45-27.7C338.6,434.5,338.3,429.7,340.1,425z M454,240c-1.2,7.5-5.1,13.6-9.9,19.2
	c-1.9,2.2-4.3,4.4-7.7,3.7c-3.4-0.7-3.8-3.8-4.6-6.5c-1.2-4-2.1-8-3.5-11.9c-3.2-8.8-8.7-11.5-17.6-8.8c-5.7,1.7-11.3,3.8-17.4,3.5
	c-5.8-0.2-10.5-2.7-15.1-5.8c-1.6-1.1-2.4-2.1-0.1-3.6c7.9-5.1,11.4-12.7,12-21.8c17.7-8.1,39.8-4.8,53.1,11
	C448.3,225.2,452.9,231.8,454,240z M62,188c4.3,24.3,11.1,47.8,22.9,69.7c0.6,1.1,1.4,2.2,2.1,3.3c-3.2,5-6.3,10.2-8.7,15.7
	c-2.4,5.5-3.8,11.2-5.1,18.2c-5.8-10.1-8.9-19.8-11.5-29.8c-6.3-24.7-6.6-49.6-0.7-74.4C61.3,189.8,61.7,188.9,62,188z M231.1,86.1
	c2.2,2,4.3,4.1,6.7,5.8c8.6,6.2,18.3,8.2,28.3,4.8c7.3-2.4,13.2-0.5,19.2,3.1c4.2,2.5,8.4,6.4,13.7,3.2c5.8-3.5,9.2-8.7,9.2-16
	c0-5.8-0.6-11.5-2-17.2c14.1,18.9,9.2,51.2-9.9,64.4c-5.5,3.8-9,2.1-10.4-4.4c-1-4.8-0.4-9.6-1.6-14.3c-2.4-9-7.8-13-17-10.8
	c-12,2.8-22.4,1-30.8-8.6C233.9,93.1,231.9,89.9,231.1,86.1z M140.1,157c5.4-18.5,15.2-34.3,28.6-48c4.8-5,9.7-10,14.5-15
	c4.7,6,4.8,6.1-0.5,10.9c-16,14.6-29.1,31.4-37,51.8C143.9,161.3,142,158,140.1,157z M196,86.3c5.6-4.8,12.4-7.4,19-10.2
	c1.1,4.5-0.5,7.5-4.9,9.2c-2.1,0.8-4,2.3-5.9,3.5C198.9,92,199,92,196,86.3z"/>
<path style="fill:#D7B2C2;transform:scale(0.2)" d="M321,201.9c-0.7-0.3-1.4-0.7-2-1c5.2-2,10.5-2.8,16.1-2.8C330.3,199.4,325.6,200.7,321,201.9z"/>
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
                                    <button :style="{background:'rgba('+getterScorpioBg1+')'}" @click="ShowElement(getterScorpioBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterScorpioBg2+')'}" @click="ShowElement1(getterScorpioBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterScorpioBg3+')'}" @click="ShowElement2(getterScorpioBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterScorpioBg4+')'}" @click="ShowElement3(getterScorpioBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterScorpioBg5+')'}" @click="ShowElement4(getterScorpioBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterScorpioBg6+')'}" @click="ShowElement5(getterScorpioBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterScorpioBg7+')'}" @click="ShowElement6(getterScorpioBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Scorpio= [
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
            var randomNumber = Scorpio[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Scorpio[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Scorpio'){
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
                getterScorpioBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Scorpio') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScorpioBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Scorpio') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScorpioBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Scorpio') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScorpioBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterScorpioBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScorpioBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScorpioBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Scorpio',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            background5:  background5Clone,
                            background6:  background6Clone,
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