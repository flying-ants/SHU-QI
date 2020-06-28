<template>
<div id="classify">
   <van-tabs v-model="active" title-active-color="#23b383" color="#23b383" title-active-weight="900" ref="vantble">
      <van-tab title=" 男生">内容 1</van-tab>
      <van-tab title=" 女生">内容 2</van-tab>
    
   </van-tabs>
   
</div>
</template>

<script>

export default {
    data() {
      return {
         active: 2,
      };
  }, 
//   mounted(){
   
//         this.$refs.vantble.style.cssText ='font-weight:900';
     
//   } 
  
}
</script>



<style scoped>

</style>