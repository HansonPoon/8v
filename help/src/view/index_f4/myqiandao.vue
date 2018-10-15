<template>
  <div>
    <v-header headname="我的签到" />
    <div>
      <v-nodata v-if="inviteList.list.length==0"></v-nodata>
      <div v-else>
        <ul class="rankList">
          <li v-for="(item,idx) in inviteList.list" :key="idx">
            <!-- <img src="../../assets/images/f4/user.png" alt=""> -->
            <span>{{item}}</span>
            <span class="money fr">已签到</span>
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
      pageSize: 6
    };
  },
  computed: {
    totalCount() {
      return this.inviteList.list.length;
    }
  },
  methods: {
    changePageIdx(pageIdx, pageSize) {
      //当前页码，每页条数
      this.$axios
        .post("hzp/homePage/signList", {
          userId: this.data.userId,
          userToken: this.data.userToken
          //   fromNum: pageIdx,
          //   pageSize: this.pageSize
        })
        .then(res => {
          this.inviteList.list = res.data.data;
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