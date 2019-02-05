$(function () {
  "use strict"
  $('#open').click(function () {
    $('#mask').fadeIn('Slow');
    $('#modal').slideDown('Slow');
  });
  $('#close, #mask').unbind().click(function () {
    $('#mask').fadeOut('Slow');
    $('#modal').slideUp('Slow');
  });
});