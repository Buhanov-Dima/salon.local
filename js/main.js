$(document).ready(function(){

	jQuery.scrollSpeed(100, 800);


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
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       40,          // default
        mobile:       false,       // default
        live:         true        // default
      });
      wow.init();
	
});

$(function () {
    var austDay = new Date(2018, 6-1, 25);
    austDay = new Date(2018, 7-1, 31);
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