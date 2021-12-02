<template>
  <div class="container">
        <p>마음에 드는 이미지가 없다면…</p>
        <div class="search-input">
          <input type="text" v-model="keyword" id="search" />
          <button type="button" @click="searchImages"></button>
        </div>
        <brick-board/>
  </div>
</template>

<script>
import axios from "axios";
import BrickBoard from './BrickBoard.vue';

export default {
    data() {
        return {
            urls: [],
            keyword: ""
        }
    },
    components: {
        BrickBoard
    },
    methods: {
        async searchImages() {
            try {
                const keyword = this.keyword;
                const response = await axios.get(
                `http://localhost:8000/api/image/?keyword=${keyword}`
                );
                this.urls = response.data.urls;
            } catch (error) {
                console.log(error);
            }
        },
    }
}
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
</style>