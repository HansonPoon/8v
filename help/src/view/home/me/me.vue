<template>
    <div id="me">
        <header>
            个人中心
            <router-link class='cp' :to="{name:'setting'}" tag="div">
                <Icon type="ios-settings-outline" size='24' color='rgb(81,90,110)' />
            </router-link>
        </header>
        <main>
            <div class="user clearfix">
                <div class="logo fl">
                    <Icon type="md-person" size='40' color='#999' />
                </div>
                <div class="user_m">
                    <div class="top">
                        <span>{{userPhone}}</span>&nbsp;&nbsp;&nbsp;
                        <div class="userType">
                            {{accountType}}
                        </div>
                        <div @click="$goto('starrule')" class="star cp">
                            星级：{{star}}
                        </div>
                    </div>
                    <div class="inviter">
                        邀请人：&nbsp;&nbsp;{{inviter?inviter:'无'}}
                    </div>
                </div>

            </div>
            <div class="f4">
                <div class="line">
                    <div @click="$goto('balance',{num:balance})" class="item cp">
                        <p class="title">账户余额</p>
                        <p class="money">
                            {{balance}} USDT
                        </p>
                    </div>
                    <div @click="$goto('principal',{num:principal,principalId,endTime})" class="item cp">
                        <p class="title">本金</p>
                        <p class="money">
                            {{principal}} USDT
                        </p>
                    </div>
                    <div @click="$goto('interest',{num:interest})" class="item cp">
                        <p class="title">利息</p>
                        <p class="money">
                            {{interest}} USDT
                        </p>
                    </div>
                    <div @click="$goto('invitemoney',{num:invite})" class="item cp">
                        <p class="title">邀请金</p>
                        <p class="money">
                            {{invite}} USDT
                        </p>
                    </div>
                </div>
            </div>
            <router-link :to="{name:'myinvite'}" tag="div">
                <section class="secItem cp" style="margin-top: 20px;">
                    <div class="botLine">
                        <img src="../../../assets/images/我的邀请@2x.png"> 我的邀请
                        <span class="fr">
                            {{people}} 人
                            <Icon type="ios-arrow-forward" size='24' color='#999' />
                        </span>
                    </div>
                </section>
            </router-link>
            <router-link :to="{name:'mybuyorder'}" tag="div">
                <section class="secItem cp">
                    <div class="botLine">
                        <img src="../../../assets/images/我的买单@2x.png"> 我的买单
                        <span class="red fr">
                            {{myBuyOrder}} 单
                            <Icon type="ios-arrow-forward" size='24' color='#999' />
                        </span>
                    </div>
                </section>
            </router-link>
            <router-link :to="{name:'mysellorder'}" tag="div">
                <section class="secItem cp">
                    <div class="botLine">
                        <img src="../../../assets/images/我的卖单@2x.png"> 我的卖单
                        <span class="red fr">
                            {{mySellOrder}} 单
                            <Icon type="ios-arrow-forward" size='24' color='#999' />
                        </span>
                    </div>
                </section>
            </router-link>
            <router-link :to="{name:'myticket',params:{num:myTicket}}" tag="div">
                <section class="secItem cp">
                    <div class="botLine" style="border: none;">
                        <img src="../../../assets/images/门票@2x.png"> 我的门票
                        <span class="red fr">
                            {{myTicket}} 张
                            <Icon type="ios-arrow-forward" size='24' color='#999' />
                        </span>
                    </div>
                </section>
            </router-link>
        </main>
        <footer>
            <Button type="primary" size="large" style="width:80%;" @click="showPop=true">退出登录</Button>
        </footer>
        <!-- 弹出框 -->
        <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p style='margin-bottom:80px'>是否要退出登录？</p>
                    <div class="btns">
                        <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
                        <Button type="primary" size="default" style="width:45%;" @click="exit">确认</Button>
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
    this.$axios.post("hzp/personal/loadPersonal", this.data).then(res => {
      const resData = res.data.data;
      this.userPhone = resData.iPhone;
      this.accountType = resData.userType;
      this.inviter = resData.invitationPhone;
      this.star = resData.userLevel;
      this.balance = resData.restMoney;
      this.principal = resData.principalMoney;
      this.interest = resData.interestMoney;
      this.invite = resData.invitationMoney;
      this.people = resData.invitationCount;
      this.myBuyOrder = resData.myBuyOrder;
      this.mySellOrder = resData.mySellOrder;
      this.myTicket = resData.userTicketCount;
      this.principalId = resData.principalId;
      this.endTime = resData.endTime;

      //   存f4储存
      sessionStorage.setItem(
        "f4",
        JSON.stringify({
          balance: this.balance,
          principal: this.principal,
          interest: this.interest,
          invite: this.invite
        })
      );
    });
  },
  data() {
    return {
      data: null,
      /* user */
      userPhone: "00000000000",
      accountType: "团队账户",
      inviter: "",
      star: 0,
      /* f4 */
      balance: 0,
      principal: 0,
      interest: 0,
      invite: 0,
      /* 下面4个 */
      people: 0, //我的邀请
      myBuyOrder: 0,
      mySellOrder: 0,
      myTicket: 0,
      principalId: null, //传送到本金
      endTime: null, //传送到本金
      showPop: false
    };
  },
  methods: {
    exit() {
      this.$axios
        .post("hzp/personal/loginOut", this.data)
        .then(res => {
          this.showPop = false;
          if (res.data.code === 1006) {
            this.$Message.success(res.data.message);
            //   清除所有本地存储
            sessionStorage.clear();
            this.$router.replace({ name: "login" });
          } else {
            this.$Message.error(res.data.message);
            this.$router.replace({ name: "login" });
          }
        })
        .catch(error => {
          if (error) {
            this.$Message.error(error.toString());
            this.$showPop = false;
            this.$router.replace({ name: "login" });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
#me {
  height: calc(100% - 50px);
  overflow-y: scroll;
  overflow-x: hidden;
  header {
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    position: relative;
    background-color: $hbc;

    & > div {
      position: absolute;
      right: 15px;
      top: 0;
    }
  }
  main {
    font-size: 14px;
    .user {
      height: 80px;
      padding: 10px 15px;
      background-color: #fff;

      .userType {
        display: inline-block;
        color: $lightblue;
        border: 1px solid $lightblue;
        font-size: 12px;
        line-height: 12px;
        padding: 2px 4px;
      }

      .logo {
        display: inline-block;
        line-height: 60px;
        margin-right: 10px;
      }
      .user_m {
        display: inline-block;
        line-height: 30px;
        color: $lightfont;
        .top {
          & > span {
            color: $darkfont;
          }
        }
      }
      .star {
        display: inline-block;
        margin-left: 5px;
        color: rgb(255,135,151);
        border: 1px solid rgb(255, 98, 119);
        font-size: 12px;
        line-height: 12px;
        padding: 2px 4px;
      }
    }
    .f4 {
      margin: 1px 0 0 0;
      .line {
        font-size: 0;
        .item {
          line-height: 25px;
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          background-color: #fff;
          width: 50%;
          display: inline-block;

          &:nth-child(1),
          &:nth-child(3) {
            border-right: 1px solid $bc;
          }
          &:nth-child(1),
          &:nth-child(2) {
            border-bottom: 1px solid $bc;
          }
          .title {
            color: $darkfont;
          }
          .money {
            color: $money;
          }
        }
      }
    }
    .secItem {
      line-height: 50px;
      background-color: #fff;
      padding: 0 15px;

      img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        position: relative;
        top: 1px;
      }
    }

    .botLine {
      border-bottom: 1px solid rgb(212, 212, 212);
    }
  }

  footer {
    text-align: center;
    margin: 10% 0;
  }
}
</style>
