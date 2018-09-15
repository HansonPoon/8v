<template>
    <div id="f4Item">
        <v-header headname='本金'></v-header>
        <main>
            <div class="top">
                <div class="left">
                    <p>当前本金</p>
                    <p class="money">{{principal}} USDT</p>
                    <div class="daoqi">
                        生息到期：{{endTime}} &nbsp;
                        <Button @click="showPop=true" type="default" style="color:#2d8cf0;border-color:#2d8cf0;">延长10天</Button>
                    </div>
                </div>
                <!-- <div class="right">
                    <Button type="default" style="color:#2d8cf0;border-color:#2d8cf0;">我要卖</Button>
                </div> -->
            </div>
            <div class="bottom">
                <ul>
                    <li class="clearfix" v-for='(item,idx) in newList' :key='idx'>
                        {{item.remark}}
                        <span class="time fr">{{item.createTime}}</span>
                    </li>
                </ul>
                <div class="fenye">
                    <Page :total="totalCount" @on-change='changePageIdx' size="small" />
                </div>
            </div>
        </main>
        <!-- 弹出框 -->
        <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p align='center'>温馨提示：</p>
                    <p style="margin:20px 0 30px;">您确认要额外延长生息周期10天？</p>
                    <!-- <Input v-model="confirmIpt" style="width:100%;margin:20px 0 30px;" /> -->
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
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    // 获取路由的参数
    this.principal = this.$route.params.num;
    this.principalId = this.$route.params.principalId;
    this.endTime = this.$route.params.endTime;
    this.getList(1, this.pageSize);
  },
  data() {
    return {
      principal: 0,
      showPop: false,
      totalCount: 0,
      pageSize: 8, //每页条数
      list: [],
      principalId: null,
      endTime:''
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
    changePageIdx(pageIdx) {
      this.getList(pageIdx, this.pageSize);
    },
    getList(pageIdx, pageSize) {
      //当前页码，每页条数
      // 添加参数
      this.data.fromNum = pageIdx;
      this.data.pageSize = pageSize;
      this.$axios.post("hzp/personal/principalLsit", this.data).then(res => {
        this.list = res.data.data.list;
        this.totalCount = res.data.data.totalCount;
      });
    },
    secendConfirm() {
      this.showPop = false;
      this.$axios
        .post("/hzp/otc/addPrincipalTime", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          principalId: this.principalId
        })
        .then(res => {
          if (res.data.code == 4015) {
            this.$Message.success(res.data.message);
            this.endTime = res.data.data;
          } else {
            this.$Message.error(res.data.message);
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
@import "../../../myconfig/mef4.public.scss";
</style>