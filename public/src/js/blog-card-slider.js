$(".blog-card").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
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
