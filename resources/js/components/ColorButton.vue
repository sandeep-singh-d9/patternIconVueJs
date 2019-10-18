<template>
  <div>
        <button :style="{background:'rgba('+this.value+')' , width:'50px' ,height:'50px'}" @click="ShowElement(value)"></button>
               
               
        <button :style="{backgroundColor:'rgba('+this.valueOne+')' , width:'50px' , height:'50px'}" @click="ShowElement1(valueOne)"></button>
        
        
        <button :style="{backgroundColor:'rgba('+this.valueTwo+')' , width:'50px' , height:'50px'}" @click="ShowElement2(valueTwo)"></button>
        
        <Colorpicker v-if="this.showColorPicker" :colorElement ="this.colorValue" :valueElement="this.clickedInput"/>
        
        <button v-if="this.showColorPicker" @click="hideElement">Close</button>


        <!-- <SvgComponent/> -->
        <!-- <AnimalSvg/> -->
  </div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
import Colorpicker from './colorPickerComponent'
import SvgComponent from './svgDisplay'
import AnimalSvg from './AnimalSvg'
export default {
    props:['value' ,'valueOne', 'valueTwo' ],
      computed: {
        ...mapState([ 
            'background' ,
            'background1',
            'background2', 
        ])
    },
    data(){
        return{
           colorValue:'',
           showColorPicker:false,
           clickedInput:''
        }
    },
    components:{
      Colorpicker,
      SvgComponent,
      AnimalSvg
    },
    mounted(){
     
    },
  methods:{
      ...mapActions([
        'ACTION_CHANGE_STATE',
        ]),
        ...mapMutations([
            
        ]),
      ShowElement(value){
        //   this.colorValue = value
          console.log(value)
          this.colorValue = 'rgba('+value+')'
          this.showColorPicker=true
          this.clickedInput= 'One'
      },
      ShowElement1(value){
            this.colorValue = 'rgba('+value+')'
        console.log('sjahsja')
         this.clickedInput= 'Two'
          this.showColorPicker=true
      },
      ShowElement2(value){
            this.colorValue = 'rgba('+value+')'
        console.log('sjahsja')
         this.clickedInput= 'Third'
          this.showColorPicker=true
      },
      hideElement(){
           this.showColorPicker=false
      }
  }
}
</script>

<style>

</style>