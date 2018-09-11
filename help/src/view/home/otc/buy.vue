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
            {{useTicket}}

          </span>
        </li>
        <li>
          <span>持有门票</span>
          <span>
            {{myTicket}}
            <router-link :to="{name:'otc',params:{index: 2}}" replace tag="span" style="color:#2d8cf0"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购买门票&nbsp;</router-link>
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
  data() {
    return {
      buyNum: "",
      useTicket: 0, //消耗门票
      myTicket: 100 //持有门票
    };
  },
  methods: {
    confirm() {}
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
@import "../../../myconfig/otc.public.scss";
</style>
