import "./styles.css";

import { validateEmail } from './validateEmail.js';
import { validateCountry } from './validateCountry.js';
import { validateZip } from './validateZip.js';
import { validatePassword } from './validatePassword.js';
import { validateConfirmPassword } from './validateConfirmPassword.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');

  // Form inputs
  const emailInput = document.getElementById('email');
  const countryInput = document.getElementById('country');
  const zipInput = document.getElementById('zip');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  // Add input event listeners for real-time validation
  emailInput.addEventListener('input', () => validateEmail(emailInput));
  countryInput.addEventListener('input', () => validateCountry(countryInput));
  zipInput.addEventListener('input', () => validateZip(zipInput));
  passwordInput.addEventListener('input', () => validatePassword(passwordInput));
  confirmPasswordInput.addEventListener('input', () =>
    validateConfirmPassword(passwordInput, confirmPasswordInput)
  );

  // Form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Validate individual fields
    const isEmailValid = validateEmail(emailInput);
    const isCountryValid = validateCountry(countryInput);
    const isZipValid = validateZip(zipInput);
    const isPasswordValid = validatePassword(passwordInput);
    const isConfirmPasswordValid = validateConfirmPassword(
      passwordInput,
      confirmPasswordInput
    );
  
    // Check if all validations pass
    if (
      isEmailValid &&
      isCountryValid &&
      isZipValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      // Success message
      console.log('Form submitted successfully!');
      alert('🎉 High Five! Your form has been submitted successfully!');
      form.reset(); // Optionally reset the form
    } else {
      // Error message
      console.log('Form contains errors. Please fix them before submitting.');
      alert('⚠️ Please fix the errors in the form before submitting.');
    }
  });
  
});
