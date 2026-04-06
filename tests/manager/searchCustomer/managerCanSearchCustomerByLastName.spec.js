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

  // Pre-conditions: Створюємо клієнта, якого будемо шукати
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
  await addCustomerPage.addCustomer(firstName, lastName, postalCode);
});

test('Assert manager can search customer by Last Name', async ({ page }) => {
  const customersPage = new CustomersPage(page);

  // 1. Open Customers page
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');

  // 2. Fill the lastName to the search field
  await customersPage.search(lastName);

  // 3. Assert customer row is present in the table
  const rows = page.locator('table tbody tr');
  await expect(rows).toHaveCount(1);
  await expect(rows).toContainText(lastName);

  // 4. Assert no other rows is present in the table (вже перевірено toHaveCount(1))
});