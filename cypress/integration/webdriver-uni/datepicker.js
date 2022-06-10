/// <reference types="Cypress" />

describe("Test Datepicker via webdriveruni", () => {
    
    it("Select date from the datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true})
        cy.get('#datepicker').click();
    
    //  let date = new Date();
    //  date.setDate(date.getDate()) 
    // cy.log(date.getDate()) //get current day i.e 31

    //  let date2 = new Date();
    //   date2.setDate(date2.getDate() + 5)
    // cy.log(date2.getDate()) //get the current day i.e 31 + 5 = 5 of the next month 

        var date = new Date();
        date.setDate(date.getDate() + 365); // with +365 we add a year to the date, 365 = days.

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }

                 })
            })

        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();

        })
    });
