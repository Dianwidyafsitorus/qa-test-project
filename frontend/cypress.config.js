const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    specPattern: 'tests/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // No plugins for now
      return config;
    },
  },
});
