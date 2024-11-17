/// <reference types="cypress"/>

const baseUrl = Cypress.config('baseUrl')

describe('My second test', ()=>{
    it('Visit Swaglab', ()=>{
        cy.visit(baseUrl)
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        //cy.get('#login-button').click()
        cy.contains('LOGIN')
        .should('be.visible')
        .click()
        cy.url().should('contain','inventory')
    })
})

