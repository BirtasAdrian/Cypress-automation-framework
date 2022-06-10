/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
    
    it("Upload a file...", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})
    
        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"
            },         
            {
                uploadType: "Input"
            }
         )
         })
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
        })
    });

    it("Upload no file...", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })

    });
})




