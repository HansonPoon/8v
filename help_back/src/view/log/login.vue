<template>
  <div id="login">
    <div id="logBox">

      <Form ref="form" :model="form" :rules="ruleCustom">
        <FormItem prop="user" style="width:100%;margin-bottom:15%;">
          <Input type="text" v-model="form.user" placeholder="请输入用户名">
          <Icon size='22' type="ios-contact" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="passwd" style="width:100%;margin-bottom:15%;">
          <Input type="password" v-model="form.passwd" placeholder="请输入密码">
          <Icon size='22' type="ios-lock" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem style="width:100%;">
          <Button style="width:100%" type="primary" @click="handleSubmit('form')">登录</Button>
        </FormItem>
        <div class="foot">
          <router-link :to="{name:'forgetpassword'}" tag="span" class="fr">忘记密码</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //   手机号正则
    const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    const phoneIdentify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } 
      // else if (!myreg.test(value)) {
      //   callback(new Error("手机号格式错误"));
      // } 
      else {
        callback();
      }
    };
    return {
      form: {
        user: "",
        passwd: ""
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
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("登录成功!");
        } else {
          this.$Message.error("登录失败!");
          this.$router.replace({ name: "main" });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../myconfig/public.scss";
#login {
  background: url("../../assets/image/login_bc.jpg");
  position: relative;
}
#logBox{
  width: 400px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
#header {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: $headerfont;
  background-color: $hbc;
}
form {
  padding: 10%;
}
.foot {
  color: $lightblue;
}
</style>
