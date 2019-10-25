<template>
  <div>
    <svg  version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="display: none;">
    <symbol :id="'ic'+this.ValueId">
        <g>
	<path  :style="{fill:'rgba(255, 156, 159,1)' }" :class="this.ValueId+'_color1'"  d="M101.252,261.521H61.25C27.477,261.521,0,234.044,0,200.27c0-33.773,27.477-61.25,61.25-61.25
		c4.143,0,7.5,3.358,7.5,7.5c0,4.143-3.357,7.5-7.5,7.5c-25.502,0-46.25,20.748-46.25,46.25s20.748,46.25,46.25,46.25h40.002
		c4.143,0,7.5,3.358,7.5,7.5C108.752,258.163,105.395,261.521,101.252,261.521z"/>
	<g>
		<path   :style="{fill:'rgba(125, 134, 140, 1)' }" :class="this.ValueId+'_color2'" d="M335.301,140.974c16.982,0,30.75,13.768,30.75,30.75s-13.768,30.75-30.75,30.75h-18.754
			c-6.625,0-11.996-5.371-11.996-11.996v-18.754C304.551,154.741,318.318,140.974,335.301,140.974z"/>
		<path   :style="{fill:'rgba(255, 156, 159,1)' }" :class="this.ValueId+'_color1'" d="M337.742,195.895c11.365,0,20.611-9.247,20.611-20.612s-9.246-20.612-20.611-20.612
			s-20.613,9.247-20.613,20.612v18.754c0,1.025,0.834,1.858,1.859,1.858H337.742z"/>
	</g>
	<path style="fill:#5C6670;" d="M291.793,171.357c-1.271,0-2.533,0.033-3.791,0.085c-23.934-25.36-57.857-41.192-95.481-41.192
		c-72.498,0-131.271,58.772-131.271,131.271h320.707C381.957,211.725,341.59,171.357,291.793,171.357z"/>
	<g>
		<path   :style="{fill:'rgba(125, 134, 140, 1)' }" :class="this.ValueId+'_color2'" d="M264.02,140.974c-16.982,0-30.75,13.768-30.75,30.75s13.767,30.75,30.75,30.75h18.754
			c6.625,0,11.996-5.371,11.996-11.996v-18.754C294.77,154.741,281.002,140.974,264.02,140.974z"/>
		<path   :style="{fill:'rgba(255, 156, 159,1)' }" :class="this.ValueId+'_color1'" d="M267.578,195.895c-11.365,0-20.613-9.247-20.613-20.612s9.248-20.612,20.613-20.612
			c11.365,0,20.611,9.247,20.611,20.612v18.754c0,1.025-0.832,1.858-1.857,1.858H267.578z"/>
	</g>
	<circle   :style="{fill:'rgba(51, 62, 72 , 1)' }" :class="this.ValueId+'_color3'" cx="381.958" cy="251.709" r="9.812"/>
	<circle   :style="{fill:'rgba(51, 62, 72 , 1)' }" :class="this.ValueId+'_color3'" cx="311.436" cy="205.307" r="4.666"/>
	<path  :style="{fill:'rgba(125, 134, 140, 1)' }" :class="this.ValueId+'_color2'" d="M154.768,261.521c0-17.121-13.877-31-30.998-31s-31,13.879-31,31H154.768z"/>
	<path  :style="{fill:'rgba(125, 134, 140, 1)' }" :class="this.ValueId+'_color2'" d="M284.768,261.521c0-17.121-13.877-31-30.998-31s-31,13.879-31,31H284.768z"/>
</g>

    </symbol>
    </svg>
     <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
     <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>

    <div :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
        <button :style="{background:'rgba(255, 156, 159,1)' , width:'50px' ,height:'50px'}" @click="ShowElement(getterHippoBg1)" :class="this.ValueId+'_color1btn'"></button>
               
               
        <button :style="{backgroundColor:'rgba(125, 134, 140, 1)' , width:'50px' , height:'50px'}" @click="ShowElement1(getterHippoBg2)" :class="this.ValueId+'_color2btn'"></button>
    
    
        <button :style="{backgroundColor:'rgba(51, 62, 72 , 1)' , width:'50px' , height:'50px'}" @click="ShowElement2(getterHippoBg3)" :class="this.ValueId+'_color3btn'"></button>
    </div>
    <Colorpicker v-if="this.showColorPicker" :colorElement ="this.colorValue" :valueElement="this.clickedInput"/>
     <button v-if="this.showColorPicker" @click="hideElement">Close</button>
  </div>
</template>

<script>
import ColorButton from '../ColorButton'
import Colorpicker from '../colorPickerComponent'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
  props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndex', 'ValueId' , 'svgName'],
  components:{
        ColorButton,
        Colorpicker
    },
   computed: {
        ...mapState([ 
            'background' ,
            'background1',
            'background2', 
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
        }
    },
    data(){
        return{
           colorValue:'',
           showColorPicker:false,
           clickedInput:''
        }
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
      hideElement(){
        this.showColorPicker=false
      }, 
    }
}
</script>

<style>

</style>