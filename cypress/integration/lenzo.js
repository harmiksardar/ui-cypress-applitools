describe('Lenzo New User SignUp Test Suite', () => {
/*
  beforeEach( () => {
    cy.eyesOpen({
      appName: 'Lenzo Marketplace',
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
*/
  it('Lenzo New User SignUp Test Case', () => {
    cy.visit('https://www.lenzo.com.au/welcome/signup/new')
    //cy.eyesCheckWindow('SignUp screen with no values')
    cy.get('#email_user_attributes_username')
      .type('Harmik Lenzo')
    cy.get('#email_user_attributes_email_address')
      .type('harmik@foobar.com')
    cy.get('#email_user_attributes_password')
      .type('Pass1234')
    cy.get('#email_user_attributes_password_confirmation')
      .type('Pass1234')
    cy.get('[type="checkbox"]').check()
    //cy.eyesCheckWindow('SignUp screen with all values entered')
    cy.submit()
    cy.get('.alert alert-success')
      .should('have.value', 'Welcome Harmik Lenzo, take a look around.' )
    //cy.eyesCheckWindow('Welcome screen')
  })

})
