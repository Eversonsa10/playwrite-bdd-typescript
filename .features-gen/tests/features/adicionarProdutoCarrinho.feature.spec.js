// Generated from: tests\features\adicionarProdutoCarrinho.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Carrinho', () => {

  test('Adicionar produto ao carrinho', { tag: ['@login'] }, async ({ When, Then, cartPage }) => { 
    await When('adiciono o primeiro produto ao carrinho', null, { cartPage }); 
    await Then('o carrinho deve conter 1 item', null, { cartPage }); 
  });

  test('Validar dois itens no carrino', { tag: ['@login'] }, async ({ When, Then, cartPage }) => { 
    await When('adiciono dois produto no carrinho', null, { cartPage }); 
    await Then('o carrinho deve conter 2 itens', null, { cartPage }); 
  });

  test('Remover produto do carrinho', { tag: ['@login'] }, async ({ When, Then, And, cartPage }) => { 
    await When('adiciono o primeiro produto ao carrinho', null, { cartPage }); 
    await And('removo o produto do carrinho', null, { cartPage }); 
    await Then('o carrinho deve conter 0 item', null, { cartPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, loginPage }) => $runScenarioHooks('before', { loginPage }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\adicionarProdutoCarrinho.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When adiciono o primeiro produto ao carrinho","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then o carrinho deve conter 1 item","stepMatchArguments":[{"group":{"start":23,"value":"1","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":11,"pickleLine":9,"tags":["@login"],"steps":[{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When adiciono dois produto no carrinho","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then o carrinho deve conter 2 itens","stepMatchArguments":[{"group":{"start":23,"value":"2","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@login"],"steps":[{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When adiciono o primeiro produto ao carrinho","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And removo o produto do carrinho","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then o carrinho deve conter 0 item","stepMatchArguments":[{"group":{"start":23,"value":"0","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end