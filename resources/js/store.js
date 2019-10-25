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
        showColor:false
    },
    getters: {},
    mutations: {
        CHANGE_STATE (state, value) {
            //console.log(value)
            state[value[0]] = value[1] 
            // console.log(value[1], 'store')
            //console.log(this.state.ifcRightTextInputValue, 'fsdasdasfadsfsdafsads')
        },
        PUSH_INTO_ANIMAL_ARRAY (state, value) {
            // console.log(value, '111')
            this.state.AnimalIconArray.push(value)
        },
        ALL_SVG_PUSH_TO_SVG_ARRAY(state, value){
            this.state.urlSvgArray.push(value)
            var tempArray=[]
           var value=
                {

                        "path": [
                             {
                                "@style": "fill:#65513C;",
                                "@d": "M233.058,210.95c27.653,0,50.072,22.419,50.072,50.072c0,8.669-2.204,16.823-6.081,23.933h5.28   c7.218,0,13.07,5.852,13.07,13.07v7.171c0,3.259-2.641,5.9-5.9,5.9h-56.441c-27.655,0-50.074-22.419-50.074-50.074   C182.984,233.369,205.403,210.95,233.058,210.95z"
                             },
                             {
                                "@style": "fill:#65513C;",
                                "@d": "M78.038,210.95c-27.654,0-50.073,22.419-50.073,50.072c0,8.669,2.205,16.823,6.082,23.933h-5.28   c-7.218,0-13.07,5.852-13.07,13.07v7.171c0,3.259,2.641,5.9,5.9,5.9h56.441c27.655,0,50.074-22.419,50.074-50.074   C128.113,233.369,105.694,210.95,78.038,210.95z"
                             },
                             {
                                "@style": "fill:#9C7F4D;",
                                "@d": "M103.912,311.096h103.273c22.948,0,41.727-18.778,41.727-41.728v-86.505   c0-51.564-41.801-93.364-93.365-93.364s-93.364,41.8-93.364,93.364v86.505C62.184,292.318,80.962,311.096,103.912,311.096z"
                             },
                             {
                                "@style": "fill:#FFFFFF;",
                                "@d": "M62.184,207.95v55.777c12.467-3.153,21.693-14.442,21.693-27.889   C83.877,222.392,74.651,211.103,62.184,207.95z"
                             },
                             {
                                "@style": "fill:#826940;",
                                "@d": "M130.128,216.124c0-12.094-9.805-21.898-21.898-21.898c-12.094,0-21.898,9.805-21.898,21.898v68.83   H68.179c-7.219,0-13.069,5.852-13.069,13.07v7.171c0,3.259,2.64,5.9,5.899,5.9h56.05c7.218,0,13.069-5.853,13.069-13.071V216.124z"
                             },
                             {
                                "@style": "fill:#826940;",
                                "@d": "M180.968,216.124c0-12.094,9.805-21.898,21.898-21.898c12.094,0,21.898,9.805,21.898,21.898v68.83   h18.152c7.219,0,13.069,5.852,13.069,13.07v7.171c0,3.259-2.64,5.9-5.899,5.9h-56.05c-7.218,0-13.069-5.853-13.069-13.071v-81.9   H180.968z"
                             }
                        ],
                        "path": [
                                {
                                   "@style": "fill:#9C7F4D;",
                                   "@d": "M210.947,8.397h-110.8c-24.623,0-44.77,20.146-44.77,44.77v46.872    c0,55.322,44.848,100.169,100.17,100.169c55.321,0,100.169-44.847,100.169-100.169V53.166    C255.717,28.543,235.571,8.397,210.947,8.397z"
                                },
                                {
                                   "@style": "fill:#FFFFFF;",
                                   "@d": "M193.767,95.523h-76.438c-11.774,0-21.318,9.544-21.318,21.318v42.638    c0,11.774,9.544,21.319,21.318,21.319s21.318-9.545,21.318-21.319v-21.318h33.801v21.318c0,11.774,9.544,21.319,21.318,21.319    c11.774,0,21.318-9.545,21.318-21.319v-42.638C215.085,105.067,205.541,95.523,193.767,95.523z"
                                },
                                {
                                   "@style": "fill:#333E48;",
                                   "@d": "M165.539,106.347c-5.062,5.251-13.496,5.399-18.74,0.335l-5.853-5.648    c-5.247-5.066-3.571-9.21,3.722-9.21h21.62c7.293,0,9.117,4.296,4.054,9.543L165.539,106.347z"
                                },
                                {
                                   "@style": "fill:#65513C;",
                                   "@d": "M252.347,51.524c-13.42,0.246-24.591-10.54-24.825-23.957l-0.267-14.968    c-0.236-13.421,7.341-16.635,16.832-7.143l28.14,28.139c9.492,9.492,6.274,17.457-7.146,17.696L252.347,51.524z"
                                },
                                {
                                   "@style": "fill:#65513C;",
                                   "@d": "M58.749,51.524c13.42,0.246,24.591-10.54,24.825-23.957l0.267-14.968    c0.237-13.421-7.34-16.635-16.831-7.143L38.87,33.595c-9.492,9.492-6.274,17.457,7.145,17.696L58.749,51.524z"
                                }
                            ],
                        "path": [
                                   {
                                      "@style": "fill:#FADF8D;",
                                      "@d": "M131.8,131.792c-3.284,0-4.629-2.327-2.986-5.172l5.782-10.016c1.643-2.845,4.33-2.845,5.973,0     l5.782,10.016c1.642,2.845,0.298,5.172-2.986,5.172H131.8z"
                                   },
                                   {
                                      "@style": "fill:#FADF8D;",
                                      "@d": "M179.296,131.792c3.284,0,4.629-2.327,2.985-5.172l-5.781-10.016c-1.642-2.845-4.33-2.845-5.973,0     l-5.782,10.016c-1.643,2.845-0.298,5.172,2.986,5.172H179.296z"
                                   },
                                   {
                                      "@style": "fill:#826940;",
                                      "@d": "M172.667,122.066h-34.24c-7.607,0-13.834,6.225-13.834,13.834v7.549     c0,17.097,13.858,30.953,30.955,30.953c17.096,0,30.954-13.856,30.954-30.953V135.9     C186.502,128.29,180.276,122.066,172.667,122.066z"
                                   }
                        ],

                        "circle": [
                                {
                                   "@style": "fill:#FFFFFF;",
                                   "@cx": "207.687",
                                   "@cy": "60.347",
                                   "@r": "24.161"
                                },
                                {
                                   "@style": "fill:#333E48;",
                                   "@cx": "207.687",
                                   "@cy": "60.347",
                                   "@r": "8.819"
                                },
                                {
                                   "@style": "fill:#333E48;",
                                   "@cx": "103.409",
                                   "@cy": "60.347",
                                   "@r": "8.819"
                                }
                             ]

                 }                
            this.state.divData.push(value)
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
        }
        
    },
    actions: {
        ACTION_CHANGE_STATE (context, value) {
            context.commit('CHANGE_STATE', value)
        },
        PUSH_ANIMAL_ARRAY (context , value){
             context.commit('PUSH_INTO_ANIMAL_ARRAY', value)
        },
        PUSH_TO_URL_SVG_ARRAY(context , value ){
            context.commit('ALL_SVG_PUSH_TO_SVG_ARRAY', value)
        },
        ACTION_PUSH_TO_SVG(context , value ){
         context.commit('SVG_PUSH_TO_SVG_ARRAY', value)
        }
    },

})