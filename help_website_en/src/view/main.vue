<template>
  <div id="main">
    <header>
      <div class="top">
        <div class="container clearfix">
          <div class="lang fr">
            <span>
              <img src="../assets/01/lang.png" alt=""> Language
            </span>
            <ul>
              <li>
                <a href="http://cn.longwin.io">中文</a>
              </li>
              <li>
                <a href="#">ENGLISH</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom container clearfix">
        <div class="logo fl">
          <img src="../assets/logo/logo.png" alt="">
        </div>
        <nav class="fr">
          <span>
            <router-link :to="{name:'index'}" tag="span">Home</router-link>
          </span>
          <span>
            <router-link :to="{name:'introduce'}" tag="span">Introduction</router-link>
          </span>
          <span>
            <router-link :to="{name:'background'}" tag="span">Establishment</router-link>
          </span>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
      <div class="go-top">
        <div class="box">
          <!-- <img src="./../assets/logo/backTop.png" alt=""> -->
        </div>
        <button @click="goTop" ref="btn" title="回到顶部"></button>
      </div>
    </main>
    <footer>
      <div class="top">
        <div class="container">
          <div class="item">
            <p class="title">
              Longwin Wallet
            </p>
            <div class="content">
              <p>
                In Longwin, players will not use
              </p>
              <p>
                Legal tender (e.g. euro or US dollar) for gambling.
              </p>
              <p>
                They will use LWIN token.
              </p>
            </div>
          </div>
          <div class="item">
            <p class="title">
              Intelligent contract
            </p>
            <div class="content">
              <p>
                Intelligent contracts are essentially digital contracts.
              </p>
              <p>
                When a condition is satisfied 
              </p>
              <p>
                The code will execute automatically.
              </p>
            </div>
          </div>
          <div class="item">
            <p class="title">
              Centralization
            </p>
            <div class="content">
              <p>
                The whole process is completely decentralized
              </p>
              <p>
                transparent and self regulating.
              </p>
              <p>
                Make sure betting terms are respected and not manipulated.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        Copyrights © 2018 by
        <span>LONGWIN. </span>
        All Rights Reserved
      </div>
    </footer>
  </div>
</template>

<script>
let timer = null;
export default {
  data() {
    return {
      isTop: true
    };
  },
  mounted() {
    this.needScroll();
  },
  methods: {
    needScroll() {
      let clientHeight = document.documentElement.clientHeight;
      let obtn = this.$refs.btn;
      window.onscroll = function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight) {
          obtn.style.display = "block";
        } else {
          obtn.style.display = "none";
        }
        if (!this.isTop) {
          clearInterval(timer);
        }
        this.isTop = false;
      };
    },
    goTop() {
      timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../myconfig/public.scss";
#main {
}
header {
  .top {
    line-height: 36px;
    background-color: #000;
    color: #fff;

    span {
      cursor: pointer;
    }

    img {
      vertical-align: middle;
    }

    .lang {
      position: relative;
    }
    .lang:hover {
      & > ul {
        display: block;
      }
    }
    .lang ul {
      display: none;
      position: absolute;
      left: -15px;
      top: 20px;
      background-color: #fff;
      text-align: center;
      padding: 20px 10px;
      border-radius: 6px;
      border: 1px solid $fontcolor;
      & > li {
        width: 100%;
      }

      a {
        color: $fontcolor;
        text-decoration: none;
        &:hover {
          color: $darkfont;
          text-decoration: underline;
        }
      }
    }
  }
  .bottom {
    height: 64px;
  }
  .logo {
    height: 52px;
    position: relative;
    top: 5px;
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
      margin-left: 30px;
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
    .item:nth-child(2) {
      border-left: 1px solid rgba(102, 102, 102, 0.5);
      border-right: 1px solid rgba(102, 102, 102, 0.5);
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
.go-top {
  width: 100%;
  .box {
    img {
      float: left;
      width: 100%;
    }
  }
  button {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    border: none;
    background-image: url("./../assets/logo/backTop.png");
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: center center;
    display: none;
    cursor: pointer;
    background-color: transparent;
    outline: none;
  }
}
</style>

