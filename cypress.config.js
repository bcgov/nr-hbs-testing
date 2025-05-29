const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:process.env.CI ? true : false, //Enables video only in CI
    screenshotOnRunFailure: true, //Always take screenshots on failures
  },
});
