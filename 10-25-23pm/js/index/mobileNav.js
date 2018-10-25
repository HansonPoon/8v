$(".showNav").click(function() {
    $(this).css("transform", "scale(0)");
    $(".closeNav").css("transform", "scale(1)");
    $(".menu").css("left", "0");
});
$(".closeNav").click(function() {
    $(this).css("transform", "scale(0)");
    $(".showNav").css("transform", "scale(1)");
    $(".menu").css("left", "-100%");
});
$(".menu li").click(function() {
    $(".closeNav").css("transform", "scale(0)");
    $(".showNav").css("transform", "scale(1)");
    $(".menu").css("left", "-100%");
});
