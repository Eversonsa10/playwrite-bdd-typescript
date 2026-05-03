import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
const {  When, Then } = createBdd(test);


When('adiciono o primeiro produto ao carrinho', async ({cartPage}) => {
  cartPage.clicarBotaoAddToCart();
});

Then('o carrinho deve conter {int} item', async ({cartPage}) => {
 cartPage.verificarCarrinhoComItem();
});

When('adiciono dois produto no carrinho', async ({cartPage}) => {
  cartPage.clicarBotaoAddToCartVariosProdutos();
});

Then('o carrinho deve conter {int} itens', async ({cartPage}, quantidade: number) => {
  cartPage.verificarCarrinhoComQuantidade(quantidade);
});

When('removo o produto do carrinho', async ({cartPage}) => {
  cartPage.clicarBotaoRemoveProduto();
});

