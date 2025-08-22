window.addEventListener("load", function () {
  const menu = this.document.querySelector(".gnb");
  const submenus = this.document.querySelectorAll(".submenu");
  const hBg = this.document.querySelector(".header_bg");
  menu.addEventListener("mouseenter", function () {
    // alert("마우스엔터")
    // console.log(submenus);
    submenus.forEach(function (sub) {
      // console.log(sub);
      sub.classList.add("active");
    });
    hBg.classList.add("open");
  });
  menu.addEventListener("mouseleave", function () {
    // alert("마우스엔터")
    // console.log(submenus);
    submenus.forEach(function (sub) {
      // console.log(sub);
      sub.classList.remove("active");
    });
    hBg.classList.remove("open");
  });
  // 햄버거 메뉴 기능
  //햄버거 메뉴 기능
  //햄버거 메뉴 기능
  const hamburger = this.document.querySelector("#hamburger");
  const mobileMenu = this.document.querySelector("#mobileMenu");
  const overlay = this.document.querySelector("#overlay");
  //   햄버거바 클릭시
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });
  overlay.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
  });
  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
  });
  // 비주얼 스와퍼
  const visualSwiper = new Swiper(".visualSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const itemSwiper = new Swiper(".itemSwiper", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    breakpoints: {
      390: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      1280: {
        slidesPerView: 4.5,
      },
    },
  });
});
