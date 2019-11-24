<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path :style="{fill:'rgba(240, 196, 25, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M184.1,128.3c16.2-11.8,30.4-21.1,41.2-27.7c58.7-36.2,87.4-38.2,103.5-41.1c1.5-0.3,3-0.9,4.8-0.1
	c-0.5,4.3-2.5,8-4.7,11.6c-24,39.5-51.7,76-86.2,107c-17.9,16.1-38.8,27.7-60.1,38.5c-17.9,9.1-36.3,17.5-52.6,29.6
	c-12.5,9.3-22.7,20.3-27.3,35.7c-3.5,11.8-2.8,23.5-0.3,35.3c0.5,2.3,1.6,4.4,1,7.3c-3-2.3-4.1-5.6-6.2-8.3
	c-14.9-19.3-15.2-40.6-9.3-63c4.1-15.3,10.7-29.3,18.9-42.7c3.9-6.4,7.7-12.9,12.5-18.6c0.9-1.7,1.8-3.3,2.6-5
	c8.7-9.6,17.4-19.3,26-28.9C160,148,172.1,138.1,184.1,128.3z M498.7,277.4c13.4,17.2,21.9,35.2,18.1,57.8
	c-5,30.1-18.8,56-37.8,78.9c-51.6,62-115.9,104.8-194.1,125.9c-4.9,1.3-10,2-14.9,2.9c-0.5,0.1-1.1-0.2-1.7-0.4
	c0.4-3.5,1.9-6.5,3.5-9.3c25.7-43.2,55.9-82.6,94.4-115.2c15.3-13,32.9-22.4,50.7-31.4c15.3-7.8,30.9-15.1,45.5-24.3
	c9.3-5.8,18.1-12.4,25.2-20.8c14.8-17.6,16.6-37.7,11.5-59.2C498.9,280.8,498.1,279.4,498.7,277.4z M291.7,27.7
	c-65.1,9.6-119.3,37.9-165.2,82.6c-22.5,21.9-42.1,45.8-53.6,75.5C55.8,230,62.7,271.7,85.4,311.9c6.2,10.9,13.3,21.2,21,31.1
	c4.9,6.3,5,17.6,0.4,25.4c-3.9,6.5-11,9.5-20,7.7c-10.6-2.2-18.8-8-23.1-18.1c-16.3-38.2-25.1-78-24.8-119.7
	c0.3-39.5,12.8-75.2,32.5-108.8c21.4-36.7,48.7-67.6,86.7-87.8c34.9-18.5,72-23.9,110.9-18.5C276.2,24.2,283.3,25.2,291.7,27.7z
	 M311.5,574.1c63.4-9.3,117.3-37.3,163.1-81.5c19.8-19.1,37.5-40,49.6-65c21.7-45.1,18.1-89.4-5-132.8
	c-6.7-12.6-14.7-24.5-23.6-35.7c-4.9-6.2-5.1-17.6-0.5-25.4c3.9-6.6,11.4-9.7,20.5-7.6c10.1,2.3,18.2,7.8,22.3,17.4
	c15.7,36.3,24.3,74.1,25.2,113.8c0.9,42.2-11.9,80.4-33.1,116.3c-21.4,36.2-48.5,66.8-86.1,86.8c-31.6,16.7-65.4,22.9-101,19.6
	c-8.8-0.8-17.5-2.2-26.1-3.8C314.9,575.7,312.9,575.6,311.5,574.1z"/>
