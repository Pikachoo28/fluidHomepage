
//  Product Swiper Slider 

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      240: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 4.3,
        spaceBetween: 30
      },

    }
  });