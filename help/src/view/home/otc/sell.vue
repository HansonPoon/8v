<template>
    <div id="buy">
        <v-header headname='卖单'></v-header>
        <div class="main">
            <div class="main">
                <ul>
                    <li>
                        <span>
                            收款地址
                        </span>
                        <span>
                            <div id="address">{{receiveAddress}}</div>
                            <div class="changeAddressIcon">
                                <Icon size='30' type="ios-browsers-outline" color='#2D8CF0' />
                            </div>
                        </span>
                    </li>
                    <li>
                        <span>当前余额</span>
                        <span>{{balance}}</span>
                    </li>
                    <li>
                        <span>挂单数量</span>
                        <span>
                            <Input v-model="orderNum" placeholder="请输入100的倍数"></Input>
                        </span>
                    </li>
                    <li>
                        <span>消耗门票</span>
                        <span>{{userTicket}}</span>
                    </li>
                    <li>
                        <span>持有门票</span>
                        <span>
                            {{myTicket}}
                            <router-link :to="{name:'otc',params:{index: 2}}" replace tag="span" style="color:#2d8cf0"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购买门票&nbsp;</router-link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="notice">
            <p>温馨提示：单笔挂单最少200 USDT，最多5000 USDT</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      receiveAddress: "0x11707d2AD3768B27988f9bA0ddc0f28aC466F07B",
      balance: "5000.00",
      userTicket: 0,
      myTicket: 300,
      orderNum: 0
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
@import "../../../myconfig/otc.public.scss";
</style>
