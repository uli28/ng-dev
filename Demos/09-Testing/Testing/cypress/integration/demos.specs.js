/// <reference types="Cypress" />

context('Demos', () => {
  beforeEach(() => {
    cy.visit('https://localhost:4200/demos/');
  });

  describe('Left Menu', () => {
    it('Has 15 options in Testing menu', () => {
      cy.get('button.mat-raised-button').should('have.length', 15);
    });

    it('Shows the correct content when clicking test pipe', () => {
      cy.contains('Test Pipe').click({ force: true });
      cy.contains('TestPipeComponent');
    });
  });
});
