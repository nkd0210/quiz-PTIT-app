fetch('./questions.json')
  .then(response => response.json())
  .then(data => {
    const questionsContainer = document.querySelector('.questions-container');

    data.forEach((questionData, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('exam-single-answer');

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
                ${questionData.choices.map((choice, choiceIndex) => `
                  <li>
                    <input type="radio" name="question${index}" value="${choiceIndex}">
                    <label>${choice}</label>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
          
        </div>
      `;

      questionsContainer.appendChild(questionDiv);
    });
  })
  .catch(error => console.error('Error fetching questions:', error));
