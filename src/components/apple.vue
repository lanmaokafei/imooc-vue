<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <p>{{ $route.params.color }}</p>
      <p>{{ $route.params.type }}</p>
      <button @click="getParam">get param</button>

      <button @click="addOne">add one</button>
      <button @click="minusOne">minus one</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'hello',
  data () {
      return{
          msg:'今天大暴雨',
          price: 5
      }
  },
  methods:{
      getParam () {
          console.log(this.$route.params);
      },
      addOne(){
          this.$store.dispatch('increment', this.price)
      },
      minusOne(){
          this.$store.commit('decrement', this.price)
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

