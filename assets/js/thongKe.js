// Dữ liệu mẫu về kết quả thi
const examResults = [
    { exam: "Luyện tập", user: "Nguyễn Kim Dũng", score: 8.5, completed: true },
    { exam: "Luyện tập", user: "Trần Kim Dũng", score: 7.0, completed: true },
    { exam: "Luyện tập", user: "Lê Kim Dũng", score: 6.5, completed: true },
    { exam: "Giữa kỳ", user: "Ngọ Kim Dũng", score: 9.0, completed: true },
    { exam: "Giữa kỳ", user: "Võ Kim Dũng", score: 8.0, completed: true },
    { exam: "Cuối kỳ", user: "Thái Kim Dũng", score: 8.0, completed: true },
    { exam: "Luyện tập", user: "Nguyễn Văn Dũng", score: 8.5, completed: true },
    { exam: "Luyện tập", user: "Trần Thị Dũng", score: 7.0, completed: true },
    { exam: "Luyện tập", user: "Phạm Văn Dũng", score: 6.5, completed: true },
    { exam: "Giữa kỳ", user: "Nguyễn Thị Dũng", score: 9.0, completed: true },
    { exam: "Giữa kỳ", user: "Trần Thái Dũng", score: 8.0, completed: true },
    { exam: "Cuối kỳ", user: "Nguyễn Lê Dũng", score: 8.0, completed: true }
];


function initialize() {
    const examSelect = document.getElementById('examSelect');
    const examOptions = new Set(examResults.map(result => result.exam));

    // Thêm tùy chọn "Tất cả"
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'Tất cả';
    examSelect.appendChild(allOption);

    examOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        examSelect.appendChild(optionElement);
    });

    examSelect.addEventListener('change', updateStatistics);
    updateStatistics();
}

// Hàm để cập nhật bảng thống kê dựa trên kỳ thi được chọn
function updateStatistics() {
    const selectedExam = document.getElementById('examSelect').value;
    const filteredResults = selectedExam === 'all' ? examResults : examResults.filter(result => result.exam === selectedExam);

    const statisticsTable = document.getElementById('statisticsTable');
    statisticsTable.innerHTML = '';

    if (filteredResults.length === 0) {
        statisticsTable.innerHTML = '<p>Không có kết quả nào.</p>';
        return;
    }

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-bordered');
    const headerRow = table.insertRow();
    headerRow.innerHTML = '<th>STT</th><th>Tên kỳ thi</th><th>Tên người dùng</th><th>Điểm số</th><th>Hoàn thành</th>';
    let count = 1;

    filteredResults.forEach(result => {
        const row = table.insertRow();
        row.innerHTML = `<td>${count}</td><td>${result.exam}</td><td>${result.user}</td><td>${result.score}</td><td>${result.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}</td>`;
        count++;
    });

    statisticsTable.appendChild(table);
}

document.getElementById('exportPdfBtn').addEventListener('click', function () {
    
});

// Khởi tạo khi trang được tải
initialize();