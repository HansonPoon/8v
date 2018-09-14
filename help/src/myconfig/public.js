/*
    自定义全局函数
*/
exports.install = function (Vue, options) {
    // 返回上一页
    Vue.prototype.$goBack = function () {
        this.$router.go(-1);
    };
    // 去指定页
    Vue.prototype.$goto = function (pageName, param) {
        this.$router.push({
            name: pageName,
            params: param
        })
    }
    // 时间戳转格式
    Vue.prototype.$timeToTime = function (list) {
        for (let i = 0; i < list.length; i++) {
            list[i].createTime = timestampToTime(list[i].createTime);
        }
        function timestampToTime(timestamp) {
            var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + "-";
            var M =
                (date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1) + "-";
            var D = date.getDate() + " ";
            var h = date.getHours() + ":";
            var m = date.getMinutes() + ":";
            var s = date.getSeconds();
            return Y + M + D + h + m + s;
        }
    }
    // 消耗门票计算
    Vue.prototype.$useTicket = function (num) {
        if (num == "") {
            return 0;
        } else if (num <= 500) {
            return 2;
        } else if (num <= 1000) {
            return 5;
        } else if (num <= 3000) {
            return 10;
        } else {
            return 30;
        }
    }
}