<template>
  <div>
      <chrome v-model="colorModel" @input="changePickerColor(colorModel)"/>
  </div>
</template>

<script>
import { Photoshop, Swatches , Material, Chrome, Sketch , Slider} from 'vue-color'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
     props: ['colorElement'],
     mounted(){
      
     },
    components:{
        'photoshop-picker': Photoshop,
        'swatches':Swatches,
        'material':Material,
        'chrome':Chrome,
        'sketch-picker': Sketch,
        'slider-picker': Slider,
    },
    watch: { 
      	colorElement: function(newVal, oldVal) { // watch it
          // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          this.colorModel = newVal
        }
    },
    data(){
     return{
         colors:this.colorElement,
         colorModel:this.colorElement,
         widthModule:'247px',
     }
    },
    methods:{
         ...mapActions([
        'ACTION_CHANGE_STATE',
        ]),
        ...mapMutations([
            
        ]),
        changePickerColor(value){
           console.log(value.rgba  ,'ss')
        //    return false
           var self = this
            var test = $('#hiddenElementSvg0')
            var main = $(test).find('path')
            // console.log(main)
            var  arrayColor1 = []
            // console.log('fill:' +self.colorElement+';'+' '+ 'transform: scale(0.2);')
            // $.each(main , function (index, data){
            //     if($(this).attr("style") == 'fill:' +self.colorElement+';'+' '+ 'transform: scale(0.2);'){
            //         // console.log($(this).attr("style"), 'true')
            //         $(this).css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
            //         $(this).addClass('svgColor')
                    
            //      console.log('fill:'+' '+'rgb('+value.rgba.r+','+' '+value.rgba.g+','+' '+value.rgba.b+')'+';'+' '+ 'transform: scale(0.2);' == $(this).attr("style"), 'style')
            //     }

            //     if('fill:'+' '+'rgb('+value.rgba.r+','+' '+value.rgba.g+','+' '+value.rgba.b+')'+';'+' '+ 'transform: scale(0.2);' == $(this).attr("style")){
            //          console.log($(this))
            //     }
            // }) 
         $('.svgColor').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
            // console.log(arrayColor1)  
        //   if(this.valueElement == "One"){
        //     //  This.required
        //       this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a

        //     this.ACTION_CHANGE_STATE(['background', value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a])
            
    
        //     $('.Svg_'+this.$store.state.dynamicIndex+'_color1').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
        //      $('.Svg_'+this.$store.state.dynamicIndex+'_color1btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
     
            
        //   }else if(this.valueElement == "Two" ){
               
        //     this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
        //       $('.Svg_'+this.$store.state.dynamicIndex+'_color2').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
        //        $('.Svg_'+this.$store.state.dynamicIndex+'_color2btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})

        //        this.ACTION_CHANGE_STATE(['background1', value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a])
        //   }else if(this.valueElement == "Third" ){
               
        //         this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
        //           $('.Svg_'+this.$store.state.dynamicIndex+'_color3').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
        //            $('.Svg_'+this.$store.state.dynamicIndex+'_color3btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})


        //        this.ACTION_CHANGE_STATE(['background2', value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a])
               
        //   }else if(this.valueElement == "forth" ){
        //     // return false
            
        //         this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
        //           $('.Svg_'+this.$store.state.dynamicIndex+'_color4').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
        //            $('.Svg_'+this.$store.state.dynamicIndex+'_color4btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
        //   }else if(this.valueElement == "five" ){
        //     // return false
            
        //         this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
        //           $('.Svg_'+this.$store.state.dynamicIndex+'_color5').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
        //            $('.Svg_'+this.$store.state.dynamicIndex+'_color5btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
        //   }else if(this.valueElement == "six" ){
            
        //         this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
        //           $('.Svg_'+this.$store.state.dynamicIndex+'_color6').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
        //            $('.Svg_'+this.$store.state.dynamicIndex+'_color6btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
        //   }
      }
    }
}
</script>

<style>

</style>