Cypress.Commands.add('Login',(username, password)=>{
    cy.fixture('applicant').then((data)=>{
        cy.get(':nth-child(1) > .form-control').type(data.username)
        cy.get('.input-group > .form-control').type(data.password)
        cy.get('.btn').click()
    })
})