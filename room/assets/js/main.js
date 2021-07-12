"use strict";

$(document).on('ready', function () {
  // Svg for everybody
  svg4everybody(); // Polifill for IE objectFitImages

  objectFitImages(); // scroll main block

  var mainTitle = $('.main-section__title');
  var hScreen = $('.main-section').height();
  var hMainTitle = $(mainTitle).height();
  var mainPhotos = $('.main-photos__item');
  var footer = $('.footer');
  var footerSecond = $('.footer-second');
  var cursorElBlock = $('.main-photos__item').eq(-2);
  var cursorElBlockH = $(cursorElBlock).offset().top - hScreen;
  var lastScreenPosition = $('.main-photos__item').eq(-1);
  var endPOsition = $(lastScreenPosition).offset().top + $(lastScreenPosition).height();
  var scrollToDownFlag = true;
  var lastPhotoPosition = $(mainPhotos).eq(mainPhotos.length - 2).offset().top + hMainTitle;
  var indent = hScreen - (hScreen / 2 + hMainTitle / 2);
  $(window).on('scroll', function () {
    console.log('lastPhotoPosition', lastPhotoPosition);
    console.log('pageYOffset', pageYOffset);

    if (pageYOffset < indent || pageYOffset > lastPhotoPosition) {
      $(mainTitle).removeClass('active');
    } else {
      $(mainTitle).addClass('active');
    }

    if (pageYOffset > lastPhotoPosition) {
      $(footerSecond).addClass('active');
      $(footer).addClass('hide');
    } else {
      $(footerSecond).removeClass('active');
      $(footer).removeClass('hide');
    }

    if (pageYOffset > cursorElBlockH && scrollToDownFlag) {
      scrollToDownFlag = false;
      $("html, body").animate({
        scrollTop: endPOsition
      }, 1000);
      $('.custom-cursor').css('display', 'flex');
      $('html').css('cursor', 'none');
    } else if (pageYOffset < cursorElBlockH && !scrollToDownFlag) {
      scrollToDownFlag = true;
      $('.custom-cursor').hide();
      $('html').css('cursor', 'default');
    }
  }); // Cursor

  var cursor = $('.custom-cursor');

  function mouseX(event) {
    return event.clientX;
  }

  ;

  function mouseY(event) {
    return event.clientY;
  }

  function positionElement(event) {
    var mouse = {
      x: mouseX(event),
      y: mouseY(event)
    };
    $(cursor).css('top', mouse.y - $(cursor).height() / 2 + 'px');
    $(cursor).css('left', mouse.x - $(cursor).width() / 2 + 'px');
  }

  window.onmousemove = function (event) {
    var _event = event;
    setTimeout(function () {
      positionElement(_event);
    }, 1);
  };
}); //100% = 573
//60% = 344
//1% = 5.7