<template>
  <div>
      <chrome   v-model="colorModel" @input="changePickerColor(colorModel)"/>
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
      alert(this.colorElement)
     },
    components:{
        'photoshop-picker': Photoshop,
        'swatches':Swatches,
        'material':Material,
        'chrome':Chrome,
        'sketch-picker': Sketch,
        'slider-picker': Slider,
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
            
            console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background = value.rgba.r+','+value.rgba.g+','+value.rgba.b+','+value.rgba.a)
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
               
          }
      }
    }
}
</script>

<style>

</style>