<template>
    <div id="background">
        <div id="banner">
            <img src="../../assets/02/banner.png" alt="">
        </div>
        <section class="bc">
            <div class="container">
                <p>Havebwin Interactive Entertainment AG（WBAG：  BWIN）,Formerly known as betandwin, it is the online gambling brand of GVC Holdings. The Group operates under international and regional licenses in Gibraltar, the Amerindian Reserve (Canada) and Belize; and in Europe with Germany, Italy, Mexico, Croatia, Austria, France and the United Kingdom.</p>
                <div class="redBox">The Group offers sports gambling, poker, casino games, soft skills and skill games, most of which come from poker and sports betting. Bwin has more than 20 million registered customers in over 25 core markets.</div>
                <img class="img01" src="../../assets/03/01.png" alt="">
                <p>The company provides services to its subsidiaries such as marketing, finance and administration, corporate communications, control and IT services. All business activities are managed by a brand company. The company was acquired by GVC Holdings in February 2016, and GVC continued to use Bwin as its brand.</p>
                <div class="redBox">It was listed on the Vienna Stock Exchange in March 2000 until the company merged with PartyGaming PLC in March 2011 to establish Bwin. Park Digital Entertainment.</div>
                <p>The company offers traditional sports betting and live betting services; online casino gaming services, including roulette and 21; multiplayer poker applications in B2C and B2B; and game services comprising a variety of virtual games. It also provides sports content for its customers, such as live video streaming, real-time scoring, statistics and SMS services. In addition, the company also sells the first and second sectors of the German football league. It also provides services related to liquidation payments and issuing prepaid cards. The company mainly provides its products and services in Germany, Greece, Italy, France and Spain.</p>
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
                        <div>History</div>
                    </router-link>
                    <router-link :to="{name:'product'}" tag="div">
                        <div>Product</div>
                    </router-link>
                    <router-link :to="{name:'support'}" tag="div">
                        <div>Support</div>
                    </router-link>
                    <router-link :to="{name:'prize'}" tag="div">
                        <div>Prize</div>
                    </router-link>
                    <router-link :to="{name:'news'}" tag="div">
                        <div>News</div>
                    </router-link>
                    <router-link :to="{name:'responsibility'}" tag="div">
                        <div>Responsibility</div>
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

