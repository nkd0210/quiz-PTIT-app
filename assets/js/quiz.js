document.addEventListener("DOMContentLoaded", function () {
  let correctAnswersCount = 0;
  let selectedAnswers = [];
  let flaggedQuestions = [];

  // Function to start countdown timer
  function startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        alert("Hết thời gian làm bài!");
        window.location.href = "./chamdiem.html";
    }
    
    }, 1000);
  }

  var examDuration = 1800; 

  var timerDisplay = document.querySelector(".time");

  startTimer(examDuration, timerDisplay);

  fetch("./questions.json")
    .then((response) => response.json())
    .then((data) => {
      const questionsContainer = document.querySelector(".questions-container");
      const ticketButtons = document.querySelectorAll(".ticket-item");

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
            const questionIndex = parseInt(input.name.replace("question", ""));
            const correctAnswerIndex = questionData.answer.charCodeAt(0) - "a".charCodeAt(0);

            if (selectedAnswers.includes(questionIndex)) {
              const oldSelectedIndex = selectedAnswers.indexOf(questionIndex);
              selectedAnswers.splice(oldSelectedIndex, 1);

              if (oldSelectedIndex === correctAnswerIndex) {
                correctAnswersCount--;
              }
            }

            selectedAnswers.push(questionIndex);

            if (selectedAnswerIndex === correctAnswerIndex) {
              correctAnswersCount++;
            }

            updateTicketButtons(); // Update ticket buttons after selecting an answer
          });
        });

        const flagIcon = questionDiv.querySelector(".exam-icon");
        flagIcon.addEventListener("click", () => {
          flagIcon.classList.toggle("active");

          const questionIndex = parseInt(questionDiv.querySelector('.exam-title').textContent.replace("Câu hỏi ", "")) - 1;

          if (flagIcon.classList.contains("active")) {
            flaggedQuestions.push(questionIndex);
          } else {
            const index = flaggedQuestions.indexOf(questionIndex);
            if (index > -1) {
              flaggedQuestions.splice(index, 1);
            }
          }

          updateTicketButtons(); // Update ticket buttons after flagging/unflagging a question
        });
      });

      // Scroll to the specific question's section when the button is clicked
      ticketButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          questionsContainer.querySelector(`.exam-single-answer:nth-child(${index + 1})`).scrollIntoView({ behavior: "smooth" });
        });
      });
    })
    .catch((error) => console.error("Error fetching questions:", error));

  const finishLink = document.querySelector(".table-finish");

  finishLink.addEventListener("click", () => {
    localStorage.setItem("correctAnswersCount", correctAnswersCount);
    window.location.href = "./chamdiem.html";
  });

  function updateTicketButtons() {
    const ticketButtons = document.querySelectorAll(".ticket-item");

    ticketButtons.forEach((button, index) => {
      const questionIndex = index;
      const selected = selectedAnswers.includes(questionIndex);
      const flagged = flaggedQuestions.includes(questionIndex);

      button.classList.toggle("selected", selected);
      button.classList.toggle("flagged", flagged);
        
    });
  }

  function gradeExam() {
    console.log(`Số câu trả lời đúng: ${correctAnswersCount}`);
  }
});
