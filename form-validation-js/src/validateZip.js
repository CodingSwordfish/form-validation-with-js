export function validateZip(input) {
    const zipError = document.getElementById('zipError');
    if (input.validity.valid) {
      zipError.style.display = 'none';
      return true;
    } else {
      zipError.style.display = 'block';
      return false;
    }
  }
  