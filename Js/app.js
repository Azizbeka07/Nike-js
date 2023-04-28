"use strict";
// burger menu and modal window
const menu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu__close-btn");
const modalWindow = document.querySelector(".modal-window");
const shpoNow = document.querySelector(".button-2");
const modalClose = document.querySelector(".modal-window__close-btn");
const body = document.querySelector("body");
const startTitle = document.querySelector(".page-main__getstarted-wrapper__title");
const startText = document.querySelector(".page-main__getStarted-wrapper__text");
const startBtn = document.querySelector(".page-main__getStarted-wrapper__btn");
const mainTop = document.querySelector(".page-main__topSection-title");
const mainText = document.querySelector(".page-main__topSection-text");

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

const item = document.querySelector(".item");
const timer = document.querySelectorAll(".timer");

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
      window.removeEventListener("scroll", scroll)
    }
  }
});

// HEADER TOP ANIMATION

window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerItem = document.querySelectorAll(".header-item");

      headerItem.forEach((item) => {
        item.style = `transform: translateY(0)`
      })
  
})

// HEADER BANNER ANIMATION

window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperItem = document.querySelectorAll(".wrapper-item");

      wrapperItem.forEach((item) => {
        item.style = `transform: translateX(0)`
      })
  
})

// CARD SECTION ANIMATION

window.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  const contentItem = document.querySelectorAll(".content-item");

  window.addEventListener("scroll", () => {
    if(window.scrollY > content.offsetTop - content.clientHeight) {
      mainTop.style=`transform:scale(1)`
      mainText.style=`transform:scale(1)`
      contentItem.forEach((item) => {
        item.style = `transform: translateX(0)`
        item.style = `transform: translateY(0)`
      })
    }
  })
})

// VIEWSECTION ANIMATION

window.addEventListener("DOMContentLoaded", () => {
  const viewSection = document.querySelector(".viewSection");
  const viewSectionItem = document.querySelectorAll(".viewSection-item");

  window.addEventListener("scroll", () => {
    if(window.scrollY > viewSection.offsetTop - viewSection.clientHeight) {
      viewSectionItem.forEach((item) => {
        item.style = `transform: translateX(0)`
        item.style = `transform: translateY(0)`
      })
    }
  })
})

// THEBEST ANIMATION
window.addEventListener("DOMContentLoaded", () => {
  const theBest = document.querySelector(".theBest");
  const theBestItem = document.querySelectorAll(".theBest-item");

  window.addEventListener("scroll", () => {
    if(window.scrollY > theBest.offsetTop - theBest.clientHeight) {
      theBestItem.forEach((item) => {
        item.style = `transform: translateX(0)`
      })
    }
  })
})

// GETSTARTED ANIMATION

window.addEventListener("DOMContentLoaded", () => {
  const getStarted = document.querySelector(".getStarted");

  window.addEventListener("scroll", () => {
    if(window.scrollY > getStarted.offsetTop - startTitle.clientHeight / 4) {
      startTitle.style=`transform:translateY(0);`
      startText.style=`transform:scale(1)`
      startBtn.style=`transform:translate(0)`
    }
  })
})

// LOADER 
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
          loader.style.display = "none";
      }, 500);
  }, 2000);
});