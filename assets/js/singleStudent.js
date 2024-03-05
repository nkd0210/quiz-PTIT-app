const tabs = document.querySelectorAll(".tab-item");
const lists = document.querySelectorAll(".single-main");

tabs.forEach(function (tab, index) {
  const list = lists[index];
  tab.onclick = (e) => {
    e.preventDefault();
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".single-main.active").classList.remove("active");

    tab.classList.add("active");
    list.classList.add("active");
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const studentName = localStorage.getItem("studentName");
  const singleName = document.querySelector(".singleName");
  singleName.textContent = `Hồ sơ sinh viên: ${studentName}`;
});
