const tabs = document.querySelectorAll(".tab-item");
const lists = document.querySelectorAll(".main-list");

tabs.forEach(function (tab, index) {
  const list = lists[index];
  tab.onclick = (e) => {
    e.preventDefault();
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".main-list.active").classList.remove("active");

    tab.classList.add("active");
    list.classList.add("active");
  };
});
