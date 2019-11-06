<template>
  <div  style="height:0px">
    <svg   @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
        <g>
    	<path :style="{fill:'rgba(255, 156, 159,1)', transform: 'scale(0.2)' }" :class="ValueId+'_color1'"  d="M101.252,261.521H61.25C27.477,261.521,0,234.044,0,200.27c0-33.773,27.477-61.25,61.25-61.25
    		c4.143,0,7.5,3.358,7.5,7.5c0,4.143-3.357,7.5-7.5,7.5c-25.502,0-46.25,20.748-46.25,46.25s20.748,46.25,46.25,46.25h40.002
    		c4.143,0,7.5,3.358,7.5,7.5C108.752,258.163,105.395,261.521,101.252,261.521z"/>
    	<g>
    		<path :style="{fill:'rgba(125, 134, 140, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M335.301,140.974c16.982,0,30.75,13.768,30.75,30.75s-13.768,30.75-30.75,30.75h-18.754
    			c-6.625,0-11.996-5.371-11.996-11.996v-18.754C304.551,154.741,318.318,140.974,335.301,140.974z"/>
    		<path :style="{fill:'rgba(255, 156, 159,1)', transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M337.742,195.895c11.365,0,20.611-9.247,20.611-20.612s-9.246-20.612-20.611-20.612
    			s-20.613,9.247-20.613,20.612v18.754c0,1.025,0.834,1.858,1.859,1.858H337.742z"/>
    	</g>
    	<path style="fill:#5C6670;transform:scale(0.2);" :class="ValueId+'_color4'" d="M291.793,171.357c-1.271,0-2.533,0.033-3.791,0.085c-23.934-25.36-57.857-41.192-95.481-41.192
    		c-72.498,0-131.271,58.772-131.271,131.271h320.707C381.957,211.725,341.59,171.357,291.793,171.357z"/>
    	<g>
    		<path :style="{fill:'rgba(125, 134, 140, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M264.02,140.974c-16.982,0-30.75,13.768-30.75,30.75s13.767,30.75,30.75,30.75h18.754
    			c6.625,0,11.996-5.371,11.996-11.996v-18.754C294.77,154.741,281.002,140.974,264.02,140.974z"/>
    		<path :style="{fill:'rgba(255, 156, 159,1)', transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M267.578,195.895c-11.365,0-20.613-9.247-20.613-20.612s9.248-20.612,20.613-20.612
    			c11.365,0,20.611,9.247,20.611,20.612v18.754c0,1.025-0.832,1.858-1.857,1.858H267.578z"/>
    	</g>
    	<circle :style="{fill:'rgba(51, 62, 72 , 1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="381.958" cy="251.709" r="9.812"/>
    	<circle :style="{fill:'rgba(51, 62, 72 , 1)' , transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="311.436" cy="205.307" r="4.666"/>
    	<path :style="{fill:'rgba(125, 134, 140, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M154.768,261.521c0-17.121-13.877-31-30.998-31s-31,13.879-31,31H154.768z"/>
    	<path :style="{fill:'rgba(125, 134, 140, 1)', transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M284.768,261.521c0-17.121-13.877-31-30.998-31s-31,13.879-31,31H284.768z"/>
    </g>
    </svg>

<!-- 
        <svg  @click="getCircle(dynamicIndexValue, $event)"  xmlns:xlink="http://www.w3.org/1999/xlink"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue">
                <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3"/>
        </svg>
      
        <svg  xmlns:xlink="http://www.w3.org/1999/xlink"  @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use  :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg  xmlns:xlink="http://www.w3.org/1999/xlink"  @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg  xmlns:xlink="http://www.w3.org/1999/xlink"  @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
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
                                    <button :style="{background:'rgba('+getterMouseBg1+')'}" @click="ShowElement(getterMouseBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMouseBg2+')'}" @click="ShowElement1(getterMouseBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterMouseBg3+')'}" @click="ShowElement2(getterMouseBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterMouseBg4+')'}" @click="ShowElement3(getterMouseBg4)" :class="this.ValueId+'_color4btn'"></button>
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
        <button :style="{background:'rgba(255, 156, 159,1)' , width:'50px' ,height:'50px'}" @click="ShowElement(getterMouseBg1)" :class="this.ValueId+'_color1btn'"></button>
               
               
        <button :style="{backgroundColor:'rgba(125, 134, 140, 1)' , width:'50px' , height:'50px'}" @click="ShowElement1(getterMouseBg2)" :class="this.ValueId+'_color2btn'"></button>
    
    
        <button :style="{backgroundColor:'rgba(51, 62, 72 , 1)' , width:'50px' , height:'50px'}" @click="ShowElement2(getterMouseBg3)" :class="this.ValueId+'_color3btn'"></button>
    </div>
    <Colorpicker v-if="this.showColorPicker" :colorElement ="this.colorValue" :valueElement="this.clickedInput"/>
     <button v-if="this.showColorPicker" @click="hideElement">Close</button> -->
  </div>
</template>

<script>
import ColorButton from '../ColorButton'
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
        getterMouseBg1:{
            get(){
             console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
              if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Mouse'){
                  return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
              }

            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterMouseBg2:{
            get(){
                 if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Mouse'){
                     return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                 }
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterMouseBg3:{
            get(){
                 if(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name==='Mouse'){
                     return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                 }
            }, 
            set(newValue){
                console.log(newValue)
            }
        },
        getterMouseBg4:{
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
                    max:10,
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