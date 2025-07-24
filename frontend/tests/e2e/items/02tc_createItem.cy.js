// tests/e2e/createItem.cy.js

describe('Create Item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/items');
  });

  it('should create a new item and display it in the list', () => {
    const newItem = {
      name: 'Test Item 123',
      description: 'This is a test item created by Cypress',
    };

    // fill form add item
    cy.get('[data-cy=item-name]').type(newItem.name);
    cy.get('[data-cy=item-description]').type(newItem.description);
    cy.get('[data-cy=item-submit]').click();

    // Verify new item showing on list
    cy.contains('.item-card', newItem.name).should('exist');
    cy.contains('.item-card', newItem.description).should('exist');
  });
});
