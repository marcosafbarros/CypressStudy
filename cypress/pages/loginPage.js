class LoginPage {
    selectorsList() {
        const selectors = {
            UsernameField:"[name ='username']",
            PasswordField: "[name='password']",
            LoginButton: "[type='submit']",
            WrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().UsernameField).type(username)
        cy.get(this.selectorsList().PasswordField).type(password)
        cy.get(this.selectorsList().LoginButton).click()
    }
}

export default LoginPage