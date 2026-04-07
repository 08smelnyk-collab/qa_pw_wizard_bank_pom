import { test, expect } from '@playwright/test';

test('Manager can delete customer', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');

  // Знаходимо рядок, де є текст "Hermoine" (або будь-який інший існуючий клієнт)
  const customerRow = page.locator('tr', { hasText: 'Hermoine' });
  
  // Натискаємо кнопку видалення саме в цьому рядку
  await customerRow.locator('button[ng-click*="deleteCust"]').click();

  // Перевіряємо, що рядок з цим клієнтом зник
  await expect(customerRow).not.toBeVisible();
});