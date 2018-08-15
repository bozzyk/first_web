$(document).ready(function(){
    if (($(window).scrollTop()) == 0){
             $(".header").css({"height": "15%",
                               "transition": "height .5s",
                               "background": "transparent"});
        } else {
             $(".header").css({"height": "10%",
                               "transition": "height .5s",
                               "background": "#FFF"});

        }

    window.onscroll = function(){
        if (($(window).scrollTop()) == 0){
             $(".header").css({"height": "15%",
                               "transition": "height .5s",
                               "background": "transparent"});
        } else {
             $(".header").css({"height": "10%",
                               "transition": "height .5s",
                               "background": "#FFF"});

        }
    }
})