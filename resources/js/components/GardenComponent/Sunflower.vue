<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.5);">
                   <path style="fill:#008000; transform:scale(0.2)" :class="ValueId+'_color5'" d="M327.5,541.6c15.2-19.9,34.3-34.2,58.5-41.2c10.2-3,20.5-4.5,31.1-4.5c40.9,0.1,81.8,0.1,122.6-0.1
    c4.6,0,5.7,1,5.7,5.7c0.1,56.3-34.3,99.6-88.9,111.5c-4.4,1-9,1.7-13.5,1.8c-45.2,0.1-90.4,0-135.6,0c-3.3-5.4-1.9-11.3-1.5-16.9
    c0.9-13.2,3.8-26.1,9.8-38.1C319.1,553.3,321.2,546,327.5,541.6z"/>
<path style="fill:#33BB00; transform:scale(0.2)"  :class="ValueId+'_color4'" d="M317.4,558.9c-7.5,17.8-11.1,36.3-9.9,55.7c-38.8,0-77.7,1.4-116.4-0.3
    c-59-2.6-105.1-55.7-101.8-114.8c0.2-3,1-3.8,3.9-3.8c44,0.1,88-0.9,131.9,0.5c32.1,1,58.4,16.1,78.7,41.1c1.2,1.4,2.4,2.8,3.5,4.2
    C312.8,546.1,316.2,551.8,317.4,558.9z"/>
