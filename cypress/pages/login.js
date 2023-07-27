// con la herramienta que paso
// locator se saca asi:
// [id="nombre del elemento"]
// [class="nombre del elemento"]
// [data-test="nombre del elemento"]

class loginLocators{
    constructor(){
        this.loginOrRegisterLnk = "[id='customer_menu_top']";
        this.nameFld = "[id='loginFrm_loginname']";
        this.passFld = "[id='loginFrm_password']";
        this.loginBtn = "[title='Login']";
        this.loginErrorMsg = ".alert";
        this.loginSuccessMsg = '#customer_menu_top > :nth-child(1) > .top > .menu_text'
    }
}

export default class login{
    constructor(){
        this.locators = new loginLocators();
    }

    getLoginBtn(){
        return cy.get(this.locators.loginBtn);
    }

    getLoginOrRegisterLnk(){
        return cy.get(this.locators.loginOrRegisterLnk);
    }

    getNameFld(){
        return cy.get(this.locators.nameFld);
    }

    getPassFld(){
        return cy.get(this.locators.passFld);
    }

    getLoginErrorMsg(){
        return cy.get(this.locators.loginErrorMsg);
    }

    getLoginSuccessMsg(){
        return cy.get(this.locators.loginSuccessMsg);
    }
}