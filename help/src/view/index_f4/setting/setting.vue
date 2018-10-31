<template>
  <div id="setting">
    <v-header headname='设置'></v-header>
    <main>
      <ul>
        <li class="cp clearfix">
          <router-link :to="{name:'receiveaddress'}" tag="div">
            收款地址
            <Icon type="ios-arrow-forward" size='22' color='rgb(153,153,153)' />
          </router-link>
        </li>
        <li class="cp clearfix">
          <router-link :to="{name:'tradepasswd'}" tag="div">
            交易密码
            <Icon type="ios-arrow-forward" size='22' color='rgb(153,153,153)' />
          </router-link>
        </li>
        <li class="cp clearfix">
          <router-link :to="{name:'loginpasswd'}" tag="div">
            登录密码
            <Icon type="ios-arrow-forward" size='22' color='rgb(153,153,153)' />
          </router-link>
        </li>
      </ul>
      <div class="btnBox" align="center">
        <Button type="primary" size="large" style="width:80%;" @click="getTouZhuInfo">注销账号</Button>
        <!-- <Button type="primary" size="large" style="width:80%;" @click="showPop=true">注销账号</Button> -->
      </div>
      <!-- 弹出框 -->
      <!-- <div id="alert" v-if="showPop">
        <div id="pop">
          <div class="top">
            <p>确认退出登录？</p>
            <p style='word-break:break-word;margin:20px 0;height:42px;'>{{payAddress}}</p>
            <div class="btns">
              <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
              <Button type="primary" size="default" style="width:45%;" @click="exit">确认</Button>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 弹出框 -->
      <div id="alert" v-if="showPop">
        <div id="pop">
          <div class="top">
            <p style="margin-bottom:20px;color:red;">您当前投注金额 {{touzhuInfo.balance}}；当前已分红 {{touzhuInfo.rewardMoney}}，退回投注 {{touzhuInfo.stakeMoney}}。确认注销后，本帐户所有数据将清零。</p>
            <p style="margin-bottom:35px;color:red;">请谨慎操作！</p>
            <div class="btns">
              <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
              <Button type="primary" size="default" style="width:45%;" @click="exit">确认</Button>
            </div>
          </div>
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
  },
  data() {
    return {
      showPop: false
    };
  },
  methods: {
    getTouZhuInfo() {
      this.$axios.get("hzp/stake/factorSource").then(res => {
        if (res.data.code == 0) {
          //继续请求。。
          const factor = res.data.data;
          this.$axios
            .post(
              "hzp/stake/getExitInfo",
              this.$axiosParam({
                factor,
                userId: this.data.userId,
                userToken: this.data.userToken
              })
            )
            .then(res => {
              if (res.data.code == 0) {
                this.showPop = true;
                this.touzhuInfo = res.data.data;
              }
            });
        } else {
          this.$Message.error(res.data.message);
        }
      });
    },
    exit() {
      this.$axios.get("hzp/stake/factorSource").then(res => {
        if (res.data.code == 0) {
          //继续请求。。
          const factor = res.data.data;
          this.$axios
            .post(
              "hzp/stake/userExit",
              this.$axiosParam({
                factor,
                userId: this.data.userId,
                userToken: this.data.userToken
              })
            )
            .then(res => {
              if (res.data.code == 0) {
                this.$Message.success("注销成功");
                setTimeout(() => {
                  //清除所有本地存储
                  sessionStorage.clear();
                  this.$router.replace({ name: "login" });
                }, 1000);
              } else if (res.data.code == 4009) {
                this.$Message.error(res.data.message);
                setTimeout(() => {
                  this.$goto("changereceiveaddress");
                }, 1000);
              } else {
                this.$Message.error(res.data.message);
              }
            });
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
#setting {
  font-size: 14px;
}
main {
  ul {
    padding: 0 15px;
    background-color: #fff;
    box-shadow: 0px 2px 1px 1px $shadow;
  }
  li {
    line-height: 44px;
    border-bottom: 1px solid $line;

    i {
      float: right;
      margin-top: 12px;
    }
  }
  li:last-child {
    border: none;
  }
}
.btnBox {
  margin-top: 40px;
}
</style>

