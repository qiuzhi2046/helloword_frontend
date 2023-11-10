import { createRouter, createWebHistory } from 'vue-router'
import tools from '@/views/tools.vue' //
import study from "@/views/study.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tools',
      name: 'tools',
      component: tools
    },
    {
      path: '/study',
      name: 'study',
      component: study
    }
  ]
})

export default router
