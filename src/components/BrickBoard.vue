<template>
  <div class="board-wrapper">
    <div class="board">
      <div class="board-item" v-for="(postSet, index) in posts" :key="index">
        <div
          class="post"
          v-for="(post, index) in postSet"
          :key="index"
          @click="applyStyle(post)"
        >
          <div class="delete" @click="deletePost(post.id,post.user.id)">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </div>
          <div class="owner">
             {{ post.user.name}}
          </div>
          <img class="manipulated" :src="post.manipulatedUrl" />
          <img class="original" :src="post.originalUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
// import { mapState } from 'vuex';
import { getAllPosts, deletePostByPostId } from "../api/post";
export default {
  data() {
    return {
      posts: [[], [], []],
    };
  },
  methods: {
    async applyFilter() {
      await router.push({ path: "/upload" });
    },
    async deletePost(postId,userId) {
      try{
         await deletePostByPostId({ postId, userId});
        location.reload();
      }catch(error){
        if(error.response.status == 403){
          alert(error.response.data.message);
        }
        if(error.response.status == 401){
          alert(error.response.data.message);
          await router.push( {path:'/login'});
        }
      }
    },
  },
  // computed: {
  // },
  async created() {
    const response = await getAllPosts();
    const posts = response.data.posts;
    console.log(posts);
    for (let i = 0; i < posts.length; i++) {
      this.posts[i % 3].push(posts[i]);
    }
  },
};
</script>

<style scoped>
* {
  /* border:1px solid red; */
}
.board-wrapper {
  display: inline-block;
  width: 70%;
  /* border-radius: 10px;
  box-shadow: 1px 1px 9px 2px rgb(214, 214, 214); */
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
.board-item .post {
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
  transition: 1s;
}

.board-item .post .delete {
  position: absolute;
  z-index: 1001;
  left: 5px;
  top: 5px;
  font-size: 16px;
}

.board-item .post .owner {
  font-weight: 600;
  position: absolute;
  z-index: 1001;
  right: 5px;
  top: 5px;
  font-size: 13px;
}

.board-item .post .original {
  z-index: 2;
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s;
}
.board-item .post:hover .original {
  display: block;
}

.board-item .post:hover .apply button {
  background-color: rgba(0, 0, 0, 0.5);
  background-color: white;
  color: rgb(3, 3, 3);
}

.board-item .post .apply button {
  font-size: 1.2rem;
  position: absolute;
  z-index: 1001;
  left: 50%;
  top: 50%;
  border: none;
  background-color: transparent;
  color: transparent;
  border-radius: 3px;
  transition: 0.5s;
  transform: translate(-50%, -50%);
}
.board-item .post .apply button:hover {
  background-color: rgb(228, 115, 40);
}

.board-item img {
  width: 100%;
  margin-bottom: 0.1rem;
}
</style>