const exams = document.querySelector(".exams");
const examsMenu = document.querySelector(".exam-menu");
const userBtn = document.querySelector(".user-btn");
const menuUser = document.querySelector(".menu-user");

exams.onclick = () => {
  examsMenu.classList.toggle("active");
};

userBtn.onclick = () => {
  menuUser.classList.toggle("active");
};
