history.pushState("confirm", "Về lại bài kiểm tra", "quiz.html");

document.querySelector(".error-btn").addEventListener("click", () => {
  window.location.href = "./quiz.html";
});
