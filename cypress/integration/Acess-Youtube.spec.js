/// <reference types="Cypress" />

describe('Elementos Youtube', function() {
    beforeEach(function() {
        cy.visit('https://www.qazando.com.br/')
    })
    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#email').type('projesports@gmail.com')
        cy.get('#button').click({force: true})
        cy.get('h2[class="cupom-text"]').should('be.visible')
    }) 
})