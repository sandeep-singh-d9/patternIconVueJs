<template>
  <div>
       <!-- <svg x="0px" y="0px" width="100%" height="100%" xmlSpace="preserve" class="icon">
            <pattern
                id="puzzle"
                x="0"
                y="0"
                width="150"
                height="150"
                patternUnits="userSpaceOnUse"
                viewBox="0 0 510 211.096"
            >

            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#puzzle)" />
        </svg> -->
     <!-- {{this.data}}{{"test"}} -->
  </div>
</template>

<script>
export default {
    mounted(){
        
    },
    computed:{
        data:{
            get(){
                return this.$store.state.AnimalIconArray
            },
            set(newValue){
                return console.log(newValue)
            }
        }
    }
}
</script>

<style>

</style>