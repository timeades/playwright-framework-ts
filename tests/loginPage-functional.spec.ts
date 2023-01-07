// @ts-check
//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';
import { baseUrl } from './utils/constants/urls';

test('has title', async ({ page }) => {
  await page.goto(`${baseUrl}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto(`${baseUrl}`);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

// Verify if a user will be able to login with a valid username and valid password.
test('can login', async ({ page }) => {

});

// Verify if a user cannot login with a valid username and an invalid password.
test('', async ({ page }) => {

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