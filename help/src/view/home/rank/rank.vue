<template>
    <div id="rank">
        <div id="tab">
            <div class="tab-nav">
                <div class="tabItem" :class="{'tabActive':isActive==idx}" v-for="(item,idx) in tabItem" :key="idx" @click="tabPage(idx)">{{item}}</div>
                <!-- 横线 -->
                <div id="bottomLine"></div>
            </div>
            <div id="tabContent" class="tabContent clearfix" style="left:0;">
                <div class="contentPage fl">
                    <ul class="list">
                        <li v-for="(item,idx) in interestList" :key="idx">
                            <div class="number">{{item.rank}}</div>
                            <span>{{item.phone}}</span>
                            <span class="money fr">{{item.money}} USDT</span>
                        </li>
                    </ul>
                    <!-- <div class="fenye">
                        <Page :total="100" size="small" />
                    </div> -->
                </div>
                <div class="contentPage fl">
                    <ul class="list">
                        <li v-for="(item,idx) in inviteList" :key="idx">
                            <div class="number">{{item.rank}}</div>
                            <span>{{item.phone}}</span>
                            <span class="money fr">{{item.money}} USDT</span>
                        </li>
                    </ul>
                    <!-- <div class="fenye">
                        <Page :total="100" size="small" />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabItem: ["利息榜", "邀请榜"],
      isActive: 0,
      interestList: [
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        }
      ],
      inviteList: [
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        },
        {
          rank: 1,
          phone: 12345678901,
          money: 123
        }
      ]
    };
  },
  methods: {
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
        idx * pageWidth / 2 + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
#otc {
  height: calc(100% - 50px);
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
    border-bottom: 1px solid #dcdee2;
    position: relative;
  }
  #bottomLine {
    width: calc(100% / 2);
    height: 2px;
    background-color: #2d8cf0;
    position: absolute;
    bottom: 0;
    transition: 0.3s ease-in-out;
  }
  .tabItem {
    width: calc(100% / 2);
    line-height: 44px;
    text-align: center;
  }
  .tabActive {
    color: #2d8cf0;
  }
  // 内容页面
  .tabContent {
    position: relative;
    width: calc(100% * 2);
    height: calc(100% - 38px);
    transition: 0.3s ease-in-out;
    overflow-y: scroll;
  }
  .contentPage {
    width: calc(100% / 2);
    height: 100%;
    display: inline-block;
  }
}
.list {
  font-size: 14px;
  li {
    padding: 10px 15px;
    line-height: 44px;
    margin-bottom: 1px;
    background-color: #fff;
    .number {
      display: inline-block;
      width: 22px;
      line-height: 22px;
      text-align: center;
      border-radius: 50%;
      //   border: 1px solid #333333;
      margin-right: 15px;
      color: #fff;
      background-color: $lightfont;
    }
    // 前三个
    &:nth-child(1) .number {
      background-color: #e70034;
    }
    &:nth-child(2) .number {
      background-color: #f29700;
    }
    &:nth-child(3) .number {
      background-color: #8fc41e;
    }
    .money {
      color: $money;
    }
  }
}
.fenye {
  margin-top: 20px;
  text-align: center;
}
</style>
