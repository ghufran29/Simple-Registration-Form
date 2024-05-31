document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    if (username.value.trim() === '') {
        showError('usernameError', 'Username is required.');
        isValid = false;
    } else {
        hideError('usernameError');
    }

    if (!validateEmail(email.value)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    } else {
        hideError('emailError');
    }

    if (password.value.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    } else {
        hideError('passwordError');
    }

    if (password.value !== confirmPassword.value) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    } else {
        hideError('confirmPasswordError');
    }

    if (isValid) {
        alert('Registration successful!');
       
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'none';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
