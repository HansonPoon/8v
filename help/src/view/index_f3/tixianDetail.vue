<template>
    <div>
        <v-header headname="提现明细"></v-header>
        <section id="list">
            <ul>
                <li>
                    <div class="time">2018-09-19 14;12;22</div>
                    <div class="detail">
                        <span class="money">
                            -1000 USDT
                        </span>
                        <span class="status fr">
                            <span v-if="true" class="success">已成功</span>
                            <span v-else class="fail">提现失败：钱包地址错误</span>
                        </span>
                    </div>
                </li>
            </ul>
            <div class="fenye">
                <Page :total="totalCount" :pageSize='pageSize' @on-change='changePageIdx' size="small" />
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      totalCount: 0,
      pageSize: 6
    };
  },
  methods: {
    changePageIdx() {}
  }
};
</script>


<style lang="scss" scoped>
@import "../../myconfig/public.scss";
@import "../index_f3/f3_public.scss";
</style>

