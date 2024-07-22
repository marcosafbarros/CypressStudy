import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import PersonalPage from '../pages/personalPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const personalPage = new PersonalPage()

describe('Orange HRM tests', () => {

  it.only('user info update - success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.VerifyDashPage()
    menuPage.ClickMyInfo()

    personalPage.FillData()

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