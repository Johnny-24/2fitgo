"use strict";

$(document).on('ready', function () {
  // Smooth Scroll
  gsap.registerPlugin(ScrollTrigger);
  var container = document.getElementById("scroll-container");

  function setHeight() {
    var height = container.clientHeight;
    document.body.style.height = height + "px";
  }

  ScrollTrigger.addEventListener("refreshInit", setHeight);
  gsap.to(container, {
    y: function y() {
      return -(container.getBoundingClientRect().height - document.documentElement.clientHeight);
    },
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true
    }
  }); //-------------
  // Scroll skew effect

  var skewSetter = gsap.quickSetter(".skew", "skewY", "deg");
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
          duration: .5,
          ease: "power3",
          overwrite: true,
          onUpdate: function onUpdate() {
            return skewSetter(proxy.skew);
          }
        });
      }
    }
  }); //-------------
  // Title effect

  var lastBlockTop = $('.last-block').offset().top;
  var mainTitleHeight = $('.main-section__title').height();
  var mainTitlePositionTop = $('.main-section__title').offset().top;
  var mainTitlePositionBottom = mainTitlePositionTop + mainTitleHeight;
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-photos",
      start: 'top ' + mainTitlePositionBottom + 'px',
      end: 'bottom ' + mainTitlePositionTop + 'px ',
      // scrub: true,
      toggleActions: "play reverse play reverse",
      markers: true
    }
  });
  tl.to(".main-section__title", {
    opacity: .4,
    scale: .8,
    duration: .5
  }); //
  //
  //
  // const lastPhotoHeight = $('.main-photos__item--last').height();
  // const lastPhotoPositionTop = $('.main-photos__item--last').offset().top;
  // const lastPhotoPositionBottom = lastPhotoPositionTop - lastPhotoHeight
  // let tl = gsap.timeline({
  //     scrollTrigger: {
  //         trigger: '.main-photos__item',
  //     }
  // })
  // ScrollTrigger.create({
  //     trigger: '.main-photos',
  //     start: 'top' + ' ' + mainTitlePositionBottom + 'px',
  //     end: "+=" + lastPhotoPositionBottom,
  //     markers: true,
  //     toggleClass: {targets: ".main-section__title", className: "active"}
  // })
  // tl.from("img", { x: 200, opacity: 0, duration: 1.5 })
  //     .from(".main-photos__item--last", { y:300, opacity: 0, duration: 1 })
  // gsap.to('.main-section__title', {
  //     scrollTrigger: {
  //         markers: true,
  //         trigger: '.main-photos',
  //         start: 'top' + ' ' + mainTitlePositionBottom + 'px',
  //         end: "+=100"
  //     },
  //     opacity: .4,
  //     scale: .8,
  //     duration: .5
  // })
});