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
  <nav class="border fixed split-nav user-select-none">
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
          <template v-if="utils.config.isLogin">
            <li class="position-relative">
              <router-link to="/manager">
                <svg t="1653150385031" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="2986" style="width: 1em;height:1em;vertical-align:middle;">
                  <path
                    d="M511.913993 941.605241c-255.612968 0-385.311608-57.452713-385.311608-170.810012 0-80.846632 133.654964-133.998992 266.621871-151.88846L393.224257 602.049387c-79.986561-55.904586-118.86175-153.436587-118.86175-297.240383 0-139.33143 87.211154-222.586259 233.423148-222.586259l7.912649 0c146.211994 0 233.423148 83.254829 233.423148 222.586259 0 54.184445 0 214.67361-117.829666 297.412397l-0.344028 16.685369c132.966907 18.061482 266.105829 71.041828 266.105829 151.716445C897.225601 884.152528 767.526961 941.605241 511.913993 941.605241zM507.957668 141.567613c-79.470519 0-174.250294 28.382328-174.250294 163.241391 0 129.698639 34.230808 213.469511 104.584579 255.784982 8.944734 5.332437 14.277171 14.965228 14.277171 25.286074l0 59.344868c0 15.309256-11.524945 28.0383-26.662187 29.414413-144.319839 14.449185-239.959684 67.429531-239.959684 95.983874 0 92.199563 177.346548 111.637158 325.966739 111.637158 148.792206 0 325.966739-19.26558 325.966739-111.637158 0-28.726356-95.639845-81.534688-239.959684-95.983874-15.48127-1.548127-27.006215-14.621199-26.662187-30.102469l1.376113-59.344868c0.172014-10.148833 5.676466-19.437594 14.277171-24.770032 70.525785-42.487485 103.208466-123.678145 103.208466-255.784982 0-135.031077-94.779775-163.241391-174.250294-163.241391L507.957668 141.567613 507.957668 141.567613z"
                    p-id="2987"></path>
                </svg>{{ utils.config.account }}
              </router-link>
              <div class="position-absolute m-0 left-0 right-0">1</div>
            </li>
          </template>
          <template v-else>
            <li><a href="javascript:void 0;" @click="showLogin = 'register'">注册</a></li>
            <li><a href="javascript:void 0;" @click="showLogin = 'login'">登录</a></li>
          </template>
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
  <button class="position-fixed d-none1" style="left: 100px;top:100px;z-index:10;" @click="test">test</button>
  <login ref="login1" v-model="showLogin" />
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
import { getCurrentInstance, onMounted, reactive, ref } from 'vue';
import BScroll from '@better-scroll/core';
import MouseWheel from '@better-scroll/mouse-wheel'
import ScrollBar from '@better-scroll/scroll-bar'
import ObserveDOM from '@better-scroll/observe-dom'
import Cookies from 'js-cookie';
import superagent from 'superagent';

import login from './components/login.vue';
import utils from './utils';
import dayjs from 'dayjs';

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
  utils.config.login = proxy.$refs.login1
})
function test(e) {
  // console.log(proxy.$route.params.uuid)
  proxy.$router.push({
    name: '404'
  })
}
// verify()
proxy.$router.afterEach((to, from) => {
  console.log('router after each', to, from);
  if (to.name != '404') {
    verify()
  }
  document.title = to.meta.title
})
function verify(e) {
  const skey = Cookies.get('skey'),
    account = Cookies.get('account')
  console.log('verify', skey);
  if (!skey) {
    notLogin()
    return false
  }
  superagent.get('/api/verify')
    .then(e => {
      console.log('验证结果', e.body);
      if (e.body.data) {
        utils.config.isLogin = true
        utils.config.account = account
        utils.config.skey = skey
      } else {
        notLogin()
      }
    }).catch(r => {
      console.log(r.message);
      notLogin()
    })
}
function notLogin(e) {
  Cookies.remove('skey')
  if (proxy.$route.path != '/') {
    proxy.$toast('请先登录或注册')
    utils.config.login.show()
  }
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