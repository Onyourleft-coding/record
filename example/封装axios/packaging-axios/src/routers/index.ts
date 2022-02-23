import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/' },
  { path: '/:w+', component: () => import('@/views/404/index.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, form, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
    //如果没有token执行登录
    // await login();
  }
  next();
});

export default router;
