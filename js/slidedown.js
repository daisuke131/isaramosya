$(function () {
    "use strict"
    var $win = $(window);
    $(window).resize(function () {
        // var windowWidth = $win.width();
        if (window.matchMedia('(min-width: 1150px)').matches) {
            // $('.bottom-nagare').slideDown();
            $('.top-nagare').removeClass('slide-btn');
            $('.bottom-nagare').removeClass('slide-down');
        } else {
            // $('.bottom-nagare').slideUp();
            $('.top-nagare').addClass('slide-btn');
            $('.bottom-nagare').addClass('slide-down');
        }
    });

    $('.nagares .slide-btn').click(function () {
        $(this).next('.slide-down').slideToggle();
        $(this).children('i').toggleClass("open");
        $('.nagares .slide-btn').not($(this)).next('.slide-down').slideUp();
        $('.nagares .slide-btn').not($(this)).children('i').removeClass("open");
        return false;
    });





    $('.qaxx .top-qaxx').click(function () {
        $(this).next('.bottom-qaxx').slideToggle();
        $(this).children('i').toggleClass("open");
        $('.qaxx .top-qaxx').not($(this)).next('.bottom-qaxx').slideUp();
        $('.qaxx .top-qaxx').not($(this)).children('i').removeClass("open");
        return false;
    });
});