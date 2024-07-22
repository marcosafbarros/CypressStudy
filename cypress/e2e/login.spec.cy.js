import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange hrm test', () => {
    it.only('Login - success', () => {
        loginPage.accessLoginPage()
        loginPage.loginAnyUser(userData.userSuccess.username,userData.userSuccess.password)
        dashboardPage.VerifyDashPage()
    })

    it.only('Login - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginAnyUser(userData.userFail.username,userData.userFail.password)
        loginPage.CheckInvalid()
    })
})
