import { test, expect } from '@playwright/test';

test('manager can login', async ({ page }) => {
  // 1. Перехід на сайт
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

  // --- ДОДАЙТЕ ЦЕЙ БЛОК ТУТ ---
  // Знаходимо кнопку Consent і натискаємо її, якщо вона з'явилася
  const consentButton = page.getByRole('button', { name: 'Consent' });
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }
  // ----------------------------

  // 2. Тепер натискаємо кнопку входу для менеджера
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();

  // 3. Перевірка, що ми перейшли у розділ менеджера
  await expect(page).toHaveURL(/manager/);
});