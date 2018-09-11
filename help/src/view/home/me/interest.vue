<template>
    <div id="f4Item">
        <v-header headname='利息'></v-header>
        <main>
            <div class="top">
                <div class="left">
                    <p>当前利息</p>
                    <p class="money">{{interest}} USDT</p>
                </div>
                <!-- <div class="right">
                    <Button type="default" style="color:#2d8cf0;border-color:#2d8cf0;">我要卖</Button>
                </div> -->
            </div>
            <div class="bottom">
                <ul>
                    <li class="clearfix">
                        利息
                        <span class="time fr">2018-09-05 14:00:00</span>
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
      interest: 500.0
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
@import "../../../myconfig/mef4.public.scss";
</style>
