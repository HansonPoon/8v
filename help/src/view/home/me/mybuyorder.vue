<template>
  <div id="mybuyorder">
    <v-header headname='我的买单'></v-header>
    <div class="noOrder" v-if="list.length===0">
      暂无买单，赶快
      <router-link :to="{name:'buy'}" style="text-decoration:underline;">去下单</router-link>
      吧
    </div>
    <div class="hasOrder" v-else>
      <ul>
        <li v-for="(item,idx) in list" :key="idx">
          <div class="top">
            <p>
              <span>排单单号</span>
              <span>{{item.id}}</span>
            </p>
            <p>
              <span>交易数量</span>
              <span>{{item.transactionAmount}} USDT</span>
            </p>
            <p>
              <span>下单时间</span>
              <span>{{item.createTime}}</span>
            </p>
            <p @click="showMatchList[idx].checkMatch=!showMatchList[idx].checkMatch" v-if="item.status!=='未匹配'" style='text-align:center;color:#2d8cf0'>查看匹配</p>
            <div class="status" v-if="item.status=='未匹配'">未匹配</div>
            <div class="status" v-else-if="item.status=='已完成'">已完成</div>
            <div class="matching status" v-else>已匹配</div>
          </div>
          <div v-if="showMatchList[idx].checkMatch">
            <div class="mid">
              <Icon style="margin-right:-15px" size='40' type="ios-arrow-round-up" />
              <Icon style="margin-left:-15px" size='40' type="ios-arrow-round-down" />
            </div>
            <div class="bottom">
              <p v-if="item.status==1" class="noOrder">暂无匹配卖单</p>
              <div class="hasOrder" v-else>
                <p>
                  <span>匹配单号</span>
                  <span>{{item.platoonId}}</span>
                </p>
                <p>
                  <span>交易数量</span>
                  <span>{{item.transactionAmount}} USDT</span>
                </p>
                <p>
                  <span>匹配时间</span>
                  <span>{{item.matchingTime}}</span>
                </p>
                <p class="clearfix">
                  <span>收款地址</span>
                  <span class="fr" style="word-wrap: break-word;display:inline-block;width:70%">
                    {{item.sellAddress}}
                  </span>
                </p>
                <p class="clearfix">
                  <span>付款地址</span>
                  <span class="fr" style="word-wrap: break-word;display:inline-block;width:70%">
                    {{item.buyAddress}}
                  </span>
                </p>
                <p>
                  <span>区块链浏览器</span>
                  <span>
                    <a target="_blank" href="https://tether.to/">https://tether.to/</a>
                  </span>
                </p>
                <div class="btnBox">
                  <Button class='copybtn' type="default" size="default" style="width:35%;margin-right:20px;" :data-clipboard-text="item.sellAddress" @click="copyAddress">复制地址</Button>
                  <Button v-if="item.yesOrNo==0" type="primary" size="default" style="width:35%;" @click="firstConfirm(idx);">确认付款</Button>
                  <Button v-else-if="item.yesOrNo==1" type="primary" size="default" style="width:35%;">等待卖家确认</Button>
                  <Button v-else-if="item.yesOrNo==2" type="default" size="default" style="width:35%;">已完成</Button>
                  <Button v-else-if="item.yesOrNo==3" type="default" size="default" style="width:35%;">已取消</Button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="fenye">
        <Page :total="totalCount" :pageSize='pageSize' @on-change='changePageIdx' size="small" />
      </div>
    </div>
    <!-- 弹出框 -->
    <div id="alert" v-if="showPop">
      <div id="pop">
        <div class="top">
          <p>温馨提示：</p>
          <p style="margin:20px 0 30px;">确认收款后交易完成，您的买单将无法退回，请仔细确认地址</p>
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
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.getList(1, this.pageSize);
  },
  mounted() {
    this.$Message.config({
      duration: 3
    });
  },
  data() {
    return {
      data: null,
      showPop: false,
      totalCount: 0,
      pageSize: 3, //每页条数
      list: [],
      confirmIdx: null, //确认付款的下标
      showMatchList: []
    };
  },
  computed: {
    newList() {
      let newList = this.list;
      this.$timeToTime(newList);
      return newList;
    }
  },
  methods: {
    copyAddress() {
      let clipboard = new Clipboard(".copybtn");
      clipboard.on("success", e => {
        this.$Message.success("复制成功！");
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        clipboard.destroy();
      });
    },
    firstConfirm(idx) {
      this.showPop = true;
      this.confirmIdx = idx;
    },
    secendConfirm() {
      this.showPop = false;
      this.$axios
        .post("/hzp/otc/confirmBuyOrder", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          platoonId: this.list[this.confirmIdx].platoonId
        })
        .then(res => {
          if (res.data.code == 4013) {
            this.$Message.success(res.data.message);
            this.getList(1, this.pageSize);
          } else {
            this.$Message.error(res.data.message);
          }
        });
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
        //生成匹配详情显隐状态数组
        for (let index = 0; index < this.list.length; index++) {
          this.showMatchList.push({ checkMatch: false });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";

#mybuyorder {
  .fenye {
    text-align: center;
    margin: 10px 0;
  }
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
        display: inline-block;
        width: 30%;
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
          display: inline-block;
          color: $darkfont;
          width: 30%;
        }
        .btnBox {
          padding: 10px 0 5px;
          border-top: 1px dashed $bc;
          text-align: right;
        }
        .addr {
        }
      }
    }
  }
}
</style>


