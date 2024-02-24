import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Authorization.vue'
import Reg from '../views/Registration.vue'
import Katalog from '../views/Katalog.vue'
import GetCode from '../views/Getthecode.vue'
import EnterCode from '../views/Enterthecode.vue'
import Characteristics from '../views/Characteristics.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Katalog',
      component: Katalog
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/GetCode',
      name: 'GetCode',
      component: GetCode
    },
    {
      path: '/EnterCode',
      name: 'EnterCode',
      component: EnterCode
    },
    {
      path: '/Characteristics',
      name: 'Characteristics',
      component: Characteristics
    }
  ]
})

export default router
