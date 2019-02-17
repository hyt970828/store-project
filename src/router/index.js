import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'
import Sub from '@/pages/Sub/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/sub1',
      children: [{
        path: '/sub1',
        name: 'Sub1',
        component: Sub,
      }]
    }
  ]
})
