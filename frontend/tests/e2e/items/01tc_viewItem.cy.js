// tests/e2e/viewItem.cy.js

describe('View Items', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();
  });

  it('should display list of item cards', () => {
    cy.get('.item-list').should('exist');

    cy.get('.item-card').should('have.length.greaterThan', 0).each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('h3').should('exist');
        cy.get('p').should('exist');
        cy.get('[data-cy^="edit-button-"]').should('exist');
        cy.get('[data-cy^="delete-button-"]').should('exist');
      });
    });
  });
});
