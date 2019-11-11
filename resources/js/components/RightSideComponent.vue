<template>
  <div :style="{background:'rgba('+this.$store.state.rightBodyBackground+')'}" id="main" @drop="drop($event)" @dragover="allowDrop($event)">
    <div v-for="(Svgs , index) in dataSvgComponent" :key="index" class="right_icondiv" :id="index" :style="{'height':'0px', 'top':'12px','left':'72px'}">
       <div v-for="(itemsName , key) in Svgs" :key="key">
        <component :dynamicIndexValue="index" :ValueId="'Svg_'+index" :svgName="itemsName.name" :is="itemsName.name" :dynamicBackground="itemsName.background"  :dynamicBackgroundOne="itemsName.background1" :dynamicBackgroundTwo="itemsName.background2" :NavClicked="true"></component>
       </div>
    </div>
  </div>
</template>

<script>
import HoverEdit from './common/hoverEdit' 
import BullDogSvg from './animalSvg/bulldog'
import Hippo from './animalSvg/hippopotamusComponent'
import Llama from './animalSvg/llamaComponent' 
import Mouse from './animalSvg/mouseComponent'
import Squirrel from './animalSvg/squirrelComponent' 
import Popcorn from './foodSvg/popcornComponent'
import Steak from './foodSvg/steakComponent' 
import Pizza from './foodSvg/pizzaComponent' 
import Pie from './foodSvg/pieComponent' 
import FrenchFries from './foodSvg/frenchFriesComponent' 
import Colorpicker from './colorPickerComponent'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
   components:{
       HoverEdit,
       BullDogSvg,
       Hippo,
       Llama,
       Mouse,
       Squirrel,
       Popcorn,
       Steak,
       Pizza,
       Pie,
       FrenchFries,
       Colorpicker
   },
   data(){
     return {
        openModal:false,
        ShowEditor:false,
        id:'',
        test:'#000',
        xAxis:'12px',
        yAxis:'75px'
     }
   },
   mounted(){
   
    //  var idValue =this.dynamicIndex
      
   },
  computed:{
      ...mapState([
          'divData',
          'SvgComponent',
          'dynamicIndex',
          'dynamicName'
      ]),
      data:{
          get(){
              return this.$store.state.AnimalIconArray
          },
          set(newValue){
              return console.log(newValue)
          }
      },
      url:{
        get(){
          return this.$store.state.urlSvg
        },
        set(newValue){
            return console.log(newValue)
        }
      },
      AllSvgUrl:{
        get(){
          return this.$store.state.urlSvgArray
        },set(newValue){
            return console.log(newValue)
        }
      },
      testValue:{
         get(){
          return this.$store.state.divData
        },set(newValue){
            return console.log(newValue)
        }
      },
      dataSvgComponent:{
        get(){
          return this.$store.state.SvgComponent
        },
        set(newValue){
            return console.log(newValue)
        }
      }
  }, 
  methods:{
    ...mapActions([
        'ACTION_CHANGE_STATE',
        'ACTION_PUSH_TO_SVG'
    ]),
    ...mapMutations([
              
    ]),
    drop(e){
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      this.addSvg(data)
    },
    allowDrop(ev){
       ev.preventDefault();
    },
    addSvg (SvgName) {
     
      var x = $('#bullDogSvg').val()
        
      this.ACTION_PUSH_TO_SVG(SvgName)
      this.ACTION_CHANGE_STATE(['dynamicIndex' ,x])
      x++
      $('#bullDogSvg').val(x)
      
    },
  }
}
</script>

<style>

</style>