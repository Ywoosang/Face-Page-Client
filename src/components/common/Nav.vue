<template>
  <nav class="nav-container">
    <div class="nav-wrapper">
      <!-- logo -->
      <div class="logo">
        <router-link to="/" class="router-design">
           <img src="../../assets/img/logo.png">
        </router-link>
        
      </div>
       <router-link to='/login' class='router-design'>로그인</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
.nav-container {
  /* box-shadow: 0px 1px 5px #d4cc80; */
  box-shadow: 0px 1px 5px #afafaf;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 600;
}
.nav-wrapper {
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem;
}
.nav-wrapper .logo{

  padding-left: 1.5rem;
}
.nav-wrapper .logo img{
  object-fit: contain;
  height: 50px;
}
.nav-wrapper .menu-list ul{
  list-style-type: none; 
  display: flex;
}
.nav-wrapper .menu-list ul li{
  display: inline;
  margin-right: 2rem;
}
/* ENTER버튼 디자인 */
#nav-enter {
  /* border: 2px solid #e4ce0f;
  border-radius: 5px; */
  /* padding: 0.5rem 0.7rem; */
}

.router-design {
  color: rgb(137, 141, 148);
  /* a태그의 밑줄 없앰 */
  text-decoration: none;
}

.nav-wrapper li .router-link-active {
  color: #e4ce0f !important; 
}
.nav-wrapper li .router-design:hover:not(.active){
  color: rgb(31, 31, 31);
} 
</style>