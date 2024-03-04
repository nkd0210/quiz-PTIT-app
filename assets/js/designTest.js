document.addEventListener("DOMContentLoaded", function () {
  // Add click event listener for the "Add Question" button
  document
    .getElementById("add-question-btn")
    .addEventListener("click", function () {
      addQuestion();
    });

  // Function to add a multiple-choice question with four answer choices
  function addQuestion() {
    var questionList = document.getElementById("question-list");

    // Create a container div for the question and its inputs
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    // Create input field for the question text
    var questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.placeholder = "Enter question...";
    questionDiv.appendChild(questionInput);

    // Create input fields for four answer choices
    for (let i = 0; i < 4; i++) {
      var answerInput = document.createElement("input");
      answerInput.type = "text";
      answerInput.placeholder = "Enter answer " + String.fromCharCode(65 + i) + "..."; // A, B, C, D
      questionDiv.appendChild(answerInput);
    }

    // Create a select dropdown for choosing the correct answer
    var correctAnswerSelect = document.createElement("select");
    for (let i = 0; i < 4; i++) {
      var option = document.createElement("option");
      option.text = String.fromCharCode(65 + i); // A, B, C, D
      correctAnswerSelect.add(option);
    }
    questionDiv.appendChild(correctAnswerSelect);

    // Create a button to delete the question
    var deleteButton = document.createElement("button");
    deleteButton.style.marginLeft = "10px";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      questionDiv.remove();
    });
    questionDiv.appendChild(deleteButton);

    questionList.appendChild(questionDiv);
  }

  // Function to handle submitting the test and redirect to adminDashboard
  function submitTest() {
    // Assuming newTest is an object containing the details of the newly added test
    var newTest = {
      name: document.getElementById("exam-name").value,
      description: document.getElementById("description").value,
      type: document.getElementById("exam-type").value,
      // You need to extract question data from the DOM and include it here as needed
    };

    // Here you can perform any necessary validation before redirecting

    // Redirect to adminDashboard.html after saving the test
    window.location.href = "adminDashboard.html";
  }

  // Add click event listener for the "Save" button
  document
    .getElementById("saveBtn")
    .addEventListener("click", function () {
      submitTest();
    });

  // Add click event listener for the "Import Exam from Excel" button
  document
    .getElementById("import-exam-btn")
    .addEventListener("click", function () {
      var fileInput = document.getElementById("excel-file");
      var file = fileInput.files[0];
      // Handle importing exam from Excel
    });
});
