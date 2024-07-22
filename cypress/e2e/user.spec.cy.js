import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import PersonalPage from '../pages/personalPage.js'

const Chance = require('chance');

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const personalPage = new PersonalPage()
const chance = new Chance();

describe('Orange HRM tests', () => {

  it.only('user info update - success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginAnyUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.VerifyDashPage()
    menuPage.ClickMyInfo()

    personalPage.FillPersonalDetails(chance.first(),chance.word(),chance.last())
    personalPage.fillEmployeDetails(chance.natural({ min: 1, max: 10 }),chance.natural({ min: 1, max: 10 }),chance.natural({ min: 1, max: 10 }), '2023-04-12')
    personalPage.fillStatus()
    personalPage.saveForm()

  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyUser(userData.userFail.username,userData.userFail.password)
    loginPage.CheckInvalid()
  })
})