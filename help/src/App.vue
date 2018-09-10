<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='scss'>
@import "./myconfig/init.css";
@import './myconfig/public.scss';
#app {
  width: 100%;
  height: 100%;
  &>div{
    height: 100%;
    background-color: $bc;
  }
}

</style>
