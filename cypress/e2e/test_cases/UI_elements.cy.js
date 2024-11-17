/// <reference types="cypress"/>

describe.skip('Interaction with a standard button', ()=> {
    it('click a button', ()=> {
        cy.visit('https://demoqa.com/')
        cy.get('header > a > img').click()
    })
})

describe.skip('Interaction with a Radio button', ()=> {
    it('click a radio button', ()=> {
        cy.visit('https://demoqa.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
        cy.contains('Elements').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
        cy.get(':nth-child(3) > .custom-control-label').click()
        cy.get('.text-success').should('contain.text', 'Impressive')
        cy.get(':nth-child(2) > .custom-control-label').click()
        cy.get('.text-success').should('contain.text', 'Yes')
    })
})
describe.skip('Interaction with a Checkbox', () =>{
    it('click a button', ()=>{
        cy.visit('https://way2automation.com/way2auto_jquery/registration.php#load_box')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
            // cy.get('[data-cy="myCheckboxIcon"]').click()
            cy.get('.relative > input')
            .should('not.be.checked')
            .check()
            .should('be.checked')

    })
})

describe.skip('Interaction with a modal', () =>{
    it('click a button', ()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
        cy.wait(300)
        cy.get('#myBtn').click()
        cy.get('.modal-header > h2 > a')
        .should('contain.text','Testing Daily - Free App to get the latest testing feed.')
        cy.get('.close').click()
        cy.get('[onclick="windowAlertFunction()"]').click()

    })

    
})

describe.skip('Interaction with a window alert', () =>{
    it('click an click', ()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
        cy.wait(300)
        cy.get('[onclick="windowAlertFunction()"]').click()
        cy.on('window:alert', (alertText) =>{
            expect(alertText).to.equal('Press a button!')
        });
    })
})

describe('Interaction with a dropdown list', () =>{
    it('click an click', ()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
        cy.wait(300)
        cy.get('#cars').select('Audi').should('contain.text','Audi')
    })
})