import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Authorization.vue'
import Reg from '../views/Registration.vue'
import Katalog from '../views/Katalog.vue'
import GetCode from '../views/Getthecode.vue'
import EnterCode from '../views/Enterthecode.vue'
import Characteristics from '../views/Characteristics.vue'
import Porivn from '../views/Porivnyannya.vue'
import Like from '../views/Likes.vue'
import Basket from '../views/Basket.vue'
import Orders from '../views/Orders.vue'
import cabinet from '../views/PersonalСabinet.vue'

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
      path: '/Porivn',
      name: 'Porivn',
      component: Porivn
    },
    {
      path: '/Characteristics',
      name: 'Characteristics',
      component: Characteristics
    },
    {
      path: '/Characteristics',
      name: 'Characteristics',
      component: Characteristics
    },
    {
      path: '/Like',
      name: 'Like',
      component: Like
    },
    {
      path: '/Basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/Orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/Cabinet',
      name: 'Cabinet',
      component: cabinet
    },
  ]
})

export default router
