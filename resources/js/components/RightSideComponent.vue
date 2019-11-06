<template>
  <div :style="{background:'rgba('+this.$store.state.rightBodyBackground+')'}" id="main" @drop="drop($event)" @dragover="allowDrop($event)">
   <ColorButton v-if="this.openModal"/>
  <!-- <div style="height:100px ;width:100px; float:left"  v-for="(items, index) in AllSvgUrl" :key="index">
    <HoverEdit  v-if="id === index"/>
    <div class="EditSvg" style="border-radius: 50px;border: 2px solid;width: 100%;height: 100%;padding: 10px 0 0 0;" v-if="id === index"> </div>
    <div  @click="openPop(index , $event)" style="z-index:10">
    <svg :id="index" version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 510 330">
    <g v-html="items"></g>
    </svg>
</div>
  </div> -->
  
    <!-- <input type="hidden" id="hiddenModal" name="hiddenModal" value=""> -->
    <div v-for="(Svgs , index) in dataSvgComponent" :key="index" class="right_icondiv" :id="index" :style="{'height':'0px', 'top':'12px','left':'72px'}">
       <div v-for="(itemsName , key) in Svgs" :key="key">
        <component :dynamicIndexValue="index" :ValueId="'Svg_'+index" :svgName="itemsName.name" :is="itemsName.name" :dynamicBackground="itemsName.background"  :dynamicBackgroundOne="itemsName.background1" :dynamicBackgroundTwo="itemsName.background2" :NavClicked="true"></component>
       </div>
    </div>
  </div>
</template>

<script>
import ColorButton from './ColorButton'
import HoverEdit from './common/hoverEdit' 
import BullDogSvg from './bulldog'
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
       ColorButton,
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
    //  let circle = document.querySelector("circle");
    //  circle.setAttribute("fill", "cyan");
     var idValue =this.dynamicIndex
    //  console.log(idValue)
    //   $(function() { 
    //     if(idValue != undefined){
    //       alert('asasa')
         
    //     } 
    //   }) 
      
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
    openPop(value , e){
      var clickedElement = e.target;
      var test= $(clickedElement).find('class')
      console.log(test , 'test')
      var ids = e.target.id
      console.log(this.AllSvgUrl[ids])
      this.testValue.map((d)=>{
        console.log(d)
      })
      this.id = value ;
      return false
      $('.edit')
      // this.openModal = true 
    },
    getValue(){
      console.log(AllSvgUrl)
    },
    valueStore(){
    },
    getIndex(value){

      // $('#myModal').modal('show');
      // alert('sasgg')
     this.ACTION_CHANGE_STATE(['dynamicIndex' ,value ])
      this.ACTION_CHANGE_STATE(['dynamicName' ,this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name+value ])
    //  console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name+value)
     this.ACTION_CHANGE_STATE(['editSvgClicked' ,true])
    },
    drop(e){
      // alert('jsasahssaasg')
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