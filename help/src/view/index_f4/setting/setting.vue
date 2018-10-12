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
        <Button type="primary" size="large" style="width:80%;" @click="showPop=true">退出登录</Button>
      </div>
      <!-- 弹出框 -->
      <div id="alert" v-if="showPop">
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
    exit() {
      this.$axios
        .post("hzp/homePage/outLogin", this.data)
        .then(res => {
          this.showPop = false;
          if (res.data.code === 0) {
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

