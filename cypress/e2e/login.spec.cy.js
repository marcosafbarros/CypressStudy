describe('Orange HRM tests', () => {

  const selectorsList = {
    UsernameField:"[name ='username']",
    PasswordField: "[name='password']",
    LoginButton: "[type='submit']",
    SectionTitleBar: '.oxd-topbar-header-breadcrumb-module',
    WrongCredentialAlert: "[role='alert']"
  }

  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.UsernameField).type('Admin')
    cy.get(selectorsList.PasswordField).type('admin123')
    cy.get(selectorsList.LoginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.SectionTitleBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.UsernameField).type('test')
    cy.get(selectorsList.PasswordField).type('test')
    cy.get(selectorsList.LoginButton).click()
    cy.get(selectorsList.WrongCredentialAlert)
    cy.get(selectorsList.WrongCredentialAlert).contains('Invalid credentials')
  })
})