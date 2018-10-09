<template>
    <div>
        <v-header headname="我的团队"></v-header>
        <section id="top">
            <div class="top">
                <Icon type="md-person" size=30 color="#fff"/>
                <span class="num">52</span> 人
                <Icon type="ios-archive" size=35 color="#fff"/>
                <span class="num">52</span> %

            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
#top{
    height: 100px;
    border-bottom-left-radius: 26px;
    background:linear-gradient(45deg,#414781,#5C6293);

    .top{
        color: #fff;
        .num{
            font-size: 20px;
        }
    }
}
</style>

