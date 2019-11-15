<template>
  <div  style="height:0px">
    <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}"  >
      <g>
	<g>
		<g>
			<rect x="113.472" y="297.479"  :style="{fill:'rgba(95, 117, 133,1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color1'" width="27.124" height="85.71"/>
			<rect x="113.472" y="374.51" :style="{fill:'#2D3740' , transform: 'scale(0.2)'}" :class="ValueId+'_color3'" width="27.124" height="8.68"/>
		</g>
		<path  :style="{fill:'rgba(200, 201, 201, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'"  d="M102.666,245.36c0-13.458,10.91-24.368,24.368-24.368c13.459,0,24.369,10.91,24.369,24.368v52.162
			c0,13.46-10.91,24.368-24.369,24.368c-13.457,0-24.368-10.908-24.368-24.368C102.666,297.522,102.666,245.36,102.666,245.36z"/>
	</g>
	<g>
		<g>
			<rect x="234.985" y="297.479"  :style="{fill:'rgba(95, 117, 133,1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color1'" width="27.123" height="85.71"/>
			<rect x="234.985" y="374.51" style="fill:#2D3740;transform:scale(0.2)" width="27.123" :class="ValueId+'_color3'" height="8.68"/>
		</g>
		<path  :style="{fill:'rgba(200, 201, 201, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M224.179,245.36c0-13.458,10.91-24.368,24.368-24.368c13.459,0,24.369,10.91,24.369,24.368v52.162
			c0,13.46-10.91,24.368-24.369,24.368c-13.458,0-24.368-10.908-24.368-24.368V245.36z"/>
	</g>
	<g>
		<g>
			<rect x="78.169" y="297.479"  :style="{fill:'rgba(200, 201, 201, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" width="27.124" height="85.71"/>
			<rect x="78.169" y="374.51"  :style="{fill:'rgba(51, 62, 72 , 1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color3'" width="27.124" height="8.68"/>
		</g>
		<path style="fill:#DADBDC;transform:scale(0.2)" :class="ValueId+'_color4'" d="M67.362,245.36c0-13.458,10.911-24.368,24.369-24.368s24.368,10.91,24.368,24.368v52.162
			c0,13.46-10.91,24.368-24.368,24.368s-24.369-10.908-24.369-24.368C67.362,297.522,67.362,245.36,67.362,245.36z"/>
	</g>
	<g>
		<g>
			<rect x="199.682" y="297.479"  :style="{fill:'rgba(200, 201, 201, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" width="27.123" height="85.71"/>
			<rect x="199.682" y="374.51"  :style="{fill:'rgba(51, 62, 72 , 1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color3'" width="27.123" height="8.68"/>
		</g>
		<path style="fill:#DADBDC;transform:scale(0.2)" :class="ValueId+'_color4'" d="M188.875,245.36c0-13.458,10.911-24.368,24.369-24.368c13.458,0,24.368,10.91,24.368,24.368v52.162
			c0,13.46-10.91,24.368-24.368,24.368s-24.369-10.908-24.369-24.368V245.36z"/>
	</g>
	<path style="fill:#DADBDC;transform:scale(0.2)" :class="ValueId+'_color4'" d="M300.96,15.706h-26.792c-20.19,0-36.557,16.367-36.557,36.558c0,0.015,0.001,0.027,0.001,0.042
		v80.807H91.724c-9.186,0-17.86,2.282-25.505,6.285c-3.617-4.653-9.255-7.66-15.605-7.66c-10.92,0-19.773,8.852-19.773,19.774
		c0,7.102,3.758,13.313,9.383,16.8c-2.462,6.248-3.83,13.035-3.83,20.133v27.665c0,30.434,24.899,55.332,55.332,55.332h156.621
		c30.432,0,55.332-24.899,55.332-55.332V88.708c18.922-1.392,33.842-17.17,33.842-36.444
		C337.517,32.073,321.151,15.706,300.96,15.706z"/>
	<path  :style="{fill:'rgba(95, 117, 133,1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M347.059,52.831h-8.588v15.878h13.199V57.442C351.67,54.896,349.606,52.831,347.059,52.831z"/>
	<path  :style="{fill:'rgba(200, 201, 201, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M337.469,51.016c-0.25-7.372-2.662-14.193-6.652-19.834h-45.734c0,3.64-1.983,6.811-4.924,8.51
		c0.371,1.036,0.584,2.146,0.584,3.312c0,2.742-1.126,5.222-2.938,7.004c10.354,2.985,17.928,12.525,17.928,23.841
		c0,5.751-1.96,11.038-5.242,15.246h42.554c10.662,0,19.304-8.643,19.304-19.302C352.348,60.652,345.995,53.018,337.469,51.016z"/>
	<circle  :style="{fill:'rgba(51, 62, 72 , 1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="319.199" cy="47.335" r="4.331"/>
	<path  :style="{fill:'rgba(200, 201, 201, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'"  d="M276.455,29.272c-2.855,2.854-7.486,2.854-10.342,0c-2.855-2.856-2.856-7.489,0-10.344L285.043,0
		c5.711,5.711,5.712,14.971,0.001,20.682L276.455,29.272z"/>
