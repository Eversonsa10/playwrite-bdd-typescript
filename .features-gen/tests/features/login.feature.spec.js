// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Login no Sistema', () => {

  test('Login com sucesso', async ({ Given, When, Then, loginPage }) => { 
    await Given('que acesso a página de login', null, { loginPage }); 
    await When('eu insiro credenciais válidas', null, { loginPage }); 
    await Then('devo ver a dashboard principal', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When eu insiro credenciais válidas","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then devo ver a dashboard principal","stepMatchArguments":[]}]},
]; // bdd-data-end