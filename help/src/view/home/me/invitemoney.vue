
<template>
    <div id="f4Item">
        <v-header headname='邀请金'></v-header>
        <main>
            <div class="top">
                <div class="left">
                    <p>当前邀请金</p>
                    <p class="money">{{invitemoney}} USDT</p>
                </div>
                <div class="right">
                    <Button type="default" style="color:#2d8cf0;border-color:#2d8cf0;">转入余额</Button>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li class="clearfix">
                        <div>
                            利息
                            <span class="time fr">2018-09-05 14:00:00</span>
                        </div>
                        <div>
                            12331312312
                            <span class="time fr">投注 {{1}}</span>
                        </div>
                    </li>
                    <li class="clearfix">
                        利息
                        <span class="time fr">2018-09-05 14:00:00</span>
                    </li>
                </ul>
                <div class="fenye">
                    <Page :total="totalCount" size="small" />
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
    // 获取路由的参数
    this.invitemoney = this.$route.params.num;
    this.getList(1, this.pageSize);    
  },
  data() {
    return {
      data: null,
      invitemoney: 0,
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
      this.$axios.post("hzp/personal/invitationLsit", this.data).then(res => {
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
