<template>
  <div>
    <div class="wrap">  
        <!-- <div id="sqltutorial" class="ui-widget-content">  
            <div>Students who want to learn <strong>SQL</strong></div> 
            <p>Students who want to learn <strong>SQL</strong></p>  
            <p>Students who want to learn <strong>SQL</strong></p>  
            <p>Students who want to learn <strong>SQL</strong></p>  
            <p>Students who want to learn <strong>SQL</strong></p>  
            <p>Students who want to learn <strong>SQL</strong></p>  
            <p>Students who want to learn <strong>SQL</strong></p>  
            <p>Students who want to learn <strong>SQL</strong></p>  
            <p>Students who want to learn <strong>SQL</strong></p>  
        </div>   -->
  

        <!-- <div id="htmltutorial" class="ui-widget-content">  
            <p>Students who want to learn <strong>HTML</strong></p>  
            <p>Students who want to learn <strong>HTML</strong></p>  
            <p>Students who want to learn <strong>HTML</strong></p>  
            <p>Students who want to learn <strong>HTML</strong></p>  
            <p>Students who want to learn <strong>HTML</strong></p>  
            <p>Students who want to learn <strong>HTML</strong></p>  
        </div> -->
        <div id="sort">
        <svg  ref="item" viewBox="0 0 100 100" version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-for="(item , index) in ArrayValue" :key="index" >
          <g v-html="item"  @mouseenter="getvalue($event)"></g>
        </svg>
        </div>
       
         <div id="test">
        <svg  ref="loop"  viewBox="0 0 100 100" version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-for="(loop , indexvalue) in ArrayValueTwo" :key="'test'+indexvalue" @mouseenter="getvalue($event)">
          <g v-html="loop"></g>
        </svg>
         </div>
        <!-- {{ArrayValue}} -->
    </div>  
  </div>
</template>

<script>
import animalSvg from './animals.json' 
export default {
   mounted(){
        $(function() {  
         $( "#sqltutorial" ).draggable();  
         $( "#htmltutorial" ).draggable();
           $('#sort').draggable();  
           $('#test').draggable();  
      });  
      // console.log(this.data.Animals[0].svg)
      var Array= this.data.Animals
     
    var template =  Array.map((d)=>{
         //  return '<svg  version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+d.svg+'</svg>'
      return d.svg
         // this.ArrayValue = test
         // console.log(this.ArrayValue)
      })
      this.ArrayValue = template 
      console.log(this.ArrayValue)
    var templateTwo =  Array.map((d)=>{
         //  return '<svg  version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+d.svg+'</svg>'
      return d.svg
         // this.ArrayValue = test
         // console.log(this.ArrayValue)
      })
       this.ArrayValueTwo = templateTwo 
      $(document).ready(function() {
         $('#sort').draggable();
         $('#sort').disableSelection();
      });
   },
   data(){
      return{
         data:animalSvg,
         ArrayValue:'',
         ArrayValueTwo:''
      }
   }, 
   methods:{
     getvalue(value){
        console.log(value)
     }
   }
}
</script>

  <style  scoped> 
           
         #sqltutorial,#htmltutorial, #javatutorial,#springtutorial {   
            height:10px;padding: 0.5em; float: left;  
            margin: 0px 5px 10px 0;background:transparent;
         }  
           
          #sql,#html,#java,#spring {   
            width: 140px;height:10px; padding: 0.5em; float: left;   
            margin: 10px;background:transparent;
         }
         svg{
           height: 120px;
           margin: 47px;
         } 
         svg > g {
           transform:scale(0.2) 
         } 
           
   </style>  