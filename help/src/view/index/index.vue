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
                    <div class="contentPage fl">
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
                                    <img id="headPic" src="../../assets/images/mainpage/headpic.png" alt="">
                                    <div class="user iBox">
                                        <div class="userInfo">
                                            <span class="tel">{{18181997033}}</span>
                                            <span class="userType">{{'团队账户'}}</span>
                                            <span class="userStatus">{{'正常'}}</span>
                                            <span class="sign fr">
                                                <img src="../../assets/images/mainpage/pen.png" alt="">
                                            </span>
                                        </div>
                                        <div class="inviter">
                                            邀请人ID:{{'01903910'}}
                                        </div>
                                    </div>
                                </div>
                                <div class="bot clearfix">
                                    <div class="left fl">
                                        <div class="money">{{5555555}} USDT</div>
                                        <div class="txt">
                                            <img src="../../assets/images/mainpage/$.png" alt="">
                                            投注金额
                                        </div>
                                    </div>
                                    <div class="right fr">
                                        <div class="money">{{5555555}} USDT</div>
                                        <div class="txt">
                                            <img src="../../assets/images/mainpage/last.png" alt="">
                                            余额
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="f3">
                                <div class="f3Item">
                                    <img src="../../assets/images/mainpage/f3_01.png" alt="">
                                    <p>投注</p>
                                </div>
                                <div class="f3Item">
                                    <img src="../../assets/images/mainpage/f3_02.png" alt="">
                                    <p>提现</p>
                                </div>
                                <div class="f3Item">
                                    <img src="../../assets/images/mainpage/f3_03.png" alt="">
                                    <p>转账</p>
                                </div>
                            </section>

                            <div class="btnBox" align="center">
                                <Button type="primary" size="large" style="width:80%;" @click="showPop=true">退出登录</Button>
                            </div>
                        </div>
                    </div>
                    <!-- 第二页 -->
                    <div class="contentPage fl">

                    </div>
                </v-touch>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      /* 滑动切换 */
      tabItem: ["主页", "排行榜"],
      isActive: 0, //当前显示的页面下标
      /* 滑动切换结束 */
      bannerStartIdx: 0
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
    }
    /* 滑动切换结束 */
  }
};
</script>


<style lang="scss" scoped>
@import "../../myconfig/init.css";
@import "../../myconfig/public.scss";
#index {
  // background-color: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
}
/* tab开始 */
#top {
  width: 100%;
  height: 150px;
  background: url("../../assets/images/mainpage/bc.png") no-repeat center center;
  background-size: contain;
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
    height: calc(100% - 45px);
    transition: 0.3s ease-in-out;
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
// banner
.ivu-carousel-list img {
  height: 120px;
}
#user {
  margin: 25px 0;
  padding: 10px;
  box-shadow: 0px 2px 1px 1px $shadow;
  border: 1px solid $line;
  .top {
    border-bottom: 1px solid $line;

    #headPic {
      width: 40px;
      height: 40px;
    }

    .user {
      margin-bottom: 10px;
    }
    .userInfo {
      margin-left: 20px;
      .tel {
        font-size: 16px;
        color: $userf3;
        font-weight: bold;
      }
      .userType {
        border-radius: 2px;
        border: 1px solid $usertype;
        color: $usertype;
        font-size: 12px;
        padding: 2px 4px;
        margin: 0 6px;
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
      .sign {
        margin-top: 2px;
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
#f3{
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
    .f3Item{
        width: 25%;
        text-align: center;
        font-size: 14px;
        color:#fff;
        border-radius: 2px;
        padding: 14px;

        img{
            width: 24px;
            height: 24px;
            margin-bottom: 5px;
        }
    }
    .f3Item:nth-child(1){
        background: linear-gradient(97deg, rgb(126,121,250) , rgb(152,148,253));
    }
    .f3Item:nth-child(2){
        background: linear-gradient(97deg, rgb(254,93,146) , rgb(252,137,175));
    }
    .f3Item:nth-child(3){
        background: linear-gradient(97deg, rgb(255,173,93) , rgb(255,189,125));
    }
}
</style>

