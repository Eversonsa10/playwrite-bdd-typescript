import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Before } = createBdd(test);

Before({ tags: "@login" }, async ({ loginPage }) => {

  await loginPage.navigate();

  await loginPage.login(
    "standard_user",
    "secret_sauce"
  );

});