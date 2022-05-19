<template>
  <div class="vote-login position-fixed left-0 top-0 right-0 bottom-0 justify-content-between align-items-center"
    v-show="show1" @click="show1 = ''">
    <div class="row justify-content-around tabs container container-xs p-3 pt-0" @click.stop>
      <input id="tab1" type="radio" name="tabs" :checked="show1=='login'">
      <label for="tab1">登录</label>

      <input id="tab2" type="radio" name="tabs" :checked="show1=='register'">
      <label for="tab2">注册</label>
      <div class="content" id="content1">
        <div class="form-group">
          <label for="user">账号：</label>
          <input class="input-block" type="text" id="user" v-model="user">
        </div>
        <div class="form-group">
          <label for="pwd">密码：</label>
          <input class="input-block" id="pwd" v-model="password" type="password" name="pwd">
        </div>
        <div class="row mb-0">
          <button @click="login" class="col-12 xs-6">登录</button>
          <div class="form-group mb-0 user-select-none col-12 xs-6 d-inline-flex align-items-center justify-content-center">
            <label for="remember" class="paper-check m-0" popover-bottom="不是自己的电脑不要勾选此选项">
              <input type="checkbox" name="paperChecks" id="remember" value="option 2" v-model="checked">
              <span>记住我</span>
            </label>
          </div>
        </div>
      </div>
      <div class="content" id="content2">
        <!-- <div class="d-flex flex-column align-items-center reg-form"> -->
        <div class="form-group">
          <label for="" class="reg-label">账号：</label>
          <input class="input-block" type="text" v-model="user">
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
import { computed, getCurrentInstance, onMounted, ref } from "vue";
const user = ref(''),
  password = ref(''),
  passwordRetype = ref(''),
  checked = ref(false),
  info = ref(''),
  pass = ref(false)

const {proxy} = getCurrentInstance()

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue'])
const show1 = computed({
  get: () => props.modelValue,
  set: (e) => emits('update:modelValue', e)
})

onMounted(() => {

})

function login() {

  let message;
  if (user.value && password.value) {
    message = "<strong class='success'>登录成功</strong>";
  } else {
    message = "<strong class='error'>表单内容不能为空</strong>";
  }
  proxy.$toast(message, {
    enableHtml: true,
    showClose: true,
  });
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