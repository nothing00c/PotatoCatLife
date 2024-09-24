import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[//路由规则
      {
          name:'HomeView',
          path:'/',
          component:HomeView
      },
  ]
  
})
export default router