<path style="fill:#FEE500; transform:scale(0.2)" :class="ValueId+'_color2'" d="M233.5,123c-3.5-8.4-6.9-16.7-10.5-25.1c-0.9-2.2-1.2-4.1-0.2-6.5c4.5-10.6,9-21.2,13.1-32
    c1.3-3.4,2.9-3.5,5.9-2.2c10.4,4.5,20.9,8.8,31.3,13.1c2,0.8,3.6,1.8,4.4,3.9c2.9,7.5,5.9,14.9,8.8,22.4c3.2,1.7,4.1,5,5.4,8
    c2.2,4.9,4.2,9.9,5.9,14.9c1.4,4,3.6,7.3,7.4,9.5c-0.4,2.9-2.9,2.5-4.8,2.8c-17.6,2.6-33.7,8.8-48.5,18.7c-1.9,1.2-3.7,2.6-6.2,2.4
    c-4.7-3.2-4.9-8.8-7-13.3C236.2,134.5,233.2,129.2,233.5,123z M222.4,319.6c0.3-2.7-1.3-4.7-2.7-6.7c-9.7-14.9-16.1-31-18.5-48.6
    c-0.2-1.7-0.1-3.9-2.7-4.2c-2,3.2-4.8,5.3-8.5,6.7c-6,2.3-11.9,4.8-17.8,7.2c-2.5,1-5.1,1.9-6.2,4.7c-7.4,3-14.9,6-22.3,8.9
    c-2.1,0.8-3.1,2.4-3.9,4.4c-4.3,10.5-8.6,20.9-13.1,31.3c-1.3,3-1.2,4.6,2.2,5.9c10.5,4.1,21,8.5,31.4,12.9c2.5,1,4.5,1.2,7,0.1
    c8.3-3.6,16.7-7,25.1-10.5C203.4,330.2,213.3,325.9,222.4,319.6z M412.4,176.2c-0.4,2.5,1,4.4,2.3,6.2c9.8,13.9,15.5,29.4,18.6,46
    c0.4,1.9,0.1,4.3,2.7,5.1c7.4-4,15.2-7,23-10.2c3.5-1.5,7.5-2.4,9.7-6.1c7.4-2.9,14.9-6,22.3-8.8c2.4-0.9,3.3-2.9,4.2-5
    c4.2-10.3,8.3-20.6,12.9-30.7c1.6-3.6,0.5-4.9-2.8-6.2c-10.1-4-20.2-8.2-30.2-12.5c-3.1-1.4-5.8-1.2-8.8,0.1
    c-7.9,3.5-15.9,6.7-23.9,10.1C431.4,165.6,421.6,170.1,412.4,176.2z M389.1,343c-2.3-0.3-3.9,0.9-5.6,2.1
    c-14.5,10-30.4,16.3-47.8,19c-1.9,0.3-4.3-0.1-4.9,2.7c2.6,2.7,4.5,5.8,5.8,9.3c2.2,6,4.9,11.7,7.3,17.7c0.9,2.3,1.9,4.6,4.5,5.6
    c2.7,6.9,5.6,13.7,8.1,20.6c1.2,3.2,3.2,5,6.3,6.2c10.1,4.1,20.2,8.1,30.2,12.5c3.7,1.6,4.9,0.5,6.2-2.8c3.9-9.9,8-19.8,12.3-29.6
    c1.4-3.2,1.6-6.1,0.1-9.4c-3.5-7.9-6.7-15.9-10.1-23.9C399.4,362.1,395.4,352.1,389.1,343z M176.3,221.8c6.3,2.5,12.6,4.9,18.9,7.7
    c1.5,0.7,3.1,1.2,4.7,0.3c1.7-1.4,2.1-3.4,2.6-5.5c3.1-14.6,8.6-28.2,16.9-40.7c1.2-1.8,2.8-3.7,1.9-6.2
    c-8.6-5.2-17.4-9.9-27.6-10.8c-10.2-4.3-20.5-8.5-30.7-12.9c-2-0.9-3.7-1.1-5.9-0.2c-10,4.3-20.1,8.5-30.2,12.5
    c-3.1,1.2-3.5,2.6-2.2,5.5c4.2,9.8,8.2,19.7,12.3,29.6c0.8,2,1.9,3.5,4,4.3c9.9,3.9,19.8,7.9,29.8,11.9
    C172.1,219.3,173.9,220.8,176.3,221.8z M342.4,110.4c-2.3,6.7-7,12.6-6.5,20.1c1.2,1.2,2.8,1.7,4.4,2.1c15.2,3.6,29.6,9.1,42.5,17.9
    c1.5,1,3.2,2,5.2,1.2c5.5-8.4,9.6-17.4,10.8-27.6c4.3-10.2,8.5-20.5,12.9-30.7c1-2.3,1-4.2,0-6.4c-4.2-9.8-8.4-19.7-12.3-29.6
    c-1.2-3.1-2.5-3.6-5.4-2.3c-9.8,4.2-19.7,8.2-29.6,12.3c-1.7,0.7-3.2,1.4-4,3.4c-4,10.1-8.1,20.2-12.2,30.3
    C344.7,103.3,343.6,107,342.4,110.4z M289.9,391.2c3.1-7.4,6.4-14.7,9.3-22.2c0.5-1.2,0.5-2.4-0.2-3.6c-1.6-1.5-3.6-1.9-5.6-2.3
    c-14.5-3.3-28.2-8.5-40.5-17c-1.8-1.3-3.7-2.7-6.2-2c-5.7,8.4-9.6,17.5-10.8,27.7c-4.3,10.2-8.5,20.5-12.9,30.7
    c-0.9,2-1.1,3.7-0.2,5.8c4.3,10,8.5,20.1,12.5,30.2c1.2,3.1,2.5,3.5,5.4,2.2c9.8-4.2,19.7-8.2,29.6-12.3c2-0.8,3.5-1.9,4.3-4
    c3.9-9.9,7.9-19.8,11.9-29.7C287.9,393.7,289.3,392.8,289.9,391.2z M460,275.1c-6.9-3.2-14-5.9-21-8.9c-1.4-0.6-2.8-0.8-4.1,0
    c-1.3,1.4-1.8,3.2-2.2,5c-3.1,15.3-9,29.3-17.7,42.2c-1,1.5-2.1,3.1-1.4,5.1c8.4,5.6,17.4,9.6,27.6,10.8
    c10.2,4.3,20.5,8.5,30.7,12.9c2.3,1,4.2,1,6.4,0c9.8-4.2,19.7-8.4,29.6-12.3c3.1-1.2,3.5-2.5,2.2-5.4c-4.2-9.8-8.2-19.8-12.3-29.7
    c-0.8-2-1.9-3.5-4.1-4.3c-9.9-3.9-19.8-7.9-29.7-11.9C463,277.3,461.8,275.9,460,275.1z"/>
