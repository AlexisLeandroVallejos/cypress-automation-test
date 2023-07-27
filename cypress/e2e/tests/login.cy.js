/// <reference types="cypress" />

import loginPage from "../../pages/login.js";

describe('AutomationTestStore: Login', () => {
    
    const login = new loginPage();

    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        
    });

    it('Invalid login', () => {
        login.getLoginOrRegisterLnk().click();
        login.getNameFld().type("federico.federique@gmoil.com");
        login.getPassFld().type("12345678");
        login.getLoginBtn().click();
        login.getLoginErrorMsg().contains("Incorrect login or password");
    });

    it('Valid login', () => {
        login.getLoginOrRegisterLnk().click();
        login.getNameFld().type("el_unico_cosme_fulanito");
        login.getPassFld().type("12345678");
        login.getLoginBtn().click();
        login.getLoginSuccessMsg().contains("Welcome back Cosme");
    });
});