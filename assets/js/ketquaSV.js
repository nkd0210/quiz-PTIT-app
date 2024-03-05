const answerBtn = document.querySelector(".answer-btn");
const hiddenBody = document.querySelector(".statistic-body");
const showBtn = document.querySelectorAll(".show-btn");

answerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenBody.classList.remove("hidden");
});
