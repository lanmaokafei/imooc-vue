<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view name="viewA"></router-view> -->
    <!-- <router-view name="viewB"></router-view> -->
    <router-view></router-view>
    <router-link :to="{name:'applePage'}">to apple</router-link>
    <router-link :to="{path:'/banana', param:{color:'yellow'}}">to banana</router-link>
    <router-link :to="{path:'apple/red'}">to redapple</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
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
</style>
