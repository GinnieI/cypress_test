const { defineConfig } = require("cypress");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // baseUrl: 'http://ami.tradesystem.gov.ng/login', 
    watchForFileChanges: false,
    defaultCommandTimeout: 100000,
    chromeWebSecurity: false,
    video: false,
    pageLoadTimeout: 300000, //set timeout to 2 minutes
    testIsolation: false,
    reporterOptions: {
      reportDir: "cypress/reports/html",
      reportTitle: "My Report",
      reportPageTitle: "Cypress Mochawesome Report",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      console.log("HTTP Reporter plugin is loaded");
    },
  },
});