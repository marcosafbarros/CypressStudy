import userData from '../fixtures/users/user-data.json'

describe('Orange HRM tests', () => {

  const selectorsList = {
    UsernameField:"[name ='username']",
    PasswordField: "[name='password']",
    LoginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    WrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstName: "[name='firstName']",
    middleName: "[name='middleName']",
    lastName: "[name='lastName']",
    genericField: ".oxd-input.oxd-input--active",
    dateCloseButton: ".--close",
    saveButton: "[data-v-8c6e0396=''][type='submit']"
  }


  it.only('user info update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.UsernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.PasswordField).type(userData.userSuccess.password)
    cy.get(selectorsList.LoginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)

    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type('NameTest')
    cy.get(selectorsList.middleName).clear().type('middleTest')
    cy.get(selectorsList.lastName).clear().type('lastTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('IDTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Other TEst')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverTEst')
    cy.get(selectorsList.genericField).eq(6).clear().type('2023-04-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).click()
    cy.get('body').should('contain', 'Successfully Updated')
    
    
    


  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.UsernameField).type(userData.userFail.username)
    cy.get(selectorsList.PasswordField).type(userData.userFail.password)
    cy.get(selectorsList.LoginButton).click()
    cy.get(selectorsList.WrongCredentialAlert)
    cy.get(selectorsList.WrongCredentialAlert).contains('Invalid credentials')
  })
})