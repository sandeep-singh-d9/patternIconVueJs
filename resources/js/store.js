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