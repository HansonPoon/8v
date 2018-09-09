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
                        </Input>
                    </span>
                </li>
                <li>
                    <span>持有门票</span>
                    <span>
                        {{myTicket}}
                        </Input>
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
.main {
  background-color: #fff;
  padding-bottom: 1px;
  .btnBox {
    text-align: center;
    margin: 20px 0;
  }
  li {
    text-align: left;
    height: auto;
    font-size: 0;
    overflow: hidden;
    padding: 10px 15px;

    & > span {
      display: inline-block;
      height: inherit;
      font-size: 14px;
    }
    & > span:first-child {
      width: 30%;
      line-height: 42px;
    }
    & > span:last-child {
      width: 70%;
      position: relative;
    }
    #address {
      word-wrap: break-word;
      width: 80%;
      position: relative;
      top: 15px;
    }
    .changeAddressIcon {
      position: absolute;
      right: 0;
      top: 20px;
    }
    #priceIptBox {
      position: relative;
      top: 10px;
    }
  }
}
.notice{
  padding: 15px;
  font-size: 12px;
  line-height: 25px;
}
</style>
