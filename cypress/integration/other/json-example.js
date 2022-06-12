/// <reference types="Cypress" />

describe("JSON Object", () => { 

    it("JSON Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects =[{"key": "Andrei"}, {"key2": "Florin"}, {"key3": "Mihai"}]

        const users = {
            "firstName": "Adrian",
            "lastName": "Birtas",
            "Age": 25,
            "Students": [
                {
                    "firstName": "Adrian2",
                    "lastName": "Birtas2"
                },

                {
                    "firstName": "Sarah",
                    "lastName": "Parker"
                }
            ]
        }

        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2); //Jones

        cy.log(exampleArrayOfValues[0]); //Sophie
        cy.log(exampleArrayOfValues[1]); //Rose

        cy.log(users.Students[0].lastName); //Birtas2
        cy.log(exampleArrayOfObjects[0].key) //Andrei
        cy.log(exampleArrayOfObjects[1].key2) //Florin
        cy.log(exampleArrayOfObjects[2].key3) //Mihai 
    });
    })