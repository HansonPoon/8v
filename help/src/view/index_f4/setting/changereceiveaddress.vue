<template>
  <div id="changereceiveaddress">
    <v-header headname='修改钱包地址'></v-header>
    <main>
      <Input v-model="usdtAddress" placeholder="USDT钱包收款地址" style="width: 100%" />
      <div id="codeIpt">
        <Input v-model="code" placeholder="验证码" />
        <div class="code" @click="getCode" :class="{active:ifSend}">{{msg}}</div>
      </div>
      <Button type="primary" size="large" style="width:100%;margin:15px 0;" @click="confirm">保存</Button>
    </main>
    <div class="notice">
      提示：基于以太网络的USDT收款码
    </div>
    <!-- 弹出框 -->
    <div id="alert" v-if="showPop">
      <div id="pop">
        <div class="top">
          <p align='center'>温馨提示：</p>
          <p style="margin:20px 0 30px;">收款地址只能修改一次，请仔细确认</p>
          <!-- <Input v-model="confirmIpt" style="width:100%;margin:20px 0 30px;" /> -->
          <div class="btns">
            <Button type="default" size="default" style="width:45%;margin-right:10%;" @click="showPop=false">取消</Button>
            <Button type="primary" size="default" style="width:45%;" @click="secendConfirm">确认</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.addr = JSON.parse(sessionStorage.getItem("addr"));
  },
  mounted() {
    this.$Message.config({
      duration: 3
    });
  },
  data() {
    return {
      data: null,
      addr: null,
      address: "",
      usdtAddress: "",
      code: "",
      msg: "获取",
      ifSend: false,
      showPop: false
    };
  },
  methods: {
    getCode() {
      const reg = /^[0-9a-zA-Z]{42}$/;
      // ajax..........
      if (this.timer == null) {
        if (this.usdtAddress == "") {
          this.$Message.error("请先输入钱包收款地址!");
        } else if (!reg.test(this.usdtAddress)) {
          this.$Message.error("请检查收款地址!");
        } else {
          this.$axios.get("hzp/stake/factorSource").then(res => {
            if (res.data.code == 0) {
              //继续请求。。
              const factor = res.data.data;
              this.$axios
                .post(
                  "hzp/verifying/ObtainCode",
                  this.$axiosParam({
                    factor,
                    userId: this.data.userId,
                    userToken: this.data.userToken,
                    type: 3
                  })
                )
                .then(res => {
                  this.$Message.success("验证码已发送");
                });
            } else {
              this.$Message.error(res.data.message);
            }
          });

          this.ifSend = true;
          let count = 60;
          this.timer = setInterval(() => {
            if (count >= 0) {
              this.msg = `获取(${count--})`;
            } else {
              clearInterval(this.timer);
              //   再次获取
              this.msg = "重新获取";
              this.timer = null;
              this.ifSend = false;
            }
          }, 1000);
        }
      }
    },
    secendConfirm() {
      const reg = /^[0-9a-zA-Z]{42}$/;
      if (this.code == "") {
        this.$Message.error("请先输入验证码!");
      } else if (!reg.test(this.usdtAddress)) {
        this.$Message.error("请检查收款地址!");
      } else if (!this.address) {
        // 添加参数
        this.data.address = this.usdtAddress;
        this.data.validateCode = this.code;
        this.$axios.get("hzp/stake/factorSource").then(res => {
          if (res.data.code == 0) {
            //继续请求。。
            const factor = res.data.data;
            this.$axios
              .post(
                "hzp/homePage/updateAddress",
                this.$axiosParam({
                  factor,
                  userId: this.data.userId,
                  userToken: this.data.userToken,
                  address: this.usdtAddress,
                  validateCode: this.code
                })
              )
              .then(res => {
                if (res.data.code == 0) {
                  this.$Message.success(res.data.message);
                  this.$router.go(-1);
                } else {
                  this.$Message.error(res.data.message);
                }
              });
          } else {
            this.$Message.error(res.data.message);
          }
        });
      } else {
        this.$Message.info("收款地址已存在，若需修改请联系客服！");
      }
    },
    confirm() {
      // if (!!this.address) {
      //   this.$Message.info("收款地址已存在，若需修改请联系客服！");
      // } else {
      //   this.showPop = true;
      // }
      const reg = /^[0-9a-zA-Z]{42}$/;
      if (this.code == "") {
        this.$Message.error("请先输入验证码!");
      } else if (!reg.test(this.usdtAddress)) {
        this.$Message.error("请检查收款地址!");
      } else {
        this.$axios.get("hzp/stake/factorSource").then(res => {
          if (res.data.code == 0) {
            //继续请求。。
            const factor = res.data.data;
            this.$axios
              .post(
                "hzp/homePage/updateAddress",
                this.$axiosParam({
                  factor,
                  userId: this.data.userId,
                  userToken: this.data.userToken,
                  address: this.usdtAddress,
                  validateCode: this.code
                })
              )
              .then(res => {
                if (res.data.code == 0) {
                  this.addr.userAddress = this.usdtAddress;
                  // 更新存储
                  sessionStorage.setItem("addr", JSON.stringify(this.addr));
                  this.$Message.success("修改成功");
                  this.$router.go(-1);
                } else {
                  this.$Message.error(res.data.message);
                }
              });
          } else {
            this.$Message.error(res.data.message);
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";

main {
  padding: 10%;
  background-color: #fff;
  box-shadow: 0px 2px 1px 1px $shadow;

  & > div {
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
