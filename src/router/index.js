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
            name: 'select',
            meta: {
                title: "FAGE > 파일 첨부"
            }
            
        },
        {
            path: '/result',
            component: Result,
            name: 'result',
            meta: {
                title: "FAGE > 결과 확인"
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                title: "FAGE > 로그인"
            }
        },
        {
            path: '/signup',
            component: SignUp,
            meta: {
                title: "FAGE > 회원가입"
            }
        }
    ]
})

router.afterEach((to) => {
    if(to.meta.title){
      document.title = to.meta.title;
    }
});

export default router