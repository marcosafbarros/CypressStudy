class PersonalPage {
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input.oxd-input--active",
            comboBox: ".oxd-select-text--arrow",
            dateCloseButton: ".--close",
            saveButton: "[data-v-8c6e0396=''][type='submit']"
        }
        return selectors
    }

    FillPersonalDetails(firstName, middleName,lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeDetails(EmployeeID,OtherID,DriverLicense,DriverLicenseDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeID)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriverLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(DriverLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    } 

    fillStatus(){
        cy.get(this.selectorsList().comboBox).eq(0).click()
        cy.get(':nth-child(27)').click()
        cy.get(this.selectorsList().comboBox).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    }

    saveForm() {
        cy.get(this.selectorsList().saveButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

}

export default PersonalPage