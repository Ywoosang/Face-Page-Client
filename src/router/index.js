import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import Result from '../views/Result.vue'
import Login from '../views/Login.vue'; 
import VueRouter from 'vue-router'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/upload',
            component: Upload,
            name: 'select'
        },
        {
            path: '/result',
            component: Result,
            name: 'result'
        },
        {
            path: '/login',
            component: Login,
        }
    ]
})

export default router