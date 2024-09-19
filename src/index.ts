// Check if the user is logged in
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
  }
  
  // Your existing code (e.g., cursor movement)
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement;
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  });  

  document.getElementById('newProductBtn')?.addEventListener('click', () => {
    window.location.href = '../new_product.html';
  });
  