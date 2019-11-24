<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(228, 179, 190, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'"  d="M236.7,611.9c-0.6-26.4,1.1-52.8,1.6-79.2c0.3-15.5-0.2-31,1-46.4c0.9-11.1,0.8-22.2,0.9-33.3
	c2.2-1.7,4.6-0.7,6.9-0.3c36.8,7.3,73.6,14.6,110.4,22c4.9,1,8.1,2.8,8.1,8.1c0.8,43,1.6,86,2.4,129
	C324.3,611.9,280.5,611.9,236.7,611.9z"/>
<path :style="{fill:'rgba(242, 89, 124, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M231,357.1c-5.8-8.8-5.2-18.7-5.1-28.6c0.1-14.7-0.4-29.4,0.1-44c0.4-13-4.2-23.1-14.2-31.1
	c-5.2-3-8.2-8.1-11.2-13c-7.6-12.2-13.8-25.1-16.7-39.3c-0.8-3.8-2.5-6.6-5.7-8.5c0.7-3.8,3.6-4.4,6.7-4.4c22.5,0,45,0,67.5,0
	c5.1,0,6.6,2.5,7.3,7.3c3.1,20,14.7,32.2,32.8,35.2c20.7,3.4,38.6-3.7,47.3-18.9c3-5.3,4.8-11,5.4-16.9c0.5-4.8,2.6-6.7,7.2-6.7
	c22.5,0,45,0,67.5,0c3.3,0,5.9,1,6.8,4.5c-3.1,1.8-4.7,4.3-5.5,7.9c-3.3,15.3-9.6,29.4-18.5,42.3c-1.8,2.7-2.6,5.8-4.4,8.4
	c-0.1,37.2-0.2,74.4-0.2,111.7c0,13.7,0,27.5,0,41.2c0,8.7-2.3,12.3-10.5,15.1c-4.3,1.5-8.9,2-13.3,3c-8.6,3.6-25.1,0.4-31.3-6
	c-3.7-3.8-4-8.4-4-13.3c0-33.2,0-66.4,0-99.7c0-14.6,0.3-12.7-12.6-10.2c-14.2,2.8-28.5,2.1-42.8,0.9c-7.4-0.6-7.8-0.7-7.8,6.9
	c0,24.3,0,48.5,0,72.8c0,3.2,0.4,6.4-1,9.4c-0.9,1.6-2.4,2-4,2.1c-7.5,0.4-15,0.4-22.5,0c-3-0.1-5.3-1.8-6.7-4.3
	C237.4,373.2,232.6,365.8,231,357.1z"/>
<path :style="{fill:'rgba(85, 19, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M339.7,178c-5.1-1.6-7.7,1.4-9.7,6.2c-3.2,7.6-8.8,12.9-16.2,16.7c-15.6,8-33.1-2.8-38.5-15.8
	c-2.6-6.2-6.3-8.4-12.6-7.4c-4.3,0.7-6.1-0.8-5.6-5.5c1.8-16.6,1.1-33.4,4.8-49.7c3.4-15.2,10.3-27.9,25.4-34.6
	c4.2-1.9,8.4-2.6,12.5,0.1c1.9,1.3,3.6,1.3,5.5,0.1c5.5-3.3,10.6-1.6,15.6,1.4c15.2,9.1,21.4,23.6,23.3,40.2
	c1.6,14.2,2.1,28.5,3.6,42.7C348.5,179.8,343.6,177.4,339.7,178z"/>
<path style="fill:#EED8CE;transform:scale(0.2)" d="M273.7,383.6c-0.7,1.5-3.5,1-3.4,2.9c0.6,6.7-4.1,5-7.8,5.5c-14.1,1.8-26.1,0.1-30-16.5
	c-0.1-0.6-1.2-1-1.8-1.5c0.1-5.7,0.1-11.3,0.2-17c3.9,7.5,7.8,15,11.6,22.6c1.5,3,3.4,4.4,6.9,4.3
	C257.6,383.6,265.6,383.7,273.7,383.6z"/>
<path :style="{fill:'rgba(255, 181, 153, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M118.4,197.2c-19.5,0-39.1,0-59.4,0c4.5,7.7,9.9,13.4,15.6,18.9c15.9,15.1,36.9,18.8,54.6,9.8
	c0.2-1.9-0.6-3.4-1.3-5.1C124.6,213,121.5,205.1,118.4,197.2z M485.2,197.2c-5,9.1-9,18.7-11.9,28.7c17.8,9,38.9,5.3,54.6-9.8
	c5.7-5.5,11.6-10.9,15.3-18.8C523.3,197.2,504.3,197.2,485.2,197.2z M334.7,134.4c0.5-7.3-3-12.2-8.9-15.6c-4.1-2.3-9-3.2-12.5-6.7
	c-1.7-1.7-2.9,0.1-3.9,1.2c-3.7,4.6-8.8,6.6-14.1,8.5c-4.7,1.7-9.3,3.4-13.9,5.4c-7.6,3.3-11.2,8.6-11.7,17.5
	c-0.5,10.2,2.2,18.1,9.9,24.6c1.2,1,2.1,2.4,3,3.7c2.4,3.7,5.4,4.6,9.6,2.8c5.2-2.1,10.5-4.8,16.4-1.4c6.3,3.7,10.5,1.9,15.5-3.8
	c7.1-8.1,13.5-15.7,10.5-27.3C334.7,140.4,334.5,137.4,334.7,134.4z"/>
<path style="fill:#FDC5C8;transform:scale(0.2)" d="M293,180.9c6.6-3.4,12.2-3.3,17.9-0.6C305,183.8,303.3,183.9,293,180.9z"/>
<path :style="{fill:'rgba(255, 198, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M350.7,419.1c-7.9-3.1-10-6.3-10-14.8c0-37-0.1-74,0-111c0-4.1-0.5-5.6-5.3-4.2
	c-18.2,5.2-36.9,5.5-55.5,2.4c-6.2-1-6.3,1-6.3,5.7c0.1,28.8,0.1,57.7,0,86.5c-1.3,1.2-3.9,0.1-4.4,2.3c-1.1,4.9-4.8,4.5-8.4,4.4
	c-2.6,0-5.2-0.3-7.7,0.1c-8.3,1.2-13.6-1.9-16.4-10c-0.9-2.7-1.8-6.3-6-6.4c0,22.2,0,44.4-0.1,66.6c0,9.7,0,9.7,9.5,12.3
	c12.8,2.4,25.5,4.8,38.3,7.4c26.2,5.3,52.4,11,78.7,16.1c4.3,0.8,7.5,1.8,8.5,6.4c0.5-1.7-1.1-5.1,2.9-4c5,1.4,5.6-1.2,5.6-5.3
	c-0.1-17.2,0-34.4,0-51.5C366.2,422,358.3,422,350.7,419.1z M178.1,192.5c-18.6,0-37.2,0-55.9,0c-3.3,0-6.5-0.1-3.9,4.7
	c-0.7,0.8-1,1.8-0.6,2.8c3.6,8.7,6.3,17.8,11.3,25.9c5.3,5.4,6.2,13.1,9.3,19.6c1.6,3.2,3,4.5,6.6,4.5c12.1-0.2,24.2,0,36.3-0.1
	c10.3-0.1,20.6-0.5,30.4,3.5c-13.2-16.4-23.1-34.5-27.1-55.3C183.9,193.8,182.1,192.2,178.1,192.5z M480,192.4
	c-17.8,0.1-35.6,0-53.3,0c-3.9-0.3-5.7,1.1-6.5,5.4c-3.2,16.6-9.9,31.8-19.8,45.5c-1.7,2.4-2.7,4.8-2.1,7.8c6.6-1.6,13.3-1.2,20-1.2
	c12.1,0,24.2-0.3,36.2,0.1c5.9,0.2,8.6-1.7,10.8-7.2c2.2-5.7,3.4-12.2,8-16.9c5.2-9,9.3-18.5,11.9-28.7
	C485.8,193.1,483.5,192.4,480,192.4z M269.3,6.7c-1.4-2.8-4.1,0.5-6.3,0.8c-1.9,0.3-2.6,1.5-1.8,3.5c1.8,4.8,3.6,9.6,5.2,14.5
	c0.4,1.3,1.1,1.8,1.9,1.8c0.7,2,1.4,4,2.1,6s1.8,1.9,3.3,1.1c1.7-0.9,4.3-0.5,5.1-2.7c-1.9-5.2-3.3-10.3-5.5-14.9
	C272.1,13.2,270.9,9.9,269.3,6.7z M338.3,6.2c-1.7-1-2.9-0.5-3.6,1.5c-1.7,4.8-3.3,9.7-5.2,14.5c-0.5,1.4-0.4,2.3,0.3,2.8
	c-0.6,1.8-1.3,3.5-2,5.3s-0.2,2.8,1.6,3c1.9,0.3,4.3,3.3,5.7,0.7c2.5-4.7,3.9-10,5.9-15.1c0-0.2-0.1-0.3-0.2-0.5
	c1-2.9,2-5.8,3.1-8.7C343.2,6.7,340.2,7.3,338.3,6.2z M375.1,30.8c1.5-1.7,0.7-2.5-0.6-3.8c-3.1-3.2-5.6-4.6-8.6,0.2
	c-2,3.2-4.8,5.8-7,8.8c-0.8,1-2.8,1.9-1.5,3.5c-0.9,1.1-1.9,2.2-2.8,3.3c-0.7,1-2.8,1.9-1.1,3.5c1.5,1.5,3.3,2.7,5.1,4.1
	c0.7-0.6,1.3-1,1.7-1.5c3-3.6,6-7.3,9.1-10.8c0.5-0.6,0.7-1,0.7-1.4C371.7,34.8,373.4,32.8,375.1,30.8z M196.6,96.4
	c4.8,0.8,9.7,1.7,14.5,2.6c0.7,0.1,1.2,0.1,1.6,0c2.4,0.4,4.9,0.9,7.3,1.3c2.5,0.4,2.8-1.2,2.6-2.9c-0.2-1.8,2.8-4.4-0.9-5.3
	c-2.4-0.6-4.9-1-7.3-1.4c-0.3-0.2-0.8-0.5-1.4-0.6c-5-1.2-10.1-1.8-15.1-2.7c-3-0.4-3.9,1.3-4.2,3.8
	C193.4,93.4,193.2,95.8,196.6,96.4z M389.9,90.9c-1.9,0.3-3.7,0.7-5.5,1.1c-3,0.7-1.1,2.9-0.8,4.4c0.3,1.5-0.7,4.2,2.4,3.8
	c2.8-0.4,5.6-0.9,8.4-1.4c4.7-0.7,9.5-1.6,14.2-2.5c3.1-0.6,2.9-2.9,2.4-5.1c-0.4-2.2-1-4.5-4.1-4c-5.1,0.9-10.2,1.6-15.2,2.7
	C390.6,90.1,390.2,90.5,389.9,90.9z M408.9,124.4c-4.9-0.8-9.8-1.7-14.6-2.6c-0.9-0.1-1.6-0.1-2.1,0.1c-1.8-0.3-3.6-0.6-5.4-0.9
	c-4.1-0.6-2.8,3-3.6,4.8c-1.2,2.6,0.8,3.1,2.6,3.5c1.7,0.3,3.4,0.7,5.1,1c0.6,0.3,1.4,0.5,2.2,0.7c4.7,0.9,9.4,1.7,14,2.6
	c3.5,0.7,3.5-2,3.8-4C411.2,127.7,412.3,125,408.9,124.4z M397.7,160.1c-4.5-2.6-8.9-5.2-13.4-7.8c-0.4-0.3-0.8-0.4-1.2-0.4
	c-1.8-1-3.6-2.1-5.3-3.1c-1.8-1-2.9,0-3.4,1.4c-0.6,1.7-3.5,3.5-1.4,5.1c1.8,1.3,3.6,2.5,5.5,3.6c0.1,0.2,0.3,0.4,0.5,0.6
	c4.8,3.5,10.1,6.2,15.4,9.3c2.7-0.6,3-3,4.2-4.7C399.5,162.5,399.5,161.1,397.7,160.1z M307.1,10.2c0-3.4,0.1-6.7,0.1-10.1
	c-3.2,0-6.4,0-9.6,0c0,5.6,0.1,11.1,0,16.7c-0.1,1.8,0.4,2.8,1.3,3.3c0,1.8,0,3.5-0.1,5.3c-0.1,3.2,1.6,3.5,4.1,3.5
	c2.4-0.1,4.8,0.3,4.6-3.5c-0.2-5.1,0-10.1,0-15.2C307.4,10.2,307.2,10.2,307.1,10.2z M231.9,64.6c-1.9-1.2-3.9-2.3-5.8-3.4
	c-0.5-0.7-1.3-0.9-1.9-1.3c-3.4-2.1-6.8-3.9-10.2-6c-2.6-1.6-4.7-3.2-7.1,0.9c-2.2,3.8-1.3,5.4,2.3,7.1c3.2,1.5,6.1,3.6,9.3,5.2
	c1.3,0.7,2.6,2.5,4.1,1.6c1.4,0.8,2.8,1.7,4.2,2.4c1.3,0.7,2.7,2.7,4.2,1.1c1.4-1.5,2.2-3.6,3.2-5.3C234,65.4,232.7,65.1,231.9,64.6
	z M244.7,34.3c-0.7-1.1-1.4-1.7-2-2.1c-1.6-1.8-3.2-3.7-4.5-5.6c-2.2-3.3-3.8-3.3-6.8-0.7c-2.9,2.5-2.9,3.9-0.4,6.5
	c2.9,3,5.3,6.4,8,9.6c0.8,0.9,1.6,2.3,2.9,1.9c1.2,1.5,2.3,3,3.5,4.4c0.9,1,1.8,2.7,3.5,1.2c1.5-1.4,3.7-2.3,4.3-4.8
	c-0.5-0.7-1-1.4-1.6-2.1C249.3,39.9,246.7,37.3,244.7,34.3z M376.3,73c0.9-0.4,1.7-0.8,2.5-1.2c3.3-1.9,6.5-4,9.8-5.7
	c0.8-0.4,1.4-0.8,1.8-1.3c1.9-1.1,3.8-2.3,5.8-3.3c2.9-1.5,3.7-3,1.8-6c-1.7-2.7-2.9-4.5-6.3-2.1c-3.6,2.5-7.5,4.4-11.2,6.7
	c-1,0.6-2.7,1.1-2.3,2.5c-1.3,0.7-2.6,1.5-3.9,2.2c-1.1,0.7-3.1,1.2-1.7,3.1C373.8,69.6,374.2,71.9,376.3,73z M226.6,149.8
	c-1.7,0.9-3.3,1.9-5,2.9c-1.1-0.1-2.2,0.1-3.3,0.7c-2.9,1.6-5.8,3.4-8.7,5c-2.7,1.6-5.5,2.4-2.8,6.9c2.6,4.3,4.7,2.8,7.5,1.1
	c1.8-1.1,3.6-2.2,5.4-3.2c1-0.2,2-0.8,3.2-1.6c3.1-1.9,6.2-3.6,9.3-5.5c0.9-0.5,2.1-0.8,1.8-2.5
	C233.8,150.1,229.9,147.9,226.6,149.8z M208.8,131.5c0.3,0,0.5-0.1,0.8-0.1c1.3-0.3,2.6-0.3,3.6-0.9c1.8-0.3,3.7-0.4,5.5-0.8
	c2.4-0.5,5.1-0.2,4.4-4.8c-0.7-4.6-3.1-4.1-6-3.6c-1.6,0.2-3.1,0.6-4.7,0.9c-1.2-0.7-2.8-0.4-4.6-0.1c-3.7,0.6-7.3,1.7-11.1,2.1
	c-2.6,0.3-3.5,1.4-3.1,3.5c0.3,4.1,0.9,7.1,6.1,5.3c2.4-0.8,5-1,7.6-1.3C207.7,131.7,208.2,131.7,208.8,131.5z"/>
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
                                    <button :style="{background:'rgba('+getterRisenChristBg1+')'}" @click="ShowElement(getterRisenChristBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRisenChristBg2+')'}" @click="ShowElement1(getterRisenChristBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterRisenChristBg3+')'}" @click="ShowElement2(getterRisenChristBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRisenChristBg4+')'}" @click="ShowElement3(getterRisenChristBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterRisenChristBg5+')'}" @click="ShowElement4(getterRisenChristBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var RisenChrist= [
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
            var randomNumber = RisenChrist[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  RisenChrist[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'RisenChrist'){
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
                getterRisenChristBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RisenChrist') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRisenChristBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RisenChrist') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRisenChristBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'RisenChrist') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterRisenChristBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterRisenChristBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
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
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'RisenChrist',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
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