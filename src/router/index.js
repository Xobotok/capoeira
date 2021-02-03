import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js'
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', requiresAuth: true},
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty', requiresAuth: false},
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'empty', requiresAuth: false},
    component: () => import('../views/Register.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return
    }
    next('/login')
  } else {
    next()
  }
});
export default router;
