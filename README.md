🎭 Playwright BDD - Esqueleto de Automação
Este é um projeto "Mínimo Viável (MVP)" de automação de testes E2E utilizando o ecossistema moderno do Playwright com suporte nativo a BDD (Gherkin). Ideal para quem está transitando para stacks de alta performance em QA.

🚀 Tecnologias Utilizadas
Playwright: Engine de automação robusta e veloz.

TypeScript: Tipagem forte para evitar erros bobos no código.

Playwright-BDD: Integração perfeita entre Gherkin e Playwright.

Page Object Model (POM): Padronização de arquitetura para fácil manutenção.

🛠️ Como Instalar e Configurar
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
Instale as dependências:

Bash
npm install
Instale os browsers do Playwright:

Bash
npx playwright install
🏃 Como Rodar os Testes
O projeto utiliza o playwright-bdd, que requer uma etapa de geração de arquivos antes da execução.

Execução Completa (Recomendado)
Para gerar os arquivos BDD e rodar os testes em uma única linha:

Bash
npm test
Execução com Interface Visual (UI Mode)
Para debugar e ver o teste acontecendo passo a passo:

Bash
npx bddgen && npx playwright test --ui
Ver Relatório de Erros (Trace Viewer)
Se um teste falhar, o relatório HTML será gerado automaticamente:

Bash
npx playwright show-report
📂 Estrutura do Projeto
Plaintext
├── tests/
│   ├── features/   # Arquivos .feature (Gherkin/Negócio)
│   ├── steps/      # Implementação dos passos em TS
│   ├── pages/      # Page Object Model (Seletores e Ações)
│   └── fixtures/   # Configurações de Hooks e Injeção de Dependência
├── playwright.config.ts # Configuração central do Playwright
└── package.json    # Scripts e dependências
🔍 O que observar neste esqueleto?
Trace Viewer: O projeto está configurado para gerar um trace completo de cada execução. Isso permite ver capturas de tela, rede e logs do console de cada ação.

Fixtures: Note como as páginas são injetadas nos steps. Você não precisa instanciar manualmente as classes em cada arquivo de teste.

Auto-wait: Esqueça o sleep(5000). O Playwright espera os elementos estarem prontos automaticamente.

💡 Dicas para Brincar
Tente criar uma nova .feature para um fluxo de "Erro de Login".

Adicione um novo método no LoginPage.ts para capturar a mensagem de erro.

Rode no modo --headed para ver o navegador abrindo de verdade!

Projeto desenvolvido para estudo do Trace Viewer e aprimoramento em automação de testes.