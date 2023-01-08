// @ts-check
//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';
import { baseUrl } from './utils/constants/urls';
import { 
  login,
  loginWrongUsername,
  loginWrongPassword,
} from "./utils/login/login";

// Verify if a user will be able to login with a valid username and valid password.
test('the user can login', async ({ page }) => {  
  await login;

  await expect(page).toContain('');
});

// Verify if a user cannot login with a valid username and an invalid password.
test('user tries to log in with incorrect user name', async ({ page }) => {
  await loginWrongUsername;

  await expect(page).toContain('');
});

// Verify if a user cannot login with a valid username and an invalid password.
test('user tries to log in with incorrect password', async ({ page }) => {
  await loginWrongPassword;

  await expect(page).toContain('');
});

// Verify the login page for both, when the field is blank and Submit button is clicked.
test('', async ({ page }) => {

});

// Verify the ‘Forgot Password’ functionality.
test('', async ({ page }) => {

});

// Verify the messages for invalid login.
test('', async ({ page }) => {

});

// Verify the ‘Remember Me’ functionality.
test('', async ({ page }) => {

});

// Verify if the data in password field is either visible as asterisk or bullet signs.
test('', async ({ page }) => {

});

// Verify if a user is able to login with a new password only after he/she has changed the password.
test('', async ({ page }) => {

});

// Verify if the login page allows to log in simultaneously with different credentials in a different browser.
test('', async ({ page }) => {

});

// Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.
test('', async ({ page }) => {

});