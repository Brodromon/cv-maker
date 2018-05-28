import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    
  ],
  mode: 'history'
})
