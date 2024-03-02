document.addEventListener("DOMContentLoaded", function () {
  let correctAnswersCount = 0;
  let selectedAnswers = [];
  let submitted = false;

  fetch("./questions.json")
    .then((response) => response.json())
    .then((data) => {
      const questionsContainer = document.querySelector(".questions-container");
      const shuffledQuestions = data.sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffledQuestions.slice(0, 15);

      selectedQuestions.forEach((questionData, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("exam-single-answer");

        questionDiv.innerHTML = `
          <div class="exam-body">
            <div class="exam-mark">
              <div class="exam-title">Câu hỏi ${index + 1}</div>
              <div class="exam-status">Chưa trả lời</div>
              <div class="exam-point">Chưa có điểm</div>
              <div class="exam-icon"><i class="fa-solid fa-flag"></i> Đặt cờ</div>
            </div>
            <div class="exam-choice">
              <div class="exam-questions">${questionData.question}</div>
              <div class="exam-multiple-choices">
                <ul>
                  ${questionData.choices
                    .map(
                      (choice, choiceIndex) => `
                    <li>
                      <input type="radio" name="question${index}" value="${choiceIndex}">
                      <label>${choice}</label>
                    </li>
                  `
                    )
                    .join("")}
                </ul>
              </div>
            </div>
          </div>
        `;

        questionsContainer.appendChild(questionDiv);

        const radioInputs = questionDiv.querySelectorAll('input[type="radio"]');
        radioInputs.forEach((input) => {
          input.addEventListener("change", () => {
            const selectedAnswerIndex = parseInt(input.value);
            if (!selectedAnswers.includes(index)) {
              selectedAnswers.push(index);
              if (
                selectedAnswerIndex ===
                questionData.answer.charCodeAt(0) - "a".charCodeAt(0)
              ) {
                correctAnswersCount++;
              }
            }
          });
        });
        const flagIcon = document.querySelector(".exam-icon");
        flagIcon.onclick = () => {
          flagIcon.classList.toggle("active");
          console.log("test");
        };
      });
    })
    .catch((error) => console.error("Error fetching questions:", error));

  const finishLink = document.querySelector(".table-finish");

  finishLink.addEventListener("click", () => {
    localStorage.setItem("correctAnswersCount", correctAnswersCount);
    window.location.href = "./chamdiem.html";
  });

  function gradeExam() {
    console.log(`Số câu trả lời đúng: ${correctAnswersCount}`);
  }
});
