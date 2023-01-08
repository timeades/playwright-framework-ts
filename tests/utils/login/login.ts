import { Page } from "@playwright/test";
import { baseUrl } from "../constants/urls";

export enum LoginPageComponent {
    usernameInput = '',
    passwordInput = '',
    submitButton = '',
    errorMessage = '',
    pageHeading = '',
    rememberMe = '',
    forgottenPassword = '',
}

export async function login(page:Page) {
    await page.goto(`${baseUrl}`);
    await page.getByText('Login').click();
    await page.getByLabel(LoginPageComponent.usernameInput).fill('username');
    await page.getByLabel(LoginPageComponent.passwordInput).fill('password');
    await page.getByText(LoginPageComponent.submitButton).click();    
}

export async function loginWrongUsername(page:Page) {
    await page.goto(`${baseUrl}`);
    await page.getByText('Login').click();
    await page.getByLabel(LoginPageComponent.usernameInput).fill('username');
    await page.getByLabel(LoginPageComponent.passwordInput).fill('password');
    await page.getByText(LoginPageComponent.submitButton).click();    
}

export async function loginWrongPassword(page:Page) {
    await page.goto(`${baseUrl}`);
    await page.getByText('Login').click();
    await page.getByLabel(LoginPageComponent.usernameInput).fill('username');
    await page.getByLabel(LoginPageComponent.passwordInput).fill('password');
    await page.getByText(LoginPageComponent.submitButton).click();    
}