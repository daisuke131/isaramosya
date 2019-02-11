$(function () {
    "use strict"
    $('.nagares .top-nagare').click(function () {
        var ntd = $(this).children('.fas');
        var nb = $(this).next('.nagares .bottom-nagare');
        ntd.toggleClass('open');
        nb.slideToggle();
        // $('.nagares .top-nagare').not($(this)).next('.nagares .bottom-nagare').slideUp();       
    });
});