$(document).ready(function(){

    if (($(window).scrollTop()) == 0){
        $(".nav-link").css({
                "color": "#FFF",
        });

        $(".header").css({
            "height": "15%",
            "transition": "height .5s",
            "background": "transparent"
        });
        $(".header-logo").attr({
            "src": logo_white,

        });
        $(".header-logo").css({
                "height": "40%",
                "width": "40%",
                "transition": "all .5s"
            })

    } else {
        $(".nav-link").css({
                "color": "#5a5959",
        });

        $(".header").css({
            "height": "10%",
            "transition": "height .5s",
            "background": "#FFF"
        });
        $(".header-logo").attr({
            "src": logo_color,
        });
        $(".header-logo").css({
                "height": "30%",
                "width": "30%",
                "transition": "all .5s"
            })
    }

    window.onscroll = function(){
        if (($(window).scrollTop()) == 0){
            $(".nav-link").css({
                "color": "#FFF",
            });

            $(".header").css({
                "height": "15%",
                "transition": "height .5s",
                "background": "transparent"
            });
            $(".header-logo").attr({
                "src": logo_white,
            });

            $(".header-logo").css({
                "height": "40%",
                "width": "40%",
                "transition": "all .5s"
            })

        } else {
            $(".nav-link").css({
                "color": "#5a5959",
            });

            $(".header").css({
                "height": "10%",
                "transition": "height .5s",
                "background": "#FFF"
            });
            $(".header-logo").attr({
                "src": logo_color,

            });

            $(".header-logo").css({
                "height": "30%",
                "width": "30%",
                "transition": "all .5s"
            })

        }
    }
})