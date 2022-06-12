import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO' 
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homePage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();
    

    before(function () {
        cy.fixture('example').then(function (data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function () {

        homePage_PO.visitHomepage();
        cy.wait(2000);
        homePage_PO.clickOn_ContactUs_Button();
        // cy.pause();
    });

    //Happy path
    it("Should be able to submit a successful submision via contact us form", () => {

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        contact_Us_PO.ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "I love Automation testing", "h1", "Thank You for your Message!")
    });

    //Negative path
    it("Should not be able to submit a successful submision via contact us form as all fields are required", () => {
        if (Cypress.isBrowser('firefox')) {

        } else {
            contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", "body", "Error: Invalid email address")
        }
    })
})