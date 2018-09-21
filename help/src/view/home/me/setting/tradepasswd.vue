<template>
  <div id="tradepasswd">
    <v-header headname='交易密码'></v-header>
    <Form ref="form" :model="form" :rules="ruleCustom">
      <FormItem prop='code' id="codeIpt">
        <Input v-model="form.code" placeholder="验证码"></Input>
        <div class="code" @click="getCode" :class="{active:ifSend}">{{msg}}</div>
      </FormItem>
      <FormItem prop='passwd'>
        <Input v-model="form.passwd" type="password" placeholder="密码：至少6位"></Input>
      </FormItem>
      <FormItem prop='rpasswd'>
        <Input v-model="form.rpasswd" type="password" placeholder="确认密码"></Input>
      </FormItem>
      <FormItem>
        <Button style="width:100%" type="primary" @click="handleSubmit('form')">确认</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  created() {
    // 读本地储存和首次ajax...
    this.data = JSON.parse(sessionStorage.getItem("data"));
  },
  data() {
    // 确认密码
    const repeatpasswd = (rule, value, callback) => {
      if (value !== this.form.passwd) {
        callback(new Error("两次密码不一致"));
      } else if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      data: null,
      msg: "获取",
      form: {
        code: "",
        passwd: "",
        rpasswd: ""
      },
      ruleCustom: {
        passwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码至少6位",
            trigger: "blur"
          }
        ],
        rpasswd: [{ validator: repeatpasswd, trigger: "blur" }]
      },
      timer: null,
      ifSend: false
    };
  },
  methods: {
    //   提交
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if (this.form.code == "") {
            this.$Message.error("验证码不能为空!");
          } else {
            // 添加参数
            this.data.transactionPassword = this.form.passwd;
            this.data.confirmPwd = this.form.rpasswd;
            this.data.validateCode = this.form.code;
            this.$axios
              .post("hzp/personal/updateTransactionPassword", this.data)
              .then(res => {
                this.$Message.success(res.data.message);
                if (res.data.code == 1005) {
                  this.$router.go(-1);
                }
              });
          }
        } else {
          this.$Message.error("操作失败!");
        }
      });
    },
    getCode() {
      // ajax..........
      if (this.timer == null) {
        // 添加参数
        this.data.type = 4;
        this.$axios.post("hzp/verifying/ObtainCode", this.data).then(res => {
          this.$Message.success(res.data.message);
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../myconfig/public.scss";

#register {
  background-color: $bc;
}
form {
  padding: 10%;
  background-color: #fff;
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
}
.active {
  border: 1px solid $lightfont;
  color: $lightfont;
}
</style>

