<template>
    <div>
        <div id="header">
            <div class="backBox">
                <Icon class="cp" @click="$goBack()" type="ios-arrow-back" size='28' />
            </div>
            提现
            <div @click="$goto('tixianDetail')" id="detail">
                提现明细
            </div>
        </div>
        <div class="main">
            <div class="main">
                <ul>
                    <li>
                        <span>当前余额</span>
                        <span>{{addr.restMoney}} USDT</span>
                    </li>
                    <li>
                        <span>
                            钱包地址
                        </span>
                        <span class='fr' style='word-break:break-word;'>
                            {{addr.userAddress}}
                        </span>
                    </li>
                    <li>
                        <span>提现数量</span>
                        <span>
                            <Input v-model.number="buyNum" type='number' placeholder="请输入提现数量"></Input>
                        </span>
                    </li>
                    <li>
                        <span>手续费</span>
                        <span>{{fee}} USDT</span>
                    </li>
                    <li>
                        <span>实际到账</span>
                        <span>
                            {{realFee}} USDT
                        </span>
                    </li>
                </ul>
                <div class="btnBox">
                    <Button type="primary" size="large" style="width:80%;" @click="showPopBox">确认</Button>
                </div>
            </div>
        </div>
        <div class="notice">
            <p>温馨提示：</p>
            <p>• 提现数量最少为{{addr.encaLeast}} USDT；</p>
            <p>• 提现收取{{addr.encashFee}}%作为服务费，收取10 USDT作为矿工费；</p>
            <p>• 提现后48小时内到账；</p>
        </div>
        <!-- 弹出框 -->
        <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p>请输入支付密码：</p>
                    <Input v-model="secPasswd" type='password' style="width:100%;margin:20px 0 30px;" />
                    <div class="btns">
                        <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
                        <Button type="primary" size="default" style="width:45%;" @click="confirm">确认</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.addr = JSON.parse(sessionStorage.getItem("addr"));
  },
  mounted() {
    this.$Message.config({
      duration: 3
    });
  },
  data() {
    return {
      data: null,
      addr: null,
      buyNum: "", //提现数量
      showPop: false,
      secPasswd: "",
      systemReceipt: "" //系统地址
    };
  },
  computed: {
    fee() {
      if (this.buyNum) {
        return (this.buyNum * this.addr.encashFee).toFixed(2) + 10;
      } else {
        return 0;
      }
    },
    realFee() {
      if (this.buyNum) {
        return this.buyNum - this.fee;
      } else {
        return 0;
      }
    }
  },
  methods: {
    showPopBox() {
      if (this.buyNum == "") {
        this.$Message.error("请输入提现数量");
      } else if (this.buyNum < Number(this.addr.encaLeast)) {
        this.$Message.error(`提现数量最少${Number(this.addr.encaLeast)}`);
      } else if (this.buyNum > this.addr.restMoney) {
        this.$Message.error(`余额不足`);
      } else {
        this.showPop = true;
      }
    },
    confirm() {
      if (this.secPasswd) {
        this.$axios
          .post("hzp/stake/encash", {
            userId: this.data.userId,
            userToken: this.data.userToken,
            transferAmount: this.buyNum,
            userPwd: this.secPasswd
          })
          .then(res => {
            this.showPop = false;
            const status = res.data.code;
            if (status == 0) {
              this.$Message.success(res.data.message);
              this.addr.restMoney = this.addr.restMoney - this.buyNum;
              // 刷新存储
              sessionStorage.setItem("addr", JSON.stringify(this.addr));
              // 返回上一页
              setTimeout(() => this.$goBack(), 1000);
            } else if (status == 4002) {
              this.$Message.error(res.data.message);
              // 去设置交易密码
              setTimeout(
                () => this.$router.push({ name: "tradepasswd" }),
                1000
              );
            } else {
              this.$Message.error(res.data.message);
            }
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
@import "../index_f3/f3_public.scss";
</style>

