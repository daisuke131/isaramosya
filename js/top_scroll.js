$(function () {
  "use strict"
  $(window).scroll(function() {
    if($(this).scrollTop() > 60) {
      $('#top_scroll').fadeIn();
    } else {
      $('#top_scroll').fadeOut();
    }
  });
  $('#top_scroll').click(function () {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  });


  $('#contactbtn, #infobtn-bg').click(function () {
    // $('#contact-wrapper').scrollTop();
    $("html,body").animate({scrollTop:$('#contact-wrapper').offset().top});
    // scrollTo('#contact-wrapper');
    // $('#contact-wrapper').animate({scrollTop: 0}, 500);
    return false;
  });
});