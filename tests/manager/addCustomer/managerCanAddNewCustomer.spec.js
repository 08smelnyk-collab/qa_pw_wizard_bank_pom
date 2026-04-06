test('should add a customer', async ({ page }) => {
  const addCustomerPage = new AddCustomerPage(page);
  
  await page.goto('URL_ВАШОЇ_СТОРІНКИ');
  
  // Крок 1: Прибираємо банер
  await addCustomerPage.handleConsent();
  
  // Крок 2: Додаємо клієнта
  await addCustomerPage.addCustomer('Ivan', 'Ivanov', '12345');
});