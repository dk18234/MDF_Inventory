document.getElementById('productName').addEventListener('change', function() {
    const portOptions = document.getElementById('portOptions');
    
    // Show port options if 'cards' is selected
    if (this.value === 'cards') {
      portOptions.style.display = 'block';
    } else {
      portOptions.style.display = 'none';
    }
  });
  