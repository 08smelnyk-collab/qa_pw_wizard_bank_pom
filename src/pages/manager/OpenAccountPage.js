import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Перехід на сторінку проекту
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
  
  // АВТОМАТИЧНЕ ЗАКРИТТЯ БАНЕРА (вирішує проблему зі скріншота 1)
  const consentButton = page.getByRole('button', { name: 'Consent' });
  if (await consentButton.isVisible({ timeout: 5000 })) {
    await consentButton.click();
  }
});

test('Manager can open account for customer', async ({ page }) => {
  // Клік на кнопку Open Account
  await page.getByRole('button', { name: 'Open Account' }).click();
  
  // Вибір параметрів
  await page.locator('#userSelect').selectOption({ label: 'Harry Potter' });
  await page.locator('#currency').selectOption({ value: 'Dollar' });
  
  // Обробка Alert "Account created successfully"
  page.once('dialog', dialog => {
    expect(dialog.message()).toContain('Account created successfully');
    dialog.accept();
  });

  await page.getByRole('button', { name: 'Process' }).click();
});