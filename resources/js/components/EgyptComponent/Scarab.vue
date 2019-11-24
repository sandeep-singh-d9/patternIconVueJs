<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.6);">
                  <path style="fill:#D1781E;transform:scale(0.2)" :class="ValueId+'_color5'" d="M286.9,296c-3-2.8-5.3-6.5-9.5-7.8c-15.9,0-31.9,0-47.8,0c-2,2.3-1.8,5.2-1.9,7.9
	c-0.1,10.5,0,21,0,31.6c0,9.5,0.1,19.1-0.1,28.6c0,2.5,0.4,5.2-3.1,6.2c-8.2,2.4-12.1-0.3-12.1-8.6c0-18.9,0-37.7,0-56.6
	c0-3.1,0.4-6.4-1.9-9.1c-9.5,0-19,0-28.5,0c-3.3,6.3-2.9,12.6-0.2,19c0,24,0.3,48-0.1,72c-0.3,15.3,2.6,29.8,8.4,43.9
	c-0.7,1.4-0.2,2.7,0.5,3.9c5.1,9.1,10.2,18.2,18.7,24.8c0.4,0,0.7,0.1,1.1,0.1c2.6-2.6,1.9-5.9,1.9-9c0.1-16.7,0-33.4,0.1-50
	c0-2.4-0.7-5.3,2.4-6.7c7.2-3.2,12.8,0.3,12.8,8.3c0,20.7,0,41.3,0,62c0,3.4-0.2,6.8,1.9,9.8c5.8,4,12.1,7,19.1,8.5
	c2.8-3,1.9-6.8,1.9-10.2c0.1-44.7,0-89.5,0-134.2c0-2.4-0.1-4.8,0.2-7.2c0.2-1.9,0.9-3.3,3-3.9c8.1-2.5,12,0.2,12,8.6
	c0,46.5,0,93.1,0,139.6c0,3.8-0.3,7.5-1.8,11.1c0.9,0.9,2.1,1.1,3.3,1.1c9.7-0.1,19.5-0.1,29.2-0.2c2.5-3.1,1.7-6.8,1.8-10.3
	c0.1-46.1,0-92.2,0-138.4c0-2.2,0-4.4,0.1-6.6c0-3,1.3-4.9,4.3-5.7c4.7-2.1,1.7-4.8,0.1-6.5C297.7,306.5,292.4,301.1,286.9,296z
	 M430.5,378.7c-0.3-23.8-0.1-47.6,0-71.4c2.6-6.4,3.2-12.8-0.3-19.1c-9.5,0-19,0-28.4,0c-2,2.3-1.9,5.1-1.9,7.9
	c-0.1,10.5,0,21,0,31.6c0,9.5,0.1,19.1-0.1,28.6c0,2.5,0.4,5.2-3.1,6.2c-8.2,2.4-12.1-0.3-12.1-8.6c0-18.9,0-37.7,0-56.6
	c0-3.1,0.4-6.4-1.9-9.1c-15.9,0-31.8,0-47.7,0c-10.4,7.1-18.2,17-26.9,25.9c-1.9,2-0.7,3.6,1.6,4.4c5.2,1.4,4.2,5.7,4.2,9.3
	c0.1,47.1,0,94.1,0.1,141.2c0,3.5-0.8,7.2,1.8,10.3c5.4,0.1,10.7,0.3,16.1,0.1c5.5-0.2,11,1.1,16.4-1c-1.6-4-1.8-8.1-1.8-12.3
	c0-45.7,0-91.5,0-137.2c0-2.2-0.1-4.4,0.2-6.6c0.2-1.5,0.8-2.5,2.3-3.1c7.3-2.9,12.6,0.4,12.7,8.1c0,1.8,0,3.6,0,5.4
	c0,43.9,0,87.9,0,131.8c0,3.5-0.8,7.2,2,10.2c6.9-1.6,13.3-4.4,19.1-8.5c1.4-2,1.9-4.3,1.9-6.8c0-3.2,0-6.4,0-9.5
	c0-18.9,0-37.7,0.1-56.6c0-2.4-0.7-5.4,2.2-6.9c6.6-3.6,13.1,0.2,13.1,7.8c0,16.5,0,33,0,49.4c0,2.9-0.5,6,1.9,8.4
	c0.4,0,0.7,0,1.1-0.1c8.1-6.4,13.4-14.9,18.3-23.7c0.8-1.5,1.8-3.1,0.9-5C428.2,408.9,430.7,394.1,430.5,378.7z"/>
