const menuBtn = document.querySelectorAll(".burger__list");
const menuMobile = document.querySelectorAll(".nav__mobile");

menuBtn[0].addEventListener("click", function () {
  if (menuBtn[0].checked) {
    menuMobile[0].classList.add("nav--active");
    menuMobile[0].classList.remove("nav--diactive");
  } else {
    menuMobile[0].classList.remove("nav--active");
    menuMobile[0].classList.add("nav--diactive");
  }
});
const swiperEl = document.querySelectorAll(".certificate__swiper-wrapper");

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    431: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  on: {
    init() {
      retur;
    },
  },
};
Object.assign(swiperEl[0], swiperParams);

swiperEl[0].initialize();

const accordeonBtn = document.querySelectorAll(".accordeon__title");

accordeonBtn.forEach((item) => {
  item.addEventListener("click", function () {
    const curentText = item.parentElement.querySelector(".accordeon__text");
    const activeBtn = item.parentElement.querySelector(".accordeon__title");
    activeBtn.classList.toggle("accordeon__title--active");
    curentText.classList.toggle("accordeon__text--active");

    if (curentText.classList.contains("accordeon__text--active")) {
      curentText.style.maxHeight = curentText.scrollHeight + 40 + "px";
    } else {
      curentText.style.maxHeight = null;
    }
    curentText.classList.toggle("accordeon__text--padding");
  });
});
