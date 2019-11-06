<template>
  <div style="height:0px">
    <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <g>
                <g>
                    <path  :style="{fill:'rgba(95, 117, 133,1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'" d="M167.081, 
                    347.743c-1.031-7.29-7.258-12.904-14.811-12.987V231.018
                        c0-8.123-6.645-14.769-14.77-14.769H93.196c-8.123,0-14.77,6.646-14.77,14.769v104.375c0,7.998,6.484,14.481,14.483,14.481h72.529
                        c0.938,0,1.699-0.761,1.699-1.699C167.137,348.026,167.118,347.881,167.081,347.743z"/>
                    <path :style="{opacity:'0.3',fill:'#7D868C', enableBackground:'new',transform: 'scale('+scale+')'}" :class="ValueId+'_color2'" d="M138.221,310.937c-1.723,0-3.117-1.396-3.117-3.119
                        c0-1.721,1.395-3.117,3.117-3.117h14.049v6.236H138.221z"/>
                    <path :style="{fill:'#D1D3D3',transform: 'scale('+scale+')'}" d="M161.786,338.267c2.807,2.345,4.76,5.68,5.295,9.476c0.037,0.138,0.057,0.283,0.057,0.433
                        c0,0.938-0.762,1.699-1.699,1.699H157.6v-3.713C157.6,342.878,159.26,339.983,161.786,338.267z"/>
                </g>
                <g>
                    <path  :style="{fill:'rgba(95, 117, 133,1)',transform: 'scale(0.2)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'" d="M297.229,347.743c-1.031-7.29-7.258-12.904-14.811-12.987V231.018
                        c0-8.123-6.645-14.769-14.77-14.769h-44.305c-8.121,0-14.768,6.646-14.768,14.769v104.375c0,7.998,6.482,14.481,14.48,14.481
                        h72.529c0.938,0,1.699-0.761,1.699-1.699C297.286,348.026,297.266,347.881,297.229,347.743z"/>
                    <path :style="{opacity:'0.3',fill:'#7D868C',enableBackground:'new',transform: 'scale('+scale+')'}" :class="ValueId+'_color2'" d="M268.37,310.937c-1.723,0-3.117-1.396-3.117-3.119
                        c0-1.721,1.395-3.117,3.117-3.117h14.049v6.236H268.37z"/>
                    <path :style="{fill:'#D1D3D3',transform: 'scale('+scale+')'}" d="M291.932,338.267c2.809,2.345,4.762,5.68,5.297,9.476c0.037,0.138,0.057,0.283,0.057,0.433
                        c0,0.938-0.762,1.699-1.699,1.699h-7.838v-3.713C287.749,342.878,289.409,339.983,291.932,338.267z"/>
                </g>
                <g>
                    <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M62.577,144.7c-0.674,0-1.35-0.257-1.863-0.772c-12.705-12.706-33.383-12.708-46.092-0.001
                        c-1.029,1.029-2.699,1.029-3.729-0.001c-1.031-1.03-1.031-2.7,0-3.73c14.766-14.764,38.787-14.762,53.549,0.001
                        c1.029,1.03,1.029,2.7,0,3.73C63.926,144.443,63.253,144.7,62.577,144.7z"/>
                    <path  :style="{fill:'rgba(95, 117, 133,1)',transform: 'scale(0.2)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'" d="M14.544,149.251l-6.752,4.688c-2.252,1.563-5.346,1.006-6.908-1.247
                        c-1.213-1.746-1.143-4.009,0-5.662l4.689-6.751c2.029-2.925,6.045-3.652,8.971-1.621c2.928,2.032,3.649,6.049,1.619,8.974
                        C15.716,148.275,15.151,148.826,14.544,149.251z"/>
                </g>
                <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M210.561,103.891c49.863,0,90.285,40.422,90.285,90.285s-40.422,90.285-90.285,90.285H104.764
                    c-49.863,0-90.285-40.422-90.285-90.285s40.422-90.285,90.285-90.285H210.561z"/>
                <g>
                    <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M129.682,347.743c-1.031-7.29-7.258-12.904-14.813-12.987v-94.244
                        c0-8.123-6.645-14.768-14.768-14.768H55.798c-8.123,0-14.77,6.646-14.77,14.768v94.881c0,7.998,6.484,14.481,14.481,14.481h72.531
                        c0.938,0,1.697-0.761,1.697-1.699C129.737,348.026,129.718,347.881,129.682,347.743z"/>
                    <path :style="{fill:'#D1D3D3',transform: 'scale('+scale+')'}" d="M124.385,338.267c2.809,2.345,4.762,5.68,5.297,9.476c0.035,0.138,0.055,0.283,0.055,0.433
                        c0,0.938-0.76,1.699-1.697,1.699h-7.838v-3.713C120.202,342.878,121.862,339.983,124.385,338.267z"/>
                    <path :style="{opacity:'0.3',fill:'#7D868C', enableBackground:'new',transform: 'scale('+scale+')'}" :class="ValueId+'_color2'" d="M100.823,310.937c-1.723,0-3.119-1.396-3.119-3.119
                        c0-1.721,1.396-3.117,3.119-3.117h14.047v6.236H100.823z"/>
                </g>
                <g>
                    <path :style="{fill:'#7C98AB' ,transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M259.831,347.743c-1.031-7.29-7.258-12.904-14.813-12.987v-94.244
                        c0-8.123-6.645-14.768-14.768-14.768h-44.305c-8.123,0-14.77,6.646-14.77,14.768v94.881c0,7.998,6.484,14.481,14.482,14.481
                        h72.529c0.938,0,1.697-0.761,1.697-1.699C259.885,348.026,259.866,347.881,259.831,347.743z"/>
                    <path :style="{fill:'#D1D3D3',transform: 'scale('+scale+')'}" d="M254.534,338.267c2.807,2.345,4.762,5.68,5.297,9.476c0.035,0.138,0.055,0.283,0.055,0.433
                        c0,0.938-0.76,1.699-1.697,1.699h-7.838v-3.713C250.35,342.878,252.009,339.983,254.534,338.267z"/>
                    <path :style="{opacity:'0.3',fill:'#7D868C',enableBackground:'new',transform: 'scale('+scale+')'}" :class="ValueId+'_color2'" d="M230.971,310.937c-1.723,0-3.117-1.396-3.117-3.119
                        c0-1.721,1.395-3.117,3.117-3.117h14.047v6.236H230.971z"/>
                </g>
                <g>
                    <g>
                        <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M315.549,79.815c-4.781,0-8.672-3.89-8.672-8.672c0-0.313,0.018-0.632,0.051-0.948l0.016-0.137
                            l0.02-0.136c1.365-9.227,9.433-16.185,18.77-16.185c9.338,0,17.408,6.958,18.769,16.186l0.016,0.108l0.014,0.109
                            c0.039,0.332,0.059,0.669,0.059,1.002c0,4.782-3.891,8.672-8.672,8.672L315.549,79.815L315.549,79.815z"/>
                        <path :style="{fill:'#FF9C9F',transform: 'scale('+scale+')'}" :class="ValueId+'_color5'" d="M335.919,72.711c0.865,0,1.566-0.703,1.566-1.568c0-0.062-0.002-0.122-0.01-0.181
                            c-0.846-5.726-5.779-10.12-11.742-10.12c-5.961,0-10.895,4.394-11.74,10.12c-0.008,0.059-0.012,0.12-0.012,0.181
                            c0,0.866,0.703,1.568,1.568,1.568H335.919z"/>
                    </g>
                    <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M349.815,109.171h-9.482c-9.889-30.707-38.682-52.932-72.676-52.932
                        c-42.168,0-76.35,34.183-76.35,76.349v47.283c0,20.377,16.52,36.897,36.896,36.897h121.611c29.713,0,53.799-24.086,53.799-53.799
                        C403.614,133.258,379.528,109.171,349.815,109.171z"/>
                    <circle :style="{fill:'#333E48',transform: 'scale('+scale+')'}" :class="ValueId+'_color6'" cx="273.527" cy="101.782" r="6.925"/>
                    <circle :style="{fill:'#333E48',transform: 'scale('+scale+')'}" :class="ValueId+'_color6'" cx="325.733" cy="101.782" r="6.926"/>
                    <path :style="{fill:'#FBE298',transform: 'scale('+scale+')'}" :class="ValueId+'_color3'" d="M341.444,180.247v14.058c0,2.454-2.008,4.463-4.461,4.463h-14.059
                        c-2.455,0-4.463-2.009-4.463-4.463v-14.058H341.444z"/>
                    <path :style="{fill:'#FBE298',transform: 'scale('+scale+')'}" :class="ValueId+'_color3'" d="M400.759,180.247v14.058c0,2.454-2.008,4.463-4.463,4.463h-14.057
                        c-2.455,0-4.465-2.009-4.465-4.463v-14.058H400.759z"/>
                    <g>
                        <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M202.612,79.815c-4.783,0-8.672-3.89-8.672-8.672c0-0.313,0.018-0.632,0.051-0.948l0.016-0.137
                            l0.02-0.136c1.363-9.227,9.434-16.185,18.77-16.185s17.406,6.958,18.77,16.186l0.016,0.108l0.012,0.109
                            c0.039,0.332,0.059,0.669,0.059,1.002c0,4.782-3.889,8.672-8.672,8.672L202.612,79.815L202.612,79.815z"/>
                        <path :style="{fill:'#FF9C9F',transform: 'scale('+scale+')'}" :class="ValueId+'_color5'" d="M222.979,72.711c0.867,0,1.568-0.703,1.568-1.568c0-0.062-0.004-0.122-0.01-0.181
                            c-0.846-5.726-5.781-10.12-11.742-10.12s-10.896,4.394-11.742,10.12c-0.006,0.059-0.01,0.12-0.01,0.181
                            c0,0.866,0.701,1.568,1.568,1.568H222.979z"/>
                    </g>
                    <g>
                        <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M318.315,137.023c-3.553,0-6.443-2.891-6.443-6.443c0-0.232,0.012-0.47,0.039-0.704l0.01-0.101
                            l0.016-0.101c1.014-6.855,7.01-12.025,13.945-12.025c6.936,0,12.932,5.169,13.945,12.025l0.01,0.08l0.01,0.082
                            c0.029,0.247,0.045,0.497,0.045,0.744c0,3.553-2.891,6.443-6.443,6.443L318.315,137.023L318.315,137.023z"/>
                        <path  :style="{fill:'rgba(95, 117, 133,1)',transform: 'scale(0.2)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'" d="M333.448,131.745c0.643,0,1.164-0.522,1.164-1.166c0-0.045-0.002-0.09-0.008-0.134
                            c-0.629-4.254-4.295-7.519-8.723-7.519c-4.43,0-8.096,3.265-8.725,7.519c-0.004,0.044-0.006,0.089-0.006,0.134
                            c0,0.644,0.521,1.166,1.164,1.166H333.448z"/>
                    </g>
                    <g>
                        <path :style="{fill:'#7C98AB',transform: 'scale('+scale+')'}"  :class="ValueId+'_color4'" d="M372.13,137.023c-3.551,0-6.441-2.891-6.441-6.443c0-0.232,0.012-0.47,0.037-0.704l0.012-0.101
                            l0.014-0.101c1.014-6.855,7.01-12.025,13.945-12.025c6.938,0,12.932,5.169,13.945,12.025l0.012,0.08l0.01,0.082
                            c0.029,0.247,0.043,0.497,0.043,0.744c0,3.553-2.891,6.443-6.441,6.443L372.13,137.023L372.13,137.023z"/>
                        <path  :style="{fill:'rgba(95, 117, 133,1)',transform: 'scale(0.2)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'" d="M387.264,131.745c0.643,0,1.164-0.522,1.164-1.166c0-0.045-0.004-0.09-0.008-0.134
                            c-0.629-4.254-4.295-7.519-8.725-7.519c-4.428,0-8.094,3.265-8.723,7.519c-0.006,0.044-0.008,0.089-0.008,0.134
                            c0,0.644,0.521,1.166,1.164,1.166H387.264z"/>
                    </g>
                </g>
            </g>
    </svg>
    
        <!-- <svg @click="getCircle(dynamicIndexValue, $event)"  xmlns:xlink="http://www.w3.org/1999/xlink"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue">
            <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
      
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use  :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg> -->

     <!-- start model for all changes -->
        <div  class="modal inner_color_model w3-animate-left" :id="'myModal'+dynamicIndexValue">
            <div  v-if="ShowModalArea == 'myModal'+dynamicIndexValue">
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
                                <a class="nav-link" data-tooltip="Clone"   @click="openElementInModal('duplicate')"><img src="images/all_use_icon/duplicate.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Layer"   @click="openElementInModal('layers')" ><img src="images/all_use_icon/layers.svg"></a>
                            </li>
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
                                {{svgName+dynamicIndex}}
                                <div class="bulldog_svg" :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
                                    <h2>Select Color</h2>
                                    <button :style="{background:'rgba('+getterHippoBg1+')'}" @click="ShowElement(getterHippoBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHippoBg2+')'}" @click="ShowElement1(getterHippoBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterHippoBg3+')'}" @click="ShowElement2(getterHippoBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHippoBg4+')'}" @click="ShowElement3(getterHippoBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterHippoBg5+')'}" @click="ShowElement4(getterHippoBg5)" :class="this.ValueId+'_color5btn'"></button>
                                    
                                    <button :style="{backgroundColor:'rgba('+getterHippoBg6+')'}" @click="ShowElement5(getterHippoBg6)" :class="this.ValueId+'_color6btn'"></button>
                                </div>
                               
                                <Colorpicker class="color_bulldog"  v-if="this.showColorPicker" :colorElement ="this.colorValue" :valueElement="this.clickedInput"/>
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
                                    <vue-slider
                                        ref="slider"
                                        v-model="scaleValue"
                                        v-bind="options" >
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
    <!-- <div class="bulldog_svg" :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
        <button :style="{background:'rgba(95, 117, 133,1)' , width:'50px' ,height:'50px'}" @click="ShowElement(getterHippoBg1)" :class="this.ValueId+'_color1btn'"></button>
               
               
        <button :style="{backgroundColor:'rgba(125, 134, 140, 1)' , width:'50px' , height:'50px'}" @click="ShowElement1(getterHippoBg2)" :class="this.ValueId+'_color2btn'"></button>
    
    
        <button :style="{backgroundColor:'rgba(251, 226, 152 , 1)' , width:'50px' , height:'50px'}" @click="ShowElement2(getterHippoBg3)" :class="this.ValueId+'_color3btn'"></button>
    </div>
    <Colorpicker class="color_bulldog" v-if="this.showColorPicker" :colorElement ="this.colorValue" :valueElement="this.clickedInput"/>
     <button v-if="this.showColorPicker" @click="hideElement">Close</button> -->
  </div>
