<template>
  <div id="index">
    <div id="banner">
      <img src="../../assets/01/banner.png" alt="">
    </div>
    <section class="introduce">
      <div class="container clearfix">
        <div class="left fl">
          <div class="title">Game introduction</div>
          <p class="content">LONGWIN is a decentralized social gaming platform built on the fourth generation block chain technology and smart contracts. The LONGWIN solution uses block chaining technology to ensure that customers get the safest and most transparent gaming experience.<br> The purpose of our development platform is to create a commercial block chain, completely free from the limitations of centralized "bankers". We are currently creating an extremely fast and high-performance platform that will be developed and upgraded iteratively with a variety of classic gambling playground desktop games and fun multiplayer / strategy games. LONGWI will always give real-time and completely unpaid betting games, and our games will always maintain 100% verifiable fairness.
          </p>
          <div class="f3">
            <div class="f3item clearfix">
              <img class="fl" src="../../assets/01/f301.png" alt=""> Block chain technology
            </div>
            <div class="f3item clearfix">
              <img class="fl" src="../../assets/01/f302.png" alt=""> Safe and transparent
            </div>
            <div class="f3item clearfix">
              <img class="fl" src="../../assets/01/f303.png" alt=""> Centralization
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../../assets/01/introduce.png" alt="">
        </div>
      </div>

    </section>
    <section class="tec">
      <div class="container clearfix">
        <div class="imgBox fl">
          <img class="" src="../../assets/01/tec.png" alt="">
        </div>
        <div class="txt">
          Use block chaining technology to ensure that customers get the safest and most transparent gaming experience. There is no middleman involved: players create gamble, set rules, and provide current assets to complete payment. Intelligent contract protection funds are automatically allocated according to betting terms and results. The whole process is completely decentralized, safe and self regulating. In addition, the unique social and game elements bring a new level of community participation.
        </div>
      </div>
    </section>
    <section class="rule">
      <div class="container">
        <div class="main">
          <img src="../../assets/01/rule.png" alt="">
          <div class="title">Game rules</div>
          <section class="ruleDetail">
            <div class="ruletitle">Rules of betting</div>
            <p>1. the guarantee mechanism of Betting: with investment. Guarantee the safety of each user's principal.</p>
            <p>2. betting rule: every account can be betting 1 times a day, and the amount of betting is 300 to 3000 USDT per day.</p>
            <p>3. stable sources, high returns. The daily interest rate fluctuated from 1% to 2% according to the actual revenue from platform line.</p>
            <p>4. No previous cost. After the user obtains the income, the platform receives 5% of the user's benefit as the platform service charge.</p>
            <p>5. generous invitation Commission Award. After the successful registration of the betting, the inviter will get the corresponding reward. 
              <br>

              <!-- First prize: 8%;

              Two level reward: 5%;

              Three level reward: 3%;

              Four to ten Awards: 1%;

              Eleven to fifteen Awards: 0.8%;

              After grade Sixteen: 0.6% -->
              </p>
          </section>
          <section class="ruleDetail clearfix">
            <!-- <div class="ruleLeft fl">
              <div class="title">团队奖励</div>
              <p>邀请等级奖励：</p>
              <p>50 人 ：0.1%</p>
              <p>200人：0.2%</p>
              <p>500人：0.3%</p>
            </div> -->
            <div class="ruleRight">
              <div class="title">Invitation level award rules</div>
              <p>1. First prize: 8%</p>
              <p>2. Two level reward: 5%</p>
              <p>3. Three level reward: 3%</p>
              <p>4. Four to ten Awards: 1%</p>
              <p>5. Eleven to fifteen Awards: 0.8%</p>
              <p>6. After grade Sixteen: 0.6%</p>
              <!-- <div class="title">Star rating rules</div>
              <p>1. invitation: the total number of invitations has been increased to 1000USDT by one star.</p>
              <p>2. self Investment: total betting amount to 1000USDT increased by one star.</p>
              <p>3. list: the ranking of accounts is increased according to the actual ranking.</p>
              <p>4. buckle Star: user malicious operation button 1 stars.</p> -->
              <!-- <p>5. star rule changes will be adjusted according to the actual situation.</p> -->
            </div>
          </section>
        </div>
      </div>
    </section>
    <section class="methods">
      <div class="container">
        <div class="title">Walkthrough</div>
        <div class="f3">
          <div class="f3item">
            <div class="imgBox"></div>
            <div class="bot">
              <p class="f3title">
                Social Connect
              </p>
              <p class="txt">Mobile & web payments Accept credit card payments.</p>
            </div>
          </div>
          <div class="f3item">
            <div class="imgBox"></div>
            <div class="bot">
              <p class="f3title">
                Social Connect
              </p>
              <p class="txt">Mobile & web payments Accept credit card payments.</p>
            </div>
          </div>
          <div class="f3item">
            <div class="imgBox"></div>
            <div class="bot">
              <p class="f3title">
                Social Connect
              </p>
              <p class="txt">Mobile & web payments Accept credit card payments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
