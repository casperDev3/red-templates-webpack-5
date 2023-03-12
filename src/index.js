// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"
// Import modules

// Import utils
import { initialsBtn } from "./scripts/utils/personalData";

// Bisiness logic


document.addEventListener('DOMContentLoaded', () => {
  initialsBtn();

  const PARAMS = {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  }

  const swiper = new Swiper('.test_slider', PARAMS);
});