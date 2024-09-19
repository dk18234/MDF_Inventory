document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    if (username === 'user' && password === 'password') {
      sessionStorage.setItem('loggedIn', 'true'); // Set session storage to indicate user is logged in
      window.location.href = 'index.html'; // Redirect to MDF Room page
    } else {
      const errorMessage = document.getElementById('error-message');
      if (errorMessage) {
        errorMessage.textContent = 'Invalid username or password';
      }
    }
  });
  