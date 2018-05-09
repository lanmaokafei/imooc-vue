// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'
import ShopCart from './components/shopcart'

// 注册
Vue.use(VRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

// 实例化store数据中心
let store = new Vuex.Store({
    state:{
      totalPrice: 0
    },
    getters:{
      // 获取状态集里的数据
      getTotal(state){
          return state.totalPrice
      }
    },
    mutations:{
      // 与actions区别在于，该方法为同步操作
      // 增加
      increment (state, price){
        state.totalPrice += price
      },
      // 删减
      decrement (state, price){
        state.totalPrice -= price
      }
    },
    actions:{
      // 可以执行异步操作，API接口必须放在actions中
      increment (context, price) {
      // increment (context, id) {
        // 使用产品id通过API获取产品价格后在操作
        // api(id, function(price){
        //   context.commit('increment', price)
        // })
          context.commit('increment', price)
      }
    }
})

//实例化路由
let router = new VRouter({
  // mode: 'history', //关闭路径#模式
  routes:[
    {
      //路由重定向
      path:'/',
      redirect:'/apple'
    },
    {
      path:'/apple',
      component:Apple,
      name:'applePage',
      children:[
        {
          path:'red',
          component:RedApple
        }
      ]
    },
    {
      path:'/banana',
      component:Banana
    },
    {
      path:'/cart',
      component:ShopCart
    }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
