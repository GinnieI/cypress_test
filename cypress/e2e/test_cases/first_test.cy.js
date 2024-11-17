/// <reference types="cypress"/>

describe('My first test', ()=>{
    it('Visit cypress doc', ()=>{
        cy.visit('https://suitecrm.com')
        cy.contains('Community').click()
        cy.url().should('include','join-the-project/always-open-source/')
    })
})

