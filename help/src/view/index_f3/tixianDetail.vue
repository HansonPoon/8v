<template>
  <div>
    <v-header headname="提现明细"></v-header>
    <section id="list">
      <v-nodata v-if="list.length == 0" />
      <ul v-else>
        <li v-for="(item,idx) in list" :key="idx">
          <div class="time">{{item.createTime}}</div>
          <div class="detail">
            <span class="money">
              {{item.amount}} USDT
            </span>
            <span class="status fr">
              <span v-if="true" class="success">{{item.describe}}</span>
              <span v-else class="fail">提现失败：钱包地址错误</span>
            </span>
          </div>
        </li>
      </ul>
      <div class="fenye">
        <Page :total="totalCount" :pageSize='pageSize' @on-change='changeInterestPageIdx' size="small" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.changeInterestPageIdx(1, this.pageSize);
  },
  mounted() {
    this.$Message.config({
      duration: 3
    });
  },
  data() {
    return {
      data: null,
      pageSize: 6,
      totalCount: 0,
      list: []
    };
  },
  methods: {
    changeInterestPageIdx(pageIdx) {
      this.$axios.get("hzp/stake/factorSource").then(res => {
        if (res.data.code == 0) {
          //继续请求。。
          const factor = res.data.data;
          this.$axios
            .post(
              "hzp/homePage/showOrTurnList",
              this.$axiosParam({
                factor,
                userId: this.data.userId,
                userToken: this.data.userToken,
                pageSize: this.pageSize,
                fromNum: pageIdx,
                type: 1
              })
            )
            .then(res => {
              this.list = res.data.data.list;
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
</style>

