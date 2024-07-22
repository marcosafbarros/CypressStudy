class PersonalPage {
    selectorsList(){
        const selectors = {
            firstName: "[name='firstName']",
            middleName: "[name='middleName']",
            lastName: "[name='lastName']",
            genericField: ".oxd-input.oxd-input--active",
            comboBox: ".oxd-select-text--arrow",
            dateCloseButton: ".--close",
            saveButton: "[data-v-8c6e0396=''][type='submit']"
        }
        return selectors
    }

    FillData(){
        cy.get(this.selectorsList().firstName).clear().type('NameTest')
        cy.get(this.selectorsList().middleName).clear().type('middleTest')
        cy.get(this.selectorsList().lastName).clear().type('lastTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('IDTest')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('Other TEst')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriverTEst')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('2023-04-12')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().comboBox).eq(0).click()
        cy.get(':nth-child(27)').click()
        cy.get(this.selectorsList().comboBox).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        cy.get(this.selectorsList().saveButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default PersonalPage