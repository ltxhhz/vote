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
        <input class="w-100" type="text" placeholder="投票标题(必填)" id="voteTitle" v-model="data.title">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12  sm-6">
        <label for="startTime">开始时间</label><input type="datetime-local" class="w-100" id="startTime"
          v-model="data.start">
      </div>
      <div class="form-group col-12  sm-6">
        <label for="endTime">结束时间</label><input type="datetime-local" class="w-100" id="endTime" v-model="data.end">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-4 mb-0 pb-0" style="height: 80px">
        <label for="single" class="paper-switch-tile">
          <input id="single" name="single" type="checkbox" v-model="data.single" @change="singleChange" />
          <div class="paper-switch-tile-card border">
            <div class="paper-switch-tile-card-front border background-primary">多选</div>
            <div class="paper-switch-tile-card-back border">单选</div>
          </div>
        </label>
      </div>
      <div class="form-group col-4 mb-0 pb-0">
        <label for="min">最少选</label>
        <input class="input-block" placeholder="无限制" type="number" id="min" :disabled="data.single" v-model="data.min">
      </div>
      <div class="form-group col-4 mb-0 pb-0">
        <label for="max">最多选</label>
        <input class="input-block" placeholder="无限制" type="number" id="max" :disabled="data.single" v-model="data.max">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12 ">
        <div class="form-group mb-0">
          <label for="description">投票说明</label>
          <textarea class="w-100 " id="description" placeholder="投票说明(可空)" v-model="data.description"
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
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import superagent from 'superagent'
import { getCurrentInstance, onMounted, reactive, ref, toRaw } from 'vue';
import utils from '../utils';
const { proxy } = getCurrentInstance()
const data = reactive({
    title: '',
    start: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    end: dayjs().add(1,'hour').format('YYYY-MM-DDTHH:mm:ss'),
    single: true,
    min: '',
    max: '',
    description: ''
  })

function singleChange(e) {
  if (!data.single) data.min = data.max = ''
}
function next(e) {
  const skey = Cookies.get('skey')
  if (skey || 1) {
    const s = JSON.parse(JSON.stringify(toRaw(data)))
    s.start = +new Date(s.start)
    s.end = +new Date(s.end)
    if (s.single) {
      delete s.max
      delete s.min
    }
    if (!s.description) delete s.description
    superagent.post('/api/create')
    .send({
      skey,
      account:utils.config.account,
      data:s
    }).then(e=>{
      console.log(e.body);
      if (e.body.status==1) {
        proxy.$router.push({name:'edit',params:{uuid:e.body.data}})
      } else {
        proxy.$toast('创建失败，请重试')
      }
    }).catch(r=>{
      proxy.$toast('创建失败，请重试')
    })
    console.log(data, s);
  } else {
    proxy.$toast('请先登录或注册')
    console.log(utils)
    utils.config.login.show()
  }
}
// onMounted(()=>{

// })
</script>

<style lang="less">
.create-container {
  width: 80vw;

}
</style>