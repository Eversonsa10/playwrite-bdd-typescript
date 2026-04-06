import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
const { Given, When, Then } = createBdd(test);

Given('que acesso a página de login', async ({ loginPage }) => {
  await loginPage.navigate();
});

When('eu insiro credenciais válidas', async ({ loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
}); 
Then('devo ver a dashboard principal', async ({ loginPage }) => {
  await loginPage.verifyDashboard();
});