<template>
  <div id="f4Item">
    <v-header headname='我的门票'></v-header>
    <main>
      <div class="top">
        <div class="left">
          <p>剩余门票</p>
          <p class="money">{{balance}} 张</p>
        </div>
        <div class="right">
          <Button @click="$goto('otc',{index:2})" type="default" style="color:#2d8cf0;border-color:#2d8cf0;">购买门票</Button>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li class="clearfix">
            利息
            <span class="time fr">2018-09-05 14:00:00</span>
          </li>
          <li class="clearfix">
            利息
            <span class="time fr">2018-09-05 14:00:00</span>
          </li>
        </ul>
        <div class="fenye">
          <Page :total="totalCount" @on-change='changePageIdx' size="small" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    // 添加参数
    this.data.fromNum = 1;
    this.data.pageSize = 5;
    this.$axios.post("hzp/personal/myTicketList", this.data).then(res => {
      this.buyList = res.data.data;
    });
    this.getList(1, this.pageSize);
  },
  data() {
    return {
      data: null,
      balance: 0,
      totalCount: 0,
      pageSize: 8, //每页条数
      list: []
    };
  },
  methods: {
    changePageIdx(pageIdx) {
      this.getList(pageIdx, this.pageSize);
    },
    getList(pageIdx, pageSize) {
      //当前页码，每页条数
      // 添加参数
      this.data.fromNum = pageIdx;
      this.data.pageSize = pageSize;
      this.$axios.post("hzp/personal/balanceLsit", this.data).then(res => {
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
@import "../../../myconfig/mef4.public.scss";
</style>




