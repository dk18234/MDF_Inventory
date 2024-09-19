"use strict";
var _a;
// Check if the user is logged in
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
}
// Your existing code (e.g., cursor movement)
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});
(_a = document.getElementById('newProductBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    window.location.href = '../new_product.html';
});
