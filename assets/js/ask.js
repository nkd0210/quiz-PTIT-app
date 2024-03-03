window.history.pushState(
  { page: "confirm" },
  "Xác nhận làm bài kiểm tra",
  "ask.html"
);
document.querySelector(".confirm-btn").addEventListener("click", () => {
  alert("Chúc bạn làm bài kiểm tra tốt!");
  window.location.href = "./quiz.html";
});
document.querySelector(".return-btn").addEventListener("click", () => {
  alert("Bạn đã quay lại để chuẩn bị tốt hơn!");
  window.location.href = "./main.html";
});
