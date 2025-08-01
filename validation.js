document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function (event) {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

   
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      confirmPassword.setCustomValidity('');
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      event.preventDefault();
      
      window.location.href = "Created.html";
    }
  }, false);
});