<path style="fill:#FD9127;transform:scale(0.2)" :class="ValueId+'_color3'" d="M430.5,269.1c-1.7-10.6-4.6-20.8-8.3-30.9c-3.9-12.3-12-21.6-21.1-30.2c-2.5-2.4-4.5-6.3-9-6
	c-8.6-7-18.9-10.7-28.7-15.5c-6-4.7-13.4-5.1-20.4-5.2c-24.6-0.5-49.2-0.5-73.8,0c-7,0.1-14.3,0.5-20.4,5.2
	c-10,4.5-20.1,8.6-28.7,15.5c-2.1-0.6-3.3,0.9-4.6,2c-8.9,7.2-16,15.9-21.9,25.6c-1.6,2.7-3.5,5.3-3.5,8.7c-4,9.9-6.5,20.3-8.3,30.8
	c-3,6.5-2.6,12.9-0.2,19.4c1.9,1.4,4.1,1.5,6.2,1.5c7.5,0,15,0.2,22.6-0.1c6.5,0.2,12.9,0.2,19.4,0c15.5-0.1,31,1,46.5-0.6
	c3.5-1.8,4-5.3,4.9-8.5c4.5-16.7,9.7-33.2,14.2-50c0.7-2.8,1-6.1,4.3-7.5c7.6-3.4,15.2,0.2,17.4,8.2c4.4,16.5,9.3,32.9,14,49.4
	c0.9,3.2,1.4,6.7,5,8.4c15.5,1.5,31,0.5,46.5,0.6c6.5,0.2,12.9,0.2,19.4,0c5.7,0.3,11.5,0.2,17.2,0.1c3.9-0.1,8,0.8,11.5-1.6
	C433,282,433.4,275.5,430.5,269.1z M255.8,168c9.4-2.1,18.9-2.4,28.5-2.3c11.7,0.2,23.5,0.1,35.2,0c12.7-0.1,25.5-0.3,38.1,2.5
	c1.9,0.4,4,0.8,5.7-0.7c0.1-3.8,0.2-7.5,0.2-11.3c0-13.7-7.7-21-21.5-21.1c-9.1-0.1-18.2,1-27.2-0.8c-6.1,1.5-12.2,1.1-18.3-0.1
	c-1.9,1.5-4.2,0.9-6.3,0.9c-7.6,0.1-15.1-0.1-22.7,0.1c-10.4,0.3-18.4,8.2-18.7,18.6c-0.1,4.6,0.1,9.1,0.1,13.7
	C251.1,169.3,253.5,168.5,255.8,168z"/>
