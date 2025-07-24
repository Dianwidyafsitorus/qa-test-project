// tests/e2e/login_tc.cy.js

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();

    cy.url({ timeout: 10000 }).should('include', '/items');
    cy.url().should('include', '/items');
    cy.contains('Item Manager');
  });

  it('should show error on invalid credentials', () => {
    cy.get('[data-cy=email-input]').type('wrong@example.com');
    cy.get('[data-cy=password-input]').type('wrongpass');
    cy.get('[data-cy=login-button]').click();

    cy.contains('Login failed, please check email or password').should('exist');
    cy.url().should('not.include', '/items');
  });
});
