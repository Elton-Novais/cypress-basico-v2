// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Elton')
    cy.get('#lastName').type('Novais')
    cy.get('#email').type('projesports@gmail.com')
    cy.get('#phone').type('11943704654')
    cy.get('#open-text-area').type('Exercitation ut consequat id laboris quis aute id commodo nostrud. Sit aute esse ut pariatur. Tempor exercitation cupidatat consectetur cillum magna exercitation et eu minim fugiat laborum.')
    cy.contains('button', 'Enviar').click()
})