<path style="fill:#FDA800; transform:scale(0.2)" :class="ValueId+'_color1'" d="M221,177.5c-9.1-3.7-18.3-7.3-27.4-11c2.6-2.4-0.6-3.1-1.4-3.9c-6.4-6.7-12.9-13.3-19.6-19.7
    c-2.7-2.6-4.1-5.2-3.9-9.1c0.3-9.7,0.3-19.4,0-29c-0.1-4.1,0.8-5.8,5.3-5.6c9.9,0.4,19.8,0.3,29.7,0c3.6-0.1,6.1,1.2,8.6,3.7
    c5.5,5.8,11.3,11.4,17,17c1.2,1.2,2.1,3.2,4.3,3c4,9.9,8.1,19.8,12.1,29.7c0.3,1.1-0.2,2-1,2.7c-7.2,6.5-14.2,13.2-20.4,20.7
    C223.5,177,222.4,177.7,221,177.5z M244.1,340c-6.4-5.3-12-11.3-17.7-17.3c-1.2-1.3-2-3.2-4.4-2.9c-9.9,4-19.8,8.1-29.7,12.1
    c0.1,2.5-2.1,3.4-3.5,4.8c-5.6,5.8-11.3,11.5-17,17c-2.2,2.1-3.4,4.3-3.3,7.5c0.2,10.1,0.3,20.2,0,30.3c-0.2,4.5,1.4,5.5,5.6,5.3
    c9.7-0.3,19.4-0.3,29,0c3.9,0.1,6.5-1.2,9.1-3.9c6.5-6.9,13.3-13.5,20.1-20.1c0.8-0.7,1.5-3.8,3.5-1c3.6-9.1,7.3-18.2,10.9-27.3
    C247.2,342.2,245.6,341.1,244.1,340z M390.7,156.1c6.3,5.2,11.9,11.3,17.5,17.2c1.2,1.3,2,3.2,4.3,2.9c9.9-4.1,19.9-8.1,29.8-12.2
    c-0.7-2.2,1.4-2.8,2.4-3.8c6-6.2,12.2-12.3,18.3-18.4c1.9-1.8,2.9-3.6,2.9-6.4c-0.1-10.7-0.2-21.4,0-32.1c0.1-3.4-1.2-4.1-4.3-4.1
    c-10.3,0.2-20.6,0.2-30.9,0c-3.4-0.1-5.8,1-8.1,3.4c-6.6,6.8-13.3,13.5-20.1,20.1c-0.9,0.8-1.5,4.1-4,1.5c-3.7,9.2-7.3,18.3-11,27.5
    C387.7,153.9,389.3,154.9,390.7,156.1z M412.1,318.8c-7.3,7.8-15,15.3-22.7,22.8c-0.4,0.4-0.4,1.1-0.1,1.7c4,9.9,8.1,19.8,12.1,29.7
    c2.2-0.7,2.8,1.4,3.8,2.5c6.2,6.1,12.3,12.2,18.3,18.4c1.8,1.9,3.7,2.9,6.4,2.9c10.7-0.2,21.4-0.2,32.1,0c3.3,0.1,4.2-1.1,4.1-4.2
    c-0.2-10.7-0.2-21.4,0-32.1c0-2.8-1.1-4.6-3-6.4c-6.9-6.8-13.8-13.6-20.5-20.6c-0.8-0.9-4.2-1.5-1.5-4c-9.1-3.6-18.2-7.3-27.3-10.9
    C413.2,318.4,412.5,318.4,412.1,318.8z M347.2,74.4c-0.1-3.3-0.8-5.8-3.3-8.2c-7.7-7.4-15.3-15-22.7-22.7c-2.9-3.1-4.6-3.4-7.7-0.1
    c-7.2,7.7-14.7,15-22.3,22.3c-2.8,2.6-3.7,5.4-3.8,9.2c-0.3,7.3,1.6,14.6-1,21.8c4,9.4,8.2,18.8,12.1,28.3c1.3,3.2,3.3,4.5,6.6,4.2
    c9.8,3.2,19.9,1.9,29.9,1.7c0.3,0,0.6-0.5,0.9-0.8c4.1-9.6,8.1-19.2,12.2-28.8C345.9,92.3,347.5,83.3,347.2,74.4z M164.9,218.2
    c-7,0.1-14,0.2-21,0c-3.6-0.1-6.1,1.1-8.6,3.6c-7.1,7.4-14.4,14.8-21.9,21.8c-3.4,3.1-4,5.1-0.2,8.6c6.9,6.2,13.5,12.8,19.7,19.6
    c4.1,4.5,8.4,6.3,14.5,6.1c6.2-0.2,12.6-1.5,18.7,0.9c8.9-3.8,17.7-7.6,26.6-11.3c3.3-1.4,6.6-2.7,5.9-7.3
    c3.2-9.8,1.9-19.9,1.7-29.9c0-0.3-0.5-0.6-0.8-0.9c-9.6-4.1-19.2-8.2-28.8-12.2C169,219.1,166.8,218.2,164.9,218.2z M490.4,277.8
    c3.7-0.1,6.5-0.9,9.2-3.7c7.2-7.6,14.6-15.1,22.3-22.3c3.1-2.9,3.4-4.6,0.1-7.7c-7.7-7.2-15.1-14.7-22.3-22.3
    c-2.7-2.8-5.4-3.7-9.2-3.8c-7.3-0.3-14.6,1.5-21.8-1c-6.2,2.7-12.8,4.8-18.6,8.1c-4.7,2.6-11.2,2.1-13.9,8.1
    c-1.4,1.4-1.6,3.3-1.7,5.2c-0.3,8.2,0.2,16.5-0.5,24.8c-0.1,1.2,0.2,2.5,1.3,3.3c9.6,4.1,19.2,8.1,28.8,12.2
    C472.8,276.5,481.6,278.1,490.4,277.8z M287.4,415.8c-0.3,7.5,1.4,13.3,7.4,18.1c4.7,3.8,8.5,8.8,12.8,13.2c2,4.8,5.9,8.8,10.5,8.9
    c4.3,0.1,7.2-4.6,8.9-8.9c4.6-6.1,10.4-11.1,15.9-16.4c3.1-3,4.2-6,4.3-10.2c0.1-7.1-1.5-14.2,1-21.2c-4.3-8.6-7.8-17.6-11.4-26.5
    c-1.1-2.7-1.7-6.3-6-5.9c-1.4-1.5-3.2-1.7-5.1-1.7c-7.9-0.3-15.9,0.2-23.8-0.5c-1.2-0.1-2.4,0.3-3.3,1.3
    c-4.1,9.6-8.2,19.2-12.2,28.8C288.9,401.6,287.7,408.8,287.4,415.8z"/>
