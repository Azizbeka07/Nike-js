"use strict";
// burger menu and modal window
const menu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu__close-btn");
const modalWindow = document.querySelector(".modal-window");
const shpoNow = document.querySelector(".button-2");
const modalClose = document.querySelector(".modal-window__close-btn");
const body = document.querySelector("body");


menu.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});
// modal window open
shpoNow.addEventListener("click", () => {
  modalWindow.classList.add("open");
  document.body.style.overflow = "hidden";
});

modalClose.addEventListener("click", () => {
  modalWindow.classList.remove("open");
  document.body.style.overflow = "scroll"
});

// header banner right carousel

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});