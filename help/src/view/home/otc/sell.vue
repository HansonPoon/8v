<template>
    <div id="buy">
        <v-header headname='卖单'></v-header>
        <div class="main">
            <div class="main">
                <ul>
                    <li>
                        <span>
                            收款地址
                        </span>
                        <span class='fr' style='word-break:break-word;'>
                            {{receiveAddress}}
                            <!-- <div id="address">{{receiveAddress}}</div> -->
                            <!-- <div @click="$goto('changereceiveaddress')" class="changeAddressIcon">
                                <Icon size='30' type="ios-browsers-outline" color='#2D8CF0' />
                            </div> -->
                        </span>
                    </li>
                    <li>
                        <span>当前余额</span>
                        <span>{{balance}}</span>
                    </li>
                    <li>
                        <span>挂单数量</span>
                        <span>
                            <Input v-model.number="buyNum" type='number' placeholder="请输入100的倍数"></Input>
                        </span>
                    </li>
                    <li>
                        <span>消耗门票</span>
                        <span>{{useTicket}} 张</span>
                    </li>
                    <li>
                        <span>持有门票</span>
                        <span>
                            {{myTicket}} 张
                            <router-link :to="{name:'otc',params:{index: 2}}" tag="span" style="color:#2d8cf0"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购买门票&nbsp;</router-link>
                        </span>
                    </li>
                </ul>
                <div class="btnBox">
                    <Button type="primary" size="large" style="width:80%;" @click="showPopBox">确认下单</Button>
                </div>
            </div>
        </div>
        <div class="notice">
            <p>温馨提示：单笔挂单最少200 USDT，最多5000 USDT</p>
        </div>
        <!-- 弹出框 -->
        <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p>请输入交易密码：</p>
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
    // 获取门票数量
    this.$axios.post("/hzp/otc/getUserInfo", this.data).then(res => {
      this.myTicket = res.data.data.ticketCount;
      this.balance = res.data.data.restMoney;
      this.receiveAddress = res.data.data.receivableAddress;
    });
  },
  mounted() {
    this.$Message.config({
      duration: 3
    });
  },
  data() {
    return {
      data: null,
      receiveAddress: "",
      balance: 0,
      myTicket: 0,
      buyNum: "",
      showPop: false,
      secPasswd: ""
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
      } else if (this.buyNum < 200 || this.buyNum > 5000) {
        this.$Message.error("数量最少200，最多5000");
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
@import "../../../myconfig/public.scss";
@import "../../../myconfig/otc.public.scss";
</style>
