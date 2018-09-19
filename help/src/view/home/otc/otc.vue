<template>
  <div id="otc">
    <div id="tab">
      <div class="tab-nav cp">
        <div class="tabItem" :class="{'tabActive':isActive==idx}" v-for="(item,idx) in tabItem" :key="idx" @click="tabPage(idx)">{{item}}</div>
        <!-- 横线 -->
        <div id="bottomLine"></div>
      </div>
      <div id="tabContent" class="tabContent clearfix" style="left:0;">
        <div class="contentPage fl">
          <v-nodata v-if="buyOrder.length == 0"></v-nodata>
          <ul v-else class="orderList">
            <li class="clearfix" v-for="(item,idx) in buyOrder" :key="idx">
              <div class="left">
                <div class="top">
                  <span class="phone">
                    {{item.userPhone}}
                  </span>
                  <span class="star">
                    星级：{{item.userLevel}}
                  </span>
                </div>
                <div class="bottom">
                  {{item.dateSdf}}
                </div>
              </div>
              <div class="right fr">
                <span class="money">
                  {{item.transactionAmount}} USDT
                </span>
                <span class="circle" v-if=true>买</span>
                <span class="circle" v-else>卖</span>
              </div>
            </li>
          </ul>
          <div v-if="buyOrder.length !== 0" class="fenye">
            <Page :total="buy_totalCount" @on-change='getBuyTicket' size="small" />
          </div>
          <div class="buysell">
            <Button type="primary" size="large" style="width:35%;margin-right:20px;" @click="$goto('buy')">我要买</Button>
            <Button type="success" size="large" style="width:35%;" @click="$goto('sell')">我要卖</Button>
          </div>
        </div>
        <div class="contentPage fl">
          <v-nodata v-if="sellOrder.length == 0"></v-nodata>
          <ul v-else class="orderList">
            <li class="clearfix" v-for="(item,idx) in sellOrder" :key="idx">
              <div class="left">
                <div class="top">
                  <span class="phone">
                    {{item.userPhone}}
                  </span>
                  <span class="star">
                    星级：{{item.userLevel}}
                  </span>
                </div>
                <div class="bottom">
                  {{item.dateSdf}}
                </div>
              </div>
              <div class="right fr">
                <span class="money">
                  {{item.transactionAmount}} USDT
                </span>
                <span class="circle" v-if=false>买</span>
                <span class="circle" v-else>卖</span>
              </div>
            </li>
          </ul>
          <div v-if="sellOrder.length !== 0" class="fenye">
            <Page :total="sell_totalCount" @on-change='getSellTicket' size="small" />
          </div>
          <div class="buysell">
            <Button type="primary" size="large" style="width:35%;margin-right:20px;" @click="$goto('buy')">我要买</Button>
            <Button type="success" size="large" style="width:35%;" @click="$goto('sell')">我要卖</Button>
          </div>
        </div>
        <div class="contentPage fl">
          <div class="main">
            <div class="main">
              <ul>
                <li class='clearix'>
                  <span>
                    收款地址
                  </span>
                  <span class='fr' style='word-break:break-word;'>
                    {{systemReceipt}}
                  </span>
                </li>
                <li>
                  <span>单价</span>
                  <span>{{singlePrice}} USDT</span>
                </li>
                <li>
                  <span>购买数量</span>
                  <span id="priceIptBox">
                    <Input type="number" v-model.number="buyNum">
                    <span @click="dec" slot="prepend">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                    <span @click="add" slot="append">&nbsp;&nbsp;+&nbsp;&nbsp;</span>
                    </Input>
                  </span>
                </li>
                <li class='clearix'>
                  <span>
                    付款地址
                  </span>
                  <span class='fr' style='word-break:break-word;'>
                    {{payAddress}}
                  </span>
                </li>
              </ul>
            </div>
            <div class="btnBox">
              <Button type="primary" size="large" style="width:80%;" @click="showPop=true">确认购买</Button>
            </div>
          </div>
          <div class="notice">
            <p>温馨提示：</p>
            <p>• 请根据投注需要购买相应数量的门票，购买时，请用钱包向付款地址转账，转账后提交交易单号作为凭证，系统会在确认收到转账后，直接将门票发放到您的账户上</p>
            <p>• 投注金额200~500 USDT，消耗门票2张</p>
            <p>• 投注金额500~1000 USDT，消耗门票5张</p>
            <p>• 投注金额1000~3000.00 USDT，消耗门票10张</p>
            <p>• 投注金额3000.00 USDT以上，消耗门票30张</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹出框 -->
        <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p>确认付款地址无误？</p>
                    <p style='word-break:break-word;margin:20px 0;'>{{payAddress}}</p>
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
    // 获取买单
    this.getBuyTicket(1);
    // 获取卖单
    this.getSellTicket(1);
    // 获取付款地址
    this.$axios.post("/hzp/otc/getUserInfo", this.data).then(res => {
      this.payAddress = res.data.data.receivableAddress;
      this.systemReceipt = res.data.data.systemReceipt;
    });
  },
  mounted() {
    const index = this.$route.params.index;
    // 如果是从我要买进入
    if (index == 2) {
      this.isActive == index;
      this.tabPage(index);
    }
    // iview消息框提示配置
    this.$Message.config({
      duration: 3
    });
  },
  data() {
    return {
      data: null, //id和token
      tabItem: ["买单", "卖单", "门票"],
      isActive: 0,
      buyOrder: [],
      sellOrder: [],
      payAddress: "",
      systemReceipt: "", //系统地址
      singlePrice: "1",
      buyNum: 1, //购买数量
      orderNum: "", //交易单号
      buy_totalCount: 0, //分页的总数据条数
      sell_totalCount: 0, //分页的总数据条数
      pageSize: 6, //每页条数
      showPop:false
    };
  },
  methods: {
    tabPage(idx) {
      // 获取页面容器
      const tabContent = document.getElementById("tabContent");
      // 获取页面实际宽度
      const pageWidth = tabContent.getElementsByClassName("contentPage")[0]
        .offsetWidth;
      //   根据下标来位移
      tabContent.style.left = -idx * pageWidth + "px";
      // 改变导航文字颜色
      this.isActive = idx;
      //   改变横线位置
      document.getElementById("bottomLine").style.left =
        idx * pageWidth / 3 + "px";
    },
    // 加减数量
    dec() {
      if (this.buyNum > 1) {
        this.buyNum--;
      }
    },
    add() {
      this.buyNum++;
    },
    // 获取买单
    getBuyTicket(pageIdx) {
      this.$axios
        .post("/hzp/otc/getOrders", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          fromNum: pageIdx,
          pageSize: this.pageSize,
          type: 0
        })
        .then(res => {
          this.buyOrder = res.data.data.list;
          this.buy_totalCount = res.data.data.totalCount;
        });
    },
    // 获取卖单
    getSellTicket(pageIdx) {
      this.$axios
        .post("/hzp/otc/getOrders", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          fromNum: pageIdx,
          pageSize: this.pageSize,
          type: 1
        })
        .then(res => {
          this.sellOrder = res.data.data.list;
          this.sell_totalCount = res.data.data.totalCount;
        });
    },
    // 购买门票
    confirm() {
      // if (this.orderNum === "") {
      //   this.$Message.error("请输入交易单号!");
      // } else 
      if (!this.payAddress) {
        this.$Message.error("请完善交易地址!");
        setTimeout(() => {
          this.$router.push({ name: "changereceiveaddress" });
        }, 1000);
      } else {
        this.$axios
          .post("/hzp/otc/buyTickets", {
            userId: this.data.userId,
            userToken: this.data.userToken,
            amount: this.buyNum,
            // transactionOrder: this.orderNum
          })
          .then(res => {
            if (res.data.code == 4006) {
              this.$Message.success(res.data.message);
              this.$goBack();
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
#otc {
  height: calc(100% - 50px);
}
#tab {
  width: 100%;
  height: 100%;
  font-size: 16px;
  overflow: hidden;
  position: relative;
  .tab-nav {
    display: flex;
    display: -ms-flexbox;
    border-bottom: 1px solid #dcdee2;
    position: relative;
  }
  #bottomLine {
    width: calc(100% / 3);
    height: 2px;
    background-color: #2d8cf0;
    position: absolute;
    bottom: 0;
    transition: 0.3s ease-in-out;
  }
  .tabItem {
    width: calc(100% / 3);
    line-height: 44px;
    text-align: center;
  }
  .tabActive {
    color: #2d8cf0;
  }
  // 内容页面
  .tabContent {
    position: relative;
    width: calc(100% * 3);
    height: calc(100% - 38px);
    transition: 0.3s ease-in-out;
    overflow-y: scroll;
  }
  .contentPage {
    width: calc(100% / 3);
    height: 100%;
    display: inline-block;
  }
}
// 买卖订单
.orderList {
  font-size: $orderfont;
  width: 100%;
  li {
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 1px;
    background-color: #fff;
  }
  .left {
    display: inline-block;
    width: 55%;
    height: 100%;
    .top {
      margin-bottom: 5px;
      .phone {
        margin-right: 5px;
      }
      .star {
        color: #4f9995;
      }
    }
    // .bottom{

    // }
  }
  .right {
    display: inline-block;
    width: 45%;
    height: 100%;
    text-align: right;
    line-height: 47px;

    .money {
      color: $money;
    }
    .circle {
      display: inline-block;
      width: 22px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid $darkfont;
    }
  }
}
// 按钮
.buysell {
  margin: 10% 0;
  text-align: center;
}
// 分页
.fenye {
  margin-top: 20px;
  text-align: center;
}
@import "../../../myconfig/otc.public.scss";
</style>
