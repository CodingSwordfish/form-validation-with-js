export function validatePassword(input) {
    const passwordError = document.getElementById('passwordError');
    if (input.validity.valid) {
      passwordError.style.display = 'none';
      return true;
    } else {
      passwordError.style.display = 'block';
      return false;
    }
  }
  