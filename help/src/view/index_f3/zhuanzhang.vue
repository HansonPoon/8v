<template>
    <div>
        <v-header headname="转账"></v-header>
        <div class="main">
            <div class="main">
                <ul>
                    <li>
                        <span>当前余额</span>
                        <span>{{balance}} USDT</span>
                    </li>
                    <li>
                        <span>转入号码</span>
                        <span>
                            <Input v-model.number="buyNum" type='number' placeholder="请输入转入号码"></Input>
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
                        <span>{{useTicket}} USDT</span>
                    </li>
                    <li>
                        <span>实际到账</span>
                        <span>
                            {{myTicket}} USDT
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
  //   created() {
  //     // 读本地储存和首次ajax...
  //     this.data = JSON.parse(sessionStorage.getItem("data"));
  //     // 获取门票数量
  //     this.$axios.post("/hzp/otc/getUserInfo", this.data).then(res => {
  //       this.myTicket = res.data.data.ticketCount;
  //       this.balance = res.data.data.restMoney;
  //       this.receiveAddress = res.data.data.receivableAddress;
  //       this.systemReceipt = res.data.data.systemReceipt;
  //       this.limit_min = res.data.data.transactionDownline;
  //       this.limit_max = res.data.data.tradeLine;
  //     });
  //   },
  mounted() {
    this.$Message.config({
      duration: 3
    });
  },
  data() {
    return {
      data: null,
      limit_min: "",
      limit_max: "",
      receiveAddress: "",
      balance: 0,
      myTicket: 0,
      buyNum: "",
      showPop: false,
      secPasswd: "",
      systemReceipt: "" //系统地址
    };
  },
  computed: {
    // 门票消耗
    useTicket() {
      return this.$useTicket(this.buyNum);
    }
  },
  methods: {
    showPopBox() {
      if (this.buyNum == "" || this.buyNum % 100 !== 0) {
        this.$Message.error("只能输入100的倍数！");
      } else if (this.buyNum < this.limit_min || this.buyNum > this.limit_max) {
        this.$Message.error(`数量最少${this.limit_min}，最多${this.limit_max}`);
      } else {
        this.showPop = true;
      }
    },
    confirm() {
      // 添加参数
      this.data.transactionAmount = this.buyNum;
      this.data.transactionPassword = this.secPasswd;
      this.$axios.post("/hzp/otc/sellOrder", this.data).then(res => {
        this.showPop = false;
        const status = res.data.code;
        if (status == 4011) {
          this.$Message.success(res.data.message);
          // 返回上一页
          setTimeout(() => this.$goBack(), 1000);
        } else if (status == 4007) {
          this.$Message.error(res.data.message);
          // 去设置交易密码
          setTimeout(() => this.$router.push({ name: "tradepasswd" }), 1000);
        } else {
          this.$Message.error(res.data.message);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
@import "../index_f3/f3_public.scss";
</style>

