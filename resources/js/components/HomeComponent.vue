<template>
  <div class="main_div" :style="{background:this.$store.state.rightBodyBackground}">
      <!-- <FixedNavigation/> -->
      <Navgation/>
      <RightSideComponent/>
  </div>
</template>

<script>
import Navgation from './NavComponent'
import FixedNavigation from './FixedNavLeft'
import RightSideComponent from './RightSideComponent'
export default {
    mounted(){

    },
    components:{
      Navgation,
      FixedNavigation,
      RightSideComponent,
      
    }
    
}
</script>

<style>

</style>