<template>
    <div>
         <div class="overlay_delete" style="width: 225px;background: #333333b5;">
            <a class="btn" style="font-size: 27px;color: #fff; cursor:pointer" @click="ColorPicker">
                <span class="text_content">
                  <i class="fas fa-palette"></i>
                </span>
            </a>
            <a class="btn"  style="font-size: 27px;color: #fff; cursor:pointer">
                <span class="text_content">
                   <i class="fas fa-adjust"></i>
                </span>
            </a>
            <a class="btn" style="font-size: 27px;color: #fff; cursor:pointer">
                <span class="text_content">
                  <i class="fas fa-clone"></i>
                </span>
            </a>
            <a class="btn"  style="font-size: 27px;color: #fff; cursor:pointer">
                <span class="text_content">
                  <i class="far fa-trash-alt"></i>
                </span>
            </a>
            <div>
                <!-- <h4 style="color:#fff; text-align: center;">Select Color</h4>
                <button style="border-radius: 50px;width: 35px;height: 35px;background: rgba(101, 81, 60,1);border: none;margin-left: 10px"></button>
                <button style="border-radius: 50px;width: 35px;height: 35px;background: rgba(101, 81, 60,1);border: none;margin-left: 10px"></button>
                <button style="border-radius: 50px;width: 35px;height: 35px;background: rgba(101, 81, 60,1);border: none;margin-left: 10px"></button> -->
            </div>
         <!-- <Colorpicker v-if="diaplayColorpicker" :colorElement="colorModule"/> -->
        </div>
    </div>
</template>

<script>
import Colorpicker from '../colorPickerComponent'
export default {
    components:{
      Colorpicker
    },
    methods:{
       ColorPicker(){
          alert('ssss')
          this.diaplayColorpicker = true
       }
    },
    data(){
        return{
            colorModule:'rgba(255 , 255 ,255 ,1)',
            diaplayColorpicker:'',
        }
    }
}
</script>

<style>

</style>
