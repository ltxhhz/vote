<template>
  <div class="index-tab-bar">
    <pencil-div class="w-100 index-tab-container d-flex justify-content-between">
      <div>123</div>
    </pencil-div>
  </div>
  <div class="index-container">
    <div class="d-flex flex-column justify-content-center align-items-center h-50 index-top-1">
      <div></div>
      <div><Button type="primary" @click="">
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
        </Button></div>
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
}

.index-tab-container {
  height: 50px;
}

.index-container {
  padding-top: calc(50px + 1rem * 2);
  width: 100%;
  height: calc(100% - 50px - 1rem * 2);
  // height: 100%;
  background: linear-gradient(to right bottom,lightblue,lightgrey);
}
.index-top-1{
  
}
</style>