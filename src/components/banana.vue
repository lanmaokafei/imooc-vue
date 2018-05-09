<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <button @click="addOne">add one</button>
      <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
export default {
  name:'hello',
  data () {
      return{
          msg:'今天好好天',
          price: 15
      }
  },
  methods:{
      getParam () {
          console.log(this.$route.params);
      },
      addOne(){
          this.$store.commit('increment', this.price)
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

