import { Page, expect } from '@playwright/test';

export class LoginPage {

  private readonly URL = 'https://www.saucedemo.com/'; 
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
}