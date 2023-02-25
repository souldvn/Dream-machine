
$(".key__slider").slick({
  dots: true,
  arrows: false,
  appendDots: $(".key__dots"),
  slidesToShow: 3,
  variableWidth: true,
});
$(".ride__slider").slick({
  dots: true,
  arrows: false,
  appendDots: $(".ride__dots"),
  slidesToShow: 1,
});


$(".mount__slider").slick({
  dots: true,
  arrows: false,
  appendDots: $(".mount__dots"),
  slidesToShow: 1,
});



$(".specs__acc-head").on("click", function (e) {
  e.preventDefault();
  // $(".specs__acc-link").removeClass("specs__acc-link--active");
  // $(".specs__acc-text").slideUp();


  // $(this).toggleClass("specs__acc-head--active");
  // $(this).children(".specs__acc-content").slideToggle();

  if ($(this).hasClass("specs__acc-head--active")) {
    $(this).removeClass("specs__acc-head--active");
    $(this).children(".specs__acc-content").slideUp();
  } else {
    $(".specs__acc-head").removeClass("specs__acc-head--active");
    $(".specs__acc-content").slideUp();
    $(this).addClass("specs__acc-head--active");
    $(this).children(".specs__acc-content").slideDown();
  }
});


$(".header__menu-list a, .header__top-btn, .footer__go-top").on(
  "click",
  function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top - 1;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 1000);
  }
);