<path style="fill:#27825A;transform:scale(0.2)" :class="ValueId+'_color2'" d="M375.7,517.7c-23.1,0-46.2,0-69.3,0c-22.1,0-44.2,0-66.3,0c-11.2,0-11.2,0-9.4,11.3
	c6.8,43.2,46.9,71.8,89.5,63.9c32.7-6,58.5-33.7,62.4-66.9C383.4,518,383.1,517.7,375.7,517.7z M199.3,194.8
	c-8.4,7.3-14.1,16.7-21,25.2c3,6.7,7.7,12.3,11.8,18.3c7.8-13.9,17.1-26.6,30-36.3c-3.6-4.7-7.2-9.5-10.9-14.2
	C205.2,189,202.4,192.1,199.3,194.8z M422.1,238.2c4.2-5.9,8.7-11.6,11.8-18.2c-4-5.3-7.7-10.8-12.1-15.8
	c-5.5-6.3-10.8-13-18.9-16.4c-3.6,4.7-7.2,9.5-10.9,14.2c4.2,3.9,8.6,7.5,12.7,11.6C411.9,220.9,416.5,229.9,422.1,238.2z
	 M182,288.2c-0.1-6.4-0.1-12.7-0.2-19.1c-6.4,0.2-12.9,0.8-19.2,2.2c0.1,11.9,0.1,23.9,0.2,35.8c6.3,0,12.7,0.1,19,0.1
	C181.8,300.9,181.9,294.6,182,288.2z M430.5,269.1c-0.1,6.4-0.2,12.7-0.3,19.1c0.1,6.4,0.2,12.7,0.3,19.1c6.3-0.1,12.7-0.1,19-0.2
	c0.1-11.9,0.1-23.9,0.2-35.8C443.3,269.8,436.9,269.4,430.5,269.1z M174.6,435.1c1.3,2.2,2.4,4.5,3.9,6.6
	c5.2,7.4,9.3,15.5,16.7,21.2c4.7-3.6,9.5-7.3,14.2-10.9c-6.9-9.2-14.4-18.1-19.2-28.7C184.7,426.8,179.2,430.4,174.6,435.1z
	 M412.2,439.9c-2.8,4.3-7.4,7.1-9.4,12c4.7,3.6,9.5,7.3,14.2,10.9c2.6-1.6,4.4-3.9,6.2-6.2c5.4-6.8,9.6-14.3,14.4-21.5
	c-4.6-4.8-10.2-8.3-15.6-12C419.2,429,415.8,434.5,412.2,439.9z"/>
