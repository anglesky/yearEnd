import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/yearEnd',
    },
    {
      path: '/yearEnd',
      name: 'yearEnd',
      component : ()=>import( /* webpackChunkName: "about" */ "@/yearEnd/yearEnd.vue"),
      meta:{
      	title:"Timing年终总结"
      }
    },
  ]
})
