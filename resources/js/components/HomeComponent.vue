<template>
	<div id="parentDiv" class="main_div" :value="this.$store.state.rightBodyBackground" >
	    <!-- <FixedNavigation/> -->
		<HeaderTopComponent/>
	    <div class="main_contentarea">
            <div class="row m-0">
    	        <Navgation/>
                 <input type="hidden" id="hiddenModal" name="hiddenModal" value="">
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
import LoaderComponent from './common/loaderComponet'

export default {
    mounted(){

    },
    components:{
      Navgation,
      FixedNavigation,
      RightSideComponent,
      HeaderTopComponent,
      LoaderComponent
    },
    data() {
    return {
      output: null
    }
  },
    
}
</script>

<style>

</style>