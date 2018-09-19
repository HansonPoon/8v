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
                        <p>1、Amount of Betting: 200USDT - 1000USDT (late opening according to actual situation)</p>
                        <p>2、Admission: pre purchase.</p>
                        <p>3、Total daily bet: 500000USDT. The success of betting will be determined according to the star rating and betting time of the account itself.</p>
                        <p>4、Betting lock cycle: 10 days for a period.</p>
                        <p>5、One account for one cycle: Each account can only bet on the next cycle after completing the previous cycle.</p>
                        <p>6、The total interest for each period is 15%: the principal interest is 1.5% per day during the period of lock up.）</p>
                        <p>7、Rule of extraction: dividends paid on the 10 day after betting, and the principal user can withdraw at any time.</p>
                    </section>
                    <section class="ruleDetail clearfix">
                        <div class="ruleLeft fl">
                            <div class="title">Invitation Award (5%)</div>
                            <p>Invitation level award:</p>
                            <p>Level 1: 5%</p>
                            <p>Level 2：4%</p>
                            <p>Level 3：3%</p>
                            <p>Level 4：2%</p>
                        </div>
                        <div class="ruleRight">
                            <div class="title">Star rating rules</div>
                            <p>1、Invitation; ordinary accounts: the total number of invitations has been increased to 1000USDT by one star. Team account: the total number of invitations has been increased to 1000USDT by one star.</p>
                            <p>2、Self investment; ordinary account: total betting amount to 1000USDT increased by one star. Team account: total betting amount to 1000USDT increased by one star.</p>
                            <p>3、The list is ranked by the actual ranking.</p>
                            <p>4、Button star; user malicious operation button 1 stars.</p>
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

