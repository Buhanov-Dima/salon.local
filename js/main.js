$(document).ready(function(){


	
});

$(function () {
    var austDay = new Date(2018, 6-1, 25);
    austDay = new Date(2018, 7-1, 31);
    $('#defaultCountdown').countdown({until: austDay});
});