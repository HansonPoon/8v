<template>
    <div>
        <v-header headname="转账"></v-header>
        <div class="main">
            <div class="main">
                <ul>
                    <li>
                        <span>当前余额</span>
                        <span>{{addr.restMoney}} USDT</span>
                    </li>
                    <li>
                        <span>转入号码</span>
                        <span>
                            <Input v-model.number="tranId" type='number' placeholder="请输入转入号码"></Input>
                        </span>
                    </li>
                    <li>
                        <span>转账数量</span>
                        <span>
                            <Input v-model.number="buyNum" type='number' placeholder="请输入转账数量"></Input>
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
            <p>• 转账数量最少为1 USDT；</p>
            <p>• 转账时收取转账金额的10%作为手续费，不满0.01按0.01收取；</p>
            <p>• 转账时请仔细核对转入号码，如转入号码错误平台概不负责；</p>

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
      buyNum: "",
      showPop: false,
      secPasswd: "",
      tranId: "" //转入号码
    };
  },
  computed: {
    fee() {
      if (this.buyNum) {
        if (this.buyNum < 1) {
          return 0;
        } else {
          return this.buyNum * this.addr.encashFee < 0.01
            ? 0.01
            : (this.buyNum * this.addr.encashFee).toFixed(2);
        }
      } else {
        return 0;
      }
    },
    realFee() {
      if (this.buyNum) {
        if (this.buyNum < 1) {
          return 0;
        } else {
          return this.buyNum - this.fee <= 0 ? 0 : this.buyNum - this.fee;
        }
      } else {
        return 0;
      }
    }
  },
  methods: {
    showPopBox() {
      if (this.buyNum == "") {
        this.$Message.error("请输入提现数量");
      } else if (this.buyNum < Number(this.encaLeast)) {
        this.$Message.error(`提现数量最少${Number(this.encaLeast)}`);
      } else if (this.buyNum > this.addr.restMoney) {
        this.$Message.error(`余额不足`);
      } else {
        this.showPop = true;
      }
    },
    confirm() {
      // console.log(Number(this.addr.bettingRange.split("~")[0]));
      if (this.buyNum < 1) {
        this.$Message.error("转账金额不能小于1");
      } else if (!this.tranId) {
        this.$Message.error("请输入转入号码");
      } else if (!this.secPasswd) {
        this.$Message.error("请输入交易密码");
      } else {
        this.$axios
          .post("hzp/stake/trasfer", {
            userId: this.data.userId,
            userToken: this.data.userToken,
            phone: this.tranId,
            transferAmount: this.buyNum,
            userPwd: this.secPasswd
          })
          .then(res => {
            this.showPop = false;
            const status = res.data.code;
            if (status == 0) {
              this.$Message.success(res.data.message);
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

