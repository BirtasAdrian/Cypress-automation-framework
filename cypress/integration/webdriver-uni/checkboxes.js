/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {

    beforeEach(() => {
        cy.log(Cypress.env("name"));
        cy.navigateTo_webdriverUni_Checkbox_Page();
    });
    
    it("Check and validate checkbox", () => {
    
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        //here we use an alias

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    })

    it("Uncheck and validate checkbox", () => {

    // cy.get('#checkboxes > :nth-child(5) > input').uncheck()
    // cy.get(':nth-child(5) > input').uncheck().uncheck().should('not.be.checked');
    
    cy.get(':nth-child(5) > input').as('option-3')
    cy.get('@option-3').uncheck();
    cy.get('@option-3').uncheck().should('not.be.checked');

    })

    it("Check multiple checkboxes", () => {
        
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');


    })
    })