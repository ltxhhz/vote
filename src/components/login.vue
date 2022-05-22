<template>
  <div class="vote-login position-fixed left-0 top-0 right-0 bottom-0 justify-content-between align-items-center"
    v-show="show1" @click="show1 = ''">
    <div class="row justify-content-around tabs container container-xs p-3 pt-0" @click.stop>
      <input id="tab1" type="radio" name="tabs" :checked="show1 == 'login'">
      <label for="tab1">登录</label>

      <input id="tab2" type="radio" name="tabs" :checked="show1 == 'register'">
      <label for="tab2">注册</label>
      <div class="content user-select-none" id="content1">
        <div class="form-group">
          <label for="user">账号：</label>
          <input class="input-block" type="text" id="user" v-model="account">
        </div>
        <div class="form-group">
          <label for="pwd">密码：</label>
          <input class="input-block" id="pwd" v-model="password" type="password" name="pwd"
            @keypress.stop.enter="login">
        </div>
        <div class="row mb-0">
          <button @click="login" class="col-12 xs-6" :disabled="!account || !password">登录</button>
          <div
            class="form-group mb-0 user-select-none col-12 xs-6 d-inline-flex align-items-center justify-content-center">
            <label for="remember" class="paper-check m-0" popover-bottom="不是自己的电脑不要勾选此选项">
              <input type="checkbox" name="paperChecks" id="remember" value="option 2" v-model="remember">
              <span>记住我</span>
            </label>
          </div>
        </div>
      </div>
      <div class="content user-select-none" id="content2">
        <!-- <div class="d-flex flex-column align-items-center reg-form"> -->
        <div class="form-group">
          <label for="" class="reg-label">账号：</label>
          <input class="input-block" type="text" v-model="account">
        </div>
        <div class="form-group">
          <label for="" class="reg-label">密码：</label>
          <input class="input-block" v-model="password" type="password">
        </div>
        <div class="form-group">
          <label for="" class="reg-label">重复密码：</label>
          <input class="input-block" v-model="passwordRetype" type="password">
          <div style="min-height: 1em;" :class="info ? 'visible' : 'invisible'">
          </div>
        </div>
        <div class="row justify-content-center mb-0">
          <button class="col-12 xs-6" :disabled="!pass">注册</button>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance, ref, watch } from "vue";
import superagent from 'superagent';
import Cookies from "js-cookie";
import dayjs from 'dayjs';
import utils from "../utils";


const account = ref(''),
  password = ref(''),
  passwordRetype = ref(''),
  remember = ref(false),
  info = ref(''),
  pass = ref(false)

const { proxy } = getCurrentInstance()

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue'])
defineExpose({
  show(e = 'login') {
    password.value = passwordRetype.value = ''
    show1.value = e
  },
  hide() {
    show1.value = ''
  }
})
const show1 = computed({
  get: () => props.modelValue,
  set: (e) => emits('update:modelValue', e)
})
watch(() => props.modelValue, (n, o) => {
  if (!o) password.value = passwordRetype.value = ''
})

function login() {
  superagent.post('/api/login')
    .send({
      account: account.value,
      password: password.value,
      remember: remember.value
    }).then(e => {
      console.log(e.body);
      if (e.body.status == 0) {
        proxy.$toast('用户名或密码错误')
      } else {
        Cookies.set('skey', e.body.data.skey, {
          expires: dayjs().add(1, remember.value ? 'month' : 'day').toDate()
        })
        Cookies.set('account', account.value, {
          expires: 365
        })
        proxy.$toast('登录成功')
        show1.value = ''
        utils.config.account = account.value
        utils.config.isLogin = true
      }
    }).catch(r => {
      console.error(r);
      proxy.$toast('登录错误，请重试')
    })
}
</script>
<style lang="less">
.vote-login {
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;

  >div {
    background-color: var(--main-background);
  }
}
</style>