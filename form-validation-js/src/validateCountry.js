export function validateCountry(input) {
    const countryError = document.getElementById('countryError');
    if (input.value) {
      countryError.style.display = 'none';
      return true;
    } else {
      countryError.style.display = 'block';
      return false;
    }
  }
  