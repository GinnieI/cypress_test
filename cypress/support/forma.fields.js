Cypress.Commands.add('forma',()=>{
    cy.fixture('formafields').then((data)=>{
        cy.get('.row > :nth-child(1) > .ng-untouched').click()
        cy.get(':nth-child(2) > :nth-child(1) > .col-lg-12 > .form-group > .form-control').type(data.address1)
        cy.get(':nth-child(2) > :nth-child(2) > .col-lg-12 > .form-group > .form-control').type(data.address2)
        cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .form-group > .form-control').type(data.city)
        cy.get('.form-group > div > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(data.state);
        cy.get('.select2-results__option').contains(data.state).click();
        cy.get(':nth-child(2) > .card-body > .container-fluid > :nth-child(1) > :nth-child(1) > .row > :nth-child(1) > .form-group > .form-control').select('US DOLLAR', {force:true}).should('contain.text','US')
        cy.get(':nth-child(2) > .card-body > .container-fluid > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > .form-group > .form-control').type(data.amount)
        cy.get(':nth-child(3) > .card-body > :nth-child(3) > :nth-child(1) > .form-group > .form-control').type(data.passport)
        cy.get(':nth-child(2) > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(data.destination);
        cy.get('.select2-results__option').contains(data.destination).click();
        cy.get(':nth-child(4) > .col-6 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(data.airline);
        cy.get('.select2-results__option').contains(data.airline).click();
        // cy.get('[data-select2-id="102"] > .col > .form-group > .form-control').type(data.airticket)
        cy.get(':nth-child(4) > .col > .form-group > .form-control').type(data.airticket)
        cy.get(':nth-child(5) > .col-6 > .form-group > .form-control').type(data.route)
    })
})
Cypress.Commands.add('bankDetails',()=>{
    cy.fixture('bankdetails').then((data)=>{
        cy.get('#transaction-information > .trms-form > .card-columns > :nth-child(1) > .card-body > .row > :nth-child(1) > .form-group > .form-control').select('Cash', {force:true})
        cy.get('.trms-form > .card-columns > :nth-child(1) > .card-body > .row > :nth-child(2) > .form-group > .form-control').type(data.nairaAcc)
        cy.get('.trms-form > .card-columns > :nth-child(2) > .card-body > :nth-child(2) > .form-control').select('First Bank Of Nigeria Plc', {force:true}).should('contain.text','First')
        cy.get(':nth-child(3) > .select2 > .selection > .select2-selection').click()
        cy.get('.select2-search__field').type(data.branch)
        cy.get('.select2-results__option').contains(data.branch).click()
    })
})