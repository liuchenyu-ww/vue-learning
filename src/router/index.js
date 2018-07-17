import Vue from 'vue'
import Router from 'vue-router'
import vuecharts from '@/page/vuecharts'
import barbasics from '@/components/barbasics'
import barexample from '@/components/barexample'
import barstyle from '@/components/barstyle'
import baraccumulation from '@/components/baraccumulation'
import baraccumulationbasics from '@/components/baraccumulationbasics'
import linebasics from '@/components/linebasics'
import lineexample from '@/components/lineexample'
import linestyle from '@/components/linestyle'
import lineaccumulation from '@/components/lineaccumulation'
import lineaccumulationbasics from '@/components/lineaccumulationbasics'
import mapextend from '@/components/mapextend'
import maptransfer from '@/components/maptransfer'
import mappunctuation from '@/components/mappunctuation'
import aboutus from '@/components/aboutus'
import startecharts from '@/components/startecharts'
import mapone from '@/components/mapone'
import maptwo from '@/components/maptwo'
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
          path: '/barbasics',
          name: 'barbasics',
          component: barbasics
        },
        {
          path: '/barexample',
          name: 'barexample',
          component: barexample
        },
        {
          path: '/barstyle',
          name: 'barstyle',
          component: barstyle
        },
        {
          path: '/baraccumulation',
          name: 'baraccumulation',
          component: baraccumulation
        },
        {
          path: '/baraccumulationbasics',
          name: 'baraccumulationbasics',
          component: baraccumulationbasics
        },
        {
          path: '/linebasics',
          name: 'linebasics',
          component: linebasics
        },
        {
          path: '/lineexample',
          name: 'lineexample',
          component: lineexample
        },
        {
          path: '/linestyle',
          name: 'linestyle',
          component: linestyle
        },
        {
          path: '/lineaccumulation',
          name: 'lineaccumulation',
          component: lineaccumulation
        },
        {
          path: '/lineaccumulationbasics',
          name: 'lineaccumulationbasics',
          component: lineaccumulationbasics
        },
        {
          path: '/mapextend',
          name: 'mapextend',
          component: mapextend
        },
        {
          path: '/maptransfer',
          name: 'maptransfer',
          component: maptransfer
        },
        {
          path: '/mappunctuation',
          name: 'mappunctuation',
          component: mappunctuation
        },
        {
          path: '/aboutus',
          name: 'aboutus',
          component: aboutus
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
        }
      ]
    }
  ]
})
