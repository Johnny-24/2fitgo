"use strict";

$(document).on("ready", function () {
  // svg4everybody
  svg4everybody(); // Polifill for IE objectFitImages

  objectFitImages(); // InputMask

  $(".phoneMask").inputmask("+7(999) 999-99-99"); // Modals

  $(".modal__close, .modal__overlay").on("click", function (e) {
    e.preventDefault();
    $(".modal").removeClass("active");
  });
  $(".open-modal").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    $(id).addClass("active");
  }); //Soft scroll

  $(".soft-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $(anchor.attr("href")).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
  $(".customSelect__active").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(".customSelect").removeClass("active");
    } else {
      $(".customSelect").removeClass("active");
      $(this).parent().addClass("active");
    }
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".customSelect__active"); // тут указываем ID элемента

    if (!div.is(e.target) && // если клик был не по нашему блоку
    div.has(e.target).length === 0) {
      // и не по его дочерним элементам
      $(".customSelect").removeClass("active"); // скрываем его
    }
  });
  var target = $('[data-field="target"]');
  $(document).on("input", '[data-field="item"]', function () {
    var item = $(this);
    target.html(item.val().length);
  });
  $(".menu-btn").on("click", function (e) {
    e.preventDefault;
    $(this).toggleClass("menu-btn_active");
  });
  var btnHideMobileBlock = $(".btn-mobile");
  var contentMobileBlock = $(".personalArea-info_money");
  $(btnHideMobileBlock).on("click", mobileBlockToggle);

  function mobileBlockToggle() {
    console.log(123);
    $(this).parent().toggleClass("active");
  }

  $(".mobile-landing-header__burger").on("click", function (e) {
    console.log(123);
    e.preventDefault;
    $(".menu").toggleClass("menu_active");
  });
  $(".mobile-landing-header__burger--close").on("click", function (e) {
    console.log(123);
    e.preventDefault;
    $(".menu").removeClass("menu_active");
  }); //выпадающий список кошельков

  var selectEl = $(".js-select");

  function toggleSelect() {
    if ($(selectEl).hasClass("active")) {
      $(selectEl).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  }

  ;
  $(selectEl).on("click", toggleSelect); //перевод бюджета

  var inputEl = $(".js-sum__replenishment-input");
  var customInputEl = $(".js-sum__replenishment .text");
  $(inputEl).on("input", test);

  function test(e) {
    var a = '';
    a = e.target.value;
    $(customInputEl).text(a);
  }

  ; //ограничитель количества вводимых символов в input

  var max_chars = 10;
  $(inputEl).keydown(function (e) {
    if ($(this).val().length >= max_chars) {
      $(this).val($(this).val().substr(0, max_chars));
    }
  });
  $(inputEl).keyup(function (e) {
    if ($(this).val().length >= max_chars) {
      $(this).val($(this).val().substr(0, max_chars));
    }
  }); //смена кабинетов местами

  var replaceCabinetEl = $(".js-replace__cabinet");
  $(replaceCabinetEl).click(function () {
    var left = $('#block-top > *');
    var right = $('#block-bottom > *');
    $('#block-top').append(right);
    $('#block-bottom').append(left);
    return false;
  });
});