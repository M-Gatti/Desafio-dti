/// <reference types="Cypress"/>

const randomEmail = Math.random().toString(20).substring(2,15)+"@gmail.com"
export default class AuthenticationPage {
    
    elements = {
        textEmail: () =>  cy.get('#email'),        
        textPasswd: () =>  cy.get('#passwd'),
        btnSubmitLogin: () => cy.get('#SubmitLogin > span'),
        textEmailCreate: () => cy.get('#email_create'),
        btnCreateAccout: () => cy.get('#SubmitCreate > span'),
        genderSelect: () => cy.get('#id_gender1'),
        textFirstName: () =>  cy.get('#customer_firstname'),
        textLastName: () => cy.get('#customer_lastname'),
        selectDay: () => cy.get('#days'),
        selectMonths: () => cy.get('#months'),
        selectYears: () => cy.get('#years'),
        btnRegister: () => cy.get('#submitAccount > span')

    };
  
    fillLogin(email,passwd) {

        this.elements.textEmail().type("atum1@teste.com") 
        this.elements.textPasswd().type("teste1")
        this.elements.btnSubmitLogin().click()  
    }

    fillCreateAccount(email,firstName,lastName,passwd,day,month,year){

        this.elements.textEmailCreate().type(randomEmail)
        this.elements.btnCreateAccout().click()
        this.elements.genderSelect().check()
        this.elements.textFirstName().type("Marcus")
        this.elements.textLastName().type("Junior")
        this.elements.textPasswd().type("teste1")
        this.elements.selectDay().select('14').should('have.value','14')
        this.elements.selectMonths().select('10').should('have.value','10')
        this.elements.selectYears().select('2002').should('have.value','2002')
        this.elements.btnRegister().click()
    }

    existentAccount(email){

        this.elements.textEmailCreate().type("atum1@teste.com") 
        this.elements.btnCreateAccout().click()

    }
}