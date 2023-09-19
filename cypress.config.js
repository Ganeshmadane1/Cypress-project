const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "q5m759",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports', // Specify the directory where reports will be generated
    overwrite: false, // Set to true if you want to overwrite previous reports
    html: false, // Set to true to generate an HTML report
    json: true // Set to true to generate a JSON report (optional)
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/*.js"
  },
});
