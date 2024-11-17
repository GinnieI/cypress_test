/// <reference types="cypress"/>

let userData;
let userData2;
const baseUrl = Cypress.config('baseUrl')

describe('hooks test', () =>{
    before(()=>{
        cy.log('load a fixture')

        cy.fixture('user.json').then( data =>{
            userData = data;
        })
        cy.fixture('user_second.json').then( data =>{
            userData2 = data;
        })
    })

    after(()=>{
        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click()
        cy.log('clearing test data')
    })

    beforeEach(()=>{
        cy.log('Testing before hook')
        cy.visit(baseUrl)
        // cy.get('[data-test="username"]').type(userData.username)
        // cy.get('[data-test="password"]').type(userData.password)
        // cy.get('#login-button').click()
        cy.log('login successful')
    })

    afterEach(()=>{
        cy.log('Testing before hook')
    })

    it('standard user test', function(){
        cy.get('[data-test="username"]').type(userData2.username1)
        cy.get('[data-test="password"]').type(userData2.password1)
        cy.get('#login-button').click()
    })

    it('test 2', function(){
        cy.log('printing to the console')
        })

    it('test 3', function(){
    cy.log('printing to the console')
    })


})



// describe('demo test', ()=>{
//     it('test 1', function(){
//         cy.log('printing to the console')
//     })
// })