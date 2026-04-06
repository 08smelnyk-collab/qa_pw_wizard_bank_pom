import { test, expect } from '@playwright/test';

test('manager can see all currency options', async ({ page }) => {
  await page.goto('/manager/openAccount');
  const currencySelect = page.locator('#currency');
  
  await expect(currencySelect).toContainText('Dollar');
  await expect(currencySelect).toContainText('Pound');
  await expect(currencySelect).toContainText('Rupee');
});