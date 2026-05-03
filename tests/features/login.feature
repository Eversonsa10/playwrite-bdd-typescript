Feature: Login no Sistema

  Scenario: Login com sucesso
    Given que acesso a página de login
    When eu insiro credenciais válidas
    Then devo ver a dashboard principal

    Scenario: Login com falha
    Given que acesso a página de login
    When eu insiro as credenciais invalidas
    Then devo ver uma mensagem de erro