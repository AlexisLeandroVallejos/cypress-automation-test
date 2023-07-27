import loginPage from "../pages/login.js";

class registerLocators{
    constructor(){
        this.register_continueBtn = '#accountFrm > fieldset > .btn';
        this.firstNameFld = '#AccountFrm_firstname';
        this.lastNameFld = '#AccountFrm_lastname';
        this.emailFld = '#AccountFrm_email';
        this.telephoneFld = '#AccountFrm_telephone';
        this.faxFld = '#AccountFrm_fax';
        this.companyFld = '#AccountFrm_company';
        this.address_1Fld = '#AccountFrm_address_1';
        this.address_2Fld = '#AccountFrm_address_2';
        this.cityFld = '#AccountFrm_city';
        this.region_stateDdl = '#AccountFrm_zone_id';
        this.zipCodeFld = '#AccountFrm_postcode';
        this.countryDdl = '#AccountFrm_country_id';
        this.loginNameFld = '#AccountFrm_loginname';
        this.passwordFld = '#AccountFrm_password';
        this.passwordConfirmFld = '#AccountFrm_confirm';
        this.newsletter_subscribe_yes = '#AccountFrm_newsletter1';
        this.newsletter_subscribe_no = '#AccountFrm_newsletter0';
        this.privacyPolicyAgreement = '#AccountFrm_agree';
        this.createAccount_continueBtn = '.col-md-2 > .btn';
        this.createAccount_successMsg = '.mb40 > :nth-child(3)'
    }
}

export default class register{
    constructor(){
        this.loginPage = new loginPage();
        this.locators = new registerLocators();
    }

    getLoginOrRegisterLnk(){
        return this.loginPage.getLoginOrRegisterLnk();
    }

    getRegister_continueBtn(){
        return cy.get(this.locators.register_continueBtn);
    }

    getFirstNameFld(){
        return cy.get(this.locators.firstNameFld);
    }

    getLastNameFld(){
        return cy.get(this.locators.lastNameFld);
    }

    getEmailFld(){
        return cy.get(this.locators.emailFld);
    }

    getTelephoneFld(){
        return cy.get(this.locators.telephoneFld);
    }

    getFaxFld(){
        return cy.get(this.locators.faxFld);
    }
    
    getCompanyFld(){
        return cy.get(this.locators.companyFld);
    }

    getAddress_1Fld(){
        return cy.get(this.locators.address_1Fld);
    }

    getAddress_2Fld(){
        return cy.get(this.locators.address_2Fld);
    }

    getCityFld(){
        return cy.get(this.locators.cityFld);
    }

    getRegion_StateDdl(){
        return cy.get(this.locators.region_stateDdl);
    }

    getZipCodeFld(){
        return cy.get(this.locators.zipCodeFld);
    }

    getCountryDdl(){
        return cy.get(this.locators.countryDdl);
    }

    getLoginNameFld(){
        return cy.get(this.locators.loginNameFld);
    }

    getPasswordFld(){
        return cy.get(this.locators.passwordFld);
    }

    getPasswordConfirmFld(){
        return cy.get(this.locators.passwordConfirmFld);
    }

    getNewsletter_Subscribe_Yes(){
        return cy.get(this.locators.newsletter_subscribe_yes);
    }

    getNewsletter_Subscribe_No(){
        return cy.get(this.locators.newsletter_subscribe_no);
    }

    getPrivacyPolicyAgreement(){
        return cy.get(this.locators.privacyPolicyAgreement);
    }

    getCreateAccount_ContinueBtn(){
        return cy.get(this.locators.createAccount_continueBtn);
    }

    getCreateAccount_SuccessMsg(){
        return cy.get(this.locators.createAccount_successMsg);
    }

}