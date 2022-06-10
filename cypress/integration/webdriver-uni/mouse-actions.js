/// <reference types="Cypress" />

describe("Test mouse actions", () => {
    
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

    })

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("http://www.webdriveruniversity.com"); 
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        cy.get('#draggable').trigger('mousedown', {which: 1});

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})

    })

    it("I should be able to perform a double mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com"); 
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        cy.get('#double-click').dblclick();
    })

    it("I should be able hold down the left mouse click button on a give element", () => {
        cy.visit("http://www.webdriveruniversity.com"); 
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        // which:1 help use to click on the center of our element.
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
            expect($element).to.have.css('font-size', '30px')
        })

    })
})