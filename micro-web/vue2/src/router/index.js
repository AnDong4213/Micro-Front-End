import vue from 'vue'
import VueRouter from 'vue-router'
import Energy from '../pages/energy/index'

vue.use(VueRouter)

const routes = [{
    path: '/energy',
    name: 'Energy',
    component: Energy
}]

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes
})

export default router