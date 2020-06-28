<template>
<div id="app">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

  <vantTabBar></vantTabBar>
</div>
</template>

<script>
import vantTabBar from './components/vant-tabBar'
export default {
    components:{
      vantTabBar
    }
}
</script>

<style scoped>

</style>