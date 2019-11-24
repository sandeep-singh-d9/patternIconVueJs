<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.8);">
                  <path style="fill:#F49902;transform:scale(0.2)" :class="ValueId+'_color1'" d="M236.6,349.2c-0.1-6.1-0.3-12.2-0.4-18.4c0.1-0.3,0.2-0.5,0.3-0.8c8-10.6,19.6-14.2,31.9-16.4
    c5.1-0.9,10.2-1,15.9,1.9c-9-12.1-26.7-15.6-38.1-8.4c-3.9,2.5-8.1,4.4-12,6.9c-9.9-1.3-18.9-5.8-28.2-9c-3.2-1.1-6.4-2.4-9.7-3.6
    c-6.2-2.3-11.2-0.6-14.9,4.9c-1.5,2.2-2.7,4.6-4.7,6.4c-0.4,5.5-2.9,9.3-8.2,11.8c-6.2,2.8-10.9,7.8-14.8,13.4
    c-5.6,8.2-5.1,14.5,1.7,21.7c1.1,1.2,2.4,2.2,4.2,3.8c-6.9,2-11.9-1.3-17.1-3.5c-2.6,7.9,3.4,9.6,8.2,12c-1.1,1.8-2.9,2.2-4.4,2.8
    c-15,6.3-22.7,1.5-22.3-14.8c0.1-5.3-1.2-7.7-6.3-8.2c-1.3-0.1-2.5-1-3.8-1.2c-1.6-0.3-3.1-3.5-4.8-0.8c-1.2,1.8-0.4,4,0.9,5.9
    c1.8,2.7,5.1,3,7.8,5c-5.5,3.6-11.2,5.4-17.5,5c-4.2-0.3-7-2.9-7.7-6.6c-3.1-15.9-3.4-31.3,9.2-44c2.3-2.3,4.5-4.9,7.2-6.6
    c8.7-5.6,11.8-13.4,10.2-23.4c-0.3-1.9,0-3.8,0.1-5.7c1.2-0.5,2.3,0.1,3.1,0.9c6.1,6.1,13.3,10.5,20.7,14.8c1,0.6,1.8,1.4,2.2,2.5
    c0.6,8-4.3,12.7-10.1,16.8c-6,4.2-11.4,9.1-15,15.6c-3.4,6-2.5,10.5,3.3,16.2c1.6-12.8,10-20.8,19-28.4c2.8-2.3,5.4-4.9,7.6-7.8
    c2.1-8.9-0.8-17.4-2.1-26c-0.3-2-2.4-2.9-4.1-3.8c-3.5-2-7.1-3.8-11-5c-8.8-2.9-13.5-9.7-17.1-17.5c-1.4-3-1.1-6.3-0.4-9.5
    c0.9-5.1,0.9-10.5,2.8-15.2c4.8-11.7,2-23.4,1.4-35.1c-0.4-7-1.5-14.1-3.2-21c-1-4.3-3.3-6.9-8.1-6.2c-24.8,3.8-49.8-0.3-74.5,2.4
    c-7.2,0.8-8.5-5.1-11.6-9.1c2.2-1.6,5.1-1.1,8.6-2.8c-2.2-1.3-3.3-3.7-5.4-0.4c-0.8,1.3-1.9,2.3-3.1,3.2c-5.2-4-6.9-8.7-3.3-14.8
    c0.9-1.5,1.3-3.2,1.9-4.8c4.1-11.4,10.6-20,22.9-24.5c17.7-6.6,34.7-15.3,53.3-19.7c10.8-2.6,21.7-2.4,32.4,0.6
    c16,4.5,26.5,18.6,27.6,36.4c0.7,11.1,1.1,22.3,3.5,33.1c2.2,9.9,5,19.5,16.1,23.4c-0.4,9.1,3,18,2.5,27.2c2.7-2.1,3.8-5,4.4-8.4
    c1-6.5,4.2-11.7,9.2-16c5.4,1,10.8,2,16.2,3c-0.3,9.8,4.4,19.4,1.2,29.3c-0.5,1.5-1.2,3.3,0.7,5.8c3.4-6.4,6.4-12.4,8.4-18.9
    c1.5-4.9,2.9-10,6.9-13.6c16.8,2.8,33.5,5.8,50.3,8.3c7.3,1.1,14.8,1.2,22.3,1.8c7.1,7.8,13.9,15.7,14.6,27.1
    c0.2,4.1,1.2,8.3,3.2,13.2c2.5-6.7,3.1-13.1,5.5-18.9c2.8-6.7,0.8-12.7-2.2-18.7c-0.6-1.2-1.1-2.5-0.3-3.8
    c8.8-1.7,17.8-2.9,26.5-5.5c7.4,7.2,9.6,16.1,8.4,26.2c-0.2,2-1.9,5.4,1,5.9c2.6,0.5,3.7-2.8,4.5-5.1c2.8-7.6,1.5-15.5,1.8-23.3
    c0.1-3.4-0.5-7,2.7-9.5c9-3.9,18.2-7,27.8-9.1c0.8,6.4,1.2,12.8,4.4,18.6c0.5,1,0.7,2.1,2.6,3.1c2.9-8.5,4.7-17,6.6-25.5
    c9.9-2.5,20-3.7,30-5.2c1.9,4.7,2.8,9.8,4.5,15.5c2.6-3.2,2.9-6.4,3.8-9.4c0.7-2.3,0.8-5,3.3-6.4c8.1-1,16.2-1.6,24.3,0.1
    c2.5,2.6,0.4,6.3,2.1,9.2c4.3-1.7,5.1-7.2,9.5-8.5c7.8,0.4,15.3,1.9,22.9,3.8c1.6,2-2.4,4.6,0.3,6.1c2.8,1.5,4.8-1.2,6.8-2.8
    c0.7-0.6,1.6-1,2.4-1.4c20.7,4.3,41.8,7.5,61.1,16.6c-0.1,0.7-0.3,1.3-0.4,2c-6.3-0.5-12.7-0.9-19-1.4c-33.9-2.6-67.8-3.1-101.4,3.9
    c-20.3,4.2-38,14.1-55,25.4c-30.3,20.2-57.8,43.8-84.5,68.3c-1.6,1.5-2.8,3.1-3.7,5.1c-6.1,13.2-12.1,26.5-18.3,39.7
    c-4,8.4-3.5,15.6,3.1,22.7c6.1,6.5,10.6,14.4,18.8,19c5,2.8,6.2,8.6,5.4,14.3c-2.5,17.6-4.6,35.4-8,52.8
    c-4,20.9-23.5,36.1-44.6,36.2c-9.2,0-18.4,0-27.6-0.1c-1.2,0-2.9,0.7-3.6-0.9c-0.6-1.4,0.7-2.5,1.4-3.5c2.7-3.7,6.5-5.9,10.5-7.7
    c2.1-0.9,4.3-1.6,6.4-2.5c8.7-3.8,9.2-5.5,3.3-12.6c-2.2-2.7-4-5.6-5.6-8.7c-2.3-4.7-5.9-6.1-11-4.4c-5.1,1.6-9.3,5.1-14.1,7.7
    c2-18.1,14.4-25.3,30.5-18.2c6.8,3,12.4,7.7,17.9,12.4c2.2,1.9,3.6,1.9,5.6-0.4c3.6-3.9,6.7-7.8,5.6-13.7c-0.5-2.6-0.5-5.4,0-8
    c1.9-10.8-2.7-17.6-11.4-23.7c-11.4-8.1-21.8-17.5-32.6-26.5c-5.9-5-8.9-11.4-8-19.3c2.4-5.9,7.8-7.6,13.2-9
    c6.9-1.8,13.6-3.9,19.9-7.4c-0.1-1.1-1.1-1-1.7-0.9c-9.8,2.2-20.4-0.4-29.7,4.7C237.7,349.5,237.1,349.4,236.6,349.2z"/>
