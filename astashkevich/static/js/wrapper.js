$(document).ready(function(){
    if (($(window).scrollTop()) == 0){
             $(".header").css({"height": "15%",
                               "transition": "height .5s",
                               "background": "transparent"});
             $(".header-logo").attr({
                "height": "40%",
                "width": "40%"
             });
        } else {
             $(".header").css({"height": "10%",
                               "transition": "height .5s",
                               "background": "#FFF"});
             $(".header-logo").attr({
                "height": "30%",
                "width": "30%"
             });

        }

    window.onscroll = function(){
        if (($(window).scrollTop()) == 0){
             $(".header").css({"height": "15%",
                               "transition": "height .5s",
                               "background": "transparent"});
             $(".header-logo").attr({
                "height": "40%",
                "width": "40%"
             });
        } else {
             $(".header").css({"height": "10%",
                               "transition": "height .5s",
                               "background": "#FFF"});
             $(".header-logo").attr({
                "height": "30%",
                "width": "30%"
             });
        }
    }
})