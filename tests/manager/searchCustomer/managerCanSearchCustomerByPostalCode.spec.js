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

  // 1-5. Створюємо клієнта перед пошуком
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
  await addCustomerPage.addCustomer(firstName, lastName, postalCode);
});

test('Assert manager can search customer by Postal Code', async ({ page }) => {
  const customersPage = new CustomersPage(page);

  // 1. Open Customers page
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');

  // 2. Fill the postalCode to the search field
  await customersPage.search(postalCode);

  // 3. Assert customer row is present in the table
  const rows = page.locator('table tbody tr');
  await expect(rows).toHaveCount(1);
  await expect(rows).toContainText(postalCode);

  // 4. Assert no other rows is present (toHaveCount(1) це вже підтвердив)
});