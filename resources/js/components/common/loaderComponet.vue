<template>
  <div>
       <div v-if="this.$store.state.Savefcloader" class='loader' style="position: absolute;left: 45%;top: 45%;">
            <BounceLoader :color='this.loaderColor' :size='this.loader' :height='loaderHeight' />
        </div>
  </div>
</template>

<script>
import {BounceLoader,} from '@saeris/vue-spinners'
export default {
    data(){
       return{
            loader:parseInt(100),
            loaderHeight:parseInt(20),
            loaderColor:'#3949ab'
        }
    },
    components:{
      BounceLoader
    }
}
</script>

<style>

</style>