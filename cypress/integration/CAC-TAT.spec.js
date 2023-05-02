// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('verifica o titulo da aplicação', function() {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')   
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longtext = 'TESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste teste'
        cy.get('#firstName').type('Elton')
        cy.get('#lastName').type('Novais')
        cy.get('#email').type('projesports@gmail.com')
        cy.get('#phone').type('11999999999')
        cy.get('#phone').should('have.text', '')
        cy.get('#open-text-area').type(longtext, { delay:10 })
        cy.contains('button', 'Enviar').click()
        cy.get('.success > strong').should('be.visible')
        
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        const longtext = 'TESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste teste'
        cy.get('#firstName').type('Elton')
        cy.get('#lastName').type('Novais')
        cy.get('#email').type('projesportsgmail.com')
        cy.get('#phone').type('11943704654')
        cy.get('#open-text-area').type(longtext, { delay:0 })
        cy.get('button[type="submit"]').click()
        cy.get('.error > strong').should('be.visible')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        const longtext = 'TESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste testeTESTE teste teste teste teste teste teste teste'
        cy.get('#firstName').type('Elton')
        cy.get('#lastName').type('Novais')
        cy.get('#email').type('projesports@gmail.com')
        cy.get('#phone').should('have.text', '')
        cy.get('#phone-checkbox').check().should('be.checked')
        cy.get('#open-text-area').type(longtext, { delay:0 })
        cy.get('button[type="submit"]').click()
        cy.get('.error > strong').should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
        .type('Elton')
        .should('have.value', 'Elton')
        cy.get('#firstName')
        .clear()
        .should('have.value', '')
        cy.get('#lastName')
        .type('Novais')
        .should('have.value', 'Novais')
        cy.get('#lastName')
        .clear()
        .should('have.value', '')
        cy.get('#email')
        .type('projesports@gmail.com')
        .should('have.value', 'projesports@gmail.com')
        cy.get('#email')
        .clear()
        .should('have.value', '')
        cy.get('#phone')
        .type('11943704654')
        .should('have.value', '11943704654')
        cy.get('#phone')
        .clear()
        .should('have.value', '')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error > strong').should('be.visible')
    })

    it('envia o formulário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success > strong').should('be.visible')
    })
    
    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('select').select('YouTube').should('have.value', 'youtube')
    }) 

    it("seleciona um produto (Mentoria) por seu valor (value)", function() {
        cy.get('select').select('mentoria').should('have.value', 'mentoria')
    })

    it("seleciona um produto (Blog) por seu índice", function() {
        cy.get('select').select(1).should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[value="feedback"]').check().should('be.checked')
    })

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]').should('have.length', 3).each(function($radio) {
            cy.wrap($radio).check() 
            cy.wrap($radio).should('be.checked')
        })
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {
       cy.get('input[type="checkbox"]').check()
       .should('be.checked')
       .last().uncheck()
       .should('not.be.checked')
    })

    it("seleciona um arquivo da pasta fixtures", function() {
       cy.get('input[type="file"]')
       .should('not.have.value')
       .selectFile('cypress/fixtures/example.json') 
       .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
       })
    })

    it("seleciona um arquivo simulando um drag-and-drop", function() {
       cy.get('input[type="file"]')
       .should('not.have.value')
       .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
       .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
       })
    })

    it("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", function() {
       cy.fixture('example.json').as('meuArquivo')
       cy.get('input[type="file"]')
       .selectFile('@meuArquivo')
       .should(function($input) {
               expect($input[0].files[0].name).to.equal('example.json')
       })
    })

    it.only("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", function() {
        cy.get('#privacy > a')
        .should('have.attr', 'target', '_blank')
    })

    it.only("acessa a página da política de privacidade removendo o target e então clicando no link", function() {
        cy.get('#privacy > a')
        .invoke('removeAttr', 'target')
        .click()

        cy.contains("Talking About Testing").
        should('be.visible')
    })

})