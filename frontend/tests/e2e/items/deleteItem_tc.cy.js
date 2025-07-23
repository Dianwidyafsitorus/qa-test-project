describe('Delete Item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/items');
  });

  it('should delete an item', () => {
    const itemId = 1;

    // verify item exist
    cy.get(`[data-cy=item-${itemId}]`).should('exist');

    // click button delete
    cy.get(`[data-cy=delete-button-${itemId}]`).click();

    // verify item already deleted
    cy.get(`[data-cy=item-${itemId}]`).should('not.exist');
  });
});
