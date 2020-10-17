describe('My First Test using Cypress', () => {
  it('this test does not do much!', () => {
    //Setting up pre-condition
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Form Authentication').click()
    cy.url().should('include', '/login')
    //Action
    cy.get('#username')
      .type('tomsmith')
    cy.get('#password')
      .type('SuperSecretPassword!')
    cy.get('.radius').click()
    //login assertions
    cy.url().should('include', 'secure')
    cy.get('#flash').should('have.class', 'success')
    cy.get('h2').should('include.text', 'Secure Area')
    //logout assertions
    cy.get('.button').click()
    cy.url().should('include', 'login')
    cy.get('h2').should('include.text', 'Login Page')
    cy.get('.large-4 > div > a').click()
  })
})
