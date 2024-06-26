import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import App1 from '../views/App1.vue';
import App2 from '../views/App2.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/app1', name: 'App1', component: App1 },
  { path: '/app2', name: 'App2', component: App2 },
];

const path = process.env.NODE_ENV === 'production' ? '/micro-app-feedback/' : ''

const router = createRouter({
  history: createWebHistory(path),
  routes,
});

export default router;