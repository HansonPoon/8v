<template>
    <div>
        <div id="header">
            <div class="backBox">
                <Icon class="cp" @click="$goBack()" type="ios-arrow-back" size='28' />
            </div>
            我的邀请
            <div @click="$goto('share')" id="detail">
                <Icon type="md-share" />
                邀请
            </div>
        </div>
        <div>
            <v-nodata v-if="inviteList.length==0"></v-nodata>
            <div v-else>
                <ul class="rankList">
                    <li v-for="(item,idx) in inviteList" :key="idx">
                        <img src="../../assets/images/f4/user.png" alt="">
                        <span>{{item.iphone}}</span>
                        <span class="money fr">{{item.money}} USDT</span>
                    </li>
                </ul>
                <div class="fenye">
                    <Page :total="totalCount" :pageSize='pageSize' @on-change='changePageIdx' size="small" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
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
      totalCount: 0,
      pageSize: 6
    };
  },
  methods: {
    changePageIdx() {}
  }
};
</script>


<style lang="scss" scoped>
@import "../../myconfig/public.scss";
@import "../index_f3/f3_public.scss";

.rankList {
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
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      position: relative;
      top: -2px;
      margin-right: 10px;
    }
    // // 前三个
    // &:nth-child(1) .number {
    //   // background-color: #e70034;
    //   color: transparent;
    //   background: url("../../assets/images/num1.png") no-repeat center center;
    //   background-size: contain;
    // }
    // &:nth-child(2) .number {
    //   // background-color: #f29700;
    //   color: transparent;
    //   background: url("../../assets/images/num2.png") no-repeat center center;
    //   background-size: contain;
    // }
    // &:nth-child(3) .number {
    //   // background-color: #8fc41e;
    //   color: transparent;
    //   background: url("../../assets/images/num3.png") no-repeat center center;
    //   background-size: contain;
    // }
    .money {
      color: $money;
    }
  }
  li:last-child {
    border: none;
  }
}
</style>
