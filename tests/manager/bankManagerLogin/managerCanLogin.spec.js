import { test, expect } from '@playwright/test';
test('Manager can login', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/');

  await page.click('button[ng-click="manager()"]');

  await expect(page.locator('button[ng-click="addCust()"]')).toBeVisible();
});