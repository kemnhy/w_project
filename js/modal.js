window.addEventListener("load", function (){
  // 모달창 닫기
  const modal = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-closeX");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

})