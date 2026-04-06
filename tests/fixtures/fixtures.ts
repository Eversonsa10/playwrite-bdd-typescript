import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';

// Definimos quais páginas/objetos estarão disponíveis nos testes
export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    // --- Hook: Antes do Teste ---
    const loginPage = new LoginPage(page);
    
    // O 'use' entrega a instância para o step. 
    // O teste roda enquanto está parado aqui.
    await use(loginPage);

    // --- Hook: Depois do Teste (Cleanup) ---
    console.log('Cenário finalizado, limpando vestígios...');
  },
});