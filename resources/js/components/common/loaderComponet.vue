<template>
  <div>
       <div  class='loader' style="position: absolute;left: 50%;top: 45%;">
            <RotateLoader :color='this.loaderColor' :size='this.loader' :height='loaderHeight' :margin='marginLoader' />
        </div>
  </div>
</template>

<script>
import {BounceLoader, RotateLoader} from '@saeris/vue-spinners'
export default {
    data(){
       return{
            loader:parseInt(40),
            loaderHeight:parseInt(100),
            loaderColor:'#ffb239',
            marginLoader:'2px'
        }
    },
    components:{
      BounceLoader,
      RotateLoader
    }
}
</script>

<style scoped>
  .css-1wwewr{
    left: -60px !important;
  }
  .css-1erwmfp{
    left: 60px !important;
  }
</style>