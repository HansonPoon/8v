<template>
    <div id="setting">
        <v-header headname='设置'></v-header>
        <main>
            <ul>
                <li class="cp clearfix">
                    <router-link :to="{name:'receiveaddress'}" tag="div">
                        收款地址
                        <Icon type="ios-arrow-forward" size='30' color='#999' />
                    </router-link>
                </li>
                <li class="cp clearfix">
                    <router-link :to="{name:'tradepasswd'}" tag="div">
                        交易密码
                        <Icon type="ios-arrow-forward" size='30' color='#999' />
                    </router-link>
                </li>
                <li class="cp clearfix">
                    <router-link :to="{name:'loginpasswd'}" tag="div">
                        登录密码
                        <Icon type="ios-arrow-forward" size='30' color='#999' />
                    </router-link>
                </li>
            </ul>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../../myconfig/public.scss";
#setting {
  font-size: 14px;
  color: $darkfont;
}
main {
  li {
    line-height: 62px;
    background-color: #fff;
    margin-bottom: 1px;
    padding: 0 15px;

    i {
      float: right;
      margin-top: 16px;
    }
  }
}
</style>

