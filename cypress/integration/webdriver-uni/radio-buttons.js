/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    before(function() {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    })

    it("Check specific radio button", () => {
        cy.get('#radio-buttons').find("input[type='radio']").first().check();
        cy.get('#radio-buttons').find("input[type='radio']").eq(1).check();
    })

    it.only("Validate the states of specific radio buttons", () => {

        cy.get("input[value='lettuce']").should('not.be.checked')
        cy.get("input[value='pumpkin']").should('be.checked')

        cy.get("input[value='lettuce']").check()
        cy.get("input[value='lettuce']").should('be.checked')
        cy.get("input[value='cabbage']").should('not.be.checked')
        cy.get("input[value='pumpkin']").should('not.be.checked')

        cy.get("input[value='cabbage']").should('be.disabled')
})
})