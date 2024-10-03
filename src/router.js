import { createRouter, createWebHistory } from 'vue-router';
import TodayView from './views/DailyView.vue';
import HourlyView from './views/HourlyView.vue';
import MonthlyView from './views/MonthlyView.vue';

const routes = [
  { path: '/today', component: TodayView },
  { path: '/hourly', component: HourlyView },
  { path: '/monthly', component: MonthlyView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;