<path :style="{fill:'rgba(20, 192, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M511.7,217.3c-5.1,0.1-9.3,0.6-13.2,2.7c-1.7,1-2.8,0.4-4-0.8c-9.3-9-20.9-14.2-32.6-19.4
	c-12.7-5.6-25.5-11-37.1-18.7c-22.3-14.8-32.8-36.2-35.9-62.3c-1.6-13.9,1.5-27.7-0.8-41.6c-0.9-5.2-2.6-10.1-4.1-16.3
	c14.7,10.3,22.1,23.6,22.6,40.4c0.3,11,1,21.9,3.9,32.5c6,21.6,20,36.4,39.7,46c11.2,5.5,22.8,10.1,34.2,15.4
	C494.9,200.3,505,205.9,511.7,217.3z M90.4,384.7c4.9-0.2,9.2-0.6,13-2.7c1.7-0.9,2.8-0.5,4.1,0.7c10.7,10.3,24.2,15.7,37.4,21.5
	c10.7,4.8,21.4,9.5,31.3,15.9c22.7,14.7,33.9,36.1,36.6,62.5c0.8,7.8,1.1,15.6,0.4,23.4c-1,11.6,0.4,23,5.2,35.2
	c-15.1-10.6-22.5-23.7-23.1-40.5c-0.3-9.8-0.8-19.5-3-29.1c-5.1-22.3-18.5-37.9-38.3-48.6c-12.2-6.6-25.4-11.2-37.9-17.2
	c-5.7-2.7-11.1-5.8-16-9.7C96.2,393.1,93,389.6,90.4,384.7z M75,536.7c-17.8-22.1-26.8-46.6-21.6-75.2c3.2-18.1,7.3-36,8.3-54.5
	c0.1-1.1,0.5-2.2,1.1-4.2c8,17,10.2,34,8.6,51.6c-0.9,10.3-2.2,20.6-2.9,31C67.2,502.9,68.9,520.1,75,536.7z M527.1,65.5
	c18,22.4,26.8,47.3,21.2,76.4c-3.6,18.6-7.4,37.2-8.9,56.2c-6.1-10.9-8.4-22.7-9.2-34.9c-0.7-12.4,1.1-24.6,2.4-36.8
	C534.9,105.6,534.3,85.3,527.1,65.5z M430.5,575.8c7.6-3.9,15-7.6,22.4-11.4c1.3-0.7,2.6-0.7,4-0.3c13,4.1,26.4,6.4,40.3,6.9
	C487.1,583.3,451.3,581.5,430.5,575.8z M267.7,165.9c1.4,20-0.3,38.8-6.3,57.2c-0.9,2.7-1.8,3.2-3.9,1.4c-0.5-0.4-0.9-0.7-1.4-1
	c-9-6.4-9-6.3-4.7-16.6c3.8-9,6.8-18.4,7.9-28.1C259.8,173.1,262.4,169.4,267.7,165.9z M334.3,436.3c-1.4-20.2,0.3-38.8,6.1-57.1
	c0.9-2.8,1.7-3.3,4.3-1.6c10.2,6.4,10.4,6.7,5.8,17.8c-3.8,9.2-6.9,18.8-7.9,28.7C342,429.7,338.8,432.5,334.3,436.3z M137.7,43.9
	c-6.8,5.3-13,10.1-19,15c-1.6,1.3-2.8,1.6-4.5,0c-5.1-5-9-10.8-12.3-17.1c-1.9-3.6,1-2.9,2.7-2.9C115.7,38.8,126.4,40.7,137.7,43.9z
	"/>
