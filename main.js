 // open toggle for humberger menu
$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('top-nav .nav-link').on('click', function () {
        $('top-nav .nav-link').removeClass('open');
        $('.top-nav').removeClass('open');
    });
});


