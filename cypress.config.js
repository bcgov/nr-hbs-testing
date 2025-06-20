const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const env = config.env.ENV;
      const baseUrl = config.env[env];

      if (!baseUrl) {
        throw new Error(`Missing or invalid ENV value. Use --env ENV=TEST or --env ENV=PROD`);
      }

      config.baseUrl = baseUrl;
      return config;
    },
    env: {
      TEST: "https://test.a100.gov.bc.ca/pub/hbs/",
      PROD: "https://a100.gov.bc.ca/pub/hbs/"
    },
    video: process.env.CI ? true : false,
    screenshotOnRunFailure: true
  }
});
