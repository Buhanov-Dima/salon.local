$(document).ready(function(){


	$(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });

    $('.price').on('click', '.b1-hiden', function() {
		$(this).toggleClass('red').siblings('.hidden-price').slideToggle(0);
	});

	$('.wrap-info-map').on('click', '.btn-hidden', function() {
		$(this).toggleClass('red').siblings('.info-map').slideToggle(0);
	});



	wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       40,
        mobile:       false,
        live:         true,
    });
    wow.init();
	

    var austDay = new Date(2030, 6-1, 25);
    $('#defaultCountdown').countdown({until: austDay});


});

$(window).scroll(function() {

    var box1 = $('.wrap-menu').offset().top;
         
    if(box1 > 60){
    $('header').addClass('header-fixed');
    } else{
    $('header').removeClass('header-fixed');
    }

});