<path style="fill:#EE7102;transform:scale(0.2)" :class="ValueId+'_color3'" d="M176.7,312.7c1.1-2.4,2-5,3.4-7.3c3.4-5.9,10-8,16.3-5.7c12.5,4.7,25.1,9.2,37.7,13.8
    c2.9,5.4,4.1,11.1,2.7,17.2c0,0-0.5,0.1-0.5,0.1c-18.2-4.6-36.3-9.3-53.6-16.6C180.7,313.4,178.9,312,176.7,312.7z M119,279.1
    c7.4,7.7,16.6,12.8,25.4,18.5c3.6,2.1,5.8,5.1,5.3,9.5c-0.2,1.5,0.2,3,1.4,4.1c1.8-1.2,1.2-3.1,1.2-4.8c0.1-6.3-2.1-12.5-1.9-18.7
    c0.2-6.3-3.5-8.3-7.7-10.5c-2.7-1.4-5.5-2.7-8.4-3.7c-12.2-4.3-18-13.3-19-25.8C112.7,258.7,113.9,269.1,119,279.1z"/>
<path style="fill:#EE522D;transform:scale(0.2)" :class="ValueId+'_color2'" d="M319.3,210.9c5.1,8.6,7.5,17.2,2.6,27c-2.1,4.1-2.5,9.1-3.6,13.7c-0.3,1.4,0.1,3.6-2,3.5
    c-1.9-0.1-1.7-2.3-2.1-3.7c-1-3.6-2.6-7.4-2.5-11.1c0.3-10.1-6.2-16.8-11.2-24.4c-0.8-1.3-2.1-2.3-2.1-3.9
    C305.4,210.8,312.4,211,319.3,210.9z M345.8,205.4c5.6,9.6,9.3,19.5,6,30.9c-0.5,1.6,0.4,3.5,2.2,4.3c1.8,0.7,2.8-0.8,3.9-1.8
    c4.5-4.3,4.9-10.1,5.3-15.8c0.5-7.8-0.9-15.7,1.1-23.4C357.8,200.6,351.8,203.1,345.8,205.4z M208.8,199.3
    c-0.3,3.4-2.3,6.9-1.1,10.1c2.8,7.6,2.4,14.9,0,22.4c-0.5,1.7-0.7,4.3,1.5,5.1c2.6,1,3-1.8,3.8-3.3c5.5-10.1,8.3-21.2,13-31.6
    C220.4,199.8,214.7,199,208.8,199.3z M236.6,361.8c3.6-3.2,7.3-6.1,12.2-7.3c6.9-1.6,13.8-3.3,19.9-7c1.6-1,5.2,0.5,4.7-2.7
    c-0.3-2.2-3.7-1.2-5.5-2.1c-0.8-0.4-2.2,0.2-3.3,0.4c-4.5,0.7-9,2-13.6,1.5c-5.5-0.7-10.2,1.2-14.3,4.6
    C236.2,353.4,235.8,357.6,236.6,361.8z M176.5,193.5c-2,4-1.8,8.3-0.7,12.4c1.6,6,2.7,11.9,0.3,18.9c3.8-2.5,7.6-4.8,7.8-7.7
    c0.6-8.1,5.2-14.1,8.7-20.8C187.5,193.4,182,193.7,176.5,193.5z M392,190.4c-3,7.9,1.5,14.4,3.8,21.3c0.4,1.2,0.7,3,2.2,3.1
    c2,0.2,2.3-1.9,2.7-3.2c2.1-7.5,4-15.1,6-22.6c0.3-1-0.3-1.8-1.1-2.4C400.7,186.8,396.3,188.5,392,190.4z M435.6,181.3
    c-1.4,5.3,2.5,9.7,2.5,14.8c0,1.4,0.5,2.8,2.2,2.9c1.7,0.1,2.1-1.4,2.4-2.7c1.5-5.1,3-10.2,4.5-15.3
    C443.3,181.1,439.5,181.2,435.6,181.3z M471.5,181.1c0,2.5-0.1,4.9,0,7.4c0.1,1.6-0.9,3.9,1.1,4.5c1.8,0.6,2.9-1.5,3.9-2.8
    c2.3-2.7,4.4-5.6,6.6-8.5C479.4,179.7,475.3,181.4,471.5,181.1z M506,185.6c-0.4,0.9-0.9,1.7-1.3,2.6c-0.6,1.4-3,2.6-1.2,4.4
    c1.6,1.8,4.1,1.5,5.9,0.8c2.7-1,4.6-3.4,6-5.9C512.5,186,509.4,185,506,185.6z M286.3,274.3c1.9,0,3.8,0.1,5.8,0
    c1.3-0.1,3-0.3,3.3-1.8c0.3-1.5-1.3-2.2-2.5-2.8c-2.9-1.5-5.8-3.1-8.7-4.4c-9.9-4.3-19.6-5.5-29.8-0.1c-7.4,3.9-14,8.7-19.9,14.3
    c-4.3,4.1-8.7,8.8-8.4,15.7c0.1,2,0.3,4,2.1,5.1c1.9,1.2,3.2-0.7,4.5-1.7c8.4-6.2,17-12.4,23.2-21.1c3.4-4.8,8-6.5,14.1-5.1
    c5.4,1.2,10.9,1.5,16.4,2.1C286.3,274.5,286.3,274.4,286.3,274.3z M241.7,327.1c9.6-10.5,22.5-11.5,35.5-12.4
    c3.4-0.2,5.9,3.2,9.6,2.9c-8.3-17.7-35.5-22.2-52.8-4c0.9,5.7,1.8,11.5,2.7,17.2C238.4,329.5,240.4,328.6,241.7,327.1z"/>
