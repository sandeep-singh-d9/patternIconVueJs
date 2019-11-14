import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        rightBodyBackground:'255, 255, 255,1',
        background :  '101, 81, 60,1',
        background1: '130, 105, 64, 1',
        background2:'255, 255, 255 , 1',
        svgName:'',
        AnimalIconArray:[],
        urlSvg:'',
        urlSvgArray:[],
        divData: [],
        SvgComponent:[],
        dynamicIndex:'',
        editSvgClicked:false,
        dynamicName:'',
        showColor:false,
        ClickedSvg:'',
        newDisableIndex:'',
        OpenNavigationElement:'search',
        tempModalIndex:'',
        Savefcloader:'',
        popUpOpen:'',
        RandomClicked:false,
        downloadImageWidth:1275,
        downloadImageHeight:580,
        randomFirstSvg:'',
        randomYAxis:'',
        randomXAxis:'',
        randomIndexElement:'',
        b64Image:'',
        showProgressBar:false,
        progressComplete:false,
        loaderDisplay:false,
        progressValue:'',
        color1:[
            
        ],
        ElementName:'',
    },
    getters: {},
    mutations: {
        CHANGE_STATE (state, value) {
            state[value[0]] = value[1]
        },
        SVG_PUSH_TO_SVG_ARRAY (state, value){
         var tempArray = []
            if(value =="BullDogSvg"){
               tempArray = [
                  {
                      name:value,
                      background :  '101, 81, 60,1',
                      background1: '130, 105, 64, 1',
                      background2:'255, 255, 255 , 1',
                      background3:'156, 127, 77 , 1',
                      background4:'51, 62, 72 , 1',
                      background5:'250, 223, 141, 1',
                      circleSlider:0,
                      zoomValue:0.8,
                      flipValue:1,
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Hippo"){
               tempArray = [
                  {
                      name:value,
                      background :  '95, 117, 133,1',
                      background1: '125, 134, 140, 1',
                      background2:'251, 226, 152 , 1',
                      background3:'124, 152, 171, 1',
                      background4:'255, 156, 159, 1',
                      background5:'51, 62, 72, 1',
                      circleSlider:0,
                      zoomValue:0.8,
                      flipValue:1,

                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }

            if(value =="Llama"){
               tempArray = [
                  {
                      name:value,
                      background :  '95, 117, 133,1',
                      background1: '200, 201, 201, 1',
                      background2:'51, 62, 72 , 1',
                      background3:'218, 219, 220, 1',
                      circleSlider:0,
                      zoomValue:0.8,
                      flipValue:1,
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Mouse"){
               tempArray = [
                  {
                      name:value,
                      background :  '255, 156, 159,1',
                      background1: '125, 134, 140, 1',
                      background2:'51, 62, 72 , 1',
                      background3:'92, 102, 112, 1',
                      circleSlider:0,
                      zoomValue:0.8,
                      flipValue:1,
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Squirrel"){
               tempArray = [
                  {
                      name:value,
                      background :  '130, 105, 64,1',
                      background1: '156, 127, 77, 1',
                      background2:'101, 81, 60 , 1',
                      background3:'225, 203, 129, 1',
                      background4:'51, 62, 72, 1',
                      circleSlider:0,
                      zoomValue:0.8,
                      flipValue:1,
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Atom"){
                tempArray = [
                   {
                       name:value,
                       background : '248, 186, 50, 1',
                       background1: '236, 4, 0, 1',
                       background2:'123, 209, 23, 1',
                       background3:'12, 204, 197, 1',
                       background4:'198, 34, 33, 1',
                       background5:'255, 255, 204, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Calculator"){
                tempArray = [
                   {
                       name:value,
                       background : '228, 231, 237, 1',
                       background1: '79, 89, 97, 1',
                       background2:'255, 255, 255, 1',
                       background3:'110, 198, 191, 1',
                       background4:'55, 66, 77, 1',
                       background5:'79, 89, 97, 1',
                       background6:'0, 0, 0, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Compass"){
                tempArray = [
                   {
                       name:value,
                       background : '39, 162, 219, 1',
                       background1: '246, 195, 88, 1',
                       background2:'68, 196, 161, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Proctor"){
                tempArray = [
                   {
                       name:value,
                       background : '255, 208, 84, 1',
                       background1: '204, 89, 32, 1',
                       background2:'253, 253, 253, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Ruler"){
                tempArray = [
                   {
                       name:value,
                       background : '105, 5, 137, 1',
                       background1: '252, 194, 76, 1',
                       background2:'252, 224, 106, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="School"){
                tempArray = [
                   {
                       name:value,
                       background : '169, 17, 0, 1',
                       background1: '210, 59, 35, 1',
                       background2:'255, 208, 129, 1',
                       background3:'243, 220, 195, 1',
                       background4:'213, 237, 239, 1',
                       background5:'137, 102, 76, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="SchoolBus"){
                tempArray = [
                   {
                       name:value,
                       background : '246, 146, 30, 1',
                       background1: '246, 229, 70, 1',
                       background2:'116, 214, 248, 1',
                       background3:'84, 86, 86, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="Books"){
                tempArray = [
                   {
                       name:value,
                       background : '0, 181, 186, 1',
                       background1: '255, 187, 51, 1',
                       background2:'255, 109, 59, 1',
                       background3:'38, 46, 60, 1',
                       circleSlider:0,
                       zoomValue:0.8,
                       flipValue:1,
                   }
               ]
               this.state.SvgComponent.push(tempArray)
            }
            if(value =="FrenchFries"){
               tempArray = [
                  {
                      name:value,
                      background :  '255, 202, 40, 1',
                      background1: '211, 47, 47, 1',
                      background2:'48, 60, 66 , 1',
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Pie"){
               tempArray = [
                  {
                      name:value,
                      background :  '127, 110, 93,1',
                      background1: '241, 141, 70,1',
                      background2:'210, 86, 39 1',
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Pizza"){
               tempArray = [
                  {
                      name:value,
                      background :  '48, 60, 66,1',
                      background1: '229, 115, 115,1',
                      background2:'255, 202, 40 1',
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Popcorn"){
               tempArray = [
                  {
                      name:value,
                      background :  '211, 47, 47 , 1',
                      background1: '48, 60, 66 , 1',
                      background2:'230, 230, 230 , 1',
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
            if(value =="Steak"){
               tempArray = [
                  {
                      name:value,
                      background :  '48, 60, 66,1',
                      background1: '255, 235, 238, 1',
                      background2:'198, 40, 40 , 1',
                  }
              ]
              this.state.SvgComponent.push(tempArray)
            }
        },
        RANDOM_SVG_PUSH_TO_SVG_ARRAY(state, value){
            var tempArray = []
            tempArray = [
               {
                   name:'BullDogSvg',
                   background :  '101, 81, 60,1',
                   background1: '130, 105, 64, 1',
                   background2:'255, 255, 255 , 1',
                   background3:'156, 127, 77 , 1'
               },
               {
                  name:'Hippo',
                  background :  '95, 117, 133,1',
                  background1: '125, 134, 140, 1',
                  background2:'251, 226, 152 , 1',
                  background3:'124, 152, 171, 1'
               },
               {
                  name:'Llama',
                  background :  '95, 117, 133,1',
                  background1: '200, 201, 201, 1',
                  background2:'51, 62, 72 , 1',
                  background3:'218, 219, 220, 1',
               },
               {
                  name:'Mouse',
                  background :  '255, 156, 159,1',
                  background1: '125, 134, 140, 1',
                  background2:'51, 62, 72 , 1',
                  background3:'92, 102, 112, 1',
               },
               {
                  name:'Squirrel',
                  background :  '130, 105, 64,1',
                  background1: '156, 127, 77, 1',
                  background2:'101, 81, 60 , 1',
                  background3:'225, 203, 129, 1',
               }
           ]
         this.state.SvgComponent.push(tempArray)
        }
        
    },
    actions: {
        ACTION_CHANGE_STATE (context, value) {
            context.commit('CHANGE_STATE', value)
        },
        ACTION_PUSH_TO_SVG(context , value ){
         context.commit('SVG_PUSH_TO_SVG_ARRAY', value)
        },
        ACTION_PUSH_SVG_RANDOM(context , value ){
         context.commit('RANDOM_SVG_PUSH_TO_SVG_ARRAY', value)
        }
    },

})