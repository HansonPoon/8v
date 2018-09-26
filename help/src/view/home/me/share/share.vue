<template>
  <div id="share">
    <v-header headname='分享'></v-header>

    <button @click="goRegister">立即注册</button>
  </div>
</template>

<script>
export default {
  methods: {
    // goRegister() {
    //   const hash = window.location.hash;
    //   const idNum = hash.trim().split("=")[1];
    //   // 跳转到注册
    //   this.$goto("register", { idNum });
    // }
  }
};
</script>

