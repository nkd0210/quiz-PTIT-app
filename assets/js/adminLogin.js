document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Login successful! Redirecting to admin dashboard...');
        window.location.href = 'adminDashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
