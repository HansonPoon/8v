<template>
  <div id="f4Item">
    <v-header headname='我的门票'></v-header>
    <main>
      <div class="top">
        <div class="left">
          <p>剩余门票</p>
          <p class="money">{{balance}} 张</p>
        </div>
        <div class="right" style="top:15px">
          <Button @click="$goto('otc',{index:2})" type="small" style="display:block;margin-bottom:10px;color:#2d8cf0;border-color:#2d8cf0;">购买门票</Button>
          <Button @click="showPop=true" type="small" style="color:#2d8cf0;border-color:#2d8cf0;">赠送门票</Button>
        </div>
      </div>
      <div class="bottom">
        <div v-if="list.length!==0">
          <ul>
            <li class="clearfix" v-for="(item,idx) in newList" :key="idx">
              <div>
                <div class="clearfix">
                  <span>{{item.type}}</span>
                  <span class="fr">{{item.status}}</span>
                </div>
                <div class="clearfix">
                  <span>{{item.amount}}</span>
                  <span class="time fr">{{item.createTime}}</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="fenye">
            <Page :total="totalCount" :pageSize="pageSize" @on-change='changePageIdx' size="small" />
          </div>
        </div>
      </div>
    </main>
    <!-- 弹出框 -->
    <div id="alert" v-if="showPop">
      <div id="pop" style="padding:5% 10%;">
        <div class="top">
          <p align='center'>赠送门票</p>
          <div style="margin:15px 0;">
            <label style="display:inline-block;width:35%;" for="">赠送对象：</label>
            <Input v-model="sendId" style="width:60%;" />
          </div>
            <div style="margin:15px 0;">
              <label style="display:inline-block;width:35%;" for="">赠送数量：</label>
              <Input type="number" v-model="sendNum" style="width:60%;" />
          </div>
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
      list: [],
      showPop: false,
      sendId: "", //接收人id
      sendNum: "" //赠送数量
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
    },
    secendConfirm() {
      if (this.sendId !== "" && this.sendNum !== "") {
        setTimeout(() => {
          this.showPop = false;
        }, 500);
        this.$axios
          .post("/hzp/otc/give", {
            userId: this.data.userId,
            userToken: this.data.userToken,
            collectId: this.sendId,
            number: this.sendNum
          })
          .then(res => {
            if (res.data.code === 4015) {
              this.$Message.success(res.data.message);
            } else {
              this.$Message.error(res.data.message);
            }
          });
      } else {
        this.$Message.error("未填写赠送信息");
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
ul {
  color: $lightfont;
}
// #myTicket {
//   main {
//     font-size: 14px;
//     line-height: 30px;
//     color: $darkfont;
//     .top {
//       padding: 15px;
//       background-color: #fff;
//       position: relative;
//       .left {
//         text-align: center;
//         .money {
//           color: $money;
//         }
//       }
//       .right {
//         position: absolute;
//         right: 15px;
//         top: 30px;
//       }
//     }
//     .bottom {
//       // height: calc(100% - 166px);
//       // overflow-y: scroll;
//       // overflow-x: hidden;
//       li {
//         line-height: 44px;
//         padding: 0 15px;
//         background-color: #fff;

//         // & > div {
//         //   border-bottom: 1px solid #d4d4d4;
//         // }
//         // &:last-child > div {
//         //   border: none;
//         // }
//       }
//       .time {
//         color: $lightfont;
//       }
//       .fenye {
//         text-align: center;
//         margin: 10px 0;
//       }
//     }
//   }
// }
</style>




