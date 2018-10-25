function loadZh() {
    $.i18n.properties({
        name: "strings", //属性文件名     命名格式： 文件名_国家代号.properties
        path: "./static/plugin/i18n/", //注意这里路径是你属性文件的所在文件夹
        mode: "map",
        language: "zh", //这就是国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties
        callback: function() {
            $("[data-locale]").each(function() {
                $(this).html($.i18n.prop($(this).data("locale")));
            });
        }
    });
}
function loadEn() {
    $.i18n.properties({
        name: "strings", //属性文件名     命名格式： 文件名_国家代号.properties
        path: "./static/plugin/i18n/", //注意这里路径是你属性文件的所在文件夹
        mode: "map",
        language: "en", //这就是国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties
        callback: function() {
            $("[data-locale]").each(function() {
                $(this).html($.i18n.prop($(this).data("locale")));
            });
        }
    });
}


//默认英文
loadEn()


$('body').css('opacity', 1);

$(window).on('load', function() {
    new Wave('wavebox');
});

/* 语言切换 */
$('.zhBtn').click(function () {
    loadZh()
})
$('.enBtn').click(function () {
    loadEn()
})