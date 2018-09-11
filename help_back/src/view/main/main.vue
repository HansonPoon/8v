<template>
    <div id="main">
        <header class="clearfix">
            <div class="left">
                <div class="logo fl"></div>
                GHCC互助系统管理后台
            </div>
            <div class="right fr">
                欢迎您~
                <span style="font-weight:bold;font-size:16px;">
                {{userName}}
                </span>
                <span>修改密码</span>
                <span>退出登录</span>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userName:'123'
        }
    }
}
</script>


<style lang="scss" scoped>
#main{

}
header{
    height: 88px;
    background-color: #333333;
    position: relative;
    color: #fff;
    line-height: 88px;
    padding: 0 20px;
    .logo{
        width: 60px;
        height: 60px;
        background-color: #fff;
        margin-top: 12px;
        margin-right: 20px;
    }
    .left,.right{
        display: inline-block;
    }
    .right{
        font-size: 14px;
    }
    .right>span{
        margin: 0 15px;
        font-size: 14px;
        color: #999;
        cursor: pointer;
    }
}
</style>

