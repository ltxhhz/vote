<template>
  <div class="paper container container-md text-center">
    <hr>
    <div class="fof d-flex justify-content-center align-items-center flex-column">
      <h1>404 Page Not Found</h1>
      <h2>未曾设想的道路</h2>
    </div>
    <router-link to="/" class="fs-4">前往主页</router-link>
    <hr>
  </div>
</template>
<script setup>

</script>

<style lang="less">
.fof {
  color: var(--primary-light);
  h1{
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
  }
  h2 {
    font-size: 40px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
  }
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }

  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>