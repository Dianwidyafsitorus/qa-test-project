describe('Item CRUD', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/login');
    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=password]').type('123456');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });

  it('creates a new item', () => {
    cy.get('input[name=itemName]').type('Test Item');
    cy.get('button#create-item').click();
    cy.contains('Test Item');
  });

  it('edits an existing item', () => {
    cy.get('button.edit-item').first().click();
    cy.get('input[name=itemName]').clear().type('Updated Item');
    cy.get('button.save-item').click();
    cy.contains('Updated Item');
  });

  it('deletes an item', () => {
    cy.get('button.delete-item').first().click();
    cy.contains('Deleted successfully');
  });

  it('shows the expected data after actions', () => {
    cy.contains('Updated Item').should('exist');
  });
});
