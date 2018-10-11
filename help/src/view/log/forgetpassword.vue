<template>
  <div id="forgetpassword">
    <v-header headname='找回密码'></v-header>
    <Form ref="form" :model="form" :rules="ruleCustom">
      <FormItem prop='phone'>
        <Input v-model="form.phone" placeholder="手机号码"></Input>
      </FormItem>
      <FormItem prop='code' id="codeIpt">
        <Input v-model="form.code" placeholder="验证码"></Input>
        <div class="code" @click="getCode" :class="{active:ifSend}">{{msg}}</div>
      </FormItem>
      <FormItem prop='passwd'>
        <Input v-model="form.passwd" type='password' placeholder="新密码：8~20位"></Input>
      </FormItem>
      <FormItem prop='rpasswd'>
        <Input v-model="form.rpasswd" type='password' placeholder="确认密码"></Input>
      </FormItem>
      <FormItem>
        <Button style="width:100%" type="primary" @click="handleSubmit('form')">确认</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    //   手机号正则
    const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    const phoneIdentify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!myreg.test(value)) {
        callback(new Error("手机号格式错误"));
      } else {
        callback();
      }
    };
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
      msg: "获取",
      form: {
        phone: "",
        code: "",
        passwd: "",
        rpasswd: "",
        inviter: "",
        showPop: true
      },
      ruleCustom: {
        phone: [{ validator: phoneIdentify, trigger: "blur" }],
        passwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 8,
            message: "密码至少8位",
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
          this.$axios
            .post("hzp/user/modifyPwd", {
              userPhone: this.form.phone,
              validateCode: this.form.code,
              pwd: this.form.passwd,
              rePwd: this.form.rpasswd,
              type: 1
            })
            .then(res => {
              if (res.data.code == 0) {
                this.$Message.success("修改成功");
                setTimeout(() => {
                  this.$goBack();
                }, 1000);
              } else {
                this.$Message.success(res.data.message);
              }
            });
        } else {
          this.$Message.error("操作失败!");
        }
      });
    },
    getCode() {
      if (this.timer == null) {
        if (this.form.phone == "") {
          this.$Message.error("请先输入手机号!");
        } else {
          this.$axios
            .post("hzp/verifying/ObtainCode", {
              iPhone: this.form.phone,
              type: 1
            })
            .then(res => {
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";

#forgetpassword {
  background-color: $bc;
}
form {
  padding: 10%;
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