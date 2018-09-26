<template>
  <div id="myinvite">
    <v-header headname='我的邀请'></v-header>
    <main>
      <v-nodata v-if='list.length==0'></v-nodata>
      <div v-else>
        <ul class="showBox clearfix">
          <li class="fl" v-for="(item,idx) in list" :key="idx">
            <div class="logo">
              <Icon type="md-person" size='40' color='#999' />
            </div>
            <p>{{item}}</p>
          </li>
        </ul>
        <div class="fenye">
          <Page :total="totalCount" :page-size='pageSize' size="small" @on-change='changePageIdx' />
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
    // 请求数据列表
    this.getList(1, this.pageSize);
  },
  data() {
    return {
      data: null,
      totalCount: 10,
      pageSize: 12, //每页条数
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
      this.$axios.post("hzp/personal/myInvitationLsit", this.data).then(res => {
        this.list = res.data.data.list;
        this.totalCount = res.data.data.totalCount;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../myconfig/public.scss';
main {
  height: calc(100% - 44px);
  overflow-x: hidden;
  overflow-y: scroll;
  .showBox {
    background-color: #fff;
  }
  li {
    text-align: center;
    width: calc(100% / 3);
    padding: 3%;

    & > p {
      margin-top: 10px;
    }
  }
}
.fenye {
  margin-top: 20px;
  text-align: center;
}
.inviteMore{
  line-height: 45px;
  font-size: 14px;
  color: $green;
  background-color: #fff;
  margin-top: 10px;
  text-align: right;
  padding-right: 15px;
}
</style>
