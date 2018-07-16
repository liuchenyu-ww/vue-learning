import Vue from 'vue'
import Router from 'vue-router'
import vuecharts from '@/page/vuecharts'
import rightbox from '@/components/rightbox'
import bartwo from '@/components/bartwo'
import barthree from '@/components/barthree'
import barfour from '@/components/barfour'
import barfive from '@/components/barfive'
import lineone from '@/components/lineone'
import linetwo from '@/components/linetwo'
import linethree from '@/components/linethree'
import linefour from '@/components/linefour'
import linefive from '@/components/linefive'
import mapone from '@/components/mapone'
import maptwo from '@/components/maptwo'
import mapthree from '@/components/mapthree'
import aboutus from '@/components/aboutus'
import startecharts from '@/components/startecharts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuecharts',
      component: vuecharts,
      children: [
        {
          path: '/',
          name: 'startecharts',
          component: startecharts
        },
        {
          path: '/barone',
          name: 'rightbox',
          component: rightbox
        },
        {
          path: '/bartwo',
          name: 'bartwo',
          component: bartwo
        },
        {
          path: '/barthree',
          name: 'barthree',
          component: barthree
        },
        {
          path: '/barfour',
          name: 'barfour',
          component: barfour
        },
        {
          path: '/barfive',
          name: 'barfive',
          component: barfive
        },
        {
          path: '/lineone',
          name: 'lineone',
          component: lineone
        },
        {
          path: '/linetwo',
          name: 'linetwo',
          component: linetwo
        },
        {
          path: '/linethree',
          name: 'linethree',
          component: linethree
        },
        {
          path: '/linefour',
          name: 'linefour',
          component: linefour
        },
        {
          path: '/linefive',
          name: 'linefive',
          component: linefive
        },
        {
          path: '/mapone',
          name: 'mapone',
          component: mapone
        },
        {
          path: '/maptwo',
          name: 'maptwo',
          component: maptwo
        },
        {
          path: '/mapthree',
          name: 'mapthree',
          component: mapthree
        },
        {
          path: '/aboutus',
          name: 'aboutus',
          component: aboutus
        }
      ]
    }
  ]
})