</template>

<script>
import ColorButton from '../ColorButton'
import Colorpicker from '../colorPickerComponent'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
//   props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndex', 'ValueId' , 'svgName'],
 props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndexValue', 'ValueId' ,  'svgName' , 'NavClicked'],
  components:{
        ColorButton,
        Colorpicker,
        VueSlider
    },
   computed: {
        ...mapState([ 
            'background' ,
            'background1',
            'background2',
            'dynamicIndex',
            'dynamicName',
            'newDisableIndex'
        ]),
        getterHippoBg1:{
            get(){
             console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
              if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Hippo'){
                  return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
              }

            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterHippoBg2:{
            get(){
                 if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Hippo'){
                     return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                 }
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterHippoBg3:{
            get(){
                 if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Hippo'){
                     return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                 }
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterHippoBg4:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterHippoBg5:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterHippoBg6:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5
            }, 
            set(newValue){
                console.log(newValue)
            }
        }
    },
    data(){
        return{
           colorValue:'',
           showColorPicker:false,
           clickedInput:'',
           ShowModalArea:'',
            value: 100,
               sliderValue:0,
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
                scale:'0.2',
                scaleValue:'0.8',
                flipElement:'1',
                rotateLeft:'',
                rotateRight:'active',
                ActivePalette:'',
                ActiveMirror:'',
                ActiveOpacity:'',
                ActiveDuplicate:'',
                ActiveLayers:'',
                returnDrag:'',
                ActiveRotate:'',
                dataloop:[1 , 2, 3, 4, 5],
        }
    },
    mounted(){
        $("#myModal").modal({
            focus: false,
            // Do not show modal when innitialized.
            show: false,
            backdrop: 'static', // For static modal
            keyboard: false // prevent click outside of the modal
		});
        var items = [254, 249, 212, 365, 254 , 150, 276 ,81 , 100 , 150 , 200];
        var itemsTop = [488, 350, 255, 145,  , 150, 333 ,300 , 222 , 111 , 154];
        
        if(this.$store.state.RandomClicked == true){
        var randomNumber = items[Math.floor(Math.random()*items.length)];
        var randomNumberTop = itemsTop[Math.floor(Math.random()*itemsTop.length)];
            var randomWidth = randomNumber
            var randomHeight = randomNumberTop
        }else{    
            var randomWidth = Math.floor(Math.random()*350);
            var randomHeight = Math.floor(Math.random()*500);
        }
        // alert(test)
        // Math.random()
            var x = this.dynamicIndexValue
            $('#'+x).css({left: randomWidth , top: randomHeight})

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
                console.log(event)
                self.returnDrag = true
            });
             $( "#"+DynamicIDs).on( "dragstop", function( event, ui ) {
                setTimeout(function(){
                     self.returnDrag = false
                },1500)
            }); 
    },
    watch: { 
        ShowModalArea: function(newVal, oldVal) { // watch it
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        },
        returnDrag: function(newVal, oldVal) { // watch it
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            this.returnDrag =newVal
        },
    },
    methods:{
    ...mapActions([
    'ACTION_CHANGE_STATE',
    ]),
    ...mapMutations([
        
    ]),
    
    ShowElement(value){
        //   this.colorValue = value
          console.log(value, 'ssss')
          var ColorValue = this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
          this.colorValue = 'rgba('+ColorValue+')'
          this.showColorPicker=true
          this.clickedInput= 'One'
        //  console.log( , 'value')
      },
      ShowElement1(value){
            this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1+')'
        console.log('sjahsja')
         this.clickedInput= 'Two'
          this.showColorPicker=true
      },
      ShowElement2(value){
            this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2+')'
        console.log('sjahsja')
         this.clickedInput= 'Third'
          this.showColorPicker=true
      },
      ShowElement3(value){
        this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3+')'
        this.clickedInput= 'forth'
        this.showColorPicker=true
        },
      ShowElement4(value){
        this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4+')'
        this.clickedInput= 'five'
        this.showColorPicker=true
        },
      ShowElement5(value){
        this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5+')'
        this.clickedInput= 'six'
        this.showColorPicker=true
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
        console.log(e.currentTarget)
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
            // alert(hideElementValueModal)
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
    disableDraggable(value){
        // alert(value)
        $("#"+value).draggable("disable")
        this.ACTION_CHANGE_STATE(['newDisableIndex', value])
    },
    enableDragData(){
         if(this.$store.state.newDisableIndex !=''){
            $("#"+this.$store.state.newDisableIndex).draggable("enable")
        }else{
            $("#"+this.dynamicIndexValue).draggable("enable")
        }
    },
    sentFlip(value, event){
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
    }
    }
}
</script>

<style>

</style>