export function validateConfirmPassword(passwordInput, confirmInput) {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (passwordInput.value === confirmInput.value) {
      confirmPasswordError.style.display = 'none';
      return true;
    } else {
      confirmPasswordError.style.display = 'block';
      return false;
    }
  }
  