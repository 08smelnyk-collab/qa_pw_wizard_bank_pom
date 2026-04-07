class BankHomePage {
  constructor(page) {
    // 1. Присвоюємо переданий об'єкт page властивості класу
    this.page = page;
    
    // 2. Оголошуємо локатори (краще робити це в конструкторі)
    this.consentButton = page.getByRole('button', { name: 'Consent' });
    this.customerLoginBtn = page.locator('button[ng-click="customer()"]');
    this.bankManagerLoginBtn = page.locator('button[ng-click="manager()"]');
  }

  // Метод для обробки банера згоду
  async handleConsent() {
    // 3. Звертаємося до локатора через this
    if (await this.consentButton.isVisible()) {
        await this.consentButton.click();
    }
  }

  async clickCustomerLogin() {
    await this.customerLoginBtn.click();
  }
}

module.exports = { BankHomePage };