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
  <div class="index-container position-relative">
    <div class="d-flex flex-column justify-content-center align-items-center h-50 index-top-1">
      <div></div>
      <div>
        <Button type="primary" @click="">
          <div class="d-inline-flex align-items-center">
            <svg t="1652243736850" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2207" width="16" height="16">
              <path
                d="M125.27616 656.52736l52.36736-208.91648a121.36448 121.36448 0 0 1 43.7248-66.56l354.5088-273.36704c53.59616-41.30816 130.9696-31.9488 172.81024 20.93056l126.32064 159.55968a120.4224 120.4224 0 0 1-21.21728 170.53696L499.36384 731.99616A124.17024 124.17024 0 0 1 423.1168 757.76l-218.46016-0.77824C159.3344 756.81792 122.71616 720.42496 122.88 675.67616c0.02048-6.4512 0.8192-12.88192 2.39616-19.1488z"
                fill="#131415" p-id="2208"></path>
              <path
                d="M634.88 696.32m40.96 0l184.32 0q40.96 0 40.96 40.96l0 0q0 40.96-40.96 40.96l-184.32 0q-40.96 0-40.96-40.96l0 0q0-40.96 40.96-40.96Z"
                fill="#131415" p-id="2209"></path>
              <path
                d="M122.88 860.16m40.96 0l696.32 0q40.96 0 40.96 40.96l0 0q0 40.96-40.96 40.96l-696.32 0q-40.96 0-40.96-40.96l0 0q0-40.96 40.96-40.96Z"
                fill="#131415" p-id="2210"></path>
            </svg> 创建投票
          </div>
        </Button>
      </div>
    </div>
    <div class="position-absolute left-0 bottom-0 w-100 overflow-hidden" style="height: 15vh">
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
  </div>
</template>
<script setup>

</script>

<style lang="less">
.index-tab-bar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  padding: 1rem;
  z-index: 1;
}

.index-tab-container {
  height: 50px;
}

.index-container {
  padding-top: calc(50px + 1rem * 2);
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom, lightblue, lightgrey);
}

.index-top-1 {}
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