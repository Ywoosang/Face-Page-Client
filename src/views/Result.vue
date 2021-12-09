<template>
  <div class="wrapper">
    <div class="imagePlace">
      <div class="imageBack">
        <img src="../assets/loading.gif" v-if="!getManipulatedImageUrl" />
        <img :src="getManipulatedImageUrl" v-else />
      </div>
    </div>
    <div class="btn-wrapper" v-if="getManipulatedImageUrl">
      <a :href="getManipulatedImageUrl" class="download" download>다운로드</a>
      <button @click="registerPost">공개하기</button>
    </div>
  </div>
</template>

<script>
 
import { mapGetters } from 'vuex';
import { registerNewPost } from '../api/post';
import router from '../router';
import * as request from '../api/image';
export default {
    computed: {
        ...mapGetters(['getStyleImageName','getOriginalImageName','getOriginalImageUrl','getStyleImageUrl','getManipulatedImageUrl'])
    },
    async created() {
        try{
            if(!this.getStyleImageName || !this.getOriginalImageName) {
            alert('이미지가 없습니다')
            return router.go(-1);
          }
          const response = await request.manipulateImage({
              original: this.getOriginalImageName,
              style: this.getStyleImageName
          })
          this.$store.commit('setManipulatedImage',response.data.url)
        } catch(error){
          if(error.response) {
            if(error.response.status == 400){
              alert(error.response.data.message);
            }
          } else {
            console.log(error);
          }
        }
       
    },
    methods: {
        async registerPost(){  
            try{
                const data = {
                    originalUrl: this.getOriginalImageUrl,
                    styleUrl: this.getStyleImageUrl,
                    styleKey: this.getStyleImageName,
                    manipulatedUrl: this.getManipulatedImageUrl
                }
                await registerNewPost(data);
                await router.push({ path: '/'});
            } catch(error){
              if(error.response){
                 if(error.response.status == 401){
                    alert('로그인 해 주세요');
                    await router.push({ path:'/login'});
                } 
              } else {
                console.log(error);
                alert(error);
              }
                
            }
        }
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
  object-fit: contain; /* 이미지가 컨테이너의 사이즈와 맞지 않을 경우, 가로세로 비율을 유지한 채 여백을 남김 */
}

.fileInput-wrapper {
  display: flex;
  margin-bottom: 0.8rem;
}

.btn-wrapper {
  display: flex;
}

.btn-wrapper .download{
  border: 1px solid black;
  background : rgb(250, 250, 250);
  border-radius: 2px;
  padding: 0 3px;
  color:rgb(0, 0, 0);
}
.btn-wrapper .download:hover{
   background-color: rgb(240, 240, 240);
}

.btn-wrapper button {
  margin-left: 15px;
  margin-right: 15px;
}
</style>