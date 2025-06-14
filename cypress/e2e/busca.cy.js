/// <reference types="cypress"/>

describe('US-00:Funcionalidade: Busca de filmes',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Deve buscar filme com sucesso', () => {
        cy.get('#search-input').type("Interstellar")
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Interstellar')
    })

    it('Deve procurar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[1].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[1].titulo)
        })
    })
    it.only('Deve buscar com sucesso a lista toda', ()=>{
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    })
})