<template>
  <div id="index">

    <div id="tab">
      <div id="top">
        <div class="tab-nav cp">
          <div class="tabItem" :class="{'tabActive':isActive==idx}" v-for="(item,idx) in tabItem" :key="idx" @click="tabPage(idx)">{{item}}</div>
          <!-- 横线 -->
          <div id="bottomLine"></div>
        </div>
      </div>

      <div id="tabContent" class="tabContent clearfix" style="left:0;">
        <v-touch style="height:100%;" class="clearfix" v-on:swipeleft="onSwipeLeft"  v-on:swiperight="onSwipeRight"   tag="div">
          <!-- 第一页 -->
          <div class="contentPage page1 fl">
            <div class="container">
              <!-- banner -->
              <Carousel v-model="bannerStartIdx" loop arrow="never">
                <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../../assets/images/mainpage/banner.png" alt="">
                  </div>
                </CarouselItem>
              </Carousel>
              <!-- user -->
              <section id="user">
                <div class="top">
                  <img id="headPic" class="fl" src="../../assets/images/mainpage/headpic.png" alt="">
                  <div class="user iBox">
                    <div class="userInfo">
                      <span class="tel">{{userId}}</span>
                      <span @click="sign" class="sign fr">
                        <img src="../../assets/images/mainpage/pen.png" alt="">
                        <p>签到</p>
                      </span>
                    </div>
                    <div class="inviter">
                      <div>
                        <span v-if="userType == 0" class="userType">普通账户</span>
                        <span v-else class="userType">团队账户</span>
                        <span class="userStatus">{{userStatus}}</span>
                      </div>
                      邀请人ID:
                      <span v-if="!inviteId">无</span>
                      <span v-else>
                        {{inviteId}}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="bot clearfix">
                  <div class="left fl">
                    <div class="money">{{stakeAccumulate}} USDT</div>
                    <div class="txt">
                      <img src="../../assets/images/mainpage/$.png" alt="">
                      投注金额
                    </div>
                  </div>
                  <div class="right fr">
                    <div class="money">{{restMoney}} USDT</div>
                    <div class="txt">
                      <img src="../../assets/images/mainpage/last.png" alt="">
                      余额
                    </div>
                  </div>
                </div>
              </section>
              <section id="f3">
                <div @click="$goto('touzhu')" class="f3Item">
                  <img src="../../assets/images/mainpage/f3_01.png" alt="">
                  <p>投注</p>
                </div>
                <div @click="$goto('tixian')" class="f3Item">
                  <img src="../../assets/images/mainpage/f3_02.png" alt="">
                  <p>提现</p>
                </div>
                <div @click="$goto('zhuanzhang')" class="f3Item">
                  <img src="../../assets/images/mainpage/f3_03.png" alt="">
                  <p>转账</p>
                </div>
              </section>
              <section class="list">
                <ul>
                  <li @click="$goto('yueDetail')">
                    <img src="../../assets/images/mainpage/01.png" alt="">
                    余额明细
                    <Icon class="fr" type="ios-arrow-forward" size='22' color='rgb(153,153,153)' />
                  </li>
                  <li @click="$goto('myinvite')">
                    <img src="../../assets/images/mainpage/02.png" alt="">
                    我的邀请
                    <Icon class="fr" type="ios-arrow-forward" size='22' color='rgb(153,153,153)' />
                  </li>
                  <li @click="$goto('myteam')">
                    <img src="../../assets/images/mainpage/03.png" alt="">
                    我的团队
                    <Icon class="fr" type="ios-arrow-forward" size='22' color='rgb(153,153,153)' />
                  </li>
                  <li @click="$goto('setting')">
                    <img src="../../assets/images/mainpage/04.png" alt="">
                    我的设置
                    <Icon class="fr" type="ios-arrow-forward" size='22' color='rgb(153,153,153)' />
                  </li>
                </ul>
              </section>
              <div class="btnBox" align="center">
                <Button type="primary" size="large" style="width:80%;" @click="getTouZhuInfo">退出投注</Button>
              </div>
              <!-- 弹出框 -->
              <div id="alert" v-if="showPop">
                <div id="pop">
                  <div class="top">
                    <p style="margin-bottom:35px;">您当前投注金额 {{touzhuInfo.balance}}；当前已分红 {{touzhuInfo.rewardMoney}}，退回投注 {{touzhuInfo.stakeMoney}}。确认退出？</p>
                    <div class="btns">
                      <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
                      <Button type="primary" size="default" style="width:45%;" @click="exit">确认</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 第二页 -->
          <div class="contentPage fl">
            <div class="container">
              <!-- 持币生息榜 -->
              <div id="list1" v-if="showList">
                <v-nodata v-if="interestList.length==0"></v-nodata>
                <div v-else>
                  <ul class="rankList">
                    <li v-for="(item,idx) in interestList" :key="idx">
                      <div class="number">{{item.ranking}}</div>
                      <span>{{item.userId}}</span>
                      <span class="money fr">{{item.totalAmount}} USDT</span>
                    </li>
                  </ul>
                  <div class="fenye">
                    <Page :total="totalCount_interest" :pageSize='pageSize' @on-change='changeInterestPageIdx' size="small" />
                  </div>
                </div>
              </div>
              <!-- 邀请奖励榜 -->
              <div id="list2" v-else>
                <v-nodata v-if="inviteList.length==0"></v-nodata>
                <div v-else>
                  <ul class="rankList">
                    <li v-for="(item,idx) in inviteList" :key="idx">
                      <div class="number">{{item.ranking}}</div>
                      <span>{{item.userId}}</span>
                      <span class="money fr">{{item.totalAmount}} USDT</span>
                    </li>
                  </ul>
                  <div class="fenye">
                    <Page :total="totalCount_invite" :pageSize='pageSize' @on-change='changeInvitePageIdx' size="small" />
                  </div>
                </div>
              </div>
            </div>
            <div id="footer">
              <div @click="tabBottom(idx)" v-for="(item,idx) in bottomTab" :class="{active:ifTab===idx}" :key="idx">{{item}}</div>
            </div>
          </div>
        </v-touch>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.getHome();
    this.changeInterestPageIdx(1, this.pageSize);
    this.changeInvitePageIdx(1, this.pageSize);
  },
  data() {
    return {
      data: null,
      addr:null,
      /* 用户信息 */
      advertisement: [],
      userId: "",
      userType: "",
      userStatus: "",
      inviteId: "",
      stakeAccumulate: "",
      restMoney: "",
      /* 滑动切换 */
      tabItem: ["主页", "排行榜"],
      isActive: 0, //当前显示的页面下标
      /* 滑动切换结束 */
      bannerStartIdx: 0,
      /* 持币生息榜 */
      interestList: [],
      totalCount_interest: 0,
      /* 邀请奖励榜 */
      inviteList: [
        { rank: 1, iphone: 1, money: 2 },
        { rank: 1, iphone: 1, money: 2 },
        { rank: 1, iphone: 1, money: 2 },
        { rank: 1, iphone: 1, money: 2 },
        { rank: 1, iphone: 1, money: 2 },
        { rank: 1, iphone: 1, money: 2 },
        { rank: 1, iphone: 1, money: 2 },
        { rank: 1, iphone: 1, money: 12 }
      ],
      totalCount_invite: 0,
      showList: true, //显示哪一页
      pageSize: 8, //每页条数
      /* 底部tab */
      bottomTab: ["持币生息榜", "邀请奖励榜"],
      ifTab: 0,
      /* 退出弹框 */
      showPop: false,
      /* 投注信息 */
      touzhuInfo: null
    };
  },
  methods: {
    /* 滑动切换 */
    tabPage(idx) {
      // 获取页面容器
      const tabContent = document.getElementById("tabContent");
      // 获取页面实际宽度
      const pageWidth = tabContent.getElementsByClassName("contentPage")[0]
        .offsetWidth;
      //   根据下标来位移
      tabContent.style.left = -idx * pageWidth + "px";
      // 改变导航文字颜色
      this.isActive = idx;
      //   改变横线位置
      document.getElementById("bottomLine").style.left =
        (idx * pageWidth) / 2 + "px";
    },
    // 左滑动
    onSwipeLeft() {
      if (this.isActive < 1) {
        this.isActive++;
        this.tabPage(this.isActive);
      }
    },
    // 右滑动
    onSwipeRight() {
      if (this.isActive > 0) {
        this.isActive--;
        this.tabPage(this.isActive);
      }
    },
    /* 滑动切换结束 */
    /* 底部切换 */
    tabBottom(idx) {
      this.ifTab = idx;
      this.showList = !this.showList;
    },
    /* 签到 */
    sign() {
      // 如果已经签过到了
      if (this.addr.userSign == '未签到') {
        this.$axios
          .post("hzp/homePage/signIn", {
            userId: this.data.userId,
            userToken: this.data.userToken
          })
          .then(res => {
            if (res.data.code == 0) {
              this.$Message.success("签到成功");
              // 刷新页面
              this.getHome();
            } else {
              this.$Message.error(res.data.message);
            }
          });
      } else {
        this.$Message.error('今日已签过到了~')
      }
    },
    /* ***************ajax ********************/
    getHome() {
      this.$axios
        .post("hzp/homePage/home", {
          userId: this.data.userId,
          userToken: this.data.userToken
        })
        .then(res => {
          const userInfo = res.data.data;
          this.advertisement = userInfo.advertisement;
          this.userId = userInfo.userId;
          this.userType = userInfo.userType;
          this.userStatus = userInfo.userStatus;
          this.inviteId = userInfo.inviteId;
          this.stakeAccumulate = userInfo.stakeAccumulate;
          this.restMoney = userInfo.restMoney;

          this.addr = userInfo;

          // 存平台地址和用户钱包地址
          sessionStorage.setItem("addr", JSON.stringify(userInfo));
        });
    },
    changeInterestPageIdx(pageIdx, pageSize) {
      //当前页码，每页条数
      this.$axios
        .post("hzp/homePage/rankingInterestRoInvitation", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          fromNum: pageIdx,
          pageSize: this.pageSize,
          type: 0
        })
        .then(res => {
          this.interestList = res.data.data.list;
          this.totalCount_interest = res.data.data.totalCount;
        });
    },
    changeInvitePageIdx(pageIdx, pageSize) {
      //当前页码，每页条数
      this.$axios
        .post("hzp/homePage/rankingInterestRoInvitation", {
          userId: this.data.userId,
          userToken: this.data.userToken,
          fromNum: pageIdx,
          pageSize: this.pageSize,
          type: 1
        })
        .then(res => {
          this.inviteList = res.data.data.list;
          this.totalCount_invite = res.data.data.totalCount;
        });
    },
    getTouZhuInfo() {
      this.$axios
        .post("hzp/stake/getExitInfo", {
          userId: this.data.userId,
          userToken: this.data.userToken
        })
        .then(res => {
          if (res.data.code == 0) {
            this.showPop = true;
            this.touzhuInfo = res.data.data;
          }
        });
    },
    exit() {
      this.$axios
        .post("hzp/stake/userExit", {
          userId: this.data.userId,
          userToken: this.data.userToken
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.$Message.success("退出投注成功");
            setTimeout(() => {
              //清除所有本地存储
              sessionStorage.clear();
              this.$router.replace({ name: "login" });
            }, 1000);
          } else {
            this.$Message.error(res.data.message);
          }
        });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../myconfig/init.css";
