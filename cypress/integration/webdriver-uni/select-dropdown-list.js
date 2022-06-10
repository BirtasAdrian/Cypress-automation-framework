/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    
    it("Select specific values via slect dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('#dropdowm-menu-1').select('Python').contains('Python') 
        //here we select with a value and verify with the same value
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        //here we select with a value and verify with a text
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')  
        //here we select with a text and verify with the same text
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery') 



        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG') 
       
    })

})