<path :style="{fill:'rgba(242, 156, 31, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M98.8,209.3C87,227.2,80,246.9,76.9,269.4c-3.6-9.1-4.5-17.7-5-26.3c-2-35.7,9.9-67.1,31.4-94.8
	c41.9-53.9,95.4-90.9,162-107.7c17.6-4.5,35.6-7,53.9-6.7c7.2,0.1,14.7,7.3,15.2,14.4c0.2,3.2-2,2.3-3.5,2.5
	c-19.3,3.5-38.1,8.8-56.2,16.2c-26.5,10.9-51.9,23.8-75,40.8c-10.4,9.5-22.4,16.8-33,26.1C144.3,153.4,123,174,106.5,199
	C104.3,202.7,101.3,205.8,98.8,209.3z M525.4,334.6c4.7,14.7,5.8,29.8,4.2,45c-3.9,36.4-22,65.8-46,92.2
	c-33,36.2-71.8,63.8-117.9,80.7c-27.1,9.9-55.1,15.8-84.2,15.5c-6.1-0.1-14.9-9.3-14.1-14.9c0.4-3,3.5-2.3,5.2-2.5
	c14.2-2,27.8-6.1,41.3-10.8c44-15.4,83.4-39.1,119.5-68.5c24.7-20.1,46.8-42.7,64.5-69.4C511.4,381.3,521.7,359.4,525.4,334.6z
	 M68.4,542.3c-13.2-8.2-24.9-17.9-34.3-30.1c-12.8-16.6-16-34.8-9.9-54.7c2.7-8.8,6.3-17.2,10.3-25.5c6.5-13.5,13.3-26.8,19.2-40.7
	c1,12.4-0.5,24.7-2.5,36.8c-2,12.3-4.4,24.6-6.3,37c-3.9,24.9,3.1,47.1,17,67.6C64,536,66.2,539.2,68.4,542.3z M527.5,196.1
	c-5.6-6-11.2-11.9-16.8-17.9c-12.2-13.1-15.2-28.6-12.3-45.7c1.4-8.4,7.1-14.2,13-19.7c7-6.5,11.5-14.3,12.1-24.1
	c1.8,3.6,1.8,3.6,2,7.2c1,13.9-0.2,27.8-1.9,41.6c-2.4,19.6-2.1,39,5.2,57.8C528.3,195.5,527.9,195.8,527.5,196.1z M384.6,139.9
	c0.9,2.5,1.7,5,2.6,7.4c7.7,20.4,22,34.7,40.7,45.2c12.5,7,25.8,12.1,38.7,18.1c7.6,3.6,15,7.5,21.3,13.2c1.9,1.7,2.5,2.9,0.8,5.3
	c-2.9,4-3.9,8.8-4.5,13.8c-2.2-0.4-2.7-2.3-3.7-3.6c-8.7-11.5-20.1-19.4-33.2-25.3c-11-5-22.5-8.8-33.1-14.8
	c-13.2-7.4-24.9-16.2-29.1-32C382.8,158.2,383.2,149.2,384.6,139.9z M218.7,461.8c-4.6-9.5-8.6-18.9-14.9-27.3
	c-12.2-16.2-29.1-25.6-47.1-33.7c-8.5-3.9-17.1-7.7-25.6-11.6c-5.2-2.4-9.8-5.6-14.5-8.8c-3.8-2.7-5.7-5.2-2.2-9.7
	c2.4-3.2,2.9-7.5,3.5-12.6c7.4,10.4,15.6,18.5,25.9,24.5c9.7,5.6,20.1,9.5,30.3,13.8c8.5,3.6,16.6,7.8,24.1,13.1
	c13.8,9.8,20.4,23.2,20.4,40C218.7,453.6,218.7,457.7,218.7,461.8z M321.9,449.6c-8.2-23.8-7.9-47.1-1.6-70.5
	c0.6-2.1,1.2-4.1,1.9-6.2c2.5-7.9,2.5-7.8,9.5-3.7c2.3,1.3,2.9,2.6,2.1,5.1c-7.2,21.5-9.6,43.5-6.9,66
	C327.4,444.5,325.6,447,321.9,449.6z M171.9,25.8c-8,4.1-15.3,7.7-22.5,11.5c-1.7,0.9-3.4,0.8-5.1,0.3c-12.7-4.2-25.8-6.3-39.3-6.7
	C112.6,19.8,144.1,19.6,171.9,25.8z M240.9,210.3c-11.9-10.6-11.9-10.6-0.6-19.8c3.2-2.6,6.3-5.2,10.3-8.6
	C248.7,192.4,245.5,201.3,240.9,210.3z"/>
