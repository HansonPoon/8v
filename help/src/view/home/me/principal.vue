<template>
    <div id="f4Item">
        <v-header headname='本金'></v-header>
        <main>
            <div class="top">
                <div class="left">
                    <p>当前本金</p>
                    <p class="money">{{principal}} USDT</p>
                    <div class="daoqi">
                        生息到期：2018-09-10 &nbsp;
                        <Button @click="showPop=true" type="default" style="color:#2d8cf0;border-color:#2d8cf0;">延长10天</Button>
                    </div>
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
                        12331312312
                        <span class="time fr">2018-09-05 14:00:00</span>
                    </li>
                    <li class="clearfix">
                        利息
                        <span class="time fr">2018-09-05 14:00:00</span>
                    </li>
                    <li class="clearfix">
                        12331312312
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
        <!-- 弹出框 -->
        <div id="alert" v-if="showPop">
            <div id="pop">
                <div class="top">
                    <p align='center'>温馨提示：</p>
                    <p style="margin:20px 0 30px;">您确认要额外延长生息周期10天？</p>
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
  data() {
    return {
      principal: 500.0,
      showPop: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../myconfig/public.scss";
@import "../../../myconfig/mef4.public.scss";
</style>