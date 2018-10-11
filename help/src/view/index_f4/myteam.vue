<template>
  <div>
    <v-header headname="我的团队"></v-header>
    <section id="top">
      <div class="top">
        <span>
          <Icon type="md-person" size=30 color="#fff" />
          <span class="num">{{inviteList.totalCount}}</span> 人
        </span>
        <Icon type="ios-archive" size=35 color="#fff" />
        <span class="num">{{inviteList.reward}}</span> %
      </div>
      <div class="bot">
        <span>伞下团队成员总数</span>
        <span>团队奖励比列</span>
      </div>
    </section>
    <div>
      <v-nodata v-if="inviteList.list.length==0"></v-nodata>
      <div v-else>
        <ul class="rankList">
          <li v-for="(item,idx) in inviteList.list" :key="idx">
            <img src="../../assets/images/f4/user.png" alt="">
            <span>{{item.userId}}</span>
            <span class="money fr">{{item.balanceAmount}} USDT</span>
          </li>
        </ul>
        <div class="fenye">
          <Page :total="totalCount" :pageSize='pageSize' @on-change='changePageIdx' size="small" />
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
    this.changePageIdx(1, this.pageSize);
  },
  data() {
    return {
      data: null,
      inviteList: {
        reward: 0,
        totalCount: 0,
        list: []
      },
      totalCount: 0,
      pageSize: 6
    };
  },
  methods: {
    changePageIdx(pageIdx, pageSize) {
      //当前页码，每页条数
      this.$axios
        .post("hzp/homePage/myTeamLsit", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          fromNum: pageIdx,
          pageSize: this.pageSize
        })
        .then(res => {
          this.totalCount = res.data.data.totalCount;
          this.inviteList.list = res.data.data.list;
          this.inviteList.reward = res.data.data.reward;
          this.inviteList.totalCount = res.data.data.totalCount;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
@import "../index_f3/f3_public.scss";

.rankList {
  font-size: 14px;
  overflow: hidden;
  padding: 0 15px;
  background-color: #fff;
  box-shadow: 0px 2px 1px 1px $shadow;
  border: 1px solid $line;

  li {
    padding: 10px 15px;
    line-height: 40px;
    border-bottom: 1px solid $line;
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      position: relative;
      top: -2px;
      margin-right: 10px;
    }
    .money {
      color: $money;
    }
  }
  li:last-child {
    border: none;
  }
}
#top {
  padding-top: 10px;
  height: 100px;
  border-bottom-left-radius: 26px;
  background: linear-gradient(45deg, #414781, #5c6293);
  text-align: center;
  color: #fff;
  line-height: 40px;

  .top {
    & > span:first-child {
      margin-right: 20px;
    }
    .num {
      font-size: 20px;
      position: relative;
      top: 5px;
    }
  }
  .bot {
    & > span:first-child {
      margin-right: 20px;
    }
  }
}
</style>