<path style="fill:#FFFFFF;transform:scale(0.2)" :class="ValueId+'_color5'" d="M107.9,120.8c0.1,6.3-5.6,12.3-11.9,12.4c-5.7,0.1-12.1-5.9-12.2-11.3c-0.1-5.4,6.8-12.5,12.3-12.8
    C101.5,108.9,107.8,115.1,107.9,120.8z"/>
<path style="fill:#F4EFED;transform:scale(0.2)" d="M22.1,163.8c1.2-2.6,2.4-5.1,3.7-7.8c2.9,1.6,5.3,3.3,7.3,6.1c-3.8,1.1-7.4,2-11.1,1.6
    C22,163.7,22.1,163.8,22.1,163.8z M44.5,160.3c-5-6.9-5.3-6.8-10.1,2.5C38.3,161.1,41.7,162.1,44.5,160.3z M46.5,160.5
    c3-0.6,5.6-1.1,8.5-1.7C50.3,153.1,49.6,153.3,46.5,160.5z M63.1,156.5c0.1-0.2-0.8-1.8-1.5-2c-3-1-3.3,1.9-6,3.9
    C59.3,158.1,61.5,158.4,63.1,156.5z"/>
<path style="fill:#050505;transform:scale(0.2)" :class="ValueId+'_color4'" d="M100.8,120.9c0.1,4.4-3.9,8.6-8.4,8.7c-4,0.1-8.6-4.1-8.6-7.9c-0.1-3.8,4.8-8.8,8.7-9
    C96.3,112.6,100.7,116.9,100.8,120.9z"/>
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
                                    <button :style="{background:'rgba('+getterVelociraptorBg1+')'}" @click="ShowElement(getterVelociraptorBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterVelociraptorBg2+')'}" @click="ShowElement1(getterVelociraptorBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterVelociraptorBg3+')'}" @click="ShowElement2(getterVelociraptorBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterVelociraptorBg4+')'}" @click="ShowElement3(getterVelociraptorBg4)" :class="this.ValueId+'_color4btn'"></button>
 
                                     <button :style="{backgroundColor:'rgba('+getterVelociraptorBg5 +')'}" @click="ShowElement4(getterVelociraptorBg5 )" :class="this.ValueId+'_color5btn'"></button> 

                                    <!-- <button :style="{backgroundColor:'rgba('+getterVelociraptorBg6+')'}" @click="ShowElement5(getterVelociraptorBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterVelociraptorBg7+')'}" @click="ShowElement6(getterVelociraptorBg7)" :class="this.ValueId+'_color7btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterVelociraptorBg8+')'}" @click="ShowElement7(getterVelociraptorBg8)" :class="this.ValueId+'_color8btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterVelociraptorBg9+')'}" @click="ShowElement8(getterVelociraptorBg9)" :class="this.ValueId+'_color9btn'"></button> -->

                                    <!-- <button :style="{backgroundColor:'rgba('+getterVelociraptorBg10+')'}" @click="ShowElement9(getterVelociraptorBg10)" :class="this.ValueId+'_color10btn'"></button> -->
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
        var Velociraptor= [
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
            var randomNumber = Velociraptor[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Velociraptor[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Velociraptor'){
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
                getterVelociraptorBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Velociraptor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Velociraptor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Velociraptor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterVelociraptorBg5 : {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg7: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg8: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg9: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterVelociraptorBg10: {
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
                            name:'Velociraptor',
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