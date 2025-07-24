// tests/e2e/deleteItem.cy.js

describe('Delete Item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/items');
  });

  it('should delete an item successfully', () => {
    // Ensure the item exists by name
    cy.contains('[data-cy^=item-]', 'Test Item 123').should('exist').as('targetItem');

    // Get dynamic item ID from data-cy attribute
    cy.get('@targetItem')
      .invoke('attr', 'data-cy')
      .then((dataCy) => {
        const itemId = dataCy.split('-')[1]; // assuming format is item-1

        // Click delete button for this item
        cy.get(`[data-cy=delete-button-${itemId}]`).click();

        // Assert item is gone
        cy.get(`[data-cy=item-${itemId}]`).should('not.exist');

        // Snapshot list after deletion
        cy.get('.item-list').matchImageSnapshot('delete-item');
      });
  });
});
