<template>
  <div style="height:0px">
   <svg @click="getCircle(dynamicIndexValue, $event)"  v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}" >
        <g class="icon" :id="'viewport'+ValueId" style="x='10.5'; y='3'">     
            <path :style="{fill:'rgba(101, 81, 60,1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'"
            d="M233.058,210.95c27.653,0,50.072,22.419,50.072,50.072c0,8.669-2.204,16.823-6.081,23.933h5.28 c7.218,0,13.07,5.852,13.07,13.07v7.171c0,3.259-2.641,5.9-5.9,5.9h-56.441c-27.655,0-50.074-22.419-50.074-50.074 C182.984,233.369,205.403,210.95,233.058,210.95z" />
            <path :style="{fill:'rgba(101, 81, 60,1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'"
            d="M78.038,210.95c-27.654,0-50.073,22.419-50.073,50.072c0,8.669,2.205,16.823,6.082,23.933h-5.28 c-7.218,0-13.07,5.852-13.07,13.07v7.171c0,3.259,2.641,5.9,5.9,5.9h56.441c27.655,0,50.074-22.419,50.074-50.074 C128.113,233.369,105.694,210.95,78.038,210.95z"  />
            <path :style="{fill:'#9C7F4D',transform: 'scale('+scale+')'}" :class="ValueId+'_color4'"
            d="M103.912,311.096h103.273c22.948,0,41.727-18.778,41.727-41.728v-86.505 c0-51.564-41.801-93.364-93.365-93.364s-93.364,41.8-93.364,93.364v86.505C62.184,292.318,80.962,311.096,103.912,311.096z" />
            <path :style="{fill:'rgba(255, 255, 255 , 1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color3'"
            d="M62.184,207.95v55.777c12.467-3.153,21.693-14.442,21.693-27.889 C83.877,222.392,74.651,211.103,62.184,207.95z" />

            <path :style="{fill: '#9C7F4D',transform:'scale('+scale+')' }" :class="ValueId+'_color4'"
            d="M210.947,8.397h-110.8c-24.623,0-44.77,20.146-44.77,44.77v46.872 c0,55.322,44.848,100.169,100.17,100.169c55.321,0,100.169-44.847,100.169-100.169V53.166 C255.717,28.543,235.571,8.397,210.947,8.397z" />
            <path :style="{fill:'rgba(255, 255, 255 , 1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color3'" d="M193.767,95.523h-76.438c-11.774,0-21.318,9.544-21.318,21.318v42.638 c0,11.774,9.544,21.319,21.318,21.319s21.318-9.545,21.318-21.319v-21.318h33.801v21.318c0,11.774,9.544,21.319,21.318,21.319 c11.774,0,21.318-9.545,21.318-21.319v-42.638C215.085,105.067,205.541,95.523,193.767,95.523z" />

            <path :style="{fill:'#FADF8D',transform: 'scale('+scale+')'}" :class="ValueId+'_color6'" d="M131.8,131.792c-3.284, 0-4.629-2.327-2.986-5.172l5.782-10.016c1.643-2.845,4.33-2.845,5.973,0 l5.782,10.016c1.642,2.845,0.298,5.172-2.986,5.172H131.8z" />
            <path :style="{fill:'#FADF8D',transform: 'scale('+scale+')'}" :class="ValueId+'_color6'" d="M179.296,131.792c3.284,0,4.629-2.327,2.985-5.172l-5.781-10.016c-1.642-2.845-4.33-2.845-5.973,0 l-5.782,10.016c-1.643,2.845-0.298,5.172,2.986,5.172H179.296z" />
            <path :style="{fill:'rgba(130, 105, 64, 1)' ,transform: 'scale('+scale+')'}" :class="ValueId+'_color2'"
            d="M172.667,122.066h-34.24c-7.607,0-13.834,6.225-13.834,13.834v7.549  c0,17.097,13.858,30.953,30.955,30.953c17.096,0,30.954-13.856,30.954-30.953V135.9 C186.502,128.29,180.276,122.066,172.667,122.066z" />

            <path :style="{fill:'#333E48', transform: 'scale('+scale+')'}" d="M165.539,106.347c-5.062,5.251-13.496,5.399-18.74,0.335l-5.853-5.648 c-5.247-5.066-3.571-9.21,3.722-9.21h21.62c7.293,0,9.117,4.296,4.054,9.543L165.539,106.347z" />
            <path
            :style="{fill:'rgba(101, 81, 60,1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'"
            d="M252.347,51.524c-13.42,0.246-24.591-10.54-24.825-23.957l-0.267-14.968
            c-0.236-13.421,7.341-16.635,16.832-7.143l28.14,28.139c9.492,9.492,6.274,17.457-7.146,17.696L252.347,51.524z"
            />
            <path
            :style="{fill:'rgba(101, 81, 60,1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color1'"
            d="M58.749,51.524c13.42,0.246,24.591-10.54,24.825-23.957l0.267-14.968
            c0.237-13.421-7.34-16.635-16.831-7.143L38.87,33.595c-9.492,9.492-6.274,17.457,7.145,17.696L58.749,51.524z"
            />
            <circle
            :style="{fill:'rgba(255, 255, 255 , 1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color3'"
            cx="207.687"
            cy="60.347"
            r="24.161"
            />
            <circle
            :style="{fill:'rgba(51, 62, 72 , 1)',transform: 'scale('+scale+')'}"
            :class="ValueId+'_color5'"
            cx="207.687"
            cy="60.347"
            r="8.819"
            />
            <circle :style="{fill:'rgba(51, 62, 72 , 1)',transform:'scale('+scale+')'}" :class="ValueId+'_color5'" cx="103.409"  cy="60.347" r="8.819" />

            <path
            :style="{fill:'rgba(130, 105, 64, 1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color2'"
            d="M130.128,216.124c0-12.094-9.805-21.898-21.898-21.898c-12.094,0-21.898,9.805-21.898,21.898v68.83
        H68.179c-7.219,0-13.069,5.852-13.069,13.07v7.171c0,3.259,2.64,5.9,5.899,5.9h56.05c7.218,0,13.069-5.853,13.069-13.071V216.124z"
            />
            <path
            :style="{fill:'rgba(130, 105, 64, 1)',transform: 'scale('+scale+')' }" :class="ValueId+'_color2'"
            d="M180.968,216.124c0-12.094,9.805-21.898,21.898-21.898c12.094,0,21.898,9.805,21.898,21.898v68.83
        h18.152c7.219,0,13.069,5.852,13.069,13.07v7.171c0,3.259-2.64,5.9-5.899,5.9h-56.05c-7.218,0-13.069-5.853-13.069-13.071v-81.9
        H180.968z"
            />
        </g>
    </svg>
    

    <!-- <svg @click="getCircle(dynamicIndexValue, $event)"  xmlns:xlink="http://www.w3.org/1999/xlink"   :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" >
        <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="10.5" y="3"/>
    </svg>
    
    <svg  xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
        <use  :class="this.ValueId" :href="'#ic'+this.ValueId" x="10.5" y="3" />
    </svg>
    <svg  xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
        <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="10.5" y="3" />
    </svg>
    <svg  xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
        <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="10.5" y="3" />
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
                                <div class="bulldog_svg" :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
                                    <h2>Select Color</h2>
                                    <button :style="{background:'rgba('+getterBg1+')'}" @click="ShowElement(getterBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBg2+')'}" @click="ShowElement1(getterBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterBg3+')'}" @click="ShowElement2(getterBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBg4+')'}" @click="ShowElement3(getterBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBg5+')'}" @click="ShowElement4(getterBg5)" :class="this.ValueId+'_color5btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterBg6+')'}" @click="ShowElement5(getterBg6)" :class="this.ValueId+'_color6btn'"></button>
                                    
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
                </div>
            </div>
        </div>
    <!-- for button -->
    
    <!-- for button -->
    
     
  </div>
