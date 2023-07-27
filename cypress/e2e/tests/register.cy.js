/// <reference types="cypress" />

import registerPage from "../../pages/register.js";

describe("AutomationTestStore: Register", () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com');
    });

    it('Valid Full Registration', () => {
        const register = new registerPage();
        register.getLoginOrRegisterLnk().click();
        register.getRegister_continueBtn().click();
        register.getFirstNameFld().type("Cosme");
        register.getLastNameFld().type("Fulanito");
        register.getEmailFld().type("cosme_fulanito_volador@gmoil.com");
        register.getTelephoneFld().type("91122222222");
        register.getFaxFld().type("91144444444");
        register.getCompanyFld().type("El bar de Moe");
        register.getCountryDdl().select("Argentina");
        register.getRegion_StateDdl().select("Salta");
        register.getAddress_1Fld().type("Avenida Nunca Camina");
        register.getAddress_2Fld().type("Avenida Siempre Vuela");
        register.getCityFld().type("Springfield");
        register.getZipCodeFld().type("US2222C");
        register.getLoginNameFld().type("el_unico_cosme_fulanito");
        register.getPasswordFld().type("12345678");
        register.getPasswordConfirmFld().type("12345678");
        register.getNewsletter_Subscribe_Yes().check();
        register.getPrivacyPolicyAgreement().check();
        register.getCreateAccount_ContinueBtn().click();
        register.getCreateAccount_SuccessMsg().contains("Your new account has been successfully created")
    });
    
});