<template>
  <div>
    <v-header headname="余额明细"></v-header>
    <section id="list">
      <v-nodata v-if="interestList.length == 0" />
      <ul v-else>
        <li v-for="(item,idx) in interestList" :key="idx">
          <div class="top">
            <div class="type">
              <img v-if="item.balanceType=='持币生息' " src="../../assets/images/yueDetail/01.png" alt="">
              <img v-else-if="item.balanceType=='邀请奖励' " src="../../assets/images/yueDetail/02.png" alt="">
              <img v-else-if="item.balanceType=='团队奖励' " src="../../assets/images/yueDetail/03.png" alt="">
              <img v-else-if="item.balanceType=='账户转入' " src="../../assets/images/yueDetail/04.png" alt="">
              <img v-else-if="item.balanceType=='账户转出' " src="../../assets/images/yueDetail/05.png" alt="">
              <img v-else-if="item.balanceType=='余额提现' " src="../../assets/images/yueDetail/06.png" alt="">
              <img v-else src="../../assets/images/yueDetail/01.png" alt="">
              {{item.balanceType}}
            </div>
            <div class="time">{{item.create_time}}</div>
          </div>
          <div class="detail">
            <span class="money">
              {{item.balanceAmount}} USDT
            </span>
          </div>
          <div class="from">
            来源用户：
            <span v-if="item.source">
              {{item.source}}
            </span>
            <span v-else>
              无
            </span>
          </div>
        </li>
      </ul>
    </section>
    <div class="fenye">
      <Page :total="totalCount_interest" :pageSize='pageSize' @on-change='changePageIdx' size="small" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.changePageIdx(1, this.pageSize);
  },
  data() {
    return {
      interestList: [],
      totalCount_interest: 0,
      pageSize: 4
    };
  },
  methods: {
    changePageIdx(pageIdx, pageSize) {
      //当前页码，每页条数
      this.$axios
        .post("hzp/homePage/balanceDetailsList", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          fromNum: pageIdx,
          pageSize: this.pageSize
        })
        .then(res => {
          this.interestList = res.data.data.list;
          this.totalCount_interest = res.data.data.totalCount;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
#list {
  font-size: 14px;
  background-color: #fff;

  & > ul {
    background-color: #f7f7f7;

    li {
      padding: 0 15px;

      color: $lightfontcolor;
      margin-bottom: 8px;
      background-color: #fff;

      .top {
        border-bottom: 1px solid $line;
        line-height: 40px;
        position: relative;
        .type {
          img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
            position: relative;
            top: -2px;
          }
        }

        .time {
          position: absolute;
          top: 0;
          right: 0;
        }
      }

      .detail {
        line-height: 44px;
      }
      .money {
        color: $userf3;
        font-size: 16px;
        font-weight: bold;
      }
      .from {
        padding-bottom: 10px;
      }
    }
  }
}
</style>

