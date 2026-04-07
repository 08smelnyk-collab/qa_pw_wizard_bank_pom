import { test, expect } from '@playwright/test';

test('Manager can search customer by Postal Code', async ({ page }) => {
  // Переходимо безпосередньо до списку клієнтів
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');

  // Локатор поля пошуку
  const searchInput = page.locator('input[ng-model="searchCustomer"]');
  
  // Вводимо існуючий поштовий код (наприклад, Hermoine має E725JB)
  const postalCode = 'E725JB';
  await searchInput.fill(postalCode);

  // Перевіряємо, що в таблиці з'явився рядок з цим кодом
  const tableRow = page.locator('table tbody tr').first();
  await expect(tableRow).toBeVisible();
  await expect(tableRow).toContainText(postalCode);
});