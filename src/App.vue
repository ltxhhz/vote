<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import login from './components/login.vue'
</script>

<template>
  <router-view></router-view>
  <!-- <login /> -->
</template>

<style>
@font-face {
  font-family: 方正凉凉体;
  src: url('./assets/fonts/FZSJ-LLTJW.TTF');
}
@font-face {
  font-family: 早茶get修改;
  src: url('./assets/fonts/FZSJ-ZAOCGETXG.TTF');
}
@font-face {
  font-family: 方正卡通;
  src: url('./assets/fonts/FZKATJW.TTF');
}
*{
  font-family: "comic sans ms",方正卡通 !important;
}
body{
  margin: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cursor-inherit{
  cursor: inherit;
}
</style>
