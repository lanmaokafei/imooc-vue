<template>
  <div class="hello">
      <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name:'hello',
  data () {
      return{
          msg:'今天好好天'
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

