

describe('Main', () => {
  it('As a user, I should be able to visit the page and see a title', () => {
    cy.visit("http://localhost:3000")
    .get('h1')
    .contains('URL Shortener')
  })

  it('As a user, I should be able to visit the page and see a form', () => {
    cy.visit("http://localhost:3000")
    .get('form')
    .should('be.visible')
    .get('input[class="title-input"]')
    .should('be.visible')
    .get('input[class="url-input"]')
    .should('be.visible')
    .get('button')
    .should('be.visible')
  })

  it('As a user, I should be able to fill out the form', () => {
    cy.visit("http://localhost:3000")
    .get('input[class="title-input"]')
    .should('be.visible')
    .type('Hello')
    .get('input[class="url-input"]')
    .should('be.visible')
    .type('what the f is up dennys')
    .get('input[class="url-input"]')
    .should('have.value', 'what the f is up dennys')

  })

  // it('As a user, I should be able to visit the page and see existing shortened URLs', () => {
  //   cy.visit("http://localhost:3000")
  //   .get('url')
  //   .get("card-title")
  // })
})