<template>
  <div id="app">
    <div class="links">
      <router-link to="/formula1">数式1</router-link>
      <router-link to="/formula2">数式2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links {
  margin-bottom: 30px;
}
</style>
