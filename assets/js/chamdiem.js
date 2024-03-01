document.addEventListener('DOMContentLoaded', function () {
    // Lấy điểm số từ localStorage
    const score = localStorage.getItem('correctAnswersCount');
    
    // Hiển thị điểm số
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.innerHTML = `Điểm số: ${score}/15`;
});
