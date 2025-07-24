describe('Visual Test - Item List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/items');

    // Pastikan ada 1 item
    const newItem = {
      name: 'Visual Snapshot Test Item',
      description: 'Created only for visual testing',
    };

    cy.get('[data-cy=item-name]').type(newItem.name);
    cy.get('[data-cy=item-description]').type(newItem.description);
    cy.get('[data-cy=item-submit]').click();

    cy.contains('.item-card', newItem.name).should('exist');
  });

  it('should match snapshot of item list', () => {
    cy.get('.item-list').should('exist');
    cy.get('.item-list').matchImageSnapshot('item-list');
  });
});
