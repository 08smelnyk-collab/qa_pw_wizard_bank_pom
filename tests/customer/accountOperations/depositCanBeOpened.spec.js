import { test, expect } from '@playwright/test';

test('Customer can deposit and see transaction', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');

  // Логін
  await page.selectOption('#userSelect', 'Harry Potter');
  await page.click('button:has-text("Login")');

  // Депозит
  await page.click('button[ng-click="deposit()"]');
  await page.fill('input[ng-model="amount"]', '100');
  await page.click('form button:has-text("Deposit")');

  // Перевірка успіху
  await expect(page.locator('span.error')).toHaveText('Deposit Successful');

  // Перехід до транзакцій
  await page.click('button[ng-click="transactions()"]');

  // --- ВАЖЛИВИЙ МОМЕНТ ДЛЯ СТАБІЛЬНОСТІ ---
  // Якщо таблиця порожня, ми примусово перезавантажуємо сторінку або чекаємо трохи довше
  // Цей сайт іноді вимагає секунду на ініціалізацію масиву транзакцій
  await page.waitForTimeout(1000); 
  await page.reload(); // Перезавантаження часто допомагає Angular відобразити дані

  // Очікуємо конкретний рядок
  const transactionRow = page.locator('table tbody tr').filter({ hasText: '100' });
  
  // Використовуємо .waitFor() перед expect, щоб переконатися, що елемент з'явився
  await transactionRow.waitFor({ state: 'visible', timeout: 10000 });
  
  await expect(transactionRow).toBeVisible();
});