<path style="fill:#40D694;transform:scale(0.2)" :class="ValueId+'_color1'" d="M296.5,134.2c-26.7-4.1-47.5-28.2-47.7-55.3c-0.2-28.4,19.6-52.8,46.6-57.4
	c31.1-5.3,60,13.6,66.8,43.6c6.7,29.9-11.1,59.5-41,68c-2.1,0.6-4.3,0.8-6.4,1.2C309.6,138,302,138,296.5,134.2z M403,187.8
	c10.7,9,20.3,19.1,27.9,31c0.6,1,1.6,1.7,3,1.2c0.3-0.2,0.7-0.4,0.9-0.7c20.4-30.4,40.7-60.9,61-91.4c2.9-4.4,2.1-11.3-1.5-15.3
	C481.6,98.1,469,83.5,456.2,69c-7.9-9-15.9-17.8-23.7-26.9c-2.9-3.4-6.6-2.9-9.9-2.3c-3.7,0.7-1.8,4.3-1.8,6.6
	c-0.2,11.9-0.1,23.9-0.2,35.8c0,3.1,0.6,5.6,3,8c7.4,7.2,14.5,14.8,21.8,22.1c5,5,5.6,10.9,1.3,16.8
	C432.3,148.6,417.6,168.2,403,187.8z M166.5,112.1c7.2-7.2,14.3-14.4,21.6-21.5c2.3-2.2,3.4-4.5,3.4-7.8c-0.2-12.3,0-24.7-0.1-37
	c0-2,1.3-5-1.4-5.8s-6-1.2-8.6,0.6c-1.3,0.9-2.3,2.2-3.3,3.4c-19.9,22.7-39.8,45.5-59.8,68.3c-4.3,4.9-4.8,11.2-1.1,16.7
	c8.7,13.1,17.3,26.2,26.1,39.3c11.6,17.3,23.4,34.6,35.1,51.8c2.9,0.5,3.6-2,4.8-3.6c2-2.7,3.9-5.4,5.9-8.2
	c5.7-7.9,13.4-13.8,20.3-20.5c-14.7-19.6-29.3-39.1-44-58.7C161,123.3,161.5,117.1,166.5,112.1z M497.2,480.5c0-0.9-1.2-2-2.1-2.7
	c-19.1-14.3-38.3-28.4-57.4-42.7c-0.8-0.4-1.6-0.2-2,0.5c-5.6,9.5-12.3,18.1-18.6,27.2c8.8,7.1,17.6,14.3,26.4,21.3
	c7.7,6.1,8.4,10.8,2.8,19.2c-10.8,16.2-21.6,32.5-32.5,48.6c-1.9,2.8-2.2,4.9-0.6,8c5,9.5,9.7,19.2,14.5,28.8
	c1.4,2.8,2.2,5.7,6.6,5.6c4-0.1,6.4-1.1,8.6-4.8c17.2-29.1,34.6-58.1,52-87C499.2,495.5,496.7,487.9,497.2,480.5z M165.6,502.9
	c-5.2-7.8-4.3-12.8,3.1-18.7c8.9-7,17.6-14.2,26.4-21.3c-6.1-9-13-17.3-18.5-26.7c-0.4-0.7-1.2-1-2-1.1
	c-19.1,14.2-38.3,28.4-57.4,42.7c-0.9,0.7-2.1,1.8-2.1,2.7c0.4,7.2-2.2,14.7,1.9,21.6c17.8,29.7,35.6,59.3,53.4,88.9
	c3,5,10.6,4.6,13.2-0.6c5.1-10.1,10-20.3,15.3-30.4c1.6-3.1,1.3-5.2-0.6-8C187.4,535.7,176.5,519.2,165.6,502.9z M554.1,372.2
	c-8.8-29.5-17.7-58.9-26.5-88.4c-1-3.4-2.4-5.2-6.3-5.6c-23.9-2.1-47.8-4.6-71.7-6.9c-1.5,1.3-1.8,3-1.9,4.8
	c-0.3,8.7-0.2,17.4,0,26.1c0,1.8,0.4,3.6,1.7,4.9c14.3,0.1,28.6,0.2,43,0.1c3.1,0,5.1,0.4,6.1,3.9c5.5,19.9,11.1,39.7,16.9,59.5
	c0.9,3,0.2,4.7-1.5,6.9c-7.8,10.3-15.4,20.8-23.3,31c-2.2,2.8-3.1,5,0.3,7.2c3.1,2.1,4.3,8,10.4,3.8c15.5-10.8,31.4-21,47.1-31.5
	C555.3,383.4,556.6,380.4,554.1,372.2z M121.7,408.7c-8-10.4-15.7-21-23.7-31.4c-1.6-2.1-2.1-3.8-1.3-6.4
	c5.7-19.4,11.3-38.9,16.7-58.4c1.1-4,2.9-5.2,7-5.2c14.1,0.2,28.3,0,42.4-0.1c3.1-11.8,2.8-23.6,0.2-35.4c-0.2-0.8,0,0.3-0.4-0.4
	c-5.5,0.4-11.1,0.8-16.6,1.3c-18.6,1.9-37.1,3.9-55.7,5.6c-3.1,0.3-4.4,1.5-5.3,4.4c-8.9,29.9-18,59.7-27,89.6
	c-2.3,7.7-0.8,11.4,6,15.9c14.4,9.6,28.8,19.2,43.2,28.8c7.3,4.9,7.1,4.7,13.9-1.2C124.1,413.3,124,411.7,121.7,408.7z M307.3,316.8
	c-0.8,0-1.6,0-2.3,0c-7-8.7-15.3-15.9-23.1-23.8c-1.5-1.5-2.9-3.2-4.4-4.8c5.8-20.4,11.7-40.7,17.3-61.1c1.2-4.3,3.1-6,7.8-6
	c13.6,0.2,13.3,0,17,13.4c4.9,17.9,10.2,35.8,15.3,53.6C325.7,297.7,316.5,307.2,307.3,316.8z"/>
