import { test, expect } from '@playwright/test';
import { ManagerHomePage } from '../../../src/pages/manager/ManagerHomePage';

test('Manager can add a new customer', async ({ page }) => {
  const managerHome = new ManagerHomePage(page);

  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/');;
  await page.click('button[ng-click="manager()"]');

  await managerHome.clickAddCustomer();
});