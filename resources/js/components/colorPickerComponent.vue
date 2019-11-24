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
     props: ['colorElement', 'valueElement'],
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
            // console.log(value.rgba  ,'ss')
          if(this.valueElement == "One"){
            //  This.required
              this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a

            this.ACTION_CHANGE_STATE(['background', value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a])
            
            // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a)
            $('.Svg_'+this.$store.state.dynamicIndex+'_color1').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
             $('.Svg_'+this.$store.state.dynamicIndex+'_color1btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
     
            
          }else if(this.valueElement == "Two" ){
               
            this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
              $('.Svg_'+this.$store.state.dynamicIndex+'_color2').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
               $('.Svg_'+this.$store.state.dynamicIndex+'_color2btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})

               this.ACTION_CHANGE_STATE(['background1', value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a])
          }else if(this.valueElement == "Third" ){
               
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color3').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                   $('.Svg_'+this.$store.state.dynamicIndex+'_color3btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})


               this.ACTION_CHANGE_STATE(['background2', value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a])
               
          }else if(this.valueElement == "forth" ){
            // return false
            
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color4').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                   $('.Svg_'+this.$store.state.dynamicIndex+'_color4btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
          }else if(this.valueElement == "five" ){
            // return false
            
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color5').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                   $('.Svg_'+this.$store.state.dynamicIndex+'_color5btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
          }else if(this.valueElement == "six" ){
            
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background5 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color6').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                   $('.Svg_'+this.$store.state.dynamicIndex+'_color6btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
          }else if(this.valueElement == "seven" ){
            
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background6 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color7').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                   $('.Svg_'+this.$store.state.dynamicIndex+'_color7btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
          }else if(this.valueElement == "eight" ){
            
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background7 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color8').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color8btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
          }else if(this.valueElement == "nine" ){
            
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background8 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color9').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                  $('.Svg_'+this.$store.state.dynamicIndex+'_color9btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
          }else if(this.valueElement == "ten" ){
            
                this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background9 = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a
                
                $('.Svg_'+this.$store.state.dynamicIndex+'_color10').css({fill: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
                $('.Svg_'+this.$store.state.dynamicIndex+'_color10btn').css({background: 'rgba('+value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a+')'})
               
          }
      }
    }
}
</script>

<style>

</style>