<path :style="{fill:'rgba(142, 218, 246, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M535.3,226.4c-7.4-4.5-14.3-7-18.1-14.9c-4.7-9.9-13.9-15.8-23.6-20.4c-10.9-5.2-22.1-9.8-33.2-14.8
	c-22.6-10.3-39-25.9-43.7-51.4c-1-5.2-1.9-10.4-1.8-15.7c0.4-18.6-4.3-35.2-18-48.7c14.5,5.1,24.8,14.7,31,28.7
	c2.7,6.1,4.3,12.6,4.6,19.3c0.7,18.4,8.8,32.9,23.1,44.3c8.9,7.1,18.9,12.6,28.7,18.2c12.5,7.1,24.5,14.7,34.3,25.4
	C526.5,204.7,532.1,214.2,535.3,226.4z M67.4,376.1c7.7,3.7,14,7.8,18.2,15.7c5.5,10.3,15.8,16,26.2,20.9
	c10.6,4.9,21.5,9.4,32.1,14.3c29.4,13.4,43.1,36.8,43,68.7c0,17.7,5.2,33.1,18.3,45.6c-7.8-0.9-19-8.9-25.5-18
	c-6.3-8.8-9.9-18.7-10.4-29.5c-0.9-19.4-9.6-34.3-24.8-45.8c-12.1-9.1-25.7-15.7-38.4-23.7c-16.3-10.4-30.2-23-37.4-41.6
	C68.1,380.7,66.8,378.8,67.4,376.1z M547.9,211.9c-0.6-16.2,1.5-30.6,3.9-45c1.8-10.4,3.7-20.8,5.3-31.2
	c4.1-26.4-4.6-49.3-19.6-70.5c-1.2-1.7-2.4-3.6-3.6-5.4c-0.1-0.1,0.1-0.3,0.5-1.1c19.9,15.2,39.8,30.2,45.5,56.5
	c2.7,12.7,0.2,25.1-4.8,36.7C566.6,171.7,557.4,191,547.9,211.9z M78.7,513.5c-2.3-2.9-1.9-5.4-2.1-7.7c-1.5-17.1,1.1-33.9,2.7-50.8
	c1.4-15.2,0.2-30-4.7-44.5c-0.2-0.7-0.2-1.5-0.5-3.1c14.4,12.9,28.6,24.5,30.3,45.2c1.1,13-1,24.5-10.9,33.6
	C85.7,493.5,79.1,501.3,78.7,513.5z M280.1,152.5c6.4,17.6,7.4,35.1,5.2,52.9c-1.1,8.7-3.1,17.3-6.3,25.5c-0.7,1.7,0,5.9-3.8,4
	c-3-1.6-9-1.5-6.7-8c2.6-7.4,4.4-15,5.6-22.7c2.2-13.8,3.1-27.6,1.2-41.4C274.6,158.6,275.5,155.2,280.1,152.5z M464.2,558
	c6.8-5.3,12.8-9.9,18.6-14.7c2.8-2.3,4.9-1,6.4,1.1c3.5,4.6,6.8,9.5,10.1,14.3c2,3.1,1.2,4.4-2.6,4.4
	C485.9,563,475.5,561.1,464.2,558z M351.4,420c1.9-10.5,5.1-19.5,9.5-28.1c0.7,0.3,1.1,0.4,1.3,0.6c10.7,9.8,10.7,9.8-0.3,18.8
	C358.7,413.9,355.4,416.7,351.4,420z"/>
<path  :style="{fill:'rgba02, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M295.8,76.6c4.5,0.1,8,3.8,8,8.4c0,4.9-3.7,8.4-8.7,8.2c-4.4-0.2-8.1-4.2-7.9-8.5C287.4,80.2,291.5,76.4,295.8,76.6z"/>
<path :style="{fill:'rgba(0, 0, 0, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M306.6,508.8c4.5,0.1,8.3,3.9,8.2,8.2c0,4.4-3.9,8.2-8.3,8.3c-4.6,0.1-8.6-4.1-8.4-8.7C298.2,512.1,301.9,508.7,306.6,508.8
	z"/>
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
                                    <button :style="{background:'rgba('+getterPiscesBg1+')'}" @click="ShowElement(getterPiscesBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPiscesBg2+')'}" @click="ShowElement1(getterPiscesBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterPiscesBg3+')'}" @click="ShowElement2(getterPiscesBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPiscesBg4+')'}" @click="ShowElement3(getterPiscesBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPiscesBg5+')'}" @click="ShowElement4(getterPiscesBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterPiscesBg6+')'}" @click="ShowElement5(getterPiscesBg6)" :class="this.ValueId+'_color6btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterPiscesBg7+')'}" @click="ShowElement6(getterPiscesBg7)" :class="this.ValueId+'_color7btn'"></button> -->
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
        var Pisces= [
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
            var randomNumber = Pisces[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Pisces[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Pisces'){
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
                getterPiscesBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pisces') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPiscesBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pisces') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPiscesBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Pisces') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPiscesBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterPiscesBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPiscesBg6: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterPiscesBg7: {
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
                            name:'Pisces',
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