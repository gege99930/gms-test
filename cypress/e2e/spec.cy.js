///<reference types="Cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve preencher os campos obrigatorios', () => {
    cy.visit('http://192.168.5.106:8080/')
    cy.get('#signup-firstname').type("Teste")
    cy.get('#signup-lastname').type("Automatizado")
    cy.get('#signup-email').type("novoo@email.com")
    cy.get('#signup-phone').type("47991551117")
    cy.get('#signup-password').type("Senha@11")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain","Cadastro realizado com sucesso!")
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve preencher com itens ja cadastrados', () => {
    cy.visit('http://192.168.5.106:8080/')
    cy.get('#signup-firstname').type("Teste")
    cy.get('#signup-lastname').type("Automatizado")
    cy.get('#signup-email').type("stee@email.com")
    cy.get('#signup-phone').type("47991551117")
    cy.get('#signup-password').type("Senha@11")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain","Este email já está cadastrado.")
  })
})

describe('Funcionalidade: Busca de filme', () => {
  it('Deve fazer uma busca de filme', ()=> {
    cy.visit('http://192.168.5.106:8080/')
    cy.get('#search-input').type("Interstellar")
    cy.get('#search-button').click()
    cy.get('#results-section').should('be.visible')
    cy.get('#clear-button').click()
  })
})