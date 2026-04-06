// Локатор для кнопки Consent
const consentButton = page.getByRole('button', { name: 'Consent' });

// Перевіряємо, чи банер видимий, і натискаємо
if (await consentButton.isVisible()) {
    await consentButton.click();
}