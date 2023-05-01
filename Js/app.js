"use strict";
// burger menu and modal window

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".burger-menu"),
    mobileMenu = document.querySelector(".mobile-menu"),
    closeBtn = document.querySelector(".mobile-menu__close-btn"),
    modalWindow = document.querySelector(".modal-window"),
    shpoNow = document.querySelector(".button-2"),
    modalClose = document.querySelector(".modal-window__close-btn"),
    body = document.querySelector("body"),
    header = document.querySelector(".header"),
    headerItem = document.querySelectorAll(".header-item"),
    mainTop = document.querySelector(".page-main__topSection-title"),
    mainText = document.querySelector(".page-main__topSection-text"),
    item = document.querySelector(".item"),
    timer = document.querySelectorAll(".timer"),
    wrapper = document.querySelector(".wrapper"),
    wrapperItem = document.querySelectorAll(".wrapper-item"),
    loader = document.querySelector(".loader"),
    content = document.querySelector(".content"),
    contentItem = document.querySelectorAll(".content-item"),
    viewSection = document.querySelector(".viewSection"),
    viewSectionItem = document.querySelectorAll(".viewSection-item"),
    theBest = document.querySelector(".theBest"),
    theBestItem = document.querySelectorAll(".theBest-item"),
    getStarted = document.querySelector(".getStarted");


  const startTitle = document.querySelector(
    ".page-main__getstarted-wrapper__title"
  );
  const startText = document.querySelector(
    ".page-main__getStarted-wrapper__text"
  );
  const startBtn = document.querySelector(
    ".page-main__getStarted-wrapper__btn"
  );

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
    document.body.style.overflow = "scroll";
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

  // NUMBER ANIMATION

  window.addEventListener("scroll", function scroll() {
    if (this.scrollY > item.offsetTop - item.clientHeight * 3) {
      for (let i = 0; i < timer.length; i++) {
        let count = timer[i].getAttribute("count");
        function rec(j = 0) {
          timer[i].innerHTML = j;
          j++;
          if (j <= count) {
            setTimeout(() => {
              rec(j);
            }, 100);
          }
        }
        rec();
        window.removeEventListener("scroll", scroll);
      }
    }
  });

  // HEADER ANIMATION

  wrapperItem.forEach((item) => {
    item.style = `transform: translateX(0)`;
  });

// MAINTOP SECTION

  window.addEventListener("scroll", () => {
    if (window.scrollY > content.offsetTop - content.clientHeight) {
      mainTop.style = `transform:scale(1)`;
      mainText.style = `transform:scale(1)`;
      contentItem.forEach((item) => {
        item.style = `transform: translateX(0)`;
        item.style = `transform: translateY(0)`;
      });
    }
  });

// VIEWSECTION

  window.addEventListener("scroll", () => {
    if (window.scrollY > viewSection.offsetTop - viewSection.clientHeight) {
      viewSectionItem.forEach((item) => {
        item.style = `transform: translateX(0)`;
        item.style = `transform: translateY(0)`;
      });
    }
  });

// THEBEST SECTION

  window.addEventListener("scroll", () => {
    if (window.scrollY > theBest.offsetTop - theBest.clientHeight) {
      theBestItem.forEach((item) => {
        item.style = `transform: translateX(0)`;
      });
    }
  });

// GET STARTED SECTION

  window.addEventListener("scroll", () => {
    if (window.scrollY > getStarted.offsetTop - startTitle.clientHeight / 4) {
      startTitle.style = `transform:translateY(0);`;
      startText.style = `transform:scale(1)`;
      startBtn.style = `transform:translate(0)`;
    }
  });

  // LOADER

//   setTimeout(() => {
//     loader.style.opacity = "0";
//     setTimeout(() => {
//       loader.style.display = "none";
//     }, 500);
//   }, 2000);
// });