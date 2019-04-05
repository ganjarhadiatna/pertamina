import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Kpi from '@/components/Kpi'
import KpiOperation from '@/components/KpiOperation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/kpi',
      name: 'kpi',
      component: Kpi
    },
    {
      path: '/kpi/operation',
      name: 'kpi-operation',
      component: KpiOperation
    }
  ],
  mode: 'history'
})
