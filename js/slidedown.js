$(function () {
    "use strict"
    $('.nagares .top-nagare').click(function () {
        $(this).next('.bottom-nagare').slideToggle();
        $(this).children('i').toggleClass("open");
        $('.nagares .top-nagare').not($(this)).next('.bottom-nagare').slideUp();
        $('.nagares .top-nagare').not($(this)).children('i').removeClass("open");
        return false;
    });
});