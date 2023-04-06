"use strict";

const menu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu__close-btn");
const modalWindow = document.querySelector(".modal-window");
const shpoNow = document.querySelector(".header-content__btn");
const modalClose = document.querySelector(".modal-window__btn");
const body = document.querySelector("body");
menu.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
 document.body.style.overflow="hidden"
});

shpoNow.addEventListener("click", () => {
  modalWindow.classList.add("open");
});

modalClose.addEventListener("click", () => {
  modalWindow.classList.remove("open");
});
