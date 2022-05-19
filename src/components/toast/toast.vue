<template>
  <!-- <teleport to="body"> -->
    <transition-group name="toasts" tag="div" class="pe-none">
      <div v-for="item, index of toasts" :key="item.key" class="vote-toast position-fixed"
        :class="{ 't-top': item.top }" :style="{ zIndex: index + 150 }">
        <span class="border border-2 border-primary px-2 py-1 background-primary d-inline-block translate-middle-x">{{ item.text }}</span>
      </div>
    </transition-group>
  <!-- </teleport> -->
</template>
<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: 'toast',
  setup() {
    const toasts = reactive([])
    return {
      toasts
    };
  },
  methods: {
    /**
       * 显示toast
       * @param {string} text 要显示的文字
       * @param {{top:boolean,duration:number}} obj 是否显示在上方
       */
    $show(text, { top, duration = 1500 }) {
      this.toasts.push({ text, top, key: Math.random().toString().substring(2) })
      setTimeout(() => {
        this.toasts.shift()
      }, duration);
    }
  },
});
</script>

<style lang="less">
.vote-toast {
  left: 50%;
  right: 50%;
  bottom: 5rem;
  transition: all .3s ease;
  display: inline-block;
  max-width: 80%;
  width: 100%;

  &.t-top {
    bottom: unset;
    top: 5rem;

    &.toasts-enter-from,
    &.toasts-leave-to {
      transform: translateY(-20px);
    }
  }
}

.toasts-enter-from,
.toasts-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>