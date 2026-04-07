import { test, expect } from '@playwright/test';
test('Manager can choose currencies', async ({ page }) => {
  await page.goto('/');

  await page.click('button[ng-click="manager()"]');
  await page.click('button[ng-click="openAccount()"]');

  const currencies = await page.locator('#currency option').allTextContents();

  expect(currencies).toContain('Dollar');
  expect(currencies).toContain('Pound');
  expect(currencies).toContain('Rupee');
});
await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/');