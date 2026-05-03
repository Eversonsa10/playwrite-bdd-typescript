Feature: Carrinho

@login
 Scenario: Adicionar produto ao carrinho
   When adiciono o primeiro produto ao carrinho
   Then o carrinho deve conter 1 item

 @login
 Scenario: Validar dois itens no carrino
  When adiciono dois produto no carrinho
  Then o carrinho deve conter 2 itens

 @login
 Scenario: Remover produto do carrinho
  When adiciono o primeiro produto ao carrinho
  And removo o produto do carrinho
  Then o carrinho deve conter 0 item