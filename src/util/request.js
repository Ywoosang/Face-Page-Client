import axios from 'axios';

// axios 인스턴스 구성
const service = axios.create({
    baseURL : process.env.VUE_APP_BASE_URL,
    timeout : 50000,
    withCredentials: true
});

export default service;