<template>
  <div id="app">
    <div class="outer">
      <div class="inner"></div>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.outer{
  position: relative;
  margin:0 auto;
  width:300px;
  height: 300px;
  background: #2c3e50;
  .inner{
    position: absolute;
    margin-left: 50%;
    margin-top: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 200px;
    background: #fff;
  }
}
</style>
