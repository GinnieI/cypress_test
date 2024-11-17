/// <reference types="cypress"/>
const baseUrl = Cypress.config("baseUrl");
let login;
let trade;
let bank;

describe("Login as Individual", () => {
  before(() => {
    cy.fixture("applicant").then((data) => {
      login = data;
    });
    cy.fixture("formafields").then((data) => {
      trade = data;
    });
    cy.fixture("bankdetails").then((data) => {
      bank = data;
    });
  });

  beforeEach(() => {
    // Clear cookies and local storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("load page", () => {
    cy.visit(baseUrl);
  });

  it("click login button", () => {
    cy.Login("username", "password");
  });

  it("handle potential redirection", () => {
    cy.url().then((url) => {
      if (url === "http://ami.tradesystem.gov.ng/user/profile") {
        cy.log("Redirected to profile page, handling redirection");
      } else {
        cy.get(".form-control").should("be.visible").click({ multiple: true });
        cy.pause();
        cy.get(".btn").click();
      }
    });
  });
});

describe.skip("Fill a form A", () => {
  it("Select form A Application", () => {
    cy.get(".navigation-menu > :nth-child(1) > :nth-child(1)").trigger(
      "mouseover"
    );
    cy.contains("Start Application").click({ force: true });
  });
  it("confirm applicant info", () => {
    const requiredFields = [
      // cy.xpath("(//div[@class='form-group'])[1]"),
      cy.xpath("//div[contains(@class, 'ng-pristine')]//div[contains(@class, 'card-columns')]//div[contains(@class, 'card-body')][1]//div[contains(@class, 'row')]//div[contains(@class, 'col-lg-12')]//div[contains(@class, 'form-group')]//input[contains(@class, 'form-control')]").invoke('val').then((value)=>{
        cy.log(value)
      }),
      cy.xpath("(//div[@class='form-group'])[2]"),
      cy.xpath("(//div[@class='form-group'])[3]"),
      cy.xpath("(//div[@class='form-group'])[4]"),
      cy.xpath("(//div[@class='form-group'])[5]"),
      cy.xpath("(//div[@class='form-group'])[1]").invoke('text').then((text)=>{
        cy.log(text)
      }),
      
      cy.xpath("//div[contains(@class, 'ng-pristine')]//div[contains(@class, 'card-columns')]//div[contains(@class, 'card-body')][1]//div[contains(@class, 'row')]//div[contains(@class, 'col-lg-12')]//div[contains(@class, 'form-group')]//input[contains(@class, 'form-control')]").invoke('val').then((value)=>{
        cy.log(value)
      })
    ];
    requiredFields.forEach((field) => {
      cy.get(field).should('not.be.empty')
    });
    //click the "Next" button
    cy.xpath("(//button[@type='submit'][normalize-space()='Next'])[1]").click({force:true})
  });

  it("fills trade services tab", () => {
    cy.forma(trade);
    cy.xpath("(//button[@type='submit'][normalize-space()='Next'])[2]").click({force:true})
  });

  it("fill bank details tab", () => {
    cy.bankDetails(trade);
    cy.xpath("(//button[@type='submit'][normalize-space()='Next'])[3]").click({force:true})
  });

  it('attachment tab', ()=>{
  cy.get(':nth-child(1) > .card-body > .row > .col-4 > .form-group > .file-new > .no-border > .form-control-file').trigger('mouseover')
  cy.get('input[type="file"]').attachFile('img.PNG')
  cy.get(':nth-child(1) > .card-body > .row > .col-8 > .form-group > .form-control').should('contain.value', 'Valid Visa');

  cy.get(':nth-child(3) > .card-body > .row > .col-4 > .form-group > .file-new > .no-border > .form-control-file').trigger('mouseover')
  cy.xpath("(//input[@type='file'])[3]").attachFile('img.PNG')
  cy.get(':nth-child(3) > .card-body > .row > .col-8 > .form-group > .form-control').should('contain.value', 'Return Ticket');

  cy.get(':nth-child(2) > .card-body > .row > .col-4 > .form-group > .file-new > .no-border > .form-control-file').trigger('mouseover')
  cy.xpath("(//input[@type='file'])[2]").attachFile('img.PNG')
  cy.get(':nth-child(2) > .card-body > .row > .col-8 > .form-group > .form-control').should('contain.value', 'Valid International passport');

  cy.get('#attachments > .trms-form > :nth-child(2) > .card-body > .clearfix > .pull-right > .btn-primary').click({ force: true })
  });

});

