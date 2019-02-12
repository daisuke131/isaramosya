$(function () {
    "use strict"
    $('.nagares .top-nagare').click(function () {
        $(this).next('.bottom-nagare').slideToggle();
        $(this).children('i').toggleClass("open");
        $('.nagares .top-nagare').not($(this)).next('.bottom-nagare').slideUp();
        $('.nagares .top-nagare').not($(this)).children('i').removeClass("open");
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