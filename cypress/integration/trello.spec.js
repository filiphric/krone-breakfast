
it('new board', function() {
  
  cy.visit('http://localhost:3000');

  // create new board
  cy.get('[data-cy=create-board] > .text-white', { timeout: 30000 }).click();
  cy.get('[data-cy=new-board-input]').clear();
  cy.get('[data-cy=new-board-input]').type('new board');
  cy.get('[data-cy=new-board-create]').click();

  // create new list
  cy.get('[data-cy=add-list-input]').clear();
  cy.get('[data-cy=add-list-input]').type('new list{enter}');
  cy.get('[data-cy=list]').should('be.visible');

  // create new card
  cy.get('[data-cy=new-card]').click();
  cy.get('[data-cy=new-card-input]').type('new card{enter}')
  cy.get('[data-cy=card]').should('be.visible');
  cy.get('[data-cy=card]').should('have.length', 1);
  cy.get('[data-cy=card-title]').should('have.text', 'new card');

  // check the checkbox
  cy.get('[data-cy=card-checkbox]').check();
  cy.get('[data-cy=card-checkbox]').should('be.checked');
  cy.get('[data-cy=card-date]').should('have.class', 'completed');

});
