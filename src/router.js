import Vue from 'vue'
import Router from 'vue-router'
import main from './components/main'
import score from './components/score'
import search from './components/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect:'/scoreInsert',
      children:[
        {
          path: '/scoreInsert',
          name: 'score',
          component:score
        },
        {
          path:'/search',
          name:'search',
          component:search
        }
      ]
    },{
      path:'*',
      redirect:'/'
    }
  ]
})
