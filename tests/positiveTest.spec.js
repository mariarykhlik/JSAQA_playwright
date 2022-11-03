import { test, expect } from '@playwright/test';
import { user } from '../user';

test('Successful authorization', async ({ page }) => {
  
  await page.goto('https://netology.ru/?modal=sign_in');

  await page.screenshot({ path: 'test-results/testSuccess/loginPage.jpg'});

  await page.getByPlaceholder('Email').click();

  await page.getByPlaceholder('Email').fill(user.email);

  await page.getByPlaceholder('Пароль').click();

  await page.getByPlaceholder('Пароль').fill(user.password);

  await page.getByTestId('login-submit-btn').click();

  await expect(page).toHaveURL('https://netology.ru/profile');

  await expect(page.getByText('Вы вошли в личный кабинет')).toBeVisible;
  
  await page.getByTestId('header-top').screenshot({ path: 'test-results/testSuccess/authorization.jpg'});

  await expect(page.getByRole('heading', { name: 'Мои курсы и профессии' })).toBeVisible;
});