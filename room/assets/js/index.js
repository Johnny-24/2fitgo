"use strict";

$(document).on('ready', function () {
  // GSAP scroll effect
  // var skewSetter = gsap.quickSetter(".it", "skewY", "deg");
  // var proxy = {skew:0};
  // ScrollTrigger.create({
  //     onUpdate: self => {
  //         var skew = self.getVelocity() / -1000;
  //         if(Math.abs(skew) > Math.abs(proxy.skew)) {
  //             proxy.skew = skew;
  //             gsap.to(proxy, { skew:0, duration:1, ease:"power3", overwrite:true, onUpdate: () => skewSetter(proxy.skew) })
  //         }
  //     }
  // });
  // scroll main block
  // let mainTitle = $('.main-section__title'); // Главный заголовок
  // let hScreen = $('.main-section').height(); // Главный экран
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
  // SoftScroll
  var html = document.documentElement;
  var body = document.body;
  var scroller = {
    target: document.querySelector(".scroll-container"),
    ease: 0.09,
    // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0
  };
  var requestId = null;
  TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
  });
  window.addEventListener("load", onLoad);

  function onLoad() {
    updateScroller();
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
  }

  function updateScroller() {
    var resized = scroller.resizeRequest > 0;

    if (resized) {
      var height = scroller.target.clientHeight;
      body.style.height = height + "px";
      scroller.resizeRequest = 0;
    }

    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }

    TweenLite.set(scroller.target, {
      y: -scroller.y
    });
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }

  function onScroll() {
    scroller.scrollRequest++;

    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }

  function onResize() {
    scroller.resizeRequest++;

    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }

  var controller = new ScrollMagic.Controller();

  var forEach = function forEach(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };

  var myNodeList = document.querySelectorAll(".img-loader");
  forEach(myNodeList, function (index, value) {
    var tween = TweenMax.to(value, 2, {
      borderTopLeftRadius: "100%",
      borderTopRightRadius: "100%",
      delay: 0.3,
      height: 0,
      ease: Power2.easeOut
    });
    var itemScene = new ScrollMagic.Scene({
      triggerElement: value,
      triggerHook: 0.6,
      reverse: false
    }).setTween(tween).addTo(controller);
  }); // $(window).on('scroll', function() {
  // title
  // console.log('pageYOffset', pageYOffset);
  // console.log('indent', indent);
  // if(pageYOffset < indent || pageYOffset > lastPhotoPosition) {
  // if(pageYOffset < indent) {
  //     $(mainTitle).removeClass('active');
  // } else {
  //     $(mainTitle).addClass('active');
  // }
  //footer
  // if(pageYOffset > lastPhotoPosition) {
  //     $(footerSecond).addClass('active');
  //     $(footer).addClass('hide');
  //     $('.main-photos__item').addClass('fly');
  // } else {
  //     $(footerSecond).removeClass('active');
  //     $(footer).removeClass('hide');
  //     $('.main-photos__item').removeClass('fly');
  // }
  // });
});