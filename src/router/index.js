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
      path: '/today',
      name: 'today',
      component: TodayView,
      props: true
    },
    {
      path: '/hourly',
      name: 'hourly',
      component: HourlyView,

    },
    {
      path: '/monthly',
      name: 'monthly',
      component: MonthlyView
    },
  ]
})

export default router
