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
        </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userPhone: 12345678900,
      accountType: "团队账户",
      inviter: 12345678900,
      star: 18
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
#me {
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
      .star{
          display: inline-block;
          line-height: 60px;
          text-decoration: underline;
          color: #009966;
      }
    }
  }
}
</style>
