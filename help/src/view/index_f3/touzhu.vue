<template>
    <div id="touzhu">
        <div id="header">
            <div class="backBox">
                <Icon class="cp" @click="$goBack()" type="ios-arrow-back" size='28' />
            </div>
            投注
            <div @click="$goto('touzhuDetail')" id="detail">
                投注明细
            </div>
        </div>
        <main>
            <p>收款地址：</p>
            <p class="address">{{address}}</p>
            <div class="btnBox">
                <Button type="primary" size="large" style="width:100%;" @click="confirm">复制地址</Button>
            </div>
        </main>
        <section id="txt">
            <p>温馨提示：</p>
            <p>• 请向充值地址转账，系统会在检测到充值记录后，自动为您处理到账；</p>
            <p>• 转账时，请使用您绑定的钱包地址进行转账，如因地址不正确导致充值无效，系统概不负责；</p>
            <p>• 每个用户每天限投注一次，投注限额300~3000 USDT；</p>
        </section>

        <!-- 弹出框 -->
        <!-- <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p align='center'>温馨提示：</p>
                    <p style="margin:20px 0 30px;">收款地址只能修改一次，请仔细确认</p>
                    <div class="btns">
                        <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
                        <Button type="primary" size="default" style="width:45%;" @click="secendConfirm">确认</Button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  created() {
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.$axios.post("hzp/personal/loadPersonal", this.data).then(res => {
      this.address = res.data.data.receivableAddress;
    });
  },
  data() {
    return {
      data: null,
      address: "",
      showPop: false
    };
  },
  methods: {
    confirm() {
      if (!!this.address) {
        this.$Message.info("收款地址已存在，若需修改请联系客服！");
      } else {
        this.showPop = true;
      }
    },
    secendConfirm() {
      this.$goto("changereceiveaddress");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
@import "../index_f3/f3_public.scss";
main {
  font-size: 14px;
  background-color: #fff;
  padding: 10%;

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
#txt {
  line-height: 25px;
  padding: 15px;
  font-size: 12px;
}
</style>
