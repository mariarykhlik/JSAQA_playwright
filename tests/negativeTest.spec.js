import { test, expect } from '@playwright/test';

test('Unsuccessful authorization', async ({ page }) => {
  
  await page.goto('https://netology.ru/?modal=sign_in');

  await page.screenshot({ path: 'test-results/testError/loginPage.jpg'});

  await page.getByPlaceholder('Email').click();

  await page.getByPlaceholder('Email').fill('test@email.net');

  await page.getByPlaceholder('Пароль').click();

  await page.getByPlaceholder('Пароль').fill('TestPassword');

  await page.getByTestId('login-submit-btn').click();

  await expect(page.getByTestId('login-error-hint')).toBeVisible;
  
  await expect(page.getByTestId('login-error-hint')).toContainText('Вы ввели неправильно логин или пароль');

  await page.screenshot({ path: 'test-results/testError/loginError.jpg'});

});