<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view name="viewA"></router-view> -->
    <!-- <router-view name="viewB"></router-view> -->
    <!-- 动画过渡 -->
    <transition name="fade">
      <!-- 缓存 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- 缓存 -->
    </transition>
    <!-- 动画过渡 -->
    <router-link :to="{name:'applePage'}">to apple</router-link>
    <router-link :to="{path:'/banana', param:{color:'yellow'}}">to banana</router-link>
    <router-link :to="{path:'/apple/red'}">to redapple</router-link>
    {{ totalPrice }}
    <apple></apple>
    <banana></banana>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Apple from './components/apple'
import Banana from './components/banana'
import ShopCart from './components/shopcart'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Apple,
    Banana,
    ShopCart
  },
  computed:{
    totalPrice (){
      return this.$store.getters.getTotal
    }
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
