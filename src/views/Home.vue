<template>
  <div class="home">
    <div class="banner">
      <div class="banner-item">
        <video id="video" controls muted="muted" autoplay>
          <source src="http://localhost:8000/api/video" type="video/mp4">
        </video>
      </div>
      <div class="banner-item">
        <div class="banner-textBox">
          <p style="font-size:1.2rem; font-weight:bold; text-align: right;"><img src="../assets/img/logo-letter.png"></p>
          <p style="font-size:0.9rem; text-align: right;">
            Face Page, Fage에서 <br>
            원하는 사진에 스타일을 자유롭게 적용해 보세요.
          </p>
        </div>
        <div class="banner-btnBox">
          <router-link to='/upload'>
            <button>적용하러 가기 🤓</button>
          </router-link>
        </div>
      </div>  
    </div>
    <brick-board/>
  </div>
</template>

<script>
import BrickBoard from '../components/BrickBoard.vue';
import { mapActions,mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    BrickBoard,
  },
  methods: {
    ...mapActions(['isAuthenticated']),
    ...mapMutations(['setManipulatedImage'])
  },
  async created() {
      await this.isAuthenticated();
      this.setManipulatedImage('');

  }
}
</script>

<style>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
.banner {
  display: grid; 
  grid-template-columns: 1.4fr 1fr;
  padding: 30px 30px;
  width: 70%;
  grid-gap: 2rem;
  margin-top: 2rem;
}

.banner-item video {
  width: inherit;
}

.banner-item:nth-child(2) {
  text-align: right;
  padding-right: 2rem;
}
.banner-textBox {
  margin-top: 7rem;
}

.banner-textBox p img{
    width:4em;
    object-fit: contain;
}

.banner-btnBox {
  margin-top: 3rem;
  margin-bottom: 4rem;
}

.banner-item:nth-child(1) {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

}

</style>