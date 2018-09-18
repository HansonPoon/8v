<template>
    <div id="starrule">
        <v-header headname='星级规则'></v-header>
        <main>
            <p>• 初始注册账户，星级为0</p>
            <p>• 本人投注金额每满10000，星级+1；</p>
            <p>• 普通账户直接邀请下级投注每满1000 USDT，星级+1；</p>
            <p>• 团队账户直接邀请下级投注每满20000 USDT，星级+1；</p>
            <p>• 排单匹配成功后24小时内未完成支付，星级-1；</p>
        </main>
    </div>
</template>

<style lang="scss" scoped>
main {
  background-color: #fff;
  font-size: 14px;
  padding: 10px 15px;
  p {
    line-height: 25px;
  }
}
</style>
