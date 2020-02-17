import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a8412b5 = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _1155a11e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3c538040 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _112a9ec8 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _a2bd1c36 = () => interopDefault(import('../pages/tasks.vue' /* webpackChunkName: "pages/tasks" */))
const _04403a44 = () => interopDefault(import('../pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _72abdd29 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create",
    component: _0a8412b5,
    name: "create"
  }, {
    path: "/inspire",
    component: _1155a11e,
    name: "inspire"
  }, {
    path: "/login",
    component: _3c538040,
    name: "login"
  }, {
    path: "/register",
    component: _112a9ec8,
    name: "register"
  }, {
    path: "/tasks",
    component: _a2bd1c36,
    name: "tasks"
  }, {
    path: "/account/profile",
    component: _04403a44,
    name: "account-profile"
  }, {
    path: "/",
    component: _72abdd29,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
