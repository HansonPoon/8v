<template>
  <div id="login">
    <div id="header">
      LONGWIN
    </div>
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="">
    </div>
    <Form ref="form" :model="form" :rules="ruleCustom">
      <FormItem prop="user" style="width:100%;margin-bottom:15%;">
        <Input type="text" v-model="form.user" placeholder="请输入手机号">
        <Icon size='22' type="ios-contact" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="passwd" style="width:100%;margin-bottom:15%;">
        <Input type="password" v-model="form.passwd" placeholder="请输入密码">
        <Icon size='22' type="ios-lock" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="code" style="width:100%;margin-bottom:15%;">
        <Input style="width:55%;" v-model="form.code" placeholder="请输入验证码">
        <Icon size='22' type="md-eye" slot="prepend"></Icon>
        </Input>
        <div id="codeBox" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </FormItem>
      <FormItem style="width:100%;">
        <Button style="width:100%" type="primary" @click="handleSubmit('form')">登录</Button>
      </FormItem>
      <div class="foot">
        <router-link :to="{name:'register'}" tag="span">注册</router-link>
        <router-link style="color:rgb(157,157,157)" :to="{name:'forgetpassword'}" tag="span" class="fr">忘记密码</router-link>
      </div>
    </Form>
  </div>
</template>

<script>
import identify from "@/components/identify/index";

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
    const codeIdentify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (this.form.code !== this.identifyCode) {
        callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    return {
      form: {
        user: "",
        passwd: "",
        code: ""
      },
      ruleCustom: {
        user: [{ validator: phoneIdentify, trigger: "blur" }],
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
        code: [
          {
            validator: codeIdentify,
            trigger: "blur"
          }
        ]
      },
      // 验证码
      formConfig: {
        form: {
          username: "",
          password: "",
          identifyCode: ""
        }
      },
      identifyCodes: "1234",
      identifyCode: "",
      identifyCodeLength: 4
    };
  },
  components: {
    "s-identify": identify
  },
  mounted() {
    // 图片验证码开始
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, this.identifyCodeLength);
  },
  methods: {
    handleSubmit(name) {
      // this.$router.replace({ name: "index" });
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$axios
            .post("hzp/user/login", {
              userPhone: this.form.user,
              pwd: this.form.passwd
            })
            .then(res => {
              if (res.data.code == 0) {
                this.$Message.success("登录成功");
                // 保存id与token
                sessionStorage.setItem("data", JSON.stringify(res.data.data));
                this.$router.replace({ name: "index" });
              } else {
                this.$Message.error(res.data.message);
              }
            });
        } else {
          this.$Message.error("登录失败!");
        }
      });
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, this.identifyCodeLength);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
#login {
  background-color: $bc;
}
#header {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: $headerfont;
  background-color: $hbc;
}
.logo {
  text-align: center;

  img {
    width: 80px;
    margin-top: 40px;
  }
}
form {
  padding: 10%;
}
#codeBox {
  position: absolute;
  top: 2px;
  right: 0;
}
.foot {
  color: $lightblue;
}
</style>
