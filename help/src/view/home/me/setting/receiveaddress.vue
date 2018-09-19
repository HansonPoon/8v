<template>
    <div id="receiveaddress">
        <v-header headname='收款地址'></v-header>
        <main>
            <p>收款地址：</p>
            <p class="address">{{address}}</p>
            <div class="btnBox">
                <Button type="primary" size="large" style="width:100%;" @click="confirm">修改</Button>
            </div>
        </main>
    </div>
</template>

<script>
export default {
  created() {
    this.data = JSON.parse(sessionStorage.getItem("data"));
    this.$axios.post("hzp/personal/loadPersonal", this.data).then(res => {
        this.address = res.data.data.receivableAddress;
    });
  },
  data() {
    return {
      data: null,
      address: ""
    };
  },
  methods: {
    confirm(){
      if (this.address!=='') {
        this.$Message.info("收款地址已存在，若需修改请联系客服！")
      }else{
        $goto('changereceiveaddress');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../myconfig/public.scss";

main {
  font-size: 14px;
  background-color: #fff;
  padding: 10%;

  & > p {
    line-height: 35px;
    margin-bottom: 10px;
  }
  .address {
    word-wrap: break-word;
    color: $lightfont;
  }
  .btnBox {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
