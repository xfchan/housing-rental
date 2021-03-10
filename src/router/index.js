import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Message = () => import('views/message/Message')
const Recommend = () => import('views/recommend/Recommend')
const Square = () => import('views/square/Square')
const Profile = () => import('views/profile/Profile')

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/message',
  component: Message
}, {
  path: '/recommend',
  component: Recommend
}, {
  path: '/square',
  component: Square
}, {
  path: '/profile',
  component: Profile
}, ]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
