"use strict";

$(document).on('ready', function () {
  // Svg for everybody
  svg4everybody(); // Polifill for IE objectFitImages

  objectFitImages(); // scroll main block
  // let mainTitle = $('.main-section__title');
  // let hScreen = $('.main-section').height();
  // let hMainTitle = $(mainTitle).height();
  // let mainPhotos = $('.main-photos__item');
  // let footer = $('.footer');
  // let footerSecond = $('.footer-second');
  // let cursorElBlock = $('.main-photos__item').eq(-1);
  // let cursorElBlockH = $(cursorElBlock).offset().top - hScreen;
  // let lastScreenPosition = $('.main-photos__item').eq(-1);
  // let endPOsition = $(lastScreenPosition).offset().top + $(lastScreenPosition).height();
  // let scrollToDownFlag = true
  // let lastPhotoPosition = ($(mainPhotos).eq(mainPhotos.length - 2).offset().top) + hMainTitle;
  // let indent = hScreen - ((hScreen / 2) + (hMainTitle / 2));
  //     if(pageYOffset < indent || pageYOffset > lastPhotoPosition) {
  //         $(mainTitle).removeClass('active');
  //     } else {
  //         $(mainTitle).addClass('active');
  //     }
  //     if(pageYOffset > lastPhotoPosition) {
  //         $(footerSecond).addClass('active');
  //         $(footer).addClass('hide');
  //     } else {
  //         $(footerSecond).removeClass('active');
  //         $(footer).removeClass('hide');
  //     }
  //     if(pageYOffset > (cursorElBlockH + (hScreen / 2)) && scrollToDownFlag) {
  //         scrollToDownFlag = false
  //         $("html, body").animate({ scrollTop: endPOsition }, 1000);
  //         $('.custom-cursor').css('display', 'flex');
  //         $('html').css('cursor', 'none');
  //     } else if (pageYOffset < (cursorElBlockH + (hScreen / 2)) && !scrollToDownFlag) {
  //         scrollToDownFlag = true
  //         $('.custom-cursor').hide();
  //         $('html').css('cursor', 'default');
  //     }
  //     let footer_second_left = $('.footer-second__left');
  //     $(footer_second_left).on('mouseleave', function() {
  //         $('.custom-cursor').css('display', 'flex');
  //         $('html').css('cursor', 'none');
  //     });
  //     $(footer_second_left).on('mouseover', function() {
  //         $('.custom-cursor').hide();
  //         $('html').css('cursor', 'default');
  //     });
  // });
  // Cursor
  // let cursor = $('.custom-cursor');
  // function mouseX(event) {
  //     return event.clientX
  // };
  // function mouseY(event) {
  //     return event.clientY
  // }
  // function positionElement(event) {
  //     let mouse = {
  //         x: mouseX(event),
  //         y: mouseY(event)
  //     }
  //     $(cursor).css('top', (mouse.y - $(cursor).height() / 2) + 'px');
  //     $(cursor).css('left', (mouse.x - $(cursor).width() / 2) + 'px');
  // }
  // window.onmousemove = function(event) {
  //     let _event = event
  //     setTimeout(function () {
  //         positionElement(_event)
  //     }, 1)
  // }

  var skewSetter = gsap.quickSetter(".main-photos__item", "skewY", "deg");
  var proxy = {
    skew: 0
  };
  ScrollTrigger.create({
    onUpdate: function onUpdate(self) {
      var skew = self.getVelocity() / -600;

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
  });
}); //100% = 573
//60% = 344
//1% = 5.7