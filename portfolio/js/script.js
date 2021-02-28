$(document).ready(function() {
    $(".header__burger").click(function(event){
        $(".header__burger,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
    $("a.header__link").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});