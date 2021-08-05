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
  // Vars

  var mainTitleHeight = $('.main-title').height();
  var mainTitlePositionTop = $('.main-title').offset().top;
  var mainTitlePositionBottom = mainTitlePositionTop + mainTitleHeight; // Title effect

  var GMainTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-photos",
      start: 'top ' + mainTitlePositionBottom + 'px',
      end: 'bottom ' + mainTitlePositionTop + 'px ',
      toggleActions: "play reverse play reverse",
      onEnter: function onEnter() {
        return $('.main-title').addClass('active');
      },
      onLeave: function onLeave() {
        return $('.main-title').removeClass('active');
      },
      onEnterBack: function onEnterBack() {
        return $('.main-title').addClass('active');
      },
      onLeaveBack: function onLeaveBack() {
        return $('.main-title').removeClass('active');
      }
    }
  });
  GMainTitle.to(".main-title", {}); // Footer effect

  var GMainFooter = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-photos",
      start: 'bottom ' + mainTitlePositionTop + 'px',
      end: '+=1 top',
      toggleActions: "play reverse play reverse",
      onEnter: function onEnter() {
        $('.footer').addClass('hide');
        $('.footer-second').addClass('active');
        $('.main-photos__item').addClass('fly');
      },
      onLeave: function onLeave() {
        $('.footer').removeClass('hide');
        $('.footer-second').removeClass('active');
        $('.main-photos__item').removeClass('fly');
      },
      onEnterBack: function onEnterBack() {
        $('.footer').addClass('hide');
        $('.footer-second').addClass('active');
        $('.main-photos__item').addClass('fly');
      },
      onLeaveBack: function onLeaveBack() {
        $('.footer').removeClass('hide');
        $('.footer-second').removeClass('active');
        $('.main-photos__item').removeClass('fly');
      }
    }
  });
  GMainFooter.to(".footer", {});
});