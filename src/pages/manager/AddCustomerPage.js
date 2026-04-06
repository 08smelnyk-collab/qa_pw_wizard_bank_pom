export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    // Локатор для кнопки Consent (судячи зі скриншоту)
    this.consentBtn = page.getByRole('button', { name: 'Consent' });
    
    this.firstNameInput = page.locator('input[ng-model="fName"]');
    this.lastNameInput = page.locator('input[ng-model="lName"]');
    this.postCodeInput = page.locator('input[ng-model="postCd"]');
    this.submitBtn = page.locator('button.btn-default');
  }

  async handleConsent() {
    // Якщо банер з'являється, натискаємо його
    if (await this.consentBtn.isVisible()) {
      await this.consentBtn.click();
    }
  }

  async addCustomer(fName, lName, pCode) {
    await this.firstNameInput.fill(fName);
    await this.lastNameInput.fill(lName);
    await this.postCodeInput.fill(pCode);
    await this.submitBtn.click();
  }
}