<path style="fill:#5053D6;transform:scale(0.2)" :class="ValueId+'_color4'" d="M307.3,316.8c-0.8-0.6-1.6-0.6-2.3,0c-3,1.2-8.5-2.8-8.5,4.6c0.2,52.6,0.1,105.3,0.2,157.9
	c6.3,0,12.6,0,18.9,0c0-51.2,0.1-102.5,0.1-153.7C315.7,317,315.7,317,307.3,316.8z M267.9,328.8c0-12,0-11.8-12.3-12.1
	c-5.5-0.2-6.9,1.4-6.9,6.9c0.2,50.3,0.1,100.7,0.1,151c4.9,2.2,10.2,3.2,15.5,3.7c5.1,0.2,3.7-3.7,3.7-6.3
	C267.9,424.4,267.9,376.6,267.9,328.8z M349.6,316.8c-4.3,0-5.3,1.4-5.3,5.5c0.2,16.5,0.1,33,0.1,49.5c0,33.6,0,67.3,0,100.9
	c0,2.6-1,6,3.7,5.7c5.4-0.5,10.6-1.4,15.5-3.7c0-48.2,0-96.3-0.1-144.5C363.5,316.6,363.5,316.7,349.6,316.8z M363.4,186.5
	c0-6.3,0-12.7-0.1-19c-12.2-2.9-24.5-4-37-3.7c-11.3,0.3-22.6,0.2-33.9,0c-14.6-0.2-29.2-0.1-43.5,3.7c0,6.3,0,12.7,0,19
	C287,180.9,325.2,180.9,363.4,186.5z M216.1,383.7c-4.4,0-5.8,1.1-5.8,5.6c0.2,20.9,0.1,41.8,0,62.7c5.8,5.6,11.8,10.8,19.2,14.2
	c0-23.1,0-46.1,0-69.2C229.6,383.6,229.7,383.8,216.1,383.7z M388.4,383.7c-4.9-0.1-5.9,1.6-5.9,6.1c0.2,25.5,0.1,50.9,0.1,76.4
	c7.4-3.3,13.4-8.6,19.2-14.2c0-18.3-0.1-36.6-0.1-54.9C401.7,383.7,401.7,384,388.4,383.7z M229.6,288.2c-6.4,0-12.7,0-19.1,0
	c0,21.1,0,42.2,0,63.3c0,13.4,0,13.1,13.4,13.4c5.1,0.1,5.8-1.8,5.8-6.2C229.5,335.1,229.6,311.7,229.6,288.2z M396.1,364.8
	c5.1,0.1,5.8-1.8,5.8-6.2c-0.2-23.5-0.1-47-0.1-70.4c-6.4,0-12.8,0-19.2,0c0,21.1,0,42.2,0,63.3
	C382.6,364.8,382.6,364.5,396.1,364.8z"/>
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
                                    <button :style="{background:'rgba('+getterScarabBg1+')'}" @click="ShowElement(getterScarabBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterScarabBg2+')'}" @click="ShowElement1(getterScarabBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterScarabBg3+')'}" @click="ShowElement2(getterScarabBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterScarabBg4+')'}" @click="ShowElement3(getterScarabBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterScarabBg5 +')'}" @click="ShowElement4(getterScarabBg5 )" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterScarabBg6+')'}" @click="ShowElement5(getterScarabBg6)" :class="this.ValueId+'_color6btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterScarabBg7+')'}" @click="ShowElement6(getterScarabBg7)" :class="this.ValueId+'_color7btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterScarabBg8+')'}" @click="ShowElement7(getterScarabBg8)" :class="this.ValueId+'_color8btn'"></button> -->
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
        var Scarab= [
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
            var randomNumber = Scarab[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Scarab[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Scarab'){
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
                getterScarabBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Scarab') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScarabBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Scarab') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScarabBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Scarab') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScarabBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterScarabBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScarabBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScarabBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterScarabBg8: {
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
                    var background7Clone =tempArrayClone.background7 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'Scarab',
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