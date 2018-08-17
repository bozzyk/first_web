$(document).ready(function(){
    $('.categories li a').click(function() {
	    $('.categories li').removeClass('selected');
	    $(this).parent('li').addClass('selected');

        imgWidth = '300px';
        thisItem 	= $(this).attr('rel');
        if(thisItem != "все") {

            $('.news a[rel='+thisItem+']').stop()
                               .animate({'width' : imgWidth,
                                 'opacity' : 1,
                                 'marginRight' : '10px',
                                 'marginLeft' : '10px'
                            });

            $('.news a[rel!='+thisItem+']').stop()
                            .animate({'width' : 0,
                                 'opacity' : 0,
                                 'marginRight' : 0,
                                 'marginLeft' : 0
                            });
        } else {

            $('.news a').stop()
                     .animate({'opacity' : 1,
                         'width' : imgWidth,
                         'marginRight' : '10px',
                         'marginLeft' : '10px'
                    });
        }
        })
})