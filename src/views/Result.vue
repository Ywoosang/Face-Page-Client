<template>
  <div class="wrapper">
        <div class="imagePlace">
            <div class="imageBack" @change="HideContainerBackground" style='background-color: rgba(216, 215, 215, 0.473);'>
            <img src="../assets/loading.gif" v-if="!resultImgUrl">
            <img :src="resultImgUrl" v-else/>
            </div>
        </div>
        <div class="btn-wrapper">
            <button @click="downloadStyledImage">다운로드</button>
            <button>공개하기</button>
        </div>
  </div>
</template>

<script>
 
import { mapGetters } from 'vuex';
import axios from 'axios';
import router from '../router';
export default {
    data() {
        return {
            resultImgUrl: ""
        }
    },
    computed: {
        ...mapGetters(['getStyleImageName','getOriginalImageName'])
    },
    async created() {
        if(!this.getStyleImageName || !this.getOriginalImageName) {
            alert('이미지가 없습니다')
            return router.go(-1);
        }
        const response = await axios.post('http://localhost:5000/api/image/fit',{
            original: this.getOriginalImageName,
            style: this.getStyleImageName
        })
        
        this.resultImgUrl = response.data.url;

    },
    methods: {
        HideContainerBackground() {
            const imageBack = document.querySelector('.imageBack');
            imageBack.style.backgroundColor = 'white';
        },
    }
}
</script>

<style scoped>
.wrapper {
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
}
.wrapper .imagePlace {
  margin: 50px 0 20px 0;
}
.imagePlace .imageBack {
  width: 400px;
  height: 400px;
  text-align: center;
  color: rgb(102, 102, 102);
  font-style: italic;
}
.imagePlace img {
    width: 400px;
  height: 400px;
  object-fit: cover; /* 이미지가 컨테이너의 사이즈와 맞지 않을 경우, 가로세로 비율을 유지한 채 여백을 남김 */
}

.fileInput-wrapper {
  display: flex;
  margin-bottom: 0.8rem;
}

.btn-wrapper {
    display: flex;
}
.btn-wrapper button {
    margin-left: 15px;
    margin-right: 15px;
}
</style>