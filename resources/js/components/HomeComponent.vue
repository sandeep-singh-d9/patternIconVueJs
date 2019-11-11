<template>
	<div id="parentDiv" class="main_div" :value="this.$store.state.rightBodyBackground" >
		<HeaderTopComponent/>
	    <div class="main_contentarea">
            <div class="row m-0">
    	        <Navgation/>
                 <input type="hidden" id="hiddenModal" name="hiddenModal" value="">
                 <LoaderComponent v-if="this.$store.state.loaderDisplay"/>
    	        <RightSideComponent/>
            </div>
	    </div>
	</div>
</template>

<script>
import Navgation from './NavComponent'
import RightSideComponent from './RightSideComponent'
import HeaderTopComponent from './HeaderTopComponent'
import LoaderComponent from './common/loaderComponet'

export default {
    mounted(){

    },
    components:{
      Navgation,
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