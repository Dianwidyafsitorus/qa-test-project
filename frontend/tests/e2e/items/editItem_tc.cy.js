describe('Edit Item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/items');
  });

  it('should edit an existing item', () => {
    const updatedItem = {
      name: 'Updated Item Name',
      description: 'Updated description by Cypress',
    };

    // Asumsi item dengan id 1 ada — bisa disesuaikan
    cy.get('[data-cy=edit-button-2]').click();

    // Clear & update input
    cy.get('[data-cy=item-name]').clear().type(updatedItem.name);
    cy.get('[data-cy=item-description]').clear().type(updatedItem.description);
    cy.get('[data-cy=item-submit]').click();

    // Verifikasi bahwa item sudah ter-update
    cy.contains('.item-card', updatedItem.name).should('exist');
    cy.contains('.item-card', updatedItem.description).should('exist');
  });
});
