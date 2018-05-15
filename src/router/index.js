import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '../page/first.vue'
import second from '../page/second.vue'
import three from  '../page/three.vue'
import four from '../page/four.vue'


Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      redirect: '/first'
    },
    {
      path: '/:id',
      component: first,
      children: [
        {
          path: 'first',
          component: first
        },
        {
          path: 'second',
          component: second
        },
        {
          path: 'three',
          component: three
        },
        {
          path: 'four',
          component: four
        },
      ]
    }*/
    {
      path: '/',
      component : first
    },
    {
      path: '/second',
      component : second
    },
    {
      path: '/three',
      component : three
    },
    {
      path: '/four',
      component : four
    }
  ]
})
