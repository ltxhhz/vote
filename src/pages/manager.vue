<template>
  <div class="paper container container-lg ">
    <div class="row flex-edges">
      <div class="col-3">
        <div class="fs-4">投票管理</div>
      </div>
      <div class="col-3">
        <router-link class="fs-4" to="/create">创建投票</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table-hover cursor-pointer">
          <thead>
            <tr>
              <th>#</th>
              <th>标题</th>
              <th>状态</th>
              <th>参与</th>
              <th>浏览</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item, index of data" @click="to(index)">
              <td>{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ +new Date() < item.start ? '未开始' : (+new Date() > item.start && +new Date() < item.end) ? '正常'
                  : '已过期'
              }}</td>
              <td>{{ item.part }}</td>
              <td>{{ item.visit }}</td>
              <td>
                <span class="m-btn text-primary ">编辑</span>
                <span class="m-btn text-danger " @click.stop="deleteVote(index)">删除</span>
              </td>
            </tr>
            <tr v-if="!data?.length">
              <td colspan="6" class="text-center">还未创建投票 <router-link to="/create">去创建</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance, reactive } from 'vue';
import superagent from 'superagent';


const { proxy } = getCurrentInstance()

const data = reactive([])
superagent.get('/api/manager')
  .then(e => {
    if (e.body.status) {
      data.push(...e.body.data)
    } else {
      proxy.$toast('加载失败，请重试')
    }
  }).catch(e => {
    console.log(e);
    proxy.$toast('加载出错，请重试')
  })

function to(e) {
  proxy.$router.push({
    path: `/edit/${data[e].uuid}`
  })
}
function deleteVote(e) {
  superagent.post('/api/delete')
    .send({
      uuid: data[e].uuid
    }).then(e => {
      if (e.body.status) {
        proxy.$toast('删除成功')
        proxy.$router.push({
          name: 'index'
        })
      } else {
        if (e.body.msg) proxy.$toast(e.body.msg)
        else proxy.$toast('删除失败，请重试')
      }
    }).catch(e => {
      proxy.$toast('删除错误，请重试')
    })
}
</script>

<style lang="less">
.m-btn {
  transition: all .3s;

  &:hover {
    color: var(--success-light);
  }

  &:active {
    color: var(--primary-light);
  }
}
</style>