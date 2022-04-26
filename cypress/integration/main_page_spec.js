

describe('Main', () => {
  it('As a user, I should be able to visit the page and see a title', () => {
    cy.visit("http://localhost:3000")
    .get('h1')
    .contains('URL Shortener')
  })

  it('As a user, I should be able to visit the page and see a form with input fields', () => {
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

  it('As a user, I should be able to fill out the form and submit it and see a title on the new shortened URL rendered', () => {
    cy.visit("http://localhost:3000")
      .intercept("POST", "http://localhost:3001/api/v1/urls", {
        statusCode: 201,
        body: {
          long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          title: "WHATUP",
        },
      })
      .get('form')
      .should('be.visible')
      .get('input[class="title-input"]')
      .type('WHATUP')
      .get('input[class="url-input"]')
      .type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
      .get('button[class="button-submit"]')
      .click()
      .get('h3[class="card-title"]')
      .last()
      .contains('WHATUP')
      
  })

  it('As a user, I should be able to fill out the form and submit it and see a url on the new shortened URL rendered', () => {
    cy.visit("http://localhost:3000")
      .intercept("POST", "http://localhost:3001/api/v1/urls", {
        statusCode: 201,
        body: {
          long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          title: "WHATUP",
        },
      })
      .get('form')
      .should('be.visible')
      .get('input[class="title-input"]')
      .type('WHATUP')
      .get('input[class="url-input"]')
      .type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
      .get('button[class="button-submit"]')
      .click()
      .get('p[class="long-url"]')
      .last()
      .contains("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")

      
  })

})