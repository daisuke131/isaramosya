$(function () {
    "use strict"
    $('.nagares-accordion .top-nagare-accordion').click(function () {
        $(this).next('.bottom-nagare-accordion').slideToggle();
        $(this).children('i').toggleClass('open');
        $('.nagares-accordion .top-nagare-accordion').not($(this)).next('.bottom-nagare-accordion').slideUp();
        $('.nagares-accordion .top-nagare-accordion').not($(this)).children('i').removeClass('open');
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