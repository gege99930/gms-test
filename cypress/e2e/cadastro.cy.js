///<reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Deve preencher os campos obrigatorios', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.PreencherCadastro('Teste', 'Autorizado', email, '1111111111', 'Teste@123')
    cy.get('#signup-response').should("contain","Cadastro realizado com sucesso!")
  })
  
  it('Deve preencher com itens ja cadastrados', () => {
    cy.PreencherCadastro('Teste', 'Autorizado', 'stee@email.com', '1111111111', 'Teste@123')
    cy.get('#signup-response').should("contain","Este email já está cadastrado.")
  })
  it('Deve preencher com senha fraca', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.PreencherCadastro('Teste', 'Autorizado', email, '1111111111', 'Teste1')
    cy.get('#signup-response').should("contain","Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)")
  })
  it('Deve preencher com itens ja cadastrados', () => {
    cy.PreencherCadastro('Teste', 'Autorizado', 'steemail.com', '1111111111', 'Teste@123')
    cy.get('#signup-response').should("contain","E-mail deve ser um email válido")
  })
})
