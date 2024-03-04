document.addEventListener("DOMContentLoaded", function () {
  // Thêm sự kiện click cho nút "Add Question"
  document
    .getElementById("add-question-btn")
    .addEventListener("click", function () {
      addQuestion();
    });

  // Hàm để thêm câu hỏi mới
  function addQuestion() {
    var questionList = document.getElementById("question-list");

    // Tạo phần tử div chứa thông tin của câu hỏi
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    // Tạo input cho câu hỏi
    var questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.placeholder = "Enter question...";
    questionDiv.appendChild(questionInput);

    // Tạo button để xóa câu hỏi
    var deleteButton = document.createElement("button");
    deleteButton.style.marginLeft = " 10px";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      questionDiv.remove();
    });
    questionDiv.appendChild(deleteButton);

    // Tạo input cho câu trả lời
    var answerInput = document.createElement("input");
    answerInput.type = "text";
    answerInput.placeholder = "Enter answer...";
    questionDiv.appendChild(answerInput);

    questionList.appendChild(questionDiv);
  }

  // Sự kiện cho nút "Import Exam from Excel"
  document
    .getElementById("import-exam-btn")
    .addEventListener("click", function () {
      var fileInput = document.getElementById("excel-file");
      var file = fileInput.files[0];

      // Xử lý logic để đọc và xử lý file Excel
      // Đoạn code này cần được thêm vào để xử lý việc nhập đề từ Excel
    });
});
