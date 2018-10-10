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
        </main>
    </div>
</template>

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
</style>

