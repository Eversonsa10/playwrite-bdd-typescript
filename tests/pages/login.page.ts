import { Page, expect } from '@playwright/test';

export class LoginPage {

  private readonly URL = 'https://www.saucedemo.com/'; 
  private readonly errorMessage = '[data-test="error"]';

  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(this.URL);
  }
  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
  }
    async verifyDashboard() {
    await expect(this.page).toHaveURL(this.URL + 'inventory.html');
  }
  async verifyErrorMessage() {
    const errorMessage =
    this.page.locator(this.errorMessage);

  await expect(errorMessage).toBeVisible();

  await expect(errorMessage).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
}
}