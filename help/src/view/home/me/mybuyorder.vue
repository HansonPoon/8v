<template>
  <div id="mybuyorder">
    <v-header headname='我的买单'></v-header>
    <div class="noOrder" v-if="buyList.length===0">
      暂无买单，赶快
      <router-link :to="{name:'buy'}" style="text-decoration:underline;">去下单</router-link>
      吧
    </div>
    <div class="hasOrder" v-else>
      <ul>
        <li v-for="(item,idx) in buyList" :key="idx">
          <div class="top">
            <p>
              <span>排单单号</span>
              <span>{{item.num}}</span>
            </p>
            <p>
              <span>交易数量</span>
              <span>{{item.amount}} USDT</span>
            </p>
            <p>
              <span>下单时间</span>
              <span>{{item.time}}</span>
            </p>
            <div class="status" v-if="item.status==1">未匹配</div>
            <div class="matching status" v-else>已匹配</div>
          </div>
          <div class="mid">
            <Icon style="margin-right:-15px" size='40' type="ios-arrow-round-up" />
            <Icon style="margin-left:-15px" size='40' type="ios-arrow-round-down" />
          </div>
          <div class="bottom">
            <p v-if="item.status==1" class="noOrder">暂无匹配卖单</p>
            <div class="hasOrder" v-else>
              <p>
                <span>排单单号</span>
                <span>{{item.num}}</span>
              </p>
              <p>
                <span>交易数量</span>
                <span>{{item.amount}} USDT</span>
              </p>
              <p>
                <span>下单时间</span>
                <span>{{item.time}}</span>
              </p>
              <p class="clearfix">
                <span>付款地址</span>
                <span class="fr" style="word-wrap: break-word;display:inline-block;width:calc(90% - 60px)">
                  {{item.address}}
                </span>
              </p>
              <div class="btnBox">
                <Button type="default" size="default" style="width:35%;margin-right:20px;" @click="copyAddress(item.address)">复制地址</Button>
                <Button type="primary" size="default" style="width:35%;" @click="showPop=true;">确认付款</Button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 弹出框 -->
    <div id="alert" v-if="showPop">
      <div id="pop">
        <div class="top">
          <p>支付交易单号：</p>
          <Input v-model="confirmIpt" style="width:100%;margin:20px 0 30px;" />
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
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.getList(1, this.pageSize);
  },
  data() {
    return {
      data: null,
      showPop: false,
      confirmIpt: "", //二次确认地址
      totalCount: 0,
      pageSize: 8, //每页条数
      buyList: [
        {
          num: "GHCC044334337619",
          amount: 3000.0,
          time: "2018-09-05 14:00:00",
          status: 1
        },
        {
          num: "GHCC044334337619",
          amount: 3000.0,
          time: "2018-09-05 14:00:00",
          status: 1
        },
        {
          num: "GHCC044334337619",
          amount: 3000.0,
          time: "2018-09-05 14:00:00",
          status: 10,
          address: "0x11707d2AD3768B27988f9bA0ddc0f28aC466F07B"
        },
        {
          num: "GHCC044334337619",
          amount: 3000.0,
          time: "2018-09-05 14:00:00",
          status: 10,
          address: "1233"
        }
      ]
    };
  },
  methods: {
    copyAddress(val) {
      this.confirmIpt = val;
    },
    secendConfirm() {
      this.showPop = false;
    },
    changePageIdx(pageIdx) {
      this.getList(pageIdx, this.pageSize);
    },
    getList(pageIdx, pageSize) {
      //当前页码，每页条数
      // 添加参数
      this.data.fromNum = pageIdx;
      this.data.pageSize = pageSize;
      this.$axios.post("hzp/personal/myBuyOrderList", this.data).then(res => {
        this.list = res.data.data.list;
        this.totalCount = res.data.data.totalCount;
      });
    }
  },
  computed: {
    newList() {
      let newList = this.list;
      this.$timeToTime(newList);
      return newList;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";

#mybuyorder {
  .noOrder {
    padding: 20%;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
    color: $lightfont;
  }
  .hasOrder {
    height: calc(100% - 44px);
    overflow-y: scroll;
    overflow-x: hidden;
    li {
      color: $lightfont;
      font-size: 14px;

      &::after {
        display: block;
        content: "";
        height: 40px;
        background-color: $bc;
      }
    }
    .top {
      background-color: #fff;
      padding: 10px 15px;
      line-height: 30px;
      position: relative;

      & > p > span:first-child {
        color: $darkfont;
        margin-right: 10%;
      }
      & > p > span:nth-child(2) {
        color: $lightfont;
      }

      .status {
        position: absolute;
        right: 15px;
        top: 40px;
      }

      //   已匹配
      .matching {
        color: $money;
      }
    }
    .mid {
      text-align: center;
      background-color: $bc;
    }
    .bottom {
      background-color: #fff;
      padding: 10px 15px;

      .hasOrder {
        line-height: 30px;
        & > p > span:first-child {
          color: $darkfont;
          margin-right: 10%;
        }
        .btnBox {
          padding: 10px 0 5px;
          border-top: 1px dashed $bc;
          text-align: right;
        }
      }
    }
  }
}
</style>


