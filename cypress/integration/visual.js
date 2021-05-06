describe('YogaRoom E2E Test Suite', () => {

  beforeEach( () => {
    cy.eyesOpen({
      appName: 'My Yoga App',
      testName: 'Cross Browser/Viewport/Device',
      browser: [{ width: 1366, height: 768, name: 'firefox' },
                { width: 1920, height: 1080, name: 'chrome' },
                { width: 1440, height: 900, name: 'safari' },
                { deviceName: 'iPhone X', screenOrientation: 'portrait', name: 'chrome' }]
             })
           })

  afterEach( () => {
    cy.eyesClose()
    })

  it('YogaRoom E2E Test Case', () => {
    cy.visit('https://rathdowneyogaroom.com.au')
    cy.get('#text01')
      .should('contain', 'RATHDOWNE YOGA ROOM')
    cy.get(':nth-child(2) > .button').click()
    cy.url().should('include', 'classes')
    cy.eyesCheckWindow('Classes screen')
    cy.get('#buttons05 > li > .button').click()
    cy.url().should('not.include', 'classes')
    cy.eyesCheckWindow('Back to Home screen')
  })

})
