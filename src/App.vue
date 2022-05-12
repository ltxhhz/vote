<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import login from './components/login.vue'
</script>

<template>
  <nav class="border fixed split-nav">
    <div class="nav-brand">
      <h3><a href="#">投票网</a></h3>
    </div>
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1">
      <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
      <div class="collapsible-body">
        <ul class="inline">
          <li><a href="#">注册</a></li>
          <li><a href="#">登录</a></li>
          <li><a href="https://github.com/ltxhhz/vote" target="_blank">Github</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="rv h-100 d-flex flex-column align-items-center">
    <router-view></router-view>
  </div>
  <!-- <login /> -->
  <div class="position-fixed left-0 bottom-0 w-100 overflow-hidden" style="height: 15vh">
    <svg class="waves w-100 h-100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>
</template>

<style lang="less" scoped>
.rv{
  padding-top: 70px;
  z-index: 2;
}
</style>
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

* {
  font-family: "comic sans ms", 方正卡通 !important;
}

body {
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: linear-gradient(to right bottom, lightblue, lightgrey);
}

.cursor-inherit {
  cursor: inherit;
}
</style>

<style lang="less" scoped>
.parallax>use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
}
</style>