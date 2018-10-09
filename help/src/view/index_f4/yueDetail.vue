<template>
    <div>
        <v-header headname="余额明细"></v-header>
        <section id="list">
            <ul>
                <li>
                    <div class="top">
                        <div class="type">
                            <img src="../../assets/images/yueDetail/01.png" alt="">
                            持币生息
                        </div>
                        <div class="time">2018-09-19 14;12;22</div>
                    </div>
                    <div class="detail">
                        <span class="money">
                            -1000 USDT
                        </span>
                    </div>
                    <div class="from">
                        来源用户：183021830
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
#list {
  font-size: 14px;
  & > ul {
    padding: 0 15px;
    background-color: #fff;

    li {
      color: $lightfontcolor;
      margin-bottom: 8px;
      .top {
        border-bottom: 1px solid $line;
        line-height: 40px;
        position: relative;
        .type {
          img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
            position: relative;
            top: -2px;
          }
        }

        .time {
          position: absolute;
          top: 0;
          right: 0;
        }
      }

      .detail {
        line-height: 44px;
      }
      .money {
        color: $userf3;
        font-size: 16px;
        font-weight: bold;
      }
      .from {
        padding-bottom: 10px;
      }
    }
  }
}
</style>

