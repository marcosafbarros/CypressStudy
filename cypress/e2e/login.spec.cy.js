import userData from '../fixtures/users/user-data.json'

describe('Orange HRM tests', () => {

  const selectorsList = {
    UsernameField:"[name ='username']",
    PasswordField: "[name='password']",
    LoginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    WrongCredentialAlert: "[role='alert']"
  }


  it('Login - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.UsernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.PasswordField).type(userData.userSuccess.password)
    cy.get(selectorsList.LoginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
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