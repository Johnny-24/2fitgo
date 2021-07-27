"use strict";

$(document).on('ready', function () {
  // GSAP scroll effect
  var skewSetter = gsap.quickSetter(".skew", "skewY", "deg");
  var proxy = {
    skew: 0
  };
  ScrollTrigger.create({
    onUpdate: function onUpdate(self) {
      var skew = self.getVelocity() / -1000;

      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 1,
          ease: "power3",
          overwrite: true,
          onUpdate: function onUpdate() {
            return skewSetter(proxy.skew);
          }
        });
      }
    }
  }); // scroll main block

  var mainTitle = $('.main-section__title');
  var hScreen = $('.main-section').height();
  var hMainTitle = $(mainTitle).height();
  var mainPhotos = $('.main-photos__item');
  var footer = $('.footer');
  var footerSecond = $('.footer-second');
  var cursorElBlock = $('.main-photos__item').eq(-1);
  var cursorElBlockH = $(cursorElBlock).offset().top - hScreen;
  var lastScreenPosition = $('.main-photos__item').eq(-1);
  var endPOsition = $(lastScreenPosition).offset().top + $(lastScreenPosition).height();
  var scrollToDownFlag = true;
  var lastPhotoPosition = $(mainPhotos).eq(mainPhotos.length - 2).offset().top + hMainTitle;
  var indent = hScreen - (hScreen / 2 + hMainTitle / 2);
  $(window).on('scroll', function () {
    // title
    if (pageYOffset < indent || pageYOffset > lastPhotoPosition) {
      $(mainTitle).removeClass('active');
    } else {
      $(mainTitle).addClass('active');
    } //footer


    if (pageYOffset > lastPhotoPosition) {
      $(footerSecond).addClass('active');
      $(footer).addClass('hide');
      $('.main-photos__item').addClass('fly');
    } else {
      $(footerSecond).removeClass('active');
      $(footer).removeClass('hide');
      $('.main-photos__item').removeClass('fly');
    }

    if ($(window).width() > 768) {
      if (pageYOffset > cursorElBlockH + hScreen / 2 && scrollToDownFlag) {
        scrollToDownFlag = false;
        $('.custom-cursor').css('display', 'flex');
        $('html').css('cursor', 'none');
      } else if (pageYOffset < cursorElBlockH + hScreen / 2 && !scrollToDownFlag) {
        scrollToDownFlag = true;
        $('.custom-cursor').hide();
        $('html').css('cursor', 'default');
      }

      var footer_second_left = $('.footer-second__left');
      var header = $('.header');
      $(footer_second_left).on('mouseleave', function () {
        $('.custom-cursor').css('display', 'flex');
        $('html').css('cursor', 'none');
      });
      $(footer_second_left).on('mouseover', function () {
        $('.custom-cursor').hide();
        $('html').css('cursor', 'default');
      });
      $(header).on('mouseleave', function () {
        if (!scrollToDownFlag) {
          $('.custom-cursor').css('display', 'flex');
          $('html').css('cursor', 'none');
        }
      });
      $(header).on('mouseover', function () {
        $('.custom-cursor').hide();
        $('html').css('cursor', 'default');
      });
    }

    ;
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
});