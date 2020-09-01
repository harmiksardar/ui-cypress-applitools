describe('rathdowneyogaroom test', () => {
  it('yoga site should work', () => {
    cy.visit('https://rathdowneyogaroom.com.au')
    cy.eyesOpen({
      appName: 'My Yoga Website',
      testName: 'Cross Browser + Device',
      browser: [{ width: 1680, height: 1050, name: 'firefox' },
                { width: 1024, height: 768, name: 'chrome' },
                { deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' }
               ]
    });

      cy.eyesCheckWindow('Home screen')

    cy.get(':nth-child(3) > .button').click()
    cy.url().should('include', 'classes')

      cy.eyesCheckWindow('Classes screen')

    cy.get('#buttons06 > li > .button').click()
    cy.url().should('not.include', 'classes')

      cy.eyesCheckWindow('Back to Home screen')

    cy.eyesClose()
  });
});
