$(document).ready(function(){

    var scrollPos = 0;
    var currentOpacity = 1.0;
//    $(window).scroll(function(){
//        var st = $(this).scrollTop();
//        if (st > scrollPos){
//            if(currentOpacity > 0){
//                currentOpacity = currentOpacity - 0.02
//                $(".quotes-img").css({
//                    "opacity": currentOpacity
//                })
//                $(".quote").css({
//                    "opacity": currentOpacity
//                })
//                $(".author").css({
//                    "opacity": currentOpacity
//                })
//            }
//            // down
//        } else {
//            if(currentOpacity < 1){
//                currentOpacity = currentOpacity + 0.02
//                $(".quotes-img").css({
//                    "opacity": currentOpacity
//                })
//                $(".quote").css({
//                    "opacity": currentOpacity
//                })
//                $(".author").css({
//                    "opacity": currentOpacity
//                })
//            }
//            // up
//        }
    //scrollPos = st;


    if (($(window).scrollTop()) == 0){
        $(".quotes-img").css({
            "opacity": 1
        })
        $(".quote").css({
            "opacity": 1
        })
        $(".author").css({
            "opacity": 1
        })

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


        var st = $(window).scrollTop();
        if (st > scrollPos){
            if(currentOpacity > 0){
                currentOpacity = currentOpacity - 0.008
                $(".quotes-img").css({
                    "opacity": currentOpacity
                })
                $(".quote").css({
                    "opacity": currentOpacity
                })
                $(".author").css({
                    "opacity": currentOpacity
                })
            }
            //down
        } else {
            if(currentOpacity < 1){
                currentOpacity = currentOpacity + 0.008
                $(".quotes-img").css({
                    "opacity": currentOpacity
                })
                $(".quote").css({
                    "opacity": currentOpacity
                })
                $(".author").css({
                    "opacity": currentOpacity
                })
            }
            // up
        }
    scrollPos = st;

    }
});