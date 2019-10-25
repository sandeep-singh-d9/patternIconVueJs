<template>
	<div class="main_div" :value="this.$store.state.rightBodyBackground" :style="{background:'rgba('+this.$store.state.rightBodyBackground+')'}">
	    <!-- <FixedNavigation/> -->
		<HeaderTopComponent/>
	    <div class="main_contentarea">
            <div class="row m-0">
    	        <Navgation/>
    	        <RightSideComponent/>
            </div>
	    </div>
	</div>
</template>

<script>
import Navgation from './NavComponent'
import FixedNavigation from './FixedNavLeft'
import RightSideComponent from './RightSideComponent'
import HeaderTopComponent from './HeaderTopComponent'
export default {
    mounted(){

    },
    components:{
      Navgation,
      FixedNavigation,
      RightSideComponent,
      HeaderTopComponent,
      
    }
    
}
</script>

<style>

</style>