<template>
  <div class="login">
    <div class="login-container">
        <div class="login-logo">
            <img src="../assets/img/logo-letter.png">
        </div>
        <button class="login-btn" style="background-color:#fce51e; ">
            <img src="../assets/img/kakaotalk_login.png" style="width:17px; margin-right: 7px;">
            <a :href="baseUrl+'/api/auth/kakao'" style="color: rgb(59,29,20);">카카오톡으로 로그인</a>
        </button>
        <button class="login-btn" style="background-color:#01c73c; ">
            <img src="../assets/img/naver_login.png" style="width:25px; margin-right: 2px;">
            <a :href="baseUrl+'/api/auth/naver'" style="color: white;">네이버로 로그인</a>
        </button>
        <button class="login-btn" style="background-color:#efefef;">
            <img src="../assets/img/google_login.png" style="width:17px; margin-right: 7px;">
            <a :href="baseUrl+'/api/auth/google'" style="color: black;">구글로 로그인</a>
        </button>
        <button class="login-btn" style="background-color: black;">
            <img src="../assets/img/github_login.png" style="width:17px; margin-right: 7px;">
            <a :href="baseUrl+'/api/auth/github'" style="color: white;">Github로 로그인</a>
        </button>
        <p class="space_or">
            <span>또는</span>
        </p>
        <div class="login-input">
            <font-awesome-icon icon="fa-solid fa-envelope" style="padding: 0 10px;" />
            <input v-model="email" type="email" name="uid" placeholder="이메일 주소">
        </div>
        <div class="login-input">
            <font-awesome-icon icon="fa-solid fa-lock" style="padding: 0 10px;"/>
            <input v-model="password" type="email" name="uid" placeholder="비밀번호">
        </div>
        <button @click="login" class="login-btn" style="background-color: white; border: 1px solid black;">
            <span style="color: black;">로그인</span>
        </button>
        <div class="join-btn">
            <router-link class="signup" to="/signup">회원가입</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { signIn } from '../api/auth';  
import router from '../router';
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            email: '',
            password: '',
            baseUrl : process.env.VUE_APP_BASE_URL
        }
    },
     async created() {
      await this.isAuthenticated();
  },
    methods : {
           ...mapActions(['isAuthenticated']),
        async login(){
            try {
                const userData = {
                    email: this.email,
                    password: this.password
                }
                await signIn(userData);
                await router.push('/');
            } catch(error) {
                alert('로그인 실패');
            }
        }
    }
}
</script>

<style scopped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-container {
    display: block;
    /* border: 1px solid blue; */
    width: 350px;
    height: 85%;
}
.login-logo {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}
.login-logo img{
    height: 50px;
    object-fit: contain;
}
.login-btn {
    border: none;
    border-radius: 4px;
    margin-bottom: 8px;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.space_or {
    height: 30px;
    margin: 0 0 8px 0;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* .space_or::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.08);
} */
.login-input {
    border: 1px solid grey;
    color: grey;
    border-radius: 4px;
    margin-bottom: 8px;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: left;
}
.login-input input {
    font-size: 0.9rem;
    border: none;
}
.login-input input:focus {
    outline: none;
}
.join-btn {
    padding: 10px 0;
    font-size: 0.8rem;
    text-align: center;
}
.join-btn a{
    color: #000;
    

}
</style>