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
    <main v-if="!addr.isStake">
      <p>充值金额：</p>
      <p class="address" style="margin-bottom:20px;">
        <Input v-model="money" type='number' placeholder=""></Input>
      </p>
      <div class="btnBox">
        <Button class="copybtn" type="primary" size="large" style="width:100%;" @click="next">下一步</Button>
      </div>
    </main>
    <main v-else>
      <div id='erweima'>
        <img :src="addr.qrUrl">
      </div>
      <p>收款地址：</p>
      <p class="address">{{addr.platformAddress}}</p>
      <div class="btnBox">
        <Button class="copybtn" type="primary" size="large" style="width:100%;" :data-clipboard-text='addr.platformAddress' @click="copy">复制地址</Button>
      </div>
    </main>
    <section id="txt">
      <p>温馨提示：</p>
      <p>• 请向充值地址转账，系统会在检测到充值记录后，自动为您处理到账；</p>
      <p>• 转账时，请使用您绑定的钱包地址进行转账，如因地址不正确导致充值无效，系统概不负责；</p>
      <p>• 每个用户每天限投注一次，投注限额{{addr.bettingRange}} USDT；</p>
    </section>

    <!-- 弹出框 -->
    <div id="alert" v-if="showPop">
      <div id="pop">
        <div class="top">
          <p align='center'>温馨提示：</p>
          <p style="margin:20px 0 30px;color:red;">1.每天限投注"确认"一次，请仔细确认
            <br>2.投注限额{{addr.bettingRange}}USDT</p>
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
import Clipboard from "clipboard";

export default {
  created() {
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.addr = JSON.parse(sessionStorage.getItem("addr"));
  },
  data() {
    return {
      data: null,
      addr: null,
      address: "",
      showPop: false,
      money: ""
    };
  },
  methods: {
    copy() {
      let clipboard = new Clipboard(".copybtn");
      clipboard.on("success", e => {
        this.$Message.success("复制成功！");
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        clipboard.destroy();
      });
    },
    confirm() {
      if (!!this.address) {
        this.$Message.info("收款地址已存在，若需修改请联系客服！");
      } else {
        this.showPop = true;
      }
    },
    secendConfirm() {
      if (
        this.money &&
        this.money >= Number(this.addr.bettingRange.split("~")[0])
      ) {
        this.$axios
          .post("hzp/stake/userStake", {
            userId: this.data.userId,
            userToken: this.data.userToken,
            stakeAmount: this.money
          })
          .then(res => {
            if (res.data.code == 0) {
              // this.$Message.success(res.data.message);
              this.addr.isStake = true;
            } else if (res.data.code == 4009) {
              this.$Message.error(res.data.message);
              setTimeout(() => {
                this.$goto("changereceiveaddress");
              }, 1000);
            } else {
              this.$Message.error(res.data.message);
            }
            this.showPop = false;
          });
      } else {
        this.$Message.error("请检查充值金额");
      }
    },
    next() {
      this.showPop = true;
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
// 二维码
#erweima {
  text-align: center;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
