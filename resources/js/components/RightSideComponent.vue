<template>
  <div id="main" class="container" :style="{height: '100vh'}">
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
    <div v-for="(Svgs , index) in dataSvgComponent" :key="index">
       <div v-for="(itemsName , key) in Svgs" :key="key"  @click="getIndex(index)">
        <component :dynamicIndex="index" :ValueId="'Svg_'+index" :svgName="itemsName.name" :is="itemsName.name" :dynamicBackground="itemsName.background"  :dynamicBackgroundOne="itemsName.background1" :dynamicBackgroundTwo="itemsName.background2" :NavClicked="true"></component>
       </div>
    </div>
  </div>
</template>

<script>
import ColorButton from './ColorButton'
import HoverEdit from './common/hoverEdit' 
import BullDogSvg from './bulldog'
import Hippo from './animalSvg/hippopotamusComponent'
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
       Hippo
   },
   data(){
     return {
        openModal:false,
        ShowEditor:false,
        id:'',
     }
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
            'ACTION_CHANGE_STATE'
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
     this.ACTION_CHANGE_STATE(['dynamicIndex' ,value ])
      this.ACTION_CHANGE_STATE(['dynamicName' ,this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name+value ])
    //  console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name+value)
     this.ACTION_CHANGE_STATE(['editSvgClicked' ,true])
    }
  }
}
</script>

<style>

</style>