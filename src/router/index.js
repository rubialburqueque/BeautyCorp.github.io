import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/consultant/catalogue/Home.vue'),
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/consultant/SignIn/Login.vue'),
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "reset" */ '../views/consultant/SignIn/Reset.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/consultant/SignIn/Register.vue'),
  },
  {
    path: '/points',
    name: 'Points',
    component: () => import(/* webpackChunkName: "reset" */ '../views/consultant/orders/Points.vue'),
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "reset" */ '../views/consultant/orders/Orders.vue'),
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import(/* webpackChunkName: "reset" */ '../views/consultant/orders/ListClients.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/client/catalogue/Products.vue'),
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: () => import(/* webpackChunkName: "products" */ '../views/client/catalogue/Catalogue.vue'),
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import(/* webpackChunkName: "products" */ '../views/client/order/Confirm.vue'),
  },
  {
    path: '/ordercli',
    name: 'Ordercli',
    component: () => import(/* webpackChunkName: "products" */ '../views/client/order/Ordercli.vue'),
  },
  {
    path: '/logincli',
    name: 'LoginCli',
    component: () => import(/* webpackChunkName: "reset" */ '../views/client/Auth/Login.vue'),
  },
  {
    path: '/datos',
    name: 'Registercli',
    component: () => import(/* webpackChunkName: "reset" */ '../views/client/Auth/Registercli.vue'),
  },
  {
    path: '/home-catalogo',
    name: 'homeCatalogo',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/catalogue/Home.vue'),
  },
  {
    path: '/c-novedades',
    name: 'Cnovedades',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/catalogue/Novedades.vue'),
  },
  {
    path: '/C-offerts',
    name: 'Cofferts',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/catalogue/Ofertas.vue'),
  },
  {
    path: '/dispatches',
    name: 'dispatches',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/catalogue/Dispatches.vue'),
  },
  {
    path: '/C-orders',
    name: 'Corders',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/catalogue/orders.vue'),
  },
  {
    path: '/Orders-Register',
    name: 'OrderRegister',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/consult/RegisterConsult.vue'),
  },
  {
    path: '/Orders-RegisterD',
    name: 'OrderRegisterD',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/delivery/Register.vue'),
  },
  {
    path: '/Orders-RegisterS',
    name: 'OrderRegisterS',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/store/Register.vue'),
  },
  {
    path: '/dispatch-places',
    name: 'Dispatch',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/delivery/Dispatch.vue'),
  },
  {
    path: '/Resumen-catalogo',
    name: 'ResumenCatalogo',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/delivery/Resume.vue'),
  },
  {
    path: '/Resumen-catalogoS',
    name: 'ResumenCatalogoS',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/store/Resume.vue'),
  },
  {
    path: '/pay-customer',
    name: 'PayCustomer',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/delivery/Payment.vue'),
  },
  {
    path: '/pay-customer-S',
    name: 'PayCustomerS',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/store/Payment.vue'),
  },
  {
    path: '/pay-confirm',
    name: 'PayConfirm',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/delivery/Confirm.vue'),
  },
  {
    path: '/pay-confirmS',
    name: 'PayConfirmS',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/store/Confirm.vue'),
  },
  {
    path: '/shipping-day',
    name: 'ShippingDay',
    component: () => import(/* webpackChunkName: "reset" */ '../views/customer/orders/store/Store.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
