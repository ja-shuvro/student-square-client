{
  $(".main-n-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<i class="prevArro fas fa-circle-chevron-left"></i>`,
    nextArrow: `<i class="nextArro fas fa-circle-chevron-right"></i>`,
    dots: false,
    autoplay: true,
  });
}
{
  $(".sub-news-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: `<i class="prevArro fas fa-circle-chevron-left"></i>`,
    nextArrow: `<i class="nextArro fas fa-circle-chevron-right"></i>`,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 310,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
