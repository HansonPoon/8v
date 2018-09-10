<template>
    <div id="myinvite">
        <v-header headname='我的邀请'></v-header>
        <main>
            <ul class="clearfix">
                <li class="fl" v-for="(item,idx) in list" :key="idx">
                    <div class="logo">
                        <Icon type="md-person" size='40' color='#999' />
                    </div>
                    <p>{{item.phone}}</p>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 },
        { phone: 12345678900 }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
main {
  height: calc(100% - 44px);
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fff;
  li {
    text-align: center;
    width: calc(100% / 3);
    padding: 3%;

    & > p {
      margin-top: 10px;
    }
  }
}
</style>
