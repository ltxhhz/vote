<template>
  <div class="paper container container-md ">
    <div class="row">
      <div class="col-12">
        <div class="fs-4">创建投票</div>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label for="voteTitle">投票标题</label>
        <input class="w-100" type="text" placeholder="投票标题(必填)" id="voteTitle">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12  sm-6">
        <label for="startTime">开始时间</label><input type="datetime-local" class="w-100" id="startTime">
      </div>
      <div class="form-group col-12  sm-6">
        <label for="endTime">结束时间</label><input type="datetime-local" class="w-100" id="endTime">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-4 mb-0 pb-0" style="height: 80px">
        <label for="single" class="paper-switch-tile">
          <input id="single" name="single" type="checkbox" v-model="single" @change="singleChange" />
          <div class="paper-switch-tile-card border">
            <div class="paper-switch-tile-card-front border">单选</div>
            <div class="paper-switch-tile-card-back border background-primary">多选</div>
          </div>
        </label>
      </div>
      <div class="form-group col-4 mb-0 pb-0">
          <label for="min">最少选</label>
          <input class="input-block" placeholder="无限制" type="number" id="min" :disabled="!single" v-model="min">
      </div>
      <div class="form-group col-4 mb-0 pb-0">
          <label for="max">最多选</label>
          <input class="input-block" placeholder="无限制" type="number" id="max" :disabled="!single" v-model="max">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12 ">
        <div class="form-group mb-0">
          <label for="description">投票说明</label>
          <textarea class="w-100 " id="description" placeholder="投票说明(可空)" v-model="des"
            style="resize:vertical;min-height: 100px;"></textarea>
        </div>
      </div>
    </div>
    <div class="row justify-content-end">
        <button class="d-block w-10 col-6 sm-4" @click="next">下一步</button>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue';
const {proxy}=getCurrentInstance()
const single = ref(false),
  min = ref(''),
  max = ref(''),
  des = ref('')

function singleChange(e) {
  if (!single.value) min.value = max.value = ''
}
function next(e) {
  proxy.$router.push('/edit-vote')
}
</script>

<style lang="less">
.create-container {
  width: 80vw;

}
</style>