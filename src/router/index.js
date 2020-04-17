import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/consultant/catalogue/Home.vue'),
  },
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/consultant/SignIn/Login.vue'),
  },
  {
    path: '/reset',
    name: 'Reset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reset" */ '../views/consultant/SignIn/Reset.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/consultant/SignIn/Register.vue'),
  },
  {
    path: '/termsAndCoditions',
    name: 'termsAndCoditions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "termsAndCoditions" */ '../views/consultant/SignIn/Condition.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/client/catalogue/Products.vue'),
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/client/catalogue/Catalogue.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
/* router.beforeEach((to, from, next) => {
  if (to.matched.some((ruta) => ruta.meta.requiresAuth)) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        name: 'Login',
      });
    }
  } else {
    next();
  }
}); */

export default router;
