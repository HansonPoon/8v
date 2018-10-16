<template>
  <div id="register">
    <!-- <v-header headname='注册'></v-header> -->
    <div id="header">
      <div class="backBox">
        <Icon class="cp" @click="back" type="ios-arrow-back" size='28' />
      </div>
      注册
    </div>
    <Form ref="form" :model="form" :rules="ruleCustom">
      <FormItem prop='phone'>
        <Input v-model="form.phone" placeholder="手机号码"></Input>
      </FormItem>
      <FormItem prop='code' id="codeIpt">
        <Input v-model="form.code" placeholder="验证码"></Input>
        <div class="code cp" @click="getCode" :class="{active:ifSend}">{{msg}}</div>
      </FormItem>
      <FormItem prop='passwd'>
        <Input v-model="form.passwd" type='password' placeholder="密码：8~20位"></Input>
      </FormItem>
      <FormItem prop='rpasswd'>
        <Input v-model="form.rpasswd" type='password' placeholder="确认密码"></Input>
      </FormItem>
      <FormItem>
        <Input :disabled="!!this.r_id" v-model="form.inviter" placeholder="邀请人（选填）"></Input>
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
    // 获取hash
    const hash = window.location.hash;
    const idNum = hash.split("?")[1];
    this.r_id = idNum;
  },
  mounted() {
    // 自动填写
    this.form.inviter = this.r_id;
  },
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
      fromName: "", //从哪个路由过来
      form: {
        phone: "",
        code: "",
        passwd: "",
        rpasswd: "",
        inviter: ""
      },
      ruleCustom: {
        phone: [{ validator: phoneIdentify, trigger: "blur" }],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ],
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
      ifSend: false,
      r_id: null
    };
  },
  methods: {
    //   提交
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$axios
            .post("hzp/user/regist", {
              userPhone: this.form.phone,
              validateCode: this.form.code,
              pwd: this.form.passwd,
              rePwd: this.form.rpasswd,
              inviterId: !!this.r_id ? this.r_id : this.form.inviter, //值为undefined ajax不展示字段
              type: 0
            })
            .then(res => {
              if (res.data.code == 0) {
                this.$Message.success("注册成功");
                this.$router.push({ name: "login" });
              } else {
                this.$Message.error(res.data.message);
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
              type: 0
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
    },
    back() {
      // console.log(this.fromName);
      if (this.fromName) {
        // 从其他页面跳过来的
        this.$goBack();
      } else {
        // 分享链接直接打开的
        this.$router.push("/");
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 把守卫中的数据赋值给vm
      vm.fromName = from.name;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";

#header {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: $headerfont;
  background-color: $hbc;
  .backBox {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}

#register {
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
