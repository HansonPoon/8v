<template>
  <div id="receiveaddress">
    <v-header headname='钱包地址'></v-header>
    <main>
      <p>Imtoken钱包地址：</p>
      <p v-if="!addr.userAddress" class="address">您还未设置地址，请点击修改添加</p>
      <p class="address">{{addr.userAddress}}</p>
      <div class="btnBox">
        <Button type="primary" size="large" style="width:100%;" @click="confirm">修改</Button>
      </div>
    </main>
    <div class="notice">
      注：钱包地址为充值或提现时唯一身份凭证，请准确填写，如因地址错误无法充值或提现，平台概不负责。
    </div>
    <!-- 弹出框 -->
    <div id="alert" v-if="showPop">
      <div id="pop">
        <div class="top">
          <p align='center'>温馨提示：</p>
          <p style="margin:20px 0 30px;">收款地址只能修改一次，请仔细确认</p>
          <!-- <Input v-model="confirmIpt" style="width:100%;margin:20px 0 30px;" /> -->
          <div class="btns">
            <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
            <Button type="primary" size="default" style="width:45%;" @click="secendConfirm">确认</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.addr = JSON.parse(sessionStorage.getItem("addr"));
  },
  data() {
    return {
      data: null,
      addr: null,
      showPop: false
    };
  },
  methods: {
    confirm() {
      // if (!!this.address) {
      //   this.$Message.info("收款地址已存在，若需修改请联系客服！");
      // } else {
      //   this.showPop = true;
      // }
      this.$goto("changereceiveaddress");
    },
    secendConfirm() {
      this.$goto("changereceiveaddress");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";

main {
  font-size: 14px;
  background-color: #fff;
  padding: 10%;
  box-shadow: 0px 2px 1px 1px $shadow;

  & > p {
    line-height: 35px;
    margin-bottom: 10px;
  }
  .address {
    word-wrap: break-word;
    color: $lightfont;
  }
  .btnBox {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