</g>
    </svg>

        <!-- <svg @click="getCircle(dynamicIndexValue, $event)"  xmlns:xlink="http://www.w3.org/1999/xlink"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue">
                <use  @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
      
        <svg  xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use   @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg  xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use  @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg  xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use  @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg> -->
 <!-- start model for all changes -->
        <div class="modal inner_color_model w3-animate-left" :id="'myModal'+dynamicIndexValue">
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
                                <a class="nav-link" data-tooltip="Clone"   @click="openElementInModal('duplicate') ,cloneElement($event)"><img src="images/all_use_icon/duplicate.svg"></a>
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
                                {{svgName+dynamicIndex}}
                                <div class="bulldog_svg" :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
                                    <h2>Select Color</h2>
                                    <button :style="{background:'rgba('+getterLlamBg1+')'}" @click="ShowElement(getterLlamBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLlamBg2+')'}" @click="ShowElement1(getterLlamBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterLlamBg3+')'}" @click="ShowElement2(getterLlamBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterLlamBg4+')'}" @click="ShowElement3(getterLlamBg4)" :class="this.ValueId+'_color4btn'"></button>
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







    <!-- <div :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
        <button :style="{background:'rgba(95, 117, 133,1)' , width:'50px' ,height:'50px'}" @click="ShowElemLlam)" :class="this.ValueId+'_color1btn'"></button>
               
               
        <button :style="{backgroundColor:'rgba(200, 201, 201, 1)' , width:'50px' , height:'50px'}" @click="ShowElement1(getterHippoBg2)" :class="this.ValueId+'_color2btn'"></button>
    
    
        <button :style="{backgroundColor:'rgba(51, 62, 72 , 1)' , width:'50px' , height:'50px'}" @click="ShowElement2(getterHippoBg3)" :class="this.ValueId+'_color3btn'"></button>
    </div>
    <Colorpicker v-if="this.showColorPicker" :colorElement ="this.colorValue" :valueElement="this.clickedInput"/>
     <button v-if="this.showColorPicker" @click="hideElement">Close</button> -->
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
} from 'vuex';
export default {
//   props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndex', 'ValueId' , 'svgName'],
props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndexValue', 'ValueId' ,  'svgName' , 'NavClicked'],
  components:{
        Colorpicker,
        VueSlider
    },
     mounted(){
        $("#myModal").modal({
            focus: false,
            // Do not show modal when innitialized.
            show: false,
            backdrop: 'static', // For static modal
            keyboard: false // prevent click outside of the modal
        });
        
        /*
            This will get these from SvgComponentArray
        */
            this.sliderValue = this.$store.state.SvgComponent[this.dynamicIndexValue][0].circleSlider

            this.scaleValue = this.$store.state.SvgComponent[this.dynamicIndexValue][0].zoomValue
            
            this.flipElement = this.$store.state.SvgComponent[this.dynamicIndexValue][0].flipValue
        /*
            End
        */
        var llama= [
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
       
        
        if(this.$store.state.randomIndexElement == '1'){
            this.scaleValue = '1.2'
        }else if(this.$store.state.randomIndexElement == '3'){
                 this.sliderValue = '54'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = llama[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  llama[this.$store.state.randomIndexElement].top 
            if(this.$store.state.randomFirstSvg == 'Llama'){
                // console.log(randomNumber ,'---', randomNumberTop)
                this.ACTION_CHANGE_STATE(['randomYAxis', randomNumberTop])
                this.ACTION_CHANGE_STATE(['randomXAxis' , randomNumber])
            }
            var randomWidth = randomNumber
            var randomHeight = randomNumberTop
        }else{    
            var randomWidth = Math.floor(Math.random()*200);
            var randomHeight = Math.floor(Math.random()*500);
        }
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
            'background' ,
            'background1',
            'background2',
            'dynamicIndex',
            'dynamicName',
            'newDisableIndex',
            'randomYAxis',
            'randomXAxis'   
        ]),
        getterLlamBg1:{
            get(){
            //  console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
              if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Llama'){
                  return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
              }

            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterLlamBg2:{
            get(){
                 if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Llama'){
                     return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                 }
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterLlamBg3:{
            get(){
                 if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Llama'){
                     return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                 }
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterLlamBg4:{
            get(){
             return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
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
    watch: { 
        ShowModalArea: function(newVal, oldVal) { // watch it
            // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        },
        returnDrag: function(newVal, oldVal) { // watch it
            // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
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
        //   console.log(value, 'ssss')
          var ColorValue = this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
          this.colorValue = 'rgba('+ColorValue+')'
          this.showColorPicker=true
          this.clickedInput= 'One'
        //  console.log( , 'value')
      },
      ShowElement1(value){
            this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1+')'
        // console.log('sjahsja')
         this.clickedInput= 'Two'
          this.showColorPicker=true
      },
      ShowElement2(value){
            this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2+')'
        // console.log('sjahsja')
         this.clickedInput= 'Third'
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
      ShowElement3(value){
            this.colorValue = 'rgba('+this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3+')'
            this.clickedInput= 'forth'
            this.showColorPicker=true
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
    sentFlip(value){
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
                    name:'Llama',
                    background :  backgroundClone,
                    background1:  background1Clone,
                    background2:  background2Clone,
                    background3:  background3Clone,
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