import { test, expect } from '@playwright/test';

test('negativeCase', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('irfan');
  await page.locator('[data-test="username"]').press('CapsLock');
  await page.locator('[data-test="username"]').fill('irfanS');
  await page.locator('[data-test="username"]').press('CapsLock');
  await page.locator('[data-test="username"]').fill('irfanSalah');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('aduhsalah');
  await page.locator('[data-test="login-button"]').click();
  await expect.locator('[data-test="error"]').toContainText();

});
