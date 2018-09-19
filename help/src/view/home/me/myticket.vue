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
        <div v-if="list.length!==0">
          <ul>
            <li class="clearfix" v-for="(item,idx) in newList" :key="idx">
              <div class="clearfix">
                <span>{{item.type}}</span>
                <span class="fr">{{item.status}}</span>
              </div>
              <div class="clearfix">
                <span>{{item.amount}}</span>
                <span class="time fr">{{item.createTime}}</span>
              </div>
            </li>
          </ul>
          <div class="fenye">
            <Page :total="totalCount" :pageSize="pageSize" @on-change='changePageIdx' size="small" />
          </div>
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
    // 读取路由参数
    this.balance = this.$route.params.num;
    // 添加参数
    this.data.fromNum = 1;
    this.data.pageSize = 5;
    this.getList(1, this.pageSize);
  },
  data() {
    return {
      data: null,
      balance: 0,
      totalCount: 0,
      pageSize: 5, //每页条数
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
      this.$axios.post("hzp/personal/myTicketList", this.data).then(res => {
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

ul {
  // color: $lightfont;
}
</style>




