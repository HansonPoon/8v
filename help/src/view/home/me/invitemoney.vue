
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
                    <Button @click='showPop=true' type="default" style="color:#2d8cf0;border-color:#2d8cf0;">转入余额</Button>
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
        <!-- 弹出框 -->
        <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p>请输入转入数量：</p>
                    <Input v-model.number="transNum" type='number' style="width:100%;margin:20px 0 30px;" />
                    <div class="btns">
                        <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
                        <Button type="primary" size="default" style="width:45%;" @click="confirm">确认</Button>
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
    this.invitemoney = this.$route.params.num;
    this.getList(1, this.pageSize);
  },
  data() {
    return {
      data: null,
      invitemoney: 0,
      totalCount: 0,
      pageSize: 8, //每页条数
      list: [],
      showPop: false,
      transNum: "" //转入余额数量
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
    },
    confirm() {
      if (this.transNum !== "") {
        this.showPop = false;
        this.$axios
          .post("hzp/personal/inviteMoneyPutForward", {
            userId: this.data.userId,
            userToken: this.data.userToken,
            inviteMoeny: this.transNum
          })
          .then(res => {
            if (res.data.code == 1005) {
              this.$Message.success(res.data.message);
              this.invitemoney = res.data.data;
            } else {
              this.$Message.error(res.data.message);
            }
          });
      }
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
