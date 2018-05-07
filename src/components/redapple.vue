<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <button @click="getParam">get param</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'hello',
  data () {
      return{
          msg:'今天雷暴雨'
      }
  },
  methods:{
      getParam () {
          console.log(this.$route.params);
      }
  }
}
</script>

<style scoped>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

