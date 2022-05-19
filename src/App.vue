<template>
  <!--
*          .,:,,,                                        .::,,,::.          
*        .::::,,;;,                                  .,;;:,,....:i:         
*        :i,.::::,;i:.      ....,,:::::::::,....   .;i:,.  ......;i.        
*        :;..:::;::::i;,,:::;:,,,,,,,,,,..,.,,:::iri:. .,:irsr:,.;i.        
*        ;;..,::::;;;;ri,,,.                    ..,,:;s1s1ssrr;,.;r,        
*        :;. ,::;ii;:,     . ...................     .;iirri;;;,,;i,        
*        ,i. .;ri:.   ... ............................  .,,:;:,,,;i:        
*        :s,.;r:... ....................................... .::;::s;        
*        ,1r::. .............,,,.,,:,,........................,;iir;        
*        ,s;...........     ..::.,;:,,.          ...............,;1s        
*       :i,..,.              .,:,,::,.          .......... .......;1,       
*      ir,....:rrssr;:,       ,,.,::.     .r5S9989398G95hr;. ....,.:s,      
*     ;r,..,s9855513XHAG3i   .,,,,,,,.  ,S931,.,,.;s;s&BHHA8s.,..,..:r:     
*    :r;..rGGh,  :SAG;;G@BS:.,,,,,,,,,.r83:      hHH1sXMBHHHM3..,,,,.ir.    
*   ,si,.1GS,   sBMAAX&MBMB5,,,,,,:,,.:&8       3@HXHBMBHBBH#X,.,,,,,,rr    
*   ;1:,,SH:   .A@&&B#&8H#BS,,,,,,,,,.,5XS,     3@MHABM&59M#As..,,,,:,is,   
*  .rr,,,;9&1   hBHHBB&8AMGr,,,,,,,,,,,:h&&9s;   r9&BMHBHMB9:  . .,,,,;ri.  
*  :1:....:5&XSi;r8BMBHHA9r:,......,,,,:ii19GG88899XHHH&GSr.      ...,:rs.  
*  ;s.     .:sS8G8GG889hi.        ....,,:;:,.:irssrriii:,.        ...,,i1,  
*  ;1,         ..,....,,isssi;,        .,,.                      ....,.i1,  
*  ;h:               i9HHBMBBHAX9:         .                     ...,,,rs,  
*  ,1i..            :A#MBBBBMHB##s                             ....,,,;si.  
*  .r1,..        ,..;3BMBBBHBB#Bh.     ..                    ....,,,,,i1;   
*   :h;..       .,..;,1XBMMMMBXs,.,, .. :: ,.               ....,,,,,,ss.   
*    ih: ..    .;;;, ;;:s58A3i,..    ,. ,.:,,.             ...,,,,,:,s1,    
*    .s1,....   .,;sh,  ,iSAXs;.    ,.  ,,.i85            ...,,,,,,:i1;     
*     .rh: ...     rXG9XBBM#M#MHAX3hss13&&HHXr         .....,,,,,,,ih;      
*      .s5: .....    i598X&&A&AAAAAA&XG851r:       ........,,,,:,,sh;       
*      . ihr, ...  .         ..                    ........,,,,,;11:.       
*         ,s1i. ...  ..,,,..,,,.,,.,,.,..       ........,,.,,.;s5i.         
*          .:s1r,......................       ..............;shs,           
*          . .:shr:.  ....                 ..............,ishs.             
*              .,issr;,... ...........................,is1s;.               
*                 .,is1si;:,....................,:;ir1sr;,                  
*                    ..:isssssrrii;::::::;;iirsssssr;:..                    
*                         .,::iiirsssssssssrri;;:.                      
-->
  <nav class="border fixed split-nav">
    <div class="nav-brand">
      <h3>
        <router-link to="/">投票的网</router-link>
      </h3>
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
          <li><a href="javascript:void 0;" @click="showLogin='register'">注册</a></li>
          <li><a href="javascript:void 0;" @click="showLogin='login'">登录</a></li>
          <li><a href="https://github.com/ltxhhz/vote" target="_blank">Github</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div ref="rv" class="rv overflow-hidden position-relative h-100 ">
    <div>
      <div class="rv-fill w-100"></div>
      <router-view></router-view>
      <div class="rv-fill w-100"></div>
    </div>
  </div>
  <button class="position-fixed d-none" style="left: 100px;top:100px;z-index:10;" @click="test">test</button>
  <login v-model="showLogin"/>
  <div class="position-fixed left-0 bottom-0 w-100 overflow-hidden position-relative" style="height: 15vh">
    <svg class="waves w-100 h-100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { getCurrentInstance, onMounted, ref } from 'vue';
import BScroll from '@better-scroll/core';
import MouseWheel from '@better-scroll/mouse-wheel'
import ScrollBar from '@better-scroll/scroll-bar'
import ObserveDOM from '@better-scroll/observe-dom'

import login from './components/login.vue';

BScroll.use(ObserveDOM)
BScroll.use(MouseWheel)
BScroll.use(ScrollBar)

const { proxy } = getCurrentInstance()
const showLogin = ref('')

let bs

onMounted(() => {
  bs = new BScroll(proxy.$refs.rv, {
    click: true,
    mouseWheel: {
      speed: 20,
      invert: false,
      easeTime: 300
    },
    scrollbar: {
      interactive: true,
      scrollbarTrackClickable: true
    },
    observeDOM: true
  })
})
function test(e) {
  // console.log(proxy.$toast)
  proxy.$toast("test", { top: 0 })
}
</script>


<style lang="less" scoped>
.rv {
  // padding-top: 70px;
  z-index: 2;
}

.rv-fill {
  height: 70px;
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