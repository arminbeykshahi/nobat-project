import { createRouter, createWebHistory } from "vue-router"

import HomeItem from './components/HomeItem.vue'
import NobatItem from './components/NobatItem.vue'
import ShowItem from './components/ShowItem.vue'


const routes = [
    { path: '/', component: HomeItem },
    { path: '/nobat', component: NobatItem },
    { path: '/shownobat', component: ShowItem },
    
  ]


  const router = createRouter({
  
    history: createWebHistory(),
    routes, 
  })

  export default router