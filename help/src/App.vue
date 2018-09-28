<template>
  <div id="app">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated flipOutY">
    <router-view/>
    </transition>
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
