/*
    自定义全局函数
*/
exports.install = function (Vue, options) {
    // 返回上一页
    Vue.prototype.goBack = function () {
        this.$router.go(-1);
    };
    Vue.prototype.$goto = function (pageName,param) {
        this.$router.push({
            name:pageName,
            params:param
        })
    }
}