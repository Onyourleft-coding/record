import { createRouter, createWebHistory } from 'vue-router';
import { manageLogin } from '../api/login';
const routes = [
  { path: '/', redirect: '/login' },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // await manageLogin();
  }
  next();
});

export default router;
