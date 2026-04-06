import { test } from '@playwright/test';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';

test('manager can open account for customer', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  
  await page.goto('/manager/openAccount');
  await openAccountPage.openAccount('Hermoine Granger', 'Dollar');
});