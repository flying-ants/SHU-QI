<template>
<div id="app">
   <div ref="box">文字颜色</div>
   bookcase
</div>
</template>

<script>

export default {
   mounted(){
      this.$refs.box.style.color = 'blue'
   }
}
</script>

<style scoped>

</style>