@import "../../myconfig/public.scss";
#index {
  overflow-y: scroll;
  overflow-x: hidden;
}
/* tab开始 */
#top {
  width: 100%;
  height: 150px;
  background: url("../../assets/images/mainpage/bc.png") no-repeat center center;
  background-size: cover;
}
#tab {
  width: 100%;
  height: 100%;
  font-size: 16px;
  overflow: hidden;
  position: relative;
  .tab-nav {
    display: flex;
    display: -ms-flexbox;
    border-bottom: 1px solid rgba(254, 254, 254, 0.4);
    position: relative;
  }
  #bottomLine {
    width: calc(100% / 2);
    height: 2px;
    background-color: #fff;
    position: absolute;
    bottom: -1px;
    transition: 0.3s ease-in-out;
  }
  .tabItem {
    width: calc(100% / 2);
    line-height: 44px;
    text-align: center;
    color: rgba(254, 254, 254, 0.4);
  }
  .tabActive {
    color: #fff;
  }
  // 内容页面
  .tabContent {
    margin-top: -90px;
    position: relative;
    width: calc(100% * 2);
    height: calc(100% - 60px);
    transition: 0.3s ease-in-out;
  }
  .page1 {
    overflow-y: scroll;
  }
  .contentPage {
    width: calc(100% / 2);
    height: 100%;
    display: inline-block;
  }
}
/* tab结束 */
.container {
  width: 90%;
  margin: 0 auto;
}
/* 第一页 */
// banner
.ivu-carousel-list img {
  height: 120px;
  width: 100%;
}
#user {
  background-color: #fff;
  margin: 25px 0;
  padding: 10px;
  box-shadow: 0px 2px 1px 1px $shadow;
  border: 1px solid $line;
  .top {
    border-bottom: 1px solid $line;

    #headPic {
      width: 40px;
      height: 40px;
      margin-top: 5px;
    }

    .user {
      margin-bottom: 10px;
      width: calc(100% - 45px);
      .userType {
        border-radius: 2px;
        border: 1px solid $usertype;
        color: $usertype;
        font-size: 12px;
        padding: 2px 4px;
        margin-right: 6px;
        position: relative;
        top: -2px;
      }
      .userStatus {
        border-radius: 2px;
        border: 1px solid $userstatus;
        color: $userstatus;
        font-size: 12px;
        padding: 2px 4px;
        margin-right: 20px;
        position: relative;
        top: -2px;
      }
    }
    .userInfo {
      margin-left: 20px;
      .tel {
        font-size: 16px;
        color: $userf3;
        font-weight: bold;
      }

      .sign {
        margin-top: 2px;
        display: inline-block;
        width: 30px;
        text-align: center;

        & > p {
          font-size: 12px;
        }
        img {
          width: 17px;
          height: 17px;
        }
      }
    }
    .inviter {
      margin-left: 20px;
      font-size: 12px;
      color: $font;
      line-height: 30px;
    }
  }
  .bot {
    text-align: center;
    padding: 10px 10px 0 10px;
    img {
      width: 15px;
      height: 15px;
      vertical-align: middle;
      position: relative;
      top: -2px;
      margin-right: 5px;
    }
    .left {
      width: 50%;
      border-right: 1px solid $line;
    }
    .right {
      width: 50%;
    }
    .money {
      font-size: 14px;
      font-weight: bold;
      color: $userf3;
    }
    .txt {
      font-size: 12px;
      line-height: 30px;
    }
  }
}
#f3 {
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  .f3Item {
    width: 28%;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    padding: 14px;
    border-radius: 2px;

    img {
      width: 24px;
      height: 24px;
      margin-bottom: 5px;
    }
  }
  .f3Item:nth-child(1) {
    background: linear-gradient(97deg, rgb(126, 121, 250), rgb(152, 148, 253));
  }
  .f3Item:nth-child(2) {
    background: linear-gradient(97deg, rgb(254, 93, 146), rgb(252, 137, 175));
  }
  .f3Item:nth-child(3) {
    background: linear-gradient(97deg, rgb(255, 173, 93), rgb(255, 189, 125));
  }
}
.list {
  ul {
    padding: 0 15px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 2px 1px 1px $shadow;
    border: 1px solid $line;

    li {
      border-bottom: 1px solid $line;
      font-size: 14px;
      line-height: 40px;

      img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        position: relative;
        top: -2px;
        margin-right: 8px;
      }

      i {
        margin-top: 10px;
      }
    }
    li:last-child {
      border: none;
    }
  }
}
.btnBox {
  margin: 30px 0;
}
/* 第二页 */
.rankList {
  border-radius: 6px;
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
    .number {
      display: inline-block;
      width: 22px;
      line-height: 22px;
      text-align: center;
      border-radius: 50%;
      margin-right: 15px;
      color: #fff;
      background-color: #c1c1c1;
    }
    // 前三个
    &:nth-child(1) .number {
      // background-color: #e70034;
      color: transparent;
      background: url("../../assets/images/num1.png") no-repeat center center;
      background-size: contain;
    }
    &:nth-child(2) .number {
      // background-color: #f29700;
      color: transparent;
      background: url("../../assets/images/num2.png") no-repeat center center;
      background-size: contain;
    }
    &:nth-child(3) .number {
      // background-color: #8fc41e;
      color: transparent;
      background: url("../../assets/images/num3.png") no-repeat center center;
      background-size: contain;
    }
    .money {
      color: $money;
    }
  }
  li:last-child {
    border: none;
  }
}
/* 底部切换 */
#footer {
  width: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0;

  & > div {
    display: inline-block;
    width: 50%;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    background-color: #3e4c88;
    color: rgba(254, 254, 254, 0.4);
  }
  .active {
    color: #fff;
  }
}
</style>

