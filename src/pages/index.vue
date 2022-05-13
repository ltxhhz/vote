<template>
  <div class="w-100 h-100">
    <div class="index-head d-flex flex-column justify-content-center align-items-center">
      <h3>投票，就这么简单</h3>
      <div>
        <button class="btn-primary" @click="start">
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
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-around child-borders">
      <div class="paper border-dashed">1</div>
      <div class="paper border-dashed">2</div>
      <div class="paper border-dashed">3</div>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance } from 'vue';

const proxy = getCurrentInstance().proxy
function start(e) {
  proxy.$router.push('/create')
}
</script>

<style lang="less">
.index-head{
  height: 350px;
}

</style>
