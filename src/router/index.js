import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import Result from '../views/Result.vue'
import Login from '../views/Login.vue'; 
import SignUp from '../views/SignUp.vue';
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
        },
        {
            path: '/signup',
            component: SignUp,
        }
    ]
})

export default router