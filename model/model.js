const modalbtn = document.querySelector(".model-btn");
const closebtn = document.querySelector(".close");
const modal = document.querySelector(".model2");

modalbtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closebtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
