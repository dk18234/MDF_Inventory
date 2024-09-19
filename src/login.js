"use strict";
var _a;
(_a = document.getElementById('loginForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'user' && password === 'password') {
        sessionStorage.setItem('loggedIn', 'true'); // Set session storage to indicate user is logged in
        window.location.href = 'index.html'; // Redirect to MDF Room page
    }
    else {
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.textContent = 'Invalid username or password';
        }
    }
});
