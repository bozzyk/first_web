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


    var next = $('#next');
    var prev = $('#prev');

    var owl = $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
    });

    $('#next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('#prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});