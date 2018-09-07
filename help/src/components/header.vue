<template>
    <div id="header">
        <div class="backBox">
            <Icon @click="goBack" type="ios-arrow-back" size='28' />
        </div>
        {{headname}}
    </div>
</template>

<script>
export default {
  props: ["headname"],
  data() {
    return {};
  },
  methods: {
    goBack() {
      console.log(1);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../myconfig/public.scss";

#header {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: $headerfont;
  background-color: $hbc;
  .backBox {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>


