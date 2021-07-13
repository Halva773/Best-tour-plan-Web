const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel__slider-button--next',
    prevEl: '.hotel__slider-button--prev',
  },
});

const feedbackSwiper = new Swiper('.feedback-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.feedback__swiper-button--next',
    prevEl: '.feedback__swiper-button--prev',
  },
});