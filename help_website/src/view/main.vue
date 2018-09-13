<template>
    <div id="main">
        <header>
            <div class="container clearfix">
                <div class="logo fl">
                    <img src="../assets/logo/logo.png" alt="">
                </div>
                <nav class="fr">
                    <span>
                        <router-link :to="{name:'index'}" tag="span">首页</router-link>
                    </span>
                    <span>
                        <router-link :to="{name:'introduce'}" tag="span">项目介绍</router-link>
                    </span>
                    <span>
                        <router-link :to="{name:'background'}" tag="span">项目背景</router-link>
                    </span>
                </nav>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div class="top">
                <div class="container">
                    <div class="item">
                        <p class="title">
                            KNIGHT
                        </p>
                        <div class="content">
                            <p>
                                Knight is a multipurpose PSD Template
                            </p>
                            <p>
                                which is the most perfect solution for 
                            </p>
                            <p>
                                business, online shop websites
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <p class="title">
                            KNIGHT
                        </p>
                        <div class="content">
                            <p>
                                Knight is a multipurpose PSD Template
                            </p>
                            <p>
                                which is the most perfect solution for 
                            </p>
                            <p>
                                business, online shop websites
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <p class="title">
                            KNIGHT
                        </p>
                        <div class="content">
                            <p>
                                Knight is a multipurpose PSD Template
                            </p>
                            <p>
                                which is the most perfect solution for 
                            </p>
                            <p>
                                business, online shop websites
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                Copyrights © 2015 by
                <span>Knighthemes. </span>
                All Rights Reserved
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@import "../myconfig/public.scss";
#main {
}
header {
  height: 64px;
  .logo {
    height: 24px;
    position: relative;
    top: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  nav {
    color: $lightfont;
    height: 100%;
    line-height: 64px;
    & > span {
      display: inline-block;
      height: 100%;
      margin-right: 30px;
      text-align: center;
      cursor: pointer;
    }
    .router-link-active {
      color: $darkfont;
      font-weight: bold;
      border-bottom: 1px solid $darkfont;
      padding-bottom: 5px;
    }
  }
}
footer {
  text-align: center;

  .top {
    background-color: rgb(48, 48, 48);
    padding: 100px 0;
    .item {
      width: 391px;
      height: 224px;
      display: inline-block;
    }
    .item:nth-child(2){
        border-left: 1px solid rgba(102,102,102,0.5);
        border-right: 1px solid rgba(102,102,102,0.5);
    }
    .title {
      color: #fff;
      font-size: 25px;
    }
    .content {
      color: $footerfont;
      line-height: 36px;
      font-size: 13px;
    }
  }
  .bottom {
    line-height: 84px;
    font-size: 13px;
    background-color: rgb(37, 37, 37);
    color: $footerfont;
    span {
      color: $footeryellow;
    }
  }
}
</style>

