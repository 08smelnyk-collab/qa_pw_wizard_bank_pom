import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { CustomersPage } from '../../../src/pages/manager/CustomersPage';

let firstName;
let lastName;
let postalCode;

test.beforeEach(async ({ page }) => {
  const addCustomerPage = new AddCustomerPage(page);

  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  postalCode = faker.location.zipCode();

  // 1-5. Відкриваємо сторінку додавання і створюємо клієнта
  await page.goto('/manager/addCust');
  await addCustomerPage.addCustomer(firstName, lastName, postalCode);
});

test('Assert manager can search customer by First Name', async ({ page }) => {
  const customersPage = new CustomersPage(page);

  // 1. Відкриваємо сторінку клієнтів
  await page.goto('/manager/list');

  // 2. Вводимо firstName у поле пошуку
  await customersPage.search(firstName);

  // 3. Перевіряємо, що рядок з клієнтом є в таблиці
  const rows = page.locator('table tbody tr');
  await expect(rows).toHaveCount(1);
  await expect(rows).toContainText(firstName);

  // 4. Додаткова перевірка (немає інших рядків — це вже покрив toHaveCount(1))
});