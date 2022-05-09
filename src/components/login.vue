<template>
  <Tabs v-model="activeName">
    <Tab title="登录">
      <div>
        账号：
        <Input v-model="user"></Input>
      </div>
      <br />
      <div>
        密码：
        <Input v-model="password" type="password"></Input>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <Button @click="login" class="btn mr-1" type="primary" elevation="2">登录</Button>
        <Popover position="bottom" trigger="hover" class="cursor-pointer">
          <template #content>
            不是自己的电脑不要勾选此选项
          </template>
          <Checkbox v-model="checked" id="remember" class="cursor-inherit">
            <label for="remember" class="cursor-inherit">记住我</label>
          </Checkbox>
        </Popover>
      </div>
    </Tab>
    <Tab title="注册">
      <div class="d-flex flex-column align-items-center reg-form">
        <div>
          <label for="" class="reg-label">账号：</label>
          <Input v-model="user"></Input>
        </div>
        <div>
          <label for="" class="reg-label">密码：</label>
          <Input v-model="password" type="password"></Input>
        </div>
        <div>
          <label for="" class="reg-label">重复密码：</label>
          <Input v-model="passwordRetype" type="password"></Input>
          <div style="min-height: 1em;" :class="info ? 'visible' : 'invisible'">
          </div>
        </div>
        <div class="mb-0">
          <Button class="btn" type="primary" elevation="2" :disabled="!pass">注册</Button>
        </div>
      </div>
    </Tab>
  </Tabs>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
const user = ref(''),
  password = ref(''),
  passwordRetype = ref(''),
  activeName = ref('登录'),
  checked = ref(false),
  info = ref(''),
  pass = ref(false)

const proxy = getCurrentInstance()

onMounted(() => {

})

function login() {
  
  let message;
  if (this.user && this.password) {
    message = "<strong class='success'>登录成功</strong>";
  } else {
    message = "<strong class='error'>表单内容不能为空</strong>";
  }
  this.$toast(message, {
    enableHtml: true,
    showClose: true,
  });
}
</script>
<style lang="less">
.btn {
  margin-right: 45px;
}

.error {
  color: #ef5541;
}

.success {
  color: #41bc58;
}

.reg-label {
  display: inline-block;
  text-align: right;
  width: 80px;
}

.reg-form {
  >* {
    margin-bottom: 1rem;
  }
}
</style>