#banner {
  width: 100%;
  height: 360px;
  img {
    width: inherit;
    height: inherit;
  }
}
// 游戏介绍
.introduce {
  height: 430px;
  color: $fontcolor;
  overflow: hidden;
  font-size: 0;
  margin: 120px 0;

  .left {
    display: inline-block;
    font-size: 16px;
    width: 60%;
    height: 100%;
    padding-right: 10%;

    .title {
      font-size: 35px;
      color: $titlefont;
    }
    .content {
      line-height: 30px;
    }
    .f3 {
      border-top: 1px solid rgb(204, 204, 204);
      padding-top: 30px;
      font-size: 0;
    }
    .f3item {
      display: inline-block;
      width: calc(100% / 3);
      font-size: 14px;
      height: 60px;
      line-height: 60px;

      & > img {
        margin-right: 15px;
      }
    }
  }
  .right {
    display: inline-block;
    width: 40%;
  }
}
// 区块链技术
.tec {
  height: 297px;
  background-color: $gray;
  overflow: hidden;

  .imgBox {
    height: 100%;
    margin-right: 100px;
    img {
      height: 100%;
      width: 460px;
    }
  }
  .txt {
    padding: 100px 0;
    line-height: 30px;
    color: $fontcolor;
  }
}
// 游戏规则
.rule {
  padding: 120px 0;
  color: $fontcolor;

  & > .container {
    position: relative;
    padding-left: 200px;
  }
  .main {
    background-color: $gray;
    padding: 40px 40px 40px 220px;

    & > .title {
      font-size: 35px;
      color: $titlefont;
      line-height: 80px;
    }

    img {
      width: 372px;
      height: 589px;
      position: absolute;
      left: 0px;
      top: 50px;
    }

    .ruleDetail {
      margin-bottom: 40px;
    }
    .ruleDetail:last-child {
      font-size: 0;
    }

    .ruletitle {
      color: $titlefont;
      font-size: 18px;
    }

    .ruleLeft {
      font-size: 16px;

      display: inline-block;
      width: 20%;
      .title {
        color: $titlefont;
        font-size: 18px;
      }
      p {
      }
    }
    .ruleRight {
      font-size: 16px;

      display: inline-block;
      width: 80%;
      .title {
        color: $titlefont;
        font-size: 18px;
      }
      p {
      }
    }
  }
}
// 游戏攻略
.methods {
  display: none;
  background-color: $gray;
  text-align: center;
  padding: 20px 0 120px 0;
  .title {
    font-size: 30px;
    color: $titlefont;
    line-height: 104px;
    margin-bottom: 20px;
  }
  .f3 {
    display: flex;
    justify-content: space-around;
  }
  .f3item {
    width: 30%;
    height: 600px;
  }
  .imgBox {
    height: 322px;
    background-color: $darkfont;
  }
  .bot {
    padding: 40px 20px 0 20px;
    height: calc(100% - 322px);
    background-color: #fff;
  }
  .f3title {
    font-size: 26px;
    line-height: 23px;
    color: rgb(0, 92, 255);
    margin-bottom: 40px;
  }
  .txt {
    color: rgb(75, 75, 75);
    font-size: 20px;
  }
}
</style>

