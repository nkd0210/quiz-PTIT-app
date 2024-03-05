const data = [
  { id: 1, name: "Nguyễn Kim Dũng", msv: "B21DCVT034", class: "E21CQCN02-B" },
  { id: 2, name: "Ngọ Kim Dũng", msv: "B21DCVT044", class: "E21CQCN03-B" },
  { id: 3, name: "Võ Kim Dũng", msv: "B21DCVT054", class: "E21CQCN04-B" }
];

function populateTable(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  data.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.msv}</td>
      <td>${student.class}</td>
      <td><button class="show-btn" data-id="${student.id}" data-name="${student.name}">Xem chi tiết</button></td>
    `;
    tableBody.appendChild(row);
  });
}

populateTable(data);

const answerBtn = document.querySelector(".answer-btn");
const hiddenBody = document.querySelector(".statistic-body");

answerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenBody.classList.remove("hidden");
});

const input = document.getElementById("myInput");
input.addEventListener("input", () => {
  const searchTerm = input.value.toLowerCase();
  const filteredData = data.filter(student => {
    return student.name.toLowerCase().includes(searchTerm) || student.msv.toLowerCase().includes(searchTerm);
  });
  populateTable(filteredData);
});

const showButtons = document.querySelectorAll(".show-btn");
showButtons.forEach(button => {
  button.addEventListener("click", () => {
    const studentName = button.getAttribute("data-name");
    localStorage.setItem("studentName", studentName); // Lưu tên sinh viên vào localStorage
    window.location.href = "singleStudent.html"; // Chuyển hướng đến trang singleStudent.html
  });
});