<path style="fill:#763A02; transform:scale(0.2)" :class="ValueId+'_color3'" d="M307.6,447.2c3.3,2.7,6.3,7.3,9.9,7.7c3.8,0.5,5.8-5.6,9.6-7.7c0.1,28,0.1,55.9,0.2,83.9
    c0,3.5,0.1,7,0.2,10.5c-3.4,5.8-6.7,11.6-10.1,17.4c-3.4-5.8-6.7-11.6-10.1-17.3c0.1-29.2,0.1-58.4,0.2-87.6
    C307.5,451.7,307.6,449.4,307.6,447.2z M339.8,365.2c18.2-3.5,34.4-11.4,49.4-21.8c8.9-7.6,17.2-15.8,24.6-24.8
    c10.6-15.9,18.4-33,21.5-52c1.8-11,0.9-22.2,0.9-33.3c-3.6-20.8-10.9-40-23.6-57.1c-7.4-9-15.7-17.2-24.8-24.5
    c-15.8-10.8-33-18.1-51.9-21.6c-10.2-1.1-20.5-1.4-30.8-0.9c-2.7,1.9-6,1.1-9,1.6c-18.6,3.4-35.1,11.4-50.6,21.9
    c-9,7.5-17.1,15.8-24.6,24.8c-10.6,15.9-18.1,33.1-21.6,51.9c-1.1,10.2-1.4,20.5-0.9,30.8c2,3.2,1,6.8,1.7,10.2
    c3.8,18,11.4,34.3,21.9,49.3c7.5,9,15.8,17.1,24.7,24.7c15.9,10.5,33,18.3,52,21.5c10.7,1.6,21.4,0.9,32.1,0.9
    C333.6,364.7,336.9,365.8,339.8,365.2z"/>
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
                                    <button :style="{background:'rgba('+getterSunflowerBg1+')'}" @click="ShowElement(getterSunflowerBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSunflowerBg2+')'}" @click="ShowElement1(getterSunflowerBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSunflowerBg3+')'}" @click="ShowElement2(getterSunflowerBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSunflowerBg4+')'}" @click="ShowElement3(getterSunflowerBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSunflowerBg5+')'}" @click="ShowElement4(getterSunflowerBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var Sunflower= [
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
            var randomNumber = Sunflower[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Sunflower[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Sunflower'){
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
                getterSunflowerBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sunflower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSunflowerBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sunflower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSunflowerBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Sunflower') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterSunflowerBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterSunflowerBg5: {
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
                            name:'Sunflower',
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