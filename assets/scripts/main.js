$(document).ready(function () {

    // Cases animation
    AOS.init({
        duration: 700
    });

    // Intro Banner animation
    $('.intro-banner-container').addClass('show');

    // Back To Top animation
    var $backToTop = $(".back-to-top");
    $backToTop.hide();


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

    $backToTop.on('click', function (e) {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    // Menu
    $('.mobile-menu').on('click', function () {
        $('body').toggleClass('menu-open');
    });

    /* init Jarallax */
    $(window).on('load resize orientationchange', function () {
        if ($(window).width() > 768) {
            jarallax(document.querySelectorAll('.jarallax'));
        }
    });

});