</template>

<script>
import ColorButton from './ColorButton'
import Colorpicker from './colorPickerComponent'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
    props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndexValue', 'ValueId' ,  'svgName' , 'NavClicked'],

    components:{
        ColorButton,
        Colorpicker,
        VueSlider,
    },
    mounted(){
        var width = window.innerWidth;
        var height = window.innerWidth
        // this.sliderValue
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
        
            var x = this.dynamicIndexValue
            $('#'+x).css({left: randomWidth , top: randomHeight})
        
        $("#myModal").modal({
            focus: false,
            // Do not show modal when innitialized.
            show: false,
            backdrop: 'static', // For static modal
            keyboard: false // prevent click outside of the modal
		});

        $(function(){
            var test = $('#'+DynamicIDs).attr('style')
                var value = test.split(';')
                if(value[2] == 'left: 0px'){
                $('#'+DynamicIDs).css('left','275px')
            }
        })
        var DynamicIDs = this.dynamicIndexValue
        // alert(DynamicIDs)
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
    computed: {
        ...mapState([ 
            'background' ,
            'background1',
            'background2',
            'dynamicIndex',
            'dynamicName' ,
            'newDisableIndex',
            'tempModalIndex',
            'popUpOpen'
        ]),
        getterBg1:{
            get(){
             console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name)    
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterBg2:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterBg3:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterBg4:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterBg5:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterBg6:{
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
            value: 100,
            ShowModalArea:'',
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
                ActiveRotate:'',
                ActiveMirror:'',
                ActiveOpacity:'',
                ActiveDuplicate:'',
                ActiveLayers:'',
                returnDrag:'',
                dataloop:[1 , 2, 3, 4, 5],
                RandomPositionArray:[
                    {
                        top:"13px",
                        left:"3px"
                    },
                    {
                        top:"18px",
                        left:"362px"
                    },
                    {
                        top:"169px",
                        left:"195px"
                    },
                    {
                        top:"171px",
                        left:"23px"
                    },
                    {
                        top:"265px",
                        left:"234px"
                    },
                    {
                        top:"293px",
                        left:"129px"
                    },
                    {
                        top:"359px",
                        left:"316px"
                    },
                    {
                        top:"432px",
                        left:"102px"
                    },
                    {
                        top:"445px",
                        left:"168px"
                    },
                    {
                        top:"510px",
                        left:"189px"
                    },
                ]

        }
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
        var ColorValue = this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
        this.colorValue = 'rgba('+ColorValue+')'
        this.showColorPicker=true
        this.clickedInput= 'One'
    },
    ShowElement1(value){
        this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1+')'
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
    hideElement(){
        this.ACTION_CHANGE_STATE(['popUpOpen' , false])
        this.showColorPicker=false
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
    getvalue(){
        alert('asashgh')
    },
    mouseOver(e){
    console.log(e , 'value')
    },
    disableDraggable(value){
        // alert(value)
        $("#"+value).draggable("disable")
        this.ACTION_CHANGE_STATE(['newDisableIndex', value])
        // $('#myModal').draggable({
        //      zIndex: 100,
        //      cursor: "move",
        //     }); 
           
        //     // Getter
        //     var zIndex = $( "#"+DynamicIDs ).draggable( "option", "zIndex" );
        //     // Setter
        //     $( "#"+DynamicIDs ).draggable( "option", "zIndex", 100 );
           
            
        //     // Getter
        //     var cursor = $( ".selector" ).draggable( "option", "cursor" );

        //     // Setter
        //     $( ".selector" ).draggable( "option", "cursor", "move" );
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
                this.ActiveRotate =''
                this.ActiveMirror =''
                this.ActiveDuplicate =''
                this.ActiveLayers=''
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
                this.ActiveRotate =''
                this.ActiveMirror =''
                this.ActiveDuplicate =''
                this.ActiveLayers=''
                this.ActivePalette =''
                this.ActiveOpacity ='active'
            }else if( value == 'duplicate'){
                this.ActiveRotate =''
                this.ActiveMirror =''
                this.ActiveLayers=''
                this.ActivePalette =''
                this.ActiveOpacity =''
                this.ActiveDuplicate ='active'
            }else if( value == 'layers'){
                this.ActiveRotate =''
                this.ActiveMirror =''
                this.ActivePalette =''
                this.ActiveOpacity =''
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

