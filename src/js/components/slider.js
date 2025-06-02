import Swiper from "swiper";
import { Navigation, Scrollbar, Thumbs } from "swiper/modules";

Swiper.use([Navigation, Scrollbar, Thumbs]);

const newsSlider = document.querySelector(".news-slider");
const testimonialsSlider = document.querySelector(".testimonials-slider");
// const cardSlider = document.querySelector(".card-slider");

new Swiper(newsSlider, {
  // slidesPerView: 1.5,
  spaceBetween: 24,
  scrollbar: {
    el: ".news-slider__scroll",
    draggable: true,
  },
  navigation: {
    nextEl: ".news-slider__btn--next",
    prevEl: ".news-slider__btn--prev",
  },
  // breakpoints: {
  // 	640: {
  // 		slidesPerView: 2,
  // 		spaceBetween: 24,
  // 	},
  // 	768: {
  // 		slidesPerView: 3,
  // 		spaceBetween: 24,
  // 	},
  // 	1024: {
  // 		slidesPerView: 4,
  // 		spaceBetween: 24,
  // 	},
  // },
});

new Swiper(testimonialsSlider, {
  spaceBetween: 24,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
