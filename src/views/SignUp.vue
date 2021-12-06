<template>
  <div class="login">
    <div class="login-container">
        <div class="login-logo">
            <img src="../assets/img/logo-letter.png">
        </div>
        <div class="login-input">
            <font-awesome-icon icon="fa-solid fa-envelope" style="padding: 0 10px;" />
            <input v-model="email" type="email" name="uid" placeholder="이메일 주소">
        </div>
        <div class="login-input">
           <font-awesome-icon icon="fa-solid fa-user" style="padding: 0 10px;"/>
            <input v-model="name" type="text" name="uid" placeholder="이름(10자 이하)">
        </div>
        <div class="login-input">
            <font-awesome-icon icon="fa-solid fa-lock" style="padding: 0 10px;"/>
            <input v-model="password" type="email" name="uid" placeholder="비밀번호">
        </div>
        <button @click="login" class="login-btn" style="background-color: white; border: 1px solid black;">
            <span style="color: black;">회원가입</span>
        </button>
        <div class="join-btn">
            <router-link to="/login">로그인</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import * as request from '../api/auth';  
import router from '../router';
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
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
                    name: this.name,
                    password: this.password
                }
                await request.signUp(userData);
                await router.push('/');
            } catch(error) {
                if(error.response){
                    alert(error.response.data.message);
                }
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