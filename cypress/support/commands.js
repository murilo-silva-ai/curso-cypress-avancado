import 'cypress-localstorage-commands'

Cypress.Commands.add('assertLoadingIsShownAndHidden', () => {
  cy.contains('Loading ...').should('be.visible')
  cy.contains('Loading ...').should('not.exist')
})

Cypress.Commands.add('assertLoadingIsShownAndHidden_fixed', (page) => {
  cy.intercept({
    method: 'GET',
    pathname: '**/search',
    query: {
      query: 'React',
      page: `${page}`
    }
  }).as('loadingPage')
  cy.visit('/')
  cy.wait('@loadingPage')
})
