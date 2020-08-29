describe('rathdowneyogaroom test', () => {
  it('yoga site should work', () => {
    cy.visit('https://rathdowneyogaroom.com.au')
    cy.eyesOpen({
      appName: 'My Yoga Website',
      testName: 'Testing 1680x1050 screensize',
      browser: { width: 1680, height: 1050 }
    });
      cy.eyesCheckWindow('Home screen')
    //cy.get('button').click();
    //cy.eyesCheckWindow('Click!');
    cy.get(':nth-child(3) > .button').click()
    cy.url().should('include', 'classes')

      cy.eyesCheckWindow('Classes screen')

    cy.eyesClose();
  });
});
