<template>
    <div>
        <div id="menu">
             <div class="left_sidemenu">
                <ul id="sideicon_nav">
                    <li @click="ClickNav == false ? openNav('search') :closeNav($event)" class="active">
                        <svg id="search" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M28.591 27.273l-7.263-7.264c1.46-1.756 2.339-4.010 2.339-6.471 0-5.595-4.535-10.129-10.129-10.129-5.594 0-10.129 4.535-10.129 10.129 0 5.594 4.536 10.129 10.129 10.129 2.462 0 4.716-0.879 6.471-2.339l7.263 7.264 1.319-1.319zM4.475 13.538c0-4.997 4.065-9.063 9.063-9.063 4.997 0 9.063 4.066 9.063 9.063s-4.066 9.063-9.063 9.063c-4.998 0-9.063-4.066-9.063-9.063z"></path>
                        </svg>
                        <span>Search</span>
                    </li>
                    <li @click="ClickNav == false ? openNav('bg') :closeNav($event)" >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="32" viewBox="0 0 28 32">
                            <path d="M22.347 14.827v0l-10.4-10.453-0.213 0.16v-0.267c0-1.76-1.44-3.2-3.2-3.2s-3.2 1.44-3.2 3.2v6.667l-4.427 4.427c-1.227 1.227-1.227 3.2 0 4.427l6.027 6.027c0.587 0.64 1.44 0.907 2.24 0.907s1.6-0.32 2.24-0.907l7.627-7.68h6.56l-3.253-3.307zM6.4 4.267c0-1.173 0.96-2.133 2.133-2.133s2.133 0.96 2.133 2.133v1.333l-4.267 4.267v-5.6zM18.613 17.067l-8 8c-0.373 0.373-0.907 0.587-1.493 0.587-0.533 0-1.067-0.213-1.44-0.587l-6.027-6.027c-0.8-0.8-0.8-2.133 0-2.933l9.013-8.96v6.72h1.067v-7.787l0.16-0.16 11.147 11.147h-4.427z"></path>
                            <path d="M28.213 26.987c-0.32-2.88-3.413-6.72-3.413-6.72s-3.147 3.893-3.413 6.773c0 0.16 0 0.267 0 0.427 0 1.92 1.547 3.467 3.467 3.467s3.467-1.547 3.467-3.467c-0.053-0.16-0.053-0.32-0.107-0.48zM24.8 29.867c-1.333 0-2.4-1.067-2.4-2.4 0-0.107 0-0.16 0-0.267v0 0c0.16-1.6 1.387-3.68 2.347-5.12 0.96 1.387 2.187 3.52 2.4 5.067 0 0.107 0 0.213 0 0.32 0.053 1.333-1.013 2.4-2.347 2.4z" ></path>
                        </svg>
                        <span>Background</span>             
                    </li>
                    <li @click="ClickNav == false ? openNav('download') :closeNav($event)">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M11.335 13.315l-0.754 0.754 5.419 5.419 5.419-5.419-0.754-0.754-4.132 4.132v-16.877h-1.066v16.877z"></path>
                            <path d="M18.666 5.9v1.066h6.931v18.126h-19.192v-18.126h6.931v-1.066h-7.997v20.259h21.325v-20.259z"></path>
                        </svg>
                        <span>Download</span>
                    </li>
                    <li>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M19.199 28.262h-6.403v-10.398l-10.661-14.126h27.731l-10.667 14.126v10.398zM13.862 27.196h4.271v-9.688l9.592-12.703h-23.449l9.586 12.703v9.688z"></path>
                        </svg>
                        <span>Random</span>
                    </li>
                    <li>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M26.129 5.871h-5.331v-1.066c0-1.178-0.955-2.132-2.133-2.132h-5.331c-1.178 0-2.133 0.955-2.133 2.132v1.066h-5.331v1.066h1.099l1.067 20.259c0 1.178 0.955 2.133 2.133 2.133h11.729c1.178 0 2.133-0.955 2.133-2.133l1.049-20.259h1.051v-1.066zM12.268 4.804c0-0.588 0.479-1.066 1.066-1.066h5.331c0.588 0 1.066 0.478 1.066 1.066v1.066h-7.464v-1.066zM22.966 27.14l-0.002 0.027v0.028c0 0.587-0.478 1.066-1.066 1.066h-11.729c-0.587 0-1.066-0.479-1.066-1.066v-0.028l-0.001-0.028-1.065-20.203h15.975l-1.046 20.204z"></path>
                            <path d="M15.467 9.069h1.066v17.060h-1.066v-17.060z"></path>
                            <path d="M13.358 26.095l-1.091-17.027-1.064 0.068 1.091 17.027z"></path>
                            <path d="M20.805 9.103l-1.064-0.067-1.076 17.060 1.064 0.067z"></path>
                        </svg>
                        <span>Clear</span>
                    </li>
                    <li>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M26.129 2.139c-2.355 0-4.265 1.91-4.265 4.265 0 0.409 0.061 0.803 0.168 1.178l-12.469 5.226c-0.737-1.277-2.114-2.139-3.693-2.139-2.355 0-4.265 1.91-4.265 4.265s1.91 4.265 4.265 4.265c1.234 0 2.343-0.527 3.122-1.366l8.034 5.774c-0.314 0.594-0.494 1.27-0.494 1.988 0 2.356 1.91 4.266 4.265 4.266s4.265-1.91 4.265-4.266c0-2.355-1.91-4.264-4.265-4.264-1.253 0-2.376 0.544-3.157 1.404l-8.023-5.765c0.33-0.605 0.518-1.299 0.518-2.037 0-0.396-0.058-0.778-0.159-1.143l12.478-5.23c0.741 1.26 2.107 2.108 3.675 2.108 2.355 0 4.265-1.91 4.265-4.266 0-2.355-1.91-4.265-4.265-4.265zM20.798 22.398c1.764 0 3.199 1.435 3.199 3.198s-1.435 3.199-3.199 3.199c-1.764 0-3.199-1.435-3.199-3.199s1.435-3.198 3.199-3.198zM5.871 18.133c-1.764 0-3.199-1.435-3.199-3.199s1.435-3.199 3.199-3.199 3.199 1.435 3.199 3.199c0 1.764-1.435 3.199-3.199 3.199zM26.129 9.603c-1.764 0-3.199-1.435-3.199-3.199s1.435-3.199 3.199-3.199c1.764 0 3.199 1.435 3.199 3.199s-1.435 3.199-3.199 3.199z" ></path>
                        </svg>
                        <span>Share</span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="mySidenav" class="sidenav">
            <!-- <a class="closebtn" @click="this.closeNav">&times;</a> -->
            <div v-if="this.showSearchBar" class="search_before">
                <input type="text" placeholder="Search" class="form-control"/>
                <ul class="nav nav-pills mt-3 nav-justified" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="tab" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Packs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="tab" href="#pills-profile" role="tab" aria-controls="profile" aria-selected="false">Icons</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <ul>
                            <li>
                                <a @click="Changetab('animal')">
                                    <h2>Animal Icon Collection</h2>
                                    <img src="images/all_use_icon/animal_icon.png" alt="" title="">
                                </a>
                            </li>
                            <li>
                                <a  @click="Changetab('space')">
                                    <h2>Space Elements</h2>
                                    <img src="images/all_use_icon/space_icon.png" alt="" title="">
                                </a>
                            </li>
                            <li>
                                <a  @click="Changetab('wedding')">
                                    <h2>Wedding Set</h2>
                                    <img src="images/all_use_icon/wedding_icon.png" alt="" title="">
                                </a>
                            </li>
                            <li>
                                <a  @click="Changetab('food')">
                                    <h2>Food Set</h2>
                                    <img src="images/all_use_icon/food_icon.png" alt="" title="">
                                </a>
                            </li>
                            <li>
                                <a  @click="Changetab('thanksgiving')">
                                    <h2>Thanksgiving</h2>
                                    <img src="images/all_use_icon/thanksgiving.png" alt="" title="">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="icon_inner">
                            <input type="hidden" value="0" id="bullDogSvg">
                            <!-- Animal Svg  Start-->
                            <ul v-if="showTabMenu =='animal'">
                                <li>                                    
                                    <img @click="getSvgName($event), addSvg('BullDogSvg')" name="BullDogSvg" src="images/animals/bulldog.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('Hippo')" name="Hippo" src="images/animals/hippopotamus.svg"  data-svg="images/animals/hippopotamus.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('Llama')" name="Llama" src="images/animals/llama.svg"  data-svg="images/animals/llama.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Mouse')" name="Mouse" src="images/animals/mouse.svg"  data-svg="images/animals/mouse.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Squirrel')" name="Squirrel" src="images/animals/squirrel.svg"  data-svg="images/animals/squirrel.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                            </ul>
                            <!-- Animal Svg EnD -->
                            
                            
                            <!-- Food Svg -->
                            <ul v-if="showTabMenu == 'food'">
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/food/bread.svg"  data-svg="images/food/bread.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Burger')" name="Burger" src="images/food/burger.svg"  data-svg="images/food/burger.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('cheese')" name="Cheese" src="images/food/cheese.svg"  data-svg="images/food/cheese.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('chocolate')" name="anteater" src="images/food/chocolate.svg"  data-svg="images/food/chocolate.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Cookie')" name="Cookie" src="images/food/cookie.svg"  data-svg="images/food/cookie.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('FrenchFries')" name="anteater" src="images/food/french-fries.svg"  data-svg="images/food/french-fries.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Pie')" name="Pie" src="images/food/pie.svg"  data-svg="images/food/pie.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Pizza')" name="Pizza" src="images/food/pizza.svg"  data-svg="images/food/pizza.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Popcorn')" name="Popcorn" src="images/food/popcorn.svg"  data-svg="images/food/popcorn.svg" alt=""  draggable="true" @dragstart="drag($event)" >                                   
                                </li>
                                <li>
                                    <img @click="addSvg('Steak')" name="Steak" src="images/food/steak.svg"  data-svg="images/food/steak.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                            </ul>
                            <!-- Food Svg End -->

                            <!-- Space Svg  -->
                            <ul v-if="showTabMenu == 'space'"> 
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/space/man-on-the-moon.svg"  data-svg="images/space/man-on-the-moon.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/space/mercury.svg"  data-svg="images/space/mercury.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/space/orbit.svg"  data-svg="images/space/orbit.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/space/saturn.svg"  data-svg="images/space/saturn.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/space/solar-system.svg"  data-svg="images/space/solar-system.svg" alt="">                                    
                                </li>
                            </ul>
                            <!-- Space Svg  -->

                            <!-- ThanksGiving -->
                            <ul v-if="showTabMenu == 'thanksgiving'">
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/corn.svg"  data-svg="images/thanksgiving/corn.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/leaf.svg"  data-svg="images/thanksgiving/leaf.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/pilgrim.svg"  data-svg="images/thanksgiving/pilgrim.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/pumpkin.svg"  data-svg="images/thanksgiving/pumpkin.svg" alt="">                                    
                                </li>
                                <li>
                                     <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/sunflower.svg"  data-svg="images/thanksgiving/sunflower.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/turkey.svg"  data-svg="images/thanksgiving/turkey.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/turkeybird.svg"  data-svg="images/thanksgiving/turkeybird.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/wheat.svg"  data-svg="images/thanksgiving/wheat.svg" alt="">                                    
                                </li>
                            </ul>
                            <!-- ThanksGiving -->


                            <!-- Wedding Svg -->
                            <ul v-if="showTabMenu == 'wedding'">
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/arch.svg"  data-svg="images/wedding/arch.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/car.svg"  data-svg="images/wedding/car.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/champagne.svg"  data-svg="images/wedding/champagne.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/church.svg"  data-svg="images/wedding/church.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/engagement.svg"  data-svg="images/wedding/engagement.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/wedding-cake.svg"  data-svg="images/wedding/wedding-cake.svg" alt="">                                    
                                </li>
                                <li>
                                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/wedding-rings.svg"  data-svg="images/wedding/wedding-rings.svg" alt="">                                    
                                </li>
                            </ul>
                            <!-- Wedding Svg -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="bgcolor_tab search_before" v-if="this.showBgBar" >
                <div class="tab-content">
                    <div class="tab-pane active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                        <ul>
                            <li>
                                <h2>Pick Background Color</h2>
                            </li>
                        </ul>
                        <ul class="colors">
                            <li class="color color-light">
                                <button data-value="fff" @click="getbgcolorValue($event)" style="background-color:#fff;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="f5685d" @click="getbgcolorValue($event)" style="background-color:#f5685d;" class="nostyle active"></button>
                            </li>
                            <li class="color">
                                <button data-value="ec4a81" @click="getbgcolorValue($event)" style="background-color:#ec4a81;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="af51bf" @click="getbgcolorValue($event)" style="background-color:#af51bf;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="8460c4" @click="getbgcolorValue($event)" style="background-color:#8460c4;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="4caaf4" @click="getbgcolorValue($event)" style="background-color:#4caaf4;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="34b9f5" @click="getbgcolorValue($event)" style="background-color:#34b9f5;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="009688" @click="getbgcolorValue($event)" style="background-color:#009688;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="4caf50" @click="getbgcolorValue($event)" style="background-color:#4caf50;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="000" @click="getbgcolorValue($event)" style="background-color:#000;" class="nostyle"></button>
                            </li>
                        </ul>
                        <color-picker class="color_picker_model" v-model="colorModel" @input="changePickerColor(colorModel)"></color-picker>
                        <ul class="mt-5">
                            <li>
                                <h2>Hex Code</h2>
                            </li>
                        </ul>
                        <input type="text" value="" class="color_code"  v-model="colorModel" name="">
                        <ul class="mt-5">
                            <li>
                                <h2>Color Opacity</h2>
                            </li>
                        </ul>
                        <vue-slider
                            ref="slider"
                            v-model="value"
                            v-bind="options"  @change="getSliderValue(value)">
                        </vue-slider>
                        <h3 class="text-right">{{ value }}%</h3>
                    </div>
                </div>
            </div>
            <div class="bgcolor_tab search_before" v-if="this.showDownloadBar" >
                <div class="tab-content">
                    <div class="tab-pane active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                        <ul>
                            <li>
                                <h2>Format</h2>
                            </li>
                        </ul>
                        <ul class="nav nav-pills mt-3 nav-justified download">
                            <li class="nav-item">
                                <label for="download-png">
                                    <input type="radio" name="download" id="download-png" checked="">
                                    <span class="title btn">png</span>
                                </label>
                            </li>
                            <li class="nav-item">
                                <label for="download-jpg">
                                    <input type="radio" name="download" id="download-jpg">
                                    <span class="title btn">jpg</span>
                                </label>
                            </li>
                            <li class="nav-item">
                                <label for="download-svg">
                                    <input type="radio" name="download" id="download-svg">
                                    <span class="title btn">svg</span>
                                </label>
                            </li>
                            <li class="nav-item">
                                <label for="download-base64">
                                    <input type="radio" name="download" id="download-base64">
                                    <span class="title btn">b64</span>
                                </label>
                            </li>
                        </ul>
                        <ul class="mt-3">
                            <li>
                                <h2>Tile size (px)</h2>
                            </li>
                        </ul>
                        <input type="number" value="" class="color_code"  v-model="colorModel" name="">
                        <ul class="mt-3 mb-0">
                            <li>
                                <h2>Image size (px)</h2>
                            </li>
                        </ul>
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="number" value="" class="color_code m-0"  v-model="colorModel" name="">
                            </div>
                            <div class="col-sm-6">
                                <input type="number" value="" class="color_code m-0"  v-model="colorModel" name="">
                            </div>
                        </div>
                        <div class="img_preview">
                            <div class="fixed_div">
                                <img src="images/all_use_icon/food_icon.png" alt="" title="">
                            </div>
                            <button class="download_btn"> <img src="images/all_use_icon/download.svg" alt="" title="">Download Pattern </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
