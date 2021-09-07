
import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '@/views/Layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children:[
      {
        path:'/home',
        component: ()=>import('@/views/Home/index.vue'),
      }
    ]
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
