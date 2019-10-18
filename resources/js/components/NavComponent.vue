<template>
    <div>
        <div id="menu">
            <div class="container">
                <ul style="padding:0px ; color:#fff">
                    <li @click="openNav('search')" style="line-height: 78px; cursor: pointer;">
                        <img src="images/search.svg" alt=""/>
                        <span>search</span>
                    </li>
                    <li @click="openNav('bg')"  style="line-height: 58px; margin-top: 45px; cursor: pointer;">
                        <img src="images/background.svg" alt=""/>
                        <span>bg</span>             
                    </li>
                    <li @click="openNav('download')" style="line-height: 58px; margin-top: 45px; cursor: pointer;">
                        <img src="images/download.svg" alt=""/>
                        <span>Download</span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="mySidenav" class="sidenav">
            <a  class="closebtn" @click="this.closeNav" style="color:#ffff;cursor: pointer;">&times;</a>
            <div  v-if="this.showSearchBar" style="padding-left: 13px; position: relative;" class="search_before">
                <input type="text" placeholder="Search" style="padding: 14px 60px;"/>
                <h3>Animals</h3>
                <!-- Animal Svg  Start-->
                    <input type="hidden" value="0" id="bullDogSvg">
                    <img @click="getSvgName($event), addSvg('BullDogSvg')" name="anteater" src="images/animals/bulldog.svg"  data-svg='<path class="header_val" style="fill:#65513C;" d="M233.058,210.95c27.653,0,50.072,22.419,50.072,50.072c0,8.669-2.204,16.823-6.081,23.933h5.28c7.218,0,13.07,5.852,13.07,13.07v7.171c0,3.259-2.641,5.9-5.9,5.9h-56.441c-27.655,0-50.074-22.419-50.074-50.074C182.984,233.369,205.403,210.95,233.058,210.95z"/><path style="fill:#65513C;" d="M78.038,210.95c-27.654,0-50.073,22.419-50.073,50.072c0,8.669,2.205,16.823,6.082,23.933h-5.28c-7.218,0-13.07,5.852-13.07,13.07v7.171c0,3.259,2.641,5.9,5.9,5.9h56.441c27.655,0,50.074-22.419,50.074-50.074C128.113,233.369,105.694,210.95,78.038,210.95z"/><path style="fill:#9C7F4D;" d="M103.912,311.096h103.273c22.948,0,41.727-18.778,41.727-41.728v-86.505c0-51.564-41.801-93.364-93.365-93.364s-93.364,41.8-93.364,93.364v86.505C62.184,292.318,80.962,311.096,103.912,311.096z"/><path style="fill:#FFFFFF;" d="M62.184,207.95v55.777c12.467-3.153,21.693-14.442,21.693-27.889C83.877,222.392,74.651,211.103,62.184,207.95z"/><g><path style="fill:#9C7F4D;" d="M210.947,8.397h-110.8c-24.623,0-44.77,20.146-44.77,44.77v46.872c0,55.322,44.848,100.169,100.17,100.169c55.321,0,100.169-44.847,100.169-100.169V53.166C255.717,28.543,235.571,8.397,210.947,8.397z"/><path style="fill:#FFFFFF;" d="M193.767,95.523h-76.438c-11.774,0-21.318,9.544-21.318,21.318v42.638c0,11.774,9.544,21.319,21.318,21.319s21.318-9.545,21.318-21.319v-21.318h33.801v21.318c0,11.774,9.544,21.319,21.318,21.319c11.774,0,21.318-9.545,21.318-21.319v-42.638C215.085,105.067,205.541,95.523,193.767,95.523z"/><g><path style="fill:#FADF8D;" d="M131.8,131.792c-3.284,0-4.629-2.327-2.986-5.172l5.782-10.016c1.643-2.845,4.33-2.845,5.973,0l5.782,10.016c1.642,2.845,0.298,5.172-2.986,5.172H131.8z"/><path style="fill:#FADF8D;" d="M179.296,131.792c3.284,0,4.629-2.327,2.985-5.172l-5.781-10.016c-1.642-2.845-4.33-2.845-5.973,0l-5.782,10.016c-1.643,2.845-0.298,5.172,2.986,5.172H179.296z"/><path style="fill:#826940;" d="M172.667,122.066h-34.24c-7.607,0-13.834,6.225-13.834,13.834v7.549c0,17.097,13.858,30.953,30.955,30.953c17.096,0,30.954-13.856,30.954-30.953V135.9C186.502,128.29,180.276,122.066,172.667,122.066z"/></g><path style="fill:#333E48;" d="M165.539,106.347c-5.062,5.251-13.496,5.399-18.74,0.335l-5.853-5.648c-5.247-5.066-3.571-9.21,3.722-9.21h21.62c7.293,0,9.117,4.296,4.054,9.543L165.539,106.347z"/><path style="fill:#65513C;" d="M252.347,51.524c-13.42,0.246-24.591-10.54-24.825-23.957l-0.267-14.968c-0.236-13.421,7.341-16.635,16.832-7.143l28.14,28.139c9.492,9.492,6.274,17.457-7.146,17.696L252.347,51.524z"/><path style="fill:#65513C;" d="M58.749,51.524c13.42,0.246,24.591-10.54,24.825-23.957l0.267-14.968c0.237-13.421-7.34-16.635-16.831-7.143L38.87,33.595c-9.492,9.492-6.274,17.457,7.145,17.696L58.749,51.524z"/><circle style="fill:#FFFFFF;" cx="207.687" cy="60.347" r="24.161"/><circle style="fill:#333E48;" cx="207.687" cy="60.347" r="8.819"/><circle style="fill:#333E48;" cx="103.409" cy="60.347" r="8.819"/></g><path style="fill:#826940;" d="M130.128,216.124c0-12.094-9.805-21.898-21.898-21.898c-12.094,0-21.898,9.805-21.898,21.898v68.83H68.179c-7.219,0-13.069,5.852-13.069,13.07v7.171c0,3.259,2.64,5.9,5.899,5.9h56.05c7.218,0,13.069-5.853,13.069-13.071V216.124z"/><path style="fill:#826940;" d="M180.968,216.124c0-12.094,9.805-21.898,21.898-21.898c12.094,0,21.898,9.805,21.898,21.898v68.83h18.152c7.219,0,13.069,5.852,13.069,13.07v7.171c0,3.259-2.64,5.9-5.899,5.9h-56.05c-7.218,0-13.069-5.853-13.069-13.071v-81.9H180.968z"/>' style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/animals/hippopotamus.svg"  data-svg="images/animals/hippopotamus.svg" style="width: 96px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/animals/llama.svg"  data-svg="images/animals/llama.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/animals/mouse.svg"  data-svg="images/animals/mouse.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/animals/squirrel.svg"  data-svg="images/animals/squirrel.svg" style="width: 46px;" alt="">
                <!-- Animal Svg EnD -->
                <h3>Food</h3>
                <!-- Food Svg -->
                    <img @click="getSvgName($event)" name="anteater" src="images/animals/bread.svg"  data-svg="images/animals/bread.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/burger.svg"  data-svg="images/food/burger.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/cheese.svg"  data-svg="images/food/cheese.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/chocolate.svg"  data-svg="images/food/chocolate.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/cookie.svg"  data-svg="images/food/cookie.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/french-fries.svg"  data-svg="images/food/french-fries.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/pie.svg"  data-svg="images/food/pie.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/pizza.svg"  data-svg="images/food/pizza.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/popcorn.svg"  data-svg="images/food/popcorn.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/food/steak.svg"  data-svg="images/food/steak.svg" style="width: 46px;" alt="">
                <!-- Food Svg End -->
                <h3>Space</h3>
                <!-- Space Svg  -->
                      <img @click="getSvgName($event)" name="anteater" src="images/space/man-on-the-moon.svg"  data-svg="images/space/man-on-the-moon.svg" style="width: 46px;" alt="">
                      <img @click="getSvgName($event)" name="anteater" src="images/space/mercury.svg"  data-svg="images/space/mercury.svg" style="width: 46px;" alt="">
                      <img @click="getSvgName($event)" name="anteater" src="images/space/orbit.svg"  data-svg="images/space/orbit.svg" style="width: 46px;" alt="">
                      <img @click="getSvgName($event)" name="anteater" src="images/space/saturn.svg"  data-svg="images/space/saturn.svg" style="width: 46px;" alt="">
                      <img @click="getSvgName($event)" name="anteater" src="images/space/solar-system.svg"  data-svg="images/space/solar-system.svg" style="width: 46px;" alt="">
                <!-- Space Svg  -->
                <h3>ThanksGiving</h3>
                <!-- ThanksGiving -->
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/corn.svg"  data-svg="images/thanksgiving/corn.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/leaf.svg"  data-svg="images/thanksgiving/leaf.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/pilgrim.svg"  data-svg="images/thanksgiving/pilgrim.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/pumpkin.svg"  data-svg="images/thanksgiving/pumpkin.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/sunflower.svg"  data-svg="images/thanksgiving/sunflower.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/turkey.svg"  data-svg="images/thanksgiving/turkey.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/turkeybird.svg"  data-svg="images/thanksgiving/turkeybird.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/thanksgiving/wheat.svg"  data-svg="images/thanksgiving/wheat.svg" style="width: 46px;" alt="">
                <!-- ThanksGiving -->
                 <h3>Wedding</h3>
                <!-- Wedding Svg -->
                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/arch.svg"  data-svg="images/wedding/arch.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/car.svg"  data-svg="images/wedding/car.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/champagne.svg"  data-svg="images/wedding/champagne.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/church.svg"  data-svg="images/wedding/church.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/engagement.svg"  data-svg="images/wedding/engagement.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/wedding-cake.svg"  data-svg="images/wedding/wedding-cake.svg" style="width: 46px;" alt="">
                    <img @click="getSvgName($event)" name="anteater" src="images/wedding/wedding-rings.svg"  data-svg="images/wedding/wedding-rings.svg" style="width: 46px;" alt="">

                <!-- Wedding Svg -->



            </div>
            <color-picker v-if="this.showBgBar" class="color_picker_model" v-model="colorModel" @input="changePickerColor(colorModel)"> </color-picker>
        </div>
    </div>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
 import json from "../components/animals.json"
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    mounted(){
       
        
    },
    components: {
    "color-picker": ColorPicker
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
            myJson: json,

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
         if(value === 'search'){
               this.showSearchBar = true
         }else if (value === 'bg'){
                this.showBgBar = true
         }else{

         } 
         document.getElementById("mySidenav").style.width = "318px";
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
          event.preventDefault()
           this.showSearchBar = false
            this.showBgBar = false
           document.getElementById("mySidenav").style.width = "0";

      },
        changePickerColor(value){
            console.log(value)
            this.ACTION_CHANGE_STATE(['rightBodyBackground', value])
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
    }
}
</script>

<style>

</style>