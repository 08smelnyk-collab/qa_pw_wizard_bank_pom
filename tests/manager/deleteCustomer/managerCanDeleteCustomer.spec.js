import { test, expect } from '@playwright/test';
// Спробуй цей варіант:
import { CustomersPage } from '../../pages/manager/CustomersPage';

test('manager can delete customer', async ({ page }) => {
  const customersPage = new CustomersPage(page);
  
  await page.goto('/manager/list');
  await customersPage.deleteCustomer('Hermoine'); // Видаляємо дефолтну Герміону
  
  await expect(page.locator('table')).not.toContainText('Hermoine');
});