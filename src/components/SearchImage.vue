<template>
  <div class="container">
    <p>마음에 드는 이미지가 없다면…</p>
    <div class="search-input">
      <input type="text" v-model="keyword" id="search" />
      <button type="button" @click="searchImages"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    </div>
    <div class="board-wrapper">
      <div v-if="contentNotFound"> 검색 결과가 없습니다.(0건)</div>
      <div class="board">
        <div
          class="board-item"
          v-for="(imageSet, index) in images"
          :key="index"
        >
          <div class="image" v-for="(image, index) in imageSet" :key="index">
            <img :src="image.largeImageURL">
            <a :href=" 'http://localhost:8000/api/image/download?url=' +image.webformatURL"><font-awesome-icon icon="fa-solid fa-download" /></a>
          </div>
        </div>
      </div>

            <!-- <a :href=" 'http://localhost:8000/api/image/download?url=' +'https://pixabay.com/get/ga8c23a35e3ed58b82047c4b79e01c58574bd1b3bd3163750efc72e56f79b004fb7cde8327922bff796c25a20ae1a4e98_640.jpg'">다운로드</a> -->
    </div>
  </div>
</template>

<script>
import * as request from '../api/image';

export default {
  data() {
    return {
      urls: [],
      keyword: "",
      images: [[], [], []],
      contentNotFound: false
    };
  },
  components: {},
  methods: {
    async searchImages() {
      try {
        if (!this.keyword.trim()) alert("키워드를 입력해 주세요");
        this.images = [[], [], []];
        const response = await request.getPixabayImage(this.keyword);
        const images = response.data.images;
        if(images.length == 0) {
          this.contentNotFound = true;
        } else  {
          this.contentNotFound = false;
        }
        for (let i = 0; i < images.length; i++) {
          this.images[i % 3].push(images[i]);
        }
       
      } catch (error) {
        console.log(error);
      }
    },
  },
};

</script>

<style scoped>
.container {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  margin: 30px 0 30px 0;
}
.search-input {
  width: 20%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 2px 2px;
}
.search-input input {
  width: 90%;
  border: none;
}
.search-input input:focus {
  outline: none;
}
.search-input button {
  background: inherit;
  border: none;
  color: rgb(70, 70, 70);
}
/*  */
.board-wrapper {
  display: inline-block;
  width: 70%;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 11px 15px;
}
.board {
  display: grid;
  /* border: 1px solid blue; */
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
}
.board-item {
  /* border: 1px solid black; */
  overflow: visible;
}
.board-item .image {
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
  transition: 1s;
}

.board-item  .image img {
  width: 100%;
  margin-bottom: 0.1rem;
}

.board-item .image a {
  position:absolute;
  top:5px;
  left:5px;  
  font-size: 2vw;
  color:rgb(114, 114, 114);
}
</style>
 