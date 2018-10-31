<template>
  <div>
    <div id="header">
      <div class="backBox">
        <Icon class="cp" @click="$goBack()" type="ios-arrow-back" size='28' />
      </div>
      我的邀请
      <div @click="$goto('share')" id="detail">
        <Icon type="md-share" />
        邀请
      </div>
    </div>
    <div>
      <v-nodata v-if="inviteList.length==0"></v-nodata>
      <div v-else>
        <ul class="rankList">
          <li v-for="(item,idx) in inviteList" :key="idx">
            <img src="../../assets/images/f4/user.png" alt="">
            <span>{{item.inviteUserId}}</span>
            <span class="money fr">{{item.stakeAccumulate}} USDT</span>
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
      inviteList: [],
      totalCount: 0,
      pageSize: 6
    };
  },
  methods: {
    changePageIdx(pageIdx, pageSize) {
      //当前页码，每页条数
      this.$axios.get("hzp/stake/factorSource").then(res => {
        if (res.data.code == 0) {
          //继续请求。。
          const factor = res.data.data;
          this.$axios
            .post(
              "hzp/homePage/myInvitationLsit",
              this.$axiosParam({
                factor,
                userId: this.data.userId,
                userToken: this.data.userToken,
                fromNum: pageIdx,
                pageSize: this.pageSize
              })
            )
            .then(res => {
              this.inviteList = res.data.data.list;
              this.totalCount = res.data.data.totalCount;
            });
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
</style>
