<template>
  <main>
    <nav-bar/>
    <router-view/>
  </main>
</template>

<script>
import NavBar from './components/common/Nav.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

* {
  /* border: 1px solid red; */
  font-family: 'Noto Sans KR', sans-serif;
}

html {
  height: 100%;
}

body {
    margin: 0;
    height: 100%;
  }

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

a{
  text-decoration: none;
}
</style>
