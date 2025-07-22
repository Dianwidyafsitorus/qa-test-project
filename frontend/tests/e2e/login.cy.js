describe('Login Page', () => {
  const baseUrl = 'http://localhost:3001';

  it('logs in with valid credentials', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=password]').type('123456');
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome');
  });

  it('fails login with invalid credentials', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name=email]').type('wrong@example.com');
    cy.get('input[name=password]').type('wrongpass');
    cy.get('button[type=submit]').click();

    cy.contains('Invalid credentials').should('exist');
  });
});
