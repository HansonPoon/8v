<template>
    <div id="me">
        <header>
            个人中心
            <router-link :to="{name:'setting'}" tag="div">
                <Icon type="ios-settings" size='24' color='#2d8cf0' />
            </router-link>
        </header>
        <main>
            <div class="user clearfix">
                <div class="logo fl">
                    <Icon type="md-person" size='40' color='#999' />
                </div>
                <div class="user_m">
                    <div class="top">
                        <span>{{userPhone}}</span>&nbsp;&nbsp;&nbsp;{{accountType}}
                    </div>
                    <div class="inviter">
                        邀请人：&nbsp;&nbsp;{{inviter}}
                    </div>
                </div>
                <span class="star fr">
                    星级：{{star}}
                </span>
            </div>
            <div class="f4">
                <div class="line">
                    <div class="item">
                        <p class="title">账户余额</p>
                        <p class="money">
                            {{balance}} USDT
                        </p>
                    </div>
                    <div class="item">
                        <p class="title">本金</p>
                        <p class="money">
                            {{principal}} USDT
                        </p>
                    </div>
                    <div class="item">
                        <p class="title">利息</p>
                        <p class="money">
                            {{interest}} USDT
                        </p>
                    </div>
                    <div class="item">
                        <p class="title">邀请金</p>
                        <p class="money">
                            {{invite}} USDT
                        </p>
                    </div>
                </div>
            </div>
            <section class="secItem">
                我的邀请
                <span class="fr">
                    <router-link :to="{name:'myinvite'}" tag="div">
                        {{people}} 人
                        <Icon type="ios-arrow-forward" size='30' color='#999' />
                    </router-link>
                </span>
            </section>
            <section class="secItem">
                我的买单
                <span class="red fr">
                    <router-link :to="{name:'mybuyorder'}" tag="div">
                        {{myBuyOrder}} 单
                        <Icon type="ios-arrow-forward" size='30' color='#999' />
                    </router-link>
                </span>
            </section>
            <section class="secItem">
                我的卖单
                <span class="red fr">
                    <router-link :to="{name:'mysellorder'}" tag="div">
                        {{mySellOrder}} 单
                        <Icon type="ios-arrow-forward" size='30' color='#999' />
                    </router-link>
                </span>
            </section>
        </main>
        <footer>
              <Button type="primary" size="large" style="width:80%;" @click="exit">退出登录</Button>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      /* user */
      userPhone: 12345678900,
      accountType: "团队账户",
      inviter: 12345678900,
      star: 18,
      /* f4 */
      balance: 40000,
      principal: 3123123,
      interest: 8983249,
      invite: 21390821,
      /* 下面3个 */
      people: 10, //我的邀请
      myBuyOrder: 1,
      mySellOrder: 1
    };
  },
  methods: {
      exit(){

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
        line-height: 60px;
        text-decoration: underline;
        color: #009966;
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
            border-right: 2px solid $bc;
          }
          &:nth-child(1),
          &:nth-child(2) {
            border-bottom: 2px solid $bc;
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
      line-height: 62px;
      background-color: #fff;
      margin: 10px 0;
      padding: 0 15px;

      .red {
        color: $money;
      }
    }
  }
  footer{
      text-align: center;
      margin: 10% 0;
  }
}
</style>
