function getParticipantsScores() {

    return [
        { name: 'Người tham gia 1', scores: { 'Bài thi 1': 10, 'Bài thi 2': 8, 'Bài thi 3': 9 } },
        { name: 'Người tham gia 2', scores: { 'Bài thi 1': 9, 'Bài thi 2': 7, 'Bài thi 3': 6 } },
    ];
}

function getQuestions() {
    return fetch("./questions.json")
        .then((response) => response.json());
}

function displayParticipants() {
    const participantsList = document.getElementById("participantsList");
    const participantsScores = getParticipantsScores();

    participantsList.innerHTML = '';
    participantsScores.forEach(participant => {
        const listItem = document.createElement('li');
        listItem.textContent = `${participant.name}:`;
        const scoresList = document.createElement('ul');
        for (const [key, value] of Object.entries(participant.scores)) {
            const scoreItem = document.createElement('li');
            scoreItem.textContent = `${key}: ${value}`;
            scoresList.appendChild(scoreItem);
        }
        listItem.appendChild(scoresList);
        participantsList.appendChild(listItem);
    });
}

function displayQuestions() {
    const questionsList = document.getElementById("questionsList");
    getQuestions()
        .then(questions => {
            questionsList.innerHTML = '';
            questions.forEach((question, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Câu hỏi ${index + 1}: ${question.question}`;
                questionsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching questions:', error));
}

document.getElementById("addQuestionBtn").addEventListener("click", () => {
    const newQuestion = {
        question: "Câu hỏi mới",
        choices: ["Lựa chọn 1", "Lựa chọn 2", "Lựa chọn 3", "Lựa chọn 4"],
    };

    fetch("./questions.json")
        .then((response) => response.json())
        .then((data) => {
            data.push(newQuestion);
            return fetch("./questions.json", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        })
        .then(() => {
            location.reload();
        })
        .catch((error) => console.error("Error adding question:", error));
});

displayParticipants();
displayQuestions();
