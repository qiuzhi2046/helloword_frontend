import { createRouter, createWebHistory } from 'vue-router'
import tools from '@/views/tools.vue' //
import study from "@/views/study.vue";
import home from "@/views/home.vue";
import user from "@/views/user.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/tools',
      name: 'tools',
      component: tools
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
  ]
})



export default router
