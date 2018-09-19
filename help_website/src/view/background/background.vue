<template>
    <div id="background">
        <div id="banner">
            <img src="../../assets/02/banner.png" alt="">
        </div>
        <section class="bc">
            <div class="container">
                <p>Havebwin Interactive Entertainment AG（WBAG：  BWIN），前身为betandwin，是GVC Holdings旗下的在线博彩品牌。该集团在直布罗陀，美洲印第安人保护区（加拿大）和伯利兹等国家的国际和地区许可证下经营; 与德国，意大利，墨西哥，克罗地亚，奥地利，法国，和英国在欧洲。</p>
                <div class="redBox">该集团提供体育博彩，扑克，赌场游戏，软技能和技巧游戏，其中大部分收入来自扑克和体育博彩。Bwin在超过25个核心市场拥有超过2000万注册客户。</div>
                <img class="img01" src="../../assets/03/01.png" alt="">
                <p>公司为其子公司提供服务，如营销，财务和行政，企业通信，控制和IT服务。所有业务活动均由持牌子公司管理。该公司于2016年2月被GVC Holdings收购; GVC继续使用Bwin作为品牌。</p>
                <div class="redBox">它于2000年3月在维也纳证券交易所上市，直到该公司于2011年3月与PartyGaming plc 合并，成立了Bwin.Party数字娱乐公司。</div>
                <p>截至2011年3月31日，bwin Interactive Entertainment AG被PartyGaming Plc收购。bwin Interactive Entertainment AG在线游戏行业经营。该公司提供传统的体育博彩和现场投注服务; 在线赌场游戏服务，包括轮盘赌和二十一点; B2C和B2B领域的多人扑克应用; 以及由各种虚拟游戏组成的游戏服务。它还为其客户提供体育内容，如直播视频流，实时比分，统计数据和短信服务。此外，该公司还销售德国足球联赛的第一和第二部门。此外，它还提供与清算付款有关的服务，以及发行预付卡。该公司主要在德国，希腊，意大利，法国和西班牙提供其产品和服务</p>
                <div class="imgBox">
                    <img src="../../assets/03/02.png" alt="">
                    <img src="../../assets/03/03.png" alt="">
                </div>
            </div>
        </section>
        <section class="bc second">
            <div class="container">
                <nav class="clearfix tabBox">
                    <router-link :to="{name:'history'}" tag="div" exact>
                        <div>历史</div>
                    </router-link>
                    <router-link :to="{name:'product'}" tag="div">
                        <div>产品</div>
                    </router-link>
                    <router-link :to="{name:'support'}" tag="div">
                        <div>赞助</div>
                    </router-link>
                    <router-link :to="{name:'prize'}" tag="div">
                        <div>奖项</div>
                    </router-link>
                    <router-link :to="{name:'news'}" tag="div">
                        <div>新闻</div>
                    </router-link>
                    <router-link :to="{name:'responsibility'}" tag="div">
                        <div>责任</div>
                    </router-link>
                </nav>
                <div class="showBox">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
@font-face {
  font-family: "font02";
  src: url("../../../static/file/font02/锐字锐线怒放黑简1.0.ttf");
}
#background {
  color: $fontcolor;
}
.bc {
  margin: 40px 0;
}
.bc > .container {
  text-align: center;
  border: 1px solid rgb(204, 204, 204);
  padding: 40px;
  .img01 {
    width: 60%;
    height: 333px;
    margin: 40px 0;
  }
  .imgBox {
    margin: 60px 0;

    img {
      width: 392px;
      height: 262px;
    }

    img:first-child {
      margin-right: 40px;
    }
  }

  p {
    line-height: 30px;
  }
}
.redBox {
  margin: 40px 0;
  font-family: "font02";
  border-radius: 6px;
  border: 1px solid rgb(204, 204, 204);
  color: rgb(227, 0, 11);
  font-size: 24px;
  line-height: 40px;
  width: 100%;
  padding: 50px 20px;
}
// 第二个部分
.second > .container{
padding: 0;
}
nav.tabBox {
  .router-link-active {
    border-bottom: 1px solid rgb(24,117,240);
    color: rgb(24,117,240);
  }
  line-height: 80px;
  border-bottom: 1px solid rgb(204, 204, 204);
  & > div {
    display: inline-block;
    cursor: pointer;
    margin: 0 20px;
  }
}
.showBox{
  padding: 40px;
}
</style>

