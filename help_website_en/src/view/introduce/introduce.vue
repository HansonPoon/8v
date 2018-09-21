<template>
  <div id="introduce">
    <div id="banner">
      <img src="../../assets/02/banner.png" alt="">
    </div>
    <section class="introduce">
      <div class="container clearfix">
        <div class="f1 item fl">
          <div class="title">Project introduction</div>
          <p>LONGWIN is a decentralized social gaming platform built on the fourth generation block chain technology and smart contracts.</p>
          <p>Gambling industry is a booming industry, but online gambling industry is hindered by many problems. Due to security problems, lack of transparency and social character, unfair odds, high fees and low returns, the online gaming industry is generally considered unfair.</p>
          <p>The LONGWIN solution uses block chaining technology to ensure that customers get the safest and most transparent gaming experience. There is no middleman involved: players create gamble, set rules, and provide current assets to complete payment.</p>
        </div>
        <div class="item">
          <img src="../../assets/02/01.png" alt="">
        </div>
        <div class="item">
          <img src="../../assets/02/02.png" alt="">
        </div>
        <div class="f4 item">
          <p>The LONGWIN solution uses block chaining technology to ensure that customers get the safest and most transparent gaming experience. There is no middleman involved: players create gamble, set rules, and provide current assets to complete payment. In addition, the unique social and game elements bring a new level of community participation.</p>
          <p>Our vision is to develop such an ecosystem around more sophisticated gambling solutions --- and to make LONGWIN digital currency a global gambling standard. To let you know our upcoming functions, join us now and start this adventure.</p>
        </div>
      </div>
    </section>
    <section class="history">
      <div class="container">
        <div class="title">
          The origin of LONGWIN
        </div>
        <div class="main">
          <div class="left">
            <img src="../../assets/02/03.png" alt="">
          </div>
          <div class="right">
            <p>The attraction of gambling is enduring. From the Rome gladiators to the rise of e-sports, players are betting on their favorite activities. The global gambling and gambling market is worth up to US $3 trillion (of which 80% comes from underground gambling). As the online and mobile channels continue to flourish, the industry is preparing for further development.</p>
            <p>Nevertheless, gambling has been affected by the dark side. The frequent scandals of malicious dealers and dishonest institutions have seriously damaged the reputation of the industry. When betters fail, they lose everything. And when they win, they may not receive the promised amount. In addition, the high cost and unreasonable complexity prevent the participation of potential gambling players. In a way, betting has shifted from attractive social activities to risky personal behaviors.</p>
            <p>Even in the fairest execution, traditional gambling is still a highly centralized attempt to deprive players of their rights</p>
            <p>And let the dealer control the overall situation. In short, in the long run, individuals will inevitably lose all their funds to the "makers".</p>
            <p>Market adoption, not just technological advantages, will help to achieve this vision, so we will start from day one to create the ecosystem needed for broad digital currency acceptance. This means that LONGWIN will always be an open game designed to maximize versatility and scalability.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="wish">
      <div class="container clearfix">
        <div class="left">
          <div class="title">vision</div>
          <p>Our goal is to become the leading gaming platform in the market. But our vision is not just that. We believe that the market badly needs a betting digital currency that meets the needs of existing gambling and betting operators. That's why we created LONGWIN, a unique digital currency designed to become a standard for the global betting operator market.</p>
          <p>Market adoption, not just technological advantages, will help to achieve this vision, so we will start from day one to create the ecosystem needed for broad digital currency acceptance. This means that LONGWIN will always be an open game designed to maximize versatility and scalability.</p>
          <p>
            Sounds ambitious? That's how we feel confident. We have a team, vision and passion to achieve this goal. Please read the white paper for more information
          </p>
        </div>
        <div class="right fr">
          <div class="btnBox">
            <a href='static/pdf/web/viewer.html?file=whitePaper.pdf' target='_blank'>
              <img src="../../assets/02/button.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
#introduce {
  color: $fontcolor;
}
#banner {
  height: 180px;
  img {
    height: 100%;
  }
}
// 项目介绍
.introduce {
  padding: 80px 0 40px 0;
  font-size: 0;
  .item {
    font-size: 16px;
    display: inline-block;
    height: 454px;
    width: 50%;
    overflow: hidden;

    p {
      line-height: 30px;
    }
  }
  .f1 {
    padding: 0 5% 5% 0;
    .title {
      font-size: 35px;
      color: $titlefont;
      margin-bottom: 40px;
    }
  }
  .f4 {
    padding: 5%;
  }
}
// 由来
.history {
  padding: 80px 0 40px 0;
  font-size: 0;

  .title {
    font-size: 35px;
    color: $titlefont;
    margin-bottom: 80px;
    text-align: center;
  }
  .main {
    .left {
      display: inline-block;
      width: 510px;

      img {
        width: 100%;
      }
    }
    .right {
      display: inline-block;
      padding: 0 3% 3% 5%;
      width: calc(100% - 510px);
      font-size: 16px;
      p {
        line-height: 30px;
      }
    }
  }
}
// 企业愿景
.wish {
  font-size: 0;
  padding: 40px 0;
  background-color: $gray;
  .left {
    display: inline-block;
    width: 60%;
    font-size: 16px;
    .title {
      font-size: 35px;
      color: $titlefont;
    }

    p {
      line-height: 30px;
    }
  }

  .right {
    display: inline-block;
    width: 40%;
    height: 430px;
    .btnBox {
      margin-top: 30%;
      margin-left: 20%;
      cursor: pointer;
      img {
      }
    }
  }
}
</style>
