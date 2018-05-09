// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'

Vue.use(VRouter)

Vue.config.productionTip = false

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
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
