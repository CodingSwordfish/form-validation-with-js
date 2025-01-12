export function validateEmail(input) {
    const emailError = document.getElementById('emailError');
    if (input.validity.valid) {
      emailError.style.display = 'none';
      return true;
    } else {
      emailError.style.display = 'block';
      return false;
    }
  }
  