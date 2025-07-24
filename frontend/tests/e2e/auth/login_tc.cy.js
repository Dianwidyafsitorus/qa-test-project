// tests/e2e/login_tc.cy.js

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();

    cy.url().should('include', '/items');
    cy.contains('Item Manager');

    // Ambil snapshot setelah login berhasil
    cy.matchImageSnapshot('login-success');
  });

  it('should show error on invalid credentials', () => {
    cy.get('[data-cy=email-input]').type('wrong@example.com');
    cy.get('[data-cy=password-input]').type('wrongpass');
    cy.get('[data-cy=login-button]').click();

    cy.contains('Login failed, please check email or password').should('exist');
    cy.url().should('not.include', '/items');

    // Ambil snapshot saat error login ditampilkan
    cy.matchImageSnapshot('login-error');
  });
});
