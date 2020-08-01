<template>
<vue-palette
  :palettes="palettes"
/>
</template>

<script>
import  vuePalette  from "./components/index.vue";
export default {
    components:{vuePalette},
    data(){
        return {
            palettes:[
    ["#8D8741", "#659DBD", "#DAAD86", "#FBEEC1", "#BC986A"],
    
    ["#05386B", "#379683", "#5CDB95", "#8EE4AF", "#8860D0"],
    
    ["#2E1114", "#501B1D", "#ADADAD"],            ]
        }
    }

}
</script>

<style>

</style>