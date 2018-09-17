<template>
    <div id="home">
        <router-view></router-view>
        <footer>
            <router-link class="cp" tag="span" :to="{name:'otc'}">OTC</router-link>
            <router-link class="cp" tag="span" :to="{name:'rank'}">排行榜</router-link>
            <router-link class="cp" tag="span" :to="{name:'me'}">个人中心</router-link>
        </footer>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../../myconfig/public.scss';
#home{
    background-color: $bc;
    footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #fff;
        color: $darkfont;
        font-size: 0;

        span{
            display: inline-block;
            width: calc(100% / 3);
            text-align: center;
            font-size: 14px;
            line-height: 50px;
            border-right:1px solid $lightfont;

            &:last-child{
                border-right: none;
            }
        }
    }
    .router-link-active{
        background-color: $bc;
    }
}
</style>
