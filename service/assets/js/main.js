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

  var max_chars = 10; // $(inputEl).keydown( function(e){
  //     if ($(this).val().length >= max_chars) { 
  //         $(this).val($(this).val().substr(0, max_chars));
  //     }
  // });

  $(inputEl).keyup(function (e) {
    showAlert();

    if ($(this).val().length >= max_chars) {
      $(this).val($(this).val().substr(0, max_chars));
    }
  }); //смена кабинетов местами

  var replaceCabinetEl = $(".js-replace__cabinet");
  $(replaceCabinetEl).click(function () {
    var top = $('#block-top > *');
    var bottom = $('#block-bottom > *');
    $('#block-top').append(bottom);
    $('#block-bottom').append(top);
    return false;
  }); // alert

  function showAlert() {
    var replenishmentSumEl = $('.js-sum__replenishment-input').val();
    var cabinetSumEl = $('#block-top .select__cabinet-sum span').text();

    if (parseInt(replenishmentSumEl) > parseInt(cabinetSumEl.replace(/\s+/g, ''))) {
      $('.error-icon').show();
      $('.error__text').removeClass('error__text-hidden');
    } else {
      $('.error-icon').hide();
      $('.error__text').addClass('error__text-hidden');
    }
  }

  ; // Выпадающие роли

  var dropdownEl = $(".js-dropdown");

  function toggleDropdown() {
    if ($(dropdownEl).hasClass("visible")) {
      $(dropdownEl).removeClass("visible");
    } else {
      $(this).addClass("visible");
    }
  }

  ;
  $(dropdownEl).on("click", toggleDropdown); // Кнопка в модалке пополнения кабинета

  var replenishmentsSum = $('#replenishments .sum');
  var replenishmentsEmail = $('#replenishments .email');
  var replenishmentsAgreement1 = $('#agreement1');
  var replenishmentsAgreement2 = $('#agreement2');
  var replenishBtn = $('.replenish-btn');
  var replenishmentsSumField = $('.modal__table-summa');
  var replenishmentsSumTotal = $('.span.modal__table-total');
  var replenishmentsSumBonus = $('.span.modal__table-bonus');
  $(replenishmentsSumTotal).text($(replenishmentsSumBonus).text());

  function replenishments() {
    $(replenishmentsSumField).text($(replenishmentsSum).val());

    if ($(replenishmentsSum).val() < 1) {
      $(replenishmentsSumField).text(0);
    }

    var summ = parseInt($(replenishmentsSumField).text()) + parseInt($(replenishmentsSumBonus).text());
    $(replenishmentsSumTotal).text(summ);

    if (parseInt($(replenishmentsSum).val()[0]) > 0 && $(replenishmentsEmail).val().trim().length > 0 && $(replenishmentsAgreement1).is(":checked") && $(replenishmentsAgreement2).is(":checked")) {
      $(replenishBtn).attr('disabled', false);
    } else {
      $(replenishBtn).attr('disabled', true);
    }
  }

  $(replenishmentsSum).on('input', replenishments);
  $(replenishmentsEmail).on('input', replenishments);
  $(replenishmentsAgreement1).on('change', replenishments);
  $(replenishmentsAgreement2).on('change', replenishments);
});