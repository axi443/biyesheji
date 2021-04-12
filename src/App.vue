<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.onresize = () => {
      var screenWidthRes = 
        document.documentElement.clientWidth || 
        document.body.clientWidth;
      var screenHeightRes =
        document.documentElement.clientHeight || 
        document.body.clientHeight;

      this.$store.commit("setScreenWidth", screenWidthRes);
      this.$store.commit("setScreenHeight", screenHeightRes);
    }
  }
}
</script>

<style>
@import 'assets/style/reset.css';
#app {
  color: #2c3e50;
}
</style>
