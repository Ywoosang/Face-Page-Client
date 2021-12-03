<template>
  <div class="uploader">
      <input-image />
      <button @click="change">완료</button>
      <search-image />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InputImage from '../components/InputImage.vue';
import SearchImage from '../components/SearchImage.vue';
import router from '../router'

export default {
    components: {
        InputImage,
        SearchImage
    },
    computed: {
        ...mapGetters (["getOriginalImageUrl", "getStyleImageUrl"])
    },
    methods: {
        change() {
            if(this.getOriginalImageUrl=='' || this.getStyleImageUrl=='') {
                return alert('이미지를 업로드해 주세요.');
            }
            router.push({path: 'result'})
            // post 요청
        }
    }
}
</script>

<style scoped>
.uploader{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.uploader button {
    background-color: rgb(255, 255, 255);
    width: 70px;
    height: 40px;
    font-size: 0.9rem;
    margin-top: 20px;
}
</style>