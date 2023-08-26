const overlay = $(".overlay");
const navbar = $(".navbar-items");
const body = $("body");
const button = $(".navbar-toggler");

button.click((e) => {
    if(navbar.hasClass("open")){
        overlay.css("opacity", "0");
        body.removeClass("noscroll");
        navbar.removeClass("open");
    } else {
        overlay.css("opacity", "0.5");
        body.addClass("noscroll");
        navbar.addClass("open");
    }
})

// Team slider
$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");

    $(".option").removeClass("show");
    $(this).addClass("show");
});
