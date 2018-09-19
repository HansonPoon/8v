<template>
    <div id="index">
        <div id="banner">
            <img src="../../assets/01/banner.png" alt="">
        </div>
        <section class="introduce">
            <div class="container clearfix">
                <div class="left fl">
                    <div class="title">游戏介绍</div>
                    <p class="content">LONGWIN是一个构建在第4代区块链技术和智能合约之上的去中心化社交博彩平台。LONGWIN解决方案利用区块链技术，确保客户获得最安全和最透明的游戏体验；<br> 我们开发平台的目的是打造一个商业级区块链，完全摆脱中心化“庄家”存在的局限性。我们目前正在创建一个极为快速且高性能的平台，后期将迭代开发升级带有各种各样的经典博彩游乐场桌面游戏以及富有乐趣的多人/战略类游戏。LONGWI将始终赋予即时且完全无需交费的投注游戏，我们的游戏将始终保持100%可验证的公平性。
                    </p>
                    <div class="f3">
                        <div class="f3item clearfix">
                            <img class="fl" src="../../assets/01/f301.png" alt=""> 区块链技术
                        </div>
                        <div class="f3item clearfix">
                            <img class="fl" src="../../assets/01/f302.png" alt=""> 安全透明
                        </div>
                        <div class="f3item clearfix">
                            <img class="fl" src="../../assets/01/f303.png" alt=""> 去中心化
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
                    利用区块链技术，确保客户获得最安全和最透明的游戏体验。没有中间人参与:玩家创建赌局，设置规则，并提供流动资产以完成支付。智能合约保护资金并根据博彩条款和结果自动分配胜局。整个流程完全去中心化、安全且自我调节。除此之外，独特的社交和游戏化元素带来了全新水平的社区参与度
                </div>
            </div>
        </section>
        <section class="rule">
            <div class="container">
                <div class="main">
                    <img src="../../assets/01/rule.png" alt="">
                    <div class="title">游戏规则</div>
                    <section class="ruleDetail">
                        <div class="ruletitle">投注规则</div>
                        <p>1、投注额：200USDT—1000USDT（后期根据实际情况开放额度）</p>
                        <p>2、门票：预先购买。</p>
                        <p>3、每日投注总额度：500000USDT。能否投注成功将依据账号自身星级、投注时间确定。</p>
                        <p>4、投注锁定周期：10天为一期。</p>
                        <p>5、一个账号一个周期：每个账号在完成上一个周期后才能进行下一个周期的投注。</p>
                        <p>6、每期利息合计：15%（本金在锁定期周期内，每日利息：1.5%。）</p>
                        <p>7、提取规则：投注10天完成后，产生的利息分红以及本金用户可以随时提取。</p>
                    </section>
                    <section class="ruleDetail clearfix">
                        <div class="ruleLeft fl">
                            <div class="title">邀请奖励(5%)</div>
                            <p>邀请等级奖励：</p>
                            <p>一级：5%</p>
                            <p>二级：4%</p>
                            <p>三级：3%</p>
                            <p>四级：2%</p>
                        </div>
                        <div class="ruleRight">
                            <div class="title">星级评定规则</div>
                            <p>1、邀请；普通账户：被邀请人总投注额达到1000USDT增加一星。团队账户：被邀请人总投注额达到1000USDT增加一星。</p>
                            <p>2、自投；普通账户：总投注额达到1000USDT增加一星。团队账户：总投注额达到1000USDT增加一星。</p>
                            <p>3、上榜；账户上榜排行根据实际排行名次依次增加星级。</p>
                            <p>4、扣星级；用户恶意操作扣1星。</p>
                        </div>

                    </section>
                </div>
            </div>
        </section>
        <section class="methods">
            <div class="container">
                <div class="title">游戏攻略</div>
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

