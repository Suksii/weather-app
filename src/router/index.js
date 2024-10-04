import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodayView from '../views/DailyView.vue'
import HourlyView from '../views/HourlyView.vue';
import MonthlyView from '../views/MonthlyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/today/:city',
      name: 'today',
      component: TodayView,
      props: true
    },
    {
      path: '/hourly/:city',
      name: 'hourly',
      component: HourlyView,
      props: true

    },
    {
      path: '/monthly/:city',
      name: 'monthly',
      component: MonthlyView,
      props: true
    },
  ]
})

export default router
