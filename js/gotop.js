window.addEventListener("load", function () {
  // goTop버튼
  const goTopBtn = this.document.querySelector(".gotop-btn");
  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  this.window.addEventListener("scroll", function () {
    // console.log("스크롤시작");
    if (this.document.documentElement.scrollTop > 200) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });
});
