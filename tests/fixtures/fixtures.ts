import { test as base } from 'playwright-bdd';

import { LoginPage } from '../pages/login.page';
import { AddProdutoCarrinhoPage } 
  from '../pages/addProdutoCarrinho.page';

// 👇 aqui adicionamos as páginas
export const test = base.extend<{
  loginPage: LoginPage;
  cartPage: AddProdutoCarrinhoPage;
}>({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);
    await use(loginPage);

  },

  cartPage: async ({ page }, use) => {

    const cartPage =
      new AddProdutoCarrinhoPage(page);

    await use(cartPage);

  },

});