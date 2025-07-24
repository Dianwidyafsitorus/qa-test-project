// tests/e2e/login_tc.cy.js

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should login successfully with valid credentials', () => {
        cy.visit('/');

        cy.get('[data-cy=email-input]').type('test@example.com');
        cy.get('[data-cy=password-input]').type('123456');
        cy.get('[data-cy=login-button]').click();

        // ✅ Wait for the item page to appear
        cy.get('[data-cy=item-title]', { timeout: 10000 }).should('contain', 'Item Manager');

        // Optional: check the URL
        cy.location('pathname').should('include', '/items');
    });

    it('should show error on invalid credentials', () => {
        cy.get('[data-cy=email-input]').type('wrong@example.com');
        cy.get('[data-cy=password-input]').type('wrongpass');
        cy.get('[data-cy=login-button]').click();

        cy.contains('Login failed, please check email or password', { timeout: 5000 }).should('be.visible');
        cy.url().should('not.include', '/items');
    });
});
