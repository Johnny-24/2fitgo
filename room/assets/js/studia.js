"use strict";

$(document).on('ready', function () {
  var studiaLastBlock = $('.studia__last-block');
  var HstudiaLastBlock = $('.studia__last-block').height();
  var PosstudiaLastBlock = $('.studia__last-block').offset().top;
  var windowHeight = $(window).height() - 200;
  var footer = $('.footer');
  var footerSecond = $('.footer-second');
  $(window).on('scroll', function () {
    //footer
    console.log('PosstudiaLastBlock', PosstudiaLastBlock);
    console.log('pageYOffset', pageYOffset);

    if (pageYOffset + windowHeight > PosstudiaLastBlock) {
      $(footerSecond).addClass('active');
      $(footer).addClass('hide');
      $('.main-photos__item').addClass('fly');
    } else {
      $(footerSecond).removeClass('active');
      $(footer).removeClass('hide');
      $('.main-photos__item').removeClass('fly');
    }
  });
});