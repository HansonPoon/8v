<template>
  <div id="share">
    <v-header headname='分享'></v-header>
    <main>
      <div class="btnBox">
        <div class="link">{{ userLink }}</div>
        <div class="btn copybtn" :data-clipboard-text='userLink' @click="confirm">复制网址</div>
      </div>
    </main>
  </div>
</template>

<script>
import Clipboard from "clipboard";

export default {
  created() {
    this.data = JSON.parse(sessionStorage.getItem("data"));
    const userId = JSON.parse(sessionStorage.getItem("addr")).userId;
    this.userLink = "http://longwin.io/#/register" + "?" + userId;
  },
  data() {
    return {
      data: null,
      userLink: ""
    };
  },
  methods: {
    confirm() {
      let clipboard = new Clipboard(".copybtn");
      clipboard.on("success", e => {
        this.$Message.success("复制成功！");
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        clipboard.destroy();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  height: calc(100% - 44px);
  background: url("../../../assets/images/share.png") no-repeat center center;
  background-size: cover;
  position: relative;
  .btnBox {
    width: 100%;
    padding: 0 15%;
    position: absolute;
    bottom: 10%;
    text-align: center;

    & > div {
      line-height: 30px;
      margin-bottom: 15px;
      font-size: 14px;
    }

    .link {
      background: rgb(50, 54, 90);
      color: rgb(186, 186, 186);
    }
    .btn {
      cursor: pointer;
      background: linear-gradient(
        to bottom right,
        rgb(251, 187, 113),
        rgb(197, 136, 77)
      );
      color: #fff;
    }
  }
}
</style>

