<template>
  <div id="buy">
    <v-header headname='买单'></v-header>
    <div class="main">
      <ul>
        <li>
          <span>报价数量</span>
          <span>
            <Input type="number" v-model.number="buyNum" placeholder="请输入100的倍数">
            </Input>
          </span>
        </li>
        <li>
          <span>消耗门票</span>
          <span>
            {{useTicket}} 张
          </span>
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
        <Button type="primary" size="large" style="width:80%;" @click="confirm">确认购买</Button>
      </div>
    </div>
    <div class="notice">
      <p>温馨提示：单笔报单最少200 USDT，最多5000 USDT</p>
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
    });
  },
  data() {
    return {
      data: null,
      buyNum: "",
      myTicket: 0 //持有门票
    };
  },
  computed: {
    // 门票消耗
    useTicket() {
      return this.$useTicket(this.buyNum);
    }
  },
  methods: {
    confirm() {
      if (this.buyNum == "" || this.buyNum % 100 !== 0) {
        this.$Message.error("只能输入100的倍数！");
      } else if (this.buyNum < 200 || this.buyNum > 5000) {
        this.$Message.error("数量最少200，最多5000");
      } else {
        // 添加参数
        this.data.transactionAmount = this.buyNum;
        this.$axios.post("/hzp/otc/buyOrder", this.data).then(res => {
          if (res.data.code == 4012) {
            this.$Message.success(res.data.message);
            // 返回上一页
            setTimeout(() => this.$goBack(), 1000);
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
@import "../../../myconfig/public.scss";
@import "../../../myconfig/otc.public.scss";
</style>
