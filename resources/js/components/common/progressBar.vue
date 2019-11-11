<template>
  <div >
      <progress-bar
      :options="options"
      v-model="progressLevel" :width="dynamicWidth"/>
  </div>
</template>

<script>
import ProgressBar from 'vuejs-progress-bar'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
    components:{
        ProgressBar
    },
    mounted(){
        this.startProgress()
    },
    computed:{
        ...mapState([ 
            'progressComplete',
            'progressValue'
        ]),
    },
    data(){
        return{
            options: {
                text: {
                    color: '#FFFFFF',
                    shadowEnable: true,
                    shadowColor: '#000000',
                    fontSize: 14,
                    fontFamily: 'Helvetica',
                    dynamicPosition: false,
                    hideText: false
                },
                progress: {
                    color: '#2dbd2d',
                    backgroundColor: '#333333'
                },
                layout: {
                    height: 35,
                    width: 140,
                    verticalTextAlign: 61,
                    horizontalTextAlign: 43,
                    zeroOffset: 0,
                    strokeWidth: 30,
                    progressPadding: 0,
                    type: 'cylinder'
                }
            },
            progressLevel:0,
            dynamicWidth:'500px'
        }
    }, 
    methods:{
        ...mapActions([
            'ACTION_CHANGE_STATE'
        ]),
        ...mapMutations([
            
        ]),
        startProgress(){
            var timerId;
            var self = this
                // reset progress bar
                timerId = setInterval(function() {
                    self.progressLevel += 5;
                    // complete
                    self.ACTION_CHANGE_STATE(['progressValue' ,self.progressLevel])  
                    if (self.progressLevel >= 100) {
                    //  console.log(self.progressLevel) 
                    clearInterval(timerId);
                    self.ACTION_CHANGE_STATE(['progressComplete' , true])
                    // do more ...
                }
            }, 105);
        }
    }
}
</script>

<style>
.progress-bar{
    display: block !important;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: transparent;
    transition: width 0.6s ease;
}
</style>