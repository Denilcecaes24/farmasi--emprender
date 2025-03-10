var swiperr = new Swiper(".mySwiperr", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      breakpoints: {
        // Configuración cuando el ancho de la ventana es igual o menor a 400px
        300: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20, // Espacio entre los slides
        },
        500: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      900: {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
  }
  });


  var swiperk = new Swiper(".mySwiperk", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-nextk",
      prevEl: ".swiper-button-prevk",
    },
      breakpoints: {
        // Configuración cuando el ancho de la ventana es igual o menor a 400px
        300: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 20, // Espacio entre los slides
        },
        500: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
  
      700: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
      900: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 20, // Espacio entre los slides
  },
  }
  });