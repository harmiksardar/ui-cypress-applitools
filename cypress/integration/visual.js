describe('rathdowneyogaroom test', () => {
  it('yoga site should work', () => {
    cy.visit('https://rathdowneyogaroom.com.au')
    cy.eyesOpen({
      appName: 'My Yoga Website',
      testName: 'Testing 1680x1050 screensize',
      browser: { width: 1680, height: 1050 }
    });
      cy.eyesCheckWindow('Home screen')

    cy.get(':nth-child(3) > .button').click()
    cy.url().should('include', 'classes')

      cy.eyesCheckWindow('Classes screen')

    cy.get('#buttons06 > li > .button').click()
    cy.url().should('not.include', 'classes')

      cy.eyesCheckWindow('Back to Home screen')

    cy.eyesClose();
  });
});
