import { Page, expect } from '@playwright/test';

export class AddProdutoCarrinhoPage 
{   
    constructor(private page: Page) {}
    async clicarBotaoAddToCart() {
        await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    async verificarCarrinhoComItem() {
        const cartBadge = this.page.locator('.shopping_cart_badge');
        await expect(cartBadge).toBeVisible();
        await expect(cartBadge).toHaveText('1');
    }
    async clicarBotaoAddToCartVariosProdutos() {
        await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await this.page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }
   async verificarCarrinhoComQuantidade(itemCount: number) {
        const cartBadge = this.page.locator('.shopping_cart_badge');
        await expect(cartBadge).toBeVisible();
        await expect(cartBadge).toHaveText(itemCount.toString());
    }

    async clicarBotaoRemoveProduto() {
        await this.page.click('[data-test="remove-sauce-labs-backpack"]');
    }
    async verificarCarrinhoVazio() {
        const cartBadge = this.page.locator('.shopping_cart_badge');
        await expect(cartBadge).toBeHidden();
    }
}
