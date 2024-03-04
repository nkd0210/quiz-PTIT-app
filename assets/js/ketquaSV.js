const answerBtn = document.querySelector(".answer-btn");
const hiddenBody = document.querySelector(".statistic-body");

answerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenBody.classList.remove("hidden");
});
