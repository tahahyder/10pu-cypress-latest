// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    "responseTimeout": 60000,
    "screenshotOnRunFailure": false,
    "video": false,
    "baseUrl": 'https://opensource-demo.orangehrmlive.com',
    "reporter": "mochawesome",
    "reporterOptions":{
      "code":false,
      "overwrite":false,
      "reportFilename":"10pu-cypress-report",
      "autoOpen":true,
      "charts":true
    },
    "specPattern":[
      "cypress/e2e/login.cy.js",
    ],
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */
      })
    },

  },
})