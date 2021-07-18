"use strict";

$(document).on("ready", function () {
  // Svg for everybody
  svg4everybody(); // Polifill for IE objectFitImages

  objectFitImages(); // Category

  var cat_item = $(".category-menu__item ");

  function catToggle() {
    $(cat_item).removeClass("active");
    $(this).addClass("active");
  }

  $(cat_item).on("click", catToggle); // Detail images

  var preview_img = $(".detail-main__preview-img");

  function selectPrevPhoto() {
    var slide_src = $(this).eq(0).attr("src");
    $(".detail-main__img").attr("src", slide_src);
  }

  if (preview_img.length) {
    var slide_src = $(preview_img).eq(0).attr("src");
    $(".detail-main__img").attr("src", slide_src);
    $(preview_img).on("click", selectPrevPhoto);
  } //Mobile menu


  var burger = $('.burger');
  var body = $('body');
  $(burger).on('click', function () {
    $(body).toggleClass('active');
  }); //modal

  var modal_btn = $('.open-modal');
  var modal_close = $('.close-modal');
  $(modal_btn).on('click', function () {
    var id = $(this).attr('href');
    $(id).addClass('active');
  });
  $(modal_close).on('click', function () {
    $('.modal').removeClass('active');
  });

  function modalSuccess() {
    $('.modal').removeClass('active');
    $('#success').addClass('active');
  }
});