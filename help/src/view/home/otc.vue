<template>
    <div id="otc">
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">标签一的内容</TabPane>
            <TabPane label="标签二" name="name2">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3">标签三的内容</TabPane>
        </Tabs>
        <div id="tab">
            <div class="tab-nav">
                <div class="tabItem" :class="{'tabActive':isActive==idx}" v-for="(item,idx) in tabItem" :key="idx" @click="tabPage(idx)">{{item}}</div>
                <!-- 横线 -->
                <div id="bottomLine"></div>
            </div>
            <div id="tabContent" class="tabContent clearfix" style="left:0;">
                <div class="contentPage fl">内容一</div>
                <div class="contentPage fl">内容2</div>
                <div class="contentPage fl">内容3</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabItem: ["买单", "卖单", "门票"],
      isActive: ""
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
        idx * pageWidth / 3 + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
#otc {
  height: calc(100% - 50px);
}
#tab {
  width: 100%;
  height: 100%;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  .tab-nav {
    display: flex;
    border-bottom: 1px solid #dcdee2;
    position: relative;
  }
  #bottomLine {
    width: calc(100% / 3);
    height: 2px;
    background-color: #2d8cf0;
    position: absolute;
    bottom: 0;
    transition: 0.3s ease-in-out;
  }
  .tabItem {
    width: calc(100% / 3);
    padding: 8px 16px;
    text-align: center;
  }
  .tabActive {
    color: #2d8cf0;
  }
  // 内容页面
  .tabContent {
    position: relative;
    width: calc(100% * 3);
    min-height: calc(100% - 38px);
    transition: 0.3s ease-in-out;
  }
  .contentPage {
    width: calc(100% / 3);
    height: 100%;
    display: inline-block;
  }
}
</style>