import json from "../components/animals.json";
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    mounted(){
       $(function() {
        $("#sideicon_nav li").click(function() {
            // remove classes from all
            $("#sideicon_nav li").removeClass("active");
            // add class to the one we clicked
            $(this).addClass("active");
        });
        });
        this.showSearchBar = true
        // this.ClickNav = true
        document.getElementById("mySidenav").style.width = "318px";
        document.getElementById("mySidenav").style.left = "110px";
        
        
    },
    components: {
    "color-picker": ColorPicker,
    VueSlider,
    },
    computed: {
        ...mapState([ 
            'rightBodyBackground',
            'svgName' ,
            'AnimalIconArray', 
            'urlSvg'
        ])
    },
    data() {
        return{
            colorModel:"",
            showSearchBar:"",
            showBgBar:"",
            showDownloadBar:"",
            myJson: json,
            ClickNav:true,
            showTabMenu:'',
            value: 100,
            options: {
                dotSize: 14,
                width: 'auto',
                height: 10,
                contained: false,
                direction: 'ltr',
        	    data: null,
                min: 0,
                max: 100,
                interval: 1,
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
            }

        }
    },
     methods:{
        ...mapActions([
        'ACTION_CHANGE_STATE',
        'PUSH_ANIMAL_ARRAY',
        'PUSH_TO_URL_SVG_ARRAY',
        'ACTION_PUSH_TO_SVG'
        ]),
        ...mapMutations([
            
        ]),
      openNav(value) {
          this.ClickNav = true
         if(value === 'search'){
               this.showSearchBar = true
                this.showBgBar = false
         }else if (value === 'bg'){
                this.showBgBar = true
         }else if(value ==='download'){
           this.showDownloadBar = true
         } 

         document.getElementById("mySidenav").style.width = "318px";
         document.getElementById("mySidenav").style.left = "110px";
      },
        drag(ev) {
            console.log(ev.target.name)
                ev.dataTransfer.setData("text", ev.target.name);
        },
      getValue(){
          var Arrayvalue = this.myJson.Animals
        //   Arrayvalue.map((d)=>{
        //       if(d.name== this.svgName){
        //           alert('here')
        //           console.log(d.svg)
        //         var data={
        //            name:d.name,
        //            background:d.background,
        //            background1:d.background1,
        //            background2:d.background2,
        //            svg:d.svg
        //          }
        //          this.PUSH_ANIMAL_ARRAY(data)
        //       }
        //   })
      },
        
      closeNav (event) {
            this.ClickNav = false
            this.showSearchBar = false
            this.showBgBar = false
            this.showDownloadBar = false
            document.getElementById("mySidenav").style.width = "318px";
            document.getElementById("mySidenav").style.left = "-20%";
        },
        changePickerColor(value){
            console.log(value)
            var hex = value.replace('#','');
            var r = parseInt(hex.substring(0,2), 16);
            var g = parseInt(hex.substring(2,4), 16);
            var b = parseInt(hex.substring(4,6), 16);
            var opacity = '100'
            var result = r+','+g+','+b+','+opacity/100;
            this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
            this.value = 100;
        },
        getbgcolorValue(e){
            var colorCode = '#'+e.target.dataset.value
            this.colorModel =colorCode
            var hex = colorCode.replace('#','');
            var r = parseInt(hex.substring(0,2), 16);
            var g = parseInt(hex.substring(2,4), 16);
            var b = parseInt(hex.substring(4,6), 16);
            var opacity = '100'
            var result = +r+','+g+','+b+','+opacity/100;
            this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
            this.value = 100;
        },
        getSliderValue(value){
            var SliderValue  = value/100
            console.log(SliderValue)
            var colorvalue  = $('.main_div').attr('value')
            var test = colorvalue.split(',')
            console.log(test[0],test[1],test[2])
            var result = test[0]+','+test[1]+','+test[2]+','+SliderValue
            this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
        },
        getSvgName(e){
            console.log(e.target.dataset.svg ,'ttttt')
            this.ACTION_CHANGE_STATE(["svgName" , e.target.name])
            this.getValue()
            this.ACTION_CHANGE_STATE(['urlSvg' , e.target.dataset.svg])
            this.PUSH_TO_URL_SVG_ARRAY(e.target.dataset.svg)
        },
        addSvg (SvgName) {
            var x = $('#bullDogSvg').val()
            this.ACTION_PUSH_TO_SVG(SvgName)
            this.ACTION_CHANGE_STATE(['dynamicIndex' ,x])
            x++
            $('#bullDogSvg').val(x)
        },
        Changetab(value){
            $('#pills-home').removeClass('active show')
            $('#pills-home-tab').removeClass('active')
            $('#pills-profile-tab').addClass('active')
            $('#pills-profile').addClass('active show')
            this.showTabMenu = value
        }
    }
}
</script>

<style>

</style>