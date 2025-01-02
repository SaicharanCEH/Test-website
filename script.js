// Add a greeting when the page loads
window.onload = function () {
    alert('Welcome to My Test Website!');
  };
  
  // Change header color on click
  document.querySelector('header').addEventListener('click', function () {
    this.style.backgroundColor = 'orange';
  });
  