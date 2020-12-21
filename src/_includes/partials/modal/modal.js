
const modalPopUpTop = document.querySelector("#modalPopUpTop");
document.querySelector("#openModalPopUpTop").addEventListener("click", function () {
  modalPopUpTop.style.display = "block";
})
document.querySelector("#closeModalPopUpTop").addEventListener("click", function () {
  modalPopUpTop.style.display = "none";
})
window.addEventListener("click", function (e) {
  if (e.target == modalPopUpTop) {
    modalPopUpTop.style.display = "none";
  }
})