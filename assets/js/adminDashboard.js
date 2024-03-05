const data = {
  exams: [
    { id: 1, name: "Luyện tập", status: "Không giới hạn thời gian" },
    { id: 2, name: "Cuối kì", status: "Giới hạn thời gian" },
    { id: 3, name: "Giữa kì", status: "Giới hạn thời gian" },
  ],
  users: [
    { id: 1, name: "Kim Dũng" },
    { id: 2, name: "Nam Anh" },
    { id: 3, name: "Công Bách" },
    { id: 4, name: "Ngọc Long" },
    { id: 5, name: "Tùng Anh" },
    { id: 6, name: "Bình Minh" },
    { id: 7, name: "Tùng Lâm" },
    { id: 8, name: "Huy Hoàng" },
    { id: 9, name: "Khánh Linh" },
    { id: 10, name: "Trung Hiếu" },
    { id: 11, name: "Tuấn Hiệp" },
  ],
  statistics: [
    {
      id: 1,
      name: "Luyện tập",
      participants: 8,
      completionRate: "98,89%",
      averageScore: "7,6",
    },
    {
      id: 2,
      name: "Giữa kì",
      participants: 6,
      completionRate: "17,92%",
      averageScore: "5,8",
    },
    {
      id: 3,
      name: "Cuối kì",
      participants: 13,
      completionRate: "38,86%",
      averageScore: "8,4",
    },
  ],
};

function populateExamTable() {
  const examTableBody = document.getElementById("exam-table-body");
  examTableBody.innerHTML = "";
  data.exams.forEach((exam) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${exam.id}</td>
      <td>${exam.name}</td>
      <td>${exam.status}</td>
      <td class="last-column">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    examTableBody.appendChild(row);

    const deleteBtn = row.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      const index = data.exams.findIndex((item) => item.id === exam.id);
      if (index !== -1) {
        data.exams.splice(index, 1);
        populateExamTable();
      }
    });
  });
}


document.addEventListener("DOMContentLoaded", function () {
  populateExamTable();
});

function populateUserTable() {
  const userTableBody = document.getElementById("user-table-body");
  userTableBody.innerHTML = "";
  data.users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td class="last-column">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    userTableBody.appendChild(row);

    const deleteBtn = row.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      const index = data.users.findIndex((item) => item.id === user.id);
      if (index !== -1) {
        data.users.splice(index, 1);
        populateUserTable();
      }
    });
  });
}


function populateStatsTable() {
  const statsTableBody = document.getElementById("stats-table-body");
  statsTableBody.innerHTML = "";
  data.statistics.forEach((stat) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${stat.id}</td>
      <td>${stat.name}</td>
      <td>${stat.participants}</td>
      <td>${stat.completionRate}</td>
      <td>${stat.averageScore}</td>
    `;
    statsTableBody.appendChild(row);
  });
}

populateExamTable();
populateUserTable();
populateStatsTable();

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

const createExamBtn = document.querySelector(".dashboard-btn");
createExamBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "designTest.html";
});

const addUserBtn = document.querySelector(".addUserBtn");
addUserBtn.onclick = (e) => {
  e.preventDefault();
  window.location.href = "createUser.html";
};
