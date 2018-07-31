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

    $('form').on('submit', sendForm);

    function sendForm (e) {

        e.preventDefault();
        var $form = $(this);
        var hasError = false;
        var $nameInput = $form.find('input[name="name"]');
        var $phoneInput = $form.find('input[name="phone"]');
        var valPhone = $phoneInput.length > 0 ? $phoneInput.val() : '';
        var valName = $nameInput.length > 0 ? $nameInput.val() : '';

        if (valPhone == '') {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        }

        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);

        if (hasError) {
            return false;
        }

        var obj = {
            phone: valPhone,
            name: valName,
        };

        $.ajax({
            type: "POST",
            url: "/mailpost.php",
            data: obj,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            beforeSend: function(){
            },
            success: function(html){
                $phoneInput.val("");
                $nameInput.val("");
                $.fancybox.close(true);
            },
        });
    }

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

