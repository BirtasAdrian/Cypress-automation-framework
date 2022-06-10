/// <reference types="Cypress" />

describe("Handling Iframe and Modals", () => {
    
it("Handle webdriveruni iframe and modals", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})

    cy.get('#frame').then($iframe => {
        const body  = $iframe.contents().find('body')
    cy.wrap(body).as('iframe')
    })

    cy.get('@iframe').find('#button-find-out-more').click()
    cy.get('@iframe').find('#myModal').as('modal')

    cy.get('@modal').should(($expectedText) => {

        const text = $expectedText.text()
        expect(text).to.include('Welcome to webdriveruniversity.com')
    })

    cy.get('@modal').contains('Close').click()
})
})