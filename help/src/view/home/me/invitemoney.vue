
<template>
    <div id="f4Item">
        <v-header headname='邀请金'></v-header>
        <main>
            <div class="top">
                <div class="left">
                    <p>当前邀请金</p>
                    <p class="money">{{invitemoney}} USDT</p>
                </div>
                <div class="right">
                    <Button type="default" style="color:#2d8cf0;border-color:#2d8cf0;">转入余额</Button>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li class="clearfix">
                        <div>
                            利息
                            <span class="time fr">2018-09-05 14:00:00</span>
                        </div>
                        <div>
                            12331312312
                            <span class="time fr">投注 {{1}}</span>
                        </div>
                    </li>
                    <li class="clearfix">
                        利息
                        <span class="time fr">2018-09-05 14:00:00</span>
                    </li>
                </ul>
                <div class="fenye">
                    <Page :total="100" size="small" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      invitemoney: 500.0
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
@import "../../../myconfig/mef4.public.scss";
</style>
