
$(document).ready(function() {
    $('#fullpage').fullpage({
        responsiveHeight: 670,
        responsiveWidth: 1240,
        navigation: true,
        navigationPosition: 'right'
    });
});


$.validate({
    form : '.form'
});

$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

    } else {

        $('head').append('<link rel="stylesheet" type="text/css" href="css/animate.css" />'); //подключение файла animation.css если не мобильник
    }
});