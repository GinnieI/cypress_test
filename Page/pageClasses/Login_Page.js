class LoginPage {
 
    constructor() {
      this.usernameInput = '[data-test="username"]';
      this.passwordInput = '[data-test="password"]';
      this.loginButton = '[data-test="login-button"]';
    }
 
    visit() {
      cy.visit('https://www.saucedemo.com');
    }
 
    fillUsername(username) {
      cy.get(this.usernameInput).type(username);
    }
 
    fillPassword(password) {
      cy.get(this.passwordInput).type(password);
    }
 
    submit() {
      cy.get(this.loginButton).click();
    }
  }
 
  export default new LoginPage();
