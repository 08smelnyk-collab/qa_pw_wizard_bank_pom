import { expect } from '@playwright/test';

export class TransactionsPage {
  constructor(page) {
    this.page = page;
    // Локатор для клітинок заголовка таблиці
    this.headerCells = page.locator('table thead tr td');
  }

  // Перевірка заголовків (виправляє помилки "is not a function")
  async assertHeaderFirstCellContainsText(text) {
    await expect(this.headerCells.nth(0)).toContainText(text);
  }

  async assertHeaderSecondCellContainsText(text) {
    await expect(this.headerCells.nth(1)).toContainText(text);
  }

  async assertHeaderThirdCellContainsText(text) {
    await expect(this.headerCells.nth(2)).toContainText(text);
  }

  // Перевірка, що перший рядок прихований (для порожньої таблиці)
  async assertFirstRowIsHidden() {
    const firstRow = this.page.locator('table tbody tr').first();
    await expect(firstRow).not.toBeVisible();
  }

  // Перевірка наявності транзакції з сумою
  async assertTransactionExists(amount) {
    const firstRow = this.page.locator('table tbody tr').first();
    // Чекаємо на появу рядка (виправляє порожню таблицю на скріншотах)
    await expect(firstRow).toBeVisible({ timeout: 10000 });
    await expect(firstRow).toContainText(amount.toString());
  }

  async resetTransactions() {
    await this.page.getByRole('button', { name: 'Reset' }).click();
  }
}