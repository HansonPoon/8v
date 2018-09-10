<template>
    <div id="changereceiveaddress">
        <v-header headname='修改收款地址'></v-header>
        <main>
            <Input v-model="usdtAddress" placeholder="USDT钱包收款地址" style="width: 100%" />
            <div id="codeIpt">
                <Input v-model="code" placeholder="验证码" />
                <div class="code" @click="getCode" :class="{active:ifSend}">{{msg}}</div>
            </div>
            <Button type="primary" size="large" style="width:100%;margin:15px 0;" @click="save">保存</Button>
        </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      usdtAddress: "",
      code: "",
      msg: "获取",
      ifSend: false
    };
  },
  methods: {
       getCode() {
      // ajax..........
      if (this.timer == null) {
        this.ifSend = true;
        let count = 60;
        this.timer = setInterval(() => {
          if (count >= 0) {
            this.msg = `获取(${count--})`;
          } else {
            clearInterval(this.timer);
            console.log(this.timer);
            //   再次获取
            this.msg = "重新获取";
            this.timer = null;
            this.ifSend = false;
          }
        }, 1000);
      }
    },
    save() {}
  }
};
</script>


<style lang="scss" scoped>
@import "../../../../myconfig/public.scss";

main {
  padding: 10%;
  background-color: #fff;

  &>div{
      margin-bottom: 20px;
  }

  #codeIpt {
    position: relative;
  }
  .code {
    height: 94%;
    width: 80px;
    text-align: center;
    color: $lightblue;
    position: absolute;
    top: 1px;
    right: 0;
    border: 1px solid $lightblue;
    border-radius: 6px;
    line-height: 30px;

  }
  .active {
    border: 1px solid $lightfont;
    color: $lightfont;
  }
}
</style>
