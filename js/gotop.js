window.addEventListener("load", function (){
 // goTop버튼
  const goTopBtn = this.document.querySelector(".gotop-btn");
  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
