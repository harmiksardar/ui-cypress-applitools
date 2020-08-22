describe('rathdowneyogaroom test', () => {
  it('works', () => {
    cy.visit('https://rathdowneyogaroom.com.au');
    cy.eyesOpen({
      appName: 'My Yoga Website',
      testName: 'Visual Validation of RYR Website',
      browser: { width: 800, height: 600 },
    });
    cy.eyesCheckWindow('Main Page');
    //cy.get('button').click();
    //cy.eyesCheckWindow('Click!');
    cy.eyesClose();
  });
});
